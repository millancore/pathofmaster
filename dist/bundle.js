!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e){var t={};return new FormData(e).forEach(function(e,n){t[n]=e}),JSON.stringify(t)}},function(e,t){e.exports=function(e,t){return new Promise(function(n,o){axios.get("templates/"+e+".hbs").then(function(e){document.getElementById(t).innerHTML=e.data,n("ok")})})}},function(e,t,n){const o=n(3),r=n(4),a=n(5),i=n(6);var u={"/":o,"/addnode":a,"/addtree":r.addTree,"/home":i,"/tree/:treeName":r.tree};Router(u).init("/"),void 0!=localStorage.getItem("token")?window.location.assign("/#/home"):window.location.assign("/#/login")},function(e,t,n){const o=n(0);e.exports=function(){axios.get("templates/login.hbs").then(function(e){var t=Handlebars.compile(e.data);document.getElementById("render").innerHTML=t(),function(){var e=document.getElementById("login");e.addEventListener("submit",function(t){t.preventDefault();var n=o(e);axios.post("api/current/user/login",n).then(function(e){200==e.status&&(window.location.assign("#/home"),localStorage.setItem("token",e.data.token))})},!1)}()})}},function(e,t,n){const o=n(1),r=n(0);e.exports={addTree:function(){o("layout","render").then(()=>o("addTree","content")).then(()=>{!function(){var e=document.getElementById("newTree");e.addEventListener("submit",function(t){t.preventDefault();var n=r(e),o=JSON.parse(n);localStorage.setItem(o.name,n),window.location.assign("#/tree/"+o.name)},!1)}()})},tree:function(e){o("layout","render").then(()=>{axios.get("templates/nodeDescription.hbs").then(function(t){var n=Handlebars.compile(t.data),o=JSON.parse(localStorage.getItem(e));document.getElementById("content").innerHTML=n(o)})})}}},function(e,t,n){const o=n(1),r=n(0);e.exports=function(){o("layout","render").then(()=>o("addNode","content")).then(()=>{!function(){var e=document.getElementById("formNewNode");e.addEventListener("submit",function(t){t.preventDefault();var n=r(e);if(null==localStorage.getItem("node")){var o=[JSON.parse(n)];localStorage.setItem("node",JSON.stringify(o))}else{var o=JSON.parse(localStorage.getItem("node"));o.push(JSON.parse(n)),localStorage.setItem("node",JSON.stringify(o))}window.location.assign("#/tree/sarza")},!1)}()})}},function(e,t,n){const o=n(1);e.exports=function(){o("layout","render").then(()=>o("home","container"))}}]);