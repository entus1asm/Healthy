(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function i(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var n = (t[s] = { exports: {} });
    return e[s](n, n.exports, i), n.exports;
  }
  (() => {
    "use strict";
    let e = !0,
      t = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      s = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      };
    function r(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function n(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i]);
      });
    }
    const l = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function o() {
      const e = "undefined" != typeof document ? document : {};
      return n(e, l), e;
    }
    const a = {
      document: l,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function c() {
      const e = "undefined" != typeof window ? window : {};
      return n(e, a), e;
    }
    function d(e, t = 0) {
      return setTimeout(e, t);
    }
    function p() {
      return Date.now();
    }
    function u(e, t = "x") {
      const i = c();
      let s, r, n;
      const l = (function (e) {
        const t = c();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((r = l.transform || l.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new i.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((n =
              l.MozTransform ||
              l.OTransform ||
              l.MsTransform ||
              l.msTransform ||
              l.transform ||
              l
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = n.toString().split(","))),
        "x" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (r = i.WebKitCSSMatrix
            ? n.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        r || 0
      );
    }
    function h(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function f(...e) {
      const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < e.length; r += 1) {
        const n = e[r];
        if (
          null != n &&
          ((s = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const e = Object.keys(Object(n)).filter((e) => i.indexOf(e) < 0);
          for (let i = 0, s = e.length; i < s; i += 1) {
            const s = e[i],
              r = Object.getOwnPropertyDescriptor(n, s);
            void 0 !== r &&
              r.enumerable &&
              (h(t[s]) && h(n[s])
                ? n[s].__swiper__
                  ? (t[s] = n[s])
                  : f(t[s], n[s])
                : !h(t[s]) && h(n[s])
                ? ((t[s] = {}), n[s].__swiper__ ? (t[s] = n[s]) : f(t[s], n[s]))
                : (t[s] = n[s]));
          }
        }
      }
      var s;
      return t;
    }
    function m(e, t, i) {
      e.style.setProperty(t, i);
    }
    function v({ swiper: e, targetPosition: t, side: i }) {
      const s = c(),
        r = -e.translate;
      let n,
        l = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(e.cssModeFrameID);
      const a = t > r ? "next" : "prev",
        d = (e, t) => ("next" === a && e >= t) || ("prev" === a && e <= t),
        p = () => {
          (n = new Date().getTime()), null === l && (l = n);
          const a = Math.max(Math.min((n - l) / o, 1), 0),
            c = 0.5 - Math.cos(a * Math.PI) / 2;
          let u = r + c * (t - r);
          if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), d(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [i]: u });
              }),
              void s.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = s.requestAnimationFrame(p);
        };
      p();
    }
    function g(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function b(e, t = []) {
      const i = document.createElement(e);
      return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
    }
    function w(e, t) {
      return c().getComputedStyle(e, null).getPropertyValue(t);
    }
    function x(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function y(e, t, i) {
      const s = c();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let E, S, T;
    function M() {
      return (
        E ||
          (E = (function () {
            const e = c(),
              t = o();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        E
      );
    }
    function C(e = {}) {
      return (
        S ||
          (S = (function ({ userAgent: e } = {}) {
            const t = M(),
              i = c(),
              s = i.navigator.platform,
              r = e || i.navigator.userAgent,
              n = { ios: !1, android: !1 },
              l = i.screen.width,
              o = i.screen.height,
              a = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === s;
            let f = "MacIntel" === s;
            return (
              !d &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${o}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              a && !h && ((n.os = "android"), (n.android = !0)),
              (d || u || p) && ((n.os = "ios"), (n.ios = !0)),
              n
            );
          })(e)),
        S
      );
    }
    function O() {
      return (
        T ||
          (T = (function () {
            const e = c();
            let t = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const i = String(e.navigator.userAgent);
              if (i.includes("Version/")) {
                const [e, s] = i
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && s < 2);
              }
            }
            return {
              isSafari: t || i(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        T
      );
    }
    const k = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const r = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][r](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function r(...i) {
          s.off(e, r),
            r.__emitterProxy && delete r.__emitterProxy,
            t.apply(s, i);
        }
        return (r.__emitterProxy = t), s.on(e, r, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, r) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(r, 1);
                  });
            }),
            i)
          : i;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let i, s, r;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (s = e.slice(1, e.length)), (r = t))
          : ((i = e[0].events), (s = e[0].data), (r = e[0].context || t)),
          s.unshift(r);
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(r, [e, ...s]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(r, s);
                });
          }),
          t
        );
      },
    };
    const A = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (i) {
          const t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      L = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      P = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const s =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = r,
            n = [i - t];
          return (
            n.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
            void e.slides.forEach((t, i) => {
              n.includes(t.column) && L(e, i);
            })
          );
        }
        const n = r + s - 1;
        if (e.params.rewind || e.params.loop)
          for (let s = r - t; s <= n + t; s += 1) {
            const t = ((s % i) + i) % i;
            (t < r || t > n) && L(e, t);
          }
        else
          for (let s = Math.max(r - t, 0); s <= Math.min(n + t, i - 1); s += 1)
            s !== r && (s > n || s < r) && L(e, s);
      };
    const z = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(w(s, "padding-left") || 0, 10) -
              parseInt(w(s, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(w(s, "padding-top") || 0, 10) -
              parseInt(w(s, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: r,
            slidesEl: n,
            size: l,
            rtlTranslate: o,
            wrongRTL: a,
          } = e,
          c = e.virtual && s.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          p = g(n, `.${e.params.slideClass}, swiper-slide`),
          u = c ? e.virtual.slides.length : p.length;
        let h = [];
        const f = [],
          v = [];
        let b = s.slidesOffsetBefore;
        "function" == typeof b && (b = s.slidesOffsetBefore.call(e));
        let x = s.slidesOffsetAfter;
        "function" == typeof x && (x = s.slidesOffsetAfter.call(e));
        const E = e.snapGrid.length,
          S = e.slidesGrid.length;
        let T = s.spaceBetween,
          M = -b,
          C = 0,
          O = 0;
        if (void 0 === l) return;
        "string" == typeof T && T.indexOf("%") >= 0
          ? (T = (parseFloat(T.replace("%", "")) / 100) * l)
          : "string" == typeof T && (T = parseFloat(T)),
          (e.virtualSize = -T),
          p.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (m(r, "--swiper-centered-offset-before", ""),
            m(r, "--swiper-centered-offset-after", ""));
        const k = s.grid && s.grid.rows > 1 && e.grid;
        let A;
        k && e.grid.initSlides(u);
        const L =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let r = 0; r < u; r += 1) {
          let n;
          if (
            ((A = 0),
            p[r] && (n = p[r]),
            k && e.grid.updateSlide(r, n, u, t),
            !p[r] || "none" !== w(n, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              L && (p[r].style[t("width")] = "");
              const l = getComputedStyle(n),
                o = n.style.transform,
                a = n.style.webkitTransform;
              if (
                (o && (n.style.transform = "none"),
                a && (n.style.webkitTransform = "none"),
                s.roundLengths)
              )
                A = e.isHorizontal() ? y(n, "width", !0) : y(n, "height", !0);
              else {
                const e = i(l, "width"),
                  t = i(l, "padding-left"),
                  s = i(l, "padding-right"),
                  r = i(l, "margin-left"),
                  o = i(l, "margin-right"),
                  a = l.getPropertyValue("box-sizing");
                if (a && "border-box" === a) A = e + r + o;
                else {
                  const { clientWidth: i, offsetWidth: l } = n;
                  A = e + t + s + r + o + (l - i);
                }
              }
              o && (n.style.transform = o),
                a && (n.style.webkitTransform = a),
                s.roundLengths && (A = Math.floor(A));
            } else
              (A = (l - (s.slidesPerView - 1) * T) / s.slidesPerView),
                s.roundLengths && (A = Math.floor(A)),
                p[r] && (p[r].style[t("width")] = `${A}px`);
            p[r] && (p[r].swiperSlideSize = A),
              v.push(A),
              s.centeredSlides
                ? ((M = M + A / 2 + C / 2 + T),
                  0 === C && 0 !== r && (M = M - l / 2 - T),
                  0 === r && (M = M - l / 2 - T),
                  Math.abs(M) < 0.001 && (M = 0),
                  s.roundLengths && (M = Math.floor(M)),
                  O % s.slidesPerGroup == 0 && h.push(M),
                  f.push(M))
                : (s.roundLengths && (M = Math.floor(M)),
                  (O - Math.min(e.params.slidesPerGroupSkip, O)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(M),
                  f.push(M),
                  (M = M + A + T)),
              (e.virtualSize += A + T),
              (C = A),
              (O += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, l) + x),
          o &&
            a &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (r.style.width = `${e.virtualSize + T}px`),
          s.setWrapperSize && (r.style[t("width")] = `${e.virtualSize + T}px`),
          k && e.grid.updateWrapperSize(A, h, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < h.length; i += 1) {
            let r = h[i];
            s.roundLengths && (r = Math.floor(r)),
              h[i] <= e.virtualSize - l && t.push(r);
          }
          (h = t),
            Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - l);
        }
        if (c && s.loop) {
          const t = v[0] + T;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup
              ),
              r = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + r);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && h.push(h[h.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== T)) {
          const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          p.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1
          ).forEach((e) => {
            e.style[i] = `${T}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          v.forEach((t) => {
            e += t + (T || 0);
          }),
            (e -= T);
          const t = e - l;
          h = h.map((e) => (e <= 0 ? -b : e > t ? t + x : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (v.forEach((t) => {
              e += t + (T || 0);
            }),
            (e -= T),
            e < l)
          ) {
            const t = (l - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              f.forEach((e, i) => {
                f[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: h,
            slidesGrid: f,
            slidesSizesGrid: v,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          m(r, "--swiper-centered-offset-before", -h[0] + "px"),
            m(
              r,
              "--swiper-centered-offset-after",
              e.size / 2 - v[v.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          h.length !== E &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== S && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          u <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let r,
          n = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const l = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !s) break;
              i.push(l(e));
            }
        else i.push(l(t.activeIndex));
        for (r = 0; r < i.length; r += 1)
          if (void 0 !== i[r]) {
            const e = i[r].offsetHeight;
            n = e > n ? e : n;
          }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset =
            (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: r, snapGrid: n } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let l = -e;
        r && (l = e),
          s.forEach((e) => {
            e.classList.remove(i.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let o = i.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0
          ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
          : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < s.length; e += 1) {
          const a = s[e];
          let c = a.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
          const d =
              (l + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + o),
            p =
              (l - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + o),
            u = -(l - c),
            h = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            s[e].classList.add(i.slideVisibleClass)),
            (a.progress = r ? -d : d),
            (a.originalProgress = r ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: n, isEnd: l, progressLoop: o } = t;
        const a = n,
          c = l;
        if (0 === s) (r = 0), (n = !0), (l = !0);
        else {
          r = (e - t.minTranslate()) / s;
          const i = Math.abs(e - t.minTranslate()) < 1,
            o = Math.abs(e - t.maxTranslate()) < 1;
          (n = i || r <= 0), (l = o || r >= 1), i && (r = 0), o && (r = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            s = t.getSlideIndexByData(t.slides.length - 1),
            r = t.slidesGrid[i],
            n = t.slidesGrid[s],
            l = t.slidesGrid[t.slidesGrid.length - 1],
            a = Math.abs(e);
          (o = a >= r ? (a - r) / l : (a + l - n) / l), o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: r,
          progressLoop: o,
          isBeginning: n,
          isEnd: l,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          n && !a && t.emit("reachBeginning toEdge"),
          l && !c && t.emit("reachEnd toEdge"),
          ((a && !n) || (c && !l)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: s, activeIndex: r } = e,
          n = e.virtual && i.virtual.enabled,
          l = (e) => g(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let o;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass
            );
          }),
          n)
        )
          if (i.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (o = l(`[data-swiper-slide-index="${t}"]`));
          } else o = l(`[data-swiper-slide-index="${r}"]`);
        else o = t[r];
        if (o) {
          o.classList.add(i.slideActiveClass);
          let e = (function (e, t) {
            const i = [];
            for (; e.nextElementSibling; ) {
              const s = e.nextElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(o, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
          let s = (function (e, t) {
            const i = [];
            for (; e.previousElementSibling; ) {
              const s = e.previousElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(o, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && 0 === !s && (s = t[t.length - 1]),
            s && s.classList.add(i.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: s,
            params: r,
            activeIndex: n,
            realIndex: l,
            snapIndex: o,
          } = t;
        let a,
          c = e;
        const d = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: i } = e,
                s = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (r = e)
                    : s >= t[e] && s < t[e + 1] && (r = e + 1)
                  : s >= t[e] && (r = e);
              return (
                i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
              );
            })(t)),
          s.indexOf(i) >= 0)
        )
          a = s.indexOf(i);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          a = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((a >= s.length && (a = s.length - 1), c === n))
          return (
            a !== o && ((t.snapIndex = a), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let p;
        (p =
          t.virtual && r.virtual.enabled && r.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: a,
            previousRealIndex: l,
            realIndex: p,
            previousIndex: n,
            activeIndex: c,
          }),
          t.initialized && P(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = e.closest(`.${i.slideClass}, swiper-slide`);
        let r,
          n = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (n = !0), (r = e);
              break;
            }
        if (!s || !n)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                s.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const I = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: i, translate: s, wrapperEl: r } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let n = u(r, e);
        return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: s, params: r, wrapperEl: n, progress: l } = i;
        let o,
          a = 0,
          c = 0;
        i.isHorizontal() ? (a = s ? -e : e) : (c = e),
          r.roundLengths && ((a = Math.floor(a)), (c = Math.floor(c))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? a : c),
          r.cssMode
            ? (n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -a : -c)
            : r.virtualTranslate ||
              (i.isHorizontal()
                ? (a -= i.cssOverflowAdjustment())
                : (c -= i.cssOverflowAdjustment()),
              (n.style.transform = `translate3d(${a}px, ${c}px, 0px)`));
        const d = i.maxTranslate() - i.minTranslate();
        (o = 0 === d ? 0 : (e - i.minTranslate()) / d),
          o !== l && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, r) {
        const n = this,
          { params: l, wrapperEl: o } = n;
        if (n.animating && l.preventInteractionOnTransition) return !1;
        const a = n.minTranslate(),
          c = n.maxTranslate();
        let d;
        if (
          ((d = s && e > a ? a : s && e < c ? c : e),
          n.updateProgress(d),
          l.cssMode)
        ) {
          const e = n.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!n.support.smoothScroll)
              return (
                v({ swiper: n, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (n.setTransition(0),
              n.setTranslate(d),
              i &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionEnd")))
            : (n.setTransition(t),
              n.setTranslate(d),
              i &&
                (n.emit("beforeTransitionStart", t, r),
                n.emit("transitionStart")),
              n.animating ||
                ((n.animating = !0),
                n.onTranslateToWrapperTransitionEnd ||
                  (n.onTranslateToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      (n.onTranslateToWrapperTransitionEnd = null),
                      delete n.onTranslateToWrapperTransitionEnd,
                      i && n.emit("transitionEnd"));
                  }),
                n.wrapperEl.addEventListener(
                  "transitionend",
                  n.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function N({ swiper: e, runCallbacks: t, direction: i, step: s }) {
      const { activeIndex: r, previousIndex: n } = e;
      let l = i;
      if (
        (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        e.emit(`transition${s}`),
        t && r !== n)
      ) {
        if ("reset" === l) return void e.emit(`slideResetTransition${s}`);
        e.emit(`slideChangeTransition${s}`),
          "next" === l
            ? e.emit(`slideNextTransition${s}`)
            : e.emit(`slidePrevTransition${s}`);
      }
    }
    const W = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, s, r) {
        "string" == typeof e && (e = parseInt(e, 10));
        const n = this;
        let l = e;
        l < 0 && (l = 0);
        const {
          params: o,
          snapGrid: a,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: f,
        } = n;
        if (
          (n.animating && o.preventInteractionOnTransition) ||
          (!f && !s && !r)
        )
          return !1;
        const m = Math.min(n.params.slidesPerGroupSkip, l);
        let g = m + Math.floor((l - m) / n.params.slidesPerGroup);
        g >= a.length && (g = a.length - 1);
        const b = -a[g];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * b),
              i = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (l = e)
                : t >= i && t < s && (l = e + 1)
              : t >= i && (l = e);
          }
        if (n.initialized && l !== p) {
          if (
            !n.allowSlideNext &&
            (u
              ? b > n.translate && b > n.minTranslate()
              : b < n.translate && b < n.minTranslate())
          )
            return !1;
          if (
            !n.allowSlidePrev &&
            b > n.translate &&
            b > n.maxTranslate() &&
            (p || 0) !== l
          )
            return !1;
        }
        let w;
        if (
          (l !== (d || 0) && i && n.emit("beforeSlideChangeStart"),
          n.updateProgress(b),
          (w = l > p ? "next" : l < p ? "prev" : "reset"),
          (u && -b === n.translate) || (!u && b === n.translate))
        )
          return (
            n.updateActiveIndex(l),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== o.effect && n.setTranslate(b),
            "reset" !== w && (n.transitionStart(i, w), n.transitionEnd(i, w)),
            !1
          );
        if (o.cssMode) {
          const e = n.isHorizontal(),
            i = u ? b : -b;
          if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t &&
              ((n.wrapperEl.style.scrollSnapType = "none"),
              (n._immediateVirtual = !0)),
              t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                ? ((n._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (n.wrapperEl.style.scrollSnapType = ""),
                    (n._immediateVirtual = !1);
                });
          } else {
            if (!n.support.smoothScroll)
              return (
                v({ swiper: n, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          n.setTransition(t),
          n.setTranslate(b),
          n.updateActiveIndex(l),
          n.updateSlidesClasses(),
          n.emit("beforeTransitionStart", t, s),
          n.transitionStart(i, w),
          0 === t
            ? n.transitionEnd(i, w)
            : n.animating ||
              ((n.animating = !0),
              n.onSlideToWrapperTransitionEnd ||
                (n.onSlideToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    (n.onSlideToWrapperTransitionEnd = null),
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(i, w));
                }),
              n.wrapperEl.addEventListener(
                "transitionend",
                n.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const r = this;
        let n = e;
        return (
          r.params.loop &&
            (r.virtual && r.params.virtual.enabled
              ? (n += r.virtual.slidesBefore)
              : (n = r.getSlideIndexByData(n))),
          r.slideTo(n, t, i, s)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const s = this,
          { enabled: r, params: n, animating: l } = s;
        if (!r) return s;
        let o = n.slidesPerGroup;
        "auto" === n.slidesPerView &&
          1 === n.slidesPerGroup &&
          n.slidesPerGroupAuto &&
          (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : o,
          c = s.virtual && n.virtual.enabled;
        if (n.loop) {
          if (l && !c && n.loopPreventsSliding) return !1;
          s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        return n.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + a, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const s = this,
          {
            params: r,
            snapGrid: n,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: a,
            animating: c,
          } = s;
        if (!a) return s;
        const d = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (c && !d && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(o ? s.translate : -s.translate),
          h = n.map((e) => p(e));
        let f = n[h.indexOf(u) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          n.forEach((t, i) => {
            u >= t && (e = i);
          }),
            void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== f &&
            ((m = l.indexOf(f)),
            m < 0 && (m = s.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((m = m - s.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          r.rewind && s.isBeginning)
        ) {
          const r =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(r, e, t, i);
        }
        return s.slideTo(m, e, t, i);
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
        const r = this;
        let n = r.activeIndex;
        const l = Math.min(r.params.slidesPerGroupSkip, n),
          o = l + Math.floor((n - l) / r.params.slidesPerGroup),
          a = r.rtlTranslate ? r.translate : -r.translate;
        if (a >= r.snapGrid[o]) {
          const e = r.snapGrid[o];
          a - e > (r.snapGrid[o + 1] - e) * s && (n += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[o - 1];
          a - e <= (r.snapGrid[o] - e) * s && (n -= r.params.slidesPerGroup);
        }
        return (
          (n = Math.max(n, 0)),
          (n = Math.min(n, r.slidesGrid.length - 1)),
          r.slideTo(n, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          n = e.clickedIndex;
        const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? n < e.loopedSlides - s / 2 ||
                n > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    g(i, `${l}[data-swiper-slide-index="${r}"]`)[0]
                  )),
                  d(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - s
              ? (e.loopFix(),
                (n = e.getSlideIndex(
                  g(i, `${l}[data-swiper-slide-index="${r}"]`)[0]
                )),
                d(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n);
        } else e.slideTo(n);
      },
    };
    const _ = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        g(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: i,
        setTranslate: s,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = {}) {
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
          slides: a,
          allowSlidePrev: c,
          allowSlideNext: d,
          slidesEl: p,
          params: u,
        } = o;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && u.virtual.enabled)
        )
          return (
            t &&
              (u.centeredSlides || 0 !== o.snapIndex
                ? u.centeredSlides && o.snapIndex < u.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = c),
            (o.allowSlideNext = d),
            void o.emit("loopFix")
          );
        const h =
          "auto" === u.slidesPerView
            ? o.slidesPerViewDynamic()
            : Math.ceil(parseFloat(u.slidesPerView, 10));
        let f = u.loopedSlides || h;
        f % u.slidesPerGroup != 0 &&
          (f += u.slidesPerGroup - (f % u.slidesPerGroup)),
          (o.loopedSlides = f);
        const m = [],
          v = [];
        let g = o.activeIndex;
        void 0 === r
          ? (r = o.getSlideIndex(
              o.slides.filter((e) =>
                e.classList.contains(u.slideActiveClass)
              )[0]
            ))
          : (g = r);
        const b = "next" === i || !i,
          w = "prev" === i || !i;
        let x = 0,
          y = 0;
        if (r < f) {
          x = Math.max(f - r, u.slidesPerGroup);
          for (let e = 0; e < f - r; e += 1) {
            const t = e - Math.floor(e / a.length) * a.length;
            m.push(a.length - t - 1);
          }
        } else if (r > o.slides.length - 2 * f) {
          y = Math.max(r - (o.slides.length - 2 * f), u.slidesPerGroup);
          for (let e = 0; e < y; e += 1) {
            const t = e - Math.floor(e / a.length) * a.length;
            v.push(t);
          }
        }
        if (
          (w &&
            m.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          b &&
            v.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                p.append(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          o.recalcSlides(),
          "auto" === u.slidesPerView && o.updateSlides(),
          u.watchSlidesProgress && o.updateSlidesOffset(),
          t)
        )
          if (m.length > 0 && w)
            if (void 0 === e) {
              const e = o.slidesGrid[g],
                t = o.slidesGrid[g + x] - e;
              l
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(g + x, 0, !1, !0),
                  s &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else s && o.slideToLoop(e, 0, !1, !0);
          else if (v.length > 0 && b)
            if (void 0 === e) {
              const e = o.slidesGrid[g],
                t = o.slidesGrid[g - y] - e;
              l
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(g - y, 0, !1, !0),
                  s &&
                    (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
            } else o.slideToLoop(e, 0, !1, !0);
        if (
          ((o.allowSlidePrev = c),
          (o.allowSlideNext = d),
          o.controller && o.controller.control && !n)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: i,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((e) => {
                !e.destroyed && e.params.loop && e.loopFix(t);
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix(t);
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const s = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          s[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function D(e) {
      const t = this,
        i = o(),
        s = c(),
        r = t.touchEventsData;
      r.evCache.push(e);
      const { params: n, touches: l, enabled: a } = t;
      if (!a) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && n.preventInteractionOnTransition) return;
      !t.animating && n.cssMode && n.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let u = d.target;
      if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(u)) return;
      if ("which" in d && 3 === d.which) return;
      if ("button" in d && d.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const h = !!n.noSwipingClass && "" !== n.noSwipingClass,
        f = e.composedPath ? e.composedPath() : e.path;
      h && d.target && d.target.shadowRoot && f && (u = f[0]);
      const m = n.noSwipingSelector
          ? n.noSwipingSelector
          : `.${n.noSwipingClass}`,
        v = !(!d.target || !d.target.shadowRoot);
      if (
        n.noSwiping &&
        (v
          ? (function (e, t = this) {
              return (function t(i) {
                if (!i || i === o() || i === c()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(e);
                return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
              })(t);
            })(m, u)
          : u.closest(m))
      )
        return void (t.allowClick = !0);
      if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
      (l.currentX = d.pageX), (l.currentY = d.pageY);
      const g = l.currentX,
        b = l.currentY,
        w = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        x = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
      if (w && (g <= x || g >= s.innerWidth - x)) {
        if ("prevent" !== w) return;
        e.preventDefault();
      }
      Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (l.startX = g),
        (l.startY = b),
        (r.touchStartTime = p()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        n.threshold > 0 && (r.allowThresholdMove = !1);
      let y = !0;
      u.matches(r.focusableElements) &&
        ((y = !1), "SELECT" === u.nodeName && (r.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(r.focusableElements) &&
          i.activeElement !== u &&
          i.activeElement.blur();
      const E = y && t.allowTouchMove && n.touchStartPreventDefault;
      (!n.touchStartForcePreventDefault && !E) ||
        u.isContentEditable ||
        d.preventDefault(),
        n.freeMode &&
          n.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !n.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", d);
    }
    function G(e) {
      const t = o(),
        i = this,
        s = i.touchEventsData,
        { params: r, touches: n, rtlTranslate: l, enabled: a } = i;
      if (!a) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", c)
        );
      const d = s.evCache.findIndex((e) => e.pointerId === c.pointerId);
      d >= 0 && (s.evCache[d] = c);
      const u = s.evCache.length > 1 ? s.evCache[0] : c,
        h = u.pageX,
        f = u.pageY;
      if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = f);
      if (!i.allowTouchMove)
        return (
          c.target.matches(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(n, {
              startX: h,
              startY: f,
              prevX: i.touches.currentX,
              prevY: i.touches.currentY,
              currentX: h,
              currentY: f,
            }),
            (s.touchStartTime = p()))
          )
        );
      if (r.touchReleaseOnEdges && !r.loop)
        if (i.isVertical()) {
          if (
            (f < n.startY && i.translate <= i.maxTranslate()) ||
            (f > n.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (h < n.startX && i.translate <= i.maxTranslate()) ||
          (h > n.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        c.target === t.activeElement &&
        c.target.matches(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (n.currentX = h), (n.currentY = f);
      const m = n.currentX - n.startX,
        v = n.currentY - n.startY;
      if (i.params.threshold && Math.sqrt(m ** 2 + v ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && n.currentY === n.startY) ||
        (i.isVertical() && n.currentX === n.startX)
          ? (s.isScrolling = !1)
          : m * m + v * v >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(v), Math.abs(m))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", c),
        void 0 === s.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (s.startMoving = !0)),
        s.isScrolling ||
          (i.zoom &&
            i.params.zoom &&
            i.params.zoom.enabled &&
            s.evCache.length > 1))
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
      let g = i.isHorizontal() ? m : v,
        b = i.isHorizontal()
          ? n.currentX - n.previousX
          : n.currentY - n.previousY;
      r.oneWayMovement &&
        ((g = Math.abs(g) * (l ? 1 : -1)), (b = Math.abs(b) * (l ? 1 : -1))),
        (n.diff = g),
        (g *= r.touchRatio),
        l && ((g = -g), (b = -b));
      const w = i.touchesDirection;
      (i.swipeDirection = g > 0 ? "prev" : "next"),
        (i.touchesDirection = b > 0 ? "prev" : "next");
      const x = i.params.loop && !r.cssMode;
      if (!s.isMoved) {
        if (
          (x && i.loopFix({ direction: i.swipeDirection }),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (s.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", c);
      }
      let y;
      s.isMoved &&
        w !== i.touchesDirection &&
        x &&
        Math.abs(g) >= 1 &&
        (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }),
        (y = !0)),
        i.emit("sliderMove", c),
        (s.isMoved = !0),
        (s.currentTranslate = g + s.startTranslate);
      let E = !0,
        S = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (S = 0),
        g > 0
          ? (x &&
              !y &&
              s.currentTranslate >
                (r.centeredSlides
                  ? i.minTranslate() - i.size / 2
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            s.currentTranslate > i.minTranslate() &&
              ((E = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** S)))
          : g < 0 &&
            (x &&
              !y &&
              s.currentTranslate <
                (r.centeredSlides
                  ? i.maxTranslate() + i.size / 2
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === r.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
              }),
            s.currentTranslate < i.maxTranslate() &&
              ((E = !1),
              r.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** S))),
        E && (c.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(g) > r.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (s.currentTranslate = s.startTranslate),
            void (n.diff = i.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
          r.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        r.freeMode &&
          r.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function V(e) {
      const t = this,
        i = t.touchEventsData,
        s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (s >= 0 && i.evCache.splice(s, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: r,
        touches: n,
        rtlTranslate: l,
        slidesGrid: o,
        enabled: a,
      } = t;
      if (!a) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", c),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      r.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const u = p(),
        h = u - i.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          h < 300 &&
            u - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((i.lastClickTime = p()),
        d(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let f;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (f = r.followFinger
          ? l
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        r.cssMode)
      )
        return;
      if (r.freeMode && r.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: f });
      let m = 0,
        v = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
      ) {
        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        void 0 !== o[e + t]
          ? f >= o[e] && f < o[e + t] && ((m = e), (v = o[e + t] - o[e]))
          : f >= o[e] && ((m = e), (v = o[o.length - 1] - o[o.length - 2]));
      }
      let g = null,
        b = null;
      r.rewind &&
        (t.isBeginning
          ? (b =
              r.virtual && r.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const w = (f - o[m]) / v,
        x = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (h > r.longSwipesMs) {
        if (!r.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (w >= r.longSwipesRatio
            ? t.slideTo(r.rewind && t.isEnd ? g : m + x)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (w > 1 - r.longSwipesRatio
              ? t.slideTo(m + x)
              : null !== b && w < 0 && Math.abs(w) > r.longSwipesRatio
              ? t.slideTo(b)
              : t.slideTo(m));
      } else {
        if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(m + x)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + x),
            "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m));
      }
    }
    function B() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e,
        l = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const o = l && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      o
        ? e.params.loop && !l
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = s),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function H(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function R() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        r !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function j(e) {
      const t = this;
      A(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let F = !1;
    function q() {}
    const $ = (e, t) => {
      const i = o(),
        { params: s, el: r, wrapperEl: n, device: l } = e,
        a = !!s.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      r[c]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[c]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
        i[c]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[c]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          r[c]("click", e.onClick, !0),
        s.cssMode && n[c]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[d](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              B,
              !0
            )
          : e[d]("observerUpdate", B, !0),
        r[c]("load", e.onLoad, { capture: !0 });
    };
    const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Y = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function U(e, t) {
      return function (i = {}) {
        const s = Object.keys(i)[0],
          r = i[s];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in r
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                f(t, i))
              : f(t, i))
          : f(t, i);
      };
    }
    const K = {
        eventsEmitter: k,
        update: z,
        translate: I,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              (i.wrapperEl.style.transitionDuration = `${e}ms`),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              N({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                N({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: _,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = o(),
              { params: i } = e;
            (e.onTouchStart = D.bind(e)),
              (e.onTouchMove = G.bind(e)),
              (e.onTouchEnd = V.bind(e)),
              i.cssMode && (e.onScroll = R.bind(e)),
              (e.onClick = H.bind(e)),
              (e.onLoad = j.bind(e)),
              F || (t.addEventListener("touchstart", q), (F = !0)),
              $(e, "on");
          },
          detachEvents: function () {
            $(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: r } = e,
              n = s.breakpoints;
            if (!n || (n && 0 === Object.keys(n).length)) return;
            const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l) return;
            const o = (l in n ? n[l] : void 0) || e.originalParams,
              a = X(e, s),
              c = X(e, o),
              d = s.enabled;
            a && !c
              ? (r.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !a &&
                c &&
                (r.classList.add(`${s.containerModifierClass}grid`),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === s.grid.fill)) &&
                  r.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === o[t]) return;
                const i = s[t] && s[t].enabled,
                  r = o[t] && o[t].enabled;
                i && !r && e[t].disable(), !i && r && e[t].enable();
              });
            const p = o.direction && o.direction !== s.direction,
              u = s.loop && (o.slidesPerView !== s.slidesPerView || p);
            p && i && e.changeDirection(), f(e.params, o);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !h ? e.disable() : !d && h && e.enable(),
              (e.currentBreakpoint = l),
              e.emit("_beforeBreakpoint", o),
              u && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t = "window", i) {
            if (!e || ("container" === t && !i)) return;
            let s = !1;
            const r = c(),
              n = "window" === t ? r.innerHeight : i.clientHeight,
              l = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: n * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < l.length; e += 1) {
              const { point: n, value: o } = l[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${o}px)`).matches && (s = n)
                : o <= i.clientWidth && (s = n);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: s, el: r, device: n } = e,
              l = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass
              );
            t.push(...l), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      Q = {};
    class Z {
      constructor(...e) {
        let t, i;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (i = e[0])
          : ([t, i] = e),
          i || (i = {}),
          (i = f({}, i)),
          t && !i.el && (i.el = t);
        const s = o();
        if (
          i.el &&
          "string" == typeof i.el &&
          s.querySelectorAll(i.el).length > 1
        ) {
          const e = [];
          return (
            s.querySelectorAll(i.el).forEach((t) => {
              const s = f({}, i, { el: t });
              e.push(new Z(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = M()),
          (r.device = C({ userAgent: i.userAgent })),
          (r.browser = O()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
        const n = {};
        r.modules.forEach((e) => {
          e({
            params: i,
            swiper: r,
            extendParams: U(i, n),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const l = f({}, Y, n);
        return (
          (r.params = f({}, l, Q, i)),
          (r.originalParams = f({}, r.params)),
          (r.passedParams = f({}, i)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          s = x(g(t, `.${i.slideClass}, swiper-slide`)[0]);
        return x(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = g(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          r = (i.maxTranslate() - s) * e + s;
        i.translateTo(r, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: i,
          slides: s,
          slidesGrid: r,
          slidesSizesGrid: n,
          size: l,
          activeIndex: o,
        } = this;
        let a = 1;
        if (i.centeredSlides) {
          let e,
            t = s[o] ? s[o].swiperSlideSize : 0;
          for (let i = o + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (a += 1), t > l && (e = !0));
          for (let i = o - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (a += 1), t > l && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1) {
            (t ? r[e] + n[e] - r[o] < l : r[e] - r[o] < l) && (a += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            r[o] - r[e] < l && (a += 1);
          }
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && A(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          s(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t), i.shadowEl && (t.isElement = !0);
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(s());
          }
          return g(i, s())[0];
        })();
        return (
          !r &&
            t.params.createElements &&
            ((r = b("div", t.params.wrapperClass)),
            i.append(r),
            g(i, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: r,
            slidesEl: t.isElement ? i : r,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === w(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === w(i, "direction")),
            wrongRTL: "-webkit-box" === w(r, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? A(t, e)
                : e.addEventListener("load", (e) => {
                    A(t, e.target);
                  });
            }),
            P(t),
            (t.initialized = !0),
            P(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: s, el: r, wrapperEl: n, slides: l } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              r.removeAttribute("style"),
              n.removeAttribute("style"),
              l &&
                l.length &&
                l.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        f(Q, e);
      }
      static get extendedDefaults() {
        return Q;
      }
      static get defaults() {
        return Y;
      }
      static installModule(e) {
        Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
        const t = Z.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => Z.installModule(e)), Z)
          : (Z.installModule(e), Z);
      }
    }
    Object.keys(K).forEach((e) => {
      Object.keys(K[e]).forEach((t) => {
        Z.prototype[t] = K[e][t];
      });
    }),
      Z.use([
        function ({ swiper: e, on: t, emit: i }) {
          const s = c();
          let r = null,
            n = null;
          const l = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (i("beforeResize"), i("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && i("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((r = new ResizeObserver((t) => {
                  n = s.requestAnimationFrame(() => {
                    const { width: i, height: s } = e;
                    let r = i,
                      n = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: s }) => {
                        (s && s !== e.el) ||
                          ((r = i ? i.width : (t[0] || t).inlineSize),
                          (n = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (r === i && n === s) || l();
                  });
                })),
                r.observe(e.el))
              : (s.addEventListener("resize", l),
                s.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              n && s.cancelAnimationFrame(n),
                r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
                s.removeEventListener("resize", l),
                s.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: i, emit: s }) {
          const r = [],
            n = c(),
            l = (t, i = {}) => {
              const l = new (n.MutationObserver || n.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void s("observerUpdate", t[0]);
                  const i = function () {
                    s("observerUpdate", t[0]);
                  };
                  n.requestAnimationFrame
                    ? n.requestAnimationFrame(i)
                    : n.setTimeout(i, 0);
                }
              );
              l.observe(t, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                r.push(l);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = (function (e, t) {
                    const i = [];
                    let s = e.parentElement;
                    for (; s; )
                      t ? s.matches(t) && i.push(s) : i.push(s),
                        (s = s.parentElement);
                    return i;
                  })(e.el);
                  for (let e = 0; e < t.length; e += 1) l(t[e]);
                }
                l(e.el, { childList: e.params.observeSlideChildren }),
                  l(e.wrapperEl, { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const J = Z;
    function ee({ swiper: e, extendParams: t, on: i, emit: s }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function n(t) {
        let i;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((i = e.el.shadowRoot.querySelector(t)), i)
          ? i
          : (t &&
              ("string" == typeof t && (i = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                i.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (i = e.el.querySelector(t))),
            t && !i ? t : i);
      }
      function l(t, i) {
        const s = e.params.navigation;
        (t = r(t)).forEach((t) => {
          t &&
            (t.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass));
        });
      }
      function o() {
        const { nextEl: t, prevEl: i } = e.navigation;
        if (e.params.loop) return l(i, !1), void l(t, !1);
        l(i, e.isBeginning && !e.params.rewind),
          l(t, e.isEnd && !e.params.rewind);
      }
      function a(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), s("navigationPrev"));
      }
      function c(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), s("navigationNext"));
      }
      function d() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = (function (e, t, i, s) {
            return (
              e.params.createElements &&
                Object.keys(s).forEach((r) => {
                  if (!i[r] && !0 === i.auto) {
                    let n = g(e.el, `.${s[r]}`)[0];
                    n ||
                      ((n = b("div", s[r])),
                      (n.className = s[r]),
                      e.el.append(n)),
                      (i[r] = n),
                      (t[r] = n);
                  }
                }),
              i
            );
          })(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !t.nextEl && !t.prevEl)
        )
          return;
        let i = n(t.nextEl),
          s = n(t.prevEl);
        Object.assign(e.navigation, { nextEl: i, prevEl: s }),
          (i = r(i)),
          (s = r(s));
        const l = (i, s) => {
          i && i.addEventListener("click", "next" === s ? c : a),
            !e.enabled && i && i.classList.add(...t.lockClass.split(" "));
        };
        i.forEach((e) => l(e, "next")), s.forEach((e) => l(e, "prev"));
      }
      function p() {
        let { nextEl: t, prevEl: i } = e.navigation;
        (t = r(t)), (i = r(i));
        const s = (t, i) => {
          t.removeEventListener("click", "next" === i ? c : a),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
      }
      i("init", () => {
        !1 === e.params.navigation.enabled ? u() : (d(), o());
      }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          p();
        }),
        i("enable disable", () => {
          let { nextEl: t, prevEl: i } = e.navigation;
          (t = r(t)),
            (i = r(i)),
            [...t, ...i]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        i("click", (t, i) => {
          let { nextEl: n, prevEl: l } = e.navigation;
          (n = r(n)), (l = r(l));
          const o = i.target;
          if (
            e.params.navigation.hideOnClick &&
            !l.includes(o) &&
            !n.includes(o)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            n.length
              ? (t = n[0].classList.contains(e.params.navigation.hiddenClass))
              : l.length &&
                (t = l[0].classList.contains(e.params.navigation.hiddenClass)),
              s(!0 === t ? "navigationShow" : "navigationHide"),
              [...n, ...l]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const u = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            d(),
            o();
        },
        disable: u,
        update: o,
        init: d,
        destroy: p,
      });
    }
    function te() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      te(),
        document.querySelector(".swiper") &&
          new J(".swiper", {
            modules: [ee],
            observer: !0,
            observeParents: !0,
            slidesPerView: 2,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
              768: { slidesPerView: 1, spaceBetween: 10 },
              992: { slidesPerView: 2, spaceBetween: 20 },
              1268: { slidesPerView: 2, spaceBetween: 30 },
            },
            on: {},
          });
    });
    var ie = i(807);
    const se = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const re =
      "object" == typeof global && global && global.Object === Object && global;
    var ne = "object" == typeof self && self && self.Object === Object && self;
    const le = re || ne || Function("return this")();
    const oe = function () {
      return le.Date.now();
    };
    var ae = /\s/;
    const ce = function (e) {
      for (var t = e.length; t-- && ae.test(e.charAt(t)); );
      return t;
    };
    var de = /^\s+/;
    const pe = function (e) {
      return e ? e.slice(0, ce(e) + 1).replace(de, "") : e;
    };
    const ue = le.Symbol;
    var he = Object.prototype,
      fe = he.hasOwnProperty,
      me = he.toString,
      ve = ue ? ue.toStringTag : void 0;
    const ge = function (e) {
      var t = fe.call(e, ve),
        i = e[ve];
      try {
        e[ve] = void 0;
        var s = !0;
      } catch (e) {}
      var r = me.call(e);
      return s && (t ? (e[ve] = i) : delete e[ve]), r;
    };
    var be = Object.prototype.toString;
    const we = function (e) {
      return be.call(e);
    };
    var xe = ue ? ue.toStringTag : void 0;
    const ye = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : xe && xe in Object(e)
        ? ge(e)
        : we(e);
    };
    const Ee = function (e) {
      return null != e && "object" == typeof e;
    };
    const Se = function (e) {
      return "symbol" == typeof e || (Ee(e) && "[object Symbol]" == ye(e));
    };
    var Te = /^[-+]0x[0-9a-f]+$/i,
      Me = /^0b[01]+$/i,
      Ce = /^0o[0-7]+$/i,
      Oe = parseInt;
    const ke = function (e) {
      if ("number" == typeof e) return e;
      if (Se(e)) return NaN;
      if (se(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = se(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = pe(e);
      var i = Me.test(e);
      return i || Ce.test(e)
        ? Oe(e.slice(2), i ? 2 : 8)
        : Te.test(e)
        ? NaN
        : +e;
    };
    var Ae = Math.max,
      Le = Math.min;
    const Pe = function (e, t, i) {
      var s,
        r,
        n,
        l,
        o,
        a,
        c = 0,
        d = !1,
        p = !1,
        u = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function h(t) {
        var i = s,
          n = r;
        return (s = r = void 0), (c = t), (l = e.apply(n, i));
      }
      function f(e) {
        var i = e - a;
        return void 0 === a || i >= t || i < 0 || (p && e - c >= n);
      }
      function m() {
        var e = oe();
        if (f(e)) return v(e);
        o = setTimeout(
          m,
          (function (e) {
            var i = t - (e - a);
            return p ? Le(i, n - (e - c)) : i;
          })(e)
        );
      }
      function v(e) {
        return (o = void 0), u && s ? h(e) : ((s = r = void 0), l);
      }
      function g() {
        var e = oe(),
          i = f(e);
        if (((s = arguments), (r = this), (a = e), i)) {
          if (void 0 === o)
            return (function (e) {
              return (c = e), (o = setTimeout(m, t)), d ? h(e) : l;
            })(a);
          if (p) return clearTimeout(o), (o = setTimeout(m, t)), h(a);
        }
        return void 0 === o && (o = setTimeout(m, t)), l;
      }
      return (
        (t = ke(t) || 0),
        se(i) &&
          ((d = !!i.leading),
          (n = (p = "maxWait" in i) ? Ae(ke(i.maxWait) || 0, t) : n),
          (u = "trailing" in i ? !!i.trailing : u)),
        (g.cancel = function () {
          void 0 !== o && clearTimeout(o), (c = 0), (s = a = r = o = void 0);
        }),
        (g.flush = function () {
          return void 0 === o ? l : v(oe());
        }),
        g
      );
    };
    const ze = function (e, t, i) {
      var s = !0,
        r = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        se(i) &&
          ((s = "leading" in i ? !!i.leading : s),
          (r = "trailing" in i ? !!i.trailing : r)),
        Pe(e, t, { leading: s, maxWait: t, trailing: r })
      );
    };
    var Ie = function () {
        return (
          (Ie =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          Ie.apply(this, arguments)
        );
      },
      Ne = null,
      We = null;
    function _e() {
      if (null === Ne) {
        if ("undefined" == typeof document) return (Ne = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var i = t.getBoundingClientRect().right;
        e.removeChild(t), (Ne = i);
      }
      return Ne;
    }
    function De(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function Ge(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    ie &&
      window.addEventListener("resize", function () {
        We !== window.devicePixelRatio &&
          ((We = window.devicePixelRatio), (Ne = null));
      });
    var Ve = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var i = t.name.match(/data-simplebar-(.+)/);
          if (i) {
            var s = i[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[s] = !0;
                break;
              case "false":
                e[s] = !1;
                break;
              case void 0:
                e[s] = !0;
                break;
              default:
                e[s] = t.value;
            }
          }
          return e;
        },
        {}
      );
    };
    function Be(e, t) {
      var i;
      e && (i = e.classList).add.apply(i, t.split(" "));
    }
    function He(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function Re(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var je = Object.freeze({
        __proto__: null,
        getElementWindow: De,
        getElementDocument: Ge,
        getOptions: Ve,
        addClasses: Be,
        removeClasses: He,
        classNamesToQuery: Re,
      }),
      Fe = De,
      qe = Ge,
      $e = Ve,
      Xe = Be,
      Ye = He,
      Ue = Re,
      Ke = (function () {
        function e(t, i) {
          void 0 === i && (i = {});
          var s = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = Fe(s.el);
              s.scrollXTicking ||
                (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                s.scrollYTicking ||
                  (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                s.isScrolling ||
                  ((s.isScrolling = !0), Xe(s.el, s.classNames.scrolling)),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                s.onStopScrolling();
            }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing && s.positionScrollbar("x"),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing && s.positionScrollbar("y"),
                (s.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              Ye(s.el, s.classNames.scrolling),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              s.isMouseEntering ||
                (Xe(s.el, s.classNames.mouseEntered),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                (s.isMouseEntering = !0)),
                s.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              Ye(s.el, s.classNames.mouseEntered),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              s.axis.x.track.el &&
                s.axis.y.track.el &&
                s.axis.x.scrollbar.el &&
                s.axis.y.scrollbar.el &&
                ((s.axis.x.track.rect =
                  s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var i, r, n, l, o, a, c, d, p, u, h;
              if (s.draggedAxis && s.contentWrapperEl) {
                var f = s.axis[s.draggedAxis].track,
                  m =
                    null !==
                      (r =
                        null === (i = f.rect) || void 0 === i
                          ? void 0
                          : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                      ? r
                      : 0,
                  v = s.axis[s.draggedAxis].scrollbar,
                  g =
                    null !==
                      (l =
                        null === (n = s.contentWrapperEl) || void 0 === n
                          ? void 0
                          : n[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== l
                      ? l
                      : 0,
                  b = parseInt(
                    null !==
                      (a =
                        null === (o = s.elStyles) || void 0 === o
                          ? void 0
                          : o[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                      ? a
                      : "0px",
                    10
                  );
                t.preventDefault(), t.stopPropagation();
                var w =
                    ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = f.rect) || void 0 === c
                          ? void 0
                          : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    s.axis[s.draggedAxis].dragOffset,
                  x =
                    ((w =
                      "x" === s.draggedAxis && s.isRtl
                        ? (null !==
                            (u =
                              null === (p = f.rect) || void 0 === p
                                ? void 0
                                : p[s.axis[s.draggedAxis].sizeAttr]) &&
                          void 0 !== u
                            ? u
                            : 0) -
                          v.size -
                          w
                        : w) /
                      (m - v.size)) *
                    (g - b);
                "x" === s.draggedAxis &&
                  s.isRtl &&
                  (x = (
                    null === (h = e.getRtlHelpers()) || void 0 === h
                      ? void 0
                      : h.isScrollingToNegative
                  )
                    ? -x
                    : x),
                  (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                    x);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = qe(s.el),
                i = Fe(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                Ye(s.el, s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Ie(Ie({}, e.defaultOptions), i)),
            (this.classNames = Ie(
              Ie({}, e.defaultOptions.classNames),
              i.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el
              )
            );
          (this.onMouseMove = ze(this._onMouseMove, 64)),
            (this.onWindowResize = Pe(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = Pe(
              this._onStopScrolling,
              this.stopScrollDelay
            )),
            (this.onMouseEntered = Pe(
              this._onMouseEntered,
              this.stopScrollDelay
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = t.firstElementChild,
              s = null == i ? void 0 : i.firstElementChild;
            if (!s) return null;
            document.body.appendChild(i), (i.scrollLeft = 0);
            var r = e.getOffset(i),
              n = e.getOffset(s);
            i.scrollLeft = -999;
            var l = e.getOffset(s);
            return (
              document.body.removeChild(i),
              (e.rtlHelpers = {
                isScrollOriginAtZero: r.left !== n.left,
                isScrollingToNegative: n.left !== l.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : _e();
            } catch (e) {
              return _e();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = qe(e),
              s = Fe(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            ie &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              Ue(this.classNames.wrapper)
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(Ue(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(Ue(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                Ue(this.classNames.offset)
              )),
              (this.maskEl = this.el.querySelector(Ue(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                Ue(this.classNames.placeholder)
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                Ue(this.classNames.heightAutoObserverWrapperEl)
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                Ue(this.classNames.heightAutoObserverEl)
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(Ue(this.classNames.track))
                  .concat(Ue(this.classNames.horizontal))
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(Ue(this.classNames.track))
                  .concat(Ue(this.classNames.vertical))
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(Ue(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(Ue(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (Xe(this.axis.x.scrollbar.el, this.classNames.visible),
                Xe(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              i = Fe(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              i.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var s = !1,
                  r = i.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new r(function () {
                  s &&
                    i.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  i.requestAnimationFrame(function () {
                    s = !0;
                  });
              }
              (this.mutationObserver = new i.MutationObserver(function () {
                i.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = Fe(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                i = this.heightAutoObserverEl.offsetHeight <= 1,
                s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                r = this.contentWrapperEl.offsetWidth,
                n = this.elStyles.overflowX,
                l = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var o = this.contentEl.scrollHeight,
                a = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                (this.placeholderEl.style.width = s
                  ? "".concat(t || a, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(o, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && a > t),
                (this.axis.y.isOverflowing = o > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== n && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== l && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && a > r - p),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && o > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px"
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px"
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, i;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var s,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              n =
                null !==
                  (i =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                  ? i
                  : 0,
              l = n / r;
            return (
              (s = Math.max(~~(l * n), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (s = Math.min(s, this.options.scrollbarMaxSize)),
              s
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var i, s, r;
            void 0 === t && (t = "y");
            var n = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              n.el &&
              this.elStyles
            ) {
              var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                o =
                  (null === (i = this.axis[t].track.el) || void 0 === i
                    ? void 0
                    : i[this.axis[t].offsetSizeAttr]) || 0,
                a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (s = e.getRtlHelpers()) || void 0 === s
                  ? void 0
                  : s.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (r = e.getRtlHelpers()) || void 0 === r
                      ? void 0
                      : r.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (l - a),
                p = ~~((o - n.size) * d);
              (p = "x" === t && this.isRtl ? -p + (o - n.size) : p),
                (n.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(p, "px, 0, 0)")
                    : "translate3d(0, ".concat(p, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            t &&
              i &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  )),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (Xe(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (Ye(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  Xe(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? Xe(t.scrollbar.el, this.classNames.hover)
                    : Ye(t.scrollbar.el, this.classNames.hover))
                : (Ye(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              Ye(this.axis[e].track.el, this.classNames.hover),
              Ye(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var i;
            void 0 === t && (t = "y");
            var s = qe(this.el),
              r = Fe(this.el),
              n = this.axis[t].scrollbar,
              l = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              l -
              ((null === (i = n.rect) || void 0 === i
                ? void 0
                : i[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              Xe(this.el, this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (r.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var i,
              s,
              r,
              n,
              l = this;
            void 0 === t && (t = "y");
            var o = this.axis[t];
            if (
              this.options.clickOnTrack &&
              o.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var a = Fe(this.el);
              this.axis[t].scrollbar.rect =
                o.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (s =
                      null === (i = this.axis[t].scrollbar.rect) || void 0 === i
                        ? void 0
                        : i[this.axis[t].offsetAttr]) && void 0 !== s
                    ? s
                    : 0,
                d = parseInt(
                  null !==
                    (n =
                      null === (r = this.elStyles) || void 0 === r
                        ? void 0
                        : r[this.axis[t].sizeAttr]) && void 0 !== n
                    ? n
                    : "0px",
                  10
                ),
                p = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                u =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                h = -1 === u ? p - d : p + d,
                f = function () {
                  l.contentWrapperEl &&
                    (-1 === u
                      ? p > h &&
                        ((p -= 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = p),
                        a.requestAnimationFrame(f))
                      : p < h &&
                        ((p += 40),
                        (l.contentWrapperEl[l.axis[t].scrollOffsetAttr] = p),
                        a.requestAnimationFrame(f)));
                };
              f();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = Fe(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = $e),
          (e.helpers = je),
          e
        );
      })(),
      Qe = function (e, t) {
        return (
          (Qe =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }),
          Qe(e, t)
        );
      };
    var Ze = Ke.helpers,
      Je = Ze.getOptions,
      et = Ze.addClasses,
      tt = (function (e) {
        function t() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          var r = e.apply(this, i) || this;
          return t.instances.set(i[0], r), r;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function i() {
              this.constructor = e;
            }
            Qe(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, Je(e.attributes));
                }
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              i,
              s = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(s.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  et(this.wrapperEl, this.classNames.wrapper),
                  et(this.contentWrapperEl, this.classNames.contentWrapper),
                  et(this.offsetEl, this.classNames.offset),
                  et(this.maskEl, this.classNames.mask),
                  et(this.contentEl, this.classNames.contentEl),
                  et(this.placeholderEl, this.classNames.placeholder),
                  et(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  et(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (i = this.contentWrapperEl) ||
                  void 0 === i ||
                  i.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var r = document.createElement("div"),
                n = document.createElement("div");
              et(r, this.classNames.track),
                et(n, this.classNames.scrollbar),
                r.appendChild(n),
                (this.axis.x.track.el = r.cloneNode(!0)),
                et(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = r.cloneNode(!0)),
                et(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            Ke.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            Ke.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, Je(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, Je(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          }
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(Ke);
    ie && tt.initHtmlApi();
    let it = !1;
    setTimeout(() => {
      if (it) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let i = document.querySelector(".icon-menu");
        i &&
          i.addEventListener("click", function (i) {
            e &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? t(e)
                  : s(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, i;
            for (let t = 0; t < e.length; t++) {
              s(e[t]);
            }
            function s(e) {
              r(e), n(), e.classList.contains("rating_set") && l(e);
            }
            function r(e) {
              (t = e.querySelector(".rating__active")),
                (i = e.querySelector(".rating__value"));
            }
            function n(e = i.innerHTML) {
              const s = e / 0.05;
              t.style.width = `${s}%`;
            }
            function l(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let s = 0; s < t.length; s++) {
                const l = t[s];
                l.addEventListener("mouseenter", function (t) {
                  r(e), n(l.value);
                }),
                  l.addEventListener("mouseleave", function (e) {
                    n();
                  }),
                  l.addEventListener("click", function (t) {
                    r(e),
                      e.dataset.ajax
                        ? o(l.value, e)
                        : ((i.innerHTML = s + 1), n());
                  });
              }
            }
            async function o(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const s = (await e.json()).newRating;
                  (i.innerHTML = s), n(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })();
  })();
})();
