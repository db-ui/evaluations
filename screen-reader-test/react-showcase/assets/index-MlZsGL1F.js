function Kd(t,e){for(var n=0;n<e.length;n++){const a=e[n];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in t)){const r=Object.getOwnPropertyDescriptor(a,l);r&&Object.defineProperty(t,l,r.get?r:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function Xd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iu={exports:{}},Ul={},ou={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),qd=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),em=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),rm=Symbol.for("react.lazy"),Uo=Symbol.iterator;function im(t){return t===null||typeof t!="object"?null:(t=Uo&&t[Uo]||t["@@iterator"],typeof t=="function"?t:null)}var su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uu=Object.assign,cu={};function _n(t,e,n){this.props=t,this.context=e,this.refs=cu,this.updater=n||su}_n.prototype.isReactComponent={};_n.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_n.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function du(){}du.prototype=_n.prototype;function Fi(t,e,n){this.props=t,this.context=e,this.refs=cu,this.updater=n||su}var zi=Fi.prototype=new du;zi.constructor=Fi;uu(zi,_n.prototype);zi.isPureReactComponent=!0;var Oo=Array.isArray,mu=Object.prototype.hasOwnProperty,Mi={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function pu(t,e,n){var a,l={},r=null,i=null;if(e!=null)for(a in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(r=""+e.key),e)mu.call(e,a)&&!fu.hasOwnProperty(a)&&(l[a]=e[a]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(t&&t.defaultProps)for(a in s=t.defaultProps,s)l[a]===void 0&&(l[a]=s[a]);return{$$typeof:Sa,type:t,key:r,ref:i,props:l,_owner:Mi.current}}function om(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ui(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function sm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vo=/\/+/g;function dr(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sm(""+t.key):e.toString(36)}function Ya(t,e,n,a,l){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case Sa:case Yd:i=!0}}if(i)return i=t,l=l(i),t=a===""?"."+dr(i,0):a,Oo(l)?(n="",t!=null&&(n=t.replace(Vo,"$&/")+"/"),Ya(l,e,n,"",function(c){return c})):l!=null&&(Ui(l)&&(l=om(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Vo,"$&/")+"/")+t)),e.push(l)),1;if(i=0,a=a===""?".":a+":",Oo(t))for(var s=0;s<t.length;s++){r=t[s];var u=a+dr(r,s);i+=Ya(r,e,n,u,l)}else if(u=im(t),typeof u=="function")for(t=u.call(t),s=0;!(r=t.next()).done;)r=r.value,u=a+dr(r,s++),i+=Ya(r,e,n,u,l);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function _a(t,e,n){if(t==null)return t;var a=[],l=0;return Ya(t,a,"","",function(r){return e.call(n,r,l++)}),a}function um(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},qa={transition:null},cm={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:Mi};j.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Ui(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=_n;j.Fragment=qd;j.Profiler=Zd;j.PureComponent=Fi;j.StrictMode=Jd;j.Suspense=am;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var a=uu({},t.props),l=t.key,r=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,i=Mi.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(u in e)mu.call(e,u)&&!fu.hasOwnProperty(u)&&(a[u]=e[u]===void 0&&s!==void 0?s[u]:e[u])}var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:Sa,type:t.type,key:l,ref:r,props:a,_owner:i}};j.createContext=function(t){return t={$$typeof:em,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tm,_context:t},t.Consumer=t};j.createElement=pu;j.createFactory=function(t){var e=pu.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:nm,render:t}};j.isValidElement=Ui;j.lazy=function(t){return{$$typeof:rm,_payload:{_status:-1,_result:t},_init:um}};j.memo=function(t,e){return{$$typeof:lm,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return yt.current.useCallback(t,e)};j.useContext=function(t){return yt.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};j.useEffect=function(t,e){return yt.current.useEffect(t,e)};j.useId=function(){return yt.current.useId()};j.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return yt.current.useMemo(t,e)};j.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};j.useRef=function(t){return yt.current.useRef(t)};j.useState=function(t){return yt.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return yt.current.useTransition()};j.version="18.2.0";ou.exports=j;var d=ou.exports;const bu=Xd(d),dm=Kd({__proto__:null,default:bu},[d]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=d,fm=Symbol.for("react.element"),pm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,hm=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function hu(t,e,n){var a,l={},r=null,i=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(i=e.ref);for(a in e)bm.call(e,a)&&!vm.hasOwnProperty(a)&&(l[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)l[a]===void 0&&(l[a]=e[a]);return{$$typeof:fm,type:t,key:r,ref:i,props:l,_owner:hm.current}}Ul.Fragment=pm;Ul.jsx=hu;Ul.jsxs=hu;iu.exports=Ul;var o=iu.exports,Mr={},vu={exports:{}},Et={},gu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,E){var _=k.length;k.push(E);t:for(;0<_;){var Y=_-1>>>1,lt=k[Y];if(0<l(lt,E))k[Y]=E,k[_]=lt,_=Y;else break t}}function n(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var E=k[0],_=k.pop();if(_!==E){k[0]=_;t:for(var Y=0,lt=k.length,Ea=lt>>>1;Y<Ea;){var ze=2*(Y+1)-1,cr=k[ze],Me=ze+1,La=k[Me];if(0>l(cr,_))Me<lt&&0>l(La,cr)?(k[Y]=La,k[Me]=_,Y=Me):(k[Y]=cr,k[ze]=_,Y=ze);else if(Me<lt&&0>l(La,_))k[Y]=La,k[Me]=_,Y=Me;else break t}}return E}function l(k,E){var _=k.sortIndex-E.sortIndex;return _!==0?_:k.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],f=1,h=null,b=3,g=!1,T=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var E=n(c);E!==null;){if(E.callback===null)a(c);else if(E.startTime<=k)a(c),E.sortIndex=E.expirationTime,e(u,E);else break;E=n(c)}}function D(k){if(y=!1,v(k),!T)if(n(u)!==null)T=!0,sr(w);else{var E=n(c);E!==null&&ur(D,E.startTime-k)}}function w(k,E){T=!1,y&&(y=!1,p(x),x=-1),g=!0;var _=b;try{for(v(E),h=n(u);h!==null&&(!(h.expirationTime>E)||k&&!bt());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,b=h.priorityLevel;var lt=Y(h.expirationTime<=E);E=t.unstable_now(),typeof lt=="function"?h.callback=lt:h===n(u)&&a(u),v(E)}else a(u);h=n(u)}if(h!==null)var Ea=!0;else{var ze=n(c);ze!==null&&ur(D,ze.startTime-E),Ea=!1}return Ea}finally{h=null,b=_,g=!1}}var S=!1,B=null,x=-1,L=5,P=-1;function bt(){return!(t.unstable_now()-P<L)}function Mt(){if(B!==null){var k=t.unstable_now();P=k;var E=!0;try{E=B(!0,k)}finally{E?Kt():(S=!1,B=null)}}else S=!1}var Kt;if(typeof m=="function")Kt=function(){m(Mt)};else if(typeof MessageChannel<"u"){var Pa=new MessageChannel,Qd=Pa.port2;Pa.port1.onmessage=Mt,Kt=function(){Qd.postMessage(null)}}else Kt=function(){I(Mt,0)};function sr(k){B=k,S||(S=!0,Kt())}function ur(k,E){x=I(function(){k(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,sr(w))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(k){switch(b){case 1:case 2:case 3:var E=3;break;default:E=b}var _=b;b=E;try{return k()}finally{b=_}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,E){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var _=b;b=k;try{return E()}finally{b=_}},t.unstable_scheduleCallback=function(k,E,_){var Y=t.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Y+_:Y):_=Y,k){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=_+lt,k={id:f++,callback:E,priorityLevel:k,startTime:_,expirationTime:lt,sortIndex:-1},_>Y?(k.sortIndex=_,e(c,k),n(u)===null&&k===n(c)&&(y?(p(x),x=-1):y=!0,ur(D,_-Y))):(k.sortIndex=lt,e(u,k),T||g||(T=!0,sr(w))),k},t.unstable_shouldYield=bt,t.unstable_wrapCallback=function(k){var E=b;return function(){var _=b;b=E;try{return k.apply(this,arguments)}finally{b=_}}}})(yu);gu.exports=yu;var gm=gu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=d,Pt=gm;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xu=new Set,ra={};function en(t,e){In(t,e),In(t+"Capture",e)}function In(t,e){for(ra[t]=e,t=0;t<e.length;t++)xu.add(e[t])}var ie=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ur=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$o={},Wo={};function Dm(t){return Ur.call(Wo,t)?!0:Ur.call($o,t)?!1:ym.test(t)?Wo[t]=!0:($o[t]=!0,!1)}function xm(t,e,n,a){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tm(t,e,n,a){if(e===null||typeof e>"u"||xm(t,e,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,a,l,r,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=i}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oi=/[\-:]([a-z])/g;function Vi(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oi,Vi);ut[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oi,Vi);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oi,Vi);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $i(t,e,n,a){var l=ut.hasOwnProperty(e)?ut[e]:null;(l!==null?l.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tm(e,n,l,a)&&(n=null),a||l===null?Dm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):l.mustUseProperty?t[l.propertyName]=n===null?l.type===3?!1:"":n:(e=l.attributeName,a=l.attributeNamespace,n===null?t.removeAttribute(e):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?t.setAttributeNS(a,e,n):t.setAttribute(e,n))))}var ce=Du.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),on=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Or=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),Hi=Symbol.for("react.forward_ref"),Vr=Symbol.for("react.suspense"),$r=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),wu=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function Fn(t){return t===null||typeof t!="object"?null:(t=Ho&&t[Ho]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,mr;function Hn(t){if(mr===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mr=e&&e[1]||""}return`
`+mr+t}var fr=!1;function pr(t,e){if(!t||fr)return"";fr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var a=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){a=c}t.call(e.prototype)}else{try{throw Error()}catch(c){a=c}t()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),r=a.stack.split(`
`),i=l.length-1,s=r.length-1;1<=i&&0<=s&&l[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==r[s]){var u=`
`+l[i].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=i&&0<=s);break}}}finally{fr=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hn(t):""}function Bm(t){switch(t.tag){case 5:return Hn(t.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return t=pr(t.type,!1),t;case 11:return t=pr(t.type.render,!1),t;case 1:return t=pr(t.type,!0),t;default:return""}}function Wr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sn:return"Fragment";case on:return"Portal";case Or:return"Profiler";case Wi:return"StrictMode";case Vr:return"Suspense";case $r:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bu:return(t.displayName||"Context")+".Consumer";case Tu:return(t._context.displayName||"Context")+".Provider";case Hi:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gi:return e=t.displayName||null,e!==null?e:Wr(t.type)||"Memo";case fe:e=t._payload,t=t._init;try{return Wr(t(e))}catch{}}return null}function wm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wr(e);case 8:return e===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ke(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Su(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sm(t){var e=Su(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Sm(t))}function Iu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Su(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hr(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Go(t,e){var n=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;n=ke(e.value!=null?e.value:n),t._wrapperState={initialChecked:a,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cu(t,e){e=e.checked,e!=null&&$i(t,"checked",e,!1)}function Gr(t,e){Cu(t,e);var n=ke(e.value),a=e.type;if(n!=null)a==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qr(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qr(t,e.type,ke(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qo(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qr(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gn=Array.isArray;function yn(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ke(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Kr(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ko(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Gn(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ke(n)}}function Nu(t,e){var n=ke(e.value),a=ke(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),a!=null&&(t.defaultValue=""+a)}function Xo(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ku(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xr(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ku(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,Pu=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,a,l){MSApp.execUnsafeLocalFunction(function(){return t(e,n,a,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(t){Im.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yn[e]=Yn[t]})});function Eu(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yn.hasOwnProperty(t)&&Yn[t]?(""+e).trim():e+"px"}function Lu(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=Eu(n,e[n],a);n==="float"&&(n="cssFloat"),a?t.setProperty(n,l):t[n]=l}}var Cm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yr(t,e){if(e){if(Cm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function qr(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jr=null;function Qi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,Dn=null,xn=null;function Yo(t){if(t=Na(t)){if(typeof Zr!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Hl(e),Zr(t.stateNode,t.type,e))}}function _u(t){Dn?xn?xn.push(t):xn=[t]:Dn=t}function ju(){if(Dn){var t=Dn,e=xn;if(xn=Dn=null,Yo(t),e)for(t=0;t<e.length;t++)Yo(e[t])}}function Ru(t,e){return t(e)}function Au(){}var br=!1;function Fu(t,e,n){if(br)return t(e,n);br=!0;try{return Ru(t,e,n)}finally{br=!1,(Dn!==null||xn!==null)&&(Au(),ju())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var a=Hl(n);if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ti=!1;if(ie)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){ti=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{ti=!1}function Nm(t,e,n,a,l,r,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var qn=!1,dl=null,ml=!1,ei=null,km={onError:function(t){qn=!0,dl=t}};function Pm(t,e,n,a,l,r,i,s,u){qn=!1,dl=null,Nm.apply(km,arguments)}function Em(t,e,n,a,l,r,i,s,u){if(Pm.apply(this,arguments),qn){if(qn){var c=dl;qn=!1,dl=null}else throw Error(C(198));ml||(ml=!0,ei=c)}}function nn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qo(t){if(nn(t)!==t)throw Error(C(188))}function Lm(t){var e=t.alternate;if(!e){if(e=nn(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return qo(l),t;if(r===a)return qo(l),e;r=r.sibling}throw Error(C(188))}if(n.return!==a.return)n=l,a=r;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,a=r;break}if(s===a){i=!0,a=l,n=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===n){i=!0,n=r,a=l;break}if(s===a){i=!0,a=r,n=l;break}s=s.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==a)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Mu(t){return t=Lm(t),t!==null?Uu(t):null}function Uu(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uu(t);if(e!==null)return e;t=t.sibling}return null}var Ou=Pt.unstable_scheduleCallback,Jo=Pt.unstable_cancelCallback,_m=Pt.unstable_shouldYield,jm=Pt.unstable_requestPaint,q=Pt.unstable_now,Rm=Pt.unstable_getCurrentPriorityLevel,Ki=Pt.unstable_ImmediatePriority,Vu=Pt.unstable_UserBlockingPriority,fl=Pt.unstable_NormalPriority,Am=Pt.unstable_LowPriority,$u=Pt.unstable_IdlePriority,Ol=null,Zt=null;function Fm(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Um,zm=Math.log,Mm=Math.LN2;function Um(t){return t>>>=0,t===0?32:31-(zm(t)/Mm|0)|0}var Fa=64,za=4194304;function Qn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var a=0,l=t.suspendedLanes,r=t.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?a=Qn(s):(r&=i,r!==0&&(a=Qn(r)))}else i=n&~l,i!==0?a=Qn(i):r!==0&&(a=Qn(r));if(a===0)return 0;if(e!==0&&e!==a&&!(e&l)&&(l=a&-a,r=e&-e,l>=r||l===16&&(r&4194240)!==0))return e;if(a&4&&(a|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=a;0<e;)n=31-Ht(e),l=1<<n,a|=t[n],e&=~l;return a}function Om(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,r=t.pendingLanes;0<r;){var i=31-Ht(r),s=1<<i,u=l[i];u===-1?(!(s&n)||s&a)&&(l[i]=Om(s,e)):u<=e&&(t.expiredLanes|=s),r&=~s}}function ni(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wu(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function hr(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function $m(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<n;){var l=31-Ht(n),r=1<<l;e[l]=0,a[l]=-1,t[l]=-1,n&=~r}}function Xi(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-Ht(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}var F=0;function Hu(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gu,Yi,Qu,Ku,Xu,ai=!1,Ma=[],De=null,xe=null,Te=null,sa=new Map,ua=new Map,be=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(t,e){switch(t){case"focusin":case"focusout":De=null;break;case"dragenter":case"dragleave":xe=null;break;case"mouseover":case"mouseout":Te=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Mn(t,e,n,a,l,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=Na(e),e!==null&&Yi(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Hm(t,e,n,a,l){switch(e){case"focusin":return De=Mn(De,t,e,n,a,l),!0;case"dragenter":return xe=Mn(xe,t,e,n,a,l),!0;case"mouseover":return Te=Mn(Te,t,e,n,a,l),!0;case"pointerover":var r=l.pointerId;return sa.set(r,Mn(sa.get(r)||null,t,e,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,ua.set(r,Mn(ua.get(r)||null,t,e,n,a,l)),!0}return!1}function Yu(t){var e=He(t.target);if(e!==null){var n=nn(e);if(n!==null){if(e=n.tag,e===13){if(e=zu(n),e!==null){t.blockedOn=e,Xu(t.priority,function(){Qu(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=li(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Jr=a,n.target.dispatchEvent(a),Jr=null}else return e=Na(n),e!==null&&Yi(e),t.blockedOn=n,!1;e.shift()}return!0}function ts(t,e,n){Ja(t)&&n.delete(e)}function Gm(){ai=!1,De!==null&&Ja(De)&&(De=null),xe!==null&&Ja(xe)&&(xe=null),Te!==null&&Ja(Te)&&(Te=null),sa.forEach(ts),ua.forEach(ts)}function Un(t,e){t.blockedOn===e&&(t.blockedOn=null,ai||(ai=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Gm)))}function ca(t){function e(l){return Un(l,t)}if(0<Ma.length){Un(Ma[0],t);for(var n=1;n<Ma.length;n++){var a=Ma[n];a.blockedOn===t&&(a.blockedOn=null)}}for(De!==null&&Un(De,t),xe!==null&&Un(xe,t),Te!==null&&Un(Te,t),sa.forEach(e),ua.forEach(e),n=0;n<be.length;n++)a=be[n],a.blockedOn===t&&(a.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Yu(n),n.blockedOn===null&&be.shift()}var Tn=ce.ReactCurrentBatchConfig,bl=!0;function Qm(t,e,n,a){var l=F,r=Tn.transition;Tn.transition=null;try{F=1,qi(t,e,n,a)}finally{F=l,Tn.transition=r}}function Km(t,e,n,a){var l=F,r=Tn.transition;Tn.transition=null;try{F=4,qi(t,e,n,a)}finally{F=l,Tn.transition=r}}function qi(t,e,n,a){if(bl){var l=li(t,e,n,a);if(l===null)Ir(t,e,a,hl,n),Zo(t,a);else if(Hm(l,t,e,n,a))a.stopPropagation();else if(Zo(t,a),e&4&&-1<Wm.indexOf(t)){for(;l!==null;){var r=Na(l);if(r!==null&&Gu(r),r=li(t,e,n,a),r===null&&Ir(t,e,a,hl,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Ir(t,e,a,null,n)}}var hl=null;function li(t,e,n,a){if(hl=null,t=Qi(a),t=He(t),t!==null)if(e=nn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zu(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function qu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Ki:return 1;case Vu:return 4;case fl:case Am:return 16;case $u:return 536870912;default:return 16}default:return 16}}var ve=null,Ji=null,Za=null;function Ju(){if(Za)return Za;var t,e=Ji,n=e.length,a,l="value"in ve?ve.value:ve.textContent,r=l.length;for(t=0;t<n&&e[t]===l[t];t++);var i=n-t;for(a=1;a<=i&&e[n-a]===l[r-a];a++);return Za=l.slice(t,1<a?1-a:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function es(){return!1}function Lt(t){function e(n,a,l,r,i){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ua:es,this.isPropagationStopped=es,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Lt(jn),Ca=K({},jn,{view:0,detail:0}),Xm=Lt(Ca),vr,gr,On,Vl=K({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==On&&(On&&t.type==="mousemove"?(vr=t.screenX-On.screenX,gr=t.screenY-On.screenY):gr=vr=0,On=t),vr)},movementY:function(t){return"movementY"in t?t.movementY:gr}}),ns=Lt(Vl),Ym=K({},Vl,{dataTransfer:0}),qm=Lt(Ym),Jm=K({},Ca,{relatedTarget:0}),yr=Lt(Jm),Zm=K({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=Lt(Zm),ef=K({},jn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nf=Lt(ef),af=K({},jn,{data:0}),as=Lt(af),lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=of[t])?!!e[t]:!1}function to(){return sf}var uf=K({},Ca,{key:function(t){if(t.key){var e=lf[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cf=Lt(uf),df=K({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=Lt(df),mf=K({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),ff=Lt(mf),pf=K({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bf=Lt(pf),hf=K({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vf=Lt(hf),gf=[9,13,27,32],eo=ie&&"CompositionEvent"in window,Jn=null;ie&&"documentMode"in document&&(Jn=document.documentMode);var yf=ie&&"TextEvent"in window&&!Jn,Zu=ie&&(!eo||Jn&&8<Jn&&11>=Jn),rs=" ",is=!1;function tc(t,e){switch(t){case"keyup":return gf.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var un=!1;function Df(t,e){switch(t){case"compositionend":return ec(e);case"keypress":return e.which!==32?null:(is=!0,rs);case"textInput":return t=e.data,t===rs&&is?null:t;default:return null}}function xf(t,e){if(un)return t==="compositionend"||!eo&&tc(t,e)?(t=Ju(),Za=Ji=ve=null,un=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zu&&e.locale!=="ko"?null:e.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tf[t.type]:e==="textarea"}function nc(t,e,n,a){_u(a),e=vl(e,"onChange"),0<e.length&&(n=new Zi("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Zn=null,da=null;function Bf(t){fc(t,0)}function $l(t){var e=mn(t);if(Iu(e))return t}function wf(t,e){if(t==="change")return e}var ac=!1;if(ie){var Dr;if(ie){var xr="oninput"in document;if(!xr){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),xr=typeof ss.oninput=="function"}Dr=xr}else Dr=!1;ac=Dr&&(!document.documentMode||9<document.documentMode)}function us(){Zn&&(Zn.detachEvent("onpropertychange",lc),da=Zn=null)}function lc(t){if(t.propertyName==="value"&&$l(da)){var e=[];nc(e,da,t,Qi(t)),Fu(Bf,e)}}function Sf(t,e,n){t==="focusin"?(us(),Zn=e,da=n,Zn.attachEvent("onpropertychange",lc)):t==="focusout"&&us()}function If(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(da)}function Cf(t,e){if(t==="click")return $l(e)}function Nf(t,e){if(t==="input"||t==="change")return $l(e)}function kf(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:kf;function ma(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Ur.call(e,l)||!Qt(t[l],e[l]))return!1}return!0}function cs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ds(t,e){var n=cs(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=cs(n)}}function rc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ic(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function no(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Pf(t){var e=ic(),n=t.focusedElem,a=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(a!==null&&no(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,r=Math.min(a.start,l);a=a.end===void 0?r:Math.min(a.end,l),!t.extend&&r>a&&(l=a,a=r,r=l),l=ds(n,r);var i=ds(n,a);l&&i&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),r>a?(t.addRange(e),t.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ef=ie&&"documentMode"in document&&11>=document.documentMode,cn=null,ri=null,ta=null,ii=!1;function ms(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ii||cn==null||cn!==cl(a)||(a=cn,"selectionStart"in a&&no(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ta&&ma(ta,a)||(ta=a,a=vl(ri,"onSelect"),0<a.length&&(e=new Zi("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=cn)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dn={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Tr={},oc={};ie&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Wl(t){if(Tr[t])return Tr[t];if(!dn[t])return t;var e=dn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in oc)return Tr[t]=e[n];return t}var sc=Wl("animationend"),uc=Wl("animationiteration"),cc=Wl("animationstart"),dc=Wl("transitionend"),mc=new Map,fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function je(t,e){mc.set(t,e),en(e,[t])}for(var Br=0;Br<fs.length;Br++){var wr=fs[Br],Lf=wr.toLowerCase(),_f=wr[0].toUpperCase()+wr.slice(1);je(Lf,"on"+_f)}je(sc,"onAnimationEnd");je(uc,"onAnimationIteration");je(cc,"onAnimationStart");je("dblclick","onDoubleClick");je("focusin","onFocus");je("focusout","onBlur");je(dc,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function ps(t,e,n){var a=t.type||"unknown-event";t.currentTarget=n,Em(a,e,void 0,t),t.currentTarget=null}function fc(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var i=a.length-1;0<=i;i--){var s=a[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==r&&l.isPropagationStopped())break t;ps(l,s,c),r=u}else for(i=0;i<a.length;i++){if(s=a[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==r&&l.isPropagationStopped())break t;ps(l,s,c),r=u}}}if(ml)throw t=ei,ml=!1,ei=null,t}function O(t,e){var n=e[di];n===void 0&&(n=e[di]=new Set);var a=t+"__bubble";n.has(a)||(pc(e,t,2,!1),n.add(a))}function Sr(t,e,n){var a=0;e&&(a|=4),pc(n,t,a,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Va]){t[Va]=!0,xu.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Sr(n,!1,t),Sr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Sr("selectionchange",!1,e))}}function pc(t,e,n,a){switch(qu(e)){case 1:var l=Qm;break;case 4:l=Km;break;default:l=qi}n=l.bind(null,e,n,t),l=void 0,!ti||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function Ir(t,e,n,a,l){var r=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=a.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=He(s),i===null)return;if(u=i.tag,u===5||u===6){a=r=i;continue t}s=s.parentNode}}a=a.return}Fu(function(){var c=r,f=Qi(n),h=[];t:{var b=mc.get(t);if(b!==void 0){var g=Zi,T=t;switch(t){case"keypress":if(tl(n)===0)break t;case"keydown":case"keyup":g=cf;break;case"focusin":T="focus",g=yr;break;case"focusout":T="blur",g=yr;break;case"beforeblur":case"afterblur":g=yr;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ff;break;case sc:case uc:case cc:g=tf;break;case dc:g=bf;break;case"scroll":g=Xm;break;case"wheel":g=vf;break;case"copy":case"cut":case"paste":g=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ls}var y=(e&4)!==0,I=!y&&t==="scroll",p=y?b!==null?b+"Capture":null:b;y=[];for(var m=c,v;m!==null;){v=m;var D=v.stateNode;if(v.tag===5&&D!==null&&(v=D,p!==null&&(D=oa(m,p),D!=null&&y.push(pa(m,D,v)))),I)break;m=m.return}0<y.length&&(b=new g(b,T,null,n,f),h.push({event:b,listeners:y}))}}if(!(e&7)){t:{if(b=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",b&&n!==Jr&&(T=n.relatedTarget||n.fromElement)&&(He(T)||T[oe]))break t;if((g||b)&&(b=f.window===f?f:(b=f.ownerDocument)?b.defaultView||b.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?He(T):null,T!==null&&(I=nn(T),T!==I||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(y=ns,D="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=ls,D="onPointerLeave",p="onPointerEnter",m="pointer"),I=g==null?b:mn(g),v=T==null?b:mn(T),b=new y(D,m+"leave",g,n,f),b.target=I,b.relatedTarget=v,D=null,He(f)===c&&(y=new y(p,m+"enter",T,n,f),y.target=v,y.relatedTarget=I,D=y),I=D,g&&T)e:{for(y=g,p=T,m=0,v=y;v;v=rn(v))m++;for(v=0,D=p;D;D=rn(D))v++;for(;0<m-v;)y=rn(y),m--;for(;0<v-m;)p=rn(p),v--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break e;y=rn(y),p=rn(p)}y=null}else y=null;g!==null&&bs(h,b,g,y,!1),T!==null&&I!==null&&bs(h,I,T,y,!0)}}t:{if(b=c?mn(c):window,g=b.nodeName&&b.nodeName.toLowerCase(),g==="select"||g==="input"&&b.type==="file")var w=wf;else if(os(b))if(ac)w=Nf;else{w=If;var S=Sf}else(g=b.nodeName)&&g.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(w=Cf);if(w&&(w=w(t,c))){nc(h,w,n,f);break t}S&&S(t,b,c),t==="focusout"&&(S=b._wrapperState)&&S.controlled&&b.type==="number"&&Qr(b,"number",b.value)}switch(S=c?mn(c):window,t){case"focusin":(os(S)||S.contentEditable==="true")&&(cn=S,ri=c,ta=null);break;case"focusout":ta=ri=cn=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,ms(h,n,f);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":ms(h,n,f)}var B;if(eo)t:{switch(t){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else un?tc(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Zu&&n.locale!=="ko"&&(un||x!=="onCompositionStart"?x==="onCompositionEnd"&&un&&(B=Ju()):(ve=f,Ji="value"in ve?ve.value:ve.textContent,un=!0)),S=vl(c,x),0<S.length&&(x=new as(x,t,null,n,f),h.push({event:x,listeners:S}),B?x.data=B:(B=ec(n),B!==null&&(x.data=B)))),(B=yf?Df(t,n):xf(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(f=new as("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=B))}fc(h,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,r=l.stateNode;l.tag===5&&r!==null&&(l=r,r=oa(t,n),r!=null&&a.unshift(pa(t,r,l)),r=oa(t,e),r!=null&&a.push(pa(t,r,l))),t=t.return}return a}function rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bs(t,e,n,a,l){for(var r=e._reactName,i=[];n!==null&&n!==a;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===a)break;s.tag===5&&c!==null&&(s=c,l?(u=oa(n,r),u!=null&&i.unshift(pa(n,u,s))):l||(u=oa(n,r),u!=null&&i.push(pa(n,u,s)))),n=n.return}i.length!==0&&t.push({event:e,listeners:i})}var Rf=/\r\n?/g,Af=/\u0000|\uFFFD/g;function hs(t){return(typeof t=="string"?t:""+t).replace(Rf,`
`).replace(Af,"")}function $a(t,e,n){if(e=hs(e),hs(t)!==e&&n)throw Error(C(425))}function gl(){}var oi=null,si=null;function ui(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ci=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(t){return vs.resolve(null).then(t).catch(Mf)}:ci;function Mf(t){setTimeout(function(){throw t})}function Cr(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){t.removeChild(l),ca(e);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);ca(e)}function Be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gs(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Rn,ba="__reactProps$"+Rn,oe="__reactContainer$"+Rn,di="__reactEvents$"+Rn,Uf="__reactListeners$"+Rn,Of="__reactHandles$"+Rn;function He(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oe]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gs(t);t!==null;){if(n=t[Jt])return n;t=gs(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[Jt]||t[oe],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Hl(t){return t[ba]||null}var mi=[],fn=-1;function Re(t){return{current:t}}function V(t){0>fn||(t.current=mi[fn],mi[fn]=null,fn--)}function U(t,e){fn++,mi[fn]=t.current,t.current=e}var Pe={},pt=Re(Pe),wt=Re(!1),Ye=Pe;function Cn(t,e){var n=t.type.contextTypes;if(!n)return Pe;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var l={},r;for(r in n)l[r]=e[r];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function St(t){return t=t.childContextTypes,t!=null}function yl(){V(wt),V(pt)}function ys(t,e,n){if(pt.current!==Pe)throw Error(C(168));U(pt,e),U(wt,n)}function bc(t,e,n){var a=t.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in e))throw Error(C(108,wm(t)||"Unknown",l));return K({},n,a)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pe,Ye=pt.current,U(pt,t),U(wt,wt.current),!0}function Ds(t,e,n){var a=t.stateNode;if(!a)throw Error(C(169));n?(t=bc(t,e,Ye),a.__reactInternalMemoizedMergedChildContext=t,V(wt),V(pt),U(pt,t)):V(wt),U(wt,n)}var ne=null,Gl=!1,Nr=!1;function hc(t){ne===null?ne=[t]:ne.push(t)}function Vf(t){Gl=!0,hc(t)}function Ae(){if(!Nr&&ne!==null){Nr=!0;var t=0,e=F;try{var n=ne;for(F=1;t<n.length;t++){var a=n[t];do a=a(!0);while(a!==null)}ne=null,Gl=!1}catch(l){throw ne!==null&&(ne=ne.slice(t+1)),Ou(Ki,Ae),l}finally{F=e,Nr=!1}}return null}var pn=[],bn=0,xl=null,Tl=0,_t=[],jt=0,qe=null,ae=1,le="";function Ue(t,e){pn[bn++]=Tl,pn[bn++]=xl,xl=t,Tl=e}function vc(t,e,n){_t[jt++]=ae,_t[jt++]=le,_t[jt++]=qe,qe=t;var a=ae;t=le;var l=32-Ht(a)-1;a&=~(1<<l),n+=1;var r=32-Ht(e)+l;if(30<r){var i=l-l%5;r=(a&(1<<i)-1).toString(32),a>>=i,l-=i,ae=1<<32-Ht(e)+l|n<<l|a,le=r+t}else ae=1<<r|n<<l|a,le=t}function ao(t){t.return!==null&&(Ue(t,1),vc(t,1,0))}function lo(t){for(;t===xl;)xl=pn[--bn],pn[bn]=null,Tl=pn[--bn],pn[bn]=null;for(;t===qe;)qe=_t[--jt],_t[jt]=null,le=_t[--jt],_t[jt]=null,ae=_t[--jt],_t[jt]=null}var kt=null,Nt=null,H=!1,Wt=null;function gc(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xs(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Nt=Be(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qe!==null?{id:ae,overflow:le}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Nt=null,!0):!1;default:return!1}}function fi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pi(t){if(H){var e=Nt;if(e){var n=e;if(!xs(t,e)){if(fi(t))throw Error(C(418));e=Be(n.nextSibling);var a=kt;e&&xs(t,e)?gc(a,n):(t.flags=t.flags&-4097|2,H=!1,kt=t)}}else{if(fi(t))throw Error(C(418));t.flags=t.flags&-4097|2,H=!1,kt=t}}}function Ts(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Wa(t){if(t!==kt)return!1;if(!H)return Ts(t),H=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ui(t.type,t.memoizedProps)),e&&(e=Nt)){if(fi(t))throw yc(),Error(C(418));for(;e;)gc(t,e),e=Be(e.nextSibling)}if(Ts(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=Be(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=kt?Be(t.stateNode.nextSibling):null;return!0}function yc(){for(var t=Nt;t;)t=Be(t.nextSibling)}function Nn(){Nt=kt=null,H=!1}function ro(t){Wt===null?Wt=[t]:Wt.push(t)}var $f=ce.ReactCurrentBatchConfig;function Ot(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bl=Re(null),wl=null,hn=null,io=null;function oo(){io=hn=wl=null}function so(t){var e=Bl.current;V(Bl),t._currentValue=e}function bi(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Bn(t,e){wl=t,io=hn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(io!==t)if(t={context:t,memoizedValue:e,next:null},hn===null){if(wl===null)throw Error(C(308));hn=t,wl.dependencies={lanes:0,firstContext:t}}else hn=hn.next=t;return e}var Ge=null;function uo(t){Ge===null?Ge=[t]:Ge.push(t)}function Dc(t,e,n,a){var l=e.interleaved;return l===null?(n.next=n,uo(e)):(n.next=l.next,l.next=n),e.interleaved=n,se(t,a)}function se(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pe=!1;function co(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function re(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function we(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,R&2){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,se(t,n)}return l=a.interleaved,l===null?(e.next=e,uo(a)):(e.next=l.next,l.next=e),a.interleaved=e,se(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Xi(t,n)}}function Bs(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?l=r=i:r=r.next=i,n=n.next}while(n!==null);r===null?l=r=e:r=r.next=e}else l=r=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,effects:a.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,a){var l=t.updateQueue;pe=!1;var r=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?r=c:i.next=c,i=u;var f=t.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==i&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=u))}if(r!==null){var h=l.baseState;i=0,f=c=u=null,s=r;do{var b=s.lane,g=s.eventTime;if((a&b)===b){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});t:{var T=t,y=s;switch(b=e,g=n,y.tag){case 1:if(T=y.payload,typeof T=="function"){h=T.call(g,h,b);break t}h=T;break t;case 3:T.flags=T.flags&-65537|128;case 0:if(T=y.payload,b=typeof T=="function"?T.call(g,h,b):T,b==null)break t;h=K({},h,b);break t;case 2:pe=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,b=l.effects,b===null?l.effects=[s]:b.push(s))}else g={eventTime:g,lane:b,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=g,u=h):f=f.next=g,i|=b;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;b=s,s=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(!0);if(f===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,e=l.shared.interleaved,e!==null){l=e;do i|=l.lane,l=l.next;while(l!==e)}else r===null&&(l.shared.lanes=0);Ze|=i,t.lanes=i,t.memoizedState=h}}function ws(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var a=t[e],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(C(191,l));l.call(a)}}}var Tc=new Du.Component().refs;function hi(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?nn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var a=gt(),l=Ie(t),r=re(a,l);r.payload=e,n!=null&&(r.callback=n),e=we(t,r,l),e!==null&&(Gt(e,t,l,a),el(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=gt(),l=Ie(t),r=re(a,l);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=we(t,r,l),e!==null&&(Gt(e,t,l,a),el(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),a=Ie(t),l=re(n,a);l.tag=2,e!=null&&(l.callback=e),e=we(t,l,a),e!==null&&(Gt(e,t,a,n),el(e,t,a))}};function Ss(t,e,n,a,l,r,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,i):e.prototype&&e.prototype.isPureReactComponent?!ma(n,a)||!ma(l,r):!0}function Bc(t,e,n){var a=!1,l=Pe,r=e.contextType;return typeof r=="object"&&r!==null?r=Ft(r):(l=St(e)?Ye:pt.current,a=e.contextTypes,r=(a=a!=null)?Cn(t,l):Pe),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=r),e}function Is(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function vi(t,e,n,a){var l=t.stateNode;l.props=n,l.state=t.memoizedState,l.refs=Tc,co(t);var r=e.contextType;typeof r=="object"&&r!==null?l.context=Ft(r):(r=St(e)?Ye:pt.current,l.context=Cn(t,r)),l.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(hi(t,e,r,n),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Ql.enqueueReplaceState(l,l.state,null),Sl(t,n,l,a),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Vn(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var a=n.stateNode}if(!a)throw Error(C(147,t));var l=a,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(i){var s=l.refs;s===Tc&&(s=l.refs={}),i===null?delete s[r]:s[r]=i},e._stringRef=r,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cs(t){var e=t._init;return e(t._payload)}function wc(t){function e(p,m){if(t){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function a(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function l(p,m){return p=Ce(p,m),p.index=0,p.sibling=null,p}function r(p,m,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function i(p){return t&&p.alternate===null&&(p.flags|=2),p}function s(p,m,v,D){return m===null||m.tag!==6?(m=Rr(v,p.mode,D),m.return=p,m):(m=l(m,v),m.return=p,m)}function u(p,m,v,D){var w=v.type;return w===sn?f(p,m,v.props.children,D,v.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fe&&Cs(w)===m.type)?(D=l(m,v.props),D.ref=Vn(p,m,v),D.return=p,D):(D=ol(v.type,v.key,v.props,null,p.mode,D),D.ref=Vn(p,m,v),D.return=p,D)}function c(p,m,v,D){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ar(v,p.mode,D),m.return=p,m):(m=l(m,v.children||[]),m.return=p,m)}function f(p,m,v,D,w){return m===null||m.tag!==7?(m=Xe(v,p.mode,D,w),m.return=p,m):(m=l(m,v),m.return=p,m)}function h(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Rr(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ja:return v=ol(m.type,m.key,m.props,null,p.mode,v),v.ref=Vn(p,null,m),v.return=p,v;case on:return m=Ar(m,p.mode,v),m.return=p,m;case fe:var D=m._init;return h(p,D(m._payload),v)}if(Gn(m)||Fn(m))return m=Xe(m,p.mode,v,null),m.return=p,m;Ha(p,m)}return null}function b(p,m,v,D){var w=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:s(p,m,""+v,D);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return v.key===w?u(p,m,v,D):null;case on:return v.key===w?c(p,m,v,D):null;case fe:return w=v._init,b(p,m,w(v._payload),D)}if(Gn(v)||Fn(v))return w!==null?null:f(p,m,v,D,null);Ha(p,v)}return null}function g(p,m,v,D,w){if(typeof D=="string"&&D!==""||typeof D=="number")return p=p.get(v)||null,s(m,p,""+D,w);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ja:return p=p.get(D.key===null?v:D.key)||null,u(m,p,D,w);case on:return p=p.get(D.key===null?v:D.key)||null,c(m,p,D,w);case fe:var S=D._init;return g(p,m,v,S(D._payload),w)}if(Gn(D)||Fn(D))return p=p.get(v)||null,f(m,p,D,w,null);Ha(m,D)}return null}function T(p,m,v,D){for(var w=null,S=null,B=m,x=m=0,L=null;B!==null&&x<v.length;x++){B.index>x?(L=B,B=null):L=B.sibling;var P=b(p,B,v[x],D);if(P===null){B===null&&(B=L);break}t&&B&&P.alternate===null&&e(p,B),m=r(P,m,x),S===null?w=P:S.sibling=P,S=P,B=L}if(x===v.length)return n(p,B),H&&Ue(p,x),w;if(B===null){for(;x<v.length;x++)B=h(p,v[x],D),B!==null&&(m=r(B,m,x),S===null?w=B:S.sibling=B,S=B);return H&&Ue(p,x),w}for(B=a(p,B);x<v.length;x++)L=g(B,p,x,v[x],D),L!==null&&(t&&L.alternate!==null&&B.delete(L.key===null?x:L.key),m=r(L,m,x),S===null?w=L:S.sibling=L,S=L);return t&&B.forEach(function(bt){return e(p,bt)}),H&&Ue(p,x),w}function y(p,m,v,D){var w=Fn(v);if(typeof w!="function")throw Error(C(150));if(v=w.call(v),v==null)throw Error(C(151));for(var S=w=null,B=m,x=m=0,L=null,P=v.next();B!==null&&!P.done;x++,P=v.next()){B.index>x?(L=B,B=null):L=B.sibling;var bt=b(p,B,P.value,D);if(bt===null){B===null&&(B=L);break}t&&B&&bt.alternate===null&&e(p,B),m=r(bt,m,x),S===null?w=bt:S.sibling=bt,S=bt,B=L}if(P.done)return n(p,B),H&&Ue(p,x),w;if(B===null){for(;!P.done;x++,P=v.next())P=h(p,P.value,D),P!==null&&(m=r(P,m,x),S===null?w=P:S.sibling=P,S=P);return H&&Ue(p,x),w}for(B=a(p,B);!P.done;x++,P=v.next())P=g(B,p,x,P.value,D),P!==null&&(t&&P.alternate!==null&&B.delete(P.key===null?x:P.key),m=r(P,m,x),S===null?w=P:S.sibling=P,S=P);return t&&B.forEach(function(Mt){return e(p,Mt)}),H&&Ue(p,x),w}function I(p,m,v,D){if(typeof v=="object"&&v!==null&&v.type===sn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:t:{for(var w=v.key,S=m;S!==null;){if(S.key===w){if(w=v.type,w===sn){if(S.tag===7){n(p,S.sibling),m=l(S,v.props.children),m.return=p,p=m;break t}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fe&&Cs(w)===S.type){n(p,S.sibling),m=l(S,v.props),m.ref=Vn(p,S,v),m.return=p,p=m;break t}n(p,S);break}else e(p,S);S=S.sibling}v.type===sn?(m=Xe(v.props.children,p.mode,D,v.key),m.return=p,p=m):(D=ol(v.type,v.key,v.props,null,p.mode,D),D.ref=Vn(p,m,v),D.return=p,p=D)}return i(p);case on:t:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(p,m.sibling),m=l(m,v.children||[]),m.return=p,p=m;break t}else{n(p,m);break}else e(p,m);m=m.sibling}m=Ar(v,p.mode,D),m.return=p,p=m}return i(p);case fe:return S=v._init,I(p,m,S(v._payload),D)}if(Gn(v))return T(p,m,v,D);if(Fn(v))return y(p,m,v,D);Ha(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(p,m.sibling),m=l(m,v),m.return=p,p=m):(n(p,m),m=Rr(v,p.mode,D),m.return=p,p=m),i(p)):n(p,m)}return I}var kn=wc(!0),Sc=wc(!1),ka={},te=Re(ka),ha=Re(ka),va=Re(ka);function Qe(t){if(t===ka)throw Error(C(174));return t}function mo(t,e){switch(U(va,e),U(ha,t),U(te,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xr(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xr(e,t)}V(te),U(te,e)}function Pn(){V(te),V(ha),V(va)}function Ic(t){Qe(va.current);var e=Qe(te.current),n=Xr(e,t.type);e!==n&&(U(ha,t),U(te,n))}function fo(t){ha.current===t&&(V(te),V(ha))}var G=Re(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kr=[];function po(){for(var t=0;t<kr.length;t++)kr[t]._workInProgressVersionPrimary=null;kr.length=0}var nl=ce.ReactCurrentDispatcher,Pr=ce.ReactCurrentBatchConfig,Je=0,Q=null,nt=null,rt=null,Cl=!1,ea=!1,ga=0,Wf=0;function ct(){throw Error(C(321))}function bo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function ho(t,e,n,a,l,r){if(Je=r,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?Kf:Xf,t=n(a,l),ea){r=0;do{if(ea=!1,ga=0,25<=r)throw Error(C(301));r+=1,rt=nt=null,e.updateQueue=null,nl.current=Yf,t=n(a,l)}while(ea)}if(nl.current=Nl,e=nt!==null&&nt.next!==null,Je=0,rt=nt=Q=null,Cl=!1,e)throw Error(C(300));return t}function vo(){var t=ga!==0;return ga=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Q.memoizedState=rt=t:rt=rt.next=t,rt}function zt(){if(nt===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=rt===null?Q.memoizedState:rt.next;if(e!==null)rt=e,nt=t;else{if(t===null)throw Error(C(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},rt===null?Q.memoizedState=rt=t:rt=rt.next=t}return rt}function ya(t,e){return typeof e=="function"?e(t):e}function Er(t){var e=zt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var a=nt,l=a.baseQueue,r=n.pending;if(r!==null){if(l!==null){var i=l.next;l.next=r.next,r.next=i}a.baseQueue=l=r,n.pending=null}if(l!==null){r=l.next,a=a.baseState;var s=i=null,u=null,c=r;do{var f=c.lane;if((Je&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:t(a,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,i=a):u=u.next=h,Q.lanes|=f,Ze|=f}c=c.next}while(c!==null&&c!==r);u===null?i=a:u.next=s,Qt(a,e.memoizedState)||(Bt=!0),e.memoizedState=a,e.baseState=i,e.baseQueue=u,n.lastRenderedState=a}if(t=n.interleaved,t!==null){l=t;do r=l.lane,Q.lanes|=r,Ze|=r,l=l.next;while(l!==t)}else l===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lr(t){var e=zt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,r=e.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do r=t(r,i.action),i=i.next;while(i!==l);Qt(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function Cc(){}function Nc(t,e){var n=Q,a=zt(),l=e(),r=!Qt(a.memoizedState,l);if(r&&(a.memoizedState=l,Bt=!0),a=a.queue,go(Ec.bind(null,n,a,t),[t]),a.getSnapshot!==e||r||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Pc.bind(null,n,a,l,e),void 0,null),it===null)throw Error(C(349));Je&30||kc(n,e,l)}return l}function kc(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pc(t,e,n,a){e.value=n,e.getSnapshot=a,Lc(e)&&_c(t)}function Ec(t,e,n){return n(function(){Lc(e)&&_c(t)})}function Lc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function _c(t){var e=se(t,1);e!==null&&Gt(e,t,1,-1)}function Ns(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=Qf.bind(null,Q,t),[e.memoizedState,t]}function Da(t,e,n,a){return t={tag:t,create:e,destroy:n,deps:a,next:null},e=Q.updateQueue,e===null?(e={lastEffect:null,stores:null},Q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t)),t}function jc(){return zt().memoizedState}function al(t,e,n,a){var l=qt();Q.flags|=t,l.memoizedState=Da(1|e,n,void 0,a===void 0?null:a)}function Kl(t,e,n,a){var l=zt();a=a===void 0?null:a;var r=void 0;if(nt!==null){var i=nt.memoizedState;if(r=i.destroy,a!==null&&bo(a,i.deps)){l.memoizedState=Da(e,n,r,a);return}}Q.flags|=t,l.memoizedState=Da(1|e,n,r,a)}function ks(t,e){return al(8390656,8,t,e)}function go(t,e){return Kl(2048,8,t,e)}function Rc(t,e){return Kl(4,2,t,e)}function Ac(t,e){return Kl(4,4,t,e)}function Fc(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zc(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Fc.bind(null,e,t),n)}function yo(){}function Mc(t,e){var n=zt();e=e===void 0?null:e;var a=n.memoizedState;return a!==null&&e!==null&&bo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Uc(t,e){var n=zt();e=e===void 0?null:e;var a=n.memoizedState;return a!==null&&e!==null&&bo(e,a[1])?a[0]:(t=t(),n.memoizedState=[t,e],t)}function Oc(t,e,n){return Je&21?(Qt(n,e)||(n=Wu(),Q.lanes|=n,Ze|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function Hf(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var a=Pr.transition;Pr.transition={};try{t(!1),e()}finally{F=n,Pr.transition=a}}function Vc(){return zt().memoizedState}function Gf(t,e,n){var a=Ie(t);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},$c(t))Wc(e,n);else if(n=Dc(t,e,n,a),n!==null){var l=gt();Gt(n,t,a,l),Hc(n,e,a)}}function Qf(t,e,n){var a=Ie(t),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if($c(t))Wc(e,l);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,s=r(i,n);if(l.hasEagerState=!0,l.eagerState=s,Qt(s,i)){var u=e.interleaved;u===null?(l.next=l,uo(e)):(l.next=u.next,u.next=l),e.interleaved=l;return}}catch{}finally{}n=Dc(t,e,l,a),n!==null&&(l=gt(),Gt(n,t,a,l),Hc(n,e,a))}}function $c(t){var e=t.alternate;return t===Q||e!==null&&e===Q}function Wc(t,e){ea=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hc(t,e,n){if(n&4194240){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Xi(t,n)}}var Nl={readContext:Ft,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Kf={readContext:Ft,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:ks,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,Fc.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var a=qt();return e=n!==void 0?n(e):e,a.memoizedState=a.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},a.queue=t,t=t.dispatch=Gf.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:Ns,useDebugValue:yo,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=Ns(!1),e=t[0];return t=Hf.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var a=Q,l=qt();if(H){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),it===null)throw Error(C(349));Je&30||kc(a,e,n)}l.memoizedState=n;var r={value:n,getSnapshot:e};return l.queue=r,ks(Ec.bind(null,a,r,t),[t]),a.flags|=2048,Da(9,Pc.bind(null,a,r,n,e),void 0,null),n},useId:function(){var t=qt(),e=it.identifierPrefix;if(H){var n=le,a=ae;n=(a&~(1<<32-Ht(a)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Wf++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xf={readContext:Ft,useCallback:Mc,useContext:Ft,useEffect:go,useImperativeHandle:zc,useInsertionEffect:Rc,useLayoutEffect:Ac,useMemo:Uc,useReducer:Er,useRef:jc,useState:function(){return Er(ya)},useDebugValue:yo,useDeferredValue:function(t){var e=zt();return Oc(e,nt.memoizedState,t)},useTransition:function(){var t=Er(ya)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Cc,useSyncExternalStore:Nc,useId:Vc,unstable_isNewReconciler:!1},Yf={readContext:Ft,useCallback:Mc,useContext:Ft,useEffect:go,useImperativeHandle:zc,useInsertionEffect:Rc,useLayoutEffect:Ac,useMemo:Uc,useReducer:Lr,useRef:jc,useState:function(){return Lr(ya)},useDebugValue:yo,useDeferredValue:function(t){var e=zt();return nt===null?e.memoizedState=t:Oc(e,nt.memoizedState,t)},useTransition:function(){var t=Lr(ya)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Cc,useSyncExternalStore:Nc,useId:Vc,unstable_isNewReconciler:!1};function En(t,e){try{var n="",a=e;do n+=Bm(a),a=a.return;while(a);var l=n}catch(r){l=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:l,digest:null}}function _r(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gi(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Gc(t,e,n){n=re(-1,n),n.tag=3,n.payload={element:null};var a=e.value;return n.callback=function(){Pl||(Pl=!0,Ni=a),gi(t,e)},n}function Qc(t,e,n){n=re(-1,n),n.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var l=e.value;n.payload=function(){return a(l)},n.callback=function(){gi(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){gi(t,e),typeof a!="function"&&(Se===null?Se=new Set([this]):Se.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),n}function Ps(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new qf;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(l.add(n),t=dp.bind(null,t,e,n),e.then(t,t))}function Es(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ls(t,e,n,a,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=re(-1,1),e.tag=2,we(n,e,1))),n.lanes|=1),t)}var Jf=ce.ReactCurrentOwner,Bt=!1;function ht(t,e,n,a){e.child=t===null?Sc(e,null,n,a):kn(e,t.child,n,a)}function _s(t,e,n,a,l){n=n.render;var r=e.ref;return Bn(e,l),a=ho(t,e,n,a,r,l),n=vo(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,ue(t,e,l)):(H&&n&&ao(e),e.flags|=1,ht(t,e,a,l),e.child)}function js(t,e,n,a,l){if(t===null){var r=n.type;return typeof r=="function"&&!Co(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Kc(t,e,r,a,l)):(t=ol(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&l)){var i=r.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(i,a)&&t.ref===e.ref)return ue(t,e,l)}return e.flags|=1,t=Ce(r,a),t.ref=e.ref,t.return=e,e.child=t}function Kc(t,e,n,a,l){if(t!==null){var r=t.memoizedProps;if(ma(r,a)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=a=r,(t.lanes&l)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,ue(t,e,l)}return yi(t,e,n,a,l)}function Xc(t,e,n){var a=e.pendingProps,l=a.children,r=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(gn,Ct),Ct|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,U(gn,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,U(gn,Ct),Ct|=a}else r!==null?(a=r.baseLanes|n,e.memoizedState=null):a=n,U(gn,Ct),Ct|=a;return ht(t,e,l,n),e.child}function Yc(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yi(t,e,n,a,l){var r=St(n)?Ye:pt.current;return r=Cn(e,r),Bn(e,l),n=ho(t,e,n,a,r,l),a=vo(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,ue(t,e,l)):(H&&a&&ao(e),e.flags|=1,ht(t,e,n,l),e.child)}function Rs(t,e,n,a,l){if(St(n)){var r=!0;Dl(e)}else r=!1;if(Bn(e,l),e.stateNode===null)ll(t,e),Bc(e,n,a),vi(e,n,a,l),a=!0;else if(t===null){var i=e.stateNode,s=e.memoizedProps;i.props=s;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=St(n)?Ye:pt.current,c=Cn(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==a||u!==c)&&Is(e,i,a,c),pe=!1;var b=e.memoizedState;i.state=b,Sl(e,a,i,l),u=e.memoizedState,s!==a||b!==u||wt.current||pe?(typeof f=="function"&&(hi(e,n,f,a),u=e.memoizedState),(s=pe||Ss(e,n,s,a,b,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=u),i.props=a,i.state=u,i.context=c,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,xc(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Ot(e.type,s),i.props=c,h=e.pendingProps,b=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=St(n)?Ye:pt.current,u=Cn(e,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||b!==u)&&Is(e,i,a,u),pe=!1,b=e.memoizedState,i.state=b,Sl(e,a,i,l);var T=e.memoizedState;s!==h||b!==T||wt.current||pe?(typeof g=="function"&&(hi(e,n,g,a),T=e.memoizedState),(c=pe||Ss(e,n,c,a,b,T,u)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,u)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=u,a=c):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),a=!1)}return Di(t,e,n,a,r,l)}function Di(t,e,n,a,l,r){Yc(t,e);var i=(e.flags&128)!==0;if(!a&&!i)return l&&Ds(e,n,!1),ue(t,e,r);a=e.stateNode,Jf.current=e;var s=i&&typeof n.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,t!==null&&i?(e.child=kn(e,t.child,null,r),e.child=kn(e,null,s,r)):ht(t,e,s,r),e.memoizedState=a.state,l&&Ds(e,n,!0),e.child}function qc(t){var e=t.stateNode;e.pendingContext?ys(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ys(t,e.context,!1),mo(t,e.containerInfo)}function As(t,e,n,a,l){return Nn(),ro(l),e.flags|=256,ht(t,e,n,a),e.child}var xi={dehydrated:null,treeContext:null,retryLane:0};function Ti(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jc(t,e,n){var a=e.pendingProps,l=G.current,r=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(l&2)!==0),s?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),U(G,l&1),t===null)return pi(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=a.children,t=a.fallback,r?(a=e.mode,r=e.child,i={mode:"hidden",children:i},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=ql(i,a,0,null),t=Xe(t,a,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Ti(n),e.memoizedState=xi,t):Do(e,i));if(l=t.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Zf(t,e,i,a,s,l,n);if(r){r=a.fallback,i=e.mode,l=t.child,s=l.sibling;var u={mode:"hidden",children:a.children};return!(i&1)&&e.child!==l?(a=e.child,a.childLanes=0,a.pendingProps=u,e.deletions=null):(a=Ce(l,u),a.subtreeFlags=l.subtreeFlags&14680064),s!==null?r=Ce(s,r):(r=Xe(r,i,n,null),r.flags|=2),r.return=e,a.return=e,a.sibling=r,e.child=a,a=r,r=e.child,i=t.child.memoizedState,i=i===null?Ti(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=t.childLanes&~n,e.memoizedState=xi,a}return r=t.child,t=r.sibling,a=Ce(r,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=n),a.return=e,a.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=a,e.memoizedState=null,a}function Do(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,a){return a!==null&&ro(a),kn(e,t.child,null,n),t=Do(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zf(t,e,n,a,l,r,i){if(n)return e.flags&256?(e.flags&=-257,a=_r(Error(C(422))),Ga(t,e,i,a)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=a.fallback,l=e.mode,a=ql({mode:"visible",children:a.children},l,0,null),r=Xe(r,l,i,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,e.mode&1&&kn(e,t.child,null,i),e.child.memoizedState=Ti(i),e.memoizedState=xi,r);if(!(e.mode&1))return Ga(t,e,i,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var s=a.dgst;return a=s,r=Error(C(419)),a=_r(r,a,void 0),Ga(t,e,i,a)}if(s=(i&t.childLanes)!==0,Bt||s){if(a=it,a!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(a.suspendedLanes|i)?0:l,l!==0&&l!==r.retryLane&&(r.retryLane=l,se(t,l),Gt(a,t,l,-1))}return Io(),a=_r(Error(C(421))),Ga(t,e,i,a)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=mp.bind(null,t),l._reactRetry=e,null):(t=r.treeContext,Nt=Be(l.nextSibling),kt=e,H=!0,Wt=null,t!==null&&(_t[jt++]=ae,_t[jt++]=le,_t[jt++]=qe,ae=t.id,le=t.overflow,qe=e),e=Do(e,a.children),e.flags|=4096,e)}function Fs(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),bi(t.return,e,n)}function jr(t,e,n,a,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function Zc(t,e,n){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if(ht(t,e,a.children,n),a=G.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fs(t,n,e);else if(t.tag===19)Fs(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(U(G,a),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),jr(e,!1,l,n,r);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Il(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}jr(e,!0,n,null,r);break;case"together":jr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ue(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ze|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Ce(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ce(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tp(t,e,n){switch(e.tag){case 3:qc(e),Nn();break;case 5:Ic(e);break;case 1:St(e.type)&&Dl(e);break;case 4:mo(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,l=e.memoizedProps.value;U(Bl,a._currentValue),a._currentValue=l;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(U(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?Jc(t,e,n):(U(G,G.current&1),t=ue(t,e,n),t!==null?t.sibling:null);U(G,G.current&1);break;case 19:if(a=(n&e.childLanes)!==0,t.flags&128){if(a)return Zc(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(G,G.current),a)break;return null;case 22:case 23:return e.lanes=0,Xc(t,e,n)}return ue(t,e,n)}var td,Bi,ed,nd;td=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bi=function(){};ed=function(t,e,n,a){var l=t.memoizedProps;if(l!==a){t=e.stateNode,Qe(te.current);var r=null;switch(n){case"input":l=Hr(t,l),a=Hr(t,a),r=[];break;case"select":l=K({},l,{value:void 0}),a=K({},a,{value:void 0}),r=[];break;case"textarea":l=Kr(t,l),a=Kr(t,a),r=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=gl)}Yr(n,a);var i;n=null;for(c in l)if(!a.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in a){var u=a[c];if(s=l!=null?l[c]:void 0,a.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(r||(r=[]),r.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(r=r||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(r=r||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&O("scroll",t),r||s===u||(r=[])):(r=r||[]).push(c,u))}n&&(r=r||[]).push("style",n);var c=r;(e.updateQueue=c)&&(e.flags|=4)}};nd=function(t,e,n,a){n!==a&&(e.flags|=4)};function $n(t,e){if(!H)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function ep(t,e,n){var a=e.pendingProps;switch(lo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return St(e.type)&&yl(),dt(e),null;case 3:return a=e.stateNode,Pn(),V(wt),V(pt),po(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Ei(Wt),Wt=null))),Bi(t,e),dt(e),null;case 5:fo(e);var l=Qe(va.current);if(n=e.type,t!==null&&e.stateNode!=null)ed(t,e,n,a,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(C(166));return dt(e),null}if(t=Qe(te.current),Wa(e)){a=e.stateNode,n=e.type;var r=e.memoizedProps;switch(a[Jt]=e,a[ba]=r,t=(e.mode&1)!==0,n){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(l=0;l<Kn.length;l++)O(Kn[l],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":Go(a,r),O("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},O("invalid",a);break;case"textarea":Ko(a,r),O("invalid",a)}Yr(n,r),l=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?a.textContent!==s&&(r.suppressHydrationWarning!==!0&&$a(a.textContent,s,t),l=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&$a(a.textContent,s,t),l=["children",""+s]):ra.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&O("scroll",a)}switch(n){case"input":Ra(a),Qo(a,r,!0);break;case"textarea":Ra(a),Xo(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=gl)}a=l,e.updateQueue=a,a!==null&&(e.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ku(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=i.createElement(n,{is:a.is}):(t=i.createElement(n),n==="select"&&(i=t,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):t=i.createElementNS(t,n),t[Jt]=e,t[ba]=a,td(t,e,!1,!1),e.stateNode=t;t:{switch(i=qr(n,a),n){case"dialog":O("cancel",t),O("close",t),l=a;break;case"iframe":case"object":case"embed":O("load",t),l=a;break;case"video":case"audio":for(l=0;l<Kn.length;l++)O(Kn[l],t);l=a;break;case"source":O("error",t),l=a;break;case"img":case"image":case"link":O("error",t),O("load",t),l=a;break;case"details":O("toggle",t),l=a;break;case"input":Go(t,a),l=Hr(t,a),O("invalid",t);break;case"option":l=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},l=K({},a,{value:void 0}),O("invalid",t);break;case"textarea":Ko(t,a),l=Kr(t,a),O("invalid",t);break;default:l=a}Yr(n,l),s=l;for(r in s)if(s.hasOwnProperty(r)){var u=s[r];r==="style"?Lu(t,u):r==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Pu(t,u)):r==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ra.hasOwnProperty(r)?u!=null&&r==="onScroll"&&O("scroll",t):u!=null&&$i(t,r,u,i))}switch(n){case"input":Ra(t),Qo(t,a,!1);break;case"textarea":Ra(t),Xo(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ke(a.value));break;case"select":t.multiple=!!a.multiple,r=a.value,r!=null?yn(t,!!a.multiple,r,!1):a.defaultValue!=null&&yn(t,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)nd(t,e,t.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(C(166));if(n=Qe(va.current),Qe(te.current),Wa(e)){if(a=e.stateNode,n=e.memoizedProps,a[Jt]=e,(r=a.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:$a(a.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(a.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Jt]=e,e.stateNode=a}return dt(e),null;case 13:if(V(G),a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(H&&Nt!==null&&e.mode&1&&!(e.flags&128))yc(),Nn(),e.flags|=98560,r=!1;else if(r=Wa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!r)throw Error(C(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[Jt]=e}else Nn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),r=!1}else Wt!==null&&(Ei(Wt),Wt=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?at===0&&(at=3):Io())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return Pn(),Bi(t,e),t===null&&fa(e.stateNode.containerInfo),dt(e),null;case 10:return so(e.type._context),dt(e),null;case 17:return St(e.type)&&yl(),dt(e),null;case 19:if(V(G),r=e.memoizedState,r===null)return dt(e),null;if(a=(e.flags&128)!==0,i=r.rendering,i===null)if(a)$n(r,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=Il(t),i!==null){for(e.flags|=128,$n(r,!1),a=i.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=n,n=e.child;n!==null;)r=n,t=a,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,t=i.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return U(G,G.current&1|2),e.child}t=t.sibling}r.tail!==null&&q()>Ln&&(e.flags|=128,a=!0,$n(r,!1),e.lanes=4194304)}else{if(!a)if(t=Il(i),t!==null){if(e.flags|=128,a=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$n(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!H)return dt(e),null}else 2*q()-r.renderingStartTime>Ln&&n!==1073741824&&(e.flags|=128,a=!0,$n(r,!1),e.lanes=4194304);r.isBackwards?(i.sibling=e.child,e.child=i):(n=r.last,n!==null?n.sibling=i:e.child=i,r.last=i)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=q(),e.sibling=null,n=G.current,U(G,a?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return So(),a=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?Ct&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function np(t,e){switch(lo(e),e.tag){case 1:return St(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pn(),V(wt),V(pt),po(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fo(e),null;case 13:if(V(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Nn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(G),null;case 4:return Pn(),null;case 10:return so(e.type._context),null;case 22:case 23:return So(),null;case 24:return null;default:return null}}var Qa=!1,mt=!1,ap=typeof WeakSet=="function"?WeakSet:Set,N=null;function vn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){X(t,e,a)}else n.current=null}function wi(t,e,n){try{n()}catch(a){X(t,e,a)}}var zs=!1;function lp(t,e){if(oi=bl,t=ic(),no(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var i=0,s=-1,u=-1,c=0,f=0,h=t,b=null;e:for(;;){for(var g;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==r||a!==0&&h.nodeType!==3||(u=i+a),h.nodeType===3&&(i+=h.nodeValue.length),(g=h.firstChild)!==null;)b=h,h=g;for(;;){if(h===t)break e;if(b===n&&++c===l&&(s=i),b===r&&++f===a&&(u=i),(g=h.nextSibling)!==null)break;h=b,b=h.parentNode}h=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(si={focusedElem:t,selectionRange:n},bl=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var y=T.memoizedProps,I=T.memoizedState,p=e.stateNode,m=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ot(e.type,y),I);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(D){X(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return T=zs,zs=!1,T}function na(t,e,n){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&t)===t){var r=l.destroy;l.destroy=void 0,r!==void 0&&wi(e,n,r)}l=l.next}while(l!==a)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var a=n.create;n.destroy=a()}n=n.next}while(n!==e)}}function Si(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ad(t){var e=t.alternate;e!==null&&(t.alternate=null,ad(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[ba],delete e[di],delete e[Uf],delete e[Of])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ld(t){return t.tag===5||t.tag===3||t.tag===4}function Ms(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ld(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ii(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(a!==4&&(t=t.child,t!==null))for(Ii(t,e,n),t=t.sibling;t!==null;)Ii(t,e,n),t=t.sibling}function Ci(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Ci(t,e,n),t=t.sibling;t!==null;)Ci(t,e,n),t=t.sibling}var ot=null,Vt=!1;function me(t,e,n){for(n=n.child;n!==null;)rd(t,e,n),n=n.sibling}function rd(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:mt||vn(n,e);case 6:var a=ot,l=Vt;ot=null,me(t,e,n),ot=a,Vt=l,ot!==null&&(Vt?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(Vt?(t=ot,n=n.stateNode,t.nodeType===8?Cr(t.parentNode,n):t.nodeType===1&&Cr(t,n),ca(t)):Cr(ot,n.stateNode));break;case 4:a=ot,l=Vt,ot=n.stateNode.containerInfo,Vt=!0,me(t,e,n),ot=a,Vt=l;break;case 0:case 11:case 14:case 15:if(!mt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var r=l,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&wi(n,e,i),l=l.next}while(l!==a)}me(t,e,n);break;case 1:if(!mt&&(vn(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){X(n,e,s)}me(t,e,n);break;case 21:me(t,e,n);break;case 22:n.mode&1?(mt=(a=mt)||n.memoizedState!==null,me(t,e,n),mt=a):me(t,e,n);break;default:me(t,e,n)}}function Us(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ap),e.forEach(function(a){var l=fp.bind(null,t,a);n.has(a)||(n.add(a),a.then(l,l))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var r=t,i=e,s=i;t:for(;s!==null;){switch(s.tag){case 5:ot=s.stateNode,Vt=!1;break t;case 3:ot=s.stateNode.containerInfo,Vt=!0;break t;case 4:ot=s.stateNode.containerInfo,Vt=!0;break t}s=s.return}if(ot===null)throw Error(C(160));rd(r,i,l),ot=null,Vt=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){X(l,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)id(e,t),e=e.sibling}function id(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),Xt(t),a&4){try{na(3,t,t.return),Xl(3,t)}catch(y){X(t,t.return,y)}try{na(5,t,t.return)}catch(y){X(t,t.return,y)}}break;case 1:Ut(e,t),Xt(t),a&512&&n!==null&&vn(n,n.return);break;case 5:if(Ut(e,t),Xt(t),a&512&&n!==null&&vn(n,n.return),t.flags&32){var l=t.stateNode;try{ia(l,"")}catch(y){X(t,t.return,y)}}if(a&4&&(l=t.stateNode,l!=null)){var r=t.memoizedProps,i=n!==null?n.memoizedProps:r,s=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&Cu(l,r),qr(s,i);var c=qr(s,r);for(i=0;i<u.length;i+=2){var f=u[i],h=u[i+1];f==="style"?Lu(l,h):f==="dangerouslySetInnerHTML"?Pu(l,h):f==="children"?ia(l,h):$i(l,f,h,c)}switch(s){case"input":Gr(l,r);break;case"textarea":Nu(l,r);break;case"select":var b=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?yn(l,!!r.multiple,g,!1):b!==!!r.multiple&&(r.defaultValue!=null?yn(l,!!r.multiple,r.defaultValue,!0):yn(l,!!r.multiple,r.multiple?[]:"",!1))}l[ba]=r}catch(y){X(t,t.return,y)}}break;case 6:if(Ut(e,t),Xt(t),a&4){if(t.stateNode===null)throw Error(C(162));l=t.stateNode,r=t.memoizedProps;try{l.nodeValue=r}catch(y){X(t,t.return,y)}}break;case 3:if(Ut(e,t),Xt(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(y){X(t,t.return,y)}break;case 4:Ut(e,t),Xt(t);break;case 13:Ut(e,t),Xt(t),l=t.child,l.flags&8192&&(r=l.memoizedState!==null,l.stateNode.isHidden=r,!r||l.alternate!==null&&l.alternate.memoizedState!==null||(Bo=q())),a&4&&Us(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||f,Ut(e,t),mt=c):Ut(e,t),Xt(t),a&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(N=t,f=t.child;f!==null;){for(h=N=f;N!==null;){switch(b=N,g=b.child,b.tag){case 0:case 11:case 14:case 15:na(4,b,b.return);break;case 1:vn(b,b.return);var T=b.stateNode;if(typeof T.componentWillUnmount=="function"){a=b,n=b.return;try{e=a,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(y){X(a,n,y)}}break;case 5:vn(b,b.return);break;case 22:if(b.memoizedState!==null){Vs(h);continue}}g!==null?(g.return=b,N=g):Vs(h)}f=f.sibling}t:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{l=h.stateNode,c?(r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Eu("display",i))}catch(y){X(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){X(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break t;for(;h.sibling===null;){if(h.return===null||h.return===t)break t;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ut(e,t),Xt(t),a&4&&Us(t);break;case 21:break;default:Ut(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{t:{for(var n=t.return;n!==null;){if(ld(n)){var a=n;break t}n=n.return}throw Error(C(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(ia(l,""),a.flags&=-33);var r=Ms(t);Ci(t,r,l);break;case 3:case 4:var i=a.stateNode.containerInfo,s=Ms(t);Ii(t,s,i);break;default:throw Error(C(161))}}catch(u){X(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rp(t,e,n){N=t,od(t)}function od(t,e,n){for(var a=(t.mode&1)!==0;N!==null;){var l=N,r=l.child;if(l.tag===22&&a){var i=l.memoizedState!==null||Qa;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||mt;s=Qa;var c=mt;if(Qa=i,(mt=u)&&!c)for(N=l;N!==null;)i=N,u=i.child,i.tag===22&&i.memoizedState!==null?$s(l):u!==null?(u.return=i,N=u):$s(l);for(;r!==null;)N=r,od(r),r=r.sibling;N=l,Qa=s,mt=c}Os(t)}else l.subtreeFlags&8772&&r!==null?(r.return=l,N=r):Os(t)}}function Os(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Xl(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!mt)if(n===null)a.componentDidMount();else{var l=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&ws(e,r,a);break;case 3:var i=e.updateQueue;if(i!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ws(e,i,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}mt||e.flags&512&&Si(e)}catch(b){X(e,e.return,b)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Vs(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function $s(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){X(e,n,u)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var l=e.return;try{a.componentDidMount()}catch(u){X(e,l,u)}}var r=e.return;try{Si(e)}catch(u){X(e,r,u)}break;case 5:var i=e.return;try{Si(e)}catch(u){X(e,i,u)}}}catch(u){X(e,e.return,u)}if(e===t){N=null;break}var s=e.sibling;if(s!==null){s.return=e.return,N=s;break}N=e.return}}var ip=Math.ceil,kl=ce.ReactCurrentDispatcher,xo=ce.ReactCurrentOwner,At=ce.ReactCurrentBatchConfig,R=0,it=null,et=null,st=0,Ct=0,gn=Re(0),at=0,xa=null,Ze=0,Yl=0,To=0,aa=null,Tt=null,Bo=0,Ln=1/0,ee=null,Pl=!1,Ni=null,Se=null,Ka=!1,ge=null,El=0,la=0,ki=null,rl=-1,il=0;function gt(){return R&6?q():rl!==-1?rl:rl=q()}function Ie(t){return t.mode&1?R&2&&st!==0?st&-st:$f.transition!==null?(il===0&&(il=Wu()),il):(t=F,t!==0||(t=window.event,t=t===void 0?16:qu(t.type)),t):1}function Gt(t,e,n,a){if(50<la)throw la=0,ki=null,Error(C(185));Ia(t,n,a),(!(R&2)||t!==it)&&(t===it&&(!(R&2)&&(Yl|=n),at===4&&he(t,st)),It(t,a),n===1&&R===0&&!(e.mode&1)&&(Ln=q()+500,Gl&&Ae()))}function It(t,e){var n=t.callbackNode;Vm(t,e);var a=pl(t,t===it?st:0);if(a===0)n!==null&&Jo(n),t.callbackNode=null,t.callbackPriority=0;else if(e=a&-a,t.callbackPriority!==e){if(n!=null&&Jo(n),e===1)t.tag===0?Vf(Ws.bind(null,t)):hc(Ws.bind(null,t)),zf(function(){!(R&6)&&Ae()}),n=null;else{switch(Hu(a)){case 1:n=Ki;break;case 4:n=Vu;break;case 16:n=fl;break;case 536870912:n=$u;break;default:n=fl}n=bd(n,sd.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sd(t,e){if(rl=-1,il=0,R&6)throw Error(C(327));var n=t.callbackNode;if(wn()&&t.callbackNode!==n)return null;var a=pl(t,t===it?st:0);if(a===0)return null;if(a&30||a&t.expiredLanes||e)e=Ll(t,a);else{e=a;var l=R;R|=2;var r=cd();(it!==t||st!==e)&&(ee=null,Ln=q()+500,Ke(t,e));do try{up();break}catch(s){ud(t,s)}while(!0);oo(),kl.current=r,R=l,et!==null?e=0:(it=null,st=0,e=at)}if(e!==0){if(e===2&&(l=ni(t),l!==0&&(a=l,e=Pi(t,l))),e===1)throw n=xa,Ke(t,0),he(t,a),It(t,q()),n;if(e===6)he(t,a);else{if(l=t.current.alternate,!(a&30)&&!op(l)&&(e=Ll(t,a),e===2&&(r=ni(t),r!==0&&(a=r,e=Pi(t,r))),e===1))throw n=xa,Ke(t,0),he(t,a),It(t,q()),n;switch(t.finishedWork=l,t.finishedLanes=a,e){case 0:case 1:throw Error(C(345));case 2:Oe(t,Tt,ee);break;case 3:if(he(t,a),(a&130023424)===a&&(e=Bo+500-q(),10<e)){if(pl(t,0)!==0)break;if(l=t.suspendedLanes,(l&a)!==a){gt(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=ci(Oe.bind(null,t,Tt,ee),e);break}Oe(t,Tt,ee);break;case 4:if(he(t,a),(a&4194240)===a)break;for(e=t.eventTimes,l=-1;0<a;){var i=31-Ht(a);r=1<<i,i=e[i],i>l&&(l=i),a&=~r}if(a=l,a=q()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ip(a/1960))-a,10<a){t.timeoutHandle=ci(Oe.bind(null,t,Tt,ee),a);break}Oe(t,Tt,ee);break;case 5:Oe(t,Tt,ee);break;default:throw Error(C(329))}}}return It(t,q()),t.callbackNode===n?sd.bind(null,t):null}function Pi(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(Ke(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Ei(e)),t}function Ei(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function op(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!Qt(r(),l))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function he(t,e){for(e&=~To,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),a=1<<n;t[n]=-1,e&=~a}}function Ws(t){if(R&6)throw Error(C(327));wn();var e=pl(t,0);if(!(e&1))return It(t,q()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var a=ni(t);a!==0&&(e=a,n=Pi(t,a))}if(n===1)throw n=xa,Ke(t,0),he(t,e),It(t,q()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oe(t,Tt,ee),It(t,q()),null}function wo(t,e){var n=R;R|=1;try{return t(e)}finally{R=n,R===0&&(Ln=q()+500,Gl&&Ae())}}function tn(t){ge!==null&&ge.tag===0&&!(R&6)&&wn();var e=R;R|=1;var n=At.transition,a=F;try{if(At.transition=null,F=1,t)return t()}finally{F=a,At.transition=n,R=e,!(R&6)&&Ae()}}function So(){Ct=gn.current,V(gn)}function Ke(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ff(n)),et!==null)for(n=et.return;n!==null;){var a=n;switch(lo(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yl();break;case 3:Pn(),V(wt),V(pt),po();break;case 5:fo(a);break;case 4:Pn();break;case 13:V(G);break;case 19:V(G);break;case 10:so(a.type._context);break;case 22:case 23:So()}n=n.return}if(it=t,et=t=Ce(t.current,null),st=Ct=e,at=0,xa=null,To=Yl=Ze=0,Tt=aa=null,Ge!==null){for(e=0;e<Ge.length;e++)if(n=Ge[e],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,r=n.pending;if(r!==null){var i=r.next;r.next=l,a.next=i}n.pending=a}Ge=null}return t}function ud(t,e){do{var n=et;try{if(oo(),nl.current=Nl,Cl){for(var a=Q.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Cl=!1}if(Je=0,rt=nt=Q=null,ea=!1,ga=0,xo.current=null,n===null||n.return===null){at=1,xa=e,et=null;break}t:{var r=t,i=n.return,s=n,u=e;if(e=st,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var b=f.alternate;b?(f.updateQueue=b.updateQueue,f.memoizedState=b.memoizedState,f.lanes=b.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Es(i);if(g!==null){g.flags&=-257,Ls(g,i,s,r,e),g.mode&1&&Ps(r,c,e),e=g,u=c;var T=e.updateQueue;if(T===null){var y=new Set;y.add(u),e.updateQueue=y}else T.add(u);break t}else{if(!(e&1)){Ps(r,c,e),Io();break t}u=Error(C(426))}}else if(H&&s.mode&1){var I=Es(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ls(I,i,s,r,e),ro(En(u,s));break t}}r=u=En(u,s),at!==4&&(at=2),aa===null?aa=[r]:aa.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var p=Gc(r,u,e);Bs(r,p);break t;case 1:s=u;var m=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Se===null||!Se.has(v)))){r.flags|=65536,e&=-e,r.lanes|=e;var D=Qc(r,s,e);Bs(r,D);break t}}r=r.return}while(r!==null)}md(n)}catch(w){e=w,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function cd(){var t=kl.current;return kl.current=Nl,t===null?Nl:t}function Io(){(at===0||at===3||at===2)&&(at=4),it===null||!(Ze&268435455)&&!(Yl&268435455)||he(it,st)}function Ll(t,e){var n=R;R|=2;var a=cd();(it!==t||st!==e)&&(ee=null,Ke(t,e));do try{sp();break}catch(l){ud(t,l)}while(!0);if(oo(),R=n,kl.current=a,et!==null)throw Error(C(261));return it=null,st=0,at}function sp(){for(;et!==null;)dd(et)}function up(){for(;et!==null&&!_m();)dd(et)}function dd(t){var e=pd(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?md(t):et=e,xo.current=null}function md(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=np(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,et=null;return}}else if(n=ep(n,e,Ct),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);at===0&&(at=5)}function Oe(t,e,n){var a=F,l=At.transition;try{At.transition=null,F=1,cp(t,e,n,a)}finally{At.transition=l,F=a}return null}function cp(t,e,n,a){do wn();while(ge!==null);if(R&6)throw Error(C(327));n=t.finishedWork;var l=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if($m(t,r),t===it&&(et=it=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,bd(fl,function(){return wn(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=At.transition,At.transition=null;var i=F;F=1;var s=R;R|=4,xo.current=null,lp(t,n),id(n,t),Pf(si),bl=!!oi,si=oi=null,t.current=n,rp(n),jm(),R=s,F=i,At.transition=r}else t.current=n;if(Ka&&(Ka=!1,ge=t,El=l),r=t.pendingLanes,r===0&&(Se=null),Fm(n.stateNode),It(t,q()),e!==null)for(a=t.onRecoverableError,n=0;n<e.length;n++)l=e[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(Pl)throw Pl=!1,t=Ni,Ni=null,t;return El&1&&t.tag!==0&&wn(),r=t.pendingLanes,r&1?t===ki?la++:(la=0,ki=t):la=0,Ae(),null}function wn(){if(ge!==null){var t=Hu(El),e=At.transition,n=F;try{if(At.transition=null,F=16>t?16:t,ge===null)var a=!1;else{if(t=ge,ge=null,El=0,R&6)throw Error(C(331));var l=R;for(R|=4,N=t.current;N!==null;){var r=N,i=r.child;if(N.flags&16){var s=r.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:na(8,f,r)}var h=f.child;if(h!==null)h.return=f,N=h;else for(;N!==null;){f=N;var b=f.sibling,g=f.return;if(ad(f),f===c){N=null;break}if(b!==null){b.return=g,N=b;break}N=g}}}var T=r.alternate;if(T!==null){var y=T.child;if(y!==null){T.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}N=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,N=i;else t:for(;N!==null;){if(r=N,r.flags&2048)switch(r.tag){case 0:case 11:case 15:na(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,N=p;break t}N=r.return}}var m=t.current;for(N=m;N!==null;){i=N;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,N=v;else t:for(i=m;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xl(9,s)}}catch(w){X(s,s.return,w)}if(s===i){N=null;break t}var D=s.sibling;if(D!==null){D.return=s.return,N=D;break t}N=s.return}}if(R=l,Ae(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ol,t)}catch{}a=!0}return a}finally{F=n,At.transition=e}}return!1}function Hs(t,e,n){e=En(n,e),e=Gc(t,e,1),t=we(t,e,1),e=gt(),t!==null&&(Ia(t,1,e),It(t,e))}function X(t,e,n){if(t.tag===3)Hs(t,t,n);else for(;e!==null;){if(e.tag===3){Hs(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Se===null||!Se.has(a))){t=En(n,t),t=Qc(e,t,1),e=we(e,t,1),t=gt(),e!==null&&(Ia(e,1,t),It(e,t));break}}e=e.return}}function dp(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(st&n)===n&&(at===4||at===3&&(st&130023424)===st&&500>q()-Bo?Ke(t,0):To|=n),It(t,e)}function fd(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=gt();t=se(t,e),t!==null&&(Ia(t,e,n),It(t,n))}function mp(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fd(t,n)}function fp(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(C(314))}a!==null&&a.delete(e),fd(t,n)}var pd;pd=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,tp(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,H&&e.flags&1048576&&vc(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;ll(t,e),t=e.pendingProps;var l=Cn(e,pt.current);Bn(e,n),l=ho(null,e,a,t,l,n);var r=vo();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(a)?(r=!0,Dl(e)):r=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(e),l.updater=Ql,e.stateNode=l,l._reactInternals=e,vi(e,a,t,n),e=Di(null,e,a,!0,r,n)):(e.tag=0,H&&r&&ao(e),ht(null,e,l,n),e=e.child),e;case 16:a=e.elementType;t:{switch(ll(t,e),t=e.pendingProps,l=a._init,a=l(a._payload),e.type=a,l=e.tag=bp(a),t=Ot(a,t),l){case 0:e=yi(null,e,a,t,n);break t;case 1:e=Rs(null,e,a,t,n);break t;case 11:e=_s(null,e,a,t,n);break t;case 14:e=js(null,e,a,Ot(a.type,t),n);break t}throw Error(C(306,a,""))}return e;case 0:return a=e.type,l=e.pendingProps,l=e.elementType===a?l:Ot(a,l),yi(t,e,a,l,n);case 1:return a=e.type,l=e.pendingProps,l=e.elementType===a?l:Ot(a,l),Rs(t,e,a,l,n);case 3:t:{if(qc(e),t===null)throw Error(C(387));a=e.pendingProps,r=e.memoizedState,l=r.element,xc(t,e),Sl(e,a,null,n);var i=e.memoizedState;if(a=i.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){l=En(Error(C(423)),e),e=As(t,e,a,n,l);break t}else if(a!==l){l=En(Error(C(424)),e),e=As(t,e,a,n,l);break t}else for(Nt=Be(e.stateNode.containerInfo.firstChild),kt=e,H=!0,Wt=null,n=Sc(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),a===l){e=ue(t,e,n);break t}ht(t,e,a,n)}e=e.child}return e;case 5:return Ic(e),t===null&&pi(e),a=e.type,l=e.pendingProps,r=t!==null?t.memoizedProps:null,i=l.children,ui(a,l)?i=null:r!==null&&ui(a,r)&&(e.flags|=32),Yc(t,e),ht(t,e,i,n),e.child;case 6:return t===null&&pi(e),null;case 13:return Jc(t,e,n);case 4:return mo(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=kn(e,null,a,n):ht(t,e,a,n),e.child;case 11:return a=e.type,l=e.pendingProps,l=e.elementType===a?l:Ot(a,l),_s(t,e,a,l,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(a=e.type._context,l=e.pendingProps,r=e.memoizedProps,i=l.value,U(Bl,a._currentValue),a._currentValue=i,r!==null)if(Qt(r.value,i)){if(r.children===l.children&&!wt.current){e=ue(t,e,n);break t}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var u=s.firstContext;u!==null;){if(u.context===a){if(r.tag===1){u=re(-1,n&-n),u.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}r.lanes|=n,u=r.alternate,u!==null&&(u.lanes|=n),bi(r.return,n,e),s.lanes|=n;break}u=u.next}}else if(r.tag===10)i=r.type===e.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(C(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),bi(i,n,e),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}ht(t,e,l.children,n),e=e.child}return e;case 9:return l=e.type,a=e.pendingProps.children,Bn(e,n),l=Ft(l),a=a(l),e.flags|=1,ht(t,e,a,n),e.child;case 14:return a=e.type,l=Ot(a,e.pendingProps),l=Ot(a.type,l),js(t,e,a,l,n);case 15:return Kc(t,e,e.type,e.pendingProps,n);case 17:return a=e.type,l=e.pendingProps,l=e.elementType===a?l:Ot(a,l),ll(t,e),e.tag=1,St(a)?(t=!0,Dl(e)):t=!1,Bn(e,n),Bc(e,a,l),vi(e,a,l,n),Di(null,e,a,!0,t,n);case 19:return Zc(t,e,n);case 22:return Xc(t,e,n)}throw Error(C(156,e.tag))};function bd(t,e){return Ou(t,e)}function pp(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,a){return new pp(t,e,n,a)}function Co(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bp(t){if(typeof t=="function")return Co(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hi)return 11;if(t===Gi)return 14}return 2}function Ce(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,a,l,r){var i=2;if(a=t,typeof t=="function")Co(t)&&(i=1);else if(typeof t=="string")i=5;else t:switch(t){case sn:return Xe(n.children,l,r,e);case Wi:i=8,l|=8;break;case Or:return t=Rt(12,n,e,l|2),t.elementType=Or,t.lanes=r,t;case Vr:return t=Rt(13,n,e,l),t.elementType=Vr,t.lanes=r,t;case $r:return t=Rt(19,n,e,l),t.elementType=$r,t.lanes=r,t;case wu:return ql(n,l,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tu:i=10;break t;case Bu:i=9;break t;case Hi:i=11;break t;case Gi:i=14;break t;case fe:i=16,a=null;break t}throw Error(C(130,t==null?t:typeof t,""))}return e=Rt(i,n,e,l),e.elementType=t,e.type=a,e.lanes=r,e}function Xe(t,e,n,a){return t=Rt(7,t,a,e),t.lanes=n,t}function ql(t,e,n,a){return t=Rt(22,t,a,e),t.elementType=wu,t.lanes=n,t.stateNode={isHidden:!1},t}function Rr(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Ar(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hp(t,e,n,a,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hr(0),this.expirationTimes=hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hr(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function No(t,e,n,a,l,r,i,s,u){return t=new hp(t,e,n,s,u),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Rt(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(r),t}function vp(t,e,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:a==null?null:""+a,children:t,containerInfo:e,implementation:n}}function hd(t){if(!t)return Pe;t=t._reactInternals;t:{if(nn(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(St(n))return bc(t,n,e)}return e}function vd(t,e,n,a,l,r,i,s,u){return t=No(n,a,!0,t,l,r,i,s,u),t.context=hd(null),n=t.current,a=gt(),l=Ie(n),r=re(a,l),r.callback=e??null,we(n,r,l),t.current.lanes=l,Ia(t,l,a),It(t,a),t}function Jl(t,e,n,a){var l=e.current,r=gt(),i=Ie(l);return n=hd(n),e.context===null?e.context=n:e.pendingContext=n,e=re(r,i),e.payload={element:t},a=a===void 0?null:a,a!==null&&(e.callback=a),t=we(l,e,i),t!==null&&(Gt(t,l,i,r),el(t,l,i)),i}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gs(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ko(t,e){Gs(t,e),(t=t.alternate)&&Gs(t,e)}function gp(){return null}var gd=typeof reportError=="function"?reportError:function(t){console.error(t)};function Po(t){this._internalRoot=t}Zl.prototype.render=Po.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Jl(t,e,null,null)};Zl.prototype.unmount=Po.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tn(function(){Jl(null,t,null,null)}),e[oe]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ku();t={blockedOn:null,target:t,priority:e};for(var n=0;n<be.length&&e!==0&&e<be[n].priority;n++);be.splice(n,0,t),n===0&&Yu(t)}};function Eo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tr(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qs(){}function yp(t,e,n,a,l){if(l){if(typeof a=="function"){var r=a;a=function(){var c=_l(i);r.call(c)}}var i=vd(e,a,t,0,null,!1,!1,"",Qs);return t._reactRootContainer=i,t[oe]=i.current,fa(t.nodeType===8?t.parentNode:t),tn(),i}for(;l=t.lastChild;)t.removeChild(l);if(typeof a=="function"){var s=a;a=function(){var c=_l(u);s.call(c)}}var u=No(t,0,!1,null,null,!1,!1,"",Qs);return t._reactRootContainer=u,t[oe]=u.current,fa(t.nodeType===8?t.parentNode:t),tn(function(){Jl(e,u,n,a)}),u}function er(t,e,n,a,l){var r=n._reactRootContainer;if(r){var i=r;if(typeof l=="function"){var s=l;l=function(){var u=_l(i);s.call(u)}}Jl(e,i,t,l)}else i=yp(n,e,t,l,a);return _l(i)}Gu=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qn(e.pendingLanes);n!==0&&(Xi(e,n|1),It(e,q()),!(R&6)&&(Ln=q()+500,Ae()))}break;case 13:tn(function(){var a=se(t,1);if(a!==null){var l=gt();Gt(a,t,1,l)}}),ko(t,1)}};Yi=function(t){if(t.tag===13){var e=se(t,134217728);if(e!==null){var n=gt();Gt(e,t,134217728,n)}ko(t,134217728)}};Qu=function(t){if(t.tag===13){var e=Ie(t),n=se(t,e);if(n!==null){var a=gt();Gt(n,t,e,a)}ko(t,e)}};Ku=function(){return F};Xu=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};Zr=function(t,e,n){switch(e){case"input":if(Gr(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=Hl(a);if(!l)throw Error(C(90));Iu(a),Gr(a,l)}}}break;case"textarea":Nu(t,n);break;case"select":e=n.value,e!=null&&yn(t,!!n.multiple,e,!1)}};Ru=wo;Au=tn;var Dp={usingClientEntryPoint:!1,Events:[Na,mn,Hl,_u,ju,wo]},Wn={findFiberByHostInstance:He,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xp={bundleType:Wn.bundleType,version:Wn.version,rendererPackageName:Wn.rendererPackageName,rendererConfig:Wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mu(t),t===null?null:t.stateNode},findFiberByHostInstance:Wn.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Ol=Xa.inject(xp),Zt=Xa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(e))throw Error(C(200));return vp(t,e,null,n)};Et.createRoot=function(t,e){if(!Eo(t))throw Error(C(299));var n=!1,a="",l=gd;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=No(t,1,!1,null,null,n,!1,a,l),t[oe]=e.current,fa(t.nodeType===8?t.parentNode:t),new Po(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Mu(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return tn(t)};Et.hydrate=function(t,e,n){if(!tr(e))throw Error(C(200));return er(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!Eo(t))throw Error(C(405));var a=n!=null&&n.hydratedSources||null,l=!1,r="",i=gd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),e=vd(e,null,t,1,n??null,l,!1,r,i),t[oe]=e.current,fa(t),a)for(t=0;t<a.length;t++)n=a[t],l=n._getVersion,l=l(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,l]:e.mutableSourceEagerHydrationData.push(n,l);return new Zl(e)};Et.render=function(t,e,n){if(!tr(e))throw Error(C(200));return er(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!tr(t))throw Error(C(40));return t._reactRootContainer?(tn(function(){er(null,null,t,!1,function(){t._reactRootContainer=null,t[oe]=null})}),!0):!1};Et.unstable_batchedUpdates=wo;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,a){if(!tr(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return er(t,e,n,!1,a)};Et.version="18.2.0-next-9e3b772b8-20220608";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(t){console.error(t)}}yd(),vu.exports=Et;var Tp=vu.exports,Ks=Tp;Mr.createRoot=Ks.createRoot,Mr.hydrateRoot=Ks.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ta.apply(this,arguments)}var ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ye||(ye={}));const Xs="popstate";function Bp(t){t===void 0&&(t={});function e(l,r){let{pathname:i="/",search:s="",hash:u=""}=an(l.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Li("",{pathname:i,search:s,hash:u},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(l,r){let i=l.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let u=l.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof r=="string"?r:jl(r))}function a(l,r){Lo(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(r)+")")}return Sp(e,n,a,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wp(){return Math.random().toString(36).substr(2,8)}function Ys(t,e){return{usr:t.state,key:t.key,idx:e}}function Li(t,e,n,a){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?an(e):e,{state:n,key:e&&e.key||a||wp()})}function jl(t){let{pathname:e="/",search:n="",hash:a=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function an(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substr(a),t=t.substr(0,a)),t&&(e.pathname=t)}return e}function Sp(t,e,n,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:r=!1}=a,i=l.history,s=ye.Pop,u=null,c=f();c==null&&(c=0,i.replaceState(Ta({},i.state,{idx:c}),""));function f(){return(i.state||{idx:null}).idx}function h(){s=ye.Pop;let I=f(),p=I==null?null:I-c;c=I,u&&u({action:s,location:y.location,delta:p})}function b(I,p){s=ye.Push;let m=Li(y.location,I,p);n&&n(m,I),c=f()+1;let v=Ys(m,c),D=y.createHref(m);try{i.pushState(v,"",D)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;l.location.assign(D)}r&&u&&u({action:s,location:y.location,delta:1})}function g(I,p){s=ye.Replace;let m=Li(y.location,I,p);n&&n(m,I),c=f();let v=Ys(m,c),D=y.createHref(m);i.replaceState(v,"",D),r&&u&&u({action:s,location:y.location,delta:0})}function T(I){let p=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof I=="string"?I:jl(I);return m=m.replace(/ $/,"%20"),tt(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let y={get action(){return s},get location(){return t(l,i)},listen(I){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Xs,h),u=I,()=>{l.removeEventListener(Xs,h),u=null}},createHref(I){return e(l,I)},createURL:T,encodeLocation(I){let p=T(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:b,replace:g,go(I){return i.go(I)}};return y}var qs;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qs||(qs={}));function Ip(t,e,n){n===void 0&&(n="/");let a=typeof e=="string"?an(e):e,l=_o(a.pathname||"/",n);if(l==null)return null;let r=Dd(t);Cp(r);let i=null;for(let s=0;i==null&&s<r.length;++s){let u=Mp(l);i=Ap(r[s],u)}return i}function Dd(t,e,n,a){e===void 0&&(e=[]),n===void 0&&(n=[]),a===void 0&&(a="");let l=(r,i,s)=>{let u={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};u.relativePath.startsWith("/")&&(tt(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let c=Ne([a,u.relativePath]),f=n.concat(u);r.children&&r.children.length>0&&(tt(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dd(r.children,e,f,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:jp(c,r.index),routesMeta:f})};return t.forEach((r,i)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))l(r,i);else for(let u of xd(r.path))l(r,i,u)}),e}function xd(t){let e=t.split("/");if(e.length===0)return[];let[n,...a]=e,l=n.endsWith("?"),r=n.replace(/\?$/,"");if(a.length===0)return l?[r,""]:[r];let i=xd(a.join("/")),s=[];return s.push(...i.map(u=>u===""?r:[r,u].join("/"))),l&&s.push(...i),s.map(u=>t.startsWith("/")&&u===""?"/":u)}function Cp(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Rp(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Np=/^:[\w-]+$/,kp=3,Pp=2,Ep=1,Lp=10,_p=-2,Js=t=>t==="*";function jp(t,e){let n=t.split("/"),a=n.length;return n.some(Js)&&(a+=_p),e&&(a+=Pp),n.filter(l=>!Js(l)).reduce((l,r)=>l+(Np.test(r)?kp:r===""?Ep:Lp),a)}function Rp(t,e){return t.length===e.length&&t.slice(0,-1).every((a,l)=>a===e[l])?t[t.length-1]-e[e.length-1]:0}function Ap(t,e){let{routesMeta:n}=t,a={},l="/",r=[];for(let i=0;i<n.length;++i){let s=n[i],u=i===n.length-1,c=l==="/"?e:e.slice(l.length)||"/",f=Fp({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!f)return null;Object.assign(a,f.params);let h=s.route;r.push({params:a,pathname:Ne([l,f.pathname]),pathnameBase:$p(Ne([l,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(l=Ne([l,f.pathnameBase]))}return r}function Fp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,a]=zp(t.path,t.caseSensitive,t.end),l=e.match(n);if(!l)return null;let r=l[0],i=r.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:a.reduce((c,f,h)=>{let{paramName:b,isOptional:g}=f;if(b==="*"){let y=s[h]||"";i=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const T=s[h];return g&&!T?c[b]=void 0:c[b]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:i,pattern:t}}function zp(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Lo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let a=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,u)=>(a.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function Mp(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}function Up(t,e){e===void 0&&(e="/");let{pathname:n,search:a="",hash:l=""}=typeof t=="string"?an(t):t;return{pathname:n?n.startsWith("/")?n:Op(n,e):e,search:Wp(a),hash:Hp(l)}}function Op(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Fr(t,e,n,a){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jo(t,e){let n=Vp(t);return e?n.map((a,l)=>l===t.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Ro(t,e,n,a){a===void 0&&(a=!1);let l;typeof t=="string"?l=an(t):(l=Ta({},t),tt(!l.pathname||!l.pathname.includes("?"),Fr("?","pathname","search",l)),tt(!l.pathname||!l.pathname.includes("#"),Fr("#","pathname","hash",l)),tt(!l.search||!l.search.includes("#"),Fr("#","search","hash",l)));let r=t===""||l.pathname==="",i=r?"/":l.pathname,s;if(i==null)s=n;else{let h=e.length-1;if(!a&&i.startsWith("..")){let b=i.split("/");for(;b[0]==="..";)b.shift(),h-=1;l.pathname=b.join("/")}s=h>=0?e[h]:"/"}let u=Up(l,s),c=i&&i!=="/"&&i.endsWith("/"),f=(r||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Ne=t=>t.join("/").replace(/\/\/+/g,"/"),$p=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Wp=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hp=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gp(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Td=["post","put","patch","delete"];new Set(Td);const Qp=["get",...Td];new Set(Qp);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ba.apply(this,arguments)}const Ao=d.createContext(null),Kp=d.createContext(null),Fe=d.createContext(null),nr=d.createContext(null),de=d.createContext({outlet:null,matches:[],isDataRoute:!1}),Bd=d.createContext(null);function Xp(t,e){let{relative:n}=e===void 0?{}:e;An()||tt(!1);let{basename:a,navigator:l}=d.useContext(Fe),{hash:r,pathname:i,search:s}=Sd(t,{relative:n}),u=i;return a!=="/"&&(u=i==="/"?a:Ne([a,i])),l.createHref({pathname:u,search:s,hash:r})}function An(){return d.useContext(nr)!=null}function ln(){return An()||tt(!1),d.useContext(nr).location}function wd(t){d.useContext(Fe).static||d.useLayoutEffect(t)}function Fo(){let{isDataRoute:t}=d.useContext(de);return t?cb():Yp()}function Yp(){An()||tt(!1);let t=d.useContext(Ao),{basename:e,future:n,navigator:a}=d.useContext(Fe),{matches:l}=d.useContext(de),{pathname:r}=ln(),i=JSON.stringify(jo(l,n.v7_relativeSplatPath)),s=d.useRef(!1);return wd(()=>{s.current=!0}),d.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){a.go(c);return}let h=Ro(c,JSON.parse(i),r,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Ne([e,h.pathname])),(f.replace?a.replace:a.push)(h,f.state,f)},[e,a,i,r,t])}const qp=d.createContext(null);function Jp(t){let e=d.useContext(de).outlet;return e&&d.createElement(qp.Provider,{value:t},e)}function Sd(t,e){let{relative:n}=e===void 0?{}:e,{future:a}=d.useContext(Fe),{matches:l}=d.useContext(de),{pathname:r}=ln(),i=JSON.stringify(jo(l,a.v7_relativeSplatPath));return d.useMemo(()=>Ro(t,JSON.parse(i),r,n==="path"),[t,i,r,n])}function Zp(t,e){return tb(t,e)}function tb(t,e,n,a){An()||tt(!1);let{navigator:l}=d.useContext(Fe),{matches:r}=d.useContext(de),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let c=ln(),f;if(e){var h;let I=typeof e=="string"?an(e):e;u==="/"||(h=I.pathname)!=null&&h.startsWith(u)||tt(!1),f=I}else f=c;let b=f.pathname||"/",g=b;if(u!=="/"){let I=u.replace(/^\//,"").split("/");g="/"+b.replace(/^\//,"").split("/").slice(I.length).join("/")}let T=Ip(t,{pathname:g}),y=rb(T&&T.map(I=>Object.assign({},I,{params:Object.assign({},s,I.params),pathname:Ne([u,l.encodeLocation?l.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?u:Ne([u,l.encodeLocation?l.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),r,n,a);return e&&y?d.createElement(nr.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ye.Pop}},y):y}function eb(){let t=ub(),e=Gp(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},e),n?d.createElement("pre",{style:l},n):null,null)}const nb=d.createElement(eb,null);class ab extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?d.createElement(de.Provider,{value:this.props.routeContext},d.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lb(t){let{routeContext:e,match:n,children:a}=t,l=d.useContext(Ao);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),d.createElement(de.Provider,{value:e},a)}function rb(t,e,n,a){var l;if(e===void 0&&(e=[]),n===void 0&&(n=null),a===void 0&&(a=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let i=t,s=(l=n)==null?void 0:l.errors;if(s!=null){let f=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id]));f>=0||tt(!1),i=i.slice(0,Math.min(i.length,f+1))}let u=!1,c=-1;if(n&&a&&a.v7_partialHydration)for(let f=0;f<i.length;f++){let h=i[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:b,errors:g}=n,T=h.route.loader&&b[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||T){u=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((f,h,b)=>{let g,T=!1,y=null,I=null;n&&(g=s&&h.route.id?s[h.route.id]:void 0,y=h.route.errorElement||nb,u&&(c<0&&b===0?(db("route-fallback",!1),T=!0,I=null):c===b&&(T=!0,I=h.route.hydrateFallbackElement||null)));let p=e.concat(i.slice(0,b+1)),m=()=>{let v;return g?v=y:T?v=I:h.route.Component?v=d.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,d.createElement(lb,{match:h,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||b===0)?d.createElement(ab,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Id=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Id||{}),Rl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Rl||{});function ib(t){let e=d.useContext(Ao);return e||tt(!1),e}function ob(t){let e=d.useContext(Kp);return e||tt(!1),e}function sb(t){let e=d.useContext(de);return e||tt(!1),e}function Cd(t){let e=sb(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function ub(){var t;let e=d.useContext(Bd),n=ob(Rl.UseRouteError),a=Cd(Rl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[a]}function cb(){let{router:t}=ib(Id.UseNavigateStable),e=Cd(Rl.UseNavigateStable),n=d.useRef(!1);return wd(()=>{n.current=!0}),d.useCallback(function(l,r){r===void 0&&(r={}),n.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Ba({fromRouteId:e},r)))},[t,e])}const Zs={};function db(t,e,n){!e&&!Zs[t]&&(Zs[t]=!0)}function mb(t){let{to:e,replace:n,state:a,relative:l}=t;An()||tt(!1);let{future:r,static:i}=d.useContext(Fe),{matches:s}=d.useContext(de),{pathname:u}=ln(),c=Fo(),f=Ro(e,jo(s,r.v7_relativeSplatPath),u,l==="path"),h=JSON.stringify(f);return d.useEffect(()=>c(JSON.parse(h),{replace:n,state:a,relative:l}),[c,h,l,n,a]),null}function tu(t){return Jp(t.context)}function Xn(t){tt(!1)}function fb(t){let{basename:e="/",children:n=null,location:a,navigationType:l=ye.Pop,navigator:r,static:i=!1,future:s}=t;An()&&tt(!1);let u=e.replace(/^\/*/,"/"),c=d.useMemo(()=>({basename:u,navigator:r,static:i,future:Ba({v7_relativeSplatPath:!1},s)}),[u,s,r,i]);typeof a=="string"&&(a=an(a));let{pathname:f="/",search:h="",hash:b="",state:g=null,key:T="default"}=a,y=d.useMemo(()=>{let I=_o(f,u);return I==null?null:{location:{pathname:I,search:h,hash:b,state:g,key:T},navigationType:l}},[u,f,h,b,g,T,l]);return y==null?null:d.createElement(Fe.Provider,{value:c},d.createElement(nr.Provider,{children:n,value:y}))}function pb(t){let{children:e,location:n}=t;return Zp(_i(e),n)}new Promise(()=>{});function _i(t,e){e===void 0&&(e=[]);let n=[];return d.Children.forEach(t,(a,l)=>{if(!d.isValidElement(a))return;let r=[...e,l];if(a.type===d.Fragment){n.push.apply(n,_i(a.props.children,r));return}a.type!==Xn&&tt(!1),!a.props.index||!a.props.children||tt(!1);let i={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=_i(a.props.children,r)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ji.apply(this,arguments)}function bb(t,e){if(t==null)return{};var n={},a=Object.keys(t),l,r;for(r=0;r<a.length;r++)l=a[r],!(e.indexOf(l)>=0)&&(n[l]=t[l]);return n}function hb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vb(t,e){return t.button===0&&(!e||e==="_self")&&!hb(t)}function Ri(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let a=t[n];return e.concat(Array.isArray(a)?a.map(l=>[n,l]):[[n,a]])},[]))}function gb(t,e){let n=Ri(t);return e&&e.forEach((a,l)=>{n.has(l)||e.getAll(l).forEach(r=>{n.append(l,r)})}),n}const yb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Db="6";try{window.__reactRouterVersion=Db}catch{}const xb="startTransition",eu=dm[xb];function Tb(t){let{basename:e,children:n,future:a,window:l}=t,r=d.useRef();r.current==null&&(r.current=Bp({window:l,v5Compat:!0}));let i=r.current,[s,u]=d.useState({action:i.action,location:i.location}),{v7_startTransition:c}=a||{},f=d.useCallback(h=>{c&&eu?eu(()=>u(h)):u(h)},[u,c]);return d.useLayoutEffect(()=>i.listen(f),[i,f]),d.createElement(fb,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:i,future:a})}const Bb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sb=d.forwardRef(function(e,n){let{onClick:a,relative:l,reloadDocument:r,replace:i,state:s,target:u,to:c,preventScrollReset:f,unstable_viewTransition:h}=e,b=bb(e,yb),{basename:g}=d.useContext(Fe),T,y=!1;if(typeof c=="string"&&wb.test(c)&&(T=c,Bb))try{let v=new URL(window.location.href),D=c.startsWith("//")?new URL(v.protocol+c):new URL(c),w=_o(D.pathname,g);D.origin===v.origin&&w!=null?c=w+D.search+D.hash:y=!0}catch{}let I=Xp(c,{relative:l}),p=Ib(c,{replace:i,state:s,target:u,preventScrollReset:f,relative:l,unstable_viewTransition:h});function m(v){a&&a(v),v.defaultPrevented||p(v)}return d.createElement("a",ji({},b,{href:T||I,onClick:y||r?a:m,ref:n,target:u}))});var nu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(nu||(nu={}));var au;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(au||(au={}));function Ib(t,e){let{target:n,replace:a,state:l,preventScrollReset:r,relative:i,unstable_viewTransition:s}=e===void 0?{}:e,u=Fo(),c=ln(),f=Sd(t,{relative:i});return d.useCallback(h=>{if(vb(h,n)){h.preventDefault();let b=a!==void 0?a:jl(c)===jl(f);u(t,{replace:b,state:l,preventScrollReset:r,relative:i,unstable_viewTransition:s})}},[c,u,f,a,l,n,t,r,i,s])}function Nd(t){let e=d.useRef(Ri(t)),n=d.useRef(!1),a=ln(),l=d.useMemo(()=>gb(a.search,n.current?null:e.current),[a.search]),r=Fo(),i=d.useCallback((s,u)=>{const c=Ri(typeof s=="function"?s(l):s);n.current=!0,r("?"+c,u)},[r,l]);return[l,i]}const ft=()=>{var t,e;if(typeof window<"u"){if((t=window.crypto)!=null&&t.randomUUID)return window.crypto.randomUUID();if((e=window.crypto)!=null&&e.getRandomValues)return window.crypto.getRandomValues(new Uint32Array(3)).join("-")}return Math.random().toString().substring(2)},kd=(t,e)=>{const n=t.children;Object.values(n).forEach(a=>{a.setAttribute(e.key,e.value),a.children.length>0&&kd(a,e)})},z=(...t)=>{let e="";return t.forEach((n,a)=>{if(n)if(typeof n=="string")e+=`${n} `;else for(let l in n)n[l]&&(e+=`${l} `)}),e.trim()},Cb=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],M=(t,e)=>Object.keys(t).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||Cb.includes(n))&&!e.includes(n)).reduce((n,a)=>(n[a]=t[a],n),{}),Nb=t=>{const{left:e,right:n}=t.getBoundingClientRect(),{innerWidth:a}=window;return e>=0&&n<=a},kb=t=>{const{top:e,bottom:n}=t.getBoundingClientRect(),{innerHeight:a}=window;return e>=0&&n<=a},Pb=t=>{var I;const{top:e,bottom:n,left:a,right:l,height:r,width:i}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:u}=window;let c=e<0,f=n>s,h=a<0,b=l>u;const g=t.hasAttribute("data-outside-vy"),T=t.hasAttribute("data-outside-vx"),y=(I=t==null?void 0:t.parentElement)==null?void 0:I.getBoundingClientRect();return y&&(g&&(t.getAttribute("data-outside-vy")==="top"?c=y.top-(n-y.bottom)<0:f=y.bottom+(y.top-e)>s),T&&(t.getAttribute("data-outside-vx")==="left"?h=y.left-(l-y.right)<0:b=y.right+(y.left-a)>u)),{outTop:c,outBottom:f,outLeft:h,outRight:b}},Pd=t=>{const{outTop:e,outBottom:n,outLeft:a,outRight:l}=Pb(t);e||n?t.setAttribute("data-outside-vy",e?"top":"bottom"):t.removeAttribute("data-outside-vy"),a||l?t.setAttribute("data-outside-vx",l?"right":"left"):t.removeAttribute("data-outside-vx")};function Eb(t,e){const n=e||d.useRef(e);function a(l){t.onClick&&t.onClick(l)}return o.jsx("button",{ref:n,...M(t,[]),id:t.id,className:z("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:l=>a(l),children:t.children})}const Lb=d.forwardRef(Eb),J=Lb,A="OVERWRITE_DEFAULT_ID",zo="LABEL SHOULD BE SET",Ee="-message",Le="-valid-message",_e="-invalid-message",lu="-placeholder",ar="TODO: Add a validMessage",lr="TODO: Add an invalidMessage",_b="Back",Ed="Close Button";var Ld=(t=>(t.FUNCTIONAL="functional",t.REGULAR="regular",t.EXPRESSIVE="expressive",t))(Ld||{});Object.entries(Ld).map(([,t])=>t);var _d=(t=>(t.PRIMARY="primary",t))(_d||{}),jd=(t=>(t.NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",t.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",t.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",t.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",t.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",t.BRAND_BG_LEVEL_1="brand-bg-lvl-1",t.BRAND_BG_LEVEL_2="brand-bg-lvl-2",t.BRAND_BG_LEVEL_3="brand-bg-lvl-3",t.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",t.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",t.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",t.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",t.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",t.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",t.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",t.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",t.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",t.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",t.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",t.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",t.WARNING_BG_LEVEL_1="warning-bg-lvl-1",t.WARNING_BG_LEVEL_2="warning-bg-lvl-2",t.WARNING_BG_LEVEL_3="warning-bg-lvl-3",t.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",t.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",t.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",t.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",t.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",t.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",t.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",t))(jd||{});Object.entries(jd).map(([,t])=>t);Object.entries(_d).map(([,t])=>t);var Rd=(t=>(t.CRITICAL="critical",t.INFORMATIONAL="informational",t.WARNING="warning",t.SUCCESSFUL="successful",t))(Rd||{});Object.entries(Rd).map(([,t])=>t);function jb(t,e){const n=e||d.useRef(e);function a(l){t.onClose&&t.onClose()}return o.jsxs("div",{ref:n,...M(t,[]),id:t.id,className:z("db-notification",t.className),"aria-live":t.ariaLive,"data-semantic":t.semantic,"data-variant":t.variant,"data-icon":t.icon,"data-link-variant":t.linkVariant,children:[o.jsx(o.Fragment,{children:t.image}),t.headline?o.jsx("h6",{children:t.headline}):null,o.jsx("p",{children:t.children}),t.timestamp?o.jsx("span",{children:t.timestamp}):null,o.jsx(o.Fragment,{children:t.link}),t.behaviour!=="permanent"?o.jsx(J,{icon:"cross",variant:"ghost",size:"small",id:t.closeButtonId,noText:!0,onClick:l=>a(),children:t.closeButtonText??Ed}):null]})}const Rb=d.forwardRef(jb),Ab=Rb;function Fb(t,e){const n=e||d.useRef(e);return o.jsx("span",{ref:n,...M(t,[]),id:t.id,className:z("db-badge",t.className),"data-semantic":t.semantic,"data-size":t.size,"data-emphasis":t.emphasis,"data-placement":t.placement,children:t.children})}const zb=d.forwardRef(Fb),Yt=zb;function Mb(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>({icon:"db"}));return o.jsx("div",{ref:n,...M(t,[]),"data-icon":t.hideLogo?"none":t.icon??a.icon,id:t.id,className:z("db-brand",t.className),children:t.children})}const Ub=d.forwardRef(Mb),Ad=Ub;function Ob(t,e){const n=e||d.useRef(e);function a(l){t.onClick&&t.onClick(l)}return o.jsx("div",{ref:n,...M(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:t.behaviour==="interactive"?"button":void 0,tabIndex:t.behaviour==="interactive"?0:void 0,onClick:l=>a(l),className:z("db-card",t.className),children:t.children})}const Vb=d.forwardRef(Ob),Fd=Vb;function $b(t,e){const n=e||d.useRef(e);return o.jsx("span",{ref:n,...M(t,[]),id:t.id,className:z("db-infotext",t.className),"data-icon":t.icon,"data-semantic":t.semantic,"data-size":t.size,children:t.children})}const Wb=d.forwardRef($b),Z=Wb;function Hb(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1),[r,i]=d.useState(()=>A),[s,u]=d.useState(()=>A+Ee),[c,f]=d.useState(()=>A+Le),[h,b]=d.useState(()=>A+_e),[g,T]=d.useState(()=>"");function y(D){t.onChange&&t.onChange(D),t.change&&t.change(D)}function I(D){t.onBlur&&t.onBlur(D),t.blur&&t.blur(D)}function p(D){t.onFocus&&t.onFocus(D),t.focus&&t.focus(D)}function m(){return t.validMessage||ar}function v(){var D;return t.invalidMessage||((D=n.current)==null?void 0:D.validationMessage)||lr}return d.useEffect(()=>{l(!0),i(t.id||"checkbox-"+ft())},[]),d.useEffect(()=>{a&&r&&(u(r+Ee),f(r+Le),b(r+_e),T([s,c,h].join(" ")))},[r,a]),d.useEffect(()=>{if(a&&document&&r){const D=document==null?void 0:document.getElementById(r);D&&(t.checked!=null&&(D.checked=t.checked),t.indeterminate!==void 0&&(D.indeterminate=t.indeterminate))}},[a,t.indeterminate,t.checked]),o.jsxs("div",{"data-size":t.size,"data-variant":t.variant,className:z("db-checkbox",t.className),children:[o.jsxs("label",{htmlFor:r,children:[o.jsx("input",{type:"checkbox","aria-invalid":t.customValidity==="invalid","data-custom-validity":t.customValidity,ref:n,...M(t,[]),id:r,name:t.name,checked:t.checked,disabled:t.disabled,value:t.value,required:t.required,onChange:D=>y(D),onBlur:D=>I(D),onFocus:D=>p(D),"aria-describedby":g}),t.label?o.jsx("span",{children:t.label}):null,t.children]}),t.message?o.jsx(Z,{size:"small",icon:t.messageIcon,id:s,children:t.message}):null,o.jsx(Z,{size:"small",semantic:"successful",id:c,children:m()}),o.jsx(Z,{size:"small",semantic:"critical",id:h,children:v()})]})}const Gb=d.forwardRef(Hb),We=Gb;function Qb(t,e){const n=e||d.useRef(e);return o.jsx("div",{ref:n,...M(t,[]),id:t.id,"data-margin":t.margin,"data-variant":t.variant,"data-emphasis":t.emphasis,className:z("db-divider",t.className)})}const Kb=d.forwardRef(Qb),Al=Kb;function Xb(t,e){const n=e||d.useRef(e),a=d.useRef(null);function l(i){i.key==="Escape"&&i.preventDefault(),(i==="close"||i.key==="Escape"||i.target.nodeName==="DIALOG"&&t.backdrop!=="none")&&t.onClose&&t.onClose()}function r(){n!=null&&n.current&&(t.open&&!n.current.open&&(a.current&&(a.current.hidden=!1),t.backdrop==="none"?n.current.show():n.current.showModal()),!t.open&&n.current.open&&(a.current&&(a.current.hidden=!0),setTimeout(()=>{var i;a.current&&(a.current.hidden=!1),(i=n.current)==null||i.close()},401)))}return d.useEffect(()=>{r()},[]),d.useEffect(()=>{r()},[t.open]),o.jsx("dialog",{className:"db-drawer",id:t.id,ref:n,...M(t,["onClose"]),onClick:i=>{l(i)},onKeyDown:i=>l(i),"data-backdrop":t.backdrop,children:o.jsxs("article",{ref:a,className:z("db-drawer-container",t.className),"data-spacing":t.spacing,"data-width":t.width,"data-direction":t.direction,"data-rounded":t.rounded,children:[o.jsxs("header",{className:"db-drawer-header",children:[o.jsx("div",{className:"db-drawer-header-text",children:o.jsx(o.Fragment,{children:t.drawerHeader})}),t.withCloseButton?o.jsx(J,{icon:"cross",variant:"ghost",className:"button-close-drawer",id:t.closeButtonId,noText:!0,onClick:i=>l("close"),children:t.closeButtonText??Ed}):null]}),o.jsx("div",{className:"db-drawer-content",children:t.children})]})})}const Yb=d.forwardRef(Xb),zd=Yb,qb=t=>{var n,a;const{target:e}=t;return!!(!((n=e==null?void 0:e.classList)!=null&&n.contains("db-navigation-item-expand-button"))&&((a=e==null?void 0:e.parentElement)!=null&&a.classList.contains("db-navigation-item")))};function Jb(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>!1),[s,u]=d.useState(()=>!1),[c,f]=d.useState(()=>({burgerMenuLabel:"BurgerMenu"}));function h(){t.onToggle&&t.onToggle(!t.drawerOpen)}function b(g){qb(g)&&h()}return d.useEffect(()=>{i(!0),l(t.id||"header-"+ft())},[]),d.useEffect(()=>{if(r&&document&&a&&t.forceMobile){const g=document.getElementById(a);g&&kd(g,{key:"data-force-mobile",value:"true"}),u(!0)}},[r]),o.jsxs("header",{ref:n,...M(t,[]),className:z("db-header",t.className),id:a,"data-on-forcing-mobile":t.forceMobile&&!s,children:[o.jsxs(zd,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:t.drawerOpen,onClose:()=>h(),children:[o.jsxs("div",{className:"db-header-drawer-navigation",children:[o.jsx("div",{className:"db-header-navigation",onClick:g=>b(g),children:t.children}),o.jsx("div",{className:"db-header-meta-navigation",children:o.jsx(o.Fragment,{children:t.metaNavigation})})]}),o.jsx("div",{className:"db-header-action-bar",children:o.jsx(o.Fragment,{children:t.actionBar})})]}),o.jsx("div",{className:"db-header-meta-navigation",children:o.jsx(o.Fragment,{children:t.metaNavigation})}),o.jsxs("div",{className:"db-header-navigation-bar",children:[o.jsx("div",{className:"db-header-brand-container",children:o.jsx(o.Fragment,{children:t.brand})}),o.jsxs("div",{className:"db-header-navigation-container",children:[o.jsx("div",{className:"db-header-navigation",children:t.children}),o.jsx("div",{className:"db-header-call-to-action",children:o.jsx(o.Fragment,{children:t.callToAction})})]}),o.jsxs("div",{className:"db-header-action-container",children:[o.jsx("div",{className:"db-header-burger-menu-container",children:o.jsx(J,{id:"button-burger-menu",icon:"menu",variant:"ghost",noText:!0,onClick:()=>h(),children:t.burgerMenuLabel??c.burgerMenuLabel})}),o.jsx("div",{className:"db-header-action-bar",children:o.jsx(o.Fragment,{children:t.actionBar})})]})]})]})}const Zb=d.forwardRef(Jb),th=Zb;function eh(t,e){const n=e||d.useRef(e);return o.jsx("span",{"aria-hidden":"true",ref:n,...M(t,[]),id:t.id,className:z("db-icon",t.className),"data-icon":t.icon,"data-icon-weight":t.weight,"data-icon-variant":t.variant,children:t.children})}const nh=d.forwardRef(eh),sl=nh;function ah(t,e){var B;const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>A+Ee),[s,u]=d.useState(()=>A+Le),[c,f]=d.useState(()=>A+_e),[h,b]=d.useState(()=>""),[g,T]=d.useState(()=>A),[y,I]=d.useState(()=>({label:zo,placeholder:" "}));function p(x){t.onInput&&t.onInput(x),t.input&&t.input(x)}function m(x){t.onChange&&t.onChange(x),t.change&&t.change(x)}function v(x){t.onBlur&&t.onBlur(x),t.blur&&t.blur(x)}function D(x){t.onFocus&&t.onFocus(x),t.focus&&t.focus(x)}function w(){return t.validMessage||ar}function S(){var x;return t.invalidMessage||((x=n.current)==null?void 0:x.validationMessage)||lr}return d.useEffect(()=>{l(t.id||"input-"+ft()),T(t.dataListId||`datalist-${ft()}`)},[]),d.useEffect(()=>{a&&(i(a+Ee),u(a+Le),f(a+_e))},[a]),d.useEffect(()=>{t.message,b([r].join(" "))},[t.message,r,s,c]),o.jsxs("div",{className:z("db-input",t.className),"data-variant":t.variant,"data-icon":t.icon,"data-icon-after":t.iconAfter,children:[o.jsx("label",{htmlFor:a,children:t.label??y.label}),o.jsx("input",{"aria-invalid":t.customValidity==="invalid","data-custom-validity":t.customValidity,ref:n,...M(t,[]),id:a,name:t.name,type:t.type||"text",placeholder:t.placeholder??y.placeholder,disabled:t.disabled,required:t.required,step:t.step,value:t.value,maxLength:t.maxLength,minLength:t.minLength,max:t.max,min:t.min,readOnly:t.readOnly,form:t.form,pattern:t.pattern,autoComplete:t.autocomplete,onInput:x=>p(x),onChange:x=>m(x),onBlur:x=>v(x),onFocus:x=>D(x),list:t.dataList&&g,"aria-describedby":h}),t.dataList?o.jsx("datalist",{id:g,children:(B=t.dataList)==null?void 0:B.map(x=>o.jsx("option",{value:x.key,children:x.value},g+"-option-"+x.key))}):null,t.children,t.message?o.jsx(Z,{size:"small",icon:t.messageIcon,id:r,children:t.message}):null,o.jsx(Z,{size:"small",semantic:"successful",id:s,children:w()}),o.jsx(Z,{size:"small",semantic:"critical",id:c,children:S()})]})}const lh=d.forwardRef(ah),Ve=lh;function rh(t,e){const n=e||d.useRef(e);d.useState(()=>A);function a(l){t.onClick&&t.onClick(l)}return o.jsxs("a",{ref:n,...M(t,[]),id:t.id,className:z("db-link",t.className),href:t.href,target:t.target,rel:t.rel,role:t.role,hrefLang:t.hreflang,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:l=>a(l),children:[t.text?o.jsx("span",{children:t.text}):null,t.children]})}const ih=d.forwardRef(rh),rr=ih;function oh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1);return d.useEffect(()=>{l(!t.fadeIn),document&&t.fadeIn?document.fonts.ready.then(()=>{l(!0)}):l(!0)},[]),o.jsxs("div",{ref:n,...M(t,[]),id:t.id,className:z("db-page",t.className,{"fixed-header-footer":t.type==="fixedHeaderFooter"}),"data-fade-in":t.fadeIn,"data-fonts-loaded":a,children:[o.jsx(o.Fragment,{children:t.header}),o.jsx("main",{className:"db-main",children:t.children}),o.jsx(o.Fragment,{children:t.footer})]})}const sh=d.forwardRef(oh),uh=sh;function ch(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1),[r,i]=d.useState(()=>A);function s(f){t.onChange&&t.onChange(f),t.change&&t.change(f)}function u(f){t.onBlur&&t.onBlur(f),t.blur&&t.blur(f)}function c(f){t.onFocus&&t.onFocus(f),t.focus&&t.focus(f)}return d.useEffect(()=>{l(!0),i(t.id||"radio-"+ft())},[]),d.useEffect(()=>{if(t.checked&&a&&document&&r){const f=document==null?void 0:document.getElementById(r);f&&t.checked!=null&&(f.checked=!0)}},[a,t.checked]),o.jsxs("label",{"data-size":t.size,"data-variant":t.variant,className:z("db-radio",t.className),htmlFor:r,children:[o.jsx("input",{type:"radio","aria-invalid":t.customValidity==="invalid","data-custom-validity":t.customValidity,ref:n,...M(t,[]),id:r,name:t.name,checked:t.checked,disabled:t.disabled,"aria-describedby":t.describedbyid,value:t.value,required:t.required,onChange:f=>s(f),onBlur:f=>u(f),onFocus:f=>c(f)}),t.label?o.jsx("span",{children:t.label}):null,t.children]})}const dh=d.forwardRef(ch),Mo=dh;function mh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A);return d.useEffect(()=>{l(t.id||"section-"+ft())},[]),o.jsx("section",{ref:n,...M(t,[]),id:a,"data-size":t.size||"medium",className:z("db-section",t.className),children:o.jsx("div",{"data-variant":t.variant,children:t.children})})}const fh=d.forwardRef(mh),ph=fh;function bh(t,e){var S;const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>A+Ee),[s,u]=d.useState(()=>A+Le),[c,f]=d.useState(()=>A+_e),[h,b]=d.useState(()=>""),[g,T]=d.useState(()=>A+lu);function y(B){t.onClick&&t.onClick(B)}function I(B){t.onChange&&t.onChange(B),t.change&&t.change(B)}function p(B){t.onBlur&&t.onBlur(B),t.blur&&t.blur(B)}function m(B){t.onFocus&&t.onFocus(B),t.focus&&t.focus(B)}function v(B){return B.label??B.value.toString()}function D(){return t.validMessage||ar}function w(){var B;return t.invalidMessage||((B=n.current)==null?void 0:B.validationMessage)||lr}return d.useEffect(()=>{l(t.id||"select-"+ft())},[]),d.useEffect(()=>{a&&(T(a+lu),i(a+Ee),u(a+Le),f(a+_e),b([r,s,c].join(" ")))},[a]),o.jsxs("div",{className:z("db-select",t.className),"data-variant":t.variant,"data-icon":t.icon,children:[o.jsx("label",{htmlFor:a,children:t.label??zo}),o.jsxs("select",{"aria-invalid":t.customValidity==="invalid","data-custom-validity":t.customValidity,ref:n,...M(t,[]),required:t.required,disabled:t.disabled,id:a,name:t.name,value:t.value,autoComplete:t.autocomplete,onClick:B=>y(B),onChange:B=>I(B),onBlur:B=>p(B),onFocus:B=>m(B),"aria-describedby":t.message&&r||g,children:[o.jsx("option",{hidden:!0}),t.options?o.jsx(d.Fragment,{children:(S=t.options)==null?void 0:S.map(B=>{var x;return o.jsxs(d.Fragment,{children:[B.options?o.jsx("optgroup",{label:v(B),children:(x=B.options)==null?void 0:x.map(L=>o.jsx("option",{value:L.value,disabled:L.disabled,children:v(L)},L.value.toString()))}):null,B.options?null:o.jsx("option",{value:B.value,disabled:B.disabled,children:v(B)})]},ft())})},ft()):null,t.children]}),o.jsx("span",{id:g,children:t.placeholder??t.label}),t.message?o.jsx(Z,{size:"small",icon:t.messageIcon,id:r,children:t.message}):null,o.jsx(Z,{size:"small",semantic:"successful",id:s,children:D()}),o.jsx(Z,{size:"small",semantic:"critical",id:c,children:w()})]})}const hh=d.forwardRef(bh),wa=hh;function vh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>!1);return d.useEffect(()=>{i(!0)},[]),d.useEffect(()=>{t.active&&r&&n.current&&(n.current.click(),i(!1))},[n.current,r]),o.jsx("li",{role:"tab",className:z("db-tab-item",t.className),children:o.jsxs("label",{htmlFor:a,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[o.jsx("input",{type:"radio",role:"tab",disabled:t.disabled,ref:n,...M(t,[]),id:a}),t.label?o.jsx(o.Fragment,{children:t.label}):null,t.children]})})}const gh=d.forwardRef(vh),vt=gh;function yh(t,e){const n=e||d.useRef(e);function a(){t.onRemove&&t.onRemove()}function l(){return t.removeButton?t.removeButton:"Remove tag"}return o.jsxs("div",{ref:n,...M(t,[]),id:t.id,className:z("db-tag",t.className),"data-disabled":t.disabled,"data-semantic":t.semantic,"data-emphasis":t.emphasis,"data-icon":t.icon,"data-no-text":t.noText,"data-overflow":t.overflow,children:[t.children,t.text?o.jsx(o.Fragment,{children:t.text}):null,t.behaviour==="removable"?o.jsx(J,{icon:"cross",size:"small",variant:"ghost",className:"db-tab-remove-button",onClick:r=>a(),noText:!0,title:l(),children:l()}):null]})}const Dh=d.forwardRef(yh),Md=Dh;function xh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>A+Ee),[s,u]=d.useState(()=>A+Le),[c,f]=d.useState(()=>A+_e),[h,b]=d.useState(()=>""),[g,T]=d.useState(()=>({label:zo,placeholder:" ",rows:"4"}));function y(w){t.onInput&&t.onInput(w),t.input&&t.input(w)}function I(w){t.onChange&&t.onChange(w),t.change&&t.change(w)}function p(w){t.onBlur&&t.onBlur(w),t.blur&&t.blur(w)}function m(w){t.onFocus&&t.onFocus(w),t.focus&&t.focus(w)}function v(){return t.validMessage||ar}function D(){var w;return t.invalidMessage||((w=n.current)==null?void 0:w.validationMessage)||lr}return d.useEffect(()=>{l(t.id||"textarea-"+ft())},[]),d.useEffect(()=>{a&&(i(a+Ee),u(a+Le),f(a+_e),b([r,s,c].join(" ")))},[a]),o.jsxs("div",{className:z("db-textarea",t.className),"data-variant":t.variant,children:[o.jsx("label",{htmlFor:a,children:t.label??g.label}),o.jsx("textarea",{"aria-invalid":t.customValidity==="invalid","data-custom-validity":t.customValidity,ref:n,...M(t,[]),id:a,"data-resize":t.resize,disabled:t.disabled,required:t.required,readOnly:t.readOnly,form:t.form,maxLength:t.maxLength,minLength:t.minLength,name:t.name,wrap:t.wrap,spellCheck:t.spellCheck,autoComplete:t.autocomplete,onInput:w=>y(w),onChange:w=>I(w),onBlur:w=>p(w),onFocus:w=>m(w),value:t.value,"aria-describedby":t.message&&r,placeholder:t.placeholder??g.placeholder,rows:t.rows??g.rows,cols:t.cols}),t.message?o.jsx(Z,{size:"small",icon:t.messageIcon,id:r,children:t.message}):null,o.jsx(Z,{size:"small",semantic:"successful",id:s,children:v()}),o.jsx(Z,{size:"small",semantic:"critical",id:c,children:D()})]})}const Th=d.forwardRef(xh),ul=Th;function Bh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1),[r,i]=d.useState(()=>!1),[s,u]=d.useState(()=>!0),[c,f]=d.useState(()=>!1),[h,b]=d.useState(()=>"sub-navigation-"+ft());function g(y){t.onClick&&t.onClick(y),r&&f(!0)}function T(y){y.stopPropagation(),f(!1)}return d.useEffect(()=>{l(!0)},[]),d.useEffect(()=>{t.subNavigationExpanded!==void 0&&f(!!t.subNavigationExpanded)},[t.subNavigationExpanded]),d.useEffect(()=>{if(t.areaPopup!==void 0)i(t.areaPopup),u(r);else if(a&&document&&h){const y=document==null?void 0:document.getElementById(h);if(y){const I=y.children;(I==null?void 0:I.length)>0?(i(!0),Nb(y)||y.setAttribute("data-outside-vx","true"),kb(y)||y.setAttribute("data-outside-vy","true")):u(!1)}}},[a,t.areaPopup]),o.jsxs("li",{ref:n,...M(t,[]),id:t.id,className:z("db-navigation-item",t.className),"data-width":t.width,"data-icon":t.icon,"aria-current":t.active?"page":void 0,"aria-disabled":t.disabled,children:[s?null:o.jsx(o.Fragment,{children:t.children}),s?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":c,disabled:t.disabled,onClick:y=>g(y),children:t.children}),o.jsxs("menu",{className:"db-sub-navigation",id:h,children:[r?o.jsx("div",{className:"db-mobile-navigation-back",children:o.jsx(J,{icon:"arrow_left",variant:"ghost",id:t.backButtonId,onClick:y=>T(y),children:t.backButtonText??_b})}):null,o.jsx(o.Fragment,{children:t.subNavigation})]})]}):null]})}const wh=d.forwardRef(Bh),$t=wh;function Sh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>!1);function s(u){u==null||u.preventDefault();const c=!r;t.onToggle&&t.onToggle(c),i(c)}return d.useEffect(()=>{l(t.id||"accordion-item-"+ft()),t.defaultOpen&&i(t.defaultOpen)},[]),o.jsxs("details",{ref:n,...M(t,[]),id:a,className:z("db-accordion-item",t.className),"aria-disabled":t.disabled,open:r,name:t.name,children:[o.jsxs("summary",{onClick:u=>s(u),children:[t.headlinePlain?o.jsx(o.Fragment,{children:t.headlinePlain}):null,t.headlinePlain?null:o.jsx(o.Fragment,{children:t.headline})]}),o.jsxs("div",{children:[t.content?o.jsx(o.Fragment,{children:t.content}):null,t.content?null:o.jsx(o.Fragment,{children:t.children})]})]})}const Ih=d.forwardRef(Sh),Sn=Ih;function Ch(t,e){var h;const n=e||d.useRef(e),[a,l]=d.useState(()=>[]),[r,i]=d.useState(()=>""),[s,u]=d.useState(()=>!1);function c(b){try{return typeof b=="string"?JSON.parse(b):b}catch(g){console.error(g)}}function f(b){a.includes(b)?t.behaviour==="single"?l([]):l(a.filter(g=>g!==b)):t.behaviour==="single"?l([b]):l([...a,b]),t.onChange&&t.onChange(a)}return d.useEffect(()=>{u(!0)},[]),d.useEffect(()=>{if(n.current&&s){const b=n.current.getElementsByTagName("details");if(b){let g=[];Array.from(b).forEach((T,y)=>{var m;const I=T.id;(T.open||(m=t.initOpenIndex)!=null&&m.includes(y))&&g.push(I);const p=T.getElementsByTagName("summary");(p==null?void 0:p.length)>0&&p[0].addEventListener("click",()=>{i(I)})}),t.behaviour==="single"&&g.length>1&&(g=[g[0]]),l(g),u(!1)}}},[n.current,s]),d.useEffect(()=>{(r==null?void 0:r.length)>0&&(f(r),i(""))},[r]),d.useEffect(()=>{if(n!=null&&n.current){const b=n.current.getElementsByTagName("details");b&&Array.from(b).forEach(g=>{g.open=a.includes(g.id)})}},[a]),o.jsxs("div",{ref:n,...M(t,[]),id:t.id,className:z("db-accordion",t.className),"data-variant":t.variant,children:[t.items?null:o.jsx(o.Fragment,{children:t.children}),t.items?o.jsx(o.Fragment,{children:(h=c(t.items))==null?void 0:h.map((b,g)=>o.jsx(Sn,{headlinePlain:b.headlinePlain,disabled:b.disabled,content:b.content},`accordion-item-${g}`))}):null]})}const Nh=d.forwardRef(Ch),Ud=Nh;function kh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A);return d.useEffect(()=>{l(t.id||"navigation-"+ft())},[]),o.jsx("nav",{ref:n,...M(t,[]),id:a,className:z("db-navigation",t.className),children:o.jsx("menu",{children:t.children})})}const Ph=d.forwardRef(kh),Od=Ph;function Eh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1);function r(){if(!n.current)return;const i=n.current.querySelector("article");i&&Pd(i)}return d.useEffect(()=>{l(!0)},[]),d.useEffect(()=>{if(n.current&&a){const i=Array.from(n.current.children);i.length>=2&&(i[0].ariaHasPopup="true"),l(!1)}},[n.current,a]),o.jsxs("div",{ref:n,...M(t,[]),id:t.id,className:z("db-popover",t.className),onFocus:i=>r(),onMouseEnter:i=>r(),children:[o.jsx(o.Fragment,{children:t.trigger}),o.jsx("article",{className:"db-popover-content","data-spacing":t.spacing,"data-gap":t.gap,"data-animation":t.animation,"data-open":t.open,"data-delay":t.delay,"data-width":t.width,"data-placement":t.placement,children:t.children})]})}const Lh=d.forwardRef(Eh),_h=Lh;function jh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>!1);function r(s){s.stopPropagation()}function i(){n!=null&&n.current&&Pd(n.current)}return d.useEffect(()=>{l(!0)},[]),d.useEffect(()=>{if(n.current&&a){const s=n.current.parentElement;s&&["mouseenter","focus"].forEach(u=>{s.addEventListener(u,()=>i())}),l(!1)}},[n.current,a]),o.jsx("i",{role:"tooltip","data-gap":"true",ref:n,...M(t,[]),id:t.id,"data-emphasis":t.emphasis,"data-animation":t.animation,"data-delay":t.delay,"data-width":t.width,"data-variant":t.variant,"data-placement":t.placement,onClick:s=>r(s),className:z("db-tooltip",t.className),children:t.children})}const Rh=d.forwardRef(jh),Ah=Rh;function Fh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A);return d.useEffect(()=>{l(t.id||"tab-list-"+ft())},[]),o.jsx("div",{role:"tablist",ref:n,...M(t,[]),id:a,className:z("db-tab-list",t.className),children:o.jsx("ul",{children:t.children})})}const zh=d.forwardRef(Fh),Fl=zh;function Mh(t,e){const n=e||d.useRef(e),[a,l]=d.useState(()=>A);return d.useEffect(()=>{},[]),o.jsxs("article",{role:"tabpanel",ref:n,...M(t,[]),className:z("db-tab-panel",t.className),id:a,children:[t.content?o.jsx(o.Fragment,{children:t.content}):null,t.children]})}const Uh=d.forwardRef(Mh),xt=Uh;function Oh(t,e){var D,w;const n=e||d.useRef(e),[a,l]=d.useState(()=>A),[r,i]=d.useState(()=>""),[s,u]=d.useState(()=>!1),[c,f]=d.useState(()=>!1),[h,b]=d.useState(()=>!1),[g,T]=d.useState(()=>null);function y(S){try{return typeof S=="string"?JSON.parse(S):S}catch(B){console.error(B)}}function I(S){const B=S.scrollWidth>S.clientWidth;f(B&&S.scrollLeft>1),b(B&&S.scrollLeft<S.scrollWidth-S.clientWidth)}function p(S){let B=t.arrowScrollDistance||100;S&&(B*=-1),g==null||g.scrollBy({top:0,left:B,behavior:"smooth"})}function m(){if(n!=null&&n.current){const S=n.current.getElementsByClassName("db-tab-list");if((S==null?void 0:S.length)>0){const B=S.item(0);if(B&&(B.getAttributeNames().includes("aria-orientation")||B.setAttribute("aria-orientation",t.orientation||"horizontal"),t.behaviour==="arrows")){const x=B.querySelector("ul");T(x),I(x),x.addEventListener("scroll",()=>{I(x)})}}}}function v(S){if(n.current){const B=n.current.getElementsByClassName("db-tab-item");(B==null?void 0:B.length)>0&&Array.from(B).forEach((L,P)=>{const bt=L.querySelector("label"),Mt=L.querySelector("input");if(Mt&&bt){if(Mt.id===A){const Kt=`${r}-tab-${P}`;bt.setAttribute("for",Kt),bt.setAttribute("aria-controls",`${r}-tab-panel-${P}`),Mt.id=Kt,Mt.setAttribute("name",r)}if(S){const Kt=!t.initialSelectedMode||t.initialSelectedMode==="auto",Pa=t.initialSelectedIndex===void 0&&P===0||t.initialSelectedIndex===P;Kt&&Pa&&Mt.click()}}});const x=n.current.getElementsByClassName("db-tab-panel");(x==null?void 0:x.length)>0&&Array.from(x).forEach((L,P)=>{L.id===A&&(L.id=`${r}-tab-panel-${P}`,L.setAttribute("aria-labelledby",`${r}-tab-${P}`))})}}return d.useEffect(()=>{l(t.id||"tabs-"+ft()),i(t.name||ft()),u(!0)},[]),d.useEffect(()=>{if(n.current&&s){m(),v(!0);const S=n.current.getElementsByClassName("db-tab-list");(S==null?void 0:S.length)>0&&new MutationObserver(x=>{x.forEach(L=>{(L.removedNodes.length||L.addedNodes.length)&&(m(),v())})}).observe(S[0],{childList:!0,subtree:!0}),u(!1)}},[n.current,s]),o.jsxs("div",{ref:n,...M(t,[]),id:a,className:z("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":t.alignment??"start","data-width":t.width??"auto",children:[c?o.jsx(J,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:S=>p(!0),children:"Scroll left"}):null,t.tabs?o.jsxs(o.Fragment,{children:[o.jsx(Fl,{children:(D=y(t.tabs))==null?void 0:D.map((S,B)=>o.jsx(vt,{active:S.active,label:S.label,iconAfter:S.iconAfter,icon:S.icon,noText:S.noText},t.name+"tab-item"+B))}),(w=y(t.tabs))==null?void 0:w.map((S,B)=>o.jsx(xt,{content:S.content,children:S.children},t.name+"tab-panel"+B))]}):null,h?o.jsx(J,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:S=>p(),children:"Scroll right"}):null,t.children]})}const Vh=d.forwardRef(Oh),Ai=Vh,zl="density",Ml="color";var ir=(t=>(t.FUNCTIONAL="functional",t.REGULAR="regular",t.EXPRESSIVE="expressive",t))(ir||{});const $h=Object.entries(ir).map(([,t])=>t);var Vd=(t=>(t.PRIMARY="primary",t))(Vd||{}),or=(t=>(t.NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",t.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",t.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",t.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",t.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",t.BRAND_BG_LEVEL_1="brand-bg-lvl-1",t.BRAND_BG_LEVEL_2="brand-bg-lvl-2",t.BRAND_BG_LEVEL_3="brand-bg-lvl-3",t.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",t.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",t.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",t.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",t.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",t.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",t.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",t.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",t.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",t.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",t.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",t.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",t.WARNING_BG_LEVEL_1="warning-bg-lvl-1",t.WARNING_BG_LEVEL_2="warning-bg-lvl-2",t.WARNING_BG_LEVEL_3="warning-bg-lvl-3",t.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",t.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",t.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",t.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",t.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",t.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",t.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",t))(or||{});const Wh=Object.entries(or).map(([,t])=>t);Object.entries(Vd).map(([,t])=>t);var $d=(t=>(t.CRITICAL="critical",t.INFORMATIONAL="informational",t.WARNING="warning",t.SUCCESSFUL="successful",t))($d||{});Object.entries($d).map(([,t])=>t);const Wd=()=>{const[t,e]=Nd(),[n,a]=d.useState(t.get(zl)??ir.REGULAR),[l,r]=d.useState(t.get(Ml)??or.NEUTRAL_BG_LEVEL_1),[i,s]=d.useState(void 0),[u,c]=d.useState(!1),[f,h]=d.useState(!1);return d.useEffect(()=>{for(const[b,g]of t.entries())g&&(b===zl&&n!==g&&a(g),b===Ml&&l!==g&&r(g),b==="page"&&i!==g.toLowerCase()&&s(g.toLowerCase()),b==="fullscreen"&&u!==!!g&&c(!!g));h(!0)},[t]),d.useEffect(()=>{if(f){const b={density:n,color:l};i&&(b.page=i),u&&(b.fullscreen=!0),e(b)}},[l,n,i,u,f]),[n,a,l,r,i,u]},Hh=({onDensityChange:t,onColorChange:e})=>{const[n,a]=Nd(),[l,r]=d.useState(n.get(zl)??ir.REGULAR),[i,s]=d.useState(n.get(Ml)??or.NEUTRAL_BG_LEVEL_1);return d.useEffect(()=>{for(const[u,c]of n.entries())c&&(u===zl&&l!==c&&(r(c),t(c)),u===Ml&&i!==c&&(s(c),e(c)))},[n]),d.useEffect(()=>{a({density:l,color:i})},[i,l]),o.jsxs(o.Fragment,{children:[o.jsx(wa,{label:"Density",variant:"floating",value:l,onChange:u=>{var c;r((c=u==null?void 0:u.target)==null?void 0:c.value)},children:$h.map(u=>o.jsx("option",{value:u,children:u},`density-option-${u}`))}),o.jsx(wa,{label:"Color",variant:"floating",value:i,onChange:u=>{var c;s((c=u==null?void 0:u.target)==null?void 0:c.value)},children:Wh.map(u=>o.jsx("option",{value:u,children:u},`color-option-${u}`))})]})},ru=({examples:t})=>o.jsx(Fd,{className:"variants-card",children:o.jsx("div",{className:"variants-list",children:t.map((e,n)=>o.jsx("div",{style:e.style,className:e.className,children:e.example},`${e.name}-${n}`))})}),$=({title:t,variants:e})=>{const n=Wd()[4];if(n){const a=e.find(l=>l.name.toLowerCase()===n);if(a)return o.jsx(ru,{...a})}return o.jsxs("div",{className:"default-container",children:[o.jsx("h1",{children:t}),e==null?void 0:e.map((a,l)=>o.jsxs("div",{children:[o.jsx(Al,{}),o.jsx(rr,{className:"link-headline",content:"external",target:"_blank",href:`${window.location.href}&page=${a.name.toLowerCase()}`,children:a.name}),o.jsx(ru,{...a})]},`${a.name}-${l}`))]})},Gh=[{name:"Tonality",examples:[{name:"Functional",className:"db-density-functional",props:{},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"(Default) Regular",className:"db-density-regular",props:{},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"Expressive",className:"db-density-expressive",props:{},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}}]},{name:"Orientation",examples:[{name:"horizontal",props:{orientation:"horizontal"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"vertical",props:{orientation:"vertical"},code:{html:`<div class="db-tabs" data-orientation="vertical">
		<div role="tablist" class="db-tab-list" aria-orientation="vertical">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs orientation="vertical">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs orientation="vertical">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs orientation="vertical">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}}]},{name:"Width",examples:[{name:"auto",style:{width:"100%"},props:{width:"auto"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"full - alignment: start",style:{width:"100%"},props:{width:"full"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="full"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="full"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="full"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs width="full">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs width="full">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs width="full">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"full - alignment: center",style:{width:"100%"},props:{width:"full",alignment:"center"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="full"
					data-alignment="center"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="full"
					data-alignment="center"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="full"
					data-alignment="center"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs width="full" alignment="center">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs width="full" alignment="center">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs width="full" alignment="center">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}}]},{name:"Overflow",examples:[{name:"no overflow",style:{width:"300px"},props:{width:"auto"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"with overflow - behaviour: arrows",style:{width:"300px"},props:{overflow:!0,behaviour:"arrows"},code:{html:`<div class="db-tabs" data-scroll-behaviour="arrows">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs behaviour="arrows">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs behaviour="arrows">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs behaviour="arrows">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"with overflow - behaviour: scrollbar",style:{width:"300px"},props:{overflow:!0},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}}]},{name:"Examples",examples:[{name:"2 tab selected",props:{initialSelectedIndex:1},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs [initialSelectedIndex]="1">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs initialSelectedIndex={1}>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs :initialSelectedIndex="1">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}},{name:"nothing selected",props:{initialSelectedMode:"manually"},code:{html:`<div class="db-tabs">
		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">
			<div class="db-tab-list-scroll-container">
				<label
					role="tab"
					for="my-tabs-tab-0"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-0"
					><input
						type="radio"
						id="my-tabs-tab-0"
						name="my-tabs"
					/>Test 1</label
				><label
					role="tab"
					for="my-tabs-tab-1"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-1"
					><input
						type="radio"
						id="my-tabs-tab-1"
						name="my-tabs"
					/>Test 2</label
				><label
					role="tab"
					for="my-tabs-tab-2"
					class="db-tab"
					data-width="auto"
					data-alignment="start"
					aria-controls="my-tabs-tab-panel-2"
					><input
						type="radio"
						id="my-tabs-tab-2"
						name="my-tabs"
					/>Test 3</label
				>
			</div>
		</div>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-0"
			aria-labelledby="my-tabs-tab-0"
		>
			Tab Panel 1
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-1"
			aria-labelledby="my-tabs-tab-1"
		>
			Tab Panel 2
		</article>
		<article
			role="tabpanel"
			class="db-tab-panel"
			id="my-tabs-tab-panel-2"
			aria-labelledby="my-tabs-tab-2"
		>
			Tab Panel 3
		</article>
	</div>`,angular:`<db-tabs [initialSelectedMode]="manually">
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>`,react:`<DBTabs initialSelectedMode="manually">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`,vue:`<DBTabs :initialSelectedMode="manually">
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>`}}]}],W=(t,e)=>t.map((n,a)=>({...n,examples:n.examples.map((l,r)=>{var i,s;return{...l,example:e({...l.props,id:((i=l.props)==null?void 0:i.id)??l.name,children:((s=l.props)==null?void 0:s.children)??l.name})}})})),Qh=({children:t,orientation:e,width:n,alignment:a,overflow:l,behaviour:r,initialSelectedMode:i,initialSelectedIndex:s})=>o.jsxs("div",{className:"w-full",children:[o.jsxs(Z,{icon:"none",size:"small",semantic:"informational",children:[t,":"]}),o.jsxs(Ai,{orientation:e,width:n,alignment:a,behaviour:r,initialSelectedIndex:s,initialSelectedMode:i,arrowScrollDistance:75,children:[o.jsxs(Fl,{children:[o.jsx(vt,{children:"Test 1"}),o.jsx(vt,{children:"Test 2"}),o.jsx(vt,{children:"Test 3"}),l&&o.jsxs(o.Fragment,{children:[o.jsx(vt,{children:"Test 4"}),o.jsx(vt,{children:"Test 5"})]})]}),o.jsx(xt,{children:"Tab Panel 1"}),o.jsx(xt,{children:"Tab Panel 2"}),o.jsx(xt,{children:"Tab Panel 3"}),l&&o.jsxs(o.Fragment,{children:[o.jsx(xt,{children:"Tab Panel 4"}),o.jsx(xt,{children:"Tab Panel 5"})]})]})]}),Kh=()=>o.jsx($,{title:"DBTabs",variants:W(Gh,Qh)}),Xh=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional tab-hide-article",props:{label:"functional"}},{name:"(Default) Regular",className:"db-density-regular tab-hide-article",props:{label:"(Default) Regular"}},{name:"Expressive",className:"db-density-expressive tab-hide-article",props:{label:"expressive"}}]},{name:"States",examples:[{name:"(Default) Enabled",props:{label:"(Default) Enabled"}},{name:"active",props:{label:"active",active:!0}},{name:"disabled",props:{label:"active",disabled:!0}}]},{name:"Content",examples:[{name:"(Default) Text",props:{label:"(Default) Text"}},{name:"Text - Icon (Leading)",props:{label:"Text - Icon (Leading)",icon:"x_placeholder"}},{name:"Text - Icon (Trailing)",props:{label:"Text - Icon (Trailing)",iconAfter:"x_placeholder"}},{name:"Icon",props:{icon:"x_placeholder",noText:!0}}]},{name:"Behaviour",examples:[{name:"(Default) Auto Width",props:{label:"(Default) Auto Width"}},{name:"Width full",style:{width:"500px"},props:{label:"Width full",width:"full"}}]},{name:"Content Alignment Full Width",examples:[{name:"Left",style:{width:"500px"},props:{label:"Left",width:"full"}},{name:"Centered",style:{width:"500px"},props:{label:"Centered",width:"full",alignment:"center"}}]}],Yh=({children:t,active:e,noText:n,icon:a,iconAfter:l,disabled:r})=>o.jsx(vt,{active:e,noText:n,icon:a,iconAfter:l,disabled:r,children:t}),qh=t=>o.jsx($,{title:"DBTabItem",variants:W(Xh,Yh)}),Jh=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{content:"Tooltip",id:"tooltip-01"}},{name:"(Default) Regular",className:"db-density-regular",props:{content:"Tooltip",id:"tooltip-02"}},{name:"Expressive",className:"db-density-expressive",props:{content:"Tooltip",id:"tooltip-03"}}]},{name:"Variant",examples:[{name:"(Default) With arrow",props:{content:"Tooltip",id:"tooltip-04"}},{name:"Basic",props:{content:"Tooltip",variant:"basic",id:"tooltip-05"}}]},{name:"Emphasis",examples:[{name:"(Default) Weak",props:{content:"Tooltip",id:"tooltip-06"}},{name:"Strong",props:{content:"Tooltip",emphasis:"strong",id:"tooltip-07"}}]},{name:"Placement",examples:[{name:"bottom-start",props:{content:"Tooltip",placement:"bottom-start",id:"tooltip-08-start"}},{name:"(Default) bottom",props:{content:"Tooltip",placement:"bottom",id:"tooltip-08"}},{name:"bottom-end",props:{content:"Tooltip",placement:"bottom-end",id:"tooltip-08-end"}},{name:"left-start",props:{content:"Tooltip",placement:"left-start",id:"tooltip-10-start"}},{name:"left",props:{content:"Tooltip",placement:"left",id:"tooltip-10"}},{name:"left-end",props:{content:"Tooltip",placement:"left-end",id:"tooltip-10-end"}},{name:"right-start",props:{content:"Tooltip",placement:"right-start",id:"tooltip-11-start"}},{name:"right",props:{content:"Tooltip",placement:"right",id:"tooltip-11"}},{name:"right-end",props:{content:"Tooltip",placement:"right-end",id:"tooltip-11-end"}},{name:"top-start",props:{content:"Tooltip",placement:"top-start",id:"tooltip-09-start"}},{name:"top",props:{content:"Tooltip",placement:"top",id:"tooltip-09"}},{name:"top-end",props:{content:"Tooltip",placement:"top-end",id:"tooltip-09-end"}}]},{name:"Width",examples:[{name:"(Default) Auto",props:{content:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing",id:"tooltip-12"}},{name:"Fixed",props:{content:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing",width:"fixed",id:"tooltip-13"}}]},{name:"Animations",examples:[{name:"(Default) Animation no delay",props:{content:"Tooltip",id:"tooltip-14"}},{name:"Delay slow",props:{content:"Tooltip",delay:"slow",id:"tooltip-15"}},{name:"Delay fast",props:{content:"Tooltip",delay:"fast",id:"tooltip-16"}},{name:"No animation",props:{content:"Tooltip",animation:"disabled",id:"tooltip-17"}}]}],Zh=({children:t,width:e,emphasis:n,placement:a,delay:l,content:r,animation:i,variant:s,id:u})=>o.jsxs(J,{describedbyid:u,children:[t,o.jsx(Ah,{width:e,emphasis:n,placement:a,animation:i,delay:l,variant:s,id:u,children:r})]}),tv=()=>o.jsx($,{title:"DBTooltip",variants:W(Jh,Zh)}),ev=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{id:"popover-01"}},{name:"(Default) Regular",className:"db-density-regular",props:{id:"popover-02"}},{name:"Expressive",className:"db-density-expressive",props:{id:"popover-03"}}]},{name:"Spacing",examples:[{name:"(Default) Small",props:{spacing:"small",id:"popover-04"}},{name:"Medium",props:{spacing:"medium",id:"popover-05"}},{name:"None",props:{spacing:"none",id:"popover-06"}}]},{name:"Placement",examples:[{name:"bottom-start",props:{placement:"bottom-start",id:"popover-07-start"}},{name:"(Default) bottom",props:{placement:"bottom",id:"popover-07"}},{name:"bottom-end",props:{placement:"bottom-end",id:"popover-07-end"}},{name:"left-start",props:{placement:"left-start",id:"popover-09-start"}},{name:"left",props:{placement:"left",id:"popover-09"}},{name:"left-end",props:{placement:"left-end",id:"popover-09-end"}},{name:"right-start",props:{placement:"right-start",id:"popover-10-start"}},{name:"right",props:{placement:"right",id:"popover-10"}},{name:"right-end",props:{placement:"right-end",id:"popover-10-end"}},{name:"top-start",props:{placement:"top-start",id:"popover-08-start"}},{name:"top",props:{placement:"top",id:"popover-08"}},{name:"top-end",props:{placement:"top-end",id:"popover-08-end"}}]},{name:"Gap",examples:[{name:"(Default) No gap",props:{id:"popover-11"}},{name:"With gap",props:{gap:!0,id:"popover-12"}}]},{name:"Animations",examples:[{name:"(Default) Animation no delay",props:{id:"popover-13"}},{name:"Delay slow",props:{delay:"slow",id:"popover-14"}},{name:"Delay fast",props:{delay:"fast",id:"popover-15"}},{name:"No animation",props:{animation:"disabled",id:"popover-16"}}]},{name:"Width",examples:[{name:"(Default) Auto",props:{content:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing",id:"popover-17"}},{name:"Fixed",props:{content:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing",width:"fixed",id:"popover-18"}}]}],nv=({id:t,children:e,width:n,gap:a,spacing:l,placement:r,delay:i,content:s,animation:u})=>o.jsx(_h,{trigger:o.jsx(J,{children:e}),width:n,gap:a,spacing:l,placement:r,animation:u,delay:i,id:t,children:s??o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(J,{children:"Popover Custom Item 3"})]})}),av=()=>o.jsx($,{title:"DBPopover",variants:W(ev,nv)}),lv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{headlinePlain:"Functional"}},{name:"(Default) Regular",className:"db-density-regular",props:{headlinePlain:"(Default) Regular"}},{name:"Expressive",className:"db-density-expressive",props:{headlinePlain:"Expressive"}}]},{name:"Interaction States",examples:[{name:"Enabled (Default)/Hover/Pressed",props:{headlinePlain:"Enabled (Default)/Hover/Pressed"}},{name:"Disabled",props:{headlinePlain:"Disabled",disabled:!0}}]},{name:"Content States",examples:[{name:"(Default) Collapsed",props:{headlinePlain:"(Default) Collapsed"}},{name:"Open",props:{headlinePlain:"Open",open:!0}}]}],rv=({children:t,disabled:e,open:n,headlinePlain:a})=>o.jsx(Sn,{headlinePlain:a,disabled:e,defaultOpen:n,children:t}),iv=t=>o.jsx($,{title:"DBAccordionItem",variants:W(lv,rv)}),ov=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion>
				<db-accordion-item
					headline="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion>
				<DBAccordionItem headline="Item 1" content="Content 1" />
				<DBAccordionItem headline="Item 2" content="Content 2" />
				<DBAccordionItem headline="Item 3" content="Content 3" />
			</DBAccordion>`}},{name:"(Default) Regular",className:"db-density-regular",props:{},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion>
				<db-accordion-item
					headline="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion>
				<DBAccordionItem headline="Item 1" content="Content 1" />
				<DBAccordionItem headline="Item 2" content="Content 2" />
				<DBAccordionItem headline="Item 3" content="Content 3" />
			</DBAccordion>`}},{name:"Expressive",className:"db-density-expressive",props:{},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion>
				<db-accordion-item
					headline="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion>
				<DBAccordionItem headline="Item 1" content="Content 1" />
				<DBAccordionItem headline="Item 2" content="Content 2" />
				<DBAccordionItem headline="Item 3" content="Content 3" />
			</DBAccordion>`}}]},{name:"Variant",examples:[{name:"background (default)",props:{},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion>
				<db-accordion-item
					title="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					title="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					title="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion>
			<DBAccordionItem title="Item 1" content="Content 1" />
			<DBAccordionItem title="Item 2" content="Content 2" />
			<DBAccordionItem title="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion>
				<DBAccordionItem title="Item 1" content="Content 1" />
				<DBAccordionItem title="Item 2" content="Content 2" />
				<DBAccordionItem title="Item 3" content="Content 3" />
			</DBAccordion>`}},{name:"card",props:{variant:"card"},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion behaviour="single">
				<db-accordion-item
					title="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					title="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					title="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion behaviour="single">
			<DBAccordionItem title="Item 1" content="Content 1" />
			<DBAccordionItem title="Item 2" content="Content 2" />
			<DBAccordionItem title="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion behaviour="single">
				<DBAccordionItem title="Item 1" content="Content 1" />
				<DBAccordionItem title="Item 2" content="Content 2" />
				<DBAccordionItem title="Item 3" content="Content 3" />
			</DBAccordion>`}}]},{name:"Behaviour",examples:[{name:"(Default) Multiple",props:{behaviour:"multiple"},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion>
				<db-accordion-item
					headline="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion>
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion>
				<DBAccordionItem headline="Item 1" content="Content 1" />
				<DBAccordionItem headline="Item 2" content="Content 2" />
				<DBAccordionItem headline="Item 3" content="Content 3" />
			</DBAccordion>`}},{name:"Single",props:{behaviour:"single"},code:{html:"The accordion is a pure JS Component",angular:`<db-accordion behaviour="single">
				<db-accordion-item
					headline="Item 1"
					content="Content 1"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 2"
					content="Content 2"
				></db-accordion-item>
				<db-accordion-item
					headline="Item 3"
					content="Content 3"
				></db-accordion-item>
			</db-accordion>`,react:`<DBAccordion behaviour="single">
			<DBAccordionItem headline="Item 1" content="Content 1" />
			<DBAccordionItem headline="Item 2" content="Content 2" />
			<DBAccordionItem headline="Item 3" content="Content 3" />
		</DBAccordion>`,vue:`<DBAccordion behaviour="single">
				<DBAccordionItem headline="Item 1" content="Content 1" />
				<DBAccordionItem headline="Item 2" content="Content 2" />
				<DBAccordionItem headline="Item 3" content="Content 3" />
			</DBAccordion>`}}]}],sv=({behaviour:t,children:e,variant:n})=>o.jsxs(o.Fragment,{children:[o.jsx(Z,{size:"small",semantic:"informational",icon:"none",children:e}),o.jsxs(Ud,{behaviour:t,variant:n,children:[o.jsx(Sn,{headlinePlain:"Item 1",content:"Content 1"}),o.jsx(Sn,{headlinePlain:"Item 2",content:"Content 2"}),o.jsx(Sn,{headlinePlain:"Item 3",content:"Content 3"})]})]}),uv=()=>o.jsx("div",{children:o.jsx($,{title:"DBAccordion",variants:W(ov,sv)})}),cv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{},code:{html:`<nav class="db-main-navigation">
		<menu>
			<li class="db-navigation-item" aria-current="page">
				<button
					class="db-navigation-item-expand-button"
					aria-haspopup="true"
				>
					Navi-Item 1
				</button>
				<menu class="db-sub-navigation">
					<li class="db-navigation-item" aria-current="page">
						<button
							class="db-navigation-item-expand-button"
							aria-haspopup="true"
						>
							Sub-Navi-Item 1
						</button>
						<menu class="db-sub-navigation">
							<li class="db-navigation-item" aria-current="page">
								<a href="#">Sub-Sub-Navi-Item 1</a>
							</li>

							<li class="db-navigation-item">
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</li>
						</menu>
					</li>

					<li class="db-navigation-item">
						<a href="#">Sub-Navi-Item 2</a>
					</li>
				</menu>
			</li>

			<li class="db-navigation-item" data-icon="account">
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>`,angular:`<db-main-navigation>
	<db-navigation-item [active]="true">
		<ng-container sub-navigation>
			<db-navigation-item [active]="true">
				<ng-container *dbNavigationContent>
					Sub-Navi-Item 1
				</ng-container>
				<ng-container sub-navigation>
					<db-navigation-item [active]="true">
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</ng-container>
					</db-navigation-item>
					<db-navigation-item>
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</ng-container>
					</db-navigation-item>
				</ng-container>
			</db-navigation-item>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					<a href="#">Sub-Navi-Item 2</a>
				</ng-container>
			</db-navigation-item>
		</ng-container>
		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>
	</db-navigation-item>
	<db-navigation-item icon="account">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 2</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item [disabled]="true">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 3</a>
		</ng-container>
	</db-navigation-item>
</db-main-navigation>`,react:`<DBMainNavigation>
		<DBNavigationItem
			active
			slotSubNavigation={
				<>
					<DBNavigationItem
						active
						slotSubNavigation={
							<>
								<DBNavigationItem active>
									<a href="#">Sub-Sub-Navi-Item 1</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`,vue:`<DBMainNavigation>
		<DBNavigationItem :active="true">
			Navi-Item 1
			<template v-slot:subnavigation>
				<DBNavigationItem :active="true">
					Sub-Navi-Item 1

					<template v-slot:subnavigation>
						<DBNavigationItem :active="true">
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</template>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`}},{name:"(Default) Regular",className:"db-density-regular",props:{},code:{html:`<nav class="db-main-navigation">
		<menu>
			<li class="db-navigation-item" aria-current="page">
				<button
					class="db-navigation-item-expand-button"
					aria-haspopup="true"
				>
					Navi-Item 1
				</button>
				<menu class="db-sub-navigation">
					<li class="db-navigation-item" aria-current="page">
						<button
							class="db-navigation-item-expand-button"
							aria-haspopup="true"
						>
							Sub-Navi-Item 1
						</button>
						<menu class="db-sub-navigation">
							<li class="db-navigation-item" aria-current="page">
								<a href="#">Sub-Sub-Navi-Item 1</a>
							</li>

							<li class="db-navigation-item">
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</li>
						</menu>
					</li>

					<li class="db-navigation-item">
						<a href="#">Sub-Navi-Item 2</a>
					</li>
				</menu>
			</li>

			<li class="db-navigation-item" data-icon="account">
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>`,angular:`<db-main-navigation>
	<db-navigation-item [active]="true">
		<ng-container sub-navigation>
			<db-navigation-item [active]="true">
				<ng-container *dbNavigationContent>
					Sub-Navi-Item 1
				</ng-container>
				<ng-container sub-navigation>
					<db-navigation-item [active]="true">
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</ng-container>
					</db-navigation-item>
					<db-navigation-item>
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</ng-container>
					</db-navigation-item>
				</ng-container>
			</db-navigation-item>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					<a href="#">Sub-Navi-Item 2</a>
				</ng-container>
			</db-navigation-item>
		</ng-container>
		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>
	</db-navigation-item>
	<db-navigation-item icon="account">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 2</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item [disabled]="true">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 3</a>
		</ng-container>
	</db-navigation-item>
</db-main-navigation>`,react:`<DBMainNavigation>
		<DBNavigationItem
			active
			slotSubNavigation={
				<>
					<DBNavigationItem
						active
						slotSubNavigation={
							<>
								<DBNavigationItem active>
									<a href="#">Sub-Sub-Navi-Item 1</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`,vue:`<DBMainNavigation>
		<DBNavigationItem :active="true">
			Navi-Item 1
			<template v-slot:subnavigation>
				<DBNavigationItem :active="true">
					Sub-Navi-Item 1

					<template v-slot:subnavigation>
						<DBNavigationItem :active="true">
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</template>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`}},{name:"Expressive",className:"db-density-expressive",props:{},code:{html:`<nav class="db-main-navigation">
		<menu>
			<li class="db-navigation-item" aria-current="page">
				<button
					class="db-navigation-item-expand-button"
					aria-haspopup="true"
				>
					Navi-Item 1
				</button>
				<menu class="db-sub-navigation">
					<li class="db-navigation-item" aria-current="page">
						<button
							class="db-navigation-item-expand-button"
							aria-haspopup="true"
						>
							Sub-Navi-Item 1
						</button>
						<menu class="db-sub-navigation">
							<li class="db-navigation-item" aria-current="page">
								<a href="#">Sub-Sub-Navi-Item 1</a>
							</li>

							<li class="db-navigation-item">
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</li>
						</menu>
					</li>

					<li class="db-navigation-item">
						<a href="#">Sub-Navi-Item 2</a>
					</li>
				</menu>
			</li>

			<li class="db-navigation-item" data-icon="account">
				<a href="#">Navi-Item 2</a>
			</li>

			<li class="db-navigation-item" aria-disabled="true">
				<a href="#">Navi-Item 3</a>
			</li>
		</menu>
	</nav>`,angular:`<db-main-navigation>
	<db-navigation-item [active]="true">
		<ng-container sub-navigation>
			<db-navigation-item [active]="true">
				<ng-container *dbNavigationContent>
					Sub-Navi-Item 1
				</ng-container>
				<ng-container sub-navigation>
					<db-navigation-item [active]="true">
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</ng-container>
					</db-navigation-item>
					<db-navigation-item>
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</ng-container>
					</db-navigation-item>
				</ng-container>
			</db-navigation-item>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					<a href="#">Sub-Navi-Item 2</a>
				</ng-container>
			</db-navigation-item>
		</ng-container>
		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>
	</db-navigation-item>
	<db-navigation-item icon="account">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 2</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item [disabled]="true">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 3</a>
		</ng-container>
	</db-navigation-item>
</db-main-navigation>`,react:`<DBMainNavigation>
		<DBNavigationItem
			active
			slotSubNavigation={
				<>
					<DBNavigationItem
						active
						slotSubNavigation={
							<>
								<DBNavigationItem active>
									<a href="#">Sub-Sub-Navi-Item 1</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`,vue:`<DBMainNavigation>
		<DBNavigationItem :active="true">
			Navi-Item 1
			<template v-slot:subnavigation>
				<DBNavigationItem :active="true">
					Sub-Navi-Item 1

					<template v-slot:subnavigation>
						<DBNavigationItem :active="true">
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</template>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
		<DBNavigationItem icon="account">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem :disabled="true">
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBMainNavigation>`}}]}],dv=({children:t})=>o.jsxs("div",{children:[o.jsxs("h6",{children:[t,":"]}),o.jsxs(Od,{children:[o.jsx($t,{active:!0,subNavigation:o.jsxs(o.Fragment,{children:[o.jsx($t,{active:!0,subNavigation:o.jsxs(o.Fragment,{children:[o.jsx($t,{active:!0,children:o.jsx("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),o.jsx($t,{children:o.jsx("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),o.jsx($t,{children:o.jsx("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),o.jsx($t,{icon:"user",children:o.jsx("a",{href:"#",children:"Navi-Item 2"})}),o.jsx($t,{disabled:!0,children:o.jsx("a",{href:"#",children:"Navi-Item 3"})})]})]}),mv=()=>o.jsx($,{title:"DBNavigation",variants:W(cv,dv)}),fv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Emphasis",examples:[{name:"(Default) Weak",props:{}},{name:"Strong",props:{emphasis:"strong"}}]},{name:"Semantic",examples:[{name:"(Default) Adaptive",props:{}},{name:"Neutral",props:{semantic:"neutral"}},{name:"Critical",props:{semantic:"critical"}},{name:"Informational",props:{semantic:"informational"}},{name:"Successful",props:{semantic:"successful"}},{name:"Warning",props:{semantic:"warning"}},{name:"Adaptive Strong",props:{emphasis:"strong"}},{name:"Neutral Strong",props:{semantic:"neutral",emphasis:"strong"}},{name:"Critical Strong",props:{semantic:"critical",emphasis:"strong"}},{name:"Informational Strong",props:{semantic:"informational",emphasis:"strong"}},{name:"Successful Strong",props:{semantic:"successful",emphasis:"strong"}},{name:"Warning Strong",props:{semantic:"warning",emphasis:"strong"}}]},{name:"Size",examples:[{name:"(Default) Small",props:{}},{name:"Medium",props:{size:"medium"}}]},{name:"Content",examples:[{name:"(Default) Text",props:{}},{name:"(Default) Text - Medium",props:{size:"medium"}},{name:"Dot - Small",props:{noContent:!0}},{name:"Dot - Medium",props:{noContent:!0,size:"medium"}},{name:"Icon - Small",props:{example:"icon"}},{name:"Icon - Medium",props:{example:"icon",size:"medium"}}]},{name:"Placement",examples:[{name:"(Default) Inline",props:{placement:"inline"}},{name:"Corner - Top - Left",props:{placement:"corner-top-left"}},{name:"Corner - Center - Left",props:{placement:"corner-center-left"}},{name:"Corner - Bottom- Left",props:{placement:"corner-bottom-left"}},{name:"Corner - Top - Right",props:{placement:"corner-top-right"}},{name:"Corner - Center - Right",props:{placement:"corner-center-right"}},{name:"Corner - Bottom- Right",props:{placement:"corner-bottom-right"}}]},{name:"Examples",examples:[{name:"Numbers",props:{example:"number"}}]}],pv=({children:t,semantic:e,emphasis:n,noContent:a,size:l,placement:r,example:i})=>o.jsxs(o.Fragment,{children:[!r&&!i&&o.jsxs(o.Fragment,{children:[o.jsx(Yt,{semantic:e,emphasis:n,size:l,children:a?"":t}),a&&o.jsx(Z,{semantic:"informational",size:"small",icon:"none",children:t})]}),r&&r!=="inline"&&!i&&o.jsxs(o.Fragment,{children:[o.jsxs(J,{icon:"user",variant:"outlined",noText:!0,children:[o.jsx(Yt,{size:"small",emphasis:"strong",semantic:"critical",placement:r}),t]}),o.jsx(Z,{semantic:"informational",size:"small",icon:"none",children:t})]}),r==="inline"&&o.jsx(o.Fragment,{children:o.jsxs("div",{className:"badge-inline-container",children:[o.jsx(sl,{icon:"user"}),o.jsx("span",{children:t}),o.jsx(Yt,{size:"small",emphasis:"strong",semantic:"critical",children:"Label"}),o.jsx(sl,{icon:"error"})]})}),i==="icon"&&o.jsxs(o.Fragment,{children:[o.jsx(Yt,{semantic:"critical",emphasis:"strong",size:l,children:o.jsx(sl,{icon:"user",children:t})}),o.jsx(Z,{semantic:"informational",size:"small",icon:"none",children:t})]}),i==="number"&&o.jsxs(o.Fragment,{children:[o.jsx(Yt,{semantic:"successful",children:"9"}),o.jsx(Yt,{semantic:"informational",children:"12"}),o.jsx(Yt,{semantic:"warning",children:"123"}),o.jsx(Yt,{size:"small",emphasis:"strong",semantic:"successful",children:"9"}),o.jsx(Yt,{size:"small",emphasis:"strong",semantic:"informational",children:"12"}),o.jsx(Yt,{size:"small",emphasis:"strong",semantic:"warning",children:"123"}),o.jsx(Z,{semantic:"informational",size:"small",icon:"none",children:t})]})]}),bv=()=>o.jsx($,{title:"DBBadge",variants:W(fv,pv)}),hv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Interaction-States",examples:[{name:"Enabled (Default)/Hover/Pressed",props:{}},{name:"Active",props:{active:!0}},{name:"Disabled",props:{disabled:!0}}]},{name:"Content",examples:[{name:"(Default) Text",props:{areaPopup:!1}},{name:"Text - Icon (Leading)",props:{icon:"user"}},{name:"Text - Icons (Leading, Chevron)",props:{icon:"user",areaPopup:!0}},{name:"Text - Icon (Chevron)",props:{areaPopup:!0}}]},{name:"Width",examples:[{name:"(Default) Auto",style:{width:"400px"},props:{}},{name:"Full",style:{width:"400px"},props:{width:"full"}}]}],vv=({children:t,icon:e,disabled:n,active:a,width:l,areaPopup:r})=>o.jsx($t,{icon:e,disabled:n,active:a,width:l,areaPopup:r,onClick:()=>{alert(t.toString())},subNavigation:r&&o.jsxs(o.Fragment,{children:[o.jsx($t,{children:o.jsx("a",{href:"#",children:"Test1"})}),o.jsx($t,{children:o.jsx("a",{href:"#",children:"Test2"})})]}),children:r?t:o.jsx("a",{href:"#",children:t})}),gv=t=>o.jsx($,{title:"DBNavigationItem",variants:W(hv,vv)}),yv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{name:"Density"}},{name:"(Default) Regular",className:"db-density-regular",props:{name:"Density"}},{name:"Expressive",className:"db-density-expressive",props:{name:"Density"}}]},{name:"Interaction States",examples:[{name:"(Default) Enabled",props:{name:"Interaction States"}},{name:"Disabled",props:{name:"Interaction States",disabled:!0}}]},{name:"States",examples:[{name:"(Default) Unchecked",props:{name:"States"}},{name:"Unchecked - Invalid",props:{name:"States",required:!0}},{name:"Checked",props:{name:"States",checked:!0}},{name:"Checked - Valid",props:{name:"States",required:!0,checked:!0}},{name:"Indeterminate",props:{name:"States",indeterminate:!0}},{name:"Indeterminate - Invalid",props:{name:"States",indeterminate:!0,required:!0}},{name:"Indeterminate - Valid",props:{name:"States",indeterminate:!0,required:!0,checked:!0}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{name:"Size"}},{name:"Small",props:{name:"Size",size:"small"}}]},{name:"Requirement",examples:[{name:"(Default) Optional",props:{name:"Requirement"}},{name:"Required",props:{name:"Requirement",required:!0}},{name:"Required - Indeterminate",props:{name:"Requirement",indeterminate:!0}}]},{name:"Content",examples:[{name:"(Default) Label",props:{name:"Content"}},{name:"No Label",props:{name:"Content",variant:"hidden"}}]}],Dv=({label:t,size:e,name:n,checked:a,required:l,children:r,disabled:i,indeterminate:s,variant:u})=>o.jsx(We,{label:t,size:e,name:n,defaultChecked:a,required:l,disabled:i,variant:u,indeterminate:s,children:r}),xv=()=>o.jsx($,{title:"DBCheckbox",variants:W(yv,Dv)}),Tv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Emphasis",examples:[{name:"(Default) Weak",props:{}},{name:"Strong",props:{emphasis:"strong"}}]},{name:"Semantic",examples:[{name:"(Default) Adaptive",props:{}},{name:"Neutral",props:{semantic:"neutral"}},{name:"Critical",props:{semantic:"critical"}},{name:"Informational",props:{semantic:"informational"}},{name:"Successful",props:{semantic:"successful"}},{name:"Warning",props:{semantic:"warning"}},{name:"Adaptive Strong",props:{emphasis:"strong"}},{name:"Neutral Strong",props:{semantic:"neutral",emphasis:"strong"}},{name:"Critical Strong",props:{semantic:"critical",emphasis:"strong"}},{name:"Informational Strong",props:{semantic:"informational",emphasis:"strong"}},{name:"Successful Strong",props:{semantic:"successful",emphasis:"strong"}},{name:"Warning Strong",props:{semantic:"warning",emphasis:"strong"}}]},{name:"Behaviour",examples:[{name:"(Default) Static",props:{}},{name:"Interactive Button",props:{component:"button"},code:{angular:"<db-tag><db-button>Interactive Button</db-button></db-tag>",html:'<div class="db-tag"><button class="db-button">Interactive Button</button></div>',react:"<DBTag><DBButton>Interactive Button</DBButton></DBTag>",vue:"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{name:"Interactive Link",props:{component:"link"},code:{angular:"<db-tag><db-link>Interactive Link</db-link></db-tag>",html:'<div class="db-tag"><a class="db-link">Interactive Link</a></div>',react:"<DBTag><DBLink>Interactive Link</DBLink></DBTag>",vue:"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{name:"Interactive Checkbox",props:{component:"checkbox"},code:{angular:"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>",html:'<div class="db-tag"><input type="checkbox" class="db-checkbox" id="checkbox-element" /><label for="checkbox-element">Interactive Checkbox</label></div>',react:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>",vue:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{name:"Interactive Radio 1",props:{component:"radio",identifier:"radio01"},code:{angular:'<db-tag><db-radio name="radio01">Interactive Radio 1</db-radio></db-tag>',html:'<div class="db-tag"><input type="radio" class="db-checkbox" id="checkbox-element" name="radio01" /><label for="checkbox-element">Interactive Radio 1</label></div>',react:'<DBTag><DBRadio name="radio01">Interactive Radio 1</DBRadio></DBTag>',vue:'<DBTag><DBRadio name="radio01">Interactive Radio 1</DBRadio></DBTag>'}},{name:"Interactive Radio 2",props:{component:"radio",identifier:"radio01",code:{angular:'<db-tag><db-radio name="radio01">Interactive Radio 2</db-radio></db-tag>',html:'<div class="db-tag"><input type="radio" class="db-checkbox" id="checkbox-element" name="radio01" /><label for="checkbox-element">Interactive Radio 2</label></div>',react:'<DBTag><DBRadio name="radio01">Interactive Radio 2</DBRadio></DBTag>',vue:'<DBTag><DBRadio name="radio01">Interactive Radio 2</DBRadio></DBTag>'}}},{name:"Removeable",props:{behaviour:"removable"}}]},{name:"State",examples:[{name:"(Default) Unchecked",props:{component:"checkbox"},code:{angular:"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>",html:'<div class="db-tag"><input type="checkbox" class="db-checkbox" id="checkbox-element" /><label for="checkbox-element">Interactive Checkbox</label></div>',react:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>",vue:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{name:"Checked",props:{component:"checkbox",checked:!0},code:{angular:'<db-tag><db-checkbox [checked]="true">Interactive Checkbox</db-checkbox></db-tag>',html:'<div class="db-tag"><input checked="true" type="checkbox" class="db-checkbox" id="checkbox-element" /><label for="checkbox-element">Interactive Checkbox</label></div>',react:"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>",vue:'<DBTag><DBCheckbox :checked="true">Interactive Checkbox</DBCheckbox></DBTag>'}},{name:"Disabled",props:{component:"checkbox",checked:!0,disabled:!0},code:{angular:'<db-tag><db-checkbox [checked]="true" [disabled]="true">Interactive Checkbox</db-checkbox></db-tag>',html:'<div class="db-tag"><input checked="true" disabled="true" type="checkbox" class="db-checkbox" id="checkbox-element" /><label for="checkbox-element">Interactive Checkbox</label></div>',react:"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>",vue:'<DBTag><DBCheckbox :checked="true" :disabled="true">Interactive Checkbox</DBCheckbox></DBTag>'}}]},{name:"Content",examples:[{name:"(Default) Text",props:{}},{name:"Icon",props:{icon:"user",noText:!0}},{name:"Icon & Text",props:{icon:"user"}}]},{name:"Overflow",examples:[{name:"(Default) No Overflow",props:{}},{name:"With Overflow (max-width)",props:{overflow:!0}}]},{name:"Example",examples:[{name:"Interactive Strong Button with Icon",props:{component:"button",emphasis:"strong",icon:"user",behaviour:"removable"},code:{angular:"<db-tag><db-button>Interactive Button</db-button></db-tag>",html:'<div class="db-tag"><button class="db-button">Interactive Button</button></div>',react:"<DBTag><DBButton>Interactive Button</DBButton></DBTag>",vue:"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{name:"Interactive Strong Link with Icon",props:{component:"link",emphasis:"strong",icon:"user"},code:{angular:"<db-tag><db-link>Interactive Link</db-link></db-tag>",html:'<div class="db-tag"><a class="db-link">Interactive Link</a></div>',react:"<DBTag><DBLink>Interactive Link</DBLink></DBTag>",vue:"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{name:"Interactive Strong Checkbox with Icon",props:{component:"checkbox",emphasis:"strong",icon:"user"},code:{angular:"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>",html:'<div class="db-tag"><input type="checkbox" class="db-checkbox" id="checkbox-element" /><label for="checkbox-element">Interactive Checkbox</label></div>',react:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>",vue:"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{name:"Interactive Strong Radio 1 with Icon",props:{component:"radio",emphasis:"strong",icon:"user",identifier:"radio02"},code:{angular:'<db-tag><db-radio name="radio02">Interactive Radio 1</db-radio></db-tag>',html:'<div class="db-tag"><input type="radio" class="db-checkbox" id="checkbox-element" name="radio02" /><label for="checkbox-element">Interactive Radio 1</label></div>',react:'<DBTag><DBRadio name="radio02">Interactive Radio 1</DBRadio></DBTag>',vue:'<DBTag><DBRadio name="radio02">Interactive Radio 1</DBRadio></DBTag>'}},{name:"Interactive Strong Radio 2 with Icon",props:{component:"radio",emphasis:"strong",icon:"user",identifier:"radio02",code:{angular:'<db-tag><db-radio name="radio02">Interactive Radio 2</db-radio></db-tag>',html:'<div class="db-tag"><input type="radio" class="db-checkbox" id="checkbox-element" name="radio02" /><label for="checkbox-element">Interactive Radio 2</label></div>',react:'<DBTag><DBRadio name="radio02">Interactive Radio 2</DBRadio></DBTag>',vue:'<DBTag><DBRadio name="radio02">Interactive Radio 2</DBRadio></DBTag>'}}}]}],Bv=({semantic:t,disabled:e,children:n,icon:a,overflow:l,noText:r,behaviour:i,emphasis:s,removeButton:u,checked:c,component:f,identifier:h})=>{const[b,g]=d.useState(c??!1);return o.jsxs(Md,{semantic:t,disabled:e,icon:a,noText:r,behaviour:i,emphasis:s,overflow:l,removeButton:u,onRemove:()=>{alert(n.toString())},children:[f==="button"&&o.jsx(J,{children:n}),f==="link"&&o.jsx(rr,{href:"#",children:n}),f==="checkbox"&&o.jsx(We,{checked:b,onChange:T=>{g(T.target.checked)},children:n}),f==="radio"&&o.jsx(Mo,{checked:c,name:h,children:n}),!f&&!l&&o.jsx(o.Fragment,{children:n}),!f&&l&&o.jsx("span",{children:n})]})},wv=()=>o.jsx($,{title:"DBTag",variants:W(Tv,Bv)}),Sv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">functional</div>
		</article>
	</dialog>`,angular:`<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">
	functional
</db-drawer>`,react:`<DBDrawer
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				functional
			</DBDrawer>`,vue:`<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">
		functional
	</DBDrawer>`}},{name:"(Default) Regular",className:"db-density-regular",props:{},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Regular (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Regular (Default)
</db-drawer>`,react:`<DBDrawer
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Regular (Default)
			</DBDrawer>`,vue:`<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">
		Regular (Default)
	</DBDrawer>`}},{name:"Expressive",className:"db-density-expressive",props:{},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">expressive</div>
		</article>
	</dialog>`,angular:`<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">
	expressive
</db-drawer>`,react:`<DBDrawer
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				expressive
			</DBDrawer>`,vue:`<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">
		expressive
	</DBDrawer>`}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{withCloseButton:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">With padding (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	With padding (Default)
</db-drawer>`,react:`<DBDrawer
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				With padding (Default)
			</DBDrawer>`,vue:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With padding (Default)</DBDrawer>'}},{name:"Full",props:{withCloseButton:!0,width:"full"},code:{html:`<dialog class="db-drawer" width="full" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Full</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" width="full" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Full
</db-drawer>`,react:`			<DBDrawer
				withCloseButton
				width="full"
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Full
			</DBDrawer>`,vue:`	<DBDrawer :withCloseButton="true" width="full" :open="openDrawer" @close="toggleDrawer(false)">
		Full
	</DBDrawer>`}}]},{name:"Rounded",examples:[{name:"(Default) No rounding",props:{withCloseButton:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">No rounding (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	No rounding (Default)
</db-drawer>`,react:`<DBDrawer
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				No rounding (Default)
			</DBDrawer>`,vue:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">No rounding (Default)</DBDrawer>'}},{name:"Rounded",props:{withCloseButton:!0,rounded:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-rounded="true">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Rounded</div>
		</article>
	</dialog>`,angular:`<db-drawer [rounded]="true" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Rounded
</db-drawer>`,react:`<DBDrawer
				rounded
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Rounded
			</DBDrawer>`,vue:'<DBDrawer :rounded="true" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Rounded</DBDrawer>'}}]},{name:"Spacing",examples:[{name:"(Default) Medium",props:{withCloseButton:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Medium (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Medium (Default)
</db-drawer>`,react:`<DBDrawer
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Medium (Default)
			</DBDrawer>`,vue:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Medium (Default)</DBDrawer>'}},{name:"Small",props:{withCloseButton:!0,spacing:"small"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-spacing="small">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Small</div>
		</article>
	</dialog>`,angular:`<db-drawer spacing="small" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Small
</db-drawer>`,react:`<DBDrawer
				spacing="small"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Small
			</DBDrawer>`,vue:'<DBDrawer spacing="small" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Small</DBDrawer>'}},{name:"Large",props:{withCloseButton:!0,spacing:"large"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-spacing="large">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Large</div>
		</article>
	</dialog>`,angular:`<db-drawer spacing="large" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Large
</db-drawer>`,react:`<DBDrawer
				spacing="large"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Large
			</DBDrawer>`,vue:'<DBDrawer spacing="large" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Large</DBDrawer>'}},{name:"No spacing",props:{withCloseButton:!0,spacing:"none"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-spacing="none">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">None</div>
		</article>
	</dialog>`,angular:`<db-drawer spacing="none" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	None
</db-drawer>`,react:`<DBDrawer
				spacing="none"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				None
			</DBDrawer>`,vue:'<DBDrawer spacing="none" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">None</DBDrawer>'}}]},{name:"Backdrop",examples:[{name:"(Default) With Backdrop",props:{withCloseButton:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">With Backdrop (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	With Backdrop (Default)
</db-drawer>`,react:`<DBDrawer
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				With Backdrop (Default)
			</DBDrawer>`,vue:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With Backdrop (Default)</DBDrawer>'}},{name:"Backdrop-weak",props:{withCloseButton:!0,backdrop:"weak"},code:{html:`<dialog class="db-drawer" data-backdrop="weak" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Backdrop-weak</div>
		</article>
	</dialog>`,angular:`<db-drawer backdrop="weak" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Backdrop-weak
</db-drawer>`,react:`<DBDrawer
				backdrop="weak"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Backdrop-weak
			</DBDrawer>`,vue:'<DBDrawer backdrop="weak" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Backdrop-weak</DBDrawer>'}},{name:"No Backdrop",props:{withCloseButton:!0,backdrop:"none"},code:{html:`<dialog class="db-drawer" data-backdrop="none" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">No Backdrop</div>
		</article>
	</dialog>`,angular:`<db-drawer backdrop="none" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	No Backdrop
</db-drawer>`,react:`<DBDrawer
				backdrop="none"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				No Backdrop
			</DBDrawer>`,vue:'<DBDrawer backdrop="none" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">No Backdrop</DBDrawer>'}}]},{name:"Directions",examples:[{name:"(Default) Right",props:{withCloseButton:!0},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Right (Default)</div>
		</article>
	</dialog>`,angular:`<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Right (Default)
</db-drawer>`,react:`<DBDrawer
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Right (Default)
			</DBDrawer>`,vue:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Right (Default)</DBDrawer>'}},{name:"Left",props:{withCloseButton:!0,direction:"left"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-direction="left">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Left</div>
		</article>
	</dialog>`,angular:`<db-drawer direction="left" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Left
</db-drawer>`,react:`<DBDrawer
				direction="left"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Left
			</DBDrawer>`,vue:'<DBDrawer direction="left" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Left</DBDrawer>'}},{name:"Up",props:{withCloseButton:!0,direction:"up"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-direction="up">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Up</div>
		</article>
	</dialog>`,angular:`<db-drawer direction="left" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Up
</db-drawer>`,react:`<DBDrawer
				direction="left"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Up
			</DBDrawer>`,vue:'<DBDrawer direction="left" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Up</DBDrawer>'}},{name:"Down",props:{withCloseButton:!0,direction:"down"},code:{html:`<dialog class="db-drawer" data-backdrop="strong" open>
		<article class="db-drawer-container" data-direction="down">
			<header class="db-drawer-header">
				<button
					class="db-button button-close-drawer is-icon-text-replace"
					data-icon="close"
					data-variant="text"
				>
					Close Button
				</button>
			</header>
			<div class="db-drawer-content">Down</div>
		</article>
	</dialog>`,angular:`<db-drawer direction="left" [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">
	Down
</db-drawer>`,react:`<DBDrawer
				direction="left"
				withCloseButton
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Down
			</DBDrawer>`,vue:'<DBDrawer direction="left" :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">Down</DBDrawer>'}}]}],Iv=({id:t,width:e,rounded:n,withCloseButton:a,spacing:l,openDrawer:r,setOpenDrawer:i,direction:s,children:u,backdrop:c})=>o.jsxs("div",{children:[o.jsx(zd,{withCloseButton:a,rounded:n,width:e,spacing:l,backdrop:c,direction:s,open:r===t,onClose:()=>{i(void 0)},children:u}),o.jsxs(J,{onClick:()=>{i(t)},children:["Open: ",u]})]}),Cv=()=>{const[t,e]=d.useState(void 0);return o.jsx($,{title:"DBDrawer",variants:W(Sv,n=>Iv({...n,openDrawer:t,setOpenDrawer:e}))})},Nv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"(Default) Regular",className:"db-density-regular",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Expressive",className:"db-density-expressive",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}}]},{name:"Variant Label",examples:[{name:"(Default) Label Above",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Floating Label",style:{width:"300px"},props:{options:[{value:"Floating Label"},{value:"Option 2"}],label:"Label",variant:"floating",value:"Floating Label"}},{name:"Hidden Label",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",variant:"hidden"}}]},{name:"Variant Helper Message",examples:[{name:"(Default) Basic",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Helper Message",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",message:"Helper Message"}}]},{name:"States Label Above",examples:[{name:"(Default) Empty",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Filled",style:{width:"300px"},props:{options:[{value:"Filled"},{value:"Option 2"}],label:"Label",value:"Filled"}},{name:"Disabled",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",disabled:!0}}]},{name:"States Floating Label",examples:[{name:"(Default) Empty",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",variant:"floating"}},{name:"Filled",style:{width:"300px"},props:{options:[{value:"Filled"},{value:"Option 2"}],label:"Label",value:"Filled",variant:"floating"}},{name:"Disabled",style:{width:"300px"},props:{options:[{value:"Disabled"},{value:"Option 2"}],label:"Label",disabled:!0,variant:"floating",value:"Disabled"}}]},{name:"Content",examples:[{name:"(Default) Text",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Text - Leading Icon",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",icon:"x_placeholder"}}]},{name:"Requirement",examples:[{name:"(Default) Optional",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label"}},{name:"Required",style:{width:"300px"},props:{options:[{value:"Option 1"},{value:"Option 2"}],label:"Label",required:!0}}]}],kv=({children:t,label:e,options:n,icon:a,message:l,disabled:r,value:i,required:s,variant:u})=>o.jsx(wa,{label:e,placeholder:t,options:n,disabled:r,variant:u,icon:a,value:i,message:l,required:s,children:t}),Pv=()=>o.jsx($,{title:"DBSelect",variants:W(Nv,kv)}),Ev=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{name:"Density",value:"functional"}},{name:"(Default) Regular",className:"db-density-regular",props:{name:"Density",value:"regular"}},{name:"Expressive",className:"db-density-expressive",props:{name:"Density",value:"expressive"}}]},{name:"Interaction States",examples:[{name:"(Default) Enabled",props:{name:"Interaction States"}},{name:"Disabled",props:{name:"Interaction States",disabled:!0}}]},{name:"States",examples:[{name:"(Default) Unselected",props:{name:"States"}},{name:"Unselected - Invalid",props:{name:"States Required",required:!0}},{name:"Selected",props:{name:"States",checked:!0}},{name:"Selected - Valid",props:{name:"States Required",required:!0,checked:!0}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{name:"Size"}},{name:"Small",props:{name:"Size",size:"small"}}]},{name:"Requirement",examples:[{name:"(Default) Optional",props:{name:"Requirement"}},{name:"Required",props:{name:"Requirement",required:!0}}]},{name:"Content",examples:[{name:"(Default) Label",props:{name:"Content"}},{name:"Hidden Label",props:{name:"Content",variant:"hidden"}}]}],Lv=({label:t,size:e,name:n,checked:a,required:l,children:r,disabled:i,value:s,variant:u})=>o.jsx(Mo,{label:t,size:e,name:n,defaultChecked:a,required:l,disabled:i,variant:u,value:s,children:r}),_v=()=>o.jsx($,{title:"DBRadio",variants:W(Ev,Lv)}),jv=[{name:"Density",examples:[{name:"functional",style:{width:"300px"},className:"db-density-functional",props:{headline:"Headline",icon:"information_circle",behaviour:"closable"}},{name:"regular (Default)",style:{width:"300px"},className:"db-density-regular",props:{headline:"Headline",icon:"information_circle",behaviour:"closable"}},{name:"expressive",style:{width:"300px"},className:"db-density-expressive",props:{headline:"Headline",icon:"information_circle",behaviour:"closable"}}]},{name:"Variant",examples:[{name:"(Default) Docked",style:{width:"300px"},props:{variant:"docked",headline:"Headline",icon:"information_circle",behaviour:"closable"}},{name:"Standalone",style:{width:"300px"},props:{variant:"standalone",headline:"Headline",icon:"information_circle",behaviour:"closable"}},{name:"Overlay",style:{width:"300px"},props:{variant:"overlay",headline:"Headline",icon:"information_circle",behaviour:"closable",timestamp:"10 min ago"}}]},{name:"Semantic",examples:[{name:"(Default) Adaptive",style:{width:"300px"},props:{type:"alert",headline:"Headline",behaviour:"closable"}},{name:"Neutral",style:{width:"300px"},props:{type:"alert",semantic:"neutral",headline:"Headline",behaviour:"closable"}},{name:"Critical",style:{width:"300px"},props:{type:"alert",semantic:"critical",headline:"Headline",behaviour:"closable"}},{name:"Informational",style:{width:"300px"},props:{type:"alert",semantic:"information_circleal",headline:"Headline",behaviour:"closable"}},{name:"Successful",style:{width:"300px"},props:{type:"alert",semantic:"successful",headline:"Headline",behaviour:"closable"}},{name:"Warning",style:{width:"300px"},props:{type:"alert",semantic:"warning",headline:"Headline",behaviour:"closable"}}]},{name:"Behaviour",examples:[{name:"(Default) Permanent",style:{width:"300px"},props:{behaviour:"permanent"}},{name:"Closeable",style:{width:"300px"},props:{behaviour:"closable"}}]},{name:"Content - Variant:Docked",examples:[{name:"Text",style:{width:"300px"},props:{behaviour:"permanent"}},{name:"Text & Icon",style:{width:"300px"},props:{icon:"information_circle",behaviour:"permanent"}},{name:"Text & Preview Image",style:{width:"300px"},props:{img:!0,behaviour:"permanent"}},{name:"Text & Headline",style:{width:"300px"},props:{headline:"Headline",behaviour:"permanent"}},{name:"Text & Textlink Block",style:{width:"300px"},props:{link:!0,behaviour:"permanent"}},{name:"Text & Textlink Inline",style:{width:"300px"},props:{link:!0,linkVariant:"inline",behaviour:"permanent"}},{name:"Text & Headline & Textlink Inline & Cloaseable",style:{width:"300px"},props:{headline:"Headline",link:!0,linkVariant:"inline"}},{name:"Text & Icon & Headline & Textlink Inline & Cloaseable",style:{width:"300px"},props:{icon:"information_circle",headline:"Headline",link:!0,linkVariant:"inline"}}]},{name:"Content - Variant:Standalone",examples:[{name:"Text",style:{width:"300px"},props:{variant:"standalone",behaviour:"permanent"}},{name:"Text & Icon",style:{width:"300px"},props:{icon:"information_circle",variant:"standalone",behaviour:"permanent"}},{name:"Text & Preview Image",style:{width:"300px"},props:{img:!0,variant:"standalone",behaviour:"permanent"}},{name:"Text & Headline",style:{width:"300px"},props:{headline:"Headline",variant:"standalone",behaviour:"permanent"}},{name:"Text & Textlink Block",style:{width:"300px"},props:{link:!0,variant:"standalone",behaviour:"permanent"}},{name:"Text & Textlink Inline",style:{width:"300px"},props:{link:!0,linkVariant:"inline",variant:"standalone",behaviour:"permanent"}},{name:"Text & Headline & Textlink Inline & Cloaseable",style:{width:"300px"},props:{headline:"Headline",link:!0,linkVariant:"inline",variant:"standalone"}},{name:"Text & Icon & Headline & Textlink Inline & Cloaseable",style:{width:"300px"},props:{icon:"information_circle",headline:"Headline",link:!0,linkVariant:"inline",variant:"standalone"}}]},{name:"Content - Variant:Overlay",examples:[{name:"Text",style:{width:"300px"},props:{variant:"overlay",behaviour:"permanent"}},{name:"Text & Icon",style:{width:"300px"},props:{icon:"information_circle",variant:"overlay",behaviour:"permanent"}},{name:"Text & Preview Image",style:{width:"300px"},props:{img:!0,variant:"overlay",behaviour:"permanent"}},{name:"Text & Headline",style:{width:"300px"},props:{headline:"Headline",variant:"overlay",behaviour:"permanent"}},{name:"Text & Timed",style:{width:"300px"},props:{timestamp:"10 min ago",variant:"overlay",behaviour:"permanent"}},{name:"Text & Timed & Cloaseable",style:{width:"300px"},props:{timestamp:"10 min ago",variant:"overlay"}},{name:"Text & Headline & Timed & Cloaseable",style:{width:"300px"},props:{headline:"Headline",timestamp:"10 min ago",variant:"overlay"}},{name:"Text & Icon & Headline & Timed & Cloaseable",style:{width:"300px"},props:{icon:"information_circle",headline:"Headline",timestamp:"10 min ago",variant:"overlay"}}]}],Rv=({semantic:t,icon:e,headline:n,variant:a,children:l,behaviour:r,link:i,timestamp:s,linkVariant:u,img:c})=>o.jsx(Ab,{semantic:t,icon:e,headline:n,link:i?o.jsx(rr,{href:"#",children:"Textlink"}):void 0,image:c?o.jsx("img",{src:"/react-showcase//assets/images/placeholder.jpg",alt:"Placeholder"}):void 0,variant:a,behaviour:r,linkVariant:u,timestamp:s,onClose:()=>{alert(l.toString())},children:l}),Av=()=>o.jsx($,{title:"DBNotification",variants:W(jv,Rv)}),Fv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Variant",examples:[{name:"(Default) Outlined - Adaptive",props:{}},{name:"Filled - Adaptive",props:{variant:"filled"}},{name:"Ghost - Adaptive",props:{variant:"ghost"}},{name:"Brand",props:{variant:"brand"}}]},{name:"State",examples:[{name:"(Default) Enabled",props:{}},{name:"Disabled",props:{disabled:!0}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{}},{name:"Small",props:{size:"small"}}]},{name:"Content",examples:[{name:"(Default) Text",props:{}},{name:"Icon & Text",props:{icon:"user"}},{name:"Icon",props:{icon:"user",noText:!0}}]},{name:"Behaviour",examples:[{name:"(Default) Auto Width",props:{}},{name:"Width full",style:{width:"500px"},props:{width:"full"}}]}],zv=({variant:t,state:e,size:n,noText:a,icon:l,width:r,disabled:i,children:s})=>o.jsx(J,{variant:t,state:e,size:n,noText:a,icon:l,disabled:i,width:r,onClick:()=>{alert(s.toString())},children:s}),Mv=()=>o.jsx($,{title:"DBButton",variants:W(Fv,zv)}),Uv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}},{name:"functional",className:"db-density-functional",props:{}}]},{name:"Elevation Level",examples:[{name:"(Default) Level 1 - Adaptive",props:{elevationLevel:"1"}},{name:"Level 2 - Adaptive",props:{elevationLevel:"2"}},{name:"Level 3 - Adaptive",props:{elevationLevel:"3"}}]},{name:"Spacing",examples:[{name:"(Default) Small",props:{spacing:"small"}},{name:"No Spacing",props:{spacing:"none"}},{name:"Medium",props:{spacing:"medium"}}]},{name:"Behaviour",examples:[{name:"(Default) Non interactive",props:{}},{name:"Interactive",props:{behaviour:"interactive"}}]},{name:"Example",examples:[{name:"Level 1 - Interactive",props:{elevationLevel:"1",behaviour:"interactive"}},{name:"Level 2 - Interactive",props:{elevationLevel:"2",behaviour:"interactive"}},{name:"Level 3 - Interactive",props:{elevationLevel:"3",behaviour:"interactive"}}]}],Ov=({behaviour:t,children:e,spacing:n,elevationLevel:a})=>o.jsx(Fd,{behaviour:t,spacing:n,elevationLevel:a,children:o.jsx("strong",{children:e})}),Vv=()=>o.jsx($,{title:"DBCard",variants:W(Uv,Ov)}),$v=[{name:"Density",examples:[{name:"Functional",style:{width:"200px"},className:"db-density-functional",props:{}},{name:"(Default) Regular",style:{width:"200px"},className:"db-density-regular",props:{}},{name:"Expressive",style:{width:"200px"},className:"db-density-expressive",props:{}}]},{name:"Variant",examples:[{name:"(Default) Adaptive - Horizontal",style:{width:"200px"},props:{}},{name:"Adaptive - Vertical",style:{height:"100px"},props:{variant:"vertical"}}]},{name:"Emphasis",examples:[{name:"(Default) Weak",style:{width:"200px"},props:{}},{name:"Strong",style:{width:"200px"},props:{emphasis:"strong"}}]}],Wv=({variant:t,emphasis:e,children:n})=>o.jsxs(o.Fragment,{children:[o.jsx(Z,{size:"small",semantic:"informational",children:n}),o.jsx(Al,{variant:t,emphasis:e})]}),Hv=()=>o.jsx($,{title:"DBDivider",variants:W($v,Wv)}),Gv=()=>{const[t,e]=d.useState(""),[n,a]=d.useState(""),[l,r]=d.useState("default textarea"),[i,s]=d.useState(""),[u,c]=d.useState(""),[f,h]=d.useState(""),[b,g]=d.useState([]),[T,y]=d.useState([!0,!1]),[I,p]=d.useState(),[m,v]=d.useState(!1);d.useEffect(()=>{setTimeout(()=>{p([{key:"test1",value:"Test1"},{key:"test2",value:"Test2"},{key:"test3",value:"Test3"}])},2e3)},[]);const D=[{key:"test",value:"Test"},{key:"test2"}],w=x=>{y([x.target.checked,x.target.checked])},S=x=>{y([x.target.checked,T[1]])},B=x=>{y([T[0],x.target.checked])};return o.jsxs("div",{className:"form-container",children:[o.jsx("div",{children:o.jsx("form",{children:o.jsxs("fieldset",{children:[o.jsx("p",{children:"Input:"}),o.jsx(Ve,{label:"Textinput",placeholder:"Placeholder",message:"Description",icon:"user",name:"input-name",value:t,dataList:D,onChange:x=>{e(x.target.value)}}),o.jsx("p",{children:"Textarea:"}),o.jsx(ul,{label:"Textarea Controlled",value:l,onChange:x=>{r(x.target.value)}}),o.jsx(Ve,{label:"Date input",message:"Description",name:"input-date-name",onChange:x=>{a(x.target.value)},type:"date"}),o.jsx(ul,{label:"Textarea Default value",defaultValue:"text area default value",onChange:x=>{s(x.target.value)}}),o.jsx("p",{children:"Radio:"}),o.jsx("ul",{children:["X","Y","Z"].map(x=>o.jsx("li",{children:o.jsxs(Mo,{name:"radio-group",value:x,onChange:()=>{c(x)},children:["Radio ",x]})},`radio-${x}`))}),o.jsx("p",{children:"Tags:"}),o.jsx("ul",{children:["X","Y","Z"].map((x,L)=>o.jsx("li",{children:o.jsx(Md,{semantic:L===0?void 0:"successful",emphasis:L===2?"strong":void 0,children:o.jsxs(We,{onChange:()=>{b.includes(x)?g(b.filter(P=>P!==x)):g([...b,x])},children:["Tag ",x]})})},`tag-${x}`))}),o.jsx("p",{children:"Checkbox:"}),o.jsx(We,{name:"checkbox",value:"Checkbox checked",checked:T[0]&&T[1],indeterminate:T[0]!==T[1],onChange:w,children:"Checkbox Indeterminate"}),o.jsxs("fieldset",{children:[o.jsx(We,{name:"checkbox-1",value:"Checkbox checked",checked:T[0],onChange:S,children:"Checkbox"}),o.jsx(We,{name:"checkbox-2",value:"Checkbox checked",checked:T[1],onChange:B,children:"Checkbox"}),o.jsx(We,{name:"checkbox-3",value:"Irgendwas",defaultChecked:!1,children:"DefaultChecked"})]}),o.jsx("p",{children:"DBSelect:"}),o.jsxs(wa,{value:f,label:"Label",onChange:x=>{h(x.target.value)},children:[o.jsx("option",{value:"test1",children:"Test1"}),o.jsx("option",{value:"test2",children:"Test2"})]}),o.jsx("p",{children:"Button:"}),o.jsx(J,{type:"button",onClick:()=>{e("reset")},children:"Reset and Toggle"}),o.jsx(J,{type:"button",variant:"brand",onClick:x=>{alert(JSON.stringify({input:t,radio:u,select:f,tags:b}))},children:"Hi from Showcase!"})]})})}),o.jsxs("div",{children:[o.jsx("h2",{children:"Output"}),o.jsxs("dl",{children:[o.jsx("dt",{children:"inputs value"}),o.jsx("dd",{children:t||"No Input set"}),o.jsx("dt",{children:"date inputs value"}),o.jsx("dd",{children:n||"No date input set"}),o.jsx("dt",{children:"textarea values"}),o.jsx("dd",{children:l||"No Textrea set"}),o.jsx("dd",{children:i||"No Textrea set"}),o.jsx("dt",{children:"radio value"}),o.jsx("dd",{children:u||"No radio set"}),o.jsx("dt",{children:"checkbox (indeterminate) value"}),o.jsx("dd",{children:`checkbox ${T[0]?"":"un"}checked`}),o.jsx("dt",{children:"select value"}),o.jsx("dd",{children:f||"No select set"}),o.jsx("dt",{children:"tags value"}),o.jsx("dd",{children:JSON.stringify(b)})]}),o.jsx(Al,{}),o.jsx(J,{onClick:()=>{v(!m)},children:"TabsTest"}),o.jsxs(Ai,{children:[o.jsxs(Fl,{children:[o.jsx(vt,{children:"Test 1"}),o.jsx(vt,{children:"Test 2"}),m&&o.jsx(vt,{children:"Test 3"})]}),o.jsx(xt,{children:"Tab Panel 1"}),o.jsx(xt,{children:"Tab Panel 2"}),m&&o.jsx(xt,{children:"Tab Panel 3"})]}),o.jsxs(Ai,{orientation:"vertical",children:[o.jsxs(Fl,{children:[o.jsx(vt,{icon:"airplane",children:"Airplane Button"}),o.jsx(vt,{iconAfter:"cancel",children:"Cancel Button"}),o.jsx(vt,{iconAfter:"cancel",children:"Long Button Label with a lot of text"}),o.jsx(vt,{icon:"airplane",iconAfter:"cancel",children:"Another Button Label with a lot of text"}),o.jsx(vt,{icon:"airplane",noText:!0})]}),o.jsx(xt,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),o.jsx(xt,{children:"Tab Panel 2"}),o.jsx(xt,{children:"Tab Panel 3"}),o.jsx(xt,{children:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}),o.jsx(xt,{children:"Tab Panel 5"})]}),o.jsx(Al,{}),o.jsx(Ud,{children:I==null?void 0:I.map(x=>o.jsx(Sn,{headlinePlain:x.key,children:x.value},x.key))}),o.jsx(wa,{id:"select-test",value:f,label:"Label",onChange:x=>{h(x.target.value)},options:[{label:"Test1",value:"Test1"},{label:"Test2",value:"Test2"}]}),o.jsx("h4",{children:"Validations"}),o.jsx(Ve,{label:"Input minlength validation",placeholder:"Placeholder",invalidMessage:"Min. 3",validMessage:"😎",minLength:3}),o.jsx(Ve,{label:"Input pattern validation",placeholder:"Placeholder",pattern:"\\w{3,16}",invalidMessage:"Pattern \\w{3,16}",validMessage:"😎"}),o.jsx(Ve,{label:"Input number",placeholder:"Placeholder",invalidMessage:"Type=number",validMessage:"😎",type:"number"}),o.jsx(Ve,{label:"Input number min",placeholder:"Placeholder",invalidMessage:"Type=number min 3",validMessage:"😎",type:"number",min:3}),o.jsx(ul,{label:"Textarea min 10",invalidMessage:"Min 10",validMessage:"😎",minLength:10})]})]})},Qv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Semantic",examples:[{name:"(Default) Adaptive",props:{}},{name:"Neutral",props:{semantic:"neutral"}},{name:"Critical",props:{semantic:"critical"}},{name:"Informational",props:{semantic:"informational"}},{name:"Successful",props:{semantic:"successful"}},{name:"Warning",props:{semantic:"warning"}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{}},{name:"Small",props:{size:"small"}}]}],Kv=({semantic:t,size:e,icon:n,children:a})=>o.jsx(Z,{semantic:t,size:e,icon:n,children:a}),Xv=()=>o.jsx($,{title:"DBInfotext",variants:W(Qv,Kv)}),Yv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{label:"Label"}},{name:"(Default) Regular",className:"db-density-regular",props:{label:"Label"}},{name:"Expressive",className:"db-density-expressive",props:{label:"Label"}}]},{name:"Variant Label",examples:[{name:"(Default) Label Above",props:{label:"Label"}},{name:"Floating Label",props:{label:"Label",variant:"floating",value:"Floating Label"}},{name:"Hidden Label",props:{label:"Label",variant:"hidden"}}]},{name:"Variant Helper Message",examples:[{name:"(Default) Basic",props:{label:"Label"}},{name:"Helper Message",props:{label:"Label",message:"Helper Message"}}]},{name:"States Label Above",examples:[{name:"(Default) Empty",props:{label:"Label"}},{name:"Filled",props:{label:"Label",value:"Filled"}},{name:"Disabled",props:{label:"Label",disabled:!0}},{name:"Readonly - Filled",props:{label:"Label",value:"Readonly - Filled",readOnly:!0}}]},{name:"States Floating Label",examples:[{name:"(Default) Empty",props:{label:"Label",variant:"floating"}},{name:"Filled",props:{label:"Label",value:"Filled",variant:"floating"}},{name:"Disabled",props:{label:"Label",disabled:!0,variant:"floating"}},{name:"Readonly - Filled",props:{label:"Label",value:"Readonly - Filled",readOnly:!0,variant:"floating"}}]},{name:"Content",examples:[{name:"(Default) Text",props:{label:"Label",value:"(Default) Text"}},{name:"Filled Number",props:{label:"Number",value:"123456",type:"number"}},{name:"Text - Leading Icon",props:{label:"Label",icon:"x_placeholder"}},{name:"Text - Leading Icon - Trailing Icon",props:{label:"Label",icon:"x_placeholder",iconAfter:"x_placeholder"}},{name:"Text - Trailing Icon",props:{label:"Label",iconAfter:"x_placeholder"}}]},{name:"Requirement",examples:[{name:"(Default) Optional",props:{label:"Label"}},{name:"Required",props:{label:"Label",required:!0}}]},{name:"Example - Types",examples:[{name:"(Default) Text",props:{label:"Label"}},{name:"Password",props:{label:"Label",type:"password"}},{name:"Search",props:{label:"Label",type:"search"}},{name:"E-Mail",props:{label:"Label",type:"email"}},{name:"Number",props:{label:"Label",type:"number"}},{name:"Tel",props:{label:"Label",type:"tel"}},{name:"URL",props:{label:"Label",type:"url"}},{name:"Date",props:{label:"Label",type:"date"}},{name:"Datetime Local",props:{label:"Label",type:"datetime-local"}},{name:"Month",props:{label:"Label",type:"month"}},{name:"Time",props:{label:"Label",type:"time"}},{name:"Week",props:{label:"Label",type:"week"}}]},{name:"Example - Types - Floating Label",examples:[{name:"(Default) Text",props:{label:"Label",variant:"floating"}},{name:"Password",props:{label:"Label",type:"password",variant:"floating"}},{name:"Search",props:{label:"Label",type:"search",variant:"floating"}},{name:"E-Mail",props:{label:"Label",type:"email",variant:"floating"}},{name:"Number",props:{label:"Label",type:"number",variant:"floating"}},{name:"Tel",props:{label:"Label",type:"tel",variant:"floating"}},{name:"URL",props:{label:"Label",type:"url",variant:"floating"}},{name:"Date",props:{label:"Label",type:"date",variant:"floating"}},{name:"Datetime Local",props:{label:"Label",type:"datetime-local",variant:"floating"}},{name:"Month",props:{label:"Label",type:"month",variant:"floating"}},{name:"Time",props:{label:"Label",type:"time",variant:"floating"}},{name:"Week",props:{label:"Label",type:"week",variant:"floating"}}]}],qv=({label:t,value:e,type:n,minLength:a,required:l,disabled:r,iconAfter:i,icon:s,children:u,message:c,variant:f,readOnly:h})=>o.jsx(Ve,{label:t,message:c,placeholder:u,variant:f,defaultValue:e,type:n,minLength:a,required:l,disabled:r,readOnly:h,iconAfter:i,icon:s}),Jv=()=>o.jsx($,{title:"DBInput",variants:W(Yv,qv)}),Zv=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{href:"#"}},{name:"(Default) Regular",className:"db-density-regular",props:{href:"#"}},{name:"Expressive",className:"db-density-expressive",props:{href:"#"}}]},{name:"Semantic",examples:[{name:"(Default) Adaptive",props:{href:"#"}},{name:"Brand",props:{href:"#",variant:"brand"}}]},{name:"Interaction-States",examples:[{name:"Enabled (Default)/Hover/Pressed",props:{href:"#"}},{name:"Disabled",props:{href:"#",disabled:!0}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{href:"#"}},{name:"Small",props:{href:"#",size:"small"}}]},{name:"Content",examples:[{name:"(Default) Internal",props:{href:"#"}},{name:"External",props:{href:"#",content:"external"}}]}],tg=({href:t,variant:e,disabled:n,size:a,content:l,children:r})=>o.jsx(rr,{href:t,variant:e,disabled:n,size:a,content:l,children:r}),eg=()=>o.jsx($,{title:"DBLink",variants:W(Zv,tg)}),ng=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Variant",examples:[{name:"(Default) Full",style:{width:"100%",display:"block"},props:{}},{name:"Medium",style:{width:"100%",display:"block"},props:{variant:"medium"}},{name:"Large",style:{width:"100%",display:"block"},props:{variant:"large"}}]},{name:"Size",examples:[{name:"(Default) Medium",props:{}},{name:"Large",props:{size:"large"}},{name:"Small",props:{size:"small"}}]}],ag=({variant:t,size:e,children:n})=>o.jsx(ph,{className:"db-informational-bg-lvl-2",size:e,variant:t,children:n}),lg=()=>o.jsx($,{title:"DBSection",variants:W(ng,ag)}),rg=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{label:"Label"}},{name:"(Default) Regular",className:"db-density-regular",props:{label:"Label"}},{name:"Expressive",className:"db-density-expressive",props:{label:"Label"}}]},{name:"Variant Label",examples:[{name:"(Default) Label Above",props:{label:"Label"}},{name:"Floating Label",props:{label:"Label",variant:"floating",value:"Floating Label"}},{name:"Hidden Label",props:{label:"Label",variant:"hidden"}}]},{name:"Variant Helper Message",examples:[{name:"(Default) Basic",props:{label:"Label"}},{name:"Helper Message",props:{label:"Label",message:"Helper Message"}}]},{name:"States Label Above",examples:[{name:"(Default) Empty",props:{label:"Label"}},{name:"Filled",props:{label:"Label",value:"Filled"}},{name:"Disabled",props:{label:"Label",disabled:!0}},{name:"Readonly - Filled",props:{label:"Label",value:"Readonly - Filled",readOnly:!0}}]},{name:"States Floating Label",examples:[{name:"(Default) Empty",props:{label:"Label",variant:"floating"}},{name:"Filled",props:{label:"Label",value:"Filled",variant:"floating"}},{name:"Disabled",props:{label:"Label",disabled:!0,variant:"floating"}},{name:"Readonly - Filled",props:{label:"Label",value:"Readonly - Filled",readOnly:!0,variant:"floating"}}]},{name:"Requirement",examples:[{name:"(Default) Optional",props:{label:"Label"}},{name:"Required",props:{label:"Label",required:!0}}]},{name:"Rows",examples:[{name:"(Default) 4 Rows",style:{width:"328px"},props:{label:"(Default) 4 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{name:"Custom",style:{width:"328px"},props:{label:"Custom Example 8 Rows",rows:8,value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}]}],ig=({cols:t,disabled:e,message:n,label:a,placeholder:l,rows:r,value:i,readOnly:s,required:u,children:c,variant:f})=>{const[h,b]=d.useState(i);return o.jsx(ul,{cols:t,disabled:e,message:n,label:a,variant:f,readOnly:s,onChange:g=>{b(g.target.value)},required:u,placeholder:l??c,rows:r,value:h})},og=()=>o.jsx(o.Fragment,{children:o.jsx($,{title:"DBTextarea",variants:W(rg,ig)})}),sg=[{name:"Density",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]}],ug=({children:t})=>o.jsxs(o.Fragment,{children:[o.jsx(Z,{icon:"none",size:"small",semantic:"informational",children:t}),o.jsx(sl,{icon:"user",children:t})]}),cg=()=>o.jsx($,{title:"DBIcon",variants:W(sg,ug)}),dg=[{name:"Tonality",examples:[{name:"Functional",className:"db-density-functional",props:{}},{name:"(Default) Regular",className:"db-density-regular",props:{}},{name:"Expressive",className:"db-density-expressive",props:{}}]},{name:"Variants",examples:[{name:"(Default) With Logo",props:{}},{name:"No Logo",props:{hideLogo:!0}},{name:"Custom Logo",props:{hideLogo:!0,customLogo:!0}}]}];var zr={};const mg=({children:t,hideLogo:e,customLogo:n})=>o.jsxs(Ad,{hideLogo:e,children:[n&&o.jsx("img",{src:`${(zr==null?void 0:zr.NEXT_PUBLIC_BASE_PATH)??"/react-showcase"}/assets/images/placeholder.jpg`,alt:"logo"}),t]}),fg=()=>o.jsx($,{title:"DBBrand",variants:W(dg,mg)}),$e=t=>t.sort((e,n)=>e.path.localeCompare(n.path)),Hd=[{path:"06",label:"06 Feedback",subNavigation:$e([{path:"notification",label:"Notification",component:o.jsx(Av,{})},{path:"badge",label:"Badge",component:o.jsx(bv,{})}])},{path:"05",label:"05 Navigation",subNavigation:$e([{path:"navigation-item",label:"NavigationItem",component:o.jsx(gv,{})},{path:"navigation",label:"Navigation",component:o.jsx(mv,{})}])},{path:"04",label:"04 Data-Display",subNavigation:$e([{path:"brand",label:"Brand",component:o.jsx(fg,{})},{path:"infotext",label:"Infotext",component:o.jsx(Xv,{})},{path:"icon",label:"Icon",component:o.jsx(cg,{})},{path:"tooltip",label:"Tooltip",component:o.jsx(tv,{})},{path:"tag",label:"Tag",component:o.jsx(wv,{})},{path:"accordion",label:"Accordion",component:o.jsx(uv,{})},{path:"accordion-item",label:"AccordionItem",component:o.jsx(iv,{})},{path:"tab-item",label:"TabItem",component:o.jsx(qh,{})},{path:"tabs",label:"Tabs",component:o.jsx(Kh,{})}])},{path:"03",label:"03 Data-Input",subNavigation:$e([{path:"input",label:"Input",component:o.jsx(Jv,{})},{path:"textarea",label:"Textarea",component:o.jsx(og,{})},{path:"radio",label:"Radio",component:o.jsx(_v,{})},{path:"checkbox",label:"Checkbox",component:o.jsx(xv,{})},{path:"select",label:"Select",component:o.jsx(Pv,{})}])},{path:"02",label:"02 Action",subNavigation:$e([{path:"link",label:"Link",component:o.jsx(eg,{})},{path:"button",label:"Button",component:o.jsx(Mv,{})}])},{path:"01",label:"01 Layout",subNavigation:$e([{path:"card",label:"Card",component:o.jsx(Vv,{})},{path:"drawer",label:"Drawer",component:o.jsx(Cv,{})},{path:"divider",label:"Divider",component:o.jsx(Hv,{})},{path:"section",label:"Section",component:o.jsx(lg,{})},{path:"popover",label:"Popover",component:o.jsx(av,{})}])},{path:"",label:"Home",component:o.jsx(Gv,{})}],Gd=({navItem:t})=>{const e=ln(),n=t.path===""?e.pathname==="/":e.pathname.includes(t.path);return o.jsx($t,{active:n,backButtonText:`Back to ${t.label}`,subNavigation:t.subNavigation&&o.jsx(o.Fragment,{children:t.subNavigation.map(a=>({...a,path:`${t.path}/${a.path}`})).map(a=>o.jsx(Gd,{navItem:a},`router-path-${a.path}`))}),children:t.component?o.jsx(Sb,{to:t.path,children:t.label},`router-path-${t.path}`):t.label})},pg=()=>o.jsx(Od,{children:$e(Hd).map(t=>o.jsx(Gd,{navItem:t},`router-path-${t.path}`))}),bg=()=>{const[t,e,n,a,l,r]=Wd(),[i,s]=d.useState(!1);return l??r?o.jsx("div",{className:`db-density-${t} db-${n}`,children:o.jsx(tu,{})}):o.jsx(uh,{type:"fixedHeaderFooter",fadeIn:!0,header:o.jsx(th,{drawerOpen:i,onToggle:s,brand:o.jsx(Ad,{children:"Showcase"}),metaNavigation:o.jsx(Hh,{onColorChange:a,onDensityChange:e}),callToAction:o.jsx(J,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),actionBar:o.jsxs(o.Fragment,{children:[o.jsx(J,{icon:"user",variant:"ghost",noText:!0,children:"Profile"}),o.jsx(J,{icon:"bell",variant:"ghost",noText:!0,children:"Notification"}),o.jsx(J,{icon:"question_mark_circle",variant:"ghost",noText:!0,children:"Help"})]}),children:o.jsx(pg,{})}),children:o.jsx("div",{className:`db-density-${t} db-${n}`,children:o.jsx(tu,{})})})};Mr.createRoot(document.querySelector("#root")).render(o.jsx(bu.StrictMode,{children:o.jsx(Tb,{children:o.jsxs(pb,{children:[o.jsx(Xn,{path:"/",element:o.jsx(bg,{}),children:Hd.map(t=>o.jsx(Xn,{path:t.path,element:t.component,children:t.subNavigation?t.subNavigation.map(e=>o.jsx(Xn,{path:e.path,element:e.component},`router-${e.path}`)):null},`router-${t.path}`))}),o.jsx(Xn,{path:"/*",element:o.jsx(mb,{to:"/"})})]})})}));
