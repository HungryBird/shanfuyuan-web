(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-more"],{"1a49":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.articleDetail=e.articleList=void 0;var n=i(a("6b56")),o=function(t){return n.default.http("/article/articleList","get",t)};e.articleList=o;var r=function(t){return n.default.http("/article/articleDetail","get",t)};e.articleDetail=r},"2b60":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".inner[data-v-f53a17a8]{position:absolute;top:54px;left:10px;right:10px}.inner .top .title[data-v-f53a17a8]{padding-bottom:%?10?%;font-size:%?40?%;font-weight:400}.inner .top .sub[data-v-f53a17a8]{padding-bottom:%?10?%;font-size:14px;color:#888}.inner .imgs[data-v-f53a17a8]{display:block;max-width:100%;margin:0 auto;object-fit:contain}.inner .detail[data-v-f53a17a8]{overflow:hidden}.inner .detail>p uni-video[data-v-f53a17a8]{max-width:100%}.inner .detail>p img[data-v-f53a17a8]{max-width:100%;object-fit:contain}",""])},"4b64":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9442")),o=a("1a49"),r={components:{navBar:n.default},data:function(){return{title:"标题标题",updated_time:"2020-02-06 14:44:05",desc:'<view style="text-indent:2em;font-size:15px;color:#666;">资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯</view>',img1:"/web/static/img/activity/temples/1.jpg",img2:"/web/static/img/activity/temples/3.png"}},onLoad:function(t){},methods:{articleDetail:function(t){var e=this;(0,o.articleDetail)({article_id:t}).then(function(t){1===t.code?(e.title=t.data.title,e.updated_time=t.data.updated_time,e.desc=t.data.desc,e.imgs=t.data.imgs):e.$msg(t.msg)})}}};e.default=r},"4c34":function(t,e,a){var i=a("2b60");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("a336b45c",i,!0,{sourceMap:!1,shadowMode:!1})},"6a9a":function(t,e,a){"use strict";a.r(e);var i=a("4b64"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"6b56":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=i(a("795b")),r=a("f46b");n="http://fo.nnzysp.com/api";var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3e4,s=(0,r.getUniStorageSync)("token");return(0,r.isEmpty)(s)||(i["token"]=s),new o.default(function(o,s){uni.request({url:"http://fo.nnzysp.com/api"+t,method:(0,r.getUpperCase)(e),header:i,data:a,timeout:n,success:function(t){if(t.data.code>=1e4)return(0,r.clearUniStorage)(),void uni.navigateTo({url:"/pages/login/login"});o(t.data)},fail:function(t){console.log("fail: ",t),s(t)}})})},c={baseURL:n,http:s};e.default=c},7149:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("nav-bar",{attrs:{title:"活动资讯"}}),a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"sub"},[t._v(t._s(t.updated_time))])],1),a("p",[a("br")]),a("img",{staticClass:"imgs",attrs:{src:t.img1}}),a("p",[a("br")]),a("v-uni-view",{staticClass:"detail",domProps:{innerHTML:t._s(t.desc)}}),a("p",[a("br")]),a("img",{staticClass:"imgs",attrs:{src:t.img2}})],1)],1)},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},7775:function(t,e,a){"use strict";a.r(e);var i=a("7149"),n=a("6a9a");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("85ea");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"f53a17a8",null,!1,i["a"],r);e["default"]=c.exports},"85ea":function(t,e,a){"use strict";var i=a("4c34"),n=a.n(i);n.a}}]);