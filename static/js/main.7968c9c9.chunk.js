(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},519:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(9),s=n.n(c),r=(n(200),n.p,n(201),n(16)),a=n(521),l=n(573),u=n(554),d=n(556),j=n(557),b=n(115),f=n(567),h=n(522),g=n(560),O=n(570),p=n(572),x=n(559),m=n(571),v=n(569),I=n(5),S=function(e){var t={padding:20,margin:"0px auto",align:"center"},n=o.a.useState(""),c=Object(r.a)(n,2),s=c[0],a=c[1],S=o.a.useState(!1),y=Object(r.a)(S,2),C=y[0],q=(y[1],o.a.useState("Choose wisely")),E=Object(r.a)(q,2);E[0],E[1];Object(i.useEffect)((function(){console.log("I have been mounted")}),[]),Object(i.useEffect)((function(){console.log("I have been mounted"),null!=e.question.selectionIndex&&a(e.question.options[e.question.selectionIndex])}));var Q=function(){var t=e.question.options.findIndex((function(e){return e===s}));e.nextCallback(t),a("")};Object(l.a)({formControlLabel:{fontSize:"1.25rem",color:"black"}});return e.isReview?Object(I.jsxs)(u.a,{children:[Object(I.jsx)(d.a,{position:"static",children:Object(I.jsx)(j.a,{children:Object(I.jsx)(b.a,{variant:"h6",children:"Quiz"})})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(v.a,{severity:"success",style:{margin:"8px 0",justifyContent:"center"},children:["Quiz completed",Object(I.jsxs)(b.a,{fontWeight:"fontWeightMedium",style:t,children:["Score: ",e.score," %"]})]})})]}):Object(I.jsxs)(u.a,{container:!0,direction:"column",spacing:0,alignItems:"center",children:[Object(I.jsx)(d.a,{position:"static",children:Object(I.jsx)(j.a,{children:Object(I.jsx)(b.a,{variant:"h6",children:"Bible quiz-Test"})})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(b.a,{fontWeight:"fontWeightMedium",style:t,children:["Question: ",e.question.order+1,"/",e.totalQuestion.length]})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(m.a,{component:"fieldset",error:C,align:"justify",children:[Object(I.jsx)(b.a,{fontWeight:"fontWeightBold",style:{padding:0,margin:"20px auto",align:"center"},children:Object(I.jsx)(f.a,{fontWeight:"fontWeightBold",m:1,children:e.question.question})}),Object(I.jsx)(p.a,{"aria-label":"quiz",name:"quiz",value:s,onChange:function(t){a(t.target.value);var n=e.question.options.findIndex((function(e){return e===t.target.value}));e.updateSelectedIndex(n)},children:e.question.options.map((function(e){return Object(I.jsx)(x.a,{value:e,control:Object(I.jsx)(O.a,{}),label:e})}))})]})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",style:{width:"200px",maxHeight:"50px",margin:"8px 0",align:"center"},onClick:Q,disabled:""==s,children:e.isLastQuestion?"Submit & Finish":"Submit"})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(g.a,{size:"large",color:"primary","aria-label":"large outlined primary button group",style:{width:"50px",maxHeight:"50px",margin:"8px 0",align:"center",marginTop:"10px",marginRight:"50px"},children:[Object(I.jsx)(h.a,{type:"submit",onClick:function(){e.prevCallback()},disabled:e.isFirstQuestion,children:"   <   "}),Object(I.jsx)(h.a,{type:"submit",onClick:Q,disabled:e.isLastQuestion,children:"   >   "})]})})]})},y=n(178),C=n.n(y);function q(e){return{type:"QUIZ_ITEMS_IS_LOADING",isLoading:e}}function E(){return console.log("API hit"),function(e){e(q(!0)),C.a.get("https://sheet.best/api/sheets/2f58c9e3-b91b-431c-beec-055257bb9886").then((function(t){if(200==t.status){var n=t.data;n.forEach((function(e){e.options=e.options.split(","),e.order=parseInt(e.order),e.answer=parseInt(e.answer),e.id=parseInt(e.id),e.quizid=parseInt(e.quizid)})),console.log("received response",n),e((i=n,console.log("Items",i),{type:"QUIZ_ITEMS_FETCH_DATA_SUCCESS",items:i}))}else e({type:"QUIZ_ITEMS_HAS_ERRORED",hasErrored:!0});var i;e(q(!1)),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config)}))}}var Q=n(89),_=n(561),w=n(562),z=Object(_.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",alignItems:"center",margin:"5px auto"}}}));function T(){var e=z();return Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)(w.a,{})})}var k=n(183),L=n(568),A=n(566),F=n(564),R=n(565),D=n(563),M=n(574),U=o.a.forwardRef((function(e,t){return Object(I.jsx)(M.a,Object(k.a)({direction:"up",ref:t},e))})),H=function(e){var t=o.a.useState(!0),n=Object(r.a)(t,2),i=n[0];n[1];return Object(I.jsx)("div",{children:Object(I.jsxs)(L.a,{open:i,TransitionComponent:U,keepMounted:!0,onClose:e.onCancel,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(I.jsx)(D.a,{id:"alert-dialog-slide-title",children:"Confirm submission?"}),Object(I.jsx)(F.a,{children:Object(I.jsx)(R.a,{id:"alert-dialog-slide-description",children:"Are you sure to submit the quiz."})}),Object(I.jsxs)(A.a,{children:[Object(I.jsx)(h.a,{onClick:e.onCancel,color:"primary",children:"Cancel"}),Object(I.jsx)(h.a,{onClick:e.onSubmit,color:"primary",children:"Submit"})]})]})})},W=(n(223),Object(Q.b)((function(e){return{response:e.quizItemsFetchDataSuccess,error:e.quizItemsHasErrored,loading:e.quizItemsIsLoading}}),(function(e){return{fetchQuestion:function(){return e(E())}}}))((function(e){var t=Object(i.useState)(null),n=Object(r.a)(t,2),o=n[0],c=n[1],s=Object(i.useState)(0),l=Object(r.a)(s,2),u=l[0],d=l[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),f=b[0],h=b[1],g=Object(i.useState)(!1),O=Object(r.a)(g,2),p=O[0],x=O[1],m=Object(i.useState)(!1),v=Object(r.a)(m,2),y=v[0],C=v[1],q=Object(i.useState)(!1),E=Object(r.a)(q,2),Q=E[0],_=E[1],w=Object(i.useState)(!1),z=Object(r.a)(w,2),k=(z[0],z[1],Object(i.useState)(!1)),L=Object(r.a)(k,2),A=(L[0],L[1],Object(i.useState)([])),F=Object(r.a)(A,2),R=(F[0],F[1],Object(i.useState)([])),D=Object(r.a)(R,2),M=D[0],U=D[1];Object(i.useEffect)((function(){console.log("Response",e.response),U(e.response),console.log("Questions",M);var t=M[0];c(t)}),[e.response]),Object(i.useEffect)((function(){console.log("Questions",M);var e=M[0];c(e)}),[M]),Object(i.useEffect)((function(){console.log("New score",u)}),[u]),Object(i.useEffect)((function(){e.fetchQuestion(),console.log("Show confirm alert",Q)}),[]),Object(i.useEffect)((function(){null!=o&&(G(),P()),console.log("Show confirm alert",Q)}));var W=function(){if(o.order<=M.length-1){var e=o.order+1;if(console.log("increment oreder",e),e==M.length)J();else{var t=M[e];console.log("next ques",t),c(t)}}},Z=function(){if(o.order<=M.length-1){var e=o.order-1;console.log("increment oreder",e);var t=M[e];c(t)}},B=function(e){var t=M.filter((function(e){return e.answer===e.selectionIndex})).length;d(t/M.length*100)},N=function(e){M.filter((function(e){return e.id===o.id}))[0].selectionIndex=e,console.log("Updated question object",M)},P=function(){console.log("is last ques",p,o.order),o.order===M.length-1?(x(!0),console.log("is last ques",p)):x(!1)},G=function(){0===o.order?h(!0):h(!1)},J=function(){_(!0)},K=function(){_(!1)};return Object(I.jsxs)(a.a,{elevation:10,style:{padding:20,height:"70h",width:"75%",margin:"20px auto",align:"center"},children:[e.loading?Object(I.jsx)(T,{}):null,null!=o?Object(I.jsx)(S,{question:o,nextCallback:function(e){o.selectionIndex!=e&&B(e),N(e),W()},skipCallback:function(){},prevCallback:function(){Z()},order:o.order,isLastQuestion:p,isFirstQuestion:f,isReview:y,score:u,totalQuestion:M,showAlert:Q,updateSelectedIndex:function(e){N(e),B(e)}}):null,Q?Object(I.jsx)(H,{onSubmit:function(){K(),C(!0)},onCancel:function(){K()}}):null]})})));var Z=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(W,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,577)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),c(e),s(e)}))},N=n(48),P=n(182);var G=Object(N.c)({quizItemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},quizItemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_IS_LOADING":return t.isLoading;default:return e}},quizItemsFetchDataSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}}});var J,K=Object(N.d)(G,J,Object(N.a)(P.a));s.a.render(Object(I.jsx)(Q.a,{store:K,children:Object(I.jsx)(Z,{})}),document.getElementById("root")),B()}},[[519,1,2]]]);
//# sourceMappingURL=main.7968c9c9.chunk.js.map