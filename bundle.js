(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(94),t.b),d=new URL(t(875),t.b),u=new URL(t(524),t.b),p=new URL(t(496),t.b),f=new URL(t(126),t.b),m=new URL(t(414),t.b),h=new URL(t(122),t.b),v=new URL(t(178),t.b),g=new URL(t(59),t.b),y=new URL(t(9),t.b),b=i()(o()),w=c()(l),x=c()(d),L=c()(u),S=c()(p),k=c()(f),T=c()(m),N=c()(h),C=c()(v),q=c()(g),E=c()(y);b.push([e.id,":root {\n    --header1-Font: 'montserratmedium';\n    --sideBar-Header-Font: 'ralewaysemibold';\n    --sideBar-Font: 'ralewayregular';\n    --content-Font: 'latoregular';\n    font-size: 16px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n/* FONTS */\n\n@font-face {\n    font-family: 'montserratmedium';\n    src: url("+w+") format('woff2'),\n         url("+x+") format('woff');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'ralewaysemibold';\n    src: url("+L+") format('woff2'),\n         url("+S+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'ralewayregular';\n    src: url("+k+") format('woff2'),\n         url("+T+") format('woff');\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'latoregular';\n    src: url("+N+") format('woff2'),\n         url("+C+") format('woff');\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'lato_hairlineregular';\n    src: url("+q+") format('woff2'),\n         url("+E+') format(\'woff\');\n    font-weight: 300;\n    font-style: normal;\n\n}\n\n\n\n/* PAGE */\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: #4682b4;\n    color: ghostwhite;\n    font-family: var(--header1-Font);\n    padding: 15px;\n}\n\n#headerContent {\n    margin-left: 8px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#headerContent div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#headerContent img {\n    width: 75px;\n    height: auto;\n}\n\n#menu {\n    display: none;\n}\n\nh1 {\n    margin: 0;\n    font-size: 2.5rem;\n}\n\nmain {\n    display: flex;\n    min-height: 100vh;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n    font-size: 1.2rem;\n}\n\n\n\n/* SIDEBAR */\n\n#sideBar {\n    background-color: #87ceeb;\n    color: #373737;\n    width: 22%;\n    padding: 15px;\n    min-width: 250px;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.navImg {\n    width: 35px;\n    height: auto;\n}\n\n.navBtn {\n    font-family: var(--sideBar-Font);\n    display: flex;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.navBtn button {\n    cursor: pointer;\n}\n\n.navBtn:hover {\n    background-color: #4d9cd1;\n}\n\n.projectBtn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projectBtn div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectBtn img {\n    width: 35px;\n    height: auto;\n}\n\n.selected {\n    background-color: #4d9cd1;\n}\n\n.bold {\n    font-weight: 600;\n}\n\n#sideBar h2 {\n    font-family: var(--sideBar-Header-Font);\n}\n\n\n\n/* CONTENT */\n\n#contentContainer {\n    background-color: #dcdcdc;\n    color: #333333;\n    width: 78%;\n    padding: 15px;\n}\n\n#content {\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n#content h2 {\n    font-family: var(--content-Font);\n    font-size: 2rem;\n}\n\n/*\n#taskList {\n    display: none;\n}\n*/\n\n.addTask {\n    display: flex;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addTask button {\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addTask:hover {\n    background-color: #c6c6c6;\n}\n\n.addTask img {\n    width: 35px;\n    height: auto;\n}\n\n#content button {\n    font-family: var(--content-Font);\n}\n\n#taskForm {\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n#taskForm input {\n    height: 50px;\n    border: 1px solid #888888;\n    border-radius: 5px;\n    padding: 10px;\n    font-size: 1rem;\n}\n\n#taskForm input:focus {\n    outline: none;\n}\n\n#projectForm {\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n#projectForm input {\n    height: 50px;\n    border: 1px solid #888888;\n    border-radius: 5px;\n    padding: 10px;\n    font-size: 1rem;\n}\n\n#projectForm input:focus {\n    outline: none;\n}\n\n.formBtns {\n    height: 50px;\n    justify-content: space-between;\n    gap: 25px;\n}\n\n.formBtns button {\n    height: 50px;\n    border-radius: 5px;\n    flex: 1;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.projectFormBtns {\n    height: 50px;\n    justify-content: space-between;\n    gap: 25px;\n}\n\n.projectFormBtns button {\n    height: 50px;\n    border-radius: 5px;\n    flex: 1;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addBtn {\n    background-color: #4caf50;\n    border: 1px solid #4caf50;\n}\n\n.addBtn:hover {\n    background-color: #66DE70;\n}\n\n.createProjBtn {\n    background-color: #4caf50;\n    border: 1px solid #4caf50;\n}\n\n.createProjBtn:hover {\n    background-color: #66DE70;\n}\n\n.cancelBtn {\n    background-color: #ff5252;\n    border: 1px solid #ff5252;\n}\n\n.cancelBtn:hover {\n    background-color: #ff7575;\n}\n\n.projectCancelBtn {\n    background-color: #ff5252;\n    border: 1px solid #ff5252;\n}\n\n.projectCancelBtn:hover {\n    background-color: #ff7575;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #4682b4;\n    color: ghostwhite;\n    font-family: var(--header1-Font);\n    padding: 5px;\n}\n\n#footerContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.2rem;\n}\n\n#footerImg {\n    width: 35px;\n    height: auto;\n}\n\n#footerImg:hover {\n    opacity: 0.5;\n}\n\n\n/* TASK STYLES */\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 5px;\n    pointer-events: auto;\n    cursor: pointer;\n    /*gap: 10px;*/ \n}\n\n.task:hover {\n    background-color: #c6c6c6;\n}\n\n.task div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.task div:first-child p {\n    font-family: var(--content-Font);\n    font-size: 1.2rem;\n}\n\n.task img {\n    width: 35px;\n    height: auto;\n}\n\ninput[type="date"] {\n    appearance: none;\n    padding: 8px 12px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: #ffffff;\n    cursor: pointer;\n    color: black;\n    font-family: var(--content-Font);\n    font-weight: bold;\n    font-size: 1.05rem;\n}\n\ninput[type="date"]::-webkit-inner-spin-button,\ninput[type="date"]::-webkit-calender-picker-indicator {\n    display: none;\n}\n\ninput[type="date"]:focus {\n    outline: none;\n    border-color: #4d9cd1;\n}\n\ninput[type="date"]::placeholder {\n    color: black;\n}\n\n::placeholder {\n    color: black;\n}\n\n\n.checkbox {\n    width: 25px;\n    height: 25px;\n    border: 2px solid #333333;\n    border-radius: 50%;\n}\n\n/*\n.task img {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.task:hover img {\n    opacity: 1;\n}\n*/\n\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n    color: rgba(var(black), 1)!important;\n}\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n    color: rgba(var(black), 1)!important;\n}\n::-moz-placeholder { /* Mozilla Firefox 19+ */\n    color: rgba(var(black), 1)!important;\n}\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: rgba(var(black), 1)!important;\n}\n::-ms-input-placeholder { /* Microsoft Edge */\n    color: rgba(var(black), 1)!important;\n}\n\n\n/* Hide / Reveal / Disable Elements */\n.hide {\n    display: none;\n}\n\n.reveal {\n    display: flex;\n}\n\n.disable {\n    pointer-events: none;\n}\n\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 800px) {\n    #menu {\n        display: block;\n    }\n\n    main {\n        flex-direction: column;\n        width: 100%;\n    }\n\n    #sideBar {\n        display: none;\n        width: 100%;\n        padding: 30px;\n    }\n\n    #contentContainer {\n        width: 100%;\n        padding: 30px;\n        min-height: 100vh;\n    }\n\n    #content {\n        width: 100%;\n        margin: 0;\n    }\n\n    \n}\n\n@media screen and (max-width: 450px) {\n    h1 {\n        font-size: 2rem;\n    }\n\n    #headerContent img {\n        width: 55px;\n        height: auto;\n    }\n\n    input[type="date"] {\n        width: 125px;\n        height: 25px;\n        font-size: 0.9rem;\n    }\n\n\n    .task div:first-child p {\n        font-size: 1rem;\n        margin: 0;\n        word-wrap: anywhere;\n    }\n\n    .checkBox {\n        width: 22px;\n        height: 22px;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    #sideBar {\n        display: block!important;\n    }\n}',""]);const D=b},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},178:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-regular-webfont.woff"},122:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-regular-webfont.woff2"},9:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-thin-webfont.woff"},59:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-thin-webfont.woff2"},875:(e,n,t)=>{e.exports=t.p+"assets/fonts/montserrat-medium-webfont.woff"},94:(e,n,t)=>{e.exports=t.p+"assets/fonts/montserrat-medium-webfont.woff2"},414:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-regular-webfont.woff"},126:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-regular-webfont.woff2"},496:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-semibold-webfont.woff"},524:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-semibold-webfont.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,Math.pow(10,8);var h=6e4,v=36e5;function g(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function y(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}var b={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},w=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,x=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,L=/^([+-])(\d{2})(?::?(\d{2}))?$/;function S(e){return e?parseInt(e):1}function k(e){return e&&parseFloat(e.replace(",","."))||0}var T=[31,null,31,30,31,30,31,31,30,31,30,31];function N(e){return e%400==0||e%4==0&&e%100!=0}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function q(e){g(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===C(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function E(e){g(1,arguments);var n=q(e);return n.setHours(0,0,0,0),n}var D={};function j(){return D}function B(e,n){var t,r,o,a,i,s,c,l;g(1,arguments);var d=j(),u=y(null!==(t=null!==(r=null!==(o=null!==(a=null==n?void 0:n.weekStartsOn)&&void 0!==a?a:null==n||null===(i=n.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==o?o:d.weekStartsOn)&&void 0!==r?r:null===(c=d.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==t?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=q(e),f=p.getDay(),m=(f<u?7:0)+f-u;return p.setDate(p.getDate()-m),p.setHours(0,0,0,0),p}function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,n){if("object"!==F(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function U(e,n,t){return n&&A(e.prototype,n),t&&A(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function I(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var M=U((function e(n,t){I(this,e),this.name=n,this.projectId=t})),z=function(){function e(n,t,r,o){I(this,e),this.name=n,this.dueDate=t,this.isComplete=r,this.section=o}return U(e,[{key:"toggleComplete",value:function(){!1===isComplete?isComplete=!0:!0===isComplete&&(isComplete=!1)}}]),e}();const R=t.p+"assets/images/logo.svg",_=t.p+"assets/images/inbox.svg",P=t.p+"assets/images/today.svg",O=t.p+"assets/images/thisweek.svg",Z=t.p+"assets/images/thismonth.svg",H=t.p+"assets/images/add.svg",$=t.p+"assets/images/github.svg",Y=t.p+"assets/images/checklist.svg",W=t.p+"assets/images/trash.svg",G=t.p+"assets/images/menu.svg";var K=[],Q=[],J=document.querySelector("#headerContent"),V=document.querySelector("#content"),X=document.querySelector("#sideBar"),ee=document.querySelector("#taskList"),ne=document.querySelector("#inbox"),te=document.querySelector("#today"),re=document.querySelector("#thisweek"),oe=document.querySelector("#thismonth"),ae=document.querySelector("#addProject"),ie=document.querySelector("#addTask"),se=document.querySelector("#taskForm"),ce=document.querySelector("#projectForm"),le=document.querySelector(".formBtns"),de=document.querySelector(".projectFormBtns"),ue=document.querySelector(".cancelBtn"),pe=document.querySelector(".projectCancelBtn"),fe=(document.querySelector(".createProjBtn"),document.querySelector("#footerImg"));J.querySelector("img").setAttribute("src",R),ne.querySelector("img").setAttribute("src",_),te.querySelector("img").setAttribute("src",P),re.querySelector("img").setAttribute("src",O),oe.querySelector("img").setAttribute("src",Z),ae.querySelector("img").setAttribute("src",H),ie.querySelector("img").setAttribute("src",H),fe.setAttribute("src",$);var me=document.querySelector("#menu"),he=window.getComputedStyle(X);function ve(){return document.querySelectorAll(".navBtn")}function ge(){ve().forEach((function(e){e.classList.remove("selected"),e.querySelector("button").classList.remove("bold")}))}function ye(){ve().forEach((function(e){e.classList.remove("disable")}))}function be(){ve().forEach((function(e){e.addEventListener("click",(function(e){e.currentTarget.classList.contains("selected")||"addProject"==e.currentTarget.getAttribute("id")||(ge(),function(e){"today"==e.currentTarget.getAttribute("id")||"thisweek"==e.currentTarget.getAttribute("id")||"thismonth"==e.currentTarget.getAttribute("id")?(V.querySelector("h2").classList.remove("hide"),V.querySelector("h2").classList.add("reveal"),ie.classList.remove("reveal"),ie.classList.add("hide")):(V.querySelector("h2").classList.remove("hide"),V.querySelector("h2").classList.add("reveal"),ie.classList.remove("hide"),ie.classList.add("reveal"))}(e),e.currentTarget.classList.add("selected"),e.currentTarget.querySelector("button").classList.add("bold"),ee.classList.add("hide"),se.classList.remove("reveal"),se.classList.add("hide"),V.querySelector("h2").textContent=e.currentTarget.querySelector("button").textContent,Ee())}))}))}function we(){var e=se.querySelector("input").value,n=V.querySelector("h2").textContent,t=new z(e,void 0,!1,n);K.push(t);var r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),s=document.createElement("p"),c=document.createElement("input"),l=document.createElement("img");r.classList.add("task"),i.classList.add("checkbox"),s.textContent=t.name+" (".concat(t.section,")"),r.classList.add("task_"+t.section),c.setAttribute("type","date"),c.classList.add("date"),l.setAttribute("src",W),l.classList.add("removeTask"),r.appendChild(o),r.appendChild(a),o.appendChild(i),o.appendChild(s),a.appendChild(c),a.appendChild(l),ee.appendChild(r),function(e){qe().forEach((function(n){n.addEventListener("change",(function(n){!function(e){var n=function(e,n){var t;g(1,arguments);var r=y(null!==(t=null==n?void 0:n.additionalDigits)&&void 0!==t?t:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,a=function(e){var n,t={},r=e.split(b.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?n=r[0]:(t.date=r[0],n=r[1],b.timeZoneDelimiter.test(t.date)&&(t.date=e.split(b.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var o=b.timezone.exec(n);o?(t.time=n.replace(o[1],""),t.timezone=o[1]):t.time=n}return t}(e);if(a.date){var i=function(e,n){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=e.match(t);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,r);o=function(e,n){if(null===n)return new Date(NaN);var t=e.match(w);if(!t)return new Date(NaN);var r=!!t[4],o=S(t[1]),a=S(t[2])-1,i=S(t[3]),s=S(t[4]),c=S(t[5])-1;if(r)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,s,c)?function(e,n,t){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(n-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(n,s,c):new Date(NaN);var l=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(T[n]||(N(e)?29:28))}(n,a,i)&&function(e,n){return n>=1&&n<=(N(e)?366:365)}(n,o)?(l.setUTCFullYear(n,a,Math.max(o,i)),l):new Date(NaN)}(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,c=o.getTime(),l=0;if(a.time&&(l=function(e){var n=e.match(x);if(!n)return NaN;var t=k(n[1]),r=k(n[2]),o=k(n[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(t,r,o)?t*v+r*h+1e3*o:NaN}(a.time),isNaN(l)))return new Date(NaN);if(!a.timezone){var d=new Date(c+l),u=new Date(0);return u.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),u.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),u}return s=function(e){if("Z"===e)return 0;var n=e.match(L);if(!n)return 0;var t="+"===n[1]?-1:1,r=parseInt(n[2]),o=n[3]&&parseInt(n[3])||0;return function(e,n){return n>=0&&n<=59}(0,o)?t*(r*v+o*h):NaN}(a.timezone),isNaN(s)?new Date(NaN):new Date(c+l+s)}(e.currentTarget.value);!function(e){return g(1,arguments),function(e,n){g(2,arguments);var t=E(e),r=E(n);return t.getTime()===r.getTime()}(e,Date.now())}(n)?function(e,n){return g(1,arguments),function(e,n,t){g(2,arguments);var r=B(e,t),o=B(n,t);return r.getTime()===o.getTime()}(e,Date.now(),n)}(n)?(e.currentTarget.parentNode.parentNode.classList.remove("task_today"),e.currentTarget.parentNode.parentNode.classList.remove("task_thismonth"),e.currentTarget.parentNode.parentNode.classList.add("task_thisweek")):function(e){return g(1,arguments),function(e,n){g(2,arguments);var t=q(e),r=q(n);return t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()}(Date.now(),e)}(n)&&(e.currentTarget.parentNode.parentNode.classList.remove("task_today"),e.currentTarget.parentNode.parentNode.classList.remove("task_thisweek"),e.currentTarget.parentNode.parentNode.classList.add("task_thismonth")):(e.currentTarget.parentNode.parentNode.classList.add("task_thisweek"),e.currentTarget.parentNode.parentNode.classList.add("task_thismonth"),e.currentTarget.parentNode.parentNode.classList.add("task_today"))}(n),n.currentTarget.parentNode.parentNode.querySelector("p").textContent.includes(e.name)&&(e.dueDate=n.currentTarget.value)}))}))}(t),Ee()}function xe(){return document.querySelectorAll(".removeTask")}function Le(){return document.querySelectorAll(".removeProject")}function Se(){return document.querySelector("#taskList").children}me.setAttribute("src",G),me.addEventListener("click",(function(){"none"==he.display?X.style.display="block":X.style.display="none"})),ve(),be(),ie.addEventListener("click",(function(e){e.currentTarget.classList.remove("reveal"),e.currentTarget.classList.add("hide"),se.classList.remove("hide"),se.classList.add("reveal"),le.classList.remove("hide"),le.classList.add("reveal")})),ae.addEventListener("click",(function(e){ge(),ve().forEach((function(e){e.classList.add("disable")})),ee.classList.add("hide"),V.querySelector("h2").classList.remove("reveal"),V.querySelector("h2").classList.add("hide"),ie.classList.remove("reveal"),ie.classList.add("hide"),se.classList.remove("reveal"),se.classList.add("hide"),e.currentTarget.classList.remove("reveal"),e.currentTarget.classList.add("hide"),ce.classList.remove("hide"),ce.classList.add("reveal"),de.classList.remove("hide"),de.classList.add("reveal")})),ue.addEventListener("click",(function(e){e.preventDefault(),se.querySelector("input").value="",se.classList.remove("reveal"),se.classList.add("hide"),ie.classList.remove("hide"),ie.classList.add("reveal")})),pe.addEventListener("click",(function(e){e.preventDefault(),ye(),se.querySelector("input").value="",ce.classList.remove("reveal"),ce.classList.add("hide"),ae.classList.remove("hide"),ae.classList.add("reveal"),ne.classList.add("selected"),ne.querySelector("button").classList.add("bold"),V.querySelector("h2").textContent="Inbox",V.querySelector("h2").classList.remove("hide"),V.querySelector("h2").classList.add("reveal"),ie.classList.remove("hide"),ie.classList.add("reveal")})),se.addEventListener("submit",(function(e){e.preventDefault(),se.classList.remove("reveal"),se.classList.add("hide"),ie.classList.add("reveal"),we(),xe().forEach((function(e){e.addEventListener("click",(function(e){for(var n=e.currentTarget.parentNode.parentNode.querySelector("p").textContent,t=K.length-1;t>=0;t--)n.includes(K[t].name)&&K.splice(t,1);e.currentTarget.parentNode.parentNode.remove()}))})),se.querySelector("input").value=""})),xe(),ce.addEventListener("submit",(function(e){e.preventDefault(),ye(),ce.classList.remove("reveal"),ce.classList.add("hide"),ae.classList.add("reveal"),function(){var e=ce.querySelector("input").value,n=new M(e,void 0);Q.push(n);var t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("img"),i=document.createElement("button");t.classList.add("projectBtn"),t.classList.add("navBtn"),o.setAttribute("src",W),o.classList.add("removeProject"),a.setAttribute("src",Y),i.textContent=n.name,X.insertBefore(t,ae),t.appendChild(r),t.appendChild(o),r.appendChild(a),r.appendChild(i),be(),function(e){e.click()}(t)}(),Le().forEach((function(e){e.addEventListener("click",(function(e){e.currentTarget.parentNode.click();var n=e.currentTarget.parentNode.querySelector("button").textContent;!function(e){for(var n=Q.length-1;n>=0;n--)Q[n].name===e&&Q.splice(n,1)}(n),e.currentTarget.parentNode.remove(),function(e){if(Te(),ke=Se(),e.currentTarget.parentNode.classList.contains("selected"))for(var n=e.currentTarget.parentNode.querySelector("button").textContent,t=ke.length-1;t>=0;t--){var r=ke[t];r.classList.contains("task_"+n)&&r.remove()}}(e),function(e){for(var n=K.length-1;n>=0;n--)K[n].section===e&&K.splice(n,1)}(n),ne.click()}))})),ce.querySelector("input").value=""})),Le();var ke=Se();function Te(){return document.querySelectorAll(".projectBtn")}function Ne(){return V.querySelector("h2").textContent}Te();var Ce=Ne();function qe(){return document.querySelectorAll(".date")}function Ee(){ke=Se(),Ce=Ne();for(var e=0;e<ke.length;e++){var n=ke[e];n.classList.contains("task_today")&&"Today"===Ce||n.classList.contains("task_thisweek")&&"This Week"===Ce||n.classList.contains("task_thismonth")&&"This Month"===Ce||n.querySelector("p").textContent.includes(Ce)?(n.classList.remove("hide"),ee.classList.remove("hide")):n.classList.add("hide")}}qe()})()})();