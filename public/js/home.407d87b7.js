(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"99d9":function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return r}));var n=o("b0af"),s=o("80d2");const a=Object(s["g"])("v-card__actions"),i=Object(s["g"])("v-card__subtitle"),c=Object(s["g"])("v-card__text"),r=Object(s["g"])("v-card__title");n["a"]},b41b:function(t,e,o){"use strict";var n=o("2b0e");e["a"]=n["a"].directive("google-signin-button",{bind:function(t,e,o){r();let n=e.value,s=document.createElement("script");function a(){gapi.load("auth2",()=>{const e=gapi.auth2.init({client_id:n,cookiepolicy:"single_host_origin"});e.attachClickHandler(t,{},i,c)})}function i(t){o.context.OnGoogleAuthSuccess(t.getAuthResponse().id_token),t.disconnect()}function c(t){o.context.OnGoogleAuthFail(t)}function r(){if(!o.context.OnGoogleAuthSuccess)throw new Error("The method OnGoogleAuthSuccess must be defined on the component");if(!o.context.OnGoogleAuthFail)throw new Error("The method OnGoogleAuthFail must be defined on the component")}s.setAttribute("src","https://apis.google.com/js/api:client.js"),document.head.appendChild(s),s.onload=a}})},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-responsive",{attrs:{height:"100%"}},[o("div",{staticClass:"d-flex flex-column align-center"},[o("h1",{staticClass:"display-4 white--text text-center mt-12 pa-12",attrs:{width:"100%"}},[t._v(" ReStick ")]),o("v-btn",{directives:[{name:"google-signin-button",rawName:"v-google-signin-button",value:t.clientId,expression:"clientId"}],attrs:{large:"",outlined:"",dark:"","x-large":""}},[t._v("Continue with google")]),o("span",{staticClass:"pa-12 white--text text-center title"},[t._v("Effective learning with spaced repetition. Create Stacks with flashcards and start learning. Share your Stacks with friends or invite them to collaborate together")]),o("span",{staticClass:"white--text title"},[t._v(" 0.2.0a ")]),o("span",{staticClass:"white--text"},[t._v(" App in development ")])],1),o("v-overlay",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("v-row",[o("v-col",{staticClass:"px-10",attrs:{cols:"12"}},[o("v-card",{attrs:{light:""}},[o("v-card-title",[t._v("Choose a username!")])],1)],1),t._l(t.usernames,(function(e){return o("v-col",{key:e,staticClass:"px-10",attrs:{cols:"12"}},[o("v-card",{attrs:{light:""},on:{click:function(o){return t.chooseUsername(e)}}},[o("v-card-text",{staticClass:"headline"},[t._v(" "+t._s(e)+" ")])],1)],1)}))],2)],1)],1)},s=[],a=o("2f62"),i=o("b41b");const c=o("bc3a");var r={directives:{GoogleSignInButton:i["a"]},computed:{...Object(a["c"])(["host","user"])},data:()=>({clientId:"256693553552-01bl6ulv29bolub2l5pgna5jovkd84pl.apps.googleusercontent.com",usernames:["test1","test2","test3","test4","test5"],show:!1}),methods:{OnGoogleAuthSuccess(t){c.post(this.host+"/api/auth/",{idToken:t}).then(t=>{c.defaults.headers.common["Authorization"]=t.data.token,localStorage.auth=t.data.token,console.log(t.data),this.usernames=t.data.names,this.chooseUsername(t.data.names[0])})},chooseUsername(t){c.post(this.host+"/api/user",{username:t}).then(t=>{this.$store.dispatch("getUser").then(t=>{this.continueToApp()})})},OnGoogleAuthFail(t){console.log(t)},continueToApp(){console.log(this.$route),this.$route.query.redirect?this.$router.push(this.$route.query.redirect):this.$router.push("/account")}},created(){localStorage.auth&&this.$router.push("/account")}},l=r,u=o("2877"),h=o("6544"),d=o.n(h),p=o("8336"),g=o("b0af"),v=o("99d9"),b=o("62ad"),m=o("a797"),f=o("6b53"),w=o("0fd9"),_=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:p["a"],VCard:g["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:b["a"],VOverlay:m["a"],VResponsive:f["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=home.407d87b7.js.map