(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-luck-luck"],{"10ac":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("5176")),r=a(i("3154")),l=a(i("9442")),s=i("f46b"),u=i("510c"),d=i("3baa");function c(){for(var t=new Date,e=t.getFullYear()+50,i=e-200,a=[],n=i;n<=e;n++)a.push({year:n});return a}function f(){for(var t=[],e=1;e<=13;e++)t.push({month:e});return t}function b(){for(var t=[],e=1;e<=30;e++)t.push({day:e});return t}function m(){for(var t=new Date,e=t.getFullYear(),i=c(),a=0;a<i.length;a++)if(e===i[a].year)return a}var v=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],h={components:{tabBar:r.default,navBar:l.default},data:function(){return{sexs:[{label:"男性",value:"1"},{label:"女性",value:"2"}],docmHeight:document.documentElement.clientHeight,showHeight:document.documentElement.clientHeight,hideshow:!0,timeIndex:0,yearIndex:m(),monthIndex:0,dayIndex:0,hasResult:!1,yearArray:c(),monthArray:f(),dayArray:b(),timeArray:[{time:"子时 23:00~01:00"},{time:"丑时 01:00~03:00"},{time:"寅时 03:00~05:00"},{time:"卯时 05:00~07:00"},{time:"辰时 07:00~09:00"},{time:"巳时 09:00~11:00"},{time:"午时 11:00~13:00"},{time:"未时 13:00~15:00"},{time:"申时 15:00~17:00"},{time:"酉时 17:00~19:00"},{time:"戌时 19:00~21:00"},{time:"亥时 21:00~23:00"}],form:{lastname:"",firstname:"",time:"",year:"",month:"",day:"",sex:"1"},shengxiao:"",time:"",result:{sum_up:"",fortunes:"",cause:"",feeling:"",healthy:"",shengxiao:""},mHeight:0}},mounted:function(){var t=this;this.calcuHeight(),window.addEventListener("resize",function(){n&&clearTimeout(n),n=setTimeout(function(){t.calcuHeight(),t.showHeight=document.body.clientHeight},200)})},methods:{radioChange:function(t){this.form.sex=t.detail.value},timeChange:function(t){var e=t.detail.value;this.timeIndex=e,this.time=this.timeArray[e].time,this.form.time=v[e]},dayChange:function(t){var e=t.detail.value;this.dayIndex=e,this.form.day=this.dayArray[e].day},monthChange:function(t){var e=t.detail.value;this.monthIndex=e,this.form.month=this.monthArray[e].month,this.form.day="",this.dayIndex=0},yearChange:function(t){var e=t.detail.value;this.yearIndex=e,this.form.year=this.yearArray[e].year,this.form.month="",this.form.day="",this.monthIndex=0,this.dayIndex=0},calcuHeight:function(){var t=uni.getSystemInfoSync(),e=t.windowHeight;this.mHeight=e-40-50},fortune:function(){var t=this;for(var e in this.form)if(this.form.hasOwnProperty(e)&&(0,s.isEmpty)(this.form[e]))return void this.$msg("请您输入完整算命内容");uni.showLoading({title:"算运中"}),(0,u.fortune)(this.form).then(function(e){1===e.code&&(uni.hideLoading(),(0,o.default)(t.result,e.data),t.hasResult=!0),t.$msg(e.msg)})},ownBuddha:function(t){var e=this;uni.showLoading(),(0,d.ownBuddha)({buddha_id:t}).then(function(i){1===i.code?(e.$store.commit("choiceGod",{id:t}),uni.navigateTo({url:"../pray/pray"})):e.$msg(i.msg),uni.hideLoading()})}},watch:{showHeight:function(){this.docmHeight>this.showHeight?this.hideshow=!1:this.hideshow=!0},"form.year":{handler:function(){var t=new Date(this.form.year).getFullYear(),e=["猴","鸡","狗","猪","鼠","牛","虎","兔","龙","蛇","马","羊"];this.shengxiao=e[t%12]}}}};e.default=h},"13b1":function(t,e,i){t.exports=i.p+"static/img/bottom.c021e725.png"},3154:function(t,e,i){"use strict";i.r(e);var a=i("4e8f"),n=i("95f8");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("62df");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"7517d9a0",null,!1,a["a"],r);e["default"]=s.exports},"3baa":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.ownBuddha=e.buddhalist=void 0;var n=a(i("6b56")),o=function(t){return n.default.http("/index/buddhalist","get",t)};e.buddhalist=o;var r=function(t){return n.default.http("/index/ownBuddha","get",t)};e.ownBuddha=r},"437c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={props:{active:{type:Number,default:0},fixed:{type:Boolean,default:!1}},data:function(){return{tabs:[{name:"活动",url:"/pages/activity/activity",icon:"static/img/tabbars/huodong.png",selectIcon:"static/img/tabbars/huodong_xz.png"},{name:"运势",url:"/pages/luck/luck",icon:"static/img/tabbars/yunshi.png",selectIcon:"static/img/tabbars/yunshi_xz.png"},{name:"祭拜",url:"/pages/pray/pray",icon:"static/img/tabbars/jibai.png",selectIcon:"static/img/tabbars/jibai_xz.png"},{name:"积德",url:"/pages/turnDeserves/turnDeserves",icon:"static/img/tabbars/jide.png",selectIcon:"static/img/tabbars/jide_xz.png"},{name:"我的",url:"/pages/user/user",icon:"static/img/tabbars/wode.png",selectIcon:"static/img/tabbars/wode_xz.png"}]}},methods:{go:function(t){uni.navigateTo({url:t})}}};e.default=a},"4e8f":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tab-bar-wrap",class:{"t-fixed":t.fixed}},[i("ul",t._l(t.tabs,function(e,a){return i("li",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go(e.url)}}},[i("img",{attrs:{src:a===t.active?e.selectIcon:e.icon}}),i("v-uni-view",{staticClass:"line"})],1)}),0)])},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"510c":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.fortune=void 0;var n=a(i("6b56")),o=function(t){return n.default.http("/index/news_fortune","post",t)};e.fortune=o},"62df":function(t,e,i){"use strict";var a=i("f1e4"),n=i.n(a);n.a},"6b56":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("795b")),r=i("f46b");n="http://fo.nnzysp.com/api";var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3e4,l=(0,r.getUniStorageSync)("token");return(0,r.isEmpty)(l)||(a["token"]=l),new o.default(function(o,l){uni.request({url:"http://fo.nnzysp.com/api"+t,method:(0,r.getUpperCase)(e),header:a,data:i,timeout:n,success:function(t){if(t.data.code>=1e4)return(0,r.clearUniStorage)(),void uni.navigateTo({url:"/pages/login/login"});o(t.data)},fail:function(t){console.log("fail: ",t),l(t)}})})},s={baseURL:n,http:l};e.default=s},"95f8":function(t,e,i){"use strict";i.r(e);var a=i("437c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"9a0c":function(t,e,i){var a=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,".luck[data-v-2b263184]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.luck .new-result[data-v-2b263184]{padding:%?40?%;box-sizing:border-box}.luck .new-result .block .bold[data-v-2b263184]{font-weight:700;font-size:%?36?%}.luck .new-result .block .result-content[data-v-2b263184]{margin:%?40?% 0;font-size:%?32?%;color:#424242}.luck .row[data-v-2b263184]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:600;color:#646262}.luck .luck-main[data-v-2b263184]{overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:1;flex-shrink:1}.luck .luck-main .result[data-v-2b263184]{width:100%}.luck .luck-main .result .top[data-v-2b263184]{padding:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;background:#ddd}.luck .luck-main .result .top img[data-v-2b263184]{width:30%;object-fit:contain;margin-right:%?40?%}.luck .luck-main .result .top .text[data-v-2b263184]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:12px;color:#666}.luck .luck-main .result .middle[data-v-2b263184]{padding:%?10?% 0}.luck .luck-main .result .middle .module .b1[data-v-2b263184]{border-color:#f4c22d}.luck .luck-main .result .middle .module .b1 .left[data-v-2b263184]{background-color:#f4c22d}.luck .luck-main .result .middle .module .b2[data-v-2b263184]{border-color:#41bad5}.luck .luck-main .result .middle .module .b2 .left[data-v-2b263184]{background-color:#41bad5}.luck .luck-main .result .middle .module .b3[data-v-2b263184]{border-color:#fe8e8d}.luck .luck-main .result .middle .module .b3 .left[data-v-2b263184]{background-color:#fe8e8d}.luck .luck-main .result .middle .module .b4[data-v-2b263184]{border-color:#6ee587}.luck .luck-main .result .middle .module .b4 .left[data-v-2b263184]{background-color:#6ee587}.luck .luck-main .result .middle .module .banner[data-v-2b263184]{box-sizing:border-box;padding:%?10?% %?20?% %?10?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:2px solid}.luck .luck-main .result .middle .module .banner .left[data-v-2b263184]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?-10?%;color:#fff;font-family:customFont}.luck .luck-main .result .middle .module .banner .left .ts[data-v-2b263184]{display:block;position:absolute;left:0;top:0;width:130%;height:100%;margin-bottom:%?-10?%;background-color:inherit;-webkit-transform:skewX(45deg);transform:skewX(45deg);border-top-right-radius:%?10?%;z-index:-1}.luck .luck-main .result .middle .module .banner .left img[data-v-2b263184]{display:block;height:60%;margin:0 %?20?%}.luck .luck-main .result .middle .module .banner .custom-btn[data-v-2b263184]{margin:0}.luck .luck-main .result .middle .module .m-content[data-v-2b263184]{padding:%?20?%;font-size:14px;color:#777}.luck .luck-main .form[data-v-2b263184]{position:relative;width:100%;height:100%;background-image:url("+a(i("def2"))+');background-position:50%;background-size:cover}.luck .luck-main .form .bottom[data-v-2b263184]{position:fixed;bottom:-1%;left:0;right:0;width:100%}.luck .luck-main .form .bottom img[data-v-2b263184]{display:block;width:100%;object-fit:cover}.login-form-group[data-v-2b263184]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?500?%;margin:0 auto;padding-top:%?60?%}.login-form-group .input-row[data-v-2b263184]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?10?%}.login-form-group .input-row .title[data-v-2b263184]{width:auto;font-weight:600;color:#646262;padding:0;white-space:nowrap}.login-form-group .input-row .title[data-v-2b263184]:after{content:":"}.login-form-group .input-row uni-input[data-v-2b263184],.login-form-group .input-row uni-picker[data-v-2b263184]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.8rem;height:1.8rem;text-indent:.8em;border:1px solid rgba(0,0,0,.1);font-size:%?28?%;background-color:#ffe4ba;border-top-left-radius:%?50?%;border-top-right-radius:%?50?%;border-bottom-left-radius:%?50?%;border-bottom-right-radius:%?50?%}.btn-row[data-v-2b263184]{text-align:center;width:%?500?%;margin:%?40?% auto}.btn-row .custom-btn[data-v-2b263184]{width:100%}',""])},aa99:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".t-fixed[data-v-7517d9a0]{position:fixed;left:0;bottom:0;right:0}.tab-bar-wrap[data-v-7517d9a0]{width:100%;height:50px;border-top:2px solid #e28a2c;background:#fff;box-sizing:border-box}.tab-bar-wrap ul[data-v-7517d9a0]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;box-sizing:border-box}.tab-bar-wrap ul li[data-v-7517d9a0]{position:relative;width:20%;height:100%;padding:%?10?% 0;box-sizing:border-box}.tab-bar-wrap ul li img[data-v-7517d9a0]{display:block;width:50%;height:100%;margin:0 auto;object-fit:contain}.tab-bar-wrap ul li .line[data-v-7517d9a0]{position:absolute;top:50%;left:0;width:100%;height:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-right:1px solid #8f8f94!important}.tab-bar-wrap ul li .line[data-v-7517d9a0]:last-child{border-right:none}",""])},aaea:function(t,e,i){"use strict";i.r(e);var a=i("10ac"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c4c6:function(t,e,i){"use strict";var a=i("f132"),n=i.n(a);n.a},d3ff:function(t,e,i){"use strict";i.r(e);var a=i("dc21"),n=i("aaea");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("c4c6");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"2b263184",null,!1,a["a"],r);e["default"]=s.exports},dc21:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"luck"},[a("nav-bar",{staticStyle:{position:"static"},attrs:{title:"运势"}}),a("v-uni-view",{staticClass:"luck-main",style:{height:t.mHeight+"px"}},[t.hasResult?a("v-uni-view",{staticClass:"new-result"},[a("v-uni-view",{staticClass:"block"},[a("v-uni-view",{staticClass:"bold"},[t._v("您的出生资料")]),a("v-uni-view",{staticClass:"result-content"},[a("v-uni-view",[t._v("生日(阴历)："+t._s(t.form.year)+"年"+t._s(t.form.month)+"月"+t._s(t.form.day)+"日 "+t._s(t.time))]),a("v-uni-view",[t._v("生肖为"+t._s(t.result.shengxiao))]),a("v-uni-view",[t._v(t._s("1"===t.form.sex?"男":"女")+"命(八字) "+t._s(t.result.bazi))])],1),a("v-uni-view",{staticClass:"bold"},[t._v("算命结果")]),a("v-uni-view",{staticClass:"result-content"},[t._v(t._s(t.result.sum_up))])],1)],1):a("v-uni-view",{staticClass:"form"},[a("v-uni-view",{staticClass:"login-form-group"},[a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title",attrs:{space:"emsp"}},[t._v("姓氏")]),a("v-uni-input",{attrs:{type:"text",clearable:!0,focus:!0},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1),a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title",attrs:{space:"emsp"}},[t._v("名字")]),a("v-uni-input",{attrs:{type:"text",clearable:!0,focus:!0},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})],1)],1),a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title",attrs:{space:"emsp"}},[t._v("农历")]),a("v-uni-view",{staticClass:"row"},[a("v-uni-picker",{attrs:{value:t.yearIndex,"range-key":"year",range:t.yearArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.yearChange.apply(void 0,arguments)}}},[a("v-uni-input",{model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}})],1),t._v("年")],1),a("v-uni-view",{staticClass:"row"},[a("v-uni-picker",{attrs:{disabled:!t.form.year,value:t.monthIndex,"range-key":"month",range:t.monthArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.monthChange.apply(void 0,arguments)}}},[a("v-uni-input",{attrs:{disabled:!t.form.year},model:{value:t.form.month,callback:function(e){t.$set(t.form,"month",e)},expression:"form.month"}})],1),t._v("月")],1),a("v-uni-view",{staticClass:"row"},[a("v-uni-picker",{attrs:{disabled:!t.form.year||!t.form.month,value:t.dayIndex,"range-key":"day",range:t.dayArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.dayChange.apply(void 0,arguments)}}},[a("v-uni-input",{attrs:{disabled:!t.form.year||!t.form.month},model:{value:t.form.day,callback:function(e){t.$set(t.form,"day",e)},expression:"form.day"}})],1),t._v("日")],1)],1),a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title"},[t._v("生肖")]),a("v-uni-input",{attrs:{type:"text",disabled:"disabled"},model:{value:t.shengxiao,callback:function(e){t.shengxiao=e},expression:"shengxiao"}})],1),a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title"},[t._v("时辰")]),a("v-uni-picker",{attrs:{"range-key":"time",value:t.timeIndex,range:t.timeArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.timeChange.apply(void 0,arguments)}}},[a("v-uni-input",{attrs:{type:"text",placeholder:"请选择时辰"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),a("v-uni-view",{staticClass:"input-row"},[a("v-uni-text",{staticClass:"title"},[t._v("性别")]),a("v-uni-radio-group",{staticClass:"row",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.sexs,function(e){return a("v-uni-label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd row"},[a("v-uni-view",[a("v-uni-radio",{staticClass:"custm-radio",attrs:{value:e.value,checked:e.value===t.form.sex}})],1),a("v-uni-view",[t._v(t._s(e.label))])],1)}),1)],1)],1),a("v-uni-view",{staticClass:"btn-row"},[a("v-uni-button",{staticClass:"custom-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fortune.apply(void 0,arguments)}}},[t._v("开始算命")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.hideshow,expression:"hideshow"}],staticClass:"bottom"},[a("img",{attrs:{src:i("13b1")}})])],1)],1),a("tab-bar",{attrs:{active:1,fixed:!0}})],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},def2:function(t,e,i){t.exports=i.p+"static/img/tongyongbeijing.e4613183.png"},f132:function(t,e,i){var a=i("9a0c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("34482e14",a,!0,{sourceMap:!1,shadowMode:!1})},f1e4:function(t,e,i){var a=i("aa99");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("93c19026",a,!0,{sourceMap:!1,shadowMode:!1})}}]);