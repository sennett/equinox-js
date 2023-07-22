"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{7522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7364),o=(r(9901),r(7522));const s={position:5},a="MessageDB",i={unversionedId:"message-db/index",id:"message-db/index",title:"MessageDB",description:"MessageDB is a fully-featured event store and message store implemented in PostgreSQL for Pub/Sub, Event Sourcing,",source:"@site/docs/message-db/index.md",sourceDirName:"message-db",slug:"/message-db/",permalink:"/equinox-js/docs/message-db/",draft:!1,editUrl:"https://github.com/nordfjord/equinox-js/tree/main/apps/docs/docs/message-db/index.md",tags:[],version:"current",frontMatter:{position:5},sidebar:"tutorialSidebar",previous:{title:"Invoice",permalink:"/equinox-js/docs/examples/invoice"},next:{title:"Access Strategies",permalink:"/equinox-js/docs/message-db/access-strategies"}},c={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messagedb"},"MessageDB"),(0,o.kt)("p",null,"MessageDB is a fully-featured event store and message store implemented in PostgreSQL for Pub/Sub, Event Sourcing,\nMessaging, and Evented Microservices applications. It was extracted from\nthe ",(0,o.kt)("a",{parentName:"p",href:"http://docs.eventide-project.org/"},"Eventide Project")," to make it easier for users to write clients in the language\nof their choosing."))}d.isMDXComponent=!0}}]);