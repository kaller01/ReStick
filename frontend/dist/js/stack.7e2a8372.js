(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stack"],{"02db":function(t,a,e){},"02e0":function(t,a,e){"use strict";var i=e("02db"),s=e.n(i);s.a},1681:function(t,a,e){},a782:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{attrs:{flat:""}},[e("v-toolbar",{attrs:{src:t.stack.picture?t.stack.picture:"https://picsum.photos/720",dark:"",prominent:"",flat:""}},[e("v-btn",{attrs:{icon:"",to:"/stacks"}},[e("v-icon",[t._v(" mdi-arrow-left ")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v(" mdi-share-variant ")])],1)],1),e("v-card",{staticClass:"mx-auto",staticStyle:{"margin-top":"-40px"},attrs:{"max-width":"500"}},[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v(" "+t._s(t.stack.name)+" ")]),e("v-spacer"),t.stack.unknown?t._e():e("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.stack.subscribed,expression:"stack.subscribed"}],attrs:{icon:""},on:{click:t.unsubStack}},[e("v-icon",[t._v("mdi-bell-check")])],1),t.stack.unknown?t._e():e("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.stack.subscribed,expression:"!stack.subscribed"}],attrs:{icon:""},on:{click:t.subStack}},[e("v-icon",[t._v("mdi-bell-off")])],1),t.stack.unknown?t._e():e("v-btn",{attrs:{icon:""},on:{click:t.resetRepeats}},[e("v-icon",[t._v("mdi-restart")])],1),t.stack.unknown?t._e():e("v-btn",{attrs:{icon:""},on:{click:function(a){t.dialog=!0}}},[e("v-icon",[t._v("mdi-pencil")])],1),t.stack.unknown?t._e():e("v-btn",{attrs:{icon:""},on:{click:t.deleteStack}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),e("v-container",[e("v-row",[e("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"0",lg:"4"}}),e("v-col",{staticClass:"py-0 my-0",attrs:{cols:"12",lg:"4"}},[e("v-row",[t.stack.unknown?e("v-col",[e("v-btn",{attrs:{block:""},on:{click:t.addStack}},[t._v(" Subscribe to stack ")])],1):e("v-col",[e("v-btn",{attrs:{block:""},on:{click:function(a){t.newCardDialog=!0}}},[t._v(" Add card ")])],1),t._l(t.stack.cards,(function(a){return e("v-col",{key:a._id,attrs:{cols:"12"}},[e("card",{attrs:{card:a},on:{click:function(e){return t.openCard(a)}}})],1)}))],2)],1),e("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"0",lg:"4"}})],1)],1),e("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("stackDialog",{attrs:{stack:t.stack,title:"Edit stack"},on:{save:t.saveStack,close:function(a){t.dialog=!1}}})],1),e("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.newCardDialog,callback:function(a){t.newCardDialog=a},expression:"newCardDialog"}},[e("card-dialog",{attrs:{title:"New Card",card:t.newCard},on:{save:t.saveNewCard,close:function(a){t.newCardDialog=!1}}})],1),e("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.cardDialog,callback:function(a){t.cardDialog=a},expression:"cardDialog"}},[e("v-card",{staticClass:"my-3"},[e("v-card-actions",[e("v-btn",{attrs:{icon:""},on:{click:function(a){t.cardDialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){t.editCardDialog=!t.editCardDialog}}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{attrs:{icon:""},on:{click:t.deleteCard}},[e("v-icon",[t._v("mdi-delete")])],1)],1)],1),t.editCardDialog?e("card-dialog",{attrs:{card:t.card},on:{save:t.saveCard,close:function(a){t.cardDialog=t.editCardDialog=!1}}}):e("card",{attrs:{card:t.card}})],1)],1)},s=[],c=e("2f62"),o=e("bc3a"),r=e.n(o),n=e("6cb4"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title",[t.title?e("span",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" "),e("v-icon",[t._v("mdi-cards")])],1):t._e()]),e("v-card-text",[e("v-textarea",{attrs:{outlined:"",label:"Front","append-outer-icon":"mdi-image"},on:{"click:append-outer":function(a){return t.openimgdialog("front")}},model:{value:t.card.front,callback:function(a){t.$set(t.card,"front",a)},expression:"card.front"}}),e("v-divider"),e("v-textarea",{attrs:{outlined:"",label:"Back","append-outer-icon":"mdi-image"},on:{"click:append-outer":function(a){return t.openimgdialog("back")}},model:{value:t.card.back,callback:function(a){t.$set(t.card,"back",a)},expression:"card.back"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1),e("v-dialog",{model:{value:t.imgdialog,callback:function(a){t.imgdialog=a},expression:"imgdialog"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{label:"Link to image"},model:{value:t.imglink,callback:function(a){t.imglink=a},expression:"imglink"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.addimage}},[t._v(" Add image ")])],1)],1)],1)],1)},d=[],k={props:{card:Object,title:String},data:()=>({imgdialog:!1,where:null,imglink:null}),methods:{close(){this.$emit("close")},save(){console.log(this.card),this.$emit("save",this.card)},openimgdialog(t){this.imgdialog=!0,this.where=t},addimage(){this.imgdialog=!1,this.card[this.where]+="\n![]("+this.imglink+")",this.imglink=""}}},h=k,p=e("2877"),u=e("6544"),v=e.n(u),g=e("8336"),m=e("b0af"),b=e("99d9"),w=e("169a"),f=e("ce7e"),_=e("132d"),x=e("2fa4"),C=e("8654"),D=(e("1681"),e("58df"));const S=Object(D["a"])(C["a"]);var V=S.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...C["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"},genInput(){const t=C["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){C["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),y=Object(p["a"])(h,l,d,!1,null,null,null),H=y.exports;v()(y,{VBtn:g["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VDialog:w["a"],VDivider:f["a"],VIcon:_["a"],VSpacer:x["a"],VTextField:C["a"],VTextarea:V});var I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{on:{click:function(a){return t.$emit("click")}}},[e("v-card-text",{staticClass:"pa-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.card.front))}}),e("v-divider"),e("v-card-text",{staticClass:"pa-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.card.back))}})],1)},T=[],$=e("0e54"),N=e.n($),O=e("c0c4"),j=e.n(O),z={props:{card:Object},methods:{compileMarkdown(t){let a=N()(t);return j.a.sanitize(a)}}},M=z,R=Object(p["a"])(M,I,T,!1,null,null,null),G=R.exports;v()(R,{VCard:m["a"],VCardText:b["c"],VDivider:f["a"]});var B={components:{stackDialog:n["a"],cardDialog:H,card:G},computed:{...Object(c["c"])(["stack","user","host"])},data:()=>({dialog:!1,newCardDialog:!1,cardDialog:!1,editCardDialog:!1,newCard:{front:"",back:""},card:!1}),methods:{...Object(c["b"])(["getStacks","getStack"]),deleteStack(){r.a.delete("https://restick.herokuapp.com/api/stacks/"+this.stack._id).then(t=>{console.log("Deleted stack"),this.getStacks().then(t=>{this.$router.push("/stacks")})})},resetRepeats(){r.a.delete("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/repeats").then(t=>{console.log("Reseted repeats",t)})},saveStack(){let t=this.stack;r.a.put("https://restick.herokuapp.com/api/stacks/"+this.stack._id,t).then(t=>{this.getStacks(),this.getStack(this.stack._id),this.dialog=!1})},saveNewCard(t){console.log(t),r.a.post("https://restick.herokuapp.com/api/stacks/"+this.stack._id,t).then(t=>{this.getStack(this.stack._id).then(t=>{this.newCardDialog=!1})})},saveCard(t){r.a.put("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/"+this.card._id,t).then(t=>{this.getStack(this.stack._id),this.cardDialog=this.editCardDialog=!1})},deleteCard(){r.a.delete("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/"+this.card._id).then(t=>{this.getStack(this.stack._id),this.cardDialog=this.editCardDialog=!1})},subStack(){r.a.put("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/sub").then(t=>{this.getStacks(),this.getStack()})},unsubStack(){r.a.delete("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/sub").then(t=>{this.getStack(),this.getStacks()})},addStack(){r.a.post("https://restick.herokuapp.com/api/stacks/"+this.stack._id+"/sub").then(t=>{this.getStacks(),this.getStack()})},compileMarkdown(t){let a=marked(t);return DOMPurify.sanitize(a)},openCard(t){this.card=t,this.cardDialog=!0}},created(){this.stack.unknown||r.a.patch("https://restick.herokuapp.com/api/stacks/"+this.stack._id)}},F=B,A=(e("02e0"),e("62ad")),E=e("a523"),P=e("0fd9"),L=e("71d9"),J=e("2a7f"),K=Object(p["a"])(F,i,s,!1,null,null,null);a["default"]=K.exports;v()(K,{VBtn:g["a"],VCard:m["a"],VCardActions:b["a"],VCol:A["a"],VContainer:E["a"],VDialog:w["a"],VIcon:_["a"],VRow:P["a"],VSpacer:x["a"],VToolbar:L["a"],VToolbarTitle:J["a"]})}}]);
//# sourceMappingURL=stack.7e2a8372.js.map