"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[68121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,_=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(_,r(r({ref:t},s),{},{components:n})):a.createElement(_,r({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const i={},r="API",p={unversionedId:"reference/sql-openapi/api",id:"version-0.9.2/reference/sql-openapi/api",title:"API",description:"Each table is mapped to an entity named after table's name.",source:"@site/versioned_docs/version-0.9.2/reference/sql-openapi/api.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/api",permalink:"/docs/0.9.2/reference/sql-openapi/api",draft:!1,tags:[],version:"0.9.2",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the REST API",permalink:"/docs/0.9.2/reference/sql-openapi/introduction"},next:{title:"Introduction to the GraphQL API",permalink:"/docs/0.9.2/reference/sql-graphql/introduction"}},o={},d=[{value:"GET and POST parameters",id:"get-and-post-parameters",level:2},{value:"Fields",id:"fields",level:2},{value:"Where clause",id:"where-clause",level:3},{value:"OrderBy clause",id:"orderby-clause",level:2},{value:"Total Count",id:"total-count",level:3},{value:"<code>POST [PLURAL_ENTITY_NAME]</code>",id:"post-plural_entity_name",level:2},{value:"<code>GET [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"get-plural_entity_nameprimary_key",level:2},{value:"<code>POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"post-plural_entity_nameprimary_key",level:2},{value:"<code>PUT [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"put-plural_entity_nameprimary_key",level:2},{value:"<code>DELETE [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"delete-plural_entity_nameprimary_key",level:2},{value:"Nested Relationships",id:"nested-relationships",level:2},{value:"<code>GET [P_PARENT_ENTITY]/[PARENT_PRIMARY_KEY]/[P_CHILDREN_ENTITY]</code>",id:"get-p_parent_entityparent_primary_keyp_children_entity",level:3},{value:"<code>GET [P_CHILDREN_ENTITY]/[CHILDREN_PRIMARY_KEY]/[S_PARENT_ENTITY]</code>",id:"get-p_children_entitychildren_primary_keys_parent_entity",level:3},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:2},{value:"<code>GET [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"get-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>POST [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"post-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>PUT [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"put-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>DELETE [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"delete-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>GET /[P_ENTITY]</code>",id:"get-p_entity",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Limit",id:"limit",level:3},{value:"Offset",id:"offset",level:3}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api"},"API"),(0,l.kt)("p",null,"Each table is mapped to an ",(0,l.kt)("inlineCode",{parentName:"p"},"entity")," named after table's name. "),(0,l.kt)("p",null,"In the following reference we'll use some placeholders, but let's see an example"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Given this SQL executed against your database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pages (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  body TEXT NOT NULL\n);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[PLURAL_ENTITY_NAME]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[SINGULAR_ENTITY_NAME]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[PRIMARY_KEY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fields")," are ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"body"))),(0,l.kt)("h2",{id:"get-and-post-parameters"},"GET and POST parameters"),(0,l.kt)("p",null,"Some APIs needs the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," method, where parameters must be defined in the URL, or ",(0,l.kt)("inlineCode",{parentName:"p"},"POST/PUT")," methods, where parameters can be defined in the http request payload."),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)("p",null,"Every API can define a ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," parameter, representing the entity fields you want to get back for each row of the table. If not specified all fields are returned."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fields")," parameter are always sent in query string, even for ",(0,l.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")," requests, as a comma separated value."),(0,l.kt)("a",{name:"plural"}),"## `GET /[PLURAL_ENTITY_NAME]`",(0,l.kt)("p",null,"Return all entities matching ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," clause"),(0,l.kt)("h3",{id:"where-clause"},"Where clause"),(0,l.kt)("p",null,"You can define many ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses in REST API, each clause includes a ",(0,l.kt)("strong",{parentName:"p"},"field"),", an ",(0,l.kt)("strong",{parentName:"p"},"operator")," and a ",(0,l.kt)("strong",{parentName:"p"},"value"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"field")," is one of the fields found in the schema."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"operator")," follows this table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Platformatic operator"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL operator"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eq"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'='"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"in"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'IN'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'NOT IN'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"neq"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'<>'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'>'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gte"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'>='"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'<'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lte"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'<='"))))),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"value")," is the value you want to compare the field to."),(0,l.kt)("p",null,"For GET requests all these clauses are specified in the query string using the format ",(0,l.kt)("inlineCode",{parentName:"p"},"where.[FIELD].[OPERATOR]=[VALUE]")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("p",null,"If you want to get the ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," of every ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"id < 15")," you can make an HTTP request like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -X 'GET' \\\n  'http://localhost:3042/pages/?fields=body,title&where.id.lt=15' \\\n  -H 'accept: application/json'\n")),(0,l.kt)("h2",{id:"orderby-clause"},"OrderBy clause"),(0,l.kt)("p",null,"You can define the ordering of the returned rows within your REST API calls with the ",(0,l.kt)("inlineCode",{parentName:"p"},"orderby")," clause using the following pattern:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"?orderby.[field]=[asc | desc]")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"field")," is one of the fields found in the schema.\nThe ",(0,l.kt)("strong",{parentName:"p"},"value")," can be ",(0,l.kt)("inlineCode",{parentName:"p"},"asc")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"desc"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("p",null,"If you want to get the ",(0,l.kt)("inlineCode",{parentName:"p"},"pages")," ordered alphabetically by their ",(0,l.kt)("inlineCode",{parentName:"p"},"titles")," you can make an HTTP request like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -X 'GET' \\\n  'http://localhost:3042/pages?orderby.title=asc' \\\n  -H 'accept: application/json'\n")),(0,l.kt)("h3",{id:"total-count"},"Total Count"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"totalCount")," boolean is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in query, the GET returns the total number of elements in the ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Total-Count")," header ignoring ",(0,l.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," (if specified)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -X \'GET\' \\\n  \'http://localhost:3042/pages/?limit=2&offset=0&totalCount=true\' \\\n  -H \'accept: application/json\'\n\n (...)\n> HTTP/1.1 200 OK\n> x-total-count: 18\n (...)\n\n[{"id":1,"title":"Movie1"},{"id":2,"title":"Movie2"}]%\n')),(0,l.kt)("h2",{id:"post-plural_entity_name"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST [PLURAL_ENTITY_NAME]")),(0,l.kt)("p",null,"Creates a new row in table. Expects fields to be sent in a JSON formatted request body."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Hello World",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 1,\n  "title": "Hello World",\n  "body": "Welcome to Platformatic"\n}\n')),(0,l.kt)("h2",{id:"get-plural_entity_nameprimary_key"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]")),(0,l.kt)("p",null,"Returns a single row, identified by ",(0,l.kt)("inlineCode",{parentName:"p"},"PRIMARY_KEY"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'GET\' \'http://localhost:3042/pages/1?fields=title,body\n\n{\n  "title": "Hello World",\n  "body": "Welcome to Platformatic"\n}\n')),(0,l.kt)("h2",{id:"post-plural_entity_nameprimary_key"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]")),(0,l.kt)("p",null,"Updates a row identified by ",(0,l.kt)("inlineCode",{parentName:"p"},"PRIMARY_KEY"),". "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/1\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 1,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic"\n}\n')),(0,l.kt)("h2",{id:"put-plural_entity_nameprimary_key"},(0,l.kt)("inlineCode",{parentName:"h2"},"PUT [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"),"."),(0,l.kt)("a",{name:"put-plural"}),"## `PUT [PLURAL_ENTITY_NAME]`",(0,l.kt)("p",null,"Updates all entities matching ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," clause"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'PUT\' \\\n  \'http://localhost:3042/pages?where.id.in=1,2\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Updated title!",\n  "body": "Updated body!"\n}\'\n\n[{\n  "id": 1,\n  "title": "Updated title!",\n  "body": "Updated body!"\n},{\n  "id": 2,\n  "title": "Updated title!",\n  "body": "Updated body!"\n}]\n')),(0,l.kt)("h2",{id:"delete-plural_entity_nameprimary_key"},(0,l.kt)("inlineCode",{parentName:"h2"},"DELETE [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]")),(0,l.kt)("p",null,"Deletes a row identified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"PRIMARY_KEY"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -X 'DELETE' 'http://localhost:3042/pages/1?fields=title'\n\n{\n  \"title\": \"Hello Platformatic!\"\n}\n")),(0,l.kt)("h2",{id:"nested-relationships"},"Nested Relationships"),(0,l.kt)("p",null,"Let's consider the following SQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS movies (\n  movie_id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\nCREATE TABLE IF NOT EXISTS quotes (\n  id INTEGER PRIMARY KEY,\n  quote TEXT NOT NULL,\n  movie_id INTEGER NOT NULL REFERENCES movies(movie_id)\n);\n")),(0,l.kt)("p",null,"And:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P_PARENT_ENTITY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"movies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[S_PARENT_ENTITY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"movie")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P_CHILDREN_ENTITY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"quotes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[S_CHILDREN_ENTITY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"quote"))),(0,l.kt)("p",null,"In this case, more APIs are available:"),(0,l.kt)("h3",{id:"get-p_parent_entityparent_primary_keyp_children_entity"},(0,l.kt)("inlineCode",{parentName:"h3"},"GET [P_PARENT_ENTITY]/[PARENT_PRIMARY_KEY]/[P_CHILDREN_ENTITY]")),(0,l.kt)("p",null,"Given a 1-to-many relationship, where a parent entity can have many children, you can query for the children directly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'GET\' \'http://localhost:3042/movies/1/quotes?fields=quote\n\n[\n  {\n    "quote": "I\'ll be back"\n  },\n  {\n    "quote": "Hasta la vista, baby"\n  }\n]\n')),(0,l.kt)("h3",{id:"get-p_children_entitychildren_primary_keys_parent_entity"},(0,l.kt)("inlineCode",{parentName:"h3"},"GET [P_CHILDREN_ENTITY]/[CHILDREN_PRIMARY_KEY]/[S_PARENT_ENTITY]")),(0,l.kt)("p",null,"You can query for the parent directly, e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'GET\' \'http://localhost:3042/quotes/1/movie?fields=title\n\n{\n  "title": "Terminator"\n}\n')),(0,l.kt)("h2",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,l.kt)("p",null,"Many-to-Many relationship lets you relate each row in one table to many rows in\nanother table and vice versa. "),(0,l.kt)("p",null,'Many-to-many relationship are implemented in SQL via a "join table", a table whose ',(0,l.kt)("strong",{parentName:"p"},"primary key"),"\nis composed by the identifier of the two parts of the many-to-many relationship."),(0,l.kt)("p",null,"Platformatic DB fully support many-to-many relationships on all supported database."),(0,l.kt)("p",null,"Let's consider the following SQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE pages (\n  id INTEGER PRIMARY KEY,\n  the_title VARCHAR(42)\n);\n\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE editors (\n  page_id INTEGER NOT NULL,\n  user_id INTEGER NOT NULL,\n  role VARCHAR(255) NOT NULL,\n  CONSTRAINT fk_editor_pages FOREIGN KEY (page_id) REFERENCES pages(id),\n  CONSTRAINT fk_editor_users FOREIGN KEY (user_id) REFERENCES users(id),\n  PRIMARY KEY (page_id, user_id)\n);\n")),(0,l.kt)("p",null,"And:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P_ENTITY]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"editors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P_REL_1]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[S_REL_1]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[KEY_REL_1]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"pages")," PRIMARY KEY: ",(0,l.kt)("inlineCode",{parentName:"li"},"pages(id)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[P_REL_2]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"users")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[S_REL_2]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"user")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[KEY_REL_2]")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"users")," PRIMARY KEY: ",(0,l.kt)("inlineCode",{parentName:"li"},"users(id)"))),(0,l.kt)("p",null,"In this case, here the APIs that are available for the join table:"),(0,l.kt)("h3",{id:"get-p_entitys_rel_1key_rel_1s_rel_2key_rel_2"},(0,l.kt)("inlineCode",{parentName:"h3"},"GET [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]")),(0,l.kt)("p",null,'This returns the entity in the "join table", e.g. ',(0,l.kt)("inlineCode",{parentName:"p"},"GET /editors/page/1/user/1"),"."),(0,l.kt)("h3",{id:"post-p_entitys_rel_1key_rel_1s_rel_2key_rel_2"},(0,l.kt)("inlineCode",{parentName:"h3"},"POST [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]")),(0,l.kt)("p",null,'Creates a new entity in the "join table", e.g. ',(0,l.kt)("inlineCode",{parentName:"p"},"POST /editors/page/1/user/1"),"."),(0,l.kt)("h3",{id:"put-p_entitys_rel_1key_rel_1s_rel_2key_rel_2"},(0,l.kt)("inlineCode",{parentName:"h3"},"PUT [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]")),(0,l.kt)("p",null,'Updates an entity in the "join table", e.g. ',(0,l.kt)("inlineCode",{parentName:"p"},"PUT /editors/page/1/user/1"),"."),(0,l.kt)("h3",{id:"delete-p_entitys_rel_1key_rel_1s_rel_2key_rel_2"},(0,l.kt)("inlineCode",{parentName:"h3"},"DELETE [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]")),(0,l.kt)("p",null,'Delete the entity in the "join table", e.g. ',(0,l.kt)("inlineCode",{parentName:"p"},"DELETE /editors/page/1/user/1"),"."),(0,l.kt)("h2",{id:"get-p_entity"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /[P_ENTITY]")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"#plural"},"above"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Offset")," only accepts values ",(0,l.kt)("inlineCode",{parentName:"p"},">= 0"),". Otherwise an error is return."),(0,l.kt)("h2",{id:"pagination"},"Pagination"),(0,l.kt)("p",null,"The Platformatic DB supports for result's pagination through input parameters: ",(0,l.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -X \'GET\' \'http://localhost:3042/movies?limit=5&offset=10\n\n[\n  {\n    "title": "Star Wars",\n    "movie_id": 10\n  },\n  ...\n  {\n    "title": "007",\n    "movie_id": 14\n  }\n]\n')),(0,l.kt)("p",null,"It returns 5 movies starting from position 10."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#total-count"},"TotalCount")," functionality can be used in order to evaluate if there are more pages."),(0,l.kt)("h3",{id:"limit"},"Limit"),(0,l.kt)("p",null,"By default a ",(0,l.kt)("em",{parentName:"p"},"limit")," value (",(0,l.kt)("inlineCode",{parentName:"p"},"10"),") is applied to each request."),(0,l.kt)("p",null,"Clients can override this behavior by passing a value.\nIn this case the server validates the input and an error is return if exceeds the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," accepted value (",(0,l.kt)("inlineCode",{parentName:"p"},"100"),")."),(0,l.kt)("p",null,"Limit's values can be customized through configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "core": {\n    ...\n    "limit": {\n      "default": 50,\n      "max": 1000\n    }\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Limit")," only accepts values ",(0,l.kt)("inlineCode",{parentName:"p"},">= 0"),". Otherwise an error is return."),(0,l.kt)("h3",{id:"offset"},"Offset"),(0,l.kt)("p",null,"By default ",(0,l.kt)("em",{parentName:"p"},"offset")," is not applied to the request.\nClients can override this behavior by passing a value."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Offset")," only accepts values ",(0,l.kt)("inlineCode",{parentName:"p"},">= 0"),". Otherwise an error is return."))}m.isMDXComponent=!0}}]);