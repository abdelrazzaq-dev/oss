"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[21119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="Introduction",p={unversionedId:"reference/sql-mapper/entity/intro",id:"version-0.0.17/reference/sql-mapper/entity/intro",title:"Introduction",description:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database.",source:"@site/versioned_docs/version-0.0.17/reference/sql-mapper/entity/intro.md",sourceDirName:"reference/sql-mapper/entity",slug:"/reference/sql-mapper/entity/intro",permalink:"/docs/0.0.17/reference/sql-mapper/entity/intro",draft:!1,tags:[],version:"0.0.17",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Entity",permalink:"/docs/0.0.17/category/entity"},next:{title:"Fields",permalink:"/docs/0.0.17/reference/sql-mapper/entity/fields"}},s={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database."),(0,a.kt)("p",null,"Platformatic DB includes a ",(0,a.kt)("em",{parentName:"p"},"mapper")," that reads the schemas of database tables and then generates an ",(0,a.kt)("em",{parentName:"p"},"entity")," object for each table."),(0,a.kt)("p",null,"Platformatic DB is a ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," application. The Fastify instance object is decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic")," property, which exposes several APIs that handle the manipulation of data in the database."),(0,a.kt)("p",null,"Platformatic DB populates the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," object with data found in database tables."),(0,a.kt)("p",null,"The keys on the ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," object are ",(0,a.kt)("em",{parentName:"p"},"singularized")," versions of the table names \u2014 for example ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," \u2014 and the values are a set of associated metadata and functions."))}d.isMDXComponent=!0}}]);