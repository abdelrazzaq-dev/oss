"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[99758],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(h,o(o({ref:r},s),{},{components:t})):n.createElement(h,o({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={},o="Introduction to the GraphQL API",p={unversionedId:"reference/sql-graphql/introduction",id:"version-0.0.22/reference/sql-graphql/introduction",title:"Introduction to the GraphQL API",description:"The Platformatic DB GraphQL plugin starts a GraphQL server wand makes it available",source:"@site/versioned_docs/version-0.0.22/reference/sql-graphql/introduction.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/introduction",permalink:"/docs/0.0.22/reference/sql-graphql/introduction",draft:!1,tags:[],version:"0.0.22",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/0.0.22/reference/sql-rest/api"},next:{title:"Queries",permalink:"/docs/0.0.22/reference/sql-graphql/queries"}},l={},c=[{value:"GraphiQL",id:"graphiql",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-the-graphql-api"},"Introduction to the GraphQL API"),(0,a.kt)("p",null,"The Platformatic DB GraphQL plugin starts a GraphQL server wand makes it available\nvia a ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphql")," endpoint. This endpoint is automatically ready to run queries and\nmutations against your entities. This functionality is powered by\n",(0,a.kt)("a",{parentName:"p",href:"https://mercurius.dev"},"Mercurius"),"."),(0,a.kt)("h2",{id:"graphiql"},"GraphiQL"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," web UI is integrated into\nPlatformatic DB. To enable it you can pass an option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sql-graphql")," plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(graphqlPlugin, { graphiql: true })\n")),(0,a.kt)("p",null,"The GraphiQL interface is made available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphiql")," path."))}u.isMDXComponent=!0}}]);