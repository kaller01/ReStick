(function(e){function t(t){for(var c,s,r=t[0],i=t[1],u=t[2],d=0,l=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);p&&p(t);while(l.length)l.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},s={app:0},o={app:0},n=[];function r(e){return i.p+"js/"+({"account~home~spaced~stack~stacks":"account~home~spaced~stack~stacks",account:"account",home:"home","spaced~stack~stacks":"spaced~stack~stacks","spaced~stack":"spaced~stack",spaced:"spaced","stack~stacks":"stack~stacks",stack:"stack",stacks:"stacks"}[e]||e)+"."+{"account~home~spaced~stack~stacks":"0b31aa5a",account:"42000a85",home:"ab5c301d","spaced~stack~stacks":"9d7896a3","spaced~stack":"712d0a6c",spaced:"357933bd","stack~stacks":"dc450fa3",stack:"e22079fd",stacks:"cc835cae"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"account~home~spaced~stack~stacks":1,account:1,"spaced~stack~stacks":1,"spaced~stack":1,spaced:1,"stack~stacks":1,stack:1,stacks:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var c="css/"+({"account~home~spaced~stack~stacks":"account~home~spaced~stack~stacks",account:"account",home:"home","spaced~stack~stacks":"spaced~stack~stacks","spaced~stack":"spaced~stack",spaced:"spaced","stack~stacks":"stack~stacks",stack:"stack",stacks:"stacks"}[e]||e)+"."+{"account~home~spaced~stack~stacks":"9d6c810b",account:"22ec8f03",home:"31d6cfe0","spaced~stack~stacks":"778f6918","spaced~stack":"fba5bb1e",spaced:"cff0bcb0","stack~stacks":"3e361247",stack:"2c3921fa",stacks:"f64a5a45"}[e]+".css",o=i.p+c,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var u=n[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===c||d===o))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===c||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=c,delete s[e],p.parentNode.removeChild(p),a(n)},p.href=o;var k=document.getElementsByTagName("head")[0];k.appendChild(p)})).then((function(){s[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var n=new Promise((function(t,a){c=o[e]=[t,a]}));t.push(c[2]=n);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+s+")",l.name="ChunkLoadError",l.type=c,l.request=s,a[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var c=a("85ec"),s=a.n(c);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-overlay",{attrs:{value:e.loading}},[a("v-progress-circular",{attrs:{dark:"",indeterminate:"",size:"128"}})],1),a("v-main",{staticClass:"background"},[a("router-view")],1),a("div",{staticClass:"spacers"}),a("v-bottom-navigation",{attrs:{"background-color":"white",shift:"",fixed:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-btn",{attrs:{"x-large":"",height:"100%",to:"/spaced"}},[a("span",[e._v("Spaced")]),a("v-icon",[e._v("mdi-cards")])],1),a("v-btn",{attrs:{"x-large":"",height:"100%",to:"/stacks"}},[a("span",[e._v("Stacks")]),a("v-icon",[e._v("mdi-layers")])],1),a("v-btn",{attrs:{"x-large":"",height:"100%",to:"/account"}},[a("span",[e._v("Account")]),a("v-icon",[e._v("mdi-account")])],1)],1)],1)},o=[],n=a("2f62"),r={data:()=>({value:1}),computed:{color(){switch(this.value){case 2:return"yellow darken-3";case 1:return"orange darken-3";case 0:return"deep-orange darken-3";default:return"blue-grey"}},isAuthed(){return!!localStorage.auth},...Object(n["c"])(["loading"])}},i=r,u=(a("034f"),a("2877")),d=a("6544"),l=a.n(d),p=a("7496"),k=a("b81c"),h=a("8336"),m=a("132d"),f=a("f6c4"),g=a("a797"),v=a("490a"),S=Object(u["a"])(i,s,o,!1,null,null,null),b=S.exports;l()(S,{VApp:p["a"],VBottomNavigation:k["a"],VBtn:h["a"],VIcon:m["a"],VMain:f["a"],VOverlay:g["a"],VProgressCircular:v["a"]});var E=a("9483");Object(E["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=a("8c4f"),_=a("bc3a"),T=a.n(_);c["a"].use(n["a"]);var w=new n["a"].Store({state:{user:!1,stacks:!1,color:"",loading:!0,stack:!1,isLoggedIn:!1,repeats:!1},mutations:{SET_USER(e,t){e.user=t},SET_STACKS(e,t){e.stacks=t},SET_COLOR(e,t){switch(t){case 2:e.color="yellow darken-3";case 1:e.color="orange darken-3";case 0:e.color="deep-orange darken-3";default:e.color="blue-grey"}},SET_LOADING(e,t){e.loading=t},SET_STACK(e,t){e.stack=t},SET_ISLOGGEDIN(e,t){e.isLoggedIn=t},SET_REPEATS(e,t){t.sort(()=>Math.random()-.5),e.repeats=t}},actions:{getUser({commit:e,dispatch:t,state:a}){return console.log("trying to get user"),new Promise((t,a)=>{T.a.post("https://restick.herokuapp.com/api/auth/verify",{},{headers:{Authorization:localStorage.auth}}).then(a=>{T.a.defaults.headers.common["Authorization"]=localStorage.auth,e("SET_USER",a.data),t(a.data)}).catch(e=>{console.log(e),a()})})},getStacks({commit:e,state:t}){return new Promise((t,a)=>{T.a.get("https://restick.herokuapp.com/api/stacks").then(a=>{e("SET_STACKS",a.data),t(a.data)})})},setColor:({commit:e},t)=>{e("SET_COLOR",t)},init({commit:e,dispatch:t}){return new Promise((a,c)=>{e("SET_LOADING",!0),t("getUser").then(c=>{console.log("First resolved",c),e("SET_ISLOGGEDIN",!0),Promise.all([t("getStacks"),t("getRepeats")]).then(t=>{console.log("2nd resolved",t),a(),e("SET_LOADING",!1)})}).catch(e=>{c()})})},getStack({commit:e,state:t,dispatch:a},c){return c||(c=t.stack._id),e("SET_LOADING",!0),new Promise((t,s)=>{T.a.get("https://restick.herokuapp.com/api/stacks/"+c).then(c=>{e("SET_STACK",c.data),a("getRepeats"),e("SET_LOADING",!1),t()}).catch(e=>{console.log(e)})})},getRepeats({commit:e,state:t}){return e("SET_LOADING",!0),new Promise((t,a)=>{T.a.get("https://restick.herokuapp.com/api/user/spaced").then(a=>{e("SET_REPEATS",a.data),e("SET_LOADING",!1),t(a.data)})})},clearUser({commit:e}){e("SET_USER",!1),e("SET_STACKS",!1),e("SET_STACK",!1),e("SET_REPEATS",!1)}},modules:{}});const A=w.dispatch("init");c["a"].use(y["a"]);const O=[{path:"/",name:"Home",component:function(){return Promise.all([a.e("account~home~spaced~stack~stacks"),a.e("home")]).then(a.bind(null,"bb51"))}},{path:"/account",name:"Account",component:function(){return Promise.all([a.e("account~home~spaced~stack~stacks"),a.e("account")]).then(a.bind(null,"77be"))}},{path:"/stacks",name:"Stacks",component:function(){return Promise.all([a.e("account~home~spaced~stack~stacks"),a.e("spaced~stack~stacks"),a.e("stack~stacks"),a.e("stacks")]).then(a.bind(null,"452a"))}},{name:"Stack",path:"/stacks/:stackId",component:function(){return Promise.all([a.e("account~home~spaced~stack~stacks"),a.e("spaced~stack~stacks"),a.e("spaced~stack"),a.e("stack~stacks"),a.e("stack")]).then(a.bind(null,"a782"))},beforeEnter(e,t,a){w.dispatch("getStack",e.params.stackId).then(a)}},{path:"/spaced",name:"Spaced repetition",component:function(){return Promise.all([a.e("account~home~spaced~stack~stacks"),a.e("spaced~stack~stacks"),a.e("spaced~stack"),a.e("spaced")]).then(a.bind(null,"9013"))},beforeEnter:(e,t,a)=>{w.dispatch("getRepeats",e.params.stackId).then(a)}}],P=new y["a"]({mode:"history",base:"/",routes:O});P.beforeEach((e,t,a)=>{"/"==e.path?(a(),w.commit("SET_LOADING",!1)):w.state.user?w.state.stacks?a():w.dispatch("getStacks").then(()=>{a()}):A.then(()=>{console.log(A),w.state.user&&w.state.stacks?a():a({path:"/",query:{redirect:e.path}})}).catch(t=>{console.log("Preload request failed"),a({path:"/",query:{redirect:e.path}})})});var C=P,I=a("f309");c["a"].use(I["a"]);var L=new I["a"]({});c["a"].config.productionTip=!1,new c["a"]({router:C,store:w,vuetify:L,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.177be079.js.map