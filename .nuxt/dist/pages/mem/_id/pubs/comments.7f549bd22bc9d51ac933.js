webpackJsonp([26],{"6PsF":function(t,e,a){var s=a("htBo");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("68519e56",s,!0)},GFWO:function(t,e,a){"use strict";var s=a("YFWx");e.a={data:function(){return{pagetotal:0,pagesize:10}},asyncData:function(t){var e=t.req,a=(t.params,t.query),i=t.route,n=a.page||1;return Object(s.a)(e).get("comment",{params:{mem_id:i.params.id,limit:10,skip:10*(n-1),order:"id desc"}}).then(function(t){return{comments:t.data.items,pagetotal:t.data.count}})},computed:{session:function(){return this.$store.state.session||{}}},methods:{processAt:function(t){return t.replace(/@([^:：?\s@]+)/g,'<a href="#" class="ata">@$1</a>')}},created:function(){}}},JueZ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.comments.length>0?[a("div",{staticClass:"comments"},t._l(t.comments,function(e){return a("div",{staticClass:"com-item"},[a("div",{staticClass:"up"},[a("icon",{attrs:{name:"arrow-up"}},[t._v(t._s(e.favor))])],1),a("div",{staticClass:"right"},[a("article",{domProps:{innerHTML:t._s(t.processAt(t.marked(e.con)))}}),a("span",{staticClass:"time"},[t._v(t._s(t.timeago(e.created_at)))])])])})),a("pagination",{attrs:{flag:"comments-list",total:t.pagetotal,size:t.pagesize}})]:[a("h2",{staticClass:"noitem"},[t._v("尚未发布评论")])]],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},htBo:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".comments[data-v-e4962522]{padding:10px 20px}.com-item[data-v-e4962522]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:30px}.com-item .right[data-v-e4962522]{padding-left:20px}.up[data-v-e4962522]{background-color:hsla(0,0%,95%,.8);color:#909090;padding:3.2px;padding:.2rem;padding-right:8px;padding-right:.5rem;border-radius:2px;height:30px}.noitem[data-v-e4962522]{padding:80px 0;text-align:center;color:#ddd}",""])},l4Lp:function(t,e,a){"use strict";function s(t){a("6PsF")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("GFWO"),n=a("JueZ"),r=a("46Yf"),o=s,c=r(i.a,n.a,!1,o,"data-v-e4962522",null);e.default=c.exports}});
//# sourceMappingURL=comments.7f549bd22bc9d51ac933.js.map