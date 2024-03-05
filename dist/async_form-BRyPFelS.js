function l(a) {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : a();
}
class r {
  constructor(t) {
    if (t.dataset.refAsyncForm)
      return r.refs[t.dataset.refAsyncForm];
    this.ref = Math.random(), r.refs[this.ref] = this, t.dataset.refAsyncForm = this.ref, this.el = t, this.form = t.querySelector("form"), this.formSuccess = t.querySelector(".w-form-done"), this.formFail = t.querySelector(".w-form-fail"), this.submitButton = t.querySelector('[type="submit"]'), this.buttonText = this.getSubmitText(), this.waitingText = this.submitButton.dataset.wait, this.beforeSubmitHandlers = [], this.payloadHandlers = [], this.inputHandlers = [], this.onStateHandlers = [], this.el.addEventListener("submit", (e) => this.submit(e));
  }
  set onBeforeSubmit(t) {
    this.beforeSubmitHandlers.push(t);
  }
  set onPayload(t) {
    this.payloadHandlers.push(t);
  }
  set onInput(t) {
    this.inputHandlers.push(t);
  }
  set onState(t) {
    this.onStateHandlers.push(t);
  }
  async submit(t) {
    t.preventDefault();
    try {
      if (!this.beforeSubmitHandlers.reduce((o, n) => n() && o, !0))
        return;
      this.setState("loading");
      const e = await this.createPayload(), s = this.form.action, i = { method: this.form.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) };
      (await fetch(s, i)).ok ? this.setState("success") : this.setState("error");
    } catch (e) {
      console.error(e), this.setState("error");
    }
  }
  async createPayload() {
    let t = this.payloadHandlers.reduce((s, i) => i(s), {});
    const e = this.elements.filter((s) => s.name !== "");
    for (const s of e) {
      const i = s.name;
      let o = s.value;
      for (const n of this.inputHandlers)
        o = await n(s, o);
      if (o !== null && (s.type === "checkbox" && (o = s.checked), !(s.type === "radio" && !s.checked))) {
        if (typeof t[i] < "u") {
          Array.isArray(t[i]) || (t[i] = [t[i]]), t[i].push(o);
          continue;
        }
        t[i] = o;
      }
    }
    return t;
  }
  setState(t) {
    switch (t) {
      case "loading":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = null, this.elements.forEach((e) => e.disabled = !0), this.setSubmitText(this.waitingText);
        break;
      case "success":
        this.form.style.display = "none", this.formSuccess.style.display = "block", this.formFail.style.display = "none", this.elements.forEach((e) => e.disabled = !1), this.setSubmitText(this.buttonText), this.form.reset(), this.formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "error":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = "block", this.elements.forEach((e) => e.disabled = !1), this.setSubmitText(this.buttonText);
        break;
    }
    this.onStateHandlers.forEach((e) => e(t));
  }
  getSubmitText() {
    return this.submitButton instanceof HTMLInputElement ? this.submitButton.value : this.submitButton.textContent;
  }
  setSubmitText(t) {
    this.submitButton instanceof HTMLInputElement ? this.submitButton.value = t : this.submitButton.textContent = t;
  }
  get elements() {
    return Array.from(this.form.elements);
  }
}
r.refs = {}, window.AsyncForm = r, l(() => {
  Array.from(document.querySelectorAll("[c-async-form]")).forEach((a) => new r(a));
});
export {
  r as A,
  l as o
};
//# sourceMappingURL=async_form-BRyPFelS.js.map
