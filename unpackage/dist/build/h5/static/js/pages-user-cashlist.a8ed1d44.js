(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-cashlist"],{"028a":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("3154")),o=a(e("d307")),l=a(e("2bbf")),c=a(e("9442")),s=e("72e9"),r=a(e("aa68")),d=a(e("b021"));e("f312");var f={components:{tabBar:n.default,uniIcons:o.default,navBar:c.default,uniLoadMore:l.default,uniCard:d.default},mixins:[r.default],data:function(){return{list:[],current_page:1,total:null,per_page:10,loadingType:"more",scrollHeight:0}},onLoad:function(){this.withdrawList()},mounted:function(){var t=uni.getSystemInfoSync();t.windowHeight},methods:{withdrawList:function(){var t=this;"more"===this.loadingType&&(this.loadingType="loading",(0,s.withdrawList)({current_page:this.current_page}).then(function(i){1===i.code&&(t.list=t.list.concat(i.data.data),t.current_page++,t.loadingType="more",t.list.length>=t.total&&(t.loadingType="noMore"))}))}}};i.default=f},"246f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-2f6f541c]{width:100%;height:100%}.tixian-content[data-v-2f6f541c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.activity-content[data-v-2f6f541c]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.activity-list[data-v-2f6f541c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}.activity-list .activity-list__item[data-v-2f6f541c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?230?%;box-sizing:border-box;padding:%?20?%;border-bottom:%?2?% solid #646262;position:relative}.activity-list .activity-list__item .activity-list__item-img[data-v-2f6f541c]{width:30%;height:100%}.activity-list .activity-list__item .activity-list__item-content[data-v-2f6f541c]{margin-left:%?30?%;width:70%;height:100%}.activity-list .activity-list__item .activity-list__item-content .activity-list__item-title[data-v-2f6f541c]{width:100%;font-size:%?36?%;font-weight:700;color:#646263;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.activity-list .activity-list__item .activity-list__item-content .activity-list__item-body[data-v-2f6f541c]{width:100%;height:%?80?%;font-size:%?28?%;text-indent:25px;margin-top:%?10?%;color:#999;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.activity-list .activity-list__item .activity-list__item-content .activity-list__item-date[data-v-2f6f541c]{position:absolute;right:%?20?%;bottom:%?20?%;font-size:%?28?%;color:#999}",""])},"4f9e":function(t,i,e){"use strict";e.r(i);var a=e("028a"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"6d22":function(t,i,e){"use strict";e.r(i);var a=e("ca63"),n=e("4f9e");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("7c36");var l,c=e("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"2f6f541c",null,!1,a["a"],l);i["default"]=s.exports},"7c36":function(t,i,e){"use strict";var a=e("f52e"),n=e.n(a);n.a},ca63:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"activity-content"},[e("v-uni-scroll-view",{staticClass:"activity-list",style:{height:t.middleHeight+"px"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.articleList.apply(void 0,arguments)}}},[t._l(t.list,function(i){return e("uni-card",{key:i.id,attrs:{title:i.type_text,extra:i.add_date}},[e("v-uni-view",{staticClass:"tixian-content"},[e("v-uni-view",[t._v("银行卡号:"+t._s(i.card_number))]),e("v-uni-view",[t._v("持卡人:"+t._s(i.card_holder))]),e("v-uni-view",[t._v("开户行:"+t._s(i.bank_name))]),e("v-uni-view",[t._v("服务费:￥"+t._s(i.service_charge))]),e("v-uni-view",[t._v("申请时间:￥"+t._s(i.apply_time))]),e("v-uni-view",[t._v("审核时间:￥"+t._s(i.check_time))]),e("v-uni-view",[t._v("审核状态："+t._s(i.status_text))])],1)],1)}),e("uni-load-more",{attrs:{status:t.loadingType}})],2)],1)},o=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return a})},f52e:function(t,i,e){var a=e("246f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7958d3df",a,!0,{sourceMap:!1,shadowMode:!1})}}]);