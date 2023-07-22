"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[947],{7522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(9901);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=s,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7364),s=(n(9901),n(7522));const r={},o="Access Strategies",i={unversionedId:"message-db/access-strategies",id:"message-db/access-strategies",title:"Access Strategies",description:"The first, and likely most used access strategy is the unoptimized one. It'll not apply any optimised reading logic.",source:"@site/docs/message-db/access-strategies.md",sourceDirName:"message-db",slug:"/message-db/access-strategies",permalink:"/equinox-js/docs/message-db/access-strategies",draft:!1,editUrl:"https://github.com/nordfjord/equinox-js/tree/main/apps/docs/docs/message-db/access-strategies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageDB",permalink:"/equinox-js/docs/message-db/"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"access-strategies"},"Access Strategies"),(0,s.kt)("h1",{id:"unoptimized"},"Unoptimized"),(0,s.kt)("p",null,"The first, and likely most used access strategy is the unoptimized one. It'll not apply any optimised reading logic.\nWhen loading a stream for the first time all of its events will be loaded in batches of ",(0,s.kt)("inlineCode",{parentName:"p"},"batchSize")," (default: ",(0,s.kt)("inlineCode",{parentName:"p"},"500"),").\nThis turns out to be a sensible default for most aggregates, especially when used in conjunction with the\nbuilt-in caching layer."),(0,s.kt)("h1",{id:"latestknowneventtype"},"LatestKnownEvent(type)"),(0,s.kt)("p",null,'There is a special case of stream whose events are all a "full-replace". An example could be a customer\'s contact\npreferences, or an entity view-data stream. This access strategy will ensure that you only load at most a single event\nwhen transacting or querying such a stream.'),(0,s.kt)("h1",{id:"adjacentsnapshotstype-tosnapshot-frequency"},"AdjacentSnapshots(type, toSnapshot, frequency)"),(0,s.kt)("p",null,"Imagine a simple counter\nservice. It does not have a defined start and end as most processes would and as\nsuch we don't know how large it'll grow over time. In order to ensure the\nsnappiness of our application we might apply snapshotting to ensure that the\nstate of the counter can be reconstructed in 2 round-trips instead of N, where N\nis the number of events divided by batch size."),(0,s.kt)("p",null,"In Equinox the snapshot is a member of the Event DU"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'type Event =\n  | { type: "Increment", data: { amount: number } }\n  | { type: "Snapshot", data: { current: number } }\n\nconst codec = Codec.json<Event>()\n')),(0,s.kt)("p",null,"We'll handle the snapshot in our evolution function"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'type State = number\nconst initial = 0\nconst evolve = (state: State, event: Event) => {\n  switch (event.type) {\n    case "Increment": return state + event.data.amount\n    case "Snapshot": return event.data.current\n  }\n}\nconst fold = reduce(evolve)\n')),(0,s.kt)("p",null,"In addition to this we need to specify to Equinox which event type represents a\nsnapshot and how to transform the current state into a snapshot"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const snapshotEventType: Event["type"] = "Snapshot"\nconst toSnapshot = (state: State): Event => \n  ({ type: snapshotEventType, data: { current: state } })\n')),(0,s.kt)("p",null,"We can then create the access strategy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const access = AccessStrategy.AdjacentSnapshots(snapshotEventType, toSnapshot)\n")),(0,s.kt)("p",null,"With this in place Equinox will maintain and store a snapshot event in an\nadjacent stream ",(0,s.kt)("inlineCode",{parentName:"p"},"{category}:snapshot-{stream_id}"),'. When loading the current\nstate we will firt load the latest event from the snapshot stream. The snapshot\nevent will have the version of the stream it was generated from, this version\nwill be used to fetch "events after version" from the source stream. In practise\nthis guarantees that the state of a stream can be reconstructed in 2 round-trips\n(aside from some interactions with the cache that can cause it to need an extra\nround trip in exceedingly rare cases).'))}d.isMDXComponent=!0}}]);