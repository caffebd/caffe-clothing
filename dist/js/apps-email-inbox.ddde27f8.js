(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-email-inbox"],{a24f:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("email-list",{attrs:{"is-loading":e.isLoading,emails:e.inbox,labels:e.labels},on:{refresh:e.onRefresh}})},n=[],s=(a("ac1f"),a("5319"),a("5530")),o=a("2f62"),l=a("681c"),c={components:{EmailList:l["a"]},computed:Object(s["a"])({},Object(o["e"])("email-app",["inbox","isLoading","labels"])),watch:{"$route.hash":function(e){this.getEmails()}},mounted:function(){this.getEmails()},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("email-app",["getInbox"])),{},{onRefresh:function(){this.getEmails()},getEmails:function(){var e=this.$route.hash,t=e?e.replace("#",""):"";this.getInbox(t)}})},b=c,r=a("2877"),u=Object(r["a"])(b,i,n,!1,null,null,null);t["default"]=u.exports}}]);