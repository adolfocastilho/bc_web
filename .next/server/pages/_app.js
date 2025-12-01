(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3645:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Outfit_0d2a7b', '__Outfit_Fallback_0d2a7b'","fontStyle":"normal"},
	"className": "__className_0d2a7b",
	"variable": "__variable_0d2a7b"
};


/***/ }),

/***/ 3377:
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
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
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
;// CONCATENATED MODULE: ./src/pages/_app.js






//import '../styles/scss/style-dark.scss';





function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9179)).then(({ register  })=>{
            register();
        });
    }, []);
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
            })
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

/***/ 9179:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/element/bundle");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,806], () => (__webpack_exec__(3377)));
module.exports = __webpack_exports__;

})();