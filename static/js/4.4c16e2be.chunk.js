(this["webpackJsonpreact-easy"]=this["webpackJsonpreact-easy"]||[]).push([[4],{222:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var s=n(27),a=n(3),r=n(224),c=(n(0),n(223)),i=n.n(c),o=n(104),u=n(2),l=["input","child"],j=["input","child"],b=function(t){t.input;var e=t.meta,n=e.touched,s=e.error,a=t.children;return Object(u.jsxs)("div",{children:[a,n&&s?Object(u.jsx)("p",{className:i.a.errorSpan,children:s}):null]})},d=function(t){var e=t.input,n=(t.child,Object(r.a)(t,l));return Object(u.jsx)(b,Object(a.a)(Object(a.a)({},n),{},{children:Object(u.jsx)("textarea",Object(a.a)(Object(a.a)({},e),n))}))},p=function(t){var e=t.input,n=(t.child,Object(r.a)(t,j));return Object(u.jsx)(b,Object(a.a)(Object(a.a)({},n),{},{children:Object(u.jsx)("input",Object(a.a)(Object(a.a)({},e),n))}))},h=function(t,e,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(u.jsx)("div",{children:Object(u.jsx)(o.a,Object(a.a)({placeholder:t,name:e,validate:Object(s.a)(n),component:r},c))})}},223:function(t,e,n){t.exports={create:"CreatePost_create__kaLHl",content:"CreatePost_content__1Othh",error:"CreatePost_error__1L6ua",button:"CreatePost_button__1YmJ5",errorSpan:"CreatePost_errorSpan__BTLrF"}},226:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var s=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e.length>t)return"Max length can be only ".concat(t," symbols")}}},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var s=n(3),a=n(35),r=n(36),c=n(38),i=n(37),o=n(7),u=n(0),l=n.n(u),j=n(24),b=n(2),d=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var e=function(e){Object(c.a)(u,e);var n=Object(i.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(s.a)({},this.props)):Object(b.jsx)(o.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(d)(e)}},234:function(t,e,n){t.exports={presentation:"Presentation_presentation__2XVyv",imageField:"Presentation_imageField__1dxWT",info:"Presentation_info__1yekG",avatar:"Presentation_avatar__23wDA",input:"Presentation_input__6jcHC",inputHover:"Presentation_inputHover__1VM4E",contact:"Presentation_contact__9641h"}},235:function(t,e,n){t.exports={post:"Login_post__p8koB",login:"Login_login__DNn18",password:"Login_password__3minB",checkboxDiv:"Login_checkboxDiv__tF5uj",checkbox:"Login_checkbox__tCJv_",submit:"Login_submit__3hkxR",error:"Login_error__1IICq"}},293:function(t,e,n){t.exports={info:"ProfileStatus_info__1r4a8",name:"ProfileStatus_name__22Vib",input:"ProfileStatus_input__HqJ2N",about:"ProfileStatus_about__29BEm",contact:"ProfileStatus_contact___poqz"}},294:function(t,e,n){t.exports={post:"Post_post__3BH9M",likes:"Post_likes__2xKvo",avatar:"Post_avatar__3Y-Xs"}},295:function(t,e,n){t.exports={posts:"MyPosts_posts__1Iqi4"}},298:function(t,e,n){"use strict";n.r(e);var s=n(3),a=n(35),r=n(36),c=n(38),i=n(37);var o=n(63);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,a=!1,r=void 0;try{for(var c,i=t[Symbol.iterator]();!(s=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);s=!0);}catch(o){a=!0,r=o}finally{try{s||null==i.return||i.return()}finally{if(a)throw r}}return n}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(234),j=n.n(l),b=n(46),d=n(224),p=n(293),h=n.n(p),f=n(0),O=n.n(f),x=n(2),v=["profile"],m=function(t){var e=t.profile,n=Object(d.a)(t,v),s=u(Object(f.useState)(!1),2),a=s[0],r=s[1],c=u(Object(f.useState)(n.status),2),i=c[0],o=c[1];Object(f.useEffect)((function(){return o(n.status)}),[n.status]);return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:h.a.info,children:[Object(x.jsx)("div",{className:h.a.name,children:Object(x.jsx)("h2",{children:e.fullName})}),!a&&Object(x.jsx)("div",{className:h.a.about,children:Object(x.jsx)("p",{onDoubleClick:function(){r(!0)},children:n.status||"................"})}),a&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:h.a.input,autoFocus:!0,onChange:function(t){o(t.currentTarget.value)},onBlur:function(){r(!1),n.updateStatus(i)},value:i})})]})})},_=n.p+"static/media/camera.d25775ca.svg",g=function(){return Object(x.jsx)("img",{className:j.a.inputHover,src:_,alt:"Update Photo"})},P=n(235),S=n.n(P),k=n(222),N=n(105),y=Object(N.a)({form:"profileEdit"})((function(t){var e=t.handleSubmit,n=t.profile,s=t.error;return Object(x.jsxs)("form",{onSubmit:e,children:[Object(x.jsx)("div",{children:Object(x.jsx)("button",{children:"Save"})}),s&&Object(x.jsx)("div",{className:S.a.error,children:s}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("b",{children:"Full name:"})," ",Object(k.a)("Full name","fullName",[],k.b)]}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("b",{children:"Looking for a job:"})," ",Object(k.a)("","lookingForAJob",[],k.b,{type:"checkbox"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Professional Skills:"})," ",Object(k.a)("Skills","lookingForAJobDescription",[],k.c)]}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("b",{children:"About Me:"})," ",Object(k.a)("About Me","aboutMe",[],k.c)]}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("h3",{children:"Contacts:"})," ",Object.keys(n.contacts).map((function(t){return Object(x.jsx)("div",{className:j.a.contact,children:Object(x.jsxs)("h5",{children:[t,": ",Object(k.a)("Contact","contacts.".concat(t),[],k.b)]})},t)}))]})]})})),w=function(t){var e=t.profile,n=t.isOwner,s=t.activateEditMode;return Object(x.jsxs)("div",{children:[n&&Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:s,children:"Edit"})}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("b",{children:"Looking for a job:"})," ",e.lookingForAJob?"YES":"NO"]}),e.lookingForAJob&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Professional Skills:"})," ",e.lookingForAJobDescription?"YES":"NO"]}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("b",{children:"About Me:"})," ",e.aboutMe]}),Object(x.jsxs)("div",{className:j.a.about,children:[Object(x.jsx)("h3",{children:"Contacts:"})," ",Object.keys(e.contacts).map((function(t){return Object(x.jsx)(C,{title:t,value:e.contacts[t]})}))]})]})},C=function(t){var e=t.title,n=t.value;return Object(x.jsx)("div",{className:j.a.contact,children:Object(x.jsxs)("h5",{children:[e,": ",Object(x.jsx)("a",{href:"https://".concat(n),children:n})]})})},I=function(t){var e=t.profile,n=t.status,s=t.updateStatus,a=t.isOwner,r=t.saveImage,c=t.saveProfile,i=u(Object(f.useState)(!1),2),o=i[0],l=i[1];if(!e)return Object(x.jsx)(b.a,{});return Object(x.jsxs)("div",{className:j.a.presentation,children:[Object(x.jsxs)("div",{className:j.a.imageField,children:[Object(x.jsx)("img",{className:j.a.avatar,src:e.photos.large||"https://www.enduresc.com.au/wordpress/wp-content/uploads/2018/05/user-profile.jpg",alt:"llll"}),a&&Object(x.jsx)(g,{}),a&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:j.a.input,type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}})})]}),Object(x.jsxs)("div",{className:j.a.info,children:[Object(x.jsx)(m,{profile:e,status:n,updateStatus:s}),o?Object(x.jsx)(y,{initialValues:e,profile:e,onSubmit:function(t){c(t),l(!1)}}):Object(x.jsx)(w,{profile:e,isOwner:a,activateEditMode:function(){l(!0)}})]})]})},A=n(27),F=n(294),L=n.n(F),M=function(t){return Object(x.jsxs)("div",{className:L.a.post,children:[Object(x.jsx)("img",{className:L.a.avatar,src:"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",alt:"ava"}),t.post.text,Object(x.jsxs)("span",{className:L.a.likes,children:["Likes: ",t.post.likesCount]})]})},E=n(295),J=n.n(E),D=function(t){var e=t.posts;return Object(x.jsxs)("div",{className:J.a.posts,children:[Object(x.jsx)("h3",{children:"My posts"}),e]})},H=n(24),T=Object(H.b)((function(t){return{posts:Object(A.a)(t.profilePage.posts).reverse().map((function(t){return Object(x.jsx)(M,{post:t})}))}}))(D),B=n(58),q=n(223),U=n.n(q),V=n(104),Y=n(226),z=Object(Y.a)(80),X=Object(N.a)({form:"post"})((function(t){return Object(x.jsxs)("form",{name:"post",onSubmit:t.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"New post"}),Object(x.jsx)(V.a,{component:k.c,validate:[Y.b,z],placeholder:"Type here",name:"text",className:U.a.content})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:U.a.button,children:"Create"})})]})})),G=function(t){return Object(x.jsx)("div",{className:U.a.create,children:Object(x.jsx)(X,{onSubmit:function(e){t.addPost(e.text)}})})},K=Object(H.b)((function(t){return{newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){return t(Object(B.a)(e))}}}))(G),R=function(t){return Object(x.jsxs)("section",{children:[Object(x.jsx)(I,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveImage:t.saveImage,saveProfile:t.saveProfile}),Object(x.jsx)(K,{}),Object(x.jsx)(T,{})]})},W=n(7),Q=n(227),Z=n(23),$=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,n){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(x.jsx)(R,Object(s.a)(Object(s.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,staus:this.props.status,updateStatus:this.props.updateStatus,saveImage:this.props.saveImage}))}}]),n}(O.a.Component);e.default=Object(Z.d)(W.g,Q.a,Object(H.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:B.c,getStatus:B.d,updateStatus:B.g,saveImage:B.e,saveProfile:B.f}))($)}}]);
//# sourceMappingURL=4.4c16e2be.chunk.js.map