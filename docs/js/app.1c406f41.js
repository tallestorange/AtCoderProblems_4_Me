(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],l=0,d=[];l<a.length;l++)s=a[l],o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},o={app:0},i=[];function a(e){return c.p+"js/"+({routes:"routes"}[e]||e)+"."+{routes:"4e0294a4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={routes:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({routes:"routes"}[e]||e)+"."+{routes:"ac76aaa8"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete s[e],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/AtCoderProblems_4_Me/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("1356"),s=n.n(r);s.a},1356:function(e,t,n){},"42f9":function(e,t,n){"use strict";var r=n("d1ae"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("bb71");n("da64"),n("83b1");r["a"].use(s["a"],{iconfont:"fa4"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"appRoot"}},[e.$route.meta.public?e._e():[n("v-app",{staticClass:"app",attrs:{dark:e.darkMode,id:"inspire"}},[n("app-drawer",{staticClass:"app--drawer"}),n("app-toolbar",{staticClass:"app--toolbar"}),n("v-content",[n("div",{staticClass:"page-wrapper"},[n("router-view")],1)])],1)]],2)},i=[],a=(n("7f7f"),n("f3e2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{id:"appDrawer","mini-variant":e.mini,fixed:"",app:"",width:"260"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-toolbar",[n("v-text-field",{staticClass:"mt-3",attrs:{label:"UserID",clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendUserName(t)},keypress:e.setCanMessageSubmit},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[e._v("\n      >\n    ")])],1),n("vue-perfect-scrollbar",{staticClass:"drawer-menu--scroll",attrs:{settings:e.scrollSettings}},[n("v-list",{attrs:{dense:"",expand:""}},[e._l(e.menus,function(t,r){return[t.items?n("v-list-group",{key:t.name,attrs:{group:t.group,"prepend-icon":t.icon,"no-action":"no-action"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1),e._l(t.items,function(r,s){return[r.items?n("v-list-group",{key:r.name,attrs:{group:r.group,"sub-group":"sub-group"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(r.title))])],1)],1),e._l(r.children,function(r,s){return n("v-list-tile",{key:s,attrs:{to:e.genChildTarget(t,r),href:r.href,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(r.title))])],1)],1)})],2):n("v-list-tile",{key:s,attrs:{to:e.genChildTarget(t,r),href:r.href,disabled:r.disabled,target:r.target,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[n("span",[e._v(e._s(r.title))])])],1),r.action?n("v-list-tile-action",[n("v-icon",{class:[r.actionClass||"success--text"]},[e._v(e._s(r.action))])],1):e._e()],1)]})],2):t.header?n("v-subheader",{key:r},[e._v(e._s(t.header))]):t.divider?n("v-divider",{key:r}):n("v-list-tile",{key:t.name,attrs:{to:t.href?null:{name:t.name},href:t.href,ripple:"ripple",disabled:t.disabled,target:t.target,rel:"noopener"}},[t.icon?n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e(),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1),t.subAction?n("v-list-tile-action",[n("v-icon",{staticClass:"success--text"},[e._v(e._s(t.subAction))])],1):e._e()],1)]}),n("v-divider"),n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v("NightMode")])],1),n("v-list-tile-action",[n("v-switch",{model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1)],1)],2)],1)],1)}),c=[],u=(n("96cf"),n("3b8d")),l=(n("55dd"),[{title:"Problems",group:"apps",icon:"",name:"Problems"},{title:"Submissions",group:"apps",icon:"",name:"Submissions"},{title:"UserInfo",group:"apps",icon:"",name:"UserInfo"}]);l.forEach(function(e){e.items&&e.items.sort(function(e,t){var n=e.title.toUpperCase(),r=t.title.toUpperCase();return n<r?-1:n>r?1:0})});var d=l,p=n("9d63"),m=n.n(p),f={name:"app-drawer",components:{VuePerfectScrollbar:m.a},props:{expanded:{type:Boolean,default:!0}},data:function(){return{mini:!1,drawer:!0,darkMode:!1,menus:d,scrollSettings:{maxScrollbarLength:160},username:"",canMessageSubmit:!1}},computed:{computeGroupActive:function(){return!0},sideToolbarColor:function(){return this.$vuetify.options.extra.sideNav},userName:function(){return this.$store.getters.getUserName}},created:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return window.getApp.$on("APP_DRAWER_TOGGLED",function(){r.drawer=!r.drawer}),t=!1,e.next=4,this.$db.inputs.get("isDarkMode").then(function(e){t=e.value}).catch(function(e){});case 4:return this.darkMode=t,n="",e.next=8,this.$db.inputs.get("userName").then(function(e){n=e.value}).catch(function(e){});case 8:this.$store.commit("setUserName",n),this.username=n;case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),watch:{darkMode:function(){this.$db.inputs.put({id:"isDarkMode",value:this.darkMode}),this.$store.commit("setIsDarkMode",this.darkMode)}},methods:{genChildTarget:function(e,t){if(!t.href)return t.component?{name:t.component}:{name:"".concat(e.group,"/").concat(t.name)}},setCanMessageSubmit:function(){this.canMessageSubmit=!0},sendUserName:function(){this.$db.inputs.put({id:"userName",value:this.username}),this.$store.commit("setUserName",this.username),this.$store.dispatch("fetchAll")}}},b=f,h=(n("42f9"),n("2877")),v=n("6544"),_=n.n(v),g=n("ce7e"),D=n("132d"),y=n("8860"),w=n("56b0"),k=n("ba95"),S=n("40fe"),P=n("5d23"),A=n("f774"),x=n("e0c7"),I=n("b73d"),T=n("2677"),C=n("71d9"),N=Object(h["a"])(b,a,c,!1,null,null,null),E=N.exports;_()(N,{VDivider:g["a"],VIcon:D["a"],VList:y["a"],VListGroup:w["a"],VListTile:k["a"],VListTileAction:S["a"],VListTileContent:P["a"],VListTileTitle:P["b"],VNavigationDrawer:A["a"],VSubheader:x["a"],VSwitch:I["a"],VTextField:T["a"],VToolbar:C["a"]});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{fixed:"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(t){return t.stopPropagation(),e.handleDrawerToggle(t)}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-3 font-weight-regular"},[e._v("\n    AtCoder Problems 4 Me\n  ")]),n("v-spacer"),e.isLoading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):n("v-btn",{attrs:{flat:"",icon:""},on:{click:e.pushedRefreshButton}},[n("v-icon",[e._v("autorenew")])],1)],1)},$=[],M=(n("8ea5"),{name:"app-toolbar",components:{},data:function(){return{date:(new Date).toISOString().substr(0,10)}},computed:{toolbarColor:function(){return this.$vuetify.options.extra.mainNav},isLoading:function(){return this.$store.getters.getIsNowLoading}},methods:{handleDrawerToggle:function(){window.getApp.$emit("APP_DRAWER_TOGGLED")},pushedRefreshButton:function(){this.$store.dispatch("fetchAll")}}}),O=M,j=n("8336"),R=n("490a"),V=n("9910"),U=n("706c"),F=n("2a7f"),B=Object(h["a"])(O,L,$,!1,null,null,null),G=B.exports;_()(B,{VBtn:j["a"],VIcon:D["a"],VProgressCircular:R["a"],VSpacer:V["a"],VToolbar:C["a"],VToolbarSideIcon:U["a"],VToolbarTitle:F["a"]});n("a481");var J=[{name:"APP_LOGIN_SUCCESS",callback:function(e){this.$router.push({path:"dashboard"})}},{name:"APP_LOGOUT",callback:function(e){this.snackbar={show:!0,color:"green",text:"Logout successfully."},this.$router.replace({path:"/login"})}},{name:"APP_PAGE_LOADED",callback:function(e){}},{name:"APP_AUTH_FAILED",callback:function(e){this.$router.push("/login"),this.$message.error("Token has expired")}},{name:"APP_BAD_REQUEST",callback:function(e){this.$message.error(e)}},{name:"APP_ACCESS_DENIED",callback:function(e){this.$message.error(e),this.$router.push("/forbidden")}},{name:"APP_RESOURCE_DELETED",callback:function(e){this.$message.success(e)}},{name:"APP_RESOURCE_UPDATED",callback:function(e){this.$message.success(e)}}],q={components:{AppDrawer:E,AppToolbar:G},created:function(){var e=this;J.forEach(function(t){e.$on(t.name,t.callback)}),window.getApp=this},computed:{darkMode:function(){return this.$store.getters.getIsDarkMode}}},W=q,H=(n("034f"),n("7496")),Q=n("549c"),Y=Object(h["a"])(W,o,i,!1,null,null,null),z=Y.exports;_()(Y,{VApp:H["a"],VContent:Q["a"]});var K,X=n("8c4f"),Z=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return n.e("routes").then(n.bind(null,"9703"))}},{path:"/403",meta:{public:!0},name:"AccessDenied",component:function(){return n.e("routes").then(n.bind(null,"1569"))}},{path:"/500",meta:{public:!0},name:"ServerError",component:function(){return n.e("routes").then(n.bind(null,"dda8"))}},{path:"/",meta:{},name:"Root",redirect:{name:"Problems"}},{path:"/userinfo",meta:{breadcrumb:!0},name:"UserInfo",component:function(){return n.e("routes").then(n.bind(null,"ee96"))}},{path:"/submissions",meta:{breadcrumb:!0},name:"Submissions",component:function(){return n.e("routes").then(n.bind(null,"f6c9"))}},{path:"/problems",meta:{breadcrumb:!0},name:"Problems",component:function(){return n.e("routes").then(n.bind(null,"a298"))}},{path:"/rivals",meta:{breadcrumb:!0},name:"Rivals",component:function(){return n.e("routes").then(n.bind(null,"57f9"))}}],ee=(n("323e"),n("f499")),te=n.n(ee),ne=n("bd86"),re=n("2f62"),se=n("bc3a"),oe=n.n(se);function ie(e){var t=new Date(0);t.setUTCSeconds(e);var n=t.getFullYear(),r=("00"+(t.getMonth()+1)).slice(-2),s=("00"+t.getDate()).slice(-2),o=n+"-"+r+"-"+s;return o}r["a"].use(re["a"]);var ae=new re["a"].Store({state:{isInitialLoad:!0,isNowLoading:!1,isDarkMode:!1,problemsDictionary:{},scoresDictionary:{},submissionsDictionary:{},selectedSearchTags:[],selectedDate:"",userName:""},getters:(K={getIsInitialLoad:function(e,t){return e.isInitialLoad},getIsNowLoading:function(e,t){return e.isNowLoading},getSelectedDate:function(e,t){return e.selectedDate},getIsDarkMode:function(e,t){return e.isDarkMode},getScoresDictionary:function(e,t){return e.scoresDictionary},getSelectedSearchTags:function(e,t){return e.selectedSearchTags},getProblemsDictionary:function(e,t){return e.problemsDictionary},getSubmissionsDictionary:function(e,t){return e.submissionsDictionary}},Object(ne["a"])(K,"getSelectedDate",function(e,t){return e.selectedDate}),Object(ne["a"])(K,"getUserName",function(e,t){return e.userName}),K),mutations:{setUserName:function(e,t){e.userName=t},setIsNowLoading:function(e,t){e.isNowLoading=t},setIsDarkMode:function(e,t){e.isDarkMode=t},setIsInitialLoad:function(e,t){e.isInitialLoad=t},setSelectedDate:function(e,t){e.selectedDate=t},setSelectedSearchTags:function(e,t){e.selectedSearchTags=t},setProblemsDictionary:function(e,t){e.problemsDictionary=t},setScoresDictionary:function(e,t){e.scoresDictionary=t},setSubmissionsDictionary:function(e,t){e.submissionsDictionary=t},setProblemsDataFromAPI:function(e,t){var n=t,s=r["a"].prototype.$db,o={},i={};for(var a in n){var c=n[a];i[c.id]=c,i[c.id].your_ac_count=0,i[c.id].your_wa_count=0,i[c.id].url="https://atcoder.jp/contests/"+c.contest_id+"/tasks/"+c.id,o[c.point]?o[c.point].problems_count+=1:o[c.point]={problems_count:1,accepted_count:0}}s.problems.put({id:"scoresDictionary",value:o}),s.problems.put({id:"problemsDictionary",value:i}),e.problemsDictionary=i,e.scoresDictionary=o},setSubmissionDataFromAPI:function(e,t){var n=t,s=r["a"].prototype.$db,o={};for(var i in n){var a=n[i],c=ie(a.epoch_second),u="AC"==a.result;o[c]?o[c].submissions.push(a):o[c]={submissions:[a],accepted_count:0,submissions_count:0,point_sum:0},o[c].submissions_count+=1,u&&(o[c].accepted_count+=1,o[c].point_sum+=a.point)}s.submissions.put({id:"submissionsDictionary",value:o}),e.submissionsDictionary=o},updateSubmissionsData:function(e,t){var n=JSON.parse(te()(e.submissionsDictionary)),s=e.problemsDictionary,o=r["a"].prototype.$db;for(var i in n){var a=n[i].submissions;for(var c in a){var u=a[c],l=s[u.problem_id];u.score=l.point,u.title=l.title,u.problem_url=l.url,u.submission_url="https://atcoder.jp/contests/"+u.contest_id+"/submissions/"+u.id}}o.submissions.put({id:"submissionsDictionary",value:n}),e.submissionsDictionary=n},updateProblemsData:function(e,t){var n=e.submissionsDictionary,s=r["a"].prototype.$db,o=JSON.parse(te()(e.problemsDictionary)),i=JSON.parse(te()(e.scoresDictionary));for(var a in n){var c=n[a].submissions;for(var u in c){var l=c[u];"AC"==l.result?o[l.problem_id].your_ac_count+=1:o[l.problem_id].your_wa_count+=1}}for(var d in o){var p=o[d];p.your_ac_count>0&&(i[p.point].accepted_count+=1)}s.problems.put({id:"problemsDictionary",value:o}),e.problemsDictionary=o,s.problems.put({id:"scoresDictionary",value:i}),e.scoresDictionary=i}},actions:{fetchProblemsData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Fetching from Atcoder Problems API(Problems Data)"),n=[],e.next=4,oe.a.get("https://kenkoooo.com/atcoder/resources/merged-problems.json").then(function(e){console.log("Successful to fetch Problems Data"),n=e.data});case 4:t.commit("setProblemsDataFromAPI",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchSubmissionsData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Fetching from Atcoder Problems API(Submissions Data)"),n=[],r=t.getters.getUserName,e.next=5,oe.a.get("https://kenkoooo.com/atcoder/atcoder-api/results?user="+r).then(function(e){console.log("Successful to fetch Submissions Data"),n=e.data});case 5:t.commit("setSubmissionDataFromAPI",n);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchAll:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setIsNowLoading",!0),e.next=3,t.dispatch("fetchProblemsData").then(function(){});case 3:return e.next=5,t.dispatch("fetchSubmissionsData").then(function(){});case 5:t.commit("updateSubmissionsData"),t.commit("updateProblemsData"),t.commit("setIsNowLoading",!1);case 8:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),loadDataFromIDB:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Loading Data From IndexedDB"),t.commit("setIsNowLoading",!0),n=r["a"].prototype.$db,e.next=5,n.inputs.get("selectedSearchTags").then(function(e){t.commit("setSelectedSearchTags",e.value)}).catch(function(e){});case 5:return e.next=7,n.problems.get("scoresDictionary").then(function(e){t.commit("setScoresDictionary",e.value)}).catch(function(e){t.dispatch("fetchProblemsData")});case 7:return e.next=9,n.problems.get("problemsDictionary").then(function(e){t.commit("setProblemsDictionary",e.value)}).catch(function(e){});case 9:return e.next=11,n.submissions.get("submissionsDictionary").then(function(e){t.commit("setSubmissionsDictionary",e.value)}).catch(function(e){});case 11:t.commit("setIsInitialLoad",!1),t.commit("setIsNowLoading",!1);case 13:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}});n("a5d8");r["a"].use(X["a"]);var ce=new X["a"]({base:"/",mode:"hash",linkActiveClass:"active",routes:Z});ce.beforeEach(function(e,t,n){var r=ae.getters.getIsInitialLoad;r&&ae.dispatch("loadDataFromIDB"),n()});var ue=ce,le=n("9483");Object(le["a"])("".concat("/AtCoderProblems_4_Me/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8"),n("7f10");var de=n("74ce"),pe=new de["a"]("AC4Me");pe.version(1).stores({problems:"id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title"}),pe.version(2).stores({problems:"id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",inputs:"id, name"}),pe.version(3).stores({problems:"id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",inputs:"id, name",submissions:"id, contents"}),pe.version(4).stores({problems:"id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",inputs:"id, name",submissions:"id, contents",rivals:"userid, accepted_count, rated_point_sum"}),pe.version(5).stores({problems:"id, value",inputs:"id, value",submissions:"id, value",rivals:"userid, accepted_count, rated_point_sum"});var me=pe;r["a"].prototype.$db=me,r["a"].config.productionTip=!1,new r["a"]({router:ue,store:ae,render:function(e){return e(z)}}).$mount("#app")},"83b1":function(e,t,n){},d1ae:function(e,t,n){}});
//# sourceMappingURL=app.1c406f41.js.map