(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-more"],{"1a49":function(t,a,i){"use strict";var e=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.articleDetail=a.articleList=void 0;var n=e(i("6b56")),r=function(t){return n.default.http("/article/articleList","get",t)};a.articleList=r;var d=function(t){return n.default.http("/article/articleDetail","get",t)};a.articleDetail=d},"1e86":function(t,a,i){"use strict";var e=i("6fe3"),n=i.n(e);n.a},"449f":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("nav-bar",{attrs:{title:"活动咨询"}}),i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"sub"},[t._v(t._s(t.updated_time))])],1),i("p",[i("br")]),i("img",{staticClass:"imgs",attrs:{src:t.imgs}}),i("p",[i("br")]),i("v-uni-view",{staticClass:"detail",domProps:{innerHTML:t._s(t.desc)}})],1)],1)},r=[];i.d(a,"b",function(){return n}),i.d(a,"c",function(){return r}),i.d(a,"a",function(){return e})},"4b64":function(t,a,i){"use strict";var e=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("9442")),r=i("1a49"),d={components:{navBar:n.default},data:function(){return{title:"",updated_time:"",desc:"",imgs:""}},onLoad:function(t){this.articleDetail(t.id)},methods:{articleDetail:function(t){var a=this;(0,r.articleDetail)({article_id:t}).then(function(t){1===t.code?(a.title=t.data.title,a.updated_time=t.data.updated_time,a.desc=t.data.desc,a.imgs=t.data.imgs):a.$msg(t.msg)})}}};a.default=d},"6a9a":function(t,a,i){"use strict";i.r(a);var e=i("4b64"),n=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(a,t,function(){return e[t]})}(r);a["default"]=n.a},"6fe3":function(t,a,i){var e=i("c0ef");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("8bbd8866",e,!0,{sourceMap:!1,shadowMode:!1})},7775:function(t,a,i){"use strict";i.r(a);var e=i("449f"),n=i("6a9a");for(var r in n)"default"!==r&&function(t){i.d(a,t,function(){return n[t]})}(r);i("1e86");var d,s=i("f0c5"),c=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"1509a1bd",null,!1,e["a"],d);a["default"]=c.exports},c0ef:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".inner[data-v-1509a1bd]{position:absolute;top:54px;left:10px;right:10px}.inner .top .title[data-v-1509a1bd]{padding-bottom:%?10?%;font-size:%?40?%;font-weight:400}.inner .top .sub[data-v-1509a1bd]{padding-bottom:%?10?%;font-size:14px;color:#c8c7cc}.inner .imgs[data-v-1509a1bd]{display:block;max-width:80%;margin:0 auto;object-fit:contain}.inner .detail[data-v-1509a1bd]{overflow:hidden}.inner .detail>p uni-video[data-v-1509a1bd]{max-width:100%}.inner .detail>p img[data-v-1509a1bd]{max-width:100%;object-fit:contain}",""])}}]);