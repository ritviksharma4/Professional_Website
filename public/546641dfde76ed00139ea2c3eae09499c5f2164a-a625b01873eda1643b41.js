(self["webpackChunkgatsby_starter_default"] = self["webpackChunkgatsby_starter_default"] || []).push([[98],{

/***/ 5706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(9789);
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ 841:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

exports.isConcurrentMode = A;

exports.isContextConsumer = function (a) {
  return z(a) === k;
};

exports.isContextProvider = function (a) {
  return z(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

exports.isLazy = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

exports.isPortal = function (a) {
  return z(a) === d;
};

exports.isProfiler = function (a) {
  return z(a) === g;
};

exports.isStrictMode = function (a) {
  return z(a) === f;
};

exports.isSuspense = function (a) {
  return z(a) === p;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

exports.typeOf = z;

/***/ }),

/***/ 9789:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(841);
} else {}

/***/ }),

/***/ 2993:
/***/ (function(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    } // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.


    var it;

    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    } // END: Modifications


    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    } // END: fast-deep-equal
    // START: react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements
        continue;
      } // all other properties should be traversed as usual


      if (!equal(a[keys[i]], b[keys[i]])) return false;
    } // END: react-fast-compare
    // START: fast-deep-equal


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),

/***/ 5414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ HelmetExport; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4839);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2993);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6494);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);





var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : __webpack_require__.g.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : __webpack_require__.g.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [react__WEBPACK_IMPORTED_MODULE_3__.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _babelHelpers$extends;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

        case TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _babelHelpers$extends4;

        newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};
      react__WEBPACK_IMPORTED_MODULE_3__.Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, newProps);
    };

    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component), _class.propTypes = {
    base: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
    defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    defer: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
    encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
    htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    link: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    noscript: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
    script: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HelmetExport)));


/***/ }),

/***/ 165:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = 60103,
    c = 60106,
    d = 60107,
    e = 60108,
    f = 60114,
    g = 60109,
    h = 60110,
    k = 60112,
    l = 60113,
    m = 60120,
    n = 60115,
    p = 60116,
    q = 60121,
    r = 60122,
    u = 60117,
    v = 60129,
    w = 60131;

if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}

function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;

              default:
                return t;
            }

        }

      case c:
        return t;
    }
  }
}

var z = g,
    A = b,
    B = k,
    C = d,
    D = p,
    E = n,
    F = c,
    G = f,
    H = e,
    I = l;
__webpack_unused_export__ = h;
__webpack_unused_export__ = z;
__webpack_unused_export__ = A;
__webpack_unused_export__ = B;
__webpack_unused_export__ = C;
__webpack_unused_export__ = D;
__webpack_unused_export__ = E;
__webpack_unused_export__ = F;
__webpack_unused_export__ = G;
__webpack_unused_export__ = H;
__webpack_unused_export__ = I;

__webpack_unused_export__ = function () {
  return !1;
};

__webpack_unused_export__ = function () {
  return !1;
};

__webpack_unused_export__ = function (a) {
  return y(a) === h;
};

__webpack_unused_export__ = function (a) {
  return y(a) === g;
};

__webpack_unused_export__ = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};

__webpack_unused_export__ = function (a) {
  return y(a) === k;
};

__webpack_unused_export__ = function (a) {
  return y(a) === d;
};

__webpack_unused_export__ = function (a) {
  return y(a) === p;
};

__webpack_unused_export__ = function (a) {
  return y(a) === n;
};

__webpack_unused_export__ = function (a) {
  return y(a) === c;
};

__webpack_unused_export__ = function (a) {
  return y(a) === f;
};

__webpack_unused_export__ = function (a) {
  return y(a) === e;
};

__webpack_unused_export__ = function (a) {
  return y(a) === l;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
};

exports.typeOf = y;

/***/ }),

/***/ 8812:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(165);
} else {}

/***/ }),

/***/ 4839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__(7294);

var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      } // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),

/***/ 6979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_CSSTransition; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5245);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(1721);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(1278);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js







var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext/* default.Provider */.Z.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext/* default */.Z;

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js









var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(esm_Transition, (0,esm_extends/* default */.Z)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
/* harmony default export */ var esm_CSSTransition = (CSSTransition);

/***/ }),

/***/ 5813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_TransitionGroup; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(5245);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(1721);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(1278);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js








var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.Z)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext/* default.Provider */.Z.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext/* default.Provider */.Z.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = (TransitionGroup);

/***/ }),

/***/ 1278:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/* harmony default export */ __webpack_exports__["Z"] = (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));

/***/ }),

/***/ 6872:
/***/ (function(module) {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t,
      n = (this.document || this.ownerDocument).querySelectorAll(e),
      o = this;

  do {
    for (t = n.length; 0 <= --t && n.item(t) !== o;) {
      ;
    }
  } while (t < 0 && (o = o.parentElement));

  return o;
}), function () {
  if ("function" == typeof window.CustomEvent) return;

  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
  }

  e.prototype = window.Event.prototype, window.CustomEvent = e;
}(), function () {
  for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
    window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
  }

  window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
    var n = new Date().getTime(),
        o = Math.max(0, 16 - (n - r)),
        a = window.setTimeout(function () {
      e(n + o);
    }, o);
    return r = n + o, a;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
    clearTimeout(e);
  });
}(), function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return t(e);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, function (M) {
  "use strict";

  var q = {
    ignore: "[data-scroll-ignore]",
    header: null,
    topOnEmptyHash: !0,
    speed: 500,
    speedAsDuration: !1,
    durationMax: null,
    durationMin: null,
    clip: !0,
    offset: 0,
    easing: "easeInOutCubic",
    customEasing: null,
    updateURL: !0,
    popstate: !0,
    emitEvents: !0
  },
      I = function I() {
    var n = {};
    return Array.prototype.forEach.call(arguments, function (e) {
      for (var t in e) {
        if (!e.hasOwnProperty(t)) return;
        n[t] = e[t];
      }
    }), n;
  },
      r = function r(e) {
    "#" === e.charAt(0) && (e = e.substr(1));

    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
      if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
      1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
    }

    return "#" + r;
  },
      F = function F() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  },
      L = function L(e) {
    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
    var t;
  },
      x = function x(e, t, n) {
    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
  },
      H = function H(e, t, n, o) {
    if (t.emitEvents && "function" == typeof M.CustomEvent) {
      var a = new CustomEvent(e, {
        bubbles: !0,
        detail: {
          anchor: n,
          toggle: o
        }
      });
      document.dispatchEvent(a);
    }
  };

  return function (o, e) {
    var b,
        a,
        A,
        O,
        C = {};
    C.cancelScroll = function (e) {
      cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
    }, C.animateScroll = function (a, r, e) {
      C.cancelScroll();
      var i = I(b || q, e || {}),
          c = "[object Number]" === Object.prototype.toString.call(a),
          t = c || !a.tagName ? null : a;

      if (c || t) {
        var s = M.pageYOffset;
        i.header && !A && (A = document.querySelector(i.header));

        var n,
            o,
            u,
            l,
            m,
            d,
            f,
            h,
            p = L(A),
            g = c ? a : function (e, t, n, o) {
          var a = 0;
          if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;) {
            ;
          }
          return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), a;
        }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip),
            y = g - s,
            v = F(),
            w = 0,
            S = (n = y, u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)),
            E = function E(e) {
          var t, n, o;
          l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), function (e, t) {
            var n = M.pageYOffset;
            if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
          }(d, g) || (O = M.requestAnimationFrame(E), l = e);
        };

        0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
          smoothScroll: JSON.stringify(h),
          anchor: f.id
        }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), C.cancelScroll(!0), M.requestAnimationFrame(E));
      }
    };

    var t = function t(e) {
      if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
        var t, n;

        try {
          t = r(decodeURIComponent(a.hash));
        } catch (e) {
          t = r(a.hash);
        }

        if ("#" === t) {
          if (!b.topOnEmptyHash) return;
          n = document.documentElement;
        } else n = document.querySelector(t);

        (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function (e) {
          if (history.replaceState && e.updateURL && !history.state) {
            var t = M.location.hash;
            t = t || "", history.replaceState({
              smoothScroll: JSON.stringify(e),
              anchor: t || M.pageYOffset
            }, document.title, t || M.location.href);
          }
        }(b), C.animateScroll(n, a));
      }
    },
        n = function n(e) {
      if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
        var t = history.state.anchor;
        "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
          updateURL: !1
        });
      }
    };

    C.destroy = function () {
      b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), C.cancelScroll(), O = A = a = b = null);
    };

    return function () {
      if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
    }(), C;
  };
});

/***/ }),

/***/ 9:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f6": function() { return /* binding */ Fe; },
  "vJ": function() { return /* binding */ We; },
  "iv": function() { return /* binding */ Ce; },
  "ZP": function() { return /* binding */ styled_components_browser_esm; }
});

// UNUSED EXPORTS: ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, __PRIVATE__, isStyledComponent, keyframes, useTheme, version, withTheme

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(6872);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ var stylis_browser_esm = (stylis_min);
;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ var unitless_browser_esm = (unitlessKeys);
;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);
;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/* harmony default export */ var is_prop_valid_browser_esm = (index);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(5706);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js








function v() {
  return (v = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }

    return e;
  }).apply(this, arguments);
}

var g = function g(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) {
    n.push(t[r], e[r + 1]);
  }

  return n;
},
    S = function S(t) {
  return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0,react_is.typeOf)(t);
},
    w = Object.freeze([]),
    E = Object.freeze({});

function b(e) {
  return "function" == typeof e;
}

function _(e) {
  return  false || e.displayName || e.name || "Component";
}

function N(e) {
  return e && "string" == typeof e.styledComponentId;
}

var A = "undefined" != typeof process && (({}).REACT_APP_SC_ATTR || ({}).SC_ATTR) || "data-styled",
    C = "5.3.1",
    I = "undefined" != typeof window && "HTMLElement" in window,
    P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== ({}).REACT_APP_SC_DISABLE_SPEEDY && "" !== ({}).REACT_APP_SC_DISABLE_SPEEDY ? "false" !== ({}).REACT_APP_SC_DISABLE_SPEEDY && ({}).REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== ({}).SC_DISABLE_SPEEDY && "" !== ({}).SC_DISABLE_SPEEDY ? "false" !== ({}).SC_DISABLE_SPEEDY && ({}).SC_DISABLE_SPEEDY : "production" !== "production"),
    O = {},
    R =  false ? 0 : {};

function D() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) {
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  }

  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}

function j(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  throw  true ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : 0;
}

var T = function () {
  function e(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }

  var t = e.prototype;
  return t.indexOfGroup = function (e) {
    for (var t = 0, n = 0; n < e; n++) {
      t += this.groupSizes[n];
    }

    return t;
  }, t.insertRules = function (e, t) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e >= o;) {
        (o <<= 1) < 0 && j(16, "" + e);
      }

      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;

      for (var s = r; s < o; s++) {
        this.groupSizes[s] = 0;
      }
    }

    for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) {
      this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }
  }, t.clearGroup = function (e) {
    if (e < this.length) {
      var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
      this.groupSizes[e] = 0;

      for (var o = n; o < r; o++) {
        this.tag.deleteRule(n);
      }
    }
  }, t.getGroup = function (e) {
    var t = "";
    if (e >= this.length || 0 === this.groupSizes[e]) return t;

    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) {
      t += this.tag.getRule(s) + "/*!sc*/\n";
    }

    return t;
  }, e;
}(),
    k = new Map(),
    x = new Map(),
    V = 1,
    B = function B(e) {
  if (k.has(e)) return k.get(e);

  for (; x.has(V);) {
    V++;
  }

  var t = V++;
  return  false && 0, k.set(e, t), x.set(t, e), t;
},
    M = function M(e) {
  return x.get(e);
},
    z = function z(e, t) {
  t >= V && (V = t + 1), k.set(e, t), x.set(t, e);
},
    L = "style[" + A + '][data-styled-version="5.3.1"]',
    G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    F = function F(e, t, n) {
  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) {
    (r = o[s]) && e.registerName(t, r);
  }
},
    Y = function Y(e, t) {
  for (var n = (t.innerHTML || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
    var i = n[o].trim();

    if (i) {
      var a = i.match(G);

      if (a) {
        var c = 0 | parseInt(a[1], 10),
            u = a[2];
        0 !== c && (z(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else r.push(i);
    }
  }
},
    q = function q() {
  return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
},
    H = function H(e) {
  var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
    for (var t = e.childNodes, n = t.length; n >= 0; n--) {
      var r = t[n];
      if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
    }
  }(n),
      s = void 0 !== o ? o.nextSibling : null;

  r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.1");
  var i = q();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
},
    $ = function () {
  function e(e) {
    var t = this.element = H(e);
    t.appendChild(document.createTextNode("")), this.sheet = function (e) {
      if (e.sheet) return e.sheet;

      for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        if (o.ownerNode === e) return o;
      }

      j(17);
    }(t), this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    try {
      return this.sheet.insertRule(t, e), this.length++, !0;
    } catch (e) {
      return !1;
    }
  }, t.deleteRule = function (e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.getRule = function (e) {
    var t = this.sheet.cssRules[e];
    return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
  }, e;
}(),
    W = function () {
  function e(e) {
    var t = this.element = H(e);
    this.nodes = t.childNodes, this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(t),
          r = this.nodes[e];
      return this.element.insertBefore(n, r || null), this.length++, !0;
    }

    return !1;
  }, t.deleteRule = function (e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, e;
}(),
    U = function () {
  function e(e) {
    this.rules = [], this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
  }, t.deleteRule = function (e) {
    this.rules.splice(e, 1), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.rules[e] : "";
  }, e;
}(),
    J = I,
    X = {
  isServer: !I,
  useCSSOMInjection: !P
},
    Z = function () {
  function e(e, t, n) {
    void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && I && J && (J = !1, function (e) {
      for (var t = document.querySelectorAll(L), n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }

  e.registerId = function (e) {
    return B(e);
  };

  var t = e.prototype;
  return t.reconstructWithOptions = function (t, n) {
    return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function (e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.getTag = function () {
    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
    var e, t, n, r, o;
  }, t.hasNameForId = function (e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, t.registerName = function (e, t) {
    if (B(e), this.names.has(e)) this.names.get(e).add(t);else {
      var n = new Set();
      n.add(t), this.names.set(e, n);
    }
  }, t.insertRules = function (e, t, n) {
    this.registerName(e, t), this.getTag().insertRules(B(e), n);
  }, t.clearNames = function (e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.clearRules = function (e) {
    this.getTag().clearGroup(B(e)), this.clearNames(e);
  }, t.clearTag = function () {
    this.tag = void 0;
  }, t.toString = function () {
    return function (e) {
      for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
        var s = M(o);

        if (void 0 !== s) {
          var i = e.names.get(s),
              a = t.getGroup(o);

          if (i && a && i.size) {
            var c = A + ".g" + o + '[id="' + s + '"]',
                u = "";
            void 0 !== i && i.forEach(function (e) {
              e.length > 0 && (u += e + ",");
            }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
          }
        }
      }

      return r;
    }(this);
  }, e;
}(),
    K = /(a)(d)/gi,
    Q = function Q(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};

function ee(e) {
  var t,
      n = "";

  for (t = Math.abs(e); t > 52; t = t / 52 | 0) {
    n = Q(t % 52) + n;
  }

  return (Q(t % 52) + n).replace(K, "$1-$2");
}

var te = function te(e, t) {
  for (var n = t.length; n;) {
    e = 33 * e ^ t.charCodeAt(--n);
  }

  return e;
},
    ne = function ne(e) {
  return te(5381, e);
};

function re(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (b(n) && !N(n)) return !1;
  }

  return !0;
}

var oe = ne("5.3.1"),
    se = function () {
  function e(e, t, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic =  true && (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
  }

  return e.prototype.generateAndInjectStyles = function (e, t, n) {
    var r = this.componentId,
        o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
        var s = Ne(this.rules, e, t, n).join(""),
            i = ee(te(this.baseHash, s) >>> 0);

        if (!t.hasNameForId(r, i)) {
          var a = n(s, "." + i, void 0, r);
          t.insertRules(r, i, a);
        }

        o.push(i), this.staticRulesId = i;
      }
    } else {
      for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if ("string" == typeof h) l += h,  false && (0);else if (h) {
          var p = Ne(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
          u = te(u, f + d), l += f;
        }
      }

      if (l) {
        var m = ee(u >>> 0);

        if (!t.hasNameForId(r, m)) {
          var y = n(l, "." + m, void 0, r);
          t.insertRules(r, m, y);
        }

        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(),
    ie = /^\s*\/\/.*$/gm,
    ae = [":", "[", ".", "#"];

function ce(e) {
  var t,
      n,
      r,
      o,
      s = void 0 === e ? E : e,
      i = s.options,
      a = void 0 === i ? E : i,
      c = s.plugins,
      u = void 0 === c ? w : c,
      l = new stylis_browser_esm(a),
      d = [],
      h = function (e) {
    function t(t) {
      if (t) try {
        e(t + "}");
      } catch (e) {}
    }

    return function (n, r, o, s, i, a, c, u, l, d) {
      switch (n) {
        case 1:
          if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
          break;

        case 2:
          if (0 === u) return r + "/*|*/";
          break;

        case 3:
          switch (u) {
            case 102:
            case 112:
              return e(o[0] + r), "";

            default:
              return r + (0 === d ? "/*|*/" : "");
          }

        case -2:
          r.split("/*|*/}").forEach(t);
      }
    };
  }(function (e) {
    d.push(e);
  }),
      f = function f(e, r, s) {
    return 0 === r && -1 !== ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
  };

  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(ie, ""),
        u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }

  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, h, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || j(15), te(e, t.name);
  }, 5381).toString() : "", m;
}

var ue = react.createContext(),
    le = ue.Consumer,
    de = react.createContext(),
    he = (de.Consumer, new Z()),
    pe = ce();

function fe() {
  return (0,react.useContext)(ue) || he;
}

function me() {
  return (0,react.useContext)(de) || pe;
}

function ye(e) {
  var t = (0,react.useState)(e.stylisPlugins),
      n = t[0],
      s = t[1],
      c = fe(),
      u = (0,react.useMemo)(function () {
    var t = c;
    return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
      target: e.target
    }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
      useCSSOMInjection: !1
    })), t;
  }, [e.disableCSSOMInjection, e.sheet, e.target]),
      l = (0,react.useMemo)(function () {
    return ce({
      options: {
        prefix: !e.disableVendorPrefixes
      },
      plugins: n
    });
  }, [e.disableVendorPrefixes, n]);
  return (0,react.useEffect)(function () {
    shallowequal_default()(n, e.stylisPlugins) || s(e.stylisPlugins);
  }, [e.stylisPlugins]), react.createElement(ue.Provider, {
    value: u
  }, react.createElement(de.Provider, {
    value: l
  },  false ? 0 : e.children));
}

var ve = function () {
  function e(e, t) {
    var n = this;
    this.inject = function (e, t) {
      void 0 === t && (t = pe);
      var r = n.name + t.hash;
      e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
    }, this.toString = function () {
      return j(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
  }

  return e.prototype.getName = function (e) {
    return void 0 === e && (e = pe), this.name + e.hash;
  }, e;
}(),
    ge = /([A-Z])/,
    Se = /([A-Z])/g,
    we = /^ms-/,
    Ee = function Ee(e) {
  return "-" + e.toLowerCase();
};

function be(e) {
  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}

var _e = function _e(e) {
  return null == e || !1 === e || "" === e;
};

function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) {
      "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    }

    return i;
  }

  if (_e(e)) return "";
  if (N(e)) return "." + e.styledComponentId;

  if (b(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return  false && 0, Ne(u, n, r, o);
  }

  var l;
  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
    var r,
        o,
        s = [];

    for (var i in t) {
      t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitless_browser_esm ? String(o).trim() : o + "px") + ";"));
    }

    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}

var Ae = function Ae(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};

function Ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  return b(e) || S(e) ? Ae(Ne(g(w, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Ne(g(e, n)));
}

var Ie = /invalid hook call/i,
    Pe = new Set(),
    Oe = function Oe(e, t) {
  if (false) { var o, n, r; }
},
    Re = function Re(e, t, n) {
  return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
},
    De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    je = /(^-|-$)/g;

function Te(e) {
  return e.replace(De, "-").replace(je, "");
}

var ke = function ke(e) {
  return ee(ne(e) >>> 0);
};

function xe(e) {
  return "string" == typeof e && ( true || 0);
}

var Ve = function Ve(e) {
  return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
},
    Be = function Be(e) {
  return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
};

function Me(e, t, n) {
  var r = e[n];
  Ve(t) && Ve(r) ? ze(r, t) : e[n] = t;
}

function ze(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (Ve(i)) for (var a in i) {
      Be(a) && Me(e, i[a], a);
    }
  }

  return e;
}

var Le = react.createContext(),
    Ge = Le.Consumer;

function Fe(e) {
  var t = (0,react.useContext)(Le),
      n = (0,react.useMemo)(function () {
    return function (e, t) {
      if (!e) return j(14);

      if (b(e)) {
        var n = e(t);
        return  true ? n : 0;
      }

      return Array.isArray(e) || "object" != typeof e ? j(8) : t ? v({}, t, {}, e) : e;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? react.createElement(Le.Provider, {
    value: n
  }, e.children) : null;
}

var Ye = {};

function qe(e, t, n) {
  var o = N(e),
      i = !xe(e),
      a = t.attrs,
      c = void 0 === a ? w : a,
      d = t.componentId,
      h = void 0 === d ? function (e, t) {
    var n = "string" != typeof e ? "sc" : Te(e);
    Ye[n] = (Ye[n] || 0) + 1;
    var r = n + "-" + ke("5.3.1" + n + Ye[n]);
    return t ? t + "-" + r : r;
  }(t.displayName, t.parentComponentId) : d,
      p = t.displayName,
      f = void 0 === p ? function (e) {
    return xe(e) ? "styled." + e : "Styled(" + _(e) + ")";
  }(e) : p,
      g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h,
      S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
      A = t.shouldForwardProp;
  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);

  var C,
      I = new se(n, g, o ? e.componentStyle : void 0),
      P = I.isStatic && 0 === c.length,
      O = function O(e, t) {
    return function (e, t, n, r) {
      var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
       false && 0;

      var f = function (e, t, n) {
        void 0 === e && (e = E);
        var r = v({}, t, {
          theme: e
        }),
            o = {};
        return n.forEach(function (e) {
          var t,
              n,
              s,
              i = e;

          for (t in b(i) && (i = i(r)), i) {
            r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
          }
        }), [r, o];
      }(Re(t, (0,react.useContext)(Le), a) || E, t, o),
          y = f[0],
          g = f[1],
          S = function (e, t, n, r) {
        var o = fe(),
            s = me(),
            i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
        return  false && 0,  false && 0, i;
      }(i, r, y,  false ? 0 : void 0),
          w = n,
          _ = g.$as || t.$as || g.as || t.as || p,
          N = xe(_),
          A = g !== t ? v({}, t, {}, g) : t,
          C = {};

      for (var I in A) {
        "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, is_prop_valid_browser_esm, _) : !N || is_prop_valid_browser_esm(I)) && (C[I] = A[I]));
      }

      return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, (0,react.createElement)(_, C);
    }(C, e, t, P);
  };

  return O.displayName = f, (C = react.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
    var r = t.componentId,
        o = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          o = {},
          s = Object.keys(e);

      for (r = 0; r < s.length; r++) {
        n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      }

      return o;
    }(t, ["componentId"]),
        s = r && r + "-" + (xe(e) ? e : Te(_(e)));

    return qe(e, v({}, o, {
      attrs: S,
      componentId: s
    }), n);
  }, Object.defineProperty(C, "defaultProps", {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(t) {
      this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
    }
  }),  false && (0), C.toString = function () {
    return "." + C.styledComponentId;
  }, i && hoist_non_react_statics_cjs_default()(C, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), C;
}

var He = function He(e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = E), !(0,react_is.isValidElementType)(r)) return j(1, String(r));

    var s = function s() {
      return t(r, o, Ce.apply(void 0, arguments));
    };

    return s.withConfig = function (n) {
      return e(t, r, v({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, v({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(qe, e);
};

["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  He[e] = He(e);
});

var $e = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
  }

  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(Ne(this.rules, t, n, r).join(""), ""),
        s = this.componentId + e;
    n.insertRules(s, s, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();

function We(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
    n[o - 1] = arguments[o];
  }

  var i = Ce.apply(void 0, [e].concat(n)),
      a = "sc-global-" + ke(JSON.stringify(i)),
      u = new $e(i, a);

  function l(e) {
    var t = fe(),
        n = me(),
        o = (0,react.useContext)(Le),
        l = (0,react.useRef)(t.allocateGSInstance(a)).current;
    return  false && 0,  false && 0, t.server && h(l, e, t, o, n), (0,react.useLayoutEffect)(function () {
      if (!t.server) return h(l, e, t, o, n), function () {
        return u.removeStyles(l, t);
      };
    }, [l, e, t, o, n]), null;
  }

  function h(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, O, n, o);else {
      var s = v({}, t, {
        theme: Re(t, r, l.defaultProps)
      });
      u.renderStyles(e, s, n, o);
    }
  }

  return  false && 0, react.memo(l);
}

function Ue(e) {
   false && 0;

  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }

  var o = Ce.apply(void 0, [e].concat(n)).join(""),
      s = ke(o);
  return new ve(s, o);
}

var Je = function () {
  function e() {
    var e = this;
    this._emitSheetCSS = function () {
      var t = e.instance.toString();
      if (!t) return "";
      var n = q();
      return "<style " + [n && 'nonce="' + n + '"', A + '="true"', 'data-styled-version="5.3.1"'].filter(Boolean).join(" ") + ">" + t + "</style>";
    }, this.getStyleTags = function () {
      return e.sealed ? j(2) : e._emitSheetCSS();
    }, this.getStyleElement = function () {
      var t;
      if (e.sealed) return j(2);
      var n = ((t = {})[A] = "", t["data-styled-version"] = "5.3.1", t.dangerouslySetInnerHTML = {
        __html: e.instance.toString()
      }, t),
          o = q();
      return o && (n.nonce = o), [react.createElement("style", v({}, n, {
        key: "sc-0-0"
      }))];
    }, this.seal = function () {
      e.sealed = !0;
    }, this.instance = new Z({
      isServer: !0
    }), this.sealed = !1;
  }

  var t = e.prototype;
  return t.collectStyles = function (e) {
    return this.sealed ? j(2) : react.createElement(ye, {
      sheet: this.instance
    }, e);
  }, t.interleaveWithNodeStream = function (e) {
    return j(3);
  }, e;
}(),
    Xe = function Xe(e) {
  var t = r.forwardRef(function (t, n) {
    var o = s(Le),
        i = e.defaultProps,
        a = Re(t, o, i);
    return  false && 0, r.createElement(e, v({}, t, {
      theme: a,
      ref: n
    }));
  });
  return y(t, e), t.displayName = "WithTheme(" + _(e) + ")", t;
},
    Ze = function Ze() {
  return s(Le);
},
    Ke = {
  StyleSheet: Z,
  masterSheet: he
};

 false && 0,  false && (0);
/* harmony default export */ var styled_components_browser_esm = (He);


/***/ }),

/***/ 5257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "JO": function() { return /* reexport */ icon; },
  "UN": function() { return /* reexport */ appstore; },
  "BZ": function() { return /* reexport */ bookmark; },
  "Pj": function() { return /* reexport */ codepen; },
  "Ak": function() { return /* reexport */ external; },
  "PU": function() { return /* reexport */ folder; },
  "Rt": function() { return /* reexport */ fork; },
  "Mr": function() { return /* reexport */ github; },
  "RM": function() { return /* reexport */ instagram; },
  "jb": function() { return /* reexport */ linkedin; },
  "pA": function() { return /* reexport */ loader; },
  "mp": function() { return /* reexport */ logo; },
  "GK": function() { return /* reexport */ star; },
  "JD": function() { return /* reexport */ twitter; }
});

// NAMESPACE OBJECT: ./src/components/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  "JO": function() { return icon; },
  "UN": function() { return appstore; },
  "BZ": function() { return bookmark; },
  "Pj": function() { return codepen; },
  "Ak": function() { return external; },
  "PU": function() { return folder; },
  "Rt": function() { return fork; },
  "Mr": function() { return github; },
  "RM": function() { return instagram; },
  "jb": function() { return linkedin; },
  "pA": function() { return loader; },
  "mp": function() { return logo; },
  "GK": function() { return star; },
  "JD": function() { return twitter; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/icons/appstore.js
var IconAppStore=function IconAppStore(){return/*#__PURE__*/react.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve"},/*#__PURE__*/react.createElement("title",null,"Apple App Store"),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"}))));};/* harmony default export */ var appstore = (IconAppStore);
;// CONCATENATED MODULE: ./src/components/icons/bookmark.js
var IconBookmark=function IconBookmark(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bookmark"},/*#__PURE__*/react.createElement("title",null,"Bookmark"),/*#__PURE__*/react.createElement("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}));};/* harmony default export */ var bookmark = (IconBookmark);
;// CONCATENATED MODULE: ./src/components/icons/codepen.js
var IconCodepen=function IconCodepen(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-codepen"},/*#__PURE__*/react.createElement("title",null,"CodePen"),/*#__PURE__*/react.createElement("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),/*#__PURE__*/react.createElement("line",{x1:"12",y1:"22",x2:"12",y2:"15.5"}),/*#__PURE__*/react.createElement("polyline",{points:"22 8.5 12 15.5 2 8.5"}),/*#__PURE__*/react.createElement("polyline",{points:"2 15.5 12 8.5 22 15.5"}),/*#__PURE__*/react.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"8.5"}));};/* harmony default export */ var codepen = (IconCodepen);
;// CONCATENATED MODULE: ./src/components/icons/external.js
var IconExternal=function IconExternal(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-external-link"},/*#__PURE__*/react.createElement("title",null,"External Link"),/*#__PURE__*/react.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),/*#__PURE__*/react.createElement("polyline",{points:"15 3 21 3 21 9"}),/*#__PURE__*/react.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}));};/* harmony default export */ var external = (IconExternal);
;// CONCATENATED MODULE: ./src/components/icons/folder.js
var IconFolder=function IconFolder(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-folder"},/*#__PURE__*/react.createElement("title",null,"Folder"),/*#__PURE__*/react.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}));};/* harmony default export */ var folder = (IconFolder);
;// CONCATENATED MODULE: ./src/components/icons/fork.js
var IconFork=function IconFork(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-git-branch"},/*#__PURE__*/react.createElement("title",null,"Git Fork"),/*#__PURE__*/react.createElement("line",{x1:"6",y1:"3",x2:"6",y2:"15"}),/*#__PURE__*/react.createElement("circle",{cx:"18",cy:"6",r:"3"}),/*#__PURE__*/react.createElement("circle",{cx:"6",cy:"18",r:"3"}),/*#__PURE__*/react.createElement("path",{d:"M18 9a9 9 0 0 1-9 9"}));};/* harmony default export */ var fork = (IconFork);
;// CONCATENATED MODULE: ./src/components/icons/icon.js
var Icon=function Icon(_ref){var name=_ref.name;switch(name){case'AppStore':return/*#__PURE__*/react.createElement(appstore,null);case'Bookmark':return/*#__PURE__*/react.createElement(bookmark,null);case'Codepen':return/*#__PURE__*/react.createElement(codepen,null);case'External':return/*#__PURE__*/react.createElement(external,null);case'Folder':return/*#__PURE__*/react.createElement(folder,null);case'Fork':return/*#__PURE__*/react.createElement(fork,null);case'GitHub':return/*#__PURE__*/react.createElement(github,null);case'Instagram':return/*#__PURE__*/react.createElement(instagram,null);case'Linkedin':return/*#__PURE__*/react.createElement(linkedin,null);case'Loader':return/*#__PURE__*/react.createElement(loader,null);case'Logo':return/*#__PURE__*/react.createElement(logo,null);case'ProjectWebsite':return/*#__PURE__*/react.createElement(icons_namespaceObject.IconProjectWebsite,null);case'Star':return/*#__PURE__*/react.createElement(star,null);case'Twitter':return/*#__PURE__*/react.createElement(twitter,null);default:return/*#__PURE__*/react.createElement(external,null);}};/* harmony default export */ var icon = (Icon);
;// CONCATENATED MODULE: ./src/components/icons/github.js
var IconGitHub=function IconGitHub(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github"},/*#__PURE__*/react.createElement("title",null,"GitHub"),/*#__PURE__*/react.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}));};/* harmony default export */ var github = (IconGitHub);
;// CONCATENATED MODULE: ./src/components/icons/instagram.js
var IconInstagram=function IconInstagram(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-instagram"},/*#__PURE__*/react.createElement("title",null,"Instagram"),/*#__PURE__*/react.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),/*#__PURE__*/react.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),/*#__PURE__*/react.createElement("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}));};/* harmony default export */ var instagram = (IconInstagram);
;// CONCATENATED MODULE: ./src/components/icons/linkedin.js
var IconLinkedin=function IconLinkedin(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin"},/*#__PURE__*/react.createElement("title",null,"LinkedIn"),/*#__PURE__*/react.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),/*#__PURE__*/react.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),/*#__PURE__*/react.createElement("circle",{cx:"4",cy:"4",r:"2"}));};/* harmony default export */ var linkedin = (IconLinkedin);
;// CONCATENATED MODULE: ./src/components/icons/loader.js
var IconLoader=function IconLoader(){return/*#__PURE__*/react.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},/*#__PURE__*/react.createElement("title",null,"Loader Logo"),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("g",{id:"B",transform:"translate(11.000000, 5.000000)"},/*#__PURE__*/react.createElement("path",{d:"M 25.301 61.1 L 25.301 60.15 Q 28.064 60.017 29.238 58.85 A 2.853 2.853 0 0 0 29.501 58.55 A 4.707 4.707 0 0 0 30.009 57.662 Q 30.824 55.87 31.551 51.85 L 36.351 24.2 A 55.515 55.515 0 0 0 30.402 24.998 Q 27.404 25.578 24.95 26.475 A 22.463 22.463 0 0 0 20.526 28.625 A 14.231 14.231 0 0 0 17.497 31.172 A 9.934 9.934 0 0 0 14.951 37.95 A 6.192 6.192 0 0 0 15.521 40.622 A 6.135 6.135 0 0 0 16.751 42.35 A 7.021 7.021 0 0 0 18.404 43.515 Q 19.148 43.899 20.044 44.173 A 12.128 12.128 0 0 0 20.051 44.175 A 24.073 24.073 0 0 0 21.262 44.512 Q 22.475 44.814 23.367 44.872 A 7.063 7.063 0 0 0 23.426 44.875 A 28.634 28.634 0 0 0 23.696 44.889 Q 24.715 44.937 24.842 44.858 A 0.055 0.055 0 0 0 24.851 44.85 L 24.851 45.9 Q 18.951 45.9 16.101 43.1 A 6.474 6.474 0 0 1 14.048 38.873 A 8.967 8.967 0 0 1 14.001 37.95 Q 14.001 30.8 21.476 26.9 A 28.927 28.927 0 0 1 27.646 24.601 Q 33.76 23.025 42.329 23.001 A 94.894 94.894 0 0 1 42.601 23 Q 51.101 23 54.676 25.3 Q 58.251 27.6 58.251 31.575 Q 58.251 35.55 55.526 38.4 A 16.063 16.063 0 0 1 51.565 41.391 A 21.445 21.445 0 0 1 48.351 42.8 A 735.9 735.9 0 0 0 50.625 47.484 Q 55.198 56.811 56.701 59.025 A 7.931 7.931 0 0 0 57.866 60.403 Q 59.323 61.75 61.151 61.75 Q 62.701 61.75 63.926 60.775 A 5.031 5.031 0 0 0 65.477 58.649 A 6.313 6.313 0 0 0 65.651 58.15 L 66.901 58.15 A 7.458 7.458 0 0 1 65.252 61.111 Q 63.907 62.545 61.741 63.061 A 11.624 11.624 0 0 1 59.051 63.35 A 13.699 13.699 0 0 1 56.175 63.064 Q 54.16 62.632 52.625 61.546 A 8.73 8.73 0 0 1 52.526 61.475 A 11.516 11.516 0 0 1 50.162 59.124 Q 49.298 57.992 48.566 56.554 A 21.396 21.396 0 0 1 48.201 55.8 L 42.801 44.1 Q 40.838 44.297 39.886 44.3 A 9.316 9.316 0 0 1 39.851 44.3 Q 39.701 45.05 39.401 46.85 Q 39.172 48.228 39.001 49.079 A 24.045 24.045 0 0 1 38.901 49.55 Q 37.901 54.95 33.876 58.025 A 15.505 15.505 0 0 1 29.854 60.283 A 13.002 13.002 0 0 1 25.301 61.1 Z M 43.051 23.95 L 40.051 43.2 A 25.988 25.988 0 0 0 45.843 42.417 A 19.427 19.427 0 0 0 52.051 39.625 A 14.986 14.986 0 0 0 54.475 37.58 Q 56.951 34.949 56.951 31.75 Q 56.951 24.1 43.051 23.95 Z",fill:"currentColor"})),/*#__PURE__*/react.createElement("path",{stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",d:"M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"})));};/* harmony default export */ var loader = (IconLoader);
;// CONCATENATED MODULE: ./src/components/icons/logo.js
var IconLogo=function IconLogo(){return/*#__PURE__*/react.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 96"},/*#__PURE__*/react.createElement("title",null,"Home"),/*#__PURE__*/react.createElement("g",{transform:"translate(-8.000000, -2.000000)"},/*#__PURE__*/react.createElement("g",{transform:"translate(11.000000, 5.000000)"},/*#__PURE__*/react.createElement("path",{d:"M 25.301 61.1 L 25.301 60.15 Q 28.064 60.017 29.238 58.85 A 2.853 2.853 0 0 0 29.501 58.55 A 4.707 4.707 0 0 0 30.009 57.662 Q 30.824 55.87 31.551 51.85 L 36.351 24.2 A 55.515 55.515 0 0 0 30.402 24.998 Q 27.404 25.578 24.95 26.475 A 22.463 22.463 0 0 0 20.526 28.625 A 14.231 14.231 0 0 0 17.497 31.172 A 9.934 9.934 0 0 0 14.951 37.95 A 6.192 6.192 0 0 0 15.521 40.622 A 6.135 6.135 0 0 0 16.751 42.35 A 7.021 7.021 0 0 0 18.404 43.515 Q 19.148 43.899 20.044 44.173 A 12.128 12.128 0 0 0 20.051 44.175 A 24.073 24.073 0 0 0 21.262 44.512 Q 22.475 44.814 23.367 44.872 A 7.063 7.063 0 0 0 23.426 44.875 A 28.634 28.634 0 0 0 23.696 44.889 Q 24.715 44.937 24.842 44.858 A 0.055 0.055 0 0 0 24.851 44.85 L 24.851 45.9 Q 18.951 45.9 16.101 43.1 A 6.474 6.474 0 0 1 14.048 38.873 A 8.967 8.967 0 0 1 14.001 37.95 Q 14.001 30.8 21.476 26.9 A 28.927 28.927 0 0 1 27.646 24.601 Q 33.76 23.025 42.329 23.001 A 94.894 94.894 0 0 1 42.601 23 Q 51.101 23 54.676 25.3 Q 58.251 27.6 58.251 31.575 Q 58.251 35.55 55.526 38.4 A 16.063 16.063 0 0 1 51.565 41.391 A 21.445 21.445 0 0 1 48.351 42.8 A 735.9 735.9 0 0 0 50.625 47.484 Q 55.198 56.811 56.701 59.025 A 7.931 7.931 0 0 0 57.866 60.403 Q 59.323 61.75 61.151 61.75 Q 62.701 61.75 63.926 60.775 A 5.031 5.031 0 0 0 65.477 58.649 A 6.313 6.313 0 0 0 65.651 58.15 L 66.901 58.15 A 7.458 7.458 0 0 1 65.252 61.111 Q 63.907 62.545 61.741 63.061 A 11.624 11.624 0 0 1 59.051 63.35 A 13.699 13.699 0 0 1 56.175 63.064 Q 54.16 62.632 52.625 61.546 A 8.73 8.73 0 0 1 52.526 61.475 A 11.516 11.516 0 0 1 50.162 59.124 Q 49.298 57.992 48.566 56.554 A 21.396 21.396 0 0 1 48.201 55.8 L 42.801 44.1 Q 40.838 44.297 39.886 44.3 A 9.316 9.316 0 0 1 39.851 44.3 Q 39.701 45.05 39.401 46.85 Q 39.172 48.228 39.001 49.079 A 24.045 24.045 0 0 1 38.901 49.55 Q 37.901 54.95 33.876 58.025 A 15.505 15.505 0 0 1 29.854 60.283 A 13.002 13.002 0 0 1 25.301 61.1 Z M 43.051 23.95 L 40.051 43.2 A 25.988 25.988 0 0 0 45.843 42.417 A 19.427 19.427 0 0 0 52.051 39.625 A 14.986 14.986 0 0 0 54.475 37.58 Q 56.951 34.949 56.951 31.75 Q 56.951 24.1 43.051 23.95 Z",fill:"currentColor"}),/*#__PURE__*/react.createElement("polygon",{id:"Shape",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",points:"39 0 0 22 0 67 39 90 78 68 78 23"}))));};/* harmony default export */ var logo = (IconLogo);
;// CONCATENATED MODULE: ./src/components/icons/star.js
var IconStar=function IconStar(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-star"},/*#__PURE__*/react.createElement("title",null,"Star"),/*#__PURE__*/react.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}));};/* harmony default export */ var star = (IconStar);
;// CONCATENATED MODULE: ./src/components/icons/twitter.js
var IconTwitter=function IconTwitter(){return/*#__PURE__*/react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter"},/*#__PURE__*/react.createElement("title",null,"Twitter"),/*#__PURE__*/react.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}));};/* harmony default export */ var twitter = (IconTwitter);
;// CONCATENATED MODULE: ./src/components/icons/index.js


/***/ }),

/***/ 4741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CL": function() { return /* reexport */ about; },
  "r8": function() { return /* reexport */ contact; },
  "GT": function() { return /* reexport */ email; },
  "g4": function() { return /* reexport */ featured; },
  "$_": function() { return /* reexport */ footer; },
  "Fb": function() { return /* reexport */ head; },
  "VM": function() { return /* reexport */ hero; },
  "pe": function() { return /* reexport */ jobs; },
  "Ar": function() { return /* reexport */ layout; },
  "aN": function() { return /* reexport */ loader; },
  "v2": function() { return /* reexport */ menu; },
  "JL": function() { return /* reexport */ nav; },
  "pj": function() { return /* reexport */ projects; },
  "MF": function() { return /* reexport */ side; },
  "g_": function() { return /* reexport */ social; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(5414);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js + 2 modules
var es = __webpack_require__(9499);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(5444);
;// CONCATENATED MODULE: ./src/components/head.js
// https://www.gatsbyjs.com/docs/add-seo-component/
var Head=function Head(_ref){var title=_ref.title,description=_ref.description,image=_ref.image;var _useLocation=(0,es.useLocation)(),pathname=_useLocation.pathname;var _useStaticQuery=(0,gatsby_browser_entry.useStaticQuery)("1994492073"),site=_useStaticQuery.site;var _site$siteMetadata=site.siteMetadata,defaultTitle=_site$siteMetadata.defaultTitle,defaultDescription=_site$siteMetadata.defaultDescription,siteUrl=_site$siteMetadata.siteUrl,defaultImage=_site$siteMetadata.defaultImage,twitterUsername=_site$siteMetadata.twitterUsername;var seo={title:title||defaultTitle,description:description||defaultDescription,image:""+siteUrl+(image||defaultImage),url:""+siteUrl+pathname};return/*#__PURE__*/react.createElement(Helmet/* Helmet */.q,{title:title,defaultTitle:seo.title,titleTemplate:"%s | "+defaultTitle},/*#__PURE__*/react.createElement("html",{lang:"en"}),/*#__PURE__*/react.createElement("meta",{name:"description",content:seo.description}),/*#__PURE__*/react.createElement("meta",{name:"image",content:seo.image}),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:seo.title}),/*#__PURE__*/react.createElement("meta",{property:"og:description",content:seo.description}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:seo.image}),/*#__PURE__*/react.createElement("meta",{property:"og:url",content:seo.url}),/*#__PURE__*/react.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:creator",content:twitterUsername}),/*#__PURE__*/react.createElement("meta",{name:"twitter:title",content:seo.title}),/*#__PURE__*/react.createElement("meta",{name:"twitter:description",content:seo.description}),/*#__PURE__*/react.createElement("meta",{name:"twitter:image",content:seo.image}),/*#__PURE__*/react.createElement("meta",{name:"google-site-verification",content:"DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"}));};/* harmony default export */ var head = (Head);Head.defaultProps={title:null,description:null,image:null};
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(9);
;// CONCATENATED MODULE: ./src/styles/mixins.js
var mixins_button=(0,styled_components_browser_esm/* css */.iv)(["color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}"]);var mixins={flexCenter:(0,styled_components_browser_esm/* css */.iv)(["display:flex;justify-content:center;align-items:center;"]),flexBetween:(0,styled_components_browser_esm/* css */.iv)(["display:flex;justify-content:space-between;align-items:center;"]),link:(0,styled_components_browser_esm/* css */.iv)(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:active,&:focus{color:var(--green);outline:0;}"]),inlineLink:(0,styled_components_browser_esm/* css */.iv)(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);color:var(--green);&:hover,&:focus,&:active{color:var(--green);outline:0;&:after{width:100%;}& > *{color:var(--green) !important;transition:var(--transition);}}&:after{content:'';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:var(--green);transition:var(--transition);opacity:0.5;}"]),button:mixins_button,smallButton:(0,styled_components_browser_esm/* css */.iv)(["color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:0.75rem 1rem;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}"]),bigButton:(0,styled_components_browser_esm/* css */.iv)(["color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:1.25rem 1.75rem;font-size:var(--fz-sm);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}"]),boxShadow:(0,styled_components_browser_esm/* css */.iv)(["box-shadow:0 10px 30px -15px var(--navy-shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--navy-shadow);}"]),fancyList:(0,styled_components_browser_esm/* css */.iv)(["padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'\u25B9';position:absolute;left:0;color:var(--green);}}"]),resetList:(0,styled_components_browser_esm/* css */.iv)(["list-style:none;padding:0;margin:0;"])};/* harmony default export */ var styles_mixins = (mixins);
;// CONCATENATED MODULE: ./src/styles/theme.js
var theme={bp:{mobileS:"max-width: 330px",mobileM:"max-width: 400px",mobileL:"max-width: 480px",tabletS:"max-width: 600px",tabletL:"max-width: 768px",desktopXS:"max-width: 900px",desktopS:"max-width: 1080px",desktopM:"max-width: 1200px",desktopL:"max-width: 1400px"},mixins:styles_mixins};/* harmony default export */ var styles_theme = (theme);
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Regular.woff
/* harmony default export */ var Calibre_Regular = (__webpack_require__.p + "static/Calibre-Regular-98526589fa32315c552129869e08427e.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Regular.woff2
/* harmony default export */ var Calibre_Regular_woff2 = (__webpack_require__.p + "static/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Medium.woff
/* harmony default export */ var Calibre_Medium = (__webpack_require__.p + "static/Calibre-Medium-46693d9b57a6b8a657b5393258f6e899.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Medium.woff2
/* harmony default export */ var Calibre_Medium_woff2 = (__webpack_require__.p + "static/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Semibold.woff
/* harmony default export */ var Calibre_Semibold = (__webpack_require__.p + "static/Calibre-Semibold-6972688a249bd53a6c7e69a89e50cdd6.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Semibold.woff2
/* harmony default export */ var Calibre_Semibold_woff2 = (__webpack_require__.p + "static/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-RegularItalic.woff
/* harmony default export */ var Calibre_RegularItalic = (__webpack_require__.p + "static/Calibre-RegularItalic-57371b9e514dbbe9da31dad1a298de2d.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-RegularItalic.woff2
/* harmony default export */ var Calibre_RegularItalic_woff2 = (__webpack_require__.p + "static/Calibre-RegularItalic-5f875bd7b669f1e11b622d4d6d71b5b0.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-MediumItalic.woff
/* harmony default export */ var Calibre_MediumItalic = (__webpack_require__.p + "static/Calibre-MediumItalic-aa285f95879aa2c2d26b228d5e422da6.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-MediumItalic.woff2
/* harmony default export */ var Calibre_MediumItalic_woff2 = (__webpack_require__.p + "static/Calibre-MediumItalic-7aa140573fd9ed30ae01e117c418b12b.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-SemiboldItalic.woff
/* harmony default export */ var Calibre_SemiboldItalic = (__webpack_require__.p + "static/Calibre-SemiboldItalic-ad4bd95abee7bca1bdd6a93398f84a04.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-SemiboldItalic.woff2
/* harmony default export */ var Calibre_SemiboldItalic_woff2 = (__webpack_require__.p + "static/Calibre-SemiboldItalic-5f04bffe7ce988169806d66e417a966a.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Regular.woff
/* harmony default export */ var SFMono_Regular = (__webpack_require__.p + "static/SFMono-Regular-e36fa5257c93fc7711eae342068f9eda.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Regular.woff2
/* harmony default export */ var SFMono_Regular_woff2 = (__webpack_require__.p + "static/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Semibold.woff
/* harmony default export */ var SFMono_Semibold = (__webpack_require__.p + "static/SFMono-Semibold-ee054046915420413d0068fb1e7105c3.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Semibold.woff2
/* harmony default export */ var SFMono_Semibold_woff2 = (__webpack_require__.p + "static/SFMono-Semibold-6e6f6c93f4bdf9cbd090c60e97a017e2.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-RegularItalic.woff
/* harmony default export */ var SFMono_RegularItalic = (__webpack_require__.p + "static/SFMono-RegularItalic-3a20a00dfdeb4ba538473fa7bf625cbd.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-RegularItalic.woff2
/* harmony default export */ var SFMono_RegularItalic_woff2 = (__webpack_require__.p + "static/SFMono-RegularItalic-a596917f86217b40000ff1b894cd0e52.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-SemiboldItalic.woff
/* harmony default export */ var SFMono_SemiboldItalic = (__webpack_require__.p + "static/SFMono-SemiboldItalic-10eb596e904940cd1aebb2cc6286015c.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-SemiboldItalic.woff2
/* harmony default export */ var SFMono_SemiboldItalic_woff2 = (__webpack_require__.p + "static/SFMono-SemiboldItalic-9a0ae6382e12c5e28a7342ffb41cf4da.woff2");
;// CONCATENATED MODULE: ./src/styles/fonts.js
var calibreNormalWeights={400:[Calibre_Regular,Calibre_Regular_woff2],500:[Calibre_Medium,Calibre_Medium_woff2],600:[Calibre_Semibold,Calibre_Semibold_woff2]};var calibreItalicWeights={400:[Calibre_RegularItalic,Calibre_RegularItalic_woff2],500:[Calibre_MediumItalic,Calibre_MediumItalic_woff2],600:[Calibre_SemiboldItalic,Calibre_SemiboldItalic_woff2]};var sfMonoNormalWeights={400:[SFMono_Regular,SFMono_Regular_woff2],600:[SFMono_Semibold,SFMono_Semibold_woff2]};var sfMonoItalicWeights={400:[SFMono_RegularItalic,SFMono_RegularItalic_woff2],600:[SFMono_SemiboldItalic,SFMono_SemiboldItalic_woff2]};var calibre={name:'Calibre',normal:calibreNormalWeights,italic:calibreItalicWeights};var sfMono={name:'SF Mono',normal:sfMonoNormalWeights,italic:sfMonoItalicWeights};var createFontFaces=function createFontFaces(family,style){if(style===void 0){style='normal';}var styles='';for(var _i=0,_Object$entries=Object.entries(family[style]);_i<_Object$entries.length;_i++){var _Object$entries$_i=_Object$entries[_i],weight=_Object$entries$_i[0],formats=_Object$entries$_i[1];var woff=formats[0];var woff2=formats[1];styles+="\n      @font-face {\n        font-family: '"+family.name+"';\n        src: url("+woff2+") format('woff2'),\n            url("+woff+") format('woff');\n        font-weight: "+weight+";\n        font-style: "+style+";\n        font-display: auto;\n      }\n    ";}return styles;};var calibreNormal=createFontFaces(calibre);var calibreItalic=createFontFaces(calibre,'italic');var sfMonoNormal=createFontFaces(sfMono);var sfMonoItalic=createFontFaces(sfMono,'italic');var Fonts=(0,styled_components_browser_esm/* css */.iv)(["",""],calibreNormal+calibreItalic+sfMonoNormal+sfMonoItalic);/* harmony default export */ var fonts = (Fonts);
;// CONCATENATED MODULE: ./src/styles/variables.js
var variables=(0,styled_components_browser_esm/* css */.iv)([":root{--dark-navy:#020c1b;--navy:#0a192f;--light-navy:#112240;--lightest-navy:#233554;--navy-shadow:rgba(2,12,27,0.7);--dark-slate:#495670;--slate:#8892b0;--light-slate:#a8b2d1;--lightest-slate:#ccd6f6;--white:#e6f1ff;--green:#64ffda;--green-tint:rgba(100,255,218,0.1);--pink:#f57dff;--blue:#57cbff;--font-sans:'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;--font-mono:'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px;--border-radius:4px;--nav-height:100px;--nav-scroll-height:70px;--tab-height:42px;--tab-width:120px;--easing:cubic-bezier(0.645,0.045,0.355,1);--transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);--hamburger-width:30px;--ham-before:top 0.1s ease-in 0.25s,opacity 0.1s ease-in;--ham-before-active:top 0.1s ease-out,opacity 0.1s ease-out 0.12s;--ham-after:bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);--ham-after-active:bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;}"]);/* harmony default export */ var styles_variables = (variables);
;// CONCATENATED MODULE: ./src/styles/TransitionStyles.js
// https://reactcommunity.org/react-transition-group/css-transition
var TransitionStyles=(0,styled_components_browser_esm/* css */.iv)([".fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms var(--easing);}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms var(--easing);}"]);/* harmony default export */ var styles_TransitionStyles = (TransitionStyles);
;// CONCATENATED MODULE: ./src/styles/PrismStyles.js
var prismColors={bg:"#112340",lineHighlight:"#1d2d50",blue:"#5ccfe6",purple:"#c3a6ff",green:"#bae67e",yellow:"#ffd580",orange:"#ffae57",red:"#ef6b73",grey:"#a2aabc",comment:"#8695b799"};// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
var PrismStyles=(0,styled_components_browser_esm/* css */.iv)([".gatsby-highlight{background-color:",";color:",";border-radius:var(--border-radius);margin:2em 0;padding:1.25em;overflow:auto;position:relative;font-family:var(--font-mono);font-size:var(--fz-md);}.gatsby-highlight code[class*='language-'],.gatsby-highlight pre[class*='language-']{height:auto !important;font-size:var(--fz-sm);line-height:1.5;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:2;hyphens:none;}.gatsby-highlight pre[class*='language-']{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;padding-top:2em;}.gatsby-code-title{padding:1em 1.5em;font-family:var(--font-mono);font-size:var(--fz-xs);background-color:",";color:",";border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid ",";& + .gatsby-highlight{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;}}.gatsby-highlight-code-line{display:block;background-color:",";border-left:2px solid var(--green);padding-left:calc(1em + 2px);padding-right:1em;margin-right:-1.35em;margin-left:-1.35em;}.gatsby-highlight pre[class*='language-']::before{background:var(--lightest-navy);color:var(--white);font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;letter-spacing:0.1em;text-transform:uppercase;border-radius:0 0 3px 3px;position:absolute;top:0;left:1.25rem;padding:0.25rem 0.5rem;}.gatsby-highlight pre[class='language-javascript']::before{content:'js';}.gatsby-highlight pre[class='language-js']::before{content:'js';}.gatsby-highlight pre[class='language-jsx']::before{content:'jsx';}.gatsby-highlight pre[class='language-graphql']::before{content:'GraphQL';}.gatsby-highlight pre[class='language-html']::before{content:'html';}.gatsby-highlight pre[class='language-css']::before{content:'css';}.gatsby-highlight pre[class='language-mdx']::before{content:'mdx';}.gatsby-highlight pre[class='language-shell']::before{content:'shell';}.gatsby-highlight pre[class='language-sh']::before{content:'sh';}.gatsby-highlight pre[class='language-bash']::before{content:'bash';}.gatsby-highlight pre[class='language-yaml']::before{content:'yaml';}.gatsby-highlight pre[class='language-markdown']::before{content:'md';}.gatsby-highlight pre[class='language-json']::before,.gatsby-highlight pre[class='language-json5']::before{content:'json';}.gatsby-highlight pre[class='language-diff']::before{content:'diff';}.gatsby-highlight pre[class='language-text']::before{content:'text';}.gatsby-highlight pre[class='language-flow']::before{content:'flow';}.token{display:inline;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",";}.token.punctuation{color:",";}.token.namespace,.token.deleted{color:",";}.token.function-name,.token.function,.token.class-name,.token.constant,.token.symbol{color:",";}.token.attr-name,.token.operator,.token.rule{color:",";}.token.keyword,.token.boolean,.token.number,.token.property{color:",";}.token.tag,.token.selector,.token.important,.token.atrule,.token.builtin,.token.entity,.token.url{color:",";}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable,.token.inserted{color:",";}.token.important,.token.bold{font-weight:600;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}"],prismColors.bg,prismColors.variable,prismColors.bg,prismColors.grey,prismColors.lineHighlight,prismColors.lineHighlight,prismColors.comment,prismColors.grey,prismColors.red,prismColors.yellow,prismColors.orange,prismColors.purple,prismColors.blue,prismColors.green);/* harmony default export */ var styles_PrismStyles = (PrismStyles);
;// CONCATENATED MODULE: ./src/styles/GlobalStyle.js
var GlobalStyle=(0,styled_components_browser_esm/* createGlobalStyle */.vJ)(["",";",";html{box-sizing:border-box;width:100%;}*,*:before,*:after{box-sizing:inherit;}::selection{background-color:var(--lightest-navy);color:var(--lightest-slate);}:focus{outline:2px dashed var(--green);outline-offset:3px;}html{scrollbar-width:thin;scrollbar-color:var(--dark-slate) var(--navy);}body::-webkit-scrollbar{width:12px;}body::-webkit-scrollbar-track{background:var(--navy);}body::-webkit-scrollbar-thumb{background-color:var(--dark-slate);border:3px solid var(--navy);border-radius:10px;}body{margin:0;width:100%;min-height:100%;overflow-x:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:var(--navy);color:var(--slate);font-family:var(--font-sans);font-size:var(--fz-xl);line-height:1.3;@media (max-width:480px){font-size:var(--fz-lg);}&.hidden{overflow:hidden;}&.blur{overflow:hidden;header{background-color:transparent;}#content > *{filter:blur(5px) brightness(0.7);transition:var(--transition);pointer-events:none;user-select:none;}}}#root{min-height:100vh;display:grid;grid-template-rows:1fr auto;grid-template-columns:100%;}main{margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding:200px 150px;@media (max-width:1080px){padding:200px 100px;}@media (max-width:768px){padding:150px 50px;}@media (max-width:480px){padding:125px 25px;}&.fillHeight{padding:0 150px;@media (max-width:1080px){padding:0 100px;}@media (max-width:768px){padding:0 50px;}@media (max-width:480px){padding:0 25px;}}}section{margin:0 auto;padding:100px 0;max-width:1000px;@media (max-width:768px){padding:80px 0;}@media (max-width:480px){padding:60px 0;}}h1,h2,h3,h4,h5,h6{margin:0 0 10px 0;font-weight:600;color:var(--lightest-slate);line-height:1.1;}.big-heading{margin:0;font-size:clamp(40px,8vw,80px);}.medium-heading{margin:0;font-size:clamp(40px,8vw,60px);}.small-heading{margin:0;font-size:clamp(40px,8vw,50px);}.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px,5vw,var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;margin-right:10px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-md),3vw,var(--fz-xl));font-weight:400;@media (max-width:480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:'';display:block;position:relative;top:-5px;width:300px;height:1px;margin-left:20px;background-color:var(--lightest-navy);@media (max-width:1080px){width:200px;}@media (max-width:768px){width:100%;}@media (max-width:600px){margin-left:10px;}}}img,svg,.gatsby-image-wrapper{width:100%;max-width:100%;vertical-align:middle;}img[alt=\"\"],img:not([alt]){filter:blur(5px);}svg{width:100%;height:100%;fill:currentColor;vertical-align:middle;&.feather{fill:none;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:focus{color:var(--green);}&.inline-link{",";}}button{cursor:pointer;border:0;border-radius:0;}input,textarea{border-radius:0;outline:0;&:focus{outline:0;}&:focus,&:active{&::placeholder{opacity:0.5;}}}p{margin:0 0 15px 0;font-size:var(--fz-s);&:last-child,&:last-of-type{margin:0;}& > a{",";}& > code{background-color:var(--light-navy);color:var(--white);font-size:var(--fz-sm);border-radius:var(--border-radius);padding:0.3em 0.5em;}}ul{&.fancy-list{padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'\u25B9';position:absolute;left:0;color:var(--green);}}}}blockquote{border-left-color:var(--green);border-left-style:solid;border-left-width:1px;margin-left:0px;margin-right:0px;padding-left:1.5rem;p{font-style:italic;font-size:24px;}}hr{background-color:var(--lightest-navy);height:1px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;margin:1rem;}code{font-family:var(--font-mono);font-size:var(--fz-md);}.skip-to-content{",";position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:focus,&:active{background-color:var(--green);color:var(--navy);top:0;left:0;width:auto;height:auto;overflow:auto;z-index:99;}}#logo{color:var(--green);}.overline{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;}.subtitle{color:var(--green);margin:0 0 20px 0;font-size:var(--fz-md);font-family:var(--font-mono);font-weight:400;line-height:1.5;@media (max-width:1080px){font-size:var(--fz-sm);}@media (max-width:768px){font-size:var(--fz-xs);}a{",";line-height:1.5;}}.breadcrumb{display:flex;align-items:center;margin-bottom:50px;color:var(--green);.arrow{display:block;margin-right:10px;padding-top:4px;}a{",";font-family:var(--font-mono);font-size:var(--fz-sm);font-weight:600;line-height:1.5;text-transform:uppercase;letter-spacing:0.1em;}}.gatsby-image-outer-wrapper{height:100%;}",";",";"],fonts,styles_variables,function(_ref){var theme=_ref.theme;return theme.mixins.inlineLink;},function(_ref2){var theme=_ref2.theme;return theme.mixins.inlineLink;},function(_ref3){var theme=_ref3.theme;return theme.mixins.button;},function(_ref4){var theme=_ref4.theme;return theme.mixins.inlineLink;},function(_ref5){var theme=_ref5.theme;return theme.mixins.inlineLink;},styles_TransitionStyles,styles_PrismStyles);/* harmony default export */ var styles_GlobalStyle = (GlobalStyle);
;// CONCATENATED MODULE: ./src/styles/index.js

;// CONCATENATED MODULE: ./src/components/layout.js
// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if(typeof window!=='undefined'){// eslint-disable-next-line global-require
__webpack_require__(1505)('a[href*="#"]');}var StyledContent=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"layout__StyledContent",componentId:"sc-ii2kc2-0"})(["display:flex;flex-direction:column;min-height:100vh;"]);var Layout=function Layout(_ref){var children=_ref.children,location=_ref.location;var isHome=location.pathname==='/';var _useState=(0,react.useState)(isHome),isLoading=_useState[0],setIsLoading=_useState[1];// Sets target="_blank" rel="noopener noreferrer" on external links
var handleExternalLinks=function handleExternalLinks(){var allLinks=Array.from(document.querySelectorAll('a'));if(allLinks.length>0){allLinks.forEach(function(link){if(link.host!==window.location.host){link.setAttribute('rel','noopener noreferrer');link.setAttribute('target','_blank');}});}};(0,react.useEffect)(function(){if(isLoading){return;}if(location.hash){var id=location.hash.substring(1);// location.hash without the '#'
setTimeout(function(){var el=document.getElementById(id);if(el){el.scrollIntoView();el.focus();}},0);}handleExternalLinks();},[isLoading]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(head,null),/*#__PURE__*/react.createElement("div",{id:"root"},/*#__PURE__*/react.createElement(styled_components_browser_esm/* ThemeProvider */.f6,{theme:styles_theme},/*#__PURE__*/react.createElement(styles_GlobalStyle,null),/*#__PURE__*/react.createElement("a",{className:"skip-to-content",href:"#content"},"Skip to Content"),isLoading&&isHome?/*#__PURE__*/react.createElement(loader,{finishLoading:function finishLoading(){return setIsLoading(false);}}):/*#__PURE__*/react.createElement(StyledContent,null,/*#__PURE__*/react.createElement(nav,{isHome:isHome}),/*#__PURE__*/react.createElement(social,{isHome:isHome}),/*#__PURE__*/react.createElement(email,{isHome:isHome}),/*#__PURE__*/react.createElement("div",{id:"content"},children,/*#__PURE__*/react.createElement(footer,null))))));};/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./node_modules/animejs/lib/anime.es.js
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function Sine() {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function Back() {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function Bounce() {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function Elastic(amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* harmony default export */ var anime_es = (anime);
// EXTERNAL MODULE: ./src/components/icons/index.js + 14 modules
var icons = __webpack_require__(5257);
;// CONCATENATED MODULE: ./src/components/loader.js
var StyledLoader=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"loader__StyledLoader",componentId:"sc-1d9c74g-0"})(["",";position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:var(--dark-navy);z-index:99;.logo-wrapper{width:max-content;max-width:100px;transition:var(--transition);opacity:",";svg{display:block;width:100%;height:100%;margin:0 auto;fill:none;user-select:none;#B{opacity:0;}}}"],function(_ref){var theme=_ref.theme;return theme.mixins.flexCenter;},function(props){return props.isMounted?1:0;});var Loader=function Loader(_ref2){var finishLoading=_ref2.finishLoading;var _useState=(0,react.useState)(false),isMounted=_useState[0],setIsMounted=_useState[1];var animate=function animate(){var loader=anime_es.timeline({complete:function complete(){return finishLoading();}});loader.add({targets:'#logo path',delay:300,duration:1500,easing:'easeInOutQuart',strokeDashoffset:[anime_es.setDashoffset,0]}).add({targets:'#logo #B',duration:700,easing:'easeInOutQuart',opacity:1}).add({targets:'#logo',delay:500,duration:300,easing:'easeInOutQuart',opacity:0,scale:0.1}).add({targets:'.loader',duration:200,easing:'easeInOutQuart',opacity:0,zIndex:-1});};(0,react.useEffect)(function(){var timeout=setTimeout(function(){return setIsMounted(true);},10);animate();return function(){return clearTimeout(timeout);};},[]);return/*#__PURE__*/react.createElement(StyledLoader,{className:"loader",isMounted:isMounted},/*#__PURE__*/react.createElement(Helmet/* Helmet */.q,{bodyAttributes:{class:"hidden"}}),/*#__PURE__*/react.createElement("div",{className:"logo-wrapper"},/*#__PURE__*/react.createElement(icons/* IconLoader */.pA,null)));};/* harmony default export */ var loader = (Loader);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 5 modules
var CSSTransition = __webpack_require__(6979);
// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__(537);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(4165);
// EXTERNAL MODULE: ./src/hooks/index.js + 3 modules
var hooks = __webpack_require__(3082);
;// CONCATENATED MODULE: ./src/components/nav.js
var StyledHeader=styled_components_browser_esm/* default.header.withConfig */.ZP.header.withConfig({displayName:"nav__StyledHeader",componentId:"sc-qpvvgq-0"})(["",";position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:rgba(10,25,47,0.85);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}@media (prefers-reduced-motion:no-preference){",";",";}"],function(_ref){var theme=_ref.theme;return theme.mixins.flexBetween;},function(props){return props.scrollDirection==='up'&&!props.scrolledToTop&&(0,styled_components_browser_esm/* css */.iv)(["height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(10,25,47,0.85);box-shadow:0 10px 30px -10px var(--navy-shadow);"]);},function(props){return props.scrollDirection==='down'&&!props.scrolledToTop&&(0,styled_components_browser_esm/* css */.iv)(["height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);"]);});var StyledNav=styled_components_browser_esm/* default.nav.withConfig */.ZP.nav.withConfig({displayName:"nav__StyledNav",componentId:"sc-qpvvgq-1"})(["",";position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{",";a{color:var(--green);width:42px;height:42px;&:hover,&:focus{svg{fill:var(--green-tint);}}svg{fill:none;transition:var(--transition);user-select:none;}}}"],function(_ref2){var theme=_ref2.theme;return theme.mixins.flexBetween;},function(_ref3){var theme=_ref3.theme;return theme.mixins.flexCenter;});var StyledLinks=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"nav__StyledLinks",componentId:"sc-qpvvgq-2"})(["display:flex;align-items:center;@media (max-width:768px){display:none;}ol{",";padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;font-size:var(--fz-xs);a{padding:10px;&:before{margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{",";margin-left:15px;font-size:var(--fz-xs);}"],function(_ref4){var theme=_ref4.theme;return theme.mixins.flexBetween;},function(_ref5){var theme=_ref5.theme;return theme.mixins.smallButton;});var Nav=function Nav(_ref6){var isHome=_ref6.isHome;var _useState=(0,react.useState)(!isHome),isMounted=_useState[0],setIsMounted=_useState[1];var scrollDirection=(0,hooks/* useScrollDirection */.C7)('down');var _useState2=(0,react.useState)(true),scrolledToTop=_useState2[0],setScrolledToTop=_useState2[1];var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();var handleScroll=function handleScroll(){setScrolledToTop(window.pageYOffset<50);};(0,react.useEffect)(function(){if(prefersReducedMotion){return;}var timeout=setTimeout(function(){setIsMounted(true);},100);window.addEventListener('scroll',handleScroll);return function(){clearTimeout(timeout);window.removeEventListener('scroll',handleScroll);};},[]);var timeout=isHome?utils/* loaderDelay */.Cs:0;var fadeClass=isHome?'fade':'';var fadeDownClass=isHome?'fadedown':'';var Logo=/*#__PURE__*/react.createElement("div",{className:"logo",tabIndex:"-1"},isHome?/*#__PURE__*/react.createElement("a",{href:"/","aria-label":"home"},/*#__PURE__*/react.createElement(icons/* IconLogo */.mp,null)):/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/","aria-label":"home"},/*#__PURE__*/react.createElement(icons/* IconLogo */.mp,null)));var ResumeLink=/*#__PURE__*/react.createElement("a",{className:"resume-button",href:"/RitvikSharma_Resume.pdf",target:"_blank",rel:"noopener noreferrer"},"Resume");return/*#__PURE__*/react.createElement(StyledHeader,{scrollDirection:scrollDirection,scrolledToTop:scrolledToTop},/*#__PURE__*/react.createElement(StyledNav,null,prefersReducedMotion?/*#__PURE__*/react.createElement(react.Fragment,null,Logo,/*#__PURE__*/react.createElement(StyledLinks,null,/*#__PURE__*/react.createElement("ol",null,config.navLinks&&config.navLinks.map(function(_ref7){var url=_ref7.url,name=_ref7.name;return/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:url},name));})),/*#__PURE__*/react.createElement("div",null,ResumeLink)),/*#__PURE__*/react.createElement(menu,null)):/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{classNames:fadeClass,timeout:timeout},/*#__PURE__*/react.createElement(react.Fragment,null,Logo))),/*#__PURE__*/react.createElement(StyledLinks,null,/*#__PURE__*/react.createElement("ol",null,/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&config.navLinks&&config.navLinks.map(function(_ref8,i){var url=_ref8.url,name=_ref8.name;return/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{classNames:fadeDownClass,timeout:timeout},/*#__PURE__*/react.createElement("li",{style:{transitionDelay:(isHome?i*100:0)+"ms"}},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:url},name)));}))),/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{classNames:fadeDownClass,timeout:timeout},/*#__PURE__*/react.createElement("div",{style:{transitionDelay:(isHome?config.navLinks.length*100:0)+"ms"}},ResumeLink)))),/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{classNames:fadeClass,timeout:timeout},/*#__PURE__*/react.createElement(menu,null))))));};/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(5785);
;// CONCATENATED MODULE: ./src/components/menu.js
var StyledMenu=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"menu__StyledMenu",componentId:"sc-ldryeq-0"})(["display:none;@media (max-width:768px){display:block;}"]);var StyledHamburgerButton=styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({displayName:"menu__StyledHamburgerButton",componentId:"sc-ldryeq-1"})(["display:none;@media (max-width:768px){",";position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:",";transform:rotate(",");transition-timing-function:cubic-bezier( "," );&:before,&:after{content:'';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:",";top:",";opacity:",";transition:",";}&:after{width:",";bottom:",";transform:rotate(",");transition:",";}}"],function(_ref){var theme=_ref.theme;return theme.mixins.flexCenter;},function(props){return props.menuOpen?"0.12s":"0s";},function(props){return props.menuOpen?"225deg":"0deg";},function(props){return props.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19";},function(props){return props.menuOpen?"100%":"120%";},function(props){return props.menuOpen?"0":"-10px";},function(props){return props.menuOpen?0:1;},function(_ref2){var menuOpen=_ref2.menuOpen;return menuOpen?'var(--ham-before-active)':'var(--ham-before)';},function(props){return props.menuOpen?"100%":"80%";},function(props){return props.menuOpen?"0":"-10px";},function(props){return props.menuOpen?"-90deg":"0";},function(_ref3){var menuOpen=_ref3.menuOpen;return menuOpen?'var(--ham-after-active)':'var(--ham-after)';});var StyledSidebar=styled_components_browser_esm/* default.aside.withConfig */.ZP.aside.withConfig({displayName:"menu__StyledSidebar",componentId:"sc-ldryeq-2"})(["display:none;@media (max-width:768px){",";position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(","vw);visibility:",";transition:var(--transition);}nav{",";width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:'0' counter(item) '.';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{",";width:100%;padding:3px 20px 20px;}}.resume-link{",";padding:18px 50px;margin:10% auto 0;width:max-content;}"],function(_ref4){var theme=_ref4.theme;return theme.mixins.flexCenter;},function(props){return props.menuOpen?0:100;},function(props){return props.menuOpen?'visible':'hidden';},function(_ref5){var theme=_ref5.theme;return theme.mixins.flexBetween;},function(_ref6){var theme=_ref6.theme;return theme.mixins.link;},function(_ref7){var theme=_ref7.theme;return theme.mixins.bigButton;});var Menu=function Menu(){var _useState=(0,react.useState)(false),menuOpen=_useState[0],setMenuOpen=_useState[1];var toggleMenu=function toggleMenu(){return setMenuOpen(!menuOpen);};var buttonRef=(0,react.useRef)(null);var navRef=(0,react.useRef)(null);var menuFocusables;var firstFocusableEl;var lastFocusableEl;var setFocusables=function setFocusables(){menuFocusables=[buttonRef.current].concat((0,toConsumableArray/* default */.Z)(Array.from(navRef.current.querySelectorAll('a'))));firstFocusableEl=menuFocusables[0];lastFocusableEl=menuFocusables[menuFocusables.length-1];};var handleBackwardTab=function handleBackwardTab(e){if(document.activeElement===firstFocusableEl){e.preventDefault();lastFocusableEl.focus();}};var handleForwardTab=function handleForwardTab(e){if(document.activeElement===lastFocusableEl){e.preventDefault();firstFocusableEl.focus();}};var onKeyDown=function onKeyDown(e){switch(e.key){case utils/* KEY_CODES.ESCAPE */.nx.ESCAPE:case utils/* KEY_CODES.ESCAPE_IE11 */.nx.ESCAPE_IE11:{setMenuOpen(false);break;}case utils/* KEY_CODES.TAB */.nx.TAB:{if(menuFocusables&&menuFocusables.length===1){e.preventDefault();break;}if(e.shiftKey){handleBackwardTab(e);}else{handleForwardTab(e);}break;}default:{break;}}};var onResize=function onResize(e){if(e.currentTarget.innerWidth>768){setMenuOpen(false);}};(0,react.useEffect)(function(){document.addEventListener('keydown',onKeyDown);window.addEventListener('resize',onResize);setFocusables();return function(){document.removeEventListener('keydown',onKeyDown);window.removeEventListener('resize',onResize);};},[]);var wrapperRef=(0,react.useRef)();(0,hooks/* useOnClickOutside */.t$)(wrapperRef,function(){return setMenuOpen(false);});return/*#__PURE__*/react.createElement(StyledMenu,null,/*#__PURE__*/react.createElement(Helmet/* Helmet */.q,null,/*#__PURE__*/react.createElement("body",{className:menuOpen?'blur':''})),/*#__PURE__*/react.createElement("div",{ref:wrapperRef},/*#__PURE__*/react.createElement(StyledHamburgerButton,{onClick:toggleMenu,menuOpen:menuOpen,ref:buttonRef,"aria-label":"Menu"},/*#__PURE__*/react.createElement("div",{className:"ham-box"},/*#__PURE__*/react.createElement("div",{className:"ham-box-inner"}))),/*#__PURE__*/react.createElement(StyledSidebar,{menuOpen:menuOpen,"aria-hidden":!menuOpen,tabIndex:menuOpen?1:-1},/*#__PURE__*/react.createElement("nav",{ref:navRef},config.navLinks&&/*#__PURE__*/react.createElement("ol",null,config.navLinks.map(function(_ref8){var url=_ref8.url,name=_ref8.name;return/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:url,onClick:function onClick(){return setMenuOpen(false);}},name));})),/*#__PURE__*/react.createElement("a",{href:"/RitvikSharma_Resume.pdf",className:"resume-link"},"Resume")))));};/* harmony default export */ var menu = (Menu);
;// CONCATENATED MODULE: ./src/components/side.js
var StyledSideElement=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"side__StyledSideElement",componentId:"sc-489q4a-0"})(["width:40px;position:fixed;bottom:0;left:",";right:",";z-index:10;color:var(--light-slate);@media (max-width:1080px){left:",";right:",";}@media (max-width:768px){display:none;}"],function(props){return props.orientation==='left'?'40px':'auto';},function(props){return props.orientation==='left'?'auto':'40px';},function(props){return props.orientation==='left'?'20px':'auto';},function(props){return props.orientation==='left'?'auto':'20px';});var Side=function Side(_ref){var children=_ref.children,isHome=_ref.isHome,orientation=_ref.orientation;var _useState=(0,react.useState)(!isHome),isMounted=_useState[0],setIsMounted=_useState[1];var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(!isHome||prefersReducedMotion){return;}var timeout=setTimeout(function(){return setIsMounted(true);},utils/* loaderDelay */.Cs);return function(){return clearTimeout(timeout);};},[]);return/*#__PURE__*/react.createElement(StyledSideElement,{orientation:orientation},prefersReducedMotion?/*#__PURE__*/react.createElement(react.Fragment,null,children):/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{classNames:isHome?'fade':'',timeout:isHome?utils/* loaderDelay */.Cs:0},children)));};/* harmony default export */ var side = (Side);
;// CONCATENATED MODULE: ./src/components/social.js
var StyledSocialList=styled_components_browser_esm/* default.ul.withConfig */.ZP.ul.withConfig({displayName:"social__StyledSocialList",componentId:"sc-oanxih-0"})(["display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{&:last-of-type{margin-bottom:20px;}a{padding:10px;&:hover,&:focus{transform:translateY(-3px);}svg{width:20px;height:20px;}}}"]);var Social=function Social(_ref){var isHome=_ref.isHome;return/*#__PURE__*/react.createElement(side,{isHome:isHome,orientation:"left"},/*#__PURE__*/react.createElement(StyledSocialList,null,config.socialMedia&&config.socialMedia.map(function(_ref2,i){var url=_ref2.url,name=_ref2.name;return/*#__PURE__*/react.createElement("li",{key:i},/*#__PURE__*/react.createElement("a",{href:url,"aria-label":name,target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:name})));})));};/* harmony default export */ var social = (Social);
;// CONCATENATED MODULE: ./src/components/email.js
var StyledLinkWrapper=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"email__StyledLinkWrapper",componentId:"sc-8wfbjn-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:var(--fz-lg);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}"]);var Email=function Email(_ref){var isHome=_ref.isHome;return/*#__PURE__*/react.createElement(side,{isHome:isHome,orientation:"right"},/*#__PURE__*/react.createElement(StyledLinkWrapper,null,/*#__PURE__*/react.createElement("a",{href:"mailto:"+config.email},config.email)));};/* harmony default export */ var email = (Email);
;// CONCATENATED MODULE: ./src/components/footer.js
var StyledFooter=styled_components_browser_esm/* default.footer.withConfig */.ZP.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-r54yyk-0"})(["",";flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;"],function(_ref){var theme=_ref.theme;return theme.mixins.flexCenter;});var StyledSocialLinks=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"footer__StyledSocialLinks",componentId:"sc-r54yyk-1"})(["display:none;@media (max-width:768px){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:var(--light-slate);}ul{",";padding:0;margin:0;list-style:none;a{padding:10px;svg{width:20px;height:20px;}}}"],function(_ref2){var theme=_ref2.theme;return theme.mixins.flexBetween;});var StyledCredit=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"footer__StyledCredit",componentId:"sc-r54yyk-2"})(["color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;a{padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;margin-right:5px;width:14px;height:14px;}}"]);var Footer=function Footer(){var _useState=(0,react.useState)({stars:null,forks:null}),githubInfo=_useState[0],setGitHubInfo=_useState[1];(0,react.useEffect)(function(){if(false){}fetch('https://github.com/ritviksharma4').then(function(response){return response.json();}).then(function(json){var stargazers_count=json.stargazers_count,forks_count=json.forks_count;setGitHubInfo({stars:stargazers_count,forks:forks_count});}).catch(function(e){return console.error(e);});},[]);return/*#__PURE__*/react.createElement(StyledFooter,null,/*#__PURE__*/react.createElement(StyledSocialLinks,null,/*#__PURE__*/react.createElement("ul",null,config.socialMedia&&config.socialMedia.map(function(_ref3,i){var name=_ref3.name,url=_ref3.url;return/*#__PURE__*/react.createElement("li",{key:i},/*#__PURE__*/react.createElement("a",{href:url,"aria-label":name},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:name})));}))),/*#__PURE__*/react.createElement(StyledCredit,{tabindex:"-1"},/*#__PURE__*/react.createElement("a",{href:"https://github.com/ritviksharma4/Professional_Website"},/*#__PURE__*/react.createElement("div",null,"This Website's Source Code is Available here!"))));};/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-e4dbd65c.js
var index_browser_e4dbd65c = __webpack_require__(7798);
// EXTERNAL MODULE: ./src/utils/sr.js + 6 modules
var sr = __webpack_require__(355);
;// CONCATENATED MODULE: ./src/components/sections/hero.js
var StyledHeroSection=styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({displayName:"hero__StyledHeroSection",componentId:"sc-egif8p-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;padding:0;@media (max-width:480px) and (min-height:700px){padding-bottom:10vh;}h1{margin:0px 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:10px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;font-size:var(--fz-s);max-width:540px;}.email-link{",";margin-top:50px;}.inner{display:grid;grid-template-columns:3fr 2fr;grid-gap:50px;@media (max-width:768px){display:block;}}"],function(_ref){var theme=_ref.theme;return theme.mixins.flexCenter;},function(_ref2){var theme=_ref2.theme;return theme.mixins.bigButton;});var StyledPic=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"hero__StyledPic",componentId:"sc-egif8p-1"})(["position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{",";display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{background:transparent;outline:0;&:after{top:15px;left:15px;}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:20px;left:20px;z-index:-1;}}"],function(_ref3){var theme=_ref3.theme;return theme.mixins.boxShadow;});var Hero=function Hero(){var _useState=(0,react.useState)(false),isMounted=_useState[0],setIsMounted=_useState[1];var revealContainer=(0,react.useRef)(null);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealContainer.current,(0,config.srConfig)());var timeout=setTimeout(function(){return setIsMounted(true);},utils/* navDelay */.fb);return function(){return clearTimeout(timeout);};},[]);var one=/*#__PURE__*/react.createElement("h1",null,"Hi, my name is");var two=/*#__PURE__*/react.createElement("h2",{className:"big-heading"},"Ritvik Sharma.");var three=/*#__PURE__*/react.createElement("h3",{className:"small-heading"},"I build stuff for fun :D");var four=/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("p",null,"I\u2019m aspiring to become a Data Scientist who will be a growling engine behind the changes in the world."),/*#__PURE__*/react.createElement("p",null,"I love to fiddle with technology which I have never heard of before and build things that are intriguing."));var five=/*#__PURE__*/react.createElement(StyledPic,null,/*#__PURE__*/react.createElement("div",{className:"wrapper"},/*#__PURE__*/react.createElement(index_browser_e4dbd65c.S,{className:"img",src:"../../images/WebPic.png",width:500,quality:100,formats:['AUTO','WEBP','AVIF'],alt:"Headshot",__imageData:__webpack_require__(167)})));var items=[one,two,three,four];var home_image=[five];return/*#__PURE__*/react.createElement(StyledHeroSection,{ref:revealContainer},/*#__PURE__*/react.createElement("div",{className:"inner"},/*#__PURE__*/react.createElement("div",null,prefersReducedMotion?/*#__PURE__*/react.createElement(react.Fragment,null,items.map(function(item,i){return/*#__PURE__*/react.createElement("div",{key:i},item);})):/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&items.map(function(item,i){return/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{key:i,classNames:"fadeup",timeout:utils/* loaderDelay */.Cs},/*#__PURE__*/react.createElement("div",{style:{transitionDelay:i+1+"00ms"}},item));}))),/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},isMounted&&home_image.map(function(image,i){if(i===void 0){i=4;}return/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{key:i,classNames:"fadeup",timeout:utils/* loaderDelay */.Cs},/*#__PURE__*/react.createElement("div",{style:{transitionDelay:i+1+"00ms"}},image));}))));};/* harmony default export */ var hero = (Hero);
;// CONCATENATED MODULE: ./src/components/sections/about.js
var StyledAboutSection=styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({displayName:"about__StyledAboutSection",componentId:"sc-1x4zn3y-0"})(["max-width:900px;.inner{display:grid;grid-template-columns:3fr 2fr;@media (max-width:768px){display:block;}}"]);var StyledText=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"about__StyledText",componentId:"sc-1x4zn3y-1"})(["ul.skills-list{display:grid;grid-template-columns:repeat(2,minmax(140px,200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:15px;&:before{content:'\u25B9';position:absolute;left:0;color:var(--green);font-size:17px;line-height:16px;}}}"]);var about_StyledPic=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"about__StyledPic",componentId:"sc-1x4zn3y-2"})(["position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{",";display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{background:transparent;outline:0;&:after{top:15px;left:15px;}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:20px;left:20px;z-index:-1;}}"],function(_ref){var theme=_ref.theme;return theme.mixins.boxShadow;});var About=function About(){var revealContainer=(0,react.useRef)(null);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealContainer.current,(0,config.srConfig)());},[]);var skills=['AWS Route 53, AWS CloudFront','AWS ECS, AWS EC2','AWS ApiGateway, AWS Lambda','AWS StepFunctions','Python','NodeJS + ExpressJS','C/C++','AWS DynamoDB','gRPC','Flutter','AI-ML','NLP + BERT + CRF'];return/*#__PURE__*/react.createElement(StyledAboutSection,{id:"about",ref:revealContainer},/*#__PURE__*/react.createElement("h2",{className:"numbered-heading"},"About Me"),/*#__PURE__*/react.createElement("div",{className:"inner"},/*#__PURE__*/react.createElement(StyledText,null,/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("p",null,"I am a ",/*#__PURE__*/react.createElement("b",null,"University Rank #2")," holder from SRM University with B.Tech in CSC-AIML and an aspiring Data Scientist with great passion for my work."),/*#__PURE__*/react.createElement("p",null,"On my Website, you will find the list of projects that I have done."),/*#__PURE__*/react.createElement("p",null,"Here are a few technologies I\u2019ve been working with recently:")),/*#__PURE__*/react.createElement("ul",{className:"skills-list"},skills&&skills.map(function(skill,i){return/*#__PURE__*/react.createElement("li",{key:i},skill);}))),/*#__PURE__*/react.createElement(about_StyledPic,null,/*#__PURE__*/react.createElement("div",{className:"wrapper"},/*#__PURE__*/react.createElement(index_browser_e4dbd65c.S,{className:"img",src:"../../images/Mountain_Climb_2.png",width:400,quality:100,formats:['AUTO','WEBP','AVIF'],alt:"Headshot",__imageData:__webpack_require__(2672)})))));};/* harmony default export */ var about = (About);
;// CONCATENATED MODULE: ./src/components/sections/jobs.js
var StyledJobsSection=styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({displayName:"jobs__StyledJobsSection",componentId:"sc-wgh3ek-0"})(["max-width:700px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}"]);var StyledTabList=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"jobs__StyledTabList",componentId:"sc-wgh3ek-1"})(["position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}"]);var StyledTabButton=styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({displayName:"jobs__StyledTabButton",componentId:"sc-wgh3ek-2"})(["",";display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:",";font-family:var(--font-mono);font-size:15px;text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){",";min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}"],function(_ref){var theme=_ref.theme;return theme.mixins.link;},function(_ref2){var isActive=_ref2.isActive;return isActive?'var(--green)':'var(--slate)';},function(_ref3){var theme=_ref3.theme;return theme.mixins.flexCenter;});var StyledHighlight=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"jobs__StyledHighlight",componentId:"sc-wgh3ek-3"})(["position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc("," * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc("," * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}"],function(_ref4){var activeTabId=_ref4.activeTabId;return activeTabId;},function(_ref5){var activeTabId=_ref5.activeTabId;return activeTabId;});var StyledTabPanels=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"jobs__StyledTabPanels",componentId:"sc-wgh3ek-4"})(["position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}"]);var StyledTabPanel=styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({displayName:"jobs__StyledTabPanel",componentId:"sc-wgh3ek-5"})(["width:100%;height:auto;padding:10px 5px;ul{",";}h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.company{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}"],function(_ref6){var theme=_ref6.theme;return theme.mixins.fancyList;});var Jobs=function Jobs(){var data=(0,gatsby_browser_entry.useStaticQuery)("604461682");var jobsData=data.jobs.edges;var _useState=(0,react.useState)(0),activeTabId=_useState[0],setActiveTabId=_useState[1];var _useState2=(0,react.useState)(null),tabFocus=_useState2[0],setTabFocus=_useState2[1];var tabs=(0,react.useRef)([]);var revealContainer=(0,react.useRef)(null);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealContainer.current,(0,config.srConfig)());},[]);var focusTab=function focusTab(){if(tabs.current[tabFocus]){tabs.current[tabFocus].focus();return;}// If we're at the end, go to the start
if(tabFocus>=tabs.current.length){setTabFocus(0);}// If we're at the start, move to the end
if(tabFocus<0){setTabFocus(tabs.current.length-1);}};// Only re-run the effect if tabFocus changes
(0,react.useEffect)(function(){return focusTab();},[tabFocus]);// Focus on tabs when using up & down arrow keys
var _onKeyDown=function onKeyDown(e){switch(e.key){case utils/* KEY_CODES.ARROW_UP */.nx.ARROW_UP:{e.preventDefault();setTabFocus(tabFocus-1);break;}case utils/* KEY_CODES.ARROW_DOWN */.nx.ARROW_DOWN:{e.preventDefault();setTabFocus(tabFocus+1);break;}default:{break;}}};return/*#__PURE__*/react.createElement(StyledJobsSection,{id:"jobs",ref:revealContainer},/*#__PURE__*/react.createElement("h2",{className:"numbered-heading"},"Where I\u2019ve Worked"),/*#__PURE__*/react.createElement("div",{className:"inner"},/*#__PURE__*/react.createElement(StyledTabList,{role:"tablist","aria-label":"Job tabs",onKeyDown:function onKeyDown(e){return _onKeyDown(e);}},jobsData&&jobsData.map(function(_ref7,i){var node=_ref7.node;var company=node.frontmatter.company;return/*#__PURE__*/react.createElement(StyledTabButton,{key:i,isActive:activeTabId===i,onClick:function onClick(){return setActiveTabId(i);},ref:function ref(el){return tabs.current[i]=el;},id:"tab-"+i,role:"tab",tabIndex:activeTabId===i?'0':'-1',"aria-selected":activeTabId===i?true:false,"aria-controls":"panel-"+i},/*#__PURE__*/react.createElement("span",null,company));}),/*#__PURE__*/react.createElement(StyledHighlight,{activeTabId:activeTabId})),/*#__PURE__*/react.createElement(StyledTabPanels,null,jobsData&&jobsData.map(function(_ref8,i){var node=_ref8.node;var frontmatter=node.frontmatter,html=node.html;var title=frontmatter.title,url=frontmatter.url,company=frontmatter.company,range=frontmatter.range;return/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{key:i,in:activeTabId===i,timeout:250,classNames:"fade"},/*#__PURE__*/react.createElement(StyledTabPanel,{id:"panel-"+i,role:"tabpanel",tabIndex:activeTabId===i?'0':'-1',"aria-labelledby":"tab-"+i,"aria-hidden":activeTabId!==i,hidden:activeTabId!==i},/*#__PURE__*/react.createElement("h3",null,/*#__PURE__*/react.createElement("span",null,title),/*#__PURE__*/react.createElement("span",{className:"company"},"\xA0@\xA0",/*#__PURE__*/react.createElement("a",{href:url,className:"inline-link"},company))),/*#__PURE__*/react.createElement("p",{className:"range"},range),/*#__PURE__*/react.createElement("div",{dangerouslySetInnerHTML:{__html:html}})));}))));};/* harmony default export */ var jobs = (Jobs);
;// CONCATENATED MODULE: ./src/components/sections/featured.js
var StyledProjectsGrid=styled_components_browser_esm/* default.ul.withConfig */.ZP.ul.withConfig({displayName:"featured__StyledProjectsGrid",componentId:"sc-130z3g1-0"})(["",";a{position:relative;z-index:1;}"],function(_ref){var theme=_ref.theme;return theme.mixins.resetList;});var StyledProject=styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({displayName:"featured__StyledProject",componentId:"sc-130z3g1-1"})(["position:relative;display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;@media (max-width:768px){",";}&:not(:last-of-type){margin-bottom:100px;@media (max-width:768px){margin-bottom:70px;}@media (max-width:480px){margin-bottom:30px;}}&:nth-of-type(odd){.project-content{grid-column:7 / -1;text-align:right;@media (max-width:1080px){grid-column:5 / -1;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;text-align:left;}@media (max-width:480px){padding:25px 25px 20px;}}.project-tech-list{justify-content:flex-end;@media (max-width:768px){justify-content:flex-start;}li{margin:0 0 5px 20px;@media (max-width:768px){margin:0 10px 5px 0;}}}.project-links{justify-content:flex-end;margin-left:0;margin-right:-10px;@media (max-width:768px){justify-content:flex-start;margin-left:-10px;margin-right:0;}}.project-image{grid-column:1 / 8;@media (max-width:768px){grid-column:1 / -1;}}}.project-content{position:relative;grid-column:1 / 7;grid-row:1 / -1;@media (max-width:1080px){grid-column:1 / 9;}@media (max-width:768px){display:flex;flex-direction:column;justify-content:center;height:100%;grid-column:1 / -1;padding:40px 40px 30px;z-index:5;}@media (max-width:480px){padding:30px 25px 20px;}}.project-overline{margin:10px 0;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xs);font-weight:400;}.project-title{color:var(--lightest-slate);font-size:clamp(24px,5vw,28px);@media (min-width:768px){margin:0 0 20px;}@media (max-width:768px){color:var(--white);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}}.project-description{",";position:relative;z-index:2;padding:25px;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--light-slate);font-size:var(--fz-lg);@media (max-width:768px){padding:20px 0;background-color:transparent;box-shadow:none;&:hover{box-shadow:none;}}a{",";}strong{color:var(--white);font-weight:normal;}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width:768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--lightest-slate);}}}.project-links{display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:var(--lightest-slate);a{",";padding:10px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}.project-image{",";grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;@media (max-width:768px){grid-column:1 / -1;height:100%;opacity:0.25;}a{width:100%;height:100%;background-color:var(--green);border-radius:var(--border-radius);vertical-align:middle;&:hover,&:focus{background:transparent;outline:0;&:before,.img{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:var(--transition);background-color:var(--navy);mix-blend-mode:screen;}}.img{border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);@media (max-width:768px){object-fit:cover;width:auto;height:100%;filter:grayscale(100%) contrast(1) brightness(50%);}}}"],function(_ref2){var theme=_ref2.theme;return theme.mixins.boxShadow;},function(_ref3){var theme=_ref3.theme;return theme.mixins.boxShadow;},function(_ref4){var theme=_ref4.theme;return theme.mixins.inlineLink;},function(_ref5){var theme=_ref5.theme;return theme.mixins.flexCenter;},function(_ref6){var theme=_ref6.theme;return theme.mixins.boxShadow;});var Featured=function Featured(){var data=(0,gatsby_browser_entry.useStaticQuery)("3692480107");var featuredProjects=data.featured.edges.filter(function(_ref7){var node=_ref7.node;return node;});var revealTitle=(0,react.useRef)(null);var revealProjects=(0,react.useRef)([]);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealTitle.current,(0,config.srConfig)());revealProjects.current.forEach(function(ref,i){return sr/* default.reveal */.Z.reveal(ref,(0,config.srConfig)(i*100));});},[]);return/*#__PURE__*/react.createElement("section",{id:"projects"},/*#__PURE__*/react.createElement("h2",{className:"numbered-heading",ref:revealTitle},"Some Things I\u2019ve Built"),/*#__PURE__*/react.createElement(StyledProjectsGrid,null,featuredProjects&&featuredProjects.map(function(_ref8,i){var node=_ref8.node;var frontmatter=node.frontmatter,html=node.html;var subdomain=frontmatter.subdomain,external=frontmatter.external,title=frontmatter.title,tech=frontmatter.tech,github=frontmatter.github,cover=frontmatter.cover;var image=(0,index_browser_e4dbd65c.g)(cover);return/*#__PURE__*/react.createElement(StyledProject,{key:i,ref:function ref(el){return revealProjects.current[i]=el;}},/*#__PURE__*/react.createElement("div",{className:"project-content"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("p",{className:"project-overline"},"Featured Project"),/*#__PURE__*/react.createElement("h3",{className:"project-title"},/*#__PURE__*/react.createElement("a",{href:subdomain},title)),/*#__PURE__*/react.createElement("div",{className:"project-description",dangerouslySetInnerHTML:{__html:html}}),tech.length&&/*#__PURE__*/react.createElement("ul",{className:"project-tech-list"},tech.map(function(tech,i){return/*#__PURE__*/react.createElement("li",{key:i},tech);})),/*#__PURE__*/react.createElement("div",{className:"project-links"},github&&/*#__PURE__*/react.createElement("a",{href:github,"aria-label":"GitHub Link"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:"GitHub"})),external&&/*#__PURE__*/react.createElement("a",{href:external,"aria-label":"External Link",className:"external"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:"External Link"}))))),/*#__PURE__*/react.createElement("div",{className:"project-image"},/*#__PURE__*/react.createElement("a",{href:subdomain?subdomain:external?external:'#'},/*#__PURE__*/react.createElement(index_browser_e4dbd65c.G,{image:image,alt:title,className:"img"}))));})));};/* harmony default export */ var featured = (Featured);
;// CONCATENATED MODULE: ./src/components/sections/projects.js
var StyledProjectsSection=styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({displayName:"projects__StyledProjectsSection",componentId:"sc-3btfd3-0"})(["display:flex;flex-direction:column;align-items:center;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);&:after{bottom:0.1em;}}.projects-grid{",";display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:50px;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{",";margin:80px auto 0;}"],function(_ref){var theme=_ref.theme;return theme.mixins.resetList;},function(_ref2){var theme=_ref2.theme;return theme.mixins.button;});var projects_StyledProject=styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({displayName:"projects__StyledProject",componentId:"sc-3btfd3-1"})(["position:relative;cursor:default;transition:var(--transition);@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.project-inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.project-inner{",";",";flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);}.project-top{",";margin-bottom:35px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{display:flex;align-items:center;margin-right:-10px;color:var(--light-slate);a{",";padding:5px 7px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.project-description{color:var(--light-slate);font-size:17px;a{",";}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}"],function(_ref3){var theme=_ref3.theme;return theme.mixins.boxShadow;},function(_ref4){var theme=_ref4.theme;return theme.mixins.flexBetween;},function(_ref5){var theme=_ref5.theme;return theme.mixins.flexBetween;},function(_ref6){var theme=_ref6.theme;return theme.mixins.flexCenter;},function(_ref7){var theme=_ref7.theme;return theme.mixins.inlineLink;});var Projects=function Projects(){var data=(0,gatsby_browser_entry.useStaticQuery)("4156805578");var _useState=(0,react.useState)(false),showMore=_useState[0],setShowMore=_useState[1];var revealTitle=(0,react.useRef)(null);var revealArchiveLink=(0,react.useRef)(null);var revealProjects=(0,react.useRef)([]);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealTitle.current,(0,config.srConfig)());sr/* default.reveal */.Z.reveal(revealArchiveLink.current,(0,config.srConfig)());revealProjects.current.forEach(function(ref,i){return sr/* default.reveal */.Z.reveal(ref,(0,config.srConfig)(i*100));});},[]);var GRID_LIMIT=6;var projects=data.projects.edges.filter(function(_ref8){var node=_ref8.node;return node;});var firstSix=projects.slice(0,GRID_LIMIT);var projectsToShow=showMore?projects:firstSix;var projectInner=function projectInner(node){var frontmatter=node.frontmatter,html=node.html;var github=frontmatter.github,external=frontmatter.external,title=frontmatter.title,tech=frontmatter.tech,subdomain=frontmatter.subdomain;return/*#__PURE__*/react.createElement("div",{className:"project-inner"},/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("div",{className:"project-top"},/*#__PURE__*/react.createElement("div",{className:"folder"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:"Folder"})),/*#__PURE__*/react.createElement("div",{className:"project-links"},github&&/*#__PURE__*/react.createElement("a",{href:github,"aria-label":"GitHub Link",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:"GitHub"})),external&&/*#__PURE__*/react.createElement("a",{href:external,"aria-label":"External Link",className:"external",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement(icons/* Icon */.JO,{name:"External"})))),/*#__PURE__*/react.createElement("h3",{className:"project-title"},/*#__PURE__*/react.createElement("a",{href:subdomain,target:"_blank",rel:"noreferrer"},title)),/*#__PURE__*/react.createElement("div",{className:"project-description",dangerouslySetInnerHTML:{__html:html}})),/*#__PURE__*/react.createElement("footer",null,tech&&/*#__PURE__*/react.createElement("ul",{className:"project-tech-list"},tech.map(function(tech,i){return/*#__PURE__*/react.createElement("li",{key:i},tech);}))));};return/*#__PURE__*/react.createElement(StyledProjectsSection,null,/*#__PURE__*/react.createElement("h2",{ref:revealTitle},"Publications & Other Projects"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{className:"inline-link archive-link",to:"/archive",ref:revealArchiveLink},"View My Archive"),/*#__PURE__*/react.createElement("ul",{className:"projects-grid"},prefersReducedMotion?/*#__PURE__*/react.createElement(react.Fragment,null,projectsToShow&&projectsToShow.map(function(_ref9,i){var node=_ref9.node;return/*#__PURE__*/react.createElement(projects_StyledProject,{key:i},projectInner(node));})):/*#__PURE__*/react.createElement(TransitionGroup/* default */.Z,{component:null},projectsToShow&&projectsToShow.map(function(_ref10,i){var node=_ref10.node;return/*#__PURE__*/react.createElement(CSSTransition/* default */.Z,{key:i,classNames:"fadeup",timeout:i>=GRID_LIMIT?(i-GRID_LIMIT)*300:300,exit:false},/*#__PURE__*/react.createElement(projects_StyledProject,{key:i,ref:function ref(el){return revealProjects.current[i]=el;},style:{transitionDelay:(i>=GRID_LIMIT?(i-GRID_LIMIT)*100:0)+"ms"}},projectInner(node)));}))),/*#__PURE__*/react.createElement("button",{className:"more-button",onClick:function onClick(){return setShowMore(!showMore);}},"Show ",showMore?'Less':'More'));};/* harmony default export */ var projects = (Projects);
;// CONCATENATED MODULE: ./src/components/sections/contact.js
var StyledContactSection=styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({displayName:"contact__StyledContactSection",componentId:"sc-jh0gpd-0"})(["max-width:600px;margin:0 auto 100px;text-align:center;@media (max-width:768px){margin:0 auto 50px;}.overline{display:block;margin-bottom:20px;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;&:before{bottom:0;font-size:var(--fz-sm);}&:after{display:none;}}.title{font-size:clamp(40px,5vw,60px);}.email-link{",";margin-top:50px;}"],function(_ref){var theme=_ref.theme;return theme.mixins.bigButton;});var Contact=function Contact(){var revealContainer=(0,react.useRef)(null);var prefersReducedMotion=(0,hooks/* usePrefersReducedMotion */.Tb)();(0,react.useEffect)(function(){if(prefersReducedMotion){return;}sr/* default.reveal */.Z.reveal(revealContainer.current,(0,config.srConfig)());},[]);return/*#__PURE__*/react.createElement(StyledContactSection,{id:"contact",ref:revealContainer},/*#__PURE__*/react.createElement("h2",{className:"numbered-heading overline"},"What\u2019s Next?"),/*#__PURE__*/react.createElement("h2",{className:"title"},"Get In Touch"),/*#__PURE__*/react.createElement("p",null,"Since I began my professional journey I\u2019ve been lucky to have had the opportunity to collaborate on some exciting solo and collaborative projects. I take pride in all that I do and in the long-term relationships I\u2019ve fostered in the process."),/*#__PURE__*/react.createElement("p",null,"Explore my portfolio, and feel free to get in touch with any questions."));};/* harmony default export */ var contact = (Contact);
;// CONCATENATED MODULE: ./src/components/index.js


/***/ }),

/***/ 537:
/***/ (function(module) {

module.exports={email:'ritviksharma4@gmail.com',socialMedia:[{name:'GitHub',url:'https://github.com/ritviksharma4'},{name:'Instagram',url:'https://www.instagram.com/theritviksharma'},{name:'Twitter',url:'https://twitter.com/theritviksharma'},{name:'Linkedin',url:'https://www.linkedin.com/in/ritviksharma4/'}],navLinks:[{name:'About Me',url:'/#about'},{name:'Experience',url:'/#jobs'},{name:'Projects',url:'/#projects'},{name:'Contact',url:'/#contact'}],colors:{green:'#64ffda',navy:'#0a192f',darkNavy:'#020c1b'},srConfig:function srConfig(delay,viewFactor){if(delay===void 0){delay=200;}if(viewFactor===void 0){viewFactor=0.25;}return{origin:'bottom',distance:'20px',duration:500,delay:delay,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:'cubic-bezier(0.645, 0.045, 0.355, 1)',mobile:true,reset:false,useDelay:'always',viewFactor:viewFactor,viewOffset:{top:0,right:0,bottom:0,left:0}};}};

/***/ }),

/***/ 3082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t$": function() { return /* reexport */ hooks_useOnClickOutside; },
  "Tb": function() { return /* reexport */ hooks_usePrefersReducedMotion; },
  "C7": function() { return /* reexport */ hooks_useScrollDirection; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/hooks/useOnClickOutside.js
// https://usehooks.com/useOnClickOutside/
var useOnClickOutside=function useOnClickOutside(ref,handler){(0,react.useEffect)(function(){var listener=function listener(event){// Do nothing if clicking ref's element or descendent elements
if(!ref.current||ref.current.contains(event.target)){return;}handler(event);};document.addEventListener('mousedown',listener);document.addEventListener('touchstart',listener);return function(){document.removeEventListener('mousedown',listener);document.removeEventListener('touchstart',listener);};},// Add ref and handler to effect dependencies
// It's worth noting that because passed in handler is a new ...
// ... function on every render that will cause this effect ...
// ... callback/cleanup to run every render. It's not a big deal ...
// ... but to optimize you can wrap handler in useCallback before ...
// ... passing it into this hook.
[ref,handler]);};/* harmony default export */ var hooks_useOnClickOutside = (useOnClickOutside);
;// CONCATENATED MODULE: ./src/hooks/usePrefersReducedMotion.js
/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */var QUERY='(prefers-reduced-motion: no-preference)';var isRenderingOnServer=typeof window==='undefined';var getInitialState=function getInitialState(){return(// For our initial server render, we won't know if the user
// prefers reduced motion, but it doesn't matter. This value
// will be overwritten on the client, before any animations
// occur.
isRenderingOnServer?true:!window.matchMedia(QUERY).matches);};function usePrefersReducedMotion(){var _useState=(0,react.useState)(getInitialState),prefersReducedMotion=_useState[0],setPrefersReducedMotion=_useState[1];(0,react.useEffect)(function(){var mediaQueryList=window.matchMedia(QUERY);var listener=function listener(event){setPrefersReducedMotion(!event.matches);};mediaQueryList.addListener(listener);return function(){mediaQueryList.removeListener(listener);};},[]);return prefersReducedMotion;}/* harmony default export */ var hooks_usePrefersReducedMotion = (usePrefersReducedMotion);
;// CONCATENATED MODULE: ./src/hooks/useScrollDirection.js
var SCROLL_UP='up';var SCROLL_DOWN='down';var useScrollDirection=function useScrollDirection(_temp){var _ref=_temp===void 0?{}:_temp,initialDirection=_ref.initialDirection,thresholdPixels=_ref.thresholdPixels,off=_ref.off;var _useState=(0,react.useState)(initialDirection),scrollDir=_useState[0],setScrollDir=_useState[1];(0,react.useEffect)(function(){var threshold=thresholdPixels||0;var lastScrollY=window.pageYOffset;var ticking=false;var updateScrollDir=function updateScrollDir(){var scrollY=window.pageYOffset;if(Math.abs(scrollY-lastScrollY)<threshold){// We haven't exceeded the threshold
ticking=false;return;}setScrollDir(scrollY>lastScrollY?SCROLL_DOWN:SCROLL_UP);lastScrollY=scrollY>0?scrollY:0;ticking=false;};var onScroll=function onScroll(){if(!ticking){window.requestAnimationFrame(updateScrollDir);ticking=true;}};/**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */!off?window.addEventListener('scroll',onScroll):setScrollDir(initialDirection);return function(){return window.removeEventListener('scroll',onScroll);};},[initialDirection,thresholdPixels,off]);return scrollDir;};/* harmony default export */ var hooks_useScrollDirection = (useScrollDirection);
;// CONCATENATED MODULE: ./src/hooks/index.js


/***/ }),

/***/ 4165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fb": function() { return /* binding */ navDelay; },
/* harmony export */   "Cs": function() { return /* binding */ loaderDelay; },
/* harmony export */   "nx": function() { return /* binding */ KEY_CODES; }
/* harmony export */ });
/* unused harmony export hex2rgba */
var hex2rgba=function hex2rgba(hex,alpha){if(alpha===void 0){alpha=1;}var _hex$match$map=hex.match(/\w\w/g).map(function(x){return parseInt(x,16);}),r=_hex$match$map[0],g=_hex$match$map[1],b=_hex$match$map[2];return"rgba("+r+","+g+","+b+","+alpha+")";};var navDelay=1000;var loaderDelay=2000;var KEY_CODES={ARROW_LEFT:'ArrowLeft',ARROW_LEFT_IE11:'Left',ARROW_RIGHT:'ArrowRight',ARROW_RIGHT_IE11:'Right',ARROW_UP:'ArrowUp',ARROW_UP_IE11:'Up',ARROW_DOWN:'ArrowDown',ARROW_DOWN_IE11:'Down',ESCAPE:'Escape',ESCAPE_IE11:'Esc',TAB:'Tab',SPACE:' ',SPACE_IE11:'Spacebar',ENTER:'Enter'};

/***/ }),

/***/ 355:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ utils_sr; }
});

;// CONCATENATED MODULE: ./node_modules/is-dom-node/dist/is-dom-node.es.js
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
  return typeof window.Node === 'object' ? x instanceof window.Node : x !== null && typeof x === 'object' && typeof x.nodeType === 'number' && typeof x.nodeName === 'string';
}

/* harmony default export */ var is_dom_node_es = (isDomNode);
;// CONCATENATED MODULE: ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
  var prototypeToString = Object.prototype.toString.call(x);
  var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
  return typeof window.NodeList === 'object' ? x instanceof window.NodeList : x !== null && typeof x === 'object' && typeof x.length === 'number' && regex.test(prototypeToString) && (x.length === 0 || is_dom_node_es(x[0]));
}

/* harmony default export */ var is_dom_node_list_es = (isDomNodeList);
;// CONCATENATED MODULE: ./node_modules/tealight/dist/tealight.es.js
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if (context === void 0) context = document;

  if (target instanceof Array) {
    return target.filter(is_dom_node_es);
  }

  if (is_dom_node_es(target)) {
    return [target];
  }

  if (is_dom_node_list_es(target)) {
    return Array.prototype.slice.call(target);
  }

  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }

  return [];
}

/* harmony default export */ var tealight_es = (tealight);
;// CONCATENATED MODULE: ./node_modules/rematrix/dist/rematrix.es.js
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
  if (source.constructor !== Array) {
    throw new TypeError('Expected array.');
  }

  if (source.length === 16) {
    return source;
  }

  if (source.length === 6) {
    var matrix = identity();
    matrix[0] = source[0];
    matrix[1] = source[1];
    matrix[4] = source[2];
    matrix[5] = source[3];
    matrix[12] = source[4];
    matrix[13] = source[5];
    return matrix;
  }

  throw new RangeError('Expected array with either 6 or 16 values.');
}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */


function identity() {
  var matrix = [];

  for (var i = 0; i < 16; i++) {
    i % 5 == 0 ? matrix.push(1) : matrix.push(0);
  }

  return matrix;
}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */


function inverse(source) {
  var m = format(source);
  var s0 = m[0] * m[5] - m[4] * m[1];
  var s1 = m[0] * m[6] - m[4] * m[2];
  var s2 = m[0] * m[7] - m[4] * m[3];
  var s3 = m[1] * m[6] - m[5] * m[2];
  var s4 = m[1] * m[7] - m[5] * m[3];
  var s5 = m[2] * m[7] - m[6] * m[3];
  var c5 = m[10] * m[15] - m[14] * m[11];
  var c4 = m[9] * m[15] - m[13] * m[11];
  var c3 = m[9] * m[14] - m[13] * m[10];
  var c2 = m[8] * m[15] - m[12] * m[11];
  var c1 = m[8] * m[14] - m[12] * m[10];
  var c0 = m[8] * m[13] - m[12] * m[9];
  var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

  if (isNaN(determinant) || determinant === Infinity) {
    throw new Error('Inverse determinant attempted to divide by zero.');
  }

  return [(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant, (-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant, (m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant, (-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant, (-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant, (m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant, (-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant, (m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant, (m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant, (-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant, (m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant, (-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant, (-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant, (m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant, (-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant, (m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant];
}
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */


function multiply(m, x) {
  var fm = format(m);
  var fx = format(x);
  var product = [];

  for (var i = 0; i < 4; i++) {
    var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];

    for (var j = 0; j < 4; j++) {
      var k = j * 4;
      var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
      var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
      product[i + k] = result;
    }
  }

  return product;
}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */


function parse(source) {
  if (typeof source === 'string') {
    var match = source.match(/matrix(3d)?\(([^)]+)\)/);

    if (match) {
      var raw = match[2].split(', ').map(parseFloat);
      return format(raw);
    }
  }

  return identity();
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */


function rotate(angle) {
  return rotateZ(angle);
}
/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */


function rotateX(angle) {
  var theta = Math.PI / 180 * angle;
  var matrix = identity();
  matrix[5] = matrix[10] = Math.cos(theta);
  matrix[6] = matrix[9] = Math.sin(theta);
  matrix[9] *= -1;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */


function rotateY(angle) {
  var theta = Math.PI / 180 * angle;
  var matrix = identity();
  matrix[0] = matrix[10] = Math.cos(theta);
  matrix[2] = matrix[8] = Math.sin(theta);
  matrix[2] *= -1;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */


function rotateZ(angle) {
  var theta = Math.PI / 180 * angle;
  var matrix = identity();
  matrix[0] = matrix[5] = Math.cos(theta);
  matrix[1] = matrix[4] = Math.sin(theta);
  matrix[4] *= -1;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */


function scale(scalar, scalarY) {
  var matrix = identity();
  matrix[0] = scalar;
  matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */


function scaleX(scalar) {
  var matrix = identity();
  matrix[0] = scalar;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */


function scaleY(scalar) {
  var matrix = identity();
  matrix[5] = scalar;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */


function scaleZ(scalar) {
  var matrix = identity();
  matrix[10] = scalar;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */


function skew(angleX, angleY) {
  var thetaX = Math.PI / 180 * angleX;
  var matrix = identity();
  matrix[4] = Math.tan(thetaX);

  if (angleY) {
    var thetaY = Math.PI / 180 * angleY;
    matrix[1] = Math.tan(thetaY);
  }

  return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */


function skewX(angle) {
  var theta = Math.PI / 180 * angle;
  var matrix = identity();
  matrix[4] = Math.tan(theta);
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */


function skewY(angle) {
  var theta = Math.PI / 180 * angle;
  var matrix = identity();
  matrix[1] = Math.tan(theta);
  return matrix;
}
/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */


function rematrix_es_toString(source) {
  return "matrix3d(" + format(source).join(', ') + ")";
}
/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */


function translate(distanceX, distanceY) {
  var matrix = identity();
  matrix[12] = distanceX;

  if (distanceY) {
    matrix[13] = distanceY;
  }

  return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */


function translateX(distance) {
  var matrix = identity();
  matrix[12] = distance;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */


function translateY(distance) {
  var matrix = identity();
  matrix[13] = distance;
  return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */


function translateZ(distance) {
  var matrix = identity();
  matrix[14] = distance;
  return matrix;
}


;// CONCATENATED MODULE: ./node_modules/miniraf/dist/miniraf.es.js
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        return polyfill(callback);
      }, 0);
    }
  };
}();

var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;
/* harmony default export */ var miniraf_es = (index);
;// CONCATENATED MODULE: ./node_modules/scrollreveal/dist/scrollreveal.es.js
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/



var defaults = {
  delay: 0,
  distance: '0',
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'bottom',
  rotate: {
    x: 0,
    y: 0,
    z: 0
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  afterReset: function afterReset() {},
  afterReveal: function afterReveal() {},
  beforeReset: function beforeReset() {},
  beforeReveal: function beforeReveal() {}
};

function failure() {
  document.documentElement.classList.remove('sr');
  return {
    clean: function clean() {},
    destroy: function destroy() {},
    reveal: function reveal() {},
    sync: function sync() {},

    get noop() {
      return true;
    }

  };
}

function success() {
  document.documentElement.classList.add('sr');

  if (document.body) {
    document.body.style.height = '100%';
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.style.height = '100%';
    });
  }
}

var mount = {
  success: success,
  failure: failure
};

function isObject(x) {
  return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === '[object Object]');
}

function each(collection, callback) {
  if (isObject(collection)) {
    var keys = Object.keys(collection);
    return keys.forEach(function (key) {
      return callback(collection[key], key, collection);
    });
  }

  if (collection instanceof Array) {
    return collection.forEach(function (item, i) {
      return callback(item, i, collection);
    });
  }

  throw new TypeError('Expected either an array or object literal.');
}

function logger(message) {
  var details = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    details[len] = arguments[len + 1];
  }

  if (this.constructor.debug && console) {
    var report = "%cScrollReveal: " + message;
    details.forEach(function (detail) {
      return report += "\n — " + detail;
    });
    console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
  }
}

function rinse() {
  var this$1 = this;

  var struct = function struct() {
    return {
      active: [],
      stale: []
    };
  };

  var elementIds = struct();
  var sequenceIds = struct();
  var containerIds = struct();
  /**
   * Take stock of active element IDs.
   */

  try {
    each(tealight_es('[data-sr-id]'), function (node) {
      var id = parseInt(node.getAttribute('data-sr-id'));
      elementIds.active.push(id);
    });
  } catch (e) {
    throw e;
  }
  /**
   * Destroy stale elements.
   */


  each(this.store.elements, function (element) {
    if (elementIds.active.indexOf(element.id) === -1) {
      elementIds.stale.push(element.id);
    }
  });
  each(elementIds.stale, function (staleId) {
    return delete this$1.store.elements[staleId];
  });
  /**
   * Take stock of active container and sequence IDs.
   */

  each(this.store.elements, function (element) {
    if (containerIds.active.indexOf(element.containerId) === -1) {
      containerIds.active.push(element.containerId);
    }

    if (element.hasOwnProperty('sequence')) {
      if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
        sequenceIds.active.push(element.sequence.id);
      }
    }
  });
  /**
   * Destroy stale containers.
   */

  each(this.store.containers, function (container) {
    if (containerIds.active.indexOf(container.id) === -1) {
      containerIds.stale.push(container.id);
    }
  });
  each(containerIds.stale, function (staleId) {
    var stale = this$1.store.containers[staleId].node;
    stale.removeEventListener('scroll', this$1.delegate);
    stale.removeEventListener('resize', this$1.delegate);
    delete this$1.store.containers[staleId];
  });
  /**
   * Destroy stale sequences.
   */

  each(this.store.sequences, function (sequence) {
    if (sequenceIds.active.indexOf(sequence.id) === -1) {
      sequenceIds.stale.push(sequence.id);
    }
  });
  each(sequenceIds.stale, function (staleId) {
    return delete this$1.store.sequences[staleId];
  });
}

var getPrefixedCssProp = function () {
  var properties = {};
  var style = document.documentElement.style;

  function getPrefixedCssProperty(name, source) {
    if (source === void 0) source = style;

    if (name && typeof name === 'string') {
      if (properties[name]) {
        return properties[name];
      }

      if (typeof source[name] === 'string') {
        return properties[name] = name;
      }

      if (typeof source["-webkit-" + name] === 'string') {
        return properties[name] = "-webkit-" + name;
      }

      throw new RangeError("Unable to find \"" + name + "\" style property.");
    }

    throw new TypeError('Expected a string.');
  }

  getPrefixedCssProperty.clearCache = function () {
    return properties = {};
  };

  return getPrefixedCssProperty;
}();

function style(element) {
  var computed = window.getComputedStyle(element.node);
  var position = computed.position;
  var config = element.config;
  /**
   * Generate inline styles
   */

  var inline = {};
  var inlineStyle = element.node.getAttribute('style') || '';
  var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
  inline.computed = inlineMatch ? inlineMatch.map(function (m) {
    return m.trim();
  }).join('; ') + ';' : '';
  inline.generated = inlineMatch.some(function (m) {
    return m.match(/visibility\s?:\s?visible/i);
  }) ? inline.computed : inlineMatch.concat(['visibility: visible']).map(function (m) {
    return m.trim();
  }).join('; ') + ';';
  /**
   * Generate opacity styles
   */

  var computedOpacity = parseFloat(computed.opacity);
  var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
  var opacity = {
    computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : '',
    generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ''
  };
  /**
   * Generate transformation styles
   */

  var transformations = [];

  if (parseFloat(config.distance)) {
    var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';
    /**
     * Let’s make sure our our pixel distances are negative for top and left.
     * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
     */

    var distance = config.distance;

    if (config.origin === 'top' || config.origin === 'left') {
      distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
    }

    var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
    var value = ref[0];
    var unit = ref[1];

    switch (unit) {
      case 'em':
        distance = parseInt(computed.fontSize) * value;
        break;

      case 'px':
        distance = value;
        break;

      case '%':
        /**
         * Here we use `getBoundingClientRect` instead of
         * the existing data attached to `element.geometry`
         * because only the former includes any transformations
         * current applied to the element.
         *
         * If that behavior ends up being unintuitive, this
         * logic could instead utilize `element.geometry.height`
         * and `element.geoemetry.width` for the distance calculation
         */
        distance = axis === 'Y' ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
        break;

      default:
        throw new RangeError('Unrecognized or missing distance unit.');
    }

    if (axis === 'Y') {
      transformations.push(translateY(distance));
    } else {
      transformations.push(translateX(distance));
    }
  }

  if (config.rotate.x) {
    transformations.push(rotateX(config.rotate.x));
  }

  if (config.rotate.y) {
    transformations.push(rotateY(config.rotate.y));
  }

  if (config.rotate.z) {
    transformations.push(rotateZ(config.rotate.z));
  }

  if (config.scale !== 1) {
    if (config.scale === 0) {
      /**
       * The CSS Transforms matrix interpolation specification
       * basically disallows transitions of non-invertible
       * matrixes, which means browsers won't transition
       * elements with zero scale.
       *
       * That’s inconvenient for the API and developer
       * experience, so we simply nudge their value
       * slightly above zero; this allows browsers
       * to transition our element as expected.
       *
       * `0.0002` was the smallest number
       * that performed across browsers.
       */
      transformations.push(scale(0.0002));
    } else {
      transformations.push(scale(config.scale));
    }
  }

  var transform = {};

  if (transformations.length) {
    transform.property = getPrefixedCssProp('transform');
    /**
     * The default computed transform value should be one of:
     * undefined || 'none' || 'matrix()' || 'matrix3d()'
     */

    transform.computed = {
      raw: computed[transform.property],
      matrix: parse(computed[transform.property])
    };
    transformations.unshift(transform.computed.matrix);
    var product = transformations.reduce(multiply);
    transform.generated = {
      initial: transform.property + ": matrix3d(" + product.join(', ') + ");",
      final: transform.property + ": matrix3d(" + transform.computed.matrix.join(', ') + ");"
    };
  } else {
    transform.generated = {
      initial: '',
      final: ''
    };
  }
  /**
   * Generate transition styles
   */


  var transition = {};

  if (opacity.generated || transform.generated.initial) {
    transition.property = getPrefixedCssProp('transition');
    transition.computed = computed[transition.property];
    transition.fragments = [];
    var delay = config.delay;
    var duration = config.duration;
    var easing = config.easing;

    if (opacity.generated) {
      transition.fragments.push({
        delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
        instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
      });
    }

    if (transform.generated.initial) {
      transition.fragments.push({
        delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
        instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
      });
    }
    /**
     * The default computed transition property should be undefined, or one of:
     * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
     */


    var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);

    if (hasCustomTransition) {
      transition.fragments.unshift({
        delayed: transition.computed,
        instant: transition.computed
      });
    }

    var composed = transition.fragments.reduce(function (composition, fragment, i) {
      composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
      composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
      return composition;
    }, {
      delayed: '',
      instant: ''
    });
    transition.generated = {
      delayed: transition.property + ": " + composed.delayed + ";",
      instant: transition.property + ": " + composed.instant + ";"
    };
  } else {
    transition.generated = {
      delayed: '',
      instant: ''
    };
  }

  return {
    inline: inline,
    opacity: opacity,
    position: position,
    transform: transform,
    transition: transition
  };
}
/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */


function applyStyle(el, declaration) {
  declaration.split(';').forEach(function (pair) {
    var ref = pair.split(':');
    var property = ref[0];
    var value = ref.slice(1);

    if (property && value) {
      el.style[property.trim()] = value.join(':');
    }
  });
}

function clean(target) {
  var this$1 = this;
  var dirty;

  try {
    each(tealight_es(target), function (node) {
      var id = node.getAttribute('data-sr-id');

      if (id !== null) {
        dirty = true;
        var element = this$1.store.elements[id];

        if (element.callbackTimer) {
          window.clearTimeout(element.callbackTimer.clock);
        }

        applyStyle(element.node, element.styles.inline.generated);
        node.removeAttribute('data-sr-id');
        delete this$1.store.elements[id];
      }
    });
  } catch (e) {
    return logger.call(this, 'Clean failed.', e.message);
  }

  if (dirty) {
    try {
      rinse.call(this);
    } catch (e) {
      return logger.call(this, 'Clean failed.', e.message);
    }
  }
}

function destroy() {
  var this$1 = this;
  /**
   * Remove all generated styles and element ids
   */

  each(this.store.elements, function (element) {
    applyStyle(element.node, element.styles.inline.generated);
    element.node.removeAttribute('data-sr-id');
  });
  /**
   * Remove all event listeners.
   */

  each(this.store.containers, function (container) {
    var target = container.node === document.documentElement ? window : container.node;
    target.removeEventListener('scroll', this$1.delegate);
    target.removeEventListener('resize', this$1.delegate);
  });
  /**
   * Clear all data from the store
   */

  this.store = {
    containers: {},
    elements: {},
    history: [],
    sequences: {}
  };
}

function deepAssign(target) {
  var sources = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    sources[len] = arguments[len + 1];
  }

  if (isObject(target)) {
    each(sources, function (source) {
      each(source, function (data, key) {
        if (isObject(data)) {
          if (!target[key] || !isObject(target[key])) {
            target[key] = {};
          }

          deepAssign(target[key], data);
        } else {
          target[key] = data;
        }
      });
    });
    return target;
  } else {
    throw new TypeError('Target must be an object literal.');
  }
}

function isMobile(agent) {
  if (agent === void 0) agent = navigator.userAgent;
  return /Android|iPhone|iPad|iPod/i.test(agent);
}

var nextUniqueId = function () {
  var uid = 0;
  return function () {
    return uid++;
  };
}();

function initialize() {
  var this$1 = this;
  rinse.call(this);
  each(this.store.elements, function (element) {
    var styles = [element.styles.inline.generated];

    if (element.visible) {
      styles.push(element.styles.opacity.computed);
      styles.push(element.styles.transform.generated.final);
      element.revealed = true;
    } else {
      styles.push(element.styles.opacity.generated);
      styles.push(element.styles.transform.generated.initial);
      element.revealed = false;
    }

    applyStyle(element.node, styles.filter(function (s) {
      return s !== '';
    }).join(' '));
  });
  each(this.store.containers, function (container) {
    var target = container.node === document.documentElement ? window : container.node;
    target.addEventListener('scroll', this$1.delegate);
    target.addEventListener('resize', this$1.delegate);
  });
  /**
   * Manually invoke delegate once to capture
   * element and container dimensions, container
   * scroll position, and trigger any valid reveals
   */

  this.delegate();
  /**
   * Wipe any existing `setTimeout` now
   * that initialization has completed.
   */

  this.initTimeout = null;
}

function animate(element, force) {
  if (force === void 0) force = {};
  var pristine = force.pristine || this.pristine;
  var delayed = element.config.useDelay === 'always' || element.config.useDelay === 'onload' && pristine || element.config.useDelay === 'once' && !element.seen;
  var shouldReveal = element.visible && !element.revealed;
  var shouldReset = !element.visible && element.revealed && element.config.reset;

  if (force.reveal || shouldReveal) {
    return triggerReveal.call(this, element, delayed);
  }

  if (force.reset || shouldReset) {
    return triggerReset.call(this, element);
  }
}

function triggerReveal(element, delayed) {
  var styles = [element.styles.inline.generated, element.styles.opacity.computed, element.styles.transform.generated.final];

  if (delayed) {
    styles.push(element.styles.transition.generated.delayed);
  } else {
    styles.push(element.styles.transition.generated.instant);
  }

  element.revealed = element.seen = true;
  applyStyle(element.node, styles.filter(function (s) {
    return s !== '';
  }).join(' '));
  registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
  var styles = [element.styles.inline.generated, element.styles.opacity.generated, element.styles.transform.generated.initial, element.styles.transition.generated.instant];
  element.revealed = false;
  applyStyle(element.node, styles.filter(function (s) {
    return s !== '';
  }).join(' '));
  registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
  var this$1 = this;
  var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
  var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
  var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
  var elapsed = 0;

  if (element.callbackTimer) {
    elapsed = Date.now() - element.callbackTimer.start;
    window.clearTimeout(element.callbackTimer.clock);
  }

  beforeCallback(element.node);
  element.callbackTimer = {
    start: Date.now(),
    clock: window.setTimeout(function () {
      afterCallback(element.node);
      element.callbackTimer = null;

      if (element.revealed && !element.config.reset && element.config.cleanup) {
        clean.call(this$1, element.node);
      }
    }, duration - elapsed)
  };
}

function sequence(element, pristine) {
  if (pristine === void 0) pristine = this.pristine;
  /**
   * We first check if the element should reset.
   */

  if (!element.visible && element.revealed && element.config.reset) {
    return animate.call(this, element, {
      reset: true
    });
  }

  var seq = this.store.sequences[element.sequence.id];
  var i = element.sequence.index;

  if (seq) {
    var visible = new SequenceModel(seq, 'visible', this.store);
    var revealed = new SequenceModel(seq, 'revealed', this.store);
    seq.models = {
      visible: visible,
      revealed: revealed
    };
    /**
     * If the sequence has no revealed members,
     * then we reveal the first visible element
     * within that sequence.
     *
     * The sequence then cues a recursive call
     * in both directions.
     */

    if (!revealed.body.length) {
      var nextId = seq.members[visible.body[0]];
      var nextElement = this.store.elements[nextId];

      if (nextElement) {
        cue.call(this, seq, visible.body[0], -1, pristine);
        cue.call(this, seq, visible.body[0], +1, pristine);
        return animate.call(this, nextElement, {
          reveal: true,
          pristine: pristine
        });
      }
    }
    /**
     * If our element isn’t resetting, we check the
     * element sequence index against the head, and
     * then the foot of the sequence.
     */


    if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
      cue.call(this, seq, i, -1, pristine);
      return animate.call(this, element, {
        reveal: true,
        pristine: pristine
      });
    }

    if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
      cue.call(this, seq, i, +1, pristine);
      return animate.call(this, element, {
        reveal: true,
        pristine: pristine
      });
    }
  }
}

function Sequence(interval) {
  var i = Math.abs(interval);

  if (!isNaN(i)) {
    this.id = nextUniqueId();
    this.interval = Math.max(i, 16);
    this.members = [];
    this.models = {};
    this.blocked = {
      head: false,
      foot: false
    };
  } else {
    throw new RangeError('Invalid sequence interval.');
  }
}

function SequenceModel(seq, prop, store) {
  var this$1 = this;
  this.head = [];
  this.body = [];
  this.foot = [];
  each(seq.members, function (id, index) {
    var element = store.elements[id];

    if (element && element[prop]) {
      this$1.body.push(index);
    }
  });

  if (this.body.length) {
    each(seq.members, function (id, index) {
      var element = store.elements[id];

      if (element && !element[prop]) {
        if (index < this$1.body[0]) {
          this$1.head.push(index);
        } else {
          this$1.foot.push(index);
        }
      }
    });
  }
}

function cue(seq, i, direction, pristine) {
  var this$1 = this;
  var blocked = ['head', null, 'foot'][1 + direction];
  var nextId = seq.members[i + direction];
  var nextElement = this.store.elements[nextId];
  seq.blocked[blocked] = true;
  setTimeout(function () {
    seq.blocked[blocked] = false;

    if (nextElement) {
      sequence.call(this$1, nextElement, pristine);
    }
  }, seq.interval);
}

function reveal(target, options, syncing) {
  var this$1 = this;
  if (options === void 0) options = {};
  if (syncing === void 0) syncing = false;
  var containerBuffer = [];
  var sequence$$1;
  var interval = options.interval || defaults.interval;

  try {
    if (interval) {
      sequence$$1 = new Sequence(interval);
    }

    var nodes = tealight_es(target);

    if (!nodes.length) {
      throw new Error('Invalid reveal target.');
    }

    var elements = nodes.reduce(function (elementBuffer, elementNode) {
      var element = {};
      var existingId = elementNode.getAttribute('data-sr-id');

      if (existingId) {
        deepAssign(element, this$1.store.elements[existingId]);
        /**
         * In order to prevent previously generated styles
         * from throwing off the new styles, the style tag
         * has to be reverted to its pre-reveal state.
         */

        applyStyle(element.node, element.styles.inline.computed);
      } else {
        element.id = nextUniqueId();
        element.node = elementNode;
        element.seen = false;
        element.revealed = false;
        element.visible = false;
      }

      var config = deepAssign({}, element.config || this$1.defaults, options);

      if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
        if (existingId) {
          clean.call(this$1, element);
        }

        return elementBuffer; // skip elements that are disabled
      }

      var containerNode = tealight_es(config.container)[0];

      if (!containerNode) {
        throw new Error('Invalid container.');
      }

      if (!containerNode.contains(elementNode)) {
        return elementBuffer; // skip elements found outside the container
      }

      var containerId;
      {
        containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);

        if (containerId === null) {
          containerId = nextUniqueId();
          containerBuffer.push({
            id: containerId,
            node: containerNode
          });
        }
      }
      element.config = config;
      element.containerId = containerId;
      element.styles = style(element);

      if (sequence$$1) {
        element.sequence = {
          id: sequence$$1.id,
          index: sequence$$1.members.length
        };
        sequence$$1.members.push(element.id);
      }

      elementBuffer.push(element);
      return elementBuffer;
    }, []);
    /**
     * Modifying the DOM via setAttribute needs to be handled
     * separately from reading computed styles in the map above
     * for the browser to batch DOM changes (limiting reflows)
     */

    each(elements, function (element) {
      this$1.store.elements[element.id] = element;
      element.node.setAttribute('data-sr-id', element.id);
    });
  } catch (e) {
    return logger.call(this, 'Reveal failed.', e.message);
  }
  /**
   * Now that element set-up is complete...
   * Let’s commit any container and sequence data we have to the store.
   */


  each(containerBuffer, function (container) {
    this$1.store.containers[container.id] = {
      id: container.id,
      node: container.node
    };
  });

  if (sequence$$1) {
    this.store.sequences[sequence$$1.id] = sequence$$1;
  }
  /**
   * If reveal wasn't invoked by sync, we want to
   * make sure to add this call to the history.
   */


  if (syncing !== true) {
    this.store.history.push({
      target: target,
      options: options
    });
    /**
     * Push initialization to the event queue, giving
     * multiple reveal calls time to be interpreted.
     */

    if (this.initTimeout) {
      window.clearTimeout(this.initTimeout);
    }

    this.initTimeout = window.setTimeout(initialize.bind(this), 0);
  }
}

function getContainerId(node) {
  var collections = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    collections[len] = arguments[len + 1];
  }

  var id = null;
  each(collections, function (collection) {
    each(collection, function (container) {
      if (id === null && container.node === node) {
        id = container.id;
      }
    });
  });
  return id;
}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */


function sync() {
  var this$1 = this;
  each(this.store.history, function (record) {
    reveal.call(this$1, record.target, record.options, true);
  });
  initialize.call(this);
}

var scrollreveal_es_polyfill = function polyfill(x) {
  return (x > 0) - (x < 0) || +x;
};

var mathSign = Math.sign || scrollreveal_es_polyfill;

function getGeometry(target, isContainer) {
  /**
   * We want to ignore padding and scrollbars for container elements.
   * More information here: https://goo.gl/vOZpbz
   */
  var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
  var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
  var offsetTop = 0;
  var offsetLeft = 0;
  var node = target.node;

  do {
    if (!isNaN(node.offsetTop)) {
      offsetTop += node.offsetTop;
    }

    if (!isNaN(node.offsetLeft)) {
      offsetLeft += node.offsetLeft;
    }

    node = node.offsetParent;
  } while (node);

  return {
    bounds: {
      top: offsetTop,
      right: offsetLeft + width,
      bottom: offsetTop + height,
      left: offsetLeft
    },
    height: height,
    width: width
  };
}

function getScrolled(container) {
  var top, left;

  if (container.node === document.documentElement) {
    top = window.pageYOffset;
    left = window.pageXOffset;
  } else {
    top = container.node.scrollTop;
    left = container.node.scrollLeft;
  }

  return {
    top: top,
    left: left
  };
}

function isElementVisible(element) {
  if (element === void 0) element = {};
  var container = this.store.containers[element.containerId];

  if (!container) {
    return;
  }

  var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
  var viewOffset = element.config.viewOffset;
  var elementBounds = {
    top: element.geometry.bounds.top + element.geometry.height * viewFactor,
    right: element.geometry.bounds.right - element.geometry.width * viewFactor,
    bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
    left: element.geometry.bounds.left + element.geometry.width * viewFactor
  };
  var containerBounds = {
    top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
    right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
    bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
    left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
  };
  return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === 'fixed';
}

function delegate(event, elements) {
  var this$1 = this;
  if (event === void 0) event = {
    type: 'init'
  };
  if (elements === void 0) elements = this.store.elements;
  miniraf_es(function () {
    var stale = event.type === 'init' || event.type === 'resize';
    each(this$1.store.containers, function (container) {
      if (stale) {
        container.geometry = getGeometry.call(this$1, container, true);
      }

      var scroll = getScrolled.call(this$1, container);

      if (container.scroll) {
        container.direction = {
          x: mathSign(scroll.left - container.scroll.left),
          y: mathSign(scroll.top - container.scroll.top)
        };
      }

      container.scroll = scroll;
    });
    /**
     * Due to how the sequencer is implemented, it’s
     * important that we update the state of all
     * elements, before any animation logic is
     * evaluated (in the second loop below).
     */

    each(elements, function (element) {
      if (stale || element.geometry === undefined) {
        element.geometry = getGeometry.call(this$1, element);
      }

      element.visible = isElementVisible.call(this$1, element);
    });
    each(elements, function (element) {
      if (element.sequence) {
        sequence.call(this$1, element);
      } else {
        animate.call(this$1, element);
      }
    });
    this$1.pristine = false;
  });
}

function isTransformSupported() {
  var style = document.documentElement.style;
  return 'transform' in style || 'WebkitTransform' in style;
}

function isTransitionSupported() {
  var style = document.documentElement.style;
  return 'transition' in style || 'WebkitTransition' in style;
}

var version = "4.0.9";
var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
  if (options === void 0) options = {};
  var invokedWithoutNew = typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype;

  if (invokedWithoutNew) {
    return new ScrollReveal(options);
  }

  if (!ScrollReveal.isSupported()) {
    logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
    return mount.failure();
  }

  var buffer;

  try {
    buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
  } catch (e) {
    logger.call(this, 'Invalid configuration.', e.message);
    return mount.failure();
  }

  try {
    var container = tealight_es(buffer.container)[0];

    if (!container) {
      throw new Error('Invalid container.');
    }
  } catch (e) {
    logger.call(this, e.message);
    return mount.failure();
  }

  config = buffer;

  if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
    logger.call(this, 'This device is disabled.', "desktop: " + config.desktop, "mobile: " + config.mobile);
    return mount.failure();
  }

  mount.success();
  this.store = {
    containers: {},
    elements: {},
    history: [],
    sequences: {}
  };
  this.pristine = true;
  boundDelegate = boundDelegate || delegate.bind(this);
  boundDestroy = boundDestroy || destroy.bind(this);
  boundReveal = boundReveal || reveal.bind(this);
  boundClean = boundClean || clean.bind(this);
  boundSync = boundSync || sync.bind(this);
  Object.defineProperty(this, 'delegate', {
    get: function get() {
      return boundDelegate;
    }
  });
  Object.defineProperty(this, 'destroy', {
    get: function get() {
      return boundDestroy;
    }
  });
  Object.defineProperty(this, 'reveal', {
    get: function get() {
      return boundReveal;
    }
  });
  Object.defineProperty(this, 'clean', {
    get: function get() {
      return boundClean;
    }
  });
  Object.defineProperty(this, 'sync', {
    get: function get() {
      return boundSync;
    }
  });
  Object.defineProperty(this, 'defaults', {
    get: function get() {
      return config;
    }
  });
  Object.defineProperty(this, 'version', {
    get: function get() {
      return version;
    }
  });
  Object.defineProperty(this, 'noop', {
    get: function get() {
      return false;
    }
  });
  return instance ? instance : instance = this;
}

ScrollReveal.isSupported = function () {
  return isTransformSupported() && isTransitionSupported();
};

Object.defineProperty(ScrollReveal, 'debug', {
  get: function get() {
    return debug || false;
  },
  set: function set(value) {
    return debug = typeof value === 'boolean' ? value : debug;
  }
});
ScrollReveal();
/* harmony default export */ var scrollreveal_es = (ScrollReveal);
;// CONCATENATED MODULE: ./src/utils/sr.js
var isSSR=typeof window==='undefined';var sr=isSSR?null:scrollreveal_es();/* harmony default export */ var utils_sr = (sr);

/***/ }),

/***/ 7462:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 5245:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 167:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c2179111e18a308c5faa052f5646434e/aef42/WebPic.png","srcSet":"/static/c2179111e18a308c5faa052f5646434e/14dd5/WebPic.png 125w,\\n/static/c2179111e18a308c5faa052f5646434e/5add7/WebPic.png 250w,\\n/static/c2179111e18a308c5faa052f5646434e/aef42/WebPic.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/c2179111e18a308c5faa052f5646434e/2e575/WebPic.avif 125w,\\n/static/c2179111e18a308c5faa052f5646434e/98dbc/WebPic.avif 250w,\\n/static/c2179111e18a308c5faa052f5646434e/92e1f/WebPic.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/c2179111e18a308c5faa052f5646434e/2c9be/WebPic.webp 125w,\\n/static/c2179111e18a308c5faa052f5646434e/0b151/WebPic.webp 250w,\\n/static/c2179111e18a308c5faa052f5646434e/33dd0/WebPic.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}');

/***/ }),

/***/ 2672:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/764983025edcd46378109a858225f972/5f2c3/Mountain_Climb_2.png","srcSet":"/static/764983025edcd46378109a858225f972/90cd3/Mountain_Climb_2.png 100w,\\n/static/764983025edcd46378109a858225f972/614dc/Mountain_Climb_2.png 200w,\\n/static/764983025edcd46378109a858225f972/5f2c3/Mountain_Climb_2.png 400w,\\n/static/764983025edcd46378109a858225f972/8cb4c/Mountain_Climb_2.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/764983025edcd46378109a858225f972/322dd/Mountain_Climb_2.avif 100w,\\n/static/764983025edcd46378109a858225f972/73fca/Mountain_Climb_2.avif 200w,\\n/static/764983025edcd46378109a858225f972/44a11/Mountain_Climb_2.avif 400w,\\n/static/764983025edcd46378109a858225f972/8b9ca/Mountain_Climb_2.avif 800w","type":"image/avif","sizes":"(min-width: 400px) 400px, 100vw"},{"srcSet":"/static/764983025edcd46378109a858225f972/e64f1/Mountain_Climb_2.webp 100w,\\n/static/764983025edcd46378109a858225f972/8b00d/Mountain_Climb_2.webp 200w,\\n/static/764983025edcd46378109a858225f972/9c0a1/Mountain_Climb_2.webp 400w,\\n/static/764983025edcd46378109a858225f972/88f3e/Mountain_Climb_2.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":400}');

/***/ })

}]);
//# sourceMappingURL=546641dfde76ed00139ea2c3eae09499c5f2164a-a625b01873eda1643b41.js.map