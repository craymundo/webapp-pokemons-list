(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0861":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center"},[r("img",{staticClass:"mx-auto d-block mt-70",attrs:{src:n("49da"),alt:"..."}}),r("h1",{staticClass:"title mt-60"},[t._v("Welcome to Pokédex")]),r("p",{staticClass:"description mt-30"},[t._v(" The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world. ")]),r("button",{staticClass:"btn btn-normal mt-50",attrs:{type:"button"},on:{click:function(e){return t.$router.push({name:"list"})}}},[t._v("Get started")])])])])},o=[],a=n("d4ec"),c=n("262e"),i=n("2caf"),u=n("9ab4"),f=n("60a3"),s=function(t){Object(c["a"])(n,t);var e=Object(i["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(f["e"]);s=Object(u["a"])([f["a"]],s);var p=s,d=p,l=(n("6db3"),n("2877")),y=Object(l["a"])(d,r,o,!1,null,"c75aacb8",null);e["default"]=y.exports},"49da":function(t,e,n){t.exports=n.p+"img/logoIcon.ce48fae4.svg"},"60a3":function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"e",(function(){return r["a"]})),n.d(e,"c",(function(){return $})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return E}));var r=n("2b0e");
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return i(t)||u(t)||f()}function i(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function p(t,e){d(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){d(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){d(t,e,n)}))}function d(t,e,n){var r=n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e);r.forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var l={__proto__:[]},y=l instanceof Array;function v(t){return function(e,n,r){var o="function"===typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}function b(t){var e=o(t);return null==t||"object"!==e&&"function"!==e}function m(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var r=new e;e.prototype._init=n;var o={};return Object.keys(r).forEach((function(t){void 0!==r[t]&&(o[t]=r[t])})),o}var g=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(g.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"===typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return a({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var c=Object.getPrototypeOf(t.prototype),i=c instanceof r["a"]?c.constructor:r["a"],u=i.extend(e);return _(u,t,i),s()&&p(u,t),u}var O={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!O[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var a=Object.getOwnPropertyDescriptor(e,r);if(!y){if("cid"===r)return;var c=Object.getOwnPropertyDescriptor(n,r);if(!b(a.value)&&c&&c.value===a.value)return}0,Object.defineProperty(t,r,a)}}}))}function w(t){return"function"===typeof t?h(t):function(e){return h(e,t)}}w.registerHooks=function(t){g.push.apply(g,c(t))};var j=w;var P="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function R(t,e,n){if(P&&!Array.isArray(t)&&"function"!==typeof t&&"undefined"===typeof t.type){var r=Reflect.getMetadata("design:type",e,n);r!==Object&&(t.type=r)}}function $(t){return void 0===t&&(t={}),function(e,n){R(t,e,n),v((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}var x=/\B([A-Z])/g,M=function(t){return t.replace(x,"-$1").toLowerCase()};function C(t){return function(e,n,r){var o=M(n),a=r.value;r.value=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var c=function(r){var a=t||o;void 0===r?0===n.length?e.$emit(a):1===n.length?e.$emit(a,n[0]):e.$emit.apply(e,[a].concat(n)):0===n.length?e.$emit(a,r):1===n.length?e.$emit(a,r,n[0]):e.$emit.apply(e,[a,r].concat(n))},i=a.apply(this,n);return k(i)?i.then(c):c(i),i}}}function E(t){return v((function(e,n){e.computed=e.computed||{},e.computed[n]={cache:!1,get:function(){return this.$refs[t||n]}}}))}function k(t){return t instanceof Promise||t&&"function"===typeof t.then}},"67dc":function(t,e,n){},"6db3":function(t,e,n){"use strict";n("67dc")}}]);
//# sourceMappingURL=home.c3b6878f.js.map