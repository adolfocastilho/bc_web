"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2166);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1301);
/* harmony import */ var _components_common_ExportedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4438);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_2__]);
react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AboutSection = ()=>{
    const marqueeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    // Pause marquee animation when not visible to save CPU/GPU
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.1
        });
        if (marqueeRef.current) {
            observer.observe(marqueeRef.current);
        }
        return ()=>{
            if (marqueeRef.current) {
                observer.unobserve(marqueeRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "sobre",
            className: "mil-p-0-90",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-oval-frame-2 mil-mb-90",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ExportedImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: _data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .avatar.image */ .ri.B,
                            alt: _data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .avatar.alt */ .ri.w,
                            width: 1536,
                            height: 1536,
                            sizes: "120px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mil-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "mil-up mil-mb-30",
                                        dangerouslySetInnerHTML: {
                                            __html: _data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-quote mil-up mil-mb-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaQuoteLeft, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        children: _data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: marqueeRef,
                                        className: "mil-logos-wrapper mil-up mil-mb-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-marquee-track",
                                            style: {
                                                animationPlayState: isVisible ? "running" : "paused"
                                            },
                                            children: [
                                                ..._data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .logos */ .UN,
                                                ..._data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .logos */ .UN,
                                                ..._data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .logos */ .UN,
                                                ..._data_sections_about_json__WEBPACK_IMPORTED_MODULE_1__/* .logos */ .UN
                                            ].map((logo, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-logo-item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ExportedImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        src: logo.image,
                                                        alt: logo.alt,
                                                        width: 400,
                                                        height: 400
                                                    })
                                                }, index))
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-center mil-up mil-mt-60",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#portfolio",
                                            className: "mil-btn mil-sm-btn mil-rounded",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Ver Portf\xf3lio"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroOne)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-1.json
const hero_1_namespaceObject = JSON.parse('{"Oc":"22 ANOS DE CRIATIVIDADE","AT":["BeCHANGE","Seja a Mudança"],"WL":"Agência de Criação de Sites e Identidade Visual"}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/constants.js
var constants = __webpack_require__(7714);
// EXTERNAL MODULE: ./src/components/common/ExportedImage.jsx
var ExportedImage = __webpack_require__(4438);
;// CONCATENATED MODULE: ./src/components/sections/HeroOne.jsx





const HeroOne = ()=>{
    const el = (0,external_react_.useRef)(null);
    const heroRef = (0,external_react_.useRef)(null);
    const [rotation, setRotation] = (0,external_react_.useState)(0);
    const typedInstance = (0,external_react_.useRef)(null);
    const [viewportSize, setViewportSize] = (0,external_react_.useState)("desktop");
    const [isHeroVisible, setIsHeroVisible] = (0,external_react_.useState)(true);
    // Detect viewport size on mount
    (0,external_react_.useEffect)(()=>{
        const getViewportSize = ()=>{
            const width = window.innerWidth;
            if (width < 768) return "mobile";
            if (width < 1024) return "tablet";
            if (width < 1200) return "smallLaptop";
            return "desktop";
        };
        setViewportSize(getViewportSize());
        const handleResize = ()=>setViewportSize(getViewportSize());
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    // Helper to check if mobile
    const isMobile = viewportSize === "mobile";
    // Intersection Observer to pause text cycle when hero is not visible
    (0,external_react_.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIsHeroVisible(entry.isIntersecting);
        }, {
            threshold: 0.1
        });
        if (heroRef.current) {
            observer.observe(heroRef.current);
        }
        return ()=>{
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        let rafId;
        const handleScroll = ()=>{
            // Disable rotation animation on mobile to save CPU
            if (window.innerWidth < 768) return;
            rafId = requestAnimationFrame(()=>{
                setRotation(window.scrollY * constants/* ANIMATION.SCROLL_ROTATION_SPEED */.l.SCROLL_ROTATION_SPEED);
            });
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);
    // ========================================================================
    // FADE EFFECT - Only runs on DESKTOP when hero is visible
    // MOBILE: Static text to match identidade-visual performance
    // ========================================================================
    const [textIndex, setTextIndex] = (0,external_react_.useState)(0);
    const [isVisible, setIsVisible] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        // MOBILE OPTIMIZATION: Skip animation on mobile - static text
        if (isMobile) return;
        // Only run interval when hero is visible (desktop only)
        if (!isHeroVisible) return;
        const interval = setInterval(()=>{
            setIsVisible(false); // Start fade out
            setTimeout(()=>{
                setTextIndex((prev)=>(prev + 1) % hero_1_namespaceObject.AT.length);
                setIsVisible(true); // Start fade in
            }, 500); // Wait for fade out transition (matches CSS transition duration)
        }, 4000); // Change text every 4 seconds
        return ()=>clearInterval(interval);
    }, [
        isHeroVisible,
        isMobile
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            ref: heroRef,
            className: "mil-side-banner mil-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-banner-top mil-up"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-banner-title",
                    style: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: viewportSize === "mobile" ? "15px" : "30px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(ExportedImage/* default */.Z, {
                            src: "/img/icons/icone_hero_bechange.svg",
                            alt: "BeCHANGE",
                            width: 180,
                            height: 250,
                            sizes: "180px",
                            className: "mil-up mil-hero-icon"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-upper mil-dark mil-up",
                            children: hero_1_namespaceObject.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-up",
                            style: {
                                width: "100%",
                                maxWidth: "1000px",
                                padding: isMobile ? "0 15px" : "0",
                                height: isMobile ? "72px" : ({
                                    tablet: "100px",
                                    smallLaptop: "120px",
                                    desktop: "138px"
                                })[viewportSize],
                                minHeight: isMobile ? "52px" : ({
                                    tablet: "72px",
                                    smallLaptop: "80px",
                                    desktop: "92px"
                                })[viewportSize],
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                style: {
                                    fontSize: isMobile ? "47px" : ({
                                        tablet: "64px",
                                        smallLaptop: "76px",
                                        desktop: "92px"
                                    })[viewportSize],
                                    fontWeight: 600,
                                    textAlign: "center",
                                    color: "rgba(32, 33, 36, 1)",
                                    margin: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "mil-fade-text",
                                    style: {
                                        opacity: isVisible ? 1 : 0,
                                        transition: isMobile ? "none" : "opacity 0.5s ease-in-out",
                                        display: "inline-block"
                                    },
                                    children: isMobile ? hero_1_namespaceObject.AT[1] : hero_1_namespaceObject.AT[textIndex]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-upper mil-dark mil-up",
                            children: isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    "Ag\xeancia de Cria\xe7\xe3o de Sites",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    "e Identidade Visual"
                                ]
                            }) : hero_1_namespaceObject.WL
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-up mil-oval-frame",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-circle-text",
                        children: [
                            !isMobile && /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 300 300",
                                enableBackground: "new 0 0 300 300",
                                xmlSpace: "preserve",
                                className: "mil-ct-svg",
                                style: {
                                    transform: `scale(2) rotate(${rotation}deg)`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            id: "circlePath",
                                            d: "M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                        cx: "150",
                                        cy: "100",
                                        r: "75",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("use", {
                                                xlinkHref: "#circlePath",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("text", {
                                                style: {
                                                    "letterSpacing": "3px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("textPath", {
                                                    xlinkHref: "#circlePath",
                                                    children: "Deslize para baixo - Deslize para baixo - "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#sobre",
                                className: "mil-button",
                                "aria-label": "Role para baixo",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "feather feather-arrow-down",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                            points: "19 12 12 19 5 12"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sections_HeroOne = (HeroOne);


/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(564);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(745);
/* harmony import */ var _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3578);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(607);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_Recognition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8231);
/* harmony import */ var _components_sections_Portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3834);
/* harmony import */ var _src_components_sections_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(900);
/* harmony import */ var _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__, _library_posts__WEBPACK_IMPORTED_MODULE_5__, _components_sections_About__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__, _library_posts__WEBPACK_IMPORTED_MODULE_5__, _components_sections_About__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Home1 = (props)=>{
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BeCHANGE",
        "image": "https://bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
        "description": "Ag\xeancia de Cria\xe7\xe3o de Sites Profissionais e Identidade Visual Estrat\xe9gica",
        "url": "https://bechange.com.br",
        "sameAs": [
            "https://www.instagram.com/bechangecomunicacao/",
            "https://www.linkedin.com/company/bechangecomunicacao/",
            "https://br.pinterest.com/bechangecomunicacao/",
            "https://www.youtube.com/@bechangecomunicacao3721?app=desktop"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_12__/* .items.length.toString */ .ev.length.toString()
        },
        "review": _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_12__/* .items.map */ .ev.map((item)=>({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": item.title,
                    "homeLocation": {
                        "@type": "Place",
                        "name": item.location
                    }
                },
                "reviewBody": item.text,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                }
            }))
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        rightPanelBackground: "/img/person/bg-1.jpg",
        rightPanelImg: "/img/person/adolfo-castilho-garcia-bechange.webp",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Ag\xeancia de Design e Tecnologia especialista em Identidade Visual, Cria\xe7\xe3o de Sites Profissionais e Estrat\xe9gias Digitais para escalar seu neg\xf3cio."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://bechange.com.br/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "BecHANGE - Ag\xeancia de Cria\xe7\xe3o de Sites e Identidade Visual"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Ag\xeancia de Design e Tecnologia especialista em Identidade Visual, Cria\xe7\xe3o de Sites Profissionais e Estrat\xe9gias Digitais."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://bechange.com.br/img/hero/1.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:url",
                        content: "https://bechange.com.br/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:title",
                        content: "BecHANGE - Ag\xeancia de Cria\xe7\xe3o de Sites e Identidade Visual"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:description",
                        content: "Ag\xeancia de Design e Tecnologia especialista em Identidade Visual, Cria\xe7\xe3o de Sites Profissionais e Estrat\xe9gias Digitais."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:image",
                        content: "https://bechange.com.br/img/hero/1.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://bechange.com.br/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preload",
                        as: "image",
                        href: "/img/hero/1.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Recognition__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Portfolio__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_Contact__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_5__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            posts: allPosts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2459:
/***/ ((module) => {

module.exports = require("parallax-js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 1301:
/***/ ((module) => {

module.exports = import("react-icons/fa");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2166:
/***/ ((module) => {

module.exports = JSON.parse('{"ri":{"B":"/img/person/adolfo-castilho-garcia-bechange_avatar.webp","w":"avatar"},"TN":"Agência de Criação de Sites Profissionais e Identidade Visual Estratégica","WL":"Adolfo Castilho é a força criativa e estratégica por trás da BeChange. Há mais de 22 anos transforma ideias em identidades visuais, sites e experiências digitais que geram resultado financeiro. Lidera pessoalmente cada projeto, garantindo visão refinada, foco em conversão e atendimento direto e humanizado. Desde 2013, à frente da BeChange, acompanha clientes que abriram ou expandiram empresas no Brasil, EUA, Emirados Árabes, França, Itália, Austrália e outros países, levando design estratégico e presença digital profissional para novos mercados. A BeChange conta com certificações Adegraf, ADG, ABCOM e registro DUNS, reforçando a seriedade da operação e a segurança para quem escolhe trabalhar com a agência.","UN":[{"image":"/img/logos/adegraf.webp","alt":"Adegraf"},{"image":"/img/logos/duns.webp","alt":"DUNS"},{"image":"/img/logos/adg.webp","alt":"ADG"},{"image":"/img/logos/abcom.webp","alt":"ABCOM"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,893,636,29,255,152,806,564,845], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();