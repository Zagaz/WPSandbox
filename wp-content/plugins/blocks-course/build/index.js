/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ZAGAZ Text Box – hello from the editor!', 'blocks-course'));
}

/***/ }),

/***/ "./src/icon.jsx":
/*!**********************!*\
  !*** ./src/icon.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Icon() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1280",
    height: "758"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M674 106l1 3 1.938-.5c4.038-.66 7.98-.58 12.062-.5v1l33 1 1-3h2v2l2-.563c3.111-.453 5.72-.113 8.815.305 3.462.409 6.92.492 10.404.574l2.252.063c2.343.065 4.686.124 7.029.183l4.805.131c3.898.107 7.796.208 11.695.307l1-2 2.65.199c10.094.72 20.173 1.098 30.288 1.363l4.708.131c3.785.106 7.57.207 11.354.307l1-2c3.83-.067 7.352-.1 11.145.486 4 .533 7.947.735 11.976.83l2.257.063c2.353.065 4.706.124 7.06.183l4.818.131c3.914.107 7.83.208 11.744.307l1-2c3.83-.067 7.352-.1 11.145.486 4 .533 7.947.735 11.976.83l2.257.063c2.353.065 4.706.124 7.06.183l4.818.131c3.914.107 7.83.208 11.744.307l1-2c3.84-.067 7.362-.1 11.164.498 3.905.511 7.713.647 11.64.635l2.193.003c1.52 0 3.042-.001 4.563-.006 2.302-.005 4.603 0 6.905.007 8.853.034 8.853.034 17.668-.707 3.867-.43 3.867-.43 7.105.035 3.965.564 7.827.68 11.82.668l2.267.003c1.573 0 3.145-.001 4.717-.006 2.385-.005 4.77 0 7.155.007 1.537 0 3.074-.002 4.612-.004l2.128.006c3.442-.016 6.732-.2 10.137-.71 3.953-.432 7.022-.065 10.926.571 2.696.09 5.364.14 8.059.133l2.266.003c1.573 0 3.145-.001 4.717-.006 2.385-.005 4.77 0 7.155.007 1.537 0 3.074-.002 4.612-.004l2.128.006c4.766-.022 9.34-.497 14.063-1.139a97.843 97.843 0 015-.062l2.313.027L1090 108v1l33 1v-3l3.438.5c4.533.576 9 .595 13.562.5v1l33 1v-3c3.044-.082 5.072.024 8 1 1.561.067 3.125.085 4.688.063l2.449-.028L1190 108v1l33 1 1-2h16v1l1.813.012c24.282.292 24.282.292 33.187 5.988 1.47 2.3 2.132 4.396 3 7h2c.034 48.675.066 97.35.085 146.024v2.182a812906.24 812906.24 0 01.025 69.952v2.314c.01 24.763.024 49.526.043 74.29a131285.826 131285.826 0 01.037 87.088v2.142c.003 11.391.012 22.783.024 34.175.011 11.442.016 22.883.013 34.325-.001 6.204 0 12.408.011 18.612.01 5.671.01 11.343.004 17.015-.001 2.059.002 4.118.008 6.177.008 2.785.004 5.57-.004 8.354l.016 2.46c-.023 3.832-.085 5.624-2.262 8.89h-2v2c-1.793 1.438-1.793 1.438-4.187 3l-2.356 1.563c-4.225 2.471-7.688 3.687-12.599 3.691l-3.096.018-3.388-.012-3.625.012c-3.331.008-6.663.008-9.994.004-3.62-.003-7.24.006-10.86.014-6.35.012-12.699.016-19.047.016-9.442-.001-18.883.01-28.324.022-18.826.025-37.651.034-56.477.039h-2.956l-2.96.001c-10.824.003-21.647.01-32.47.016-32.682.02-65.364.037-98.046.04h-3.168a2993122.972 2993122.972 0 01-22.283.002h-3.194c-33.117.003-66.235.025-99.352.061a102681.112 102681.112 0 01-123.476.065h-2.96c-15.72.002-31.44.019-47.16.042-15.797.023-31.595.027-47.393.013-9.387-.009-18.774-.003-28.161.023-6.271.015-12.542.013-18.813-.004-3.573-.01-7.145-.01-10.718.01a1047.8 1047.8 0 01-11.556-.015l-3.345.038c-7.672-.087-13.31-2.001-20.036-5.659v-2l-3 1-.75-2.125c-1.192-2.986-1.192-2.986-3.25-5.812-4.029-6.17-5.893-13.436-4.484-20.735 2.383-7.671 6.836-12.757 12.484-18.328l2-2h4c1.335-.327 2.668-.66 4-1 2.837-.084 5.648-.116 8.484-.098l2.472.005c2.598.005 5.196.018 7.794.03 1.764.006 3.529.01 5.293.014 4.319.011 8.638.028 12.957.049l1-2v2l2.65-.234c10.15-.798 20.121-.71 30.288-.328l4.708.158c3.785.127 7.57.263 11.354.404l1-3 1 2 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 2 1-1 1 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 3 1-2 1 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 3 1-2 1c5.447.097 10.639.129 16-1v1l32 1v-2l2 1c5.405.33 10.693.117 16-1v1l32 1v-2l2 1c5.405.33 10.693.117 16-1v1l32 1v-2l2 1c5.405.33 10.693.117 16-1v1l32 1v-2l2 1c2.178.06 4.357.06 6.535.031 8.644-.07 17.265.184 25.903.469l4.564.145c3.666.116 7.332.234 10.998.355v-2h2v2l2.65-.234c10.15-.798 20.121-.71 30.288-.328l4.708.158c3.785.127 7.57.263 11.354.404l1-2v2l2.65-.234c10.15-.798 20.121-.71 30.288-.328l4.708.158c3.785.127 7.57.263 11.354.404l1-3 1 2 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 1 2h32c.075-11.082.127-21.97-1-33h2c-.12-5.031-.244-10.063-.372-15.094a3574.47 3574.47 0 01-.125-5.117c-.237-9.962-.59-19.862-1.503-29.789h2c-.12-5.031-.244-10.063-.372-15.094a3574.47 3574.47 0 01-.125-5.117c-.237-9.962-.59-19.862-1.503-29.789h2c-.12-5.031-.244-10.063-.372-15.094a3574.47 3574.47 0 01-.125-5.117c-.237-9.962-.59-19.862-1.503-29.789h2c-.12-5.031-.244-10.063-.372-15.094a3574.47 3574.47 0 01-.125-5.117c-.237-9.962-.59-19.862-1.503-29.789h2a8434.41 8434.41 0 00-.372-15.204c-.043-1.72-.085-3.439-.125-5.158.648-15.25.648-15.25-2.503-29.638h3a8434.41 8434.41 0 00-.372-15.204c-.043-1.72-.085-3.439-.125-5.158.093-13.912.093-13.912-1.503-27.638l-2-1 4-1c-.12-5.031-.244-10.063-.372-15.094a3574.47 3574.47 0 01-.125-5.117c-.237-9.962-.59-19.862-1.503-29.789h2l-1-34h-1l-1-6-1.753.001c-62.974.051-125.947.098-188.921.126l-2.85.001a924201.75 924201.75 0 01-91.382.037l-3.022.001c-32.337.013-64.673.035-97.01.063a149172.2 149172.2 0 01-116.549.056c-14.871.004-29.743.018-44.615.035-14.946.018-29.892.025-44.838.02-8.883-.002-17.766.004-26.649.022-5.933.012-11.865.012-17.798.003a2097.27 2097.27 0 00-10.143.01c-3.644.012-7.287.005-10.93-.006l-3.176.024c-6.317-.044-11.513-.985-17.364-3.393v-2l-1.687-.187c-5.342-1.877-8.539-7.126-11.313-11.813-3.002-6.455-3.221-13.476-.902-20.168 4.08-8.757 9.063-13.794 17.65-18.012 3.894-1.418 7.66-1.243 11.752-1.07l2.492.055c2.003.046 4.006.118 6.008.195v-3l2 1v1l2.438-.5c4.22-.592 8.309-.585 12.562-.5v1l33 1v-3c3.044-.082 5.072.024 8 1 1.561.067 3.125.085 4.688.063l2.449-.028L639 108v1l33 1v-3l2-1zM71 107l2.875.5c4.701.685 9.385.586 14.125.5v1l33 1v-3c3.044-.082 5.072.024 8 1 1.561.067 3.125.085 4.688.063l2.449-.028L138 108v1l33 1 1-3h2v2l1.938-.5c4.038-.66 7.98-.58 12.062-.5v1l33 1 1-2h16v1l33 1 1-2 2.65.199c10.094.72 20.173 1.098 30.288 1.363l4.708.131c3.785.106 7.57.207 11.354.307l1-2c7.293-.126 7.293-.126 10.723.484 3.287.518 6.43.662 9.75.756 7.627.236 13.845.754 20.527 4.76l2.133.992c2.69 1.452 3.437 3.327 4.867 6.008l1.04 1.672c4.385 7.13 4.818 14.61 3.335 22.766-3.23 8.37-8.005 14.702-16.27 18.413-6.512 2.394-12.537 2.563-19.425 2.51l-3.677.008c-3.353.004-6.706-.006-10.06-.02-3.676-.014-7.354-.01-11.03-.007-7.131.001-14.262-.013-21.392-.032-8.252-.021-16.503-.024-24.755-.026-21.776-.016-43.552-.058-65.328-.096L55 166v421l3 1v2h33l1-3 1 2 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 1 2 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355l1-3 2 1-1 1 2.434-.018c9.824-.039 19.624.206 29.441.518l4.723.145c3.8.116 7.601.235 11.402.355v-2l2 1c2.002.061 4.005.06 6.008.031 5.606-.04 11.193.02 16.797.188l2.25.067c2.273.07 4.547.142 6.82.214l4.723.145c3.8.116 7.601.235 11.402.355l1-3 3 1-2 1c5.447.097 10.639.129 16-1v1l32 1v-2c17.153 3.102 17.153 3.102 23 7v2l1.938.813C368 599 368 599 369 602h2c3.847 8.53 5.428 16.63 2.902 25.902-1.807 4.2-4.712 7.847-7.902 11.098h-2v2h-3v2c-7.2 3.367-13.637 3.425-21.505 3.388a1934.149 1934.149 0 01-15.36.02c-4.05-.006-8.1.007-12.15.017-7.928.017-15.856.018-23.784.013-6.445-.004-12.89-.003-19.334.002l-2.781.003-5.593.004c-17.479.014-34.957.009-52.436-.003-15.985-.01-31.97.003-47.955.027-16.42.024-32.841.034-49.262.027-9.216-.003-18.432 0-27.648.017-7.845.014-15.69.015-23.535-.002-4.001-.009-8.002-.011-12.003.004-3.666.014-7.332.01-10.998-.01-1.947-.006-3.895.008-5.842.023-9.348-.078-16.232-2.12-23.689-7.842l-2.18-1.614c-4.894-5.218-5.382-10.954-5.314-17.76l-.01-2.587c-.009-2.863.005-5.726.018-8.589a4476.104 4476.104 0 01.013-23.307c.013-6.142.008-12.284.006-18.427-.001-10.642.008-21.285.025-31.927a25786.304 25786.304 0 00.036-46.162c.006-24.965.026-49.929.055-74.893a118930.289 118930.289 0 00.074-97.545l.025-45.882.001-2.13C-.098 220.908-.05 173.954 0 127h2l.25-1.625C4.247 119.051 8.422 115.201 14 112c3.62-1.448 7.174-2.295 11-3 .917-.26.917-.26 1.852-.523 2.366-.525 4.478-.575 6.898-.54l2.422.028L38 108v1l33 1v-3z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000001",
    d: "M429 0l1 2 2.452-.016C448 1.897 463.482 1.905 479 3l1-2c4.108.239 8.216.488 12.323.745 1.393.086 2.787.169 4.18.25 23.6 1.371 23.6 1.371 32.247 11.068C534.89 20.267 535.574 26.74 535 36c-1.778 8.89-6.787 14.788-14 20-4.335 2.211-8.382 2.262-13.145 2.195l-2.332-.008c-2.445-.011-4.89-.037-7.336-.062-1.663-.01-3.326-.02-4.99-.027-4.066-.022-8.131-.057-12.197-.098l.492 2.83c.703 4.96.644 9.899.631 14.902l.004 3.257c.002 3.616-.002 7.23-.007 10.846l.003 7.839c.002 5.687 0 11.374-.004 17.062-.006 8.457-.006 16.913-.005 25.37.001 14.226-.002 28.452-.008 42.678a123273.13 123273.13 0 00-.012 58.254c-.002 31.503-.01 63.006-.019 94.51-.009 30.605-.016 61.211-.02 91.817v2.859a3638654.807 3638654.807 0 00-.013 86.314v2.688c-.01 59.258-.025 118.516-.042 177.774h2v-2l3-1v3l2.605-.254c13.924-1.2 24.14-.966 36.395 6.254v3l1.75.625c3.892 2.379 5.815 5.778 7 10.125.685 8.902.307 16.136-3.75 24.25h-2l-.813 1.938C527 745 527 745 524 746v2c-7.128 5.519-16.563 5.296-25.16 5.275l-3.27.015c-3.545.014-7.088.013-10.633.01l-7.43.014c-5.18.007-10.362.007-15.543.002-6.628-.006-13.255.01-19.882.034-5.112.015-10.223.016-15.334.013-2.443 0-4.886.005-7.33.015-3.42.013-6.838.006-10.258-.006l-3.033.023c-7.867-.058-14.157-1.804-21.127-5.395v-2l-1.938-.813C381 744 381 744 380 741h-2c-4.358-6.13-6.308-13.755-5.766-21.234 1.443-6.93 4.233-12.233 9.766-16.766h2v-2c9.294-6.263 19.292-5.11 30.125-4.563l3.477.159c2.8.128 5.599.263 8.398.404-.138-3.959-.287-7.917-.438-11.875l-.119-3.418-.127-3.262-.11-3.015c-.056-2.438-.056-2.438-1.206-4.43.062-1.67.196-3.338.375-5l.273-2.688C425 661 425 661 426 659h-3v-3h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.087-1.879.242-3.755.437-5.625l.31-3.04L425 610l-2-1v-3h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.087-1.879.242-3.755.437-5.625l.31-3.04L425 560l-2-1v-3h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.216-2.774.58-5.515.941-8.273.063-2.908-.422-4.29-1.941-6.727h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.062-1.67.196-3.338.375-5l.273-2.688C425 461 425 461 426 459l-3-1v-2h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.062-1.67.196-3.338.375-5l.273-2.688C425 411 425 411 426 409l-3-1v-2h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.216-2.774.58-5.515.941-8.273.063-2.908-.422-4.29-1.941-6.727h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.062-1.67.196-3.338.375-5l.273-2.688C425 311 425 311 426 309l-3-1v-2h3a5513.38 5513.38 0 00-.372-13.99 2229.1 2229.1 0 01-.125-4.76c-.058-2.279-.122-4.557-.187-6.836l-.05-2.156c-.063-3.755-.063-3.755-1.266-7.258.062-1.67.196-3.338.375-5l.273-2.688C425 261 425 261 426 259l-3-1v-2h3c-.092-6.478-.2-12.956-.317-19.434-.039-2.203-.074-4.407-.105-6.61a2040.4 2040.4 0 00-.164-9.503l-.035-2.986-.06-2.79-.04-2.45c-.306-2.445-1.06-4.102-2.279-6.227h3l-.045-1.695a8764.81 8764.81 0 01-.437-17.421c-.054-2.17-.109-4.338-.166-6.507-.082-3.113-.157-6.225-.23-9.338l-.083-2.951-.06-2.73-.061-2.41C425 161 425 161 426 159l-3-1v-2l2-1V59l-33-1-6-3v-2h-3v-2l-3-1c-4.919-5.984-7.46-12.973-7.262-20.75.94-8.08 2.982-15.608 9.336-20.906 6.321-4.41 10.26-5.934 17.922-5.735l2.526.018c2.64.022 5.277.072 7.915.123 1.8.02 3.598.038 5.397.055 4.39.044 8.777.113 13.166.195V0zM215 264l1 2 2.452-.018c9.651-.038 19.278.202 28.923.518l4.578.145c3.682.116 7.365.235 11.047.355v-2l4-1-1 2 2.452-.018c9.651-.038 19.278.202 28.923.518l4.578.145c3.682.116 7.365.235 11.047.355v-2l4-1-1 2 2.273.043c9.222.43 16.623 2.919 23.727 8.957v2h2v3h2c4.067 7.049 3.752 16.124 3 24-2.197 7.31-7.538 12.215-14 16-7.069 3.329-13.293 3.394-21.031 3.293l-3.733-.013c-3.912-.017-7.824-.054-11.736-.092-2.661-.017-5.323-.03-7.984-.042-6.506-.032-13.01-.083-19.516-.146l.008 2.645c.067 21.259.116 42.517.147 63.776.016 10.28.037 20.56.071 30.841.03 8.962.05 17.924.056 26.887.004 4.743.013 9.487.035 14.23.02 4.47.027 8.94.022 13.408.001 1.637.007 3.273.019 4.909.078 11.648-.756 21.838-8.358 31.304-5.524 5.44-12.578 7.769-20.215 8.168-9.053-.285-14.437-2.895-20.82-9.168-4.639-5.03-7.132-9.266-7.38-16.238l-.116-2.987-.094-3.087-.117-3.053A380.936 380.936 0 01214 468l-2 1 1-3h2l-.092-3.545a32761.746 32761.746 0 01-.48-18.762c-.071-2.72-.14-5.441-.21-8.162l-.066-2.526c-.125-5.004-.172-10-.152-15.005l-2 1 1-3h2l-.092-3.545a32761.746 32761.746 0 01-.48-18.762c-.071-2.72-.14-5.441-.21-8.162l-.066-2.526c-.125-5.004-.172-10-.152-15.005l-2 1 1-3h2l-1-42-11.969-.113c-3.839-.047-7.678-.098-11.517-.15-2.662-.034-5.323-.06-7.985-.083-3.833-.034-7.665-.086-11.498-.142l-3.587-.02c-9.999-.176-18.168-2.232-25.444-9.492-1.522-2.289-2.79-4.576-3.992-7.047-.965-2.113-.965-2.113-3.008-3.953v-4l-1-3c1.127-9.256 4.681-17.71 12.059-23.66A54.401 54.401 0 01152 269l2.625-1.313c2.868-.83 5.405-.825 8.375-.687v-2l2.362.48c4.626.661 9.18.753 13.849.836l2.934.063c3.076.065 6.153.125 9.23.183l6.277.131c5.116.107 10.232.209 15.348.307v-2l2-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000100",
    d: "M546 591l4 2c-1.355 5.588-5.581 8.69-10 12a70.115 70.115 0 01-4 2l-1-2c3.536-4.788 7.145-9.465 11-14z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000300",
    d: "M1227 207l1 2h2c.103 5.126.036 9.95-1 15h-1c-.363-2.27-.715-4.54-1.063-6.813l-.597-3.832C1226 210 1226 210 1227 207zM1228 308c2.335 3.648 2.304 6.744 2 11l-2 4-2-13h2v-2zM1226 356h3c.575 3.735 1 7.213 1 11h-2c-1.193-3.877-2-6.916-2-11z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M490 1h5v1h-5V1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000001",
    d: "M494 695l4 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000400",
    d: "M1225 361l1 4zM1225 311l1 4zM1225 211l1 4z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#0D0E0F",
    d: "M925 106l1 2-3-1 2-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M440 1l4 1zM1201 588l3 1zM1151 588l3 1zM1101 588l3 1zM700 588l3 1zM650 588l3 1zM600 588l3 1zM199 588l3 1zM149 588l3 1zM99 588l3 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#050503",
    d: "M1224 557l2 1-2 1v-2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#030603",
    d: "M1224 507l2 1-2 1v-2zM1224 457l2 1-2 1v-2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M212 325l1 2-2-1 1-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#111213",
    d: "M877 106l2 2h-2v-2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M873 107l3 1zM632 107l3 1zM131 107l3 1zM81 107l3 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#1C1C1A",
    d: "M490 695l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M897 588l2 1zM847 588l2 1zM797 588l2 1zM758 588l2 1zM296 588l2 1zM257 588l2 1zM246 588l2 1zM996 587l2 1zM243 587l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000100",
    d: "M1224 407l2 1zM1224 357l2 1zM319 265l2 1zM269 265l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#010101",
    d: "M223 265l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000001",
    d: "M219 265l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M173 265l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000001",
    d: "M169 265l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000100",
    d: "M167 264l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#000002",
    d: "M1038 108l2 1zM988 108l2 1zM938 108l2 1zM1233 107l2 1zM1224 107l2 1zM1183 107l2 1zM1133 107l2 1zM1083 107l2 1zM1073 107l2 1zM1028 107l2 1zM1023 107l2 1zM986 107l2 1zM978 107l2 1zM973 107l2 1zM936 107l2 1zM928 107l2 1zM823 107l2 1zM773 107l2 1zM732 107l2 1zM682 107l2 1zM582 107l2 1zM322 107l2 1zM272 107l2 1zM222 107l2 1zM181 107l2 1zM26 107l2 1zM21 107l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#1C1D1C",
    d: "M1230 106l2 1zM1180 106l2 1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#393C3A",
    d: "M679 106l2 1zM178 106l2 1z"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.jsx");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: 'text-page',
    background: '#f03',
    foreground: '#fff'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, 'ZAGAZ Text Box – hello from the saved content!');
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"text-box/blocks-course","version":"0.1.0","title":"ZAGAZ Text Box","category":"text","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"blocks-course","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkblocks_course"] = globalThis["webpackChunkblocks_course"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map