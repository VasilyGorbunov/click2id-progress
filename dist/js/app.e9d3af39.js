(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2013:function(t,e,r){},"3ca5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-toolbar-title",[t._v("Click2ID")])],1),r("v-main",[r("v-container",[r("div",{staticClass:"wrap"},[t.show_start_panel?r("start-panel",{on:{onStartProcess:function(e){return t.onStartProcess(e)}}}):r("process-panel",{attrs:{pid:t.pid,proc:t.proc},on:{onNewProcess:t.newProcess}})],1)])],1)],1)},a=[],o=(r("96cf"),r("1da1")),c=r("bc3a"),i=r.n(c),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"start-process"},[r("h1",{staticClass:"display-2"},[t._v("Запуск процесса")]),r("v-text-field",{staticClass:"mt-5",attrs:{label:"Количество итераций",type:"number",required:"",outlined:"",rules:t.iterationRules},model:{value:t.iter_count,callback:function(e){t.iter_count=e},expression:"iter_count"}}),r("p",[t._v("Предположительное время обработки (сек)")]),r("p",{staticClass:"display-3"},[t._v(t._s(2*t.iter_count))]),r("v-btn",{attrs:{color:"primary"},on:{click:t.startProcess}},[t._v(" Запуск ")])],1)},p=[],l={name:"StartPanel",data:function(){return{iter_count:10,iterationRules:[function(t){return/^\d*\d$/.test(t)||"Положительноe целое число"}]}},methods:{startProcess:function(){var t={user_id:1,input_data:{count:this.iter_count},process_name:"test"};this.$emit("onStartProcess",t)}}},d=l,f=(r("60aa"),r("2877")),v=r("6544"),_=r.n(v),h=r("8336"),b=r("8654"),m=Object(f["a"])(d,u,p,!1,null,"f49be022",null),y=m.exports;_()(m,{VBtn:h["a"],VTextField:b["a"]});var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"show-process"},[r("h1",{staticClass:"display-1"},[t._v("Процесс ["+t._s(t.pid)+"]")]),r("div",{staticClass:"progress mt-3"},[r("v-progress-linear",{attrs:{height:"18",rounded:"",striped:"",color:t.color,value:t.percent}})],1),r("v-card",{staticClass:"mt-3"},[r("v-card-text",[r("p",[t._v("Статус процесса: "),r("span",{staticClass:"body"},[t._v(t._s(t.proсess_status?t.proсess_status.title:""))])]),r("p",{staticClass:"text--secondary"},[t._v(t._s(t.proсess_status?t.proсess_status.description:""))]),r("p",[t._v("Обработано операций "+t._s(t.proc.done)+" из "+t._s(t.proc.total)+" ")])]),r("v-card-actions",[t.proc.status>1?r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$emit("onNewProcess")}}},[t._v(" Новый процесс ")]):t._e()],1)],1)],1)},P=[],g=(r("a9e3"),{name:"ProcessPanel",props:{pid:{type:Number,required:!0},proc:{type:Object,required:!0}},computed:{color:function(){return this.proc.status<2?"primary":2===this.proc.status?"success":"error"},percent:function(){return this.proc.done/this.proc.total*100},"proсess_status":function(){switch(this.proc.status){case 0:return{title:"НОВЫЙ",description:"Обработка процесса не запущена"};case 1:return{title:"ОБРАБАТЫВАЕТСЯ",description:"Выполняется обработка процесса"};case 2:return{title:"ОБРАБОТАНО УСПЕШНО",description:"Процесс обработался без ошибок"};case 3:return{title:"ОБРАБОТАНО С ОШИБКАМИ",description:"Процесс обработался до конца, но с ошибками"};case 5:return{title:"ОШИБКА",description:"В процессе обработки процесса возникла критическая ошибка"};default:return{title:"НОВЫЙ",description:"Обработка процесса не запущена"}}}}}),x=g,O=(r("c20e"),r("b0af")),C=r("99d9"),j=r("8e36"),k=Object(f["a"])(x,w,P,!1,null,"718b4232",null),V=k.exports;_()(k,{VBtn:h["a"],VCard:O["a"],VCardActions:C["a"],VCardText:C["b"],VProgressLinear:j["a"]});var S={name:"App",components:{ProcessPanel:V,StartPanel:y},data:function(){return{show_start_panel:!0,pid:0,proc:{}}},methods:{newProcess:function(){this.proc={},this.show_start_panel=!0},onStartProcess:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.a.post("http://test.click2id.ru/api/process-indicator/create-task",t);case 2:if(n=r.sent.data,0===n.status){r.next=5;break}return r.abrupt("return");case 5:e.show_start_panel=!1,e.pid=n.process_id,s=setInterval(Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("http://test.click2id.ru/api/process-indicator/get-status/".concat(e.pid));case 2:r=t.sent.data,e.proc={status:r.status,done:r.process_done,total:r.process_total},e.proc.status>1&&clearInterval(s);case 5:case"end":return t.stop()}}),t)}))),1e3);case 8:case"end":return r.stop()}}),r)})))()}}},T=S,$=(r("9626"),r("7496")),R=r("40dc"),M=r("a523"),A=r("f6c4"),q=r("2a7f"),B=Object(f["a"])(T,s,a,!1,null,"75f5b828",null),E=B.exports;_()(B,{VApp:$["a"],VAppBar:R["a"],VContainer:M["a"],VMain:A["a"],VToolbarTitle:q["a"]});var I=r("f309");n["a"].use(I["a"]);var N=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:N,render:function(t){return t(E)}}).$mount("#app")},"60aa":function(t,e,r){"use strict";var n=r("3ca5"),s=r.n(n);s.a},"658d":function(t,e,r){},9626:function(t,e,r){"use strict";var n=r("658d"),s=r.n(n);s.a},c20e:function(t,e,r){"use strict";var n=r("2013"),s=r.n(n);s.a}});
//# sourceMappingURL=app.e9d3af39.js.map