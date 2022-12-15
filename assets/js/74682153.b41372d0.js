"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[17575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="Migrations",l={unversionedId:"reference/migrations",id:"version-0.1.0/reference/migrations",title:"Migrations",description:"Platformatic DB is already set up to run migrations for you when it starts.",source:"@site/versioned_docs/version-0.1.0/reference/migrations.md",sourceDirName:"reference",slug:"/reference/migrations",permalink:"/docs/0.1.0/reference/migrations",draft:!1,tags:[],version:"0.1.0",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/0.1.0/reference/configuration"},next:{title:"Introduction to the REST API",permalink:"/docs/0.1.0/reference/sql-rest/introduction"}},s={},p=[{value:"How to run migrations",id:"how-to-run-migrations",level:2},{value:"Automatically on server start",id:"automatically-on-server-start",level:3},{value:"Manually with the CLI",id:"manually-with-the-cli",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrations"},"Migrations"),(0,o.kt)("p",null,"Platformatic DB is already set up to run migrations for you when it starts.\nIt uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postgrator"},"Postgrator")," under the hood to run migrations. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rickbergfalk/postgrator"},"Postgrator documentation")," for guidance on writing migration files."),(0,o.kt)("p",null,"In brief, you should create a file structure like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"migrations/\n  |- 001.do.sql\n  |- 001.undo.sql\n  |- 002.do.sql\n  |- 002.undo.sql\n  |- 003.do.sql\n  |- 003.undo.sql\n  |- 004.do.sql\n  |- 004.undo.sql\n  |- ... and so on\n")),(0,o.kt)("p",null,"Postgrator uses a table in your schema, to store which migrations have been already processed, so that only new ones will be applied at every server start."),(0,o.kt)("p",null,"You can always rollback some migrations specifing what version you would like to rollback to."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ platformatic db migrate --to 002\n")),(0,o.kt)("p",null,"Will execute ",(0,o.kt)("inlineCode",{parentName:"p"},"004.undo.sql"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"003.undo.sql")," in this order. If you keep those files in migrations directory, when the server restarts it will execute ",(0,o.kt)("inlineCode",{parentName:"p"},"003.do.sql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"004.do.sql")," in this order."),(0,o.kt)("h2",{id:"how-to-run-migrations"},"How to run migrations"),(0,o.kt)("p",null,"There are two ways to run migrations in Platformatic DB. They can be processed automatically when the server starts, or you can just run the ",(0,o.kt)("inlineCode",{parentName:"p"},"db migrate")," command."),(0,o.kt)("p",null,"In both cases you have to edit your config file to tell Platformatic DB where are your migration files."),(0,o.kt)("h3",{id:"automatically-on-server-start"},"Automatically on server start"),(0,o.kt)("p",null,"To run migrations when Platformatic DB starts, you need to use the config file root property ",(0,o.kt)("inlineCode",{parentName:"p"},"migrations"),"."),(0,o.kt)("p",null,"There are two options in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"migrations"')," property"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dir")," (",(0,o.kt)("em",{parentName:"li"},"required"),") the directory where the migration files are located. It will be relative to the config file path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"autoApply")," a boolean value that tells Platformatic DB to auto-apply migrations or not (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),")")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "migrations": {\n    "dir": "./path/to/migrations/folder",\n    "autoApply": false\n  }\n}\n')),(0,o.kt)("h3",{id:"manually-with-the-cli"},"Manually with the CLI"),(0,o.kt)("p",null,"See documentation about ",(0,o.kt)("inlineCode",{parentName:"p"},"db migrate")," ",(0,o.kt)("a",{parentName:"p",href:"./cli#migrate"},"command")))}c.isMDXComponent=!0}}]);