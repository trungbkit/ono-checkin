(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t){},175:function(e,t,a){"use strict";a.r(t);var n,r,c,o,i,m,s,l,u=a(0),h=a.n(u),p=a(10),b=a.n(p),d=(a(86),a(4)),f=a(5),g=a(12),v=a(11),y=a(13),O=a(2),E=a(6),j=a(72),k=a.n(j),N=function(){function e(t){var a=this;Object(d.a)(this,e),this.array=t,this.hash={},t.forEach(function(e){a.hash[e.id]=e})}return Object(f.a)(e,[{key:"get",value:function(e){return this.hash[e]}},{key:"add",value:function(e){var t=e.id;if(this.hash[t]){var a=this.array.findIndex(function(e){return e.id===t});this.array[a]=e}else this.array.push(e);this.hash[t]=e}},{key:"remove",value:function(e){delete this.hash[e],this.array=this.array.filter(function(t){return t.id!==e})}},{key:"map",value:function(e){return this.array.map(e)}},{key:"apply",value:function(e){var t=this,a=this.array.map(function(t){return e(t)});this.array=a,a.forEach(function(e){t.hash[e.id]=e})}},{key:"clone",value:function(e){var t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.apply(e),t}},{key:"length",get:function(){return this.array.length}}]),e}(),w=a(73),M=a(21),S=(a(114),new(n=O.d.bound,r=function(){function e(){Object(d.a)(this,e),Object(w.a)(this,"members",c,this)}return Object(f.a)(e,[{key:"setMembers",value:function(e){this.members=e}},{key:"countMember",get:function(){return this.members.length}},{key:"countAttendMember",get:function(){return this.members.array.filter(function(e){return e.attend}).length}},{key:"countPaymentMember",get:function(){return this.members.array.filter(function(e){return e.payment}).length}}]),e}(),c=Object(M.a)(r.prototype,"members",[O.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new N([])}}),Object(M.a)(r.prototype,"countMember",[O.e],Object.getOwnPropertyDescriptor(r.prototype,"countMember"),r.prototype),Object(M.a)(r.prototype,"countAttendMember",[O.e],Object.getOwnPropertyDescriptor(r.prototype,"countAttendMember"),r.prototype),Object(M.a)(r.prototype,"countPaymentMember",[O.e],Object.getOwnPropertyDescriptor(r.prototype,"countPaymentMember"),r.prototype),Object(M.a)(r.prototype,"setMembers",[n],Object.getOwnPropertyDescriptor(r.prototype,"setMembers"),r.prototype),r)),A={connect:function(){(o=k()("/")).on("connect",function(){o.on("data",function(e){console.log(e),S.setMembers(new N(e))}),o.on("new-member",function(e){console.log("New member",e)})})},disconnect:function(){o.close()},emit:function(e,t){o.emit(e,t)}},I=a(178),x=a(179),C=a(180),P=a(177),T=["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","fadeIn","fadeOut","flipInX","flipInY","flipOutX","flipOutY","rotateIn","jackInTheBox","zoomIn","zoomOut","heartBeat"],D=T.length,U=function(){var e=Math.floor(Math.random()*D),t=T[e];return console.log(t),t},B=function(e){return"https://ui-avatars.com/api/?name=".concat(e)},z=Object(E.b)("memberStore")(i=Object(E.c)(i=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).setUIAvatar=function(e){return function(t){t.target.src=B(e)}},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.memberStore;return h.a.createElement("div",{className:"main"},t.members.map(function(t){return h.a.createElement("div",{className:"member-avatar",key:t.id},h.a.createElement("img",{className:"animated infinite delay-2s ".concat(U()),src:t.image,alt:t.name,onError:e.setUIAvatar(t.name)}))}))}}]),t}(h.a.Component))||i)||i,L=a(42),F=a.n(L),J=a(74),W=a(80),X=a(75),Y=a.n(X),K=function(e,t){return fetch(e,t).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n={Accept:"application/json",Authorization:localStorage.getItem("token")},r=new FormData;return Object.entries(t).forEach(function(e){Array.isArray(e[1])?e[1].forEach(function(t){return r.append("".concat(e[0],"[]"),t)}):r.append(e[0],e[1])}),K(e,{method:a,headers:n,body:r})},$=["O19","O18","O17","O16","O15","O14","O13","O12","O11","O10","O9","O8","O7","O6","O5","O3","O2","O1","O+"],q=Object(E.b)("memberStore")(m=Object(E.c)(m=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e,t){if(e){if("create-option"===t.action)a.id=Date.now().toString(),a.setState({image:""});else{a.id=e.value;var n=a.props.memberStore.members.get(a.id);a.setState({image:n.image,payment:n.payment,attend:n.attend,title:n.title})}a.name=e.label}},a.addMember=function(){var e=Object(W.a)({id:a.id,name:a.name},a.state);console.log("new member",e),A.emit("add-member",e)},a.onImageSelected=function(){var e=Object(J.a)(F.a.mark(function e(t){var n,r,c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.files,r=n[0],e.next=5,V("/upload",{image:r});case 5:c=e.sent,a.setState({image:c.image}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),a.setUIAvatar=function(e){return function(t){t.target.src=B(e)}},a.changeImageMode=function(e){return function(){a.setState({imageMode:e})}},a.id=null,a.name="",a.state={title:"O17",image:"",attend:!1,payment:!1,imageMode:"upload"},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.memberStore,a=t.members.array,n=t.countMember,r=t.countAttendMember,c=t.countPaymentMember,o=this.state,i=o.title,m=o.image,s=o.payment,l=o.attend,u=o.imageMode,p=t.members.map(function(e){return{value:e.id,label:e.name}});return h.a.createElement("div",{className:"container input-user"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"left col-md"},h.a.createElement("div",{className:"form-group"},"T\xean ng\u01b0\u1eddi tham d\u1ef1",h.a.createElement(Y.a,{isClearable:!0,onChange:this.handleChange,placeholder:"T\xean ng\u01b0\u1eddi tham gia",noOptionsMessagefunction:"Ch\u01b0a c\xf3 ai tham gia",options:p})),h.a.createElement("div",{className:"form-group"},"O",h.a.createElement("select",{className:"form-control",value:i,onChange:function(t){return e.setState({title:t.target.value})}},$.map(function(e){return h.a.createElement("option",{key:e,value:e},e)}))),h.a.createElement("div",{className:"d-flex"},h.a.createElement("label",null,h.a.createElement("input",{type:"radio",checked:"upload"===u,onClick:this.changeImageMode("upload")}),h.a.createElement("span",{className:"mx-1"},"Upload file")),h.a.createElement("label",null,h.a.createElement("input",{type:"radio",checked:"link"===u,onClick:this.changeImageMode("link")}),h.a.createElement("span",{className:"mx-1"},"Link h\xecnh"))),"link"===u?h.a.createElement("div",{className:"form-group"},"Link \u1ea3nh",h.a.createElement("input",{type:"text",className:"form-control",placeholder:"Link \u1ea3nh",value:m,onChange:function(t){return e.setState({image:t.target.value})}})):h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{className:"btn btn-success mt-3"},"Upload h\xecnh",h.a.createElement("input",{type:"file",accept:"image/*",className:"d-none",onChange:this.onImageSelected}))),h.a.createElement("div",{className:"d-flex"},h.a.createElement("label",{className:"flex-fill"},h.a.createElement("input",{type:"checkbox",name:"attend",className:"mr-2",checked:l,onChange:function(t){return e.setState({attend:t.target.checked})}}),"Tham gia"),h.a.createElement("label",{className:"flex-fill"},h.a.createElement("input",{type:"checkbox",name:"attend",className:"mr-2",checked:s,onChange:function(t){return e.setState({payment:t.target.checked})}}),"\u0110\xe3 \u0111\xf3ng ti\u1ec1n")),h.a.createElement("div",{className:"my-2"},h.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addMember},"Th\xeam")),m?h.a.createElement("div",{className:"input-avatar"},h.a.createElement("img",{src:m,alt:"Avatar",onError:this.setUIAvatar(this.name)})):null),h.a.createElement("div",{className:"right col-md"},h.a.createElement("div",{className:"title text-center border-bottom mb-2"},"Danh s\xe1ch ng\u01b0\u1eddi tham d\u1ef1 (",r,"/",n,") - ",c," \u0111\xe3 \u0111\xf3ng ti\u1ec1n"),h.a.createElement("div",{className:"member-list"},a.map(function(t){return h.a.createElement("div",{className:"member",key:t.id},h.a.createElement("div",{className:"info"},h.a.createElement("img",{className:"avatar",src:t.image,alt:t.name,onError:e.setUIAvatar(t.name)}),h.a.createElement("span",null,t.name)," - ",t.title),h.a.createElement("div",{className:"status"},h.a.createElement("img",{className:"attend ".concat(t.attend?"done":""),src:"/images/attend.png",alt:"attend"}),h.a.createElement("img",{className:"payment ".concat(t.payment?"done":""),src:"/images/finance.png",alt:"payment"})))})))))}}]),t}(h.a.Component))||m)||m,G=a(77),H=function(e){var t=e.member;return h.a.createElement("div",{className:"person"},h.a.createElement(G.Animated,{isVisible:!!t,animationIn:"tada",animationOut:"bounceOut",className:"avatar",style:t?{backgroundImage:"url(".concat(t.image,")")}:null}),h.a.createElement("div",{className:"info"},h.a.createElement("div",{className:"name"},t?t.name:"..."),h.a.createElement("div",{className:"title"},t?t.title:"")))},Q={image:"/images/unknownperson.png",name:"Unknown",title:"",isDefault:!0},R=Object(E.b)("memberStore")(s=Object(E.c)(s=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).start=function(){var e=a.props.memberStore;a.setState({step:2});var t="/random-demo"===window.location.pathname;a.members=Object(O.n)(e.members.array).filter(function(e){return t||e.attend})},a.action=function(e){return function(){1===e&&a.start(),a.getAPair()}},a.state={step:1,member1:Q,member2:Q},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"getAPerson",value:function(){var e=this.members.length;if(!e)return null;var t=Math.floor(Math.random()*e),a=this.members[t];return this.members.splice(t,1),a}},{key:"getAPair",value:function(){var e=this;this.members.length||this.setState({step:3});var t=this.getAPerson(),a=this.getAPerson();console.group("Pair"),console.log("member1",t),console.log("member2",a),console.groupEnd(),this.setState({member1:null,member2:null}),setTimeout(function(){e.setState({member1:t,member2:a})},300)}},{key:"renderBtn",value:function(){var e=this.state.step,t=1===e?"B\u1eaft \u0111\u1ea7u":2===e?"Ti\u1ebfp t\u1ee5c":"K\u1ebft th\xfac";return h.a.createElement("button",{className:"btn btn-primary start-btn",onClick:this.action(e)},t)}},{key:"render",value:function(){var e=this.state,t=e.member1,a=e.member2,n=e.step;return h.a.createElement("div",{className:"container gift-exchange"},n<3?h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"pair"},h.a.createElement(H,{member:t}),h.a.createElement("img",{className:"exchange animated swing infinite",src:"/images/gift-exchange.png",alt:"exchange"}),h.a.createElement(H,{member:a})),this.renderBtn()):null,h.a.createElement("div",{className:"remain"},this.members&&this.members.length))}}]),t}(h.a.Component))||s)||s,Z=a(78),_=a.n(Z),ee={className:"center",centerMode:!0,infinite:!0,centerPadding:"60px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,cssEase:"linear"},te=Object(E.b)("memberStore")(l=Object(E.c)(l=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).setUIAvatar=function(e){return function(t){t.target.src=B(e)}},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.memberStore;return h.a.createElement("div",{className:"welcome"},h.a.createElement(_.a,ee,e.members.array.map(function(e){return h.a.createElement("div",{key:e.id,className:"welcome-member"},h.a.createElement("img",{src:e.image,className:"avatar",alt:""}))})))}}]),t}(h.a.Component))||l)||l,ae=a(20),ne=Object(ae.a)(),re=function(){return h.a.createElement(I.a,{history:ne},h.a.createElement(x.a,null,h.a.createElement(C.a,{path:"/main",component:z}),h.a.createElement(C.a,{path:"/input-member",component:q}),h.a.createElement(C.a,{path:"/random",component:R}),h.a.createElement(C.a,{path:"/random-demo",component:R}),h.a.createElement(C.a,{path:"/welcome",component:te}),h.a.createElement(C.a,{path:"/",render:function(){return h.a.createElement(P.a,{to:"/main"})}})))},ce={memberStore:S};Object(O.f)({enforceActions:"observed"});var oe=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){A.connect()}},{key:"render",value:function(){return h.a.createElement(E.a,ce,h.a.createElement(re,null))}}]),t}(h.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=document.getElementById("root");b.a.render(h.a.createElement(oe,null),ie),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(175)},86:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.d1d475bf.chunk.js.map