(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>D});var o=t(81),a=t.n(o),r=t(645),s=t.n(r),i=t(667),l=t.n(i),d=new URL(t(94),t.b),c=new URL(t(875),t.b),u=new URL(t(524),t.b),p=new URL(t(496),t.b),f=new URL(t(126),t.b),m=new URL(t(414),t.b),y=new URL(t(122),t.b),g=new URL(t(178),t.b),h=new URL(t(59),t.b),v=new URL(t(9),t.b),b=s()(a()),x=l()(d),w=l()(c),k=l()(u),C=l()(p),E=l()(f),L=l()(m),S=l()(y),B=l()(g),T=l()(h),N=l()(v);b.push([e.id,":root {\n    --header1-Font: 'montserratmedium';\n    --sideBar-Header-Font: 'ralewaysemibold';\n    --sideBar-Font: 'ralewayregular';\n    --content-Font: 'latoregular';\n    font-size: 16px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n/* FONTS */\n\n@font-face {\n    font-family: 'montserratmedium';\n    src: url("+x+") format('woff2'),\n         url("+w+") format('woff');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'ralewaysemibold';\n    src: url("+k+") format('woff2'),\n         url("+C+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'ralewayregular';\n    src: url("+E+") format('woff2'),\n         url("+L+") format('woff');\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'latoregular';\n    src: url("+S+") format('woff2'),\n         url("+B+") format('woff');\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'lato_hairlineregular';\n    src: url("+T+") format('woff2'),\n         url("+N+') format(\'woff\');\n    font-weight: 300;\n    font-style: normal;\n\n}\n\n\n\n/* PAGE */\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: #4682b4;\n    color: ghostwhite;\n    font-family: var(--header1-Font);\n    padding: 15px;\n}\n\n#headerContent {\n    margin-left: 8px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#headerContent div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#headerContent img {\n    width: 75px;\n    height: auto;\n}\n\n#menu {\n    display: none;\n}\n\nh1 {\n    margin: 0;\n    font-size: 2.5rem;\n}\n\nmain {\n    display: flex;\n    min-height: 100vh;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n    font-size: 1.2rem;\n}\n\n\n\n/* SIDEBAR */\n\n#sideBar {\n    background-color: #87ceeb;\n    color: #373737;\n    width: 22%;\n    padding: 15px;\n    min-width: 250px;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.navImg {\n    width: 35px;\n    height: auto;\n}\n\n.navBtn {\n    font-family: var(--sideBar-Font);\n    display: flex;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.navBtn button {\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.navBtn:hover {\n    background-color: #4d9cd1;\n}\n\n.projectBtn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projectBtn div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.projectBtn img {\n    width: 35px;\n    height: auto;\n}\n\n.projectBtn img:nth-child(2) {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.projectBtn:hover img:nth-child(2) {\n    opacity: 1;\n}\n\n.selected {\n    background-color: #4d9cd1;\n}\n\n.bold {\n    font-weight: 600;\n}\n\n#sideBar h2 {\n    font-family: var(--sideBar-Header-Font);\n}\n\n\n\n/* CONTENT */\n\n#contentContainer {\n    background-color: #dcdcdc;\n    color: #333333;\n    width: 78%;\n    padding: 15px;\n}\n\n#content {\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n#content h2 {\n    font-family: var(--content-Font);\n    font-size: 2rem;\n}\n\n.addTask {\n    display: flex;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addTask button {\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addTask:hover {\n    background-color: #c6c6c6;\n}\n\n.addTask img {\n    width: 35px;\n    height: auto;\n}\n\n#content button {\n    font-family: var(--content-Font);\n}\n\n.taskForm {\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n.taskForm input {\n    height: 50px;\n    border: 1px solid #888888;\n    border-radius: 5px;\n    padding: 10px;\n    font-size: 1rem;\n}\n\n.taskForm input:focus {\n    outline: none;\n}\n\n.formBtns {\n    height: 50px;\n    justify-content: space-between;\n    gap: 25px;\n}\n\n.formBtns button {\n    height: 50px;\n    border-radius: 5px;\n    flex: 1;\n    pointer-events: auto;\n    cursor: pointer;\n}\n\n.addBtn {\n    background-color: #4caf50;\n    border: 1px solid #4caf50;\n}\n\n.addBtn:hover {\n    background-color: #66DE70;\n}\n\n.cancelBtn {\n    background-color: #ff5252;\n    border: 1px solid #ff5252;\n}\n\n.cancelBtn:hover {\n    background-color: #ff7575;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #4682b4;\n    color: ghostwhite;\n    font-family: var(--header1-Font);\n    padding: 5px;\n}\n\n#footerContent {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.2rem;\n}\n\n#footerImg {\n    width: 35px;\n    height: auto;\n}\n\n#footerImg:hover {\n    opacity: 0.5;\n}\n\n\n/* TASK STYLES */\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.task div:first-child p {\n    font-family: var(--content-Font);\n    font-size: 1.2rem;\n}\n\ninput[type="date"] {\n    appearance: none;\n    padding: 8px 12px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: #ffffff;\n    cursor: pointer;\n    color: black;\n    font-family: var(--content-Font);\n    font-weight: bold;\n    font-size: 1.05rem;\n}\n\ninput[type="date"]::-webkit-inner-spin-button,\ninput[type="date"]::-webkit-calender-picker-indicator {\n    display: none;\n}\n\ninput[type="date"]:focus {\n    outline: none;\n    border-color: #4d9cd1;\n}\n\ninput[type="date"]::placeholder {\n    color: black;\n}\n\n::placeholder {\n    color: black;\n}\n\n\n.checkBox {\n    width: 25px;\n    height: 25px;\n    border: 2px solid #333333;\n    border-radius: 50%;\n}\n\n.task img {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.task:hover img {\n    opacity: 1;\n}\n\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n    color: rgba(var(black), 1)!important;\n}\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n    color: rgba(var(black), 1)!important;\n}\n::-moz-placeholder { /* Mozilla Firefox 19+ */\n    color: rgba(var(black), 1)!important;\n}\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color: rgba(var(black), 1)!important;\n}\n::-ms-input-placeholder { /* Microsoft Edge */\n    color: rgba(var(black), 1)!important;\n}\n\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 800px) {\n    #menu {\n        display: block;\n    }\n\n    main {\n        flex-direction: column;\n        width: 100%;\n    }\n\n    #sideBar {\n        display: none;\n        width: 100%;\n        padding: 30px;\n    }\n\n    #contentContainer {\n        width: 100%;\n        padding: 30px;\n        min-height: 100vh;\n    }\n\n    #content {\n        width: 100%;\n        margin: 0;\n        \n    }\n\n    \n}\n\n@media screen and (max-width: 450px) {\n    h1 {\n        font-size: 2rem;\n    }\n\n    #headerContent img {\n        width: 55px;\n        height: auto;\n    }\n\n    input[type="date"] {\n        width: 125px;\n        height: 25px;\n        font-size: 0.9rem;\n    }\n\n    .task {\n        height: 75px;\n    }\n\n    .task div:first-child p {\n        font-size: 1rem;\n        margin: 0;\n    }\n\n    .checkBox {\n        width: 22px;\n        height: 22px;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    #sideBar {\n        display: block!important;\n    }\n}',""]);const D=b},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&s[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},s=[],i=0;i<e.length;i++){var l=e[i],d=o.base?l[0]+o.base:l[0],c=r[d]||0,u="".concat(d," ").concat(c);r[d]=c+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=t(r[s]);n[i].references--}for(var l=o(e,a),d=0;d<r.length;d++){var c=t(r[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},178:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-regular-webfont.woff"},122:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-regular-webfont.woff2"},9:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-thin-webfont.woff"},59:(e,n,t)=>{e.exports=t.p+"assets/fonts/lato-thin-webfont.woff2"},875:(e,n,t)=>{e.exports=t.p+"assets/fonts/montserrat-medium-webfont.woff"},94:(e,n,t)=>{e.exports=t.p+"assets/fonts/montserrat-medium-webfont.woff2"},414:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-regular-webfont.woff"},126:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-regular-webfont.woff2"},496:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-semibold-webfont.woff"},524:(e,n,t)=>{e.exports=t.p+"assets/fonts/raleway-semibold-webfont.woff2"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),s=t.n(r),i=t(565),l=t.n(i),d=t(216),c=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,Math.pow(10,8);var y=36e5;function g(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function h(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}var v={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},b=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,x=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,w=/^([+-])(\d{2})(?::?(\d{2}))?$/;function k(e){return e?parseInt(e):1}function C(e){return e&&parseFloat(e.replace(",","."))||0}var E=[31,null,31,30,31,30,31,31,30,31,30,31];function L(e){return e%400==0||e%4==0&&e%100!=0}function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function B(e){g(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===S(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function T(e){g(1,arguments);var n=B(e);return n.setHours(0,0,0,0),n}var N={};function D(){return N}function A(e,n){var t,o,a,r,s,i,l,d;g(1,arguments);var c=D(),u=h(null!==(t=null!==(o=null!==(a=null!==(r=null==n?void 0:n.weekStartsOn)&&void 0!==r?r:null==n||null===(s=n.locale)||void 0===s||null===(i=s.options)||void 0===i?void 0:i.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==o?o:null===(l=c.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==t?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=B(e),f=p.getDay(),m=(f<u?7:0)+f-u;return p.setDate(p.getDate()-m),p.setHours(0,0,0,0),p}class j{constructor(e,n){this.name=e,this.projectId=n}}class I{constructor(e){this.name=e}}class F{constructor(e,n,t){this.name=e,this.dueDate=n,this.isComplete=t}toggleComplete(){(0==isComplete||1==isComplete)&&isComplete}}const U=t.p+"assets/images/logo.svg",z=t.p+"assets/images/inbox.svg",M=t.p+"assets/images/today.svg",_=t.p+"assets/images/thisweek.svg",q=t.p+"assets/images/add.svg",R=t.p+"assets/images/github.svg",O=t.p+"assets/images/checklist.svg",P=t.p+"assets/images/trash.svg",Z=t.p+"assets/images/menu.svg",$=(document.querySelector("main"),document.getElementById("content")),H=document.getElementById("contentHeader"),Y=document.getElementById("sideBar"),W=document.getElementById("logo"),G=document.getElementById("menu"),K=document.getElementById("contentImg"),Q=document.getElementById("footerImg"),J=document.getElementById("addTask");document.querySelectorAll(".deleteProject");let V=[],X=[],ee="",ne="";function te(){return document.querySelectorAll(".navBtn")}se();let oe=te();function ae(){return document.querySelectorAll(".projectBtn")}let re=ae();function se(){let e=new I("taskList");const n=document.createElement("div");n.setAttribute("id",e.name),$.insertBefore(n,J)}document.querySelectorAll(".deleteProject"),document.querySelectorAll(".deleteTask"),W.setAttribute("src",U),G.setAttribute("src",Z),K.setAttribute("src",q),Q.setAttribute("src",R);const ie=document.getElementsByClassName("navImg"),le=Array.from(ie),de=[z,M,_,q];function ce(){oe.forEach((e=>{e.addEventListener("click",(()=>{oe.forEach((e=>{e.classList.remove("selected"),e.querySelector("button").classList.remove("bold")})),e.classList.add("selected"),e.querySelector("button").classList.add("bold"),"inbox"==e.getAttribute("id")?(H.textContent="Inbox",H.style.display="initial",he.style.display="none",ge.style.display="flex",J.style.display="flex",function(){for(let e=0;e<X.length;e++)X[e].classList.contains("task_inbox")?X[e].style.display="flex":X[e].style.display="none"}()):"today"==e.getAttribute("id")?(H.textContent="Today",H.style.display="initial",J.style.display="none",ue.style.display="none",he.style.display="none",ge.style.display="flex",fe.value="",function(){for(let e=0;e<X.length;e++)X[e].classList.contains("task_today")?X[e].style.display="flex":X[e].style.display="none"}()):"thisweek"==e.getAttribute("id")?(H.textContent="This Week",H.style.display="initial",J.style.display="none",ue.style.display="none",he.style.display="none",ge.style.display="flex",fe.value="",function(){for(let e=0;e<X.length;e++)X[e].classList.contains("task_thisweek")||X[e].classList.contains("task_today")?X[e].style.display="flex":X[e].style.display="none"}()):e.classList.contains("projectBtn")&&(H.textContent=e.querySelector("button").textContent,oe=te(),re=ae(),re.forEach((e=>{if(e.classList.contains("selected"))for(let n=0;n<X.length;n++)X[n].classList.contains("task_"+e.id)?X[n].style.display="flex":X[n].style.display="none"})),e.classList.contains("delete")?(J.style.display="none",H.style.display="none"):(H.style.display="initial",J.style.display="flex"))}))}))}le.forEach(((e,n)=>{e.setAttribute("src",de[n])})),ce();const ue=document.createElement("div"),pe=document.createElement("div"),fe=document.createElement("input"),me=document.createElement("button"),ye=document.createElement("button");ue.classList.add("taskForm"),ue.style.display="none",fe.setAttribute("type","text"),fe.style.display="none",pe.classList.add("formBtns"),pe.style.display="none",me.classList.add("addBtn"),me.textContent="Add",ye.classList.add("cancelBtn"),ye.textContent="Cancel",ue.appendChild(fe),pe.appendChild(me),pe.appendChild(ye),ue.appendChild(pe),$.appendChild(ue),J.addEventListener("click",(()=>{J.style.display="none",ue.style.display="flex",fe.style.display="initial",pe.style.display="flex"}));const ge=document.getElementById("addProject"),he=document.createElement("div"),ve=document.createElement("div"),be=document.createElement("input"),xe=document.createElement("button"),we=document.createElement("button");he.classList.add("taskForm"),he.style.display="none",be.setAttribute("type","text"),be.style.display="none",ve.classList.add("formBtns"),ve.style.display="none",xe.classList.add("addBtn"),xe.textContent="Add",we.classList.add("cancelBtn"),we.textContent="Cancel",he.appendChild(be),ve.appendChild(xe),ve.appendChild(we),he.appendChild(ve),Y.appendChild(he),ge.addEventListener("click",(()=>{ge.style.display="none",he.style.display="flex",be.style.display="initial",ve.style.display="flex",be.value=""})),me.addEventListener("click",(()=>{!function(){if(""===fe.value)alert("Must enter a task.");else{ue.style.display="none",J.style.display="flex";const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("span"),a=document.createElement("p"),r=document.createElement("input"),s=document.createElement("img");e.classList.add("addTask","task"),o.classList.add("checkBox"),a.textContent=fe.value,r.setAttribute("type","date"),s.setAttribute("src",P),s.setAttribute("class","deleteTask"),document.querySelector("#taskList").appendChild(e),e.appendChild(n),e.appendChild(t),n.appendChild(o),n.appendChild(a),t.appendChild(r),t.appendChild(s),fe.value="",document.querySelector("#inbox").classList.contains("selected")?(e.classList.add("task_inbox"),a.textContent+=" (inbox)"):(re=ae(),re.forEach((n=>{n.classList.contains("selected")&&(console.log("hello"),ee=n.getAttribute("id"),e.classList.add("task_"+ee),a.textContent+=` (${ee})`)})));let i=new F(a.textContent,void 0,!1);function l(){let n=function(e,n){var t;g(1,arguments);var o=h(null!==(t=null==n?void 0:n.additionalDigits)&&void 0!==t?t:2);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,r=function(e){var n,t={},o=e.split(v.dateTimeDelimiter);if(o.length>2)return t;if(/:/.test(o[0])?n=o[0]:(t.date=o[0],n=o[1],v.timeZoneDelimiter.test(t.date)&&(t.date=e.split(v.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var a=v.timezone.exec(n);a?(t.time=n.replace(a[1],""),t.timezone=a[1]):t.time=n}return t}(e);if(r.date){var s=function(e,n){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),o=e.match(t);if(!o)return{year:NaN,restDateString:""};var a=o[1]?parseInt(o[1]):null,r=o[2]?parseInt(o[2]):null;return{year:null===r?a:100*r,restDateString:e.slice((o[1]||o[2]).length)}}(r.date,o);a=function(e,n){if(null===n)return new Date(NaN);var t=e.match(b);if(!t)return new Date(NaN);var o=!!t[4],a=k(t[1]),r=k(t[2])-1,s=k(t[3]),i=k(t[4]),l=k(t[5])-1;if(o)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,i,l)?function(e,n,t){var o=new Date(0);o.setUTCFullYear(e,0,4);var a=7*(n-1)+t+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+a),o}(n,i,l):new Date(NaN);var d=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(E[n]||(L(e)?29:28))}(n,r,s)&&function(e,n){return n>=1&&n<=(L(e)?366:365)}(n,a)?(d.setUTCFullYear(n,r,Math.max(a,s)),d):new Date(NaN)}(s.restDateString,s.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var i,l=a.getTime(),d=0;if(r.time&&(d=function(e){var n=e.match(x);if(!n)return NaN;var t=C(n[1]),o=C(n[2]),a=C(n[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(t,o,a)?t*y+6e4*o+1e3*a:NaN}(r.time),isNaN(d)))return new Date(NaN);if(!r.timezone){var c=new Date(l+d),u=new Date(0);return u.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),u.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),u}return i=function(e){if("Z"===e)return 0;var n=e.match(w);if(!n)return 0;var t="+"===n[1]?-1:1,o=parseInt(n[2]),a=n[3]&&parseInt(n[3])||0;return function(e,n){return n>=0&&n<=59}(0,a)?t*(o*y+6e4*a):NaN}(r.timezone),isNaN(i)?new Date(NaN):new Date(l+d+i)}(i.dueDate),t=function(e){return g(1,arguments),function(e,n){g(2,arguments);var t=T(e),o=T(n);return t.getTime()===o.getTime()}(e,Date.now())}(n),o=function(e,n){return g(1,arguments),function(e,n,t){g(2,arguments);var o=A(e,t),a=A(n,t);return o.getTime()===a.getTime()}(e,Date.now(),n)}(n);1==t?(e.classList.add("task_today"),e.classList.add("task_thisweek"),document.querySelector("#taskList").appendChild(e)):1==o?(e.classList.remove("task_today"),e.classList.contains("task_thisweek")||e.classList.add("task_thisweek"),document.querySelector("#taskList").appendChild(e)):(e.classList.remove("task_today"),e.classList.remove("task_thisweek"),document.querySelector("#taskList").appendChild(e))}V.push(i),X.push(e),console.log(X),console.log(V),r.addEventListener("change",(()=>{ne=r.value,i.dueDate=ne,console.log(X),console.log(V),l()})),o.addEventListener("click",(()=>{0==i.isComplete?(i.isComplete=!0,o.style.backgroundColor="rgb(76, 175, 80)",console.log(i)):(i.isComplete=!1,o.style.backgroundColor="transparent",console.log(i))})),s.addEventListener("click",(n=>{for(let n=0;n<X.length;n++)V[n].name==a.textContent&&(V.splice(n,1),console.log(V)),e.remove()}))}}()})),ye.addEventListener("click",(()=>{fe.value="",ue.style.display="none",J.style.display="flex"})),we.addEventListener("click",(()=>{be.value="",he.style.display="none",ge.style.display="flex",ge.classList.remove("selected"),ge.querySelector("button").classList.remove("bold")})),xe.addEventListener("click",(()=>{!function(){if(""===be.value)alert("You must name your project.");else{let e=new j(be.value,be.value);const n=document.createElement("div");n.classList.add("navBtn","projectBtn");const t=document.createElement("div"),o=document.createElement("img");o.setAttribute("src",O);const a=document.createElement("button");a.textContent=e.name;const r=document.createElement("img");r.setAttribute("class","deleteProject"),r.setAttribute("src",P),n.appendChild(t),n.appendChild(r),t.appendChild(o),t.appendChild(a),he.style.display="none",Y.insertBefore(n,ge),ge.style.display="flex",ge.classList.remove("selected"),ge.querySelector("button").classList.remove("bold"),oe=te(),ce(),n.setAttribute("id",e.projectId),se(e.projectId),r.addEventListener("click",(()=>{n.classList.add("delete"),n.remove()}))}}()}));let ke=window.getComputedStyle(Y);G.addEventListener("click",(()=>{"none"==ke.display?Y.style.display="block":Y.style.display="none"}))})()})();