(this.webpackJsonpnew_old_stamp_test=this.webpackJsonpnew_old_stamp_test||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),o=(n(16),n(9)),c=n(10),l=n(1),d=n(2),p=n(4),h=n(3),u=n(6),m=n(5),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).deleteItems=n.deleteItems.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"deleteItems",value:function(){var e=this,t=Object.keys(this.props.checked);alert("cards ".concat(t.map((function(t){return e.props.cardList[t].checkbox}))," were deleted successfully")),this.props.deleteItem(t),this.props.setShow()}},{key:"render",value:function(){return this.props.show?i.a.createElement("div",{style:{cursor:"pointer",display:"flex",paddingBottom:"15px"}},i.a.createElement("div",{style:{display:"flex"},onClick:this.props.setShow},i.a.createElement("input",{type:"checkbox",style:{display:"block",margin:"5px 20px 0 0",height:"18px",width:"18px"}}),i.a.createElement("div",{style:{marginRight:"30px",fontSize:"15px",color:"rgb(75,75,75)",padding:"6px 0"}},"Selected (",this.props.show,")",i.a.createElement("img",{style:{width:"12px",marginLeft:"10px"},src:"icons/cancel.png",alt:"cancel"}))),i.a.createElement("div",{onClick:this.deleteItems,style:{cursor:"pointer",display:"flex"}},i.a.createElement("div",{style:{padding:"5px 5px 0 0"}},i.a.createElement("img",{style:{width:"17px"},src:"icons/deleteViolet.png",alt:"delete"})),i.a.createElement("div",{style:{color:"rgb(65,0,253)",padding:"6px 0"}},"Delete (",this.props.show,")"))):i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"15px"}},i.a.createElement("div",{style:{fontSize:"15px",color:"rgb(75,75,75)"}},"Signature List"),i.a.createElement("button",{style:{fontSize:"14px",border:"1px solid rgb(65,0,253)",color:"rgb(65,0,253)",borderRadius:"2px",padding:"6px 17px"}},"Create a signature"))}}]),t}(i.a.Component),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={show:!1,btn:!1},e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{borderRadius:"1px",boxShadow:"0px 0px 3px 1px rgba(0,0,0,0.2)",position:"relative"},onMouseEnter:function(){return e.setState({show:!0})},onMouseLeave:function(){return e.setState({show:!1})}},i.a.createElement("img",{style:{borderRadius:"1px",width:"100%",objectFit:"cover"},src:"img/".concat(this.props.data.img,".png"),alt:"img/".concat(this.props.data.img,".png")}),this.props.show||this.state.show?i.a.createElement("div",{style:{borderRadius:"1px",position:"absolute",width:"100%",height:"100%",backgroundColor:"rgb(65,0,253)",opacity:"0.9",top:"0px"}},i.a.createElement("input",{type:"checkbox",value:this.props.data.checkbox,style:{display:"block",margin:"10px",height:"18px",width:"18px"},onChange:function(t){return e.props.setShow(t.target.checked,e.props.id)}}),this.props.show?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("table",{style:{marginLeft:"28px",fontSize:"14px",color:"white"}},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:"120px"}},"Sent by admin:"),i.a.createElement("td",{style:{width:"120px"}},this.props.data.sendByAdmin)),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:"120px"}},"Installed by user:"),i.a.createElement("td",{style:{width:"120px"}},this.props.data.installedByUser)),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:"120px"}},"Last edited:"),i.a.createElement("td",{style:{width:"120px"}},this.props.data.lastEdited)))),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"24px 31px 0 31px",alignItems:"center"}},i.a.createElement("button",{onClick:function(){return window.open("https://www.linkedin.com/in/valerii-zinchenko-034a9217b/")},style:{fontSize:"14px",border:"2px solid white",padding:"3px 25px",backgroundColor:this.state.btn?"white":"transparent",color:this.state.btn?"rgb(65,0,253)":"white",borderRadius:"3px"},onMouseEnter:function(){return e.setState({btn:!0})},onMouseLeave:function(){return e.setState({btn:!1})}},"Use"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",null,i.a.createElement("img",{style:{width:"15px"},src:"icons/edit.png",alt:"edit"})),i.a.createElement("img",{style:{width:"20px",margin:"0px 20px 0 20px"},src:"icons/eye.png",alt:"eye"}),i.a.createElement("div",{onClick:this.props.deleteItem},i.a.createElement("img",{style:{width:"17px"},src:"icons/delete.png",alt:"delete"})))))):null)}}]),t}(i.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto",gridColumnGap:"15px",gridRowGap:"15px"}},this.props.cardList.map((function(t,n){return i.a.createElement(g,{key:n,id:n,data:t,show:e.props.show,setShow:e.props.setShow,deleteItem:function(){return e.props.deleteItem(n)}})})))}}]),t}(i.a.Component),x=[{img:1,checkbox:"Reanna Blankenship",sendByAdmin:"NO",installedByUser:"NO",lastEdited:"03.04.2019 16:43"},{img:2,checkbox:"Vlad Heaton",sendByAdmin:"YES",installedByUser:"YES",lastEdited:"12.05.2017 13:34"},{img:3,checkbox:"Virginia Lowe",sendByAdmin:"YES",installedByUser:"YES",lastEdited:"23.09.2018 12:14"},{img:4,checkbox:"Kiran mcfarland",sendByAdmin:"NO",installedByUser:"NO",lastEdited:"30.01.2015 11:14"},{img:5,checkbox:"Cyrus Manning",sendByAdmin:"YES",installedByUser:"NO",lastEdited:"15.01.2020 08:14"},{img:4,checkbox:"Kiran mcfarland",sendByAdmin:"NO",installedByUser:"NO",lastEdited:"30.01.2015 11:14"},{img:2,checkbox:"Vlad Heaton",sendByAdmin:"YES",installedByUser:"YES",lastEdited:"12.05.2017 13:34"},{img:3,checkbox:"Virginia Lowe",sendByAdmin:"YES",installedByUser:"YES",lastEdited:"23.09.2018 12:14"},{img:1,checkbox:"Reanna Blankenship",sendByAdmin:"NO",installedByUser:"NO",lastEdited:"03.04.2019 16:43"}],w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={show:0,checked:{},cardList:x},e.handleCheckbox=e.handleCheckbox.bind(Object(u.a)(e)),e.deleteItem=e.deleteItem.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleCheckbox",value:function(e,t){var n=Object(c.a)({},this.state.checked);n[t]=e?1:0;var a=Object.values(n).reduce((function(e,t){return e+t}));this.setState({show:a,checked:n})}},{key:"deleteItem",value:function(e){var t=Object(o.a)(this.state.cardList);e.length?(e.sort((function(e,t){return t-e})),e.forEach((function(e){return t.splice(e,1)}))):(t.splice(e,1),alert("card ".concat(this.state.cardList[e].checkbox," was deleted successfully"))),this.setState({cardList:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{padding:"20px 20px 20px 10px",fontFamily:"Arial"}},i.a.createElement(b,{cardList:this.state.cardList,deleteItem:this.deleteItem,setShow:function(){return e.setState({show:0,checked:{}})},show:this.state.show,checked:this.state.checked}),i.a.createElement(y,{cardList:this.state.cardList,deleteItem:this.deleteItem,show:this.state.show,setShow:this.handleCheckbox}))}}]),t}(i.a.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.29de6750.chunk.js.map