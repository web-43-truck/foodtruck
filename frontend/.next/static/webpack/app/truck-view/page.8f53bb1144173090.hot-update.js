/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/truck-view/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cazuce%5COneDrive%5CDesktop%5Cbootcamp%5Cgit%5Cfood-truck%5Cfrontend%5Csrc%5Capp%5Ctruck-view%5CTruckView.tsx&server=false!":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cazuce%5COneDrive%5CDesktop%5Cbootcamp%5Cgit%5Cfood-truck%5Cfrontend%5Csrc%5Capp%5Ctruck-view%5CTruckView.tsx&server=false! ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/truck-view/TruckView.tsx */ \"(app-pages-browser)/./src/app/truck-view/TruckView.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz1DJTNBJTVDVXNlcnMlNUNhenVjZSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2Jvb3RjYW1wJTVDZ2l0JTVDZm9vZC10cnVjayU1Q2Zyb250ZW5kJTVDc3JjJTVDYXBwJTVDdHJ1Y2stdmlldyU1Q1RydWNrVmlldy50c3gmc2VydmVyPWZhbHNlISIsIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2VmZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJDOlxcXFxVc2Vyc1xcXFxhenVjZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGJvb3RjYW1wXFxcXGdpdFxcXFxmb29kLXRydWNrXFxcXGZyb250ZW5kXFxcXHNyY1xcXFxhcHBcXFxcdHJ1Y2stdmlld1xcXFxUcnVja1ZpZXcudHN4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5Cazuce%5COneDrive%5CDesktop%5Cbootcamp%5Cgit%5Cfood-truck%5Cfrontend%5Csrc%5Capp%5Ctruck-view%5CTruckView.tsx&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/image-external.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    unstable_getImgProps: function() {\n        return unstable_getImgProps;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_interop_require_default.js\");\nconst _getimgprops = __webpack_require__(/*! ./get-img-props */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/get-img-props.js\");\nconst _warnonce = __webpack_require__(/*! ./utils/warn-once */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/utils/warn-once.js\");\nconst _imagecomponent = __webpack_require__(/*! ../../client/image-component */ \"(app-pages-browser)/./node_modules/next/dist/client/image-component.js\");\nconst _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! next/dist/shared/lib/image-loader */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/image-loader.js\"));\nconst unstable_getImgProps = (imgProps)=>{\n    (0, _warnonce.warnOnce)(\"Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.\");\n    const { props } = (0, _getimgprops.getImgProps)(imgProps, {\n        defaultLoader: _imageloader.default,\n        // This is replaced by webpack define plugin\n        imgConf: {\"deviceSizes\":[640,750,828,1080,1200,1920,2048,3840],\"imageSizes\":[16,32,48,64,96,128,256,384],\"path\":\"/_next/image\",\"loader\":\"default\",\"dangerouslyAllowSVG\":false,\"unoptimized\":false,\"domains\":[],\"remotePatterns\":[]}\n    });\n    for (const [key, value] of Object.entries(props)){\n        if (value === undefined) {\n            delete props[key];\n        }\n    }\n    return {\n        props\n    };\n};\nconst _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pbWFnZS1leHRlcm5hbC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU87QUFDWCxDQUFDLEVBQUM7QUFDRixLQUFNQyxDQUFBQSxDQUdOO0FBQ0EsU0FBU0csUUFBUUMsTUFBTSxFQUFFQyxHQUFHO0lBQ3hCLElBQUksSUFBSUMsUUFBUUQsSUFBSVQsT0FBT0MsY0FBYyxDQUFDTyxRQUFRRSxNQUFNO1FBQ3BEQyxZQUFZO1FBQ1pDLEtBQUtILEdBQUcsQ0FBQ0MsS0FBSztJQUNsQjtBQUNKO0FBQ0FILFFBQVFMLFNBQVM7SUFDYkcsc0JBQXNCO1FBQ2xCLE9BQU9BO0lBQ1g7SUFDQUMsU0FBUztRQUNMLE9BQU9PO0lBQ1g7QUFDSjtBQUNBLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsZ0lBQXlDO0FBQ2xGLE1BQU1DLGVBQWVELG1CQUFPQSxDQUFDLGlHQUFpQjtBQUM5QyxNQUFNRSxZQUFZRixtQkFBT0EsQ0FBQyxxR0FBbUI7QUFDN0MsTUFBTUcsa0JBQWtCSCxtQkFBT0EsQ0FBQyw0R0FBOEI7QUFDOUQsTUFBTUksZUFBZSxXQUFXLEdBQUdMLHlCQUF5Qk0sQ0FBQyxDQUFDTCxtQkFBT0EsQ0FBQyxrSEFBbUM7QUFDekcsTUFBTVYsdUJBQXVCLENBQUNnQjtJQUN6QixJQUFHSixVQUFVSyxRQUFRLEVBQUU7SUFDeEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUdQLGFBQWFRLFdBQVcsRUFBRUgsVUFBVTtRQUN0REksZUFBZU4sYUFBYWIsT0FBTztRQUNuQyw0Q0FBNEM7UUFDNUNvQixTQUFTQywwTkFBNkI7SUFDMUM7SUFDQSxLQUFLLE1BQU0sQ0FBQ0csS0FBSzNCLE1BQU0sSUFBSUgsT0FBTytCLE9BQU8sQ0FBQ1IsT0FBTztRQUM3QyxJQUFJcEIsVUFBVTZCLFdBQVc7WUFDckIsT0FBT1QsS0FBSyxDQUFDTyxJQUFJO1FBQ3JCO0lBQ0o7SUFDQSxPQUFPO1FBQ0hQO0lBQ0o7QUFDSjtBQUNBLE1BQU1WLFdBQVdLLGdCQUFnQmUsS0FBSyxFQUV0QywwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2ltYWdlLWV4dGVybmFsLmpzPzY4Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB1bnN0YWJsZV9nZXRJbWdQcm9wczogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIHVuc3RhYmxlX2dldEltZ1Byb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHVuc3RhYmxlX2dldEltZ1Byb3BzO1xuICAgIH0sXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG59KTtcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XG5jb25zdCBfZ2V0aW1ncHJvcHMgPSByZXF1aXJlKFwiLi9nZXQtaW1nLXByb3BzXCIpO1xuY29uc3QgX3dhcm5vbmNlID0gcmVxdWlyZShcIi4vdXRpbHMvd2Fybi1vbmNlXCIpO1xuY29uc3QgX2ltYWdlY29tcG9uZW50ID0gcmVxdWlyZShcIi4uLy4uL2NsaWVudC9pbWFnZS1jb21wb25lbnRcIik7XG5jb25zdCBfaW1hZ2Vsb2FkZXIgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pbWFnZS1sb2FkZXJcIikpO1xuY29uc3QgdW5zdGFibGVfZ2V0SW1nUHJvcHMgPSAoaW1nUHJvcHMpPT57XG4gICAgKDAsIF93YXJub25jZS53YXJuT25jZSkoXCJXYXJuaW5nOiB1bnN0YWJsZV9nZXRJbWdQcm9wcygpIGlzIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGNoYW5nZSBvciBiZSByZW1vdmVkIGF0IGFueSB0aW1lLiBVc2UgYXQgeW91ciBvd24gcmlzay5cIik7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gKDAsIF9nZXRpbWdwcm9wcy5nZXRJbWdQcm9wcykoaW1nUHJvcHMsIHtcbiAgICAgICAgZGVmYXVsdExvYWRlcjogX2ltYWdlbG9hZGVyLmRlZmF1bHQsXG4gICAgICAgIC8vIFRoaXMgaXMgcmVwbGFjZWQgYnkgd2VicGFjayBkZWZpbmUgcGx1Z2luXG4gICAgICAgIGltZ0NvbmY6IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzXG4gICAgfTtcbn07XG5jb25zdCBfZGVmYXVsdCA9IF9pbWFnZWNvbXBvbmVudC5JbWFnZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtZXh0ZXJuYWwuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibW9kdWxlIiwidW5zdGFibGVfZ2V0SW1nUHJvcHMiLCJkZWZhdWx0IiwiX2V4cG9ydCIsInRhcmdldCIsImFsbCIsIm5hbWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX2RlZmF1bHQiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX2dldGltZ3Byb3BzIiwiX3dhcm5vbmNlIiwiX2ltYWdlY29tcG9uZW50IiwiX2ltYWdlbG9hZGVyIiwiXyIsImltZ1Byb3BzIiwid2Fybk9uY2UiLCJwcm9wcyIsImdldEltZ1Byb3BzIiwiZGVmYXVsdExvYWRlciIsImltZ0NvbmYiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJrZXkiLCJlbnRyaWVzIiwidW5kZWZpbmVkIiwiSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/truck-view/TruckView.tsx":
/*!******************************************!*\
  !*** ./src/app/truck-view/TruckView.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TruckView: function() { return /* binding */ TruckView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Picture */ \"(app-pages-browser)/./src/components/Picture.tsx\");\n/* harmony import */ var _components_TruckMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TruckMap */ \"(app-pages-browser)/./src/components/TruckMap.tsx\");\n/* __next_internal_client_entry_do_not_use__ TruckView auto */ \n\n\n\n\nfunction TruckView() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-8xl mt-14\",\n                children: \"Joe's Tacos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex md:justify-evenly rounded-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Picture__WEBPACK_IMPORTED_MODULE_3__.Picture, {\n                            text: \"https://placekitten.com/400/400\",\n                            alt: \"placeholder\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Picture__WEBPACK_IMPORTED_MODULE_3__.Picture, {\n                            text: \"https://placekitten.com/400/400\",\n                            alt: \"placeholder\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Picture__WEBPACK_IMPORTED_MODULE_3__.Picture, {\n                            text: \"https://placekitten.com/400/400\",\n                            alt: \"placeholder\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-base-300 py-10 shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"container mx-auto \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gap-x-6 text-3xl flex flex-row justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Open: 6pm\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Close: 10pm\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex justify-center text-3xl mt-8 px-20\",\n                            children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum ipsa neque nobis reprehenderit totam voluptatibus! Alias, aut autem eum explicabo illo illum maxime molestias mollitia provident quasi sit vel!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center text-2xl mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"underline text-3xl\",\n                                    children: \"Address:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TruckMap__WEBPACK_IMPORTED_MODULE_4__.TruckMap, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid py-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/\",\n                    className: \"justify-self-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/food-truck-icon.png\",\n                        width: 500,\n                        height: 500,\n                        alt: \"food truck icon\",\n                        className: \"w-20\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\azuce\\\\OneDrive\\\\Desktop\\\\bootcamp\\\\git\\\\food-truck\\\\frontend\\\\src\\\\app\\\\truck-view\\\\TruckView.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = TruckView;\nvar _c;\n$RefreshReg$(_c, \"TruckView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdHJ1Y2stdmlldy9UcnVja1ZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBQ21CO0FBQ0U7QUFHeEMsU0FBU0k7SUFFWixxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFHQyxXQUFVOzBCQUE2Qjs7Ozs7OzBCQUMzQyw4REFBQ0M7Z0JBQVFELFdBQVU7MEJBQ2YsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDWCw4REFBQ0osd0RBQU9BOzRCQUFDTyxNQUFNOzRCQUFtQ0MsS0FBSzs7Ozs7O3NDQUN2RCw4REFBQ1Isd0RBQU9BOzRCQUFDTyxNQUFNOzRCQUFtQ0MsS0FBSzs7Ozs7O3NDQUN2RCw4REFBQ1Isd0RBQU9BOzRCQUFDTyxNQUFNOzRCQUFtQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9ELDhEQUFDSDtnQkFBUUQsV0FBVTswQkFDZiw0RUFBQ0M7b0JBQVFELFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBSUYsV0FBVTs7OENBQ1gsOERBQUNLOzhDQUFJOzs7Ozs7OENBQ0wsOERBQUNBOzhDQUFJOzs7Ozs7Ozs7Ozs7c0NBRVQsOERBQUNDOzRCQUFFTixXQUFVO3NDQUEwQzs7Ozs7O3NDQUN2RCw4REFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNYLDhEQUFDTztvQ0FBR1AsV0FBVTs4Q0FBcUI7Ozs7Ozs4Q0FDbkMsOERBQUNNOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZiw4REFBQ1QsMERBQVFBOzs7OzswQkFDVCw4REFBQ0s7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNRO29CQUFFQyxNQUFLO29CQUFJVCxXQUFVOzhCQUNsQiw0RUFBQ04sbURBQUtBO3dCQUFDZ0IsS0FBSTt3QkFDWEMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUlIsS0FBSTt3QkFBa0JKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRDtLQXBDZ0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdHJ1Y2stdmlldy9UcnVja1ZpZXcudHN4PzA0MWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UGljdHVyZX0gZnJvbSBcIkAvY29tcG9uZW50cy9QaWN0dXJlXCI7XHJcbmltcG9ydCB7VHJ1Y2tNYXB9IGZyb20gXCJAL2NvbXBvbmVudHMvVHJ1Y2tNYXBcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHJ1Y2tWaWV3KCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtOHhsIG10LTE0XCI+Sm9lJ3MgVGFjb3M8L2gxPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmp1c3RpZnktZXZlbmx5IHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZSB0ZXh0PXtcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC80MDBcIn0gYWx0PXtcInBsYWNlaG9sZGVyXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZSB0ZXh0PXtcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC80MDBcIn0gYWx0PXtcInBsYWNlaG9sZGVyXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZSB0ZXh0PXtcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC80MDBcIn0gYWx0PXtcInBsYWNlaG9sZGVyXCJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWJhc2UtMzAwIHB5LTEwIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAteC02IHRleHQtM3hsIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyID5PcGVuOiA2cG08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgPkNsb3NlOiAxMHBtPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtM3hsIG10LTggcHgtMjBcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0ZW0gaGFydW0gaXBzYSBuZXF1ZSBub2JpcyByZXByZWhlbmRlcml0IHRvdGFtIHZvbHVwdGF0aWJ1cyEgQWxpYXMsIGF1dCBhdXRlbSBldW0gZXhwbGljYWJvIGlsbG8gaWxsdW0gbWF4aW1lIG1vbGVzdGlhcyBtb2xsaXRpYSBwcm92aWRlbnQgcXVhc2kgc2l0IHZlbCE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC0zeGxcIj5BZGRyZXNzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPFRydWNrTWFwLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHB5LTE0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Zvb2QtdHJ1Y2staWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZm9vZCB0cnVjayBpY29uXCIgY2xhc3NOYW1lPVwidy0yMFwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiUGljdHVyZSIsIlRydWNrTWFwIiwiVHJ1Y2tWaWV3IiwiaDEiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZGl2IiwidGV4dCIsImFsdCIsImgyIiwicCIsImgzIiwiYSIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/truck-view/TruckView.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/image-external */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwibWFwcGluZ3MiOiJBQUFBLHlKQUE0RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcz9hMmZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvaW1hZ2UtZXh0ZXJuYWwnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/image.js\n"));

/***/ })

});