function L(t) {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
var M = typeof global == "object" && global && global.Object === Object && global, D = typeof self == "object" && self && self.Object === Object && self, j = M || D || Function("return this")(), y = j.Symbol, z = Object.prototype, G = z.hasOwnProperty, N = z.toString, v = y ? y.toStringTag : void 0;
function R(t) {
  var e = G.call(t, v), r = t[v];
  try {
    t[v] = void 0;
    var n = !0;
  } catch {
  }
  var o = N.call(t);
  return n && (e ? t[v] = r : delete t[v]), o;
}
var J = Object.prototype, U = J.toString;
function V(t) {
  return U.call(t);
}
var K = "[object Null]", Q = "[object Undefined]", k = y ? y.toStringTag : void 0;
function P(t) {
  return t == null ? t === void 0 ? Q : K : k && k in Object(t) ? R(t) : V(t);
}
function W(t) {
  return t != null && typeof t == "object";
}
var X = "[object Symbol]";
function w(t) {
  return typeof t == "symbol" || W(t) && P(t) == X;
}
function Y(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var O = Array.isArray, Z = 1 / 0, A = y ? y.prototype : void 0, F = A ? A.toString : void 0;
function $(t) {
  if (typeof t == "string")
    return t;
  if (O(t))
    return Y(t, $) + "";
  if (w(t))
    return F ? F.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Z ? "-0" : e;
}
function m(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var tt = "[object AsyncFunction]", et = "[object Function]", rt = "[object GeneratorFunction]", nt = "[object Proxy]";
function ot(t) {
  if (!m(t))
    return !1;
  var e = P(t);
  return e == et || e == rt || e == tt || e == nt;
}
var S = j["__core-js_shared__"], H = function() {
  var t = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function it(t) {
  return !!H && H in t;
}
var st = Function.prototype, at = st.toString;
function ut(t) {
  if (t != null) {
    try {
      return at.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ct = /[\\^$.*+?()[\]{}|]/g, lt = /^\[object .+?Constructor\]$/, ht = Function.prototype, ft = Object.prototype, pt = ht.toString, dt = ft.hasOwnProperty, yt = RegExp("^" + pt.call(dt).replace(ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function vt(t) {
  if (!m(t) || it(t))
    return !1;
  var e = ot(t) ? yt : lt;
  return e.test(ut(t));
}
function bt(t, e) {
  return t == null ? void 0 : t[e];
}
function x(t, e) {
  var r = bt(t, e);
  return vt(r) ? r : void 0;
}
var E = function() {
  try {
    var t = x(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), mt = 9007199254740991, _t = /^(?:0|[1-9]\d*)$/;
function gt(t, e) {
  var r = typeof t;
  return e = e ?? mt, !!e && (r == "number" || r != "symbol" && _t.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function St(t, e, r) {
  e == "__proto__" && E ? E(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : t[e] = r;
}
function B(t, e) {
  return t === e || t !== t && e !== e;
}
var jt = Object.prototype, wt = jt.hasOwnProperty;
function Ot(t, e, r) {
  var n = t[e];
  (!(wt.call(t, e) && B(n, r)) || r === void 0 && !(e in t)) && St(t, e, r);
}
var xt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tt = /^\w*$/;
function kt(t, e) {
  if (O(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || w(t) ? !0 : Tt.test(t) || !xt.test(t) || e != null && t in Object(e);
}
var b = x(Object, "create");
function At() {
  this.__data__ = b ? b(null) : {}, this.size = 0;
}
function Ft(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ht = "__lodash_hash_undefined__", Et = Object.prototype, zt = Et.hasOwnProperty;
function Pt(t) {
  var e = this.__data__;
  if (b) {
    var r = e[t];
    return r === Ht ? void 0 : r;
  }
  return zt.call(e, t) ? e[t] : void 0;
}
var $t = Object.prototype, Bt = $t.hasOwnProperty;
function Ct(t) {
  var e = this.__data__;
  return b ? e[t] !== void 0 : Bt.call(e, t);
}
var qt = "__lodash_hash_undefined__";
function It(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = b && e === void 0 ? qt : e, this;
}
function l(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
l.prototype.clear = At, l.prototype.delete = Ft, l.prototype.get = Pt, l.prototype.has = Ct, l.prototype.set = It;
function Lt() {
  this.__data__ = [], this.size = 0;
}
function _(t, e) {
  for (var r = t.length; r--; )
    if (B(t[r][0], e))
      return r;
  return -1;
}
var Mt = Array.prototype, Dt = Mt.splice;
function Gt(t) {
  var e = this.__data__, r = _(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Dt.call(e, r, 1), --this.size, !0;
}
function Nt(t) {
  var e = this.__data__, r = _(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Rt(t) {
  return _(this.__data__, t) > -1;
}
function Jt(t, e) {
  var r = this.__data__, n = _(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function p(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
p.prototype.clear = Lt, p.prototype.delete = Gt, p.prototype.get = Nt, p.prototype.has = Rt, p.prototype.set = Jt;
var Ut = x(j, "Map");
function Vt() {
  this.size = 0, this.__data__ = { hash: new l(), map: new (Ut || p)(), string: new l() };
}
function Kt(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function g(t, e) {
  var r = t.__data__;
  return Kt(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Qt(t) {
  var e = g(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Wt(t) {
  return g(this, t).get(t);
}
function Xt(t) {
  return g(this, t).has(t);
}
function Yt(t, e) {
  var r = g(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function h(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
h.prototype.clear = Vt, h.prototype.delete = Qt, h.prototype.get = Wt, h.prototype.has = Xt, h.prototype.set = Yt;
var Zt = "Expected a function";
function T(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Zt);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var a = t.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (T.Cache || h)(), r;
}
T.Cache = h;
var te = 500;
function ee(t) {
  var e = T(t, function(n) {
    return r.size === te && r.clear(), n;
  }), r = e.cache;
  return e;
}
var re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ne = /\\(\\)?/g, oe = ee(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(re, function(r, n, o, i) {
    e.push(o ? i.replace(ne, "$1") : n || r);
  }), e;
});
function ie(t) {
  return t == null ? "" : $(t);
}
function C(t, e) {
  return O(t) ? t : kt(t, e) ? [t] : oe(ie(t));
}
var se = 1 / 0;
function q(t) {
  if (typeof t == "string" || w(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -se ? "-0" : e;
}
function ae(t, e) {
  e = C(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[q(e[r++])];
  return r && r == n ? t : void 0;
}
function ue(t, e, r) {
  var n = t == null ? void 0 : ae(t, e);
  return n === void 0 ? r : n;
}
function ce(t, e, r, n) {
  if (!m(t))
    return t;
  e = C(e, t);
  for (var o = -1, i = e.length, a = i - 1, u = t; u != null && ++o < i; ) {
    var s = q(e[o]), c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return t;
    if (o != a) {
      var f = u[s];
      c = n ? n(f, s, u) : void 0, c === void 0 && (c = m(f) ? f : gt(e[o + 1]) ? [] : {});
    }
    Ot(u, s, c), u = u[s];
  }
  return t;
}
function le(t, e, r) {
  return t == null ? t : ce(t, e, r);
}
class d {
  constructor(e) {
    if (e.dataset.refAsyncForm)
      return d.refs[e.dataset.refAsyncForm];
    this.ref = Math.random(), d.refs[this.ref] = this, e.dataset.refAsyncForm = this.ref, this.el = e, this.form = e.querySelector("form"), this.formSuccess = e.querySelector(".w-form-done"), this.formFail = e.querySelector(".w-form-fail"), this.submitButton = e.querySelector('[type="submit"]'), this.buttonText = this.getSubmitText(), this.waitingText = this.submitButton.dataset.wait, this.beforeSubmitHandlers = [], this.payloadHandlers = [], this.inputHandlers = [], this.onStateHandlers = [], this.el.addEventListener("submit", (r) => this.submit(r));
  }
  set onBeforeSubmit(e) {
    this.beforeSubmitHandlers.push(e);
  }
  set onPayload(e) {
    this.payloadHandlers.push(e);
  }
  set onInput(e) {
    this.inputHandlers.push(e);
  }
  set onState(e) {
    this.onStateHandlers.push(e);
  }
  async submit(e) {
    e.preventDefault();
    try {
      if (!this.beforeSubmitHandlers.reduce((i, a) => a() && i, !0))
        return;
      this.setState("loading");
      const r = await this.createPayload(), n = this.form.action, o = { method: this.form.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) };
      (await fetch(n, o)).ok ? this.setState("success") : this.setState("error");
    } catch (r) {
      console.error(r), this.setState("error");
    }
  }
  async createPayload() {
    let e = this.payloadHandlers.reduce((n, o) => o(n), {});
    const r = this.elements.filter((n) => n.name !== "");
    for (const n of r) {
      let o = n.name, i = n.value;
      n.type === "checkbox" && (i = n.checked), n.type === "radio" && !n.checked && (i = null);
      const a = n.dataset.checkboxGroup;
      a !== void 0 && (o = a, n.checked ? i = [n.name] : i = null);
      for (const I of this.inputHandlers)
        i = await I(n, i);
      if (i === null)
        continue;
      let u = [o];
      const s = n.dataset.group;
      s && u.unshift(s);
      const c = u.join("."), f = ue(e, c);
      typeof f < "u" && (i = [f, i].flat()), le(e, c, i);
    }
    return e;
  }
  setState(e) {
    switch (e) {
      case "loading":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = null, this.elements.forEach((r) => r.disabled = !0), this.setSubmitText(this.waitingText);
        break;
      case "success":
        this.form.style.display = "none", this.formSuccess.style.display = "block", this.formFail.style.display = "none", this.elements.forEach((r) => r.disabled = !1), this.setSubmitText(this.buttonText), this.form.reset(), this.formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "error":
        this.form.style.display = null, this.formSuccess.style.display = null, this.formFail.style.display = "block", this.elements.forEach((r) => r.disabled = !1), this.setSubmitText(this.buttonText);
        break;
    }
    this.onStateHandlers.forEach((r) => r(e));
  }
  getSubmitText() {
    return this.submitButton instanceof HTMLInputElement ? this.submitButton.value : this.submitButton.textContent;
  }
  setSubmitText(e) {
    this.submitButton instanceof HTMLInputElement ? this.submitButton.value = e : this.submitButton.textContent = e;
  }
  get elements() {
    return Array.from(this.form.elements);
  }
}
d.refs = {}, window.AsyncForm = d, L(() => {
  Array.from(document.querySelectorAll("[c-async-form]")).forEach((t) => new d(t));
});
export {
  d as A,
  L as o
};
//# sourceMappingURL=async_form-n6LTIt-q.js.map
