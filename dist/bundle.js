!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e){var t={};return new FormData(e).forEach(function(e,n){t[n]=e}),JSON.stringify(t)}},function(e,t){e.exports=function(e,t){return new Promise(function(n,o){axios.get("templates/"+e+".hbs").then(function(e){document.getElementById(t).innerHTML=e.data,n("ok")})})}},function(e,t,n){const o=n(3),r=n(4),a=n(5),i=n(6);var l={"/":o,"/addnode/:treeName":a,"/addtree":r.addTree,"/home":i,"/tree/:treeName":r.tree};Router(l).init("/"),void 0!=localStorage.getItem("token")?window.location.assign("/#/home"):window.location.assign("/#/login")},function(e,t,n){const o=n(0);e.exports=function(){axios.get("templates/login.hbs").then(function(e){var t=Handlebars.compile(e.data);document.getElementById("render").innerHTML=t(),function(){var e=document.getElementById("login");e.addEventListener("submit",function(t){t.preventDefault();var n=o(e);axios.post("api/current/user/login",n).then(function(e){200==e.status&&(window.location.assign("#/home"),localStorage.setItem("token",e.data.token))})},!1)}()})}},function(e,t,n){const o=n(1),r=n(0);e.exports={addTree:function(){o("layout","render").then(()=>o("addTree","content")).then(()=>{!function(){var e=document.getElementById("newTree");e.addEventListener("submit",function(t){t.preventDefault();var n=r(e),o=JSON.parse(n);if(localStorage.setItem(o.name,n),null==localStorage.getItem("usuarioarbol")){var a=[o.name];localStorage.setItem("usuarioarbol",JSON.stringify(a))}else{var a=JSON.parse(localStorage.getItem("usuarioarbol"));arbol=o.name,a.push(arbol),localStorage.setItem("usuarioarbol",JSON.stringify(a))}window.location.assign("#/tree/"+o.name)},!1)}()})},tree:function(e){o("layout","render").then(()=>{axios.get("templates/nodeDescription.hbs").then(function(t){var n=Handlebars.compile(t.data),o=JSON.parse(localStorage.getItem(e));document.getElementById("content").innerHTML=n(o),function(e){var t=JSON.parse(localStorage.getItem(e+"-node"));console.log("jajajajaj");var n=new GitGraph({template:"metro",orientation:"vertical",author:"",mode:"extended"});for(n.branch("master"),x=0;x<t.length;x++)n.commit(t[x].name)}(e)})})}}},function(e,t,n){const o=n(1),r=n(0);e.exports=function(e){o("layout","render").then(()=>o("addNode","content")).then(()=>{!function(e){var t=document.getElementById("formNewNode");t.addEventListener("submit",function(n){n.preventDefault();var o=r(t);if(null==localStorage.getItem(e+"-node")){var a=[JSON.parse(o)];localStorage.setItem(e+"-node",JSON.stringify(a))}else{var a=JSON.parse(localStorage.getItem(e+"-node"));a.push(JSON.parse(o)),localStorage.setItem(e+"-node",JSON.stringify(a))}window.location.assign("#/tree/"+e)},!1)}(e)})}},function(e,t,n){const o=n(1);e.exports=function(){o("layout","render").then(()=>o("home","container").then(()=>{!function(){var e=JSON.parse(localStorage.getItem("usuarioarbol"));for(x=0;x<e.length;x++){var t=document.createElement("li");t.setAttribute("id",e[x]);var n=document.createTextNode(e[x]);t.appendChild(n),document.getElementById("desss").appendChild(t),t.addEventListener("onclick",function(t){t.preventDefault(),console.log("holaaa"),window.location.assign("#/tree/"+e[x])},!1)}}(),console.log("jajajajajaja")}))}}]);