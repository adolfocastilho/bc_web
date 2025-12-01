(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.js","import":"Outfit","arguments":[{"subsets":["latin"],"variable":"--font-outfit","display":"swap"}],"variableName":"outfit"}
var _app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_ = __webpack_require__(3645);
var _app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default = /*#__PURE__*/__webpack_require__.n(_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/styles/scss/style-light.scss
var style_light = __webpack_require__(1568);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./public/css/plugins/bootstrap-grid.css
var bootstrap_grid = __webpack_require__(9888);
// EXTERNAL MODULE: ./public/css/plugins/swiper.min.css
var swiper_min = __webpack_require__(4002);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/components/common/ThirdPartyScripts.jsx



/**
 * Componente centralizado para gerenciar scripts de terceiros
 * Usa next/script com estratégia lazyOnload para evitar bloqueio da thread principal
 */ const ThirdPartyScripts = ()=>{
    const [loadChat, setLoadChat] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // Carrega chat widget apenas após primeira interação do usuário
        // Isso evita bloqueio da thread principal durante hidratação
        const handleUserInteraction = ()=>{
            setLoadChat(true);
            // Remove listeners após primeira interação
            window.removeEventListener("scroll", handleUserInteraction);
            window.removeEventListener("mousemove", handleUserInteraction);
            window.removeEventListener("touchstart", handleUserInteraction);
        };
        // Timeout de segurança: carrega após 5s mesmo sem interação
        const timeoutId = setTimeout(()=>{
            setLoadChat(true);
        }, 5000);
        // Adiciona listeners para primeira interação
        window.addEventListener("scroll", handleUserInteraction, {
            passive: true
        });
        window.addEventListener("mousemove", handleUserInteraction, {
            passive: true
        });
        window.addEventListener("touchstart", handleUserInteraction, {
            passive: true
        });
        return ()=>{
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleUserInteraction);
            window.removeEventListener("mousemove", handleUserInteraction);
            window.removeEventListener("touchstart", handleUserInteraction);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            process.env.NEXT_PUBLIC_GTM_ID && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                        id: "google-tag-manager",
                        strategy: "lazyOnload",
                        src: `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                        id: "gtm-init",
                        strategy: "lazyOnload",
                        dangerouslySetInnerHTML: {
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
                  page_path: window.location.pathname,
                });
              `
                        }
                    })
                ]
            }),
            process.env.NEXT_PUBLIC_FB_PIXEL_ID && /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "facebook-pixel",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `
                }
            }),
            process.env.NEXT_PUBLIC_HOTJAR_ID && /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "hotjar",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
                }
            }),
            loadChat && process.env.NEXT_PUBLIC_CHAT_WIDGET_URL && /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "chat-widget",
                strategy: "lazyOnload",
                src: process.env.NEXT_PUBLIC_CHAT_WIDGET_URL
            }),
            loadChat && process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "whatsapp-widget",
                strategy: "lazyOnload",
                dangerouslySetInnerHTML: {
                    __html: `
              (function() {
                var wa = document.createElement('a');
                wa.href = 'https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}';
                wa.className = 'whatsapp-float';
                wa.target = '_blank';
                wa.rel = 'noopener noreferrer';
                wa.innerHTML = '<img src="/img/icons/whatsapp.svg" alt="WhatsApp" />';
                document.body.appendChild(wa);
              })();
            `
                }
            })
        ]
    });
};
/* harmony default export */ const common_ThirdPartyScripts = (ThirdPartyScripts);

;// CONCATENATED MODULE: ./src/pages/_app.js






//import '../styles/scss/style-dark.scss';






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        className: style_default().dynamic([
                            [
                                "7ab22b11a229ee13",
                                [
                                    (_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default()).style.fontFamily
                                ]
                            ]
                        ]),
                        children: [
                            app/* settings.siteName */.Xd.aD,
                            " - Identidade Visual e Sites Profissionais"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: style_default().dynamic([
                            [
                                "7ab22b11a229ee13",
                                [
                                    (_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default()).style.fontFamily
                                ]
                            ]
                        ])
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "7ab22b11a229ee13",
                dynamic: [
                    (_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default()).style.fontFamily
                ],
                children: `:root{--font-outfit:${(_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "7ab22b11a229ee13",
                        [
                            (_app_js_import_Outfit_arguments_subsets_latin_variable_font_outfit_display_swap_variableName_outfit_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            /*#__PURE__*/ jsx_runtime.jsx(common_ThirdPartyScripts, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9888:
/***/ (() => {



/***/ }),

/***/ 4002:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1568:
/***/ (() => {



/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,893,29,953,806], () => (__webpack_exec__(4808)));
module.exports = __webpack_exports__;

})();