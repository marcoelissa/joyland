(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["galleries"],{"12b1":function(t,e,a){"use strict";a("6228")},"5cdc":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"galleries"}},[a("div",{staticClass:"galleries"},t._l(t.galleries,(function(e,l){return a("div",{key:l,staticClass:"gallery"},[a("router-link",{attrs:{to:{name:"Gallery",params:{slug:e.slug}}}},[a("div",{staticClass:"gallery__mask"},[e.thumbnail?a("div",{staticClass:"gallery__thumbnail",style:{backgroundImage:"url("+e.thumbnail+")"}}):t._e(),a("div",{staticClass:"gallery__content"},[a("h1",{staticClass:"text-center",domProps:{innerHTML:t._s(e.title)}})])])])],1)})),0)])},s=[],i=(a("d3b7"),{name:"Galleries",data:function(){return{loading:!0,galleries:[]}},created:function(){this.setPageTitle("Gallery"),this.getGalleries()},methods:{getGalleries:function(){var t=this;this.loading=!0,this.appAxios({method:"get",url:"".concat(this.app.rest.wp,"/galleries"),params:{app:!0,per_page:9,offset:0}}).then((function(e){t.galleries=e.data})).catch((function(t){console.log(t.response)})).finally((function(){t.loading=!1}))}}}),n=i,r=(a("12b1"),a("2877")),c=Object(r["a"])(n,l,s,!1,null,"540bc8b3",null);e["default"]=c.exports},6228:function(t,e,a){}}]);
//# sourceMappingURL=galleries.0.1.7.js.map