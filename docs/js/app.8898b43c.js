(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)o=s[u],r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({routes:"routes"}[e]||e)+"."+{"chunk-bad4fb00":"9300a79e",routes:"ddb2524c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-bad4fb00":1,routes:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({routes:"routes"}[e]||e)+"."+{"chunk-bad4fb00":"de3a6429",routes:"e17062ac"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/AtCoderProblems_4_Me/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1363:function(e,t,n){},"2fbb":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-0"},[n("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[n("v-toolbar-title",[n("h4",[e._v("Notification")])])],1),n("v-divider"),n("v-card-text",{staticClass:"pa-0"},[n("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[e._l(e.items,function(t,a){return[t.header?n("v-subheader",{key:t.header},[e._v(e._s(t.header))]):t.divider?n("v-divider",{key:a}):n("v-list-tile",{key:t.title,attrs:{avatar:""},on:{click:e.handleClick}},[n("v-list-tile-avatar",{attrs:{color:t.color}},[n("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1),n("v-list-tile-content",[n("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.title)}})],1),n("v-list-tile-action",{staticClass:"caption"},[e._v("\n            "+e._s(t.timeLabel)+"\n          ")])],1)]})],2),n("v-divider"),n("v-btn",{staticClass:"ma-0",attrs:{block:"",flat:""}},[e._v("All")]),n("v-divider")],1)],1)},o=[],r=[{title:"New user registered",color:"light-green",icon:"account_circle",timeLabel:"Just now"},{divider:!0,inset:!0},{title:"New order received",color:"light-blue",icon:"shopping_cart",timeLabel:"2 min ago"},{divider:!0,inset:!0},{title:"New payment made",color:"cyan",icon:"payment",timeLabel:"24 min ago"},{divider:!0,inset:!0},{title:"New message from Michael",color:"red",icon:"email",timeLabel:"1 hour ago"}],i={data:function(){return{items:r}},methods:{handleClick:function(e){console.log(e)}}},s=i,c=n("2877"),l=n("6544"),u=n.n(l),m=n("8336"),d=n("b0af"),p=n("99d9"),b=n("ce7e"),f=n("132d"),h=n("8860"),v=n("ba95"),g=n("40fe"),k=n("c954"),w=n("5d23"),y=n("e0c7"),_=n("71d9"),C=n("2a7f"),T=Object(c["a"])(s,a,o,!1,null,null,null);t["a"]=T.exports;u()(T,{VBtn:m["a"],VCard:d["a"],VCardText:p["b"],VDivider:b["a"],VIcon:f["a"],VList:h["a"],VListTile:v["a"],VListTileAction:g["a"],VListTileAvatar:k["a"],VListTileContent:w["b"],VListTileSubTitle:w["c"],VSubheader:y["a"],VToolbar:_["a"],VToolbarTitle:C["b"]})},4260:function(e,t,n){"use strict";n("a481");var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e[Math.floor(Math.random()*e.length)]},o=function(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},r=function(){var e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,a=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?a.call(e):n.call(t)};t["a"]={randomElement:a,toggleFullScreen:r,kebab:o}},"42f9":function(e,t,n){"use strict";var a=n("d1ae"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64"),n("83b1");a["default"].use(o["a"],{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"fa4"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"appRoot"}},[e.$route.meta.public?[n("transition",[n("keep-alive",[n("router-view",{key:e.$route.fullpath})],1)],1)]:[n("v-app",{staticClass:"app",attrs:{id:"inspire"}},[n("app-drawer",{staticClass:"app--drawer"}),n("app-toolbar",{staticClass:"app--toolbar"}),n("v-content",[e.$route.meta.breadcrumb?n("page-header"):e._e(),n("div",{staticClass:"page-wrapper"},[n("router-view")],1)],1),n("app-fab"),n("v-btn",{staticClass:"setting-fab",attrs:{small:"",fab:"",dark:"",falt:"",fixed:"",top:"top",right:"right",color:"red"},on:{click:e.openThemeSettings}},[n("v-icon",[e._v("settings")])],1),n("v-navigation-drawer",{staticClass:"setting-drawer",attrs:{temporary:"",right:"","hide-overlay":"",fixed:""},model:{value:e.rightDrawer,callback:function(t){e.rightDrawer=t},expression:"rightDrawer"}},[n("theme-settings")],1)],1)],n("v-snackbar",{attrs:{timeout:3e3,bottom:"",right:"",color:e.snackbar.color},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n    "+e._s(e.snackbar.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:"",icon:""},nativeOn:{click:function(t){e.snackbar.show=!1}}},[n("v-icon",[e._v("close")])],1)],1)],2)},i=[],s=(n("7f7f"),n("ac6a"),n("f3e2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{id:"appDrawer","mini-variant":e.mini,fixed:"",dark:e.$vuetify.dark,app:"",width:"260"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-toolbar",{attrs:{color:"primary darken-1",dark:""}}),n("vue-perfect-scrollbar",{staticClass:"drawer-menu--scroll",attrs:{settings:e.scrollSettings}},[n("v-list",{attrs:{dense:"",expand:""}},[e._l(e.menus,function(t,a){return[t.items?n("v-list-group",{key:t.name,attrs:{group:t.group,"prepend-icon":t.icon,"no-action":"no-action"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1),e._l(t.items,function(a,o){return[a.items?n("v-list-group",{key:a.name,attrs:{group:a.group,"sub-group":"sub-group"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(a.title))])],1)],1),e._l(a.children,function(a,o){return n("v-list-tile",{key:o,attrs:{to:e.genChildTarget(t,a),href:a.href,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(a.title))])],1)],1)})],2):n("v-list-tile",{key:o,attrs:{to:e.genChildTarget(t,a),href:a.href,disabled:a.disabled,target:a.target,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[n("span",[e._v(e._s(a.title))])])],1),a.action?n("v-list-tile-action",[n("v-icon",{class:[a.actionClass||"success--text"]},[e._v(e._s(a.action))])],1):e._e()],1)]})],2):t.header?n("v-subheader",{key:a},[e._v(e._s(t.header))]):t.divider?n("v-divider",{key:a}):n("v-list-tile",{key:t.name,attrs:{to:t.href?null:{name:t.name},href:t.href,ripple:"ripple",disabled:t.disabled,target:t.target,rel:"noopener"}},[t.icon?n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e(),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1),t.subAction?n("v-list-tile-action",[n("v-icon",{staticClass:"success--text"},[e._v(e._s(t.subAction))])],1):e._e()],1)]})],2)],1)],1)}),c=[],l=(n("55dd"),[{header:"Apps"},{title:"Dashboard",group:"apps",icon:"dashboard",name:"Dashboard"}]);l.forEach(function(e){e.items&&e.items.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0})});var u=l,m=n("9d63"),d=n.n(m),p={name:"app-drawer",components:{VuePerfectScrollbar:d.a},props:{expanded:{type:Boolean,default:!0}},data:function(){return{mini:!1,drawer:!0,menus:u,scrollSettings:{maxScrollbarLength:160}}},computed:{computeGroupActive:function(){return!0},computeLogo:function(){return"/static/m.png"},sideToolbarColor:function(){return this.$vuetify.options.extra.sideNav}},created:function(){var e=this;window.getApp.$on("APP_DRAWER_TOGGLED",function(){e.drawer=!e.drawer})},methods:{genChildTarget:function(e,t){if(!t.href)return t.component?{name:t.component}:{name:"".concat(e.group,"/").concat(t.name)}}}},b=p,f=(n("42f9"),n("2877")),h=n("6544"),v=n.n(h),g=n("ce7e"),k=n("132d"),w=n("8860"),y=n("56b0"),_=n("ba95"),C=n("40fe"),T=n("5d23"),V=n("f774"),x=n("e0c7"),E=n("71d9"),A=Object(f["a"])(b,s,c,!1,null,null,null),S=A.exports;v()(A,{VDivider:g["a"],VIcon:k["a"],VList:w["a"],VListGroup:y["a"],VListTile:_["a"],VListTileAction:C["a"],VListTileContent:T["b"],VListTileTitle:T["d"],VNavigationDrawer:V["a"],VSubheader:x["a"],VToolbar:E["a"]});var N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{color:"primary",fixed:"",dark:"",app:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3"}),n("v-toolbar-side-icon",{on:{click:function(t){return t.stopPropagation(),e.handleDrawerToggle(t)}}}),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","prepend-icon":"search",label:"Search"}}),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.handleFullScreen()}}},[n("v-icon",[e._v("fullscreen")])],1),n("v-menu",{staticClass:"elelvation-1",attrs:{"offset-y":"",origin:"center center","nudge-bottom":14,transition:"scale-transition"}},[n("notification-list")],1),n("v-menu",{attrs:{"offset-y":"",origin:"center center","nudge-bottom":10,transition:"scale-transition"}},[n("v-list",{staticClass:"pa-0"},e._l(e.items,function(t,a){return n("v-list-tile",{key:a,attrs:{to:t.href?null:{name:t.name},href:t.href,ripple:"ripple",disabled:t.disabled,target:t.target,rel:"noopener"},on:{click:t.click}},[t.icon?n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e(),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),1)],1)],1)},L=[],P=n("2fbb"),O=n("4260"),$={name:"app-toolbar",components:{NotificationList:P["a"]},data:function(){return{items:[{icon:"account_circle",href:"#",title:"Profile",click:function(e){console.log(e)}},{icon:"settings",href:"#",title:"Settings",click:function(e){console.log(e)}},{icon:"fullscreen_exit",href:"#",title:"Logout",click:function(e){window.getApp.$emit("APP_LOGOUT")}}]}},computed:{toolbarColor:function(){return this.$vuetify.options.extra.mainNav}},methods:{handleDrawerToggle:function(){window.getApp.$emit("APP_DRAWER_TOGGLED")},handleFullScreen:function(){O["a"].toggleFullScreen()}}},D=$,F=n("8336"),M=n("e449"),j=n("9910"),B=n("2677"),R=n("706c"),I=n("2a7f"),G=Object(f["a"])(D,N,L,!1,null,null,null),U=G.exports;v()(G,{VBtn:F["a"],VIcon:k["a"],VList:w["a"],VListTile:_["a"],VListTileAction:C["a"],VListTileContent:T["b"],VListTileTitle:T["d"],VMenu:M["a"],VSpacer:j["a"],VTextField:B["a"],VToolbar:E["a"],VToolbarSideIcon:R["a"],VToolbarTitle:I["b"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"fab",small:"",dark:"dark",fixed:"fixed",bottom:"bottom",right:"right",color:"red"},on:{click:e.toTop}},[n("v-icon",[e._v("keyboard_arrow_up")])],1)],1)},z=[],H={name:"app-fab",data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var e=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=e>300}},toTop:function(){this.$router.push({hash:""}),this.$vuetify.goTo(0)}}},J=H,W=n("0789"),Q=Object(f["a"])(J,q,z,!1,null,null,null),Y=Q.exports;v()(Q,{VBtn:F["a"],VFabTransition:W["b"],VIcon:k["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"align-center layout px-4 pt-4 app--page-header",attrs:{row:""}},[n("div",{staticClass:"page-header-left"},[n("h3",{staticClass:"pr-3"},[e._v(e._s(e.title))])]),n("v-breadcrumbs",{attrs:{divider:"-",items:e.breadcrumbs}}),n("v-spacer"),n("div",{staticClass:"page-header-right"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"text--secondary"},[e._v("refresh")])],1)],1)],1)},K=[],X=(n("7514"),{data:function(){return{title:""}},computed:{breadcrumbs:function(){var e=this,t=[];return u.forEach(function(n){if(n.items){var a=n.items.find(function(t){return t.component===e.$route.name});a&&(t.push(n.title),t.push(a.title),e.title=a.title)}else n.name===e.$route.name&&(e.title=n.title,t.push(n.title))}),t}}}),ee=X,te=n("2bc5"),ne=n("a722"),ae=Object(f["a"])(ee,Z,K,!1,null,null,null),oe=ae.exports;v()(ae,{VBreadcrumbs:te["a"],VBtn:F["a"],VIcon:k["a"],VLayout:ne["a"],VSpacer:j["a"]});var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"themeSetting"}},[n("v-toolbar",{attrs:{color:"blue",dark:""}},[n("v-toolbar-title",[e._v("\n      Theme Settings\n    ")])],1),n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-subheader",{staticClass:"px-1 my-2"},[e._v("\n          Color Option\n        ")]),n("div",{staticClass:"color-option"},[n("v-layout",{attrs:{wrap:""}},e._l(e.themeColorOptions,function(t,a){return n("label",{key:a,staticClass:"color-option--label flex xs6 pa-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.themeColor,expression:"themeColor"}],attrs:{type:"radio",name:"color"},domProps:{value:t.key,checked:e._q(e.themeColor,t.key)},on:{change:function(n){e.themeColor=t.key}}}),n("span",{staticClass:"color-option--item bg"},[n("span",{staticClass:"overlay"},[n("span",{staticClass:"material-icons"},[e._v("check")])]),n("span",{staticClass:"color-option--item--header sideNav",class:t.value.sideNav}),n("span",{staticClass:"color-option--item--header mainNav",class:t.value.mainNav}),n("span",{staticClass:"sideMenu",class:t.value.sideManu})])])}),0)],1),n("div",{staticClass:"theme-options"},[n("v-subheader",{staticClass:"px-1 my-2"},[e._v("\n            Sidebar Option\n          ")]),n("v-divider"),n("div",{staticClass:"my-3"},[n("v-btn-toggle",{model:{value:e.sideBarOption,callback:function(t){e.sideBarOption=t},expression:"sideBarOption"}},[n("v-btn",{attrs:{flat:"",value:"dark"}},[e._v("\n                Dark\n              ")]),n("v-btn",{attrs:{flat:"",value:"light"}},[e._v("\n                Light\n              ")])],1)],1)],1)],1)],1)],1)],1)},ie=[],se=n("c0a4"),ce=n.n(se),le={data:function(){return{themeColor:"indigo",sideBarOption:"light",colors:ce.a}},computed:{themeColorOptions:function(){return[{key:"blue",value:{sideNav:"blue",mainNav:"blue",sideManu:"white"}},{key:"teal",value:{sideNav:"teal",mainNav:"teal",sideManu:"white"}},{key:"red",value:{sideNav:"red",mainNav:"red",sideManu:"white"}},{key:"orange",value:{sideNav:"orange",mainNav:"orange",sideManu:"white"}},{key:"purple",value:{sideNav:"purple",mainNav:"purple",sideManu:"white"}},{key:"indigo",value:{sideNav:"indigo",mainNav:"indigo",sideManu:"white"}},{key:"cyan",value:{sideNav:"cyan",mainNav:"cyan",sideManu:"white"}},{key:"pink",value:{sideNav:"pink",mainNav:"pink",sideManu:"white"}},{key:"green",value:{sideNav:"green",mainNav:"green",sideManu:"white"}}]}},watch:{themeColor:{handler:function(e){this.$vuetify.theme.primary=this.colors[e].base},immediate:!0},sideBarOption:{handler:function(e){this.$vuetify.dark="dark"===e},immediate:!0}}},ue=le,me=(n("6615"),n("a609")),de=n("a523"),pe=n("0e8f"),be=Object(f["a"])(ue,re,ie,!1,null,"cd02f64c",null),fe=be.exports;v()(be,{VBtn:F["a"],VBtnToggle:me["a"],VContainer:de["a"],VDivider:g["a"],VFlex:pe["a"],VLayout:ne["a"],VSubheader:x["a"],VToolbar:E["a"],VToolbarTitle:I["b"]});n("a481");var he=[{name:"APP_LOGIN_SUCCESS",callback:function(e){this.$router.push({path:"dashboard"})}},{name:"APP_LOGOUT",callback:function(e){this.snackbar={show:!0,color:"green",text:"Logout successfully."},this.$router.replace({path:"/login"})}},{name:"APP_PAGE_LOADED",callback:function(e){}},{name:"APP_AUTH_FAILED",callback:function(e){this.$router.push("/login"),this.$message.error("Token has expired")}},{name:"APP_BAD_REQUEST",callback:function(e){this.$message.error(e)}},{name:"APP_ACCESS_DENIED",callback:function(e){this.$message.error(e),this.$router.push("/forbidden")}},{name:"APP_RESOURCE_DELETED",callback:function(e){this.$message.success(e)}},{name:"APP_RESOURCE_UPDATED",callback:function(e){this.$message.success(e)}}],ve={components:{AppDrawer:S,AppToolbar:U,AppFab:Y,PageHeader:oe,ThemeSettings:fe},data:function(){return{expanded:!0,rightDrawer:!1,snackbar:{show:!1,text:"",color:""}}},computed:{},created:function(){var e=this;he.forEach(function(t){e.$on(t.name,t.callback)}),window.getApp=this},methods:{openThemeSettings:function(){this.$vuetify.goTo(0),this.rightDrawer=!this.rightDrawer}}},ge=ve,ke=(n("6273"),n("7496")),we=n("549c"),ye=n("2db4"),_e=Object(f["a"])(ge,r,i,!1,null,"58348c66",null),Ce=_e.exports;v()(_e,{VApp:ke["a"],VBtn:F["a"],VContent:we["a"],VIcon:k["a"],VNavigationDrawer:V["a"],VSnackbar:ye["a"]});var Te=n("8c4f"),Ve=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return n.e("routes").then(n.bind(null,"9703"))}},{path:"/403",meta:{public:!0},name:"AccessDenied",component:function(){return n.e("routes").then(n.bind(null,"1569"))}},{path:"/500",meta:{public:!0},name:"ServerError",component:function(){return n.e("routes").then(n.bind(null,"dda8"))}},{path:"/login",meta:{public:!0},name:"Login",component:function(){return n.e("routes").then(n.bind(null,"a55b"))}},{path:"/",meta:{},name:"Root",redirect:{name:"Test"}},{path:"/dashboard",meta:{breadcrumb:!0},name:"Test",component:function(){return n.e("routes").then(n.bind(null,"78c1"))}},{path:"/media",meta:{},name:"Media",props:function(e){return{type:e.query.type}},component:function(){return n.e("routes").then(n.bind(null,"89b1"))}},{path:"/chat",meta:{public:!0},name:"Chat",component:function(){return n.e("routes").then(n.bind(null,"7007"))},redirect:{path:"/chat/messaging"},children:[{path:"/chat/messaging/:uuid?",meta:{public:!0},name:"ChatMessaging",props:!0,components:{default:function(){return n.e("routes").then(n.bind(null,"4500"))}}},{path:"/chat/contact/:uuid?",meta:{public:!0},name:"ChatContact",components:{default:function(){return n.e("routes").then(n.bind(null,"2f0f"))}}}]},{path:"/mail",meta:{public:!0},name:"Mail",component:function(){return n.e("routes").then(n.bind(null,"ebf0"))},redirect:{path:"/mail/all"},children:[{path:"/mail/:mailType",meta:{public:!0},name:"MailIndex",component:function(){return n.e("routes").then(n.bind(null,"e9d2"))}},{path:"/mail/0/:uuid",meta:{public:!0},name:"MailDetail",component:function(){return n.e("routes").then(n.bind(null,"2341"))}}]},{path:"/components/alert",meta:{breadcrumb:!0},name:"components/alerts",component:function(){return n.e("routes").then(n.bind(null,"49e6"))}},{path:"/components/avatar",meta:{breadcrumb:!0},name:"components/avatars",component:function(){return n.e("routes").then(n.bind(null,"c401d"))}},{path:"/components/badge",meta:{breadcrumb:!0},name:"components/badges",component:function(){return n.e("routes").then(n.bind(null,"3322"))}},{path:"/components/button",meta:{breadcrumb:!0},name:"components/buttons",component:function(){return n.e("routes").then(n.bind(null,"01d3"))}},{path:"/components/parallax",meta:{breadcrumb:!0},name:"components/parallax",component:function(){return n.e("routes").then(n.bind(null,"b555"))}},{path:"/components/snackbar",meta:{breadcrumb:!0},name:"components/snackbar",component:function(){return n.e("routes").then(n.bind(null,"ebf4"))}},{path:"/components/chip",meta:{breadcrumb:!0},name:"components/chips",component:function(){return n.e("routes").then(n.bind(null,"b1a8"))}},{path:"/components/card",meta:{breadcrumb:!0},name:"components/cards",component:function(){return n.e("routes").then(n.bind(null,"38aa"))}},{path:"/components/table",meta:{breadcrumb:!0},name:"components/tables",component:function(){return n.e("routes").then(n.bind(null,"2916"))}},{path:"/components/carousel",meta:{breadcrumb:!0},name:"components/carousels",component:function(){return n.e("routes").then(n.bind(null,"dc62"))}},{path:"/components/dialog",meta:{breadcrumb:!0},name:"components/dialogs",component:function(){return n.e("routes").then(n.bind(null,"a3dd"))}},{path:"/components/icon",meta:{breadcrumb:!0},name:"components/icons",component:function(){return n.e("routes").then(n.bind(null,"ed1e"))}},{path:"/components/progress",meta:{breadcrumb:!0},name:"components/progress",component:function(){return n.e("routes").then(n.bind(null,"1edc"))}},{path:"/components/slider",meta:{breadcrumb:!0},name:"components/sliders",component:function(){return n.e("routes").then(n.bind(null,"bcd6"))}},{path:"/components/tooltip",meta:{breadcrumb:!0},name:"components/tooltips",component:function(){return n.e("routes").then(n.bind(null,"aee5"))}},{path:"/components/pagination",meta:{breadcrumb:!0},name:"components/paginations",component:function(){return n.e("routes").then(n.bind(null,"777a0"))}},{path:"/pickers/datepicker",meta:{breadcrumb:!0},name:"pickers/datepicker",component:function(){return n.e("routes").then(n.bind(null,"5d43"))}},{path:"/components/typography",meta:{breadcrumb:!0},name:"components/typography",component:function(){return n.e("routes").then(n.bind(null,"a09c"))}},{path:"/components/color",meta:{breadcrumb:!0},name:"components/color",component:function(){return n.e("routes").then(n.bind(null,"beda"))}},{path:"/pickers/timepicker",meta:{breadcrumb:!0},name:"pickers/timepicker",component:function(){return n.e("routes").then(n.bind(null,"38d5"))}},{path:"/layout/bottomsheets",meta:{breadcrumb:!0},name:"components/bottom-sheets",component:function(){return n.e("routes").then(n.bind(null,"fb46"))}},{path:"/layout/expansion-panel",meta:{breadcrumb:!0},name:"components/expansion-panels",component:function(){return n.e("routes").then(n.bind(null,"6c69"))}},{path:"/layout/footer",meta:{breadcrumb:!0},name:"components/footer",component:function(){return n.e("routes").then(n.bind(null,"ea66"))}},{path:"/layout/timeline",meta:{breadcrumb:!0},name:"components/timeline",component:function(){return n.e("routes").then(n.bind(null,"8621"))}},{path:"/layout/list",meta:{breadcrumb:!0},name:"components/lists",component:function(){return n.e("routes").then(n.bind(null,"1ae7"))}},{path:"/layout/toolbar",meta:{breadcrumb:!0},name:"components/toolbar",component:function(){return n.e("routes").then(n.bind(null,"8fa8"))}},{path:"/layout/jumbotron",meta:{breadcrumb:!0},name:"components/jumbotrons",component:function(){return n.e("routes").then(n.bind(null,"b92d"))}},{path:"/layout/menu",meta:{breadcrumb:!0},name:"components/menus",component:function(){return n.e("routes").then(n.bind(null,"3915"))}},{path:"/layout/navigation-drawer",meta:{breadcrumb:!0},name:"components/navigation-drawers",component:function(){return n.e("routes").then(n.bind(null,"8d6f"))}},{path:"/layout/tabs",meta:{breadcrumb:!0},name:"components/tabs",component:function(){return n.e("routes").then(n.bind(null,"6a7b"))}},{path:"/forms/basic",meta:{breadcrumb:!0},name:"components/basic-forms",component:function(){return n.e("routes").then(n.bind(null,"cd01"))}},{path:"/forms/selects",meta:{breadcrumb:!0},name:"components/selects",component:function(){return n.e("routes").then(n.bind(null,"0eeb"))}},{path:"/forms/editor",meta:{breadcrumb:!0},name:"components/editors",component:function(){return n.e("chunk-bad4fb00").then(n.bind(null,"89dd"))}},{path:"/forms/selection-controls",meta:{breadcrumb:!0},name:"components/selection-controls",component:function(){return n.e("routes").then(n.bind(null,"9c2e"))}},{path:"/forms/text-fields",meta:{breadcrumb:!0},name:"components/text-fields",component:function(){return n.e("routes").then(n.bind(null,"0e88"))}},{path:"/forms/steppers",meta:{breadcrumb:!0},name:"components/steppers",component:function(){return n.e("routes").then(n.bind(null,"1d21"))}},{path:"/widgets/social",meta:{breadcrumb:!0},name:"components/social",component:function(){return n.e("routes").then(n.bind(null,"582f"))}},{path:"/widgets/post",meta:{breadcrumb:!0},name:"components/widget-post",component:function(){return n.e("routes").then(n.bind(null,"c6e2e"))}},{path:"/widgets/statistic",meta:{breadcrumb:!0},name:"components/statistic",component:function(){return n.e("routes").then(n.bind(null,"777a"))}},{path:"/widgets/chart",meta:{breadcrumb:!0},name:"components/chart",component:function(){return n.e("routes").then(n.bind(null,"629d"))}},{path:"/widgets/list",meta:{breadcrumb:!0},name:"components/widget-list",component:function(){return n.e("routes").then(n.bind(null,"93bf"))}}],xe=n("323e"),Ee=n.n(xe);n("a5d8");a["default"].use(Te["a"]);var Ae=new Te["a"]({base:"/",mode:"hash",linkActiveClass:"active",routes:Ve});Ae.beforeEach(function(e,t,n){Ee.a.start(),n()}),Ae.afterEach(function(e,t){Ee.a.done()});var Se=Ae,Ne=n("2f62");a["default"].use(Ne["a"]);var Le=new Ne["a"].Store({state:{},mutations:{},actions:{}}),Pe=n("9483");Object(Pe["a"])("".concat("/AtCoderProblems_4_Me/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8"),n("7f10");a["default"].config.productionTip=!1,new a["default"]({router:Se,store:Le,render:function(e){return e(Ce)}}).$mount("#app")},6273:function(e,t,n){"use strict";var a=n("1363"),o=n.n(a);o.a},6615:function(e,t,n){"use strict";var a=n("c066"),o=n.n(a);o.a},"83b1":function(e,t,n){},c066:function(e,t,n){},d1ae:function(e,t,n){}});
//# sourceMappingURL=app.8898b43c.js.map