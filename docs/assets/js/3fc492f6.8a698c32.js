"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[365],{7522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7364),o=(n(9901),n(7522));const a={sidebar_position:3},i="Decider",c={unversionedId:"core-concepts/decider",id:"core-concepts/decider",title:"Decider",description:"In event sourcing a Decider is responsible for mapping an intent and previous history to new events. This is slightly",source:"@site/docs/core-concepts/decider.md",sourceDirName:"core-concepts",slug:"/core-concepts/decider",permalink:"/equinox-js/docs/core-concepts/decider",draft:!1,editUrl:"https://github.com/nordfjord/equinox-js/tree/main/apps/docs/docs/core-concepts/decider.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stream",permalink:"/equinox-js/docs/core-concepts/stream"},next:{title:"Codec",permalink:"/equinox-js/docs/core-concepts/codec"}},s={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decider"},"Decider"),(0,o.kt)("p",null,"In event sourcing a Decider is responsible for mapping an intent and previous history to new events. This is slightly\ntangential to Equinox's concept of a Decider. In Equinox a Decider is an abstraction over a Stream that allows\ntransacting and querying that stream. The abstraction chain can be thought of as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A Category shares event schema, meaning, and state "),(0,o.kt)("li",{parentName:"ol"},"A Stream is a specific instance within a Category"),(0,o.kt)("li",{parentName:"ol"},"A Decider provides a convenience interface on top of a Stream that manages the OCC retry loop when transacting.")),(0,o.kt)("p",null,"The primary way to get your hands on a decider instance is ",(0,o.kt)("inlineCode",{parentName:"p"},"Decider.resolve"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const decider = Decider.resolve(storeCategory, 'CategoryName', streamId, context)\n")),(0,o.kt)("p",null,"When resolving a decider you need a store category, a category name, a stream ID, and the context in which it's being\nresolved (e.g. tenantId). Under the hood this will resolve an ",(0,o.kt)("inlineCode",{parentName:"p"},"IStream")," instance from the store category and pass it\nto a ",(0,o.kt)("inlineCode",{parentName:"p"},"new Decider(stream)"),"."),(0,o.kt)("p",null,"Note that this will not load any events, that will only happen in response to a ",(0,o.kt)("inlineCode",{parentName:"p"},"transact")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'decider.transact((state): Event[] => [{ type: "SomethingHappened" }])\nconst property = await decider.query(state => state.property)\n')))}u.isMDXComponent=!0}}]);