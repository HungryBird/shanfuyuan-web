(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-choiceGod-choiceGod"],{"2a98":function(t,a,i){"use strict";i.r(a);var n=i("2e3d"),o=i("76ea");for(var e in o)"default"!==e&&function(t){i.d(a,t,function(){return o[t]})}(e);i("4f4b");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"304587bc",null,!1,n["a"],s);a["default"]=r.exports},"2e3d":function(t,a,i){"use strict";var n,o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content",on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.tStart.apply(void 0,arguments)},touchmove:function(a){arguments[0]=a=t.$handleEvent(a),t.tMove.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"gods"},t._l(t.gods,function(a,o){return n("v-uni-view",{key:a.url,ref:"god",refInFor:!0,staticClass:"god",class:{scaleImg:o===t.activeIndex,"go-down":o===t.activeIndex&&t.flying},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickGod(o)}}},[n("img",{attrs:{src:a.img+"_"+(o===t.activeIndex?"1.png":"0.png")}}),o!==t.activeIndex||t.flying?t._e():n("v-uni-view",{staticClass:"name-wrap"},[n("img",{attrs:{src:a.pname}})]),o===t.activeIndex?n("img",{staticClass:"light",attrs:{src:i("6c40")}}):t._e(),o!==t.activeIndex||t.flying?t._e():n("v-uni-button",{staticClass:"choice-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ownBuddha(o)}}},[t._v("确 定")])],1)}),1)],1),n("v-uni-view",{staticClass:"bottom"},[t.into?n("img",{staticClass:"light",attrs:{src:i("c2ac")}}):t._e(),n("v-uni-image",{staticClass:"temple",attrs:{src:"../../static/img/simiao.png",mode:"widthFix"}})],1)],1)},e=[];i.d(a,"b",function(){return o}),i.d(a,"c",function(){return e}),i.d(a,"a",function(){return n})},"3baa":function(t,a,i){"use strict";var n=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.ownBuddha=a.buddhalist=void 0;var o=n(i("6b56")),e=function(t){return o.default.http("/index/buddhalist","get",t)};a.buddhalist=e;var s=function(t){return o.default.http("/index/ownBuddha","get",t)};a.ownBuddha=s},"4f4b":function(t,a,i){"use strict";var n=i("9729"),o=i.n(n);o.a},"6b56":function(t,a,i){"use strict";var n=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,e=n(i("795b")),s=i("f46b");o="http://fo.nnzysp.com/api";var c=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3e4,c=(0,s.getUniStorageSync)("token");return(0,s.isEmpty)(c)||(n["token"]=c),new e.default(function(e,c){uni.request({url:"http://fo.nnzysp.com/api"+t,method:(0,s.getUpperCase)(a),header:n,data:i,timeout:o,success:function(t){if(t.data.code>=1e4)return(0,s.clearUniStorage)(),void uni.navigateTo({url:"/pages/login/login"});e(t.data)},fail:function(t){console.log("fail: ",t),c(t)}})})},r={baseURL:o,http:c};a.default=r},"6c40":function(t,a,i){t.exports=i.p+"static/img/xuanzhongbeiguang.5c621e78.png"},"76ea":function(t,a,i){"use strict";i.r(a);var n=i("b606"),o=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,function(){return n[t]})}(e);a["default"]=o.a},9729:function(t,a,i){var n=i("eb63");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3cb1c278",n,!0,{sourceMap:!1,shadowMode:!1})},b606:function(t,a,i){"use strict";var n=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,e=n(i("e814")),s=n(i("5176")),c=i("3baa"),r={data:function(){return{into:!1,flying:!1,ownBuddhaing:!1,startPageX:0,endPageX:0,activeIndex:0,gods:[{id:4,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/caishen"),pname:"".concat(this.$pathURL,"static/img/gods/wulucaishen.png")},{id:6,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/guangong"),pname:"".concat(this.$pathURL,"static/img/gods/guangong.png")},{id:3,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/guanyin"),pname:"".concat(this.$pathURL,"static/img/gods/guanyin.png")},{id:2,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/milefo"),pname:"".concat(this.$pathURL,"static/img/gods/milefo.png")},{id:1,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/rulai"),pname:"".concat(this.$pathURL,"static/img/gods/shijiamoni.png")},{id:5,is_own:0,img:"".concat(this.$pathURL,"static/img/gods/yaoshifo"),pname:"".concat(this.$pathURL,"static/img/gods/yaoshifo.png")}],posXY:[]}},onShow:function(){this.buddhalist()},mounted:function(){this.calcuPos()},methods:{ownBuddha:function(t){var a=this;if(!this.ownBuddhaing){this.ownBuddhaing=!0;var i=this.gods[this.activeIndex].id;this.$store.commit("choiceGod",this.gods[this.activeIndex]),(0,c.ownBuddha)({buddha_id:i}).then(function(t){if(1===t.code){a.flying=!0;var i=a;setTimeout(function(){i.into=!0,setTimeout(function(){i.$store.commit("choiceGod",a.gods[a.activeIndex]),uni.navigateTo({url:"../pray/pray"}),i.into=!1,i.flying=!1},3750)},1750)}a.ownBuddhaing=!1})}},buddhalist:function(){var t=this,a={1:{img:"".concat(this.$pathURL,"static/img/gods/rulai"),pname:"".concat(this.$pathURL,"static/img/gods/shijiamoni.png")},2:{img:"".concat(this.$pathURL,"static/img/gods/milefo"),pname:"".concat(this.$pathURL,"static/img/gods/milefo.png")},3:{img:"".concat(this.$pathURL,"static/img/gods/guanyin"),pname:"".concat(this.$pathURL,"static/img/gods/guanyin.png")},4:{img:"".concat(this.$pathURL,"static/img/gods/caishen"),pname:"".concat(this.$pathURL,"static/img/gods/wulucaishen.png")},5:{img:"".concat(this.$pathURL,"static/img/gods/yaoshifo"),pname:"".concat(this.$pathURL,"static/img/gods/yaoshifo.png")},6:{img:"".concat(this.$pathURL,"static/img/gods/guangong"),pname:"".concat(this.$pathURL,"static/img/gods/guangong.png")}};(0,c.buddhalist)().then(function(i){1===i.code?t.gods=i.data.map(function(t,i){for(var n in a)if(n==t.id){(0,s.default)(t,a[n]);break}return t}):t.$msg(i.msg)})},tStart:function(t){this.startPageX=t.touches[0].pageX},tMove:function(t){o&&clearTimeout(o);var a=this;o=setTimeout(function(){a.endPageX=t.touches[0].pageX},200)},calcuPos:function(){var t,a=uni.getSystemInfoSync(),i=a.windowWidth,n=6;t=i;for(var o=t/2,s=i/4,c=o-s,r=Math.PI/2,d=2*Math.PI/n,g=[],l=0;l<n;l++){r-=d;var u=(0,e.default)(o-s/2+c*Math.cos(r))+"px",f=(0,e.default)(o-s/2-c*Math.sin(r))+"px",m={left:u,top:f};g.push(m)}var h=g.splice(0,2);this.posXY=g.concat(h);for(var p=0;p<this.posXY.length;p++)this.$refs.god[p].$el.style.left=this.posXY[p].left,this.$refs.god[p].$el.style.top=this.posXY[p].top},translatePos:function(t){},clickGod:function(t){if(!this.flying){var a=this.gods.splice(0,t);this.gods=this.gods.concat(a)}}},watch:{endPageX:function(t){this.translatePos(this.startPageX-t)}}};a.default=r},c2ac:function(t,a,i){t.exports=i.p+"static/img/simiaofaguang.e0eb695a.png"},eb63:function(t,a,i){var n=i("b041");a=t.exports=i("2350")(!1),a.push([t.i,".choice-btn[data-v-304587bc]{position:absolute;left:50%;top:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:80%;z-index:99999;color:#fff;font-size:%?28?%;border-top-left-radius:%?60?%;border-top-right-radius:%?60?%;border-bottom-left-radius:%?60?%;border-bottom-right-radius:%?60?%;background-image:-webkit-linear-gradient(left,#eb7221,#e8ac5e);background-image:linear-gradient(90deg,#eb7221,#e8ac5e);font-family:customFont;line-height:2;font-size:%?28?%}.content[data-v-304587bc]{background:url("+n(i("ee91"))+");background-size:cover;background-repeat:no-repeat;position:relative}.go-down[data-v-304587bc]{position:fixed!important;left:50%!important;-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important;top:80%!important;-webkit-transition:all 1.75s!important;transition:all 1.75s!important;-webkit-animation:fade-data-v-304587bc .75s;animation:fade-data-v-304587bc .75s;-webkit-animation-delay:1.75s;animation-delay:1.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.top[data-v-304587bc]{position:absolute;top:-6%;left:0;width:100%}.top .gods[data-v-304587bc]{position:relative}.top .gods .god[data-v-304587bc]{position:absolute;width:25%}.top .gods .god uni-image[data-v-304587bc]:first-child{width:100%}.top .gods .god uni-image[data-v-304587bc]:nth-child(2){position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,40%);transform:translate(-50%,40%);width:100%;height:auto}.top .gods .god img[data-v-304587bc]{display:block;object-fit:cover}.top .gods .god img[data-v-304587bc]:first-child{width:100%}.top .gods .god .light[data-v-304587bc]{position:absolute;left:0;top:0;display:block;height:100%;width:100%;margin:0 auto;object-fit:cover;z-index:-1;-webkit-animation:scaleLight-big-data-v-304587bc 2s;animation:scaleLight-big-data-v-304587bc 2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.top .gods .god .name-wrap[data-v-304587bc]{position:absolute;left:50%;bottom:%?80?%;-webkit-transform:translate(-50%);transform:translate(-50%);width:100%;height:auto}.top .gods .god .name-wrap img[data-v-304587bc]{display:block;object-fit:cover;position:absolute;left:0;top:0;width:100%}.top .gods .scaleImg[data-v-304587bc]{-webkit-transform:scale(1.5);transform:scale(1.5);z-index:9999;-webkit-transition:all 1s;transition:all 1s}.bottom[data-v-304587bc]{position:fixed;bottom:0;left:0;right:0}.bottom .light[data-v-304587bc]{display:block;width:100%;margin:0 auto;object-fit:cover;-webkit-animation:scaleLight-small-data-v-304587bc 2s;animation:scaleLight-small-data-v-304587bc 2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.bottom .temple[data-v-304587bc]{position:absolute;bottom:0;left:0;width:100%}@-webkit-keyframes scaleLight-big-data-v-304587bc{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.6);transform:scale(1.6)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleLight-big-data-v-304587bc{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.6);transform:scale(1.6)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scaleLight-small-data-v-304587bc{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleLight-small-data-v-304587bc{0{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fade-data-v-304587bc{to{opacity:0}}@keyframes fade-data-v-304587bc{to{opacity:0}}",""])},ee91:function(t,a,i){t.exports=i.p+"static/img/beijingtu.c7462b01.png"}}]);