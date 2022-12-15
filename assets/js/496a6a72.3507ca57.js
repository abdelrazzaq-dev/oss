"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[35057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="Introduction to the sql-events module",s={unversionedId:"reference/sql-events/introduction",id:"version-0.9.1/reference/sql-events/introduction",title:"Introduction to the sql-events module",description:"The Platformatic DB sql-events uses mqemitter to publish events when entities are saved and deleted.",source:"@site/versioned_docs/version-0.9.1/reference/sql-events/introduction.md",sourceDirName:"reference/sql-events",slug:"/reference/sql-events/introduction",permalink:"/docs/0.9.1/reference/sql-events/introduction",draft:!1,tags:[],version:"0.9.1",frontMatter:{},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/0.9.1/reference/sql-mapper/entities/transactions"},next:{title:"Fastify Plugin",permalink:"/docs/0.9.1/reference/sql-events/fastify-plugin"}},l={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-the-sql-events-module"},"Introduction to the sql-events module"),(0,i.kt)("p",null,"The Platformatic DB sql-events uses ",(0,i.kt)("a",{parentName:"p",href:"http://npm.im/mqemitter"},"mqemitter")," to publish events when ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/sql-mapper/entities/introduction"},"entities")," are saved and deleted."),(0,i.kt)("p",null,"These events are useful to distribute updates to clients, e.g. via WebSocket, Server-Sent Events, or GraphQL Subscritions.\nWhen subscribing and using a multi-process system with a broker like Redis, a subscribed topic will receive the data from all\nthe other processes."),(0,i.kt)("p",null,"They are not the right choice for executing some code whenever an entity is created, modified or deleted, in that case\nuse ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/sql-mapper/entities/hooks"},"@platformatic/sql-mapper hooks"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"You can use together with ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-mapper"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i @platformatic/sql-mapper @platformatic/sql-events\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { connect } = require('@platformatic/sql-mapper')\nconst { setupEmitter } = require('@platformatic/sql-events')\nconst { pino } = require('pino')\n\nconst log = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString = 'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  }\n})\n\nsetupEmitter({ mapper, log })\n\nconst pageEntity = mapper.entities.page\n\nconst queue = await mapper.subscribe([\n  pageEntity.getSubscriptionTopic({ action: 'save' }),\n  pageEntity.getSubscriptionTopic({ action: 'delete' })\n])\n\nconst page = await pageEntity.save({\n  input: { title: 'fourth page' }\n})\n\nconst page2 = await pageEntity.save({\n  input: {\n    id: page.id,\n    title: 'fifth page'\n  }\n})\n\nawait pageEntity.delete({\n  where: {\n    id: {\n      eq: page.id\n    }\n  },\n  fields: ['id', 'title']\n})\n\nfor await (const ev of queue) {\n  console.log(ev)\n  if (expected.length === 0) {\n    break\n  }\n}\n\nprocess.exit(0)\n")),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setupEmitter")," function has the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mq")," - an instance of ",(0,i.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,i.kt)("inlineCode",{parentName:"a"},"mqemitter")),", optional.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setupEmitter")," functions adds the following properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapper")," object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mq")," \u2014 an instance of ",(0,i.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,i.kt)("inlineCode",{parentName:"a"},"mqemitter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscribe(topics)")," \u2014 a method to create a node ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#new-streamreadableoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"Readable")),"\nthat will contain the events emitted by those topics.")),(0,i.kt)("p",null,"Each entities of ",(0,i.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," will be augmented with two functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entity.getPublishTopic({ ctx, data, action })")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entity.getSubscriptionTopic({ ctx, action })"))),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," is the GraphQL Context, ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is the object that will be emitted and ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," is either ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),"."))}u.isMDXComponent=!0}}]);