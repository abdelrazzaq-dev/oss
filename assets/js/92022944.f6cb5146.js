"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[61127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),p=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:m,values:h,groupId:g,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[P,I]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=g){const e=N[g];null!=e&&e!==P&&y.some((t=>t.value===e))&&I(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=y[a].value;n!==P&&(A(t),I(n),null!=g&&w(g,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:q,onClick:q},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},1788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={},s="Quick Start Guide",p={unversionedId:"getting-started/quick-start-guide",id:"version-0.9.1/getting-started/quick-start-guide",title:"Quick Start Guide",description:"In this guide you'll learn how to create and run your first API with",source:"@site/versioned_docs/version-0.9.1/getting-started/quick-start-guide.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start-guide",permalink:"/docs/0.9.1/getting-started/quick-start-guide",draft:!1,tags:[],version:"0.9.1",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.9.1/category/getting-started"},next:{title:"Movie Quotes App Tutorial",permalink:"/docs/0.9.1/getting-started/movie-quotes-app-tutorial"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Create a new API project",id:"create-a-new-api-project",level:2},{value:"Add a database schema",id:"add-a-database-schema",level:2},{value:"Configure your API",id:"configure-your-api",level:2},{value:"Start your API server",id:"start-your-api-server",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Use the REST API interface",id:"use-the-rest-api-interface",level:3},{value:"Create a new page",id:"create-a-new-page",level:4},{value:"Get all pages",id:"get-all-pages",level:4},{value:"Swagger OpenAPI documentation",id:"swagger-openapi-documentation",level:4},{value:"Use the GraphQL API interface",id:"use-the-graphql-api-interface",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,r.kt)("p",null,"In this guide you'll learn how to create and run your first API with\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/db/introduction"},"Platformatic DB"),". Let's get started!"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/"},"SQLite")," for the database, but\nPlatformatic DB also supports ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL")," and ",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.org/"},"MariaDB")," databases.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Platformatic supports macOS, Linux and Windows (",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/windows/wsl/"},"WSL")," recommended)."),(0,r.kt)("p",null,"To follow along with this guide you'll need to have these things installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," >= v16.17.0 or >= v18.8.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/"},"npm")," v7 or later"),(0,r.kt)("li",{parentName:"ul"},"A code editor, for example ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,r.kt)("h2",{id:"create-a-new-api-project"},"Create a new API project"),(0,r.kt)("p",null,"Create a directory for your new API project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir quick-start\n\ncd quick-start\n")),(0,r.kt)("p",null,"Then create a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file and install the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/platformatic"},"platformatic"),"\nCLI as a project dependency:"),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n\nnpm install platformatic\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init --yes\n\nyarn add platformatic\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm init\n\npnpm add platformatic\n")))),(0,r.kt)("h2",{id:"add-a-database-schema"},"Add a database schema"),(0,r.kt)("p",null,"In your project directory (",(0,r.kt)("inlineCode",{parentName:"p"},"quick-start"),"), create a ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations")," directory to\nstore your database migration files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir migrations\n")),(0,r.kt)("p",null,"Then create a new migration file named ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"001.do.sql"))," in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"migrations")),"\ndirectory."),(0,r.kt)("p",null,"Copy and paste this SQL query into the migration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="migrations/001.do.sql"',title:'"migrations/001.do.sql"'},"CREATE TABLE pages (\n  id INTEGER PRIMARY KEY,\n  title VARCHAR(255) NOT NULL\n);\n")),(0,r.kt)("p",null,"When it's run by Platformatic, this query will create a new database table\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"pages"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can check syntax for SQL queries on the ",(0,r.kt)("a",{parentName:"p",href:"https://database.guide/sql-reference-for-beginners/"},"Database.Guide SQL Reference"),".")),(0,r.kt)("h2",{id:"configure-your-api"},"Configure your API"),(0,r.kt)("p",null,"In your project directory, create a new Platformatic configuration file named\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"platformatic.db.json")),"."),(0,r.kt)("p",null,"Copy and paste in this configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": "3042"\n  },\n  "core": {\n    "connectionString": "sqlite://./pages.db"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "autoApply": true\n  }\n}\n')),(0,r.kt)("p",null,"This configuration tells Platformatic to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run an API server on ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:3042/")),(0,r.kt)("li",{parentName:"ul"},"Connect to an SQLite database stored in a file named ",(0,r.kt)("inlineCode",{parentName:"li"},"pages.db")),(0,r.kt)("li",{parentName:"ul"},"Look for database migration files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"migrations")," directory")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/db/configuration"},"Configuration reference")," explains all of the\nsupported configuration options.")),(0,r.kt)("h2",{id:"start-your-api-server"},"Start your API server"),(0,r.kt)("p",null,"In your project directory, use the Platformatic CLI to start your API server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db start\n")),(0,r.kt)("p",null,"This will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run your SQL migration file and create a ",(0,r.kt)("inlineCode",{parentName:"li"},"pages")," table in the SQLite database."),(0,r.kt)("li",{parentName:"ol"},"Automatically map your SQL database to REST and GraphQL API interfaces."),(0,r.kt)("li",{parentName:"ol"},"Start the Platformatic API server.")),(0,r.kt)("p",null,"Your Platformatic API is now up and running! \ud83c\udf1f"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("h3",{id:"use-the-rest-api-interface"},"Use the REST API interface"),(0,r.kt)("p",null,"You can use cURL to make requests to the REST interface of your API, for example:"),(0,r.kt)("h4",{id:"create-a-new-page"},"Create a new page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" \\\n  -d "{ \\"title\\": \\"Hello Platformatic DB\\" }" \\\n    http://localhost:3042/pages\n')),(0,r.kt)("p",null,"You should receive a response from your API like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"title":"Hello Platformatic DB"}\n')),(0,r.kt)("h4",{id:"get-all-pages"},"Get all pages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3042/pages\n")),(0,r.kt)("p",null,"You should receive a response from your API like this, with an array\ncontaining all the pages in your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{"id":1,"title":"Hello Platformatic DB"}]\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/sql-openapi/introduction"},"REST API reference")," for an\noverview of the REST interface that the API provides.")),(0,r.kt)("h4",{id:"swagger-openapi-documentation"},"Swagger OpenAPI documentation"),(0,r.kt)("p",null,"You can explore the OpenAPI documentation for your REST API in the Swagger UI at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3042/documentation"},"http://localhost:3042/documentation")),(0,r.kt)("h3",{id:"use-the-graphql-api-interface"},"Use the GraphQL API interface"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3042/graphiql"},"http://localhost:3042/graphiql")," in your\nweb browser to explore the GraphQL interface of your API."),(0,r.kt)("p",null,"Try out this GraphQL query to retrieve all pages from your API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  pages {\n    id\n    title\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about your API's GraphQL interface in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9.1/reference/sql-graphql/introduction"},"GraphQL API reference"),".")))}m.isMDXComponent=!0}}]);