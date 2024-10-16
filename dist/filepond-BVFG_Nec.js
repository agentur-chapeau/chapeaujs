import { s as mi } from "./index-BDeb0Mxs.js";
/*!
 * FilePond 4.30.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const _i = (e) => e instanceof HTMLElement, Ii = (e, t = [], n = []) => {
  const i = {
    ...e
  }, r = [], o = [], s = () => ({ ...i }), a = () => {
    const f = [...r];
    return r.length = 0, f;
  }, l = () => {
    const f = [...o];
    o.length = 0, f.forEach(({ type: E, data: R }) => {
      d(E, R);
    });
  }, d = (f, E, R) => {
    if (R && !document.hidden) {
      o.push({ type: f, data: E });
      return;
    }
    u[f] && u[f](E), r.push({
      type: f,
      data: E
    });
  }, c = (f, ...E) => m[f] ? m[f](...E) : null, p = {
    getState: s,
    processActionQueue: a,
    processDispatchQueue: l,
    dispatch: d,
    query: c
  };
  let m = {};
  t.forEach((f) => {
    m = {
      ...f(i),
      ...m
    };
  });
  let u = {};
  return n.forEach((f) => {
    u = {
      ...f(d, c, i),
      ...u
    };
  }), p;
}, Ti = (e, t, n) => {
  if (typeof n == "function") {
    e[t] = n;
    return;
  }
  Object.defineProperty(e, t, { ...n });
}, V = (e, t) => {
  for (const n in e)
    e.hasOwnProperty(n) && t(n, e[n]);
}, pe = (e) => {
  const t = {};
  return V(e, (n) => {
    Ti(t, n, e[n]);
  }), t;
}, Y = (e, t, n = null) => {
  if (n === null)
    return e.getAttribute(t) || e.hasAttribute(t);
  e.setAttribute(t, n);
}, gi = "http://www.w3.org/2000/svg", hi = ["svg", "path"], Gt = (e) => hi.includes(e), Ye = (e, t, n = {}) => {
  typeof t == "object" && (n = t, t = null);
  const i = Gt(e) ? document.createElementNS(gi, e) : document.createElement(e);
  return t && (Gt(e) ? Y(i, "class", t) : i.className = t), V(n, (r, o) => {
    Y(i, r, o);
  }), i;
}, Ri = (e) => (t, n) => {
  typeof n < "u" && e.children[n] ? e.insertBefore(t, e.children[n]) : e.appendChild(t);
}, Oi = (e, t) => (n, i) => (typeof i < "u" ? t.splice(i, 0, n) : t.push(n), n), Si = (e, t) => (n) => (t.splice(t.indexOf(n), 1), n.element.parentNode && e.removeChild(n.element), n), Di = typeof window < "u" && typeof window.document < "u", Rn = () => Di, bi = Rn() ? Ye("svg") : {}, yi = "children" in bi ? (e) => e.children.length : (e) => e.childNodes.length, On = (e, t, n, i) => {
  const r = n[0] || e.left, o = n[1] || e.top, s = r + e.width, a = o + e.height * (i[1] || 1), l = {
    // the rectangle of the element itself
    element: {
      ...e
    },
    // the rectangle of the element expanded to contain its children, does not include any margins
    inner: {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    },
    // the rectangle of the element expanded to contain its children including own margin and child margins
    // margins will be added after we've recalculated the size
    outer: {
      left: r,
      top: o,
      right: s,
      bottom: a
    }
  };
  return t.filter((d) => !d.isRectIgnored()).map((d) => d.rect).forEach((d) => {
    Ft(l.inner, { ...d.inner }), Ft(l.outer, { ...d.outer });
  }), Bt(l.inner), l.outer.bottom += l.element.marginBottom, l.outer.right += l.element.marginRight, Bt(l.outer), l;
}, Ft = (e, t) => {
  t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right);
}, Bt = (e) => {
  e.width = e.right - e.left, e.height = e.bottom - e.top;
}, ue = (e) => typeof e == "number", Ai = (e, t, n, i = 1e-3) => Math.abs(e - t) < i && Math.abs(n) < i, Li = (
  // default options
  ({ stiffness: e = 0.5, damping: t = 0.75, mass: n = 10 } = {}) => {
    let i = null, r = null, o = 0, s = !1;
    const d = pe({
      interpolate: (c, p) => {
        if (s) return;
        if (!(ue(i) && ue(r))) {
          s = !0, o = 0;
          return;
        }
        const m = -(r - i) * e;
        o += m / n, r += o, o *= t, Ai(r, i, o) || p ? (r = i, o = 0, s = !0, d.onupdate(r), d.oncomplete(r)) : d.onupdate(r);
      },
      target: {
        set: (c) => {
          if (ue(c) && !ue(r) && (r = c), i === null && (i = c, r = c), i = c, r === i || typeof i > "u") {
            s = !0, o = 0, d.onupdate(r), d.oncomplete(r);
            return;
          }
          s = !1;
        },
        get: () => i
      },
      resting: {
        get: () => s
      },
      onupdate: (c) => {
      },
      oncomplete: (c) => {
      }
    });
    return d;
  }
), Pi = (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e, wi = (
  // default values
  ({ duration: e = 500, easing: t = Pi, delay: n = 0 } = {}) => {
    let i = null, r, o, s = !0, a = !1, l = null;
    const c = pe({
      interpolate: (p, m) => {
        s || l === null || (i === null && (i = p), !(p - i < n) && (r = p - i - n, r >= e || m ? (r = 1, o = a ? 0 : 1, c.onupdate(o * l), c.oncomplete(o * l), s = !0) : (o = r / e, c.onupdate((r >= 0 ? t(a ? 1 - o : o) : 0) * l))));
      },
      target: {
        get: () => a ? 0 : l,
        set: (p) => {
          if (l === null) {
            l = p, c.onupdate(p), c.oncomplete(p);
            return;
          }
          p < l ? (l = 1, a = !0) : (a = !1, l = p), s = !1, i = null;
        }
      },
      resting: {
        get: () => s
      },
      onupdate: (p) => {
      },
      oncomplete: (p) => {
      }
    });
    return c;
  }
), Ut = {
  spring: Li,
  tween: wi
}, Mi = (e, t, n) => {
  const i = e[t] && typeof e[t][n] == "object" ? e[t][n] : e[t] || e, r = typeof i == "string" ? i : i.type, o = typeof i == "object" ? { ...i } : {};
  return Ut[r] ? Ut[r](o) : null;
}, Ot = (e, t, n, i = !1) => {
  t = Array.isArray(t) ? t : [t], t.forEach((r) => {
    e.forEach((o) => {
      let s = o, a = () => n[o], l = (d) => n[o] = d;
      typeof o == "object" && (s = o.key, a = o.getter || a, l = o.setter || l), !(r[s] && !i) && (r[s] = {
        get: a,
        set: l
      });
    });
  });
}, Ci = ({ mixinConfig: e, viewProps: t, viewInternalAPI: n, viewExternalAPI: i }) => {
  const r = { ...t }, o = [];
  return V(e, (s, a) => {
    const l = Mi(a);
    if (!l)
      return;
    l.onupdate = (c) => {
      t[s] = c;
    }, l.target = r[s], Ot([{
      key: s,
      setter: (c) => {
        l.target !== c && (l.target = c);
      },
      getter: () => t[s]
    }], [n, i], t, !0), o.push(l);
  }), {
    write: (s) => {
      let a = document.hidden, l = !0;
      return o.forEach((d) => {
        d.resting || (l = !1), d.interpolate(s, a);
      }), l;
    },
    destroy: () => {
    }
  };
}, Ni = (e) => (t, n) => {
  e.addEventListener(t, n);
}, vi = (e) => (t, n) => {
  e.removeEventListener(t, n);
}, Gi = ({
  mixinConfig: e,
  viewProps: t,
  viewInternalAPI: n,
  viewExternalAPI: i,
  viewState: r,
  view: o
}) => {
  const s = [], a = Ni(o.element), l = vi(o.element);
  return i.on = (d, c) => {
    s.push({
      type: d,
      fn: c
    }), a(d, c);
  }, i.off = (d, c) => {
    s.splice(s.findIndex((p) => p.type === d && p.fn === c), 1), l(d, c);
  }, {
    write: () => !0,
    destroy: () => {
      s.forEach((d) => {
        l(d.type, d.fn);
      });
    }
  };
}, Fi = ({ mixinConfig: e, viewProps: t, viewExternalAPI: n }) => {
  Ot(e, n, t);
}, j = (e) => e != null, Bi = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  originX: 0,
  originY: 0
}, Ui = ({ mixinConfig: e, viewProps: t, viewInternalAPI: n, viewExternalAPI: i, view: r }) => {
  const o = { ...t }, s = {};
  Ot(e, [n, i], t);
  const a = () => [t.translateX || 0, t.translateY || 0], l = () => [t.scaleX || 0, t.scaleY || 0], d = () => r.rect ? On(r.rect, r.childViews, a(), l()) : null;
  return n.rect = { get: d }, i.rect = { get: d }, e.forEach((c) => {
    t[c] = typeof o[c] > "u" ? Bi[c] : o[c];
  }), {
    write: () => {
      if (xi(s, t))
        return Vi(r.element, t), Object.assign(s, { ...t }), !0;
    },
    destroy: () => {
    }
  };
}, xi = (e, t) => {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !0;
  for (const n in t)
    if (t[n] !== e[n])
      return !0;
  return !1;
}, Vi = (e, {
  opacity: t,
  perspective: n,
  translateX: i,
  translateY: r,
  scaleX: o,
  scaleY: s,
  rotateX: a,
  rotateY: l,
  rotateZ: d,
  originX: c,
  originY: p,
  width: m,
  height: u
}) => {
  let f = "", E = "";
  (j(c) || j(p)) && (E += `transform-origin: ${c || 0}px ${p || 0}px;`), j(n) && (f += `perspective(${n}px) `), (j(i) || j(r)) && (f += `translate3d(${i || 0}px, ${r || 0}px, 0) `), (j(o) || j(s)) && (f += `scale3d(${j(o) ? o : 1}, ${j(s) ? s : 1}, 1) `), j(d) && (f += `rotateZ(${d}rad) `), j(a) && (f += `rotateX(${a}rad) `), j(l) && (f += `rotateY(${l}rad) `), f.length && (E += `transform:${f};`), j(t) && (E += `opacity:${t};`, t === 0 && (E += "visibility:hidden;"), t < 1 && (E += "pointer-events:none;")), j(u) && (E += `height:${u}px;`), j(m) && (E += `width:${m}px;`);
  const R = e.elementCurrentStyle || "";
  (E.length !== R.length || E !== R) && (e.style.cssText = E, e.elementCurrentStyle = E);
}, zi = {
  styles: Ui,
  listeners: Gi,
  animations: Ci,
  apis: Fi
}, xt = (e = {}, t = {}, n = {}) => (t.layoutCalculated || (e.paddingTop = parseInt(n.paddingTop, 10) || 0, e.marginTop = parseInt(n.marginTop, 10) || 0, e.marginRight = parseInt(n.marginRight, 10) || 0, e.marginBottom = parseInt(n.marginBottom, 10) || 0, e.marginLeft = parseInt(n.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = t.offsetParent === null, e), H = (
  // default view definition
  ({
    // element definition
    tag: e = "div",
    name: t = null,
    attributes: n = {},
    // view interaction
    read: i = () => {
    },
    write: r = () => {
    },
    create: o = () => {
    },
    destroy: s = () => {
    },
    // hooks
    filterFrameActionsForChild: a = (u, f) => f,
    didCreateView: l = () => {
    },
    didWriteView: d = () => {
    },
    // rect related
    ignoreRect: c = !1,
    ignoreRectUpdate: p = !1,
    // mixins
    mixins: m = []
  } = {}) => (u, f = {}) => {
    const E = Ye(e, `filepond--${t}`, n), R = window.getComputedStyle(E, null), g = xt();
    let S = null, D = !1;
    const A = [], b = [], w = {}, B = {}, O = [
      r
      // default writer
    ], M = [
      i
      // default reader
    ], G = [
      s
      // default destroy
    ], L = () => E, N = () => A.concat(), W = () => w, T = (v) => (X, le) => X(v, le), F = () => S || (S = On(g, A, [0, 0], [1, 1]), S), I = () => R, h = () => {
      S = null, A.forEach((le) => le._read()), !(p && g.width && g.height) && xt(g, E, R);
      const X = { root: de, props: f, rect: g };
      M.forEach((le) => le(X));
    }, P = (v, X, le) => {
      let Re = X.length === 0;
      return O.forEach((K) => {
        K({
          props: f,
          root: de,
          actions: X,
          timestamp: v,
          shouldOptimize: le
        }) === !1 && (Re = !1);
      }), b.forEach((K) => {
        K.write(v) === !1 && (Re = !1);
      }), A.filter((K) => !!K.element.parentNode).forEach((K) => {
        K._write(
          v,
          a(K, X),
          le
        ) || (Re = !1);
      }), A.forEach((K, Ne) => {
        K.element.parentNode || (de.appendChild(K.element, Ne), K._read(), K._write(
          v,
          a(K, X),
          le
        ), Re = !1);
      }), D = Re, d({
        props: f,
        root: de,
        actions: X,
        timestamp: v
      }), Re;
    }, y = () => {
      b.forEach((v) => v.destroy()), G.forEach((v) => {
        v({ root: de, props: f });
      }), A.forEach((v) => v._destroy());
    }, U = {
      element: {
        get: L
      },
      style: {
        get: I
      },
      childViews: {
        get: N
      }
    }, x = {
      ...U,
      rect: {
        get: F
      },
      // access to custom children references
      ref: {
        get: W
      },
      // dom modifiers
      is: (v) => t === v,
      appendChild: Ri(E),
      createChildView: T(u),
      linkView: (v) => (A.push(v), v),
      unlinkView: (v) => {
        A.splice(A.indexOf(v), 1);
      },
      appendChildView: Oi(E, A),
      removeChildView: Si(E, A),
      registerWriter: (v) => O.push(v),
      registerReader: (v) => M.push(v),
      registerDestroyer: (v) => G.push(v),
      invalidateLayout: () => E.layoutCalculated = !1,
      // access to data store
      dispatch: u.dispatch,
      query: u.query
    }, et = {
      element: {
        get: L
      },
      childViews: {
        get: N
      },
      rect: {
        get: F
      },
      resting: {
        get: () => D
      },
      isRectIgnored: () => c,
      _read: h,
      _write: P,
      _destroy: y
    }, ui = {
      ...U,
      rect: {
        get: () => g
      }
    };
    Object.keys(m).sort((v, X) => v === "styles" ? 1 : X === "styles" ? -1 : 0).forEach((v) => {
      const X = zi[v]({
        mixinConfig: m[v],
        viewProps: f,
        viewState: B,
        viewInternalAPI: x,
        viewExternalAPI: et,
        view: pe(ui)
      });
      X && b.push(X);
    });
    const de = pe(x);
    o({
      root: de,
      props: f
    });
    const Ei = yi(E);
    return A.forEach((v, X) => {
      de.appendChild(v.element, Ei + X);
    }), l(de), pe(et);
  }
), ki = (e, t, n = 60) => {
  const i = "__framePainter";
  if (window[i]) {
    window[i].readers.push(e), window[i].writers.push(t);
    return;
  }
  window[i] = {
    readers: [e],
    writers: [t]
  };
  const r = window[i], o = 1e3 / n;
  let s = null, a = null, l = null, d = null;
  const c = () => {
    document.hidden ? (l = () => window.setTimeout(() => p(performance.now()), o), d = () => window.clearTimeout(a)) : (l = () => window.requestAnimationFrame(p), d = () => window.cancelAnimationFrame(a));
  };
  document.addEventListener("visibilitychange", () => {
    d && d(), c(), p(performance.now());
  });
  const p = (m) => {
    a = l(p), s || (s = m);
    const u = m - s;
    u <= o || (s = m - u % o, r.readers.forEach((f) => f()), r.writers.forEach((f) => f(m)));
  };
  return c(), p(performance.now()), {
    pause: () => {
      d(a);
    }
  };
}, Z = (e, t) => ({ root: n, props: i, actions: r = [], timestamp: o, shouldOptimize: s }) => {
  r.filter((a) => e[a.type]).forEach(
    (a) => e[a.type]({ root: n, props: i, action: a.data, timestamp: o, shouldOptimize: s })
  ), t && t({ root: n, props: i, actions: r, timestamp: o, shouldOptimize: s });
}, Vt = (e, t) => t.parentNode.insertBefore(e, t), zt = (e, t) => t.parentNode.insertBefore(e, t.nextSibling), We = (e) => Array.isArray(e), ae = (e) => e == null, Yi = (e) => e.trim(), Xe = (e) => "" + e, Hi = (e, t = ",") => ae(e) ? [] : We(e) ? e : Xe(e).split(t).map(Yi).filter((n) => n.length), Sn = (e) => typeof e == "boolean", Dn = (e) => Sn(e) ? e : e === "true", Q = (e) => typeof e == "string", bn = (e) => ue(e) ? e : Q(e) ? Xe(e).replace(/[a-z]+/gi, "") : 0, Ve = (e) => parseInt(bn(e), 10), kt = (e) => parseFloat(bn(e)), Ae = (e) => ue(e) && isFinite(e) && Math.floor(e) === e, Yt = (e, t = 1e3) => {
  if (Ae(e))
    return e;
  let n = Xe(e).trim();
  return /MB$/i.test(n) ? (n = n.replace(/MB$i/, "").trim(), Ve(n) * t * t) : /KB/i.test(n) ? (n = n.replace(/KB$i/, "").trim(), Ve(n) * t) : Ve(n);
}, Ee = (e) => typeof e == "function", qi = (e) => {
  let t = self, n = e.split("."), i = null;
  for (; i = n.shift(); )
    if (t = t[i], !t)
      return null;
  return t;
}, Ht = {
  process: "POST",
  patch: "PATCH",
  revert: "DELETE",
  fetch: "GET",
  restore: "GET",
  load: "GET"
}, $i = (e) => {
  const t = {};
  return t.url = Q(e) ? e : e.url || "", t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0, t.headers = e.headers ? e.headers : {}, V(Ht, (n) => {
    t[n] = Wi(n, e[n], Ht[n], t.timeout, t.headers);
  }), t.process = e.process || Q(e) || e.url ? t.process : null, t.remove = e.remove || null, delete t.headers, t;
}, Wi = (e, t, n, i, r) => {
  if (t === null)
    return null;
  if (typeof t == "function")
    return t;
  const o = {
    url: n === "GET" || n === "PATCH" ? `?${e}=` : "",
    method: n,
    headers: r,
    withCredentials: !1,
    timeout: i,
    onload: null,
    ondata: null,
    onerror: null
  };
  if (Q(t))
    return o.url = t, o;
  if (Object.assign(o, t), Q(o.headers)) {
    const s = o.headers.split(/:(.+)/);
    o.headers = {
      header: s[0],
      value: s[1]
    };
  }
  return o.withCredentials = Dn(o.withCredentials), o;
}, Xi = (e) => $i(e), ji = (e) => e === null, $ = (e) => typeof e == "object" && e !== null, Qi = (e) => $(e) && Q(e.url) && $(e.process) && $(e.revert) && $(e.restore) && $(e.fetch), lt = (e) => We(e) ? "array" : ji(e) ? "null" : Ae(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : Qi(e) ? "api" : typeof e, Zi = (e) => e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",'), Ki = {
  array: Hi,
  boolean: Dn,
  int: (e) => lt(e) === "bytes" ? Yt(e) : Ve(e),
  number: kt,
  float: kt,
  bytes: Yt,
  string: (e) => Ee(e) ? e : Xe(e),
  function: (e) => qi(e),
  serverapi: Xi,
  object: (e) => {
    try {
      return JSON.parse(Zi(e));
    } catch {
      return null;
    }
  }
}, Ji = (e, t) => Ki[t](e), yn = (e, t, n) => {
  if (e === t)
    return e;
  let i = lt(e);
  if (i !== n) {
    const r = Ji(e, n);
    if (i = lt(r), r === null)
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${n}"`;
    e = r;
  }
  return e;
}, er = (e, t) => {
  let n = e;
  return {
    enumerable: !0,
    get: () => n,
    set: (i) => {
      n = yn(i, e, t);
    }
  };
}, tr = (e) => {
  const t = {};
  return V(e, (n) => {
    const i = e[n];
    t[n] = er(i[0], i[1]);
  }), pe(t);
}, nr = (e) => ({
  // model
  items: [],
  // timeout used for calling update items
  listUpdateTimeout: null,
  // timeout used for stacking metadata updates
  itemUpdateTimeout: null,
  // queue of items waiting to be processed
  processingQueue: [],
  // options
  options: tr(e)
}), je = (e, t = "-") => e.split(/(?=[A-Z])/).map((n) => n.toLowerCase()).join(t), ir = (e, t) => {
  const n = {};
  return V(t, (i) => {
    n[i] = {
      get: () => e.getState().options[i],
      set: (r) => {
        e.dispatch(`SET_${je(i, "_").toUpperCase()}`, {
          value: r
        });
      }
    };
  }), n;
}, rr = (e) => (t, n, i) => {
  const r = {};
  return V(e, (o) => {
    const s = je(o, "_").toUpperCase();
    r[`SET_${s}`] = (a) => {
      try {
        i.options[o] = a.value;
      } catch {
      }
      t(`DID_SET_${s}`, { value: i.options[o] });
    };
  }), r;
}, sr = (e) => (t) => {
  const n = {};
  return V(e, (i) => {
    n[`GET_${je(i, "_").toUpperCase()}`] = (r) => t.options[i];
  }), n;
}, ie = {
  API: 1,
  DROP: 2,
  BROWSE: 3,
  PASTE: 4,
  NONE: 5
}, St = () => Math.random().toString(36).substring(2, 11), Dt = (e, t) => e.splice(t, 1), or = (e, t) => {
  t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
}, Qe = () => {
  const e = [], t = (i, r) => {
    Dt(
      e,
      e.findIndex((o) => o.event === i && (o.cb === r || !r))
    );
  }, n = (i, r, o) => {
    e.filter((s) => s.event === i).map((s) => s.cb).forEach((s) => or(() => s(...r), o));
  };
  return {
    fireSync: (i, ...r) => {
      n(i, r, !0);
    },
    fire: (i, ...r) => {
      n(i, r, !1);
    },
    on: (i, r) => {
      e.push({ event: i, cb: r });
    },
    onOnce: (i, r) => {
      e.push({
        event: i,
        cb: (...o) => {
          t(i, r), r(...o);
        }
      });
    },
    off: t
  };
}, An = (e, t, n) => {
  Object.getOwnPropertyNames(e).filter((i) => !n.includes(i)).forEach(
    (i) => Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
  );
}, lr = [
  "fire",
  "process",
  "revert",
  "load",
  "on",
  "off",
  "onOnce",
  "retryLoad",
  "extend",
  "archive",
  "archived",
  "release",
  "released",
  "requestProcessing",
  "freeze"
], J = (e) => {
  const t = {};
  return An(e, t, lr), t;
}, ar = (e) => {
  e.forEach((t, n) => {
    t.released && Dt(e, n);
  });
}, C = {
  INIT: 1,
  IDLE: 2,
  PROCESSING_QUEUED: 9,
  PROCESSING: 3,
  PROCESSING_COMPLETE: 5,
  PROCESSING_ERROR: 6,
  PROCESSING_REVERT_ERROR: 10,
  LOADING: 7,
  LOAD_ERROR: 8
}, q = {
  INPUT: 1,
  LIMBO: 2,
  LOCAL: 3
}, Ln = (e) => /[^0-9]+/.exec(e), Pn = () => Ln(1.1.toLocaleString())[0], cr = () => {
  const e = Pn(), t = 1e3.toLocaleString();
  return t !== "1000" ? Ln(t)[0] : e === "." ? "," : ".";
}, _ = {
  BOOLEAN: "boolean",
  INT: "int",
  NUMBER: "number",
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  FUNCTION: "function",
  ACTION: "action",
  SERVER_API: "serverapi",
  REGEX: "regex"
}, bt = [], re = (e, t, n) => new Promise((i, r) => {
  const o = bt.filter((a) => a.key === e).map((a) => a.cb);
  if (o.length === 0) {
    i(t);
    return;
  }
  const s = o.shift();
  o.reduce(
    // loop over promises passing value to next promise
    (a, l) => a.then((d) => l(d, n)),
    // call initial filter, will return a promise
    s(t, n)
    // all executed
  ).then((a) => i(a)).catch((a) => r(a));
}), ge = (e, t, n) => bt.filter((i) => i.key === e).map((i) => i.cb(t, n)), dr = (e, t) => bt.push({ key: e, cb: t }), fr = (e) => Object.assign(Oe, e), He = () => ({ ...Oe }), pr = (e) => {
  V(e, (t, n) => {
    Oe[t] && (Oe[t][0] = yn(
      n,
      Oe[t][0],
      Oe[t][1]
    ));
  });
}, Oe = {
  // the id to add to the root element
  id: [null, _.STRING],
  // input field name to use
  name: ["filepond", _.STRING],
  // disable the field
  disabled: [!1, _.BOOLEAN],
  // classname to put on wrapper
  className: [null, _.STRING],
  // is the field required
  required: [!1, _.BOOLEAN],
  // Allow media capture when value is set
  captureMethod: [null, _.STRING],
  // - "camera", "microphone" or "camcorder",
  // - Does not work with multiple on apple devices
  // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"
  // sync `acceptedFileTypes` property with `accept` attribute
  allowSyncAcceptAttribute: [!0, _.BOOLEAN],
  // Feature toggles
  allowDrop: [!0, _.BOOLEAN],
  // Allow dropping of files
  allowBrowse: [!0, _.BOOLEAN],
  // Allow browsing the file system
  allowPaste: [!0, _.BOOLEAN],
  // Allow pasting files
  allowMultiple: [!1, _.BOOLEAN],
  // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
  allowReplace: [!0, _.BOOLEAN],
  // Allow dropping a file on other file to replace it (only works when multiple is set to false)
  allowRevert: [!0, _.BOOLEAN],
  // Allows user to revert file upload
  allowRemove: [!0, _.BOOLEAN],
  // Allow user to remove a file
  allowProcess: [!0, _.BOOLEAN],
  // Allows user to process a file, when set to false, this removes the file upload button
  allowReorder: [!1, _.BOOLEAN],
  // Allow reordering of files
  allowDirectoriesOnly: [!1, _.BOOLEAN],
  // Allow only selecting directories with browse (no support for filtering dnd at this point)
  // Try store file if `server` not set
  storeAsFile: [!1, _.BOOLEAN],
  // Revert mode
  forceRevert: [!1, _.BOOLEAN],
  // Set to 'force' to require the file to be reverted before removal
  // Input requirements
  maxFiles: [null, _.INT],
  // Max number of files
  checkValidity: [!1, _.BOOLEAN],
  // Enables custom validity messages
  // Where to put file
  itemInsertLocationFreedom: [!0, _.BOOLEAN],
  // Set to false to always add items to begin or end of list
  itemInsertLocation: ["before", _.STRING],
  // Default index in list to add items that have been dropped at the top of the list
  itemInsertInterval: [75, _.INT],
  // Drag 'n Drop related
  dropOnPage: [!1, _.BOOLEAN],
  // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
  dropOnElement: [!0, _.BOOLEAN],
  // Drop needs to happen on element (set to false to also load drops outside of Up)
  dropValidation: [!1, _.BOOLEAN],
  // Enable or disable validating files on drop
  ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], _.ARRAY],
  // Upload related
  instantUpload: [!0, _.BOOLEAN],
  // Should upload files immediately on drop
  maxParallelUploads: [2, _.INT],
  // Maximum files to upload in parallel
  allowMinimumUploadDuration: [!0, _.BOOLEAN],
  // if true uploads take at least 750 ms, this ensures the user sees the upload progress giving trust the upload actually happened
  // Chunks
  chunkUploads: [!1, _.BOOLEAN],
  // Enable chunked uploads
  chunkForce: [!1, _.BOOLEAN],
  // Force use of chunk uploads even for files smaller than chunk size
  chunkSize: [5e6, _.INT],
  // Size of chunks (5MB default)
  chunkRetryDelays: [[500, 1e3, 3e3], _.ARRAY],
  // Amount of times to retry upload of a chunk when it fails
  // The server api end points to use for uploading (see docs)
  server: [null, _.SERVER_API],
  // File size calculations, can set to 1024, this is only used for display, properties use file size base 1000
  fileSizeBase: [1e3, _.INT],
  // Labels and status messages
  labelFileSizeBytes: ["bytes", _.STRING],
  labelFileSizeKilobytes: ["KB", _.STRING],
  labelFileSizeMegabytes: ["MB", _.STRING],
  labelFileSizeGigabytes: ["GB", _.STRING],
  labelDecimalSeparator: [Pn(), _.STRING],
  // Default is locale separator
  labelThousandsSeparator: [cr(), _.STRING],
  // Default is locale separator
  labelIdle: [
    'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    _.STRING
  ],
  labelInvalidField: ["Field contains invalid files", _.STRING],
  labelFileWaitingForSize: ["Waiting for size", _.STRING],
  labelFileSizeNotAvailable: ["Size not available", _.STRING],
  labelFileCountSingular: ["file in list", _.STRING],
  labelFileCountPlural: ["files in list", _.STRING],
  labelFileLoading: ["Loading", _.STRING],
  labelFileAdded: ["Added", _.STRING],
  // assistive only
  labelFileLoadError: ["Error during load", _.STRING],
  labelFileRemoved: ["Removed", _.STRING],
  // assistive only
  labelFileRemoveError: ["Error during remove", _.STRING],
  labelFileProcessing: ["Uploading", _.STRING],
  labelFileProcessingComplete: ["Upload complete", _.STRING],
  labelFileProcessingAborted: ["Upload cancelled", _.STRING],
  labelFileProcessingError: ["Error during upload", _.STRING],
  labelFileProcessingRevertError: ["Error during revert", _.STRING],
  labelTapToCancel: ["tap to cancel", _.STRING],
  labelTapToRetry: ["tap to retry", _.STRING],
  labelTapToUndo: ["tap to undo", _.STRING],
  labelButtonRemoveItem: ["Remove", _.STRING],
  labelButtonAbortItemLoad: ["Abort", _.STRING],
  labelButtonRetryItemLoad: ["Retry", _.STRING],
  labelButtonAbortItemProcessing: ["Cancel", _.STRING],
  labelButtonUndoItemProcessing: ["Undo", _.STRING],
  labelButtonRetryItemProcessing: ["Retry", _.STRING],
  labelButtonProcessItem: ["Upload", _.STRING],
  // make sure width and height plus viewpox are even numbers so icons are nicely centered
  iconRemove: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconProcess: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
    _.STRING
  ],
  iconRetry: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconUndo: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconDone: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  // event handlers
  oninit: [null, _.FUNCTION],
  onwarning: [null, _.FUNCTION],
  onerror: [null, _.FUNCTION],
  onactivatefile: [null, _.FUNCTION],
  oninitfile: [null, _.FUNCTION],
  onaddfilestart: [null, _.FUNCTION],
  onaddfileprogress: [null, _.FUNCTION],
  onaddfile: [null, _.FUNCTION],
  onprocessfilestart: [null, _.FUNCTION],
  onprocessfileprogress: [null, _.FUNCTION],
  onprocessfileabort: [null, _.FUNCTION],
  onprocessfilerevert: [null, _.FUNCTION],
  onprocessfile: [null, _.FUNCTION],
  onprocessfiles: [null, _.FUNCTION],
  onremovefile: [null, _.FUNCTION],
  onpreparefile: [null, _.FUNCTION],
  onupdatefiles: [null, _.FUNCTION],
  onreorderfiles: [null, _.FUNCTION],
  // hooks
  beforeDropFile: [null, _.FUNCTION],
  beforeAddFile: [null, _.FUNCTION],
  beforeRemoveFile: [null, _.FUNCTION],
  beforePrepareFile: [null, _.FUNCTION],
  // styles
  stylePanelLayout: [null, _.STRING],
  // null 'integrated', 'compact', 'circle'
  stylePanelAspectRatio: [null, _.STRING],
  // null or '3:2' or 1
  styleItemPanelAspectRatio: [null, _.STRING],
  styleButtonRemoveItemPosition: ["left", _.STRING],
  styleButtonProcessItemPosition: ["right", _.STRING],
  styleLoadIndicatorPosition: ["right", _.STRING],
  styleProgressIndicatorPosition: ["right", _.STRING],
  styleButtonRemoveItemAlign: [!1, _.BOOLEAN],
  // custom initial files array
  files: [[], _.ARRAY],
  // show support by displaying credits
  credits: [["https://pqina.nl/", "Powered by PQINA"], _.ARRAY]
}, me = (e, t) => ae(t) ? e[0] || null : Ae(t) ? e[t] || null : (typeof t == "object" && (t = t.id), e.find((n) => n.id === t) || null), wn = (e) => {
  if (ae(e))
    return e;
  if (/:/.test(e)) {
    const t = e.split(":");
    return t[1] / t[0];
  }
  return parseFloat(e);
}, se = (e) => e.filter((t) => !t.archived), Mn = {
  EMPTY: 0,
  IDLE: 1,
  // waiting
  ERROR: 2,
  // a file is in error state
  BUSY: 3,
  // busy processing or loading
  READY: 4
  // all files uploaded
};
let ve = null;
const ur = () => {
  if (ve === null)
    try {
      const e = new DataTransfer();
      e.items.add(new File(["hello world"], "This_Works.txt"));
      const t = document.createElement("input");
      t.setAttribute("type", "file"), t.files = e.files, ve = t.files.length === 1;
    } catch {
      ve = !1;
    }
  return ve;
}, Er = [
  C.LOAD_ERROR,
  C.PROCESSING_ERROR,
  C.PROCESSING_REVERT_ERROR
], mr = [
  C.LOADING,
  C.PROCESSING,
  C.PROCESSING_QUEUED,
  C.INIT
], _r = [C.PROCESSING_COMPLETE], Ir = (e) => Er.includes(e.status), Tr = (e) => mr.includes(e.status), gr = (e) => _r.includes(e.status), qt = (e) => $(e.options.server) && ($(e.options.server.process) || Ee(e.options.server.process)), hr = (e) => ({
  GET_STATUS: () => {
    const t = se(e.items), { EMPTY: n, ERROR: i, BUSY: r, IDLE: o, READY: s } = Mn;
    return t.length === 0 ? n : t.some(Ir) ? i : t.some(Tr) ? r : t.some(gr) ? s : o;
  },
  GET_ITEM: (t) => me(e.items, t),
  GET_ACTIVE_ITEM: (t) => me(se(e.items), t),
  GET_ACTIVE_ITEMS: () => se(e.items),
  GET_ITEMS: () => e.items,
  GET_ITEM_NAME: (t) => {
    const n = me(e.items, t);
    return n ? n.filename : null;
  },
  GET_ITEM_SIZE: (t) => {
    const n = me(e.items, t);
    return n ? n.fileSize : null;
  },
  GET_STYLES: () => Object.keys(e.options).filter((t) => /^style/.test(t)).map((t) => ({
    name: t,
    value: e.options[t]
  })),
  GET_PANEL_ASPECT_RATIO: () => /circle/.test(e.options.stylePanelLayout) ? 1 : wn(e.options.stylePanelAspectRatio),
  GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
  GET_ITEMS_BY_STATUS: (t) => se(e.items).filter((n) => n.status === t),
  GET_TOTAL_ITEMS: () => se(e.items).length,
  SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && ur() && !qt(e),
  IS_ASYNC: () => qt(e),
  GET_FILE_SIZE_LABELS: (t) => ({
    labelBytes: t("GET_LABEL_FILE_SIZE_BYTES") || void 0,
    labelKilobytes: t("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
    labelMegabytes: t("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
    labelGigabytes: t("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
  })
}), Rr = (e) => {
  const t = se(e.items).length;
  if (!e.options.allowMultiple)
    return t === 0;
  const n = e.options.maxFiles;
  return n === null || t < n;
}, Cn = (e, t, n) => Math.max(Math.min(n, e), t), Or = (e, t, n) => e.splice(t, 0, n), Sr = (e, t, n) => ae(t) ? null : typeof n > "u" ? (e.push(t), t) : (n = Cn(n, 0, e.length), Or(e, n, t), t), at = (e) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
  e
), Ce = (e) => `${e}`.split("/").pop().split("?").shift(), Ze = (e) => e.split(".").pop(), Dr = (e) => {
  if (typeof e != "string")
    return "";
  const t = e.split("/").pop();
  return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? t === "jpeg" ? "jpg" : t : "";
}, Le = (e, t = "") => (t + e).slice(-t.length), Nn = (e = /* @__PURE__ */ new Date()) => `${e.getFullYear()}-${Le(e.getMonth() + 1, "00")}-${Le(
  e.getDate(),
  "00"
)}_${Le(e.getHours(), "00")}-${Le(e.getMinutes(), "00")}-${Le(
  e.getSeconds(),
  "00"
)}`, be = (e, t, n = null, i = null) => {
  const r = typeof n == "string" ? e.slice(0, e.size, n) : e.slice(0, e.size, e.type);
  return r.lastModifiedDate = /* @__PURE__ */ new Date(), e._relativePath && (r._relativePath = e._relativePath), Q(t) || (t = Nn()), t && i === null && Ze(t) ? r.name = t : (i = i || Dr(r.type), r.name = t + (i ? "." + i : "")), r;
}, br = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, vn = (e, t) => {
  const n = br();
  if (n) {
    const i = new n();
    return i.append(e), i.getBlob(t);
  }
  return new Blob([e], {
    type: t
  });
}, yr = (e, t) => {
  const n = new ArrayBuffer(e.length), i = new Uint8Array(n);
  for (let r = 0; r < e.length; r++)
    i[r] = e.charCodeAt(r);
  return vn(n, t);
}, Gn = (e) => (/^data:(.+);/.exec(e) || [])[1] || null, Ar = (e) => e.split(",")[1].replace(/\s/g, ""), Lr = (e) => atob(Ar(e)), Pr = (e) => {
  const t = Gn(e), n = Lr(e);
  return yr(n, t);
}, wr = (e, t, n) => be(Pr(e), t, null, n), Mr = (e) => {
  if (!/^content-disposition:/i.test(e)) return null;
  const t = e.split(/filename=|filename\*=.+''/).splice(1).map((n) => n.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((n) => n.length);
  return t.length ? decodeURI(t[t.length - 1]) : null;
}, Cr = (e) => {
  if (/content-length:/i.test(e)) {
    const t = e.match(/[0-9]+/)[0];
    return t ? parseInt(t, 10) : null;
  }
  return null;
}, Nr = (e) => /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null, yt = (e) => {
  const t = {
    source: null,
    name: null,
    size: null
  }, n = e.split(`
`);
  for (let i of n) {
    const r = Mr(i);
    if (r) {
      t.name = r;
      continue;
    }
    const o = Cr(i);
    if (o) {
      t.size = o;
      continue;
    }
    const s = Nr(i);
    if (s) {
      t.source = s;
      continue;
    }
  }
  return t;
}, vr = (e) => {
  const t = {
    source: null,
    complete: !1,
    progress: 0,
    size: null,
    timestamp: null,
    duration: 0,
    request: null
  }, n = () => t.progress, i = () => {
    t.request && t.request.abort && t.request.abort();
  }, r = () => {
    const a = t.source;
    s.fire("init", a), a instanceof File ? s.fire("load", a) : a instanceof Blob ? s.fire("load", be(a, a.name)) : at(a) ? s.fire("load", wr(a)) : o(a);
  }, o = (a) => {
    if (!e) {
      s.fire("error", {
        type: "error",
        body: "Can't load URL",
        code: 400
      });
      return;
    }
    t.timestamp = Date.now(), t.request = e(
      a,
      (l) => {
        t.duration = Date.now() - t.timestamp, t.complete = !0, l instanceof Blob && (l = be(l, l.name || Ce(a))), s.fire(
          "load",
          // if has received blob, we go with blob, if no response, we return null
          l instanceof Blob ? l : l ? l.body : null
        );
      },
      (l) => {
        s.fire(
          "error",
          typeof l == "string" ? {
            type: "error",
            code: 0,
            body: l
          } : l
        );
      },
      (l, d, c) => {
        if (c && (t.size = c), t.duration = Date.now() - t.timestamp, !l) {
          t.progress = null;
          return;
        }
        t.progress = d / c, s.fire("progress", t.progress);
      },
      () => {
        s.fire("abort");
      },
      (l) => {
        const d = yt(
          typeof l == "string" ? l : l.headers
        );
        s.fire("meta", {
          size: t.size || d.size,
          filename: d.name,
          source: d.source
        });
      }
    );
  }, s = {
    ...Qe(),
    setSource: (a) => t.source = a,
    getProgress: n,
    // file load progress
    abort: i,
    // abort file load
    load: r
    // start load
  };
  return s;
}, $t = (e) => /GET|HEAD/.test(e), _e = (e, t, n) => {
  const i = {
    onheaders: () => {
    },
    onprogress: () => {
    },
    onload: () => {
    },
    ontimeout: () => {
    },
    onerror: () => {
    },
    onabort: () => {
    },
    abort: () => {
      r = !0, s.abort();
    }
  };
  let r = !1, o = !1;
  n = {
    method: "POST",
    headers: {},
    withCredentials: !1,
    ...n
  }, t = encodeURI(t), $t(n.method) && e && (t = `${t}${encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))}`);
  const s = new XMLHttpRequest(), a = $t(n.method) ? s : s.upload;
  return a.onprogress = (l) => {
    r || i.onprogress(l.lengthComputable, l.loaded, l.total);
  }, s.onreadystatechange = () => {
    s.readyState < 2 || s.readyState === 4 && s.status === 0 || o || (o = !0, i.onheaders(s));
  }, s.onload = () => {
    s.status >= 200 && s.status < 300 ? i.onload(s) : i.onerror(s);
  }, s.onerror = () => i.onerror(s), s.onabort = () => {
    r = !0, i.onabort();
  }, s.ontimeout = () => i.ontimeout(s), s.open(n.method, t, !0), Ae(n.timeout) && (s.timeout = n.timeout), Object.keys(n.headers).forEach((l) => {
    const d = unescape(encodeURIComponent(n.headers[l]));
    s.setRequestHeader(l, d);
  }), n.responseType && (s.responseType = n.responseType), n.withCredentials && (s.withCredentials = !0), s.send(e), i;
}, z = (e, t, n, i) => ({
  type: e,
  code: t,
  body: n,
  headers: i
}), Ie = (e) => (t) => {
  e(z("error", 0, "Timeout", t.getAllResponseHeaders()));
}, Wt = (e) => /\?/.test(e), Me = (...e) => {
  let t = "";
  return e.forEach((n) => {
    t += Wt(t) && Wt(n) ? n.replace(/\?/, "&") : n;
  }), t;
}, tt = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !Q(t.url))
    return null;
  const n = t.onload || ((r) => r), i = t.onerror || ((r) => null);
  return (r, o, s, a, l, d) => {
    const c = _e(r, Me(e, t.url), {
      ...t,
      responseType: "blob"
    });
    return c.onload = (p) => {
      const m = p.getAllResponseHeaders(), u = yt(m).name || Ce(r);
      o(
        z(
          "load",
          p.status,
          t.method === "HEAD" ? null : be(n(p.response), u),
          m
        )
      );
    }, c.onerror = (p) => {
      s(
        z(
          "error",
          p.status,
          i(p.response) || p.statusText,
          p.getAllResponseHeaders()
        )
      );
    }, c.onheaders = (p) => {
      d(z("headers", p.status, null, p.getAllResponseHeaders()));
    }, c.ontimeout = Ie(s), c.onprogress = a, c.onabort = l, c;
  };
}, te = {
  QUEUED: 0,
  COMPLETE: 1,
  PROCESSING: 2,
  ERROR: 3,
  WAITING: 4
}, Gr = (e, t, n, i, r, o, s, a, l, d, c) => {
  const p = [], { chunkTransferId: m, chunkServer: u, chunkSize: f, chunkRetryDelays: E } = c, R = {
    serverId: m,
    aborted: !1
  }, g = t.ondata || ((T) => T), S = t.onload || ((T, F) => F === "HEAD" ? T.getResponseHeader("Upload-Offset") : T.response), D = t.onerror || ((T) => null), A = (T) => {
    const F = new FormData();
    $(r) && F.append(n, JSON.stringify(r));
    const I = typeof t.headers == "function" ? t.headers(i, r) : {
      ...t.headers,
      "Upload-Length": i.size
    }, h = {
      ...t,
      headers: I
    }, P = _e(g(F), Me(e, t.url), h);
    P.onload = (y) => T(S(y, h.method)), P.onerror = (y) => s(
      z(
        "error",
        y.status,
        D(y.response) || y.statusText,
        y.getAllResponseHeaders()
      )
    ), P.ontimeout = Ie(s);
  }, b = (T) => {
    const F = Me(e, u.url, R.serverId), h = {
      headers: typeof t.headers == "function" ? t.headers(R.serverId) : {
        ...t.headers
      },
      method: "HEAD"
    }, P = _e(null, F, h);
    P.onload = (y) => T(S(y, h.method)), P.onerror = (y) => s(
      z(
        "error",
        y.status,
        D(y.response) || y.statusText,
        y.getAllResponseHeaders()
      )
    ), P.ontimeout = Ie(s);
  }, w = Math.floor(i.size / f);
  for (let T = 0; T <= w; T++) {
    const F = T * f, I = i.slice(F, F + f, "application/offset+octet-stream");
    p[T] = {
      index: T,
      size: I.size,
      offset: F,
      data: I,
      file: i,
      progress: 0,
      retries: [...E],
      status: te.QUEUED,
      error: null,
      request: null,
      timeout: null
    };
  }
  const B = () => o(R.serverId), O = (T) => T.status === te.QUEUED || T.status === te.ERROR, M = (T) => {
    if (R.aborted) return;
    if (T = T || p.find(O), !T) {
      p.every((U) => U.status === te.COMPLETE) && B();
      return;
    }
    T.status = te.PROCESSING, T.progress = null;
    const F = u.ondata || ((U) => U), I = u.onerror || ((U) => null), h = Me(e, u.url, R.serverId), P = typeof u.headers == "function" ? u.headers(T) : {
      ...u.headers,
      "Content-Type": "application/offset+octet-stream",
      "Upload-Offset": T.offset,
      "Upload-Length": i.size,
      "Upload-Name": i.name
    }, y = T.request = _e(F(T.data), h, {
      ...u,
      headers: P
    });
    y.onload = () => {
      T.status = te.COMPLETE, T.request = null, N();
    }, y.onprogress = (U, x, et) => {
      T.progress = U ? x : null, L();
    }, y.onerror = (U) => {
      T.status = te.ERROR, T.request = null, T.error = I(U.response) || U.statusText, G(T) || s(
        z(
          "error",
          U.status,
          I(U.response) || U.statusText,
          U.getAllResponseHeaders()
        )
      );
    }, y.ontimeout = (U) => {
      T.status = te.ERROR, T.request = null, G(T) || Ie(s)(U);
    }, y.onabort = () => {
      T.status = te.QUEUED, T.request = null, l();
    };
  }, G = (T) => T.retries.length === 0 ? !1 : (T.status = te.WAITING, clearTimeout(T.timeout), T.timeout = setTimeout(() => {
    M(T);
  }, T.retries.shift()), !0), L = () => {
    const T = p.reduce((I, h) => I === null || h.progress === null ? null : I + h.progress, 0);
    if (T === null) return a(!1, 0, 0);
    const F = p.reduce((I, h) => I + h.size, 0);
    a(!0, T, F);
  }, N = () => {
    p.filter((F) => F.status === te.PROCESSING).length >= 1 || M();
  }, W = () => {
    p.forEach((T) => {
      clearTimeout(T.timeout), T.request && T.request.abort();
    });
  };
  return R.serverId ? b((T) => {
    R.aborted || (p.filter((F) => F.offset < T).forEach((F) => {
      F.status = te.COMPLETE, F.progress = F.size;
    }), N());
  }) : A((T) => {
    R.aborted || (d(T), R.serverId = T, N());
  }), {
    abort: () => {
      R.aborted = !0, W();
    }
  };
}, Fr = (e, t, n, i) => (r, o, s, a, l, d, c) => {
  if (!r) return;
  const p = i.chunkUploads, m = p && r.size > i.chunkSize, u = p && (m || i.chunkForce);
  if (r instanceof Blob && u)
    return Gr(
      e,
      t,
      n,
      r,
      o,
      s,
      a,
      l,
      d,
      c,
      i
    );
  const f = t.ondata || ((b) => b), E = t.onload || ((b) => b), R = t.onerror || ((b) => null), g = typeof t.headers == "function" ? t.headers(r, o) || {} : {
    ...t.headers
  }, S = {
    ...t,
    headers: g
  };
  var D = new FormData();
  $(o) && D.append(n, JSON.stringify(o)), (r instanceof Blob ? [{ name: null, file: r }] : r).forEach((b) => {
    D.append(
      n,
      b.file,
      b.name === null ? b.file.name : `${b.name}${b.file.name}`
    );
  });
  const A = _e(f(D), Me(e, t.url), S);
  return A.onload = (b) => {
    s(z("load", b.status, E(b.response), b.getAllResponseHeaders()));
  }, A.onerror = (b) => {
    a(
      z(
        "error",
        b.status,
        R(b.response) || b.statusText,
        b.getAllResponseHeaders()
      )
    );
  }, A.ontimeout = Ie(a), A.onprogress = l, A.onabort = d, A;
}, Br = (e = "", t, n, i) => typeof t == "function" ? (...r) => t(n, ...r, i) : !t || !Q(t.url) ? null : Fr(e, t, n, i), Pe = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !Q(t.url))
    return (r, o) => o();
  const n = t.onload || ((r) => r), i = t.onerror || ((r) => null);
  return (r, o, s) => {
    const a = _e(
      r,
      e + t.url,
      t
      // contains method, headers and withCredentials properties
    );
    return a.onload = (l) => {
      o(
        z(
          "load",
          l.status,
          n(l.response),
          l.getAllResponseHeaders()
        )
      );
    }, a.onerror = (l) => {
      s(
        z(
          "error",
          l.status,
          i(l.response) || l.statusText,
          l.getAllResponseHeaders()
        )
      );
    }, a.ontimeout = Ie(s), a;
  };
}, Fn = (e = 0, t = 1) => e + Math.random() * (t - e), Ur = (e, t = 1e3, n = 0, i = 25, r = 250) => {
  let o = null;
  const s = Date.now(), a = () => {
    let l = Date.now() - s, d = Fn(i, r);
    l + d > t && (d = l + d - t);
    let c = l / t;
    if (c >= 1 || document.hidden) {
      e(1);
      return;
    }
    e(c), o = setTimeout(a, d);
  };
  return t > 0 && a(), {
    clear: () => {
      clearTimeout(o);
    }
  };
}, xr = (e, t) => {
  const n = {
    complete: !1,
    perceivedProgress: 0,
    perceivedPerformanceUpdater: null,
    progress: null,
    timestamp: null,
    perceivedDuration: 0,
    duration: 0,
    request: null,
    response: null
  }, { allowMinimumUploadDuration: i } = t, r = (c, p) => {
    const m = () => {
      n.duration === 0 || n.progress === null || d.fire("progress", d.getProgress());
    }, u = () => {
      n.complete = !0, d.fire("load-perceived", n.response.body);
    };
    d.fire("start"), n.timestamp = Date.now(), n.perceivedPerformanceUpdater = Ur(
      (f) => {
        n.perceivedProgress = f, n.perceivedDuration = Date.now() - n.timestamp, m(), n.response && n.perceivedProgress === 1 && !n.complete && u();
      },
      // random delay as in a list of files you start noticing
      // files uploading at the exact same speed
      i ? Fn(750, 1500) : 0
    ), n.request = e(
      // the file to process
      c,
      // the metadata to send along
      p,
      // callbacks (load, error, progress, abort, transfer)
      // load expects the body to be a server id if
      // you want to make use of revert
      (f) => {
        n.response = $(f) ? f : {
          type: "load",
          code: 200,
          body: `${f}`,
          headers: {}
        }, n.duration = Date.now() - n.timestamp, n.progress = 1, d.fire("load", n.response.body), (!i || i && n.perceivedProgress === 1) && u();
      },
      // error is expected to be an object with type, code, body
      (f) => {
        n.perceivedPerformanceUpdater.clear(), d.fire(
          "error",
          $(f) ? f : {
            type: "error",
            code: 0,
            body: `${f}`
          }
        );
      },
      // actual processing progress
      (f, E, R) => {
        n.duration = Date.now() - n.timestamp, n.progress = f ? E / R : null, m();
      },
      // abort does not expect a value
      () => {
        n.perceivedPerformanceUpdater.clear(), d.fire("abort", n.response ? n.response.body : null);
      },
      // register the id for this transfer
      (f) => {
        d.fire("transfer", f);
      }
    );
  }, o = () => {
    n.request && (n.perceivedPerformanceUpdater.clear(), n.request.abort && n.request.abort(), n.complete = !0);
  }, s = () => {
    o(), n.complete = !1, n.perceivedProgress = 0, n.progress = 0, n.timestamp = null, n.perceivedDuration = 0, n.duration = 0, n.request = null, n.response = null;
  }, a = i ? () => n.progress ? Math.min(n.progress, n.perceivedProgress) : null : () => n.progress || null, l = i ? () => Math.min(n.duration, n.perceivedDuration) : () => n.duration, d = {
    ...Qe(),
    process: r,
    // start processing file
    abort: o,
    // abort active process request
    getProgress: a,
    getDuration: l,
    reset: s
  };
  return d;
}, Bn = (e) => e.substring(0, e.lastIndexOf(".")) || e, Vr = (e) => {
  let t = [e.name, e.size, e.type];
  return e instanceof Blob || at(e) ? t[0] = e.name || Nn() : at(e) ? (t[1] = e.length, t[2] = Gn(e)) : Q(e) && (t[0] = Ce(e), t[1] = 0, t[2] = "application/octet-stream"), {
    name: t[0],
    size: t[1],
    type: t[2]
  };
}, ye = (e) => !!(e instanceof File || e instanceof Blob && e.name), Un = (e) => {
  if (!$(e)) return e;
  const t = We(e) ? [] : {};
  for (const n in e) {
    if (!e.hasOwnProperty(n)) continue;
    const i = e[n];
    t[n] = i && $(i) ? Un(i) : i;
  }
  return t;
}, zr = (e = null, t = null, n = null) => {
  const i = St(), r = {
    // is archived
    archived: !1,
    // if is frozen, no longer fires events
    frozen: !1,
    // removed from view
    released: !1,
    // original source
    source: null,
    // file model reference
    file: n,
    // id of file on server
    serverFileReference: t,
    // id of file transfer on server
    transferId: null,
    // is aborted
    processingAborted: !1,
    // current item status
    status: t ? C.PROCESSING_COMPLETE : C.INIT,
    // active processes
    activeLoader: null,
    activeProcessor: null
  };
  let o = null;
  const s = {}, a = (O) => r.status = O, l = (O, ...M) => {
    r.released || r.frozen || w.fire(O, ...M);
  }, d = () => Ze(r.file.name), c = () => r.file.type, p = () => r.file.size, m = () => r.file, u = (O, M, G) => {
    if (r.source = O, w.fireSync("init"), r.file) {
      w.fireSync("load-skip");
      return;
    }
    r.file = Vr(O), M.on("init", () => {
      l("load-init");
    }), M.on("meta", (L) => {
      r.file.size = L.size, r.file.filename = L.filename, L.source && (e = q.LIMBO, r.serverFileReference = L.source, r.status = C.PROCESSING_COMPLETE), l("load-meta");
    }), M.on("progress", (L) => {
      a(C.LOADING), l("load-progress", L);
    }), M.on("error", (L) => {
      a(C.LOAD_ERROR), l("load-request-error", L);
    }), M.on("abort", () => {
      a(C.INIT), l("load-abort");
    }), M.on("load", (L) => {
      r.activeLoader = null;
      const N = (T) => {
        r.file = ye(T) ? T : r.file, e === q.LIMBO && r.serverFileReference ? a(C.PROCESSING_COMPLETE) : a(C.IDLE), l("load");
      }, W = (T) => {
        r.file = L, l("load-meta"), a(C.LOAD_ERROR), l("load-file-error", T);
      };
      if (r.serverFileReference) {
        N(L);
        return;
      }
      G(L, N, W);
    }), M.setSource(O), r.activeLoader = M, M.load();
  }, f = () => {
    r.activeLoader && r.activeLoader.load();
  }, E = () => {
    if (r.activeLoader) {
      r.activeLoader.abort();
      return;
    }
    a(C.INIT), l("load-abort");
  }, R = (O, M) => {
    if (r.processingAborted) {
      r.processingAborted = !1;
      return;
    }
    if (a(C.PROCESSING), o = null, !(r.file instanceof Blob)) {
      w.on("load", () => {
        R(O, M);
      });
      return;
    }
    O.on("load", (N) => {
      r.transferId = null, r.serverFileReference = N;
    }), O.on("transfer", (N) => {
      r.transferId = N;
    }), O.on("load-perceived", (N) => {
      r.activeProcessor = null, r.transferId = null, r.serverFileReference = N, a(C.PROCESSING_COMPLETE), l("process-complete", N);
    }), O.on("start", () => {
      l("process-start");
    }), O.on("error", (N) => {
      r.activeProcessor = null, a(C.PROCESSING_ERROR), l("process-error", N);
    }), O.on("abort", (N) => {
      r.activeProcessor = null, r.serverFileReference = N, a(C.IDLE), l("process-abort"), o && o();
    }), O.on("progress", (N) => {
      l("process-progress", N);
    });
    const G = (N) => {
      r.archived || O.process(N, { ...s });
    }, L = console.error;
    M(r.file, G, L), r.activeProcessor = O;
  }, g = () => {
    r.processingAborted = !1, a(C.PROCESSING_QUEUED);
  }, S = () => new Promise((O) => {
    if (!r.activeProcessor) {
      r.processingAborted = !0, a(C.IDLE), l("process-abort"), O();
      return;
    }
    o = () => {
      O();
    }, r.activeProcessor.abort();
  }), D = (O, M) => new Promise((G, L) => {
    const N = r.serverFileReference !== null ? r.serverFileReference : r.transferId;
    if (N === null) {
      G();
      return;
    }
    O(
      N,
      () => {
        r.serverFileReference = null, r.transferId = null, G();
      },
      (W) => {
        if (!M) {
          G();
          return;
        }
        a(C.PROCESSING_REVERT_ERROR), l("process-revert-error"), L(W);
      }
    ), a(C.IDLE), l("process-revert");
  }), A = (O, M, G) => {
    const L = O.split("."), N = L[0], W = L.pop();
    let T = s;
    L.forEach((F) => T = T[F]), JSON.stringify(T[W]) !== JSON.stringify(M) && (T[W] = M, l("metadata-update", {
      key: N,
      value: s[N],
      silent: G
    }));
  }, w = {
    id: { get: () => i },
    origin: { get: () => e, set: (O) => e = O },
    serverId: { get: () => r.serverFileReference },
    transferId: { get: () => r.transferId },
    status: { get: () => r.status },
    filename: { get: () => r.file.name },
    filenameWithoutExtension: { get: () => Bn(r.file.name) },
    fileExtension: { get: d },
    fileType: { get: c },
    fileSize: { get: p },
    file: { get: m },
    relativePath: { get: () => r.file._relativePath },
    source: { get: () => r.source },
    getMetadata: (O) => Un(O ? s[O] : s),
    setMetadata: (O, M, G) => {
      if ($(O)) {
        const L = O;
        return Object.keys(L).forEach((N) => {
          A(N, L[N], M);
        }), O;
      }
      return A(O, M, G), M;
    },
    extend: (O, M) => B[O] = M,
    abortLoad: E,
    retryLoad: f,
    requestProcessing: g,
    abortProcessing: S,
    load: u,
    process: R,
    revert: D,
    ...Qe(),
    freeze: () => r.frozen = !0,
    release: () => r.released = !0,
    released: { get: () => r.released },
    archive: () => r.archived = !0,
    archived: { get: () => r.archived }
  }, B = pe(w);
  return B;
}, kr = (e, t) => ae(t) ? 0 : Q(t) ? e.findIndex((n) => n.id === t) : -1, Xt = (e, t) => {
  const n = kr(e, t);
  if (!(n < 0))
    return e[n] || null;
}, jt = (e, t, n, i, r, o) => {
  const s = _e(null, e, {
    method: "GET",
    responseType: "blob"
  });
  return s.onload = (a) => {
    const l = a.getAllResponseHeaders(), d = yt(l).name || Ce(e);
    t(z("load", a.status, be(a.response, d), l));
  }, s.onerror = (a) => {
    n(z("error", a.status, a.statusText, a.getAllResponseHeaders()));
  }, s.onheaders = (a) => {
    o(z("headers", a.status, null, a.getAllResponseHeaders()));
  }, s.ontimeout = Ie(n), s.onprogress = i, s.onabort = r, s;
}, Qt = (e) => (e.indexOf("//") === 0 && (e = location.protocol + e), e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0]), Yr = (e) => (e.indexOf(":") > -1 || e.indexOf("//") > -1) && Qt(location.href) !== Qt(e), Ge = (e) => (...t) => Ee(e) ? e(...t) : e, Hr = (e) => !ye(e.file), nt = (e, t) => {
  clearTimeout(t.listUpdateTimeout), t.listUpdateTimeout = setTimeout(() => {
    e("DID_UPDATE_ITEMS", { items: se(t.items) });
  }, 0);
}, Zt = (e, ...t) => new Promise((n) => {
  if (!e)
    return n(!0);
  const i = e(...t);
  if (i == null)
    return n(!0);
  if (typeof i == "boolean")
    return n(i);
  typeof i.then == "function" && i.then(n);
}), it = (e, t) => {
  e.items.sort((n, i) => t(J(n), J(i)));
}, ne = (e, t) => ({
  query: n,
  success: i = () => {
  },
  failure: r = () => {
  },
  ...o
} = {}) => {
  const s = me(e.items, n);
  if (!s) {
    r({
      error: z("error", 0, "Item not found"),
      file: null
    });
    return;
  }
  t(s, i, r, o || {});
}, qr = (e, t, n) => ({
  /**
   * Aborts all ongoing processes
   */
  ABORT_ALL: () => {
    se(n.items).forEach((i) => {
      i.freeze(), i.abortLoad(), i.abortProcessing();
    });
  },
  /**
   * Sets initial files
   */
  DID_SET_FILES: ({ value: i = [] }) => {
    const r = i.map((s) => ({
      source: s.source ? s.source : s,
      options: s.options
    }));
    let o = se(n.items);
    o.forEach((s) => {
      r.find((a) => a.source === s.source || a.source === s.file) || e("REMOVE_ITEM", { query: s, remove: !1 });
    }), o = se(n.items), r.forEach((s, a) => {
      o.find((l) => l.source === s.source || l.file === s.source) || e("ADD_ITEM", {
        ...s,
        interactionMethod: ie.NONE,
        index: a
      });
    });
  },
  DID_UPDATE_ITEM_METADATA: ({ id: i, action: r, change: o }) => {
    o.silent || (clearTimeout(n.itemUpdateTimeout), n.itemUpdateTimeout = setTimeout(() => {
      const s = Xt(n.items, i);
      if (!t("IS_ASYNC")) {
        re("SHOULD_PREPARE_OUTPUT", !1, {
          item: s,
          query: t,
          action: r,
          change: o
        }).then((c) => {
          const p = t("GET_BEFORE_PREPARE_FILE");
          p && (c = p(s, c)), c && e(
            "REQUEST_PREPARE_OUTPUT",
            {
              query: i,
              item: s,
              success: (m) => {
                e("DID_PREPARE_OUTPUT", { id: i, file: m });
              }
            },
            !0
          );
        });
        return;
      }
      s.origin === q.LOCAL && e("DID_LOAD_ITEM", {
        id: s.id,
        error: null,
        serverFileReference: s.source
      });
      const a = () => {
        setTimeout(() => {
          e("REQUEST_ITEM_PROCESSING", { query: i });
        }, 32);
      }, l = (c) => {
        s.revert(
          Pe(n.options.server.url, n.options.server.revert),
          t("GET_FORCE_REVERT")
        ).then(c ? a : () => {
        }).catch(() => {
        });
      }, d = (c) => {
        s.abortProcessing().then(c ? a : () => {
        });
      };
      if (s.status === C.PROCESSING_COMPLETE)
        return l(n.options.instantUpload);
      if (s.status === C.PROCESSING)
        return d(n.options.instantUpload);
      n.options.instantUpload && a();
    }, 0));
  },
  MOVE_ITEM: ({ query: i, index: r }) => {
    const o = me(n.items, i);
    if (!o) return;
    const s = n.items.indexOf(o);
    r = Cn(r, 0, n.items.length - 1), s !== r && n.items.splice(r, 0, n.items.splice(s, 1)[0]);
  },
  SORT: ({ compare: i }) => {
    it(n, i), e("DID_SORT_ITEMS", {
      items: t("GET_ACTIVE_ITEMS")
    });
  },
  ADD_ITEMS: ({ items: i, index: r, interactionMethod: o, success: s = () => {
  }, failure: a = () => {
  } }) => {
    let l = r;
    if (r === -1 || typeof r > "u") {
      const u = t("GET_ITEM_INSERT_LOCATION"), f = t("GET_TOTAL_ITEMS");
      l = u === "before" ? 0 : f;
    }
    const d = t("GET_IGNORED_FILES"), c = (u) => ye(u) ? !d.includes(u.name.toLowerCase()) : !ae(u), m = i.filter(c).map(
      (u) => new Promise((f, E) => {
        e("ADD_ITEM", {
          interactionMethod: o,
          source: u.source || u,
          success: f,
          failure: E,
          index: l++,
          options: u.options || {}
        });
      })
    );
    Promise.all(m).then(s).catch(a);
  },
  /**
   * @param source
   * @param index
   * @param interactionMethod
   */
  ADD_ITEM: ({
    source: i,
    index: r = -1,
    interactionMethod: o,
    success: s = () => {
    },
    failure: a = () => {
    },
    options: l = {}
  }) => {
    if (ae(i)) {
      a({
        error: z("error", 0, "No source"),
        file: null
      });
      return;
    }
    if (ye(i) && n.options.ignoredFiles.includes(i.name.toLowerCase()))
      return;
    if (!Rr(n)) {
      if (n.options.allowMultiple || !n.options.allowMultiple && !n.options.allowReplace) {
        const S = z("warning", 0, "Max files");
        e("DID_THROW_MAX_FILES", {
          source: i,
          error: S
        }), a({ error: S, file: null });
        return;
      }
      const g = se(n.items)[0];
      if (g.status === C.PROCESSING_COMPLETE || g.status === C.PROCESSING_REVERT_ERROR) {
        const S = t("GET_FORCE_REVERT");
        if (g.revert(
          Pe(n.options.server.url, n.options.server.revert),
          S
        ).then(() => {
          S && e("ADD_ITEM", {
            source: i,
            index: r,
            interactionMethod: o,
            success: s,
            failure: a,
            options: l
          });
        }).catch(() => {
        }), S) return;
      }
      e("REMOVE_ITEM", { query: g.id });
    }
    const d = l.type === "local" ? q.LOCAL : l.type === "limbo" ? q.LIMBO : q.INPUT, c = zr(
      // where did this file come from
      d,
      // an input file never has a server file reference
      d === q.INPUT ? null : i,
      // file mock data, if defined
      l.file
    );
    Object.keys(l.metadata || {}).forEach((g) => {
      c.setMetadata(g, l.metadata[g]);
    }), ge("DID_CREATE_ITEM", c, { query: t, dispatch: e });
    const p = t("GET_ITEM_INSERT_LOCATION");
    n.options.itemInsertLocationFreedom || (r = p === "before" ? -1 : n.items.length), Sr(n.items, c, r), Ee(p) && i && it(n, p);
    const m = c.id;
    c.on("init", () => {
      e("DID_INIT_ITEM", { id: m });
    }), c.on("load-init", () => {
      e("DID_START_ITEM_LOAD", { id: m });
    }), c.on("load-meta", () => {
      e("DID_UPDATE_ITEM_META", { id: m });
    }), c.on("load-progress", (g) => {
      e("DID_UPDATE_ITEM_LOAD_PROGRESS", { id: m, progress: g });
    }), c.on("load-request-error", (g) => {
      const S = Ge(n.options.labelFileLoadError)(g);
      if (g.code >= 400 && g.code < 500) {
        e("DID_THROW_ITEM_INVALID", {
          id: m,
          error: g,
          status: {
            main: S,
            sub: `${g.code} (${g.body})`
          }
        }), a({ error: g, file: J(c) });
        return;
      }
      e("DID_THROW_ITEM_LOAD_ERROR", {
        id: m,
        error: g,
        status: {
          main: S,
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("load-file-error", (g) => {
      e("DID_THROW_ITEM_INVALID", {
        id: m,
        error: g.status,
        status: g.status
      }), a({ error: g.status, file: J(c) });
    }), c.on("load-abort", () => {
      e("REMOVE_ITEM", { query: m });
    }), c.on("load-skip", () => {
      e("COMPLETE_LOAD_ITEM", {
        query: m,
        item: c,
        data: {
          source: i,
          success: s
        }
      });
    }), c.on("load", () => {
      const g = (S) => {
        if (!S) {
          e("REMOVE_ITEM", {
            query: m
          });
          return;
        }
        c.on("metadata-update", (D) => {
          e("DID_UPDATE_ITEM_METADATA", { id: m, change: D });
        }), re("SHOULD_PREPARE_OUTPUT", !1, { item: c, query: t }).then(
          (D) => {
            const A = t("GET_BEFORE_PREPARE_FILE");
            A && (D = A(c, D));
            const b = () => {
              e("COMPLETE_LOAD_ITEM", {
                query: m,
                item: c,
                data: {
                  source: i,
                  success: s
                }
              }), nt(e, n);
            };
            if (D) {
              e(
                "REQUEST_PREPARE_OUTPUT",
                {
                  query: m,
                  item: c,
                  success: (w) => {
                    e("DID_PREPARE_OUTPUT", { id: m, file: w }), b();
                  }
                },
                !0
              );
              return;
            }
            b();
          }
        );
      };
      re("DID_LOAD_ITEM", c, { query: t, dispatch: e }).then(() => {
        Zt(t("GET_BEFORE_ADD_FILE"), J(c)).then(
          g
        );
      }).catch((S) => {
        if (!S || !S.error || !S.status) return g(!1);
        e("DID_THROW_ITEM_INVALID", {
          id: m,
          error: S.error,
          status: S.status
        });
      });
    }), c.on("process-start", () => {
      e("DID_START_ITEM_PROCESSING", { id: m });
    }), c.on("process-progress", (g) => {
      e("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id: m, progress: g });
    }), c.on("process-error", (g) => {
      e("DID_THROW_ITEM_PROCESSING_ERROR", {
        id: m,
        error: g,
        status: {
          main: Ge(n.options.labelFileProcessingError)(g),
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("process-revert-error", (g) => {
      e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
        id: m,
        error: g,
        status: {
          main: Ge(n.options.labelFileProcessingRevertError)(g),
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("process-complete", (g) => {
      e("DID_COMPLETE_ITEM_PROCESSING", {
        id: m,
        error: null,
        serverFileReference: g
      }), e("DID_DEFINE_VALUE", { id: m, value: g });
    }), c.on("process-abort", () => {
      e("DID_ABORT_ITEM_PROCESSING", { id: m });
    }), c.on("process-revert", () => {
      e("DID_REVERT_ITEM_PROCESSING", { id: m }), e("DID_DEFINE_VALUE", { id: m, value: null });
    }), e("DID_ADD_ITEM", { id: m, index: r, interactionMethod: o }), nt(e, n);
    const { url: u, load: f, restore: E, fetch: R } = n.options.server || {};
    c.load(
      i,
      // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
      vr(
        d === q.INPUT ? (
          // input, if is remote, see if should use custom fetch, else use default fetchBlob
          Q(i) && Yr(i) && R ? tt(u, R) : jt
        ) : (
          // limbo or local
          d === q.LIMBO ? tt(u, E) : tt(u, f)
        )
        // local
      ),
      // called when the file is loaded so it can be piped through the filters
      (g, S, D) => {
        re("LOAD_FILE", g, { query: t }).then(S).catch(D);
      }
    );
  },
  REQUEST_PREPARE_OUTPUT: ({ item: i, success: r, failure: o = () => {
  } }) => {
    const s = {
      error: z("error", 0, "Item not found"),
      file: null
    };
    if (i.archived) return o(s);
    re("PREPARE_OUTPUT", i.file, { query: t, item: i }).then((a) => {
      re("COMPLETE_PREPARE_OUTPUT", a, { query: t, item: i }).then((l) => {
        if (i.archived) return o(s);
        r(l);
      });
    });
  },
  COMPLETE_LOAD_ITEM: ({ item: i, data: r }) => {
    const { success: o, source: s } = r, a = t("GET_ITEM_INSERT_LOCATION");
    if (Ee(a) && s && it(n, a), e("DID_LOAD_ITEM", {
      id: i.id,
      error: null,
      serverFileReference: i.origin === q.INPUT ? null : s
    }), o(J(i)), i.origin === q.LOCAL) {
      e("DID_LOAD_LOCAL_ITEM", { id: i.id });
      return;
    }
    if (i.origin === q.LIMBO) {
      e("DID_COMPLETE_ITEM_PROCESSING", {
        id: i.id,
        error: null,
        serverFileReference: s
      }), e("DID_DEFINE_VALUE", {
        id: i.id,
        value: i.serverId || s
      });
      return;
    }
    t("IS_ASYNC") && n.options.instantUpload && e("REQUEST_ITEM_PROCESSING", { query: i.id });
  },
  RETRY_ITEM_LOAD: ne(n, (i) => {
    i.retryLoad();
  }),
  REQUEST_ITEM_PREPARE: ne(n, (i, r, o) => {
    e(
      "REQUEST_PREPARE_OUTPUT",
      {
        query: i.id,
        item: i,
        success: (s) => {
          e("DID_PREPARE_OUTPUT", { id: i.id, file: s }), r({
            file: i,
            output: s
          });
        },
        failure: o
      },
      !0
    );
  }),
  REQUEST_ITEM_PROCESSING: ne(n, (i, r, o) => {
    if (!// waiting for something
    (i.status === C.IDLE || // processing went wrong earlier
    i.status === C.PROCESSING_ERROR)) {
      const a = () => e("REQUEST_ITEM_PROCESSING", { query: i, success: r, failure: o }), l = () => document.hidden ? a() : setTimeout(a, 32);
      i.status === C.PROCESSING_COMPLETE || i.status === C.PROCESSING_REVERT_ERROR ? i.revert(
        Pe(n.options.server.url, n.options.server.revert),
        t("GET_FORCE_REVERT")
      ).then(l).catch(() => {
      }) : i.status === C.PROCESSING && i.abortProcessing().then(l);
      return;
    }
    i.status !== C.PROCESSING_QUEUED && (i.requestProcessing(), e("DID_REQUEST_ITEM_PROCESSING", { id: i.id }), e("PROCESS_ITEM", { query: i, success: r, failure: o }, !0));
  }),
  PROCESS_ITEM: ne(n, (i, r, o) => {
    const s = t("GET_MAX_PARALLEL_UPLOADS");
    if (t("GET_ITEMS_BY_STATUS", C.PROCESSING).length === s) {
      n.processingQueue.push({
        id: i.id,
        success: r,
        failure: o
      });
      return;
    }
    if (i.status === C.PROCESSING) return;
    const l = () => {
      const c = n.processingQueue.shift();
      if (!c) return;
      const { id: p, success: m, failure: u } = c, f = me(n.items, p);
      if (!f || f.archived) {
        l();
        return;
      }
      e("PROCESS_ITEM", { query: p, success: m, failure: u }, !0);
    };
    i.onOnce("process-complete", () => {
      r(J(i)), l();
      const c = n.options.server;
      if (n.options.instantUpload && i.origin === q.LOCAL && Ee(c.remove)) {
        const u = () => {
        };
        i.origin = q.LIMBO, n.options.server.remove(i.source, u, u);
      }
      t("GET_ITEMS_BY_STATUS", C.PROCESSING_COMPLETE).length === n.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL");
    }), i.onOnce("process-error", (c) => {
      o({ error: c, file: J(i) }), l();
    });
    const d = n.options;
    i.process(
      xr(
        Br(d.server.url, d.server.process, d.name, {
          chunkTransferId: i.transferId,
          chunkServer: d.server.patch,
          chunkUploads: d.chunkUploads,
          chunkForce: d.chunkForce,
          chunkSize: d.chunkSize,
          chunkRetryDelays: d.chunkRetryDelays
        }),
        {
          allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
        }
      ),
      // called when the file is about to be processed so it can be piped through the transform filters
      (c, p, m) => {
        re("PREPARE_OUTPUT", c, { query: t, item: i }).then((u) => {
          e("DID_PREPARE_OUTPUT", { id: i.id, file: u }), p(u);
        }).catch(m);
      }
    );
  }),
  RETRY_ITEM_PROCESSING: ne(n, (i) => {
    e("REQUEST_ITEM_PROCESSING", { query: i });
  }),
  REQUEST_REMOVE_ITEM: ne(n, (i) => {
    Zt(t("GET_BEFORE_REMOVE_FILE"), J(i)).then((r) => {
      r && e("REMOVE_ITEM", { query: i });
    });
  }),
  RELEASE_ITEM: ne(n, (i) => {
    i.release();
  }),
  REMOVE_ITEM: ne(n, (i, r, o, s) => {
    const a = () => {
      const d = i.id;
      Xt(n.items, d).archive(), e("DID_REMOVE_ITEM", { error: null, id: d, item: i }), nt(e, n), r(J(i));
    }, l = n.options.server;
    i.origin === q.LOCAL && l && Ee(l.remove) && s.remove !== !1 ? (e("DID_START_ITEM_REMOVE", { id: i.id }), l.remove(
      i.source,
      () => a(),
      (d) => {
        e("DID_THROW_ITEM_REMOVE_ERROR", {
          id: i.id,
          error: z("error", 0, d, null),
          status: {
            main: Ge(n.options.labelFileRemoveError)(d),
            sub: n.options.labelTapToRetry
          }
        });
      }
    )) : ((s.revert && i.origin !== q.LOCAL && i.serverId !== null || // if chunked uploads are enabled and we're uploading in chunks for this specific file
    // or if the file isn't big enough for chunked uploads but chunkForce is set then call
    // revert before removing from the view...
    n.options.chunkUploads && i.file.size > n.options.chunkSize || n.options.chunkUploads && n.options.chunkForce) && i.revert(
      Pe(n.options.server.url, n.options.server.revert),
      t("GET_FORCE_REVERT")
    ), a());
  }),
  ABORT_ITEM_LOAD: ne(n, (i) => {
    i.abortLoad();
  }),
  ABORT_ITEM_PROCESSING: ne(n, (i) => {
    if (i.serverId) {
      e("REVERT_ITEM_PROCESSING", { id: i.id });
      return;
    }
    i.abortProcessing().then(() => {
      n.options.instantUpload && e("REMOVE_ITEM", { query: i.id });
    });
  }),
  REQUEST_REVERT_ITEM_PROCESSING: ne(n, (i) => {
    if (!n.options.instantUpload) {
      e("REVERT_ITEM_PROCESSING", { query: i });
      return;
    }
    const r = (a) => {
      a && e("REVERT_ITEM_PROCESSING", { query: i });
    }, o = t("GET_BEFORE_REMOVE_FILE");
    if (!o)
      return r(!0);
    const s = o(J(i));
    if (s == null)
      return r(!0);
    if (typeof s == "boolean")
      return r(s);
    typeof s.then == "function" && s.then(r);
  }),
  REVERT_ITEM_PROCESSING: ne(n, (i) => {
    i.revert(
      Pe(n.options.server.url, n.options.server.revert),
      t("GET_FORCE_REVERT")
    ).then(() => {
      (n.options.instantUpload || Hr(i)) && e("REMOVE_ITEM", { query: i.id });
    }).catch(() => {
    });
  }),
  SET_OPTIONS: ({ options: i }) => {
    const r = Object.keys(i), o = $r.filter((a) => r.includes(a));
    [
      // add prioritized first if passed to options, else remove
      ...o,
      // prevent duplicate keys
      ...Object.keys(i).filter((a) => !o.includes(a))
    ].forEach((a) => {
      e(`SET_${je(a, "_").toUpperCase()}`, {
        value: i[a]
      });
    });
  }
}), $r = [
  "server"
  // must be processed before "files"
], At = (e) => e, ce = (e) => document.createElement(e), k = (e, t) => {
  let n = e.childNodes[0];
  n ? t !== n.nodeValue && (n.nodeValue = t) : (n = document.createTextNode(t), e.appendChild(n));
}, Kt = (e, t, n, i) => {
  const r = (i % 360 - 90) * Math.PI / 180;
  return {
    x: e + n * Math.cos(r),
    y: t + n * Math.sin(r)
  };
}, Wr = (e, t, n, i, r, o) => {
  const s = Kt(e, t, n, r), a = Kt(e, t, n, i);
  return ["M", s.x, s.y, "A", n, n, 0, o, 0, a.x, a.y].join(" ");
}, Xr = (e, t, n, i, r) => {
  let o = 1;
  return r > i && r - i <= 0.5 && (o = 0), i > r && i - r >= 0.5 && (o = 0), Wr(
    e,
    t,
    n,
    Math.min(0.9999, i) * 360,
    Math.min(0.9999, r) * 360,
    o
  );
}, jr = ({ root: e, props: t }) => {
  t.spin = !1, t.progress = 0, t.opacity = 0;
  const n = Ye("svg");
  e.ref.path = Ye("path", {
    "stroke-width": 2,
    "stroke-linecap": "round"
  }), n.appendChild(e.ref.path), e.ref.svg = n, e.appendChild(n);
}, Qr = ({ root: e, props: t }) => {
  if (t.opacity === 0)
    return;
  t.align && (e.element.dataset.align = t.align);
  const n = parseInt(Y(e.ref.path, "stroke-width"), 10), i = e.rect.element.width * 0.5;
  let r = 0, o = 0;
  t.spin ? (r = 0, o = 0.5) : (r = 0, o = t.progress);
  const s = Xr(i, i, i - n, r, o);
  Y(e.ref.path, "d", s), Y(e.ref.path, "stroke-opacity", t.spin || t.progress > 0 ? 1 : 0);
}, Jt = H({
  tag: "div",
  name: "progress-indicator",
  ignoreRectUpdate: !0,
  ignoreRect: !0,
  create: jr,
  write: Qr,
  mixins: {
    apis: ["progress", "spin", "align"],
    styles: ["opacity"],
    animations: {
      opacity: { type: "tween", duration: 500 },
      progress: {
        type: "spring",
        stiffness: 0.95,
        damping: 0.65,
        mass: 10
      }
    }
  }
}), Zr = ({ root: e, props: t }) => {
  e.element.innerHTML = (t.icon || "") + `<span>${t.label}</span>`, t.isDisabled = !1;
}, Kr = ({ root: e, props: t }) => {
  const { isDisabled: n } = t, i = e.query("GET_DISABLED") || t.opacity === 0;
  i && !n ? (t.isDisabled = !0, Y(e.element, "disabled", "disabled")) : !i && n && (t.isDisabled = !1, e.element.removeAttribute("disabled"));
}, xn = H({
  tag: "button",
  attributes: {
    type: "button"
  },
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "file-action-button",
  mixins: {
    apis: ["label"],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    },
    listeners: !0
  },
  create: Zr,
  write: Kr
}), Vn = (e, t = ".", n = 1e3, i = {}) => {
  const {
    labelBytes: r = "bytes",
    labelKilobytes: o = "KB",
    labelMegabytes: s = "MB",
    labelGigabytes: a = "GB"
  } = i;
  e = Math.round(Math.abs(e));
  const l = n, d = n * n, c = n * n * n;
  return e < l ? `${e} ${r}` : e < d ? `${Math.floor(e / l)} ${o}` : e < c ? `${en(e / d, 1, t)} ${s}` : `${en(e / c, 2, t)} ${a}`;
}, en = (e, t, n) => e.toFixed(t).split(".").filter((i) => i !== "0").join(n), Jr = ({ root: e, props: t }) => {
  const n = ce("span");
  n.className = "filepond--file-info-main", Y(n, "aria-hidden", "true"), e.appendChild(n), e.ref.fileName = n;
  const i = ce("span");
  i.className = "filepond--file-info-sub", e.appendChild(i), e.ref.fileSize = i, k(i, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), k(n, At(e.query("GET_ITEM_NAME", t.id)));
}, ct = ({ root: e, props: t }) => {
  k(
    e.ref.fileSize,
    Vn(
      e.query("GET_ITEM_SIZE", t.id),
      ".",
      e.query("GET_FILE_SIZE_BASE"),
      e.query("GET_FILE_SIZE_LABELS", e.query)
    )
  ), k(e.ref.fileName, At(e.query("GET_ITEM_NAME", t.id)));
}, tn = ({ root: e, props: t }) => {
  if (Ae(e.query("GET_ITEM_SIZE", t.id))) {
    ct({ root: e, props: t });
    return;
  }
  k(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
}, es = H({
  name: "file-info",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Z({
    DID_LOAD_ITEM: ct,
    DID_UPDATE_ITEM_META: ct,
    DID_THROW_ITEM_LOAD_ERROR: tn,
    DID_THROW_ITEM_INVALID: tn
  }),
  didCreateView: (e) => {
    ge("CREATE_VIEW", { ...e, view: e });
  },
  create: Jr,
  mixins: {
    styles: ["translateX", "translateY"],
    animations: {
      translateX: "spring",
      translateY: "spring"
    }
  }
}), zn = (e) => Math.round(e * 100), ts = ({ root: e }) => {
  const t = ce("span");
  t.className = "filepond--file-status-main", e.appendChild(t), e.ref.main = t;
  const n = ce("span");
  n.className = "filepond--file-status-sub", e.appendChild(n), e.ref.sub = n, kn({ root: e, action: { progress: null } });
}, kn = ({ root: e, action: t }) => {
  const n = t.progress === null ? e.query("GET_LABEL_FILE_LOADING") : `${e.query("GET_LABEL_FILE_LOADING")} ${zn(t.progress)}%`;
  k(e.ref.main, n), k(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, ns = ({ root: e, action: t }) => {
  const n = t.progress === null ? e.query("GET_LABEL_FILE_PROCESSING") : `${e.query("GET_LABEL_FILE_PROCESSING")} ${zn(t.progress)}%`;
  k(e.ref.main, n), k(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, is = ({ root: e }) => {
  k(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")), k(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, rs = ({ root: e }) => {
  k(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")), k(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"));
}, ss = ({ root: e }) => {
  k(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), k(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"));
}, nn = ({ root: e }) => {
  k(e.ref.main, ""), k(e.ref.sub, "");
}, we = ({ root: e, action: t }) => {
  k(e.ref.main, t.status.main), k(e.ref.sub, t.status.sub);
}, os = H({
  name: "file-status",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Z({
    DID_LOAD_ITEM: nn,
    DID_REVERT_ITEM_PROCESSING: nn,
    DID_REQUEST_ITEM_PROCESSING: is,
    DID_ABORT_ITEM_PROCESSING: rs,
    DID_COMPLETE_ITEM_PROCESSING: ss,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ns,
    DID_UPDATE_ITEM_LOAD_PROGRESS: kn,
    DID_THROW_ITEM_LOAD_ERROR: we,
    DID_THROW_ITEM_INVALID: we,
    DID_THROW_ITEM_PROCESSING_ERROR: we,
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: we,
    DID_THROW_ITEM_REMOVE_ERROR: we
  }),
  didCreateView: (e) => {
    ge("CREATE_VIEW", { ...e, view: e });
  },
  create: ts,
  mixins: {
    styles: ["translateX", "translateY", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), dt = {
  AbortItemLoad: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
    action: "ABORT_ITEM_LOAD",
    className: "filepond--action-abort-item-load",
    align: "LOAD_INDICATOR_POSITION"
    // right
  },
  RetryItemLoad: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
    action: "RETRY_ITEM_LOAD",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-load",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RemoveItem: {
    label: "GET_LABEL_BUTTON_REMOVE_ITEM",
    action: "REQUEST_REMOVE_ITEM",
    icon: "GET_ICON_REMOVE",
    className: "filepond--action-remove-item",
    align: "BUTTON_REMOVE_ITEM_POSITION"
    // left
  },
  ProcessItem: {
    label: "GET_LABEL_BUTTON_PROCESS_ITEM",
    action: "REQUEST_ITEM_PROCESSING",
    icon: "GET_ICON_PROCESS",
    className: "filepond--action-process-item",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  AbortItemProcessing: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
    action: "ABORT_ITEM_PROCESSING",
    className: "filepond--action-abort-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RetryItemProcessing: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
    action: "RETRY_ITEM_PROCESSING",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RevertItemProcessing: {
    label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
    action: "REQUEST_REVERT_ITEM_PROCESSING",
    icon: "GET_ICON_UNDO",
    className: "filepond--action-revert-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  }
}, ft = [];
V(dt, (e) => {
  ft.push(e);
});
const ee = (e) => {
  if (pt(e) === "right") return 0;
  const t = e.ref.buttonRemoveItem.rect.element;
  return t.hidden ? null : t.width + t.left;
}, ls = (e) => e.ref.buttonAbortItemLoad.rect.element.width, Fe = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4), as = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2), cs = (e) => e.query("GET_STYLE_LOAD_INDICATOR_POSITION"), ds = (e) => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"), pt = (e) => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"), fs = {
  buttonAbortItemLoad: { opacity: 0 },
  buttonRetryItemLoad: { opacity: 0 },
  buttonRemoveItem: { opacity: 0 },
  buttonProcessItem: { opacity: 0 },
  buttonAbortItemProcessing: { opacity: 0 },
  buttonRetryItemProcessing: { opacity: 0 },
  buttonRevertItemProcessing: { opacity: 0 },
  loadProgressIndicator: { opacity: 0, align: cs },
  processProgressIndicator: { opacity: 0, align: ds },
  processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
  info: { translateX: 0, translateY: 0, opacity: 0 },
  status: { translateX: 0, translateY: 0, opacity: 0 }
}, rn = {
  buttonRemoveItem: { opacity: 1 },
  buttonProcessItem: { opacity: 1 },
  info: { translateX: ee },
  status: { translateX: ee }
}, rt = {
  buttonAbortItemProcessing: { opacity: 1 },
  processProgressIndicator: { opacity: 1 },
  status: { opacity: 1 }
}, Se = {
  DID_THROW_ITEM_INVALID: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ee },
    status: { translateX: ee, opacity: 1 }
  },
  DID_START_ITEM_LOAD: {
    buttonAbortItemLoad: { opacity: 1 },
    loadProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_LOAD_ERROR: {
    buttonRetryItemLoad: { opacity: 1 },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ee },
    status: { opacity: 1 }
  },
  DID_START_ITEM_REMOVE: {
    processProgressIndicator: { opacity: 1, align: pt },
    info: { translateX: ee },
    status: { opacity: 0 }
  },
  DID_THROW_ITEM_REMOVE_ERROR: {
    processProgressIndicator: { opacity: 0, align: pt },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ee },
    status: { opacity: 1, translateX: ee }
  },
  DID_LOAD_ITEM: rn,
  DID_LOAD_LOCAL_ITEM: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ee },
    status: { translateX: ee }
  },
  DID_START_ITEM_PROCESSING: rt,
  DID_REQUEST_ITEM_PROCESSING: rt,
  DID_UPDATE_ITEM_PROCESS_PROGRESS: rt,
  DID_COMPLETE_ITEM_PROCESSING: {
    buttonRevertItemProcessing: { opacity: 1 },
    info: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_PROCESSING_ERROR: {
    buttonRemoveItem: { opacity: 1 },
    buttonRetryItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { translateX: ee }
  },
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
    buttonRevertItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { opacity: 1 }
  },
  DID_ABORT_ITEM_PROCESSING: {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: ee },
    status: { opacity: 1 }
  },
  DID_REVERT_ITEM_PROCESSING: rn
}, ps = H({
  create: ({ root: e }) => {
    e.element.innerHTML = e.query("GET_ICON_DONE");
  },
  name: "processing-complete-indicator",
  ignoreRect: !0,
  mixins: {
    styles: ["scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), us = ({ root: e, props: t }) => {
  const n = Object.keys(dt).reduce((f, E) => (f[E] = { ...dt[E] }, f), {}), { id: i } = t, r = e.query("GET_ALLOW_REVERT"), o = e.query("GET_ALLOW_REMOVE"), s = e.query("GET_ALLOW_PROCESS"), a = e.query("GET_INSTANT_UPLOAD"), l = e.query("IS_ASYNC"), d = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let c;
  l ? s && !r ? c = (f) => !/RevertItemProcessing/.test(f) : !s && r ? c = (f) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(f) : !s && !r && (c = (f) => !/Process/.test(f)) : c = (f) => !/Process/.test(f);
  const p = c ? ft.filter(c) : ft.concat();
  if (a && r && (n.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", n.RevertItemProcessing.icon = "GET_ICON_REMOVE"), l && !r) {
    const f = Se.DID_COMPLETE_ITEM_PROCESSING;
    f.info.translateX = as, f.info.translateY = Fe, f.status.translateY = Fe, f.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (l && !s && ([
    "DID_START_ITEM_PROCESSING",
    "DID_REQUEST_ITEM_PROCESSING",
    "DID_UPDATE_ITEM_PROCESS_PROGRESS",
    "DID_THROW_ITEM_PROCESSING_ERROR"
  ].forEach((f) => {
    Se[f].status.translateY = Fe;
  }), Se.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = ls), d && r) {
    n.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
    const f = Se.DID_COMPLETE_ITEM_PROCESSING;
    f.info.translateX = ee, f.status.translateY = Fe, f.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  o || (n.RemoveItem.disabled = !0), V(n, (f, E) => {
    const R = e.createChildView(xn, {
      label: e.query(E.label),
      icon: e.query(E.icon),
      opacity: 0
    });
    p.includes(f) && e.appendChildView(R), E.disabled && (R.element.setAttribute("disabled", "disabled"), R.element.setAttribute("hidden", "hidden")), R.element.dataset.align = e.query(`GET_STYLE_${E.align}`), R.element.classList.add(E.className), R.on("click", (g) => {
      g.stopPropagation(), !E.disabled && e.dispatch(E.action, { query: i });
    }), e.ref[`button${f}`] = R;
  }), e.ref.processingCompleteIndicator = e.appendChildView(
    e.createChildView(ps)
  ), e.ref.processingCompleteIndicator.element.dataset.align = e.query(
    "GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"
  ), e.ref.info = e.appendChildView(e.createChildView(es, { id: i })), e.ref.status = e.appendChildView(e.createChildView(os, { id: i }));
  const m = e.appendChildView(
    e.createChildView(Jt, {
      opacity: 0,
      align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION")
    })
  );
  m.element.classList.add("filepond--load-indicator"), e.ref.loadProgressIndicator = m;
  const u = e.appendChildView(
    e.createChildView(Jt, {
      opacity: 0,
      align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
    })
  );
  u.element.classList.add("filepond--process-indicator"), e.ref.processProgressIndicator = u, e.ref.activeStyles = [];
}, Es = ({ root: e, actions: t, props: n }) => {
  ms({ root: e, actions: t, props: n });
  let i = t.concat().filter((r) => /^DID_/.test(r.type)).reverse().find((r) => Se[r.type]);
  if (i) {
    e.ref.activeStyles = [];
    const r = Se[i.type];
    V(fs, (o, s) => {
      const a = e.ref[o];
      V(s, (l, d) => {
        const c = r[o] && typeof r[o][l] < "u" ? r[o][l] : d;
        e.ref.activeStyles.push({ control: a, key: l, value: c });
      });
    });
  }
  e.ref.activeStyles.forEach(({ control: r, key: o, value: s }) => {
    r[o] = typeof s == "function" ? s(e) : s;
  });
}, ms = Z({
  DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemProcessing.label = t.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemLoad.label = t.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemRemoval.label = t.value;
  },
  DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
    e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
  },
  DID_START_ITEM_LOAD: ({ root: e }) => {
    e.ref.loadProgressIndicator.spin = !0, e.ref.loadProgressIndicator.progress = 0;
  },
  DID_START_ITEM_REMOVE: ({ root: e }) => {
    e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
  },
  DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
    e.ref.loadProgressIndicator.spin = !1, e.ref.loadProgressIndicator.progress = t.progress;
  },
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
    e.ref.processProgressIndicator.spin = !1, e.ref.processProgressIndicator.progress = t.progress;
  }
}), _s = H({
  create: us,
  write: Es,
  didCreateView: (e) => {
    ge("CREATE_VIEW", { ...e, view: e });
  },
  name: "file"
}), Is = ({ root: e, props: t }) => {
  e.ref.fileName = ce("legend"), e.appendChild(e.ref.fileName), e.ref.file = e.appendChildView(e.createChildView(_s, { id: t.id })), e.ref.data = !1;
}, Ts = ({ root: e, props: t }) => {
  k(e.ref.fileName, At(e.query("GET_ITEM_NAME", t.id)));
}, gs = H({
  create: Is,
  ignoreRect: !0,
  write: Z({
    DID_LOAD_ITEM: Ts
  }),
  didCreateView: (e) => {
    ge("CREATE_VIEW", { ...e, view: e });
  },
  tag: "fieldset",
  name: "file-wrapper"
}), sn = { type: "spring", damping: 0.6, mass: 7 }, hs = ({ root: e, props: t }) => {
  [
    {
      name: "top"
    },
    {
      name: "center",
      props: {
        translateY: null,
        scaleY: null
      },
      mixins: {
        animations: {
          scaleY: sn
        },
        styles: ["translateY", "scaleY"]
      }
    },
    {
      name: "bottom",
      props: {
        translateY: null
      },
      mixins: {
        animations: {
          translateY: sn
        },
        styles: ["translateY"]
      }
    }
  ].forEach((n) => {
    Rs(e, n, t.name);
  }), e.element.classList.add(`filepond--${t.name}`), e.ref.scalable = null;
}, Rs = (e, t, n) => {
  const i = H({
    name: `panel-${t.name} filepond--${n}`,
    mixins: t.mixins,
    ignoreRectUpdate: !0
  }), r = e.createChildView(i, t.props);
  e.ref[t.name] = e.appendChildView(r);
}, Os = ({ root: e, props: t }) => {
  if ((e.ref.scalable === null || t.scalable !== e.ref.scalable) && (e.ref.scalable = Sn(t.scalable) ? t.scalable : !0, e.element.dataset.scalable = e.ref.scalable), !t.height) return;
  const n = e.ref.top.rect.element, i = e.ref.bottom.rect.element, r = Math.max(n.height + i.height, t.height);
  e.ref.center.translateY = n.height, e.ref.center.scaleY = (r - n.height - i.height) / 100, e.ref.bottom.translateY = r - i.height;
}, Yn = H({
  name: "panel",
  read: ({ root: e, props: t }) => t.heightCurrent = e.ref.bottom.translateY,
  write: Os,
  create: hs,
  ignoreRect: !0,
  mixins: {
    apis: ["height", "heightCurrent", "scalable"]
  }
}), Ss = (e) => {
  const t = e.map((i) => i.id);
  let n;
  return {
    setIndex: (i) => {
      n = i;
    },
    getIndex: () => n,
    getItemIndex: (i) => t.indexOf(i.id)
  };
}, on = {
  type: "spring",
  stiffness: 0.75,
  damping: 0.45,
  mass: 10
}, ln = "spring", an = {
  DID_START_ITEM_LOAD: "busy",
  DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
  DID_THROW_ITEM_INVALID: "load-invalid",
  DID_THROW_ITEM_LOAD_ERROR: "load-error",
  DID_LOAD_ITEM: "idle",
  DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
  DID_START_ITEM_REMOVE: "busy",
  DID_START_ITEM_PROCESSING: "busy processing",
  DID_REQUEST_ITEM_PROCESSING: "busy processing",
  DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
  DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
  DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
  DID_ABORT_ITEM_PROCESSING: "cancelled",
  DID_REVERT_ITEM_PROCESSING: "idle"
}, Ds = ({ root: e, props: t }) => {
  if (e.ref.handleClick = (i) => e.dispatch("DID_ACTIVATE_ITEM", { id: t.id }), e.element.id = `filepond--item-${t.id}`, e.element.addEventListener("click", e.ref.handleClick), e.ref.container = e.appendChildView(e.createChildView(gs, { id: t.id })), e.ref.panel = e.appendChildView(e.createChildView(Yn, { name: "item-panel" })), e.ref.panel.height = null, t.markedForRemoval = !1, !e.query("GET_ALLOW_REORDER")) return;
  e.element.dataset.dragState = "idle";
  const n = (i) => {
    if (!i.isPrimary) return;
    let r = !1;
    const o = {
      x: i.pageX,
      y: i.pageY
    };
    t.dragOrigin = {
      x: e.translateX,
      y: e.translateY
    }, t.dragCenter = {
      x: i.offsetX,
      y: i.offsetY
    };
    const s = Ss(e.query("GET_ACTIVE_ITEMS"));
    e.dispatch("DID_GRAB_ITEM", { id: t.id, dragState: s });
    const a = (d) => {
      if (!d.isPrimary) return;
      d.stopPropagation(), d.preventDefault(), t.dragOffset = {
        x: d.pageX - o.x,
        y: d.pageY - o.y
      }, t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 && !r && (r = !0, e.element.removeEventListener("click", e.ref.handleClick)), e.dispatch("DID_DRAG_ITEM", { id: t.id, dragState: s });
    }, l = (d) => {
      d.isPrimary && (document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", l), t.dragOffset = {
        x: d.pageX - o.x,
        y: d.pageY - o.y
      }, e.dispatch("DID_DROP_ITEM", { id: t.id, dragState: s }), r && setTimeout(() => e.element.addEventListener("click", e.ref.handleClick), 0));
    };
    document.addEventListener("pointermove", a), document.addEventListener("pointerup", l);
  };
  e.element.addEventListener("pointerdown", n);
}, bs = Z({
  DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
    e.height = t.height;
  }
}), ys = Z(
  {
    DID_GRAB_ITEM: ({ root: e, props: t }) => {
      t.dragOrigin = {
        x: e.translateX,
        y: e.translateY
      };
    },
    DID_DRAG_ITEM: ({ root: e }) => {
      e.element.dataset.dragState = "drag";
    },
    DID_DROP_ITEM: ({ root: e, props: t }) => {
      t.dragOffset = null, t.dragOrigin = null, e.element.dataset.dragState = "drop";
    }
  },
  ({ root: e, actions: t, props: n, shouldOptimize: i }) => {
    e.element.dataset.dragState === "drop" && e.scaleX <= 1 && (e.element.dataset.dragState = "idle");
    let r = t.concat().filter((s) => /^DID_/.test(s.type)).reverse().find((s) => an[s.type]);
    r && r.type !== n.currentState && (n.currentState = r.type, e.element.dataset.filepondItemState = an[n.currentState] || "");
    const o = e.query("GET_ITEM_PANEL_ASPECT_RATIO") || e.query("GET_PANEL_ASPECT_RATIO");
    o ? i || (e.height = e.rect.element.width * o) : (bs({ root: e, actions: t, props: n }), !e.height && e.ref.container.rect.element.height > 0 && (e.height = e.ref.container.rect.element.height)), i && (e.ref.panel.height = null), e.ref.panel.height = e.height;
  }
), As = H({
  create: Ds,
  write: ys,
  destroy: ({ root: e, props: t }) => {
    e.element.removeEventListener("click", e.ref.handleClick), e.dispatch("RELEASE_ITEM", { query: t.id });
  },
  tag: "li",
  name: "item",
  mixins: {
    apis: [
      "id",
      "interactionMethod",
      "markedForRemoval",
      "spawnDate",
      "dragCenter",
      "dragOrigin",
      "dragOffset"
    ],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
    animations: {
      scaleX: ln,
      scaleY: ln,
      translateX: on,
      translateY: on,
      opacity: { type: "tween", duration: 150 }
    }
  }
});
var Lt = (e, t) => Math.max(1, Math.floor((e + 1) / t));
const Pt = (e, t, n) => {
  if (!n) return;
  const i = e.rect.element.width, r = t.length;
  let o = null;
  if (r === 0 || n.top < t[0].rect.element.top) return -1;
  const a = t[0].rect.element, l = a.marginLeft + a.marginRight, d = a.width + l, c = Lt(i, d);
  if (c === 1) {
    for (let u = 0; u < r; u++) {
      const f = t[u], E = f.rect.outer.top + f.rect.element.height * 0.5;
      if (n.top < E)
        return u;
    }
    return r;
  }
  const p = a.marginTop + a.marginBottom, m = a.height + p;
  for (let u = 0; u < r; u++) {
    const f = u % c, E = Math.floor(u / c), R = f * d, g = E * m, S = g - a.marginTop, D = R + d, A = g + m + a.marginBottom;
    if (n.top < A && n.top > S) {
      if (n.left < D)
        return u;
      u !== r - 1 ? o = u : o = null;
    }
  }
  return o !== null ? o : r;
}, Be = {
  height: 0,
  width: 0,
  get getHeight() {
    return this.height;
  },
  set setHeight(e) {
    (this.height === 0 || e === 0) && (this.height = e);
  },
  get getWidth() {
    return this.width;
  },
  set setWidth(e) {
    (this.width === 0 || e === 0) && (this.width = e);
  },
  setDimensions: function(e, t) {
    (this.height === 0 || e === 0) && (this.height = e), (this.width === 0 || t === 0) && (this.width = t);
  }
}, Ls = ({ root: e }) => {
  Y(e.element, "role", "list"), e.ref.lastItemSpanwDate = Date.now();
}, Ps = ({ root: e, action: t }) => {
  const { id: n, index: i, interactionMethod: r } = t;
  e.ref.addIndex = i;
  const o = Date.now();
  let s = o, a = 1;
  if (r !== ie.NONE) {
    a = 0;
    const l = e.query("GET_ITEM_INSERT_INTERVAL"), d = o - e.ref.lastItemSpanwDate;
    s = d < l ? o + (l - d) : o;
  }
  e.ref.lastItemSpanwDate = s, e.appendChildView(
    e.createChildView(
      // view type
      As,
      // props
      {
        spawnDate: s,
        id: n,
        opacity: a,
        interactionMethod: r
      }
    ),
    i
  );
}, cn = (e, t, n, i = 0, r = 1) => {
  e.dragOffset ? (e.translateX = null, e.translateY = null, e.translateX = e.dragOrigin.x + e.dragOffset.x, e.translateY = e.dragOrigin.y + e.dragOffset.y, e.scaleX = 1.025, e.scaleY = 1.025) : (e.translateX = t, e.translateY = n, Date.now() > e.spawnDate && (e.opacity === 0 && ws(e, t, n, i, r), e.scaleX = 1, e.scaleY = 1, e.opacity = 1));
}, ws = (e, t, n, i, r) => {
  e.interactionMethod === ie.NONE ? (e.translateX = null, e.translateX = t, e.translateY = null, e.translateY = n) : e.interactionMethod === ie.DROP ? (e.translateX = null, e.translateX = t - i * 20, e.translateY = null, e.translateY = n - r * 10, e.scaleX = 0.8, e.scaleY = 0.8) : e.interactionMethod === ie.BROWSE ? (e.translateY = null, e.translateY = n - 30) : e.interactionMethod === ie.API && (e.translateX = null, e.translateX = t - 30, e.translateY = null);
}, Ms = ({ root: e, action: t }) => {
  const { id: n } = t, i = e.childViews.find((r) => r.id === n);
  i && (i.scaleX = 0.9, i.scaleY = 0.9, i.opacity = 0, i.markedForRemoval = !0);
}, st = (e) => e.rect.element.height + e.rect.element.marginBottom * 0.5 + e.rect.element.marginTop * 0.5, Cs = (e) => e.rect.element.width + e.rect.element.marginLeft * 0.5 + e.rect.element.marginRight * 0.5, Ns = ({ root: e, action: t }) => {
  const { id: n, dragState: i } = t, r = e.query("GET_ITEM", { id: n }), o = e.childViews.find((R) => R.id === n), s = e.childViews.length, a = i.getItemIndex(r);
  if (!o) return;
  const l = {
    x: o.dragOrigin.x + o.dragOffset.x + o.dragCenter.x,
    y: o.dragOrigin.y + o.dragOffset.y + o.dragCenter.y
  }, d = st(o), c = Cs(o);
  let p = Math.floor(e.rect.outer.width / c);
  p > s && (p = s);
  const m = Math.floor(s / p + 1);
  Be.setHeight = d * m, Be.setWidth = c * p;
  var u = {
    y: Math.floor(l.y / d),
    x: Math.floor(l.x / c),
    getGridIndex: function() {
      return l.y > Be.getHeight || l.y < 0 || l.x > Be.getWidth || l.x < 0 ? a : this.y * p + this.x;
    },
    getColIndex: function() {
      const g = e.query("GET_ACTIVE_ITEMS"), S = e.childViews.filter((L) => L.rect.element.height), D = g.map(
        (L) => S.find((N) => N.id === L.id)
      ), A = D.findIndex((L) => L === o), b = st(o), w = D.length;
      let B = w, O = 0, M = 0, G = 0;
      for (let L = 0; L < w; L++)
        if (O = st(D[L]), G = M, M = G + O, l.y < M) {
          if (A > L) {
            if (l.y < G + b) {
              B = L;
              break;
            }
            continue;
          }
          B = L;
          break;
        }
      return B;
    }
  };
  const f = p > 1 ? u.getGridIndex() : u.getColIndex();
  e.dispatch("MOVE_ITEM", { query: o, index: f });
  const E = i.getIndex();
  if (E === void 0 || E !== f) {
    if (i.setIndex(f), E === void 0) return;
    e.dispatch("DID_REORDER_ITEMS", {
      items: e.query("GET_ACTIVE_ITEMS"),
      origin: a,
      target: f
    });
  }
}, vs = Z({
  DID_ADD_ITEM: Ps,
  DID_REMOVE_ITEM: Ms,
  DID_DRAG_ITEM: Ns
}), Gs = ({ root: e, props: t, actions: n, shouldOptimize: i }) => {
  vs({ root: e, props: t, actions: n });
  const { dragCoordinates: r } = t, o = e.rect.element.width, s = e.childViews.filter((D) => D.rect.element.height), a = e.query("GET_ACTIVE_ITEMS").map((D) => s.find((A) => A.id === D.id)).filter((D) => D), l = r ? Pt(e, a, r) : null, d = e.ref.addIndex || null;
  e.ref.addIndex = null;
  let c = 0, p = 0, m = 0;
  if (a.length === 0) return;
  const u = a[0].rect.element, f = u.marginTop + u.marginBottom, E = u.marginLeft + u.marginRight, R = u.width + E, g = u.height + f, S = Lt(o, R);
  if (S === 1) {
    let D = 0, A = 0;
    a.forEach((b, w) => {
      if (l) {
        let M = w - l;
        M === -2 ? A = -f * 0.25 : M === -1 ? A = -f * 0.75 : M === 0 ? A = f * 0.75 : M === 1 ? A = f * 0.25 : A = 0;
      }
      i && (b.translateX = null, b.translateY = null), b.markedForRemoval || cn(b, 0, D + A);
      let O = (b.rect.element.height + f) * (b.markedForRemoval ? b.opacity : 1);
      D += O;
    });
  } else {
    let D = 0, A = 0;
    a.forEach((b, w) => {
      w === l && (c = 1), w === d && (m += 1), b.markedForRemoval && b.opacity < 0.5 && (p -= 1);
      const B = w + m + c + p, O = B % S, M = Math.floor(B / S), G = O * R, L = M * g, N = Math.sign(G - D), W = Math.sign(L - A);
      D = G, A = L, !b.markedForRemoval && (i && (b.translateX = null, b.translateY = null), cn(b, G, L, N, W));
    });
  }
}, Fs = (e, t) => t.filter((n) => n.data && n.data.id ? e.id === n.data.id : !0), Bs = H({
  create: Ls,
  write: Gs,
  tag: "ul",
  name: "list",
  didWriteView: ({ root: e }) => {
    e.childViews.filter((t) => t.markedForRemoval && t.opacity === 0 && t.resting).forEach((t) => {
      t._destroy(), e.removeChildView(t);
    });
  },
  filterFrameActionsForChild: Fs,
  mixins: {
    apis: ["dragCoordinates"]
  }
}), Us = ({ root: e, props: t }) => {
  e.ref.list = e.appendChildView(e.createChildView(Bs)), t.dragCoordinates = null, t.overflowing = !1;
}, xs = ({ root: e, props: t, action: n }) => {
  e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (t.dragCoordinates = {
    left: n.position.scopeLeft - e.ref.list.rect.element.left,
    top: n.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
  });
}, Vs = ({ props: e }) => {
  e.dragCoordinates = null;
}, zs = Z({
  DID_DRAG: xs,
  DID_END_DRAG: Vs
}), ks = ({ root: e, props: t, actions: n }) => {
  if (zs({ root: e, props: t, actions: n }), e.ref.list.dragCoordinates = t.dragCoordinates, t.overflowing && !t.overflow && (t.overflowing = !1, e.element.dataset.state = "", e.height = null), t.overflow) {
    const i = Math.round(t.overflow);
    i !== e.height && (t.overflowing = !0, e.element.dataset.state = "overflow", e.height = i);
  }
}, Ys = H({
  create: Us,
  write: ks,
  name: "list-scroller",
  mixins: {
    apis: ["overflow", "dragCoordinates"],
    styles: ["height", "translateY"],
    animations: {
      translateY: "spring"
    }
  }
}), oe = (e, t, n, i = "") => {
  n ? Y(e, t, i) : e.removeAttribute(t);
}, Hs = (e) => {
  if (!(!e || e.value === "")) {
    try {
      e.value = "";
    } catch {
    }
    if (e.value) {
      const t = ce("form"), n = e.parentNode, i = e.nextSibling;
      t.appendChild(e), t.reset(), i ? n.insertBefore(e, i) : n.appendChild(e);
    }
  }
}, qs = ({ root: e, props: t }) => {
  e.element.id = `filepond--browser-${t.id}`, Y(e.element, "name", e.query("GET_NAME")), Y(e.element, "aria-controls", `filepond--assistant-${t.id}`), Y(e.element, "aria-labelledby", `filepond--drop-label-${t.id}`), Hn({ root: e, action: { value: e.query("GET_ACCEPTED_FILE_TYPES") } }), qn({ root: e, action: { value: e.query("GET_ALLOW_MULTIPLE") } }), $n({ root: e, action: { value: e.query("GET_ALLOW_DIRECTORIES_ONLY") } }), ut({ root: e }), Wn({ root: e, action: { value: e.query("GET_REQUIRED") } }), Xn({ root: e, action: { value: e.query("GET_CAPTURE_METHOD") } }), e.ref.handleChange = (n) => {
    if (!e.element.value)
      return;
    const i = Array.from(e.element.files).map((r) => (r._relativePath = r.webkitRelativePath, r));
    setTimeout(() => {
      t.onload(i), Hs(e.element);
    }, 250);
  }, e.element.addEventListener("change", e.ref.handleChange);
}, Hn = ({ root: e, action: t }) => {
  e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && oe(e.element, "accept", !!t.value, t.value ? t.value.join(",") : "");
}, qn = ({ root: e, action: t }) => {
  oe(e.element, "multiple", t.value);
}, $n = ({ root: e, action: t }) => {
  oe(e.element, "webkitdirectory", t.value);
}, ut = ({ root: e }) => {
  const t = e.query("GET_DISABLED"), n = e.query("GET_ALLOW_BROWSE"), i = t || !n;
  oe(e.element, "disabled", i);
}, Wn = ({ root: e, action: t }) => {
  t.value ? e.query("GET_TOTAL_ITEMS") === 0 && oe(e.element, "required", !0) : oe(e.element, "required", !1);
}, Xn = ({ root: e, action: t }) => {
  oe(e.element, "capture", !!t.value, t.value === !0 ? "" : t.value);
}, dn = ({ root: e }) => {
  const { element: t } = e;
  e.query("GET_TOTAL_ITEMS") > 0 ? (oe(t, "required", !1), oe(t, "name", !1)) : (oe(t, "name", !0, e.query("GET_NAME")), e.query("GET_CHECK_VALIDITY") && t.setCustomValidity(""), e.query("GET_REQUIRED") && oe(t, "required", !0));
}, $s = ({ root: e }) => {
  e.query("GET_CHECK_VALIDITY") && e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"));
}, Ws = H({
  tag: "input",
  name: "browser",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  attributes: {
    type: "file"
  },
  create: qs,
  destroy: ({ root: e }) => {
    e.element.removeEventListener("change", e.ref.handleChange);
  },
  write: Z({
    DID_LOAD_ITEM: dn,
    DID_REMOVE_ITEM: dn,
    DID_THROW_ITEM_INVALID: $s,
    DID_SET_DISABLED: ut,
    DID_SET_ALLOW_BROWSE: ut,
    DID_SET_ALLOW_DIRECTORIES_ONLY: $n,
    DID_SET_ALLOW_MULTIPLE: qn,
    DID_SET_ACCEPTED_FILE_TYPES: Hn,
    DID_SET_CAPTURE_METHOD: Xn,
    DID_SET_REQUIRED: Wn
  })
}), fn = {
  ENTER: 13,
  SPACE: 32
}, Xs = ({ root: e, props: t }) => {
  const n = ce("label");
  Y(n, "for", `filepond--browser-${t.id}`), Y(n, "id", `filepond--drop-label-${t.id}`), Y(n, "aria-hidden", "true"), e.ref.handleKeyDown = (i) => {
    (i.keyCode === fn.ENTER || i.keyCode === fn.SPACE) && (i.preventDefault(), e.ref.label.click());
  }, e.ref.handleClick = (i) => {
    i.target === n || n.contains(i.target) || e.ref.label.click();
  }, n.addEventListener("keydown", e.ref.handleKeyDown), e.element.addEventListener("click", e.ref.handleClick), jn(n, t.caption), e.appendChild(n), e.ref.label = n;
}, jn = (e, t) => {
  e.innerHTML = t;
  const n = e.querySelector(".filepond--label-action");
  return n && Y(n, "tabindex", "0"), t;
}, js = H({
  name: "drop-label",
  ignoreRect: !0,
  create: Xs,
  destroy: ({ root: e }) => {
    e.ref.label.addEventListener("keydown", e.ref.handleKeyDown), e.element.removeEventListener("click", e.ref.handleClick);
  },
  write: Z({
    DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
      jn(e.ref.label, t.value);
    }
  }),
  mixins: {
    styles: ["opacity", "translateX", "translateY"],
    animations: {
      opacity: { type: "tween", duration: 150 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), Qs = H({
  name: "drip-blob",
  ignoreRect: !0,
  mixins: {
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), Zs = ({ root: e }) => {
  const t = e.rect.element.width * 0.5, n = e.rect.element.height * 0.5;
  e.ref.blob = e.appendChildView(
    e.createChildView(Qs, {
      opacity: 0,
      scaleX: 2.5,
      scaleY: 2.5,
      translateX: t,
      translateY: n
    })
  );
}, Ks = ({ root: e, action: t }) => {
  if (!e.ref.blob) {
    Zs({ root: e });
    return;
  }
  e.ref.blob.translateX = t.position.scopeLeft, e.ref.blob.translateY = t.position.scopeTop, e.ref.blob.scaleX = 1, e.ref.blob.scaleY = 1, e.ref.blob.opacity = 1;
}, Js = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.opacity = 0);
}, eo = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.scaleX = 2.5, e.ref.blob.scaleY = 2.5, e.ref.blob.opacity = 0);
}, to = ({ root: e, props: t, actions: n }) => {
  no({ root: e, props: t, actions: n });
  const { blob: i } = e.ref;
  n.length === 0 && i && i.opacity === 0 && (e.removeChildView(i), e.ref.blob = null);
}, no = Z({
  DID_DRAG: Ks,
  DID_DROP: eo,
  DID_END_DRAG: Js
}), io = H({
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "drip",
  write: to
}), Qn = (e, t) => {
  try {
    const n = new DataTransfer();
    t.forEach((i) => {
      i instanceof File ? n.items.add(i) : n.items.add(
        new File([i], i.name, {
          type: i.type
        })
      );
    }), e.files = n.files;
  } catch {
    return !1;
  }
  return !0;
}, ro = ({ root: e }) => e.ref.fields = {}, Ke = (e, t) => e.ref.fields[t], wt = (e) => {
  e.query("GET_ACTIVE_ITEMS").forEach((t) => {
    e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
  });
}, pn = ({ root: e }) => wt(e), so = ({ root: e, action: t }) => {
  const r = !(e.query("GET_ITEM", t.id).origin === q.LOCAL) && e.query("SHOULD_UPDATE_FILE_INPUT"), o = ce("input");
  o.type = r ? "file" : "hidden", o.name = e.query("GET_NAME"), o.disabled = e.query("GET_DISABLED"), e.ref.fields[t.id] = o, wt(e);
}, oo = ({ root: e, action: t }) => {
  const n = Ke(e, t.id);
  if (!n || (t.serverFileReference !== null && (n.value = t.serverFileReference), !e.query("SHOULD_UPDATE_FILE_INPUT"))) return;
  const i = e.query("GET_ITEM", t.id);
  Qn(n, [i.file]);
}, lo = ({ root: e, action: t }) => {
  e.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(() => {
    const n = Ke(e, t.id);
    n && Qn(n, [t.file]);
  }, 0);
}, ao = ({ root: e }) => {
  e.element.disabled = e.query("GET_DISABLED");
}, co = ({ root: e, action: t }) => {
  const n = Ke(e, t.id);
  n && (n.parentNode && n.parentNode.removeChild(n), delete e.ref.fields[t.id]);
}, fo = ({ root: e, action: t }) => {
  const n = Ke(e, t.id);
  n && (t.value === null ? n.removeAttribute("value") : n.type != "file" && (n.value = t.value), wt(e));
}, po = Z({
  DID_SET_DISABLED: ao,
  DID_ADD_ITEM: so,
  DID_LOAD_ITEM: oo,
  DID_REMOVE_ITEM: co,
  DID_DEFINE_VALUE: fo,
  DID_PREPARE_OUTPUT: lo,
  DID_REORDER_ITEMS: pn,
  DID_SORT_ITEMS: pn
}), uo = H({
  tag: "fieldset",
  name: "data",
  create: ro,
  write: po,
  ignoreRect: !0
}), Eo = (e) => "getRootNode" in e ? e.getRootNode() : document, mo = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"], _o = ["css", "csv", "html", "txt"], Io = {
  zip: "zip|compressed",
  epub: "application/epub+zip"
}, Zn = (e = "") => (e = e.toLowerCase(), mo.includes(e) ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e) : _o.includes(e) ? "text/" + e : Io[e] || ""), Mt = (e) => new Promise((t, n) => {
  const i = bo(e);
  if (i.length && !To(e))
    return t(i);
  go(e).then(t);
}), To = (e) => e.files ? e.files.length > 0 : !1, go = (e) => new Promise((t, n) => {
  const i = (e.items ? Array.from(e.items) : []).filter((r) => ho(r)).map((r) => Ro(r));
  if (!i.length) {
    t(e.files ? Array.from(e.files) : []);
    return;
  }
  Promise.all(i).then((r) => {
    const o = [];
    r.forEach((s) => {
      o.push.apply(o, s);
    }), t(
      o.filter((s) => s).map((s) => (s._relativePath || (s._relativePath = s.webkitRelativePath), s))
    );
  }).catch(console.error);
}), ho = (e) => {
  if (Kn(e)) {
    const t = Ct(e);
    if (t)
      return t.isFile || t.isDirectory;
  }
  return e.kind === "file";
}, Ro = (e) => new Promise((t, n) => {
  if (Do(e)) {
    Oo(Ct(e)).then(t).catch(n);
    return;
  }
  t([e.getAsFile()]);
}), Oo = (e) => new Promise((t, n) => {
  const i = [];
  let r = 0, o = 0;
  const s = () => {
    o === 0 && r === 0 && t(i);
  }, a = (l) => {
    r++;
    const d = l.createReader(), c = () => {
      d.readEntries((p) => {
        if (p.length === 0) {
          r--, s();
          return;
        }
        p.forEach((m) => {
          m.isDirectory ? a(m) : (o++, m.file((u) => {
            const f = So(u);
            m.fullPath && (f._relativePath = m.fullPath), i.push(f), o--, s();
          }));
        }), c();
      }, n);
    };
    c();
  };
  a(e);
}), So = (e) => {
  if (e.type.length) return e;
  const t = e.lastModifiedDate, n = e.name, i = Zn(Ze(e.name));
  return i.length && (e = e.slice(0, e.size, i), e.name = n, e.lastModifiedDate = t), e;
}, Do = (e) => Kn(e) && (Ct(e) || {}).isDirectory, Kn = (e) => "webkitGetAsEntry" in e, Ct = (e) => e.webkitGetAsEntry(), bo = (e) => {
  let t = [];
  try {
    if (t = Ao(e), t.length)
      return t;
    t = yo(e);
  } catch {
  }
  return t;
}, yo = (e) => {
  let t = e.getData("url");
  return typeof t == "string" && t.length ? [t] : [];
}, Ao = (e) => {
  let t = e.getData("text/html");
  if (typeof t == "string" && t.length) {
    const n = t.match(/src\s*=\s*"(.+?)"/);
    if (n)
      return [n[1]];
  }
  return [];
}, qe = [], Te = (e) => ({
  pageLeft: e.pageX,
  pageTop: e.pageY,
  scopeLeft: e.offsetX || e.layerX,
  scopeTop: e.offsetY || e.layerY
}), Lo = (e, t, n) => {
  const i = Po(t), r = {
    element: e,
    filterElement: n,
    state: null,
    ondrop: () => {
    },
    onenter: () => {
    },
    ondrag: () => {
    },
    onexit: () => {
    },
    onload: () => {
    },
    allowdrop: () => {
    }
  };
  return r.destroy = i.addListener(r), r;
}, Po = (e) => {
  const t = qe.find((i) => i.element === e);
  if (t)
    return t;
  const n = wo(e);
  return qe.push(n), n;
}, wo = (e) => {
  const t = [], n = {
    dragenter: Co,
    dragover: No,
    dragleave: Go,
    drop: vo
  }, i = {};
  V(n, (o, s) => {
    i[o] = s(e, t), e.addEventListener(o, i[o], !1);
  });
  const r = {
    element: e,
    addListener: (o) => (t.push(o), () => {
      t.splice(t.indexOf(o), 1), t.length === 0 && (qe.splice(qe.indexOf(r), 1), V(n, (s) => {
        e.removeEventListener(s, i[s], !1);
      }));
    })
  };
  return r;
}, Mo = (e, t) => ("elementFromPoint" in e || (e = document), e.elementFromPoint(t.x, t.y)), Nt = (e, t) => {
  const n = Eo(t), i = Mo(n, {
    x: e.pageX - window.pageXOffset,
    y: e.pageY - window.pageYOffset
  });
  return i === t || t.contains(i);
};
let Jn = null;
const Ue = (e, t) => {
  try {
    e.dropEffect = t;
  } catch {
  }
}, Co = (e, t) => (n) => {
  n.preventDefault(), Jn = n.target, t.forEach((i) => {
    const { element: r, onenter: o } = i;
    Nt(n, r) && (i.state = "enter", o(Te(n)));
  });
}, No = (e, t) => (n) => {
  n.preventDefault();
  const i = n.dataTransfer;
  Mt(i).then((r) => {
    let o = !1;
    t.some((s) => {
      const { filterElement: a, element: l, onenter: d, onexit: c, ondrag: p, allowdrop: m } = s;
      Ue(i, "copy");
      const u = m(r);
      if (!u) {
        Ue(i, "none");
        return;
      }
      if (Nt(n, l)) {
        if (o = !0, s.state === null) {
          s.state = "enter", d(Te(n));
          return;
        }
        if (s.state = "over", a && !u) {
          Ue(i, "none");
          return;
        }
        p(Te(n));
      } else
        a && !o && Ue(i, "none"), s.state && (s.state = null, c(Te(n)));
    });
  });
}, vo = (e, t) => (n) => {
  n.preventDefault();
  const i = n.dataTransfer;
  Mt(i).then((r) => {
    t.forEach((o) => {
      const { filterElement: s, element: a, ondrop: l, onexit: d, allowdrop: c } = o;
      if (o.state = null, !(s && !Nt(n, a))) {
        if (!c(r)) return d(Te(n));
        l(Te(n), r);
      }
    });
  });
}, Go = (e, t) => (n) => {
  Jn === n.target && t.forEach((i) => {
    const { onexit: r } = i;
    i.state = null, r(Te(n));
  });
}, Fo = (e, t, n) => {
  e.classList.add("filepond--hopper");
  const { catchesDropsOnPage: i, requiresDropOnElement: r, filterItems: o = (c) => c } = n, s = Lo(
    e,
    i ? document.documentElement : e,
    r
  );
  let a = "", l = "";
  s.allowdrop = (c) => t(o(c)), s.ondrop = (c, p) => {
    const m = o(p);
    if (!t(m)) {
      d.ondragend(c);
      return;
    }
    l = "drag-drop", d.onload(m, c);
  }, s.ondrag = (c) => {
    d.ondrag(c);
  }, s.onenter = (c) => {
    l = "drag-over", d.ondragstart(c);
  }, s.onexit = (c) => {
    l = "drag-exit", d.ondragend(c);
  };
  const d = {
    updateHopperState: () => {
      a !== l && (e.dataset.hopperState = l, a = l);
    },
    onload: () => {
    },
    ondragstart: () => {
    },
    ondrag: () => {
    },
    ondragend: () => {
    },
    destroy: () => {
      s.destroy();
    }
  };
  return d;
};
let Et = !1;
const De = [], ei = (e) => {
  const t = document.activeElement;
  if (t && /textarea|input/i.test(t.nodeName)) {
    let n = !1, i = t;
    for (; i !== document.body; ) {
      if (i.classList.contains("filepond--root")) {
        n = !0;
        break;
      }
      i = i.parentNode;
    }
    if (!n) return;
  }
  Mt(e.clipboardData).then((n) => {
    n.length && De.forEach((i) => i(n));
  });
}, Bo = (e) => {
  De.includes(e) || (De.push(e), !Et && (Et = !0, document.addEventListener("paste", ei)));
}, Uo = (e) => {
  Dt(De, De.indexOf(e)), De.length === 0 && (document.removeEventListener("paste", ei), Et = !1);
}, xo = () => {
  const e = (n) => {
    t.onload(n);
  }, t = {
    destroy: () => {
      Uo(e);
    },
    onload: () => {
    }
  };
  return Bo(e), t;
}, Vo = ({ root: e, props: t }) => {
  e.element.id = `filepond--assistant-${t.id}`, Y(e.element, "role", "status"), Y(e.element, "aria-live", "polite"), Y(e.element, "aria-relevant", "additions");
};
let un = null, En = null;
const ot = [], Je = (e, t) => {
  e.element.textContent = t;
}, zo = (e) => {
  e.element.textContent = "";
}, ti = (e, t, n) => {
  const i = e.query("GET_TOTAL_ITEMS");
  Je(
    e,
    `${n} ${t}, ${i} ${i === 1 ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL")}`
  ), clearTimeout(En), En = setTimeout(() => {
    zo(e);
  }, 1500);
}, ni = (e) => e.element.parentNode.contains(document.activeElement), ko = ({ root: e, action: t }) => {
  if (!ni(e))
    return;
  e.element.textContent = "";
  const n = e.query("GET_ITEM", t.id);
  ot.push(n.filename), clearTimeout(un), un = setTimeout(() => {
    ti(e, ot.join(", "), e.query("GET_LABEL_FILE_ADDED")), ot.length = 0;
  }, 750);
}, Yo = ({ root: e, action: t }) => {
  if (!ni(e))
    return;
  const n = t.item;
  ti(e, n.filename, e.query("GET_LABEL_FILE_REMOVED"));
}, Ho = ({ root: e, action: t }) => {
  const i = e.query("GET_ITEM", t.id).filename, r = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  Je(e, `${i} ${r}`);
}, mn = ({ root: e, action: t }) => {
  const i = e.query("GET_ITEM", t.id).filename, r = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  Je(e, `${i} ${r}`);
}, xe = ({ root: e, action: t }) => {
  const i = e.query("GET_ITEM", t.id).filename;
  Je(e, `${t.status.main} ${i} ${t.status.sub}`);
}, qo = H({
  create: Vo,
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Z({
    DID_LOAD_ITEM: ko,
    DID_REMOVE_ITEM: Yo,
    DID_COMPLETE_ITEM_PROCESSING: Ho,
    DID_ABORT_ITEM_PROCESSING: mn,
    DID_REVERT_ITEM_PROCESSING: mn,
    DID_THROW_ITEM_REMOVE_ERROR: xe,
    DID_THROW_ITEM_LOAD_ERROR: xe,
    DID_THROW_ITEM_INVALID: xe,
    DID_THROW_ITEM_PROCESSING_ERROR: xe
  }),
  tag: "span",
  name: "assistant"
}), ii = (e, t = "-") => e.replace(new RegExp(`${t}.`, "g"), (n) => n.charAt(1).toUpperCase()), ri = (e, t = 16, n = !0) => {
  let i = Date.now(), r = null;
  return (...o) => {
    clearTimeout(r);
    const s = Date.now() - i, a = () => {
      i = Date.now(), e(...o);
    };
    s < t ? n || (r = setTimeout(a, t - s)) : a();
  };
}, $o = 1e6, $e = (e) => e.preventDefault(), Wo = ({ root: e, props: t }) => {
  const n = e.query("GET_ID");
  n && (e.element.id = n);
  const i = e.query("GET_CLASS_NAME");
  i && i.split(" ").filter((l) => l.length).forEach((l) => {
    e.element.classList.add(l);
  }), e.ref.label = e.appendChildView(
    e.createChildView(js, {
      ...t,
      translateY: null,
      caption: e.query("GET_LABEL_IDLE")
    })
  ), e.ref.list = e.appendChildView(e.createChildView(Ys, { translateY: null })), e.ref.panel = e.appendChildView(e.createChildView(Yn, { name: "panel-root" })), e.ref.assistant = e.appendChildView(e.createChildView(qo, { ...t })), e.ref.data = e.appendChildView(e.createChildView(uo, { ...t })), e.ref.measure = ce("div"), e.ref.measure.style.height = "100%", e.element.appendChild(e.ref.measure), e.ref.bounds = null, e.query("GET_STYLES").filter((l) => !ae(l.value)).map(({ name: l, value: d }) => {
    e.element.dataset[l] = d;
  }), e.ref.widthPrevious = null, e.ref.widthUpdated = ri(() => {
    e.ref.updateHistory = [], e.dispatch("DID_RESIZE_ROOT");
  }, 250), e.ref.previousAspectRatio = null, e.ref.updateHistory = [];
  const r = window.matchMedia("(pointer: fine) and (hover: hover)").matches, o = "PointerEvent" in window;
  e.query("GET_ALLOW_REORDER") && o && !r && (e.element.addEventListener("touchmove", $e, { passive: !1 }), e.element.addEventListener("gesturestart", $e));
  const s = e.query("GET_CREDITS");
  if (s.length === 2) {
    const l = document.createElement("a");
    l.className = "filepond--credits", l.setAttribute("aria-hidden", "true"), l.href = s[0], l.tabindex = -1, l.target = "_blank", l.rel = "noopener noreferrer", l.textContent = s[1], e.element.appendChild(l), e.ref.credits = l;
  }
}, Xo = ({ root: e, props: t, actions: n }) => {
  if (Jo({ root: e, props: t, actions: n }), n.filter((w) => /^DID_SET_STYLE_/.test(w.type)).filter((w) => !ae(w.data.value)).map(({ type: w, data: B }) => {
    const O = ii(w.substring(8).toLowerCase(), "_");
    e.element.dataset[O] = B.value, e.invalidateLayout();
  }), e.rect.element.hidden) return;
  e.rect.element.width !== e.ref.widthPrevious && (e.ref.widthPrevious = e.rect.element.width, e.ref.widthUpdated());
  let i = e.ref.bounds;
  i || (i = e.ref.bounds = Zo(e), e.element.removeChild(e.ref.measure), e.ref.measure = null);
  const { hopper: r, label: o, list: s, panel: a } = e.ref;
  r && r.updateHopperState();
  const l = e.query("GET_PANEL_ASPECT_RATIO"), d = e.query("GET_ALLOW_MULTIPLE"), c = e.query("GET_TOTAL_ITEMS"), p = d ? e.query("GET_MAX_FILES") || $o : 1, m = c === p, u = n.find((w) => w.type === "DID_ADD_ITEM");
  if (m && u) {
    const w = u.data.interactionMethod;
    o.opacity = 0, d ? o.translateY = -40 : w === ie.API ? o.translateX = 40 : w === ie.BROWSE ? o.translateY = 40 : o.translateY = 30;
  } else m || (o.opacity = 1, o.translateX = 0, o.translateY = 0);
  const f = jo(e), E = Qo(e), R = o.rect.element.height, g = !d || m ? 0 : R, S = m ? s.rect.element.marginTop : 0, D = c === 0 ? 0 : s.rect.element.marginBottom, A = g + S + E.visual + D, b = g + S + E.bounds + D;
  if (s.translateY = Math.max(0, g - s.rect.element.marginTop) - f.top, l) {
    const w = e.rect.element.width, B = w * l;
    l !== e.ref.previousAspectRatio && (e.ref.previousAspectRatio = l, e.ref.updateHistory = []);
    const O = e.ref.updateHistory;
    O.push(w);
    const M = 2;
    if (O.length > M * 2) {
      const L = O.length, N = L - 10;
      let W = 0;
      for (let T = L; T >= N; T--)
        if (O[T] === O[T - 2] && W++, W >= M)
          return;
    }
    a.scalable = !1, a.height = B;
    const G = (
      // the height of the panel minus the label height
      B - g - // the room we leave open between the end of the list and the panel bottom
      (D - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? S : 0)
    );
    E.visual > G ? s.overflow = G : s.overflow = null, e.height = B;
  } else if (i.fixedHeight) {
    a.scalable = !1;
    const w = (
      // the height of the panel minus the label height
      i.fixedHeight - g - // the room we leave open between the end of the list and the panel bottom
      (D - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? S : 0)
    );
    E.visual > w ? s.overflow = w : s.overflow = null;
  } else if (i.cappedHeight) {
    const w = A >= i.cappedHeight, B = Math.min(i.cappedHeight, A);
    a.scalable = !0, a.height = w ? B : B - f.top - f.bottom;
    const O = (
      // the height of the panel minus the label height
      B - g - // the room we leave open between the end of the list and the panel bottom
      (D - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? S : 0)
    );
    A > i.cappedHeight && E.visual > O ? s.overflow = O : s.overflow = null, e.height = Math.min(
      i.cappedHeight,
      b - f.top - f.bottom
    );
  } else {
    const w = c > 0 ? f.top + f.bottom : 0;
    a.scalable = !0, a.height = Math.max(R, A - w), e.height = Math.max(R, b - w);
  }
  e.ref.credits && a.heightCurrent && (e.ref.credits.style.transform = `translateY(${a.heightCurrent}px)`);
}, jo = (e) => {
  const t = e.ref.list.childViews[0].childViews[0];
  return t ? {
    top: t.rect.element.marginTop,
    bottom: t.rect.element.marginBottom
  } : {
    top: 0,
    bottom: 0
  };
}, Qo = (e) => {
  let t = 0, n = 0;
  const i = e.ref.list, r = i.childViews[0], o = r.childViews.filter((S) => S.rect.element.height), s = e.query("GET_ACTIVE_ITEMS").map((S) => o.find((D) => D.id === S.id)).filter((S) => S);
  if (s.length === 0) return { visual: t, bounds: n };
  const a = r.rect.element.width, l = Pt(r, s, i.dragCoordinates), d = s[0].rect.element, c = d.marginTop + d.marginBottom, p = d.marginLeft + d.marginRight, m = d.width + p, u = d.height + c, f = typeof l < "u" && l >= 0 ? 1 : 0, E = s.find((S) => S.markedForRemoval && S.opacity < 0.45) ? -1 : 0, R = s.length + f + E, g = Lt(a, m);
  return g === 1 ? s.forEach((S) => {
    const D = S.rect.element.height + c;
    n += D, t += D * S.opacity;
  }) : (n = Math.ceil(R / g) * u, t = n), { visual: t, bounds: n };
}, Zo = (e) => {
  const t = e.ref.measureHeight || null;
  return {
    cappedHeight: parseInt(e.style.maxHeight, 10) || null,
    fixedHeight: t === 0 ? null : t
  };
}, vt = (e, t) => {
  const n = e.query("GET_ALLOW_REPLACE"), i = e.query("GET_ALLOW_MULTIPLE"), r = e.query("GET_TOTAL_ITEMS");
  let o = e.query("GET_MAX_FILES");
  const s = t.length;
  return !i && s > 1 ? (e.dispatch("DID_THROW_MAX_FILES", {
    source: t,
    error: z("warning", 0, "Max files")
  }), !0) : (o = i ? o : 1, !i && n ? !1 : Ae(o) && r + s > o ? (e.dispatch("DID_THROW_MAX_FILES", {
    source: t,
    error: z("warning", 0, "Max files")
  }), !0) : !1);
}, Ko = (e, t, n) => {
  const i = e.childViews[0];
  return Pt(i, t, {
    left: n.scopeLeft - i.rect.element.left,
    top: n.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
  });
}, _n = (e) => {
  const t = e.query("GET_ALLOW_DROP"), n = e.query("GET_DISABLED"), i = t && !n;
  if (i && !e.ref.hopper) {
    const r = Fo(
      e.element,
      (o) => {
        const s = e.query("GET_BEFORE_DROP_FILE") || (() => !0);
        return e.query("GET_DROP_VALIDATION") ? o.every(
          (l) => ge("ALLOW_HOPPER_ITEM", l, {
            query: e.query
          }).every((d) => d === !0) && s(l)
        ) : !0;
      },
      {
        filterItems: (o) => {
          const s = e.query("GET_IGNORED_FILES");
          return o.filter((a) => ye(a) ? !s.includes(a.name.toLowerCase()) : !0);
        },
        catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
        requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT")
      }
    );
    r.onload = (o, s) => {
      const l = e.ref.list.childViews[0].childViews.filter((c) => c.rect.element.height), d = e.query("GET_ACTIVE_ITEMS").map((c) => l.find((p) => p.id === c.id)).filter((c) => c);
      re("ADD_ITEMS", o, { dispatch: e.dispatch }).then((c) => {
        if (vt(e, c)) return !1;
        e.dispatch("ADD_ITEMS", {
          items: c,
          index: Ko(e.ref.list, d, s),
          interactionMethod: ie.DROP
        });
      }), e.dispatch("DID_DROP", { position: s }), e.dispatch("DID_END_DRAG", { position: s });
    }, r.ondragstart = (o) => {
      e.dispatch("DID_START_DRAG", { position: o });
    }, r.ondrag = ri((o) => {
      e.dispatch("DID_DRAG", { position: o });
    }), r.ondragend = (o) => {
      e.dispatch("DID_END_DRAG", { position: o });
    }, e.ref.hopper = r, e.ref.drip = e.appendChildView(e.createChildView(io));
  } else !i && e.ref.hopper && (e.ref.hopper.destroy(), e.ref.hopper = null, e.removeChildView(e.ref.drip));
}, In = (e, t) => {
  const n = e.query("GET_ALLOW_BROWSE"), i = e.query("GET_DISABLED"), r = n && !i;
  r && !e.ref.browser ? e.ref.browser = e.appendChildView(
    e.createChildView(Ws, {
      ...t,
      onload: (o) => {
        re("ADD_ITEMS", o, {
          dispatch: e.dispatch
        }).then((s) => {
          if (vt(e, s)) return !1;
          e.dispatch("ADD_ITEMS", {
            items: s,
            index: -1,
            interactionMethod: ie.BROWSE
          });
        });
      }
    }),
    0
  ) : !r && e.ref.browser && (e.removeChildView(e.ref.browser), e.ref.browser = null);
}, Tn = (e) => {
  const t = e.query("GET_ALLOW_PASTE"), n = e.query("GET_DISABLED"), i = t && !n;
  i && !e.ref.paster ? (e.ref.paster = xo(), e.ref.paster.onload = (r) => {
    re("ADD_ITEMS", r, { dispatch: e.dispatch }).then((o) => {
      if (vt(e, o)) return !1;
      e.dispatch("ADD_ITEMS", {
        items: o,
        index: -1,
        interactionMethod: ie.PASTE
      });
    });
  }) : !i && e.ref.paster && (e.ref.paster.destroy(), e.ref.paster = null);
}, Jo = Z({
  DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
    In(e, t);
  },
  DID_SET_ALLOW_DROP: ({ root: e }) => {
    _n(e);
  },
  DID_SET_ALLOW_PASTE: ({ root: e }) => {
    Tn(e);
  },
  DID_SET_DISABLED: ({ root: e, props: t }) => {
    _n(e), Tn(e), In(e, t), e.query("GET_DISABLED") ? e.element.dataset.disabled = "disabled" : e.element.removeAttribute("data-disabled");
  }
}), el = H({
  name: "root",
  read: ({ root: e }) => {
    e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight);
  },
  create: Wo,
  write: Xo,
  destroy: ({ root: e }) => {
    e.ref.paster && e.ref.paster.destroy(), e.ref.hopper && e.ref.hopper.destroy(), e.element.removeEventListener("touchmove", $e), e.element.removeEventListener("gesturestart", $e);
  },
  mixins: {
    styles: ["height"]
  }
}), tl = (e = {}) => {
  let t = null;
  const n = He(), i = Ii(
    // initial state (should be serializable)
    nr(n),
    // queries
    [hr, sr(n)],
    // action handlers
    [qr, rr(n)]
  );
  i.dispatch("SET_OPTIONS", { options: e });
  const r = () => {
    document.hidden || i.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", r);
  let o = null, s = !1, a = !1, l = null, d = null;
  const c = () => {
    s || (s = !0), clearTimeout(o), o = setTimeout(() => {
      s = !1, l = null, d = null, a && (a = !1, i.dispatch("DID_STOP_RESIZE"));
    }, 500);
  };
  window.addEventListener("resize", c);
  const p = el(i, { id: St() });
  let m = !1, u = !1;
  const f = {
    // necessary for update loop
    /**
     * Reads from dom (never call manually)
     * @private
     */
    _read: () => {
      s && (d = window.innerWidth, l || (l = d), !a && d !== l && (i.dispatch("DID_START_RESIZE"), a = !0)), u && m && (m = p.element.offsetParent === null), !m && (p._read(), u = p.rect.element.hidden);
    },
    /**
     * Writes to dom (never call manually)
     * @private
     */
    _write: (I) => {
      const h = i.processActionQueue().filter((P) => !/^SET_/.test(P.type));
      m && !h.length || (S(h), m = p._write(I, h, a), ar(i.query("GET_ITEMS")), m && i.processDispatchQueue());
    }
  }, E = (I) => (h) => {
    const P = {
      type: I
    };
    if (!h)
      return P;
    if (h.hasOwnProperty("error") && (P.error = h.error ? { ...h.error } : null), h.status && (P.status = { ...h.status }), h.file && (P.output = h.file), h.source)
      P.file = h.source;
    else if (h.item || h.id) {
      const y = h.item ? h.item : i.query("GET_ITEM", h.id);
      P.file = y ? J(y) : null;
    }
    return h.items && (P.items = h.items.map(J)), /progress/.test(I) && (P.progress = h.progress), h.hasOwnProperty("origin") && h.hasOwnProperty("target") && (P.origin = h.origin, P.target = h.target), P;
  }, R = {
    DID_DESTROY: E("destroy"),
    DID_INIT: E("init"),
    DID_THROW_MAX_FILES: E("warning"),
    DID_INIT_ITEM: E("initfile"),
    DID_START_ITEM_LOAD: E("addfilestart"),
    DID_UPDATE_ITEM_LOAD_PROGRESS: E("addfileprogress"),
    DID_LOAD_ITEM: E("addfile"),
    DID_THROW_ITEM_INVALID: [E("error"), E("addfile")],
    DID_THROW_ITEM_LOAD_ERROR: [E("error"), E("addfile")],
    DID_THROW_ITEM_REMOVE_ERROR: [E("error"), E("removefile")],
    DID_PREPARE_OUTPUT: E("preparefile"),
    DID_START_ITEM_PROCESSING: E("processfilestart"),
    DID_UPDATE_ITEM_PROCESS_PROGRESS: E("processfileprogress"),
    DID_ABORT_ITEM_PROCESSING: E("processfileabort"),
    DID_COMPLETE_ITEM_PROCESSING: E("processfile"),
    DID_COMPLETE_ITEM_PROCESSING_ALL: E("processfiles"),
    DID_REVERT_ITEM_PROCESSING: E("processfilerevert"),
    DID_THROW_ITEM_PROCESSING_ERROR: [E("error"), E("processfile")],
    DID_REMOVE_ITEM: E("removefile"),
    DID_UPDATE_ITEMS: E("updatefiles"),
    DID_ACTIVATE_ITEM: E("activatefile"),
    DID_REORDER_ITEMS: E("reorderfiles")
  }, g = (I) => {
    const h = { pond: F, ...I };
    delete h.type, p.element.dispatchEvent(
      new CustomEvent(`FilePond:${I.type}`, {
        // event info
        detail: h,
        // event behaviour
        bubbles: !0,
        cancelable: !0,
        composed: !0
        // triggers listeners outside of shadow root
      })
    );
    const P = [];
    I.hasOwnProperty("error") && P.push(I.error), I.hasOwnProperty("file") && P.push(I.file);
    const y = ["type", "error", "file"];
    Object.keys(I).filter((x) => !y.includes(x)).forEach((x) => P.push(I[x])), F.fire(I.type, ...P);
    const U = i.query(`GET_ON${I.type.toUpperCase()}`);
    U && U(...P);
  }, S = (I) => {
    I.length && I.filter((h) => R[h.type]).forEach((h) => {
      const P = R[h.type];
      (Array.isArray(P) ? P : [P]).forEach((y) => {
        h.type === "DID_INIT_ITEM" ? g(y(h.data)) : setTimeout(() => {
          g(y(h.data));
        }, 0);
      });
    });
  }, D = (I) => i.dispatch("SET_OPTIONS", { options: I }), A = (I) => i.query("GET_ACTIVE_ITEM", I), b = (I) => new Promise((h, P) => {
    i.dispatch("REQUEST_ITEM_PREPARE", {
      query: I,
      success: (y) => {
        h(y);
      },
      failure: (y) => {
        P(y);
      }
    });
  }), w = (I, h = {}) => new Promise((P, y) => {
    M([{ source: I, options: h }], { index: h.index }).then((U) => P(U && U[0])).catch(y);
  }), B = (I) => I.file && I.id, O = (I, h) => (typeof I == "object" && !B(I) && !h && (h = I, I = void 0), i.dispatch("REMOVE_ITEM", { ...h, query: I }), i.query("GET_ACTIVE_ITEM", I) === null), M = (...I) => new Promise((h, P) => {
    const y = [], U = {};
    if (We(I[0]))
      y.push.apply(y, I[0]), Object.assign(U, I[1] || {});
    else {
      const x = I[I.length - 1];
      typeof x == "object" && !(x instanceof Blob) && Object.assign(U, I.pop()), y.push(...I);
    }
    i.dispatch("ADD_ITEMS", {
      items: y,
      index: U.index,
      interactionMethod: ie.API,
      success: h,
      failure: P
    });
  }), G = () => i.query("GET_ACTIVE_ITEMS"), L = (I) => new Promise((h, P) => {
    i.dispatch("REQUEST_ITEM_PROCESSING", {
      query: I,
      success: (y) => {
        h(y);
      },
      failure: (y) => {
        P(y);
      }
    });
  }), N = (...I) => {
    const h = Array.isArray(I[0]) ? I[0] : I, P = h.length ? h : G();
    return Promise.all(P.map(b));
  }, W = (...I) => {
    const h = Array.isArray(I[0]) ? I[0] : I;
    if (!h.length) {
      const P = G().filter(
        (y) => !(y.status === C.IDLE && y.origin === q.LOCAL) && y.status !== C.PROCESSING && y.status !== C.PROCESSING_COMPLETE && y.status !== C.PROCESSING_REVERT_ERROR
      );
      return Promise.all(P.map(L));
    }
    return Promise.all(h.map(L));
  }, T = (...I) => {
    const h = Array.isArray(I[0]) ? I[0] : I;
    let P;
    typeof h[h.length - 1] == "object" ? P = h.pop() : Array.isArray(I[0]) && (P = I[1]);
    const y = G();
    return h.length ? h.map((x) => ue(x) ? y[x] ? y[x].id : null : x).filter((x) => x).map((x) => O(x, P)) : Promise.all(y.map((x) => O(x, P)));
  }, F = {
    // supports events
    ...Qe(),
    // inject private api methods
    ...f,
    // inject all getters and setters
    ...ir(i, n),
    /**
     * Override options defined in options object
     * @param options
     */
    setOptions: D,
    /**
     * Load the given file
     * @param source - the source of the file (either a File, base64 data uri or url)
     * @param options - object, { index: 0 }
     */
    addFile: w,
    /**
     * Load the given files
     * @param sources - the sources of the files to load
     * @param options - object, { index: 0 }
     */
    addFiles: M,
    /**
     * Returns the file objects matching the given query
     * @param query { string, number, null }
     */
    getFile: A,
    /**
     * Upload file with given name
     * @param query { string, number, null  }
     */
    processFile: L,
    /**
     * Request prepare output for file with given name
     * @param query { string, number, null  }
     */
    prepareFile: b,
    /**
     * Removes a file by its name
     * @param query { string, number, null  }
     */
    removeFile: O,
    /**
     * Moves a file to a new location in the files list
     */
    moveFile: (I, h) => i.dispatch("MOVE_ITEM", { query: I, index: h }),
    /**
     * Returns all files (wrapped in public api)
     */
    getFiles: G,
    /**
     * Starts uploading all files
     */
    processFiles: W,
    /**
     * Clears all files from the files list
     */
    removeFiles: T,
    /**
     * Starts preparing output of all files
     */
    prepareFiles: N,
    /**
     * Sort list of files
     */
    sort: (I) => i.dispatch("SORT", { compare: I }),
    /**
     * Browse the file system for a file
     */
    browse: () => {
      var I = p.element.querySelector("input[type=file]");
      I && I.click();
    },
    /**
     * Destroys the app
     */
    destroy: () => {
      F.fire("destroy", p.element), i.dispatch("ABORT_ALL"), p._destroy(), window.removeEventListener("resize", c), document.removeEventListener("visibilitychange", r), i.dispatch("DID_DESTROY");
    },
    /**
     * Inserts the plugin before the target element
     */
    insertBefore: (I) => Vt(p.element, I),
    /**
     * Inserts the plugin after the target element
     */
    insertAfter: (I) => zt(p.element, I),
    /**
     * Appends the plugin to the target element
     */
    appendTo: (I) => I.appendChild(p.element),
    /**
     * Replaces an element with the app
     */
    replaceElement: (I) => {
      Vt(p.element, I), I.parentNode.removeChild(I), t = I;
    },
    /**
     * Restores the original element
     */
    restoreElement: () => {
      t && (zt(t, p.element), p.element.parentNode.removeChild(p.element), t = null);
    },
    /**
     * Returns true if the app root is attached to given element
     * @param element
     */
    isAttachedTo: (I) => p.element === I || t === I,
    /**
     * Returns the root element
     */
    element: {
      get: () => p.element
    },
    /**
     * Returns the current pond status
     */
    status: {
      get: () => i.query("GET_STATUS")
    }
  };
  return i.dispatch("DID_INIT"), pe(F);
}, si = (e = {}) => {
  const t = {};
  return V(He(), (i, r) => {
    t[i] = r[0];
  }), tl({
    // default options
    ...t,
    // custom options
    ...e
  });
}, nl = (e) => e.charAt(0).toLowerCase() + e.slice(1), il = (e) => ii(e.replace(/^data-/, "")), oi = (e, t) => {
  V(t, (n, i) => {
    V(e, (r, o) => {
      const s = new RegExp(n);
      if (!s.test(r) || (delete e[r], i === !1))
        return;
      if (Q(i)) {
        e[i] = o;
        return;
      }
      const l = i.group;
      $(i) && !e[l] && (e[l] = {}), e[l][nl(r.replace(s, ""))] = o;
    }), i.mapping && oi(e[i.group], i.mapping);
  });
}, rl = (e, t = {}) => {
  const n = [];
  V(e.attributes, (r) => {
    n.push(e.attributes[r]);
  });
  const i = n.filter((r) => r.name).reduce((r, o) => {
    const s = Y(e, o.name);
    return r[il(o.name)] = s === o.name ? !0 : s, r;
  }, {});
  return oi(i, t), i;
}, sl = (e, t = {}) => {
  const n = {
    // translate to other name
    "^class$": "className",
    "^multiple$": "allowMultiple",
    "^capture$": "captureMethod",
    "^webkitdirectory$": "allowDirectoriesOnly",
    // group under single property
    "^server": {
      group: "server",
      mapping: {
        "^process": {
          group: "process"
        },
        "^revert": {
          group: "revert"
        },
        "^fetch": {
          group: "fetch"
        },
        "^restore": {
          group: "restore"
        },
        "^load": {
          group: "load"
        }
      }
    },
    // don't include in object
    "^type$": !1,
    "^files$": !1
  };
  ge("SET_ATTRIBUTE_TO_OPTION_MAP", n);
  const i = {
    ...t
  }, r = rl(
    e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e,
    n
  );
  Object.keys(r).forEach((s) => {
    $(r[s]) ? ($(i[s]) || (i[s] = {}), Object.assign(i[s], r[s])) : i[s] = r[s];
  }), i.files = (t.files || []).concat(
    Array.from(e.querySelectorAll("input:not([type=file])")).map((s) => ({
      source: s.value,
      options: {
        type: s.dataset.type
      }
    }))
  );
  const o = si(i);
  return e.files && Array.from(e.files).forEach((s) => {
    o.addFile(s);
  }), o.replaceElement(e), o;
}, ol = (...e) => _i(e[0]) ? sl(...e) : si(...e), ll = ["fire", "_read", "_write"], gn = (e) => {
  const t = {};
  return An(e, t, ll), t;
}, al = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (n, i) => t[i]), cl = (e) => {
  const t = new Blob(["(", e.toString(), ")()"], {
    type: "application/javascript"
  }), n = URL.createObjectURL(t), i = new Worker(n);
  return {
    transfer: (r, o) => {
    },
    post: (r, o, s) => {
      const a = St();
      i.onmessage = (l) => {
        l.data.id === a && o(l.data.message);
      }, i.postMessage(
        {
          id: a,
          message: r
        },
        s
      );
    },
    terminate: () => {
      i.terminate(), URL.revokeObjectURL(n);
    }
  };
}, dl = (e) => new Promise((t, n) => {
  const i = new Image();
  i.onload = () => {
    t(i);
  }, i.onerror = (r) => {
    n(r);
  }, i.src = e;
}), li = (e, t) => {
  const n = e.slice(0, e.size, e.type);
  return n.lastModifiedDate = e.lastModifiedDate, n.name = t, n;
}, fl = (e) => li(e, e.name), hn = [], pl = (e) => {
  if (hn.includes(e))
    return;
  hn.push(e);
  const t = e({
    addFilter: dr,
    utils: {
      Type: _,
      forin: V,
      isString: Q,
      isFile: ye,
      toNaturalFileSize: Vn,
      replaceInString: al,
      getExtensionFromFilename: Ze,
      getFilenameWithoutExtension: Bn,
      guesstimateMimeType: Zn,
      getFileFromBlob: be,
      getFilenameFromURL: Ce,
      createRoute: Z,
      createWorker: cl,
      createView: H,
      createItemAPI: J,
      loadImage: dl,
      copyFile: fl,
      renameFile: li,
      createBlob: vn,
      applyFilterChain: re,
      text: k,
      getNumericAspectRatioFromString: wn
    },
    views: {
      fileActionButton: xn
    }
  });
  fr(t.options);
}, ul = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]", El = () => "Promise" in window, ml = () => "slice" in Blob.prototype, _l = () => "URL" in window && "createObjectURL" in window.URL, Il = () => "visibilityState" in document, Tl = () => "performance" in window, gl = () => "supports" in (window.CSS || {}), hl = () => /MSIE|Trident/.test(window.navigator.userAgent), mt = (() => {
  const e = (
    // Has to be a browser
    Rn() && // Can't run on Opera Mini due to lack of everything
    !ul() && // Require these APIs to feature detect a modern browser
    Il() && El() && ml() && _l() && Tl() && // doesn't need CSSSupports but is a good way to detect Safari 9+ (we do want to support IE11 though)
    (gl() || hl())
  );
  return () => e;
})(), fe = {
  // active app instances, used to redraw the apps and to find the later
  apps: []
}, Rl = "filepond", he = () => {
};
let ai = {}, ci = {}, di = {}, _t = {}, ze = he, ke = he, It = he, Tt = he, gt = he, ht = he, Rt = he;
if (mt()) {
  ki(
    () => {
      fe.apps.forEach((n) => n._read());
    },
    (n) => {
      fe.apps.forEach((i) => i._write(n));
    }
  );
  const e = () => {
    document.dispatchEvent(
      new CustomEvent("FilePond:loaded", {
        detail: {
          supported: mt,
          create: ze,
          destroy: ke,
          parse: It,
          find: Tt,
          registerPlugin: gt,
          setOptions: Rt
        }
      })
    ), document.removeEventListener("DOMContentLoaded", e);
  };
  document.readyState !== "loading" ? setTimeout(() => e(), 0) : document.addEventListener("DOMContentLoaded", e);
  const t = () => V(He(), (n, i) => {
    _t[n] = i[1];
  });
  ai = { ...Mn }, di = { ...q }, ci = { ...C }, _t = {}, t(), ze = (...n) => {
    const i = ol(...n);
    return i.on("destroy", ke), fe.apps.push(i), gn(i);
  }, ke = (n) => {
    const i = fe.apps.findIndex((r) => r.isAttachedTo(n));
    return i >= 0 ? (fe.apps.splice(i, 1)[0].restoreElement(), !0) : !1;
  }, It = (n) => Array.from(n.querySelectorAll(`.${Rl}`)).filter(
    (o) => !fe.apps.find((s) => s.isAttachedTo(o))
  ).map((o) => ze(o)), Tt = (n) => {
    const i = fe.apps.find((r) => r.isAttachedTo(n));
    return i ? gn(i) : null;
  }, gt = (...n) => {
    n.forEach(pl), t();
  }, ht = () => {
    const n = {};
    return V(He(), (i, r) => {
      n[i] = r[0];
    }), n;
  }, Rt = (n) => ($(n) && (fe.apps.forEach((i) => {
    i.setOptions(n);
  }), pr(n)), ht());
}
const yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FileOrigin() {
    return di;
  },
  get FileStatus() {
    return ci;
  },
  get OptionTypes() {
    return _t;
  },
  get Status() {
    return ai;
  },
  get create() {
    return ze;
  },
  get destroy() {
    return ke;
  },
  get find() {
    return Tt;
  },
  get getOptions() {
    return ht;
  },
  get parse() {
    return It;
  },
  get registerPlugin() {
    return gt;
  },
  get setOptions() {
    return Rt;
  },
  supported: mt
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * FilePondPluginFileValidateSize 2.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const fi = ({ addFilter: e, utils: t }) => {
  const { Type: n, replaceInString: i, toNaturalFileSize: r } = t;
  return e("ALLOW_HOPPER_ITEM", (o, { query: s }) => {
    if (!s("GET_ALLOW_FILE_SIZE_VALIDATION"))
      return !0;
    const a = s("GET_MAX_FILE_SIZE");
    if (a !== null && o.size > a)
      return !1;
    const l = s("GET_MIN_FILE_SIZE");
    return !(l !== null && o.size < l);
  }), e(
    "LOAD_FILE",
    (o, { query: s }) => new Promise((a, l) => {
      if (!s("GET_ALLOW_FILE_SIZE_VALIDATION"))
        return a(o);
      const d = s("GET_FILE_VALIDATE_SIZE_FILTER");
      if (d && !d(o))
        return a(o);
      const c = s("GET_MAX_FILE_SIZE");
      if (c !== null && o.size > c) {
        l({
          status: {
            main: s("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
            sub: i(s("GET_LABEL_MAX_FILE_SIZE"), {
              filesize: r(
                c,
                ".",
                s("GET_FILE_SIZE_BASE"),
                s("GET_FILE_SIZE_LABELS", s)
              )
            })
          }
        });
        return;
      }
      const p = s("GET_MIN_FILE_SIZE");
      if (p !== null && o.size < p) {
        l({
          status: {
            main: s("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
            sub: i(s("GET_LABEL_MIN_FILE_SIZE"), {
              filesize: r(
                p,
                ".",
                s("GET_FILE_SIZE_BASE"),
                s("GET_FILE_SIZE_LABELS", s)
              )
            })
          }
        });
        return;
      }
      const m = s("GET_MAX_TOTAL_FILE_SIZE");
      if (m !== null && s("GET_ACTIVE_ITEMS").reduce((f, E) => f + E.fileSize, 0) > m) {
        l({
          status: {
            main: s("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
            sub: i(s("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
              filesize: r(
                m,
                ".",
                s("GET_FILE_SIZE_BASE"),
                s("GET_FILE_SIZE_LABELS", s)
              )
            })
          }
        });
        return;
      }
      a(o);
    })
  ), {
    options: {
      // Enable or disable file type validation
      allowFileSizeValidation: [!0, n.BOOLEAN],
      // Max individual file size in bytes
      maxFileSize: [null, n.INT],
      // Min individual file size in bytes
      minFileSize: [null, n.INT],
      // Max total file size in bytes
      maxTotalFileSize: [null, n.INT],
      // Filter the files that need to be validated for size
      fileValidateSizeFilter: [null, n.FUNCTION],
      // error labels
      labelMinFileSizeExceeded: ["File is too small", n.STRING],
      labelMinFileSize: ["Minimum file size is {filesize}", n.STRING],
      labelMaxFileSizeExceeded: ["File is too large", n.STRING],
      labelMaxFileSize: ["Maximum file size is {filesize}", n.STRING],
      labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", n.STRING],
      labelMaxTotalFileSize: ["Maximum total file size is {filesize}", n.STRING]
    }
  };
}, Ol = typeof window < "u" && typeof window.document < "u";
Ol && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: fi }));
const Al = fi;
/*!
 * FilePondPluginFileValidateType 1.2.9
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const pi = ({ addFilter: e, utils: t }) => {
  const {
    Type: n,
    isString: i,
    replaceInString: r,
    guesstimateMimeType: o,
    getExtensionFromFilename: s,
    getFilenameFromURL: a
  } = t, l = (u, f) => {
    const E = (/^[^/]+/.exec(u) || []).pop(), R = f.slice(0, -2);
    return E === R;
  }, d = (u, f) => u.some((E) => /\*$/.test(E) ? l(f, E) : E === f), c = (u) => {
    let f = "";
    if (i(u)) {
      const E = a(u), R = s(E);
      R && (f = o(R));
    } else
      f = u.type;
    return f;
  }, p = (u, f, E) => {
    if (f.length === 0)
      return !0;
    const R = c(u);
    return E ? new Promise((g, S) => {
      E(u, R).then((D) => {
        d(f, D) ? g() : S();
      }).catch(S);
    }) : d(f, R);
  }, m = (u) => (f) => u[f] === null ? !1 : u[f] || f;
  return e(
    "SET_ATTRIBUTE_TO_OPTION_MAP",
    (u) => Object.assign(u, {
      accept: "acceptedFileTypes"
    })
  ), e("ALLOW_HOPPER_ITEM", (u, { query: f }) => f("GET_ALLOW_FILE_TYPE_VALIDATION") ? p(u, f("GET_ACCEPTED_FILE_TYPES")) : !0), e(
    "LOAD_FILE",
    (u, { query: f }) => new Promise((E, R) => {
      if (!f("GET_ALLOW_FILE_TYPE_VALIDATION")) {
        E(u);
        return;
      }
      const g = f("GET_ACCEPTED_FILE_TYPES"), S = f("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"), D = p(u, g, S), A = () => {
        const b = g.map(
          m(
            f("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP")
          )
        ).filter((B) => B !== !1), w = b.filter(
          (B, O) => b.indexOf(B) === O
        );
        R({
          status: {
            main: f("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
            sub: r(
              f("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),
              {
                allTypes: w.join(", "),
                allButLastType: w.slice(0, -1).join(", "),
                lastType: w[w.length - 1]
              }
            )
          }
        });
      };
      if (typeof D == "boolean")
        return D ? E(u) : A();
      D.then(() => {
        E(u);
      }).catch(A);
    })
  ), {
    // default options
    options: {
      // Enable or disable file type validation
      allowFileTypeValidation: [!0, n.BOOLEAN],
      // What file types to accept
      acceptedFileTypes: [[], n.ARRAY],
      // - must be comma separated
      // - mime types: image/png, image/jpeg, image/gif
      // - extensions: .png, .jpg, .jpeg ( not enabled yet )
      // - wildcards: image/*
      // label to show when a type is not allowed
      labelFileTypeNotAllowed: ["File is of invalid type", n.STRING],
      // nicer label
      fileValidateTypeLabelExpectedTypes: [
        "Expects {allButLastType} or {lastType}",
        n.STRING
      ],
      // map mime types to extensions
      fileValidateTypeLabelExpectedTypesMap: [{}, n.OBJECT],
      // Custom function to detect type of file
      fileValidateTypeDetectType: [null, n.FUNCTION]
    }
  };
}, Sl = typeof window < "u" && typeof window.document < "u";
Sl && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: pi }));
const Ll = pi, Dl = `/*!
 * FilePond 4.30.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */.filepond--assistant{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--browser.filepond--browser{position:absolute;margin:0;padding:0;left:1em;top:1.75em;width:calc(100% - 2em);opacity:0;font-size:0}.filepond--data{position:absolute;width:0;height:0;padding:0;margin:0;border:none;visibility:hidden;pointer-events:none;contain:strict}.filepond--drip{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;opacity:.1;pointer-events:none;border-radius:.5em;background:#00000003}.filepond--drip-blob{position:absolute;-webkit-transform-origin:center center;transform-origin:center center;top:0;left:0;width:8em;height:8em;margin-left:-4em;margin-top:-4em;background:#292625;border-radius:50%;will-change:transform,opacity}.filepond--drop-label{position:absolute;left:0;right:0;top:0;margin:0;color:#4f4f4f;display:flex;justify-content:center;align-items:center;height:0px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform,opacity}.filepond--drop-label.filepond--drop-label label{display:block;margin:0;padding:.5em}.filepond--drop-label label{cursor:default;font-size:.875em;font-weight:400;text-align:center;line-height:1.5}.filepond--label-action{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;cursor:pointer}.filepond--root[data-disabled] .filepond--drop-label label{opacity:.5}.filepond--file-action-button.filepond--file-action-button{font-size:1em;width:1.625em;height:1.625em;font-family:inherit;line-height:inherit;margin:0;padding:0;border:none;outline:none;will-change:transform,opacity}.filepond--file-action-button.filepond--file-action-button span{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file-action-button.filepond--file-action-button svg{width:100%;height:100%}.filepond--file-action-button.filepond--file-action-button:after{position:absolute;left:-.75em;right:-.75em;top:-.75em;bottom:-.75em;content:""}.filepond--file-action-button{cursor:auto;color:#fff;border-radius:50%;background-color:#00000080;background-image:none;box-shadow:0 0 #fff0;transition:box-shadow .25s ease-in}.filepond--file-action-button:hover,.filepond--file-action-button:focus{box-shadow:0 0 0 .125em #ffffffe6}.filepond--file-action-button[disabled]{color:#ffffff80;background-color:#00000040}.filepond--file-action-button[hidden]{display:none}.filepond--action-edit-item.filepond--action-edit-item{width:2em;height:2em;padding:.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=center]{margin-left:-.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=bottom]{margin-bottom:-.1875em}.filepond--action-edit-item-alt{border:none;line-height:inherit;background:transparent;font-family:inherit;color:inherit;outline:none;padding:0;margin:0 0 0 .25em;pointer-events:all;position:absolute}.filepond--action-edit-item-alt svg{width:1.3125em;height:1.3125em}.filepond--action-edit-item-alt span{font-size:0;opacity:0}.filepond--file-info{position:static;display:flex;flex-direction:column;align-items:flex-start;flex:1;margin:0 .5em 0 0;min-width:0;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out;white-space:nowrap}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{position:static;display:flex;flex-direction:column;align-items:flex-end;flex-grow:0;flex-shrink:0;margin:0;min-width:2.25em;text-align:right;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper.filepond--file-wrapper{border:none;margin:0;padding:0;min-width:0;height:100%}.filepond--file-wrapper.filepond--file-wrapper>legend{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file{position:static;display:flex;height:100%;align-items:flex-start;padding:.5625em;color:#fff;border-radius:.5em}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:3}.filepond--file .filepond--processing-complete-indicator,.filepond--file .filepond--progress-indicator,.filepond--file .filepond--file-action-button{position:absolute}.filepond--file [data-align*=left]{left:.5625em}.filepond--file [data-align*=right]{right:.5625em}.filepond--file [data-align*=center]{left:calc(50% - .8125em)}.filepond--file [data-align*=bottom]{bottom:1.125em}.filepond--file [data-align=center]{top:calc(50% - .8125em)}.filepond--file .filepond--progress-indicator{margin-top:.1875em}.filepond--file .filepond--progress-indicator[data-align*=right]{margin-right:.1875em}.filepond--file .filepond--progress-indicator[data-align*=left]{margin-left:.1875em}[data-filepond-item-state=cancelled] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state*=error] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state~=processing] .filepond--file-status-sub{opacity:0}[data-filepond-item-state~=processing] .filepond--action-abort-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-error] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-error] .filepond--action-retry-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s .125s linear both;animation:fall .5s .125s linear both}[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--processing-complete-indicator:not([style*=hidden])~.filepond--file-status .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--file-info-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub{opacity:.5}[data-filepond-item-state*=invalid] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=error] .filepond--file-wrapper{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotateZ(0deg);transform:rotate(0)}to{-webkit-transform:rotateZ(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotateZ(0deg);transform:rotate(0)}to{-webkit-transform:rotateZ(360deg);transform:rotate(360deg)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translate(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translate(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translate(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translate(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translate(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translate(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translate(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translate(.25em)}}@-webkit-keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--hopper[data-hopper-state=drag-over]:after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:100}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{position:absolute;top:0;left:0;right:0;z-index:1;padding:0;margin:.25em;will-change:transform,opacity}.filepond--item>.filepond--panel{z-index:-1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em #00000040}.filepond--item>.filepond--file-wrapper,.filepond--item>.filepond--panel{transition:opacity .15s ease-out}.filepond--item[data-drag-state]{cursor:-webkit-grab;cursor:grab}.filepond--item[data-drag-state]>.filepond--panel{transition:box-shadow .125s ease-in-out;box-shadow:0 0 #0000}.filepond--item[data-drag-state=drag]{cursor:-webkit-grabbing;cursor:grabbing}.filepond--item[data-drag-state=drag]>.filepond--panel{box-shadow:0 .125em .3125em #00000053}.filepond--item[data-drag-state]:not([data-drag-state=idle]){z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=invalid] .filepond--item-panel,[data-filepond-item-state*=error] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{position:absolute;top:0;left:0;right:0;margin:0;will-change:transform}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller[data-state=overflow]{overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;-webkit-mask:linear-gradient(to bottom,#000 calc(100% - .5em),transparent 100%);mask:linear-gradient(to bottom,#000 calc(100% - .5em),transparent 100%)}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-color:#0000004d;border-radius:99999px;border:.3125em solid transparent;background-clip:content-box}.filepond--list.filepond--list{position:absolute;top:0;margin:0;padding:0;list-style-type:none;will-change:transform}.filepond--list{left:.75em;right:.75em}.filepond--root[data-style-panel-layout~=integrated]{width:100%;height:100%;max-width:none;margin:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root{border-radius:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root>*,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{bottom:0;height:auto;display:flex;justify-content:center;align-items:center;z-index:7}.filepond--root[data-style-panel-layout~=circle] .filepond--item-panel,.filepond--root[data-style-panel-layout~=integrated] .filepond--item-panel{display:none}.filepond--root[data-style-panel-layout~=compact] .filepond--list-scroller,.filepond--root[data-style-panel-layout~=integrated] .filepond--list-scroller{overflow:hidden;height:100%;margin-top:0;margin-bottom:0}.filepond--root[data-style-panel-layout~=compact] .filepond--list,.filepond--root[data-style-panel-layout~=integrated] .filepond--list{left:0;right:0;height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--item,.filepond--root[data-style-panel-layout~=integrated] .filepond--item{margin:0}.filepond--root[data-style-panel-layout~=compact] .filepond--file-wrapper,.filepond--root[data-style-panel-layout~=integrated] .filepond--file-wrapper{height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{z-index:7}.filepond--root[data-style-panel-layout~=circle]{border-radius:99999rem;overflow:hidden}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel{border-radius:inherit}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--file-info,.filepond--root[data-style-panel-layout~=circle] .filepond--file-status{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--action-edit-item{opacity:1!important;visibility:visible!important}@media not all and (min-resolution: .001dpcm){@supports (-webkit-appearance: none) and (stroke-color: transparent){.filepond--root[data-style-panel-layout~=circle]{will-change:transform}}}.filepond--panel-root{border-radius:.5em;background-color:#f1f0ef}.filepond--panel{position:absolute;left:0;top:0;right:0;margin:0;height:100%!important;pointer-events:none}.filepond-panel:not([data-scalable=false]){height:auto!important}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel[data-scalable=true]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;background-color:transparent!important;border:none!important}.filepond--panel-top,.filepond--panel-bottom,.filepond--panel-center{position:absolute;left:0;top:0;right:0;margin:0;padding:0}.filepond--panel-top,.filepond--panel-bottom{height:.5em}.filepond--panel-top{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:none!important}.filepond--panel-top:after{content:"";position:absolute;height:2px;left:0;right:0;bottom:-1px;background-color:inherit}.filepond--panel-center,.filepond--panel-bottom{will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0)}.filepond--panel-bottom{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:none!important}.filepond--panel-bottom:before{content:"";position:absolute;height:2px;left:0;right:0;top:-1px;background-color:inherit}.filepond--panel-center{height:100px!important;border-top:none!important;border-bottom:none!important;border-radius:0!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{position:static;width:1.25em;height:1.25em;color:#fff;margin:0;pointer-events:none;will-change:transform,opacity}.filepond--progress-indicator svg{width:100%;height:100%;vertical-align:top;transform-box:fill-box}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;position:relative;margin-bottom:1em;font-size:1rem;line-height:normal;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:450;text-align:left;text-rendering:optimizeLegibility;direction:ltr;contain:layout style size}.filepond--root *{box-sizing:inherit;line-height:inherit}.filepond--root *:not(text){font-size:inherit}.filepond--root[data-disabled]{pointer-events:none}.filepond--root[data-disabled] .filepond--list-scroller{pointer-events:all}.filepond--root[data-disabled] .filepond--list{pointer-events:none}.filepond--root .filepond--drop-label{min-height:4.75em}.filepond--root .filepond--list-scroller{margin-top:1em;margin-bottom:1em}.filepond--root .filepond--credits{position:absolute;right:0;opacity:.175;line-height:.85;font-size:11px;color:inherit;text-decoration:none;z-index:3;bottom:-14px}.filepond--root .filepond--credits[style]{top:0;bottom:auto;margin-top:14px}`;
mi(Dl, { insertAt: "top" });
export {
  yl as FilePond,
  Al as FilePondPluginFileValidateSize,
  Ll as FilePondPluginFileValidateType
};
//# sourceMappingURL=filepond-BVFG_Nec.js.map
