(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(14),c=n.n(s),r=(n(70),n.p,n(71),n(10)),a=n(98),l=n(136),u=n(123),d=n(124),j=n(125),b=n(99),f=n(131),g=n(100),h=n(128),O=n(132),p=n(135),x=n(127),m=n(134),v=n(133),I=n(4),S=function(e){var t={padding:20,margin:"0px auto",align:"center"},n=o.a.useState(""),s=Object(r.a)(n,2),c=s[0],a=s[1],S=o.a.useState(!1),q=Object(r.a)(S,2),E=q[0],y=(q[1],o.a.useState("Choose wisely")),C=Object(r.a)(y,2);C[0],C[1];Object(i.useEffect)((function(){console.log("I have been mounted")}),[]),Object(i.useEffect)((function(){console.log("I have been mounted"),null!=e.question.selectionIndex&&a(e.question.options[e.question.selectionIndex])}));var _=function(){var t=e.question.options.findIndex((function(e){return e===c}));e.nextCallback(t),a("")};Object(l.a)({formControlLabel:{fontSize:"1.25rem",color:"black"}});return e.isReview?Object(I.jsxs)(u.a,{children:[Object(I.jsx)(d.a,{position:"static",children:Object(I.jsx)(j.a,{children:Object(I.jsx)(b.a,{variant:"h6",children:"Bible quiz"})})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(v.a,{severity:"success",style:{margin:"8px 0",justifyContent:"center"},children:["Quiz completed",Object(I.jsxs)(b.a,{fontWeight:"fontWeightMedium",style:t,children:["Score: ",e.score," %"]})]})})]}):Object(I.jsxs)(u.a,{container:!0,direction:"column",spacing:0,alignItems:"center",children:[Object(I.jsx)(d.a,{position:"static",children:Object(I.jsx)(j.a,{children:Object(I.jsx)(b.a,{variant:"h6",children:"Bible quiz"})})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(b.a,{fontWeight:"fontWeightMedium",style:t,children:["Question: ",e.question.order+1,"/",e.totalQuestion.length]})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(m.a,{component:"fieldset",error:E,align:"justify",children:[Object(I.jsx)(b.a,{fontWeight:"fontWeightBold",style:{padding:0,margin:"20px auto",align:"center"},children:Object(I.jsx)(f.a,{fontWeight:"fontWeightBold",m:1,children:e.question.question})}),Object(I.jsx)(p.a,{"aria-label":"quiz",name:"quiz",value:c,onChange:function(t){a(t.target.value);var n=e.question.options.findIndex((function(e){return e===t.target.value}));e.updateSelectedIndex(n)},children:e.question.options.map((function(e){return Object(I.jsx)(x.a,{value:e,control:Object(I.jsx)(O.a,{}),label:e})}))})]})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",style:{width:"200px",maxHeight:"50px",margin:"8px 0",align:"center"},onClick:_,disabled:""==c,children:e.isLastQuestion?"Submit & Finish":"Submit"})}),Object(I.jsx)(u.a,{item:!0,children:Object(I.jsxs)(h.a,{size:"large",color:"primary","aria-label":"large outlined primary button group",style:{width:"50px",maxHeight:"50px",margin:"8px 0",align:"center",marginTop:"10px",marginRight:"50px"},children:[Object(I.jsx)(g.a,{type:"submit",onClick:function(){e.prevCallback()},disabled:e.isFirstQuestion,children:"   <   "}),Object(I.jsx)(g.a,{type:"submit",onClick:_,disabled:e.isLastQuestion,children:"   >   "})]})})]})},q=n(51),E=n.n(q);function y(e){return{type:"QUIZ_ITEMS_IS_LOADING",isLoading:e}}function C(){return console.log("API hit"),function(e){e(y(!0)),E.a.get("https://sheet.best/api/sheets/2f58c9e3-b91b-431c-beec-055257bb9886").then((function(t){if(200==t.status){var n=t.data;n.forEach((function(e){e.options=e.options.split(","),e.order=parseInt(e.order),e.answer=parseInt(e.answer),e.id=parseInt(e.id),e.quizid=parseInt(e.quizid)})),console.log("received response",n),e((i=n,console.log("Items",i),{type:"QUIZ_ITEMS_FETCH_DATA_SUCCESS",items:i}))}else e({type:"QUIZ_ITEMS_HAS_ERRORED",hasErrored:!0});var i;e(y(!1)),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config)}))}}var _=n(33),Q=n(129),z=n(130),w=Object(Q.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",alignItems:"center",margin:"5px auto"}}}));function T(){var e=w();return Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)(z.a,{})})}var L=Object(_.b)((function(e){return{response:e.quizItemsFetchDataSuccess,error:e.quizItemsHasErrored,loading:e.quizItemsIsLoading}}),(function(e){return{fetchQuestion:function(){return e(C())}}}))((function(e){var t=Object(i.useState)(null),n=Object(r.a)(t,2),o=n[0],s=n[1],c=Object(i.useState)(0),l=Object(r.a)(c,2),u=l[0],d=l[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),f=b[0],g=b[1],h=Object(i.useState)(!1),O=Object(r.a)(h,2),p=O[0],x=O[1],m=Object(i.useState)(!1),v=Object(r.a)(m,2),q=v[0],E=v[1],y=Object(i.useState)(!1),C=Object(r.a)(y,2),_=(C[0],C[1],Object(i.useState)(!1)),Q=Object(r.a)(_,2),z=(Q[0],Q[1],Object(i.useState)([])),w=Object(r.a)(z,2),L=(w[0],w[1],Object(i.useState)([])),k=Object(r.a)(L,2),F=k[0],A=k[1];Object(i.useEffect)((function(){console.log("Response",e.response),A(e.response),console.log("Questions",F);var t=F[0];s(t)}),[e.response]),Object(i.useEffect)((function(){console.log("Questions",F);var e=F[0];s(e)}),[F]),Object(i.useEffect)((function(){console.log("New score",u)}),[u]),Object(i.useEffect)((function(){e.fetchQuestion()}),[]),Object(i.useEffect)((function(){null!=o&&(W(),M())}));var R=function(){if(o.order<=F.length-1){var e=o.order+1;if(console.log("increment oreder",e),e==F.length)B();else{var t=F[e];console.log("next ques",t),s(t)}}},D=function(){if(o.order<=F.length-1){var e=o.order-1;console.log("increment oreder",e);var t=F[e];s(t)}},U=function(e){var t=F.filter((function(e){return e.answer===e.selectionIndex})).length;d(t/F.length*100)},H=function(e){F.filter((function(e){return e.id===o.id}))[0].selectionIndex=e,console.log("Updated question object",F)},M=function(){console.log("is last ques",p,o.order),o.order===F.length-1?(x(!0),console.log("is last ques",p)):x(!1)},W=function(){0===o.order?g(!0):g(!1)},B=function(){E(!0)};return Object(I.jsxs)(a.a,{elevation:10,style:{padding:20,height:"70h",width:"75%",margin:"20px auto",align:"center"},children:[e.loading?Object(I.jsx)(T,{}):null,null!=o?Object(I.jsx)(S,{question:o,nextCallback:function(e){o.selectionIndex!=e&&U(e),H(e),R()},skipCallback:function(){},prevCallback:function(){D()},order:o.order,isLastQuestion:p,isFirstQuestion:f,isReview:q,score:u,totalQuestion:F,updateSelectedIndex:function(e){H(e),U(e)}}):null]})}));var k=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(L,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),s(e),c(e)}))},A=n(18),R=n(53);var D=Object(A.c)({quizItemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},quizItemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_IS_LOADING":return t.isLoading;default:return e}},quizItemsFetchDataSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUIZ_ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}}});var U,H=Object(A.d)(D,U,Object(A.a)(R.a));c.a.render(Object(I.jsx)(_.a,{store:H,children:Object(I.jsx)(k,{})}),document.getElementById("root")),F()}},[[96,1,2]]]);
//# sourceMappingURL=main.27cd67f7.chunk.js.map