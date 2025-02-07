(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    8360: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 2576)),
        Promise.resolve().then(r.t.bind(r, 2321, 23)),
        Promise.resolve().then(r.t.bind(r, 6977, 23)),
        Promise.resolve().then(r.t.bind(r, 6797, 23)),
        Promise.resolve().then(r.t.bind(r, 7077, 23)),
        Promise.resolve().then(r.t.bind(r, 2742, 23)),
        Promise.resolve().then(r.t.bind(r, 275, 23)),
        Promise.resolve().then(r.bind(r, 6661)),
        Promise.resolve().then(r.bind(r, 6499)),
        Promise.resolve().then(r.t.bind(r, 9195, 23)),
        Promise.resolve().then(r.bind(r, 6759))
    },
    6661: function(e, t, r) {
        "use strict";
        r.d(t, {
            PostHogProvider: function() {
                return d
            }
        });
        var s = r(353)
          , a = r(235)
          , o = r(2456)
          , l = r(1326)
          , n = r(9914);
        function i() {
            let e = (0,
            n.usePathname)()
              , t = (0,
            n.useSearchParams)()
              , r = (0,
            o.U0)();
            return (0,
            l.useEffect)( () => {
                if (e && r) {
                    let s = window.origin + e;
                    t.toString() && (s += "?".concat(t.toString())),
                    r.capture("$pageview", {
                        $current_url: s
                    })
                }
            }
            , [e, t, r]),
            null
        }
        function c() {
            return (0,
            s.jsx)(l.Suspense, {
                fallback: null,
                children: (0,
                s.jsx)(i, {})
            })
        }
        function d(e) {
            let {children: t} = e;
            return (0,
            l.useEffect)( () => {
                a.ZP.init("phc_SBLpZVAB6jmHOct9CABq3PF0Yn5FU3G2FgT4xUr2XrT", {
                    api_host: "https://us.i.posthog.com",
                    capture_pageleave: !0,
                    persistence: "cookie"
                })
            }
            , []),
            (0,
            s.jsxs)(o.zf, {
                client: a.ZP,
                children: [(0,
                s.jsx)(c, {}), t]
            })
        }
    },
    6499: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return p
            }
        });
        var s = r(353)
          , a = r(1326)
          , o = r(5339)
          , l = r(96)
          , n = r(188)
          , i = r(9914)
          , c = r(7396);
        let d = () => (0,
        s.jsx)(n.default, {
            href: "/docs",
            className: "bg-white rounded-md hover:opacity-90 w-full py-[0.56rem] lg:w-auto justify-center group flex h-[2.125rem] items-center gap-1 px-4 lg:py-2 font-semibold text-[0.9rem] text-black",
            children: (0,
            s.jsx)("span", {
                children: " Buy here"
            })
        });
        var x = r(9723);
        let m = "MASTRA_AI_STAR_COUNT"
          , u = [{
            label: "X",
            href: "x.com"
        }]
          , h = e => {
            let {githubStarCount: t, scrollPosition: r} = e
              , [h,f] = a.useState(t)
              , [p,g] = a.useState(!1)
              , b = (0,
            i.usePathname)();
            return a.useEffect( () => {
                if (h > 0)
                    localStorage.setItem(m, JSON.stringify(h));
                else {
                    let e = localStorage.getItem(m);
                    e && f(JSON.parse(e))
                }
            }
            , []),
            (0,
            s.jsx)("nav", {
                className: (0,
                c.cn)("z-50 border-[0.5px] border-x-0 border-t-0 border-border-1"),
                children: (0,
                s.jsxs)("div", {
                    className: (0,
                    c.cn)("flex xl:max-w-[71.25rem] border-t-0 border-x-[0.5px] border-border-1 max-h-[49px]  md:max-h-none mx-auto  justify-between items-center pl-3 pr-4 py-3", r > 0 ? "bg-[rgba(10,10,10,0.9)] shadow-md" : "bg-[rgba(10,10,10,0.25)]"),
                    children: [(0,
                    s.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0,
                        s.jsxs)("button", {
                            onClick: () => g(e => !e),
                            className: "grid place-items-center md:hidden",
                            children: [(0,
                            s.jsx)("span", {
                                className: "sr-only",
                                children: "Open main menu"
                            }), p ? (0,
                            s.jsxs)(o.E.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0,
                                s.jsx)("path", {
                                    d: "M18 6 6 18"
                                }), (0,
                                s.jsx)("path", {
                                    d: "m6 6 12 12"
                                })]
                            }) : (0,
                            s.jsxs)(o.E.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0,
                                s.jsx)("line", {
                                    x1: "4",
                                    x2: "20",
                                    y1: "12",
                                    y2: "12"
                                }), (0,
                                s.jsx)("line", {
                                    x1: "4",
                                    x2: "20",
                                    y1: "6",
                                    y2: "6"
                                }), (0,
                                s.jsx)("line", {
                                    x1: "4",
                                    x2: "20",
                                    y1: "18",
                                    y2: "18"
                                })]
                            })]
                        })
                    }), (0,
                    s.jsxs)("ul", {
                        "data-open": p,
                        className: (0,
                        c.cn)("group absolute left-8", "data-[open=true]:opacity-100 data-[open-true]:translate-y-0", "data-[open=false]:-translate-y-5 md:data-[open=false]:translate-y-0 data-[open=false]:hidden md:data-[open=false]:flex", "w-[calc(100%-4rem)] md:rounded-none flex flex-col items-start px-4 py-3 gap-3", "border-border-1 border-[0.5px] md:px-0 md:py-0 bg-bg-3 md:bg-transparent md:border-none", "md:flex-row md:w-auto top-16 md:static md:gap-[1.18rem] md:items-center", "transition-transform ease-ease-out-quad"),
                        children: [(0,
                        s.jsx)("li", {
                            children: (0,
                            s.jsx)("a", {
                                className: "font-medium rounded-md hover:bg-[rgba(41,41,41,0.50)]  md:text-[0.9rem] transition-colors hover:text-white py-2 px-4 text-text-3",
                                href: "/Pumpfun",
                                children: "Pumpfun"
                            })
                        }), u.map(e => (0,
                        s.jsx)("li", {
                            children: (0,
                            s.jsx)(n.default, {
                                onClick: () => g(!1),
                                href: e.href,
                                className: (0,
                                c.cn)("font-medium rounded-md hover:bg-[rgba(41,41,41,0.50)]  md:text-[0.9rem] transition-colors hover:text-white py-2 px-4 text-text-3", {
                                    "text-white bg-[rgba(41,41,41,0.50)]": b === e.href
                                }),
                                children: e.label
                            })
                        }, e.href)), (0,
                        s.jsxs)("ul", {
                            className: "flex w-full flex-col p-2 text-text-5 md:p-0 md:flex-row gap-5 md:items-center ",
                            children: [(0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsxs)(n.default, {
                                    style: {
                                        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 4.66%, rgba(255, 255, 255, 0.03) 97.46%)"
                                    },
                                    href: "https://github.com/mastra-ai/mastra",
                                    className: "font-medium rounded-md opacity-90 transition-colors hover:opacity-100 flex items-center gap-2 justify-start pl-[7px] pr-2.5 py-2 h-[2.125rem] text-white text-sm",
                                    children: [(0,
                                    s.jsx)(x.J, {
                                        name: "github",
                                        className: "w-[22px] h-[22px] transition-colors text-[#E6E6E6] hover:text-white"
                                    }), h > 0 && (0,
                                    s.jsxs)("div", {
                                        className: "flex gap-1 items-center",
                                        children: [(0,
                                        s.jsx)("span", {
                                            children: h >= 1e3 ? (h / 1e3).toFixed(h % 1e3 == 0 ? 0 : 1) + "NereidGithub" : h.toString()
                                        }), (0,
                                        s.jsx)(x.J, {
                                            className: "h-3 w-3 text-[#E6E6E6]",
                                            name: "star"
                                        })]
                                    })]
                                })
                            }), (0,
                            s.jsx)("li", {
                                className: "w-full",
                                children: (0,
                                s.jsx)(d, {})
                            })]
                        })]
                    })]
                })
            })
        }
          , f = () => {
            let e = "/" === (0,
            i.usePathname)();
            return (0,
            s.jsxs)("footer", {
                "data-state": !e,
                className: "flex  w-full flex-col items-center pt-[5rem] pb-[2rem] footer data-[state=false]:mt-8  data-[state=false]:sm:mt-[8rem]",
                children: [e ? (0,
                s.jsxs)(s.Fragment, {
                    children: [" ", (0,
                    s.jsx)(x.J, {
                        name: "footer-logo",
                        className: "text-text-6 w-[60px] h-[60px]"
                    }), (0,
                    s.jsx)("h1", {
                        className: "font-serif text-2xl sm:text-[40px] max-w-lg font-medium md:leading-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999] text-center mt-10",
                        children: "The default Typescript AI framework"
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-10 ",
                        children: (0,
                        s.jsx)(d, {})
                    })]
                }) : null, (0,
                s.jsx)("div", {
                    className: "border-t-[0.5px] border-border-1 w-full my-11 md:mt-[154px]"
                }), (0,
                s.jsxs)("div", {
                    className: "flex w-full lg:max-w-[75rem] justify-between px-4 sm:px-10",
                    children: [(0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0,
                            s.jsx)(x.J, {
                                className: "h-9 w-9",
                                name: "footer-logo"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-2xl",
                                children: "Nereid"
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex gap-3 flex-col sm:flex-row text-sm  sm:items-center sm:gap-10 text-text-3 mt-[54px]",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0,
                                s.jsx)(n.default, {
                                    href: "/",
                                    children: "Privacy"
                                }), (0,
                                s.jsx)(n.default, {
                                    href: "/",
                                    children: "Policy"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-text-3",
                                children: "\xa9 2024 Kepler Software Inc."
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex gap-16",
                        children: [(0,
                        s.jsx)("ul", {
                            className: "text-text-3 space-y-2 text-sm",
                            children: [{
                                text: "About",
                                url: "/about"
                            }, {
                                text: "Docs",
                                url: "/docs"
                            }].map(e => {
                                let t = "github" === e.text.toLowerCase();
                                return (0,
                                s.jsx)("li", {
                                    className: "hover:text-white transition-colors",
                                    children: (0,
                                    s.jsx)(n.default, {
                                        target: t ? "_blank" : void 0,
                                        href: e.url,
                                        children: e.text
                                    })
                                }, e.url)
                            }
                            )
                        }), (0,
                        s.jsx)("ul", {
                            className: "text-text-3 space-y-3 text-sm",
                            children: [{
                                text: "github",
                                icon: "github",
                                url: "https://github.com/mastra-ai/mastra"
                            }, {
                                text: "discord",
                                icon: "discord",
                                url: "https://discord.gg/TpapMTnjyB"
                            }, {
                                text: "X",
                                icon: "x",
                                url: "https://x.com/mastra_ai"
                            }, {
                                text: "youtube",
                                icon: "youtube",
                                url: "https://www.youtube.com/@mastra-ai"
                            }].map(e => (0,
                            s.jsx)("li", {
                                children: (0,
                                s.jsxs)("a", {
                                    target: "_blank",
                                    href: e.url,
                                    className: "flex gap-2 items-center hover:text-white transition-colors capitalize group",
                                    children: [(0,
                                    s.jsx)(x.J, {
                                        name: e.icon,
                                        className: "text-text-3 group-hover:text-white transition-colors"
                                    }), e.text]
                                })
                            }, e.url))
                        })]
                    })]
                })]
            })
        }
        ;
        function p(e) {
            let {githubStarCount: t, children: r} = e
              , [o,l] = (0,
            a.useState)(0);
            return (0,
            s.jsxs)("div", {
                onScroll: e => {
                    let {scrollTop: t, scrollHeight: r, clientHeight: s} = e.target;
                    l(Math.ceil(t / (r - s) * 100))
                }
                ,
                className: "page flex flex-col w-full mx-auto font-sans overflow-hidden overflow-y-scroll h-full",
                children: [(0,
                s.jsx)(h, {
                    scrollPosition: o,
                    githubStarCount: t
                }), (0,
                s.jsx)("div", {
                    className: "flex-1  w-full mx-auto",
                    children: r
                }), (0,
                s.jsx)(f, {})]
            })
        }
    },
    9723: function(e, t, r) {
        "use strict";
        r.d(t, {
            J: function() {
                return l
            }
        });
        var s = r(353)
          , a = r(1326)
          , o = r(7396);
        let l = (0,
        a.forwardRef)( (e, t) => {
            let {name: r, className: a, ...l} = e;
            return (0,
            s.jsx)("svg", {
                className: (0,
                o.cn)("h-4 w-4", a),
                ...l,
                ref: t,
                children: (0,
                s.jsx)("use", {
                    href: "/icons/sprite.svg#".concat(r)
                })
            })
        }
        );
        l.displayName = "Icon"
    },
    7396: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return o
            }
        });
        var s = r(6151)
          , a = r(6450);
        function o() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            a.m6)((0,
            s.W)(t))
        }
        r(5057)
    },
    6759: function(e, t, r) {
        "use strict";
        r.d(t, {
            Toaster: function() {
                return l
            }
        });
        var s = r(353)
          , a = r(6891)
          , o = r(5441);
        let l = e => {
            let {...t} = e
              , {theme: r="system"} = (0,
            a.F)();
            return (0,
            s.jsx)(o.x7, {
                theme: r,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-bg-3 group-[.toaster]:text-text-6  group-[.toaster]:border-border-1 group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-text-3",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                },
                ...t
            })
        }
    },
    9195: function() {}
}, function(e) {
    e.O(0, [150, 820, 333, 102, 959, 339, 671, 942, 254, 615, 744], function() {
        return e(e.s = 8360)
    }),
    _N_E = e.O()
}
]);



