"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[29772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o="Architecture",l={unversionedId:"getting-started/architecture",id:"version-0.11.0/getting-started/architecture",title:"Architecture",description:"Platformatic is a collection of Open Source tools designed to eliminate friction",source:"@site/versioned_docs/version-0.11.0/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/docs/getting-started/architecture",draft:!1,tags:[],version:"0.11.0",frontMatter:{},sidebar:"docs",previous:{title:"Movie Quotes App Tutorial",permalink:"/docs/getting-started/movie-quotes-app-tutorial"},next:{title:"Guides",permalink:"/docs/category/guides"}},s={},p=[{value:"Platformatic DB",id:"platformatic-db",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Platformatic is a collection of Open Source tools designed to eliminate friction\nin backend development. The first of those tools is Platformatic DB, which is developed\nas ",(0,n.kt)("inlineCode",{parentName:"p"},"@platformatic/db"),"."),(0,n.kt)("h2",{id:"platformatic-db"},"Platformatic DB"),(0,n.kt)("p",null,"Platformatic DB can expose a SQL database by dynamically mapping it to REST/OpenAPI\nand GraphQL endpoints. It supports a limited subset of the SQL query language, but\nalso allows developers to add their own custom routes and resolvers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Platformatic DB Architecture",src:r(22332).Z,width:"2154",height:"2081"})),(0,n.kt)("p",null,"Platformatic DB is composed of a few key libraries:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"@platformatic/sql-mapper")," - follows the ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"},"Data Mapper pattern")," to build an API on top of a SQL database.\nInternally it uses the ",(0,n.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"@database")," project"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"@platformatic/sql-openapi")," - uses ",(0,n.kt)("inlineCode",{parentName:"li"},"sql-mapper")," to create a series of REST routes and matching OpenAPI definitions.\nInternally it uses ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-swagger"},(0,n.kt)("inlineCode",{parentName:"a"},"@fastify/swagger")),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"@platformatic/sql-graphql")," - uses ",(0,n.kt)("inlineCode",{parentName:"li"},"sql-mapper")," to create a GraphQL endpoint and schema. ",(0,n.kt)("inlineCode",{parentName:"li"},"sql-graphql")," also support Federation.\nInternally it uses ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mercuriusjs/mercurius"},(0,n.kt)("inlineCode",{parentName:"a"},"mercurius")),".")),(0,n.kt)("p",null,"Platformatic DB allows you to load a ",(0,n.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Plugins/"},"Fastify plugin")," during server startup that contains your own application-specific code.\nThe plugin can add more routes or resolvers \u2014 these will automatically be shown in the OpenAPI and GraphQL schemas."),(0,n.kt)("p",null,"SQL database migrations are also supported. They're implemented internally with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postgrator"},(0,n.kt)("inlineCode",{parentName:"a"},"postgrator"))," library."))}u.isMDXComponent=!0},22332:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/platformatic-architecture-373095091e8fc6f88cd44e1503ecc8ed.png"}}]);