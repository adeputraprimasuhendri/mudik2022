(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(62),{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,data:function(){return{data:[]}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("nomor.json");case 2:n=e.sent,t.data=n.data;case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"m-10"},[n("div",{staticClass:"sm:flex sm:flex-col sm:align-center"},[n("h1",{staticClass:"text-5xl font-extrabold text-gray-900 sm:text-center"},[t._v("\n        "+t._s(t.data.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-5 text-xl text-gray-500 sm:text-center"},[t._v("\n        Sumber Data : "+t._s(t.data.source)+"\n      ")])]),t._v(" "),n("dl",{staticClass:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},t._l(t.data.data,(function(e){return n("a",{staticClass:"\n          relative\n          bg-white\n          pt-5\n          px-4\n          pb-12\n          sm:pt-6 sm:px-6\n          shadow\n          rounded-lg\n          overflow-hidden\n        ",attrs:{href:"tel:"+e.phone}},[n("dt",[n("div",{staticClass:"absolute rounded-md p-1"},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})])])]),t._v(" "),n("dd",{staticClass:"ml-16 pb-6 flex items-baseline sm:pb-7"},[n("p",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(e.phone))]),t._v(" "),n("div",{staticClass:"absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"},[n("div",{staticClass:"text-sm"},[n("a",{staticClass:"font-medium",attrs:{href:"#"}},[t._v(t._s(e.name))])])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);