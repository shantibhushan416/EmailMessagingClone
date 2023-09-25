"use strict";(self.webpackChunkgfrontend=self.webpackChunkgfrontend||[]).push([[467],{9467:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var i=n(9439),r=n(7689),a=n(5372),o=n(4373),l=n(3433),c=n(650),d=n(4554),s=n(890),u=n(4942),h=n(3366),p=n(7462),f=n(2791),v=n(3733),m=n(4419),g=n(2065),x=n(4036),Z=n(7630),b=n(5158),w=n(2930),S=n(2982),k=n(5878),y=n(1217);function j(e){return(0,y.Z)("PrivateSwitchBase",e)}(0,k.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var C=n(184),z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],R=(0,Z.ZP)(S.Z)((function(e){var t=e.ownerState;return(0,p.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),P=(0,Z.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),I=f.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,l=e.defaultChecked,c=e.disabled,d=e.disableFocusRipple,s=void 0!==d&&d,u=e.edge,f=void 0!==u&&u,g=e.icon,Z=e.id,S=e.inputProps,k=e.inputRef,y=e.name,I=e.onBlur,B=e.onChange,L=e.onFocus,E=e.readOnly,F=e.required,T=void 0!==F&&F,M=e.tabIndex,A=e.type,N=e.value,D=(0,h.Z)(e,z),_=(0,b.Z)({controlled:r,default:Boolean(l),name:"SwitchBase",state:"checked"}),H=(0,i.Z)(_,2),O=H[0],V=H[1],W=(0,w.Z)(),Y=c;W&&"undefined"===typeof Y&&(Y=W.disabled);var q="checkbox"===A||"radio"===A,G=(0,p.Z)({},e,{checked:O,disabled:Y,disableFocusRipple:s,edge:f}),U=function(e){var t=e.classes,n=e.checked,i=e.disabled,r=e.edge,a={root:["root",n&&"checked",i&&"disabled",r&&"edge".concat((0,x.Z)(r))],input:["input"]};return(0,m.Z)(a,j,t)}(G);return(0,C.jsxs)(R,(0,p.Z)({component:"span",className:(0,v.Z)(U.root,o),centerRipple:!0,focusRipple:!s,disabled:Y,tabIndex:null,role:void 0,onFocus:function(e){L&&L(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){I&&I(e),W&&W.onBlur&&W.onBlur(e)},ownerState:G,ref:t},D,{children:[(0,C.jsx)(P,(0,p.Z)({autoFocus:n,checked:r,defaultChecked:l,className:U.input,disabled:Y,id:q?Z:void 0,name:y,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;V(t),B&&B(e,t)}},readOnly:E,ref:k,required:T,ownerState:G,tabIndex:M,type:A},"checkbox"===A&&void 0===N?{}:{value:N},S)),O?a:g]}))})),B=n(9201),L=(0,B.Z)((0,C.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=(0,B.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=(0,B.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),T=n(1046);function M(e){return(0,y.Z)("MuiCheckbox",e)}var A=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],D=(0,Z.ZP)(I,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,x.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,p.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,g.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,u.Z)(t,"&.".concat(A.checked,", &.").concat(A.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,u.Z)(t,"&.".concat(A.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),_=(0,C.jsx)(E,{}),H=(0,C.jsx)(L,{}),O=(0,C.jsx)(F,{}),V=f.forwardRef((function(e,t){var n,i,r=(0,T.Z)({props:e,name:"MuiCheckbox"}),a=r.checkedIcon,o=void 0===a?_:a,l=r.color,c=void 0===l?"primary":l,d=r.icon,s=void 0===d?H:d,u=r.indeterminate,g=void 0!==u&&u,Z=r.indeterminateIcon,b=void 0===Z?O:Z,w=r.inputProps,S=r.size,k=void 0===S?"medium":S,y=r.className,j=(0,h.Z)(r,N),z=g?b:s,R=g?b:o,P=(0,p.Z)({},r,{color:c,indeterminate:g,size:k}),I=function(e){var t=e.classes,n=e.indeterminate,i=e.color,r=e.size,a={root:["root",n&&"indeterminate","color".concat((0,x.Z)(i)),"size".concat((0,x.Z)(r))]},o=(0,m.Z)(a,M,t);return(0,p.Z)({},t,o)}(P);return(0,C.jsx)(D,(0,p.Z)({type:"checkbox",inputProps:(0,p.Z)({"data-indeterminate":g},w),icon:f.cloneElement(z,{fontSize:null!=(n=z.props.fontSize)?n:k}),checkedIcon:f.cloneElement(R,{fontSize:null!=(i=R.props.fontSize)?i:k}),ownerState:P,ref:t,className:(0,v.Z)(I.root,y)},j,{classes:I}))})),W=(0,B.Z)((0,C.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Y=(0,B.Z)((0,C.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),q=n(225),G=(0,q.Z)(d.Z)({padding:"0 0 0 10px",background:"#f2f6fc",cursor:"pointer",display:"flex",alignItems:"center","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),U=(0,q.Z)(s.Z)({fontSize:"12px !important",background:"#ddd",color:"#222",padding:"0 4px",borderRadius:4,marginRight:6}),J=(0,q.Z)(s.Z)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"});function K(e){var t=e.email,n=e.selectedEmails,i=e.setRefreshScreen,u=e.setSelectedEmails,h=(0,r.s0)(),p=(0,o.Z)(a.Y.toggleStarBorder),f=function(){p.call({id:t._id,value:!t.starred}),i((function(e){return!e}))};return(0,C.jsxs)(G,{children:[(0,C.jsx)(V,{size:"small",checked:null===n||void 0===n?void 0:n.includes(t._id),onChange:function(){n.includes(t._id)?u((function(e){return e.filter((function(e){return e!==t._id}))})):u((function(e){return[].concat((0,l.Z)(e),[t._id])}))}}),t.starred?(0,C.jsx)(W,{fontSize:"small",style:{marginRight:10,color:"#fff200"},onClick:function(){return f()}}):(0,C.jsx)(Y,{fontSize:"small",style:{marginRight:10},onClick:function(){return f()}}),(0,C.jsxs)(d.Z,{onClick:function(){return h(c._.view.path,{state:{email:t}})},children:[(0,C.jsxs)(s.Z,{style:{width:200,overflow:"hidden"},children:["To:",t.to.split("@")[0]]}),(0,C.jsx)(U,{children:"Inbox"}),(0,C.jsxs)(s.Z,{children:[t.subject," ",t.body&&"-"," ",t.body]}),(0,C.jsxs)(J,{children:[new window.Date(t.date).getDate(),"\xa0",new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})}function Q(e){return(0,y.Z)("MuiDivider",e)}(0,k.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var X=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],$=(0,Z.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,g.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,p.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,p.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),ee=(0,Z.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),te=f.forwardRef((function(e,t){var n=(0,T.Z)({props:e,name:"MuiDivider"}),i=n.absolute,r=void 0!==i&&i,a=n.children,o=n.className,l=n.component,c=void 0===l?a?"div":"hr":l,d=n.flexItem,s=void 0!==d&&d,u=n.light,f=void 0!==u&&u,g=n.orientation,x=void 0===g?"horizontal":g,Z=n.role,b=void 0===Z?"hr"!==c?"separator":void 0:Z,w=n.textAlign,S=void 0===w?"center":w,k=n.variant,y=void 0===k?"fullWidth":k,j=(0,h.Z)(n,X),z=(0,p.Z)({},n,{absolute:r,component:c,flexItem:s,light:f,orientation:x,role:b,textAlign:S,variant:y}),R=function(e){var t=e.absolute,n=e.children,i=e.classes,r=e.flexItem,a=e.light,o=e.orientation,l=e.textAlign,c={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,m.Z)(c,Q,i)}(z);return(0,C.jsx)($,(0,p.Z)({as:c,className:(0,v.Z)(R.root,o),role:b,ref:t,ownerState:z},j,{children:a?(0,C.jsx)(ee,{className:R.wrapper,ownerState:z,children:a}):null}))}));te.muiSkipListHighlight=!0;var ne=te,ie=(0,Z.ZP)(d.Z)({display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:50,opacity:.8}),re=(0,Z.ZP)(ne)({width:"100%",marginTop:10}),ae=function(e){var t=e.message;return(0,C.jsxs)(ie,{children:[(0,C.jsx)(s.Z,{children:t.heading}),(0,C.jsx)(s.Z,{children:t.subHeading}),(0,C.jsx)(re,{})]})},oe=n(8193),le=n(493),ce=n(4220);function de(){var e,t,n=(0,r.UO)().type,l=(0,f.useState)([]),c=(0,i.Z)(l,2),s=c[0],u=c[1],h=(0,f.useState)(!1),p=(0,i.Z)(h,2),v=p[0],m=p[1],g=(0,o.Z)(a.Y.getEmailFromType),x=(0,o.Z)(a.Y.moveEmailsToBin),Z=(0,o.Z)(a.Y.deleteEmails);(0,f.useEffect)((function(){g.call({},n)}),[n,v]);var b=(0,r.bx)().openDrawer;return(0,C.jsxs)(d.Z,{style:b?{width:"calc(100% - 250px)",marginLeft:"250px"}:{width:"100%"},children:[(0,C.jsxs)(d.Z,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,C.jsx)(V,{size:"small",onChange:function(e){return function(e){if(e.target.checked){var t=g.response.map((function(e){return e._id}));u(t)}else u([])}(e)}}),(0,C.jsx)(ce.Z,{onClick:function(){"bin"===n?Z.call(s):x.call(s),m((function(e){return!e})),u([])}})]}),(0,C.jsx)(le.Z,{children:null===(e=g.response)||void 0===e?void 0:e.map((function(e){return(0,C.jsx)(K,{email:e,selectedEmails:s,setRefreshScreen:m,setSelectedEmails:u},e._id)}))}),0===(null===g||void 0===g||null===(t=g.response)||void 0===t?void 0:t.length)&&(0,C.jsx)(ae,{message:oe.Fr[n]})]})}},8193:function(e,t,n){n.d(t,{Fr:function(){return r},Pv:function(){return i}});var i="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",r={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},draft:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(4165),r=n(5861),a=n(9439),o=n(2791),l=n(1243),c=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)({method:t.method,url:"".concat("","/").concat(t.endPoint,"/").concat(r),data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),d=function(e){var t=(0,o.useState)(null),n=(0,a.Z)(t,2),l=n[0],d=n[1],s=(0,o.useState)(""),u=(0,a.Z)(s,2),h=u[0],p=u[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2),m=v[0],g=v[1],x=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(n){var r,a,o=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",d(null),p(""),g(!0),t.prev=4,t.next=7,c(e,n,r);case 7:a=t.sent,d(a.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),p(t.t0.message);case 14:return t.prev=14,g(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})));return function(e){return t.apply(this,arguments)}}();return{response:l,error:h,loading:m,call:x}}},5372:function(e,t,n){n.d(t,{Y:function(){return i}});var i={saveSentEmails:{endPoint:"save",method:"POST"},getEmailFromType:{endPoint:"emails",method:"GET"},saveDraftEmails:{endPoint:"save-draft",method:"POST"},moveEmailsToBin:{endPoint:"bin",method:"POST"},toggleStarBorder:{endPoint:"starred",method:"POST"},deleteEmails:{endPoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=467.f2cf2cca.chunk.js.map