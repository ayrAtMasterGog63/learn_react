(this["webpackJsonpreact-easy"]=this["webpackJsonpreact-easy"]||[]).push([[6],{222:function(e,t,n){e.exports={create:"CreatePost_create__kaLHl",content:"CreatePost_content__1Othh",error:"CreatePost_error__1L6ua",button:"CreatePost_button__1YmJ5",errorSpan:"CreatePost_errorSpan__BTLrF"}},223:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return d}));n(27);var a=n(3),s=n(227),c=(n(0),n(222)),r=n.n(c),i=(n(104),n(2)),o=["input","child"],u=["input","child"],l=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,s=e.children;return Object(i.jsxs)("div",{children:[s,n&&a?Object(i.jsx)("p",{className:r.a.errorSpan,children:a}):null]})},b=function(e){var t=e.input,n=(e.child,Object(s.a)(e,o));return Object(i.jsx)(l,Object(a.a)(Object(a.a)({},n),{},{children:Object(i.jsx)("textarea",Object(a.a)(Object(a.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.child,Object(s.a)(e,u));return Object(i.jsx)(l,Object(a.a)(Object(a.a)({},n),{},{children:Object(i.jsx)("input",Object(a.a)(Object(a.a)({},t),n))}))}},225:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var a=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length can be only ".concat(e," symbols")}}},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(3),s=n(34),c=n(35),r=n(37),i=n(36),o=n(7),u=n(0),l=n.n(u),b=n(24),d=n(2),j=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){Object(r.a)(u,t);var n=Object(i.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(a.a)({},this.props)):Object(d.jsx)(o.a,{to:"/login"})}}]),u}(l.a.Component);return Object(b.b)(j)(t)}},229:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__6QiwF",dialogItems:"Dialogs_dialogItems__3P5IH",dialog:"Dialogs_dialog__1o0cE",active:"Dialogs_active__bXMHa",messages:"Dialogs_messages__3vaAx",message:"Dialogs_message__YMuZy",send:"Dialogs_send__3QwYz",content:"Dialogs_content__xUpI3",button:"Dialogs_button__PH3Vi"}},300:function(e,t,n){"use strict";n.r(t);n(0);var a=n(72),s=n(229),c=n.n(s),r=n(7),i=n(104),o=n(105),u=n(223),l=n(225),b=n(2),d=Object(l.a)(100),j=Object(o.a)({form:"dialogMessage"})((function(e){return Object(b.jsx)("form",{name:"message",onSubmit:e.handleSubmit,children:Object(b.jsxs)("div",{className:c.a.send,children:[Object(b.jsx)(i.a,{component:u.b,validate:[l.b,d],name:"message",placeholder:"Type here",className:c.a.content}),Object(b.jsx)("button",{className:c.a.button,children:"Send"})]})})})),g=function(e){var t=e.dialogs,n=e.messages;return e.isAuth?Object(b.jsxs)("div",{className:c.a.dialogs,children:[Object(b.jsx)("div",{className:c.a.dialogItems,children:t}),Object(b.jsxs)("div",{className:c.a.messages,children:[n,Object(b.jsx)(j,{onSubmit:function(t){e.sendMessage(t.message)}})]})]}):Object(b.jsx)(r.a,{to:"/login"})},m=n(24),O=n(15),_=function(e){var t="/dialogs/"+e.person.id;return Object(b.jsx)("div",{className:c.a.dialog,children:Object(b.jsx)(O.b,{className:c.a.dialog,to:t,activeClassName:c.a.active,children:e.person.name})})},h=function(e){return Object(b.jsx)("div",{className:c.a.message,children:e.message.id+"   "+e.message.text})},f=n(226),p=n(23);t.default=Object(p.d)(Object(m.b)((function(e){return{dialogs:e.dialogsPage.dialogs.map((function(e){return Object(b.jsx)(_,{person:e})})),messages:e.dialogsPage.messages.map((function(e){return Object(b.jsx)(h,{message:e})})),newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(t){return e(Object(a.b)(t))}}})),f.a)(g)}}]);
//# sourceMappingURL=6.acea7593.chunk.js.map