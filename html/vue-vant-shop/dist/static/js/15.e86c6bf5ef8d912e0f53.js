webpackJsonp([15],{aiDL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Set",components:{HeaderTwo:a("UNd4").a},data:function(){return{title:"设置"}},created:function(){},mounted:function(){},methods:{clearCache:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"请问您确认要清除应用缓存吗？"}).then(function(){window.localStorage.clear(),t.$router.push("/")}).catch(function(){})}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-header"},[e("HeaderTwo",{attrs:{titleVal:this.title}})],1),this._v(" "),e("div",{staticClass:"page-content"},[e("van-cell",{attrs:{title:"绑定手机号","is-link":"",to:{path:"/BindPhone"}}}),this._v(" "),e("van-cell",{attrs:{title:"清除缓存","is-link":""},on:{click:this.clearCache}})],1)])},staticRenderFns:[]};var c=a("VU/8")(n,i,!1,function(t){a("cC7C")},"data-v-2e297660",null);e.default=c.exports},cC7C:function(t,e){}});
//# sourceMappingURL=15.e86c6bf5ef8d912e0f53.js.map