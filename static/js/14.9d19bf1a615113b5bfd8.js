webpackJsonp([14],{"3XhP":function(t,i){},"80lT":function(t,i,s){t.exports=s.p+"static/img/pic-25.6ea4aa0.png"},BPAi:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={name:"message",components:{headBar:s("cNyQ").a},data:function(){return{headData:{text:"Notifications",src:s("YKA3")},tab:[{title:"邀请计划",on:!0,list:[{via:s("80lT"),title:'李慧琪接受了您的邀请 参加"腹部训练"',time:"2020-2-20"},{via:s("80lT"),title:'翠花接受了您的邀请 参加"腹部训练"',time:"2020-2-20"}]},{title:"锻炼",on:!1,list:[]},{title:"营养",on:!1,list:[]}],notifications:[]}},created:function(){this.notifications=this.tab[0].list},mounted:function(){this.init()},methods:{init:function(){},changeTab:function(t){this.tab.map(function(t){t.on=!1}),this.tab[t].on=!0,this.notifications=this.tab[t].list}}},e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"pt88"},[s("head-bar",{attrs:{head:t.headData}}),t._v(" "),s("div",{staticClass:"heados"},[s("div",{staticClass:"tab dflex-between shadow"},t._l(t.tab,function(i,a){return s("div",{key:a,staticClass:"tab-item",class:{active:i.on},on:{click:function(i){return t.changeTab(a)}}},[t._v(t._s(i.title))])}),0),t._v(" "),s("div",{staticClass:"list"},[t._l(t.notifications,function(i,a){return s("div",{key:a,staticClass:"list-item shadow"},[s("div",{staticClass:"list-item-via"},[s("img",{attrs:{src:i.via}})]),t._v(" "),s("div",{staticClass:"list-item-cont"},[s("div",{staticClass:"list-item-text"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"list-item-time"},[t._v(t._s(i.time))])])])}),t._v(" "),0==t.notifications.length?s("div",{staticClass:"list-empty"},[t._v("empty")]):t._e()],2)])],1)},staticRenderFns:[]};var n=s("VU/8")(a,e,!1,function(t){s("3XhP")},"data-v-6bd746a8",null);i.default=n.exports}});
//# sourceMappingURL=14.9d19bf1a615113b5bfd8.js.map