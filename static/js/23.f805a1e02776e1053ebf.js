webpackJsonp([23],{QrVH:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={components:{headBar:e("cNyQ").a},name:"login",data:function(){return{headdata:{text:"Log In"},logo:e("iQH9"),type:!0,formData:{email:"",phone:"",pwd:""}}},mounted:function(){this.initPage()},methods:{initPage:function(){this.DB.db||this.DB.init()},login:function(){var t="";this.type&&0==this.formData.email.length?t="Please enter your email address":this.type&&this.formData.email.length>0&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.formData.email)?t="Please enter the correct email address":this.type||0!=this.formData.phone.length?!this.type&&this.formData.phone.length>0&&!/^1(3|4|5|7|8)\d{9}$/.test(this.formData.phone)?t="Please enter the correct phone number":0==this.formData.pwd.length&&(t="Please enter your password"):t="Please enter your phone number",t.length>0?this.$toast(t):this.saveLog()},saveLog:function(){var t=this,a="email",e=t.formData.email;0==t.formData.email.length&&t.formData.phone.length>0&&(a="phone",e=t.formData.phone),t.DB.getItem(a,e,function(a){if(a.password&&a.password==t.formData.pwd){var e=a;e.title="login",e.status=!0,t.DB.put(e,function(a){t.$toast("Login successfully"),setTimeout(function(){t.$router.push({name:"diaryIndex",path:"/"})},1500)},function(a){t.$toast("login failure")})}else t.$toast("Wrong account or password")})},changeType:function(t){for(var a in this.type=t,this.formData)this.formData[a]=""}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt88"},[e("head-bar",{attrs:{head:t.headdata}}),t._v(" "),e("div",{staticClass:"heados"},[e("div",{staticClass:"login-cont"},[e("div",{staticClass:"login-logo"},[e("img",{attrs:{src:t.logo}})]),t._v(" "),e("div",{staticClass:"login-form"},[t.type?e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"form-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"text",placeholder:"Please enter your email address"},domProps:{value:t.formData.email},on:{input:function(a){a.target.composing||t.$set(t.formData,"email",a.target.value)}}})])]):e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[t._v("Phone")]),t._v(" "),e("div",{staticClass:"form-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],attrs:{type:"text",placeholder:"Please enter your phone number"},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"form-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.pwd,expression:"formData.pwd"}],attrs:{type:"password",placeholder:"Please enter your password"},domProps:{value:t.formData.pwd},on:{input:function(a){a.target.composing||t.$set(t.formData,"pwd",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"forgot"},[e("router-link",{attrs:{to:"/forgot"}},[t._v("Forgot Password")])],1),t._v(" "),e("div",{staticClass:"login-btn gradient-back",on:{click:function(a){return t.login()}}},[t._v("LOG IN")]),t._v(" "),t._m(0),t._v(" "),t.type?e("div",{staticClass:"login-btn bblue",on:{click:function(a){return t.changeType(!1)}}},[t._v("Log in with phone number")]):e("div",{staticClass:"login-btn bblue",on:{click:function(a){return t.changeType(!0)}}},[t._v("Log in with Email")]),t._v(" "),e("div",{staticClass:"toRegister"},[t._v("Don't have an account ? "),e("router-link",{attrs:{to:{name:"register",params:{status:!0}}}},[t._v(" Sign Up")])],1)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login-cut"},[this._v("————"),a("span",[this._v("or")]),this._v("————")])}]};var i=e("VU/8")(o,s,!1,function(t){e("l8WI")},"data-v-1b367428",null);a.default=i.exports},l8WI:function(t,a){}});
//# sourceMappingURL=23.f805a1e02776e1053ebf.js.map