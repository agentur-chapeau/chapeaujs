import { onReady } from "./on_ready.js";
import * as _ from "lodash-es";

export class AsyncForm {
  constructor(el) {
    if (el.dataset.refAsyncForm) {
      return AsyncForm.refs[el.dataset.refAsyncForm];
    }

    this.ref = Math.random();
    AsyncForm.refs[this.ref] = this;
    el.dataset.refAsyncForm = this.ref;

    this.el = el;

    this.form = el.querySelector("form");
    this.formSuccess = el.querySelector(".w-form-done");
    this.formFail = el.querySelector(".w-form-fail");

    this.submitButton = el.querySelector('[type="submit"]');
    this.buttonText = this.getSubmitText();
    this.waitingText = this.submitButton.dataset.wait;

    /** @type {BeforeSubmitHandler[]} */
    this.beforeSubmitHandlers = [];
    /** @type {PayloadHandler[]} */
    this.payloadHandlers = [];
    /** @type {InputHandler[]} */
    this.inputHandlers = [];
    /** @type {StateHandler[]} */
    this.onStateHandlers = [];

    this.el.addEventListener("submit", (e) => this.submit(e));
  }

  /**
   * @callback BeforeSubmitHandler
   * @returns {bool} if false then the form is not submitted
   */

  /**
   * Gets called before the form starts to submit
   * Allows to cancel the submit by returning false
   * @param {BeforeSubmitHandler} fn
   */
  set onBeforeSubmit(fn) {
    this.beforeSubmitHandlers.push(fn);
  }

  /**
   * @callback PayloadHandler
   * @param {Object} payload The current payload
   * @returns {Object} The new payload
   */

  /**
   * Allows for adding custom value to the payload
   * Gets called before form elements are converted
   * All handlers will be called in the order they were registered
   * @param {PayloadHandler} fn
   */
  set onPayload(fn) {
    this.payloadHandlers.push(fn);
  }

  /**
   * @callback InputHandler
   * @param {HTMLElement} input The input element
   * @param {String} value The current value
   * @returns {String | Promise<String>} The new value
   */

  /**
   * Allows for transforming the values of the form elements
   * All handlers will be called in the order they were registered
   * Can be async
   * @param {InputHandler} fn
   */
  set onInput(fn) {
    this.inputHandlers.push(fn);
  }

  /**
   * @callback StateHandler
   * @param {'loading' | 'success' | 'error'} state
   */

  /**
   * Gets called when the forms state changes
   * @param {StateHandler} fn
   */
  set onState(fn) {
    this.onStateHandlers.push(fn);
  }

  async submit(event) {
    event.preventDefault();

    try {
      const shouldSubmit = this.beforeSubmitHandlers.reduce(
        (prev, handler) => handler() && prev,
        true,
      );
      if (!shouldSubmit) return;

      this.setState("loading");

      const payload = await this.createPayload();
      const url = this.form.action;
      const method = this.form.method;

      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(url, options);

      if (response.ok) {
        this.setState("success");
      } else {
        this.setState("error");
      }
    } catch (err) {
      console.error(err);
      this.setState("error");
    }
  }

  async createPayload() {
    let payload = this.payloadHandlers.reduce(
      (payload, handler) => handler(payload),
      {},
    );

    const inputElements = this.elements.filter((el) => el.name !== "");
    for (const input of inputElements) {
      let name = input.name;
      let value = input.value;

      if (input.type === "checkbox") {
        value = input.checked;
      }

      if (input.type === "radio" && !input.checked) {
        value = null;
      }

      const checkboxGroup = input.dataset.checkboxGroup;
      if (checkboxGroup !== undefined) {
        name = checkboxGroup;

        if (!input.checked) {
          value = null;
        } else {
          value = [input.name];
        }
      }

      for (const inputHandler of this.inputHandlers) {
        value = await inputHandler(input, value);
      }

      if (value === null) {
        continue;
      }

      let pathElements = [name];
      const group = input.dataset.group;
      if (group) {
        pathElements.unshift(group);
      }

      const path = pathElements.join(".");
      const existingValue = _.get(payload, path);
      if (typeof existingValue !== "undefined") {
        value = [existingValue, value].flat();
      }

      _.set(payload, path, value);
    }

    return payload;
  }

  /**
   * @param {'loading' | 'success' | 'error'} state
   */
  setState(state) {
    switch (state) {
      case "loading":
        this.form.style.display = null;
        this.formSuccess.style.display = null;
        this.formFail.style.display = null;
        this.elements.forEach((el) => (el.disabled = true));
        this.setSubmitText(this.waitingText);
        break;
      case "success":
        this.form.style.display = "none";
        this.formSuccess.style.display = "block";
        this.formFail.style.display = "none";
        this.elements.forEach((el) => (el.disabled = false));
        this.setSubmitText(this.buttonText);

        this.form.reset();
        this.formSuccess.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "error":
        this.form.style.display = null;
        this.formSuccess.style.display = null;
        this.formFail.style.display = "block";
        this.elements.forEach((el) => (el.disabled = false));
        this.setSubmitText(this.buttonText);
        break;
      default:
        break;
    }

    this.onStateHandlers.forEach((handler) => handler(state));
  }

  getSubmitText() {
    if (this.submitButton instanceof HTMLInputElement) {
      return this.submitButton.value;
    } else {
      return this.submitButton.textContent;
    }
  }

  setSubmitText(value) {
    if (this.submitButton instanceof HTMLInputElement) {
      this.submitButton.value = value;
    } else {
      this.submitButton.textContent = value;
    }
  }

  get elements() {
    return Array.from(this.form.elements);
  }
}

AsyncForm.refs = {};

window.AsyncForm = AsyncForm;

onReady(() => {
  Array.from(document.querySelectorAll("[c-async-form]")).forEach(
    (el) => new AsyncForm(el),
  );
});
