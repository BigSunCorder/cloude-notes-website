"use strict";(self["webpackChunkvue_evernote_client"]=self["webpackChunkvue_evernote_client"]||[]).push([[806],{29806:function(e,s,i){i.r(s),i.d(s,{default:function(){return d}});var r=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{attrs:{id:"login"}},[i("div",{staticClass:"models"},[i("div",{staticClass:"models__wrapper"},[i("div",{staticClass:"models__wrapper__container"},[i("div",{staticClass:"main"}),i("div",{staticClass:"form"},[i("h3",{on:{click:e.showRegister}},[e._v("创建账户")]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowRegister,expression:"isShowRegister"}],staticClass:"register"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.register.username},on:{input:function(s){s.target.composing||e.$set(e.register,"username",s.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.register.password},on:{input:function(s){s.target.composing||e.$set(e.register,"password",s.target.value)}}}),i("p",{class:{error:e.register.isError}},[e._v(" "+e._s(e.register.notice)+" ")]),i("div",{staticClass:"button",on:{click:e.onRegister}},[e._v("创建账号")])])]),i("h3",{on:{click:e.showLogin}},[e._v("登录")]),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowLogin,expression:"isShowLogin"}],staticClass:"login"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:e.login.username},on:{input:function(s){s.target.composing||e.$set(e.login,"username",s.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.login.password},on:{input:function(s){s.target.composing||e.$set(e.login,"password",s.target.value)}}}),i("p",{class:{error:e.login.isError}},[e._v(e._s(e.login.notice))]),i("div",{staticClass:"button",on:{click:e.onLogin}},[e._v("登录")])])])],1)])])])])},t=[],o=i(93019),n=(i(92222),i(74916),i(77601),i(93219),i(25322)),a=(i(81343),i(34665));n.Z.getInfo().then((function(e){console.log(e)}));var l={name:"Login",data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"sunrui",password:"123456",notice:"请输入用户名和密码",isError:!1},register:{username:"sunrui",password:"123456",notice:"创建账号号请输入用户名和密码",isError:!1}}},methods:(0,o.Z)((0,o.Z)({},(0,a.nv)({loginUser:"login",registerUser:"register"})),{},{showRegister:function(){this.isShowRegister=!0,this.isShowLogin=!1},showLogin:function(){this.isShowRegister=!1,this.isShowLogin=!0},onRegister:function(){var e=this;console.log("register");var s=this.validUsername(this.register.username);if(!s.isValid)return this.register.isError=!0,void(this.register.notice=s.notice);var i=this.validPassword(this.register.password);if(!i.isValid)return this.register.isError=!0,void(this.register.notice=i.notice);console.log("注册成功,用户名是".concat(this.register.username,",密码是").concat(this.register.password)),this.registerUser({username:this.register.username,password:this.register.password}).then((function(){e.register.isError=!1,e.register.notice="",console.log(data)})).catch((function(s){e.register.isError=!0,e.register.notice=s.msg,console.log(s)}))},onLogin:function(){var e=this;console.log("login");var s=this.validUsername(this.login.username);if(!s.isValid)return this.login.isError=!0,void(this.login.notice=s.notice);var i=this.validPassword(this.login.password);if(!i.isValid)return this.login.isError=!0,void(this.login.notice=i.notice);console.log("登录成功,用户名是".concat(this.register.username,",密码是").concat(this.register.password)),this.loginUser({username:this.login.username,password:this.login.password}).then((function(){e.login.isError=!1,e.login.notice="",e.$router.push({path:"/notebooks"}),console.log("start redirect...")})).catch((function(s){e.login.isError=!0,e.login.notice=s.msg,console.log(s)}))},validUsername:function(e){return{isValid:/^[\w\u4e00-\u9fa5]{3,15}$/.test(e),notice:"用户名必须是3-15个字符，仅限数组字母下划线"}},validPassword:function(e){return{isValid:/^.{6,16}$/.test(e),notice:"密码长度为6-16位字符"}}})},g=l,c=i(1001),u=(0,c.Z)(g,r,t,!1,null,"2e852afb",null),d=u.exports},81343:function(e,s,i){var r=i(28935);new r["default"]}}]);
//# sourceMappingURL=806-legacy.467b5dfc.js.map