function j(e) {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
var L = typeof global == "object" && global && global.Object === Object && global, R = typeof self == "object" && self && self.Object === Object && self, v = L || R || Function("return this")(), p = v.Symbol, H = Object.prototype, G = H.hasOwnProperty, U = H.toString, b = p ? p.toStringTag : void 0;
function q(e) {
  var t = G.call(e, b), r = e[b];
  try {
    e[b] = void 0;
    var n = !0;
  } catch {
  }
  var i = U.call(e);
  return n && (t ? e[b] = r : delete e[b]), i;
}
var V = Object.prototype, K = V.toString;
function W(e) {
  return K.call(e);
}
var Y = "[object Null]", J = "[object Undefined]", C = p ? p.toStringTag : void 0;
function $(e) {
  return e == null ? e === void 0 ? J : Y : C && C in Object(e) ? q(e) : W(e);
}
function X(e) {
  return e != null && typeof e == "object";
}
var Z = "[object Symbol]";
function F(e) {
  return typeof e == "symbol" || X(e) && $(e) == Z;
}
function Q(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var P = Array.isArray, k = 1 / 0, O = p ? p.prototype : void 0, z = O ? O.toString : void 0;
function M(e) {
  if (typeof e == "string")
    return e;
  if (P(e))
    return Q(e, M) + "";
  if (F(e))
    return z ? z.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -k ? "-0" : t;
}
function g(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ee = "[object AsyncFunction]", te = "[object Function]", re = "[object GeneratorFunction]", ne = "[object Proxy]";
function ie(e) {
  if (!g(e))
    return !1;
  var t = $(e);
  return t == te || t == re || t == ee || t == ne;
}
var T = v["__core-js_shared__"], I = function() {
  var e = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function oe(e) {
  return !!I && I in e;
}
var ae = Function.prototype, se = ae.toString;
function le(e) {
  if (e != null) {
    try {
      return se.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ce = /[\\^$.*+?()[\]{}|]/g, ue = /^\[object .+?Constructor\]$/, de = Function.prototype, fe = Object.prototype, he = de.toString, pe = fe.hasOwnProperty, me = RegExp(
  "^" + he.call(pe).replace(ce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function be(e) {
  if (!g(e) || oe(e))
    return !1;
  var t = ie(e) ? me : ue;
  return t.test(le(e));
}
function ye(e, t) {
  return e == null ? void 0 : e[t];
}
function x(e, t) {
  var r = ye(e, t);
  return be(r) ? r : void 0;
}
var A = function() {
  try {
    var e = x(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ge = 9007199254740991, Se = /^(?:0|[1-9]\d*)$/;
function _e(e, t) {
  var r = typeof e;
  return t = t ?? ge, !!t && (r == "number" || r != "symbol" && Se.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Te(e, t, r) {
  t == "__proto__" && A ? A(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function B(e, t) {
  return e === t || e !== e && t !== t;
}
var ve = Object.prototype, Fe = ve.hasOwnProperty;
function Pe(e, t, r) {
  var n = e[t];
  (!(Fe.call(e, t) && B(n, r)) || r === void 0 && !(t in e)) && Te(e, t, r);
}
var xe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, we = /^\w*$/;
function Ee(e, t) {
  if (P(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || F(e) ? !0 : we.test(e) || !xe.test(e) || t != null && e in Object(t);
}
var y = x(Object, "create");
function Ce() {
  this.__data__ = y ? y(null) : {}, this.size = 0;
}
function Oe(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ze = "__lodash_hash_undefined__", Ie = Object.prototype, Ae = Ie.hasOwnProperty;
function je(e) {
  var t = this.__data__;
  if (y) {
    var r = t[e];
    return r === ze ? void 0 : r;
  }
  return Ae.call(t, e) ? t[e] : void 0;
}
var He = Object.prototype, $e = He.hasOwnProperty;
function Me(e) {
  var t = this.__data__;
  return y ? t[e] !== void 0 : $e.call(t, e);
}
var Be = "__lodash_hash_undefined__";
function Ne(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = y && t === void 0 ? Be : t, this;
}
function d(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
d.prototype.clear = Ce;
d.prototype.delete = Oe;
d.prototype.get = je;
d.prototype.has = Me;
d.prototype.set = Ne;
function De() {
  this.__data__ = [], this.size = 0;
}
function S(e, t) {
  for (var r = e.length; r--; )
    if (B(e[r][0], t))
      return r;
  return -1;
}
var Le = Array.prototype, Re = Le.splice;
function Ge(e) {
  var t = this.__data__, r = S(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Re.call(t, r, 1), --this.size, !0;
}
function Ue(e) {
  var t = this.__data__, r = S(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function qe(e) {
  return S(this.__data__, e) > -1;
}
function Ve(e, t) {
  var r = this.__data__, n = S(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function m(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = De;
m.prototype.delete = Ge;
m.prototype.get = Ue;
m.prototype.has = qe;
m.prototype.set = Ve;
var Ke = x(v, "Map");
function We() {
  this.size = 0, this.__data__ = {
    hash: new d(),
    map: new (Ke || m)(),
    string: new d()
  };
}
function Ye(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function _(e, t) {
  var r = e.__data__;
  return Ye(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Je(e) {
  var t = _(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Xe(e) {
  return _(this, e).get(e);
}
function Ze(e) {
  return _(this, e).has(e);
}
function Qe(e, t) {
  var r = _(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function h(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
h.prototype.clear = We;
h.prototype.delete = Je;
h.prototype.get = Xe;
h.prototype.has = Ze;
h.prototype.set = Qe;
var ke = "Expected a function";
function w(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ke);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var c = e.apply(this, n);
    return r.cache = o.set(i, c) || o, c;
  };
  return r.cache = new (w.Cache || h)(), r;
}
w.Cache = h;
var et = 500;
function tt(e) {
  var t = w(e, function(n) {
    return r.size === et && r.clear(), n;
  }), r = t.cache;
  return t;
}
var rt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nt = /\\(\\)?/g, it = tt(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rt, function(r, n, i, o) {
    t.push(i ? o.replace(nt, "$1") : n || r);
  }), t;
});
function ot(e) {
  return e == null ? "" : M(e);
}
function N(e, t) {
  return P(e) ? e : Ee(e, t) ? [e] : it(ot(e));
}
var at = 1 / 0;
function D(e) {
  if (typeof e == "string" || F(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -at ? "-0" : t;
}
function st(e, t) {
  t = N(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[D(t[r++])];
  return r && r == n ? e : void 0;
}
function lt(e, t, r) {
  var n = e == null ? void 0 : st(e, t);
  return n === void 0 ? r : n;
}
function ct(e, t, r, n) {
  if (!g(e))
    return e;
  t = N(t, e);
  for (var i = -1, o = t.length, c = o - 1, l = e; l != null && ++i < o; ) {
    var a = D(t[i]), s = r;
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return e;
    if (i != c) {
      var E = l[a];
      s = void 0, s === void 0 && (s = g(E) ? E : _e(t[i + 1]) ? [] : {});
    }
    Pe(l, a, s), l = l[a];
  }
  return e;
}
function ut(e, t, r) {
  return e == null ? e : ct(e, t, r);
}
class u {
  constructor(t) {
    if (t.dataset.refAsyncForm)
      return u.refs[t.dataset.refAsyncForm];
    this.ref = Math.random(), u.refs[this.ref] = this, t.dataset.refAsyncForm = this.ref, this.el = t, this.form = t.querySelector("form"), this.formSuccess = t.querySelector(".w-form-done"), this.formFail = t.querySelector(".w-form-fail"), this.submitButton = t.querySelector('[type="submit"]'), this.buttonText = this.getSubmitText(), this.waitingText = this.submitButton.dataset.wait, this.beforeSubmitHandlers = [], this.payloadHandlers = [], this.inputHandlers = [], this.onStateHandlers = [], this.el.addEventListener("submit", (r) => this.submit(r));
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
  set onBeforeSubmit(t) {
    this.beforeSubmitHandlers.push(t);
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
  set onPayload(t) {
    this.payloadHandlers.push(t);
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
  set onInput(t) {
    this.inputHandlers.push(t);
  }
  /**
   * @callback StateHandler
   * @param {'loading' | 'success' | 'error'} state
   */
  /**
   * Gets called when the forms state changes
   * @param {StateHandler} fn
   */
  set onState(t) {
    this.onStateHandlers.push(t);
  }
  async submit(t) {
    t.preventDefault();
    try {
      if (!this.beforeSubmitHandlers.reduce(
        (a, s) => s() && a,
        !0
      )) return;
      this.setState("loading");
      const n = await this.createPayload(), i = this.form.action, c = {
        method: this.form.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(n)
      };
      (await fetch(i, c)).ok ? this.setState("success") : this.setState("error");
    } catch (r) {
      console.error(r), this.setState("error");
    }
  }
  async createPayload() {
    let t = this.payloadHandlers.reduce(
      (n, i) => i(n),
      {}
    );
    const r = this.elements.filter((n) => n.name !== "");
    for (const n of r) {
      const i = n.name;
      let o = n.value;
      n.type === "checkbox" && (o = n.checked), n.type === "radio" && !n.checked && (o = null);
      for (const s of this.inputHandlers)
        o = await s(n, o);
      if (o === null)
        continue;
      const l = [n.dataset.group, i].filter((s) => s), a = lt(t, l);
      typeof a < "u" && (o = [a, o].flat()), ut(t, l, o);
    }
    return t;
  }
  /**
   * @param {'loading' | 'success' | 'error'} state
   */
  setState(t) {
    switch (t) {
      case "loading":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = null, this.elements.forEach((r) => r.disabled = !0), this.setSubmitText(this.waitingText);
        break;
      case "success":
        this.form.style.display = "none", this.formSuccess.style.display = "block", this.formFail.style.display = "none", this.elements.forEach((r) => r.disabled = !1), this.setSubmitText(this.buttonText), this.form.reset(), this.formSuccess.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case "error":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = "block", this.elements.forEach((r) => r.disabled = !1), this.setSubmitText(this.buttonText);
        break;
    }
    this.onStateHandlers.forEach((r) => r(t));
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
u.refs = {};
window.AsyncForm = u;
j(() => {
  Array.from(document.querySelectorAll("[c-async-form]")).forEach(
    (e) => new u(e)
  );
});
function dt(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const ft = ".filepond--root,.filepond--root *,.filepond--drop-label label{cursor:pointer}.filepond--root{font-size:1em}.filepond--drop-label{justify-content:start;padding-left:1em}.filepond--panel-root{background-color:transparent;border-radius:0;border:1px solid #ededed}.filepond--list{left:1em;right:1em}.filepond--drop-label.filepond--drop-label label{padding:0}.filepond--item{margin:0 0 .25em}";
dt(ft, { insertAt: "top" });
class f {
  constructor(t) {
    if (t.dataset.refFileUpload)
      return f.refs[t.dataset.refFileUpload];
    this.ref = Math.random(), f.refs[this.ref] = this, t.dataset.refFileUpload = this.ref, this.inputs = t.querySelectorAll('input[type="file"]'), this.fileponds = {}, this.headers = {
      Authorization: "pFdRC99ihTG!C%BQB6EJKjc!n%"
    }, document.addEventListener("FilePond:loaded", () => this.onload());
    const r = new u(t.closest("[c-async-form]"));
    r.onBeforeSubmit = () => this.beforeSubmit(), r.onPayload = (n) => this.onPayload(n), r.onInput = async (n, i) => await this.inputHandler(n, i), import("./filepond-BVFG_Nec.js").then((n) => {
      Object.assign(globalThis, n);
    });
  }
  onload() {
    FilePond.registerPlugin(FilePondPluginFileValidateType), FilePond.registerPlugin(FilePondPluginFileValidateSize);
    const t = {
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
      credits: !1,
      ...ht,
      ...window.c_fileupload_options
    };
    for (const r of this.inputs)
      this.fileponds[r.name] = FilePond.create(r, {
        ...t,
        maxFiles: r.dataset.maxFiles || null,
        maxFileSize: r.dataset.maxFileSize || null,
        maxTotalFileSize: r.dataset.maxTotalFileSize || null
      });
  }
  beforeSubmit() {
    for (const [t, r] of Object.entries(this.fileponds))
      if (!(r.status == FilePond.Status.EMPTY || r.status == FilePond.Status.READY))
        return alert("Es sind noch nicht alle Dateien hochgeladen!"), !1;
    return !0;
  }
  onPayload(t) {
    for (const r of this.inputs)
      r.multiple && (t[r.name] = []);
    return t;
  }
  async inputHandler(t, r) {
    if (!t.closest(".filepond--root"))
      return r;
    if (!t.closest(".filepond--data"))
      return null;
    const n = this.fileponds[t.name], i = n.getFiles().find((s) => s.serverId === r), o = await fetch(`${n.server.url}finish`, {
      method: "POST",
      body: r,
      headers: this.headers
    });
    if (!o.ok)
      throw new Error("Upload could not finish ", o);
    const c = await o.text(), l = i.filename, a = i.fileSize;
    return {
      url: c,
      name: l,
      size: a
    };
  }
}
f.refs = {};
window.FileUpload = f;
j(() => {
  Array.from(document.querySelectorAll("[c-file-upload]")).forEach(
    (e) => new f(e)
  );
});
const ht = {
  labelIdle: 'Dateien hierher ziehen oder <span class="filepond--label-action">auswählen</span>',
  labelInvalidField: "Feld enthält ungültige Dateien",
  labelFileWaitingForSize: "Auf Größe warten",
  labelFileSizeNotAvailable: "Größe nicht verfügbar",
  labelFileLoading: "Laden",
  labelFileLoadError: "Fehler beim Laden",
  labelFileProcessing: "Hochladen",
  labelFileProcessingComplete: "Hochgeladen",
  labelFileProcessingAborted: "Hochladen abgebrochen",
  labelFileProcessingError: "Fehler beim Hochladen",
  labelFileProcessingRevertError: "Fehler beim Entfernen",
  labelFileRemoveError: "Fehler beim Löschen",
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
  labelMaxFileSizeExceeded: "Datei ist zu groß",
  labelMaxFileSize: "Maximale Dateigröße beträgt {filesize}",
  labelMaxTotalFileSizeExceeded: "Maximale Gesamtgröße überschritten",
  labelMaxTotalFileSize: "Maximale Gesamtgröße beträgt {filesize}",
  labelFileTypeNotAllowed: "Ungültiger Dateityp",
  fileValidateTypeLabelExpectedTypes: "Gültige Dateitypen: {allButLastType} und {lastType}",
  fileValidateTypeLabelExpectedTypesMap: {
    "image/*": "Bilddateien",
    "image/png": ".png",
    "image/jpg": ".jpg",
    "image/jpeg": ".jpeg",
    "application/pdf": ".pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"
  }
}, pt = {
  AsyncForm: u,
  FileUpload: f
};
window.Chapeau = pt;
export {
  pt as C,
  dt as s
};
//# sourceMappingURL=index-BDeb0Mxs.js.map
