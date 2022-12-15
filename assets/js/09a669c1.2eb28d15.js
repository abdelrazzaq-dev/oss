"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[40790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Plugin",l={unversionedId:"reference/db/plugin",id:"version-0.8.0/reference/db/plugin",title:"Plugin",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.8.0/reference/db/plugin.md",sourceDirName:"reference/db",slug:"/reference/db/plugin",permalink:"/docs/0.8.0/reference/db/plugin",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"docs",previous:{title:"Programmatic Rules",permalink:"/docs/0.8.0/reference/db/authorization/programmatic-rules"},next:{title:"Logging",permalink:"/docs/0.8.0/reference/db/logging"}},p={},s=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,a.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugin": {\n    "path": "./plugin/index.js"\n  }\n}\n')),(0,a.kt)("p",null,"The path is relative to the config file path."),(0,a.kt)("p",null,"Since it uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-sandbox"},"fastify-sandbox")," under the hood, all other options of that package may be specified under the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," property."),(0,a.kt)("p",null,"Once the config file is set up, you can write your plugin to extend Platformatic DB API or write your custom business logic."),(0,a.kt)("p",null,"You should export an async ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," which receives a parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app")," (",(0,a.kt)("inlineCode",{parentName:"li"},"FastifyInstance"),") that is the main fastify ",(0,a.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Server/#instance"},"instance")," running Platformatic DB"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," all the options specified in the config file after ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"You can always access Platformatic ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.8.0/reference/sql-mapper/introduction"},"data mapper")," through ",(0,a.kt)("inlineCode",{parentName:"li"},"app.platformatic")," property.")),(0,a.kt)("p",null,"Check some ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.8.0/guides/add-custom-functionality/introduction"},"examples"),"."),(0,a.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,a.kt)("p",null,"Plugin file is being watched by ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options"},(0,a.kt)("inlineCode",{parentName:"a"},"fs.watch"))," function."),(0,a.kt)("p",null,"You don't need to reload Platformatic DB server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#caveats"},"here"),").")),(0,a.kt)("h2",{id:"directories"},"Directories"),(0,a.kt)("p",null,"The path can also be a directory. In that case, the directory will be loaded with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-autoload"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/autoload")),"."),(0,a.kt)("p",null,"Consider the following directory structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n")),(0,a.kt)("p",null,"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."),(0,a.kt)("h2",{id:"multiple-plugins"},"Multiple plugins"),(0,a.kt)("p",null,"Multiple plugins can be loaded in parallel by specifying an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugin": [{\n    "path": "./plugin/index.js"\n  }, {\n    "path": "./routes/"\n  }]\n}\n')))}c.isMDXComponent=!0}}]);