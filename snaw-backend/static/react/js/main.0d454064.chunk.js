(this["webpackJsonpsnaw-frontend"]=this["webpackJsonpsnaw-frontend"]||[]).push([[0],{193:function(e,a,t){e.exports=t.p+"media/logo_small.7e1954b4.png"},235:function(e,a,t){e.exports=t(444)},240:function(e,a,t){},258:function(e,a,t){},444:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),o=t.n(l),c=t(82),i=t(40),s=(t(240),t(49)),m=t(29),u=t(50),p=t(51),d=t(55),h=(t(241),t(193)),E=t.n(h),g=(t(258),t(479)),f=t(481),y=Object(g.a)((function(e){return{button:{color:"white",fontSize:"1em",backgroundColor:"#3f5a14",margin:e.spacing(1),paddingLeft:e.spacing(4),paddingRight:e.spacing(4),"&:hover":{background:"#2e420e"}}}}));function b(){var e=y();return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(c.b,{to:"/results",style:{textDecoration:"none"}},r.a.createElement(f.a,{variant:"contained",className:e.button},"Analyze Audio"))))}var v=t(483),O=t(484),j=t(482),N=Object(g.a)({});function k(){var e=N();return r.a.createElement(j.a,{position:"static",style:{background:"#3f5a14"}},r.a.createElement(v.a,null,r.a.createElement(O.a,{variant:"h6",className:e.title,color:"inherit"},"Soundscape Noise Analysis Workbench")))}var x=t(495),S=t(496),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).fileSelectedHandler=function(e){t.state.selectedFile=Array.from(e.target.files)},t.state={selectedFile:[]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,r.a.createElement("b",null,"Soundscape Noise Analysis Workbench")),r.a.createElement("br",null),r.a.createElement("form",{action:"http://localhost:5000/uploader",method:"POST",encType:"multipart/form-data"},r.a.createElement("label",{htmlFor:"my-input"},r.a.createElement(f.a,{variant:"outlined",color:"#3f5a14",component:"span"},"Upload Audio File")),r.a.createElement("input",{id:"my-input","aria-describedby":"my-helper-text",type:"file",multiple:!0,onChange:this.fileSelectedHandler,name:"file",style:{display:"none"}}),r.a.createElement(S.a,{id:"my-helper-text"},"Drag and drop WAV files here, or click the Upload button to select file/s."),r.a.createElement("label",{htmlFor:"my-submit"},r.a.createElement(f.a,{variant:"contained",backgroundColor:"#3f5a14",component:"span"},"Submit")),r.a.createElement(x.a,{id:"my-submit",type:"submit",style:{display:"none"}})),r.a.createElement("br",null),r.a.createElement(b,null)))}}]),a}(r.a.Component),A=t(19),C=t(494),F=t(497),B=t(491),R=t(207),T=t.n(R),G=t(490),M=t(492),W=t(446),U=t(20),z=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(U.e,{width:600,height:400,stackOffset:"expand",margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(U.a,{strokeDasharray:"3 3"}),r.a.createElement(U.i,{dataKey:"time",type:"number"}),r.a.createElement(U.j,{dataKey:"category",type:"category"}),r.a.createElement(U.c,null),r.a.createElement(U.h,null),this.props.series.map((function(e){return r.a.createElement(U.d,{dataKey:"category",data:e.data,name:e.name,key:e.name,stroke:e.color,type:"step",strokeWidth:"3"})})))}}]),a}(n.PureComponent);var L=[{name:"Anthrophony",value:0},{name:"Biophony",value:0},{name:"Geophony",value:0}],H=["#0088FE","#00C49F","#FFBB28","#FF8042"],K=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=function(e){for(var a=0,t=0,n=0,r=0,l=0;l<e[0].data.length;l++)"NO"===e[0].data[l].category&&"NO"===e[1].data[l].category&&"NO"===e[2].data[l].category?r+=1:"NO"!==e[0].data[l].category&&(a+=1),"NO"!==e[1].data[l].category&&(t+=1),"NO"!==e[2].data[l].category&&(n+=1);return[a,t,n,r]}(this.props.series),a=e[0],t=e[1],n=e[2],l=e[3];return L=[{name:"Anthrophony",value:a},{name:"Biophony",value:t},{name:"Geophony",value:n},{name:"None",value:l}],r.a.createElement(U.g,{width:400,height:400},r.a.createElement(U.f,{data:L,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:!0},L.map((function(e,a){return r.a.createElement(U.b,{key:"cell-".concat(a),fill:H[a%H.length]})}))),r.a.createElement(U.h,null),r.a.createElement(U.c,null))}}]),a}(n.PureComponent);K.jsfiddleUrl="https://jsfiddle.net/alidingling/k9jkog04/";var P=t(485),V=t(489),_=t(488),D=t(486),I=t(487),J=Object(g.a)({root:{width:"100%",overflowX:"auto"},table:{minWidth:650}});function X(e,a,t){return{class_name:e,seconds:a,percentage:t}}X("Geophony",14,45),X("Biophony",12,45),X("Anthrophony",4,10);function $(e){var a=J(),t=function(e){for(var a=0,t=0,n=0,r=0,l=0;l<e[0].data.length;l++)"NO"===e[0].data[l].category&&"NO"===e[1].data[l].category&&"NO"===e[2].data[l].category?r+=1:"NO"!==e[0].data[l].category&&(a+=1),"NO"!==e[1].data[l].category&&(t+=1),"NO"!==e[2].data[l].category&&(n+=1);return[a,t,n,r]}(e.series),n=t[0],l=t[1],o=t[2],c=t[3],i=function(e){var a=0;return e.map((function(e){return a+=1})),a}(e.series[0].data),s=[{name:"Anthrophony",value:n.toString()+"s",percent:Math.floor(n/i*100).toString()+"%"},{name:"Biophony",value:l.toString()+"s",percent:Math.floor(l/i*100).toString()+"%"},{name:"Geophony",value:o.toString()+"s",percent:Math.floor(o/i*100).toString()+"%"},{name:"None",value:c.toString()+"s",percent:Math.floor(c/i*100).toString()+"%"}];return r.a.createElement(W.a,{className:a.root},r.a.createElement(P.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement(_.a,null,r.a.createElement(O.a,{variant:"h6"},"Classification Type")),r.a.createElement(_.a,{align:"right"},r.a.createElement(O.a,{variant:"h6"},"Seconds")),r.a.createElement(_.a,{align:"right"},r.a.createElement(O.a,{variant:"h6"},"Percentage (%)")))),r.a.createElement(V.a,null,s.map((function(e){return r.a.createElement(I.a,{key:e.name},r.a.createElement(_.a,{component:"th",scope:"row"},e.name),r.a.createElement(_.a,{align:"right"},e.value),r.a.createElement(_.a,{align:"right"},e.percent))})))),r.a.createElement(P.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement(_.a,null,r.a.createElement(O.a,{variant:"h6"},"Index Name")),r.a.createElement(_.a,{align:"right"},r.a.createElement(O.a,{variant:"h6"},"Value")))),r.a.createElement(V.a,null,e.indices.map((function(e){return r.a.createElement(I.a,{key:e.index},r.a.createElement(_.a,{component:"th",scope:"row"},e.index),r.a.createElement(_.a,{align:"right"},e.value))})))))}var q=t(493),Q=t(67),Y=t.n(Q),Z=Object(g.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},button:{color:"white",fontSize:"1em",backgroundColor:"#3f5a14",margin:e.spacing(1),paddingLeft:e.spacing(4),paddingRight:e.spacing(4),"&:hover":{background:"#2e420e"}}}}));if("True"==function(){var e="";return Y.a.ajax({url:"/didUpload",type:"GET",async:!1,success:function(a){console.log(a),e=a},error:function(e){console.log(e)}}),e}()){var ee,ae=function(){var e="";return Y.a.ajax({url:"/results/spectro",type:"GET",async:!1,success:function(a){e=a},error:function(e){console.log(e)}}),e}(),te=function(){var e="";return Y.a.ajax({url:"/results/indices",type:"GET",async:!1,success:function(a){e=a},error:function(e){console.log(e)}}),e}(),ne=function(){var e="";return Y.a.ajax({url:"/results/classification",type:"GET",async:!1,success:function(a){e=a},error:function(e){console.log(e)}}),e}();ee=ae;for(var re=0;re<Object.keys(ae).length;re++)ee[re].push(ne[re]);console.log(ee)}var le=function(){var e=Z(),a=r.a.useState(!1),t=Object(A.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(G.a,null,r.a.createElement("br",null),r.a.createElement(O.a,{variant:"h3",component:"h1"},"Results of Analysis"),r.a.createElement("br",null),r.a.createElement(G.a,{fixed:!0},Object.entries(ee).map((function(a){var t,o=Object(A.a)(a,2),c=o[0],i=o[1];return console.log(c),r.a.createElement(C.a,{expanded:n===c,onChange:(t=c,function(e,a){l(!!a&&t)})},r.a.createElement(F.a,{expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(O.a,{className:e.heading},"Results of"),r.a.createElement(O.a,{className:e.secondaryHeading},i[0])),r.a.createElement(B.a,null,r.a.createElement(G.a,null,r.a.createElement(W.a,null,r.a.createElement(O.a,{variant:"subtitle1"},"Spectrogram"),r.a.createElement(M.a,{id:"spectrogram",component:"img",image:i[1],className:"classes.media"})),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"subtitle1"},"Results of SVM Anthrophony, Geophony, and Biophony Class Models"),r.a.createElement("br",null),r.a.createElement(q.a,{container:!0,spacing:2},r.a.createElement(q.a,{item:!0,linechart:!0},r.a.createElement(W.a,null,r.a.createElement(z,{series:i[2]}))),r.a.createElement(q.a,{item:!0,piechart:!0},r.a.createElement(W.a,null,r.a.createElement(K,{series:i[2]})))),r.a.createElement("br",null),r.a.createElement($,{series:i[2],indices:te[0]}),r.a.createElement("br",null),r.a.createElement(W.a,null,r.a.createElement(f.a,{onClick:function(){!function(e){var a=document.createElement("a"),t=new Blob([JSON.stringify(ee[e][2])],{type:"text/plain"});a.href=URL.createObjectURL(t),a.download="classification_"+ee[e][0]+"_results.txt",document.body.appendChild(a),a.click()}(c)},variant:"contained",className:e.button},"Export SVM Classification")))))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{exact:!0,path:"/results",component:le})));o.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[235,1,2]]]);
//# sourceMappingURL=main.0d454064.chunk.js.map