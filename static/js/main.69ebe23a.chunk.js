(this.webpackJsonpface_recognition=this.webpackJsonpface_recognition||[]).push([[0],{298:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(39),r=a.n(i),o=(a(81),a(17)),c=a(18),l=a(20),m=a(19),u=a(73),g=a.n(u),d=(a(82),a(74)),h=a.n(d),p=function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner"},s.a.createElement("img",{style:{paddingTop:"8px"},src:h.a,alt:"Logo"}))))},b=(a(83),function(e){var t=e.onRouteChange;return!0===e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{className:"f3 link dim black underline pointer",onClick:function(){return t("signout")}},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{className:"f3 link dim black underline pointer pr3",onClick:function(){return t("register")}},"Register"),s.a.createElement("p",{className:"f3 link dim black underline pointer",onClick:function(){return t("signin")}},"Sign In"))}),A=(a(84),function(e){return s.a.createElement("div",{className:"image_link"},s.a.createElement("p",{className:"f3"},e.predictions),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"center pa4 br3 shadow-3 form shrinks"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:e.onInputChange}),s.a.createElement("button",{className:"w-30 f4 link ph3 pv2 dib grow white bg-light-purple",onClick:e.onDetectPress},"Detect"))))}),f=function(e){var t=e.user;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f1"},"Hello "+t.name),s.a.createElement("div",{className:"white f3"},"You have submitted "+t.entries+" images."))},w=a(75),E=a.n(w),v={particles:{number:{value:90,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3.945738208161363,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:3.3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},N=(a(72),function(e){var t=e.boxes;return s.a.createElement("div",null,t.map((function(e,t){return s.a.createElement("div",{key:t,className:"bounding-box",style:e})})))}),S=function(e){var t=e.imgURL,a=e.boxes;return s.a.createElement("div",{className:"custom_center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"mainImg",alt:"",src:t,height:"500px",width:"auto"}),s.a.createElement(N,{boxes:a})))},C={BASE:"https://evening-depths-86865.herokuapp.com/",SIGNIN:"signin",REGISTER:"register",SUBMIT_IMAGE:"image"},B=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSignInSubmit=function(){fetch(C.BASE+C.SIGNIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&(n.props.loadUser(e[0]),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ba shadow-5"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure center br2"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2",onClick:this.onSignInSubmit,type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return e("register")}},"Register")))))}}]),a}(s.a.Component),I=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({registerName:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onSubmitRegister=function(){fetch(C.BASE+C.REGISTER,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.registerName,email:n.state.registerEmail,password:n.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){"success"===e&&n.props.onRouteChange("signin")}))},n.state={registerName:"",registerEmail:"",registerPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center ba shadow-5"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure center br2"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2",onChange:this.onNameChange,type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2",onChange:this.onEmailChange,type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 br2",onChange:this.onPasswordChange,type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2",onClick:this.onSubmitRegister,type:"submit",value:"Register"})))))}}]),a}(s.a.Component),k={input:"",imgURL:"",boxes:[],isSignedIn:!1,user:{name:"",email:"",entries:0,joined:""},route:"signin"},y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.calculateBoxes=function(e){var t=[],a=document.getElementById("mainImg"),n=Number(a.height),s=Number(a.width);return e.outputs[0].data.regions.forEach((function(e){t.push({top:e.region_info.bounding_box.top_row*n,left:e.region_info.bounding_box.left_col*s,bottom:n-e.region_info.bounding_box.bottom_row*n,right:s-e.region_info.bounding_box.right_col*s})})),t},e.displayBoxes=function(t){e.setState({boxes:t})},e.onDetectPress=function(){e.setState({imgURL:e.state.input,boxes:[]}),fetch(C.BASE+C.SUBMIT_IMAGE,{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,image_url:e.state.input})}).then((function(e){return e.json()})).then((function(t){e.displayBoxes(e.calculateBoxes(t));var a=e.state.user;a.entries++,e.setState({user:a}),sessionStorage.setItem("state",JSON.stringify(e.state))})).catch((function(e){return console.log("error loading image")}))},e.onRouteChange=function(t){e.setState({route:t}),"signout"===t?(e.setState(k),e.setState({isSignedIn:!1}),sessionStorage.removeItem("state")):"home"===t&&(e.setState({isSignedIn:!0}),sessionStorage.setItem("state",JSON.stringify(e.state)))},e.loadUser=function(t){e.setState({user:t})},e.displayRoute=function(){switch(e.state.route){case"signin":case"signout":return s.a.createElement(B,{loadUser:e.loadUser,onRouteChange:e.onRouteChange});case"home":return s.a.createElement("div",null,s.a.createElement(p,null),s.a.createElement(f,{user:e.state.user}),s.a.createElement(A,{predictions:e.state.predictions,onInputChange:e.onInputChange,onDetectPress:e.onDetectPress}),s.a.createElement(S,{boxes:e.state.boxes,imgURL:e.state.imgURL}));case"register":return s.a.createElement(I,{onRouteChange:e.onRouteChange});default:return s.a.createElement("div",null)}},e.state={input:"",imgURL:"",boxes:[],isSignedIn:!1,user:{name:"",email:"",entries:0,joined:""},route:"signin"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){sessionStorage.getItem("state")&&this.setState(JSON.parse(sessionStorage.getItem("state")))}},{key:"componentWillUnmount",value:function(){sessionStorage.setItem("state",JSON.stringify(this.state))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E.a,{className:"particles",params:v}),s.a.createElement(b,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),this.displayRoute())}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(297);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){},74:function(e,t){e.exports="data:image/png;base64,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"},76:function(e,t,a){e.exports=a(298)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.69ebe23a.chunk.js.map