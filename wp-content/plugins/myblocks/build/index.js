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




function Edit() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Myblocks – hello from the editor!qq', 'myblocks'));
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _zaz_static_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zaz-static-block */ "./src/zaz-static-block/index.jsx");
/* harmony import */ var _zaz_richtext_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zaz-richtext-block */ "./src/zaz-richtext-block/index.jsx");
/* harmony import */ var _zaz_textaligntoollbar_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zaz-textaligntoollbar-block */ "./src/zaz-textaligntoollbar-block/index.jsx");
/* harmony import */ var _zaz_inspectorcontrol_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zaz-inspectorcontrol-block */ "./src/zaz-inspectorcontrol-block/index.jsx");









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


function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, 'Myblocks – hello from the saved content!333');
}

/***/ }),

/***/ "./src/zaz-inspectorcontrol-block/index.jsx":
/*!**************************************************!*\
  !*** ./src/zaz-inspectorcontrol-block/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

// Block with one plain text





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('myblock/richtext-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('ZAZ -  Richtext Block', 'myblocks'),
  icon: 'editor-textcolor',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p',
      default: "T",
      placeholder: "Enter Title"
    },
    message: {
      type: 'string',
      source: 'text',
      selector: 'div',
      default: "M",
      placeholder: "Enter Message"
    },
    alignment: {
      type: 'string'
    },
    bg_color: {
      type: 'string',
      default: '#000000'
    },
    text_color: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      message,
      alignment,
      bg_color,
      text_color
    } = attributes;
    const onChangeTitle = newTitle => {
      setAttributes({
        title: newTitle
      });
    };
    const onChangeMessage = newMessage => {
      setAttributes({
        message: newMessage
      });
    };
    const onChangeAlignment = newAlignment => {
      setAttributes({
        alignment: newAlignment
      });
    };
    const onChangeBGColor = hexColor => {
      setAttributes({
        bg_color: hexColor
      });
    };
    const onChangeTextColor = hexColor => {
      setAttributes({
        text_color: hexColor
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Background color', 'myblock')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      onChange: onChangeBGColor // onChange event callback
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text color', 'myblock')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      onChange: onChangeTextColor // onChange event callback
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Title', 'myblocks'),
      value: title,
      onChange: onChangeTitle,
      style: {
        backgroundColor: attributes.bg_color,
        color: attributes.text_color
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Message', 'myblocks'),
      value: message,
      onChange: onChangeMessage,
      style: {
        textAlign: alignment,
        backgroundColor: attributes.bg_color,
        color: attributes.text_color
      },
      id: "message"
    }));
  },
  save: props => {
    const {
      attributes: {
        title,
        alignment
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      style: {
        textAlign: alignment
      }
    }, title));
  }
});

/***/ }),

/***/ "./src/zaz-richtext-block/icon.jsx":
/*!*****************************************!*\
  !*** ./src/zaz-richtext-block/icon.jsx ***!
  \*****************************************/
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
    width: "56",
    height: "56",
    viewBox: "0 0 56 56"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.555 53.125h24.89c4.852 0 7.266-2.438 7.266-7.336V10.234c0-4.875-2.414-7.359-7.266-7.359h-24.89c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.899 2.438 7.336 7.266 7.336zm.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h24.492c2.437 0 3.68 1.313 3.68 3.657v35.414c0 2.343-1.243 3.632-3.657 3.632zm1.664-24.118c.633 0 1.032-.328 1.242-1.125l.82-2.32h4.384l.843 2.32c.211.774.61 1.125 1.219 1.125.82 0 1.266-.445 1.266-1.195 0-.164-.07-.469-.164-.773l-3.446-9.54c-.351-.984-.937-1.453-1.922-1.453-.96 0-1.523.47-1.875 1.454l-3.445 9.539c-.117.28-.164.609-.164.773 0 .75.469 1.195 1.242 1.195zm13.899-8.906h6.89a1.43 1.43 0 001.453-1.453c0-.797-.632-1.43-1.453-1.43h-6.89c-.867 0-1.477.633-1.477 1.43 0 .82.61 1.453 1.477 1.453zm-11.32 3.516l1.593-4.922h.164l1.594 4.922zm11.32 4.664h6.89a1.43 1.43 0 001.453-1.453c0-.797-.632-1.43-1.453-1.43h-6.89c-.867 0-1.477.633-1.477 1.43 0 .82.61 1.453 1.477 1.453zM15.789 43.89h1.664l3.07-3.118c.446-.422.915-.586 1.383-.586.469 0 .985.188 1.43.586l1.922 1.758 4.805-4.265c.539-.47 1.101-.68 1.664-.68.562 0 1.171.187 1.593.68l4.688 5.39h1.64V32.453c0-2.062-1.078-3.117-3.14-3.117H18.953c-1.992 0-3.164 1.055-3.164 3.117zm7.734-5.625c-1.406 0-2.53-1.172-2.53-2.532 0-1.406 1.124-2.578 2.53-2.53 1.383.046 2.532 1.124 2.532 2.53 0 1.36-1.149 2.532-2.532 2.532z"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/zaz-richtext-block/index.jsx":
/*!******************************************!*\
  !*** ./src/zaz-richtext-block/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.jsx */ "./src/zaz-richtext-block/icon.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/zaz-richtext-block/style.scss");

// make a block with a richtext field
// // --------------------------------------------------
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.blockEditor;


// end replace

registerBlockType('myblocks/richtext', {
  title: __('ZAZ - RichText', 'myblocks'),
  icon: _icon_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: 'common',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },
  edit: props => {
    const {
      attributes: {
        content
      },
      setAttributes,
      className
    } = props;
    const onChangeContent = newContent => {
      setAttributes({
        content: newContent
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "     Backend: ", __('RichText', 'myblocks'), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: className,
      onChange: onChangeContent,
      placeholder: __('Add your custom text', 'myblock'),
      value: content
    }));
  },
  save: props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "     Frontend: ", __('RichText', 'myblocks'), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: props.attributes.content
    }));
  }
});
// // --------------------------------------------------
//
//

/***/ }),

/***/ "./src/zaz-static-block/icon.jsx":
/*!***************************************!*\
  !*** ./src/zaz-static-block/icon.jsx ***!
  \***************************************/
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
    width: "300",
    height: "300",
    version: "1",
    viewBox: "0 0 225 225"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 2239c-103-20-209-97-263-190-58-99-58-95-55-951l3-783 22-55C70 155 169 59 272 23 322 6 375 5 1125 5s803 1 853 18c106 37 212 143 249 249 17 50 18 103 18 853s-1 803-18 853c-36 103-132 202-237 245l-55 22-785 2c-432 0-805-3-830-8zm623-650c17-19 27-40 27-61 0-28-23-55-185-217l-184-186 184-186c204-205 211-216 160-277-32-38-67-47-109-27s-442 422-455 459c-6 15-8 39-4 54 7 32 410 443 457 466 40 21 74 13 109-25zm472 25c47-22 450-432 459-467 4-18 1-40-9-60-22-48-434-453-468-461-36-9-91 17-106 50-27 59-21 68 174 263l184 186-184 186c-159 159-185 189-185 216 0 34 32 80 64 93 30 12 34 12 71-6z",
    transform: "matrix(.1 0 0 -.1 0 225)"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/zaz-static-block/index.jsx":
/*!****************************************!*\
  !*** ./src/zaz-static-block/index.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/zaz-static-block/style.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/zaz-static-block/icon.jsx");



const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerBlockType('myblocks/static-block', {
  title: __('ZAZ - Static Block', 'myblocks'),
  description: __('A static block', 'myblocks'),
  category: 'common',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], null),
  keywords: [__('ZAZ', 'myblocks'), __('Static', 'myblocks'), __('Block', 'myblocks')],
  edit: props => {
    //This is where the props are destructured
    const {
      className,
      isSelected
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('This is the Backend title', 'myBlocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Click on this box"), isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "alert"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "This message is only visible if block is selected"))));
  },
  save: props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('This is the Frontend title', 'myBlocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('This is the Static Block and you\'re on the Frontend now!'))));
  }
}));
//Done

/***/ }),

/***/ "./src/zaz-textaligntoollbar-block/index.jsx":
/*!***************************************************!*\
  !*** ./src/zaz-textaligntoollbar-block/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/zaz-textaligntoollbar-block/style.scss");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  AlignmentToolbar,
  BlockControls
} = wp.blockEditor;

registerBlockType('myblocks/textaligntoollbar', {
  title: __('ZAZ - Text Align Toolbar', 'myblocks'),
  icon: 'editor-alignleft',
  category: 'common',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    alignment: {
      type: 'string',
      default: 'none'
    }
  },
  edit: props => {
    const {
      attributes: {
        content,
        alignment
      },
      setAttributes,
      className
    } = props;
    const onChangeContent = newContent => {
      setAttributes({
        content: newContent
      });
    };
    const onChangeAlignment = newAlignment => {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "     Backend: ", __('Text Align Toolbar', 'myblocks'), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: className,
      style: {
        textAlign: alignment
      },
      onChange: onChangeContent,
      placeholder: __('Add your custom text', 'myblock'),
      value: content
    }));
  },
  save: props => {
    const {
      attributes: {
        content,
        alignment
      },
      className
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Frontend: ", __('Text Align Toolbar', 'myblocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: className,
      value: content,
      style: {
        textAlign: alignment
      }
    })));
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/zaz-richtext-block/style.scss":
/*!*******************************************!*\
  !*** ./src/zaz-richtext-block/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/zaz-static-block/style.scss":
/*!*****************************************!*\
  !*** ./src/zaz-static-block/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/zaz-textaligntoollbar-block/style.scss":
/*!****************************************************!*\
  !*** ./src/zaz-textaligntoollbar-block/style.scss ***!
  \****************************************************/
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/myblocks","version":"0.1.0","title":"Myblocks","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"myblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmyblocks"] = globalThis["webpackChunkmyblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map