(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5321:function(e,t,r){"use strict";var n=r(1177),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},35:function(e,t){"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=g.prototype=new b;v.constructor=g,h(v,m.prototype),v.isPureReactComponent=!0;var S=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,u={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!E.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:i,props:u,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function w(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function R(e,t,o){if(null==e)return e;var u=[],a=0;return!function e(t,o,u,a,i){var c,l,s,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var p=!1;if(null===t)p=!0;else switch(f){case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case r:case n:p=!0}}if(p)return i=i(p=t),t=""===a?"."+w(p,0):a,S(i)?(u="",null!=t&&(u=t.replace(P,"$&/")+"/"),e(i,o,u,"",function(e){return e})):null!=i&&(O(i)&&(c=i,l=u+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t,i={$$typeof:r,type:c.type,key:l,ref:c.ref,props:c.props,_owner:c._owner}),o.push(i)),1;if(p=0,a=""===a?".":a+":",S(t))for(var d=0;d<t.length;d++){var h=a+w(f=t[d],d);p+=e(f,o,u,h,i)}else if("function"==typeof(h=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=_&&s[_]||s["@@iterator"])?s:null))for(t=h.call(t),d=0;!(f=t.next()).done;)h=a+w(f=f.value,d++),p+=e(f,o,u,h,i);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return p}(e,u,"","",function(e){return t.call(o,e,a++)}),u}function k(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:null};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,r){R(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=g,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:T,ReactCurrentOwner:x},t.act=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=x.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,r){return N.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,r){return N.current.useReducer(e,t,r)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return N.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},1177:function(e,t,r){"use strict";e.exports=r(35)},5710:function(e,t,r){"use strict";e.exports=r(5321)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5869)}])},8199:function(e,t){"use strict";var r,n,o,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return p},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return _}});let a="refresh",i="navigate",c="restore",l="server-patch",s="prefetch",f="fast-refresh",p="server-action";function _(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(u=n||(n={})).fresh="fresh",u.reusable="reusable",u.expired="expired",u.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(5893),u=n._(r(7294)),a=r(6075),i=r(3955),c=r(8041),l=r(9903),s=r(5490),f=r(1928),p=r(257),_=r(4229),d=r(7195),h=r(9470),y=r(8199),m=new Set;function b(e,t,r,n,o,u){if(u||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let v=u.default.forwardRef(function(e,t){let r,n;let{href:c,as:m,children:v,prefetch:S=null,passHref:j,replace:x,shallow:E,scroll:C,locale:O,onClick:P,onMouseEnter:w,onTouchStart:R,legacyBehavior:k=!1,...N}=e;r=v,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let T=u.default.useContext(f.RouterContext),M=u.default.useContext(p.AppRouterContext),I=null!=T?T:M,H=!T,A=!1!==S,$=null===S?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:L,as:F}=u.default.useMemo(()=>{if(!T){let e=g(c);return{href:e,as:m?g(m):e}}let[e,t]=(0,a.resolveHref)(T,c,!0);return{href:e,as:m?(0,a.resolveHref)(T,m):t||e}},[T,c,m]),U=u.default.useRef(L),W=u.default.useRef(F);k&&(n=u.default.Children.only(r));let D=k?n&&"object"==typeof n&&n.ref:t,[V,K,q]=(0,_.useIntersection)({rootMargin:"200px"}),B=u.default.useCallback(e=>{(W.current!==F||U.current!==L)&&(q(),W.current=F,U.current=L),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[F,D,L,q,V]);u.default.useEffect(()=>{I&&K&&A&&b(I,L,F,{locale:O},{kind:$},H)},[F,L,K,O,A,null==T?void 0:T.locale,I,H,$]);let G={ref:B,onClick(e){k||"function"!=typeof P||P(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,o,a,c,l,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let p=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};s?u.default.startTransition(p):p()}(e,I,L,F,x,E,C,O,H)},onMouseEnter(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(A||!H)&&b(I,L,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:$},H)},onTouchStart:function(e){k||"function"!=typeof R||R(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(A||!H)&&b(I,L,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:$},H)}};if((0,l.isAbsoluteUrl)(F))G.href=F;else if(!k||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,d.getDomainLocale)(F,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);G.href=t||(0,h.addBasePath)((0,s.addLocale)(F,e,null==T?void 0:T.defaultLocale))}return k?u.default.cloneElement(n,G):(0,o.jsx)("a",{...N,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(7294),o=r(4474),u="function"==typeof IntersectionObserver,a=new Map,i=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,l=c||!u,[s,f]=(0,n.useState)(!1),p=(0,n.useRef)(null),_=(0,n.useCallback)(e=>{p.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(l||s)return;let e=p.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,s,p.current]),[_,s,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5869:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),o=r(9008),u=r.n(o);r(7294);var a=r(5710),i=r(5424),c=r.n(i);function l(){return(0,a.jsx)("footer",{className:c().pageFooter__pf,children:(0,a.jsx)("div",{className:c().copyrightWrap__pf,children:"Copyright MassFactor.ai 2024"})})}r(1177);var s=r(1664),f=r.n(s),p=r(7357),_=r.n(p);function d(){return(0,a.jsx)("header",{className:_().pageheader__ph,children:(0,a.jsxs)("div",{className:_().pageheaderwrap__ph,children:[(0,a.jsx)("div",{className:_().logowrap__ph,children:(0,a.jsx)("a",{href:"/"})}),(0,a.jsx)(f(),{href:"/pricing",children:"Pricing"}),(0,a.jsx)(f(),{href:"/support",children:"Support"}),(0,a.jsx)(f(),{href:"/blog",children:"Blog"}),(0,a.jsx)(f(),{href:"/company",children:"Company"}),(0,a.jsx)("div",{className:_().getstartedwrap__ph,children:(0,a.jsx)(f(),{href:"/get",children:"Get Started"})})]})})}var h=r(777),y=r.n(h),m=r(1479),b=r.n(m);function g(){return(0,n.jsx)("section",{className:b().heroSection__ih,children:(0,n.jsxs)("div",{className:b().heroWrap__ih,children:[(0,n.jsx)("div",{className:b().heroHeadingWrap__ih,children:(0,n.jsx)("h1",{className:b().heroHeading_alt_automateboring__ih,children:"Automate boring code maintenance."})}),(0,n.jsx)("div",{className:b().heroSubheadingWrap__ih,children:(0,n.jsxs)("p",{className:b().heroSubheading__alt_github__ih,children:[(0,n.jsx)("em",{className:b().emMassFactor,children:"MassFactor"})," is a bit like GitHub CoPilot, but it works on thousands of files.",(0,n.jsx)("br",{}),"Use it for codebase-wide refactoring, generating missing tests or docs,",(0,n.jsx)("br",{})," keeping iOS and Android apps in sync, and much more."]})})]})})}var v=r(3074),S=r.n(v);function j(){return(0,n.jsxs)("div",{className:y().page,children:[(0,n.jsx)(u(),{children:(0,n.jsx)("title",{children:"MassFactor"})}),(0,n.jsx)(d,{}),(0,n.jsx)("main",{className:S().main__i,children:(0,n.jsx)(g,{})}),(0,n.jsx)(l,{})]})}},5424:function(e){e.exports={pageFooter__pf:"PageFooter_pageFooter__pf__3bcWL",copyrightWrap__pf:"PageFooter_copyrightWrap__pf__mbNct"}},7357:function(e){e.exports={pageheader__ph:"PageHeader_pageheader__ph__STkMB",pageheaderwrap__ph:"PageHeader_pageheaderwrap__ph__EGeck",logowrap__ph:"PageHeader_logowrap__ph__PxPK5",getstartedwrap__ph:"PageHeader_getstartedwrap__ph__97wVx"}},777:function(e){e.exports={page:"common_page__NaE4J",topWrap:"common_topWrap__CVHuO",topHeading:"common_topHeading__cG5Qp",childSectionSimple:"common_childSectionSimple__z4GhJ",childSubheading:"common_childSubheading__avhNm",childSubheadingEmph:"common_childSubheadingEmph__dH7Cx",nobr:"common_nobr__W6Mdc"}},3074:function(e){e.exports={main__i:"Index_main__i__H7eIo"}},1479:function(e){e.exports={heroSection__ih:"Hero_heroSection__ih__Xr3xg",emMassFactor:"Hero_emMassFactor__u2b_b",heroWrap__ih:"Hero_heroWrap__ih__LCgWf",heroHeading_alt_automatecustom__ih:"Hero_heroHeading_alt_automatecustom__ih__1mr3M",heroHeading_alt_automateboring__ih:"Hero_heroHeading_alt_automateboring__ih__egd5z",heroSubheading__alt_tasks__ih:"Hero_heroSubheading__alt_tasks__ih__OX3wv",heroSubheading__alt_github__ih:"Hero_heroSubheading__alt_github__ih__RXqrR"}},9008:function(e,t,r){e.exports=r(3867)},1664:function(e,t,r){e.exports=r(8342)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);