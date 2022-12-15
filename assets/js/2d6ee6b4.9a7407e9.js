"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[2112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Introduction to Entities",s={unversionedId:"reference/sql-mapper/entities/introduction",id:"version-0.5.0/reference/sql-mapper/entities/introduction",title:"Introduction to Entities",description:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database.",source:"@site/versioned_docs/version-0.5.0/reference/sql-mapper/entities/introduction.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/introduction",permalink:"/docs/0.5.0/reference/sql-mapper/entities/introduction",draft:!1,tags:[],version:"0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"Fastify Plugin",permalink:"/docs/0.5.0/reference/sql-mapper/fastify-plugin"},next:{title:"Fields",permalink:"/docs/0.5.0/reference/sql-mapper/entities/fields"}},p={},c=[],l={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-entities"},"Introduction to Entities"),(0,a.kt)("p",null,"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database."),(0,a.kt)("p",null,"Platformatic DB includes a ",(0,a.kt)("em",{parentName:"p"},"mapper")," that reads the schemas of database tables and then generates an ",(0,a.kt)("em",{parentName:"p"},"entity")," object for each table."),(0,a.kt)("p",null,"Platformatic DB is a ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," application. The Fastify instance object is decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic")," property, which exposes several APIs that handle the manipulation of data in the database."),(0,a.kt)("p",null,"Platformatic DB populates the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," object with data found in database tables."),(0,a.kt)("p",null,"The keys on the ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," object are ",(0,a.kt)("em",{parentName:"p"},"singularized")," versions of the table names \u2014 for example ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," \u2014 and the values are a set of associated metadata and functions."))}f.isMDXComponent=!0}}]);