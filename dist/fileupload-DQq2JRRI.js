import { A as uo } from "./async_form-CP0CX-qi.js";
/*!
* FilePond 4.30.6
* Licensed under MIT, https://opensource.org/licenses/MIT/
* Please visit https://pqina.nl/filepond/ for details.
*/
const _o = (e) => e instanceof HTMLElement, fo = (e, t = [], r = []) => {
  const o = { ...e }, n = [], s = [], i = () => ({ ...o }), a = () => {
    const E = [...n];
    return n.length = 0, E;
  }, l = () => {
    const E = [...s];
    s.length = 0, E.forEach(({ type: _, data: g }) => {
      c(_, g);
    });
  }, c = (E, _, g) => {
    if (g && !document.hidden) {
      s.push({ type: E, data: _ });
      return;
    }
    T[E] && T[E](_), n.push({ type: E, data: _ });
  }, d = (E, ..._) => p[E] ? p[E](..._) : null, u = { getState: i, processActionQueue: a, processDispatchQueue: l, dispatch: c, query: d };
  let p = {};
  t.forEach((E) => {
    p = { ...E(o), ...p };
  });
  let T = {};
  return r.forEach((E) => {
    T = { ...E(c, d, o), ...T };
  }), u;
}, To = (e, t, r) => {
  if (typeof r == "function") {
    e[t] = r;
    return;
  }
  Object.defineProperty(e, t, { ...r });
}, U = (e, t) => {
  for (const r in e)
    e.hasOwnProperty(r) && t(r, e[r]);
}, Ee = (e) => {
  const t = {};
  return U(e, (r) => {
    To(t, r, e[r]);
  }), t;
}, Y = (e, t, r = null) => {
  if (r === null)
    return e.getAttribute(t) || e.hasAttribute(t);
  e.setAttribute(t, r);
}, Io = "http://www.w3.org/2000/svg", mo = ["svg", "path"], Mt = (e) => mo.includes(e), Ye = (e, t, r = {}) => {
  typeof t == "object" && (r = t, t = null);
  const o = Mt(e) ? document.createElementNS(Io, e) : document.createElement(e);
  return t && (Mt(e) ? Y(o, "class", t) : o.className = t), U(r, (n, s) => {
    Y(o, n, s);
  }), o;
}, ho = (e) => (t, r) => {
  typeof r < "u" && e.children[r] ? e.insertBefore(t, e.children[r]) : e.appendChild(t);
}, Ro = (e, t) => (r, o) => (typeof o < "u" ? t.splice(o, 0, r) : t.push(r), r), go = (e, t) => (r) => (t.splice(t.indexOf(r), 1), r.element.parentNode && e.removeChild(r.element), r), Oo = typeof window < "u" && typeof window.document < "u", Rr = () => Oo, Do = Rr() ? Ye("svg") : {}, So = "children" in Do ? (e) => e.children.length : (e) => e.childNodes.length, gr = (e, t, r, o) => {
  const n = r[0] || e.left, s = r[1] || e.top, i = n + e.width, a = s + e.height * (o[1] || 1), l = { element: { ...e }, inner: { left: e.left, top: e.top, right: e.right, bottom: e.bottom }, outer: { left: n, top: s, right: i, bottom: a } };
  return t.filter((c) => !c.isRectIgnored()).map((c) => c.rect).forEach((c) => {
    Nt(l.inner, { ...c.inner }), Nt(l.outer, { ...c.outer });
  }), vt(l.inner), l.outer.bottom += l.element.marginBottom, l.outer.right += l.element.marginRight, vt(l.outer), l;
}, Nt = (e, t) => {
  t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right);
}, vt = (e) => {
  e.width = e.right - e.left, e.height = e.bottom - e.top;
}, pe = (e) => typeof e == "number", yo = (e, t, r, o = 1e-3) => Math.abs(e - t) < o && Math.abs(r) < o, Lo = ({ stiffness: e = 0.5, damping: t = 0.75, mass: r = 10 } = {}) => {
  let o = null, n = null, s = 0, i = !1;
  const a = Ee({ interpolate: (l, c) => {
    if (i)
      return;
    if (!(pe(o) && pe(n))) {
      i = !0, s = 0;
      return;
    }
    const d = -(n - o) * e;
    s += d / r, n += s, s *= t, yo(n, o, s) || c ? (n = o, s = 0, i = !0, a.onupdate(n), a.oncomplete(n)) : a.onupdate(n);
  }, target: { set: (l) => {
    if (pe(l) && !pe(n) && (n = l), o === null && (o = l, n = l), o = l, n === o || typeof o > "u") {
      i = !0, s = 0, a.onupdate(n), a.oncomplete(n);
      return;
    }
    i = !1;
  }, get: () => o }, resting: { get: () => i }, onupdate: (l) => {
  }, oncomplete: (l) => {
  } });
  return a;
}, Ao = (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e, Po = ({ duration: e = 500, easing: t = Ao, delay: r = 0 } = {}) => {
  let o = null, n, s, i = !0, a = !1, l = null;
  const c = Ee({ interpolate: (d, u) => {
    i || l === null || (o === null && (o = d), !(d - o < r) && (n = d - o - r, n >= e || u ? (n = 1, s = a ? 0 : 1, c.onupdate(s * l), c.oncomplete(s * l), i = !0) : (s = n / e, c.onupdate((n >= 0 ? t(a ? 1 - s : s) : 0) * l))));
  }, target: { get: () => a ? 0 : l, set: (d) => {
    if (l === null) {
      l = d, c.onupdate(d), c.oncomplete(d);
      return;
    }
    d < l ? (l = 1, a = !0) : (a = !1, l = d), i = !1, o = null;
  } }, resting: { get: () => i }, onupdate: (d) => {
  }, oncomplete: (d) => {
  } });
  return c;
}, Ct = { spring: Lo, tween: Po }, bo = (e, t, r) => {
  const o = e[t] && typeof e[t][r] == "object" ? e[t][r] : e[t] || e, n = typeof o == "string" ? o : o.type, s = typeof o == "object" ? { ...o } : {};
  return Ct[n] ? Ct[n](s) : null;
}, It = (e, t, r, o = !1) => {
  t = Array.isArray(t) ? t : [t], t.forEach((n) => {
    e.forEach((s) => {
      let i = s, a = () => r[s], l = (c) => r[s] = c;
      typeof s == "object" && (i = s.key, a = s.getter || a, l = s.setter || l), !(n[i] && !o) && (n[i] = { get: a, set: l });
    });
  });
}, Mo = ({ mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: o }) => {
  const n = { ...t }, s = [];
  return U(e, (i, a) => {
    const l = bo(a);
    l && (l.onupdate = (c) => {
      t[i] = c;
    }, l.target = n[i], It([{ key: i, setter: (c) => {
      l.target !== c && (l.target = c);
    }, getter: () => t[i] }], [r, o], t, !0), s.push(l));
  }), { write: (i) => {
    let a = document.hidden, l = !0;
    return s.forEach((c) => {
      c.resting || (l = !1), c.interpolate(i, a);
    }), l;
  }, destroy: () => {
  } };
}, No = (e) => (t, r) => {
  e.addEventListener(t, r);
}, vo = (e) => (t, r) => {
  e.removeEventListener(t, r);
}, Co = ({ mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: o, viewState: n, view: s }) => {
  const i = [], a = No(s.element), l = vo(s.element);
  return o.on = (c, d) => {
    i.push({ type: c, fn: d }), a(c, d);
  }, o.off = (c, d) => {
    i.splice(i.findIndex((u) => u.type === c && u.fn === d), 1), l(c, d);
  }, { write: () => !0, destroy: () => {
    i.forEach((c) => {
      l(c.type, c.fn);
    });
  } };
}, wo = ({ mixinConfig: e, viewProps: t, viewExternalAPI: r }) => {
  It(e, r, t);
}, $ = (e) => e != null, Go = { opacity: 1, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, rotateX: 0, rotateY: 0, rotateZ: 0, originX: 0, originY: 0 }, Fo = ({ mixinConfig: e, viewProps: t, viewInternalAPI: r, viewExternalAPI: o, view: n }) => {
  const s = { ...t }, i = {};
  It(e, [r, o], t);
  const a = () => [t.translateX || 0, t.translateY || 0], l = () => [t.scaleX || 0, t.scaleY || 0], c = () => n.rect ? gr(n.rect, n.childViews, a(), l()) : null;
  return r.rect = { get: c }, o.rect = { get: c }, e.forEach((d) => {
    t[d] = typeof s[d] > "u" ? Go[d] : s[d];
  }), { write: () => {
    if (Bo(i, t))
      return Uo(n.element, t), Object.assign(i, { ...t }), !0;
  }, destroy: () => {
  } };
}, Bo = (e, t) => {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !0;
  for (const r in t)
    if (t[r] !== e[r])
      return !0;
  return !1;
}, Uo = (e, { opacity: t, perspective: r, translateX: o, translateY: n, scaleX: s, scaleY: i, rotateX: a, rotateY: l, rotateZ: c, originX: d, originY: u, width: p, height: T }) => {
  let E = "", _ = "";
  ($(d) || $(u)) && (_ += `transform-origin: ${d || 0}px ${u || 0}px;`), $(r) && (E += `perspective(${r}px) `), ($(o) || $(n)) && (E += `translate3d(${o || 0}px, ${n || 0}px, 0) `), ($(s) || $(i)) && (E += `scale3d(${$(s) ? s : 1}, ${$(i) ? i : 1}, 1) `), $(c) && (E += `rotateZ(${c}rad) `), $(a) && (E += `rotateX(${a}rad) `), $(l) && (E += `rotateY(${l}rad) `), E.length && (_ += `transform:${E};`), $(t) && (_ += `opacity:${t};`, t === 0 && (_ += "visibility:hidden;"), t < 1 && (_ += "pointer-events:none;")), $(T) && (_ += `height:${T}px;`), $(p) && (_ += `width:${p}px;`);
  const g = e.elementCurrentStyle || "";
  (_.length !== g.length || _ !== g) && (e.style.cssText = _, e.elementCurrentStyle = _);
}, xo = { styles: Fo, listeners: Co, animations: Mo, apis: wo }, wt = (e = {}, t = {}, r = {}) => (t.layoutCalculated || (e.paddingTop = parseInt(r.paddingTop, 10) || 0, e.marginTop = parseInt(r.marginTop, 10) || 0, e.marginRight = parseInt(r.marginRight, 10) || 0, e.marginBottom = parseInt(r.marginBottom, 10) || 0, e.marginLeft = parseInt(r.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = t.offsetParent === null, e), z = ({ tag: e = "div", name: t = null, attributes: r = {}, read: o = () => {
}, write: n = () => {
}, create: s = () => {
}, destroy: i = () => {
}, filterFrameActionsForChild: a = (T, E) => E, didCreateView: l = () => {
}, didWriteView: c = () => {
}, ignoreRect: d = !1, ignoreRectUpdate: u = !1, mixins: p = [] } = {}) => (T, E = {}) => {
  const _ = Ye(e, `filepond--${t}`, r), g = window.getComputedStyle(_, null), h = wt();
  let O = null, A = !1;
  const b = [], S = [], M = {}, D = {}, y = [n], F = [o], P = [i], v = () => _, H = () => b.concat(), V = () => M, R = (G) => (X, Pe) => X(G, Pe), B = () => O || (O = gr(h, b, [0, 0], [1, 1]), O), I = () => g, m = () => {
    O = null, b.forEach((X) => X._read()), !(u && h.width && h.height) && wt(h, _, g);
    const G = { root: ce, props: E, rect: h };
    F.forEach((X) => X(G));
  }, L = (G, X, Pe) => {
    let Re = X.length === 0;
    return y.forEach((Z) => {
      Z({ props: E, root: ce, actions: X, timestamp: G, shouldOptimize: Pe }) === !1 && (Re = !1);
    }), S.forEach((Z) => {
      Z.write(G) === !1 && (Re = !1);
    }), b.filter((Z) => !!Z.element.parentNode).forEach((Z) => {
      Z._write(G, a(Z, X), Pe) || (Re = !1);
    }), b.forEach((Z, po) => {
      Z.element.parentNode || (ce.appendChild(Z.element, po), Z._read(), Z._write(G, a(Z, X), Pe), Re = !1);
    }), A = Re, c({ props: E, root: ce, actions: X, timestamp: G }), Re;
  }, N = () => {
    S.forEach((G) => G.destroy()), P.forEach((G) => {
      G({ root: ce, props: E });
    }), b.forEach((G) => G._destroy());
  }, w = { element: { get: v }, style: { get: I }, childViews: { get: H } }, oe = { ...w, rect: { get: B }, ref: { get: V }, is: (G) => t === G, appendChild: ho(_), createChildView: R(T), linkView: (G) => (b.push(G), G), unlinkView: (G) => {
    b.splice(b.indexOf(G), 1);
  }, appendChildView: Ro(_, b), removeChildView: go(_, b), registerWriter: (G) => y.push(G), registerReader: (G) => F.push(G), registerDestroyer: (G) => P.push(G), invalidateLayout: () => _.layoutCalculated = !1, dispatch: T.dispatch, query: T.query }, et = { element: { get: v }, childViews: { get: H }, rect: { get: B }, resting: { get: () => A }, isRectIgnored: () => d, _read: m, _write: L, _destroy: N }, co = { ...w, rect: { get: () => h } };
  Object.keys(p).sort((G, X) => G === "styles" ? 1 : X === "styles" ? -1 : 0).forEach((G) => {
    const X = xo[G]({ mixinConfig: p[G], viewProps: E, viewState: D, viewInternalAPI: oe, viewExternalAPI: et, view: Ee(co) });
    X && S.push(X);
  });
  const ce = Ee(oe);
  s({ root: ce, props: E });
  const Eo = So(_);
  return b.forEach((G, X) => {
    ce.appendChild(G.element, Eo + X);
  }), l(ce), Ee(et);
}, qo = (e, t, r = 60) => {
  const o = "__framePainter";
  if (window[o]) {
    window[o].readers.push(e), window[o].writers.push(t);
    return;
  }
  window[o] = { readers: [e], writers: [t] };
  const n = window[o], s = 1e3 / r;
  let i = null, a = null, l = null, c = null;
  const d = () => {
    document.hidden ? (l = () => window.setTimeout(() => u(performance.now()), s), c = () => window.clearTimeout(a)) : (l = () => window.requestAnimationFrame(u), c = () => window.cancelAnimationFrame(a));
  };
  document.addEventListener("visibilitychange", () => {
    c && c(), d(), u(performance.now());
  });
  const u = (p) => {
    a = l(u), i || (i = p);
    const T = p - i;
    T <= s || (i = p - T % s, n.readers.forEach((E) => E()), n.writers.forEach((E) => E(p)));
  };
  return d(), u(performance.now()), { pause: () => {
    c(a);
  } };
}, Q = (e, t) => ({ root: r, props: o, actions: n = [], timestamp: s, shouldOptimize: i }) => {
  n.filter((a) => e[a.type]).forEach((a) => e[a.type]({ root: r, props: o, action: a.data, timestamp: s, shouldOptimize: i })), t && t({ root: r, props: o, actions: n, timestamp: s, shouldOptimize: i });
}, Gt = (e, t) => t.parentNode.insertBefore(e, t), Ft = (e, t) => t.parentNode.insertBefore(e, t.nextSibling), ke = (e) => Array.isArray(e), ae = (e) => e == null, Vo = (e) => e.trim(), $e = (e) => "" + e, Yo = (e, t = ",") => ae(e) ? [] : ke(e) ? e : $e(e).split(t).map(Vo).filter((r) => r.length), Or = (e) => typeof e == "boolean", Dr = (e) => Or(e) ? e : e === "true", j = (e) => typeof e == "string", Sr = (e) => pe(e) ? e : j(e) ? $e(e).replace(/[a-z]+/gi, "") : 0, qe = (e) => parseInt(Sr(e), 10), Bt = (e) => parseFloat(Sr(e)), Ae = (e) => pe(e) && isFinite(e) && Math.floor(e) === e, Ut = (e, t = 1e3) => {
  if (Ae(e))
    return e;
  let r = $e(e).trim();
  return /MB$/i.test(r) ? (r = r.replace(/MB$i/, "").trim(), qe(r) * t * t) : /KB/i.test(r) ? (r = r.replace(/KB$i/, "").trim(), qe(r) * t) : qe(r);
}, ue = (e) => typeof e == "function", zo = (e) => {
  let t = self, r = e.split("."), o = null;
  for (; o = r.shift(); )
    if (t = t[o], !t)
      return null;
  return t;
}, xt = { process: "POST", patch: "PATCH", revert: "DELETE", fetch: "GET", restore: "GET", load: "GET" }, Ho = (e) => {
  const t = {};
  return t.url = j(e) ? e : e.url || "", t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0, t.headers = e.headers ? e.headers : {}, U(xt, (r) => {
    t[r] = Xo(r, e[r], xt[r], t.timeout, t.headers);
  }), t.process = e.process || j(e) || e.url ? t.process : null, t.remove = e.remove || null, delete t.headers, t;
}, Xo = (e, t, r, o, n) => {
  if (t === null)
    return null;
  if (typeof t == "function")
    return t;
  const s = { url: r === "GET" || r === "PATCH" ? `?${e}=` : "", method: r, headers: n, withCredentials: !1, timeout: o, onload: null, ondata: null, onerror: null };
  if (j(t))
    return s.url = t, s;
  if (Object.assign(s, t), j(s.headers)) {
    const i = s.headers.split(/:(.+)/);
    s.headers = { header: i[0], value: i[1] };
  }
  return s.withCredentials = Dr(s.withCredentials), s;
}, Wo = (e) => Ho(e), ko = (e) => e === null, k = (e) => typeof e == "object" && e !== null, $o = (e) => k(e) && j(e.url) && k(e.process) && k(e.revert) && k(e.restore) && k(e.fetch), lt = (e) => ke(e) ? "array" : ko(e) ? "null" : Ae(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : $o(e) ? "api" : typeof e, jo = (e) => e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",'), Qo = { array: Yo, boolean: Dr, int: (e) => lt(e) === "bytes" ? Ut(e) : qe(e), number: Bt, float: Bt, bytes: Ut, string: (e) => ue(e) ? e : $e(e), function: (e) => zo(e), serverapi: Wo, object: (e) => {
  try {
    return JSON.parse(jo(e));
  } catch {
    return null;
  }
} }, Zo = (e, t) => Qo[t](e), yr = (e, t, r) => {
  if (e === t)
    return e;
  let o = lt(e);
  if (o !== r) {
    const n = Zo(e, r);
    if (o = lt(n), n === null)
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${r}"`;
    e = n;
  }
  return e;
}, Ko = (e, t) => {
  let r = e;
  return { enumerable: !0, get: () => r, set: (o) => {
    r = yr(o, e, t);
  } };
}, Jo = (e) => {
  const t = {};
  return U(e, (r) => {
    const o = e[r];
    t[r] = Ko(o[0], o[1]);
  }), Ee(t);
}, en = (e) => ({ items: [], listUpdateTimeout: null, itemUpdateTimeout: null, processingQueue: [], options: Jo(e) }), je = (e, t = "-") => e.split(/(?=[A-Z])/).map((r) => r.toLowerCase()).join(t), tn = (e, t) => {
  const r = {};
  return U(t, (o) => {
    r[o] = { get: () => e.getState().options[o], set: (n) => {
      e.dispatch(`SET_${je(o, "_").toUpperCase()}`, { value: n });
    } };
  }), r;
}, rn = (e) => (t, r, o) => {
  const n = {};
  return U(e, (s) => {
    const i = je(s, "_").toUpperCase();
    n[`SET_${i}`] = (a) => {
      try {
        o.options[s] = a.value;
      } catch {
      }
      t(`DID_SET_${i}`, { value: o.options[s] });
    };
  }), n;
}, on = (e) => (t) => {
  const r = {};
  return U(e, (o) => {
    r[`GET_${je(o, "_").toUpperCase()}`] = (n) => t.options[o];
  }), r;
}, re = { API: 1, DROP: 2, BROWSE: 3, PASTE: 4, NONE: 5 }, mt = () => Math.random().toString(36).substring(2, 11), ht = (e, t) => e.splice(t, 1), nn = (e, t) => {
  t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
}, Qe = () => {
  const e = [], t = (o, n) => {
    ht(e, e.findIndex((s) => s.event === o && (s.cb === n || !n)));
  }, r = (o, n, s) => {
    e.filter((i) => i.event === o).map((i) => i.cb).forEach((i) => nn(() => i(...n), s));
  };
  return { fireSync: (o, ...n) => {
    r(o, n, !0);
  }, fire: (o, ...n) => {
    r(o, n, !1);
  }, on: (o, n) => {
    e.push({ event: o, cb: n });
  }, onOnce: (o, n) => {
    e.push({ event: o, cb: (...s) => {
      t(o, n), n(...s);
    } });
  }, off: t };
}, Lr = (e, t, r) => {
  Object.getOwnPropertyNames(e).filter((o) => !r.includes(o)).forEach((o) => Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o)));
}, sn = ["fire", "process", "revert", "load", "on", "off", "onOnce", "retryLoad", "extend", "archive", "archived", "release", "released", "requestProcessing", "freeze"], K = (e) => {
  const t = {};
  return Lr(e, t, sn), t;
}, an = (e) => {
  e.forEach((t, r) => {
    t.released && ht(e, r);
  });
}, C = { INIT: 1, IDLE: 2, PROCESSING_QUEUED: 9, PROCESSING: 3, PROCESSING_COMPLETE: 5, PROCESSING_ERROR: 6, PROCESSING_REVERT_ERROR: 10, LOADING: 7, LOAD_ERROR: 8 }, W = { INPUT: 1, LIMBO: 2, LOCAL: 3 }, Ar = (e) => /[^0-9]+/.exec(e), Pr = () => Ar(1.1.toLocaleString())[0], ln = () => {
  const e = Pr(), t = 1e3.toLocaleString();
  return t !== "1000" ? Ar(t)[0] : e === "." ? "," : ".";
}, f = { BOOLEAN: "boolean", INT: "int", NUMBER: "number", STRING: "string", ARRAY: "array", OBJECT: "object", FUNCTION: "function", ACTION: "action", SERVER_API: "serverapi", REGEX: "regex" }, Rt = [], ne = (e, t, r) => new Promise((o, n) => {
  const s = Rt.filter((a) => a.key === e).map((a) => a.cb);
  if (s.length === 0) {
    o(t);
    return;
  }
  const i = s.shift();
  s.reduce((a, l) => a.then((c) => l(c, r)), i(t, r)).then((a) => o(a)).catch((a) => n(a));
}), me = (e, t, r) => Rt.filter((o) => o.key === e).map((o) => o.cb(t, r)), cn = (e, t) => Rt.push({ key: e, cb: t }), dn = (e) => Object.assign(ge, e), ze = () => ({ ...ge }), En = (e) => {
  U(e, (t, r) => {
    ge[t] && (ge[t][0] = yr(r, ge[t][0], ge[t][1]));
  });
}, ge = { id: [null, f.STRING], name: ["filepond", f.STRING], disabled: [!1, f.BOOLEAN], className: [null, f.STRING], required: [!1, f.BOOLEAN], captureMethod: [null, f.STRING], allowSyncAcceptAttribute: [!0, f.BOOLEAN], allowDrop: [!0, f.BOOLEAN], allowBrowse: [!0, f.BOOLEAN], allowPaste: [!0, f.BOOLEAN], allowMultiple: [!1, f.BOOLEAN], allowReplace: [!0, f.BOOLEAN], allowRevert: [!0, f.BOOLEAN], allowRemove: [!0, f.BOOLEAN], allowProcess: [!0, f.BOOLEAN], allowReorder: [!1, f.BOOLEAN], allowDirectoriesOnly: [!1, f.BOOLEAN], storeAsFile: [!1, f.BOOLEAN], forceRevert: [!1, f.BOOLEAN], maxFiles: [null, f.INT], checkValidity: [!1, f.BOOLEAN], itemInsertLocationFreedom: [!0, f.BOOLEAN], itemInsertLocation: ["before", f.STRING], itemInsertInterval: [75, f.INT], dropOnPage: [!1, f.BOOLEAN], dropOnElement: [!0, f.BOOLEAN], dropValidation: [!1, f.BOOLEAN], ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], f.ARRAY], instantUpload: [!0, f.BOOLEAN], maxParallelUploads: [2, f.INT], allowMinimumUploadDuration: [!0, f.BOOLEAN], chunkUploads: [!1, f.BOOLEAN], chunkForce: [!1, f.BOOLEAN], chunkSize: [5e6, f.INT], chunkRetryDelays: [[500, 1e3, 3e3], f.ARRAY], server: [null, f.SERVER_API], fileSizeBase: [1e3, f.INT], labelFileSizeBytes: ["bytes", f.STRING], labelFileSizeKilobytes: ["KB", f.STRING], labelFileSizeMegabytes: ["MB", f.STRING], labelFileSizeGigabytes: ["GB", f.STRING], labelDecimalSeparator: [Pr(), f.STRING], labelThousandsSeparator: [ln(), f.STRING], labelIdle: ['Drag & Drop your files or <span class="filepond--label-action">Browse</span>', f.STRING], labelInvalidField: ["Field contains invalid files", f.STRING], labelFileWaitingForSize: ["Waiting for size", f.STRING], labelFileSizeNotAvailable: ["Size not available", f.STRING], labelFileCountSingular: ["file in list", f.STRING], labelFileCountPlural: ["files in list", f.STRING], labelFileLoading: ["Loading", f.STRING], labelFileAdded: ["Added", f.STRING], labelFileLoadError: ["Error during load", f.STRING], labelFileRemoved: ["Removed", f.STRING], labelFileRemoveError: ["Error during remove", f.STRING], labelFileProcessing: ["Uploading", f.STRING], labelFileProcessingComplete: ["Upload complete", f.STRING], labelFileProcessingAborted: ["Upload cancelled", f.STRING], labelFileProcessingError: ["Error during upload", f.STRING], labelFileProcessingRevertError: ["Error during revert", f.STRING], labelTapToCancel: ["tap to cancel", f.STRING], labelTapToRetry: ["tap to retry", f.STRING], labelTapToUndo: ["tap to undo", f.STRING], labelButtonRemoveItem: ["Remove", f.STRING], labelButtonAbortItemLoad: ["Abort", f.STRING], labelButtonRetryItemLoad: ["Retry", f.STRING], labelButtonAbortItemProcessing: ["Cancel", f.STRING], labelButtonUndoItemProcessing: ["Undo", f.STRING], labelButtonRetryItemProcessing: ["Retry", f.STRING], labelButtonProcessItem: ["Upload", f.STRING], iconRemove: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>', f.STRING], iconProcess: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>', f.STRING], iconRetry: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>', f.STRING], iconUndo: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>', f.STRING], iconDone: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>', f.STRING], oninit: [null, f.FUNCTION], onwarning: [null, f.FUNCTION], onerror: [null, f.FUNCTION], onactivatefile: [null, f.FUNCTION], oninitfile: [null, f.FUNCTION], onaddfilestart: [null, f.FUNCTION], onaddfileprogress: [null, f.FUNCTION], onaddfile: [null, f.FUNCTION], onprocessfilestart: [null, f.FUNCTION], onprocessfileprogress: [null, f.FUNCTION], onprocessfileabort: [null, f.FUNCTION], onprocessfilerevert: [null, f.FUNCTION], onprocessfile: [null, f.FUNCTION], onprocessfiles: [null, f.FUNCTION], onremovefile: [null, f.FUNCTION], onpreparefile: [null, f.FUNCTION], onupdatefiles: [null, f.FUNCTION], onreorderfiles: [null, f.FUNCTION], beforeDropFile: [null, f.FUNCTION], beforeAddFile: [null, f.FUNCTION], beforeRemoveFile: [null, f.FUNCTION], beforePrepareFile: [null, f.FUNCTION], stylePanelLayout: [null, f.STRING], stylePanelAspectRatio: [null, f.STRING], styleItemPanelAspectRatio: [null, f.STRING], styleButtonRemoveItemPosition: ["left", f.STRING], styleButtonProcessItemPosition: ["right", f.STRING], styleLoadIndicatorPosition: ["right", f.STRING], styleProgressIndicatorPosition: ["right", f.STRING], styleButtonRemoveItemAlign: [!1, f.BOOLEAN], files: [[], f.ARRAY], credits: [["https://pqina.nl/", "Powered by PQINA"], f.ARRAY] }, _e = (e, t) => ae(t) ? e[0] || null : Ae(t) ? e[t] || null : (typeof t == "object" && (t = t.id), e.find((r) => r.id === t) || null), br = (e) => {
  if (ae(e))
    return e;
  if (/:/.test(e)) {
    const t = e.split(":");
    return t[1] / t[0];
  }
  return parseFloat(e);
}, ie = (e) => e.filter((t) => !t.archived), Mr = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 };
let we = null;
const pn = () => {
  if (we === null)
    try {
      const e = new DataTransfer();
      e.items.add(new File(["hello world"], "This_Works.txt"));
      const t = document.createElement("input");
      t.setAttribute("type", "file"), t.files = e.files, we = t.files.length === 1;
    } catch {
      we = !1;
    }
  return we;
}, un = [C.LOAD_ERROR, C.PROCESSING_ERROR, C.PROCESSING_REVERT_ERROR], _n = [C.LOADING, C.PROCESSING, C.PROCESSING_QUEUED, C.INIT], fn = [C.PROCESSING_COMPLETE], Tn = (e) => un.includes(e.status), In = (e) => _n.includes(e.status), mn = (e) => fn.includes(e.status), qt = (e) => k(e.options.server) && (k(e.options.server.process) || ue(e.options.server.process)), hn = (e) => ({ GET_STATUS: () => {
  const t = ie(e.items), { EMPTY: r, ERROR: o, BUSY: n, IDLE: s, READY: i } = Mr;
  return t.length === 0 ? r : t.some(Tn) ? o : t.some(In) ? n : t.some(mn) ? i : s;
}, GET_ITEM: (t) => _e(e.items, t), GET_ACTIVE_ITEM: (t) => _e(ie(e.items), t), GET_ACTIVE_ITEMS: () => ie(e.items), GET_ITEMS: () => e.items, GET_ITEM_NAME: (t) => {
  const r = _e(e.items, t);
  return r ? r.filename : null;
}, GET_ITEM_SIZE: (t) => {
  const r = _e(e.items, t);
  return r ? r.fileSize : null;
}, GET_STYLES: () => Object.keys(e.options).filter((t) => /^style/.test(t)).map((t) => ({ name: t, value: e.options[t] })), GET_PANEL_ASPECT_RATIO: () => /circle/.test(e.options.stylePanelLayout) ? 1 : br(e.options.stylePanelAspectRatio), GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio, GET_ITEMS_BY_STATUS: (t) => ie(e.items).filter((r) => r.status === t), GET_TOTAL_ITEMS: () => ie(e.items).length, SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && pn() && !qt(e), IS_ASYNC: () => qt(e), GET_FILE_SIZE_LABELS: (t) => ({ labelBytes: t("GET_LABEL_FILE_SIZE_BYTES") || void 0, labelKilobytes: t("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0, labelMegabytes: t("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0, labelGigabytes: t("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0 }) }), Rn = (e) => {
  const t = ie(e.items).length;
  if (!e.options.allowMultiple)
    return t === 0;
  const r = e.options.maxFiles;
  return r === null || t < r;
}, Nr = (e, t, r) => Math.max(Math.min(r, e), t), gn = (e, t, r) => e.splice(t, 0, r), On = (e, t, r) => ae(t) ? null : typeof r > "u" ? (e.push(t), t) : (r = Nr(r, 0, e.length), gn(e, r, t), t), ct = (e) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e), Ce = (e) => `${e}`.split("/").pop().split("?").shift(), Ze = (e) => e.split(".").pop(), Dn = (e) => {
  if (typeof e != "string")
    return "";
  const t = e.split("/").pop();
  return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? t === "jpeg" ? "jpg" : t : "";
}, be = (e, t = "") => (t + e).slice(-t.length), vr = (e = /* @__PURE__ */ new Date()) => `${e.getFullYear()}-${be(e.getMonth() + 1, "00")}-${be(e.getDate(), "00")}_${be(e.getHours(), "00")}-${be(e.getMinutes(), "00")}-${be(e.getSeconds(), "00")}`, ye = (e, t, r = null, o = null) => {
  const n = typeof r == "string" ? e.slice(0, e.size, r) : e.slice(0, e.size, e.type);
  return n.lastModifiedDate = /* @__PURE__ */ new Date(), e._relativePath && (n._relativePath = e._relativePath), j(t) || (t = vr()), t && o === null && Ze(t) ? n.name = t : (o = o || Dn(n.type), n.name = t + (o ? "." + o : "")), n;
}, Sn = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, Cr = (e, t) => {
  const r = Sn();
  if (r) {
    const o = new r();
    return o.append(e), o.getBlob(t);
  }
  return new Blob([e], { type: t });
}, yn = (e, t) => {
  const r = new ArrayBuffer(e.length), o = new Uint8Array(r);
  for (let n = 0; n < e.length; n++)
    o[n] = e.charCodeAt(n);
  return Cr(r, t);
}, wr = (e) => (/^data:(.+);/.exec(e) || [])[1] || null, Ln = (e) => e.split(",")[1].replace(/\s/g, ""), An = (e) => atob(Ln(e)), Pn = (e) => {
  const t = wr(e), r = An(e);
  return yn(r, t);
}, bn = (e, t, r) => ye(Pn(e), t, null, r), Mn = (e) => {
  if (!/^content-disposition:/i.test(e))
    return null;
  const t = e.split(/filename=|filename\*=.+''/).splice(1).map((r) => r.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((r) => r.length);
  return t.length ? decodeURI(t[t.length - 1]) : null;
}, Nn = (e) => {
  if (/content-length:/i.test(e)) {
    const t = e.match(/[0-9]+/)[0];
    return t ? parseInt(t, 10) : null;
  }
  return null;
}, vn = (e) => /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null, gt = (e) => {
  const t = { source: null, name: null, size: null }, r = e.split(`
`);
  for (let o of r) {
    const n = Mn(o);
    if (n) {
      t.name = n;
      continue;
    }
    const s = Nn(o);
    if (s) {
      t.size = s;
      continue;
    }
    const i = vn(o);
    if (i) {
      t.source = i;
      continue;
    }
  }
  return t;
}, Cn = (e) => {
  const t = { source: null, complete: !1, progress: 0, size: null, timestamp: null, duration: 0, request: null }, r = () => t.progress, o = () => {
    t.request && t.request.abort && t.request.abort();
  }, n = () => {
    const a = t.source;
    i.fire("init", a), a instanceof File ? i.fire("load", a) : a instanceof Blob ? i.fire("load", ye(a, a.name)) : ct(a) ? i.fire("load", bn(a)) : s(a);
  }, s = (a) => {
    if (!e) {
      i.fire("error", { type: "error", body: "Can't load URL", code: 400 });
      return;
    }
    t.timestamp = Date.now(), t.request = e(a, (l) => {
      t.duration = Date.now() - t.timestamp, t.complete = !0, l instanceof Blob && (l = ye(l, l.name || Ce(a))), i.fire("load", l instanceof Blob ? l : l ? l.body : null);
    }, (l) => {
      i.fire("error", typeof l == "string" ? { type: "error", code: 0, body: l } : l);
    }, (l, c, d) => {
      if (d && (t.size = d), t.duration = Date.now() - t.timestamp, !l) {
        t.progress = null;
        return;
      }
      t.progress = c / d, i.fire("progress", t.progress);
    }, () => {
      i.fire("abort");
    }, (l) => {
      const c = gt(typeof l == "string" ? l : l.headers);
      i.fire("meta", { size: t.size || c.size, filename: c.name, source: c.source });
    });
  }, i = { ...Qe(), setSource: (a) => t.source = a, getProgress: r, abort: o, load: n };
  return i;
}, Vt = (e) => /GET|HEAD/.test(e), fe = (e, t, r) => {
  const o = { onheaders: () => {
  }, onprogress: () => {
  }, onload: () => {
  }, ontimeout: () => {
  }, onerror: () => {
  }, onabort: () => {
  }, abort: () => {
    n = !0, i.abort();
  } };
  let n = !1, s = !1;
  r = { method: "POST", headers: {}, withCredentials: !1, ...r }, t = encodeURI(t), Vt(r.method) && e && (t = `${t}${encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))}`);
  const i = new XMLHttpRequest(), a = Vt(r.method) ? i : i.upload;
  return a.onprogress = (l) => {
    n || o.onprogress(l.lengthComputable, l.loaded, l.total);
  }, i.onreadystatechange = () => {
    i.readyState < 2 || i.readyState === 4 && i.status === 0 || s || (s = !0, o.onheaders(i));
  }, i.onload = () => {
    i.status >= 200 && i.status < 300 ? o.onload(i) : o.onerror(i);
  }, i.onerror = () => o.onerror(i), i.onabort = () => {
    n = !0, o.onabort();
  }, i.ontimeout = () => o.ontimeout(i), i.open(r.method, t, !0), Ae(r.timeout) && (i.timeout = r.timeout), Object.keys(r.headers).forEach((l) => {
    const c = unescape(encodeURIComponent(r.headers[l]));
    i.setRequestHeader(l, c);
  }), r.responseType && (i.responseType = r.responseType), r.withCredentials && (i.withCredentials = !0), i.send(e), o;
}, x = (e, t, r, o) => ({ type: e, code: t, body: r, headers: o }), Te = (e) => (t) => {
  e(x("error", 0, "Timeout", t.getAllResponseHeaders()));
}, Yt = (e) => /\?/.test(e), ve = (...e) => {
  let t = "";
  return e.forEach((r) => {
    t += Yt(t) && Yt(r) ? r.replace(/\?/, "&") : r;
  }), t;
}, tt = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !j(t.url))
    return null;
  const r = t.onload || ((n) => n), o = t.onerror || ((n) => null);
  return (n, s, i, a, l, c) => {
    const d = fe(n, ve(e, t.url), { ...t, responseType: "blob" });
    return d.onload = (u) => {
      const p = u.getAllResponseHeaders(), T = gt(p).name || Ce(n);
      s(x("load", u.status, t.method === "HEAD" ? null : ye(r(u.response), T), p));
    }, d.onerror = (u) => {
      i(x("error", u.status, o(u.response) || u.statusText, u.getAllResponseHeaders()));
    }, d.onheaders = (u) => {
      c(x("headers", u.status, null, u.getAllResponseHeaders()));
    }, d.ontimeout = Te(i), d.onprogress = a, d.onabort = l, d;
  };
}, ee = { QUEUED: 0, COMPLETE: 1, PROCESSING: 2, ERROR: 3, WAITING: 4 }, wn = (e, t, r, o, n, s, i, a, l, c, d) => {
  const u = [], { chunkTransferId: p, chunkServer: T, chunkSize: E, chunkRetryDelays: _ } = d, g = { serverId: p, aborted: !1 }, h = t.ondata || ((R) => R), O = t.onload || ((R, B) => B === "HEAD" ? R.getResponseHeader("Upload-Offset") : R.response), A = t.onerror || ((R) => null), b = (R) => {
    const B = new FormData();
    k(n) && B.append(r, JSON.stringify(n));
    const I = typeof t.headers == "function" ? t.headers(o, n) : { ...t.headers, "Upload-Length": o.size }, m = { ...t, headers: I }, L = fe(h(B), ve(e, t.url), m);
    L.onload = (N) => R(O(N, m.method)), L.onerror = (N) => i(x("error", N.status, A(N.response) || N.statusText, N.getAllResponseHeaders())), L.ontimeout = Te(i);
  }, S = (R) => {
    const B = ve(e, T.url, g.serverId), I = { headers: typeof t.headers == "function" ? t.headers(g.serverId) : { ...t.headers }, method: "HEAD" }, m = fe(null, B, I);
    m.onload = (L) => R(O(L, I.method)), m.onerror = (L) => i(x("error", L.status, A(L.response) || L.statusText, L.getAllResponseHeaders())), m.ontimeout = Te(i);
  }, M = Math.floor(o.size / E);
  for (let R = 0; R <= M; R++) {
    const B = R * E, I = o.slice(B, B + E, "application/offset+octet-stream");
    u[R] = { index: R, size: I.size, offset: B, data: I, file: o, progress: 0, retries: [..._], status: ee.QUEUED, error: null, request: null, timeout: null };
  }
  const D = () => s(g.serverId), y = (R) => R.status === ee.QUEUED || R.status === ee.ERROR, F = (R) => {
    if (g.aborted)
      return;
    if (R = R || u.find(y), !R) {
      u.every((w) => w.status === ee.COMPLETE) && D();
      return;
    }
    R.status = ee.PROCESSING, R.progress = null;
    const B = T.ondata || ((w) => w), I = T.onerror || ((w) => null), m = ve(e, T.url, g.serverId), L = typeof T.headers == "function" ? T.headers(R) : { ...T.headers, "Content-Type": "application/offset+octet-stream", "Upload-Offset": R.offset, "Upload-Length": o.size, "Upload-Name": o.name }, N = R.request = fe(B(R.data), m, { ...T, headers: L });
    N.onload = () => {
      R.status = ee.COMPLETE, R.request = null, H();
    }, N.onprogress = (w, oe, et) => {
      R.progress = w ? oe : null, v();
    }, N.onerror = (w) => {
      R.status = ee.ERROR, R.request = null, R.error = I(w.response) || w.statusText, P(R) || i(x("error", w.status, I(w.response) || w.statusText, w.getAllResponseHeaders()));
    }, N.ontimeout = (w) => {
      R.status = ee.ERROR, R.request = null, P(R) || Te(i)(w);
    }, N.onabort = () => {
      R.status = ee.QUEUED, R.request = null, l();
    };
  }, P = (R) => R.retries.length === 0 ? !1 : (R.status = ee.WAITING, clearTimeout(R.timeout), R.timeout = setTimeout(() => {
    F(R);
  }, R.retries.shift()), !0), v = () => {
    const R = u.reduce((I, m) => I === null || m.progress === null ? null : I + m.progress, 0);
    if (R === null)
      return a(!1, 0, 0);
    const B = u.reduce((I, m) => I + m.size, 0);
    a(!0, R, B);
  }, H = () => {
    u.filter((R) => R.status === ee.PROCESSING).length >= 1 || F();
  }, V = () => {
    u.forEach((R) => {
      clearTimeout(R.timeout), R.request && R.request.abort();
    });
  };
  return g.serverId ? S((R) => {
    g.aborted || (u.filter((B) => B.offset < R).forEach((B) => {
      B.status = ee.COMPLETE, B.progress = B.size;
    }), H());
  }) : b((R) => {
    g.aborted || (c(R), g.serverId = R, H());
  }), { abort: () => {
    g.aborted = !0, V();
  } };
}, Gn = (e, t, r, o) => (n, s, i, a, l, c, d) => {
  if (!n)
    return;
  const u = o.chunkUploads, p = u && n.size > o.chunkSize, T = u && (p || o.chunkForce);
  if (n instanceof Blob && T)
    return wn(e, t, r, n, s, i, a, l, c, d, o);
  const E = t.ondata || ((S) => S), _ = t.onload || ((S) => S), g = t.onerror || ((S) => null), h = typeof t.headers == "function" ? t.headers(n, s) || {} : { ...t.headers }, O = { ...t, headers: h };
  var A = new FormData();
  k(s) && A.append(r, JSON.stringify(s)), (n instanceof Blob ? [{ name: null, file: n }] : n).forEach((S) => {
    A.append(r, S.file, S.name === null ? S.file.name : `${S.name}${S.file.name}`);
  });
  const b = fe(E(A), ve(e, t.url), O);
  return b.onload = (S) => {
    i(x("load", S.status, _(S.response), S.getAllResponseHeaders()));
  }, b.onerror = (S) => {
    a(x("error", S.status, g(S.response) || S.statusText, S.getAllResponseHeaders()));
  }, b.ontimeout = Te(a), b.onprogress = l, b.onabort = c, b;
}, Fn = (e = "", t, r, o) => typeof t == "function" ? (...n) => t(r, ...n, o) : !t || !j(t.url) ? null : Gn(e, t, r, o), Me = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !j(t.url))
    return (n, s) => s();
  const r = t.onload || ((n) => n), o = t.onerror || ((n) => null);
  return (n, s, i) => {
    const a = fe(n, e + t.url, t);
    return a.onload = (l) => {
      s(x("load", l.status, r(l.response), l.getAllResponseHeaders()));
    }, a.onerror = (l) => {
      i(x("error", l.status, o(l.response) || l.statusText, l.getAllResponseHeaders()));
    }, a.ontimeout = Te(i), a;
  };
}, Gr = (e = 0, t = 1) => e + Math.random() * (t - e), Bn = (e, t = 1e3, r = 0, o = 25, n = 250) => {
  let s = null;
  const i = Date.now(), a = () => {
    let l = Date.now() - i, c = Gr(o, n);
    l + c > t && (c = l + c - t);
    let d = l / t;
    if (d >= 1 || document.hidden) {
      e(1);
      return;
    }
    e(d), s = setTimeout(a, c);
  };
  return t > 0 && a(), { clear: () => {
    clearTimeout(s);
  } };
}, Un = (e, t) => {
  const r = { complete: !1, perceivedProgress: 0, perceivedPerformanceUpdater: null, progress: null, timestamp: null, perceivedDuration: 0, duration: 0, request: null, response: null }, { allowMinimumUploadDuration: o } = t, n = (d, u) => {
    const p = () => {
      r.duration === 0 || r.progress === null || c.fire("progress", c.getProgress());
    }, T = () => {
      r.complete = !0, c.fire("load-perceived", r.response.body);
    };
    c.fire("start"), r.timestamp = Date.now(), r.perceivedPerformanceUpdater = Bn((E) => {
      r.perceivedProgress = E, r.perceivedDuration = Date.now() - r.timestamp, p(), r.response && r.perceivedProgress === 1 && !r.complete && T();
    }, o ? Gr(750, 1500) : 0), r.request = e(d, u, (E) => {
      r.response = k(E) ? E : { type: "load", code: 200, body: `${E}`, headers: {} }, r.duration = Date.now() - r.timestamp, r.progress = 1, c.fire("load", r.response.body), (!o || o && r.perceivedProgress === 1) && T();
    }, (E) => {
      r.perceivedPerformanceUpdater.clear(), c.fire("error", k(E) ? E : { type: "error", code: 0, body: `${E}` });
    }, (E, _, g) => {
      r.duration = Date.now() - r.timestamp, r.progress = E ? _ / g : null, p();
    }, () => {
      r.perceivedPerformanceUpdater.clear(), c.fire("abort", r.response ? r.response.body : null);
    }, (E) => {
      c.fire("transfer", E);
    });
  }, s = () => {
    r.request && (r.perceivedPerformanceUpdater.clear(), r.request.abort && r.request.abort(), r.complete = !0);
  }, i = () => {
    s(), r.complete = !1, r.perceivedProgress = 0, r.progress = 0, r.timestamp = null, r.perceivedDuration = 0, r.duration = 0, r.request = null, r.response = null;
  }, a = o ? () => r.progress ? Math.min(r.progress, r.perceivedProgress) : null : () => r.progress || null, l = o ? () => Math.min(r.duration, r.perceivedDuration) : () => r.duration, c = { ...Qe(), process: n, abort: s, getProgress: a, getDuration: l, reset: i };
  return c;
}, Fr = (e) => e.substring(0, e.lastIndexOf(".")) || e, xn = (e) => {
  let t = [e.name, e.size, e.type];
  return e instanceof Blob || ct(e) ? t[0] = e.name || vr() : ct(e) ? (t[1] = e.length, t[2] = wr(e)) : j(e) && (t[0] = Ce(e), t[1] = 0, t[2] = "application/octet-stream"), { name: t[0], size: t[1], type: t[2] };
}, Le = (e) => !!(e instanceof File || e instanceof Blob && e.name), Br = (e) => {
  if (!k(e))
    return e;
  const t = ke(e) ? [] : {};
  for (const r in e) {
    if (!e.hasOwnProperty(r))
      continue;
    const o = e[r];
    t[r] = o && k(o) ? Br(o) : o;
  }
  return t;
}, qn = (e = null, t = null, r = null) => {
  const o = mt(), n = { archived: !1, frozen: !1, released: !1, source: null, file: r, serverFileReference: t, transferId: null, processingAborted: !1, status: t ? C.PROCESSING_COMPLETE : C.INIT, activeLoader: null, activeProcessor: null };
  let s = null;
  const i = {}, a = (D) => n.status = D, l = (D, ...y) => {
    n.released || n.frozen || S.fire(D, ...y);
  }, c = () => Ze(n.file.name), d = () => n.file.type, u = () => n.file.size, p = () => n.file, T = (D, y, F) => {
    if (n.source = D, S.fireSync("init"), n.file) {
      S.fireSync("load-skip");
      return;
    }
    n.file = xn(D), y.on("init", () => {
      l("load-init");
    }), y.on("meta", (P) => {
      n.file.size = P.size, n.file.filename = P.filename, P.source && (e = W.LIMBO, n.serverFileReference = P.source, n.status = C.PROCESSING_COMPLETE), l("load-meta");
    }), y.on("progress", (P) => {
      a(C.LOADING), l("load-progress", P);
    }), y.on("error", (P) => {
      a(C.LOAD_ERROR), l("load-request-error", P);
    }), y.on("abort", () => {
      a(C.INIT), l("load-abort");
    }), y.on("load", (P) => {
      n.activeLoader = null;
      const v = (V) => {
        n.file = Le(V) ? V : n.file, e === W.LIMBO && n.serverFileReference ? a(C.PROCESSING_COMPLETE) : a(C.IDLE), l("load");
      }, H = (V) => {
        n.file = P, l("load-meta"), a(C.LOAD_ERROR), l("load-file-error", V);
      };
      if (n.serverFileReference) {
        v(P);
        return;
      }
      F(P, v, H);
    }), y.setSource(D), n.activeLoader = y, y.load();
  }, E = () => {
    n.activeLoader && n.activeLoader.load();
  }, _ = () => {
    if (n.activeLoader) {
      n.activeLoader.abort();
      return;
    }
    a(C.INIT), l("load-abort");
  }, g = (D, y) => {
    if (n.processingAborted) {
      n.processingAborted = !1;
      return;
    }
    if (a(C.PROCESSING), s = null, !(n.file instanceof Blob)) {
      S.on("load", () => {
        g(D, y);
      });
      return;
    }
    D.on("load", (v) => {
      n.transferId = null, n.serverFileReference = v;
    }), D.on("transfer", (v) => {
      n.transferId = v;
    }), D.on("load-perceived", (v) => {
      n.activeProcessor = null, n.transferId = null, n.serverFileReference = v, a(C.PROCESSING_COMPLETE), l("process-complete", v);
    }), D.on("start", () => {
      l("process-start");
    }), D.on("error", (v) => {
      n.activeProcessor = null, a(C.PROCESSING_ERROR), l("process-error", v);
    }), D.on("abort", (v) => {
      n.activeProcessor = null, n.serverFileReference = v, a(C.IDLE), l("process-abort"), s && s();
    }), D.on("progress", (v) => {
      l("process-progress", v);
    });
    const F = (v) => {
      n.archived || D.process(v, { ...i });
    }, P = console.error;
    y(n.file, F, P), n.activeProcessor = D;
  }, h = () => {
    n.processingAborted = !1, a(C.PROCESSING_QUEUED);
  }, O = () => new Promise((D) => {
    if (!n.activeProcessor) {
      n.processingAborted = !0, a(C.IDLE), l("process-abort"), D();
      return;
    }
    s = () => {
      D();
    }, n.activeProcessor.abort();
  }), A = (D, y) => new Promise((F, P) => {
    const v = n.serverFileReference !== null ? n.serverFileReference : n.transferId;
    if (v === null) {
      F();
      return;
    }
    D(v, () => {
      n.serverFileReference = null, n.transferId = null, F();
    }, (H) => {
      if (!y) {
        F();
        return;
      }
      a(C.PROCESSING_REVERT_ERROR), l("process-revert-error"), P(H);
    }), a(C.IDLE), l("process-revert");
  }), b = (D, y, F) => {
    const P = D.split("."), v = P[0], H = P.pop();
    let V = i;
    P.forEach((R) => V = V[R]), JSON.stringify(V[H]) !== JSON.stringify(y) && (V[H] = y, l("metadata-update", { key: v, value: i[v], silent: F }));
  }, S = { id: { get: () => o }, origin: { get: () => e, set: (D) => e = D }, serverId: { get: () => n.serverFileReference }, transferId: { get: () => n.transferId }, status: { get: () => n.status }, filename: { get: () => n.file.name }, filenameWithoutExtension: { get: () => Fr(n.file.name) }, fileExtension: { get: c }, fileType: { get: d }, fileSize: { get: u }, file: { get: p }, relativePath: { get: () => n.file._relativePath }, source: { get: () => n.source }, getMetadata: (D) => Br(D ? i[D] : i), setMetadata: (D, y, F) => {
    if (k(D)) {
      const P = D;
      return Object.keys(P).forEach((v) => {
        b(v, P[v], y);
      }), D;
    }
    return b(D, y, F), y;
  }, extend: (D, y) => M[D] = y, abortLoad: _, retryLoad: E, requestProcessing: h, abortProcessing: O, load: T, process: g, revert: A, ...Qe(), freeze: () => n.frozen = !0, release: () => n.released = !0, released: { get: () => n.released }, archive: () => n.archived = !0, archived: { get: () => n.archived } }, M = Ee(S);
  return M;
}, Vn = (e, t) => ae(t) ? 0 : j(t) ? e.findIndex((r) => r.id === t) : -1, zt = (e, t) => {
  const r = Vn(e, t);
  if (!(r < 0))
    return e[r] || null;
}, Yn = (e, t, r, o, n, s) => {
  const i = fe(null, e, { method: "GET", responseType: "blob" });
  return i.onload = (a) => {
    const l = a.getAllResponseHeaders(), c = gt(l).name || Ce(e);
    t(x("load", a.status, ye(a.response, c), l));
  }, i.onerror = (a) => {
    r(x("error", a.status, a.statusText, a.getAllResponseHeaders()));
  }, i.onheaders = (a) => {
    s(x("headers", a.status, null, a.getAllResponseHeaders()));
  }, i.ontimeout = Te(r), i.onprogress = o, i.onabort = n, i;
}, Ht = (e) => (e.indexOf("//") === 0 && (e = location.protocol + e), e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0]), zn = (e) => (e.indexOf(":") > -1 || e.indexOf("//") > -1) && Ht(location.href) !== Ht(e), Ge = (e) => (...t) => ue(e) ? e(...t) : e, Hn = (e) => !Le(e.file), rt = (e, t) => {
  clearTimeout(t.listUpdateTimeout), t.listUpdateTimeout = setTimeout(() => {
    e("DID_UPDATE_ITEMS", { items: ie(t.items) });
  }, 0);
}, Xt = (e, ...t) => new Promise((r) => {
  if (!e)
    return r(!0);
  const o = e(...t);
  if (o == null)
    return r(!0);
  if (typeof o == "boolean")
    return r(o);
  typeof o.then == "function" && o.then(r);
}), ot = (e, t) => {
  e.items.sort((r, o) => t(K(r), K(o)));
}, te = (e, t) => ({ query: r, success: o = () => {
}, failure: n = () => {
}, ...s } = {}) => {
  const i = _e(e.items, r);
  if (!i) {
    n({ error: x("error", 0, "Item not found"), file: null });
    return;
  }
  t(i, o, n, s || {});
}, Xn = (e, t, r) => ({ ABORT_ALL: () => {
  ie(r.items).forEach((o) => {
    o.freeze(), o.abortLoad(), o.abortProcessing();
  });
}, DID_SET_FILES: ({ value: o = [] }) => {
  const n = o.map((i) => ({ source: i.source ? i.source : i, options: i.options }));
  let s = ie(r.items);
  s.forEach((i) => {
    n.find((a) => a.source === i.source || a.source === i.file) || e("REMOVE_ITEM", { query: i, remove: !1 });
  }), s = ie(r.items), n.forEach((i, a) => {
    s.find((l) => l.source === i.source || l.file === i.source) || e("ADD_ITEM", { ...i, interactionMethod: re.NONE, index: a });
  });
}, DID_UPDATE_ITEM_METADATA: ({ id: o, action: n, change: s }) => {
  s.silent || (clearTimeout(r.itemUpdateTimeout), r.itemUpdateTimeout = setTimeout(() => {
    const i = zt(r.items, o);
    if (!t("IS_ASYNC")) {
      ne("SHOULD_PREPARE_OUTPUT", !1, { item: i, query: t, action: n, change: s }).then((d) => {
        const u = t("GET_BEFORE_PREPARE_FILE");
        u && (d = u(i, d)), d && e("REQUEST_PREPARE_OUTPUT", { query: o, item: i, success: (p) => {
          e("DID_PREPARE_OUTPUT", { id: o, file: p });
        } }, !0);
      });
      return;
    }
    i.origin === W.LOCAL && e("DID_LOAD_ITEM", { id: i.id, error: null, serverFileReference: i.source });
    const a = () => {
      setTimeout(() => {
        e("REQUEST_ITEM_PROCESSING", { query: o });
      }, 32);
    }, l = (d) => {
      i.revert(Me(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then(d ? a : () => {
      }).catch(() => {
      });
    }, c = (d) => {
      i.abortProcessing().then(d ? a : () => {
      });
    };
    if (i.status === C.PROCESSING_COMPLETE)
      return l(r.options.instantUpload);
    if (i.status === C.PROCESSING)
      return c(r.options.instantUpload);
    r.options.instantUpload && a();
  }, 0));
}, MOVE_ITEM: ({ query: o, index: n }) => {
  const s = _e(r.items, o);
  if (!s)
    return;
  const i = r.items.indexOf(s);
  n = Nr(n, 0, r.items.length - 1), i !== n && r.items.splice(n, 0, r.items.splice(i, 1)[0]);
}, SORT: ({ compare: o }) => {
  ot(r, o), e("DID_SORT_ITEMS", { items: t("GET_ACTIVE_ITEMS") });
}, ADD_ITEMS: ({ items: o, index: n, interactionMethod: s, success: i = () => {
}, failure: a = () => {
} }) => {
  let l = n;
  if (n === -1 || typeof n > "u") {
    const p = t("GET_ITEM_INSERT_LOCATION"), T = t("GET_TOTAL_ITEMS");
    l = p === "before" ? 0 : T;
  }
  const c = t("GET_IGNORED_FILES"), d = (p) => Le(p) ? !c.includes(p.name.toLowerCase()) : !ae(p), u = o.filter(d).map((p) => new Promise((T, E) => {
    e("ADD_ITEM", { interactionMethod: s, source: p.source || p, success: T, failure: E, index: l++, options: p.options || {} });
  }));
  Promise.all(u).then(i).catch(a);
}, ADD_ITEM: ({ source: o, index: n = -1, interactionMethod: s, success: i = () => {
}, failure: a = () => {
}, options: l = {} }) => {
  if (ae(o)) {
    a({ error: x("error", 0, "No source"), file: null });
    return;
  }
  if (Le(o) && r.options.ignoredFiles.includes(o.name.toLowerCase()))
    return;
  if (!Rn(r)) {
    if (r.options.allowMultiple || !r.options.allowMultiple && !r.options.allowReplace) {
      const O = x("warning", 0, "Max files");
      e("DID_THROW_MAX_FILES", { source: o, error: O }), a({ error: O, file: null });
      return;
    }
    const h = ie(r.items)[0];
    if (h.status === C.PROCESSING_COMPLETE || h.status === C.PROCESSING_REVERT_ERROR) {
      const O = t("GET_FORCE_REVERT");
      if (h.revert(Me(r.options.server.url, r.options.server.revert), O).then(() => {
        O && e("ADD_ITEM", { source: o, index: n, interactionMethod: s, success: i, failure: a, options: l });
      }).catch(() => {
      }), O)
        return;
    }
    e("REMOVE_ITEM", { query: h.id });
  }
  const c = l.type === "local" ? W.LOCAL : l.type === "limbo" ? W.LIMBO : W.INPUT, d = qn(c, c === W.INPUT ? null : o, l.file);
  Object.keys(l.metadata || {}).forEach((h) => {
    d.setMetadata(h, l.metadata[h]);
  }), me("DID_CREATE_ITEM", d, { query: t, dispatch: e });
  const u = t("GET_ITEM_INSERT_LOCATION");
  r.options.itemInsertLocationFreedom || (n = u === "before" ? -1 : r.items.length), On(r.items, d, n), ue(u) && o && ot(r, u);
  const p = d.id;
  d.on("init", () => {
    e("DID_INIT_ITEM", { id: p });
  }), d.on("load-init", () => {
    e("DID_START_ITEM_LOAD", { id: p });
  }), d.on("load-meta", () => {
    e("DID_UPDATE_ITEM_META", { id: p });
  }), d.on("load-progress", (h) => {
    e("DID_UPDATE_ITEM_LOAD_PROGRESS", { id: p, progress: h });
  }), d.on("load-request-error", (h) => {
    const O = Ge(r.options.labelFileLoadError)(h);
    if (h.code >= 400 && h.code < 500) {
      e("DID_THROW_ITEM_INVALID", { id: p, error: h, status: { main: O, sub: `${h.code} (${h.body})` } }), a({ error: h, file: K(d) });
      return;
    }
    e("DID_THROW_ITEM_LOAD_ERROR", { id: p, error: h, status: { main: O, sub: r.options.labelTapToRetry } });
  }), d.on("load-file-error", (h) => {
    e("DID_THROW_ITEM_INVALID", { id: p, error: h.status, status: h.status }), a({ error: h.status, file: K(d) });
  }), d.on("load-abort", () => {
    e("REMOVE_ITEM", { query: p });
  }), d.on("load-skip", () => {
    e("COMPLETE_LOAD_ITEM", { query: p, item: d, data: { source: o, success: i } });
  }), d.on("load", () => {
    const h = (O) => {
      if (!O) {
        e("REMOVE_ITEM", { query: p });
        return;
      }
      d.on("metadata-update", (A) => {
        e("DID_UPDATE_ITEM_METADATA", { id: p, change: A });
      }), ne("SHOULD_PREPARE_OUTPUT", !1, { item: d, query: t }).then((A) => {
        const b = t("GET_BEFORE_PREPARE_FILE");
        b && (A = b(d, A));
        const S = () => {
          e("COMPLETE_LOAD_ITEM", { query: p, item: d, data: { source: o, success: i } }), rt(e, r);
        };
        if (A) {
          e("REQUEST_PREPARE_OUTPUT", { query: p, item: d, success: (M) => {
            e("DID_PREPARE_OUTPUT", { id: p, file: M }), S();
          } }, !0);
          return;
        }
        S();
      });
    };
    ne("DID_LOAD_ITEM", d, { query: t, dispatch: e }).then(() => {
      Xt(t("GET_BEFORE_ADD_FILE"), K(d)).then(h);
    }).catch((O) => {
      if (!O || !O.error || !O.status)
        return h(!1);
      e("DID_THROW_ITEM_INVALID", { id: p, error: O.error, status: O.status });
    });
  }), d.on("process-start", () => {
    e("DID_START_ITEM_PROCESSING", { id: p });
  }), d.on("process-progress", (h) => {
    e("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id: p, progress: h });
  }), d.on("process-error", (h) => {
    e("DID_THROW_ITEM_PROCESSING_ERROR", { id: p, error: h, status: { main: Ge(r.options.labelFileProcessingError)(h), sub: r.options.labelTapToRetry } });
  }), d.on("process-revert-error", (h) => {
    e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", { id: p, error: h, status: { main: Ge(r.options.labelFileProcessingRevertError)(h), sub: r.options.labelTapToRetry } });
  }), d.on("process-complete", (h) => {
    e("DID_COMPLETE_ITEM_PROCESSING", { id: p, error: null, serverFileReference: h }), e("DID_DEFINE_VALUE", { id: p, value: h });
  }), d.on("process-abort", () => {
    e("DID_ABORT_ITEM_PROCESSING", { id: p });
  }), d.on("process-revert", () => {
    e("DID_REVERT_ITEM_PROCESSING", { id: p }), e("DID_DEFINE_VALUE", { id: p, value: null });
  }), e("DID_ADD_ITEM", { id: p, index: n, interactionMethod: s }), rt(e, r);
  const { url: T, load: E, restore: _, fetch: g } = r.options.server || {};
  d.load(o, Cn(c === W.INPUT ? j(o) && zn(o) && g ? tt(T, g) : Yn : c === W.LIMBO ? tt(T, _) : tt(T, E)), (h, O, A) => {
    ne("LOAD_FILE", h, { query: t }).then(O).catch(A);
  });
}, REQUEST_PREPARE_OUTPUT: ({ item: o, success: n, failure: s = () => {
} }) => {
  const i = { error: x("error", 0, "Item not found"), file: null };
  if (o.archived)
    return s(i);
  ne("PREPARE_OUTPUT", o.file, { query: t, item: o }).then((a) => {
    ne("COMPLETE_PREPARE_OUTPUT", a, { query: t, item: o }).then((l) => {
      if (o.archived)
        return s(i);
      n(l);
    });
  });
}, COMPLETE_LOAD_ITEM: ({ item: o, data: n }) => {
  const { success: s, source: i } = n, a = t("GET_ITEM_INSERT_LOCATION");
  if (ue(a) && i && ot(r, a), e("DID_LOAD_ITEM", { id: o.id, error: null, serverFileReference: o.origin === W.INPUT ? null : i }), s(K(o)), o.origin === W.LOCAL) {
    e("DID_LOAD_LOCAL_ITEM", { id: o.id });
    return;
  }
  if (o.origin === W.LIMBO) {
    e("DID_COMPLETE_ITEM_PROCESSING", { id: o.id, error: null, serverFileReference: i }), e("DID_DEFINE_VALUE", { id: o.id, value: o.serverId || i });
    return;
  }
  t("IS_ASYNC") && r.options.instantUpload && e("REQUEST_ITEM_PROCESSING", { query: o.id });
}, RETRY_ITEM_LOAD: te(r, (o) => {
  o.retryLoad();
}), REQUEST_ITEM_PREPARE: te(r, (o, n, s) => {
  e("REQUEST_PREPARE_OUTPUT", { query: o.id, item: o, success: (i) => {
    e("DID_PREPARE_OUTPUT", { id: o.id, file: i }), n({ file: o, output: i });
  }, failure: s }, !0);
}), REQUEST_ITEM_PROCESSING: te(r, (o, n, s) => {
  if (!(o.status === C.IDLE || o.status === C.PROCESSING_ERROR)) {
    const i = () => e("REQUEST_ITEM_PROCESSING", { query: o, success: n, failure: s }), a = () => document.hidden ? i() : setTimeout(i, 32);
    o.status === C.PROCESSING_COMPLETE || o.status === C.PROCESSING_REVERT_ERROR ? o.revert(Me(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then(a).catch(() => {
    }) : o.status === C.PROCESSING && o.abortProcessing().then(a);
    return;
  }
  o.status !== C.PROCESSING_QUEUED && (o.requestProcessing(), e("DID_REQUEST_ITEM_PROCESSING", { id: o.id }), e("PROCESS_ITEM", { query: o, success: n, failure: s }, !0));
}), PROCESS_ITEM: te(r, (o, n, s) => {
  const i = t("GET_MAX_PARALLEL_UPLOADS");
  if (t("GET_ITEMS_BY_STATUS", C.PROCESSING).length === i) {
    r.processingQueue.push({ id: o.id, success: n, failure: s });
    return;
  }
  if (o.status === C.PROCESSING)
    return;
  const a = () => {
    const c = r.processingQueue.shift();
    if (!c)
      return;
    const { id: d, success: u, failure: p } = c, T = _e(r.items, d);
    if (!T || T.archived) {
      a();
      return;
    }
    e("PROCESS_ITEM", { query: d, success: u, failure: p }, !0);
  };
  o.onOnce("process-complete", () => {
    n(K(o)), a();
    const c = r.options.server;
    if (r.options.instantUpload && o.origin === W.LOCAL && ue(c.remove)) {
      const d = () => {
      };
      o.origin = W.LIMBO, r.options.server.remove(o.source, d, d);
    }
    t("GET_ITEMS_BY_STATUS", C.PROCESSING_COMPLETE).length === r.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL");
  }), o.onOnce("process-error", (c) => {
    s({ error: c, file: K(o) }), a();
  });
  const l = r.options;
  o.process(Un(Fn(l.server.url, l.server.process, l.name, { chunkTransferId: o.transferId, chunkServer: l.server.patch, chunkUploads: l.chunkUploads, chunkForce: l.chunkForce, chunkSize: l.chunkSize, chunkRetryDelays: l.chunkRetryDelays }), { allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION") }), (c, d, u) => {
    ne("PREPARE_OUTPUT", c, { query: t, item: o }).then((p) => {
      e("DID_PREPARE_OUTPUT", { id: o.id, file: p }), d(p);
    }).catch(u);
  });
}), RETRY_ITEM_PROCESSING: te(r, (o) => {
  e("REQUEST_ITEM_PROCESSING", { query: o });
}), REQUEST_REMOVE_ITEM: te(r, (o) => {
  Xt(t("GET_BEFORE_REMOVE_FILE"), K(o)).then((n) => {
    n && e("REMOVE_ITEM", { query: o });
  });
}), RELEASE_ITEM: te(r, (o) => {
  o.release();
}), REMOVE_ITEM: te(r, (o, n, s, i) => {
  const a = () => {
    const c = o.id;
    zt(r.items, c).archive(), e("DID_REMOVE_ITEM", { error: null, id: c, item: o }), rt(e, r), n(K(o));
  }, l = r.options.server;
  o.origin === W.LOCAL && l && ue(l.remove) && i.remove !== !1 ? (e("DID_START_ITEM_REMOVE", { id: o.id }), l.remove(o.source, () => a(), (c) => {
    e("DID_THROW_ITEM_REMOVE_ERROR", { id: o.id, error: x("error", 0, c, null), status: { main: Ge(r.options.labelFileRemoveError)(c), sub: r.options.labelTapToRetry } });
  })) : ((i.revert && o.origin !== W.LOCAL && o.serverId !== null || r.options.chunkUploads && o.file.size > r.options.chunkSize || r.options.chunkUploads && r.options.chunkForce) && o.revert(Me(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")), a());
}), ABORT_ITEM_LOAD: te(r, (o) => {
  o.abortLoad();
}), ABORT_ITEM_PROCESSING: te(r, (o) => {
  if (o.serverId) {
    e("REVERT_ITEM_PROCESSING", { id: o.id });
    return;
  }
  o.abortProcessing().then(() => {
    r.options.instantUpload && e("REMOVE_ITEM", { query: o.id });
  });
}), REQUEST_REVERT_ITEM_PROCESSING: te(r, (o) => {
  if (!r.options.instantUpload) {
    e("REVERT_ITEM_PROCESSING", { query: o });
    return;
  }
  const n = (a) => {
    a && e("REVERT_ITEM_PROCESSING", { query: o });
  }, s = t("GET_BEFORE_REMOVE_FILE");
  if (!s)
    return n(!0);
  const i = s(K(o));
  if (i == null)
    return n(!0);
  if (typeof i == "boolean")
    return n(i);
  typeof i.then == "function" && i.then(n);
}), REVERT_ITEM_PROCESSING: te(r, (o) => {
  o.revert(Me(r.options.server.url, r.options.server.revert), t("GET_FORCE_REVERT")).then(() => {
    (r.options.instantUpload || Hn(o)) && e("REMOVE_ITEM", { query: o.id });
  }).catch(() => {
  });
}), SET_OPTIONS: ({ options: o }) => {
  const n = Object.keys(o), s = Wn.filter((i) => n.includes(i));
  [...s, ...Object.keys(o).filter((i) => !s.includes(i))].forEach((i) => {
    e(`SET_${je(i, "_").toUpperCase()}`, { value: o[i] });
  });
} }), Wn = ["server"], Ot = (e) => e, le = (e) => document.createElement(e), q = (e, t) => {
  let r = e.childNodes[0];
  r ? t !== r.nodeValue && (r.nodeValue = t) : (r = document.createTextNode(t), e.appendChild(r));
}, Wt = (e, t, r, o) => {
  const n = (o % 360 - 90) * Math.PI / 180;
  return { x: e + r * Math.cos(n), y: t + r * Math.sin(n) };
}, kn = (e, t, r, o, n, s) => {
  const i = Wt(e, t, r, n), a = Wt(e, t, r, o);
  return ["M", i.x, i.y, "A", r, r, 0, s, 0, a.x, a.y].join(" ");
}, $n = (e, t, r, o, n) => {
  let s = 1;
  return n > o && n - o <= 0.5 && (s = 0), o > n && o - n >= 0.5 && (s = 0), kn(e, t, r, Math.min(0.9999, o) * 360, Math.min(0.9999, n) * 360, s);
}, jn = ({ root: e, props: t }) => {
  t.spin = !1, t.progress = 0, t.opacity = 0;
  const r = Ye("svg");
  e.ref.path = Ye("path", { "stroke-width": 2, "stroke-linecap": "round" }), r.appendChild(e.ref.path), e.ref.svg = r, e.appendChild(r);
}, Qn = ({ root: e, props: t }) => {
  if (t.opacity === 0)
    return;
  t.align && (e.element.dataset.align = t.align);
  const r = parseInt(Y(e.ref.path, "stroke-width"), 10), o = e.rect.element.width * 0.5;
  let n = 0, s = 0;
  t.spin ? (n = 0, s = 0.5) : (n = 0, s = t.progress);
  const i = $n(o, o, o - r, n, s);
  Y(e.ref.path, "d", i), Y(e.ref.path, "stroke-opacity", t.spin || t.progress > 0 ? 1 : 0);
}, kt = z({ tag: "div", name: "progress-indicator", ignoreRectUpdate: !0, ignoreRect: !0, create: jn, write: Qn, mixins: { apis: ["progress", "spin", "align"], styles: ["opacity"], animations: { opacity: { type: "tween", duration: 500 }, progress: { type: "spring", stiffness: 0.95, damping: 0.65, mass: 10 } } } }), Zn = ({ root: e, props: t }) => {
  e.element.innerHTML = (t.icon || "") + `<span>${t.label}</span>`, t.isDisabled = !1;
}, Kn = ({ root: e, props: t }) => {
  const { isDisabled: r } = t, o = e.query("GET_DISABLED") || t.opacity === 0;
  o && !r ? (t.isDisabled = !0, Y(e.element, "disabled", "disabled")) : !o && r && (t.isDisabled = !1, e.element.removeAttribute("disabled"));
}, Ur = z({ tag: "button", attributes: { type: "button" }, ignoreRect: !0, ignoreRectUpdate: !0, name: "file-action-button", mixins: { apis: ["label"], styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"], animations: { scaleX: "spring", scaleY: "spring", translateX: "spring", translateY: "spring", opacity: { type: "tween", duration: 250 } }, listeners: !0 }, create: Zn, write: Kn }), xr = (e, t = ".", r = 1e3, o = {}) => {
  const { labelBytes: n = "bytes", labelKilobytes: s = "KB", labelMegabytes: i = "MB", labelGigabytes: a = "GB" } = o;
  e = Math.round(Math.abs(e));
  const l = r, c = r * r, d = r * r * r;
  return e < l ? `${e} ${n}` : e < c ? `${Math.floor(e / l)} ${s}` : e < d ? `${$t(e / c, 1, t)} ${i}` : `${$t(e / d, 2, t)} ${a}`;
}, $t = (e, t, r) => e.toFixed(t).split(".").filter((o) => o !== "0").join(r), Jn = ({ root: e, props: t }) => {
  const r = le("span");
  r.className = "filepond--file-info-main", Y(r, "aria-hidden", "true"), e.appendChild(r), e.ref.fileName = r;
  const o = le("span");
  o.className = "filepond--file-info-sub", e.appendChild(o), e.ref.fileSize = o, q(o, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), q(r, Ot(e.query("GET_ITEM_NAME", t.id)));
}, dt = ({ root: e, props: t }) => {
  q(e.ref.fileSize, xr(e.query("GET_ITEM_SIZE", t.id), ".", e.query("GET_FILE_SIZE_BASE"), e.query("GET_FILE_SIZE_LABELS", e.query))), q(e.ref.fileName, Ot(e.query("GET_ITEM_NAME", t.id)));
}, jt = ({ root: e, props: t }) => {
  if (Ae(e.query("GET_ITEM_SIZE", t.id))) {
    dt({ root: e, props: t });
    return;
  }
  q(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
}, ei = z({ name: "file-info", ignoreRect: !0, ignoreRectUpdate: !0, write: Q({ DID_LOAD_ITEM: dt, DID_UPDATE_ITEM_META: dt, DID_THROW_ITEM_LOAD_ERROR: jt, DID_THROW_ITEM_INVALID: jt }), didCreateView: (e) => {
  me("CREATE_VIEW", { ...e, view: e });
}, create: Jn, mixins: { styles: ["translateX", "translateY"], animations: { translateX: "spring", translateY: "spring" } } }), qr = (e) => Math.round(e * 100), ti = ({ root: e }) => {
  const t = le("span");
  t.className = "filepond--file-status-main", e.appendChild(t), e.ref.main = t;
  const r = le("span");
  r.className = "filepond--file-status-sub", e.appendChild(r), e.ref.sub = r, Vr({ root: e, action: { progress: null } });
}, Vr = ({ root: e, action: t }) => {
  const r = t.progress === null ? e.query("GET_LABEL_FILE_LOADING") : `${e.query("GET_LABEL_FILE_LOADING")} ${qr(t.progress)}%`;
  q(e.ref.main, r), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, ri = ({ root: e, action: t }) => {
  const r = t.progress === null ? e.query("GET_LABEL_FILE_PROCESSING") : `${e.query("GET_LABEL_FILE_PROCESSING")} ${qr(t.progress)}%`;
  q(e.ref.main, r), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, oi = ({ root: e }) => {
  q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, ni = ({ root: e }) => {
  q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"));
}, ii = ({ root: e }) => {
  q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"));
}, Qt = ({ root: e }) => {
  q(e.ref.main, ""), q(e.ref.sub, "");
}, Ne = ({ root: e, action: t }) => {
  q(e.ref.main, t.status.main), q(e.ref.sub, t.status.sub);
}, si = z({ name: "file-status", ignoreRect: !0, ignoreRectUpdate: !0, write: Q({ DID_LOAD_ITEM: Qt, DID_REVERT_ITEM_PROCESSING: Qt, DID_REQUEST_ITEM_PROCESSING: oi, DID_ABORT_ITEM_PROCESSING: ni, DID_COMPLETE_ITEM_PROCESSING: ii, DID_UPDATE_ITEM_PROCESS_PROGRESS: ri, DID_UPDATE_ITEM_LOAD_PROGRESS: Vr, DID_THROW_ITEM_LOAD_ERROR: Ne, DID_THROW_ITEM_INVALID: Ne, DID_THROW_ITEM_PROCESSING_ERROR: Ne, DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Ne, DID_THROW_ITEM_REMOVE_ERROR: Ne }), didCreateView: (e) => {
  me("CREATE_VIEW", { ...e, view: e });
}, create: ti, mixins: { styles: ["translateX", "translateY", "opacity"], animations: { opacity: { type: "tween", duration: 250 }, translateX: "spring", translateY: "spring" } } }), Et = { AbortItemLoad: { label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD", action: "ABORT_ITEM_LOAD", className: "filepond--action-abort-item-load", align: "LOAD_INDICATOR_POSITION" }, RetryItemLoad: { label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD", action: "RETRY_ITEM_LOAD", icon: "GET_ICON_RETRY", className: "filepond--action-retry-item-load", align: "BUTTON_PROCESS_ITEM_POSITION" }, RemoveItem: { label: "GET_LABEL_BUTTON_REMOVE_ITEM", action: "REQUEST_REMOVE_ITEM", icon: "GET_ICON_REMOVE", className: "filepond--action-remove-item", align: "BUTTON_REMOVE_ITEM_POSITION" }, ProcessItem: { label: "GET_LABEL_BUTTON_PROCESS_ITEM", action: "REQUEST_ITEM_PROCESSING", icon: "GET_ICON_PROCESS", className: "filepond--action-process-item", align: "BUTTON_PROCESS_ITEM_POSITION" }, AbortItemProcessing: { label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING", action: "ABORT_ITEM_PROCESSING", className: "filepond--action-abort-item-processing", align: "BUTTON_PROCESS_ITEM_POSITION" }, RetryItemProcessing: { label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING", action: "RETRY_ITEM_PROCESSING", icon: "GET_ICON_RETRY", className: "filepond--action-retry-item-processing", align: "BUTTON_PROCESS_ITEM_POSITION" }, RevertItemProcessing: { label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING", action: "REQUEST_REVERT_ITEM_PROCESSING", icon: "GET_ICON_UNDO", className: "filepond--action-revert-item-processing", align: "BUTTON_PROCESS_ITEM_POSITION" } }, pt = [];
U(Et, (e) => {
  pt.push(e);
});
const J = (e) => {
  if (ut(e) === "right")
    return 0;
  const t = e.ref.buttonRemoveItem.rect.element;
  return t.hidden ? null : t.width + t.left;
}, ai = (e) => e.ref.buttonAbortItemLoad.rect.element.width, Fe = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4), li = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2), ci = (e) => e.query("GET_STYLE_LOAD_INDICATOR_POSITION"), di = (e) => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"), ut = (e) => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"), Ei = { buttonAbortItemLoad: { opacity: 0 }, buttonRetryItemLoad: { opacity: 0 }, buttonRemoveItem: { opacity: 0 }, buttonProcessItem: { opacity: 0 }, buttonAbortItemProcessing: { opacity: 0 }, buttonRetryItemProcessing: { opacity: 0 }, buttonRevertItemProcessing: { opacity: 0 }, loadProgressIndicator: { opacity: 0, align: ci }, processProgressIndicator: { opacity: 0, align: di }, processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 }, info: { translateX: 0, translateY: 0, opacity: 0 }, status: { translateX: 0, translateY: 0, opacity: 0 } }, Zt = { buttonRemoveItem: { opacity: 1 }, buttonProcessItem: { opacity: 1 }, info: { translateX: J }, status: { translateX: J } }, nt = { buttonAbortItemProcessing: { opacity: 1 }, processProgressIndicator: { opacity: 1 }, status: { opacity: 1 } }, Oe = { DID_THROW_ITEM_INVALID: { buttonRemoveItem: { opacity: 1 }, info: { translateX: J }, status: { translateX: J, opacity: 1 } }, DID_START_ITEM_LOAD: { buttonAbortItemLoad: { opacity: 1 }, loadProgressIndicator: { opacity: 1 }, status: { opacity: 1 } }, DID_THROW_ITEM_LOAD_ERROR: { buttonRetryItemLoad: { opacity: 1 }, buttonRemoveItem: { opacity: 1 }, info: { translateX: J }, status: { opacity: 1 } }, DID_START_ITEM_REMOVE: { processProgressIndicator: { opacity: 1, align: ut }, info: { translateX: J }, status: { opacity: 0 } }, DID_THROW_ITEM_REMOVE_ERROR: { processProgressIndicator: { opacity: 0, align: ut }, buttonRemoveItem: { opacity: 1 }, info: { translateX: J }, status: { opacity: 1, translateX: J } }, DID_LOAD_ITEM: Zt, DID_LOAD_LOCAL_ITEM: { buttonRemoveItem: { opacity: 1 }, info: { translateX: J }, status: { translateX: J } }, DID_START_ITEM_PROCESSING: nt, DID_REQUEST_ITEM_PROCESSING: nt, DID_UPDATE_ITEM_PROCESS_PROGRESS: nt, DID_COMPLETE_ITEM_PROCESSING: { buttonRevertItemProcessing: { opacity: 1 }, info: { opacity: 1 }, status: { opacity: 1 } }, DID_THROW_ITEM_PROCESSING_ERROR: { buttonRemoveItem: { opacity: 1 }, buttonRetryItemProcessing: { opacity: 1 }, status: { opacity: 1 }, info: { translateX: J } }, DID_THROW_ITEM_PROCESSING_REVERT_ERROR: { buttonRevertItemProcessing: { opacity: 1 }, status: { opacity: 1 }, info: { opacity: 1 } }, DID_ABORT_ITEM_PROCESSING: { buttonRemoveItem: { opacity: 1 }, buttonProcessItem: { opacity: 1 }, info: { translateX: J }, status: { opacity: 1 } }, DID_REVERT_ITEM_PROCESSING: Zt }, pi = z({ create: ({ root: e }) => {
  e.element.innerHTML = e.query("GET_ICON_DONE");
}, name: "processing-complete-indicator", ignoreRect: !0, mixins: { styles: ["scaleX", "scaleY", "opacity"], animations: { scaleX: "spring", scaleY: "spring", opacity: { type: "tween", duration: 250 } } } }), ui = ({ root: e, props: t }) => {
  const r = Object.keys(Et).reduce((E, _) => (E[_] = { ...Et[_] }, E), {}), { id: o } = t, n = e.query("GET_ALLOW_REVERT"), s = e.query("GET_ALLOW_REMOVE"), i = e.query("GET_ALLOW_PROCESS"), a = e.query("GET_INSTANT_UPLOAD"), l = e.query("IS_ASYNC"), c = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let d;
  l ? i && !n ? d = (E) => !/RevertItemProcessing/.test(E) : !i && n ? d = (E) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(E) : !i && !n && (d = (E) => !/Process/.test(E)) : d = (E) => !/Process/.test(E);
  const u = d ? pt.filter(d) : pt.concat();
  if (a && n && (r.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", r.RevertItemProcessing.icon = "GET_ICON_REMOVE"), l && !n) {
    const E = Oe.DID_COMPLETE_ITEM_PROCESSING;
    E.info.translateX = li, E.info.translateY = Fe, E.status.translateY = Fe, E.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (l && !i && (["DID_START_ITEM_PROCESSING", "DID_REQUEST_ITEM_PROCESSING", "DID_UPDATE_ITEM_PROCESS_PROGRESS", "DID_THROW_ITEM_PROCESSING_ERROR"].forEach((E) => {
    Oe[E].status.translateY = Fe;
  }), Oe.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = ai), c && n) {
    r.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
    const E = Oe.DID_COMPLETE_ITEM_PROCESSING;
    E.info.translateX = J, E.status.translateY = Fe, E.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  s || (r.RemoveItem.disabled = !0), U(r, (E, _) => {
    const g = e.createChildView(Ur, { label: e.query(_.label), icon: e.query(_.icon), opacity: 0 });
    u.includes(E) && e.appendChildView(g), _.disabled && (g.element.setAttribute("disabled", "disabled"), g.element.setAttribute("hidden", "hidden")), g.element.dataset.align = e.query(`GET_STYLE_${_.align}`), g.element.classList.add(_.className), g.on("click", (h) => {
      h.stopPropagation(), !_.disabled && e.dispatch(_.action, { query: o });
    }), e.ref[`button${E}`] = g;
  }), e.ref.processingCompleteIndicator = e.appendChildView(e.createChildView(pi)), e.ref.processingCompleteIndicator.element.dataset.align = e.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"), e.ref.info = e.appendChildView(e.createChildView(ei, { id: o })), e.ref.status = e.appendChildView(e.createChildView(si, { id: o }));
  const p = e.appendChildView(e.createChildView(kt, { opacity: 0, align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION") }));
  p.element.classList.add("filepond--load-indicator"), e.ref.loadProgressIndicator = p;
  const T = e.appendChildView(e.createChildView(kt, { opacity: 0, align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION") }));
  T.element.classList.add("filepond--process-indicator"), e.ref.processProgressIndicator = T, e.ref.activeStyles = [];
}, _i = ({ root: e, actions: t, props: r }) => {
  fi({ root: e, actions: t, props: r });
  let o = t.concat().filter((n) => /^DID_/.test(n.type)).reverse().find((n) => Oe[n.type]);
  if (o) {
    e.ref.activeStyles = [];
    const n = Oe[o.type];
    U(Ei, (s, i) => {
      const a = e.ref[s];
      U(i, (l, c) => {
        const d = n[s] && typeof n[s][l] < "u" ? n[s][l] : c;
        e.ref.activeStyles.push({ control: a, key: l, value: d });
      });
    });
  }
  e.ref.activeStyles.forEach(({ control: n, key: s, value: i }) => {
    n[s] = typeof i == "function" ? i(e) : i;
  });
}, fi = Q({ DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: t }) => {
  e.ref.buttonAbortItemProcessing.label = t.value;
}, DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
  e.ref.buttonAbortItemLoad.label = t.value;
}, DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
  e.ref.buttonAbortItemRemoval.label = t.value;
}, DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
  e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
}, DID_START_ITEM_LOAD: ({ root: e }) => {
  e.ref.loadProgressIndicator.spin = !0, e.ref.loadProgressIndicator.progress = 0;
}, DID_START_ITEM_REMOVE: ({ root: e }) => {
  e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
}, DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
  e.ref.loadProgressIndicator.spin = !1, e.ref.loadProgressIndicator.progress = t.progress;
}, DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
  e.ref.processProgressIndicator.spin = !1, e.ref.processProgressIndicator.progress = t.progress;
} }), Ti = z({ create: ui, write: _i, didCreateView: (e) => {
  me("CREATE_VIEW", { ...e, view: e });
}, name: "file" }), Ii = ({ root: e, props: t }) => {
  e.ref.fileName = le("legend"), e.appendChild(e.ref.fileName), e.ref.file = e.appendChildView(e.createChildView(Ti, { id: t.id })), e.ref.data = !1;
}, mi = ({ root: e, props: t }) => {
  q(e.ref.fileName, Ot(e.query("GET_ITEM_NAME", t.id)));
}, hi = z({ create: Ii, ignoreRect: !0, write: Q({ DID_LOAD_ITEM: mi }), didCreateView: (e) => {
  me("CREATE_VIEW", { ...e, view: e });
}, tag: "fieldset", name: "file-wrapper" }), Kt = { type: "spring", damping: 0.6, mass: 7 }, Ri = ({ root: e, props: t }) => {
  [{ name: "top" }, { name: "center", props: { translateY: null, scaleY: null }, mixins: { animations: { scaleY: Kt }, styles: ["translateY", "scaleY"] } }, { name: "bottom", props: { translateY: null }, mixins: { animations: { translateY: Kt }, styles: ["translateY"] } }].forEach((r) => {
    gi(e, r, t.name);
  }), e.element.classList.add(`filepond--${t.name}`), e.ref.scalable = null;
}, gi = (e, t, r) => {
  const o = z({ name: `panel-${t.name} filepond--${r}`, mixins: t.mixins, ignoreRectUpdate: !0 }), n = e.createChildView(o, t.props);
  e.ref[t.name] = e.appendChildView(n);
}, Oi = ({ root: e, props: t }) => {
  if ((e.ref.scalable === null || t.scalable !== e.ref.scalable) && (e.ref.scalable = Or(t.scalable) ? t.scalable : !0, e.element.dataset.scalable = e.ref.scalable), !t.height)
    return;
  const r = e.ref.top.rect.element, o = e.ref.bottom.rect.element, n = Math.max(r.height + o.height, t.height);
  e.ref.center.translateY = r.height, e.ref.center.scaleY = (n - r.height - o.height) / 100, e.ref.bottom.translateY = n - o.height;
}, Yr = z({ name: "panel", read: ({ root: e, props: t }) => t.heightCurrent = e.ref.bottom.translateY, write: Oi, create: Ri, ignoreRect: !0, mixins: { apis: ["height", "heightCurrent", "scalable"] } }), Di = (e) => {
  const t = e.map((o) => o.id);
  let r;
  return { setIndex: (o) => {
    r = o;
  }, getIndex: () => r, getItemIndex: (o) => t.indexOf(o.id) };
}, Jt = { type: "spring", stiffness: 0.75, damping: 0.45, mass: 10 }, er = "spring", tr = { DID_START_ITEM_LOAD: "busy", DID_UPDATE_ITEM_LOAD_PROGRESS: "loading", DID_THROW_ITEM_INVALID: "load-invalid", DID_THROW_ITEM_LOAD_ERROR: "load-error", DID_LOAD_ITEM: "idle", DID_THROW_ITEM_REMOVE_ERROR: "remove-error", DID_START_ITEM_REMOVE: "busy", DID_START_ITEM_PROCESSING: "busy processing", DID_REQUEST_ITEM_PROCESSING: "busy processing", DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing", DID_COMPLETE_ITEM_PROCESSING: "processing-complete", DID_THROW_ITEM_PROCESSING_ERROR: "processing-error", DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error", DID_ABORT_ITEM_PROCESSING: "cancelled", DID_REVERT_ITEM_PROCESSING: "idle" }, Si = ({ root: e, props: t }) => {
  if (e.ref.handleClick = (o) => e.dispatch("DID_ACTIVATE_ITEM", { id: t.id }), e.element.id = `filepond--item-${t.id}`, e.element.addEventListener("click", e.ref.handleClick), e.ref.container = e.appendChildView(e.createChildView(hi, { id: t.id })), e.ref.panel = e.appendChildView(e.createChildView(Yr, { name: "item-panel" })), e.ref.panel.height = null, t.markedForRemoval = !1, !e.query("GET_ALLOW_REORDER"))
    return;
  e.element.dataset.dragState = "idle";
  const r = (o) => {
    if (!o.isPrimary)
      return;
    let n = !1;
    const s = { x: o.pageX, y: o.pageY };
    t.dragOrigin = { x: e.translateX, y: e.translateY }, t.dragCenter = { x: o.offsetX, y: o.offsetY };
    const i = Di(e.query("GET_ACTIVE_ITEMS"));
    e.dispatch("DID_GRAB_ITEM", { id: t.id, dragState: i });
    const a = (c) => {
      c.isPrimary && (c.stopPropagation(), c.preventDefault(), t.dragOffset = { x: c.pageX - s.x, y: c.pageY - s.y }, t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 && !n && (n = !0, e.element.removeEventListener("click", e.ref.handleClick)), e.dispatch("DID_DRAG_ITEM", { id: t.id, dragState: i }));
    }, l = (c) => {
      c.isPrimary && (document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", l), t.dragOffset = { x: c.pageX - s.x, y: c.pageY - s.y }, e.dispatch("DID_DROP_ITEM", { id: t.id, dragState: i }), n && setTimeout(() => e.element.addEventListener("click", e.ref.handleClick), 0));
    };
    document.addEventListener("pointermove", a), document.addEventListener("pointerup", l);
  };
  e.element.addEventListener("pointerdown", r);
}, yi = Q({ DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
  e.height = t.height;
} }), Li = Q({ DID_GRAB_ITEM: ({ root: e, props: t }) => {
  t.dragOrigin = { x: e.translateX, y: e.translateY };
}, DID_DRAG_ITEM: ({ root: e }) => {
  e.element.dataset.dragState = "drag";
}, DID_DROP_ITEM: ({ root: e, props: t }) => {
  t.dragOffset = null, t.dragOrigin = null, e.element.dataset.dragState = "drop";
} }, ({ root: e, actions: t, props: r, shouldOptimize: o }) => {
  e.element.dataset.dragState === "drop" && e.scaleX <= 1 && (e.element.dataset.dragState = "idle");
  let n = t.concat().filter((i) => /^DID_/.test(i.type)).reverse().find((i) => tr[i.type]);
  n && n.type !== r.currentState && (r.currentState = n.type, e.element.dataset.filepondItemState = tr[r.currentState] || "");
  const s = e.query("GET_ITEM_PANEL_ASPECT_RATIO") || e.query("GET_PANEL_ASPECT_RATIO");
  s ? o || (e.height = e.rect.element.width * s) : (yi({ root: e, actions: t, props: r }), !e.height && e.ref.container.rect.element.height > 0 && (e.height = e.ref.container.rect.element.height)), o && (e.ref.panel.height = null), e.ref.panel.height = e.height;
}), Ai = z({ create: Si, write: Li, destroy: ({ root: e, props: t }) => {
  e.element.removeEventListener("click", e.ref.handleClick), e.dispatch("RELEASE_ITEM", { query: t.id });
}, tag: "li", name: "item", mixins: { apis: ["id", "interactionMethod", "markedForRemoval", "spawnDate", "dragCenter", "dragOrigin", "dragOffset"], styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"], animations: { scaleX: er, scaleY: er, translateX: Jt, translateY: Jt, opacity: { type: "tween", duration: 150 } } } });
var Dt = (e, t) => Math.max(1, Math.floor((e + 1) / t));
const St = (e, t, r) => {
  if (!r)
    return;
  const o = e.rect.element.width, n = t.length;
  let s = null;
  if (n === 0 || r.top < t[0].rect.element.top)
    return -1;
  const i = t[0].rect.element, a = i.marginLeft + i.marginRight, l = i.width + a, c = Dt(o, l);
  if (c === 1) {
    for (let p = 0; p < n; p++) {
      const T = t[p], E = T.rect.outer.top + T.rect.element.height * 0.5;
      if (r.top < E)
        return p;
    }
    return n;
  }
  const d = i.marginTop + i.marginBottom, u = i.height + d;
  for (let p = 0; p < n; p++) {
    const T = p % c, E = Math.floor(p / c), _ = T * l, g = E * u, h = g - i.marginTop, O = _ + l, A = g + u + i.marginBottom;
    if (r.top < A && r.top > h) {
      if (r.left < O)
        return p;
      p !== n - 1 ? s = p : s = null;
    }
  }
  return s !== null ? s : n;
}, Be = { height: 0, width: 0, get getHeight() {
  return this.height;
}, set setHeight(e) {
  (this.height === 0 || e === 0) && (this.height = e);
}, get getWidth() {
  return this.width;
}, set setWidth(e) {
  (this.width === 0 || e === 0) && (this.width = e);
}, setDimensions: function(e, t) {
  (this.height === 0 || e === 0) && (this.height = e), (this.width === 0 || t === 0) && (this.width = t);
} }, Pi = ({ root: e }) => {
  Y(e.element, "role", "list"), e.ref.lastItemSpanwDate = Date.now();
}, bi = ({ root: e, action: t }) => {
  const { id: r, index: o, interactionMethod: n } = t;
  e.ref.addIndex = o;
  const s = Date.now();
  let i = s, a = 1;
  if (n !== re.NONE) {
    a = 0;
    const l = e.query("GET_ITEM_INSERT_INTERVAL"), c = s - e.ref.lastItemSpanwDate;
    i = c < l ? s + (l - c) : s;
  }
  e.ref.lastItemSpanwDate = i, e.appendChildView(e.createChildView(Ai, { spawnDate: i, id: r, opacity: a, interactionMethod: n }), o);
}, rr = (e, t, r, o = 0, n = 1) => {
  e.dragOffset ? (e.translateX = null, e.translateY = null, e.translateX = e.dragOrigin.x + e.dragOffset.x, e.translateY = e.dragOrigin.y + e.dragOffset.y, e.scaleX = 1.025, e.scaleY = 1.025) : (e.translateX = t, e.translateY = r, Date.now() > e.spawnDate && (e.opacity === 0 && Mi(e, t, r, o, n), e.scaleX = 1, e.scaleY = 1, e.opacity = 1));
}, Mi = (e, t, r, o, n) => {
  e.interactionMethod === re.NONE ? (e.translateX = null, e.translateX = t, e.translateY = null, e.translateY = r) : e.interactionMethod === re.DROP ? (e.translateX = null, e.translateX = t - o * 20, e.translateY = null, e.translateY = r - n * 10, e.scaleX = 0.8, e.scaleY = 0.8) : e.interactionMethod === re.BROWSE ? (e.translateY = null, e.translateY = r - 30) : e.interactionMethod === re.API && (e.translateX = null, e.translateX = t - 30, e.translateY = null);
}, Ni = ({ root: e, action: t }) => {
  const { id: r } = t, o = e.childViews.find((n) => n.id === r);
  o && (o.scaleX = 0.9, o.scaleY = 0.9, o.opacity = 0, o.markedForRemoval = !0);
}, it = (e) => e.rect.element.height + e.rect.element.marginBottom * 0.5 + e.rect.element.marginTop * 0.5, vi = (e) => e.rect.element.width + e.rect.element.marginLeft * 0.5 + e.rect.element.marginRight * 0.5, Ci = ({ root: e, action: t }) => {
  const { id: r, dragState: o } = t, n = e.query("GET_ITEM", { id: r }), s = e.childViews.find((g) => g.id === r), i = e.childViews.length, a = o.getItemIndex(n);
  if (!s)
    return;
  const l = { x: s.dragOrigin.x + s.dragOffset.x + s.dragCenter.x, y: s.dragOrigin.y + s.dragOffset.y + s.dragCenter.y }, c = it(s), d = vi(s);
  let u = Math.floor(e.rect.outer.width / d);
  u > i && (u = i);
  const p = Math.floor(i / u + 1);
  Be.setHeight = c * p, Be.setWidth = d * u;
  var T = { y: Math.floor(l.y / c), x: Math.floor(l.x / d), getGridIndex: function() {
    return l.y > Be.getHeight || l.y < 0 || l.x > Be.getWidth || l.x < 0 ? a : this.y * u + this.x;
  }, getColIndex: function() {
    const g = e.query("GET_ACTIVE_ITEMS"), h = e.childViews.filter((P) => P.rect.element.height), O = g.map((P) => h.find((v) => v.id === P.id)), A = O.findIndex((P) => P === s), b = it(s), S = O.length;
    let M = S, D = 0, y = 0, F = 0;
    for (let P = 0; P < S; P++)
      if (D = it(O[P]), F = y, y = F + D, l.y < y) {
        if (A > P) {
          if (l.y < F + b) {
            M = P;
            break;
          }
          continue;
        }
        M = P;
        break;
      }
    return M;
  } };
  const E = u > 1 ? T.getGridIndex() : T.getColIndex();
  e.dispatch("MOVE_ITEM", { query: s, index: E });
  const _ = o.getIndex();
  if (_ === void 0 || _ !== E) {
    if (o.setIndex(E), _ === void 0)
      return;
    e.dispatch("DID_REORDER_ITEMS", { items: e.query("GET_ACTIVE_ITEMS"), origin: a, target: E });
  }
}, wi = Q({ DID_ADD_ITEM: bi, DID_REMOVE_ITEM: Ni, DID_DRAG_ITEM: Ci }), Gi = ({ root: e, props: t, actions: r, shouldOptimize: o }) => {
  wi({ root: e, props: t, actions: r });
  const { dragCoordinates: n } = t, s = e.rect.element.width, i = e.childViews.filter((A) => A.rect.element.height), a = e.query("GET_ACTIVE_ITEMS").map((A) => i.find((b) => b.id === A.id)).filter((A) => A), l = n ? St(e, a, n) : null, c = e.ref.addIndex || null;
  e.ref.addIndex = null;
  let d = 0, u = 0, p = 0;
  if (a.length === 0)
    return;
  const T = a[0].rect.element, E = T.marginTop + T.marginBottom, _ = T.marginLeft + T.marginRight, g = T.width + _, h = T.height + E, O = Dt(s, g);
  if (O === 1) {
    let A = 0, b = 0;
    a.forEach((S, M) => {
      if (l) {
        let y = M - l;
        y === -2 ? b = -E * 0.25 : y === -1 ? b = -E * 0.75 : y === 0 ? b = E * 0.75 : y === 1 ? b = E * 0.25 : b = 0;
      }
      o && (S.translateX = null, S.translateY = null), S.markedForRemoval || rr(S, 0, A + b);
      let D = (S.rect.element.height + E) * (S.markedForRemoval ? S.opacity : 1);
      A += D;
    });
  } else {
    let A = 0, b = 0;
    a.forEach((S, M) => {
      M === l && (d = 1), M === c && (p += 1), S.markedForRemoval && S.opacity < 0.5 && (u -= 1);
      const D = M + p + d + u, y = D % O, F = Math.floor(D / O), P = y * g, v = F * h, H = Math.sign(P - A), V = Math.sign(v - b);
      A = P, b = v, !S.markedForRemoval && (o && (S.translateX = null, S.translateY = null), rr(S, P, v, H, V));
    });
  }
}, Fi = (e, t) => t.filter((r) => r.data && r.data.id ? e.id === r.data.id : !0), Bi = z({ create: Pi, write: Gi, tag: "ul", name: "list", didWriteView: ({ root: e }) => {
  e.childViews.filter((t) => t.markedForRemoval && t.opacity === 0 && t.resting).forEach((t) => {
    t._destroy(), e.removeChildView(t);
  });
}, filterFrameActionsForChild: Fi, mixins: { apis: ["dragCoordinates"] } }), Ui = ({ root: e, props: t }) => {
  e.ref.list = e.appendChildView(e.createChildView(Bi)), t.dragCoordinates = null, t.overflowing = !1;
}, xi = ({ root: e, props: t, action: r }) => {
  e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (t.dragCoordinates = { left: r.position.scopeLeft - e.ref.list.rect.element.left, top: r.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop) });
}, qi = ({ props: e }) => {
  e.dragCoordinates = null;
}, Vi = Q({ DID_DRAG: xi, DID_END_DRAG: qi }), Yi = ({ root: e, props: t, actions: r }) => {
  if (Vi({ root: e, props: t, actions: r }), e.ref.list.dragCoordinates = t.dragCoordinates, t.overflowing && !t.overflow && (t.overflowing = !1, e.element.dataset.state = "", e.height = null), t.overflow) {
    const o = Math.round(t.overflow);
    o !== e.height && (t.overflowing = !0, e.element.dataset.state = "overflow", e.height = o);
  }
}, zi = z({ create: Ui, write: Yi, name: "list-scroller", mixins: { apis: ["overflow", "dragCoordinates"], styles: ["height", "translateY"], animations: { translateY: "spring" } } }), se = (e, t, r, o = "") => {
  r ? Y(e, t, o) : e.removeAttribute(t);
}, Hi = (e) => {
  if (!(!e || e.value === "")) {
    try {
      e.value = "";
    } catch {
    }
    if (e.value) {
      const t = le("form"), r = e.parentNode, o = e.nextSibling;
      t.appendChild(e), t.reset(), o ? r.insertBefore(e, o) : r.appendChild(e);
    }
  }
}, Xi = ({ root: e, props: t }) => {
  e.element.id = `filepond--browser-${t.id}`, Y(e.element, "name", e.query("GET_NAME")), Y(e.element, "aria-controls", `filepond--assistant-${t.id}`), Y(e.element, "aria-labelledby", `filepond--drop-label-${t.id}`), zr({ root: e, action: { value: e.query("GET_ACCEPTED_FILE_TYPES") } }), Hr({ root: e, action: { value: e.query("GET_ALLOW_MULTIPLE") } }), Xr({ root: e, action: { value: e.query("GET_ALLOW_DIRECTORIES_ONLY") } }), _t({ root: e }), Wr({ root: e, action: { value: e.query("GET_REQUIRED") } }), kr({ root: e, action: { value: e.query("GET_CAPTURE_METHOD") } }), e.ref.handleChange = (r) => {
    if (!e.element.value)
      return;
    const o = Array.from(e.element.files).map((n) => (n._relativePath = n.webkitRelativePath, n));
    setTimeout(() => {
      t.onload(o), Hi(e.element);
    }, 250);
  }, e.element.addEventListener("change", e.ref.handleChange);
}, zr = ({ root: e, action: t }) => {
  e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && se(e.element, "accept", !!t.value, t.value ? t.value.join(",") : "");
}, Hr = ({ root: e, action: t }) => {
  se(e.element, "multiple", t.value);
}, Xr = ({ root: e, action: t }) => {
  se(e.element, "webkitdirectory", t.value);
}, _t = ({ root: e }) => {
  const t = e.query("GET_DISABLED"), r = e.query("GET_ALLOW_BROWSE"), o = t || !r;
  se(e.element, "disabled", o);
}, Wr = ({ root: e, action: t }) => {
  t.value ? e.query("GET_TOTAL_ITEMS") === 0 && se(e.element, "required", !0) : se(e.element, "required", !1);
}, kr = ({ root: e, action: t }) => {
  se(e.element, "capture", !!t.value, t.value === !0 ? "" : t.value);
}, or = ({ root: e }) => {
  const { element: t } = e;
  e.query("GET_TOTAL_ITEMS") > 0 ? (se(t, "required", !1), se(t, "name", !1)) : (se(t, "name", !0, e.query("GET_NAME")), e.query("GET_CHECK_VALIDITY") && t.setCustomValidity(""), e.query("GET_REQUIRED") && se(t, "required", !0));
}, Wi = ({ root: e }) => {
  e.query("GET_CHECK_VALIDITY") && e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"));
}, ki = z({ tag: "input", name: "browser", ignoreRect: !0, ignoreRectUpdate: !0, attributes: { type: "file" }, create: Xi, destroy: ({ root: e }) => {
  e.element.removeEventListener("change", e.ref.handleChange);
}, write: Q({ DID_LOAD_ITEM: or, DID_REMOVE_ITEM: or, DID_THROW_ITEM_INVALID: Wi, DID_SET_DISABLED: _t, DID_SET_ALLOW_BROWSE: _t, DID_SET_ALLOW_DIRECTORIES_ONLY: Xr, DID_SET_ALLOW_MULTIPLE: Hr, DID_SET_ACCEPTED_FILE_TYPES: zr, DID_SET_CAPTURE_METHOD: kr, DID_SET_REQUIRED: Wr }) }), nr = { ENTER: 13, SPACE: 32 }, $i = ({ root: e, props: t }) => {
  const r = le("label");
  Y(r, "for", `filepond--browser-${t.id}`), Y(r, "id", `filepond--drop-label-${t.id}`), Y(r, "aria-hidden", "true"), e.ref.handleKeyDown = (o) => {
    (o.keyCode === nr.ENTER || o.keyCode === nr.SPACE) && (o.preventDefault(), e.ref.label.click());
  }, e.ref.handleClick = (o) => {
    o.target === r || r.contains(o.target) || e.ref.label.click();
  }, r.addEventListener("keydown", e.ref.handleKeyDown), e.element.addEventListener("click", e.ref.handleClick), $r(r, t.caption), e.appendChild(r), e.ref.label = r;
}, $r = (e, t) => {
  e.innerHTML = t;
  const r = e.querySelector(".filepond--label-action");
  return r && Y(r, "tabindex", "0"), t;
}, ji = z({ name: "drop-label", ignoreRect: !0, create: $i, destroy: ({ root: e }) => {
  e.ref.label.addEventListener("keydown", e.ref.handleKeyDown), e.element.removeEventListener("click", e.ref.handleClick);
}, write: Q({ DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
  $r(e.ref.label, t.value);
} }), mixins: { styles: ["opacity", "translateX", "translateY"], animations: { opacity: { type: "tween", duration: 150 }, translateX: "spring", translateY: "spring" } } }), Qi = z({ name: "drip-blob", ignoreRect: !0, mixins: { styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"], animations: { scaleX: "spring", scaleY: "spring", translateX: "spring", translateY: "spring", opacity: { type: "tween", duration: 250 } } } }), Zi = ({ root: e }) => {
  const t = e.rect.element.width * 0.5, r = e.rect.element.height * 0.5;
  e.ref.blob = e.appendChildView(e.createChildView(Qi, { opacity: 0, scaleX: 2.5, scaleY: 2.5, translateX: t, translateY: r }));
}, Ki = ({ root: e, action: t }) => {
  if (!e.ref.blob) {
    Zi({ root: e });
    return;
  }
  e.ref.blob.translateX = t.position.scopeLeft, e.ref.blob.translateY = t.position.scopeTop, e.ref.blob.scaleX = 1, e.ref.blob.scaleY = 1, e.ref.blob.opacity = 1;
}, Ji = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.opacity = 0);
}, es = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.scaleX = 2.5, e.ref.blob.scaleY = 2.5, e.ref.blob.opacity = 0);
}, ts = ({ root: e, props: t, actions: r }) => {
  rs({ root: e, props: t, actions: r });
  const { blob: o } = e.ref;
  r.length === 0 && o && o.opacity === 0 && (e.removeChildView(o), e.ref.blob = null);
}, rs = Q({ DID_DRAG: Ki, DID_DROP: es, DID_END_DRAG: Ji }), os = z({ ignoreRect: !0, ignoreRectUpdate: !0, name: "drip", write: ts }), jr = (e, t) => {
  try {
    const r = new DataTransfer();
    t.forEach((o) => {
      o instanceof File ? r.items.add(o) : r.items.add(new File([o], o.name, { type: o.type }));
    }), e.files = r.files;
  } catch {
    return !1;
  }
  return !0;
}, ns = ({ root: e }) => e.ref.fields = {}, Ke = (e, t) => e.ref.fields[t], yt = (e) => {
  e.query("GET_ACTIVE_ITEMS").forEach((t) => {
    e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
  });
}, ir = ({ root: e }) => yt(e), is = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).origin !== W.LOCAL && e.query("SHOULD_UPDATE_FILE_INPUT"), o = le("input");
  o.type = r ? "file" : "hidden", o.name = e.query("GET_NAME"), o.disabled = e.query("GET_DISABLED"), e.ref.fields[t.id] = o, yt(e);
}, ss = ({ root: e, action: t }) => {
  const r = Ke(e, t.id);
  if (!r || (t.serverFileReference !== null && (r.value = t.serverFileReference), !e.query("SHOULD_UPDATE_FILE_INPUT")))
    return;
  const o = e.query("GET_ITEM", t.id);
  jr(r, [o.file]);
}, as = ({ root: e, action: t }) => {
  e.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(() => {
    const r = Ke(e, t.id);
    r && jr(r, [t.file]);
  }, 0);
}, ls = ({ root: e }) => {
  e.element.disabled = e.query("GET_DISABLED");
}, cs = ({ root: e, action: t }) => {
  const r = Ke(e, t.id);
  r && (r.parentNode && r.parentNode.removeChild(r), delete e.ref.fields[t.id]);
}, ds = ({ root: e, action: t }) => {
  const r = Ke(e, t.id);
  r && (t.value === null ? r.removeAttribute("value") : r.type != "file" && (r.value = t.value), yt(e));
}, Es = Q({ DID_SET_DISABLED: ls, DID_ADD_ITEM: is, DID_LOAD_ITEM: ss, DID_REMOVE_ITEM: cs, DID_DEFINE_VALUE: ds, DID_PREPARE_OUTPUT: as, DID_REORDER_ITEMS: ir, DID_SORT_ITEMS: ir }), ps = z({ tag: "fieldset", name: "data", create: ns, write: Es, ignoreRect: !0 }), us = (e) => "getRootNode" in e ? e.getRootNode() : document, _s = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"], fs = ["css", "csv", "html", "txt"], Ts = { zip: "zip|compressed", epub: "application/epub+zip" }, Qr = (e = "") => (e = e.toLowerCase(), _s.includes(e) ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e) : fs.includes(e) ? "text/" + e : Ts[e] || ""), Lt = (e) => new Promise((t, r) => {
  const o = Ss(e);
  if (o.length && !Is(e))
    return t(o);
  ms(e).then(t);
}), Is = (e) => e.files ? e.files.length > 0 : !1, ms = (e) => new Promise((t, r) => {
  const o = (e.items ? Array.from(e.items) : []).filter((n) => hs(n)).map((n) => Rs(n));
  if (!o.length) {
    t(e.files ? Array.from(e.files) : []);
    return;
  }
  Promise.all(o).then((n) => {
    const s = [];
    n.forEach((i) => {
      s.push.apply(s, i);
    }), t(s.filter((i) => i).map((i) => (i._relativePath || (i._relativePath = i.webkitRelativePath), i)));
  }).catch(console.error);
}), hs = (e) => {
  if (Zr(e)) {
    const t = At(e);
    if (t)
      return t.isFile || t.isDirectory;
  }
  return e.kind === "file";
}, Rs = (e) => new Promise((t, r) => {
  if (Ds(e)) {
    gs(At(e)).then(t).catch(r);
    return;
  }
  t([e.getAsFile()]);
}), gs = (e) => new Promise((t, r) => {
  const o = [];
  let n = 0, s = 0;
  const i = () => {
    s === 0 && n === 0 && t(o);
  }, a = (l) => {
    n++;
    const c = l.createReader(), d = () => {
      c.readEntries((u) => {
        if (u.length === 0) {
          n--, i();
          return;
        }
        u.forEach((p) => {
          p.isDirectory ? a(p) : (s++, p.file((T) => {
            const E = Os(T);
            p.fullPath && (E._relativePath = p.fullPath), o.push(E), s--, i();
          }));
        }), d();
      }, r);
    };
    d();
  };
  a(e);
}), Os = (e) => {
  if (e.type.length)
    return e;
  const t = e.lastModifiedDate, r = e.name, o = Qr(Ze(e.name));
  return o.length && (e = e.slice(0, e.size, o), e.name = r, e.lastModifiedDate = t), e;
}, Ds = (e) => Zr(e) && (At(e) || {}).isDirectory, Zr = (e) => "webkitGetAsEntry" in e, At = (e) => e.webkitGetAsEntry(), Ss = (e) => {
  let t = [];
  try {
    if (t = Ls(e), t.length)
      return t;
    t = ys(e);
  } catch {
  }
  return t;
}, ys = (e) => {
  let t = e.getData("url");
  return typeof t == "string" && t.length ? [t] : [];
}, Ls = (e) => {
  let t = e.getData("text/html");
  if (typeof t == "string" && t.length) {
    const r = t.match(/src\s*=\s*"(.+?)"/);
    if (r)
      return [r[1]];
  }
  return [];
}, He = [], Ie = (e) => ({ pageLeft: e.pageX, pageTop: e.pageY, scopeLeft: e.offsetX || e.layerX, scopeTop: e.offsetY || e.layerY }), As = (e, t, r) => {
  const o = Ps(t), n = { element: e, filterElement: r, state: null, ondrop: () => {
  }, onenter: () => {
  }, ondrag: () => {
  }, onexit: () => {
  }, onload: () => {
  }, allowdrop: () => {
  } };
  return n.destroy = o.addListener(n), n;
}, Ps = (e) => {
  const t = He.find((o) => o.element === e);
  if (t)
    return t;
  const r = bs(e);
  return He.push(r), r;
}, bs = (e) => {
  const t = [], r = { dragenter: Ns, dragover: vs, dragleave: ws, drop: Cs }, o = {};
  U(r, (s, i) => {
    o[s] = i(e, t), e.addEventListener(s, o[s], !1);
  });
  const n = { element: e, addListener: (s) => (t.push(s), () => {
    t.splice(t.indexOf(s), 1), t.length === 0 && (He.splice(He.indexOf(n), 1), U(r, (i) => {
      e.removeEventListener(i, o[i], !1);
    }));
  }) };
  return n;
}, Ms = (e, t) => ("elementFromPoint" in e || (e = document), e.elementFromPoint(t.x, t.y)), Pt = (e, t) => {
  const r = us(t), o = Ms(r, { x: e.pageX - window.pageXOffset, y: e.pageY - window.pageYOffset });
  return o === t || t.contains(o);
};
let Kr = null;
const Ue = (e, t) => {
  try {
    e.dropEffect = t;
  } catch {
  }
}, Ns = (e, t) => (r) => {
  r.preventDefault(), Kr = r.target, t.forEach((o) => {
    const { element: n, onenter: s } = o;
    Pt(r, n) && (o.state = "enter", s(Ie(r)));
  });
}, vs = (e, t) => (r) => {
  r.preventDefault();
  const o = r.dataTransfer;
  Lt(o).then((n) => {
    let s = !1;
    t.some((i) => {
      const { filterElement: a, element: l, onenter: c, onexit: d, ondrag: u, allowdrop: p } = i;
      Ue(o, "copy");
      const T = p(n);
      if (!T) {
        Ue(o, "none");
        return;
      }
      if (Pt(r, l)) {
        if (s = !0, i.state === null) {
          i.state = "enter", c(Ie(r));
          return;
        }
        if (i.state = "over", a && !T) {
          Ue(o, "none");
          return;
        }
        u(Ie(r));
      } else
        a && !s && Ue(o, "none"), i.state && (i.state = null, d(Ie(r)));
    });
  });
}, Cs = (e, t) => (r) => {
  r.preventDefault();
  const o = r.dataTransfer;
  Lt(o).then((n) => {
    t.forEach((s) => {
      const { filterElement: i, element: a, ondrop: l, onexit: c, allowdrop: d } = s;
      if (s.state = null, !(i && !Pt(r, a))) {
        if (!d(n))
          return c(Ie(r));
        l(Ie(r), n);
      }
    });
  });
}, ws = (e, t) => (r) => {
  Kr === r.target && t.forEach((o) => {
    const { onexit: n } = o;
    o.state = null, n(Ie(r));
  });
}, Gs = (e, t, r) => {
  e.classList.add("filepond--hopper");
  const { catchesDropsOnPage: o, requiresDropOnElement: n, filterItems: s = (d) => d } = r, i = As(e, o ? document.documentElement : e, n);
  let a = "", l = "";
  i.allowdrop = (d) => t(s(d)), i.ondrop = (d, u) => {
    const p = s(u);
    if (!t(p)) {
      c.ondragend(d);
      return;
    }
    l = "drag-drop", c.onload(p, d);
  }, i.ondrag = (d) => {
    c.ondrag(d);
  }, i.onenter = (d) => {
    l = "drag-over", c.ondragstart(d);
  }, i.onexit = (d) => {
    l = "drag-exit", c.ondragend(d);
  };
  const c = { updateHopperState: () => {
    a !== l && (e.dataset.hopperState = l, a = l);
  }, onload: () => {
  }, ondragstart: () => {
  }, ondrag: () => {
  }, ondragend: () => {
  }, destroy: () => {
    i.destroy();
  } };
  return c;
};
let ft = !1;
const De = [], Jr = (e) => {
  const t = document.activeElement;
  if (t && /textarea|input/i.test(t.nodeName)) {
    let r = !1, o = t;
    for (; o !== document.body; ) {
      if (o.classList.contains("filepond--root")) {
        r = !0;
        break;
      }
      o = o.parentNode;
    }
    if (!r)
      return;
  }
  Lt(e.clipboardData).then((r) => {
    r.length && De.forEach((o) => o(r));
  });
}, Fs = (e) => {
  De.includes(e) || (De.push(e), !ft && (ft = !0, document.addEventListener("paste", Jr)));
}, Bs = (e) => {
  ht(De, De.indexOf(e)), De.length === 0 && (document.removeEventListener("paste", Jr), ft = !1);
}, Us = () => {
  const e = (r) => {
    t.onload(r);
  }, t = { destroy: () => {
    Bs(e);
  }, onload: () => {
  } };
  return Fs(e), t;
}, xs = ({ root: e, props: t }) => {
  e.element.id = `filepond--assistant-${t.id}`, Y(e.element, "role", "status"), Y(e.element, "aria-live", "polite"), Y(e.element, "aria-relevant", "additions");
};
let sr = null, ar = null;
const st = [], Je = (e, t) => {
  e.element.textContent = t;
}, qs = (e) => {
  e.element.textContent = "";
}, eo = (e, t, r) => {
  const o = e.query("GET_TOTAL_ITEMS");
  Je(e, `${r} ${t}, ${o} ${o === 1 ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL")}`), clearTimeout(ar), ar = setTimeout(() => {
    qs(e);
  }, 1500);
}, to = (e) => e.element.parentNode.contains(document.activeElement), Vs = ({ root: e, action: t }) => {
  if (!to(e))
    return;
  e.element.textContent = "";
  const r = e.query("GET_ITEM", t.id);
  st.push(r.filename), clearTimeout(sr), sr = setTimeout(() => {
    eo(e, st.join(", "), e.query("GET_LABEL_FILE_ADDED")), st.length = 0;
  }, 750);
}, Ys = ({ root: e, action: t }) => {
  if (!to(e))
    return;
  const r = t.item;
  eo(e, r.filename, e.query("GET_LABEL_FILE_REMOVED"));
}, zs = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename, o = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  Je(e, `${r} ${o}`);
}, lr = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename, o = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  Je(e, `${r} ${o}`);
}, xe = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename;
  Je(e, `${t.status.main} ${r} ${t.status.sub}`);
}, Hs = z({ create: xs, ignoreRect: !0, ignoreRectUpdate: !0, write: Q({ DID_LOAD_ITEM: Vs, DID_REMOVE_ITEM: Ys, DID_COMPLETE_ITEM_PROCESSING: zs, DID_ABORT_ITEM_PROCESSING: lr, DID_REVERT_ITEM_PROCESSING: lr, DID_THROW_ITEM_REMOVE_ERROR: xe, DID_THROW_ITEM_LOAD_ERROR: xe, DID_THROW_ITEM_INVALID: xe, DID_THROW_ITEM_PROCESSING_ERROR: xe }), tag: "span", name: "assistant" }), ro = (e, t = "-") => e.replace(new RegExp(`${t}.`, "g"), (r) => r.charAt(1).toUpperCase()), oo = (e, t = 16, r = !0) => {
  let o = Date.now(), n = null;
  return (...s) => {
    clearTimeout(n);
    const i = Date.now() - o, a = () => {
      o = Date.now(), e(...s);
    };
    i < t ? r || (n = setTimeout(a, t - i)) : a();
  };
}, Xs = 1e6, Xe = (e) => e.preventDefault(), Ws = ({ root: e, props: t }) => {
  const r = e.query("GET_ID");
  r && (e.element.id = r);
  const o = e.query("GET_CLASS_NAME");
  o && o.split(" ").filter((a) => a.length).forEach((a) => {
    e.element.classList.add(a);
  }), e.ref.label = e.appendChildView(e.createChildView(ji, { ...t, translateY: null, caption: e.query("GET_LABEL_IDLE") })), e.ref.list = e.appendChildView(e.createChildView(zi, { translateY: null })), e.ref.panel = e.appendChildView(e.createChildView(Yr, { name: "panel-root" })), e.ref.assistant = e.appendChildView(e.createChildView(Hs, { ...t })), e.ref.data = e.appendChildView(e.createChildView(ps, { ...t })), e.ref.measure = le("div"), e.ref.measure.style.height = "100%", e.element.appendChild(e.ref.measure), e.ref.bounds = null, e.query("GET_STYLES").filter((a) => !ae(a.value)).map(({ name: a, value: l }) => {
    e.element.dataset[a] = l;
  }), e.ref.widthPrevious = null, e.ref.widthUpdated = oo(() => {
    e.ref.updateHistory = [], e.dispatch("DID_RESIZE_ROOT");
  }, 250), e.ref.previousAspectRatio = null, e.ref.updateHistory = [];
  const n = window.matchMedia("(pointer: fine) and (hover: hover)").matches, s = "PointerEvent" in window;
  e.query("GET_ALLOW_REORDER") && s && !n && (e.element.addEventListener("touchmove", Xe, { passive: !1 }), e.element.addEventListener("gesturestart", Xe));
  const i = e.query("GET_CREDITS");
  if (i.length === 2) {
    const a = document.createElement("a");
    a.className = "filepond--credits", a.setAttribute("aria-hidden", "true"), a.href = i[0], a.tabindex = -1, a.target = "_blank", a.rel = "noopener noreferrer", a.textContent = i[1], e.element.appendChild(a), e.ref.credits = a;
  }
}, ks = ({ root: e, props: t, actions: r }) => {
  if (Ks({ root: e, props: t, actions: r }), r.filter((M) => /^DID_SET_STYLE_/.test(M.type)).filter((M) => !ae(M.data.value)).map(({ type: M, data: D }) => {
    const y = ro(M.substring(8).toLowerCase(), "_");
    e.element.dataset[y] = D.value, e.invalidateLayout();
  }), e.rect.element.hidden)
    return;
  e.rect.element.width !== e.ref.widthPrevious && (e.ref.widthPrevious = e.rect.element.width, e.ref.widthUpdated());
  let o = e.ref.bounds;
  o || (o = e.ref.bounds = Qs(e), e.element.removeChild(e.ref.measure), e.ref.measure = null);
  const { hopper: n, label: s, list: i, panel: a } = e.ref;
  n && n.updateHopperState();
  const l = e.query("GET_PANEL_ASPECT_RATIO"), c = e.query("GET_ALLOW_MULTIPLE"), d = e.query("GET_TOTAL_ITEMS"), u = c ? e.query("GET_MAX_FILES") || Xs : 1, p = d === u, T = r.find((M) => M.type === "DID_ADD_ITEM");
  if (p && T) {
    const M = T.data.interactionMethod;
    s.opacity = 0, c ? s.translateY = -40 : M === re.API ? s.translateX = 40 : M === re.BROWSE ? s.translateY = 40 : s.translateY = 30;
  } else
    p || (s.opacity = 1, s.translateX = 0, s.translateY = 0);
  const E = $s(e), _ = js(e), g = s.rect.element.height, h = !c || p ? 0 : g, O = p ? i.rect.element.marginTop : 0, A = d === 0 ? 0 : i.rect.element.marginBottom, b = h + O + _.visual + A, S = h + O + _.bounds + A;
  if (i.translateY = Math.max(0, h - i.rect.element.marginTop) - E.top, l) {
    const M = e.rect.element.width, D = M * l;
    l !== e.ref.previousAspectRatio && (e.ref.previousAspectRatio = l, e.ref.updateHistory = []);
    const y = e.ref.updateHistory;
    y.push(M);
    const F = 2;
    if (y.length > F * 2) {
      const v = y.length, H = v - 10;
      let V = 0;
      for (let R = v; R >= H; R--)
        if (y[R] === y[R - 2] && V++, V >= F)
          return;
    }
    a.scalable = !1, a.height = D;
    const P = D - h - (A - E.bottom) - (p ? O : 0);
    _.visual > P ? i.overflow = P : i.overflow = null, e.height = D;
  } else if (o.fixedHeight) {
    a.scalable = !1;
    const M = o.fixedHeight - h - (A - E.bottom) - (p ? O : 0);
    _.visual > M ? i.overflow = M : i.overflow = null;
  } else if (o.cappedHeight) {
    const M = b >= o.cappedHeight, D = Math.min(o.cappedHeight, b);
    a.scalable = !0, a.height = M ? D : D - E.top - E.bottom;
    const y = D - h - (A - E.bottom) - (p ? O : 0);
    b > o.cappedHeight && _.visual > y ? i.overflow = y : i.overflow = null, e.height = Math.min(o.cappedHeight, S - E.top - E.bottom);
  } else {
    const M = d > 0 ? E.top + E.bottom : 0;
    a.scalable = !0, a.height = Math.max(g, b - M), e.height = Math.max(g, S - M);
  }
  e.ref.credits && a.heightCurrent && (e.ref.credits.style.transform = `translateY(${a.heightCurrent}px)`);
}, $s = (e) => {
  const t = e.ref.list.childViews[0].childViews[0];
  return t ? { top: t.rect.element.marginTop, bottom: t.rect.element.marginBottom } : { top: 0, bottom: 0 };
}, js = (e) => {
  let t = 0, r = 0;
  const o = e.ref.list, n = o.childViews[0], s = n.childViews.filter((O) => O.rect.element.height), i = e.query("GET_ACTIVE_ITEMS").map((O) => s.find((A) => A.id === O.id)).filter((O) => O);
  if (i.length === 0)
    return { visual: t, bounds: r };
  const a = n.rect.element.width, l = St(n, i, o.dragCoordinates), c = i[0].rect.element, d = c.marginTop + c.marginBottom, u = c.marginLeft + c.marginRight, p = c.width + u, T = c.height + d, E = typeof l < "u" && l >= 0 ? 1 : 0, _ = i.find((O) => O.markedForRemoval && O.opacity < 0.45) ? -1 : 0, g = i.length + E + _, h = Dt(a, p);
  return h === 1 ? i.forEach((O) => {
    const A = O.rect.element.height + d;
    r += A, t += A * O.opacity;
  }) : (r = Math.ceil(g / h) * T, t = r), { visual: t, bounds: r };
}, Qs = (e) => {
  const t = e.ref.measureHeight || null;
  return { cappedHeight: parseInt(e.style.maxHeight, 10) || null, fixedHeight: t === 0 ? null : t };
}, bt = (e, t) => {
  const r = e.query("GET_ALLOW_REPLACE"), o = e.query("GET_ALLOW_MULTIPLE"), n = e.query("GET_TOTAL_ITEMS");
  let s = e.query("GET_MAX_FILES");
  const i = t.length;
  return !o && i > 1 ? (e.dispatch("DID_THROW_MAX_FILES", { source: t, error: x("warning", 0, "Max files") }), !0) : (s = o ? s : 1, !o && r ? !1 : Ae(s) && n + i > s ? (e.dispatch("DID_THROW_MAX_FILES", { source: t, error: x("warning", 0, "Max files") }), !0) : !1);
}, Zs = (e, t, r) => {
  const o = e.childViews[0];
  return St(o, t, { left: r.scopeLeft - o.rect.element.left, top: r.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop) });
}, cr = (e) => {
  const t = e.query("GET_ALLOW_DROP"), r = e.query("GET_DISABLED"), o = t && !r;
  if (o && !e.ref.hopper) {
    const n = Gs(e.element, (s) => {
      const i = e.query("GET_BEFORE_DROP_FILE") || (() => !0);
      return e.query("GET_DROP_VALIDATION") ? s.every((a) => me("ALLOW_HOPPER_ITEM", a, { query: e.query }).every((l) => l === !0) && i(a)) : !0;
    }, { filterItems: (s) => {
      const i = e.query("GET_IGNORED_FILES");
      return s.filter((a) => Le(a) ? !i.includes(a.name.toLowerCase()) : !0);
    }, catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"), requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT") });
    n.onload = (s, i) => {
      const a = e.ref.list.childViews[0].childViews.filter((c) => c.rect.element.height), l = e.query("GET_ACTIVE_ITEMS").map((c) => a.find((d) => d.id === c.id)).filter((c) => c);
      ne("ADD_ITEMS", s, { dispatch: e.dispatch }).then((c) => {
        if (bt(e, c))
          return !1;
        e.dispatch("ADD_ITEMS", { items: c, index: Zs(e.ref.list, l, i), interactionMethod: re.DROP });
      }), e.dispatch("DID_DROP", { position: i }), e.dispatch("DID_END_DRAG", { position: i });
    }, n.ondragstart = (s) => {
      e.dispatch("DID_START_DRAG", { position: s });
    }, n.ondrag = oo((s) => {
      e.dispatch("DID_DRAG", { position: s });
    }), n.ondragend = (s) => {
      e.dispatch("DID_END_DRAG", { position: s });
    }, e.ref.hopper = n, e.ref.drip = e.appendChildView(e.createChildView(os));
  } else
    !o && e.ref.hopper && (e.ref.hopper.destroy(), e.ref.hopper = null, e.removeChildView(e.ref.drip));
}, dr = (e, t) => {
  const r = e.query("GET_ALLOW_BROWSE"), o = e.query("GET_DISABLED"), n = r && !o;
  n && !e.ref.browser ? e.ref.browser = e.appendChildView(e.createChildView(ki, { ...t, onload: (s) => {
    ne("ADD_ITEMS", s, { dispatch: e.dispatch }).then((i) => {
      if (bt(e, i))
        return !1;
      e.dispatch("ADD_ITEMS", { items: i, index: -1, interactionMethod: re.BROWSE });
    });
  } }), 0) : !n && e.ref.browser && (e.removeChildView(e.ref.browser), e.ref.browser = null);
}, Er = (e) => {
  const t = e.query("GET_ALLOW_PASTE"), r = e.query("GET_DISABLED"), o = t && !r;
  o && !e.ref.paster ? (e.ref.paster = Us(), e.ref.paster.onload = (n) => {
    ne("ADD_ITEMS", n, { dispatch: e.dispatch }).then((s) => {
      if (bt(e, s))
        return !1;
      e.dispatch("ADD_ITEMS", { items: s, index: -1, interactionMethod: re.PASTE });
    });
  }) : !o && e.ref.paster && (e.ref.paster.destroy(), e.ref.paster = null);
}, Ks = Q({ DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
  dr(e, t);
}, DID_SET_ALLOW_DROP: ({ root: e }) => {
  cr(e);
}, DID_SET_ALLOW_PASTE: ({ root: e }) => {
  Er(e);
}, DID_SET_DISABLED: ({ root: e, props: t }) => {
  cr(e), Er(e), dr(e, t), e.query("GET_DISABLED") ? e.element.dataset.disabled = "disabled" : e.element.removeAttribute("data-disabled");
} }), Js = z({ name: "root", read: ({ root: e }) => {
  e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight);
}, create: Ws, write: ks, destroy: ({ root: e }) => {
  e.ref.paster && e.ref.paster.destroy(), e.ref.hopper && e.ref.hopper.destroy(), e.element.removeEventListener("touchmove", Xe), e.element.removeEventListener("gesturestart", Xe);
}, mixins: { styles: ["height"] } }), ea = (e = {}) => {
  let t = null;
  const r = ze(), o = fo(en(r), [hn, on(r)], [Xn, rn(r)]);
  o.dispatch("SET_OPTIONS", { options: e });
  const n = () => {
    document.hidden || o.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", n);
  let s = null, i = !1, a = !1, l = null, c = null;
  const d = () => {
    i || (i = !0), clearTimeout(s), s = setTimeout(() => {
      i = !1, l = null, c = null, a && (a = !1, o.dispatch("DID_STOP_RESIZE"));
    }, 500);
  };
  window.addEventListener("resize", d);
  const u = Js(o, { id: mt() });
  let p = !1, T = !1;
  const E = { _read: () => {
    i && (c = window.innerWidth, l || (l = c), !a && c !== l && (o.dispatch("DID_START_RESIZE"), a = !0)), T && p && (p = u.element.offsetParent === null), !p && (u._read(), T = u.rect.element.hidden);
  }, _write: (I) => {
    const m = o.processActionQueue().filter((L) => !/^SET_/.test(L.type));
    p && !m.length || (O(m), p = u._write(I, m, a), an(o.query("GET_ITEMS")), p && o.processDispatchQueue());
  } }, _ = (I) => (m) => {
    const L = { type: I };
    if (!m)
      return L;
    if (m.hasOwnProperty("error") && (L.error = m.error ? { ...m.error } : null), m.status && (L.status = { ...m.status }), m.file && (L.output = m.file), m.source)
      L.file = m.source;
    else if (m.item || m.id) {
      const N = m.item ? m.item : o.query("GET_ITEM", m.id);
      L.file = N ? K(N) : null;
    }
    return m.items && (L.items = m.items.map(K)), /progress/.test(I) && (L.progress = m.progress), m.hasOwnProperty("origin") && m.hasOwnProperty("target") && (L.origin = m.origin, L.target = m.target), L;
  }, g = { DID_DESTROY: _("destroy"), DID_INIT: _("init"), DID_THROW_MAX_FILES: _("warning"), DID_INIT_ITEM: _("initfile"), DID_START_ITEM_LOAD: _("addfilestart"), DID_UPDATE_ITEM_LOAD_PROGRESS: _("addfileprogress"), DID_LOAD_ITEM: _("addfile"), DID_THROW_ITEM_INVALID: [_("error"), _("addfile")], DID_THROW_ITEM_LOAD_ERROR: [_("error"), _("addfile")], DID_THROW_ITEM_REMOVE_ERROR: [_("error"), _("removefile")], DID_PREPARE_OUTPUT: _("preparefile"), DID_START_ITEM_PROCESSING: _("processfilestart"), DID_UPDATE_ITEM_PROCESS_PROGRESS: _("processfileprogress"), DID_ABORT_ITEM_PROCESSING: _("processfileabort"), DID_COMPLETE_ITEM_PROCESSING: _("processfile"), DID_COMPLETE_ITEM_PROCESSING_ALL: _("processfiles"), DID_REVERT_ITEM_PROCESSING: _("processfilerevert"), DID_THROW_ITEM_PROCESSING_ERROR: [_("error"), _("processfile")], DID_REMOVE_ITEM: _("removefile"), DID_UPDATE_ITEMS: _("updatefiles"), DID_ACTIVATE_ITEM: _("activatefile"), DID_REORDER_ITEMS: _("reorderfiles") }, h = (I) => {
    const m = { pond: B, ...I };
    delete m.type, u.element.dispatchEvent(new CustomEvent(`FilePond:${I.type}`, { detail: m, bubbles: !0, cancelable: !0, composed: !0 }));
    const L = [];
    I.hasOwnProperty("error") && L.push(I.error), I.hasOwnProperty("file") && L.push(I.file);
    const N = ["type", "error", "file"];
    Object.keys(I).filter((oe) => !N.includes(oe)).forEach((oe) => L.push(I[oe])), B.fire(I.type, ...L);
    const w = o.query(`GET_ON${I.type.toUpperCase()}`);
    w && w(...L);
  }, O = (I) => {
    I.length && I.filter((m) => g[m.type]).forEach((m) => {
      const L = g[m.type];
      (Array.isArray(L) ? L : [L]).forEach((N) => {
        m.type === "DID_INIT_ITEM" ? h(N(m.data)) : setTimeout(() => {
          h(N(m.data));
        }, 0);
      });
    });
  }, A = (I) => o.dispatch("SET_OPTIONS", { options: I }), b = (I) => o.query("GET_ACTIVE_ITEM", I), S = (I) => new Promise((m, L) => {
    o.dispatch("REQUEST_ITEM_PREPARE", { query: I, success: (N) => {
      m(N);
    }, failure: (N) => {
      L(N);
    } });
  }), M = (I, m = {}) => new Promise((L, N) => {
    F([{ source: I, options: m }], { index: m.index }).then((w) => L(w && w[0])).catch(N);
  }), D = (I) => I.file && I.id, y = (I, m) => (typeof I == "object" && !D(I) && !m && (m = I, I = void 0), o.dispatch("REMOVE_ITEM", { ...m, query: I }), o.query("GET_ACTIVE_ITEM", I) === null), F = (...I) => new Promise((m, L) => {
    const N = [], w = {};
    if (ke(I[0]))
      N.push.apply(N, I[0]), Object.assign(w, I[1] || {});
    else {
      const oe = I[I.length - 1];
      typeof oe == "object" && !(oe instanceof Blob) && Object.assign(w, I.pop()), N.push(...I);
    }
    o.dispatch("ADD_ITEMS", { items: N, index: w.index, interactionMethod: re.API, success: m, failure: L });
  }), P = () => o.query("GET_ACTIVE_ITEMS"), v = (I) => new Promise((m, L) => {
    o.dispatch("REQUEST_ITEM_PROCESSING", { query: I, success: (N) => {
      m(N);
    }, failure: (N) => {
      L(N);
    } });
  }), H = (...I) => {
    const m = Array.isArray(I[0]) ? I[0] : I, L = m.length ? m : P();
    return Promise.all(L.map(S));
  }, V = (...I) => {
    const m = Array.isArray(I[0]) ? I[0] : I;
    if (!m.length) {
      const L = P().filter((N) => !(N.status === C.IDLE && N.origin === W.LOCAL) && N.status !== C.PROCESSING && N.status !== C.PROCESSING_COMPLETE && N.status !== C.PROCESSING_REVERT_ERROR);
      return Promise.all(L.map(v));
    }
    return Promise.all(m.map(v));
  }, R = (...I) => {
    const m = Array.isArray(I[0]) ? I[0] : I;
    let L;
    typeof m[m.length - 1] == "object" ? L = m.pop() : Array.isArray(I[0]) && (L = I[1]);
    const N = P();
    return m.length ? m.map((w) => pe(w) ? N[w] ? N[w].id : null : w).filter((w) => w).map((w) => y(w, L)) : Promise.all(N.map((w) => y(w, L)));
  }, B = { ...Qe(), ...E, ...tn(o, r), setOptions: A, addFile: M, addFiles: F, getFile: b, processFile: v, prepareFile: S, removeFile: y, moveFile: (I, m) => o.dispatch("MOVE_ITEM", { query: I, index: m }), getFiles: P, processFiles: V, removeFiles: R, prepareFiles: H, sort: (I) => o.dispatch("SORT", { compare: I }), browse: () => {
    var I = u.element.querySelector("input[type=file]");
    I && I.click();
  }, destroy: () => {
    B.fire("destroy", u.element), o.dispatch("ABORT_ALL"), u._destroy(), window.removeEventListener("resize", d), document.removeEventListener("visibilitychange", n), o.dispatch("DID_DESTROY");
  }, insertBefore: (I) => Gt(u.element, I), insertAfter: (I) => Ft(u.element, I), appendTo: (I) => I.appendChild(u.element), replaceElement: (I) => {
    Gt(u.element, I), I.parentNode.removeChild(I), t = I;
  }, restoreElement: () => {
    t && (Ft(t, u.element), u.element.parentNode.removeChild(u.element), t = null);
  }, isAttachedTo: (I) => u.element === I || t === I, element: { get: () => u.element }, status: { get: () => o.query("GET_STATUS") } };
  return o.dispatch("DID_INIT"), Ee(B);
}, no = (e = {}) => {
  const t = {};
  return U(ze(), (r, o) => {
    t[r] = o[0];
  }), ea({ ...t, ...e });
}, ta = (e) => e.charAt(0).toLowerCase() + e.slice(1), ra = (e) => ro(e.replace(/^data-/, "")), io = (e, t) => {
  U(t, (r, o) => {
    U(e, (n, s) => {
      const i = new RegExp(r);
      if (!i.test(n) || (delete e[n], o === !1))
        return;
      if (j(o)) {
        e[o] = s;
        return;
      }
      const a = o.group;
      k(o) && !e[a] && (e[a] = {}), e[a][ta(n.replace(i, ""))] = s;
    }), o.mapping && io(e[o.group], o.mapping);
  });
}, oa = (e, t = {}) => {
  const r = [];
  U(e.attributes, (n) => {
    r.push(e.attributes[n]);
  });
  const o = r.filter((n) => n.name).reduce((n, s) => {
    const i = Y(e, s.name);
    return n[ra(s.name)] = i === s.name ? !0 : i, n;
  }, {});
  return io(o, t), o;
}, na = (e, t = {}) => {
  const r = { "^class$": "className", "^multiple$": "allowMultiple", "^capture$": "captureMethod", "^webkitdirectory$": "allowDirectoriesOnly", "^server": { group: "server", mapping: { "^process": { group: "process" }, "^revert": { group: "revert" }, "^fetch": { group: "fetch" }, "^restore": { group: "restore" }, "^load": { group: "load" } } }, "^type$": !1, "^files$": !1 };
  me("SET_ATTRIBUTE_TO_OPTION_MAP", r);
  const o = { ...t }, n = oa(e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e, r);
  Object.keys(n).forEach((i) => {
    k(n[i]) ? (k(o[i]) || (o[i] = {}), Object.assign(o[i], n[i])) : o[i] = n[i];
  }), o.files = (t.files || []).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map((i) => ({ source: i.value, options: { type: i.dataset.type } })));
  const s = no(o);
  return e.files && Array.from(e.files).forEach((i) => {
    s.addFile(i);
  }), s.replaceElement(e), s;
}, ia = (...e) => _o(e[0]) ? na(...e) : no(...e), sa = ["fire", "_read", "_write"], pr = (e) => {
  const t = {};
  return Lr(e, t, sa), t;
}, aa = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (r, o) => t[o]), la = (e) => {
  const t = new Blob(["(", e.toString(), ")()"], { type: "application/javascript" }), r = URL.createObjectURL(t), o = new Worker(r);
  return { transfer: (n, s) => {
  }, post: (n, s, i) => {
    const a = mt();
    o.onmessage = (l) => {
      l.data.id === a && s(l.data.message);
    }, o.postMessage({ id: a, message: n }, i);
  }, terminate: () => {
    o.terminate(), URL.revokeObjectURL(r);
  } };
}, ca = (e) => new Promise((t, r) => {
  const o = new Image();
  o.onload = () => {
    t(o);
  }, o.onerror = (n) => {
    r(n);
  }, o.src = e;
}), so = (e, t) => {
  const r = e.slice(0, e.size, e.type);
  return r.lastModifiedDate = e.lastModifiedDate, r.name = t, r;
}, da = (e) => so(e, e.name), ur = [], Ea = (e) => {
  if (ur.includes(e))
    return;
  ur.push(e);
  const t = e({ addFilter: cn, utils: { Type: f, forin: U, isString: j, isFile: Le, toNaturalFileSize: xr, replaceInString: aa, getExtensionFromFilename: Ze, getFilenameWithoutExtension: Fr, guesstimateMimeType: Qr, getFileFromBlob: ye, getFilenameFromURL: Ce, createRoute: Q, createWorker: la, createView: z, createItemAPI: K, loadImage: ca, copyFile: da, renameFile: so, createBlob: Cr, applyFilterChain: ne, text: q, getNumericAspectRatioFromString: br }, views: { fileActionButton: Ur } });
  dn(t.options);
}, pa = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]", ua = () => "Promise" in window, _a = () => "slice" in Blob.prototype, fa = () => "URL" in window && "createObjectURL" in window.URL, Ta = () => "visibilityState" in document, Ia = () => "performance" in window, ma = () => "supports" in (window.CSS || {}), ha = () => /MSIE|Trident/.test(window.navigator.userAgent), _r = (() => {
  const e = Rr() && !pa() && Ta() && ua() && _a() && fa() && Ia() && (ma() || ha());
  return () => e;
})(), de = { apps: [] }, Ra = "filepond", he = () => {
};
let Tt = {}, fr = {}, Ve = he, at = he, Tr = he, Ir = he, We = he, mr = he, hr = he;
if (_r()) {
  qo(() => {
    de.apps.forEach((r) => r._read());
  }, (r) => {
    de.apps.forEach((o) => o._write(r));
  });
  const e = () => {
    document.dispatchEvent(new CustomEvent("FilePond:loaded", { detail: { supported: _r, create: Ve, destroy: at, parse: Tr, find: Ir, registerPlugin: We, setOptions: hr } })), document.removeEventListener("DOMContentLoaded", e);
  };
  document.readyState !== "loading" ? setTimeout(() => e(), 0) : document.addEventListener("DOMContentLoaded", e);
  const t = () => U(ze(), (r, o) => {
    fr[r] = o[1];
  });
  Tt = { ...Mr }, fr = {}, t(), Ve = (...r) => {
    const o = ia(...r);
    return o.on("destroy", at), de.apps.push(o), pr(o);
  }, at = (r) => {
    const o = de.apps.findIndex((n) => n.isAttachedTo(r));
    return o >= 0 ? (de.apps.splice(o, 1)[0].restoreElement(), !0) : !1;
  }, Tr = (r) => Array.from(r.querySelectorAll(`.${Ra}`)).filter((o) => !de.apps.find((n) => n.isAttachedTo(o))).map((o) => Ve(o)), Ir = (r) => {
    const o = de.apps.find((n) => n.isAttachedTo(r));
    return o ? pr(o) : null;
  }, We = (...r) => {
    r.forEach(Ea), t();
  }, mr = () => {
    const r = {};
    return U(ze(), (o, n) => {
      r[o] = n[0];
    }), r;
  }, hr = (r) => (k(r) && (de.apps.forEach((o) => {
    o.setOptions(r);
  }), En(r)), mr());
}
/*!
* FilePondPluginFileValidateSize 2.2.8
* Licensed under MIT, https://opensource.org/licenses/MIT/
* Please visit https://pqina.nl/filepond/ for details.
*/
const ao = ({ addFilter: e, utils: t }) => {
  const { Type: r, replaceInString: o, toNaturalFileSize: n } = t;
  return e("ALLOW_HOPPER_ITEM", (s, { query: i }) => {
    if (!i("GET_ALLOW_FILE_SIZE_VALIDATION"))
      return !0;
    const a = i("GET_MAX_FILE_SIZE");
    if (a !== null && s.size > a)
      return !1;
    const l = i("GET_MIN_FILE_SIZE");
    return !(l !== null && s.size < l);
  }), e("LOAD_FILE", (s, { query: i }) => new Promise((a, l) => {
    if (!i("GET_ALLOW_FILE_SIZE_VALIDATION"))
      return a(s);
    const c = i("GET_FILE_VALIDATE_SIZE_FILTER");
    if (c && !c(s))
      return a(s);
    const d = i("GET_MAX_FILE_SIZE");
    if (d !== null && s.size > d) {
      l({ status: { main: i("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"), sub: o(i("GET_LABEL_MAX_FILE_SIZE"), { filesize: n(d, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i)) }) } });
      return;
    }
    const u = i("GET_MIN_FILE_SIZE");
    if (u !== null && s.size < u) {
      l({ status: { main: i("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"), sub: o(i("GET_LABEL_MIN_FILE_SIZE"), { filesize: n(u, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i)) }) } });
      return;
    }
    const p = i("GET_MAX_TOTAL_FILE_SIZE");
    if (p !== null && i("GET_ACTIVE_ITEMS").reduce((T, E) => T + E.fileSize, 0) > p) {
      l({ status: { main: i("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"), sub: o(i("GET_LABEL_MAX_TOTAL_FILE_SIZE"), { filesize: n(p, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i)) }) } });
      return;
    }
    a(s);
  })), { options: { allowFileSizeValidation: [!0, r.BOOLEAN], maxFileSize: [null, r.INT], minFileSize: [null, r.INT], maxTotalFileSize: [null, r.INT], fileValidateSizeFilter: [null, r.FUNCTION], labelMinFileSizeExceeded: ["File is too small", r.STRING], labelMinFileSize: ["Minimum file size is {filesize}", r.STRING], labelMaxFileSizeExceeded: ["File is too large", r.STRING], labelMaxFileSize: ["Maximum file size is {filesize}", r.STRING], labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", r.STRING], labelMaxTotalFileSize: ["Maximum total file size is {filesize}", r.STRING] } };
}, ga = typeof window < "u" && typeof window.document < "u";
ga && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: ao }));
/*!
* FilePondPluginFileValidateType 1.2.9
* Licensed under MIT, https://opensource.org/licenses/MIT/
* Please visit https://pqina.nl/filepond/ for details.
*/
const lo = ({ addFilter: e, utils: t }) => {
  const { Type: r, isString: o, replaceInString: n, guesstimateMimeType: s, getExtensionFromFilename: i, getFilenameFromURL: a } = t, l = (T, E) => {
    const _ = (/^[^/]+/.exec(T) || []).pop(), g = E.slice(0, -2);
    return _ === g;
  }, c = (T, E) => T.some((_) => /\*$/.test(_) ? l(E, _) : _ === E), d = (T) => {
    let E = "";
    if (o(T)) {
      const _ = a(T), g = i(_);
      g && (E = s(g));
    } else
      E = T.type;
    return E;
  }, u = (T, E, _) => {
    if (E.length === 0)
      return !0;
    const g = d(T);
    return _ ? new Promise((h, O) => {
      _(T, g).then((A) => {
        c(E, A) ? h() : O();
      }).catch(O);
    }) : c(E, g);
  }, p = (T) => (E) => T[E] === null ? !1 : T[E] || E;
  return e("SET_ATTRIBUTE_TO_OPTION_MAP", (T) => Object.assign(T, { accept: "acceptedFileTypes" })), e("ALLOW_HOPPER_ITEM", (T, { query: E }) => E("GET_ALLOW_FILE_TYPE_VALIDATION") ? u(T, E("GET_ACCEPTED_FILE_TYPES")) : !0), e("LOAD_FILE", (T, { query: E }) => new Promise((_, g) => {
    if (!E("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      _(T);
      return;
    }
    const h = E("GET_ACCEPTED_FILE_TYPES"), O = E("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"), A = u(T, h, O), b = () => {
      const S = h.map(p(E("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter((D) => D !== !1), M = S.filter((D, y) => S.indexOf(D) === y);
      g({ status: { main: E("GET_LABEL_FILE_TYPE_NOT_ALLOWED"), sub: n(E("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"), { allTypes: M.join(", "), allButLastType: M.slice(0, -1).join(", "), lastType: M[M.length - 1] }) } });
    };
    if (typeof A == "boolean")
      return A ? _(T) : b();
    A.then(() => {
      _(T);
    }).catch(b);
  })), { options: { allowFileTypeValidation: [!0, r.BOOLEAN], acceptedFileTypes: [[], r.ARRAY], labelFileTypeNotAllowed: ["File is of invalid type", r.STRING], fileValidateTypeLabelExpectedTypes: ["Expects {allButLastType} or {lastType}", r.STRING], fileValidateTypeLabelExpectedTypesMap: [{}, r.OBJECT], fileValidateTypeDetectType: [null, r.FUNCTION] } };
}, Oa = typeof window < "u" && typeof window.document < "u";
Oa && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: lo }));
class Se {
  constructor(t) {
    if (t.dataset.refFileUpload)
      return Se.refs[t.dataset.refFileUpload];
    this.ref = Math.random(), Se.refs[this.ref] = this, t.dataset.refFileUpload = this.ref, this.inputs = t.querySelectorAll('input[type="file"]'), this.fileponds = {}, this.headers = { Authorization: "pFdRC99ihTG!C%BQB6EJKjc!n%" }, document.addEventListener("FilePond:loaded", () => this.onload());
    const r = new uo(t.closest("[c-async-form]"));
    r.onBeforeSubmit = () => this.beforeSubmit(), r.onPayload = (o) => this.onPayload(o), r.onInput = async (o, n) => await this.inputHandler(o, n);
  }
  onload() {
    We(lo), We(ao);
    const t = { server: { url: "https://formupload.agentur-chapeau.de/", process: { url: "process", headers: this.headers }, revert: { url: "revert", headers: this.headers }, restore: null, load: null, fetch: null }, credits: !1, ...Da, ...window.c_fileupload_options };
    for (const r of this.inputs)
      this.fileponds[r.name] = Ve(r, { ...t, maxFiles: r.dataset.maxFiles || null, maxFileSize: r.dataset.maxFileSize || null, maxTotalFileSize: r.dataset.maxTotalFileSize || null });
  }
  beforeSubmit() {
    for (const [t, r] of Object.entries(this.fileponds))
      if (!(r.status == Tt.EMPTY || r.status == Tt.READY))
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
    const o = this.fileponds[t.name], n = o.getFiles().find((c) => c.serverId === r), s = await fetch(`${o.server.url}finish`, { method: "POST", body: r, headers: this.headers });
    if (!s.ok)
      throw new Error("Upload could not finish ", s);
    const i = await s.text(), a = n.filename, l = n.fileSize;
    return { url: i, name: a, size: l };
  }
}
Se.refs = {}, window.FileUpload = Se, document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.querySelectorAll("[c-file-upload]")).forEach((e) => new Se(e));
});
const Da = { labelIdle: 'Dateien hierher ziehen oder <span class="filepond--label-action">auswählen</span>', labelInvalidField: "Feld enthält ungültige Dateien", labelFileWaitingForSize: "Auf Größe warten", labelFileSizeNotAvailable: "Größe nicht verfügbar", labelFileLoading: "Laden", labelFileLoadError: "Fehler beim Laden", labelFileProcessing: "Hochladen", labelFileProcessingComplete: "Hochgeladen", labelFileProcessingAborted: "Hochladen abgebrochen", labelFileProcessingError: "Fehler beim Hochladen", labelFileProcessingRevertError: "Fehler beim Entfernen", labelFileRemoveError: "Fehler beim Löschen", labelTapToCancel: "Tippen zum Abbrechen ", labelTapToRetry: "Tippen zum Wiederholen", labelTapToUndo: "Tippen zum Entfernen", labelButtonRemoveItem: "Entfernen", labelButtonAbortItemLoad: "Abbrechen", labelButtonRetryItemLoad: "Wiederholen", labelButtonAbortItemProcessing: "Abbrechen", labelButtonUndoItemProcessing: "Entfernen", labelButtonRetryItemProcessing: "Wiederholen", labelButtonProcessItem: "Hochladen", labelMaxFileSizeExceeded: "Datei ist zu groß", labelMaxFileSize: "Maximale Dateigröße beträgt {filesize}", labelMaxTotalFileSizeExceeded: "Maximale Gesamtgröße überschritten", labelMaxTotalFileSize: "Maximale Gesamtgröße beträgt {filesize}", labelFileTypeNotAllowed: "Ungültiger Dateityp", fileValidateTypeLabelExpectedTypes: "Gültige Dateitypen: {allButLastType} und {lastType}", fileValidateTypeLabelExpectedTypesMap: { "image/*": "Bilddateien", "image/png": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "application/pdf": ".pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx" } };
export {
  Se as FileUpload
};
//# sourceMappingURL=fileupload-DQq2JRRI.js.map
