import * as kr from "react";
import Gr, {
  forwardRef as Lt,
  useContext as Ke,
  createContext as Jr,
  createElement as ne,
  Fragment as Kr,
  useMemo as Wt,
  useRef as zt,
  useState as Xr,
  useEffect as Zr,
} from "react";
var Ne = {},
  Yt = {
    get exports() {
      return Ne;
    },
    set exports(e) {
      Ne = e;
    },
  },
  ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Ut() {
  if (Tr) return ue;
  Tr = 1;
  var e = Gr,
    r = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, d, m) {
    var f,
      v = {},
      R = null,
      T = null;
    m !== void 0 && (R = "" + m),
      d.key !== void 0 && (R = "" + d.key),
      d.ref !== void 0 && (T = d.ref);
    for (f in d) a.call(d, f) && !o.hasOwnProperty(f) && (v[f] = d[f]);
    if (l && l.defaultProps)
      for (f in ((d = l.defaultProps), d)) v[f] === void 0 && (v[f] = d[f]);
    return {
      $$typeof: r,
      type: l,
      key: R,
      ref: T,
      props: v,
      _owner: i.current,
    };
  }
  return (ue.Fragment = n), (ue.jsx = u), (ue.jsxs = u), ue;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function qt() {
  return (
    Nr ||
      ((Nr = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var e = Gr,
            r = Symbol.for("react.element"),
            n = Symbol.for("react.portal"),
            a = Symbol.for("react.fragment"),
            i = Symbol.for("react.strict_mode"),
            o = Symbol.for("react.profiler"),
            u = Symbol.for("react.provider"),
            l = Symbol.for("react.context"),
            d = Symbol.for("react.forward_ref"),
            m = Symbol.for("react.suspense"),
            f = Symbol.for("react.suspense_list"),
            v = Symbol.for("react.memo"),
            R = Symbol.for("react.lazy"),
            T = Symbol.for("react.offscreen"),
            S = Symbol.iterator,
            p = "@@iterator";
          function k(t) {
            if (t === null || typeof t != "object") return null;
            var s = (S && t[S]) || t[p];
            return typeof s == "function" ? s : null;
          }
          var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function g(t) {
            {
              for (
                var s = arguments.length,
                  c = new Array(s > 1 ? s - 1 : 0),
                  h = 1;
                h < s;
                h++
              )
                c[h - 1] = arguments[h];
              D("error", t, c);
            }
          }
          function D(t, s, c) {
            {
              var h = _.ReactDebugCurrentFrame,
                E = h.getStackAddendum();
              E !== "" && ((s += "%s"), (c = c.concat([E])));
              var C = c.map(function (b) {
                return String(b);
              });
              C.unshift("Warning: " + s),
                Function.prototype.apply.call(console[t], console, C);
            }
          }
          var Y = !1,
            $ = !1,
            V = !1,
            O = !1,
            je = !1,
            X;
          X = Symbol.for("react.module.reference");
          function Q(t) {
            return !!(
              typeof t == "string" ||
              typeof t == "function" ||
              t === a ||
              t === o ||
              je ||
              t === i ||
              t === m ||
              t === f ||
              O ||
              t === T ||
              Y ||
              $ ||
              V ||
              (typeof t == "object" &&
                t !== null &&
                (t.$$typeof === R ||
                  t.$$typeof === v ||
                  t.$$typeof === u ||
                  t.$$typeof === l ||
                  t.$$typeof === d || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  t.$$typeof === X ||
                  t.getModuleId !== void 0))
            );
          }
          function ht(t, s, c) {
            var h = t.displayName;
            if (h) return h;
            var E = s.displayName || s.name || "";
            return E !== "" ? c + "(" + E + ")" : c;
          }
          function ir(t) {
            return t.displayName || "Context";
          }
          function H(t) {
            if (t == null) return null;
            if (
              (typeof t.tag == "number" &&
                g(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                ),
              typeof t == "function")
            )
              return t.displayName || t.name || null;
            if (typeof t == "string") return t;
            switch (t) {
              case a:
                return "Fragment";
              case n:
                return "Portal";
              case o:
                return "Profiler";
              case i:
                return "StrictMode";
              case m:
                return "Suspense";
              case f:
                return "SuspenseList";
            }
            if (typeof t == "object")
              switch (t.$$typeof) {
                case l:
                  var s = t;
                  return ir(s) + ".Consumer";
                case u:
                  var c = t;
                  return ir(c._context) + ".Provider";
                case d:
                  return ht(t, t.render, "ForwardRef");
                case v:
                  var h = t.displayName || null;
                  return h !== null ? h : H(t.type) || "Memo";
                case R: {
                  var E = t,
                    C = E._payload,
                    b = E._init;
                  try {
                    return H(b(C));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var Z = Object.assign,
            se = 0,
            or,
            sr,
            cr,
            ur,
            lr,
            fr,
            dr;
          function pr() {}
          pr.__reactDisabledLog = !0;
          function mt() {
            {
              if (se === 0) {
                (or = console.log),
                  (sr = console.info),
                  (cr = console.warn),
                  (ur = console.error),
                  (lr = console.group),
                  (fr = console.groupCollapsed),
                  (dr = console.groupEnd);
                var t = {
                  configurable: !0,
                  enumerable: !0,
                  value: pr,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: t,
                  log: t,
                  warn: t,
                  error: t,
                  group: t,
                  groupCollapsed: t,
                  groupEnd: t,
                });
              }
              se++;
            }
          }
          function vt() {
            {
              if ((se--, se === 0)) {
                var t = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: Z({}, t, {
                    value: or,
                  }),
                  info: Z({}, t, {
                    value: sr,
                  }),
                  warn: Z({}, t, {
                    value: cr,
                  }),
                  error: Z({}, t, {
                    value: ur,
                  }),
                  group: Z({}, t, {
                    value: lr,
                  }),
                  groupCollapsed: Z({}, t, {
                    value: fr,
                  }),
                  groupEnd: Z({}, t, {
                    value: dr,
                  }),
                });
              }
              se < 0 &&
                g(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                );
            }
          }
          var Ve = _.ReactCurrentDispatcher,
            Fe;
          function ge(t, s, c) {
            {
              if (Fe === void 0)
                try {
                  throw Error();
                } catch (E) {
                  var h = E.stack.trim().match(/\n( *(at )?)/);
                  Fe = (h && h[1]) || "";
                }
              return (
                `
` +
                Fe +
                t
              );
            }
          }
          var Me = !1,
            ye;
          {
            var gt = typeof WeakMap == "function" ? WeakMap : Map;
            ye = new gt();
          }
          function hr(t, s) {
            if (!t || Me) return "";
            {
              var c = ye.get(t);
              if (c !== void 0) return c;
            }
            var h;
            Me = !0;
            var E = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var C;
            (C = Ve.current), (Ve.current = null), mt();
            try {
              if (s) {
                var b = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(b.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(b, []);
                  } catch (G) {
                    h = G;
                  }
                  Reflect.construct(t, [], b);
                } else {
                  try {
                    b.call();
                  } catch (G) {
                    h = G;
                  }
                  t.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (G) {
                  h = G;
                }
                t();
              }
            } catch (G) {
              if (G && h && typeof G.stack == "string") {
                for (
                  var y = G.stack.split(`
`),
                    F = h.stack.split(`
`),
                    N = y.length - 1,
                    P = F.length - 1;
                  N >= 1 && P >= 0 && y[N] !== F[P];

                )
                  P--;
                for (; N >= 1 && P >= 0; N--, P--)
                  if (y[N] !== F[P]) {
                    if (N !== 1 || P !== 1)
                      do
                        if ((N--, P--, P < 0 || y[N] !== F[P])) {
                          var W =
                            `
` + y[N].replace(" at new ", " at ");
                          return (
                            t.displayName &&
                              W.includes("<anonymous>") &&
                              (W = W.replace("<anonymous>", t.displayName)),
                            typeof t == "function" && ye.set(t, W),
                            W
                          );
                        }
                      while (N >= 1 && P >= 0);
                    break;
                  }
              }
            } finally {
              (Me = !1), (Ve.current = C), vt(), (Error.prepareStackTrace = E);
            }
            var re = t ? t.displayName || t.name : "",
              Rr = re ? ge(re) : "";
            return typeof t == "function" && ye.set(t, Rr), Rr;
          }
          function yt(t, s, c) {
            return hr(t, !1);
          }
          function bt(t) {
            var s = t.prototype;
            return !!(s && s.isReactComponent);
          }
          function be(t, s, c) {
            if (t == null) return "";
            if (typeof t == "function") return hr(t, bt(t));
            if (typeof t == "string") return ge(t);
            switch (t) {
              case m:
                return ge("Suspense");
              case f:
                return ge("SuspenseList");
            }
            if (typeof t == "object")
              switch (t.$$typeof) {
                case d:
                  return yt(t.render);
                case v:
                  return be(t.type, s, c);
                case R: {
                  var h = t,
                    E = h._payload,
                    C = h._init;
                  try {
                    return be(C(E), s, c);
                  } catch {}
                }
              }
            return "";
          }
          var Ee = Object.prototype.hasOwnProperty,
            mr = {},
            vr = _.ReactDebugCurrentFrame;
          function we(t) {
            if (t) {
              var s = t._owner,
                c = be(t.type, t._source, s ? s.type : null);
              vr.setExtraStackFrame(c);
            } else vr.setExtraStackFrame(null);
          }
          function Et(t, s, c, h, E) {
            {
              var C = Function.call.bind(Ee);
              for (var b in t)
                if (C(t, b)) {
                  var y = void 0;
                  try {
                    if (typeof t[b] != "function") {
                      var F = Error(
                        (h || "React class") +
                          ": " +
                          c +
                          " type `" +
                          b +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof t[b] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw ((F.name = "Invariant Violation"), F);
                    }
                    y = t[b](
                      s,
                      b,
                      h,
                      c,
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                    );
                  } catch (N) {
                    y = N;
                  }
                  y &&
                    !(y instanceof Error) &&
                    (we(E),
                    g(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      h || "React class",
                      c,
                      b,
                      typeof y
                    ),
                    we(null)),
                    y instanceof Error &&
                      !(y.message in mr) &&
                      ((mr[y.message] = !0),
                      we(E),
                      g("Failed %s type: %s", c, y.message),
                      we(null));
                }
            }
          }
          var wt = Array.isArray;
          function Le(t) {
            return wt(t);
          }
          function _t(t) {
            {
              var s = typeof Symbol == "function" && Symbol.toStringTag,
                c =
                  (s && t[Symbol.toStringTag]) ||
                  t.constructor.name ||
                  "Object";
              return c;
            }
          }
          function xt(t) {
            try {
              return gr(t), !1;
            } catch {
              return !0;
            }
          }
          function gr(t) {
            return "" + t;
          }
          function yr(t) {
            if (xt(t))
              return (
                g(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  _t(t)
                ),
                gr(t)
              );
          }
          var ce = _.ReactCurrentOwner,
            St = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            br,
            Er,
            We;
          We = {};
          function Ot(t) {
            if (Ee.call(t, "ref")) {
              var s = Object.getOwnPropertyDescriptor(t, "ref").get;
              if (s && s.isReactWarning) return !1;
            }
            return t.ref !== void 0;
          }
          function Ct(t) {
            if (Ee.call(t, "key")) {
              var s = Object.getOwnPropertyDescriptor(t, "key").get;
              if (s && s.isReactWarning) return !1;
            }
            return t.key !== void 0;
          }
          function Rt(t, s) {
            if (
              typeof t.ref == "string" &&
              ce.current &&
              s &&
              ce.current.stateNode !== s
            ) {
              var c = H(ce.current.type);
              We[c] ||
                (g(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  H(ce.current.type),
                  t.ref
                ),
                (We[c] = !0));
            }
          }
          function kt(t, s) {
            {
              var c = function () {
                br ||
                  ((br = !0),
                  g(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    s
                  ));
              };
              (c.isReactWarning = !0),
                Object.defineProperty(t, "key", {
                  get: c,
                  configurable: !0,
                });
            }
          }
          function Tt(t, s) {
            {
              var c = function () {
                Er ||
                  ((Er = !0),
                  g(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    s
                  ));
              };
              (c.isReactWarning = !0),
                Object.defineProperty(t, "ref", {
                  get: c,
                  configurable: !0,
                });
            }
          }
          var Nt = function (t, s, c, h, E, C, b) {
            var y = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: r,
              // Built-in properties that belong on the element
              type: t,
              key: s,
              ref: c,
              props: b,
              // Record the component responsible for creating this element.
              _owner: C,
            };
            return (
              (y._store = {}),
              Object.defineProperty(y._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(y, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: h,
              }),
              Object.defineProperty(y, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: E,
              }),
              Object.freeze && (Object.freeze(y.props), Object.freeze(y)),
              y
            );
          };
          function Pt(t, s, c, h, E) {
            {
              var C,
                b = {},
                y = null,
                F = null;
              c !== void 0 && (yr(c), (y = "" + c)),
                Ct(s) && (yr(s.key), (y = "" + s.key)),
                Ot(s) && ((F = s.ref), Rt(s, E));
              for (C in s)
                Ee.call(s, C) && !St.hasOwnProperty(C) && (b[C] = s[C]);
              if (t && t.defaultProps) {
                var N = t.defaultProps;
                for (C in N) b[C] === void 0 && (b[C] = N[C]);
              }
              if (y || F) {
                var P =
                  typeof t == "function"
                    ? t.displayName || t.name || "Unknown"
                    : t;
                y && kt(b, P), F && Tt(b, P);
              }
              return Nt(t, y, F, E, h, ce.current, b);
            }
          }
          var ze = _.ReactCurrentOwner,
            wr = _.ReactDebugCurrentFrame;
          function ee(t) {
            if (t) {
              var s = t._owner,
                c = be(t.type, t._source, s ? s.type : null);
              wr.setExtraStackFrame(c);
            } else wr.setExtraStackFrame(null);
          }
          var Ye;
          Ye = !1;
          function Ue(t) {
            return typeof t == "object" && t !== null && t.$$typeof === r;
          }
          function _r() {
            {
              if (ze.current) {
                var t = H(ze.current.type);
                if (t)
                  return (
                    `

Check the render method of \`` +
                    t +
                    "`."
                  );
              }
              return "";
            }
          }
          function At(t) {
            {
              if (t !== void 0) {
                var s = t.fileName.replace(/^.*[\\\/]/, ""),
                  c = t.lineNumber;
                return (
                  `

Check your code at ` +
                  s +
                  ":" +
                  c +
                  "."
                );
              }
              return "";
            }
          }
          var xr = {};
          function Dt(t) {
            {
              var s = _r();
              if (!s) {
                var c = typeof t == "string" ? t : t.displayName || t.name;
                c &&
                  (s =
                    `

Check the top-level render call using <` +
                    c +
                    ">.");
              }
              return s;
            }
          }
          function Sr(t, s) {
            {
              if (!t._store || t._store.validated || t.key != null) return;
              t._store.validated = !0;
              var c = Dt(s);
              if (xr[c]) return;
              xr[c] = !0;
              var h = "";
              t &&
                t._owner &&
                t._owner !== ze.current &&
                (h = " It was passed a child from " + H(t._owner.type) + "."),
                ee(t),
                g(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  c,
                  h
                ),
                ee(null);
            }
          }
          function Or(t, s) {
            {
              if (typeof t != "object") return;
              if (Le(t))
                for (var c = 0; c < t.length; c++) {
                  var h = t[c];
                  Ue(h) && Sr(h, s);
                }
              else if (Ue(t)) t._store && (t._store.validated = !0);
              else if (t) {
                var E = k(t);
                if (typeof E == "function" && E !== t.entries)
                  for (var C = E.call(t), b; !(b = C.next()).done; )
                    Ue(b.value) && Sr(b.value, s);
              }
            }
          }
          function It(t) {
            {
              var s = t.type;
              if (s == null || typeof s == "string") return;
              var c;
              if (typeof s == "function") c = s.propTypes;
              else if (
                typeof s == "object" &&
                (s.$$typeof === d || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  s.$$typeof === v)
              )
                c = s.propTypes;
              else return;
              if (c) {
                var h = H(s);
                Et(c, t.props, "prop", h, t);
              } else if (s.PropTypes !== void 0 && !Ye) {
                Ye = !0;
                var E = H(s);
                g(
                  "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                  E || "Unknown"
                );
              }
              typeof s.getDefaultProps == "function" &&
                !s.getDefaultProps.isReactClassApproved &&
                g(
                  "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                );
            }
          }
          function $t(t) {
            {
              for (var s = Object.keys(t.props), c = 0; c < s.length; c++) {
                var h = s[c];
                if (h !== "children" && h !== "key") {
                  ee(t),
                    g(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      h
                    ),
                    ee(null);
                  break;
                }
              }
              t.ref !== null &&
                (ee(t),
                g("Invalid attribute `ref` supplied to `React.Fragment`."),
                ee(null));
            }
          }
          function Cr(t, s, c, h, E, C) {
            {
              var b = Q(t);
              if (!b) {
                var y = "";
                (t === void 0 ||
                  (typeof t == "object" &&
                    t !== null &&
                    Object.keys(t).length === 0)) &&
                  (y +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var F = At(E);
                F ? (y += F) : (y += _r());
                var N;
                t === null
                  ? (N = "null")
                  : Le(t)
                  ? (N = "array")
                  : t !== void 0 && t.$$typeof === r
                  ? ((N = "<" + (H(t.type) || "Unknown") + " />"),
                    (y =
                      " Did you accidentally export a JSX literal instead of a component?"))
                  : (N = typeof t),
                  g(
                    "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    N,
                    y
                  );
              }
              var P = Pt(t, s, c, E, C);
              if (P == null) return P;
              if (b) {
                var W = s.children;
                if (W !== void 0)
                  if (h)
                    if (Le(W)) {
                      for (var re = 0; re < W.length; re++) Or(W[re], t);
                      Object.freeze && Object.freeze(W);
                    } else
                      g(
                        "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                      );
                  else Or(W, t);
              }
              return t === a ? $t(P) : It(P), P;
            }
          }
          function jt(t, s, c) {
            return Cr(t, s, c, !0);
          }
          function Vt(t, s, c) {
            return Cr(t, s, c, !1);
          }
          var Ft = Vt,
            Mt = jt;
          (le.Fragment = a), (le.jsx = Ft), (le.jsxs = Mt);
        })()),
    le
  );
}
(function (e) {
  process.env.NODE_ENV === "production"
    ? (e.exports = Ut())
    : (e.exports = qt());
})(Yt);
const q = Ne.jsx,
  te = Ne.jsxs;
function Be() {
  return (
    (Be = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Be.apply(this, arguments)
  );
}
function Qr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function (n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var Bt =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ht = /* @__PURE__ */ Qr(
    function (e) {
      return (
        Bt.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    }
    /* Z+1 */
  );
function Gt(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function Jt(e) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && r.setAttribute("nonce", e.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var Kt = /* @__PURE__ */ (function () {
    function e(n) {
      var a = this;
      (this._insertTag = function (i) {
        var o;
        a.tags.length === 0
          ? a.insertionPoint
            ? (o = a.insertionPoint.nextSibling)
            : a.prepend
            ? (o = a.container.firstChild)
            : (o = a.before)
          : (o = a.tags[a.tags.length - 1].nextSibling),
          a.container.insertBefore(i, o),
          a.tags.push(i);
      }),
        (this.isSpeedy =
          n.speedy === void 0
            ? process.env.NODE_ENV === "production"
            : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (a) {
        a.forEach(this._insertTag);
      }),
      (r.insert = function (a) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Jt(this));
        var i = this.tags[this.tags.length - 1];
        if (process.env.NODE_ENV !== "production") {
          var o = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
          o &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                a +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
            (this._alreadyInsertedOrderInsensitiveRule =
              this._alreadyInsertedOrderInsensitiveRule || !o);
        }
        if (this.isSpeedy) {
          var u = Gt(i);
          try {
            u.insertRule(a, u.cssRules.length);
          } catch (l) {
            process.env.NODE_ENV !== "production" &&
              !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
                a
              ) &&
              console.error(
                'There was a problem inserting the following rule: "' + a + '"',
                l
              );
          }
        } else i.appendChild(document.createTextNode(a));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (a) {
          return a.parentNode && a.parentNode.removeChild(a);
        }),
          (this.tags = []),
          (this.ctr = 0),
          process.env.NODE_ENV !== "production" &&
            (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  j = "-ms-",
  Pe = "-moz-",
  w = "-webkit-",
  Xe = "comm",
  Ze = "rule",
  Qe = "decl",
  Xt = "@import",
  et = "@keyframes",
  Zt = Math.abs,
  De = String.fromCharCode,
  Qt = Object.assign;
function en(e, r) {
  return I(e, 0) ^ 45
    ? (((((((r << 2) ^ I(e, 0)) << 2) ^ I(e, 1)) << 2) ^ I(e, 2)) << 2) ^
        I(e, 3)
    : 0;
}
function rt(e) {
  return e.trim();
}
function rn(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function x(e, r, n) {
  return e.replace(r, n);
}
function He(e, r) {
  return e.indexOf(r);
}
function I(e, r) {
  return e.charCodeAt(r) | 0;
}
function pe(e, r, n) {
  return e.slice(r, n);
}
function U(e) {
  return e.length;
}
function er(e) {
  return e.length;
}
function _e(e, r) {
  return r.push(e), e;
}
function tn(e, r) {
  return e.map(r).join("");
}
var Ie = 1,
  ie = 1,
  tt = 0,
  M = 0,
  A = 0,
  oe = "";
function $e(e, r, n, a, i, o, u) {
  return {
    value: e,
    root: r,
    parent: n,
    type: a,
    props: i,
    children: o,
    line: Ie,
    column: ie,
    length: u,
    return: "",
  };
}
function fe(e, r) {
  return Qt($e("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function nn() {
  return A;
}
function an() {
  return (A = M > 0 ? I(oe, --M) : 0), ie--, A === 10 && ((ie = 1), Ie--), A;
}
function L() {
  return (A = M < tt ? I(oe, M++) : 0), ie++, A === 10 && ((ie = 1), Ie++), A;
}
function B() {
  return I(oe, M);
}
function Ce() {
  return M;
}
function ve(e, r) {
  return pe(oe, e, r);
}
function he(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nt(e) {
  return (Ie = ie = 1), (tt = U((oe = e))), (M = 0), [];
}
function at(e) {
  return (oe = ""), e;
}
function Re(e) {
  return rt(ve(M - 1, Ge(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function on(e) {
  for (; (A = B()) && A < 33; ) L();
  return he(e) > 2 || he(A) > 3 ? "" : " ";
}
function sn(e, r) {
  for (
    ;
    --r &&
    L() &&
    !(A < 48 || A > 102 || (A > 57 && A < 65) || (A > 70 && A < 97));

  );
  return ve(e, Ce() + (r < 6 && B() == 32 && L() == 32));
}
function Ge(e) {
  for (; L(); )
    switch (A) {
      case e:
        return M;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ge(A);
        break;
      case 40:
        e === 41 && Ge(e);
        break;
      case 92:
        L();
        break;
    }
  return M;
}
function cn(e, r) {
  for (; L() && e + A !== 47 + 10; ) if (e + A === 42 + 42 && B() === 47) break;
  return "/*" + ve(r, M - 1) + "*" + De(e === 47 ? e : L());
}
function un(e) {
  for (; !he(B()); ) L();
  return ve(e, M);
}
function ln(e) {
  return at(ke("", null, null, null, [""], (e = nt(e)), 0, [0], e));
}
function ke(e, r, n, a, i, o, u, l, d) {
  for (
    var m = 0,
      f = 0,
      v = u,
      R = 0,
      T = 0,
      S = 0,
      p = 1,
      k = 1,
      _ = 1,
      g = 0,
      D = "",
      Y = i,
      $ = o,
      V = a,
      O = D;
    k;

  )
    switch (((S = g), (g = L()))) {
      case 40:
        if (S != 108 && I(O, v - 1) == 58) {
          He((O += x(Re(g), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Re(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += on(S);
        break;
      case 92:
        O += sn(Ce() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            _e(fn(cn(L(), Ce()), r, n), d);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        l[m++] = U(O) * _;
      case 125 * p:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            T > 0 &&
              U(O) - v &&
              _e(
                T > 32
                  ? Ar(O + ";", a, n, v - 1)
                  : Ar(x(O, " ", "") + ";", a, n, v - 2),
                d
              );
            break;
          case 59:
            O += ";";
          default:
            if (
              (_e((V = Pr(O, r, n, m, f, i, l, D, (Y = []), ($ = []), v)), o),
              g === 123)
            )
              if (f === 0) ke(O, r, V, V, Y, o, v, l, $);
              else
                switch (R === 99 && I(O, 3) === 110 ? 100 : R) {
                  case 100:
                  case 109:
                  case 115:
                    ke(
                      e,
                      V,
                      V,
                      a && _e(Pr(e, V, V, 0, 0, i, l, D, i, (Y = []), v), $),
                      i,
                      $,
                      v,
                      l,
                      a ? Y : $
                    );
                    break;
                  default:
                    ke(O, V, V, V, [""], $, 0, l, $);
                }
        }
        (m = f = T = 0), (p = _ = 1), (D = O = ""), (v = u);
        break;
      case 58:
        (v = 1 + U(O)), (T = S);
      default:
        if (p < 1) {
          if (g == 123) --p;
          else if (g == 125 && p++ == 0 && an() == 125) continue;
        }
        switch (((O += De(g)), g * p)) {
          case 38:
            _ = f > 0 ? 1 : ((O += "\f"), -1);
            break;
          case 44:
            (l[m++] = (U(O) - 1) * _), (_ = 1);
            break;
          case 64:
            B() === 45 && (O += Re(L())),
              (R = B()),
              (f = v = U((D = O += un(Ce())))),
              g++;
            break;
          case 45:
            S === 45 && U(O) == 2 && (p = 0);
        }
    }
  return o;
}
function Pr(e, r, n, a, i, o, u, l, d, m, f) {
  for (
    var v = i - 1, R = i === 0 ? o : [""], T = er(R), S = 0, p = 0, k = 0;
    S < a;
    ++S
  )
    for (var _ = 0, g = pe(e, v + 1, (v = Zt((p = u[S])))), D = e; _ < T; ++_)
      (D = rt(p > 0 ? R[_] + " " + g : x(g, /&\f/g, R[_]))) && (d[k++] = D);
  return $e(e, r, n, i === 0 ? Ze : l, d, m, f);
}
function fn(e, r, n) {
  return $e(e, r, n, Xe, De(nn()), pe(e, 2, -2), 0);
}
function Ar(e, r, n, a) {
  return $e(e, r, n, Qe, pe(e, 0, a), pe(e, a + 1, -1), a);
}
function ae(e, r) {
  for (var n = "", a = er(e), i = 0; i < a; i++) n += r(e[i], i, e, r) || "";
  return n;
}
function dn(e, r, n, a) {
  switch (e.type) {
    case Xt:
    case Qe:
      return (e.return = e.return || e.value);
    case Xe:
      return "";
    case et:
      return (e.return = e.value + "{" + ae(e.children, a) + "}");
    case Ze:
      e.value = e.props.join(",");
  }
  return U((n = ae(e.children, a))) ? (e.return = e.value + "{" + n + "}") : "";
}
function pn(e) {
  var r = er(e);
  return function (n, a, i, o) {
    for (var u = "", l = 0; l < r; l++) u += e[l](n, a, i, o) || "";
    return u;
  };
}
function hn(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
var mn = function (r, n, a) {
    for (
      var i = 0, o = 0;
      (i = o), (o = B()), i === 38 && o === 12 && (n[a] = 1), !he(o);

    )
      L();
    return ve(r, M);
  },
  vn = function (r, n) {
    var a = -1,
      i = 44;
    do
      switch (he(i)) {
        case 0:
          i === 38 && B() === 12 && (n[a] = 1), (r[a] += mn(M - 1, n, a));
          break;
        case 2:
          r[a] += Re(i);
          break;
        case 4:
          if (i === 44) {
            (r[++a] = B() === 58 ? "&\f" : ""), (n[a] = r[a].length);
            break;
          }
        default:
          r[a] += De(i);
      }
    while ((i = L()));
    return r;
  },
  gn = function (r, n) {
    return at(vn(nt(r), n));
  },
  Dr = /* @__PURE__ */ new WeakMap(),
  yn = function (r) {
    if (
      !(
        r.type !== "rule" ||
        !r.parent || // positive .length indicates that this rule contains pseudo
        // negative .length indicates that this rule has been already prefixed
        r.length < 1
      )
    ) {
      for (
        var n = r.value,
          a = r.parent,
          i = r.column === a.column && r.line === a.line;
        a.type !== "rule";

      )
        if (((a = a.parent), !a)) return;
      if (
        !(r.props.length === 1 && n.charCodeAt(0) !== 58 && !Dr.get(a)) &&
        !i
      ) {
        Dr.set(r, !0);
        for (
          var o = [], u = gn(n, o), l = a.props, d = 0, m = 0;
          d < u.length;
          d++
        )
          for (var f = 0; f < l.length; f++, m++)
            r.props[m] = o[d] ? u[d].replace(/&\f/g, l[f]) : l[f] + " " + u[d];
      }
    }
  },
  bn = function (r) {
    if (r.type === "decl") {
      var n = r.value;
      // charcode for l
      n.charCodeAt(0) === 108 && // charcode for b
        n.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  },
  En =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  wn = function (r) {
    return r.type === "comm" && r.children.indexOf(En) > -1;
  },
  _n = function (r) {
    return function (n, a, i) {
      if (!(n.type !== "rule" || r.compat)) {
        var o = n.value.match(/(:first|:nth|:nth-last)-child/g);
        if (o) {
          for (
            var u = !!n.parent,
              l = u
                ? n.parent.children
                : // global rule at the root level
                  i,
              d = l.length - 1;
            d >= 0;
            d--
          ) {
            var m = l[d];
            if (m.line < n.line) break;
            if (m.column < n.column) {
              if (wn(m)) return;
              break;
            }
          }
          o.forEach(function (f) {
            console.error(
              'The pseudo class "' +
                f +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                f.split("-child")[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  it = function (r) {
    return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
  },
  xn = function (r, n) {
    for (var a = r - 1; a >= 0; a--) if (!it(n[a])) return !0;
    return !1;
  },
  Ir = function (r) {
    (r.type = ""),
      (r.value = ""),
      (r.return = ""),
      (r.children = ""),
      (r.props = "");
  },
  Sn = function (r, n, a) {
    it(r) &&
      (r.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Ir(r))
        : xn(n, a) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Ir(r)));
  };
function ot(e, r) {
  switch (en(e, r)) {
    case 5103:
      return w + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return w + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + Pe + e + j + e + e;
    case 6828:
    case 4268:
      return w + e + j + e + e;
    case 6165:
      return w + e + j + "flex-" + e + e;
    case 5187:
      return (
        w + e + x(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + j + "flex-$1$2") + e
      );
    case 5443:
      return w + e + j + "flex-item-" + x(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        w + e + j + "flex-line-pack" + x(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return w + e + j + x(e, "shrink", "negative") + e;
    case 5292:
      return w + e + j + x(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        w +
        "box-" +
        x(e, "-grow", "") +
        w +
        e +
        j +
        x(e, "grow", "positive") +
        e
      );
    case 4554:
      return w + x(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    case 6187:
      return (
        x(x(x(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return x(e, /(image-set\([^]*)/, w + "$1$`$1");
    case 4968:
      return (
        x(
          x(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + j + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        w +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return x(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (U(e) - 1 - r > 6)
        switch (I(e, r + 1)) {
          case 109:
            if (I(e, r + 4) !== 45) break;
          case 102:
            return (
              x(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  w +
                  "$2-$3$1" +
                  Pe +
                  (I(e, r + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~He(e, "stretch")
              ? ot(x(e, "stretch", "fill-available"), r) + e
              : e;
        }
      break;
    case 4949:
      if (I(e, r + 1) !== 115) break;
    case 6444:
      switch (I(e, U(e) - 3 - (~He(e, "!important") && 10))) {
        case 107:
          return x(e, ":", ":" + w) + e;
        case 101:
          return (
            x(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                w +
                (I(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                w +
                "$2$3$1" +
                j +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (I(e, r + 11)) {
        case 114:
          return w + e + j + x(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return w + e + j + x(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return w + e + j + x(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return w + e + j + e + e;
  }
  return e;
}
var On = function (r, n, a, i) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Qe:
          r.return = ot(r.value, r.length);
          break;
        case et:
          return ae(
            [
              fe(r, {
                value: x(r.value, "@", "@" + w),
              }),
            ],
            i
          );
        case Ze:
          if (r.length)
            return tn(r.props, function (o) {
              switch (rn(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ae(
                    [
                      fe(r, {
                        props: [x(o, /:(read-\w+)/, ":" + Pe + "$1")],
                      }),
                    ],
                    i
                  );
                case "::placeholder":
                  return ae(
                    [
                      fe(r, {
                        props: [x(o, /:(plac\w+)/, ":" + w + "input-$1")],
                      }),
                      fe(r, {
                        props: [x(o, /:(plac\w+)/, ":" + Pe + "$1")],
                      }),
                      fe(r, {
                        props: [x(o, /:(plac\w+)/, j + "input-$1")],
                      }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  Cn = [On],
  Rn = function (r) {
    var n = r.key;
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (n === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (p) {
        var k = p.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var i = r.stylisPlugins || Cn;
    if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          n +
          '" was passed'
      );
    var o = {},
      u,
      l = [];
    (u = r.container || document.head),
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (p) {
          for (
            var k = p.getAttribute("data-emotion").split(" "), _ = 1;
            _ < k.length;
            _++
          )
            o[k[_]] = !0;
          l.push(p);
        }
      );
    var d,
      m = [yn, bn];
    process.env.NODE_ENV !== "production" &&
      m.push(
        _n({
          get compat() {
            return S.compat;
          },
        }),
        Sn
      );
    {
      var f,
        v = [
          dn,
          process.env.NODE_ENV !== "production"
            ? function (p) {
                p.root ||
                  (p.return
                    ? f.insert(p.return)
                    : p.value && p.type !== Xe && f.insert(p.value + "{}"));
              }
            : hn(function (p) {
                f.insert(p);
              }),
        ],
        R = pn(m.concat(i, v)),
        T = function (k) {
          return ae(ln(k), R);
        };
      d = function (k, _, g, D) {
        (f = g),
          process.env.NODE_ENV !== "production" &&
            _.map !== void 0 &&
            (f = {
              insert: function ($) {
                g.insert($ + _.map);
              },
            }),
          T(k ? k + "{" + _.styles + "}" : _.styles),
          D && (S.inserted[_.name] = !0);
      };
    }
    var S = {
      key: n,
      sheet: new Kt({
        key: n,
        container: u,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: o,
      registered: {},
      insert: d,
    };
    return S.sheet.hydrate(l), S;
  },
  kn = !0;
function st(e, r, n) {
  var a = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? r.push(e[i] + ";") : (a += i + " ");
    }),
    a
  );
}
var rr = function (r, n, a) {
    var i = r.key + "-" + n.name;
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (a === !1 || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      kn === !1) &&
      r.registered[i] === void 0 &&
      (r.registered[i] = n.styles);
  },
  ct = function (r, n, a) {
    rr(r, n, a);
    var i = r.key + "-" + n.name;
    if (r.inserted[n.name] === void 0) {
      var o = n;
      do r.insert(n === o ? "." + i : "", o, r.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function Tn(e) {
  for (var r = 0, n, a = 0, i = e.length; i >= 4; ++a, i -= 4)
    (n =
      (e.charCodeAt(a) & 255) |
      ((e.charCodeAt(++a) & 255) << 8) |
      ((e.charCodeAt(++a) & 255) << 16) |
      ((e.charCodeAt(++a) & 255) << 24)),
      (n =
        /* Math.imul(k, m): */
        (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= /* k >>> r: */ n >>> 24),
      (r =
        /* Math.imul(k, m): */
        ((n & 65535) * 1540483477 +
          (((n >>> 16) * 59797) << 16)) /* Math.imul(h, m): */ ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      r ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(a) & 255),
        (r =
          /* Math.imul(h, m): */
          (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r =
      /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var Nn = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $r = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Pn =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  An = /[A-Z]|^ms/g,
  ut = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  tr = function (r) {
    return r.charCodeAt(1) === 45;
  },
  jr = function (r) {
    return r != null && typeof r != "boolean";
  },
  qe = /* @__PURE__ */ Qr(function (e) {
    return tr(e) ? e : e.replace(An, "-$&").toLowerCase();
  }),
  Ae = function (r, n) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(ut, function (a, i, o) {
            return (
              (z = {
                name: i,
                styles: o,
                next: z,
              }),
              i
            );
          });
    }
    return Nn[r] !== 1 && !tr(r) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
if (process.env.NODE_ENV !== "production") {
  var Dn =
      /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
    In = ["normal", "none", "initial", "inherit", "unset"],
    $n = Ae,
    jn = /^-ms-/,
    Vn = /-(.)/g,
    Vr = {};
  Ae = function (r, n) {
    if (
      r === "content" &&
      (typeof n != "string" ||
        (In.indexOf(n) === -1 &&
          !Dn.test(n) &&
          (n.charAt(0) !== n.charAt(n.length - 1) ||
            (n.charAt(0) !== '"' && n.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          n +
          "\"'`"
      );
    var a = $n(r, n);
    return (
      a !== "" &&
        !tr(r) &&
        r.indexOf("-") !== -1 &&
        Vr[r] === void 0 &&
        ((Vr[r] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            r.replace(jn, "ms-").replace(Vn, function (i, o) {
              return o.toUpperCase();
            }) +
            "?"
        )),
      a
    );
  };
}
var lt =
  "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function me(e, r, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) {
    if (
      process.env.NODE_ENV !== "production" &&
      n.toString() === "NO_COMPONENT_SELECTOR"
    )
      throw new Error(lt);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (
          (z = {
            name: n.name,
            styles: n.styles,
            next: z,
          }),
          n.name
        );
      if (n.styles !== void 0) {
        var a = n.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (z = {
              name: a.name,
              styles: a.styles,
              next: z,
            }),
              (a = a.next);
        var i = n.styles + ";";
        return (
          process.env.NODE_ENV !== "production" &&
            n.map !== void 0 &&
            (i += n.map),
          i
        );
      }
      return Fn(e, r, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = z,
          u = n(e);
        return (z = o), me(e, r, u);
      } else
        process.env.NODE_ENV !== "production" &&
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
          );
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [],
          d = n.replace(ut, function (f, v, R) {
            var T = "animation" + l.length;
            return (
              l.push(
                "const " +
                  T +
                  " = keyframes`" +
                  R.replace(/^@keyframes animation-\w+/, "") +
                  "`"
              ),
              "${" + T + "}"
            );
          });
        l.length &&
          console.error(
            "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
              [].concat(l, ["`" + d + "`"]).join(`
`) +
              `

You should wrap it with \`css\` like this:

` +
              ("css`" + d + "`")
          );
      }
      break;
  }
  if (r == null) return n;
  var m = r[n];
  return m !== void 0 ? m : n;
}
function Fn(e, r, n) {
  var a = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) a += me(e, r, n[i]) + ";";
  else
    for (var o in n) {
      var u = n[o];
      if (typeof u != "object")
        r != null && r[u] !== void 0
          ? (a += o + "{" + r[u] + "}")
          : jr(u) && (a += qe(o) + ":" + Ae(o, u) + ";");
      else {
        if (
          o === "NO_COMPONENT_SELECTOR" &&
          process.env.NODE_ENV !== "production"
        )
          throw new Error(lt);
        if (
          Array.isArray(u) &&
          typeof u[0] == "string" &&
          (r == null || r[u[0]] === void 0)
        )
          for (var l = 0; l < u.length; l++)
            jr(u[l]) && (a += qe(o) + ":" + Ae(o, u[l]) + ";");
        else {
          var d = me(e, r, u);
          switch (o) {
            case "animation":
            case "animationName": {
              a += qe(o) + ":" + d + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" &&
                o === "undefined" &&
                console.error(Pn),
                (a += o + "{" + d + "}");
          }
        }
      }
    }
  return a;
}
var Fr = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ft;
process.env.NODE_ENV !== "production" &&
  (ft = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var z,
  Je = function (r, n, a) {
    if (
      r.length === 1 &&
      typeof r[0] == "object" &&
      r[0] !== null &&
      r[0].styles !== void 0
    )
      return r[0];
    var i = !0,
      o = "";
    z = void 0;
    var u = r[0];
    u == null || u.raw === void 0
      ? ((i = !1), (o += me(a, n, u)))
      : (process.env.NODE_ENV !== "production" &&
          u[0] === void 0 &&
          console.error($r),
        (o += u[0]));
    for (var l = 1; l < r.length; l++)
      (o += me(a, n, r[l])),
        i &&
          (process.env.NODE_ENV !== "production" &&
            u[l] === void 0 &&
            console.error($r),
          (o += u[l]));
    var d;
    process.env.NODE_ENV !== "production" &&
      (o = o.replace(ft, function (R) {
        return (d = R), "";
      })),
      (Fr.lastIndex = 0);
    for (var m = "", f; (f = Fr.exec(o)) !== null; )
      m +=
        "-" + // $FlowFixMe we know it's not null
        f[1];
    var v = Tn(o) + m;
    return process.env.NODE_ENV !== "production"
      ? {
          name: v,
          styles: o,
          map: d,
          next: z,
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        }
      : {
          name: v,
          styles: o,
          next: z,
        };
  },
  Mn = function (r) {
    return r();
  },
  Ln = kr["useInsertionEffect"] ? kr["useInsertionEffect"] : !1,
  dt = Ln || Mn,
  Wn = {}.hasOwnProperty,
  nr = /* @__PURE__ */ Jr(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement < "u"
      ? /* @__PURE__ */ Rn({
          key: "css",
        })
      : null
  );
process.env.NODE_ENV !== "production" &&
  (nr.displayName = "EmotionCacheContext");
nr.Provider;
var pt = function (r) {
    return /* @__PURE__ */ Lt(function (n, a) {
      var i = Ke(nr);
      return r(n, i, a);
    });
  },
  ar = /* @__PURE__ */ Jr({});
process.env.NODE_ENV !== "production" &&
  (ar.displayName = "EmotionThemeContext");
var Mr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Lr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  zn = function (r) {
    var n = r.cache,
      a = r.serialized,
      i = r.isStringTag;
    return (
      rr(n, a, i),
      dt(function () {
        return ct(n, a, i);
      }),
      null
    );
  },
  Yn = /* @__PURE__ */ pt(function (e, r, n) {
    var a = e.css;
    typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
    var i = e[Mr],
      o = [a],
      u = "";
    typeof e.className == "string"
      ? (u = st(r.registered, o, e.className))
      : e.className != null && (u = e.className + " ");
    var l = Je(o, void 0, Ke(ar));
    if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
      var d = e[Lr];
      d && (l = Je([l, "label:" + d + ";"]));
    }
    u += r.key + "-" + l.name;
    var m = {};
    for (var f in e)
      Wn.call(e, f) &&
        f !== "css" &&
        f !== Mr &&
        (process.env.NODE_ENV === "production" || f !== Lr) &&
        (m[f] = e[f]);
    return (
      (m.ref = n),
      (m.className = u),
      /* @__PURE__ */ ne(
        Kr,
        null,
        /* @__PURE__ */ ne(zn, {
          cache: r,
          serialized: l,
          isStringTag: typeof i == "string",
        }),
        /* @__PURE__ */ ne(i, m)
      )
    );
  });
process.env.NODE_ENV !== "production" &&
  (Yn.displayName = "EmotionCssPropInternal");
var Un = Ht,
  qn = function (r) {
    return r !== "theme";
  },
  Wr = function (r) {
    return typeof r == "string" && // 96 is one less than the char code
      // for "a" so this is checking that
      // it's a lowercase character
      r.charCodeAt(0) > 96
      ? Un
      : qn;
  },
  zr = function (r, n, a) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        r.__emotion_forwardProp && o
          ? function (u) {
              return r.__emotion_forwardProp(u) && o(u);
            }
          : o;
    }
    return typeof i != "function" && a && (i = r.__emotion_forwardProp), i;
  },
  Yr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Bn = function (r) {
    var n = r.cache,
      a = r.serialized,
      i = r.isStringTag;
    return (
      rr(n, a, i),
      dt(function () {
        return ct(n, a, i);
      }),
      null
    );
  },
  Hn = function e(r, n) {
    if (process.env.NODE_ENV !== "production" && r === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var a = r.__emotion_real === r,
      i = (a && r.__emotion_base) || r,
      o,
      u;
    n !== void 0 && ((o = n.label), (u = n.target));
    var l = zr(r, n, a),
      d = l || Wr(i),
      m = !d("as");
    return function () {
      var f = arguments,
        v =
          a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && v.push("label:" + o + ";"),
        f[0] == null || f[0].raw === void 0)
      )
        v.push.apply(v, f);
      else {
        process.env.NODE_ENV !== "production" &&
          f[0][0] === void 0 &&
          console.error(Yr),
          v.push(f[0][0]);
        for (var R = f.length, T = 1; T < R; T++)
          process.env.NODE_ENV !== "production" &&
            f[0][T] === void 0 &&
            console.error(Yr),
            v.push(f[T], f[0][T]);
      }
      var S = pt(function (p, k, _) {
        var g = (m && p.as) || i,
          D = "",
          Y = [],
          $ = p;
        if (p.theme == null) {
          $ = {};
          for (var V in p) $[V] = p[V];
          $.theme = Ke(ar);
        }
        typeof p.className == "string"
          ? (D = st(k.registered, Y, p.className))
          : p.className != null && (D = p.className + " ");
        var O = Je(v.concat(Y), k.registered, $);
        (D += k.key + "-" + O.name), u !== void 0 && (D += " " + u);
        var je = m && l === void 0 ? Wr(g) : d,
          X = {};
        for (var Q in p)
          (m && Q === "as") || // $FlowFixMe
            (je(Q) && (X[Q] = p[Q]));
        return (
          (X.className = D),
          (X.ref = _),
          /* @__PURE__ */ ne(
            Kr,
            null,
            /* @__PURE__ */ ne(Bn, {
              cache: k,
              serialized: O,
              isStringTag: typeof g == "string",
            }),
            /* @__PURE__ */ ne(g, X)
          )
        );
      });
      return (
        (S.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (S.defaultProps = r.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = i),
        (S.__emotion_styles = v),
        (S.__emotion_forwardProp = l),
        Object.defineProperty(S, "toString", {
          value: function () {
            return u === void 0 && process.env.NODE_ENV !== "production"
              ? "NO_COMPONENT_SELECTOR"
              : "." + u;
          },
        }),
        (S.withComponent = function (p, k) {
          return e(
            p,
            Be({}, n, k, {
              shouldForwardProp: zr(S, k, !0),
            })
          ).apply(void 0, v);
        }),
        S
      );
    };
  },
  Gn = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    // SVG
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  K = Hn.bind();
Gn.forEach(function (e) {
  K[e] = K(e);
});
const Jn = (e) =>
    te(Kn, {
      children: [
        q(Xn, {
          src: "https://flowbase-figma.pages.dev/images/logo-dark.png",
        }),
        q(Zn, {
          children: e.text,
        }),
      ],
    }),
  Kn = K.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;

  width: 100%;
  height: 100%;

  border-radius: 18px;

  min-width: 600px;
  min-height: 400px;

  background: #f7f8fd;
`,
  Xn = K.img`
  width: 160px;
`,
  Zn = K.span`
  color: #061237;
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 36px;
`;
var de = ((e) => (
    (e[(e.Days = 0)] = "Jours"),
    (e[(e.Hours = 1)] = "Heures"),
    (e[(e.Minutes = 2)] = "Minutes"),
    (e[(e.Seconds = 3)] = "Secondes"),
    e
  ))(de || {}),
  Te = ((e) => ((e.Full = "full"), (e.Short = "short"), e))(Te || {}),
  J = ((e) => (
    (e.Top = "top"),
    (e.Right = "right"),
    (e.Bottom = "bottom"),
    (e.Left = "left"),
    e
  ))(J || {});
const Qn = (e, r) => {
    if (r === "short")
      switch (e) {
        case 0:
          return "D";
        case 1:
          return "H";
        case 2:
          return "M";
        case 3:
          return "S";
      }
    switch (e) {
      case 0:
        return "Jours";
      case 1:
        return "Heures";
      case 2:
        return "Minutes";
      case 3:
        return "Secondes";
    }
  },
  xe = (e) =>
    e.show
      ? q(ea, {
          ...e,
          children: Qn(e.value, e.variant),
        })
      : null,
  ea = K.span`
  color: ${(e) => e.fontColor};
  font-family: ${(e) => e.fontName};
  font-weight: ${(e) => e.fontWeight};
  font-size: ${(e) => e.fontSize}px;
  text-transform: ${(e) => (e.uppercase ? "uppercase" : "auto")};
`,
  Ur = 1e3 * 60 * 60 * 24,
  qr = 1e3 * 60 * 60,
  Br = 1e3 * 60,
  ra = 1e3,
  Hr = {
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  },
  Se = (e) => String(e).padStart(2, "0"),
  ta = (e) => {
    const [r, n] = Wt(() => {
        const d = new Date(e.countdown);
        return [d.getTime(), !d || !isNaN(d.valueOf())];
      }, [e.countdown]),
      a = zt(),
      i = () => {
        clearInterval(a.current), (a.current = void 0);
      },
      [o, u] = Xr(Hr),
      l = () => {
        const d = /* @__PURE__ */ new Date().getTime(),
          m = r - d;
        if (m < 0) return u(e.finishedComponent ? null : Hr), i();
        u({
          days: Se(Math.floor(m / Ur)),
          hours: Se(Math.floor((m % Ur) / qr)),
          minutes: Se(Math.floor((m % qr) / Br)),
          seconds: Se(Math.floor((m % Br) / ra)),
        });
      };
    return (
      Zr(() => {
        if ((a.current && i(), !!n))
          return (a.current = setInterval(l, 1e3)), l(), i;
      }, [r]),
      o === null
        ? e.finishedComponent
        : !r || !n
        ? q(Jn, {
            text: "Please provide correct date",
          })
        : te(na, {
            gap: e.gap,
            fontName: e.fontName,
            fontSize: e.fontSize,
            fontColor: e.fontColor,
            fontWeight: e.fontWeight,
            children: [
              e.days &&
                te(Oe, {
                  position: e.unit.position,
                  gap: e.unit.gap,
                  children: [
                    o.days,
                    q(xe, {
                      ...e.unit,
                      value: de.Days,
                    }),
                  ],
                }),
              e.hours &&
                te(Oe, {
                  position: e.unit.position,
                  gap: e.unit.gap,
                  children: [
                    o.hours,
                    q(xe, {
                      ...e.unit,
                      value: de.Hours,
                    }),
                  ],
                }),
              e.minutes &&
                te(Oe, {
                  position: e.unit.position,
                  gap: e.unit.gap,
                  children: [
                    o.minutes,
                    q(xe, {
                      ...e.unit,
                      value: de.Minutes,
                    }),
                  ],
                }),
              e.seconds &&
                te(Oe, {
                  position: e.unit.position,
                  gap: e.unit.gap,
                  children: [
                    o.seconds,
                    q(xe, {
                      ...e.unit,
                      value: de.Seconds,
                    }),
                  ],
                }),
            ],
          })
    );
  },
  na = K.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(e) => e.gap}px;

  color: ${(e) => e.fontColor};
  font-family: ${(e) => e.fontName};
  font-weight: ${(e) => e.fontWeight};
  font-size: ${(e) => e.fontSize}px;
`,
  Oe = K.div`
  display: flex;
  gap: ${(e) => e.gap}px;
  align-items: center;
  justify-content: center;

  flex-direction: ${(e) => {
    switch (e.position) {
      case J.Right:
        return "row";
      case J.Left:
        return "row-reverse";
      case J.Bottom:
        return "column";
      case J.Top:
        return "column-reverse";
    }
  }};
`,
  aa = ({ loading: e, loaded: r }) => {
    const [n, a] = Xr(!0);
    return Zr(() => a(!1), []), n ? e : r;
  },
  oa = {
    countdown: {
      type: "string",
      title: "Countdown",
      defaultValue: "May 18, 2030 14:42:59",
      description:
        "[Flowbase](https://www.flowbase.co/) is the worlds largest component resource site. Explore endless components and templates to inspire your workflows and help you build better, faster.",
    },
    days: {
      type: "boolean",
      defaultValue: !0,
    },
    hours: {
      type: "boolean",
      defaultValue: !0,
    },
    minutes: {
      type: "boolean",
      defaultValue: !0,
    },
    seconds: {
      type: "boolean",
      defaultValue: !0,
    },
    unit: {
      type: "object",
      title: "Unit",
      controls: {
        show: {
          type: "boolean",
          defaultValue: !0,
        },
        variant: {
          type: "enum",
          defaultValue: Te.Full,
          options: Object.values(Te),
          optionTitles: Object.keys(Te),
        },
        position: {
          type: "enum",
          defaultValue: J.Right,
          options: Object.values(J),
          optionTitles: Object.keys(J),
        },
        gap: {
          type: "number",
          defaultValue: 14,
          min: 0,
          max: 999,
          step: 1,
          displayStepper: !0,
        },
        fontName: {
          type: "string",
          defaultValue: "Inter",
        },
        fontSize: {
          type: "number",
          defaultValue: 20,
          min: 0,
          max: 999,
          step: 1,
          displayStepper: !0,
        },
        fontColor: {
          type: "color",
          defaultValue: "#75788A",
        },
        fontWeight: {
          type: "number",
          defaultValue: 400,
          min: 100,
          max: 1e3,
          step: 100,
          displayStepper: !0,
        },
        uppercase: {
          type: "boolean",
          defaultValue: !1,
        },
      },
    },
    gap: {
      type: "number",
      defaultValue: 14,
      min: 0,
      max: 999,
      step: 1,
      displayStepper: !0,
    },
    fontName: {
      type: "string",
      defaultValue: "Inter",
    },
    fontSize: {
      type: "number",
      defaultValue: 24,
      min: 0,
      max: 999,
      step: 1,
      displayStepper: !0,
    },
    fontColor: {
      type: "color",
      defaultValue: "#282636",
    },
    fontWeight: {
      type: "number",
      defaultValue: 400,
      min: 100,
      max: 1e3,
      step: 100,
      displayStepper: !0,
    },
    finishedComponent: {
      type: "componentinstance",
      title: "Finished",
    },
  },
  sa = (e) =>
    q(aa, {
      loading: null,
      loaded: q(ta, {
        ...e,
      }),
    });
export { sa as Countdown, oa as propertyControls };
