(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-choiceGod-choiceGod"],{"0eb5":function(t,i,a){"use strict";var n=a("82ee"),o=a.n(n);o.a},"2a98":function(t,i,a){"use strict";a.r(i);var n=a("8c13"),o=a("76ea");for(var e in o)"default"!==e&&function(t){a.d(i,t,function(){return o[t]})}(e);a("0eb5");var s,c=a("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"6fe88c60",null,!1,n["a"],s);i["default"]=r.exports},"3baa":function(t,i,a){"use strict";var n=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.ownBuddha=i.buddhalist=void 0;var o=n(a("6b56")),e=function(t){return o.default.http("/index/buddhalist","get",t)};i.buddhalist=e;var s=function(t){return o.default.http("/index/ownBuddha","get",t)};i.ownBuddha=s},"6b56":function(t,i,a){"use strict";var n=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o,e=n(a("795b")),s=a("f46b");o="http://fo.nnzysp.com/api";var c=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3e4,c=(0,s.getUniStorageSync)("token");return(0,s.isEmpty)(c)||(n["token"]=c),new e.default(function(e,c){uni.request({url:"http://fo.nnzysp.com/api"+t,method:(0,s.getUpperCase)(i),header:n,data:a,timeout:o,success:function(t){if(t.data.code>=1e4)return(0,s.clearUniStorage)(),void uni.navigateTo({url:"/pages/login/login"});e(t.data)},fail:function(t){console.log("fail: ",t),c(t)}})})},r={baseURL:o,http:c};i.default=r},"6c40":function(t,i,a){t.exports=a.p+"static/img/xuanzhongbeiguang.5c621e78.png"},"76ea":function(t,i,a){"use strict";a.r(i);var n=a("b606"),o=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,function(){return n[t]})}(e);i["default"]=o.a},"82ee":function(t,i,a){var n=a("ac27");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("5f1d85ce",n,!0,{sourceMap:!1,shadowMode:!1})},"8c13":function(t,i,a){"use strict";var n,o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content",on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.tStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.tMove.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"gods"},t._l(t.gods,function(i,o){return n("v-uni-view",{key:i.url,ref:"god",refInFor:!0,staticClass:"god",class:{scaleImg:o===t.activeIndex,"go-down":o===t.activeIndex&&t.flying},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickGod(o)}}},[n("img",{attrs:{src:i.img+"_"+(o===t.activeIndex?"1.png":"0.png")}}),o!==t.activeIndex||t.flying?t._e():n("v-uni-view",{staticClass:"name-wrap"},[n("img",{attrs:{src:i.pname}})]),o===t.activeIndex?n("img",{staticClass:"light",attrs:{src:a("6c40")}}):t._e(),o!==t.activeIndex||t.flying?t._e():n("v-uni-button",{staticClass:"choice-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ownBuddha(o)}}},[t._v("确 定")])],1)}),1)],1),n("v-uni-view",{staticClass:"bottom"},[t.into?n("img",{staticClass:"light",attrs:{src:a("c2ac")}}):t._e(),n("v-uni-image",{staticClass:"temple",attrs:{src:"../../static/img/simiao.png",mode:"widthFix"}})],1)],1)},e=[];a.d(i,"b",function(){return o}),a.d(i,"c",function(){return e}),a.d(i,"a",function(){return n})},ac27:function(t,i,a){var n=a("b041");i=t.exports=a("2350")(!1),i.push([t.i,".choice-btn[data-v-6fe88c60]{position:absolute;left:50%;top:110%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;z-index:99999;color:#fff;font-size:%?28?%;border-top-left-radius:%?60?%;border-top-right-radius:%?60?%;border-bottom-left-radius:%?60?%;border-bottom-right-radius:%?60?%;background-image:-webkit-linear-gradient(left,#eb7221,#e8ac5e);background-image:linear-gradient(90deg,#eb7221,#e8ac5e);font-family:customFont;line-height:2;font-size:%?28?%}.content[data-v-6fe88c60]{background:url("+n(a("ee91"))+");background-size:cover;background-repeat:no-repeat;position:relative}.go-down[data-v-6fe88c60]{position:fixed!important;left:50%!important;-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important;top:80%!important;-webkit-transition:all 1.75s!important;transition:all 1.75s!important;-webkit-animation:fade-data-v-6fe88c60 .75s;animation:fade-data-v-6fe88c60 .75s;-webkit-animation-delay:1.75s;animation-delay:1.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.top[data-v-6fe88c60]{position:absolute;top:-6%;left:0;width:100%}.top .gods[data-v-6fe88c60]{position:relative}.top .gods .god[data-v-6fe88c60]{position:absolute;width:25%}.top .gods .god uni-image[data-v-6fe88c60]:first-child{width:100%}.top .gods .god uni-image[data-v-6fe88c60]:nth-child(2){position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,40%);transform:translate(-50%,40%);width:100%;height:auto}.top .gods .god img[data-v-6fe88c60]{display:block;object-fit:cover}.top .gods .god img[data-v-6fe88c60]:first-child{width:100%}.top .gods .god .light[data-v-6fe88c60]{position:absolute;left:0;top:0;display:block;height:100%;width:100%;margin:0 auto;object-fit:cover;z-index:-1;-webkit-animation:scaleLight-big-data-v-6fe88c60 2s;animation:scaleLight-big-data-v-6fe88c60 2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.top .gods .god .name-wrap[data-v-6fe88c60]{position:absolute;left:50%;bottom:%?80?%;-webkit-transform:translate(-50%);transform:translate(-50%);width:100%;height:auto}.top .gods .god .name-wrap img[data-v-6fe88c60]{display:block;object-fit:cover;position:absolute;left:0;top:0;width:100%}.top .gods .scaleImg[data-v-6fe88c60]{-webkit-transform:scale(1.5);transform:scale(1.5);z-index:9999;-webkit-transition:all 1s;transition:all 1s}.bottom[data-v-6fe88c60]{position:fixed;bottom:0;left:0;right:0}.bottom .light[data-v-6fe88c60]{display:block;width:100%;margin:0 auto;object-fit:cover;-webkit-animation:scaleLight-small-data-v-6fe88c60 2s;animation:scaleLight-small-data-v-6fe88c60 2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.bottom .temple[data-v-6fe88c60]{position:absolute;bottom:0;left:0;width:100%}@-webkit-keyframes scaleLight-big-data-v-6fe88c60{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.6);transform:scale(1.6)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleLight-big-data-v-6fe88c60{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.6);transform:scale(1.6)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scaleLight-small-data-v-6fe88c60{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleLight-small-data-v-6fe88c60{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fade-data-v-6fe88c60{to{opacity:0}}@keyframes fade-data-v-6fe88c60{to{opacity:0}}",""])},b606:function(t,i,a){"use strict";var n=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o,e=n(a("e814")),s=n(a("5176")),c=a("3baa"),r={data:function(){return{innerAudioContext:null,into:!1,flying:!1,ownBuddhaing:!1,startPageX:0,endPageX:0,activeIndex:0,gods:[{id:4,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/caishen"),pname:"".concat(this.$pathURL,"static/img/gods/wulucaishen.png")},{id:6,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/guangong"),pname:"".concat(this.$pathURL,"static/img/gods/guangong.png")},{id:3,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/guanyin"),pname:"".concat(this.$pathURL,"static/img/gods/guanyin.png")},{id:2,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/milefo"),pname:"".concat(this.$pathURL,"static/img/gods/milefo.png")},{id:1,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/rulai"),pname:"".concat(this.$pathURL,"static/img/gods/shijiamoni.png")},{id:5,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/yaoshifo"),pname:"".concat(this.$pathURL,"static/img/gods/yaoshifo.png")}],posXY:[]}},onShow:function(){this.buddhalist(),this.startPlay()},mounted:function(){this.calcuPos()},methods:{startPlay:function(){this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.src="../../static/sounds/choice_god.mp3",this.innerAudioContext.autoplay=!0,this.innerAudioContext.loop=!0,this.innerAudioContext.onEnded(function(){}),this.innerAudioContext.onPlay(function(){}),this.innerAudioContext.onError(function(t){})},ownBuddha:function(t){var i=this;if(!this.ownBuddhaing){this.ownBuddhaing=!0;var a=this.gods[this.activeIndex].id;this.$store.commit("choiceGod",this.gods[this.activeIndex]),(0,c.ownBuddha)({buddha_id:a}).then(function(t){if(1===t.code){i.flying=!0;var a=i;setTimeout(function(){a.into=!0,setTimeout(function(){console.log("开始没有"),a.$store.commit("choiceGod",i.gods[i.activeIndex]),a.into=!1,a.flying=!1,a.innerAudioContext.stop(),a.innerAudioContext=null,uni.navigateTo({url:"../pray/pray"})},4750)},1750)}i.ownBuddhaing=!1})}},buddhalist:function(){var t=this,i={1:{img:"".concat(this.$pathURL,"static/img/gods/rulai"),pname:"".concat(this.$pathURL,"static/img/gods/shijiamoni.png")},2:{img:"".concat(this.$pathURL,"static/img/gods/milefo"),pname:"".concat(this.$pathURL,"static/img/gods/milefo.png")},3:{img:"".concat(this.$pathURL,"static/img/gods/guanyin"),pname:"".concat(this.$pathURL,"static/img/gods/guanyin.png")},4:{img:"".concat(this.$pathURL,"static/img/gods/caishen"),pname:"".concat(this.$pathURL,"static/img/gods/wulucaishen.png")},5:{img:"".concat(this.$pathURL,"static/img/gods/yaoshifo"),pname:"".concat(this.$pathURL,"static/img/gods/yaoshifo.png")},6:{img:"".concat(this.$pathURL,"static/img/gods/guangong"),pname:"".concat(this.$pathURL,"static/img/gods/guangong.png")}};(0,c.buddhalist)().then(function(a){1===a.code?t.gods=a.data.map(function(t,a){for(var n in i)if(n==t.id){(0,s.default)(t,i[n]);break}return t}):t.$msg(a.msg)})},tStart:function(t){this.startPageX=t.touches[0].pageX},tMove:function(t){o&&clearTimeout(o);var i=this;o=setTimeout(function(){i.endPageX=t.touches[0].pageX},200)},calcuPos:function(){var t,i=uni.getSystemInfoSync(),a=i.windowWidth,n=6;t=a;for(var o=t/2,s=a/4,c=o-s,r=Math.PI/2,d=2*Math.PI/n,g=[],f=0;f<n;f++){r-=d;var l=(0,e.default)(o-s/2+c*Math.cos(r))+"px",u=(0,e.default)(o-s/2-c*Math.sin(r))+"px",m={left:l,top:u};g.push(m)}var h=g.splice(0,2);this.posXY=g.concat(h);for(var p=0;p<this.posXY.length;p++)this.$refs.god[p].$el.style.left=this.posXY[p].left,this.$refs.god[p].$el.style.top=this.posXY[p].top},translatePos:function(t){},clickGod:function(t){if(!this.flying){var i=this.gods.splice(0,t);this.gods=this.gods.concat(i)}}},watch:{endPageX:function(t){this.translatePos(this.startPageX-t)}}};i.default=r},c2ac:function(t,i,a){t.exports=a.p+"static/img/simiaofaguang.e0eb695a.png"},ee91:function(t,i,a){t.exports=a.p+"static/img/beijingtu.eb0d99c9.png"}}]);