(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userInfo"],{"0c01":function(t,a,n){var i=n("1582");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("73e8828a",i,!0,{sourceMap:!1,shadowMode:!1})},1582:function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".avatar[data-v-64cfcc40]{display:block;width:%?100?%;height:%?100?%;border-radius:100%;overflow:hidden;background-color:#333}.avatar img[data-v-64cfcc40]{display:block;height:100%;width:100%;object-fit:cover}.btn[data-v-64cfcc40]{position:fixed;left:0;bottom:0;width:100%}",""])},6190:function(t,a,n){"use strict";var i=n("0c01"),e=n.n(i);e.a},8414:function(t,a,n){"use strict";n.r(a);var i=n("ceec"),e=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(a,t,function(){return i[t]})}(o);a["default"]=e.a},c73c:function(t,a,n){"use strict";var i,e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-form",[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("头像")]),n("v-uni-view",{staticClass:"avatar",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.upload.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.avatar}})])],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("昵称")]),n("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请输入姓名"},model:{value:t.form.nickname,callback:function(a){t.$set(t.form,"nickname",a)},expression:"form.nickname"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("性别")]),n("v-uni-radio-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.radioChange.apply(void 0,arguments)}}},[n("v-uni-radio",{attrs:{checked:1==t.form.sex,value:"1"}},[t._v("男")]),n("v-uni-radio",{attrs:{checked:1!=t.form.sex,value:"2"}},[t._v("女")])],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("生日")]),n("v-uni-picker",{attrs:{mode:"date",value:t.form.birthday,start:t.startDate,end:t.endDate},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.bindDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.form.birthday))])],1)],1)],1),n("v-uni-button",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editUserInfo.apply(void 0,arguments)}}},[t._v("确定")])],1)},o=[];n.d(a,"b",function(){return e}),n.d(a,"c",function(){return o}),n.d(a,"a",function(){return i})},ceec:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("f312");var i=n("72e9");function e(t){var a=new Date,n=a.getFullYear(),i=a.getMonth()+1,e=a.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,e=e>9?e:"0"+e,"".concat(n,"-").concat(i,"-").concat(e)}var o={data:function(){return{form:{avatar:"",sex:"",nickname:"",birthday:""},avatar:"",uploadFile:null,startDate:e("start"),endDate:e("end")}},onLoad:function(){this.userInfo()},methods:{bindDateChange:function(t){this.form.birthday=t.target.value},editUserInfo:function(){var t=this;uni.showLoading(),(0,i.editUserInfo)(this.form).then(function(a){uni.hideLoading(),t.$msg(a.msg),(0,i.userInfo)().then(function(a){t.$store.commit("setUser",a.data)})})},userInfo:function(){var t=this;uni.showLoading(),(0,i.userInfo)().then(function(a){if(1===a.code){for(var n in a.data)t.form.hasOwnProperty(n)&&("sex"===n?t.form.sex=a.data[n]+"":"avatar"===n?a.data[n]&&(t.avatar=a.data["avatar"]):"birthday"===n?a.data["birthday"]&&(t.form.birthday=a.data["birthday"]):t.form[n]=a.data[n]);uni.hideLoading()}})},radioChange:function(t){this.form.sex=t.detail.value},upload:function(){var t=this;uni.chooseImage({count:1,success:function(a){a.tempFiles[0];var n=a.tempFilePaths[0],i=t.$store.state.token,e=t;uni.uploadFile({name:"avatar",url:"http://fo.nnzysp.com/api/user/uploadImg",filePath:n,header:{token:i},success:function(t){var a=JSON.parse(t.data),n=a.data.url,i=a.data.src;e.form.avatar=i,e.avatar=n},fail:function(t){console.error("fail: ",t)}})}})}}};a.default=o},d85e:function(t,a,n){"use strict";n.r(a);var i=n("c73c"),e=n("8414");for(var o in e)"default"!==o&&function(t){n.d(a,t,function(){return e[t]})}(o);n("6190");var r,c=n("f0c5"),u=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"64cfcc40",null,!1,i["a"],r);a["default"]=u.exports}}]);