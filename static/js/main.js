"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.6.0",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function j(e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function Me(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function xt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = qt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/dt-1.10.25/r-2.2.9
 *
 * Included libraries:
 *   DataTables 1.10.25, Responsive 2.2.9
 */

/*!
   Copyright 2008-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.25
 ??2008-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (k, y, z) {
  k instanceof String && (k = String(k));

  for (var q = k.length, G = 0; G < q; G++) {
    var O = k[G];
    if (y.call(z, O, G, k)) return {
      i: G,
      v: O
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (k, y, z) {
  if (k == Array.prototype || k == Object.prototype) return k;
  k[y] = z.value;
  return k;
};

$jscomp.getGlobal = function (k) {
  k = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, k, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var y = 0; y < k.length; ++y) {
    var z = k[y];
    if (z && z.Math == Math) return z;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(void 0);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(k, y) {
  var z = $jscomp.propertyToPolyfillSymbol[y];
  if (null == z) return k[y];
  z = k[z];
  return void 0 !== z ? z : k[y];
};

$jscomp.polyfill = function (k, y, z, q) {
  y && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(k, y, z, q) : $jscomp.polyfillUnisolated(k, y, z, q));
};

$jscomp.polyfillUnisolated = function (k, y, z, q) {
  z = $jscomp.global;
  k = k.split(".");

  for (q = 0; q < k.length - 1; q++) {
    var G = k[q];
    if (!(G in z)) return;
    z = z[G];
  }

  k = k[k.length - 1];
  q = z[k];
  y = y(q);
  y != q && null != y && $jscomp.defineProperty(z, k, {
    configurable: !0,
    writable: !0,
    value: y
  });
};

$jscomp.polyfillIsolated = function (k, y, z, q) {
  var G = k.split(".");
  k = 1 === G.length;
  q = G[0];
  q = !k && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var O = 0; O < G.length - 1; O++) {
    var ma = G[O];
    if (!(ma in q)) return;
    q = q[ma];
  }

  G = G[G.length - 1];
  z = $jscomp.IS_SYMBOL_NATIVE && "es6" === z ? q[G] : null;
  y = y(z);
  null != y && (k ? $jscomp.defineProperty($jscomp.polyfills, G, {
    configurable: !0,
    writable: !0,
    value: y
  }) : y !== z && ($jscomp.propertyToPolyfillSymbol[G] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(G) : $jscomp.POLYFILL_PREFIX + G, G = $jscomp.propertyToPolyfillSymbol[G], $jscomp.defineProperty(q, G, {
    configurable: !0,
    writable: !0,
    value: y
  })));
};

$jscomp.polyfill("Array.prototype.find", function (k) {
  return k ? k : function (y, z) {
    return $jscomp.findInternal(this, y, z).v;
  };
}, "es6", "es3");

(function (k) {
  "function" === typeof define && define.amd ? define(["jquery"], function (y) {
    return k(y, window, document);
  }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (y, z) {
    y || (y = window);
    z || (z = "undefined" !== typeof window ? require("jquery") : require("jquery")(y));
    return k(z, y, y.document);
  } : k(jQuery, window, document);
})(function (k, y, z, q) {
  function G(a) {
    var b,
        c,
        d = {};
    k.each(a, function (e, f) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && G(a[e]));
    });
    a._hungarianMap = d;
  }

  function O(a, b, c) {
    a._hungarianMap || G(a);
    var d;
    k.each(b, function (e, f) {
      d = a._hungarianMap[e];
      d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), k.extend(!0, b[d], b[e]), O(a[d], b[d], c)) : b[d] = b[e]);
    });
  }

  function ma(a) {
    var b = u.defaults.oLanguage,
        c = b.sDecimal;
    c && Wa(c);

    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && V(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && V(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Wa(a);
    }
  }

  function zb(a) {
    R(a, "ordering", "bSort");
    R(a, "orderMulti", "bSortMulti");
    R(a, "orderClasses", "bSortClasses");
    R(a, "orderCellsTop", "bSortCellsTop");
    R(a, "order", "aaSorting");
    R(a, "orderFixed", "aaSortingFixed");
    R(a, "paging", "bPaginate");
    R(a, "pagingType", "sPaginationType");
    R(a, "pageLength", "iDisplayLength");
    R(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
      a[b] && O(u.models.oSearch, a[b]);
    }
  }

  function Ab(a) {
    R(a, "orderable", "bSortable");
    R(a, "orderData", "aDataSort");
    R(a, "orderSequence", "asSorting");
    R(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
  }

  function Bb(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = k("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * k(y).scrollLeft(),
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(k("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(k("<div/>").css({
        width: "100%",
        height: 10
      }))).appendTo("body"),
          d = c.children(),
          e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }

    k.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth;
  }

  function Cb(a, b, c, d, e, f) {
    var g = !1;

    if (c !== q) {
      var h = c;
      g = !0;
    }

    for (; d !== e;) {
      a.hasOwnProperty(d) && (h = g ? b(h, a[d], d, a) : a[d], g = !0, d += f);
    }

    return h;
  }

  function Xa(a, b) {
    var c = u.defaults.column,
        d = a.aoColumns.length;
    c = k.extend({}, u.models.oColumn, c, {
      nTh: b ? b : z.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = k.extend({}, u.models.oSearch, c[d]);
    Ea(a, d, k(b).data());
  }

  function Ea(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
        e = k(b.nTh);

    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }

    c !== q && null !== c && (Ab(c), O(u.defaults.column, c, !0), c.mDataProp === q || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), k.extend(b, c), V(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== q && (b.aDataSort = [c.iDataSort]), V(b, c, "aDataSort"));
    var g = b.mData,
        h = ia(g),
        l = b.mRender ? ia(b.mRender) : null;

    c = function c(n) {
      return "string" === typeof n && -1 !== n.indexOf("@");
    };

    b._bAttrSrc = k.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;

    b.fnGetData = function (n, m, p) {
      var t = h(n, m, q, p);
      return l && m ? l(t, m, n, p) : t;
    };

    b.fnSetData = function (n, m, p) {
      return da(g)(n, m, p);
    };

    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== k.inArray("asc", b.asSorting);
    c = -1 !== k.inArray("desc", b.asSorting);
    b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "");
  }

  function ra(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ya(a);

      for (var c = 0, d = b.length; c < d; c++) {
        b[c].nTh.style.width = b[c].sWidth;
      }
    }

    b = a.oScroll;
    "" === b.sY && "" === b.sX || Fa(a);
    H(a, null, "column-sizing", [a]);
  }

  function sa(a, b) {
    a = Ga(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null;
  }

  function ta(a, b) {
    a = Ga(a, "bVisible");
    b = k.inArray(b, a);
    return -1 !== b ? b : null;
  }

  function na(a) {
    var b = 0;
    k.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== k(d.nTh).css("display") && b++;
    });
    return b;
  }

  function Ga(a, b) {
    var c = [];
    k.map(a.aoColumns, function (d, e) {
      d[b] && c.push(e);
    });
    return c;
  }

  function Za(a) {
    var b = a.aoColumns,
        c = a.aoData,
        d = u.ext.type.detect,
        e,
        f,
        g;
    var h = 0;

    for (e = b.length; h < e; h++) {
      var l = b[h];
      var n = [];
      if (!l.sType && l._sManualType) l.sType = l._sManualType;else if (!l.sType) {
        var m = 0;

        for (f = d.length; m < f; m++) {
          var p = 0;

          for (g = c.length; p < g; p++) {
            n[p] === q && (n[p] = S(a, p, h, "type"));
            var t = d[m](n[p], a);
            if (!t && m !== d.length - 1) break;
            if ("html" === t && !Z(n[p])) break;
          }

          if (t) {
            l.sType = t;
            break;
          }
        }

        l.sType || (l.sType = "string");
      }
    }
  }

  function Db(a, b, c, d) {
    var e,
        f,
        g,
        h = a.aoColumns;
    if (b) for (e = b.length - 1; 0 <= e; e--) {
      var l = b[e];
      var n = l.targets !== q ? l.targets : l.aTargets;
      Array.isArray(n) || (n = [n]);
      var m = 0;

      for (f = n.length; m < f; m++) {
        if ("number" === typeof n[m] && 0 <= n[m]) {
          for (; h.length <= n[m];) {
            Xa(a);
          }

          d(n[m], l);
        } else if ("number" === typeof n[m] && 0 > n[m]) d(h.length + n[m], l);else if ("string" === typeof n[m]) {
          var p = 0;

          for (g = h.length; p < g; p++) {
            ("_all" == n[m] || k(h[p].nTh).hasClass(n[m])) && d(p, l);
          }
        }
      }
    }
    if (c) for (e = 0, a = c.length; e < a; e++) {
      d(e, c[e]);
    }
  }

  function ea(a, b, c, d) {
    var e = a.aoData.length,
        f = k.extend(!0, {}, u.models.oRow, {
      src: c ? "dom" : "data",
      idx: e
    });
    f._aData = b;
    a.aoData.push(f);

    for (var g = a.aoColumns, h = 0, l = g.length; h < l; h++) {
      g[h].sType = null;
    }

    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== q && (a.aIds[b] = f);
    !c && a.oFeatures.bDeferRender || $a(a, e, c, d);
    return e;
  }

  function Ha(a, b) {
    var c;
    b instanceof k || (b = k(b));
    return b.map(function (d, e) {
      c = ab(a, e);
      return ea(a, c.data, e, c.cells);
    });
  }

  function S(a, b, c, d) {
    var e = a.iDraw,
        f = a.aoColumns[c],
        g = a.aoData[b]._aData,
        h = f.sDefaultContent,
        l = f.fnGetData(g, d, {
      settings: a,
      row: b,
      col: c
    });
    if (l === q) return a.iDrawError != e && null === h && (ca(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), h;
    if ((l === g || null === l) && null !== h && d !== q) l = h;else if ("function" === typeof l) return l.call(g);
    return null === l && "display" == d ? "" : l;
  }

  function Eb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    });
  }

  function bb(a) {
    return k.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".");
    });
  }

  function ia(a) {
    if (k.isPlainObject(a)) {
      var b = {};
      k.each(a, function (d, e) {
        e && (b[d] = ia(e));
      });
      return function (d, e, f, g) {
        var h = b[e] || b._;
        return h !== q ? h(d, e, f, g) : d;
      };
    }

    if (null === a) return function (d) {
      return d;
    };
    if ("function" === typeof a) return function (d, e, f, g) {
      return a(d, e, f, g);
    };
    if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (d, e) {
      return d[a];
    };

    var c = function c(d, e, f) {
      if ("" !== f) {
        var g = bb(f);

        for (var h = 0, l = g.length; h < l; h++) {
          f = g[h].match(ua);
          var n = g[h].match(oa);

          if (f) {
            g[h] = g[h].replace(ua, "");
            "" !== g[h] && (d = d[g[h]]);
            n = [];
            g.splice(0, h + 1);
            g = g.join(".");
            if (Array.isArray(d)) for (h = 0, l = d.length; h < l; h++) {
              n.push(c(d[h], e, g));
            }
            d = f[0].substring(1, f[0].length - 1);
            d = "" === d ? n : n.join(d);
            break;
          } else if (n) {
            g[h] = g[h].replace(oa, "");
            d = d[g[h]]();
            continue;
          }

          if (null === d || d[g[h]] === q) return q;
          d = d[g[h]];
        }
      }

      return d;
    };

    return function (d, e) {
      return c(d, e, a);
    };
  }

  function da(a) {
    if (k.isPlainObject(a)) return da(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (c, d, e) {
      a(c, "set", d, e);
    };
    if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (c, d) {
      c[a] = d;
    };

    var b = function b(c, d, e) {
      e = bb(e);
      var f = e[e.length - 1];

      for (var g, h, l = 0, n = e.length - 1; l < n; l++) {
        if ("__proto__" === e[l] || "constructor" === e[l]) throw Error("Cannot set prototype values");
        g = e[l].match(ua);
        h = e[l].match(oa);

        if (g) {
          e[l] = e[l].replace(ua, "");
          c[e[l]] = [];
          f = e.slice();
          f.splice(0, l + 1);
          g = f.join(".");
          if (Array.isArray(d)) for (h = 0, n = d.length; h < n; h++) {
            f = {}, b(f, d[h], g), c[e[l]].push(f);
          } else c[e[l]] = d;
          return;
        }

        h && (e[l] = e[l].replace(oa, ""), c = c[e[l]](d));
        if (null === c[e[l]] || c[e[l]] === q) c[e[l]] = {};
        c = c[e[l]];
      }

      if (f.match(oa)) c[f.replace(oa, "")](d);else c[f.replace(ua, "")] = d;
    };

    return function (c, d) {
      return b(c, d, a);
    };
  }

  function cb(a) {
    return T(a.aoData, "_aData");
  }

  function Ia(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }

  function Ja(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++) {
      a[e] == b ? d = e : a[e] > b && a[e]--;
    }

    -1 != d && c === q && a.splice(d, 1);
  }

  function va(a, b, c, d) {
    var e = a.aoData[b],
        f,
        g = function g(l, n) {
      for (; l.childNodes.length;) {
        l.removeChild(l.firstChild);
      }

      l.innerHTML = S(a, b, n, "display");
    };

    if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
      var h = e.anCells;
      if (h) if (d !== q) g(h[d], d);else for (c = 0, f = h.length; c < f; c++) {
        g(h[c], c);
      }
    } else e._aData = ab(a, e, d, d === q ? q : e._aData).data;

    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== q) g[d].sType = null;else {
      c = 0;

      for (f = g.length; c < f; c++) {
        g[c].sType = null;
      }

      db(a, e);
    }
  }

  function ab(a, b, c, d) {
    var e = [],
        f = b.firstChild,
        g,
        h = 0,
        l,
        n = a.aoColumns,
        m = a._rowReadObject;
    d = d !== q ? d : m ? {} : [];

    var p = function p(x, r) {
      if ("string" === typeof x) {
        var A = x.indexOf("@");
        -1 !== A && (A = x.substring(A + 1), da(x)(d, r.getAttribute(A)));
      }
    },
        t = function t(x) {
      if (c === q || c === h) g = n[h], l = x.innerHTML.trim(), g && g._bAttrSrc ? (da(g.mData._)(d, l), p(g.mData.sort, x), p(g.mData.type, x), p(g.mData.filter, x)) : m ? (g._setter || (g._setter = da(g.mData)), g._setter(d, l)) : d[h] = l;
      h++;
    };

    if (f) for (; f;) {
      var v = f.nodeName.toUpperCase();
      if ("TD" == v || "TH" == v) t(f), e.push(f);
      f = f.nextSibling;
    } else for (e = b.anCells, f = 0, v = e.length; f < v; f++) {
      t(e[f]);
    }
    (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && da(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    };
  }

  function $a(a, b, c, d) {
    var e = a.aoData[b],
        f = e._aData,
        g = [],
        h,
        l;

    if (null === e.nTr) {
      var n = c || z.createElement("tr");
      e.nTr = n;
      e.anCells = g;
      n._DT_RowIndex = b;
      db(a, e);
      var m = 0;

      for (h = a.aoColumns.length; m < h; m++) {
        var p = a.aoColumns[m];
        e = (l = c ? !1 : !0) ? z.createElement(p.sCellType) : d[m];
        e._DT_CellIndex = {
          row: b,
          column: m
        };
        g.push(e);
        if (l || !(!p.mRender && p.mData === m || k.isPlainObject(p.mData) && p.mData._ === m + ".display")) e.innerHTML = S(a, b, m, "display");
        p.sClass && (e.className += " " + p.sClass);
        p.bVisible && !c ? n.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e);
        p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, S(a, b, m), f, b, m);
      }

      H(a, "aoRowCreatedCallback", null, [n, f, b, g]);
    }
  }

  function db(a, b) {
    var c = b.nTr,
        d = b._aData;

    if (c) {
      if (a = a.rowIdFn(d)) c.id = a;
      d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? Ka(b.__rowc.concat(a)) : a, k(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && k(c).attr(d.DT_RowAttr);
      d.DT_RowData && k(c).data(d.DT_RowData);
    }
  }

  function Fb(a) {
    var b,
        c,
        d = a.nTHead,
        e = a.nTFoot,
        f = 0 === k("th, td", d).length,
        g = a.oClasses,
        h = a.aoColumns;
    f && (c = k("<tr/>").appendTo(d));
    var l = 0;

    for (b = h.length; l < b; l++) {
      var n = h[l];
      var m = k(n.nTh).addClass(n.sClass);
      f && m.appendTo(c);
      a.oFeatures.bSort && (m.addClass(n.sSortingClass), !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), eb(a, n.nTh, l)));
      n.sTitle != m[0].innerHTML && m.html(n.sTitle);
      fb(a, "header")(a, m, n, g);
    }

    f && wa(a.aoHeader, d);
    k(d).children("tr").attr("role", "row");
    k(d).children("tr").children("th, td").addClass(g.sHeaderTH);
    k(e).children("tr").children("th, td").addClass(g.sFooterTH);
    if (null !== e) for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) {
      n = h[l], n.nTf = a[l].cell, n.sClass && k(n.nTf).addClass(n.sClass);
    }
  }

  function xa(a, b, c) {
    var d,
        e,
        f = [],
        g = [],
        h = a.aoColumns.length;

    if (b) {
      c === q && (c = !1);
      var l = 0;

      for (d = b.length; l < d; l++) {
        f[l] = b[l].slice();
        f[l].nTr = b[l].nTr;

        for (e = h - 1; 0 <= e; e--) {
          a.aoColumns[e].bVisible || c || f[l].splice(e, 1);
        }

        g.push([]);
      }

      l = 0;

      for (d = f.length; l < d; l++) {
        if (a = f[l].nTr) for (; e = a.firstChild;) {
          a.removeChild(e);
        }
        e = 0;

        for (b = f[l].length; e < b; e++) {
          var n = h = 1;

          if (g[l][e] === q) {
            a.appendChild(f[l][e].cell);

            for (g[l][e] = 1; f[l + h] !== q && f[l][e].cell == f[l + h][e].cell;) {
              g[l + h][e] = 1, h++;
            }

            for (; f[l][e + n] !== q && f[l][e].cell == f[l][e + n].cell;) {
              for (c = 0; c < h; c++) {
                g[l + c][e + n] = 1;
              }

              n++;
            }

            k(f[l][e].cell).attr("rowspan", h).attr("colspan", n);
          }
        }
      }
    }
  }

  function fa(a, b) {
    var c = H(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== k.inArray(!1, c)) U(a, !1);else {
      c = [];
      var d = 0,
          e = a.asStripeClasses,
          f = e.length,
          g = a.oLanguage,
          h = a.iInitDisplayStart,
          l = "ssp" == P(a),
          n = a.aiDisplay;
      a.bDrawing = !0;
      h !== q && -1 !== h && (a._iDisplayStart = l ? h : h >= a.fnRecordsDisplay() ? 0 : h, a.iInitDisplayStart = -1);
      h = a._iDisplayStart;
      var m = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, U(a, !1);else if (!l) a.iDraw++;else if (!a.bDestroying && !b) {
        Gb(a);
        return;
      }
      if (0 !== n.length) for (b = l ? a.aoData.length : m, g = l ? 0 : h; g < b; g++) {
        l = n[g];
        var p = a.aoData[l];
        null === p.nTr && $a(a, l);
        var t = p.nTr;

        if (0 !== f) {
          var v = e[d % f];
          p._sRowStripe != v && (k(t).removeClass(p._sRowStripe).addClass(v), p._sRowStripe = v);
        }

        H(a, "aoRowCallback", null, [t, p._aData, d, g, l]);
        c.push(t);
        d++;
      } else d = g.sZeroRecords, 1 == a.iDraw && "ajax" == P(a) ? d = g.sLoadingRecords : g.sEmptyTable && 0 === a.fnRecordsTotal() && (d = g.sEmptyTable), c[0] = k("<tr/>", {
        "class": f ? e[0] : ""
      }).append(k("<td />", {
        valign: "top",
        colSpan: na(a),
        "class": a.oClasses.sRowEmpty
      }).html(d))[0];
      H(a, "aoHeaderCallback", "header", [k(a.nTHead).children("tr")[0], cb(a), h, m, n]);
      H(a, "aoFooterCallback", "footer", [k(a.nTFoot).children("tr")[0], cb(a), h, m, n]);
      e = k(a.nTBody);
      e.children().detach();
      e.append(k(c));
      H(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }

  function ja(a, b) {
    var c = a.oFeatures,
        d = c.bFilter;
    c.bSort && Hb(a);
    d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    fa(a);
    a._drawHold = !1;
  }

  function Ib(a) {
    var b = a.oClasses,
        c = k(a.nTable);
    c = k("<div/>").insertBefore(c);
    var d = a.oFeatures,
        e = k("<div/>", {
      id: a.sTableId + "_wrapper",
      "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
    });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;

    for (var f = a.sDom.split(""), g, h, l, n, m, p, t = 0; t < f.length; t++) {
      g = null;
      h = f[t];

      if ("<" == h) {
        l = k("<div/>")[0];
        n = f[t + 1];

        if ("'" == n || '"' == n) {
          m = "";

          for (p = 2; f[t + p] != n;) {
            m += f[t + p], p++;
          }

          "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter);
          -1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1, m.length - 1) : l.className = m;
          t += p;
        }

        e.append(l);
        e = k(l);
      } else if (">" == h) e = e.parent();else if ("l" == h && d.bPaginate && d.bLengthChange) g = Jb(a);else if ("f" == h && d.bFilter) g = Kb(a);else if ("r" == h && d.bProcessing) g = Lb(a);else if ("t" == h) g = Mb(a);else if ("i" == h && d.bInfo) g = Nb(a);else if ("p" == h && d.bPaginate) g = Ob(a);else if (0 !== u.ext.feature.length) for (l = u.ext.feature, p = 0, n = l.length; p < n; p++) {
        if (h == l[p].cFeature) {
          g = l[p].fnInit(a);
          break;
        }
      }

      g && (l = a.aanFeatures, l[h] || (l[h] = []), l[h].push(g), e.append(g));
    }

    c.replaceWith(e);
    a.nHolding = null;
  }

  function wa(a, b) {
    b = k(b).children("tr");
    var c, d, e;
    a.splice(0, a.length);
    var f = 0;

    for (e = b.length; f < e; f++) {
      a.push([]);
    }

    f = 0;

    for (e = b.length; f < e; f++) {
      var g = b[f];

      for (c = g.firstChild; c;) {
        if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
          var h = 1 * c.getAttribute("colspan");
          var l = 1 * c.getAttribute("rowspan");
          h = h && 0 !== h && 1 !== h ? h : 1;
          l = l && 0 !== l && 1 !== l ? l : 1;
          var n = 0;

          for (d = a[f]; d[n];) {
            n++;
          }

          var m = n;
          var p = 1 === h ? !0 : !1;

          for (d = 0; d < h; d++) {
            for (n = 0; n < l; n++) {
              a[f + n][m + d] = {
                cell: c,
                unique: p
              }, a[f + n].nTr = g;
            }
          }
        }

        c = c.nextSibling;
      }
    }
  }

  function La(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], wa(c, b)));
    b = 0;

    for (var e = c.length; b < e; b++) {
      for (var f = 0, g = c[b].length; f < g; f++) {
        !c[b][f].unique || d[f] && a.bSortCellsTop || (d[f] = c[b][f].cell);
      }
    }

    return d;
  }

  function Ma(a, b, c) {
    H(a, "aoServerParams", "serverParams", [b]);

    if (b && Array.isArray(b)) {
      var d = {},
          e = /(.*?)\[\]$/;
      k.each(b, function (m, p) {
        (m = p.name.match(e)) ? (m = m[0], d[m] || (d[m] = []), d[m].push(p.value)) : d[p.name] = p.value;
      });
      b = d;
    }

    var f = a.ajax,
        g = a.oInstance,
        h = function h(m) {
      H(a, null, "xhr", [a, m, a.jqXHR]);
      c(m);
    };

    if (k.isPlainObject(f) && f.data) {
      var l = f.data;
      var n = "function" === typeof l ? l(b, a) : l;
      b = "function" === typeof l && n ? n : k.extend(!0, b, n);
      delete f.data;
    }

    n = {
      data: b,
      success: function success(m) {
        var p = m.error || m.sError;
        p && ca(a, 0, p);
        a.json = m;
        h(m);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function error(m, p, t) {
        t = H(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === k.inArray(!0, t) && ("parsererror" == p ? ca(a, 0, "Invalid JSON response", 1) : 4 === m.readyState && ca(a, 0, "Ajax error", 7));
        U(a, !1);
      }
    };
    a.oAjaxData = b;
    H(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(g, a.sAjaxSource, k.map(b, function (m, p) {
      return {
        name: p,
        value: m
      };
    }), h, a) : a.sAjaxSource || "string" === typeof f ? a.jqXHR = k.ajax(k.extend(n, {
      url: f || a.sAjaxSource
    })) : "function" === typeof f ? a.jqXHR = f.call(g, b, h, a) : (a.jqXHR = k.ajax(k.extend(n, f)), f.data = l);
  }

  function Gb(a) {
    a.iDraw++;
    U(a, !0);
    Ma(a, Pb(a), function (b) {
      Qb(a, b);
    });
  }

  function Pb(a) {
    var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        f = a.aoPreSearchCols,
        g = [],
        h = pa(a);
    var l = a._iDisplayStart;
    var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;

    var m = function m(x, r) {
      g.push({
        name: x,
        value: r
      });
    };

    m("sEcho", a.iDraw);
    m("iColumns", c);
    m("sColumns", T(b, "sName").join(","));
    m("iDisplayStart", l);
    m("iDisplayLength", n);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: l,
      length: n,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };

    for (l = 0; l < c; l++) {
      var t = b[l];
      var v = f[l];
      n = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: n,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: {
          value: v.sSearch,
          regex: v.bRegex
        }
      });
      m("mDataProp_" + l, n);
      d.bFilter && (m("sSearch_" + l, v.sSearch), m("bRegex_" + l, v.bRegex), m("bSearchable_" + l, t.bSearchable));
      d.bSort && m("bSortable_" + l, t.bSortable);
    }

    d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
    d.bSort && (k.each(h, function (x, r) {
      p.order.push({
        column: r.col,
        dir: r.dir
      });
      m("iSortCol_" + x, r.col);
      m("sSortDir_" + x, r.dir);
    }), m("iSortingCols", h.length));
    b = u.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? g : p : b ? g : p;
  }

  function Qb(a, b) {
    var c = function c(g, h) {
      return b[g] !== q ? b[g] : b[h];
    },
        d = Na(a, b),
        e = c("sEcho", "draw"),
        f = c("iTotalRecords", "recordsTotal");

    c = c("iTotalDisplayRecords", "recordsFiltered");

    if (e !== q) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }

    Ia(a);
    a._iRecordsTotal = parseInt(f, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;

    for (f = d.length; e < f; e++) {
      ea(a, d[e]);
    }

    a.aiDisplay = a.aiDisplayMaster.slice();
    fa(a, !0);
    a._bInitComplete || Oa(a, b);
    U(a, !1);
  }

  function Na(a, b) {
    a = k.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" === a ? b.aaData || b[a] : "" !== a ? ia(a)(b) : b;
  }

  function Kb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        f = a.aanFeatures,
        g = '<input type="search" class="' + b.sFilterInput + '"/>',
        h = d.sSearch;
    h = h.match(/_INPUT_/) ? h.replace("_INPUT_", g) : h + g;
    b = k("<div/>", {
      id: f.f ? null : c + "_filter",
      "class": b.sFilter
    }).append(k("<label/>").append(h));

    var l = function l() {
      var m = this.value ? this.value : "";
      m != e.sSearch && (ya(a, {
        sSearch: m,
        bRegex: e.bRegex,
        bSmart: e.bSmart,
        bCaseInsensitive: e.bCaseInsensitive
      }), a._iDisplayStart = 0, fa(a));
    };

    f = null !== a.searchDelay ? a.searchDelay : "ssp" === P(a) ? 400 : 0;
    var n = k("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? gb(l, f) : l).on("mouseup", function (m) {
      setTimeout(function () {
        l.call(n[0]);
      }, 10);
    }).on("keypress.DT", function (m) {
      if (13 == m.keyCode) return !1;
    }).attr("aria-controls", c);
    k(a.nTable).on("search.dt.DT", function (m, p) {
      if (a === p) try {
        n[0] !== z.activeElement && n.val(e.sSearch);
      } catch (t) {}
    });
    return b[0];
  }

  function ya(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        f = function f(h) {
      d.sSearch = h.sSearch;
      d.bRegex = h.bRegex;
      d.bSmart = h.bSmart;
      d.bCaseInsensitive = h.bCaseInsensitive;
    },
        g = function g(h) {
      return h.bEscapeRegex !== q ? !h.bEscapeRegex : h.bRegex;
    };

    Za(a);

    if ("ssp" != P(a)) {
      Rb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      f(b);

      for (b = 0; b < e.length; b++) {
        Sb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      }

      Tb(a);
    } else f(b);

    a.bFiltered = !0;
    H(a, null, "search", [a]);
  }

  function Tb(a) {
    for (var b = u.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
      for (var h = [], l = 0, n = c.length; l < n; l++) {
        e = c[l], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, l) && h.push(e);
      }

      c.length = 0;
      k.merge(c, h);
    }
  }

  function Sb(a, b, c, d, e, f) {
    if ("" !== b) {
      var g = [],
          h = a.aiDisplay;
      d = hb(b, d, e, f);

      for (e = 0; e < h.length; e++) {
        b = a.aoData[h[e]]._aFilterData[c], d.test(b) && g.push(h[e]);
      }

      a.aiDisplay = g;
    }
  }

  function Rb(a, b, c, d, e, f) {
    e = hb(b, d, e, f);
    var g = a.oPreviousSearch.sSearch,
        h = a.aiDisplayMaster;
    f = [];
    0 !== u.ext.search.length && (c = !0);
    var l = Ub(a);
    if (0 >= b.length) a.aiDisplay = h.slice();else {
      if (l || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = h.slice();
      b = a.aiDisplay;

      for (c = 0; c < b.length; c++) {
        e.test(a.aoData[b[c]]._sFilterRow) && f.push(b[c]);
      }

      a.aiDisplay = f;
    }
  }

  function hb(a, b, c, d) {
    a = b ? a : ib(a);
    c && (a = "^(?=.*?" + k.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
      if ('"' === e.charAt(0)) {
        var f = e.match(/^"(.*)"$/);
        e = f ? f[1] : e;
      }

      return e.replace('"', "");
    }).join(")(?=.*?") + ").*$");
    return new RegExp(a, d ? "i" : "");
  }

  function Ub(a) {
    var b = a.aoColumns,
        c,
        d,
        e = u.ext.type.search;
    var f = !1;
    var g = 0;

    for (c = a.aoData.length; g < c; g++) {
      var h = a.aoData[g];

      if (!h._aFilterData) {
        var l = [];
        var n = 0;

        for (d = b.length; n < d; n++) {
          f = b[n];

          if (f.bSearchable) {
            var m = S(a, g, n, "filter");
            e[f.sType] && (m = e[f.sType](m));
            null === m && (m = "");
            "string" !== typeof m && m.toString && (m = m.toString());
          } else m = "";

          m.indexOf && -1 !== m.indexOf("&") && (Pa.innerHTML = m, m = rc ? Pa.textContent : Pa.innerText);
          m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
          l.push(m);
        }

        h._aFilterData = l;
        h._sFilterRow = l.join("  ");
        f = !0;
      }
    }

    return f;
  }

  function Vb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    };
  }

  function Wb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    };
  }

  function Nb(a) {
    var b = a.sTableId,
        c = a.aanFeatures.i,
        d = k("<div/>", {
      "class": a.oClasses.sInfo,
      id: c ? null : b + "_info"
    });
    c || (a.aoDrawCallback.push({
      fn: Xb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), k(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }

  function Xb(a) {
    var b = a.aanFeatures.i;

    if (0 !== b.length) {
      var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          f = a.fnRecordsTotal(),
          g = a.fnRecordsDisplay(),
          h = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (h += " " + c.sInfoFiltered);
      h += c.sInfoPostFix;
      h = Yb(a, h);
      c = c.fnInfoCallback;
      null !== c && (h = c.call(a.oInstance, a, d, e, f, g, h));
      k(b).html(h);
    }
  }

  function Yb(a, b) {
    var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay(),
        g = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }

  function za(a) {
    var b = a.iInitDisplayStart,
        c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;

    if (a.bInitialised) {
      Ib(a);
      Fb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      U(a, !0);
      d.bAutoWidth && Ya(a);
      var f = 0;

      for (d = c.length; f < d; f++) {
        var g = c[f];
        g.sWidth && (g.nTh.style.width = K(g.sWidth));
      }

      H(a, null, "preInit", [a]);
      ja(a);
      c = P(a);
      if ("ssp" != c || e) "ajax" == c ? Ma(a, [], function (h) {
        var l = Na(a, h);

        for (f = 0; f < l.length; f++) {
          ea(a, l[f]);
        }

        a.iInitDisplayStart = b;
        ja(a);
        U(a, !1);
        Oa(a, h);
      }, a) : (U(a, !1), Oa(a));
    } else setTimeout(function () {
      za(a);
    }, 200);
  }

  function Oa(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && ra(a);
    H(a, null, "plugin-init", [a, b]);
    H(a, "aoInitComplete", "init", [a, b]);
  }

  function jb(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    kb(a);
    H(a, null, "length", [a, b]);
  }

  function Jb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.aLengthMenu,
        e = Array.isArray(d[0]),
        f = e ? d[0] : d;
    d = e ? d[1] : d;
    e = k("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    });

    for (var g = 0, h = f.length; g < h; g++) {
      e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
    }

    var l = k("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (l[0].id = c + "_length");
    l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    k("select", l).val(a._iDisplayLength).on("change.DT", function (n) {
      jb(a, k(this).val());
      fa(a);
    });
    k(a.nTable).on("length.dt.DT", function (n, m, p) {
      a === m && k("select", l).val(p);
    });
    return l[0];
  }

  function Ob(a) {
    var b = a.sPaginationType,
        c = u.ext.pager[b],
        d = "function" === typeof c,
        e = function e(g) {
      fa(g);
    };

    b = k("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function fn(g) {
        if (d) {
          var h = g._iDisplayStart,
              l = g._iDisplayLength,
              n = g.fnRecordsDisplay(),
              m = -1 === l;
          h = m ? 0 : Math.ceil(h / l);
          l = m ? 1 : Math.ceil(n / l);
          n = c(h, l);
          var p;
          m = 0;

          for (p = f.p.length; m < p; m++) {
            fb(g, "pageButton")(g, f.p[m], m, n, h, l);
          }
        } else c.fnUpdate(g, e);
      },
      sName: "pagination"
    }));
    return b;
  }

  function lb(a, b, c) {
    var d = a._iDisplayStart,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay();
    0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : ca(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (H(a, null, "page", [a]), c && fa(a));
    return b;
  }

  function Lb(a) {
    return k("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
  }

  function U(a, b) {
    a.oFeatures.bProcessing && k(a.aanFeatures.r).css("display", b ? "block" : "none");
    H(a, null, "processing", [a, b]);
  }

  function Mb(a) {
    var b = k(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
        e = c.sY,
        f = a.oClasses,
        g = b.children("caption"),
        h = g.length ? g[0]._captionSide : null,
        l = k(b[0].cloneNode(!1)),
        n = k(b[0].cloneNode(!1)),
        m = b.children("tfoot");
    m.length || (m = null);
    l = k("<div/>", {
      "class": f.sScrollWrapper
    }).append(k("<div/>", {
      "class": f.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(k("<div/>", {
      "class": f.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(l.removeAttr("id").css("margin-left", 0).append("top" === h ? g : null).append(b.children("thead"))))).append(k("<div/>", {
      "class": f.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: d ? K(d) : null
    }).append(b));
    m && l.append(k("<div/>", {
      "class": f.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(k("<div/>", {
      "class": f.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === h ? g : null).append(b.children("tfoot")))));
    b = l.children();
    var p = b[0];
    f = b[1];
    var t = m ? b[2] : null;
    if (d) k(f).on("scroll.DT", function (v) {
      v = this.scrollLeft;
      p.scrollLeft = v;
      m && (t.scrollLeft = v);
    });
    k(f).css("max-height", e);
    c.bCollapse || k(f).css("height", e);
    a.nScrollHead = p;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({
      fn: Fa,
      sName: "scrolling"
    });
    return l[0];
  }

  function Fa(a) {
    var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY;
    b = b.iBarWidth;
    var f = k(a.nScrollHead),
        g = f[0].style,
        h = f.children("div"),
        l = h[0].style,
        n = h.children("table");
    h = a.nScrollBody;

    var m = k(h),
        p = h.style,
        t = k(a.nScrollFoot).children("div"),
        v = t.children("table"),
        x = k(a.nTHead),
        r = k(a.nTable),
        A = r[0],
        D = A.style,
        I = a.nTFoot ? k(a.nTFoot) : null,
        W = a.oBrowser,
        M = W.bScrollOversize,
        B = T(a.aoColumns, "nTh"),
        E = [],
        aa = [],
        X = [],
        Aa = [],
        mb,
        Ba = function Ba(F) {
      F = F.style;
      F.paddingTop = "0";
      F.paddingBottom = "0";
      F.borderTopWidth = "0";
      F.borderBottomWidth = "0";
      F.height = 0;
    };

    var ha = h.scrollHeight > h.clientHeight;
    if (a.scrollBarVis !== ha && a.scrollBarVis !== q) a.scrollBarVis = ha, ra(a);else {
      a.scrollBarVis = ha;
      r.children("thead, tfoot").remove();

      if (I) {
        var ka = I.clone().prependTo(r);
        var la = I.find("tr");
        ka = ka.find("tr");
      }

      var nb = x.clone().prependTo(r);
      x = x.find("tr");
      ha = nb.find("tr");
      nb.find("th, td").removeAttr("tabindex");
      c || (p.width = "100%", f[0].style.width = "100%");
      k.each(La(a, nb), function (F, Y) {
        mb = sa(a, F);
        Y.style.width = a.aoColumns[mb].sWidth;
      });
      I && ba(function (F) {
        F.style.width = "";
      }, ka);
      f = r.outerWidth();
      "" === c ? (D.width = "100%", M && (r.find("tbody").height() > h.offsetHeight || "scroll" == m.css("overflow-y")) && (D.width = K(r.outerWidth() - b)), f = r.outerWidth()) : "" !== d && (D.width = K(d), f = r.outerWidth());
      ba(Ba, ha);
      ba(function (F) {
        X.push(F.innerHTML);
        E.push(K(k(F).css("width")));
      }, ha);
      ba(function (F, Y) {
        -1 !== k.inArray(F, B) && (F.style.width = E[Y]);
      }, x);
      k(ha).height(0);
      I && (ba(Ba, ka), ba(function (F) {
        Aa.push(F.innerHTML);
        aa.push(K(k(F).css("width")));
      }, ka), ba(function (F, Y) {
        F.style.width = aa[Y];
      }, la), k(ka).height(0));
      ba(function (F, Y) {
        F.innerHTML = '<div class="dataTables_sizing">' + X[Y] + "</div>";
        F.childNodes[0].style.height = "0";
        F.childNodes[0].style.overflow = "hidden";
        F.style.width = E[Y];
      }, ha);
      I && ba(function (F, Y) {
        F.innerHTML = '<div class="dataTables_sizing">' + Aa[Y] + "</div>";
        F.childNodes[0].style.height = "0";
        F.childNodes[0].style.overflow = "hidden";
        F.style.width = aa[Y];
      }, ka);
      r.outerWidth() < f ? (la = h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y") ? f + b : f, M && (h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y")) && (D.width = K(la - b)), "" !== c && "" === d || ca(a, 1, "Possible column misalignment", 6)) : la = "100%";
      p.width = K(la);
      g.width = K(la);
      I && (a.nScrollFoot.style.width = K(la));
      !e && M && (p.height = K(A.offsetHeight + b));
      c = r.outerWidth();
      n[0].style.width = K(c);
      l.width = K(c);
      d = r.height() > h.clientHeight || "scroll" == m.css("overflow-y");
      e = "padding" + (W.bScrollbarLeft ? "Left" : "Right");
      l[e] = d ? b + "px" : "0px";
      I && (v[0].style.width = K(c), t[0].style.width = K(c), t[0].style[e] = d ? b + "px" : "0px");
      r.children("colgroup").insertBefore(r.children("thead"));
      m.trigger("scroll");
      !a.bSorted && !a.bFiltered || a._drawHold || (h.scrollTop = 0);
    }
  }

  function ba(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, h; e < f;) {
      g = b[e].firstChild;

      for (h = c ? c[e].firstChild : null; g;) {
        1 === g.nodeType && (c ? a(g, h, d) : a(g, d), d++), g = g.nextSibling, h = c ? h.nextSibling : null;
      }

      e++;
    }
  }

  function Ya(a) {
    var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        f = d.sX,
        g = d.sXInner,
        h = c.length,
        l = Ga(a, "bVisible"),
        n = k("th", a.nTHead),
        m = b.getAttribute("width"),
        p = b.parentNode,
        t = !1,
        v,
        x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (m = v);

    for (v = 0; v < l.length; v++) {
      var r = c[l[v]];
      null !== r.sWidth && (r.sWidth = Zb(r.sWidthOrig, p), t = !0);
    }

    if (d || !t && !f && !e && h == na(a) && h == n.length) for (v = 0; v < h; v++) {
      l = sa(a, v), null !== l && (c[l].sWidth = K(n.eq(v).width()));
    } else {
      h = k(b).clone().css("visibility", "hidden").removeAttr("id");
      h.find("tbody tr").remove();
      var A = k("<tr/>").appendTo(h.find("tbody"));
      h.find("thead, tfoot").remove();
      h.append(k(a.nTHead).clone()).append(k(a.nTFoot).clone());
      h.find("tfoot th, tfoot td").css("width", "");
      n = La(a, h.find("thead")[0]);

      for (v = 0; v < l.length; v++) {
        r = c[l[v]], n[v].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? K(r.sWidthOrig) : "", r.sWidthOrig && f && k(n[v]).append(k("<div/>").css({
          width: r.sWidthOrig,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }

      if (a.aoData.length) for (v = 0; v < l.length; v++) {
        t = l[v], r = c[t], k($b(a, t)).clone(!1).append(r.sContentPadding).appendTo(A);
      }
      k("[name]", h).removeAttr("name");
      r = k("<div/>").css(f || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(h).appendTo(p);
      f && g ? h.width(g) : f ? (h.css("width", "auto"), h.removeAttr("width"), h.width() < p.clientWidth && m && h.width(p.clientWidth)) : e ? h.width(p.clientWidth) : m && h.width(m);

      for (v = e = 0; v < l.length; v++) {
        p = k(n[v]), g = p.outerWidth() - p.width(), p = x.bBounding ? Math.ceil(n[v].getBoundingClientRect().width) : p.outerWidth(), e += p, c[l[v]].sWidth = K(p - g);
      }

      b.style.width = K(e);
      r.remove();
    }
    m && (b.style.width = K(m));
    !m && !f || a._reszEvt || (b = function b() {
      k(y).on("resize.DT-" + a.sInstance, gb(function () {
        ra(a);
      }));
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0);
  }

  function Zb(a, b) {
    if (!a) return 0;
    a = k("<div/>").css("width", K(a)).appendTo(b || z.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }

  function $b(a, b) {
    var c = ac(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : k("<td/>").html(S(a, c, b, "display"))[0];
  }

  function ac(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) {
      c = S(a, f, b, "display") + "", c = c.replace(sc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
    }

    return e;
  }

  function K(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
  }

  function pa(a) {
    var b = [],
        c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = k.isPlainObject(d);
    var f = [];

    var g = function g(m) {
      m.length && !Array.isArray(m[0]) ? f.push(m) : k.merge(f, m);
    };

    Array.isArray(d) && g(d);
    e && d.pre && g(d.pre);
    g(a.aaSorting);
    e && d.post && g(d.post);

    for (a = 0; a < f.length; a++) {
      var h = f[a][0];
      g = c[h].aDataSort;
      d = 0;

      for (e = g.length; d < e; d++) {
        var l = g[d];
        var n = c[l].sType || "string";
        f[a]._idx === q && (f[a]._idx = k.inArray(f[a][1], c[l].asSorting));
        b.push({
          src: h,
          col: l,
          dir: f[a][1],
          index: f[a]._idx,
          type: n,
          formatter: u.ext.type.order[n + "-pre"]
        });
      }
    }

    return b;
  }

  function Hb(a) {
    var b,
        c = [],
        d = u.ext.type.order,
        e = a.aoData,
        f = 0,
        g = a.aiDisplayMaster;
    Za(a);
    var h = pa(a);
    var l = 0;

    for (b = h.length; l < b; l++) {
      var n = h[l];
      n.formatter && f++;
      bc(a, n.col);
    }

    if ("ssp" != P(a) && 0 !== h.length) {
      l = 0;

      for (b = g.length; l < b; l++) {
        c[g[l]] = l;
      }

      f === h.length ? g.sort(function (m, p) {
        var t,
            v = h.length,
            x = e[m]._aSortData,
            r = e[p]._aSortData;

        for (t = 0; t < v; t++) {
          var A = h[t];
          var D = x[A.col];
          var I = r[A.col];
          D = D < I ? -1 : D > I ? 1 : 0;
          if (0 !== D) return "asc" === A.dir ? D : -D;
        }

        D = c[m];
        I = c[p];
        return D < I ? -1 : D > I ? 1 : 0;
      }) : g.sort(function (m, p) {
        var t,
            v = h.length,
            x = e[m]._aSortData,
            r = e[p]._aSortData;

        for (t = 0; t < v; t++) {
          var A = h[t];
          var D = x[A.col];
          var I = r[A.col];
          A = d[A.type + "-" + A.dir] || d["string-" + A.dir];
          D = A(D, I);
          if (0 !== D) return D;
        }

        D = c[m];
        I = c[p];
        return D < I ? -1 : D > I ? 1 : 0;
      });
    }

    a.bSorted = !0;
  }

  function cc(a) {
    var b = a.aoColumns,
        c = pa(a);
    a = a.oLanguage.oAria;

    for (var d = 0, e = b.length; d < e; d++) {
      var f = b[d];
      var g = f.asSorting;
      var h = f.ariaTitle || f.sTitle.replace(/<.*?>/g, "");
      var l = f.nTh;
      l.removeAttribute("aria-sort");
      f.bSortable && (0 < c.length && c[0].col == d ? (l.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), f = g[c[0].index + 1] || g[0]) : f = g[0], h += "asc" === f ? a.sSortAscending : a.sSortDescending);
      l.setAttribute("aria-label", h);
    }
  }

  function ob(a, b, c, d) {
    var e = a.aaSorting,
        f = a.aoColumns[b].asSorting,
        g = function g(h, l) {
      var n = h._idx;
      n === q && (n = k.inArray(h[1], f));
      return n + 1 < f.length ? n + 1 : l ? null : 0;
    };

    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = k.inArray(b, T(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
    ja(a);
    "function" == typeof d && d(a);
  }

  function eb(a, b, c, d) {
    var e = a.aoColumns[c];
    pb(b, {}, function (f) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (U(a, !0), setTimeout(function () {
        ob(a, c, f.shiftKey, d);
        "ssp" !== P(a) && U(a, !1);
      }, 0)) : ob(a, c, f.shiftKey, d));
    });
  }

  function Qa(a) {
    var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = pa(a),
        e = a.oFeatures,
        f;

    if (e.bSort && e.bSortClasses) {
      e = 0;

      for (f = b.length; e < f; e++) {
        var g = b[e].src;
        k(T(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }

      e = 0;

      for (f = d.length; e < f; e++) {
        g = d[e].src, k(T(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
    }

    a.aLastSort = d;
  }

  function bc(a, b) {
    var c = a.aoColumns[b],
        d = u.ext.order[c.sSortDataType],
        e;
    d && (e = d.call(a.oInstance, a, b, ta(a, b)));

    for (var f, g = u.ext.type.order[c.sType + "-pre"], h = 0, l = a.aoData.length; h < l; h++) {
      if (c = a.aoData[h], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[h] : S(a, h, b, "sort"), c._aSortData[b] = g ? g(f) : f;
    }
  }

  function Ra(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: k.extend(!0, [], a.aaSorting),
        search: Vb(a.oPreviousSearch),
        columns: k.map(a.aoColumns, function (c, d) {
          return {
            visible: c.bVisible,
            search: Vb(a.aoPreSearchCols[d])
          };
        })
      };
      H(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }

  function dc(a, b, c) {
    var d,
        e,
        f = a.aoColumns;

    b = function b(h) {
      if (h && h.time) {
        var l = H(a, "aoStateLoadParams", "stateLoadParams", [a, h]);

        if (-1 === k.inArray(!1, l) && (l = a.iStateDuration, !(0 < l && h.time < +new Date() - 1E3 * l || h.columns && f.length !== h.columns.length))) {
          a.oLoadedState = k.extend(!0, {}, h);
          h.start !== q && (a._iDisplayStart = h.start, a.iInitDisplayStart = h.start);
          h.length !== q && (a._iDisplayLength = h.length);
          h.order !== q && (a.aaSorting = [], k.each(h.order, function (n, m) {
            a.aaSorting.push(m[0] >= f.length ? [0, m[1]] : m);
          }));
          h.search !== q && k.extend(a.oPreviousSearch, Wb(h.search));
          if (h.columns) for (d = 0, e = h.columns.length; d < e; d++) {
            l = h.columns[d], l.visible !== q && (f[d].bVisible = l.visible), l.search !== q && k.extend(a.aoPreSearchCols[d], Wb(l.search));
          }
          H(a, "aoStateLoaded", "stateLoaded", [a, h]);
        }
      }

      c();
    };

    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== q && b(g);
    } else c();
  }

  function Sa(a) {
    var b = u.settings;
    a = k.inArray(a, T(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }

  function ca(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) y.console && console.log && console.log(c);else if (b = u.ext, b = b.sErrMode || b.errMode, a && H(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }

  function V(a, b, c, d) {
    Array.isArray(c) ? k.each(c, function (e, f) {
      Array.isArray(f) ? V(a, b, f[0], f[1]) : V(a, b, f);
    }) : (d === q && (d = c), b[c] !== q && (a[d] = b[c]));
  }

  function qb(a, b, c) {
    var d;

    for (d in b) {
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        k.isPlainObject(e) ? (k.isPlainObject(a[d]) || (a[d] = {}), k.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? a[d] = e.slice() : a[d] = e;
      }
    }

    return a;
  }

  function pb(a, b, c) {
    k(a).on("click.DT", b, function (d) {
      k(a).trigger("blur");
      c(d);
    }).on("keypress.DT", b, function (d) {
      13 === d.which && (d.preventDefault(), c(d));
    }).on("selectstart.DT", function () {
      return !1;
    });
  }

  function Q(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    });
  }

  function H(a, b, c, d) {
    var e = [];
    b && (e = k.map(a[b].slice().reverse(), function (f, g) {
      return f.fn.apply(a.oInstance, d);
    }));
    null !== c && (b = k.Event(c + ".dt"), k(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }

  function kb(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }

  function fb(a, b) {
    a = a.renderer;
    var c = u.ext.renderer[b];
    return k.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._;
  }

  function P(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }

  function Ca(a, b) {
    var c = ec.numbers_length,
        d = Math.floor(c / 2);
    b <= c ? a = qa(0, b) : a <= d ? (a = qa(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = qa(b - (c - 2), b) : (a = qa(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
    a.DT_el = "span";
    return a;
  }

  function Wa(a) {
    k.each({
      num: function num(b) {
        return Ta(b, a);
      },
      "num-fmt": function numFmt(b) {
        return Ta(b, a, rb);
      },
      "html-num": function htmlNum(b) {
        return Ta(b, a, Ua);
      },
      "html-num-fmt": function htmlNumFmt(b) {
        return Ta(b, a, Ua, rb);
      }
    }, function (b, c) {
      L.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (L.type.search[b + a] = L.type.search.html);
    });
  }

  function fc(a) {
    return function () {
      var b = [Sa(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return u.ext.internal[a].apply(this, b);
    };
  }

  var u = function u(a) {
    this.$ = function (f, g) {
      return this.api(!0).$(f, g);
    };

    this._ = function (f, g) {
      return this.api(!0).rows(f, g).data();
    };

    this.api = function (f) {
      return f ? new C(Sa(this[L.iApiIndex])) : new C(this);
    };

    this.fnAddData = function (f, g) {
      var h = this.api(!0);
      f = Array.isArray(f) && (Array.isArray(f[0]) || k.isPlainObject(f[0])) ? h.rows.add(f) : h.row.add(f);
      (g === q || g) && h.draw();
      return f.flatten().toArray();
    };

    this.fnAdjustColumnSizing = function (f) {
      var g = this.api(!0).columns.adjust(),
          h = g.settings()[0],
          l = h.oScroll;
      f === q || f ? g.draw(!1) : ("" !== l.sX || "" !== l.sY) && Fa(h);
    };

    this.fnClearTable = function (f) {
      var g = this.api(!0).clear();
      (f === q || f) && g.draw();
    };

    this.fnClose = function (f) {
      this.api(!0).row(f).child.hide();
    };

    this.fnDeleteRow = function (f, g, h) {
      var l = this.api(!0);
      f = l.rows(f);
      var n = f.settings()[0],
          m = n.aoData[f[0][0]];
      f.remove();
      g && g.call(this, n, m);
      (h === q || h) && l.draw();
      return m;
    };

    this.fnDestroy = function (f) {
      this.api(!0).destroy(f);
    };

    this.fnDraw = function (f) {
      this.api(!0).draw(f);
    };

    this.fnFilter = function (f, g, h, l, n, m) {
      n = this.api(!0);
      null === g || g === q ? n.search(f, h, l, m) : n.column(g).search(f, h, l, m);
      n.draw();
    };

    this.fnGetData = function (f, g) {
      var h = this.api(!0);

      if (f !== q) {
        var l = f.nodeName ? f.nodeName.toLowerCase() : "";
        return g !== q || "td" == l || "th" == l ? h.cell(f, g).data() : h.row(f).data() || null;
      }

      return h.data().toArray();
    };

    this.fnGetNodes = function (f) {
      var g = this.api(!0);
      return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray();
    };

    this.fnGetPosition = function (f) {
      var g = this.api(!0),
          h = f.nodeName.toUpperCase();
      return "TR" == h ? g.row(f).index() : "TD" == h || "TH" == h ? (f = g.cell(f).index(), [f.row, f.columnVisible, f.column]) : null;
    };

    this.fnIsOpen = function (f) {
      return this.api(!0).row(f).child.isShown();
    };

    this.fnOpen = function (f, g, h) {
      return this.api(!0).row(f).child(g, h).show().child()[0];
    };

    this.fnPageChange = function (f, g) {
      f = this.api(!0).page(f);
      (g === q || g) && f.draw(!1);
    };

    this.fnSetColumnVis = function (f, g, h) {
      f = this.api(!0).column(f).visible(g);
      (h === q || h) && f.columns.adjust().draw();
    };

    this.fnSettings = function () {
      return Sa(this[L.iApiIndex]);
    };

    this.fnSort = function (f) {
      this.api(!0).order(f).draw();
    };

    this.fnSortListener = function (f, g, h) {
      this.api(!0).order.listener(f, g, h);
    };

    this.fnUpdate = function (f, g, h, l, n) {
      var m = this.api(!0);
      h === q || null === h ? m.row(g).data(f) : m.cell(g, h).data(f);
      (n === q || n) && m.columns.adjust();
      (l === q || l) && m.draw();
      return 0;
    };

    this.fnVersionCheck = L.fnVersionCheck;
    var b = this,
        c = a === q,
        d = this.length;
    c && (a = {});
    this.oApi = this.internal = L.internal;

    for (var e in u.ext.internal) {
      e && (this[e] = fc(e));
    }

    this.each(function () {
      var f = {},
          g = 1 < d ? qb(f, a, !0) : a,
          h = 0,
          l;
      f = this.getAttribute("id");
      var n = !1,
          m = u.defaults,
          p = k(this);
      if ("table" != this.nodeName.toLowerCase()) ca(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
        zb(m);
        Ab(m.column);
        O(m, m, !0);
        O(m.column, m.column, !0);
        O(m, k.extend(g, p.data()), !0);
        var t = u.settings;
        h = 0;

        for (l = t.length; h < l; h++) {
          var v = t[h];

          if (v.nTable == this || v.nTHead && v.nTHead.parentNode == this || v.nTFoot && v.nTFoot.parentNode == this) {
            var x = g.bRetrieve !== q ? g.bRetrieve : m.bRetrieve;
            if (c || x) return v.oInstance;

            if (g.bDestroy !== q ? g.bDestroy : m.bDestroy) {
              v.oInstance.fnDestroy();
              break;
            } else {
              ca(v, 0, "Cannot reinitialise DataTable", 3);
              return;
            }
          }

          if (v.sTableId == this.id) {
            t.splice(h, 1);
            break;
          }
        }

        if (null === f || "" === f) this.id = f = "DataTables_Table_" + u.ext._unique++;
        var r = k.extend(!0, {}, u.models.oSettings, {
          sDestroyWidth: p[0].style.width,
          sInstance: f,
          sTableId: f
        });
        r.nTable = this;
        r.oApi = b.internal;
        r.oInit = g;
        t.push(r);
        r.oInstance = 1 === b.length ? b : p.dataTable();
        zb(g);
        ma(g.oLanguage);
        g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
        g = qb(k.extend(!0, {}, m), g);
        V(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
        V(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
        V(r.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
        V(r.oLanguage, g, "fnInfoCallback");
        Q(r, "aoDrawCallback", g.fnDrawCallback, "user");
        Q(r, "aoServerParams", g.fnServerParams, "user");
        Q(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
        Q(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
        Q(r, "aoStateLoaded", g.fnStateLoaded, "user");
        Q(r, "aoRowCallback", g.fnRowCallback, "user");
        Q(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
        Q(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
        Q(r, "aoFooterCallback", g.fnFooterCallback, "user");
        Q(r, "aoInitComplete", g.fnInitComplete, "user");
        Q(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
        r.rowIdFn = ia(g.rowId);
        Bb(r);
        var A = r.oClasses;
        k.extend(A, u.ext.classes, g.oClasses);
        p.addClass(A.sTable);
        r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
        null !== g.iDeferLoading && (r.bDeferLoading = !0, f = Array.isArray(g.iDeferLoading), r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading);
        var D = r.oLanguage;
        k.extend(!0, D, g.oLanguage);
        D.sUrl ? (k.ajax({
          dataType: "json",
          url: D.sUrl,
          success: function success(B) {
            ma(B);
            O(m.oLanguage, B);
            k.extend(!0, D, B);
            H(r, null, "i18n", [r]);
            za(r);
          },
          error: function error() {
            za(r);
          }
        }), n = !0) : H(r, null, "i18n", [r]);
        null === g.asStripeClasses && (r.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
        f = r.asStripeClasses;
        var I = p.children("tbody").find("tr").eq(0);
        -1 !== k.inArray(!0, k.map(f, function (B, E) {
          return I.hasClass(B);
        })) && (k("tbody tr", this).removeClass(f.join(" ")), r.asDestroyStripes = f.slice());
        f = [];
        t = this.getElementsByTagName("thead");
        0 !== t.length && (wa(r.aoHeader, t[0]), f = La(r));
        if (null === g.aoColumns) for (t = [], h = 0, l = f.length; h < l; h++) {
          t.push(null);
        } else t = g.aoColumns;
        h = 0;

        for (l = t.length; h < l; h++) {
          Xa(r, f ? f[h] : null);
        }

        Db(r, g.aoColumnDefs, t, function (B, E) {
          Ea(r, B, E);
        });

        if (I.length) {
          var W = function W(B, E) {
            return null !== B.getAttribute("data-" + E) ? E : null;
          };

          k(I[0]).children("th, td").each(function (B, E) {
            var aa = r.aoColumns[B];

            if (aa.mData === B) {
              var X = W(E, "sort") || W(E, "order");
              E = W(E, "filter") || W(E, "search");
              if (null !== X || null !== E) aa.mData = {
                _: B + ".display",
                sort: null !== X ? B + ".@data-" + X : q,
                type: null !== X ? B + ".@data-" + X : q,
                filter: null !== E ? B + ".@data-" + E : q
              }, Ea(r, B);
            }
          });
        }

        var M = r.oFeatures;

        f = function f() {
          if (g.aaSorting === q) {
            var B = r.aaSorting;
            h = 0;

            for (l = B.length; h < l; h++) {
              B[h][1] = r.aoColumns[h].asSorting[0];
            }
          }

          Qa(r);
          M.bSort && Q(r, "aoDrawCallback", function () {
            if (r.bSorted) {
              var X = pa(r),
                  Aa = {};
              k.each(X, function (mb, Ba) {
                Aa[Ba.src] = Ba.dir;
              });
              H(r, null, "order", [r, X, Aa]);
              cc(r);
            }
          });
          Q(r, "aoDrawCallback", function () {
            (r.bSorted || "ssp" === P(r) || M.bDeferRender) && Qa(r);
          }, "sc");
          B = p.children("caption").each(function () {
            this._captionSide = k(this).css("caption-side");
          });
          var E = p.children("thead");
          0 === E.length && (E = k("<thead/>").appendTo(p));
          r.nTHead = E[0];
          var aa = p.children("tbody");
          0 === aa.length && (aa = k("<tbody/>").insertAfter(E));
          r.nTBody = aa[0];
          E = p.children("tfoot");
          0 === E.length && 0 < B.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (E = k("<tfoot/>").appendTo(p));
          0 === E.length || 0 === E.children().length ? p.addClass(A.sNoFooter) : 0 < E.length && (r.nTFoot = E[0], wa(r.aoFooter, r.nTFoot));
          if (g.aaData) for (h = 0; h < g.aaData.length; h++) {
            ea(r, g.aaData[h]);
          } else (r.bDeferLoading || "dom" == P(r)) && Ha(r, k(r.nTBody).children("tr"));
          r.aiDisplay = r.aiDisplayMaster.slice();
          r.bInitialised = !0;
          !1 === n && za(r);
        };

        g.bStateSave ? (M.bStateSave = !0, Q(r, "aoDrawCallback", Ra, "state_save"), dc(r, g, f)) : f();
      }
    });
    b = null;
    return this;
  },
      L,
      w,
      J,
      sb = {},
      gc = /[\r\n\u2028]/g,
      Ua = /<.*?>/g,
      tc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      uc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      rb = /['\u00A0,$???????%\u2009\u202F\u20BD\u20a9\u20BArfk????]/gi,
      Z = function Z(a) {
    return a && !0 !== a && "-" !== a ? !1 : !0;
  },
      hc = function hc(a) {
    var b = parseInt(a, 10);
    return !isNaN(b) && isFinite(a) ? b : null;
  },
      ic = function ic(a, b) {
    sb[b] || (sb[b] = new RegExp(ib(b), "g"));
    return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(sb[b], ".") : a;
  },
      tb = function tb(a, b, c) {
    var d = "string" === typeof a;
    if (Z(a)) return !0;
    b && d && (a = ic(a, b));
    c && d && (a = a.replace(rb, ""));
    return !isNaN(parseFloat(a)) && isFinite(a);
  },
      jc = function jc(a, b, c) {
    return Z(a) ? !0 : Z(a) || "string" === typeof a ? tb(a.replace(Ua, ""), b, c) ? !0 : null : null;
  },
      T = function T(a, b, c) {
    var d = [],
        e = 0,
        f = a.length;
    if (c !== q) for (; e < f; e++) {
      a[e] && a[e][b] && d.push(a[e][b][c]);
    } else for (; e < f; e++) {
      a[e] && d.push(a[e][b]);
    }
    return d;
  },
      Da = function Da(a, b, c, d) {
    var e = [],
        f = 0,
        g = b.length;
    if (d !== q) for (; f < g; f++) {
      a[b[f]][c] && e.push(a[b[f]][c][d]);
    } else for (; f < g; f++) {
      e.push(a[b[f]][c]);
    }
    return e;
  },
      qa = function qa(a, b) {
    var c = [];

    if (b === q) {
      b = 0;
      var d = a;
    } else d = b, b = a;

    for (a = b; a < d; a++) {
      c.push(a);
    }

    return c;
  },
      kc = function kc(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      a[c] && b.push(a[c]);
    }

    return b;
  },
      Ka = function Ka(a) {
    a: {
      if (!(2 > a.length)) {
        var b = a.slice().sort();

        for (var c = b[0], d = 1, e = b.length; d < e; d++) {
          if (b[d] === c) {
            b = !1;
            break a;
          }

          c = b[d];
        }
      }

      b = !0;
    }

    if (b) return a.slice();
    b = [];
    e = a.length;
    var f,
        g = 0;
    d = 0;

    a: for (; d < e; d++) {
      c = a[d];

      for (f = 0; f < g; f++) {
        if (b[f] === c) continue a;
      }

      b.push(c);
      g++;
    }

    return b;
  },
      lc = function lc(a, b) {
    if (Array.isArray(b)) for (var c = 0; c < b.length; c++) {
      lc(a, b[c]);
    } else a.push(b);
    return a;
  };

  Array.isArray || (Array.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  });
  String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  });
  u.util = {
    throttle: function throttle(a, b) {
      var c = b !== q ? b : 200,
          d,
          e;
      return function () {
        var f = this,
            g = +new Date(),
            h = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = q;
          a.apply(f, h);
        }, c)) : (d = g, a.apply(f, h));
      };
    },
    escapeRegex: function escapeRegex(a) {
      return a.replace(uc, "\\$1");
    }
  };

  var R = function R(a, b, c) {
    a[b] !== q && (a[c] = a[b]);
  },
      ua = /\[.*?\]$/,
      oa = /\(\)$/,
      ib = u.util.escapeRegex,
      Pa = k("<div>")[0],
      rc = Pa.textContent !== q,
      sc = /<.*?>/g,
      gb = u.util.throttle,
      mc = [],
      N = Array.prototype,
      vc = function vc(a) {
    var b,
        c = u.settings,
        d = k.map(c, function (f, g) {
      return f.nTable;
    });

    if (a) {
      if (a.nTable && a.oApi) return [a];

      if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
        var e = k.inArray(a, d);
        return -1 !== e ? [c[e]] : null;
      }

      if (a && "function" === typeof a.settings) return a.settings().toArray();
      "string" === typeof a ? b = k(a) : a instanceof k && (b = a);
    } else return [];

    if (b) return b.map(function (f) {
      e = k.inArray(this, d);
      return -1 !== e ? c[e] : null;
    }).toArray();
  };

  var C = function C(a, b) {
    if (!(this instanceof C)) return new C(a, b);

    var c = [],
        d = function d(g) {
      (g = vc(g)) && c.push.apply(c, g);
    };

    if (Array.isArray(a)) for (var e = 0, f = a.length; e < f; e++) {
      d(a[e]);
    } else d(a);
    this.context = Ka(c);
    b && k.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    C.extend(this, this, mc);
  };

  u.Api = C;
  k.extend(C.prototype, {
    any: function any() {
      return 0 !== this.count();
    },
    concat: N.concat,
    context: [],
    count: function count() {
      return this.flatten().length;
    },
    each: function each(a) {
      for (var b = 0, c = this.length; b < c; b++) {
        a.call(this, this[b], b, this);
      }

      return this;
    },
    eq: function eq(a) {
      var b = this.context;
      return b.length > a ? new C(b[a], this[a]) : null;
    },
    filter: function filter(a) {
      var b = [];
      if (N.filter) b = N.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        a.call(this, this[c], c, this) && b.push(this[c]);
      }
      return new C(this.context, b);
    },
    flatten: function flatten() {
      var a = [];
      return new C(this.context, a.concat.apply(a, this.toArray()));
    },
    join: N.join,
    indexOf: N.indexOf || function (a, b) {
      b = b || 0;

      for (var c = this.length; b < c; b++) {
        if (this[b] === a) return b;
      }

      return -1;
    },
    iterator: function iterator(a, b, c, d) {
      var e = [],
          f,
          g,
          h = this.context,
          l,
          n = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      var m = 0;

      for (f = h.length; m < f; m++) {
        var p = new C(h[m]);

        if ("table" === b) {
          var t = c.call(p, h[m], m);
          t !== q && e.push(t);
        } else if ("columns" === b || "rows" === b) t = c.call(p, h[m], this[m], m), t !== q && e.push(t);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          var v = this[m];
          "column-rows" === b && (l = Va(h[m], n.opts));
          var x = 0;

          for (g = v.length; x < g; x++) {
            t = v[x], t = "cell" === b ? c.call(p, h[m], t.row, t.column, m, x) : c.call(p, h[m], t, m, x, l), t !== q && e.push(t);
          }
        }
      }

      return e.length || d ? (a = new C(h, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this;
    },
    lastIndexOf: N.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    },
    length: 0,
    map: function map(a) {
      var b = [];
      if (N.map) b = N.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        b.push(a.call(this, this[c], c));
      }
      return new C(this.context, b);
    },
    pluck: function pluck(a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: N.pop,
    push: N.push,
    reduce: N.reduce || function (a, b) {
      return Cb(this, a, b, 0, this.length, 1);
    },
    reduceRight: N.reduceRight || function (a, b) {
      return Cb(this, a, b, this.length - 1, -1, -1);
    },
    reverse: N.reverse,
    selector: null,
    shift: N.shift,
    slice: function slice() {
      return new C(this.context, this);
    },
    sort: N.sort,
    splice: N.splice,
    toArray: function toArray() {
      return N.slice.call(this);
    },
    to$: function to$() {
      return k(this);
    },
    toJQuery: function toJQuery() {
      return k(this);
    },
    unique: function unique() {
      return new C(this.context, Ka(this));
    },
    unshift: N.unshift
  });

  C.extend = function (a, b, c) {
    if (c.length && b && (b instanceof C || b.__dt_wrapper)) {
      var d,
          e = function e(h, l, n) {
        return function () {
          var m = l.apply(h, arguments);
          C.extend(m, m, n.methodExt);
          return m;
        };
      };

      var f = 0;

      for (d = c.length; f < d; f++) {
        var g = c[f];
        b[g.name] = "function" === g.type ? e(a, g.val, g) : "object" === g.type ? {} : g.val;
        b[g.name].__dt_wrapper = !0;
        C.extend(a, b[g.name], g.propExt);
      }
    }
  };

  C.register = w = function w(a, b) {
    if (Array.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
      C.register(a[c], b);
    } else {
      d = a.split(".");
      var e = mc,
          f;
      a = 0;

      for (c = d.length; a < c; a++) {
        var g = (f = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];

        a: {
          var h = 0;

          for (var l = e.length; h < l; h++) {
            if (e[h].name === g) {
              h = e[h];
              break a;
            }
          }

          h = null;
        }

        h || (h = {
          name: g,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        }, e.push(h));
        a === c - 1 ? (h.val = b, h.type = "function" === typeof b ? "function" : k.isPlainObject(b) ? "object" : "other") : e = f ? h.methodExt : h.propExt;
      }
    }
  };

  C.registerPlural = J = function J(a, b, c) {
    C.register(a, c);
    C.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this ? this : d instanceof C ? d.length ? Array.isArray(d[0]) ? new C(d.context, d[0]) : d[0] : q : d;
    });
  };

  var nc = function nc(a, b) {
    if (Array.isArray(a)) return k.map(a, function (d) {
      return nc(d, b);
    });
    if ("number" === typeof a) return [b[a]];
    var c = k.map(b, function (d, e) {
      return d.nTable;
    });
    return k(c).filter(a).map(function (d) {
      d = k.inArray(this, c);
      return b[d];
    }).toArray();
  };

  w("tables()", function (a) {
    return a !== q && null !== a ? new C(nc(a, this.context)) : this;
  });
  w("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new C(b[0]) : a;
  });
  J("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable;
    }, 1);
  });
  J("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody;
    }, 1);
  });
  J("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead;
    }, 1);
  });
  J("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot;
    }, 1);
  });
  J("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper;
    }, 1);
  });
  w("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? fa(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ja(b, !1 === a));
    });
  });
  w("page()", function (a) {
    return a === q ? this.page.info().page : this.iterator("table", function (b) {
      lb(b, a);
    });
  });
  w("page.info()", function (a) {
    if (0 === this.context.length) return q;
    a = this.context[0];
    var b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === P(a)
    };
  });
  w("page.len()", function (a) {
    return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function (b) {
      jb(b, a);
    });
  });

  var oc = function oc(a, b, c) {
    if (c) {
      var d = new C(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }

    if ("ssp" == P(a)) ja(a, b);else {
      U(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      Ma(a, [], function (f) {
        Ia(a);
        f = Na(a, f);

        for (var g = 0, h = f.length; g < h; g++) {
          ea(a, f[g]);
        }

        ja(a, b);
        U(a, !1);
      });
    }
  };

  w("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  w("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  w("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });
  w("ajax.url()", function (a) {
    var b = this.context;

    if (a === q) {
      if (0 === b.length) return q;
      b = b[0];
      return b.ajax ? k.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
    }

    return this.iterator("table", function (c) {
      k.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a;
    });
  });
  w("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });

  var ub = function ub(a, b, c, d, e) {
    var f = [],
        g,
        h,
        l;

    var n = _typeof(b);

    b && "string" !== n && "function" !== n && b.length !== q || (b = [b]);
    n = 0;

    for (h = b.length; n < h; n++) {
      var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
      var p = 0;

      for (l = m.length; p < l; p++) {
        (g = c("string" === typeof m[p] ? m[p].trim() : m[p])) && g.length && (f = f.concat(g));
      }
    }

    a = L.selector[a];
    if (a.length) for (n = 0, h = a.length; n < h; n++) {
      f = a[n](d, e, f);
    }
    return Ka(f);
  },
      vb = function vb(a) {
    a || (a = {});
    a.filter && a.search === q && (a.search = a.filter);
    return k.extend({
      search: "none",
      order: "current",
      page: "all"
    }, a);
  },
      wb = function wb(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
    }

    a.length = 0;
    return a;
  },
      Va = function Va(a, b) {
    var c = [],
        d = a.aiDisplay;
    var e = a.aiDisplayMaster;
    var f = b.search;
    var g = b.order;
    b = b.page;
    if ("ssp" == P(a)) return "removed" === f ? [] : qa(0, e.length);
    if ("current" == b) for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) {
      c.push(d[g]);
    } else if ("current" == g || "applied" == g) {
      if ("none" == f) c = e.slice();else if ("applied" == f) c = d.slice();else {
        if ("removed" == f) {
          var h = {};
          g = 0;

          for (a = d.length; g < a; g++) {
            h[d[g]] = null;
          }

          c = k.map(e, function (l) {
            return h.hasOwnProperty(l) ? null : l;
          });
        }
      }
    } else if ("index" == g || "original" == g) for (g = 0, a = a.aoData.length; g < a; g++) {
      "none" == f ? c.push(g) : (e = k.inArray(g, d), (-1 === e && "removed" == f || 0 <= e && "applied" == f) && c.push(g));
    }
    return c;
  },
      wc = function wc(a, b, c) {
    var d;
    return ub("row", b, function (e) {
      var f = hc(e),
          g = a.aoData;
      if (null !== f && !c) return [f];
      d || (d = Va(a, c));
      if (null !== f && -1 !== k.inArray(f, d)) return [f];
      if (null === e || e === q || "" === e) return d;
      if ("function" === typeof e) return k.map(d, function (l) {
        var n = g[l];
        return e(l, n._aData, n.nTr) ? l : null;
      });

      if (e.nodeName) {
        f = e._DT_RowIndex;
        var h = e._DT_CellIndex;
        if (f !== q) return g[f] && g[f].nTr === e ? [f] : [];
        if (h) return g[h.row] && g[h.row].nTr === e.parentNode ? [h.row] : [];
        f = k(e).closest("*[data-dt-row]");
        return f.length ? [f.data("dt-row")] : [];
      }

      if ("string" === typeof e && "#" === e.charAt(0) && (f = a.aIds[e.replace(/^#/, "")], f !== q)) return [f.idx];
      f = kc(Da(a.aoData, d, "nTr"));
      return k(f).filter(e).map(function () {
        return this._DT_RowIndex;
      }).toArray();
    }, a, c);
  };

  w("rows()", function (a, b) {
    a === q ? a = "" : k.isPlainObject(a) && (b = a, a = "");
    b = vb(b);
    var c = this.iterator("table", function (d) {
      return wc(d, a, b);
    }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  w("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || q;
    }, 1);
  });
  w("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return Da(a.aoData, b, "_aData");
    }, 1);
  });
  J("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      b = b.aoData[c];
      return "search" === a ? b._aFilterData : b._aSortData;
    }, 1);
  });
  J("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a);
    });
  });
  J("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b;
    }, 1);
  });
  J("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    }

    return new C(c, b);
  });
  J("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
          f = e[c],
          g,
          h;
      e.splice(c, 1);
      var l = 0;

      for (g = e.length; l < g; l++) {
        var n = e[l];
        var m = n.anCells;
        null !== n.nTr && (n.nTr._DT_RowIndex = l);
        if (null !== m) for (n = 0, h = m.length; n < h; n++) {
          m[n]._DT_CellIndex.row = l;
        }
      }

      Ja(b.aiDisplayMaster, c);
      Ja(b.aiDisplay, c);
      Ja(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      kb(b);
      c = b.rowIdFn(f._aData);
      c !== q && delete b.aIds[c];
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) {
        b.aoData[c].idx = c;
      }
    });
    return this;
  });
  w("rows.add()", function (a) {
    var b = this.iterator("table", function (d) {
      var e,
          f = [];
      var g = 0;

      for (e = a.length; g < e; g++) {
        var h = a[g];
        h.nodeName && "TR" === h.nodeName.toUpperCase() ? f.push(Ha(d, h)[0]) : f.push(ea(d, h));
      }

      return f;
    }, 1),
        c = this.rows(-1);
    c.pop();
    k.merge(c, b);
    return c;
  });
  w("row()", function (a, b) {
    return wb(this.rows(a, b));
  });
  w("row().data()", function (a) {
    var b = this.context;
    if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && da(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this;
  });
  w("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  w("row.add()", function (a) {
    a instanceof k && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? Ha(c, a)[0] : ea(c, a);
    });
    return this.row(b[0]);
  });

  var xc = function xc(a, b, c, d) {
    var e = [],
        f = function f(g, h) {
      if (Array.isArray(g) || g instanceof k) for (var l = 0, n = g.length; l < n; l++) {
        f(g[l], h);
      } else g.nodeName && "tr" === g.nodeName.toLowerCase() ? e.push(g) : (l = k("<tr><td></td></tr>").addClass(h), k("td", l).addClass(h).html(g)[0].colSpan = na(a), e.push(l[0]));
    };

    f(c, d);
    b._details && b._details.detach();
    b._details = k(e);
    b._detailsShow && b._details.insertAfter(b.nTr);
  },
      xb = function xb(a, b) {
    var c = a.context;
    c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = q, a._details = q);
  },
      pc = function pc(a, b) {
    var c = a.context;
    c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), yc(c[0])));
  },
      yc = function yc(a) {
    var b = new C(a),
        c = a.aoData;
    b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
    0 < T(c, "_details").length && (b.on("draw.dt.DT_details", function (d, e) {
      a === e && b.rows({
        page: "current"
      }).eq(0).each(function (f) {
        f = c[f];
        f._detailsShow && f._details.insertAfter(f.nTr);
      });
    }), b.on("column-visibility.dt.DT_details", function (d, e, f, g) {
      if (a === e) for (e = na(e), f = 0, g = c.length; f < g; f++) {
        d = c[f], d._details && d._details.children("td[colspan]").attr("colspan", e);
      }
    }), b.on("destroy.dt.DT_details", function (d, e) {
      if (a === e) for (d = 0, e = c.length; d < e; d++) {
        c[d]._details && xb(b, d);
      }
    }));
  };

  w("row().child()", function (a, b) {
    var c = this.context;
    if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details : q;
    !0 === a ? this.child.show() : !1 === a ? xb(this) : c.length && this.length && xc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  w(["row().child.show()", "row().child().show()"], function (a) {
    pc(this, !0);
    return this;
  });
  w(["row().child.hide()", "row().child().hide()"], function () {
    pc(this, !1);
    return this;
  });
  w(["row().child.remove()", "row().child().remove()"], function () {
    xb(this);
    return this;
  });
  w("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });

  var zc = /^([^:]+):(name|visIdx|visible)$/,
      qc = function qc(a, b, c, d, e) {
    c = [];
    d = 0;

    for (var f = e.length; d < f; d++) {
      c.push(S(a, e[d], b));
    }

    return c;
  },
      Ac = function Ac(a, b, c) {
    var d = a.aoColumns,
        e = T(d, "sName"),
        f = T(d, "nTh");
    return ub("column", b, function (g) {
      var h = hc(g);
      if ("" === g) return qa(d.length);
      if (null !== h) return [0 <= h ? h : d.length + h];

      if ("function" === typeof g) {
        var l = Va(a, c);
        return k.map(d, function (p, t) {
          return g(t, qc(a, t, 0, 0, l), f[t]) ? t : null;
        });
      }

      var n = "string" === typeof g ? g.match(zc) : "";
      if (n) switch (n[2]) {
        case "visIdx":
        case "visible":
          h = parseInt(n[1], 10);

          if (0 > h) {
            var m = k.map(d, function (p, t) {
              return p.bVisible ? t : null;
            });
            return [m[m.length + h]];
          }

          return [sa(a, h)];

        case "name":
          return k.map(e, function (p, t) {
            return p === n[1] ? t : null;
          });

        default:
          return [];
      }
      if (g.nodeName && g._DT_CellIndex) return [g._DT_CellIndex.column];
      h = k(f).filter(g).map(function () {
        return k.inArray(this, f);
      }).toArray();
      if (h.length || !g.nodeName) return h;
      h = k(g).closest("*[data-dt-column]");
      return h.length ? [h.data("dt-column")] : [];
    }, a, c);
  };

  w("columns()", function (a, b) {
    a === q ? a = "" : k.isPlainObject(a) && (b = a, a = "");
    b = vb(b);
    var c = this.iterator("table", function (d) {
      return Ac(d, a, b);
    }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  J("columns().header()", "column().header()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTh;
    }, 1);
  });
  J("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTf;
    }, 1);
  });
  J("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", qc, 1);
  });
  J("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData;
    }, 1);
  });
  J("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, f) {
      return Da(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
    }, 1);
  });
  J("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return Da(a.aoData, e, "anCells", b);
    }, 1);
  });
  J("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
        d = this.iterator("column", function (e, f) {
      if (a === q) return e.aoColumns[f].bVisible;
      var g = e.aoColumns,
          h = g[f],
          l = e.aoData,
          n;

      if (a !== q && h.bVisible !== a) {
        if (a) {
          var m = k.inArray(!0, T(g, "bVisible"), f + 1);
          g = 0;

          for (n = l.length; g < n; g++) {
            var p = l[g].nTr;
            e = l[g].anCells;
            p && p.insertBefore(e[f], e[m] || null);
          }
        } else k(T(e.aoData, "anCells", f)).detach();

        h.bVisible = a;
      }
    });
    a !== q && this.iterator("table", function (e) {
      xa(e, e.aoHeader);
      xa(e, e.aoFooter);
      e.aiDisplay.length || k(e.nTBody).find("td[colspan]").attr("colspan", na(e));
      Ra(e);
      c.iterator("column", function (f, g) {
        H(f, null, "column-visibility", [f, g, a, b]);
      });
      (b === q || b) && c.columns.adjust();
    });
    return d;
  });
  J("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? ta(b, c) : c;
    }, 1);
  });
  w("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      ra(a);
    }, 1);
  });
  w("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return sa(c, b);
      if ("fromData" === a || "toVisible" === a) return ta(c, b);
    }
  });
  w("column()", function (a, b) {
    return wb(this.columns(a, b));
  });

  var Bc = function Bc(a, b, c) {
    var d = a.aoData,
        e = Va(a, c),
        f = kc(Da(d, e, "anCells")),
        g = k(lc([], f)),
        h,
        l = a.aoColumns.length,
        n,
        m,
        p,
        t,
        v,
        x;
    return ub("cell", b, function (r) {
      var A = "function" === typeof r;

      if (null === r || r === q || A) {
        n = [];
        m = 0;

        for (p = e.length; m < p; m++) {
          for (h = e[m], t = 0; t < l; t++) {
            v = {
              row: h,
              column: t
            }, A ? (x = d[h], r(v, S(a, h, t), x.anCells ? x.anCells[t] : null) && n.push(v)) : n.push(v);
          }
        }

        return n;
      }

      if (k.isPlainObject(r)) return r.column !== q && r.row !== q && -1 !== k.inArray(r.row, e) ? [r] : [];
      A = g.filter(r).map(function (D, I) {
        return {
          row: I._DT_CellIndex.row,
          column: I._DT_CellIndex.column
        };
      }).toArray();
      if (A.length || !r.nodeName) return A;
      x = k(r).closest("*[data-dt-row]");
      return x.length ? [{
        row: x.data("dt-row"),
        column: x.data("dt-column")
      }] : [];
    }, a, c);
  };

  w("cells()", function (a, b, c) {
    k.isPlainObject(a) && (a.row === q ? (c = a, a = null) : (c = b, b = null));
    k.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === q) return this.iterator("table", function (m) {
      return Bc(m, a, vb(c));
    });
    var d = c ? {
      page: c.page,
      order: c.order,
      search: c.search
    } : {},
        e = this.columns(b, d),
        f = this.rows(a, d),
        g,
        h,
        l,
        n;
    d = this.iterator("table", function (m, p) {
      m = [];
      g = 0;

      for (h = f[p].length; g < h; g++) {
        for (l = 0, n = e[p].length; l < n; l++) {
          m.push({
            row: f[p][g],
            column: e[p][l]
          });
        }
      }

      return m;
    }, 1);
    d = c && c.selected ? this.cells(d, c) : d;
    k.extend(d.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return d;
  });
  J("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q;
    }, 1);
  });
  w("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return S(a, b, c);
    }, 1);
  });
  J("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d];
    }, 1);
  });
  J("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return S(b, c, d, a);
    }, 1);
  });
  J("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return {
        row: b,
        column: c,
        columnVisible: ta(a, c)
      };
    }, 1);
  });
  J("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      va(b, c, a, d);
    });
  });
  w("cell()", function (a, b, c) {
    return wb(this.cells(a, b, c));
  });
  w("cell().data()", function (a) {
    var b = this.context,
        c = this[0];
    if (a === q) return b.length && c.length ? S(b[0], c[0].row, c[0].column) : q;
    Eb(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  w("order()", function (a, b) {
    var c = this.context;
    if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
    "number" === typeof a ? a = [[a, b]] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice();
    });
  });
  w("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      eb(d, a, b, c);
    });
  });
  w("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : q;
      return Array.isArray(b) ? {
        pre: b
      } : b;
    }

    return this.iterator("table", function (c) {
      c.aaSortingFixed = k.extend(!0, {}, a);
    });
  });
  w(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      k.each(b[d], function (f, g) {
        e.push([g, a]);
      });
      c.aaSorting = e;
    });
  });
  w("search()", function (a, b, c, d) {
    var e = this.context;
    return a === q ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : q : this.iterator("table", function (f) {
      f.oFeatures.bFilter && ya(f, k.extend({}, f.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1);
    });
  });
  J("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === q) return g[f].sSearch;
      e.oFeatures.bFilter && (k.extend(g[f], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), ya(e, e.oPreviousSearch, 1));
    });
  });
  w("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  w("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  w("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  w("state.save()", function () {
    return this.iterator("table", function (a) {
      Ra(a);
    });
  });

  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");

    for (var c, d, e = 0, f = a.length; e < f; e++) {
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    }

    return !0;
  };

  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = k(a).get(0),
        c = !1;
    if (a instanceof u.Api) return !0;
    k.each(u.settings, function (d, e) {
      d = e.nScrollHead ? k("table", e.nScrollHead)[0] : null;
      var f = e.nScrollFoot ? k("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || d === b || f === b) c = !0;
    });
    return c;
  };

  u.tables = u.fnTables = function (a) {
    var b = !1;
    k.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = k.map(u.settings, function (d) {
      if (!a || a && k(d.nTable).is(":visible")) return d.nTable;
    });
    return b ? new C(c) : c;
  };

  u.camelToHungarian = O;
  w("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = k(b);
    return k([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  k.each(["on", "one", "off"], function (a, b) {
    w(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = k.map(c[0].split(/\s/), function (e) {
        return e.match(/\.dt\b/) ? e : e + ".dt";
      }).join(" ");
      var d = k(this.tables().nodes());
      d[b].apply(d, c);
      return this;
    });
  });
  w("clear()", function () {
    return this.iterator("table", function (a) {
      Ia(a);
    });
  });
  w("settings()", function () {
    return new C(this.context, this.context);
  });
  w("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  w("data()", function () {
    return this.iterator("table", function (a) {
      return T(a.aoData, "_aData");
    }).flatten();
  });
  w("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          f = b.nTBody,
          g = b.nTHead,
          h = b.nTFoot,
          l = k(e);
      f = k(f);
      var n = k(b.nTableWrapper),
          m = k.map(b.aoData, function (t) {
        return t.nTr;
      }),
          p;
      b.bDestroying = !0;
      H(b, "aoDestroyCallback", "destroy", [b]);
      a || new C(b).columns().visible(!0);
      n.off(".DT").find(":not(tbody *)").off(".DT");
      k(y).off(".DT-" + b.sInstance);
      e != g.parentNode && (l.children("thead").detach(), l.append(g));
      h && e != h.parentNode && (l.children("tfoot").detach(), l.append(h));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Qa(b);
      k(m).removeClass(b.asStripeClasses.join(" "));
      k("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      f.children().detach();
      f.append(m);
      g = a ? "remove" : "detach";
      l[g]();
      n[g]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (t) {
        k(this).addClass(b.asDestroyStripes[t % p]);
      }));
      c = k.inArray(b, u.settings);
      -1 !== c && u.settings.splice(c, 1);
    });
  });
  k.each(["column", "row", "cell"], function (a, b) {
    w(b + "s().every()", function (c) {
      var d = this.selector.opts,
          e = this;
      return this.iterator(b, function (f, g, h, l, n) {
        c.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : q), g, h, l, n);
      });
    });
  });
  w("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = ia(a)(d.oLanguage);
    a === q && (a = b);
    c !== q && k.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
    return a.replace("%d", c);
  });
  u.version = "1.10.25";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  u.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function fnFormatNumber(a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function fnStateLoadCallback(a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function fnStateSaveCallback(a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: k.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  G(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  G(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    jqXHR: null,
    json: q,
    oAjaxData: q,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function fnRecordsTotal() {
      return "ssp" == P(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function fnRecordsDisplay() {
      return "ssp" == P(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    },
    fnDisplayEnd: function fnDisplayEnd() {
      var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          f = e.bPaginate;
      return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  u.ext = L = {
    buttons: {},
    classes: {},
    build: "dt/dt-1.10.25/r-2.2.9",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version
  };
  k.extend(L, {
    afnFiltering: L.search,
    aTypes: L.type.detect,
    ofnSearch: L.type.search,
    oSort: L.type.order,
    afnSortData: L.order,
    aoFeatures: L.feature,
    oApi: L.internal,
    oStdClasses: L.classes,
    oPagination: L.pager
  });
  k.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var ec = u.ext.pager;
  k.extend(ec, {
    simple: function simple(a, b) {
      return ["previous", "next"];
    },
    full: function full(a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function numbers(a, b) {
      return [Ca(a, b)];
    },
    simple_numbers: function simple_numbers(a, b) {
      return ["previous", Ca(a, b), "next"];
    },
    full_numbers: function full_numbers(a, b) {
      return ["first", "previous", Ca(a, b), "next", "last"];
    },
    first_last_numbers: function first_last_numbers(a, b) {
      return ["first", Ca(a, b), "last"];
    },
    _numbers: Ca,
    numbers_length: 7
  });
  k.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function _(a, b, c, d, e, f) {
        var g = a.oClasses,
            h = a.oLanguage.oPaginate,
            l = a.oLanguage.oAria.paginate || {},
            n,
            m,
            p = 0,
            t = function t(x, r) {
          var A,
              D = g.sPageButtonDisabled,
              I = function I(E) {
            lb(a, E.data.action, !0);
          };

          var W = 0;

          for (A = r.length; W < A; W++) {
            var M = r[W];

            if (Array.isArray(M)) {
              var B = k("<" + (M.DT_el || "div") + "/>").appendTo(x);
              t(B, M);
            } else {
              n = null;
              m = M;
              B = a.iTabIndex;

              switch (M) {
                case "ellipsis":
                  x.append('<span class="ellipsis">&#x2026;</span>');
                  break;

                case "first":
                  n = h.sFirst;
                  0 === e && (B = -1, m += " " + D);
                  break;

                case "previous":
                  n = h.sPrevious;
                  0 === e && (B = -1, m += " " + D);
                  break;

                case "next":
                  n = h.sNext;
                  if (0 === f || e === f - 1) B = -1, m += " " + D;
                  break;

                case "last":
                  n = h.sLast;
                  if (0 === f || e === f - 1) B = -1, m += " " + D;
                  break;

                default:
                  n = a.fnFormatNumber(M + 1), m = e === M ? g.sPageButtonActive : "";
              }

              null !== n && (B = k("<a>", {
                "class": g.sPageButton + " " + m,
                "aria-controls": a.sTableId,
                "aria-label": l[M],
                "data-dt-idx": p,
                tabindex: B,
                id: 0 === c && "string" === typeof M ? a.sTableId + "_" + M : null
              }).html(n).appendTo(x), pb(B, {
                action: M
              }, I), p++);
            }
          }
        };

        try {
          var v = k(b).find(z.activeElement).data("dt-idx");
        } catch (x) {}

        t(k(b).empty(), d);
        v !== q && k(b).find("[data-dt-idx=" + v + "]").trigger("focus");
      }
    }
  });
  k.extend(u.ext.type.detect, [function (a, b) {
    b = b.oLanguage.sDecimal;
    return tb(a, b) ? "num" + b : null;
  }, function (a, b) {
    if (a && !(a instanceof Date) && !tc.test(a)) return null;
    b = Date.parse(a);
    return null !== b && !isNaN(b) || Z(a) ? "date" : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return tb(a, b, !0) ? "num-fmt" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b) ? "html-num" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b, !0) ? "html-num-fmt" + b : null;
  }, function (a, b) {
    return Z(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
  }]);
  k.extend(u.ext.type.search, {
    html: function html(a) {
      return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ").replace(Ua, "") : "";
    },
    string: function string(a) {
      return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a;
    }
  });

  var Ta = function Ta(a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = ic(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };

  k.extend(L.type.order, {
    "date-pre": function datePre(a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function htmlPre(a) {
      return Z(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
    },
    "string-pre": function stringPre(a) {
      return Z(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "";
    },
    "string-asc": function stringAsc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function stringDesc(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
  });
  Wa("");
  k.extend(!0, u.ext.renderer, {
    header: {
      _: function _(a, b, c, d) {
        k(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass));
        });
      },
      jqueryui: function jqueryui(a, b, c, d) {
        k("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(k("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        k(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == h[e] ? d.sSortJUIAsc : "desc" == h[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
        });
      }
    }
  });

  var yb = function yb(a) {
    return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };

  u.render = {
    number: function number(a, b, c, d, e) {
      return {
        display: function display(f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
              h = parseFloat(f);
          if (isNaN(h)) return yb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          0 === h && 0 === parseFloat(f) && (g = "");
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
        }
      };
    },
    text: function text() {
      return {
        display: yb,
        filter: yb
      };
    }
  };
  k.extend(u.ext.internal, {
    _fnExternApiFunc: fc,
    _fnBuildAjax: Ma,
    _fnAjaxUpdate: Gb,
    _fnAjaxParameters: Pb,
    _fnAjaxUpdateDraw: Qb,
    _fnAjaxDataSrc: Na,
    _fnAddColumn: Xa,
    _fnColumnOptions: Ea,
    _fnAdjustColumnSizing: ra,
    _fnVisibleToColumnIndex: sa,
    _fnColumnIndexToVisible: ta,
    _fnVisbleColumns: na,
    _fnGetColumns: Ga,
    _fnColumnTypes: Za,
    _fnApplyColumnDefs: Db,
    _fnHungarianMap: G,
    _fnCamelToHungarian: O,
    _fnLanguageCompat: ma,
    _fnBrowserDetect: Bb,
    _fnAddData: ea,
    _fnAddTr: Ha,
    _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
      return b._DT_RowIndex !== q ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
      return k.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: S,
    _fnSetCellData: Eb,
    _fnSplitObjNotation: bb,
    _fnGetObjectDataFn: ia,
    _fnSetObjectDataFn: da,
    _fnGetDataMaster: cb,
    _fnClearTable: Ia,
    _fnDeleteIndex: Ja,
    _fnInvalidate: va,
    _fnGetRowElements: ab,
    _fnCreateTr: $a,
    _fnBuildHead: Fb,
    _fnDrawHead: xa,
    _fnDraw: fa,
    _fnReDraw: ja,
    _fnAddOptionsHtml: Ib,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: La,
    _fnFeatureHtmlFilter: Kb,
    _fnFilterComplete: ya,
    _fnFilterCustom: Tb,
    _fnFilterColumn: Sb,
    _fnFilter: Rb,
    _fnFilterCreateSearch: hb,
    _fnEscapeRegex: ib,
    _fnFilterData: Ub,
    _fnFeatureHtmlInfo: Nb,
    _fnUpdateInfo: Xb,
    _fnInfoMacros: Yb,
    _fnInitialise: za,
    _fnInitComplete: Oa,
    _fnLengthChange: jb,
    _fnFeatureHtmlLength: Jb,
    _fnFeatureHtmlPaginate: Ob,
    _fnPageChange: lb,
    _fnFeatureHtmlProcessing: Lb,
    _fnProcessingDisplay: U,
    _fnFeatureHtmlTable: Mb,
    _fnScrollDraw: Fa,
    _fnApplyToChildren: ba,
    _fnCalculateColumnWidths: Ya,
    _fnThrottle: gb,
    _fnConvertToWidth: Zb,
    _fnGetWidestNode: $b,
    _fnGetMaxLenString: ac,
    _fnStringToCss: K,
    _fnSortFlatten: pa,
    _fnSort: Hb,
    _fnSortAria: cc,
    _fnSortListener: ob,
    _fnSortAttachListener: eb,
    _fnSortingClasses: Qa,
    _fnSortData: bc,
    _fnSaveState: Ra,
    _fnLoadState: dc,
    _fnSettingsFromNode: Sa,
    _fnLog: ca,
    _fnMap: V,
    _fnBindAction: pb,
    _fnCallbackReg: Q,
    _fnCallbackFire: H,
    _fnLengthOverflow: kb,
    _fnRenderer: fb,
    _fnDataSource: P,
    _fnRowAttributes: db,
    _fnExtend: qb,
    _fnCalculateEnd: function _fnCalculateEnd() {}
  });
  k.fn.dataTable = u;
  u.$ = k;
  k.fn.dataTableSettings = u.settings;
  k.fn.dataTableExt = u.ext;

  k.fn.DataTable = function (a) {
    return k(this).dataTable(a).api();
  };

  k.each(u, function (a, b) {
    k.fn.DataTable[a] = b;
  });
  return k.fn.dataTable;
});
/*!
 DataTables styling integration
 ??2018 SpryMedia Ltd - datatables.net/license
*/


(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
    return c(a, window, document);
  }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net")(a, b).$);
    return c(b, a, a.document);
  } : c(jQuery, window, document);
})(function (c, a, b, d) {
  return c.fn.dataTable;
});
/*!
   Copyright 2014-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.2.9
 2014-2021 SpryMedia Ltd - datatables.net/license
*/


var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (b, k, m) {
  b instanceof String && (b = String(b));

  for (var n = b.length, p = 0; p < n; p++) {
    var y = b[p];
    if (k.call(m, y, p, b)) return {
      i: p,
      v: y
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, k, m) {
  if (b == Array.prototype || b == Object.prototype) return b;
  b[k] = m.value;
  return b;
};

$jscomp.getGlobal = function (b) {
  b = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, b, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var k = 0; k < b.length; ++k) {
    var m = b[k];
    if (m && m.Math == Math) return m;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(void 0);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(b, k) {
  var m = $jscomp.propertyToPolyfillSymbol[k];
  if (null == m) return b[k];
  m = b[m];
  return void 0 !== m ? m : b[k];
};

$jscomp.polyfill = function (b, k, m, n) {
  k && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, k, m, n) : $jscomp.polyfillUnisolated(b, k, m, n));
};

$jscomp.polyfillUnisolated = function (b, k, m, n) {
  m = $jscomp.global;
  b = b.split(".");

  for (n = 0; n < b.length - 1; n++) {
    var p = b[n];
    if (!(p in m)) return;
    m = m[p];
  }

  b = b[b.length - 1];
  n = m[b];
  k = k(n);
  k != n && null != k && $jscomp.defineProperty(m, b, {
    configurable: !0,
    writable: !0,
    value: k
  });
};

$jscomp.polyfillIsolated = function (b, k, m, n) {
  var p = b.split(".");
  b = 1 === p.length;
  n = p[0];
  n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var y = 0; y < p.length - 1; y++) {
    var z = p[y];
    if (!(z in n)) return;
    n = n[z];
  }

  p = p[p.length - 1];
  m = $jscomp.IS_SYMBOL_NATIVE && "es6" === m ? n[p] : null;
  k = k(m);
  null != k && (b ? $jscomp.defineProperty($jscomp.polyfills, p, {
    configurable: !0,
    writable: !0,
    value: k
  }) : k !== m && ($jscomp.propertyToPolyfillSymbol[p] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(p) : $jscomp.POLYFILL_PREFIX + p, p = $jscomp.propertyToPolyfillSymbol[p], $jscomp.defineProperty(n, p, {
    configurable: !0,
    writable: !0,
    value: k
  })));
};

$jscomp.polyfill("Array.prototype.find", function (b) {
  return b ? b : function (k, m) {
    return $jscomp.findInternal(this, k, m).v;
  };
}, "es6", "es3");

(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (k) {
    return b(k, window, document);
  }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (k, m) {
    k || (k = window);
    m && m.fn.dataTable || (m = require("datatables.net")(k, m).$);
    return b(m, k, k.document);
  } : b(jQuery, window, document);
})(function (b, k, m, n) {
  function p(a, c, d) {
    var f = c + "-" + d;
    if (A[f]) return A[f];
    var g = [];
    a = a.cell(c, d).node().childNodes;
    c = 0;

    for (d = a.length; c < d; c++) {
      g.push(a[c]);
    }

    return A[f] = g;
  }

  function y(a, c, d) {
    var f = c + "-" + d;

    if (A[f]) {
      a = a.cell(c, d).node();
      d = A[f][0].parentNode.childNodes;
      c = [];

      for (var g = 0, l = d.length; g < l; g++) {
        c.push(d[g]);
      }

      d = 0;

      for (g = c.length; d < g; d++) {
        a.appendChild(c[d]);
      }

      A[f] = n;
    }
  }

  var z = b.fn.dataTable,
      u = function u(a, c) {
    if (!z.versionCheck || !z.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
    this.s = {
      dt: new z.Api(a),
      columns: [],
      current: []
    };
    this.s.dt.settings()[0].responsive || (c && "string" === typeof c.details ? c.details = {
      type: c.details
    } : c && !1 === c.details ? c.details = {
      type: !1
    } : c && !0 === c.details && (c.details = {
      type: "inline"
    }), this.c = b.extend(!0, {}, u.defaults, z.defaults.responsive, c), a.responsive = this, this._constructor());
  };

  b.extend(u.prototype, {
    _constructor: function _constructor() {
      var a = this,
          c = this.s.dt,
          d = c.settings()[0],
          f = b(k).innerWidth();
      c.settings()[0]._responsive = this;
      b(k).on("resize.dtr orientationchange.dtr", z.util.throttle(function () {
        var g = b(k).innerWidth();
        g !== f && (a._resize(), f = g);
      }));

      d.oApi._fnCallbackReg(d, "aoRowCreatedCallback", function (g, l, h) {
        -1 !== b.inArray(!1, a.s.current) && b(">td, >th", g).each(function (e) {
          e = c.column.index("toData", e);
          !1 === a.s.current[e] && b(this).css("display", "none");
        });
      });

      c.on("destroy.dtr", function () {
        c.off(".dtr");
        b(c.table().body()).off(".dtr");
        b(k).off("resize.dtr orientationchange.dtr");
        c.cells(".dtr-control").nodes().to$().removeClass("dtr-control");
        b.each(a.s.current, function (g, l) {
          !1 === l && a._setColumnVis(g, !0);
        });
      });
      this.c.breakpoints.sort(function (g, l) {
        return g.width < l.width ? 1 : g.width > l.width ? -1 : 0;
      });

      this._classLogic();

      this._resizeAuto();

      d = this.c.details;
      !1 !== d.type && (a._detailsInit(), c.on("column-visibility.dtr", function () {
        a._timer && clearTimeout(a._timer);
        a._timer = setTimeout(function () {
          a._timer = null;

          a._classLogic();

          a._resizeAuto();

          a._resize(!0);

          a._redrawChildren();
        }, 100);
      }), c.on("draw.dtr", function () {
        a._redrawChildren();
      }), b(c.table().node()).addClass("dtr-" + d.type));
      c.on("column-reorder.dtr", function (g, l, h) {
        a._classLogic();

        a._resizeAuto();

        a._resize(!0);
      });
      c.on("column-sizing.dtr", function () {
        a._resizeAuto();

        a._resize();
      });
      c.on("preXhr.dtr", function () {
        var g = [];
        c.rows().every(function () {
          this.child.isShown() && g.push(this.id(!0));
        });
        c.one("draw.dtr", function () {
          a._resizeAuto();

          a._resize();

          c.rows(g).every(function () {
            a._detailsDisplay(this, !1);
          });
        });
      });
      c.on("draw.dtr", function () {
        a._controlClass();
      }).on("init.dtr", function (g, l, h) {
        "dt" === g.namespace && (a._resizeAuto(), a._resize(), b.inArray(!1, a.s.current) && c.columns.adjust());
      });

      this._resize();
    },
    _columnsVisiblity: function _columnsVisiblity(a) {
      var c = this.s.dt,
          d = this.s.columns,
          f,
          g = d.map(function (t, v) {
        return {
          columnIdx: v,
          priority: t.priority
        };
      }).sort(function (t, v) {
        return t.priority !== v.priority ? t.priority - v.priority : t.columnIdx - v.columnIdx;
      }),
          l = b.map(d, function (t, v) {
        return !1 === c.column(v).visible() ? "not-visible" : t.auto && null === t.minWidth ? !1 : !0 === t.auto ? "-" : -1 !== b.inArray(a, t.includeIn);
      }),
          h = 0;
      var e = 0;

      for (f = l.length; e < f; e++) {
        !0 === l[e] && (h += d[e].minWidth);
      }

      e = c.settings()[0].oScroll;
      e = e.sY || e.sX ? e.iBarWidth : 0;
      h = c.table().container().offsetWidth - e - h;
      e = 0;

      for (f = l.length; e < f; e++) {
        d[e].control && (h -= d[e].minWidth);
      }

      var r = !1;
      e = 0;

      for (f = g.length; e < f; e++) {
        var q = g[e].columnIdx;
        "-" === l[q] && !d[q].control && d[q].minWidth && (r || 0 > h - d[q].minWidth ? (r = !0, l[q] = !1) : l[q] = !0, h -= d[q].minWidth);
      }

      g = !1;
      e = 0;

      for (f = d.length; e < f; e++) {
        if (!d[e].control && !d[e].never && !1 === l[e]) {
          g = !0;
          break;
        }
      }

      e = 0;

      for (f = d.length; e < f; e++) {
        d[e].control && (l[e] = g), "not-visible" === l[e] && (l[e] = !1);
      }

      -1 === b.inArray(!0, l) && (l[0] = !0);
      return l;
    },
    _classLogic: function _classLogic() {
      var a = this,
          c = this.c.breakpoints,
          d = this.s.dt,
          f = d.columns().eq(0).map(function (h) {
        var e = this.column(h),
            r = e.header().className;
        h = d.settings()[0].aoColumns[h].responsivePriority;
        e = e.header().getAttribute("data-priority");
        h === n && (h = e === n || null === e ? 1E4 : 1 * e);
        return {
          className: r,
          includeIn: [],
          auto: !1,
          control: !1,
          never: r.match(/\bnever\b/) ? !0 : !1,
          priority: h
        };
      }),
          g = function g(h, e) {
        h = f[h].includeIn;
        -1 === b.inArray(e, h) && h.push(e);
      },
          l = function l(h, e, r, q) {
        if (!r) f[h].includeIn.push(e);else if ("max-" === r) for (q = a._find(e).width, e = 0, r = c.length; e < r; e++) {
          c[e].width <= q && g(h, c[e].name);
        } else if ("min-" === r) for (q = a._find(e).width, e = 0, r = c.length; e < r; e++) {
          c[e].width >= q && g(h, c[e].name);
        } else if ("not-" === r) for (e = 0, r = c.length; e < r; e++) {
          -1 === c[e].name.indexOf(q) && g(h, c[e].name);
        }
      };

      f.each(function (h, e) {
        for (var r = h.className.split(" "), q = !1, t = 0, v = r.length; t < v; t++) {
          var B = r[t].trim();

          if ("all" === B) {
            q = !0;
            h.includeIn = b.map(c, function (w) {
              return w.name;
            });
            return;
          }

          if ("none" === B || h.never) {
            q = !0;
            return;
          }

          if ("control" === B || "dtr-control" === B) {
            q = !0;
            h.control = !0;
            return;
          }

          b.each(c, function (w, D) {
            w = D.name.split("-");
            var x = B.match(new RegExp("(min\\-|max\\-|not\\-)?(" + w[0] + ")(\\-[_a-zA-Z0-9])?"));
            x && (q = !0, x[2] === w[0] && x[3] === "-" + w[1] ? l(e, D.name, x[1], x[2] + x[3]) : x[2] !== w[0] || x[3] || l(e, D.name, x[1], x[2]));
          });
        }

        q || (h.auto = !0);
      });
      this.s.columns = f;
    },
    _controlClass: function _controlClass() {
      if ("inline" === this.c.details.type) {
        var a = this.s.dt,
            c = b.inArray(!0, this.s.current);
        a.cells(null, function (d) {
          return d !== c;
        }, {
          page: "current"
        }).nodes().to$().filter(".dtr-control").removeClass("dtr-control");
        a.cells(null, c, {
          page: "current"
        }).nodes().to$().addClass("dtr-control");
      }
    },
    _detailsDisplay: function _detailsDisplay(a, c) {
      var d = this,
          f = this.s.dt,
          g = this.c.details;

      if (g && !1 !== g.type) {
        var l = g.display(a, c, function () {
          return g.renderer(f, a[0], d._detailsObj(a[0]));
        });
        !0 !== l && !1 !== l || b(f.table().node()).triggerHandler("responsive-display.dt", [f, a, l, c]);
      }
    },
    _detailsInit: function _detailsInit() {
      var a = this,
          c = this.s.dt,
          d = this.c.details;
      "inline" === d.type && (d.target = "td.dtr-control, th.dtr-control");
      c.on("draw.dtr", function () {
        a._tabIndexes();
      });

      a._tabIndexes();

      b(c.table().body()).on("keyup.dtr", "td, th", function (g) {
        13 === g.keyCode && b(this).data("dtr-keyboard") && b(this).click();
      });
      var f = d.target;
      d = "string" === typeof f ? f : "td, th";
      if (f !== n || null !== f) b(c.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", d, function (g) {
        if (b(c.table().node()).hasClass("collapsed") && -1 !== b.inArray(b(this).closest("tr").get(0), c.rows().nodes().toArray())) {
          if ("number" === typeof f) {
            var l = 0 > f ? c.columns().eq(0).length + f : f;
            if (c.cell(this).index().column !== l) return;
          }

          l = c.row(b(this).closest("tr"));
          "click" === g.type ? a._detailsDisplay(l, !1) : "mousedown" === g.type ? b(this).css("outline", "none") : "mouseup" === g.type && b(this).trigger("blur").css("outline", "");
        }
      });
    },
    _detailsObj: function _detailsObj(a) {
      var c = this,
          d = this.s.dt;
      return b.map(this.s.columns, function (f, g) {
        if (!f.never && !f.control) return f = d.settings()[0].aoColumns[g], {
          className: f.sClass,
          columnIndex: g,
          data: d.cell(a, g).render(c.c.orthogonal),
          hidden: d.column(g).visible() && !c.s.current[g],
          rowIndex: a,
          title: null !== f.sTitle ? f.sTitle : b(d.column(g).header()).text()
        };
      });
    },
    _find: function _find(a) {
      for (var c = this.c.breakpoints, d = 0, f = c.length; d < f; d++) {
        if (c[d].name === a) return c[d];
      }
    },
    _redrawChildren: function _redrawChildren() {
      var a = this,
          c = this.s.dt;
      c.rows({
        page: "current"
      }).iterator("row", function (d, f) {
        c.row(f);

        a._detailsDisplay(c.row(f), !0);
      });
    },
    _resize: function _resize(a) {
      var c = this,
          d = this.s.dt,
          f = b(k).innerWidth(),
          g = this.c.breakpoints,
          l = g[0].name,
          h = this.s.columns,
          e,
          r = this.s.current.slice();

      for (e = g.length - 1; 0 <= e; e--) {
        if (f <= g[e].width) {
          l = g[e].name;
          break;
        }
      }

      var q = this._columnsVisiblity(l);

      this.s.current = q;
      g = !1;
      e = 0;

      for (f = h.length; e < f; e++) {
        if (!1 === q[e] && !h[e].never && !h[e].control && !1 === !d.column(e).visible()) {
          g = !0;
          break;
        }
      }

      b(d.table().node()).toggleClass("collapsed", g);
      var t = !1,
          v = 0;
      d.columns().eq(0).each(function (B, w) {
        !0 === q[w] && v++;
        if (a || q[w] !== r[w]) t = !0, c._setColumnVis(B, q[w]);
      });
      t && (this._redrawChildren(), b(d.table().node()).trigger("responsive-resize.dt", [d, this.s.current]), 0 === d.page.info().recordsDisplay && b("td", d.table().body()).eq(0).attr("colspan", v));

      c._controlClass();
    },
    _resizeAuto: function _resizeAuto() {
      var a = this.s.dt,
          c = this.s.columns;

      if (this.c.auto && -1 !== b.inArray(!0, b.map(c, function (e) {
        return e.auto;
      }))) {
        b.isEmptyObject(A) || b.each(A, function (e) {
          e = e.split("-");
          y(a, 1 * e[0], 1 * e[1]);
        });
        a.table().node();
        var d = a.table().node().cloneNode(!1),
            f = b(a.table().header().cloneNode(!1)).appendTo(d),
            g = b(a.table().body()).clone(!1, !1).empty().appendTo(d);
        d.style.width = "auto";
        var l = a.columns().header().filter(function (e) {
          return a.column(e).visible();
        }).to$().clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        b(g).append(b(a.rows({
          page: "current"
        }).nodes()).clone(!1)).find("th, td").css("display", "");

        if (g = a.table().footer()) {
          g = b(g.cloneNode(!1)).appendTo(d);
          var h = a.columns().footer().filter(function (e) {
            return a.column(e).visible();
          }).to$().clone(!1).css("display", "table-cell");
          b("<tr/>").append(h).appendTo(g);
        }

        b("<tr/>").append(l).appendTo(f);
        "inline" === this.c.details.type && b(d).addClass("dtr-inline collapsed");
        b(d).find("[name]").removeAttr("name");
        b(d).css("position", "relative");
        d = b("<div/>").css({
          width: 1,
          height: 1,
          overflow: "hidden",
          clear: "both"
        }).append(d);
        d.insertBefore(a.table().node());
        l.each(function (e) {
          e = a.column.index("fromVisible", e);
          c[e].minWidth = this.offsetWidth || 0;
        });
        d.remove();
      }
    },
    _responsiveOnlyHidden: function _responsiveOnlyHidden() {
      var a = this.s.dt;
      return b.map(this.s.current, function (c, d) {
        return !1 === a.column(d).visible() ? !0 : c;
      });
    },
    _setColumnVis: function _setColumnVis(a, c) {
      var d = this.s.dt;
      c = c ? "" : "none";
      b(d.column(a).header()).css("display", c);
      b(d.column(a).footer()).css("display", c);
      d.column(a).nodes().to$().css("display", c);
      b.isEmptyObject(A) || d.cells(null, a).indexes().each(function (f) {
        y(d, f.row, f.column);
      });
    },
    _tabIndexes: function _tabIndexes() {
      var a = this.s.dt,
          c = a.cells({
        page: "current"
      }).nodes().to$(),
          d = a.settings()[0],
          f = this.c.details.target;
      c.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
      "number" === typeof f ? a.cells(null, f, {
        page: "current"
      }).nodes().to$().attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === f && (f = ">td:first-child, >th:first-child"), b(f, a.rows({
        page: "current"
      }).nodes()).attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1));
    }
  });
  u.breakpoints = [{
    name: "desktop",
    width: Infinity
  }, {
    name: "tablet-l",
    width: 1024
  }, {
    name: "tablet-p",
    width: 768
  }, {
    name: "mobile-l",
    width: 480
  }, {
    name: "mobile-p",
    width: 320
  }];
  u.display = {
    childRow: function childRow(a, c, d) {
      if (c) {
        if (b(a.node()).hasClass("parent")) return a.child(d(), "child").show(), !0;
      } else {
        if (a.child.isShown()) return a.child(!1), b(a.node()).removeClass("parent"), !1;
        a.child(d(), "child").show();
        b(a.node()).addClass("parent");
        return !0;
      }
    },
    childRowImmediate: function childRowImmediate(a, c, d) {
      if (!c && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), b(a.node()).removeClass("parent"), !1;
      a.child(d(), "child").show();
      b(a.node()).addClass("parent");
      return !0;
    },
    modal: function modal(a) {
      return function (c, d, f) {
        if (d) b("div.dtr-modal-content").empty().append(f());else {
          var g = function g() {
            l.remove();
            b(m).off("keypress.dtr");
          },
              l = b('<div class="dtr-modal"/>').append(b('<div class="dtr-modal-display"/>').append(b('<div class="dtr-modal-content"/>').append(f())).append(b('<div class="dtr-modal-close">&times;</div>').click(function () {
            g();
          }))).append(b('<div class="dtr-modal-background"/>').click(function () {
            g();
          })).appendTo("body");

          b(m).on("keyup.dtr", function (h) {
            27 === h.keyCode && (h.stopPropagation(), g());
          });
        }
        a && a.header && b("div.dtr-modal-content").prepend("<h2>" + a.header(c) + "</h2>");
      };
    }
  };
  var A = {};
  u.renderer = {
    listHiddenNodes: function listHiddenNodes() {
      return function (a, c, d) {
        var f = b('<ul data-dtr-index="' + c + '" class="dtr-details"/>'),
            g = !1;
        b.each(d, function (l, h) {
          h.hidden && (b("<li " + (h.className ? 'class="' + h.className + '"' : "") + ' data-dtr-index="' + h.columnIndex + '" data-dt-row="' + h.rowIndex + '" data-dt-column="' + h.columnIndex + '"><span class="dtr-title">' + h.title + "</span> </li>").append(b('<span class="dtr-data"/>').append(p(a, h.rowIndex, h.columnIndex))).appendTo(f), g = !0);
        });
        return g ? f : !1;
      };
    },
    listHidden: function listHidden() {
      return function (a, c, d) {
        return (a = b.map(d, function (f) {
          var g = f.className ? 'class="' + f.className + '"' : "";
          return f.hidden ? "<li " + g + ' data-dtr-index="' + f.columnIndex + '" data-dt-row="' + f.rowIndex + '" data-dt-column="' + f.columnIndex + '"><span class="dtr-title">' + f.title + '</span> <span class="dtr-data">' + f.data + "</span></li>" : "";
        }).join("")) ? b('<ul data-dtr-index="' + c + '" class="dtr-details"/>').append(a) : !1;
      };
    },
    tableAll: function tableAll(a) {
      a = b.extend({
        tableClass: ""
      }, a);
      return function (c, d, f) {
        c = b.map(f, function (g) {
          return "<tr " + (g.className ? 'class="' + g.className + '"' : "") + ' data-dt-row="' + g.rowIndex + '" data-dt-column="' + g.columnIndex + '"><td>' + g.title + ":</td> <td>" + g.data + "</td></tr>";
        }).join("");
        return b('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(c);
      };
    }
  };
  u.defaults = {
    breakpoints: u.breakpoints,
    auto: !0,
    details: {
      display: u.display.childRow,
      renderer: u.renderer.listHidden(),
      target: 0,
      type: "inline"
    },
    orthogonal: "display"
  };
  var C = b.fn.dataTable.Api;
  C.register("responsive()", function () {
    return this;
  });
  C.register("responsive.index()", function (a) {
    a = b(a);
    return {
      column: a.data("dtr-index"),
      row: a.parent().data("dtr-index")
    };
  });
  C.register("responsive.rebuild()", function () {
    return this.iterator("table", function (a) {
      a._responsive && a._responsive._classLogic();
    });
  });
  C.register("responsive.recalc()", function () {
    return this.iterator("table", function (a) {
      a._responsive && (a._responsive._resizeAuto(), a._responsive._resize());
    });
  });
  C.register("responsive.hasHidden()", function () {
    var a = this.context[0];
    return a._responsive ? -1 !== b.inArray(!1, a._responsive._responsiveOnlyHidden()) : !1;
  });
  C.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () {
    return this.iterator("column", function (a, c) {
      return a._responsive ? a._responsive._responsiveOnlyHidden()[c] : !1;
    }, 1);
  });
  u.version = "2.2.9";
  b.fn.dataTable.Responsive = u;
  b.fn.DataTable.Responsive = u;
  b(m).on("preInit.dt.dtr", function (a, c, d) {
    "dt" === a.namespace && (b(c.nTable).hasClass("responsive") || b(c.nTable).hasClass("dt-responsive") || c.oInit.responsive || z.defaults.responsive) && (a = c.oInit.responsive, !1 !== a && new u(c, b.isPlainObject(a) ? a : {}));
  });
  return u;
});
/*! DataTables styling wrapper for Responsive
 * ??2018 SpryMedia Ltd - datatables.net/license
 */


(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables.net-dt', 'datatables.net-responsive'], function ($) {
      return factory($, window, document);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    module.exports = function (root, $) {
      if (!root) {
        root = window;
      }

      if (!$ || !$.fn.dataTable) {
        $ = require('datatables.net-dt')(root, $).$;
      }

      if (!$.fn.dataTable.Responsive) {
        require('datatables.net-responsive')(root, $);
      }

      return factory($, root, root.document);
    };
  } else {
    // Browser
    factory(jQuery, window, document);
  }
})(function ($, window, document, undefined) {
  return $.fn.dataTable;
});
"use strict";

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o,
        i,
        a,
        s = [],
        r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o));
  }

  if (t.console = t.console || {
    info: function info(t) {}
  }, n) {
    if (n.fn.fancybox) return;

    var a = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: {
        preload: !1
      },
      ajax: {
        settings: {
          data: {
            fancybox: !0
          }
        }
      },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: {
          scrolling: "auto"
        }
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
        format: "",
        autoStart: !0
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
      },
      parentEl: "body",
      hideScrollbar: !0,
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: {
        autoStart: !1
      },
      touch: {
        vertical: !0,
        momentum: !0
      },
      hash: null,
      media: {},
      slideShow: {
        autoStart: !1,
        speed: 3e3
      },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y"
      },
      wheel: "auto",
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function clickContent(t, e) {
        return "image" === t.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        preventCaptionOverlap: !1,
        idleTime: !1,
        clickContent: function clickContent(t, e) {
          return "image" === t.type && "toggleControls";
        },
        clickSlide: function clickSlide(t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        },
        dblclickContent: function dblclickContent(t, e) {
          return "image" === t.type && "zoom";
        },
        dblclickSlide: function dblclickSlide(t, e) {
          return "image" === t.type && "zoom";
        }
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern"
        }
      }
    },
        s = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
        d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      };
    }(),
        u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      };
    }(),
        f = function () {
      var t,
          n = e.createElement("fakeelement"),
          o = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }

      return "transitionend";
    }(),
        p = function p(t) {
      return t && t.length && t[0].offsetHeight;
    },
        h = function h(t, e) {
      var o = n.extend(!0, {}, t, e);
      return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e);
      }), o;
    },
        g = function g(t) {
      var o, i;
      return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
        x: t.getBoundingClientRect().left + t.offsetWidth / 2,
        y: t.getBoundingClientRect().top + t.offsetHeight / 2
      }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i);
    },
        b = function b(t, e, o) {
      var i = this;
      i.opts = h({
        index: o
      }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init();
    };

    n.extend(b.prototype, {
      init: function init() {
        var o,
            i,
            a = this,
            s = a.group[a.currIndex],
            r = s.opts;
        r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || "";
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {
          container: o
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t);
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex);
      },
      translate: function translate(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function addContent(t) {
        var e,
            o = this,
            i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
              a,
              s,
              r,
              c,
              l = {},
              d = {};
          n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
            type: "html",
            src: e + ""
          }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
            contentType: "pdf",
            opts: {
              iframe: {
                preload: !1
              }
            }
          })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), o.group.push(l);
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function addEvents() {
        var e = this;
        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t);
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t);
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
          if (9 == a) return void (i.opts.trapFocus && e.focus(t));
          if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a);
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
        }, 1e3));
      },
      removeEvents: function removeEvents() {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null);
      },
      previous: function previous(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function next(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function jumpTo(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            d,
            u,
            f = this,
            h = f.group.length;

        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
          if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
          c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0);
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });
            var i = o.pos * c.width + o.pos * o.opts.gutter;
            n.fancybox.setTranslate(o.$slide, {
              top: 0,
              left: i - l.left + u
            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
              top: 0,
              left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
            }, e, function () {
              o.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
            });
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image");
        }
      },
      createSlide: function createSlide(t) {
        var e,
            o,
            i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t];
      },
      scaleToActual: function scaleToActual(t, e, o) {
        var i,
            a,
            s,
            r,
            c,
            l = this,
            d = l.current,
            u = d.$content,
            f = n.fancybox.getTranslate(d.$slide).width,
            p = n.fancybox.getTranslate(d.$slide).height,
            h = d.width,
            g = d.height;
        l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
          top: s,
          left: a,
          scaleX: r,
          scaleY: c
        }, o || 366, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function scaleToFit(t) {
        var e,
            o = this,
            i = o.current,
            a = i.$content;
        o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 366, function () {
          o.isAnimating = !1;
        }));
      },
      getFitPos: function getFitPos(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            d = t.height || t.opts.height,
            u = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u);
      },
      update: function update(t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function updateSlide(t, e) {
        var o = this,
            i = t && t.$content,
            a = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
        o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e);
      },
      centerSlide: function centerSlide(t) {
        var e = this,
            o = e.current,
            i = o.$slide;
        !e.isClosing && o && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, void 0 === t ? 0 : t, function () {
          i.css({
            transform: "",
            opacity: ""
          }), o.isComplete || e.complete();
        }, !1));
      },
      isMoved: function isMoved(t) {
        var e,
            o,
            i = t || this.current;
        return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5));
      },
      updateCursor: function updateCursor(t, e) {
        var o,
            i,
            a = this,
            s = a.current,
            r = a.$refs.container;
        s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
      },
      isZoomable: function isZoomable() {
        var t,
            e = this,
            n = e.current;

        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
        }

        return !1;
      },
      isScaledDown: function isScaledDown(t, e) {
        var o = this,
            i = !1,
            a = o.current,
            s = a.$content;
        return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i;
      },
      canPan: function canPan(t, e) {
        var o = this,
            i = o.current,
            a = null,
            s = !1;
        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
          width: t,
          height: e
        } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s;
      },
      loadSlide: function loadSlide(t) {
        var e,
            o,
            i,
            a = this;

        if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;

          switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case "image":
              a.setImage(t);
              break;

            case "iframe":
              a.setIframe(t);
              break;

            case "html":
              a.setContent(t, t.src || t.content);
              break;

            case "video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
              break;

            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;

            case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function success(e, n) {
                  "success" === n && a.setContent(t, e);
                },
                error: function error(e, n) {
                  e && "abort" !== n && a.setError(t);
                }
              })), o.one("onReset", function () {
                i.abort();
              });
              break;

            default:
              a.setError(t);
          }

          return !0;
        }
      },
      setImage: function setImage(t) {
        var o,
            i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t);
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null;
        }, o.onload = function () {
          i.afterLoad(t);
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t);
      },
      checkSrcset: function checkSrcset(e) {
        var n,
            o,
            i,
            a,
            s = e.opts.srcset || e.opts.image.srcset;

        if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              if (0 === n) return e.url = t;
              o && (e.value = o, e.postfix = t[t.length - 1]);
            }), e;
          }), o.sort(function (t, e) {
            return t.value - e.value;
          });

          for (var r = 0; r < o.length; r++) {
            var c = o[r];

            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;
              break;
            }
          }

          !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
        }
      },
      setBigImage: function setBigImage(t) {
        var o = this,
            i = e.createElement("img"),
            a = n(i);
        t.$image = a.one("error", function () {
          o.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
      },
      resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            i = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i);
      },
      setIframe: function setIframe(t) {
        var e,
            o = this,
            i = t.opts.iframe,
            a = t.$slide;
        t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t);
        }), a.on("refresh.fb", function () {
          var n,
              o,
              s = t.$content,
              r = i.css.width,
              c = i.css.height;

          if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body");
            } catch (t) {}

            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden");
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (t) {}

          n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
        });
      },
      setContent: function setContent(t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t));
      },
      setError: function setError(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function showLoading(t) {
        var e = this;
        (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
      },
      hideLoading: function hideLoading(t) {
        var e = this;
        (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function afterLoad(t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t));
      },
      adjustCaption: function adjustCaption(t) {
        var e,
            n = this,
            o = t || n.current,
            i = o.opts.caption,
            a = o.opts.preventCaptionOverlap,
            s = n.$refs.caption,
            r = !1;
        s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""));
      },
      adjustLayout: function adjustLayout(t) {
        var e,
            n,
            o,
            i,
            a = this,
            s = t || a.current;
        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n));
      },
      revealContent: function revealContent(t) {
        var e,
            o,
            i,
            a,
            s = this,
            r = t.$slide,
            c = !1,
            l = !1,
            d = s.isMoved(t),
            u = t.isRevealed;
        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete();
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({
            transform: "",
            opacity: ""
          }), t.pos === s.currPos && s.complete();
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
      },
      getThumbPos: function getThumbPos(t) {
        var e,
            o,
            i,
            a,
            s,
            r = !1,
            c = t.$thumb;
        return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
          top: e.top + o,
          left: e.left + s,
          width: e.width - i - s,
          height: e.height - o - a,
          scaleX: 1,
          scaleY: 1
        }, e.width > 0 && e.height > 0 && r);
      },
      complete: function complete() {
        var t,
            e = this,
            o = e.current,
            i = {};
        !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function preload(t) {
        var e,
            n,
            o = this;
        o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
      },
      focus: function focus(t, o) {
        var i,
            a,
            s = this,
            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
      },
      activate: function activate() {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function close(t, e) {
        var o,
            i,
            a,
            s,
            r,
            c,
            l,
            u = this,
            f = u.current,
            h = function h() {
          u.cleanUp(t);
        };

        return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update();
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = f.opts.zoomOpacity, "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)));
      },
      cleanUp: function cleanUp(e) {
        var o,
            i,
            a,
            s = this,
            r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
      },
      trigger: function trigger(t, e) {
        var o,
            i = Array.prototype.slice.call(arguments, 1),
            a = this,
            s = e && e.opts ? e : a.current;
        if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
        "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
      },
      updateControls: function updateControls() {
        var t = this,
            o = t.current,
            i = o.index,
            a = t.$refs.container,
            s = t.$refs.caption,
            r = o.opts.caption;
        o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
      },
      hideControls: function hideControls(t) {
        var e = this,
            n = ["infobar", "toolbar", "nav"];
        !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t;
        }).join(" ")), this.hasHiddenControls = !0;
      },
      showControls: function showControls() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
      },
      toggleControls: function toggleControls() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      }
    }), n.fancybox = {
      version: "3.5.7",
      defaults: a,
      getInstance: function getInstance(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
        return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
      },
      open: function open(t, e, n) {
        return new b(t, e, n);
      },
      close: function close(t) {
        var e = this.getInstance();
        e && (e.close(), !0 === t && this.close(t));
      },
      destroy: function destroy() {
        this.close(!0), r.add("body").off("click.fb-start", "**");
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
      }(),
      getTranslate: function getTranslate(t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        });
      },
      setTranslate: function setTranslate(t, e) {
        var n = "",
            o = {};
        if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o);
      },
      animate: function animate(t, e, o, i, a) {
        var s,
            r = this;
        n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
            top: e.top,
            left: e.left,
            width: s.width * e.scaleX,
            height: s.height * e.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c));
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f);
        }, o + 33));
      },
      stop: function stop(t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this;
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
        $trigger: n(this)
      });
    }), function () {
      var t = null;
      r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {
          case "mousedown":
            t = n(this);
            break;

          case "mouseup":
            t = null;
            break;

          case "focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
            break;

          case "focusout":
            n(".fancybox-button").removeClass("fancybox-focus");
        }
      });
    }();
  }
}(window, document, jQuery), function (t) {
  "use strict";

  var e = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  },
      n = function n(e, _n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(_n, function (t, n) {
      e = e.replace("$" + t, n || "");
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e;
  };

  t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || "",
        h = !1;
    s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");

          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
          }
        }

        return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1;
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType);
  });
  var o = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: !1,
      loaded: !1
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: !1,
      loaded: !1
    },
    load: function load(t) {
      var e,
          n = this;
      if (this[t].loaded) return void setTimeout(function () {
        n.done(t);
      });
      this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t);
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t);
      }, document.body.appendChild(e));
    },
    done: function done(e) {
      var n, o, i;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function onStateChange(t) {
            0 == t.data && n.next();
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next();
      })));
    }
  };
  t(document).on({
    "afterShow.fb": function afterShowFb(t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
    }
  });
}(jQuery), function (t, e, n) {
  "use strict";

  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60);
    };
  }(),
      i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e);
    };
  }(),
      a = function a(e) {
    var n = [];
    e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var o in e) {
      e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
    }

    return n;
  },
      s = function s(t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
  },
      r = function r(t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;

    for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) {
      if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    }

    return !1;
  },
      c = function c(e) {
    var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
    return i || a;
  },
      l = function l(t) {
    for (var e = !1;;) {
      if (e = c(t.get(0))) break;
      if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break;
    }

    return e;
  },
      d = function d(t) {
    var e = this;
    e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
  };

  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null);
  }, d.prototype.ontouchstart = function (o) {
    var i = this,
        c = n(o.target),
        d = i.instance,
        u = d.current,
        f = u.$slide,
        p = u.$content,
        h = "touchstart" == o.type;

    if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = new Date().getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
        top: 0,
        left: 0
      }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))));
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0);
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))));
  }, d.prototype.onSwipe = function (e) {
    var a,
        s = this,
        r = s.instance,
        c = s.isSwiping,
        l = s.sliderStartPos.left || 0;
    if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        });
      }), s.$container.addClass("fancybox-is-sliding"));
    });else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - i.top,
          left: o.left - i.left
        });
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
    }
  }, d.prototype.onPan = function () {
    var t = this;
    if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
    t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos);
    });
  }, d.prototype.limitMovement = function () {
    var t,
        e,
        n,
        o,
        i,
        a,
        s = this,
        r = s.canvasWidth,
        c = s.canvasHeight,
        l = s.distanceX,
        d = s.distanceY,
        u = s.contentStartPos,
        f = u.left,
        p = u.top,
        h = u.width,
        g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    };
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
        a = i.canvasWidth,
        s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    };
  }, d.prototype.onZoom = function () {
    var e = this,
        a = e.contentStartPos,
        r = a.width,
        c = a.height,
        l = a.left,
        d = a.top,
        u = s(e.newPoints[0], e.newPoints[1]),
        f = u / e.startDistanceBetweenFingers,
        p = Math.floor(r * f),
        h = Math.floor(c * f),
        g = (r - p) * e.percentageOfImageAtPinchPointX,
        b = (c - h) * e.percentageOfImageAtPinchPointY,
        m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
        v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
        y = m - e.centerPointStartX,
        x = v - e.centerPointStartY,
        w = l + (g + y),
        $ = d + (b + x),
        S = {
      top: $,
      left: w,
      scaleX: f,
      scaleY: f
    };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, d.prototype.ontouchend = function (t) {
    var o = this,
        s = o.isSwiping,
        r = o.isPanning,
        c = o.isZooming,
        l = o.isScrolling;
    if (o.endPoints = a(t), o.dMs = Math.max(new Date().getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
    o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
  }, d.prototype.endSwiping = function (t, e) {
    var o = this,
        i = !1,
        a = o.instance.group.length,
        s = Math.abs(o.distanceX),
        r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding");
  }, d.prototype.endPanning = function () {
    var t,
        e,
        o,
        i = this;
    i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366));
  }, d.prototype.endZooming = function () {
    var t,
        e,
        o,
        i,
        a = this,
        s = a.instance.current,
        r = a.newWidth,
        c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)));
  }, d.prototype.onTap = function (e) {
    var o,
        i = this,
        s = n(e.target),
        r = i.instance,
        c = r.current,
        l = e && a(e) || i.startPoints,
        d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
        u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
        f = function f(t) {
      var o = c.opts[t];
      if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
        case "close":
          r.close(i.startEvent);
          break;

        case "toggleControls":
          r.toggleControls();
          break;

        case "next":
          r.next();
          break;

        case "nextOrClose":
          r.group.length > 1 ? r.next() : r.close(i.startEvent);
          break;

        case "zoom":
          "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));
      }
    };

    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";else if (s.is(".fancybox-slide")) o = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content";
      }

      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o);
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o);
      }, 500) : f("click" + o);

      return this;
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e));
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy();
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3,
      progress: !0
    }
  });

  var n = function n(t) {
    this.instance = t, this.init();
  };

  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function init() {
      var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle();
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
    },
    set: function set(t) {
      var n = this,
          o = n.instance,
          i = o.current;
      i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
        scaleX: 1
      }, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls());
    },
    clear: function clear() {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide();
    },
    start: function start() {
      var t = this,
          e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0));
    },
    stop: function stop() {
      var t = this,
          e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide();
    },
    toggle: function toggle() {
      var t = this;
      t.isActive ? t.stop() : t.start();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e));
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
    },
    "afterShow.fb": function afterShowFb(t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set();
    },
    "afterKeydown.fb": function afterKeydownFb(n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
      var n = e && e.SlideShow;
      n && n.stop();
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
        o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set());
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];

      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) {
          n[e[0][a]] = i[a];
        }

        return n;
      }
    }

    return !1;
  }();

  if (n) {
    var o = {
      request: function request(e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function exit() {
        t[n.exitFullscreen]();
      },
      toggle: function toggle(e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function isFullscreen() {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function enabled() {
        return Boolean(t[n.fullscreenEnabled]);
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
    });
  }

  e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var i;
      if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle();
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  var n = "fancybox-thumbs";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);

  var o = function o(t) {
    this.init(t);
  };

  e.extend(o.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function init(t) {
      var e = this,
          n = t.group,
          o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");

      for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) {
        ;
      }

      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle();
      }), e.isActive = !0) : e.$button.hide();
    },
    create: function create() {
      var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"));
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
    },
    focus: function focus(t) {
      var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
      o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, t));
    },
    update: function update() {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update();
    },
    hide: function hide() {
      this.isVisible = !1, this.update();
    },
    show: function show() {
      this.isVisible = !0, this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible, this.update();
    }
  }), e(t).on({
    "onInit.fb": function onInitFb(t, e) {
      var n;
      e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show());
    },
    "beforeShow.fb": function beforeShowFb(t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250);
    },
    "afterKeydown.fb": function afterKeydownFb(t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
    },
    "beforeClose.fb": function beforeCloseFb(t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    }
  });
}(document, jQuery), function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t];
    });
  }

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
    },
    share: {
      url: function url(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t,
        o,
        i = e.fancybox.getInstance(),
        a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        touch: !1,
        animationEffect: !1,
        afterLoad: function afterLoad(t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0);
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        },
        mobile: {
          autoFocus: !1
        }
      }
    }));
  });
}(document, jQuery), function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1),
        n = e.split("-"),
        o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
        i = n.join("-");
    return {
      hash: e,
      index: o < 1 ? 1 : o,
      gallery: i
    };
  }

  function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
  }

  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
  }

  n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "???" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    });
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({
      "onInit.fb": function onInitFb(t, e) {
        var n, i;
        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
      },
      "beforeShow.fb": function beforeShowFb(n, o, i, s) {
        var r;
        i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null;
        }, 300)));
      },
      "beforeClose.fb": function beforeCloseFb(n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null);
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(),
          e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");
        if (i && i.currentHash) return e = i, !1;
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t);
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o());
    }, 50));
  });
}(window, document, jQuery), function (t, e) {
  "use strict";

  var n = new Date().getTime();
  e(t).on({
    "onInit.fb": function onInitFb(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current,
            i = new Date().getTime();
        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, jQuery);
"use strict";

!function (a) {
  function b() {
    g.hasClass(j) ? h.toggleClass(k) : h.toggleClass(l), n && g.one("transitionend", function () {
      n.trigger("focus");
    });
  }

  function c() {
    g.hasClass(j) ? h.removeClass(k) : h.removeClass(l);
  }

  function d() {
    g.hasClass(j) ? (h.addClass(k), g.animate({
      left: "0px"
    }, o), x.animate({
      left: p
    }, o), i.animate({
      left: p
    }, o)) : (h.addClass(l), g.animate({
      right: "0px"
    }, o), x.animate({
      right: p
    }, o), i.animate({
      right: p
    }, o)), n && n.trigger("focus");
  }

  function e() {
    g.hasClass(j) ? (h.removeClass(k), g.animate({
      left: "-" + p
    }, o), x.animate({
      left: "0px"
    }, o), i.animate({
      left: "0px"
    }, o)) : (h.removeClass(l), g.animate({
      right: "-" + p
    }, o), x.animate({
      right: "0px"
    }, o), i.animate({
      right: "0px"
    }, o));
  }

  function f() {
    a(q).addClass(s), a(q).on("click", function (b) {
      var c = a(this);
      c.hasClass(s) ? (c.siblings(q).addClass(s).removeClass(r), c.removeClass(s).addClass(r)) : c.addClass(s).removeClass(r), b.stopPropagation();
    });
  }

  var g = a(".pushy"),
      h = a("body"),
      i = a(".push"),
      j = "pushy-left",
      k = "pushy-open-left",
      l = "pushy-open-right",
      m = a(".site-overlay"),
      n = a(g.data("focus")),
      o = 200,
      p = g.width() + "px",
      q = ".pushy-submenu",
      r = "pushy-submenu-open",
      s = "pushy-submenu-closed";
  if ("undefined" != typeof g.data("menu-btn-selector")) var t = g.data("menu-btn-selector");else var t = ".menu-btn";
  var u = a(t + ", .pushy-link"),
      v = a(t),
      w = "#container";
  "undefined" != typeof g.data("container-selector") && (w = g.data("container-selector"));
  var x = a(w);
  a(document).on("keyup", function (a) {
    27 == a.keyCode && (h.hasClass(k) || h.hasClass(l)) && (y ? c() : (e(), z = !1), v && v.trigger("focus"));
  });

  var y = function () {
    var a = document.createElement("p"),
        b = !1,
        c = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform"
    };

    if (null !== document.body) {
      document.body.insertBefore(a, null);

      for (var d in c) {
        void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
      }

      return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b;
    }

    return !1;
  }();

  if (y) f(), u.on("click", function () {
    b();
  }), m.on("click", function () {
    b();
  });else {
    h.addClass("no-csstransforms3d"), g.hasClass(j) ? g.css({
      left: "-" + p
    }) : g.css({
      right: "-" + p
    }), x.css({
      "overflow-x": "hidden"
    });
    var z = !1;
    f(), u.on("click", function () {
      z ? (e(), z = !1) : (d(), z = !0);
    }), m.on("click", function () {
      z ? (e(), z = !1) : (d(), z = !0);
    });
  }
}(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.familyspot.com
 * Licensed under MIT
 * http://flesler.familyspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.5.2-beta
 */
(function ($) {
  var $scrollTo = $.scrollTo = function (target, duration, settings) {
    return $(window).scrollTo(target, duration, settings);
  };

  $scrollTo.defaults = {
    axis: 'xy',
    duration: 0,
    limit: true
  };

  $.fn.scrollTo = function (target, duration, settings) {
    if (_typeof(duration) === 'object') {
      settings = duration;
      duration = 0;
    }

    if (typeof settings === 'function') {
      settings = {
        onAfter: settings
      };
    }

    if (target === 'max') {
      target = 9e9;
    }

    settings = $.extend({}, $scrollTo.defaults, settings); // Speed is still recognized for backwards compatibility

    duration = duration || settings.duration; // Make sure the settings are given right

    settings.queue = settings.queue && settings.axis.length > 1;

    if (settings.queue) {
      // Let's keep the overall duration
      duration /= 2;
    }

    settings.offset = both(settings.offset);
    settings.over = both(settings.over);
    return this._scrollable().each(function () {
      // Null target yields nothing, just like jQuery does
      if (target === null) return;
      var elem = this,
          $elem = $(elem),
          targ = target,
          toff,
          attr = {},
          win = $elem.is('html,body');

      switch (_typeof(targ)) {
        // A number will pass the regex
        case 'number':
        case 'string':
          if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
            targ = both(targ); // We are done

            break;
          } // Relative/Absolute selector, no break!


          targ = win ? $(targ) : $(targ, this);
          if (!targ.length) return;

        /* falls through */

        case 'object':
          // DOMElement / jQuery
          if (targ.is || targ.style) {
            // Get the real position of the target
            toff = (targ = $(targ)).offset();
          }

      }

      var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;
      $.each(settings.axis.split(''), function (i, axis) {
        var Pos = axis === 'x' ? 'Left' : 'Top',
            pos = Pos.toLowerCase(),
            key = 'scroll' + Pos,
            old = elem[key],
            max = $scrollTo.max(elem, axis);

        if (toff) {
          // jQuery / DOMElement
          attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]); // If it's a dom element, reduce the margin

          if (settings.margin) {
            attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
            attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
          }

          attr[key] += offset[pos] || 0;

          if (settings.over[pos]) {
            // Scroll to a fraction of its width/height
            attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos];
          }
        } else {
          var val = targ[pos]; // Handle percentage values

          attr[key] = val.slice && val.slice(-1) === '%' ? parseFloat(val) / 100 * max : val;
        } // Number or 'number'


        if (settings.limit && /^\d+$/.test(attr[key])) {
          // Check the limits
          attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
        } // Queueing axes


        if (!i && settings.queue) {
          // Don't waste time animating, if there's no need.
          if (old !== attr[key]) {
            // Intermediate animation
            animate(settings.onAfterFirst);
          } // Don't animate this axis again in the next iteration.


          delete attr[key];
        }
      });
      animate(settings.onAfter);

      function animate(callback) {
        $elem.animate(attr, duration, settings.easing, callback && function () {
          callback.call(this, targ, settings);
        });
      }
    }).end();
  }; // Max scrolling position, works on quirks mode
  // It only fails (not too badly) on IE, quirks mode.


  $scrollTo.max = function (elem, axis) {
    var Dim = axis === 'x' ? 'Width' : 'Height',
        scroll = 'scroll' + Dim;
    if (!$(elem).is('html,body')) return elem[scroll] - $(elem)[Dim.toLowerCase()]();
    var size = 'client' + Dim,
        html = elem.ownerDocument.documentElement,
        body = elem.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
  }; // Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
  // Used internally, available if needed (for example to animate the object or call .stop())


  $.fn._scrollable = function () {
    return this.map(function () {
      var elem = this,
          isWin = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
      if (!isWin) return elem;
      var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem; // Windows Phone always scrolls via <html> #56

      if (/iemobile/i.test(navigator.userAgent)) {
        return doc.documentElement;
      } // Chrome is inconsistent with which one to use
      // They change across versions #101


      if (/chrome|applewebkit/i.test(navigator.userAgent)) {
        return scrolls(doc.body) || doc.documentElement;
      } // Every other browser follows the same rule


      return doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement;
    });
  };

  function scrolls(elem) {
    // If already scrolled means it works, no need to move the scroll
    if (elem.scrollTop) return elem; // We already tested and this one is the one

    if ($.data(elem, '_scrolls')) return elem; // Changed, then it works

    elem.scrollTop++;

    if (elem.scrollTop === 1) {
      // Mark it as correct so we don't re-scroll on every call to the plugin
      $.data(elem, '_scrolls', true);
      elem.scrollTop = 0;
      return elem;
    }

    return null;
  }

  function both(val) {
    return $.isFunction(val) || $.isPlainObject(val) ? val : {
      top: val,
      left: val
    };
  } // AMD requirement


  return $scrollTo;
})(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 6.7.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 1, 2021
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];

        for (var i in a) {
          Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function a(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function i(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
      void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }

  var n = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function u(e, t, a) {
    return (u = p() ? Reflect.construct : function (e, t, a) {
      var i = [null];
      i.push.apply(i, t);
      var s = new (Function.bind.apply(e, i))();
      return a && d(s, a.prototype), s;
    }).apply(null, arguments);
  }

  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function c(e) {
      if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
      var a;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }

      function i() {
        return u(e, arguments, o(this).constructor);
      }

      return i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(i, e);
    })(e);
  }

  var h = function (e) {
    var t, a;

    function i(t) {
      var a, i, s;
      return a = e.call.apply(e, [this].concat(t)) || this, i = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
        get: function get() {
          return s;
        },
        set: function set(e) {
          s.__proto__ = e;
        }
      }), a;
    }

    return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i;
  }(c(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var a = l(),
        i = r(),
        s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;

        for (var p = 0; p < d.childNodes.length; p += 1) {
          s.push(d.childNodes[p]);
        }
      } else s = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) {
          a.push(i[s]);
        }

        return a;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }

    return new h(function (e) {
      for (var t = [], a = 0; a < e.length; a += 1) {
        -1 === t.indexOf(e[a]) && t.push(e[a]);
      }

      return t;
    }(s));
  }

  m.fn = h.prototype;
  var g,
      b,
      w,
      y = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, i);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, i);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return i.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        i.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var a = 0; a < this.length; a += 1) {
        if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
          this[a][i] = e[i], this[a].setAttribute(i, e[i]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);else for (var i = m(t).parents(), n = 0; n < i.length; n += 1) {
            m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
        var c = this[u];
        if (s) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
            listener: r,
            proxyListener: l
          }), c.addEventListener(h, l, n);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), c.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var l = i.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], p = 0; p < this.length; p += 1) {
          var u = this[p],
              c = void 0;
          if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for (var h = c.length - 1; h >= 0; h -= 1) {
            var v = c[h];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) {
        a[i] = arguments[i];
      }

      for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) {
        for (var o = s[n], d = 0; d < this.length; d += 1) {
          var p = this[d];

          if (e.CustomEvent) {
            var u = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            p.dom7EventData = a.filter(function (e, t) {
              return t > 0;
            }), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function a(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", a));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
        return {
          top: i.top + d - n,
          left: i.left + p - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var a,
          i = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var s in e) {
              this[a].style[s] = e[s];
            }
          }

          return this;
        }

        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, a) {
        e.apply(t, [t, a]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      if (e === s) return n === s;
      if (e === i) return n === i;

      if (e.nodeType || e instanceof h) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var a = t + e;
        return m(a < 0 ? [] : [this[a]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
        e = a < 0 || arguments.length <= a ? void 0 : arguments[a];

        for (var i = 0; i < this.length; i += 1) {
          if ("string" == typeof e) {
            var s = t.createElement("div");

            for (s.innerHTML = e; s.firstChild;) {
              this[i].appendChild(s.firstChild);
            }
          } else if (e instanceof h) for (var n = 0; n < e.length; n += 1) {
            this[i].appendChild(e[n]);
          } else this[i].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          a,
          i = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var s = i.createElement("div");

          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
            this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof h) for (a = 0; a < e.length; a += 1) {
          this[t].insertBefore(e[a], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].parentNode; i;) {
          e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        try {
          var i = this[a].querySelectorAll(e);
        } catch (t) {
          console.log(e);
        }

        for (var s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].children, s = 0; s < i.length; s += 1) {
          e && !m(i[s]).is(e) || t.push(i[s]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");

    var a,
        i,
        s,
        r = l(),
        n = function (e) {
      var t,
          a = l();
      return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
    }(e);

    return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = "undefined" != typeof window ? window.HTMLElement : void 0, i = 1; i < arguments.length; i += 1) {
      var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s && !(a && s instanceof a)) for (var r = Object.keys(Object(s)).filter(function (e) {
        return t.indexOf(e) < 0;
      }), n = 0, l = r.length; n < l; n += 1) {
        var o = r[n],
            d = Object.getOwnPropertyDescriptor(s, o);
        void 0 !== d && d.enumerable && (C(e[o]) && C(s[o]) ? s[o].__swiper__ ? e[o] = s[o] : S(e[o], s[o]) : !C(e[o]) && C(s[o]) ? (e[o] = {}, s[o].__swiper__ ? e[o] = s[o] : S(e[o], s[o])) : e[o] = s[o]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) && Object.keys(t[a]).forEach(function (i) {
        "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
      }), e[a] = t[a];
    });
  }

  function z(e) {
    return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
  }

  function P(e, t, a, i) {
    var s = r();
    return a && Object.keys(i).forEach(function (a) {
      if (!t[a] && !0 === t.auto) {
        var r = s.createElement("div");
        r.className = i[a], e.append(r), t[a] = r;
      }
    }), t;
  }

  function k() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var a = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, a);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function $(e) {
    return void 0 === e && (e = {}), b || (b = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          a = k(),
          i = l(),
          s = i.navigator.platform,
          r = t || i.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = i.screen.width,
          d = i.screen.height,
          p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          u = r.match(/(iPad).*OS\s([\d_]+)/),
          c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === s,
          f = "MacIntel" === s;
      return !u && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }

  function L() {
    return w || (w = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), w;
  }

  Object.keys(y).forEach(function (e) {
    Object.defineProperty(m.fn, e, {
      value: y[e],
      writable: !0
    });
  });
  var I = {
    name: "resize",
    create: function create() {
      var e = this;
      S(e, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
              var a = e.width,
                  i = e.height,
                  s = a,
                  r = i;
              t.forEach(function (t) {
                var a = t.contentBoxSize,
                    i = t.contentRect,
                    n = t.target;
                n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
              }), s === a && r === i || e.resize.resizeHandler();
            }), e.resize.observer.observe(e.el));
          },
          removeObserver: function removeObserver() {
            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
          },
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
      },
      destroy: function destroy(e) {
        var t = l();
        e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      O = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            i.emit("observerUpdate", e[0]);
          };

          a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
        } else i.emit("observerUpdate", e[0]);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function init() {
      var e = this;

      if (e.support.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
          e.observer.attach(t[a]);
        }
        e.observer.attach(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), e.observer.attach(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      A = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      M(this, {
        observer: t({}, O, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function D(e) {
    var t = this,
        a = r(),
        i = l(),
        s = t.touchEventsData,
        n = t.params,
        o = t.touches;

    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) if (s.isTouchEvent = "touchstart" === d.type, s.isTouchEvent || !("which" in d) || 3 !== d.which) if (!(!s.isTouchEvent && "button" in d && d.button > 0)) if (!s.isTouched || !s.isMoved) if (!!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0])), n.noSwiping && p.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0;else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
        o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
        var u = o.currentX,
            c = o.currentY,
            h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

        if (h && (u <= v || u >= i.innerWidth - v)) {
          if ("prevent" !== h) return;
          e.preventDefault();
        }

        if (S(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), o.startX = u, o.startY = c, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
          var f = !0;
          p.is(s.focusableElements) && (f = !1), a.activeElement && m(a.activeElement).is(s.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
          var g = f && t.allowTouchMove && n.touchStartPreventDefault;
          !n.touchStartForcePreventDefault && !g || p[0].isContentEditable || d.preventDefault();
        }

        t.emit("touchStart", d);
      }
    }
  }

  function N(e) {
    var t = r(),
        a = this,
        i = a.touchEventsData,
        s = a.params,
        n = a.touches,
        l = a.rtlTranslate;

    if (a.enabled) {
      var o = e;

      if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
              p = "touchmove" === o.type ? d.pageX : o.pageX,
              u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = u);
          if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (S(n, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u
          }), i.touchStartTime = x()));
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
            if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
          } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
          if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.focusableElements)) return i.isMoved = !0, void (a.allowClick = !1);

          if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
            n.currentX = p, n.currentY = u;
            var c = n.currentX - n.startX,
                h = n.currentY - n.startY;

            if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
              var v;
              if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
              if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                var f = a.isHorizontal() ? c : h;
                n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                var g = !0,
                    b = s.resistanceRatio;

                if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                }

                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: n[a.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: n[a.isHorizontal() ? "currentX" : "currentY"],
                  time: x()
                })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }

  function G(e) {
    var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid;

    if (t.enabled) {
      var d = e;
      if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
      i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var p,
          u = x(),
          c = u - a.touchStartTime;
      if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E(function () {
        t.destroyed || (t.allowClick = !0);
      }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
      if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;

          t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
          var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              w = t.translate + b;
          r && (w = -w);
          var y,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);else if (i.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1) {
              if (o[z] > -w) {
                M = z;
                break;
              }
            }

            w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
          }

          if (T && t.once("transitionEnd", function () {
            t.loopFix();
          }), 0 !== t.velocity) {
            if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
              var P = Math.abs((r ? -w : w) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();

          i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
              t.setTranslate(y), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
        } else {
          if (i.freeModeSticky) return void t.slideToClosest();
          i.freeMode && t.emit("_freeModeNoMomentumRelease");
        }

        (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && ($ = I, L = l[I + O] - l[I]) : p >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
        }

        var A = (p - l[$]) / L,
            D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
        }
      }
    }
  }

  function B() {
    var e = this,
        t = e.params,
        a = e.el;

    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }

  function H(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function X() {
    var e = this,
        t = e.wrapperEl,
        a = e.rtlTranslate;

    if (e.enabled) {
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
  }

  var R = !1;

  function Y() {}

  var V = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !1,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      W = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a];
          i.params && S(e, i.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
              s = e[a] || {};
          i.on && t.on && Object.keys(i.on).forEach(function (e) {
            t.on(e, i.on[e]);
          }), i.create && i.create.bind(t)(s);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
        }), i;
      },
      once: function once(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;

        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;

          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
            r[n] = arguments[n];
          }

          t.apply(i, r);
        }

        return s.__emitterProxy = t, i.on(e, s, a);
      },
      onAny: function onAny(e, t) {
        var a = this;
        if ("function" != typeof e) return a;
        var i = t ? "unshift" : "push";
        return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
      },
      offAny: function offAny(e) {
        var t = this;
        if (!t.eventsAnyListeners) return t;
        var a = t.eventsAnyListeners.indexOf(e);
        return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
      },
      off: function off(e, t) {
        var a = this;
        return a.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
            (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
          });
        }), a) : a;
      },
      emit: function emit() {
        var e,
            t,
            a,
            i = this;
        if (!i.eventsListeners) return i;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
            i.apply(a, [e].concat(t));
          }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
            e.apply(a, t);
          });
        }), i;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            a = this,
            i = a.$el;
        e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = this;

        function t(t) {
          return e.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[t];
        }

        function a(e, a) {
          return parseFloat(e.getPropertyValue(t(a)) || 0);
        }

        var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
        "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
        var m = i.slidesOffsetAfter;
        "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
        var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = i.spaceBetween,
            y = -f,
            E = 0,
            x = 0;

        if (void 0 !== r) {
          var T, C;
          "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, n ? p.css({
            marginLeft: "",
            marginTop: ""
          }) : p.css({
            marginRight: "",
            marginBottom: ""
          }), i.slidesPerColumn > 1 && (T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));

          for (var M, z, P, k = i.slidesPerColumn, $ = T / k, L = Math.floor(u / i.slidesPerColumn), I = 0; I < u; I += 1) {
            C = 0;
            var O = p.eq(I);

            if (i.slidesPerColumn > 1) {
              var A = void 0,
                  D = void 0,
                  N = void 0;

              if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                var G = Math.floor(I / (i.slidesPerGroup * i.slidesPerColumn)),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H = 0 === G ? i.slidesPerGroup : Math.min(Math.ceil((u - G * k * i.slidesPerGroup) / k), i.slidesPerGroup);
                A = (D = B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) + N * T / k, O.css({
                  "-webkit-box-ordinal-group": A,
                  "-moz-box-ordinal-group": A,
                  "-ms-flex-order": A,
                  "-webkit-order": A,
                  order: A
                });
              } else "column" === i.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;

              O.css(t("margin-top"), 0 !== N ? i.spaceBetween && i.spaceBetween + "px" : "");
            }

            if ("none" !== O.css("display")) {
              if ("auto" === i.slidesPerView) {
                var X = getComputedStyle(O[0]),
                    R = O[0].style.transform,
                    Y = O[0].style.webkitTransform;
                if (R && (O[0].style.transform = "none"), Y && (O[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);else {
                  var V = a(X, "width"),
                      W = a(X, "padding-left"),
                      F = a(X, "padding-right"),
                      _ = a(X, "margin-left"),
                      q = a(X, "margin-right"),
                      j = X.getPropertyValue("box-sizing");

                  if (j && "border-box" === j) C = V + _ + q;else {
                    var U = O[0],
                        K = U.clientWidth;
                    C = V + W + F + _ + q + (U.offsetWidth - K);
                  }
                }
                R && (O[0].style.transform = R), Y && (O[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C));
              } else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[I] && (p[I].style[t("width")] = C + "px");

              p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides ? (y = y + C / 2 + E / 2 + w, 0 === E && 0 !== I && (y = y - r / 2 - w), 0 === I && (y = y - r / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), x % i.slidesPerGroup == 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && c.push(y), h.push(y), y = y + C + w), e.virtualSize += C + w, E = C, x += 1;
            }
          }

          if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
            width: e.virtualSize + i.spaceBetween + "px"
          }), i.setWrapperSize) s.css(((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", z));
          if (i.slidesPerColumn > 1) if (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((P = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", P)), i.centeredSlides) {
            M = [];

            for (var Z = 0; Z < c.length; Z += 1) {
              var J = c[Z];
              i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && M.push(J);
            }

            c = M;
          }

          if (!i.centeredSlides) {
            M = [];

            for (var Q = 0; Q < c.length; Q += 1) {
              var ee = c[Q];
              i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && M.push(ee);
            }

            c = M, Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r);
          }

          if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
            var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
            p.filter(function (e, t) {
              return !i.cssMode || t !== p.length - 1;
            }).css(((te = {})[ae] = w + "px", te));
          }

          if (i.centeredSlides && i.centeredSlidesBounds) {
            var ie = 0;
            v.forEach(function (e) {
              ie += e + (i.spaceBetween ? i.spaceBetween : 0);
            });
            var se = (ie -= i.spaceBetween) - r;
            c = c.map(function (e) {
              return e < 0 ? -f : e > se ? se + m : e;
            });
          }

          if (i.centerInsufficientSlides) {
            var re = 0;

            if (v.forEach(function (e) {
              re += e + (i.spaceBetween ? i.spaceBetween : 0);
            }), (re -= i.spaceBetween) < r) {
              var ne = (r - re) / 2;
              c.forEach(function (e, t) {
                c[t] = e - ne;
              }), h.forEach(function (e, t) {
                h[t] = e + ne;
              });
            }
          }

          S(e, {
            slides: p,
            snapGrid: c,
            slidesGrid: h,
            slidesSizesGrid: v
          }), u !== d && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
        "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);

        var n = function n(e) {
          return s ? a.slides.filter(function (t) {
            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
          })[0] : a.slides.eq(e)[0];
        };

        if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
          if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var l = a.activeIndex + t;
            if (l > a.slides.length && !s) break;
            i.push(n(l));
          }
        } else i.push(n(a.activeIndex));

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var o = i[t].offsetHeight;
            r = o > r ? o : r;
          }
        }

        r && a.$wrapperEl.css("height", r + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

          for (var n = 0; n < i.length; n += 1) {
            var l = i[n],
                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);

            if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
              var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
              (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
            }

            l.progress = s ? -o : o;
          }

          t.visibleSlides = m(t.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var a = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * a || 0;
        }

        var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
        0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), S(t, {
          progress: r,
          isBeginning: n,
          isEnd: l
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
        a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
        var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
        var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;

        if (void 0 === p) {
          for (var u = 0; u < s.length; u += 1) {
            void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
          }

          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }

        if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
          var c = Math.min(n.slidesPerGroupSkip, p);
          t = c + Math.floor((p - c) / n.slidesPerGroup);
        }

        if (t >= r.length && (t = r.length - 1), p !== l) {
          var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
          S(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: l,
            activeIndex: p
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
        } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
        if (s) for (var n = 0; n < a.slides.length; n += 1) {
          if (a.slides[n] === s) {
            r = !0, t = n;
            break;
          }
        }
        if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
        a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -s : s;
        if (a.cssMode) return s;
        var n = T(r[0], e);
        return i && (n = -n), n || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
        a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
        var p = a.maxTranslate() - a.minTranslate();
        (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, a, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            p = r.maxTranslate();

        if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
          var u,
              c = r.isHorizontal();
          if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u));else l[c ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        var a = this;
        a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && a.updateAutoHeight();
          var n = t;

          if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
            if ("reset" === n) return void a.emit("slideResetTransitionStart");
            a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;

        if (a.animating = !1, !r.cssMode) {
          a.setTransition(0);
          var n = t;

          if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
            if ("reset" === n) return void a.emit("slideResetTransitionEnd");
            a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, a, i, s) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

        if ("string" == typeof e) {
          var r = parseInt(e, 10);
          if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = r;
        }

        var n = this,
            l = e;
        l < 0 && (l = 0);
        var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
        if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
        var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
        g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
        var b,
            w = -d[g];
        if (n.updateProgress(w), o.normalizeSlideIndex) for (var y = 0; y < p.length; y += 1) {
          var E = -Math.floor(100 * w),
              x = Math.floor(100 * p[y]),
              T = Math.floor(100 * p[y + 1]);
          void 0 !== p[y + 1] ? E >= x && E < T - (T - x) / 2 ? l = y : E >= x && E < T && (l = y + 1) : E >= x && (l = y);
        }

        if (n.initialized && l !== c) {
          if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
          if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (c || 0) !== l) return !1;
        }

        if (b = l > c ? "next" : l < c ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;

        if (o.cssMode) {
          var C,
              S = n.isHorizontal(),
              M = -w;
          if (h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = M;else if (v.scrollTo) v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));else v[S ? "scrollLeft" : "scrollTop"] = M;
          return !0;
        }

        return 0 === t ? (n.setTransition(0), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b));
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = this,
            r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
      },
      slideNext: function slideNext(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating;
        if (!i.enabled) return i;
        var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        return i.slideTo(i.activeIndex + n, e, t, a);
      },
      slidePrev: function slidePrev(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
        if (!i.enabled) return i;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p,
            u = d(o ? i.translate : -i.translate),
            c = n.map(function (e) {
          return d(e);
        }),
            h = n[c.indexOf(u) - 1];
        return void 0 === h && s.cssMode && n.forEach(function (e) {
          !h && u >= e && (h = e);
        }), void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
      },
      slideReset: function slideReset(e, t, a) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
      },
      slideToClosest: function slideToClosest(e, t, a, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
        var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;

        if (o >= s.snapGrid[l]) {
          var d = s.snapGrid[l];
          o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
        } else {
          var p = s.snapGrid[l - 1];
          o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
            r = t.clickedIndex;

        if (a.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);

        if (a.loopFillGroupWithBlank) {
          var n = a.slidesPerGroup - s.length % a.slidesPerGroup;

          if (n !== a.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
              i.append(o);
            }

            s = i.children("." + a.slideClass);
          }
        }

        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
        var d = [],
            p = [];
        s.each(function (t, a) {
          var i = m(t);
          a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
        });

        for (var u = 0; u < p.length; u += 1) {
          i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }

        for (var c = d.length - 1; c >= 0; c -= 1) {
          i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this;
        e.emit("beforeLoopFix");
        var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var d = -l[a] - e.getTranslate();
        if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
          t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;

        if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
          var a = t.el;
          a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this,
            a = t.$wrapperEl,
            i = t.params;
        if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && a.append(e[s]);
        } else a.append(e);
        i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            e[n] && i.prepend(e[n]);
          }

          r = s + e.length;
        } else i.prepend(e);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
          for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), o.unshift(p);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var u = 0; u < t.length; u += 1) {
              t[u] && i.append(t[u]);
            }

            l = r > e ? r + t.length : r;
          } else i.append(t);

          for (var c = 0; c < o.length; c += 1) {
            i.append(o[c]);
          }

          s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r,
            n = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var l = 0; l < e.length; l += 1) {
            r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          }

          n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
        e.onTouchStart = D.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = G.bind(e), a.cssMode && (e.onScroll = X.bind(e)), e.onClick = H.bind(e);
        var d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
              passive: !1,
              capture: d
            } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), R || (t.addEventListener("touchstart", Y), R = !0);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B, !0) : e.on("observerUpdate", B, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;

        if (l && (!l || 0 !== Object.keys(l).length)) {
          var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);

          if (o && e.currentBreakpoint !== o) {
            var d = o in l ? l[o] : void 0;
            d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = d[e];
              void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
            u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
            var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
            v && a && e.changeDirection(), S(e.params, p);
            var m = e.params.enabled;
            S(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e, t, a) {
        if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
          var i = !1,
              s = l(),
              r = "window" === t ? s.innerHeight : a.clientHeight,
              n = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var t = parseFloat(e.substr(1));
              return {
                value: r * t,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          n.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var o = 0; o < n.length; o += 1) {
            var d = n[o],
                p = d.point,
                u = d.value;
            "window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.params,
            a = e.isLocked,
            i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p = (e = ["initialized", r.direction, {
          "pointer-events": d.pointerEvents && !d.touch
        }, {
          "free-mode": r.freeMode
        }, {
          autoheight: r.autoHeight
        }, {
          rtl: n
        }, {
          multirow: r.slidesPerColumn > 1
        }, {
          "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
        }, {
          android: o.android
        }, {
          ios: o.ios
        }, {
          "css-mode": r.cssMode
        }], t = r.containerModifierClass, a = [], e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
            e[i] && a.push(t + i);
          }) : "string" == typeof e && a.push(t + e);
        }), a);
        s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this,
            t = e.$el,
            a = e.classNames;
        t.removeClass(a.join(" ")), e.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, a, i, s, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      F = {},
      _ = function () {
    function t() {
      for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) {
        s[r] = arguments[r];
      }

      if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = S({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
        var n = [];
        return m(a.el).each(function (e) {
          var i = S({}, a, {
            el: e
          });
          n.push(new t(i));
        }), n;
      }

      var l = this;
      l.__swiper__ = !0, l.support = k(), l.device = $({
        userAgent: a.userAgent
      }), l.browser = L(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != _typeof(s) || null === s) return;
          if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
            auto: !0
          }), !(i in a) || !("enabled" in s)) return;
          !0 === a[i] && (a[i] = {
            enabled: !0
          }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
            enabled: !1
          });
        }
      });
      var o,
          d,
          p = S({}, V);
      return l.useParams(p), l.params = S({}, p, F, a), l.originalParams = S({}, l.params), l.passedParams = S({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, S(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: m(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === l.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === l.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
          start: o[0],
          move: o[1],
          end: o[2],
          cancel: o[3]
        }, l.touchEventsDesktop = {
          start: d[0],
          move: d[1],
          end: d[2]
        }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: x(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
    }

    var a,
        i,
        s,
        n = t.prototype;
    return n.enable = function () {
      var e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }, n.disable = function () {
      var e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }, n.setProgress = function (e, t) {
      var a = this;
      e = Math.min(Math.max(e, 0), 1);
      var i = a.minTranslate(),
          s = (a.maxTranslate() - i) * e + i;
      a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses();
    }, n.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, n.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, n.emitSlidesClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = [];
        e.slides.each(function (a) {
          var i = e.getSlideClasses(a);
          t.push({
            slideEl: a,
            classNames: i
          }), e.emit("_slideClass", a, i);
        }), e.emit("_slideClasses", t);
      }
    }, n.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;

      if (t.centeredSlides) {
        for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
          a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
        }

        for (var p = r - 1; p >= 0; p -= 1) {
          a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
        }
      } else for (var u = r + 1; u < a.length; u += 1) {
        i[u] - i[r] < s && (n += 1);
      }

      return n;
    }, n.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            a = e.params;
        a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function i() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, n.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), a.emit("changeDirection"), t && a.update()), a;
    }, n.mount = function (e) {
      var t = this;
      if (t.mounted) return !0;
      var a = m(e || t.params.el);
      if (!(e = a[0])) return !1;
      e.swiper = t;

      var i = function i() {
        return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
      },
          s = function () {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          var t = m(e.shadowRoot.querySelector(i()));
          return t.children = function (e) {
            return a.children(e);
          }, t;
        }

        return a.children(i());
      }();

      if (0 === s.length && t.params.createElements) {
        var n = r().createElement("div");
        s = m(n), n.className = t.params.wrapperClass, a.append(n), a.children("." + t.params.slideClass).each(function (e) {
          s.append(e);
        });
      }

      return S(t, {
        $el: a,
        el: e,
        $wrapperEl: s,
        wrapperEl: s[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
        wrongRTL: "-webkit-box" === s.css("display")
      }), !0;
    }, n.init = function (e) {
      var t = this;
      return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
    }, n.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var a,
          i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          l = i.slides;
      return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function (e) {
        try {
          a[e] = null;
        } catch (e) {}

        try {
          delete a[e];
        } catch (e) {}
      })), i.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(F, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[a] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, a = t, s = [{
      key: "extendedDefaults",
      get: function get() {
        return F;
      }
    }, {
      key: "defaults",
      get: function get() {
        return V;
      }
    }], (i = null) && e(a.prototype, i), s && e(a, s), t;
  }();

  Object.keys(W).forEach(function (e) {
    Object.keys(W[e]).forEach(function (t) {
      _.prototype[t] = W[e][t];
    });
  }), _.use([I, A]);
  var q = {
    update: function update(e) {
      var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          b,
          w = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
      var y = Math.max((w || 0) - b, 0),
          E = Math.min((w || 0) + g, c.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), p === y && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          for (var e = [], t = y; t <= E; t += 1) {
            e.push(c[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = p; z <= u; z += 1) {
        (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < c.length; P += 1) {
        P >= y && P <= E && (void 0 === u || e ? M.push(P) : (P > u && M.push(P), P < p && C.push(P)));
      }

      M.forEach(function (e) {
        t.$wrapperEl.append(v(c[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(c[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var a = this,
          i = a.params.virtual;
      if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      var t = this;
      if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
        e[a] && t.virtual.slides.push(e[a]);
      } else t.virtual.slides.push(e);
      t.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }

        i = a + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var n = t.virtual.cache,
            l = {};
        Object.keys(n).forEach(function (e) {
          var t = n[e],
              a = t.attr("data-swiper-slide-index");
          a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
        }), t.virtual.cache = l;
      }

      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;

      if (null != e) {
        var a = t.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
        t.virtual.update(!0), t.slideTo(a, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  },
      j = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      M(this, {
        virtual: t({}, q, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      U = {
    handle: function handle(e) {
      var t = this;

      if (t.enabled) {
        var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
        n.originalEvent && (n = n.originalEvent);
        var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
        if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;

        if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
            var m = !1;
            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var g = t.$el,
                b = g[0].clientWidth,
                w = g[0].clientHeight,
                y = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
            s && (x.left -= t.$el[0].scrollLeft);

            for (var T = [[x.left, x.top], [x.left + b, x.top], [x.left, x.top + w], [x.left + b, x.top + w]], C = 0; C < T.length; C += 1) {
              var S = T[C];

              if (S[0] >= 0 && S[0] <= y && S[1] >= 0 && S[1] <= E) {
                if (0 === S[0] && 0 === S[1]) continue;
                m = !0;
              }
            }

            if (!m) return;
          }

          t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
        }
      }
    },
    enable: function enable() {
      var e = this,
          t = r();
      e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = this,
          t = r();
      e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
    }
  },
      K = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      M(this, {
        keyboard: t({
          enabled: !1
        }, U)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var Z = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = "onwheel",
            a = (t in e);

        if (!a) {
          var i = e.createElement("div");
          i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
        }

        return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          a = 0,
          i = 0,
          s = 0;
      return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: a,
        pixelX: i,
        pixelY: s
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.enabled && (this.mouseEntered = !0);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.enabled && (this.mouseEntered = !1);
    },
    handle: function handle(e) {
      var t = e,
          a = this;

      if (a.enabled) {
        var i = a.params.mousewheel;
        a.params.cssMode && t.preventDefault();
        var s = a.$el;
        if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = Z.normalize(t);
        if (i.forceToAxis) {
          if (a.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        i.invert && (r = -r);
        var o = a.getTranslate() + r * i.sensitivity;

        if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
          var d = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r)
          },
              p = a.mousewheel.lastEventBeforeSnap,
              u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;

          if (!u) {
            a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
            var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;

            if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
              clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
              var f = a.mousewheel.recentWheelEvents;
              f.length >= 15 && f.shift();
              var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
              if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
                var w = r > 0 ? .8 : .2;
                a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E(function () {
                  a.slideToClosest(a.params.speed, !0, void 0, w);
                }, 0);
              }
              a.mousewheel.timeout || (a.mousewheel.timeout = E(function () {
                a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
              }, 500));
            }

            if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
          }
        } else {
          var y = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r),
            raw: e
          },
              T = a.mousewheel.recentWheelEvents;
          T.length >= 2 && T.shift();
          var C = T.length ? T[T.length - 1] : void 0;
          if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0;
        }

        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      }
    },
    animateSlider: function animateSlider(e) {
      var t = this,
          a = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this,
          a = t.params.mousewheel;

      if (e.direction < 0) {
        if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
      } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = this,
          t = Z.event();
      if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this,
          t = Z.event();
      if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (!e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  },
      J = {
    toggleEl: function toggleEl(e, t) {
      e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
    },
    update: function update() {
      var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;

      if (!e.params.loop) {
        var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
        r && r.length > 0 && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      var t = this;
      e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var t = this;
      e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
    },
    init: function init() {
      var e,
          t,
          a = this,
          i = a.params.navigation;
      (a.params.navigation = P(a.$el, a.params.navigation, a.params.createElements, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), S(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
    },
    destroy: function destroy() {
      var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
      a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  },
      Q = {
    update: function update() {
      var e = this,
          t = e.rtl,
          a = e.params.pagination;

      if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var i,
            s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
          var l,
              o,
              d,
              p = e.pagination.bullets;
          if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
            var t = m(e),
                s = t.index();
            s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
          });else {
            var u = p.eq(i),
                c = u.index();

            if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
              for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) {
                p.eq(f).addClass(a.bulletActiveClass + "-main");
              }

              if (e.params.loop) {
                if (c >= p.length - a.dynamicMainBullets) {
                  for (var g = a.dynamicMainBullets; g >= 0; g -= 1) {
                    p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                  }

                  p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
            }
          }

          if (a.dynamicBullets) {
            var b = Math.min(p.length, a.dynamicMainBullets + 4),
                w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                y = t ? "right" : "left";
            p.css(e.isHorizontal() ? y : "top", w + "px");
          }
        }

        if ("fraction" === a.type && (r.find(z(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(z(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
          var E;
          E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          var x = (i + 1) / n,
              T = 1,
              C = 1;
          "horizontal" === E ? T = x : C = x, r.find(z(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed);
        }

        "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
      }
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";

        if ("bullets" === t.type) {
          var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          e.params.freeMode && !e.params.loop && r > a && (r = a);

          for (var n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }

          i.html(s), e.pagination.bullets = i.find(z(t.bulletClass));
        }

        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this;
      e.params.pagination = P(e.$el, e.params.pagination, e.params.createElements, {
        el: "swiper-pagination"
      });
      var t = e.params.pagination;

      if (t.el) {
        var a = m(t.el);
        0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", z(t.bulletClass), function (t) {
          t.preventDefault();
          var a = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (a += e.loopedSlides), e.slideTo(a);
        }), S(e.pagination, {
          $el: a,
          el: a[0]
        }), e.enabled || a.addClass(t.lockClass));
      }
    },
    destroy: function destroy() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;
        a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", z(t.bulletClass));
      }
    }
  },
      ee = {
    setTranslate: function setTranslate() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
        a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          l[0].style.opacity = 0, l.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      var t = this;
      t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
        a[0].style.width = "", a[0].style.height = "";
        var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
        s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), S(t, {
          trackSize: r,
          divider: n,
          moveDivider: l,
          dragSize: s
        }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
      t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
      t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
      t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E(function () {
        r.css("opacity", 0), r.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    disableDraggable: function disableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    init: function init() {
      var e = this,
          t = e.scrollbar,
          a = e.$el;
      e.params.scrollbar = P(a, e.params.scrollbar, e.params.createElements, {
        el: "swiper-scrollbar"
      });
      var i = e.params.scrollbar;

      if (i.el) {
        var s = m(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
        var r = s.find("." + e.params.scrollbar.dragClass);
        0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), S(t, {
          $el: s,
          el: s[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      te = {
    setTransform: function setTransform(e, t) {
      var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p;
      }

      if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var u = o - (o - 1) * (1 - Math.abs(t));
        i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, i);
      }), a.each(function (t, a) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var a = m(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (i = 0), a.transition(i);
      });
    }
  },
      ae = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, r.scaleStart = ae.getDistanceBetweenTouches(e);
      }

      r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (!a.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, r.scaleMove = ae.getDistanceBetweenTouches(e);
      }

      r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;

      if (!i.gestures) {
        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
      }

      n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var n = s.width * a.scale,
            l = s.height * a.scale;

        if (!(n < i.slideWidth && l < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
        0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
        var p = Math.max(s, r);
        a.currentX = l, a.currentY = d;
        var u = a.width * e.scale,
            c = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this,
          t = e.zoom,
          a = t.gesture;
      a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e);
    },
    in: function _in(e) {
      var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          g,
          b,
          w = this,
          y = l(),
          E = w.zoom,
          x = w.params.zoom,
          T = E.gesture,
          C = E.image;
      (T.$slideEl || (e && e.target && (T.$slideEl = m(e.target).closest("." + w.params.slideClass)), T.$slideEl || (w.params.virtual && w.params.virtual.enabled && w.virtual ? T.$slideEl = w.$wrapperEl.children("." + w.params.slideActiveClass) : T.$slideEl = w.slides.eq(w.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, a = C.touchesStart.y), E.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, E.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (g = T.$slideEl[0].offsetWidth, b = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + y.scrollX + g / 2 - t, s = T.$slideEl.offset().top + y.scrollY + b / 2 - a, o = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, p = o * E.scale, u = d * E.scale, v = -(c = Math.min(g / 2 - p / 2, 0)), f = -(h = Math.min(b / 2 - u / 2, 0)), (r = i * E.scale) < c && (r = c), r > v && (r = v), (n = s * E.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E.scale + ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
      i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
      t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this,
          t = e.support,
          a = e.zoom;

      if (!a.enabled) {
        a.enabled = !0;
        var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;

      if (t.enabled) {
        var a = e.support;
        e.zoom.enabled = !1;
        var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !a.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
      }
    }
  },
      ie = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.lazy;

      if (void 0 !== e && 0 !== a.slides.length) {
        var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
            r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
        !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(i.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              p = r.parent("picture");
          a.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != a && a && (!a || a.params) && !a.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
                var e = s.attr("data-swiper-slide-index");

                if (s.hasClass(a.params.slideDuplicateClass)) {
                  var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                  a.lazy.loadInSlide(u.index(), !1);
                } else {
                  var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  a.lazy.loadInSlide(c.index(), !1);
                }
              }

              a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
            }
          }), a.emit("lazyImageLoad", s[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (i[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
        var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = s; p < s + l; p += 1) {
        o(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(s);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < s; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + a.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(d(b));
        var w = t.children("." + a.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
      }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
      var e = l(),
          t = this;

      if (t && !t.destroyed) {
        var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
        t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);

        for (var d = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], p = 0; p < d.length; p += 1) {
          var u = d[p];

          if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
            if (0 === u[0] && 0 === u[1]) continue;
            o = !0;
          }
        }

        var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, c));
      }
    }
  },
      se = {
    LinearSpline: function LinearSpline(e, t) {
      var a,
          i,
          s,
          r,
          n,
          l = function l(e, t) {
        for (i = -1, a = e.length; a - i > 1;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }

        return a;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new se.LinearSpline(t.slidesGrid, e.slidesGrid) : new se.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;

      function l(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;

      function n(t) {
        t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) {
        r[a] !== t && r[a] instanceof s && n(r[a]);
      } else r instanceof s && t !== r && n(r);
    }
  },
      re = {
    getRandomNumber: function getRandomNumber(e) {
      void 0 === e && (e = 16);
      return "x".repeat(e).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      });
    },
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElRoleDescription: function addElRoleDescription(e, t) {
      return e.attr("aria-roledescription", t), e;
    },
    addElControls: function addElControls(e, t) {
      return e.attr("aria-controls", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    addElId: function addElId(e, t) {
      return e.attr("id", t), e;
    },
    addElLive: function addElLive(e, t) {
      return e.attr("aria-live", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
      if (13 === e.keyCode || 32 === e.keyCode) {
        var t = this,
            a = t.params.a11y,
            i = m(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(z(t.params.pagination.bulletClass)) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      var e = this;

      if (!e.params.loop && e.navigation) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
        var i = m(a);
        e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
      });
    },
    init: function init() {
      var e = this,
          t = e.params.a11y;
      e.$el.append(e.a11y.liveRegion);
      var a = e.$el;
      t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
      var i,
          s,
          r = e.$wrapperEl,
          n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      e.a11y.addElId(r, n), e.a11y.addElLive(r, l), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole), e.slides.each(function (a) {
        var i = m(a),
            s = t.slideLabelMessage.replace(/\{\{index\}\}/, i.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
        e.a11y.addElLabel(i, s);
      }), e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), i && i.length && (e.a11y.makeElFocusable(i), "BUTTON" !== i[0].tagName && (e.a11y.addElRole(i, "button"), i.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(i, t.nextSlideMessage), e.a11y.addElControls(i, n)), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.prevSlideMessage), e.a11y.addElControls(s, n)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", z(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
    },
    destroy: function destroy() {
      var e,
          t,
          a = this;
      a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", z(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey);
    }
  },
      ne = {
    init: function init() {
      var e = this,
          t = l();

      if (e.params.history) {
        if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var a = e.history;
        a.initialized = !0, a.paths = ne.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      var e = this;
      e.history.paths = ne.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var a = this,
          i = l();

      if (a.history.initialized && a.params.history.enabled) {
        var s;
        s = a.params.url ? new URL(a.params.url) : i.location;
        var r = a.slides.eq(t),
            n = ne.slugify(r.attr("data-history"));

        if (a.params.history.root.length > 0) {
          var o = a.params.history.root;
          "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), n = o + "/" + e + "/" + n;
        } else s.pathname.includes(e) || (n = e + "/" + n);

        var d = i.history.state;
        d && d.value === n || (a.params.history.replaceState ? i.history.replaceState({
          value: n
        }, null, n) : i.history.pushState({
          value: n
        }, null, n));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, a) {
      var i = this;
      if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);

        if (ne.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var l = n.index();
          i.slideTo(l, e, a);
        }
      } else i.slideTo(0, e, a);
    }
  },
      le = {
    onHashCange: function onHashCange() {
      var e = this,
          t = r();
      e.emit("hashChange");
      var a = t.location.hash.replace("#", "");

      if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
        if (void 0 === i) return;
        e.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = this,
          t = l(),
          a = r();
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");else {
        var i = e.slides.eq(e.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        a.location.hash = s || "", e.emit("hashSet");
      }
    },
    init: function init() {
      var e = this,
          t = r(),
          a = l();

      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        var i = t.location.hash.replace("#", "");
        if (i) for (var s = 0, n = e.slides.length; s < n; s += 1) {
          var o = e.slides.eq(s);

          if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
            var d = o.index();
            e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
          }
        }
        e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      oe = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
      }, a);
    },
    start: function start() {
      var e = this;
      return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    },
    stop: function stop() {
      var e = this;
      return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
      }) : (t.autoplay.paused = !1, t.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = this,
          t = r();
      "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var t = this;
      t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
      }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
    },
    onMouseEnter: function onMouseEnter() {
      var e = this;
      e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
      });
    },
    onMouseLeave: function onMouseLeave() {
      var e = this;
      e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run());
    },
    attachMouseEvents: function attachMouseEvents() {
      var e = this;
      e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
    },
    detachMouseEvents: function detachMouseEvents() {
      var e = this;
      e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
    }
  },
      de = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        var r = 0;
        e.isHorizontal() || (r = s, s = 0);
        var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: n
        }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.$wrapperEl;

      if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
        var s = !1;
        a.transitionEnd(function () {
          if (!s && t && !t.destroyed) {
            s = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              i.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      pe = {
    setTranslate: function setTranslate() {
      var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
      p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));

      for (var v = 0; v < s.length; v += 1) {
        var f = s.eq(v),
            g = v;
        c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
        var b = 90 * g,
            w = Math.floor(b / 360);
        l && (b = -b, w = Math.floor(-b / 360));
        var y = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
        g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
        var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";

        if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
          var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
        "transform-origin": "50% 50% -" + o / 2 + "px"
      }), p.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
            k = p.shadowScale,
            $ = p.shadowScale / P,
            L = p.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / $ + "px) rotateX(-90deg)");
      }
      var I = d.isSafari || d.isWebView ? -o / 2 : 0;
      i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.$el;
      t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
    }
  },
      ue = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i),
            r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;

        if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
        }

        s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;

      if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        a.eq(i).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              s.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      ce = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
        var h = i.eq(u),
            v = s[u],
            f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            w = -p * Math.abs(f),
            y = r.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
        var E = n ? 0 : y * f,
            x = n ? y * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
        Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
        var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";

        if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
          var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
              M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      he = {
    init: function init() {
      var e = this,
          t = e.params.thumbs;
      if (e.thumbs.initialized) return !1;
      e.thumbs.initialized = !0;
      var a = e.constructor;
      return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, S(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(t.swiper) && (e.thumbs.swiper = new a(S({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;

      if (t) {
        var a = t.clickedIndex,
            i = t.clickedSlide;

        if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;

          if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
          }

          e.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this,
          a = t.thumbs.swiper;

      if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;

        if (t.realIndex !== a.realIndex || r) {
          var n,
              l,
              o = a.activeIndex;

          if (a.params.loop) {
            a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
            var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? a.params.slidesPerGroup > 1 ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
          } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";

          r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0));
        }

        var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < u; h += 1) {
          a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
        } else for (var v = 0; v < u; v += 1) {
          a.slides.eq(t.realIndex + v).addClass(c);
        }
      }
    }
  },
      ve = [j, K, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: Z.enable,
          disable: Z.disable,
          handle: Z.handle,
          handleMouseEnter: Z.handleMouseEnter,
          handleMouseLeave: Z.handleMouseLeave,
          animateSlider: Z.animateSlider,
          releaseScroll: Z.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      M(this, {
        navigation: t({}, J)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      "enable disable": function enableDisable(e) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
      },
      click: function click(e, t) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl,
            r = t.target;

        if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
          if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
          var n;
          i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
        }
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Q)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      "enable disable": function enableDisable(e) {
        var t = e.pagination.$el;
        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
      },
      click: function click(e, t) {
        var a = t.target;

        if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
          if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
          !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
        }
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, ee)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      "enable disable": function enableDisable(e) {
        var t = e.scrollbar.$el;
        t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      M(this, {
        parallax: t({}, te)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this;
      M(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ae)
      });
      var a = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return a;
        },
        set: function set(t) {
          if (a !== t) {
            var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, i, s);
          }

          a = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, ie)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        var t = e.params,
            a = t.lazy,
            i = t.cssMode,
            s = t.watchSlidesVisibility,
            r = t.watchSlidesProgress,
            n = t.touchReleaseOnEdges,
            l = t.resistanceRatio;
        a.enabled && (i || (s || r) && (n || 0 === l)) && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, se)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, a) {
        e.controller.control && e.controller.setTranslate(t, a);
      },
      setTransition: function setTransition(e, t, a) {
        e.controller.control && e.controller.setTransition(t, a);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    },
    create: function create() {
      M(this, {
        a11y: t({}, re, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      afterInit: function afterInit(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      M(this, {
        history: t({}, ne)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, le)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    },
    create: function create() {
      M(this, {
        autoplay: t({}, oe, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, a) {
        e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      M(this, {
        fadeEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      M(this, {
        cubeEffect: t({}, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      M(this, {
        flipEffect: t({}, ue)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      M(this, {
        coverflowEffect: t({}, ce)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, he)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var a = e.thumbs.swiper;
        a && a.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return _.use(ve), _;
});
"use strict";

window.addEventListener('load', function () {
  var teamSlider = document.querySelector('.team__slider ');

  if (teamSlider) {
    new Swiper(teamSlider, {
      slidesPerView: 1.2,
      spaceBetween: 30,
      watchOverflow: true,
      pagination: {
        clickable: true,
        el: ".team__pagination"
      },
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2.6
        },
        640: {
          slidesPerView: 2.2
        },
        480: {
          slidesPerView: 1.8
        }
      }
    });
  }

  var newsSlider = document.querySelector('.news__slider ');

  if (newsSlider) {
    new Swiper(newsSlider, {
      slidesPerView: 1.2,
      spaceBetween: 30,
      watchOverflow: true,
      pagination: {
        clickable: true,
        el: ".news__pagination"
      },
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2.6
        },
        640: {
          slidesPerView: 2.2
        },
        480: {
          slidesPerView: 1.8
        }
      }
    });
  }
});
"use strict";
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var formPhone = document.querySelector(".form__phone");

  if (formPhone) {
    var phoneMask = new Inputmask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    phoneMask.mask(formPhone);
  }
});
"use strict";
"use strict";

window.addEventListener('load', function () {
  var galleryLin = $('a.swiper-slide:not(.swiper-slide-duplicate)');

  if (galleryLin.length) {
    galleryLin.fancybox({
      selector: 'a.gallery__item.swiper-slide:not(.swiper-slide-duplicate)',
      backFocus: false,
      mobile: {
        dblclickSlide: false,
        clickSlide: "close"
      },
      buttons: ["close"]
    });
    $(document).on('click', '.gallery__item.swiper-slide-duplicate', function (e) {
      $('a.gallery__item.swiper-slide:not(.swiper-slide-duplicate)').eq(($(e.currentTarget).attr("data-swiper-slide-index") || 0) % $('a.gallery__item.swiper-slide:not(.swiper-slide-duplicate)').length).trigger("click.fb-start", {
        $trigger: $(this)
      });
      return false;
    });
  }

  var gallerySlider = document.querySelector('.gallery__slider');

  if (gallerySlider) {
    new Swiper(gallerySlider, {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1.1,
      watchOverflow: true,
      loopAdditionalSlides: 2,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 4,
        slideShadows: false
      },
      pagination: {
        clickable: true,
        el: ".gallery__pagination"
      },
      navigation: {
        nextEl: ".gallery__btn_next",
        prevEl: ".gallery__btn_prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 1.8
        },
        768: {
          slidesPerView: 1.5
        },
        480: {
          slidesPerView: 1.3
        }
      }
    });
  }
});
"use strict";

$(function () {
  //ie ?????????????? ????????????
  var ie11Styles = ['msTextCombineHorizontal'];
  var s = document.body.style,
      brwoser = null,
      property;

  for (var i = 0; i < ie11Styles.length; i++) {
    property = ie11Styles[i];

    if (s[property] != undefined) {
      brwoser = "ie11";
      $('body').addClass('ie11');
    }
  } //ie ?????????????? ??????????


  var textarea = document.querySelectorAll('textarea');

  if (textarea.length) {
    textarea.forEach(function (el) {
      el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
      el.classList.add('auto');
      el.addEventListener('input', function (e) {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      });
    });
  } //    lang ???????? ????????????


  var langBtn = $('.lang__btn');

  if (langBtn.length) {
    langBtn.on('click', function () {
      $(this).next().slideToggle();
    });
  } //    lang ???????? ??????????
  //
  //     var scene = document.getElementById('parallax');
  //     var parallaxInstance = new Parallax(scene, {
  //         relativeInput: true
  //     });
  // var hero = document.querySelector('.hero');
  // var hero  = new Parallax(hero);
  // $(document).click(function () {
  //     bg.destroy();
  // });
  // if(hero) {
  //    var heroText = document.querySelector('.hero__text');
  //     new Parallax(hero);
  //     new Parallax(heroText);
  // }


  screenHeight();

  function screenHeight() {
    // if ($(window).width() < 767.99) {
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px'); // }
  }

  $('.mobile-menu').on('click', screenHeight);
  $(window).on('resize', screenHeight);
  $('.scroll-to').on('click', function (e) {
    e.preventDefault();
    var el = $(this);
    var dest = el.attr('href');

    if (dest !== undefined && dest !== '') {
      $('html').animate({
        scrollTop: $(dest).offset().top
      }, 500);
    }

    return false;
  });
});
"use strict";
"use strict";

window.addEventListener('load', function () {
  var houseSlider = document.querySelector('.house__slider');

  if (houseSlider) {
    new Swiper(houseSlider, {
      slidesPerView: 1,
      watchOverflow: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        clickable: true,
        el: ".house__pagination"
      },
      navigation: {
        nextEl: ".house__btn_next",
        prevEl: ".house__btn_prev"
      }
    });
  }

  var houseGallery = $('.house__slider-item');

  if (houseGallery.length) {
    houseGallery.fancybox({
      backFocus: false,
      mobile: {
        dblclickSlide: false,
        clickSlide: "close"
      },
      buttons: ["close"]
    });
  }
});
"use strict";

window.addEventListener('load', function () {
  var heroSlider = document.querySelector('.hero');

  if (heroSlider) {
    var addZero = function addZero(num) {
      return num > 9 ? num : '0' + num;
    };

    new Swiper(heroSlider, {
      slidesPerView: 1,
      watchOverflow: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".hero__pagination",
        type: "fraction",
        formatFractionCurrent: addZero
      },
      navigation: {
        nextEl: ".hero__btn_next",
        prevEl: ".hero__btn_prev"
      }
    });
  }

  var villageSliders = document.querySelectorAll('.village__slider');

  if (villageSliders.length) {
    villageSliders.forEach(function (item) {
      new Swiper(item, {
        slidesPerView: 1,
        watchOverflow: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          clickable: true,
          el: ".village__pagination"
        },
        navigation: {
          nextEl: ".village__btn_next",
          prevEl: ".village__btn_prev"
        }
      });
    });
  }

  var advantagesSlider = document.querySelector('.advantages__content ');

  if (advantagesSlider) {
    new Swiper(advantagesSlider, {
      slidesPerView: 1.2,
      spaceBetween: 25,
      watchOverflow: true,
      breakpoints: {
        1100: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 3.5
        },
        960: {
          slidesPerView: 3.1
        },
        768: {
          slidesPerView: 2.8
        },
        640: {
          slidesPerView: 2.2
        },
        480: {
          slidesPerView: 1.6
        }
      }
    });
  }
});
"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  // ????????
  var Tabs = /*#__PURE__*/function () {
    function Tabs($wrapper) {
      var tabActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transitionTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Tabs);

      this.tabsMenu = Array.prototype.slice.call($wrapper.querySelector('.tabs__menu').children);
      this.tabActive = tabActive;
      this.tabsContent = Array.prototype.slice.call($wrapper.querySelector('.tabs__content').children);
      this.transitionTime = transitionTime;
    }

    _createClass(Tabs, [{
      key: "activeStartTab",
      value: function activeStartTab() {
        if (this.tabActive > this.tabsMenu.length) {
          this.tabActive = this.tabsMenu.length - 1;
        }

        if (this.tabActive < 0) {
          this.tabActive = 0;
        }

        this.tabsMenu[this.tabActive].classList.add('is-active');
        this.tabsContent[this.tabActive].style.display = 'block';
      }
    }, {
      key: "activeTab",
      value: function activeTab(index) {
        this.removeActiveTab();
        this.tabsMenu[index].classList.add('is-active');
        this.tabsContent[index].style.display = 'block';
      }
    }, {
      key: "removeActiveTab",
      value: function removeActiveTab() {
        this.tabsMenu.forEach(function (item) {
          item.classList.remove('is-active');
        });
        this.tabsContent.forEach(function (item) {
          item.removeAttribute('style');
        });
      }
    }, {
      key: "showTab",
      value: function showTab() {
        var _this = this;

        var addEvent = function addEvent() {
          _this.tabsMenu.forEach(function (item, index) {
            item.addEventListener('click', _this.activeTab.bind(_this, index));
          });
        }; //
        // let removeEvent = () => {
        //     this.tabsMenu.forEach( (item, index) => {
        //         item.removeEventListener('click', this.activeTab.bind(this, index))
        //     });
        // }
        // function tabsInit(flagTabs) {
        //     if (flagTabs.matches) {


        addEvent(this); //     } else {
        //         removeEvent(this)
        //     }
        // }
        //
        // var flagTabs = window.matchMedia("screen and (min-width: 768px)");
        //
        // flagTabs.addListener(tabsInit);
        // tabsInit(flagTabs);
      }
    }, {
      key: "run",
      value: function run() {
        this.activeStartTab();
        this.showTab();
      }
    }]);

    return Tabs;
  }(); // ?????????????????????????? ??????????


  var tabs = document.querySelectorAll('.tabs');

  if (tabs.length) {
    tabs.forEach(function (item) {
      return new Tabs(item).run();
    });
  } // const tables = document.querySelectorAll('.init-table');
  // if (tables.length) {
  //    $('.init-table').DataTable({
  //         paging: false,
  //         info: false,
  //         searching: false
  //     })
  // }

});