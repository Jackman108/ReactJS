"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[254],{5254:function(s,e,a){a.r(e),a.d(e,{default:function(){return _}});var n=a(2807),i=(a(2791),{dialogs:"Dialogs_dialogs__BlFO6",dialogsItems:"Dialogs_dialogsItems__AWpUc"}),d=a(1523),o=a(184),r=function(s){var e="/dialogs/"+s.id;return(0,o.jsx)("div",{className:i.dialogs+" "+i.active,children:(0,o.jsx)(d.OL,{to:e,children:s.name})})},l=function(s){return(0,o.jsx)("div",{className:i.dialogs,children:s.message})},t=a(9271),c=a(6139),u=a(704),g=a(9086),m=a(5304),f=(0,m.D)(50),h=(0,u.Z)({form:"dialog-add-message-form"})((function(s){return(0,o.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.Z,{component:g.gx,validate:[m.C,f],placeholder:"Enter your message",name:"newMessageBody"})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Send"})})]})})),j=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return(0,o.jsx)(r,{name:s.name,id:s.id},s.id)})),n=e.messages.map((function(s){return(0,o.jsx)(l,{message:s.message},s.id)}));return s.isAuth?(0,o.jsxs)("div",{className:i.dialogs,children:[(0,o.jsx)("div",{className:i.dialogsItems,children:a}),(0,o.jsxs)("div",{className:i.messages,children:[(0,o.jsx)("div",{children:n}),(0,o.jsx)(h,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]}):(0,o.jsx)(t.l_,{to:"/login"})},x=a(364),v=a(1548),_=(0,a(7781).qC)((0,x.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,n.X)(e))}}})),v.D)(j)}}]);
//# sourceMappingURL=254.c5cbbb79.chunk.js.map