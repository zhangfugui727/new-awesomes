webpackJsonp([14],{"5Vcd":function(t,e,o){var i=o("KXR0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("XkoO")("49285d19",i,!0)},EVpA:function(t,e,o){t.exports=o.p+"img/logo-50.30615fb.png"},JMzp:function(t,e,o){"use strict";var i=o("YFWx");e.a={data:function(){return{newTopic:{cover:null,title:"",con:"",typcd:"TOPIC"}}},methods:{submit:function(){var t=this;this.$confirm("确认写作完毕？提交后将交由管理审核！","发布确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)().post("topic",t.newTopic).then(function(t){t.data.status})}).catch(function(){})}}}},KS2q:function(t,e,o){"use strict";function i(t){o("5Vcd")}Object.defineProperty(e,"__esModule",{value:!0});var a=o("JMzp"),n=o("XXNc"),c=o("J0+h"),r=i,p=c(a.a,n.a,r,"data-v-7e830d31",null);e.default=p.exports},KXR0:function(t,e,o){e=t.exports=o("BkJT")(!1),e.push([t.i,".page-topic-new header[data-v-7e830d31]{display:none}.page-topic-new .topic-header[data-v-7e830d31]{z-index:2000;margin-bottom:0;position:fixed;width:100%;font-size:17.6px;font-size:1.1rem;font-weight:700;background-color:hsla(0,0%,100%,.97);border-bottom:1px solid #eee;top:0;padding:0 20px}.page-topic-new .topic-header .row[data-v-7e830d31]{height:70px}.page-topic-new .topic-header h3[data-v-7e830d31]{text-align:center}.page-topic-new .topic-header .logo[data-v-7e830d31]{width:30px;height:30px}.page-topic-new .topic-header .right[data-v-7e830d31]{text-align:right}.page-topic-new .container[data-v-7e830d31]{max-width:800px}.page-topic-new .tip[data-v-7e830d31]{margin-top:30px;padding:10px;background-color:rgba(247,186,42,.33);color:#af8934}.page-topic-new .title-txt[data-v-7e830d31]{font-weight:700;font-size:40px;border:0;outline:none;margin:20px 0}.page-topic-new .upload-cover[data-v-7e830d31]{height:180px;background-color:#f7f8f9;text-align:center;padding-top:70px;position:relative;margin-top:30px;background-repeat:no-repeat;background-size:cover;overflow:hidden;background-position:50%}.page-topic-new .upload-cover svg[data-v-7e830d31]{width:50px;height:50px;fill:#ddd}",""])},XXNc:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"topic-header"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col"},[i("nuxt-link",{attrs:{to:"/"}},[i("img",{staticClass:"logo",attrs:{src:o("EVpA")}})])],1),t._m(0),i("div",{staticClass:"col right"},[i("el-button",{staticClass:"send-btn",on:{click:t.submit}},[i("icon",{attrs:{name:"send"}}),i("span",[t._v("发布")])],1)],1)])]),i("div",{staticClass:"container"},[t._m(1),i("div",{staticClass:"upload-cover",style:t.newTopic.cover?"background-image:url("+t.cdn(t.newTopic.cover,"topic")+")":""},[i("icon",{attrs:{name:"camera"}}),i("upload",{attrs:{folder:"topic"},model:{value:t.newTopic.cover,callback:function(e){t.newTopic.cover=e},expression:"newTopic.cover"}})],1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTopic.title,expression:"newTopic.title"}],staticClass:"title-txt",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.newTopic.title},on:{input:function(e){e.target.composing||(t.newTopic.title=e.target.value)}}}),i("editor",{attrs:{flag:"demo",hideFooter:"true",hideBorder:"true"},model:{value:t.newTopic.con,callback:function(e){t.newTopic.con=e},expression:"newTopic.con"}})],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col"},[o("h3",[t._v("发布文章  ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tip"},[o("strong",[t._v("发布需知：")]),o("span",[t._v("文章主要内容必须围绕前端框架的用法、经验、新闻等方面去展开。本着对用户负责的态度，对于未达到质量要求的文章将不会审核通过！")])])}],n={render:i,staticRenderFns:a};e.a=n}});
//# sourceMappingURL=new.fa359d74f04bc49b11dc.js.map