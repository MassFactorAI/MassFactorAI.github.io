(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5321:function(e,t,n){"use strict";var r=n(1177),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,c={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:i.current}}t.jsx=c,t.jsxs=c},35:function(e,t){"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),d=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var x=b.prototype=new g;x.constructor=b,p(x,y.prototype),x.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function k(e,t,o){if(null==e)return e;var a=[],i=0;return!function e(t,o,a,i,s){var c,l,u,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var _=!1;if(null===t)_=!0;else switch(f){case"string":case"number":_=!0;break;case"object":switch(t.$$typeof){case n:case r:_=!0}}if(_)return s=s(_=t),t=""===i?"."+E(_,0):i,v(s)?(a="",null!=t&&(a=t.replace(R,"$&/")+"/"),e(s,o,a,"",function(e){return e})):null!=s&&(w(s)&&(c=s,l=a+(!s.key||_&&_.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+t,s={$$typeof:n,type:c.type,key:l,ref:c.ref,props:c.props,_owner:c._owner}),o.push(s)),1;if(_=0,i=""===i?".":i+":",v(t))for(var h=0;h<t.length;h++){var p=i+E(f=t[h],h);_+=e(f,o,a,p,s)}else if("function"==typeof(p=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=d&&u[d]||u["@@iterator"])?u:null))for(t=p.call(t),h=0;!(f=t.next()).done;)p=i+E(f=f.value,h++),_+=e(f,o,a,p,s);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return _}(e,a,"","",function(e){return t.call(o,e,i++)}),a}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null};function F(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:S},t.act=F,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=p({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:_,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=F,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},1177:function(e,t,n){"use strict";e.exports=n(35)},5710:function(e,t,n){"use strict";e.exports=n(5321)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6384)}])},8199:function(e,t){"use strict";var n,r,o,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return s},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return i},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return _},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return d}});let i="refresh",s="navigate",c="restore",l="server-patch",u="prefetch",f="fast-refresh",_="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(a=r||(r={})).fresh="fresh",a.reusable="reusable",a.expired="expired",a.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(8754),o=n(5893),a=r._(n(7294)),i=n(6075),s=n(3955),c=n(8041),l=n(9903),u=n(5490),f=n(1928),_=n(257),d=n(4229),h=n(7195),p=n(9470),m=n(8199),y=new Set;function g(e,t,n,r,o,a){if(a||(0,s.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let n,r;let{href:c,as:y,children:x,prefetch:v=null,passHref:j,replace:S,shallow:C,scroll:N,locale:w,onClick:R,onMouseEnter:E,onTouchStart:k,legacyBehavior:O=!1,...P}=e;n=x,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let T=a.default.useContext(f.RouterContext),F=a.default.useContext(_.AppRouterContext),I=null!=T?T:F,M=!T,H=!1!==v,A=null===v?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:W,as:L}=a.default.useMemo(()=>{if(!T){let e=b(c);return{href:e,as:y?b(y):e}}let[e,t]=(0,i.resolveHref)(T,c,!0);return{href:e,as:y?(0,i.resolveHref)(T,y):t||e}},[T,c,y]),$=a.default.useRef(W),U=a.default.useRef(L);O&&(r=a.default.Children.only(n));let V=O?r&&"object"==typeof r&&r.ref:t,[D,K,B]=(0,d.useIntersection)({rootMargin:"200px"}),G=a.default.useCallback(e=>{(U.current!==L||$.current!==W)&&(B(),U.current=L,$.current=W),D(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[L,V,W,B,D]);a.default.useEffect(()=>{I&&K&&H&&g(I,W,L,{locale:w},{kind:A},M)},[L,W,K,w,H,null==T?void 0:T.locale,I,M,A]);let z={ref:G,onClick(e){O||"function"!=typeof R||R(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,i,c,l,u){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let _=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};u?a.default.startTransition(_):_()}(e,I,W,L,S,C,N,w,M)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(H||!M)&&g(I,W,L,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)},onTouchStart:function(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(H||!M)&&g(I,W,L,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)}};if((0,l.isAbsoluteUrl)(L))z.href=L;else if(!O||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,h.getDomainLocale)(L,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);z.href=t||(0,p.addBasePath)((0,u.addLocale)(L,e,null==T?void 0:T.defaultLocale))}return O?a.default.cloneElement(r,z):(0,o.jsx)("a",{...P,...z,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),o=n(4474),a="function"==typeof IntersectionObserver,i=new Map,s=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,l=c||!a,[u,f]=(0,r.useState)(!1),_=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{_.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(l||u)return;let e=_.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},s.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,n,t,u,_.current]),[d,u,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6384:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5893),o=n(9008),a=n.n(o);n(7294);var i=n(5710),s=n(5424),c=n.n(s);function l(){return(0,i.jsx)("footer",{className:c().pageFooter__pf,children:(0,i.jsx)("div",{className:c().copyrightWrap__pf,children:"Copyright MassFactor.ai 2024"})})}n(1177);var u=n(1664),f=n.n(u),_=n(7357),d=n.n(_);function h(){return(0,i.jsx)("header",{className:d().pageheader__ph,children:(0,i.jsxs)("div",{className:d().pageheaderwrap__ph,children:[(0,i.jsx)("div",{className:d().logowrap__ph,children:(0,i.jsx)("a",{href:"/"})}),(0,i.jsx)(f(),{href:"/pricing",children:"Pricing"}),(0,i.jsx)(f(),{href:"/support",children:"Support"}),(0,i.jsx)(f(),{href:"/blog",children:"Blog"}),(0,i.jsx)(f(),{href:"/company",children:"Company"}),(0,i.jsx)("div",{className:d().getstartedwrap__ph,children:(0,i.jsx)(f(),{href:"/get",children:"Get Started"})})]})})}var p=n(777),m=n.n(p),y=n(5589),g=n.n(y);function b(){return(0,r.jsxs)("section",{className:g().childSection__ifc,children:[(0,r.jsxs)("div",{className:m().childHeadingWrap,children:[(0,r.jsx)("h5",{className:g().productTitle__ifc,children:"Custom Automations"}),(0,r.jsxs)("h2",{children:["Execute ",(0,r.jsx)("em",{className:g().emph,children:"complex custom logic,"}),(0,r.jsx)("br",{})," beyond maintenance tasks."]})]}),(0,r.jsx)("div",{className:g().childSubheadingWrap__ifc,children:(0,r.jsxs)("p",{className:g().childSubheading__ifc,children:["Design custom automations by reusing and wiring together our AI agents.",(0,r.jsx)("br",{})," As a simple example, the first agent can use a cloud LLM provider like OpenAI",(0,r.jsx)("br",{})," to modify a file, and then the second agent tests that the modification works."]})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:g().contentWrap__ifc})})]})}var x=n(3335),v=n.n(x),j=n(3043),S=n.n(j);function C(){return(0,r.jsxs)("section",{className:S().childSection__ifr,children:[(0,r.jsxs)("div",{className:m().childHeadingWrap,children:[(0,r.jsx)("h5",{className:S().productTitle__ifr,children:"Turn-Key Automations"}),(0,r.jsxs)("h2",{children:["Perform common ",(0,r.jsx)("em",{className:S().emph,children:"maintenance"})," tasks",(0,r.jsx)("br",{})," on a massive scale, ",(0,r.jsx)("em",{className:S().emph,children:"fully automatically."})]})]}),(0,r.jsx)("div",{className:S().childSubheadingWrap__ifr,children:(0,r.jsxs)("p",{className:S().childSubheading__ifr,children:["MassFactor comes with ready to use, task-specific automations.",(0,r.jsx)("br",{}),"These define which AI agents to deploy and how they collaborate."]})}),(0,r.jsxs)("div",{className:S().contentWrap__ifr,children:[(0,r.jsxs)("div",{className:S().contentRow__ifr,children:[(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Change / Refactor"}),(0,r.jsx)("p",{children:"This is the most generic automation. You give a natural language instruction and MassFactor performs it on all (or selected) files, optionally running tests afterward."})]})}),(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Sync changes between languages"}),(0,r.jsx)("p",{children:"If you're building a native iOS+Android app or a library for a dozen languages, you can add a feature in one language, and MassFactor syncs it to the others."})]})})]}),(0,r.jsxs)("div",{className:S().contentRow__ifr,children:[(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Modernize to a newer language version"}),(0,r.jsx)("p",{children:"Choose the language features you want to start using, and MassFactor handles the rest (e.g., change an entire JavaScript application to use async/await)."})]})}),(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Translate to a new language #wip"}),(0,r.jsx)("p",{children:"AIs are good at translating code, but full codebase translation is hard. This automation is not (yet!) 100%, but can be useful as a starting point. Work in Progress."})]})})]}),(0,r.jsxs)("div",{className:S().contentRow__ifr,children:[(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Upgrade to a newer library version"}),(0,r.jsx)("p",{children:'After you upgrade a 3rd party library to the latest version, and things explode, MassFactor can fix it via reading "breaking changes" notes or your guidance.'})]})}),(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Migrate to a different library"}),(0,r.jsx)("p",{children:"If the development of a 3rd party library you use has been discontinued, MassFactor can migrate your codebase to use a replacement library."})]})})]}),(0,r.jsxs)("div",{className:S().contentRow__ifr,children:[(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Review code & implement recommendations"}),(0,r.jsx)("p",{children:"The first agent does a code review, on a commit/PR or one file at a time on old code. The second agent implements the recommendations that you approve."})]})}),(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Analyze inconsistencies & unify patterns"}),(0,r.jsx)("p",{children:"You describe what to look for, such as an inconsistent design or naming pattern. The first agent analyses your codebase. The second unifies the patterns."})]})})]}),(0,r.jsxs)("div",{className:S().contentRow__ifr,children:[(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Generate tests"}),(0,r.jsx)("p",{children:"Choose classes/files to cover or a project-wide target coverage percent, and MassFactor generates the missing test, using the same style as in existing tests."})]})}),(0,r.jsx)("div",{className:S().contentColumn__ifr,children:(0,r.jsxs)("div",{className:S().contentCell__ifr,children:[(0,r.jsx)("h6",{children:"Generate docs #wip"}),(0,r.jsx)("p",{children:"In theory, this should work similarly to generating new tests, but we are struggling to get any LLM to produce insightful docs beyond the obvious. Work in progress."})]})})]})]})]})}function N(){return(0,r.jsx)("section",{className:v().topSection__if,children:(0,r.jsxs)("div",{className:m().topWrap,children:[(0,r.jsx)("h4",{className:m().topHeading,children:"this is how massfactor helps you"}),(0,r.jsx)(C,{}),(0,r.jsx)(b,{})]})})}var w=n(1479),R=n.n(w);function E(){return(0,r.jsx)("section",{className:R().heroSection__ih,children:(0,r.jsxs)("div",{className:R().heroWrap__ih,children:[(0,r.jsx)("div",{className:R().heroHeadingWrap__ih,children:(0,r.jsx)("h1",{className:R().heroHeading_alt_automateboring__ih,children:"Automate boring code maintenance."})}),(0,r.jsxs)("div",{className:R().heroSubheadingWrap__ih,children:[(0,r.jsxs)("p",{className:R().heroSubheading__alt_github_br__ih,children:[(0,r.jsx)("em",{className:R().emMassFactor,children:"MassFactor"})," is an AI code tool, a bit like GitHub Copilot,",(0,r.jsx)("br",{})," but it can work on thousands of files by using AI agents."]}),(0,r.jsxs)("p",{className:R().heroSubheading__alt_github_br__ih,children:["Instead of you chatting with an AI to change one file, the",(0,r.jsx)("br",{}),"AI agents chat with each other to change a thousand files."]})]})]})})}var k=n(3074),O=n.n(k);function P(){return(0,r.jsxs)("div",{className:m().page,children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"MassFactor"})}),(0,r.jsx)(h,{}),(0,r.jsxs)("main",{className:O().main__i,children:[(0,r.jsx)(E,{}),(0,r.jsx)(N,{})]}),(0,r.jsx)(l,{})]})}},5424:function(e){e.exports={pageFooter__pf:"PageFooter_pageFooter__pf__3bcWL",copyrightWrap__pf:"PageFooter_copyrightWrap__pf__mbNct"}},7357:function(e){e.exports={pageheader__ph:"PageHeader_pageheader__ph__STkMB",pageheaderwrap__ph:"PageHeader_pageheaderwrap__ph__EGeck",logowrap__ph:"PageHeader_logowrap__ph__PxPK5",getstartedwrap__ph:"PageHeader_getstartedwrap__ph__97wVx"}},777:function(e){e.exports={page:"common_page__NaE4J",topWrap:"common_topWrap__CVHuO",topHeading:"common_topHeading__cG5Qp",childSectionSimple:"common_childSectionSimple__z4GhJ",childHeadingWrap:"common_childHeadingWrap__NrI5w",childSubheadingWrap:"common_childSubheadingWrap__E83Sg",childSubheading:"common_childSubheading__avhNm",childSubheadingEmph:"common_childSubheadingEmph__dH7Cx",nobr:"common_nobr__W6Mdc"}},3074:function(e){e.exports={main__i:"Index_main__i__H7eIo"}},3335:function(e){e.exports={topSection__if:"Features_topSection__if__Nppve"}},5589:function(e){e.exports={childSection__ifc:"FeaturesCustom_childSection__ifc__UhQp_",productTitle__ifc:"FeaturesCustom_productTitle__ifc__Hp6VM",emph:"FeaturesCustom_emph__9PnkO",childSubheadingWrap__ifc:"FeaturesCustom_childSubheadingWrap__ifc__GwCfF",childSubheading__ifc:"FeaturesCustom_childSubheading__ifc__EQHZm",contentWrap__ifc:"FeaturesCustom_contentWrap__ifc__nV0V_"}},3043:function(e){e.exports={childSection__ifr:"FeaturesReady_childSection__ifr__sxOQ_",productTitle__ifr:"FeaturesReady_productTitle__ifr__RCQNn",emph:"FeaturesReady_emph__WYKky",childSubheadingWrap__ifr:"FeaturesReady_childSubheadingWrap__ifr__gH5WL",childSubheading__ifr:"FeaturesReady_childSubheading__ifr__bH6B6",contentWrap__ifr:"FeaturesReady_contentWrap__ifr__PxwJN",contentRow__ifr:"FeaturesReady_contentRow__ifr__IVBFl",contentColumn__ifr:"FeaturesReady_contentColumn__ifr__EFW2B",contentCell__ifr:"FeaturesReady_contentCell__ifr__T8IJm"}},1479:function(e){e.exports={heroSection__ih:"Hero_heroSection__ih__Xr3xg",emMassFactor:"Hero_emMassFactor__u2b_b",heroWrap__ih:"Hero_heroWrap__ih__LCgWf",heroHeading_alt_automatecustom__ih:"Hero_heroHeading_alt_automatecustom__ih__1mr3M",heroHeading_alt_automateboring__ih:"Hero_heroHeading_alt_automateboring__ih__egd5z",heroSubheading__alt_github_br__ih:"Hero_heroSubheading__alt_github_br__ih___t8TQ",heroSubheading__alt_github_justify__ih:"Hero_heroSubheading__alt_github_justify__ih__hH23S",heroSubheading__alt_tasks__ih:"Hero_heroSubheading__alt_tasks__ih__OX3wv"}},9008:function(e,t,n){e.exports=n(3867)},1664:function(e,t,n){e.exports=n(8342)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);