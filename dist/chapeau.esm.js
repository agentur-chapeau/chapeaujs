import "./chapeau.esm.css";
import {get as $2SSWc$get, set as $2SSWc$set} from "lodash-es";


      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirec7c1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirec7c1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("axjWb", function(module, exports) {
module.exports = import("./filepond.63b8299b.js").then(()=>parcelRequire("3ggSV"));

});

function $9207850d2d24351c$export$ef1639a4b889352d(callback) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", callback);
    else callback();
}



class $e9df4ff84b385988$export$a9333587aafd92ed {
    constructor(el){
        if (el.dataset.refAsyncForm) return $e9df4ff84b385988$export$a9333587aafd92ed.refs[el.dataset.refAsyncForm];
        this.ref = Math.random();
        $e9df4ff84b385988$export$a9333587aafd92ed.refs[this.ref] = this;
        el.dataset.refAsyncForm = this.ref;
        this.el = el;
        this.form = el.querySelector("form");
        this.formSuccess = el.querySelector(".w-form-done");
        this.formFail = el.querySelector(".w-form-fail");
        this.submitButton = el.querySelector('[type="submit"]');
        this.buttonText = this.getSubmitText();
        this.waitingText = this.submitButton.dataset.wait;
        /** @type {BeforeSubmitHandler[]} */ this.beforeSubmitHandlers = [];
        /** @type {PayloadHandler[]} */ this.payloadHandlers = [];
        /** @type {InputHandler[]} */ this.inputHandlers = [];
        /** @type {StateHandler[]} */ this.onStateHandlers = [];
        this.el.addEventListener("submit", (e)=>this.submit(e));
    }
    /**
   * @callback BeforeSubmitHandler
   * @returns {bool} if false then the form is not submitted
   */ /**
   * Gets called before the form starts to submit
   * Allows to cancel the submit by returning false
   * @param {BeforeSubmitHandler} fn
   */ set onBeforeSubmit(fn) {
        this.beforeSubmitHandlers.push(fn);
    }
    /**
   * @callback PayloadHandler
   * @param {Object} payload The current payload
   * @returns {Object} The new payload
   */ /**
   * Allows for adding custom value to the payload
   * Gets called before form elements are converted
   * All handlers will be called in the order they were registered
   * @param {PayloadHandler} fn
   */ set onPayload(fn) {
        this.payloadHandlers.push(fn);
    }
    /**
   * @callback InputHandler
   * @param {HTMLElement} input The input element
   * @param {String} value The current value
   * @returns {String | Promise<String>} The new value
   */ /**
   * Allows for transforming the values of the form elements
   * All handlers will be called in the order they were registered
   * Can be async
   * @param {InputHandler} fn
   */ set onInput(fn) {
        this.inputHandlers.push(fn);
    }
    /**
   * @callback StateHandler
   * @param {'loading' | 'success' | 'error'} state
   */ /**
   * Gets called when the forms state changes
   * @param {StateHandler} fn
   */ set onState(fn) {
        this.onStateHandlers.push(fn);
    }
    async submit(event) {
        event.preventDefault();
        try {
            const shouldSubmit = this.beforeSubmitHandlers.reduce((prev, handler)=>handler() && prev, true);
            if (!shouldSubmit) return;
            this.setState("loading");
            const payload = await this.createPayload();
            const url = this.form.action;
            const method = this.form.method;
            const options = {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            };
            const response = await fetch(url, options);
            if (response.ok) this.setState("success");
            else this.setState("error");
        } catch (err) {
            console.error(err);
            this.setState("error");
        }
    }
    async createPayload() {
        let payload = this.payloadHandlers.reduce((payload, handler)=>handler(payload), {});
        const inputElements = this.elements.filter((el)=>el.name !== "");
        for (const input of inputElements){
            const name = input.name;
            let value = input.value;
            if (input.type === "checkbox") value = input.checked;
            if (input.type === "radio" && !input.checked) value = null;
            for (const inputHandler of this.inputHandlers)value = await inputHandler(input, value);
            if (value === null) continue;
            const group = input.dataset.group;
            const path = [
                group,
                name
            ].filter((item)=>item); // Remove group if undefined
            const existingValue = $2SSWc$get(payload, path);
            if (typeof existingValue !== "undefined") value = [
                existingValue,
                value
            ].flat();
            $2SSWc$set(payload, path, value);
        }
        return payload;
    }
    /**
   * @param {'loading' | 'success' | 'error'} state
   */ setState(state) {
        switch(state){
            case "loading":
                this.form.style.display = null;
                this.formSuccess.style.display = null;
                this.formFail.style.display = null;
                this.elements.forEach((el)=>el.disabled = true);
                this.setSubmitText(this.waitingText);
                break;
            case "success":
                this.form.style.display = "none";
                this.formSuccess.style.display = "block";
                this.formFail.style.display = "none";
                this.elements.forEach((el)=>el.disabled = false);
                this.setSubmitText(this.buttonText);
                this.form.reset();
                this.formSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                break;
            case "error":
                this.form.style.display = null;
                this.formSuccess.style.display = null;
                this.formFail.style.display = "block";
                this.elements.forEach((el)=>el.disabled = false);
                this.setSubmitText(this.buttonText);
                break;
            default:
                break;
        }
        this.onStateHandlers.forEach((handler)=>handler(state));
    }
    getSubmitText() {
        if (this.submitButton instanceof HTMLInputElement) return this.submitButton.value;
        else return this.submitButton.textContent;
    }
    setSubmitText(value) {
        if (this.submitButton instanceof HTMLInputElement) this.submitButton.value = value;
        else this.submitButton.textContent = value;
    }
    get elements() {
        return Array.from(this.form.elements);
    }
}
$e9df4ff84b385988$export$a9333587aafd92ed.refs = {};
window.AsyncForm = $e9df4ff84b385988$export$a9333587aafd92ed;
(0, $9207850d2d24351c$export$ef1639a4b889352d)(()=>{
    Array.from(document.querySelectorAll("[c-async-form]")).forEach((el)=>new $e9df4ff84b385988$export$a9333587aafd92ed(el));
});






class $331aef3d74f8d09f$export$d92f83d2e295fa99 {
    constructor(el){
        if (el.dataset.refFileUpload) return $331aef3d74f8d09f$export$d92f83d2e295fa99.refs[el.dataset.refFileUpload];
        this.ref = Math.random();
        $331aef3d74f8d09f$export$d92f83d2e295fa99.refs[this.ref] = this;
        el.dataset.refFileUpload = this.ref;
        this.inputs = el.querySelectorAll('input[type="file"]');
        this.fileponds = {};
        this.headers = {
            Authorization: "pFdRC99ihTG!C%BQB6EJKjc!n%"
        };
        document.addEventListener("FilePond:loaded", ()=>this.onload());
        const asyncForm = new (0, $e9df4ff84b385988$export$a9333587aafd92ed)(el.closest("[c-async-form]"));
        asyncForm.onBeforeSubmit = ()=>this.beforeSubmit();
        asyncForm.onPayload = (payload)=>this.onPayload(payload);
        asyncForm.onInput = async (input, value)=>await this.inputHandler(input, value);
        (parcelRequire("axjWb")).then((module)=>{
            Object.assign(globalThis, module);
        });
    }
    onload() {
        FilePond.registerPlugin(FilePondPluginFileValidateType);
        FilePond.registerPlugin(FilePondPluginFileValidateSize);
        const options = {
            server: {
                url: "https://formupload.agentur-chapeau.de/",
                process: {
                    url: "process",
                    headers: this.headers
                },
                revert: {
                    url: "revert",
                    headers: this.headers
                },
                restore: null,
                load: null,
                fetch: null
            },
            credits: false,
            ...$331aef3d74f8d09f$var$defaultLabels,
            ...window.c_fileupload_options
        };
        for (const input of this.inputs)this.fileponds[input.name] = FilePond.create(input, {
            ...options,
            maxFiles: input.dataset.maxFiles || null,
            maxFileSize: input.dataset.maxFileSize || null,
            maxTotalFileSize: input.dataset.maxTotalFileSize || null
        });
    }
    beforeSubmit() {
        for (const [_, filepond] of Object.entries(this.fileponds))if (!(filepond.status == FilePond.Status.EMPTY || filepond.status == FilePond.Status.READY)) {
            alert("Es sind noch nicht alle Dateien hochgeladen!");
            return false;
        }
        return true;
    }
    onPayload(payload) {
        for (const input of this.inputs)if (input.multiple) payload[input.name] = [];
        return payload;
    }
    async inputHandler(input, value) {
        if (!input.closest(".filepond--root")) return value;
        if (!input.closest(".filepond--data")) return null;
        const filepond = this.fileponds[input.name];
        const fileObject = filepond.getFiles().find((f)=>f.serverId === value);
        const res = await fetch(`${filepond.server.url}finish`, {
            method: "POST",
            body: value,
            headers: this.headers
        });
        if (!res.ok) throw new Error("Upload could not finish ", res);
        const fileUrl = await res.text();
        const fileName = fileObject.filename;
        const fileSize = fileObject.fileSize;
        return {
            url: fileUrl,
            name: fileName,
            size: fileSize
        };
    }
}
$331aef3d74f8d09f$export$d92f83d2e295fa99.refs = {};
window.FileUpload = $331aef3d74f8d09f$export$d92f83d2e295fa99;
(0, $9207850d2d24351c$export$ef1639a4b889352d)(()=>{
    Array.from(document.querySelectorAll("[c-file-upload]")).forEach((el)=>new $331aef3d74f8d09f$export$d92f83d2e295fa99(el));
});
const $331aef3d74f8d09f$var$defaultLabels = {
    labelIdle: `Dateien hierher ziehen oder <span class="filepond--label-action">ausw\xe4hlen</span>`,
    labelInvalidField: "Feld enth\xe4lt ung\xfcltige Dateien",
    labelFileWaitingForSize: "Auf Gr\xf6\xdfe warten",
    labelFileSizeNotAvailable: "Gr\xf6\xdfe nicht verf\xfcgbar",
    labelFileLoading: "Laden",
    labelFileLoadError: "Fehler beim Laden",
    labelFileProcessing: "Hochladen",
    labelFileProcessingComplete: "Hochgeladen",
    labelFileProcessingAborted: "Hochladen abgebrochen",
    labelFileProcessingError: "Fehler beim Hochladen",
    labelFileProcessingRevertError: "Fehler beim Entfernen",
    labelFileRemoveError: "Fehler beim L\xf6schen",
    labelTapToCancel: "Tippen zum Abbrechen ",
    labelTapToRetry: "Tippen zum Wiederholen",
    labelTapToUndo: "Tippen zum Entfernen",
    labelButtonRemoveItem: "Entfernen",
    labelButtonAbortItemLoad: "Abbrechen",
    labelButtonRetryItemLoad: "Wiederholen",
    labelButtonAbortItemProcessing: "Abbrechen",
    labelButtonUndoItemProcessing: "Entfernen",
    labelButtonRetryItemProcessing: "Wiederholen",
    labelButtonProcessItem: "Hochladen",
    labelMaxFileSizeExceeded: "Datei ist zu gro\xdf",
    labelMaxFileSize: "Maximale Dateigr\xf6\xdfe betr\xe4gt {filesize}",
    labelMaxTotalFileSizeExceeded: "Maximale Gesamtgr\xf6\xdfe \xfcberschritten",
    labelMaxTotalFileSize: "Maximale Gesamtgr\xf6\xdfe betr\xe4gt {filesize}",
    labelFileTypeNotAllowed: "Ung\xfcltiger Dateityp",
    fileValidateTypeLabelExpectedTypes: "G\xfcltige Dateitypen: {allButLastType} und {lastType}",
    fileValidateTypeLabelExpectedTypesMap: {
        "image/*": "Bilddateien",
        "image/png": ".png",
        "image/jpg": ".jpg",
        "image/jpeg": ".jpeg",
        "application/pdf": ".pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"
    }
};


const $c38b013c361dbfdf$var$Chapeau = {
    AsyncForm: $e9df4ff84b385988$export$a9333587aafd92ed,
    FileUpload: $331aef3d74f8d09f$export$d92f83d2e295fa99
};
window.Chapeau = $c38b013c361dbfdf$var$Chapeau;
var $c38b013c361dbfdf$export$2e2bcd8739ae039 = $c38b013c361dbfdf$var$Chapeau;


export {$c38b013c361dbfdf$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=chapeau.esm.js.map
