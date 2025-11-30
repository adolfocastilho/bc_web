(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ANIMATION)
/* harmony export */ });
/* unused harmony export LAYOUT */
/**
 * Animation and timing constants
 */ const ANIMATION = {
    // Scroll-based animations
    SCROLL_ROTATION_SPEED: 0.8,
    // Swiper autoplay delays (milliseconds)
    AUTOPLAY_DELAY_SLOW: 3000,
    AUTOPLAY_DELAY_MEDIUM: 2000,
    AUTOPLAY_DELAY_FAST: 1500,
    // Swiper stagger timings
    SWIPER_STAGGER_BASE: 1000,
    SWIPER_STAGGER_RANDOM_MAX: 3000,
    // Type animation speeds
    TYPE_SPEED: 150,
    BACKSPACE_SPEED: 80,
    BACKSPACE_DELAY: 2000
};
/**
 * Layout constants
 */ const LAYOUT = {
    // Header dimensions
    HEADER_HEIGHT: 90,
    SCROLL_OFFSET: 140,
    // Maximum content widths
    SECTION_DESCRIPTION_MAX_WIDTH: 800
};


/***/ }),

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Custom hook for media query matching
 * @param {string} query - CSS media query string (e.g., "(min-width: 992px)")
 * @returns {boolean} - Whether the media query matches
 * 
 * @example
 * const isDesktop = useMediaQuery("(min-width: 992px)");
 * const isMobile = useMediaQuery("(max-width: 767px)");
 */ const useMediaQuery = (query)=>{
    const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = ()=>setMatches(media.matches);
        media.addEventListener("change", listener);
        return ()=>media.removeEventListener("change", listener);
    }, [
        matches,
        query
    ]);
    return matches;
};


/***/ }),

/***/ 1422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ sliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Virtual,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.HashNavigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.History,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Keyboard,
    swiper__WEBPACK_IMPORTED_MODULE_0__.A11y
]);



const sliderProps = {
    milReviewsSlider: {
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        allowTouchMove: true,
        grabCursor: true,
        navigation: {
            nextEl: ".mil-reviews-next",
            prevEl: ".mil-reviews-prev"
        },
        pagination: {
            el: ".swiper-reviews-pagination",
            clickable: true
        }
    },
    milPortfolioCarousel: {
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: ".mil-portfolio-next",
            prevEl: ".mil-portfolio-prev"
        },
        pagination: {
            el: ".mil-portfolio-pagination",
            type: "fraction"
        },
        breakpoints: {
            1200: {
                spaceBetween: 90
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Modal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/components/common/Modal.jsx



/**
 * Reusable modal component using React Portal
 * Supports image lightbox and video player variants
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal closes
 * @param {React.ReactNode} props.children - Modal content
 * @param {('image'|'video')} props.variant - Modal type for styling
 * @param {boolean} props.mounted - Client-side mounting flag
 */ const Modal = ({ isOpen , onClose , children , variant ="image" , mounted =true  })=>{
    // Handle ESC key to close modal
    (0,external_react_.useEffect)(()=>{
        const handleEscape = (e)=>{
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
            return ()=>{
                document.removeEventListener("keydown", handleEscape);
                document.body.style.overflow = "";
            };
        }
    }, [
        isOpen,
        onClose
    ]);
    if (!mounted || !isOpen) return null;
    return /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-modal-overlay",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Modal",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `mil-modal-content mil-modal-${variant}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                children,
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    onClick: onClose,
                    className: "mil-modal-close",
                    "aria-label": "Fechar modal",
                    type: "button",
                    children: "\xd7"
                })
            ]
        })
    }), document.body);
};
/* harmony default export */ const common_Modal = (Modal);


/***/ }),

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"ri":{"B":"/img/person/adolfo-castilho-garcia-bechange_avatar.webp","w":"avatar"},"TN":"Agência especialista em Identidade Visual e Sites de Alta Performance.","WL":"Adolfo Castilho é a força criativa e estratégica por trás da BeChange. Há mais de 22 anos transforma ideias em identidades visuais, sites e experiências digitais que geram resultado financeiro. Lidera pessoalmente cada projeto, garantindo visão refinada, foco em conversão e atendimento direto e humanizado. Desde 2013, à frente da BeChange, acompanha clientes que abriram ou expandiram empresas no Brasil, EUA, Emirados Árabes, França, Itália, Austrália e outros países, levando design estratégico e presença digital profissional para novos mercados. A BeChange conta com selos Adegraf, ADG, ABCOM e registro DUNS, reforçando a seriedade da operação e a segurança para quem escolhe trabalhar com a agência","UN":[{"image":"/img/logos/adegraf.webp","alt":"Adegraf"},{"image":"/img/logos/duns.webp","alt":"DUNS"},{"image":"/img/logos/adg.webp","alt":"ADG"},{"image":"/img/logos/abcom.webp","alt":"ABCOM"}]}');
;// CONCATENATED MODULE: ./src/components/sections/About.jsx


const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            id: "about",
            className: "mil-p-0-90",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-oval-frame-2 mil-mb-90",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: about_namespaceObject.ri.B,
                            alt: about_namespaceObject.ri.w,
                            width: 1536,
                            height: 1536,
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "mil-up mil-mb-30",
                                        dangerouslySetInnerHTML: {
                                            __html: about_namespaceObject.TN
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-quote mil-up mil-mb-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-quote-left"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        children: about_namespaceObject.WL
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-logos-wrapper mil-up mil-mb-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-marquee-track",
                                            children: [
                                                ...about_namespaceObject.UN,
                                                ...about_namespaceObject.UN,
                                                ...about_namespaceObject.UN,
                                                ...about_namespaceObject.UN
                                            ].map((logo, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-logo-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: logo.image,
                                                        alt: logo.alt,
                                                        width: 400,
                                                        height: 400,
                                                        loading: "lazy"
                                                    })
                                                }, index))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-up mil-mb-30 mil-mt-60",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#portfolio",
                                            className: "mil-btn mil-sm-btn mil-rounded",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
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
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 8064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/sections/Contact.jsx




const ContactSection = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        id: "contact",
        className: "mil-p-0-0 mil-mt-90",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-center mil-mb-60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-section-title mil-up mil-mb-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-divider"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Vamos conversar"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "mil-up mil-p-0-10",
                        style: {
                            maxWidth: "800px",
                            margin: "30px auto 30px",
                            textAlign: "center"
                        },
                        children: "Se voc\xea enxerga potencial de crescimento mas sabe que sua presen\xe7a digital atual n\xe3o sustenta esse pr\xf3ximo passo, seja pela marca que n\xe3o transmite autoridade, pelo site que n\xe3o converte, ou pela estrutura despreparada para tr\xe1fego pago, este \xe9 o ponto de partida. Solicite uma Reuni\xe3o de Avalia\xe7\xe3o Estrat\xe9gica de 60 minutos (cortesia). Vamos analisar sua situa\xe7\xe3o atual, identificar o que est\xe1 impedindo vendas e desenhar um plano t\xe9cnico e financeiramente vi\xe1vel para escalar com solidez."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-center mil-up mil-mb-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: "https://wa.me/5561996090943?text=Ol%C3%A1%2C%20Adolfo.%20Acessei%20o%20site%20da%20BeChange%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20para%20o%20meu%20neg%C3%B3cio.",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mil-btn mil-sm-btn mil-rounded",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "Agendar Reuni\xe3o Estrat\xe9gica"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-p-0-60",
                children: /*#__PURE__*/ jsx_runtime.jsx(external_formik_namespaceObject.Formik, {
                    initialValues: {
                        email: "",
                        name: "",
                        message: ""
                    },
                    validate: (values)=>{
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = "Invalid email address";
                        }
                        return errors;
                    },
                    onSubmit: (values, { setSubmitting  })=>{
                        const form = document.getElementById("contactForm");
                        const status = document.getElementById("contactFormStatus");
                        const data = new FormData();
                        data.append("name", values.name);
                        data.append("email", values.email);
                        data.append("message", values.message);
                        fetch(form.action, {
                            method: "POST",
                            body: data,
                            headers: {
                                "Accept": "application/json"
                            }
                        }).then((response)=>{
                            if (response.ok) {
                                form.reset();
                                router.push("/obrigado"); // Redirect to Thank You page
                            } else {
                                response.json().then((data)=>{
                                    if (Object.hasOwn(data, "errors")) {
                                        status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                                    } else {
                                        status.innerHTML = "Oops! There was a problem submitting your form";
                                    }
                                });
                            }
                        }).catch((error)=>{
                            status.innerHTML = "Oops! There was a problem submitting your form";
                        });
                        setSubmitting(false);
                    },
                    children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            id: "contactForm",
                            action: app/* settings.formspreeURL */.Xd.Tb,
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 mil-up",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "text",
                                        placeholder: "Seu Nome",
                                        name: "name",
                                        required: "required",
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 mil-up",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "email",
                                        placeholder: "Seu Email",
                                        name: "email",
                                        required: "required",
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.email
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-12 mil-up",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                        placeholder: "Conte sobre o seu projeto",
                                        name: "message",
                                        required: "required",
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.message
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-8 mil-mb-order-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mil-up mil-mb-30 mil-text-center-mobile",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "mil-accent",
                                                children: "*"
                                            }),
                                            " Seus dados est\xe3o protegidos pela BeChange. Respeitamos a LGPD.",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            "contato@bechange.com.br"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-4 mil-mb-order-1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-adaptive-right mil-up mil-mb-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "submit",
                                            className: "mil-btn mil-sm-btn mil-rounded",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Enviar Mensagem"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "form-status",
                                    id: "contactFormStatus"
                                })
                            ]
                        })
                })
            })
        ]
    });
};
/* harmony default export */ const Contact = (ContactSection);


/***/ }),

/***/ 4144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6637);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5505);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([typed_js__WEBPACK_IMPORTED_MODULE_3__]);
typed_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const HeroOne = ()=>{
    const el = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleScroll = ()=>{
            setRotation(window.scrollY * _common_constants__WEBPACK_IMPORTED_MODULE_4__/* .ANIMATION.SCROLL_ROTATION_SPEED */ .l.SCROLL_ROTATION_SPEED);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_3__["default"](el.current, {
            strings: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_1__/* .typedStrings */ .AT,
            typeSpeed: _common_constants__WEBPACK_IMPORTED_MODULE_4__/* .ANIMATION.TYPE_SPEED */ .l.TYPE_SPEED,
            backSpeed: _common_constants__WEBPACK_IMPORTED_MODULE_4__/* .ANIMATION.BACKSPACE_SPEED */ .l.BACKSPACE_SPEED,
            backDelay: _common_constants__WEBPACK_IMPORTED_MODULE_4__/* .ANIMATION.BACKSPACE_DELAY */ .l.BACKSPACE_DELAY,
            loop: true,
            showCursor: true
        });
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "mil-side-banner mil-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mil-banner-top mil-up"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-banner-title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/icons/icone_hero_bechange.svg",
                            alt: "BeCHANGE",
                            width: 180,
                            height: 250,
                            className: "mil-up mil-mb-30 mil-hero-icon"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-upper mil-dark mil-up mil-mb-30",
                            children: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_1__/* .subtitle */ .Oc
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mil-up mil-mb-30",
                            style: {
                                minHeight: "1.2em"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                ref: el
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mil-upper mil-dark mil-up",
                            children: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mil-up mil-oval-frame",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-circle-text",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "circlePath",
                                            d: "M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "150",
                                        cy: "100",
                                        r: "75",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                                                xlinkHref: "#circlePath",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                style: {
                                                    "letterSpacing": "3px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textPath", {
                                                    xlinkHref: "#circlePath",
                                                    children: "Deslize para baixo - Deslize para baixo - "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#about",
                                className: "mil-button",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3462);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8748);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4437);
/* harmony import */ var _common_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PortfolioSection = ()=>{
    const isDesktop = (0,_common_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__/* .useMediaQuery */ .a)("(min-width: 992px)");
    const [lightboxOpen, setLightboxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        setMounted(true);
        return ()=>setMounted(false);
    }, []);
    const openLightbox = (imgSrc)=>{
        const fullImgSrc = imgSrc.replace("/thumb/", "/full/");
        setSelectedImage(fullImgSrc);
        setLightboxOpen(true);
    };
    const closeLightbox = ()=>{
        setLightboxOpen(false);
        setSelectedImage("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "portfolio",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-section-title mil-up",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mil-divider"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mil-up mil-p-0-10 mil-section-description",
                        children: _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-p-90-30",
                        style: {
                            paddingTop: "0"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row g-0 align-items-center",
                            children: _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__/* .items.map */ .ev.map((item, key)=>{
                                let borderRadius = "0";
                                // Calculate effective index for desktop (ignoring mobileOnly items)
                                // This is a simplified approach assuming mobileOnly items are at the end.
                                // If mobileOnly items are interspersed, this logic would need to be more complex.
                                if (isDesktop) {
                                    // Desktop: 4 columns
                                    // If item is mobileOnly, it will be hidden, so borderRadius doesn't matter much visually,
                                    // but we need to ensure the visible items get the correct radius.
                                    // We need to know the total VISIBLE items to calculate the last row correctly.
                                    const visibleItems = _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__/* .items.filter */ .ev.filter((i)=>!i.mobileOnly);
                                    const totalVisible = visibleItems.length;
                                    // Find the index of this item in the visible list
                                    const visibleIndex = visibleItems.indexOf(item);
                                    if (visibleIndex !== -1) {
                                        if (visibleIndex === 0) borderRadius = "20px 0 0 0";
                                        else if (visibleIndex === 3) borderRadius = "0 20px 0 0";
                                        else if (visibleIndex === totalVisible - 4) borderRadius = "0 0 0 20px";
                                        else if (visibleIndex === totalVisible - 1) borderRadius = "0 0 20px 0";
                                    }
                                } else {
                                    // Mobile/Tablet: 2 columns
                                    // Use original key and total
                                    const total = _data_sections_portfolio_json__WEBPACK_IMPORTED_MODULE_1__/* .items.length */ .ev.length;
                                    if (key === 0) borderRadius = "20px 0 0 0";
                                    else if (key === 1) borderRadius = "0 20px 0 0";
                                    else if (key === total - 2) borderRadius = "0 0 0 20px";
                                    else if (key === total - 1) borderRadius = "0 0 20px 0";
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `col-6 col-lg-3 ${item.mobileOnly ? "d-lg-none" : ""}`,
                                    style: {
                                        padding: 0
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-icon-box mil-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-service-slider",
                                            style: {
                                                width: "100%",
                                                borderRadius: borderRadius,
                                                overflow: "hidden"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                modules: [
                                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                                                    swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
                                                ],
                                                spaceBetween: 0,
                                                slidesPerView: 1,
                                                loop: true,
                                                autoplay: {
                                                    delay: 1500,
                                                    disableOnInteraction: false
                                                },
                                                effect: "fade",
                                                style: {
                                                    width: "100%",
                                                    aspectRatio: "1/1"
                                                },
                                                onSwiper: (swiper)=>{
                                                    setTimeout(()=>{
                                                        if (swiper.autoplay) {
                                                            swiper.autoplay.stop();
                                                            setTimeout(()=>{
                                                                if (swiper.autoplay) {
                                                                    swiper.autoplay.start();
                                                                }
                                                            }, Math.random() * 3000);
                                                        }
                                                    }, 0);
                                                },
                                                children: item.images.map((img, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: img,
                                                            loading: "lazy",
                                                            alt: `${item.title} ${i + 1}`,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                cursor: "pointer"
                                                            },
                                                            onClick: ()=>openLightbox(img)
                                                        })
                                                    }, `portfolio-img-${key}-${i}`))
                                            })
                                        })
                                    })
                                }, `portfolio-item-${key}`);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                isOpen: lightboxOpen,
                onClose: closeLightbox,
                variant: "image",
                mounted: mounted,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: selectedImage,
                    alt: "Full size"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3108);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4437);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1422);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_5__, _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_5__, _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const RecognitionSection = ()=>{
    const [activeVideo, setActiveVideo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setMounted(true);
        return ()=>setMounted(false);
    }, []);
    const handlePlay = (videoId)=>{
        setActiveVideo(videoId);
    };
    const handleClose = ()=>{
        setActiveVideo(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "recognition",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mil-section-title mil-up",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mil-divider"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mil-up mil-p-0-10 mil-section-description",
                        children: _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-p-90-30 d-none d-lg-block",
                        style: {
                            paddingTop: "0"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row justify-content-between align-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                                ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_6__/* .sliderProps.milReviewsSlider */ .b.milReviewsSlider,
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination,
                                    swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay
                                ],
                                spaceBetween: 30,
                                slidesPerView: 3,
                                loop: true,
                                autoplay: {
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                },
                                className: "mil-services-slider",
                                children: _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_1__/* .items.map */ .ev.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-icon-box mil-center mil-mb-60",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-video-thumbnail",
                                                    style: {
                                                        marginBottom: "30px"
                                                    },
                                                    onClick: ()=>handlePlay(item.videoId),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
                                                            alt: item.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-play-button",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "white",
                                                                stroke: "white",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                                    points: "5 3 19 12 5 21 5 3"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "mil-up mil-mb-5",
                                                    children: [
                                                        item.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                marginLeft: "8px",
                                                                fontSize: "16px",
                                                                opacity: 1
                                                            },
                                                            children: item.flag
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mil-up mil-mb-15",
                                                    style: {
                                                        fontSize: "14px",
                                                        fontWeight: 500
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-muted",
                                                        children: item.location
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mil-up mil-mb-30",
                                                    style: {
                                                        marginTop: "15px",
                                                        fontSize: "14px"
                                                    },
                                                    children: item.text
                                                })
                                            ]
                                        })
                                    }, `recognition-desktop-${key}`))
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-p-90-90 d-lg-none",
                        style: {
                            paddingTop: "0"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row justify-content-center mil-reviews-slider-frame",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                                        ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_6__/* .sliderProps.milReviewsSlider */ .b.milReviewsSlider,
                                        autoplay: {
                                            delay: 2000,
                                            disableOnInteraction: false
                                        },
                                        className: "swiper-container mil-reviews-slider mil-mb-30",
                                        children: _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_1__/* .items.map */ .ev.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-review mil-center",
                                                    "data-swiper-parallax-opacity": "0",
                                                    "data-swiper-parallax": "-90",
                                                    "data-swiper-parallax-scale": ".8",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mil-review-top",
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mil-video-thumbnail mil-up",
                                                                    style: {
                                                                        maxWidth: "600px",
                                                                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                                                        marginBottom: "60px"
                                                                    },
                                                                    onClick: ()=>handlePlay(item.videoId),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
                                                                            alt: item.title,
                                                                            loading: "lazy"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "mil-play-button mil-play-button-large",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "28",
                                                                                height: "28",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "white",
                                                                                stroke: "white",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                                                    points: "5 3 19 12 5 21 5 3"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "mil-name",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                            className: "mil-up",
                                                                            style: {
                                                                                marginBottom: 0
                                                                            },
                                                                            children: [
                                                                                item.title,
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    style: {
                                                                                        marginLeft: "8px",
                                                                                        fontSize: "18px",
                                                                                        opacity: 1
                                                                                    },
                                                                                    children: item.flag
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mil-upper mil-up",
                                                                            style: {
                                                                                fontSize: "14px"
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                style: {
                                                                                    opacity: 0.7
                                                                                },
                                                                                children: item.location
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mil-up",
                                                            style: {
                                                                maxWidth: "600px",
                                                                margin: "20px auto 0",
                                                                fontSize: "14px"
                                                            },
                                                            children: item.text
                                                        })
                                                    ]
                                                })
                                            }, `recognition-mobile-${key}`))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mil-slider-nav mil-up",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-reviews-prev",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "feather feather-arrow-right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "12 5 19 12 12 19"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-reviews-next",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "feather feather-arrow-right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "12 5 19 12 12 19"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-reviews-pagination mil-up"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                isOpen: !!activeVideo,
                onClose: handleClose,
                variant: "video",
                mounted: mounted,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: `https://www.youtube.com/embed/${activeVideo}?autoplay=1`,
                    title: "YouTube video player",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true,
                    loading: "lazy"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecognitionSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_services_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(466);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8748);
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ServicesSection = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: _data_sections_services_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mil-up mil-p-0-10 mil-section-description",
                children: _data_sections_services_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-p-90-30",
                style: {
                    paddingTop: "0"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: _data_sections_services_json__WEBPACK_IMPORTED_MODULE_1__/* .items.map */ .ev.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mil-icon-box mil-center mil-mb-60",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-service-slider mil-mb-30",
                                        style: {
                                            width: "100%",
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            border: "solid 1px rgba(0, 0, 0, 0.05)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                            modules: [
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade
                                            ],
                                            spaceBetween: 0,
                                            slidesPerView: 1,
                                            loop: true,
                                            autoplay: false,
                                            effect: "fade",
                                            style: {
                                                width: "100%",
                                                aspectRatio: "1/1"
                                            },
                                            onSwiper: (swiper)=>{
                                                // Manually configure and start autoplay with a random delay
                                                const randomDelay = Math.floor(Math.random() * 2500);
                                                // Ensure autoplay params are set
                                                if (!swiper.params.autoplay) {
                                                    swiper.params.autoplay = {};
                                                }
                                                Object.assign(swiper.params.autoplay, {
                                                    delay: 2000,
                                                    disableOnInteraction: false
                                                });
                                                setTimeout(()=>{
                                                    if (swiper.autoplay) {
                                                        swiper.autoplay.start();
                                                    }
                                                }, randomDelay);
                                            },
                                            children: item.images.map((img, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            display: "block",
                                                            width: "100%",
                                                            height: "100%",
                                                            cursor: "default"
                                                        },
                                                        children: img.endsWith(".mp4") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                            src: img,
                                                            poster: "/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo1.webp" // Placeholder poster using an existing thumb
                                                            ,
                                                            preload: "none",
                                                            autoPlay: true,
                                                            loop: true,
                                                            muted: true,
                                                            playsInline: true,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: img,
                                                            loading: "lazy",
                                                            alt: `${item.title} ${i + 1}`,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }
                                                        })
                                                    })
                                                }, `service-img-${key}-${i}`))
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mil-up mil-mb-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "inherit",
                                                textDecoration: "none",
                                                cursor: "default"
                                            },
                                            children: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mil-up mil-mb-5",
                                        children: item.text
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mil-up mil-mb-30",
                                        style: {
                                            display: "block",
                                            fontWeight: "bold",
                                            color: "inherit",
                                            cursor: "default"
                                        },
                                        children: item.linkText || "Saiba mais..."
                                    })
                                ]
                            })
                        }, `services-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3190);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(745);
/* harmony import */ var _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4424);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8557);
/* harmony import */ var _components_sections_Recognition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8231);
/* harmony import */ var _components_sections_Portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8701);
/* harmony import */ var _src_components_sections_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8064);
/* harmony import */ var _data_sections_recognition_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_5__, _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_6__, _components_sections_Services__WEBPACK_IMPORTED_MODULE_8__, _components_sections_Recognition__WEBPACK_IMPORTED_MODULE_9__, _components_sections_Portfolio__WEBPACK_IMPORTED_MODULE_10__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_5__, _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_6__, _components_sections_Services__WEBPACK_IMPORTED_MODULE_8__, _components_sections_Recognition__WEBPACK_IMPORTED_MODULE_9__, _components_sections_Portfolio__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Home1 = (props)=>{
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BeCHANGE",
        "image": "https://bechange.com.br/img/person/adolfo-castilho-garcia-bechange_avatar.webp",
        "description": "Ag\xeancia especialista em Identidade Visual e Sites de Alta Performance.",
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
                        content: "BeCHANGE - Identidade Visual e Sites Profissionais"
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
                        content: "BeCHANGE - Identidade Visual e Sites Profissionais"
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

/***/ 8748:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 2459:
/***/ ((module) => {

"use strict";
module.exports = require("parallax-js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 5505:
/***/ ((module) => {

"use strict";
module.exports = import("typed.js");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 6637:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Oc":"22 ANOS DE CRIATIVIDADE","AT":["BeCHANGE","Seja a Mudança"],"WL":"Estúdio de Design Especialista em Sites e Identidade Visual"}');

/***/ }),

/***/ 3462:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TN":"Portfólio","WL":"22 anos de experiência, mais de 500 projetos entregues e clientes em 8 países. Cada trabalho reflete o compromisso com design estratégico, execução técnica refinada e resultados que escalam negócios.","ev":[{"title":"Projeto 1","text":"Identidade Visual & Branding","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo211.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo194.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo191.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo197.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo143.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo37.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo135.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo79.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo23.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo213.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo128.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo88.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo209.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo192.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo18.webp"],"link":"#"},{"title":"Projeto 2","text":"Design Estratégico","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo196.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo80.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo76.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo146.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo176.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo204.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo4.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo27.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo2.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo138.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo40.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo97.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo61.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo100.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo157.webp"],"link":"#"},{"title":"Projeto 3","text":"Criação de Sites","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo160.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo55.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo221.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo174.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo217.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo82.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo111.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo228.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo56.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo14.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo85.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo17.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo104.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo114.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo62.webp"],"link":"#"},{"title":"Projeto 4","text":"UI/UX Design","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo233.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo210.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo22.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo206.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo8.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo107.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo189.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo9.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo64.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo92.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo51.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo59.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo193.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo131.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo169.webp"],"link":"#"},{"title":"Projeto 5","text":"Marketing Digital","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo222.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo226.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo127.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo167.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo187.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo219.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo95.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo154.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo71.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo164.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo66.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo41.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo159.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo42.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo166.webp"],"link":"#"},{"title":"Projeto 6","text":"Consultoria de Marca","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo32.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo105.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo188.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo87.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo90.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo118.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo137.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo25.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo214.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo133.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo175.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo30.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo6.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo132.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo108.webp"],"link":"#"},{"title":"Projeto 7","text":"Identidade Corporativa","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo234.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo34.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo220.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo72.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo134.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo110.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo178.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo126.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo142.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo231.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo130.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo36.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo158.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo168.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo171.webp"],"link":"#"},{"title":"Projeto 8","text":"Design Gráfico","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo43.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo165.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo54.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo113.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo11.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo123.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo69.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo35.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo50.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo215.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo172.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo29.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo39.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo12.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo63.webp"],"link":"#"},{"title":"Projeto 9","text":"Web Design","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo53.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo24.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo198.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo15.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo86.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo185.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo218.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo148.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo161.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo75.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo77.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo184.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo229.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo94.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo162.webp"],"link":"#"},{"title":"Projeto 10","text":"Redes Sociais","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo153.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo21.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo89.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo207.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo144.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo122.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo225.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo141.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo13.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo74.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo170.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo91.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo58.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo33.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo103.webp"],"link":"#"},{"title":"Projeto 11","text":"Estratégia Digital","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo5.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo149.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo151.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo16.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo45.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo78.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo186.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo57.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo212.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo203.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo232.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo93.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo102.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo117.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo65.webp"],"link":"#"},{"title":"Projeto 12","text":"Design de Embalagens","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo125.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo60.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo180.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo183.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo83.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo109.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo96.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo49.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo200.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo190.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo199.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo163.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo140.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo1.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo145.webp"],"link":"#"},{"title":"Projeto 13","text":"Comunicação Visual","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo129.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo116.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo48.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo31.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo173.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo119.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo139.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo208.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo181.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo120.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo20.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo150.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo68.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo230.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo201.webp"],"link":"#"},{"title":"Projeto 14","text":"Design Editorial","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo205.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo227.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo195.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo101.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo112.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo73.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo224.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo179.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo182.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo67.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo10.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo28.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo46.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo19.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo121.webp"],"link":"#"},{"title":"Projeto 15","text":"Motion Graphics","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo124.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo152.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo3.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo223.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo44.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo106.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo147.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo84.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo115.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo47.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo98.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo7.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo99.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo52.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo70.webp"],"link":"#"},{"title":"Projeto 16","text":"Fotografia","images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo155.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo26.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo202.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo216.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo81.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo136.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo177.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo156.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo38.webp"],"link":"#"},{"title":"Projeto 17","text":"Mobile Only 1","mobileOnly":true,"images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo1.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo2.webp"],"link":"#"},{"title":"Projeto 18","text":"Mobile Only 2","mobileOnly":true,"images":["/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo3.webp","/img/portfolio/thumb/bechange_logomarca-identidade-visual-logotipo4.webp"],"link":"#"}]}');

/***/ }),

/***/ 3108:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TN":"Depoimentos","WL":"Clientes em diferentes países que buscaram um parceiro estratégico, não apenas um designer ou programador. Aqui você vê como projetos bem conduzidos geram resultados, relações duradouras e abrem portas para novos mercados.","ev":[{"title":"Dr. Gregory Markarian","location":"Chicago - Illinois - USA","countryCode":"us","flag":"🇺🇸","videoId":"UUjmXZi5KjU","text":"Identidade visual, website e embalagens para empresas de produtos médicos e clínica ortopédica, elevando autoridade no setor de saúde.","link":"#"},{"title":"Marcelino da Silva","location":"San Diego - Califórnia - USA","countryCode":"us","flag":"🇺🇸","videoId":"gPtSRmFbw9M","text":"Website profissional para empresa de restauração arquitetônica, destacando expertise em tetos, lareiras e detalhes históricos de casas.","link":"#"},{"title":"Gregoire Gaumont","location":"Le Mans - França","countryCode":"fr","flag":"🇫🇷","videoId":"MZYHltDmm8A","text":"Identidade visual e website estratégico para chef de cozinha francesa, elevando presença digital e autoridade gastronômica internacional.","link":"#"},{"title":"Lorena Paim","location":"Melbourne - Vitória - Austrália","countryCode":"au","flag":"🇦🇺","videoId":"DSGkNs_ngnU","text":"Identidade visual completa para clínica veterinária e materiais impressos (flyers), transmitindo cuidado profissional e confiança animal.","link":"#"},{"title":"Mirthis Siqueira","location":"San Diego - Califórnia - USA","countryCode":"us","flag":"🇺🇸","videoId":"D79eqK9Jt1c","text":"Identidade visual sofisticada para grife de moda praia feminina, comunicando elegância, exclusividade e essência brasileira premium.","link":"#"},{"title":"Amanda Ferreira","location":"Naples - Flórida - USA","countryCode":"us","flag":"🇺🇸","videoId":"Sy5LaxD5WEs","text":"Identidade visual estratégica para personal trainer, transmitindo energia, disciplina, profissionalismo e resultados reais de transformação.","link":"#"},{"title":"Estelita Gomes","location":"New York City - New York - USA","countryCode":"us","flag":"🇺🇸","videoId":"mf_5wKJwDpc","text":"Website profissional para empresa de manutenção e limpeza comercial, transmitindo confiabilidade, organização e seriedade operacional.","link":"#"}]}');

/***/ }),

/***/ 466:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TN":"Serviços","WL":"Uma estrutura completa para posicionar sua marca com consistência, sofisticação e resultado mensurável. Cada projeto é desenhado para aumentar o valor percebido da sua marca, gerar autoridade no mercado e transformar presença digital em ferramenta de vendas.","ev":[{"title":"Identidade Visual Estratégica","images":["/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo1.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo2.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo3.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo4.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo5.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo6.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo7.webp","/img/portfolio/identidade/bechange_logomarca-identidade-visual-logotipo8.webp"],"text":"Criação de identidade visual completa: logotipo, paleta de cores, tipografia, grafismos proprietários e manual de uso. Sistema visual pensado para aplicar em site, redes sociais, materiais digitais, impressos, apresentações e toda comunicação da marca. Marcas fortes cobram mais e atraem clientes melhores.","link":"/services/service-1","linkText":"Ver projetos de Identidade Visual"},{"title":"Sites Institucionais e Landing Pages","images":["/img/portfolio/sites/bechange_criacao-sites-landing-page1.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page2.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page3.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page4.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page5.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page6.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page7.webp","/img/portfolio/sites/bechange_criacao-sites-landing-page8.webp"],"text":"Desenvolvimento de sites e landing pages focados em conversão e autoridade. Layout responsivo, velocidade otimizada, SEO on page, acessibilidade, páginas legais LGPD e integrações para captar leads, vender online e fortalecer presença digital profissional. Cada site pensado para sustentar tráfego pago.","link":"/services/service-2","linkText":"Conhecer Criação de Sites"},{"title":"Edição de Vídeo e Motion","images":["/img/portfolio/videos/bechange-edicao-de-video-motion.mp4"],"text":"Edição de vídeos institucionais, publicitários, reels e conteúdo curto com motion design, ritmo ajustado e narrativa clara. Entregas prontas para sites, apresentações, campanhas online, YouTube, Instagram e anúncios que precisam comunicar rápido, emocionar e gerar resultado real e audiência imediata qualificada.","link":"/services/service-3","linkText":"Ver portfólio de Vídeos"},{"title":"Agentes de IA e Chatbots","images":["/img/portfolio/agente/bechange_automacao-whatsapp-chatbot-ia1.webp","/img/portfolio/agente/bechange_automacao-whatsapp-chatbot-ia2.webp"],"text":"Criação de agentes de IA e chatbots para site ou WhatsApp com linguagem humanizada. Atendem dúvidas, captam leads, registram contatos, automatizam respostas frequentes e conectam formulários, agendas e fluxos simples do negócio. Tecnologia aplicada para reduzir custos operacionais.","link":"/services/service-4","linkText":"Contratar Agentes de IA"},{"title":"Sistemas, Apps Web e Manutenção","images":["/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida1.webp","/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida2.webp","/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida3.webp","/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida4.webp","/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida5.webp","/img/portfolio/sistemas/bechange_desenvolvimento-sistemas-web-software-sob-medida6.webp"],"text":"Desenvolvimento de sistemas e aplicativos web sob medida para orçamentos, reservas, áreas do cliente, e CRM. Manutenção com atualizações de segurança, monitoramento de performance, gerenciamento de hospedagem, backups automáticos e suporte contínuo. Tudo sempre seguro, estável e rápido.","link":"/services/service-5","linkText":"Ver soluções em Sistemas"},{"title":"Tráfego Pago e Performance","images":["/img/portfolio/trafego/bechange_gestao-trafego-pago-google-ads-facebook-ads1.webp","/img/portfolio/trafego/bechange_gestao-trafego-pago-google-ads-facebook-ads2.webp","/img/portfolio/trafego/bechange_gestao-trafego-pago-google-ads-facebook-ads3.webp","/img/portfolio/trafego/bechange_gestao-trafego-pago-google-ads-facebook-ads4.webp"],"text":"Gestão de tráfego pago e anúncios para Google, Instagram e Facebook alinhados à estratégia digital e ao posicionamento da marca. Campanhas pensadas para conversão, leitura clara das métricas principais, otimização constante do orçamento e resultados em vendas online. Design e mídia trabalhando juntos.","link":"/services/service-6","linkText":"Consultar Gestão de Tráfego"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,806,190,745], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();