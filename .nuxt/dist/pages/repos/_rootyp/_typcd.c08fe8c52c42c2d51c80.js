webpackJsonp([8],{"0ubg":function(t,e,a){var i=a("tqt/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("XkoO")("0f0addd8",i,!0)},"1vKO":function(t,e,a){"use strict";function i(t){a("0ubg")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("YpzG"),r=a("7YlJ"),o=a("J0+h"),n=i,d=o(s.a,r.a,n,"data-v-f83dc99e",null);e.default=d.exports},"7YlJ":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"list-typs"},t._l(t.rootyps,function(e){return a("nuxt-link",{attrs:{to:"/repos/"+e.key}},[a("icon",{attrs:{name:e.icon,width:"16px"}},[t._v(t._s(e.sdesc))])],1)})),a("div",{staticClass:"list-typs bottom"},t._l(t.typcds,function(e){return a("nuxt-link",{staticClass:"submenu",attrs:{to:"/repos/"+t.rootyp+"/"+e.key}},[a("icon",{attrs:{name:e.icon,width:"14px"}},[t._v(t._s(e.sdesc))])],1)})),a("div",{staticClass:"sorts"},[a("div",{staticClass:"inner"},[a("nuxt-link",{class:"hot"==t.sortby?"active":"",attrs:{to:"?sort=hot"}},[t._v("热门")]),a("nuxt-link",{class:"new"==t.sortby?"active":"",attrs:{to:"?sort=new"}},[t._v("最新")]),a("nuxt-link",{class:"trend"==t.sortby?"active":"",attrs:{to:"?sort=trend"}},[t._v("趋势 ")])],1)]),a("div",{staticClass:"list-con"},[t._l(t.repos,function(e,i){return[a("div",{staticClass:"list-item"},[a("nuxt-link",{attrs:{to:"/repo/"+e.owner+"/"+e.alia}},[a("img",{staticClass:"cover",attrs:{src:t.cdn(e.cover,"repo","subject_repo")}})]),a("div",{staticClass:"middle"},[a("nuxt-link",{attrs:{to:"/repo/"+e.owner+"/"+e.alia}},[a("h3",[t._v(t._s(e.name))])]),a("p",[t._v(t._s(e.description_cn||e.description))]),a("div",{staticClass:"opers"},[a("a",{attrs:{href:"#",title:e.using+"人在用"}},[a("icon",{attrs:{name:"hand",width:"15px",scale:[-1,1]}},[t._v(t._s(e.using))])],1),a("a",{attrs:{href:"#",title:e.mark+"人喜欢"}},[a("icon",{attrs:{name:"heart-o",width:"15px"}},[t._v(t._s(e.mark))])],1)])],1),a("div",[a("fresh",{attrs:{time:e.pushed_at}})],1)],1)]}),a("pagination",{attrs:{flag:"repos-list",total:t.pagetotal,size:t.pagesize}})],2)])},s=[],r={render:i,staticRenderFns:s};e.a=r},UYQP:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".fresh[data-v-30e59c66]{display:inline-block;border-radius:100%;width:15px;height:15px;background-color:#eee;-ms-flex-negative:0;flex-shrink:0}.fresh.often[data-v-30e59c66]{background-color:#a4eda4}.fresh.outdated[data-v-30e59c66]{background-color:#ffbcbc}",""])},VB2n:function(t,e,a){"use strict";e.a={props:["time"],methods:{format:function(t){var e=(Date.parse(new Date)-Date.parse(new Date(t)))/1e3/60/60/24;return e<=20?"often":e<=210?"":"outdated"}}}},YpzG:function(t,e,a){"use strict";var i=a("YFWx"),s=a("g2WY"),r={};e.a={name:"repo-list",data:function(){return{pagesize:15,sortby:"hot"}},asyncData:function(t){var e=(t.req,t.params),a=t.query;return Object(i.a)().get("category/first").then(function(t){return r.rootyps=t.data,r.rootyp=e.rootyp,Object(i.a)().get("category/"+e.rootyp+"/second")}).then(function(t){r.typcds=t.data;var s=a.page||1;return Object(i.a)().get("repo",{params:{rootyp:e.rootyp,typcd:e.typcd,limit:15,skip:15*(s-1),sort:a.sort,page:s}})}).then(function(t){return r.repos=t.data.items,r.pagetotal=t.data.count,r.sortby=a.sort||"hot",r})},head:function(){return{title:"前端库",meta:[{hid:"description",name:"description",content:"Web前端开发工程师需要的免费开源的高质量前端库、框架和插件"}]}},components:{Fresh:s.a},watch:{$route:function(){}}}},g2WY:function(t,e,a){"use strict";function i(t){a("goXt")}var s=a("VB2n"),r=a("zHzG"),o=a("J0+h"),n=i,d=o(s.a,r.a,n,"data-v-30e59c66",null);e.a=d.exports},goXt:function(t,e,a){var i=a("UYQP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("XkoO")("3fa010f2",i,!0)},"tqt/":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,'.container[data-v-f83dc99e]{max-width:1000px;padding-top:10px;padding-bottom:100px}.list-typs[data-v-f83dc99e]{text-align:center;padding:5px 0}.list-typs a[data-v-f83dc99e]{display:inline-block;margin:15px}.list-typs a.submenu[data-v-f83dc99e]:link,.list-typs a.submenu[data-v-f83dc99e]:visited{color:#979797}.list-typs a.submenu:link.nuxt-link-active[data-v-f83dc99e],.list-typs a.submenu:visited.nuxt-link-active[data-v-f83dc99e]{color:#da552f}.list-typs a.nuxt-link-active[data-v-f83dc99e]{color:#da552f;font-weight:700}.list-typs svg[data-v-f83dc99e]{width:17px;height:17px;margin-right:5px;float:left}.list-typs.bottom[data-v-f83dc99e]{border-bottom:1px solid #eee;padding-bottom:30px}.list-item[data-v-f83dc99e]{padding:20px 0;position:relative;min-height:130px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.list-item h3[data-v-f83dc99e]{font-weight:600;font-size:21px;margin-top:1px;margin-bottom:5px}.list-item p[data-v-f83dc99e]{color:#666;overflow:hidden}.list-item .cover[data-v-f83dc99e]{height:90px;border-radius:3px;margin-right:15px;left:20px;-webkit-transition:all,.5s,ease,0s;transition:all,.5s,ease,0s}.list-item .cover[data-v-f83dc99e]:hover{-webkit-filter:hue-rotate(40deg);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="40" /></filter></svg>#filter\');filter:hue-rotate(40deg)}.list-item .middle[data-v-f83dc99e]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.opers a[data-v-f83dc99e]{display:inline-block;border:1px solid #eee;border:1px solid rgba(1,47,98,.07);font-size:10px;color:rgba(0,39,82,.39);padding:5px 10px;border-radius:2px;text-decoration:none;line-height:15px;margin-right:10px}.sorts[data-v-f83dc99e]{margin-top:-20px;text-align:center}.sorts .inner[data-v-f83dc99e]{display:inline-block;background-color:#fff;padding:0 15px}.sorts a[data-v-f83dc99e]{display:inline-block;margin:10px}.sorts a.active[data-v-f83dc99e]{color:#da552f}',""])},zHzG:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"fresh",class:t.format(t.time),attrs:{title:"更新于"+t.timeago(t.time)}})},s=[],r={render:i,staticRenderFns:s};e.a=r}});
//# sourceMappingURL=_typcd.c08fe8c52c42c2d51c80.js.map