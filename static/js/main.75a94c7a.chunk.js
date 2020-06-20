(this["webpackJsonpreact-custom-redux"]=this["webpackJsonpreact-custom-redux"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(1),u=n(2),m=n(4),d=n(3),h=n(7),f=n.n(h);var v=function(e,t){var n=t,a=[];return{getState:function(){return n},dispatch:function(t){n=e(n,t),a.forEach((function(e){return e()}))},subscribe:function(e){return a.push(e)}}}((function(e,t){switch(t.type){case"ADD_MESSAGE":return{messages:e.messages.concat(t.message)};case"DEL_MESSAGE":return{messages:e.messages.filter((function(e,n){return t.idx!==n}))};default:return e}}),{messages:[]}),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){var n=t.target.value;e.setState({value:n})},e.handleSubmit=function(t){t.preventDefault(),e.state.value.length&&(v.dispatch({type:"ADD_MESSAGE",message:{author:e.props.username,color:e.props.color,content:e.state.value}}),e.setState({value:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.color;return r.a.createElement("form",{className:"ui labeled action fluid mini input",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"ui label"},t),r.a.createElement("input",{type:"text",placeholder:"...",onChange:this.handleChange,value:this.state.value}),r.a.createElement("button",{type:"submit",className:"ui button mini "+n},r.a.createElement("i",{className:"arrow alternate circle down outline icon"})))}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleDel=function(e){v.dispatch({type:"DEL_MESSAGE",idx:e})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.subscribe((function(){return e.forceUpdate()}))}},{key:"render",value:function(){var e=this,t=v.getState().messages;return r.a.createElement(r.a.Fragment,null,t.map((function(t,n){return r.a.createElement("div",{className:"ui message "+t.color,key:n},r.a.createElement("i",{className:"close icon",onClick:function(){return e.handleDel(n)}}),r.a.createElement("div",{className:"header"},t.author),r.a.createElement("p",null,t.content))})))}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.theme,a=e.children;return r.a.createElement("section",{className:"ui column five wide"},r.a.createElement("h2",null,a),r.a.createElement(p,{username:t,color:n}),r.a.createElement(b,null))}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.subscribe((function(){return e.forceUpdate()}))}},{key:"render",value:function(){var e=v.getState();return r.a.createElement(f.a,{src:null===e||void 0===e?void 0:e.messages,name:"Messages",collapsed:!0,displayDataTypes:!1,indentWidth:"2",iconStyle:"circle",theme:"ocean"})}}]),n}(a.Component),w=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement(E,null),r.a.createElement("h1",{className:"ui dividing centered header"},"Flow-chats"),r.a.createElement("div",{className:"ui aligned page grid"},r.a.createElement(g,{user:"Abzu",theme:"violet"},"Subterranean"),r.a.createElement(g,{user:"Tiamat",theme:"teal"},"Surface"),r.a.createElement(g,{user:"Marduk",theme:"blue"},"Sky")))}}]),n}(a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-custom-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-custom-redux","/service-worker.js");i?(!function(e,t){n(14)(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.75a94c7a.chunk.js.map