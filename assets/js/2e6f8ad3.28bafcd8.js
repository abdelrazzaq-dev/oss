"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[30469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="Platformatic DB",l={unversionedId:"reference/db/introduction",id:"version-0.11.0/reference/db/introduction",title:"Platformatic DB",description:"Platformatic DB is an HTTP server that provides a flexible set of tools for",source:"@site/versioned_docs/version-0.11.0/reference/db/introduction.md",sourceDirName:"reference/db",slug:"/reference/db/introduction",permalink:"/docs/reference/db/introduction",draft:!1,tags:[],version:"0.11.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic CLI",permalink:"/docs/reference/cli"},next:{title:"Configuration",permalink:"/docs/reference/db/configuration"}},p={},c=[{value:"Features",id:"features",level:2},{value:"Supported databases",id:"supported-databases",level:2},{value:"Public beta",id:"public-beta",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"platformatic-db"},"Platformatic DB"),(0,n.kt)("p",null,"Platformatic DB is an HTTP server that provides a flexible set of tools for\nbuilding robust APIs with Node.js."),(0,n.kt)("p",null,"For a high level overview of how Platformatic DB works, please reference the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/architecture"},"Architecture")," guide."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Platformatic DB is currently in ",(0,n.kt)("a",{parentName:"p",href:"#public-beta"},"public beta"),".")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Command-line interface: ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/cli#db"},(0,n.kt)("inlineCode",{parentName:"a"},"platformatic db"))),(0,n.kt)("li",{parentName:"ul"},"Support for ",(0,n.kt)("a",{parentName:"li",href:"#supported-databases"},"multiple database systems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/db/migrations"},"Database migrations")),(0,n.kt)("li",{parentName:"ul"},"REST/OpenAPI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Automatic ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/sql-openapi/introduction"},"REST API")," from your database schema"),(0,n.kt)("li",{parentName:"ul"},"Interactive documentation (",(0,n.kt)("a",{parentName:"li",href:"https://swagger.io/tools/swagger-ui/"},"Swagger UI"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://swagger.io/resources/open-api/"},"OpenAPI 3.0")," schema"))),(0,n.kt)("li",{parentName:"ul"},"GraphQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Automatic ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/sql-graphql/introduction"},"GraphQL API")," from your\ndatabase schema"),(0,n.kt)("li",{parentName:"ul"},"Support for ",(0,n.kt)("a",{parentName:"li",href:"https://www.apollographql.com/apollo-federation/"},"Apollo Federation")),(0,n.kt)("li",{parentName:"ul"},"Web based GraphQL IDE (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphiql"},"GraphiQL"),")"),(0,n.kt)("li",{parentName:"ul"},"Generated GraphQL schema"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/introduction"},"Authentication & authorization"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supported methods: JWT, Webhook, HTTP Headers (development only)"),(0,n.kt)("li",{parentName:"ul"},"Authorization via role based access control (RBAC)"))),(0,n.kt)("li",{parentName:"ul"},"Complete flexibility",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add custom functionality in a ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/db/plugin"},"Fastify plugin")),(0,n.kt)("li",{parentName:"ul"},"Execute database operations via ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/sql-mapper/entities/introduction"},"mapped entities")),(0,n.kt)("li",{parentName:"ul"},"Write and execute ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/sql-mapper/introduction"},"raw SQL queries")),(0,n.kt)("li",{parentName:"ul"},"Write plugins in JavaScript or ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/cli#compile"},"TypeScript"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Get up and running in 2 minutes using our\n",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start-guide"},"Quick Start Guide")," \u26a1")),(0,n.kt)("h2",{id:"supported-databases"},"Supported databases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sqlite.org/"},"SQLite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB"))),(0,n.kt)("p",null,"The required database driver is automatically inferred and loaded based on the\nvalue of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/db/configuration#core"},(0,n.kt)("inlineCode",{parentName:"a"},"connectionString")),"\nconfiguration setting."),(0,n.kt)("h2",{id:"public-beta"},"Public beta"),(0,n.kt)("p",null,"Platformatic DB is in public beta. You can use it in production, but it's quite\nlikely that you'll encounter significant bugs."),(0,n.kt)("p",null,"If you run into a bug or have a suggestion for improvement, please\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/platformatic/platformatic/issues/new"},"raise an issue on GitHub"),"."))}s.isMDXComponent=!0}}]);