webpackJsonp([39],{B1IQ:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div")},a=[],i={render:o,staticRenderFns:a};n.a=i},"Io/8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("koW6"),a=t("B1IQ"),i=t("J0+h"),r=i(o.a,a.a,null,null,null);n.default=r.exports},koW6:function(e,n,t){"use strict";(function(e){var o=t("YFWx"),a=t("Z7nP"),i=t.n(a);n.a={data:function(){return{mol:""}},created:function(){var n=this;e.BROWSER_BUILD&&(window.document.domain=window.location.hostname.replace(/^[A-Za-z]+\./,"")),Object(o.a)().post("auth/session",{token:this.$route.query.token}).then(function(e){i.a.set("awlogin",e.data.token,{domain:window.location.hostname.replace(/^[A-Za-z]+/,"")}),n.$store.commit("setUser",e.data.mem),window.opener.location.reload(),window.close()})}}}).call(n,t("V0EG"))}});
//# sourceMappingURL=auth.25ef2f711160b48abd89.js.map