(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(37),a=c.n(s),r=(c(46),c(47),c(12)),j=c(6),d=c(81),l=(c(28),c(1)),o=function(){var e=Object(j.b)().logout;return Object(l.jsx)(d.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},b=function(){var e=Object(j.b)().loginWithRedirect;return Object(l.jsx)(d.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})};var u=function(){var e=Object(j.b)().isAuthenticated;return Object(l.jsx)("nav",{class:"nav-bar",children:Object(l.jsxs)("div",{class:"nav-item",children:[Object(l.jsx)(r.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(l.jsx)(r.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(l.jsx)(r.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(l.jsx)(r.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(l.jsx)(r.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(l.jsx)(r.b,{to:"/teams/createTeam",class:"nav-item-text",children:" new team"}),Object(l.jsx)("div",{class:"nav-item-wallet",children:" 100.00$ "}),Object(l.jsx)("div",{class:"nav-button",children:e?Object(l.jsx)(o,{}):Object(l.jsx)(b,{})})]})})},h=c(5),O=c(13),m=c.n(O);var x=function(e){var t=e.match;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[Object(l.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(l.jsx)("div",{class:"div-match-2",children:"VS"}),Object(l.jsx)("div",{class:"div-match-3",children:t.team_2})]})]})};var v=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){m.a.get("/api/games").then((function(e){return i(e.data)}))}),[]),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(x,{match:e},e.id)}))})};var p=function(){return Object(l.jsx)("div",{class:"div-home-0",children:Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2",children:[Object(l.jsx)("h2",{children:" Match en cours "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)(v,{})]})})})};var f=function(){var e=Object(j.b)().user,t=e.nickname,c=e.picture,i=e.email,s=Object(n.useState)([]),a=Object(h.a)(s,2),r=a[0],d=a[1];return Object(n.useEffect)((function(){m.a.get("/api").then((function(e){return d(e.data)}))}),[]),Object(l.jsx)("div",{class:"profile-container",children:Object(l.jsxs)("div",{class:"div-profile-0",children:[Object(l.jsx)("div",{class:"div-profile-1",children:Object(l.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(l.jsxs)("div",{class:"div-profile-2",children:[Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Adresse e-mail : ",i]})}),Object(l.jsxs)("div",{class:"div-profile-info",children:[Object(l.jsx)("label",{children:"op.gg : "}),Object(l.jsx)("input",{type:"text",value:r.op_gg,onChange:function(e){Object(n.setText)(e.target.value)}}),r.op_gg,console.log(r.op_gg)]})]})]})})},g=c(15),w=c(21);var S=function(){var e=Object(w.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newGame",e),window.location="/"})),children:[Object(l.jsx)("input",Object(g.a)({},t("gameName"))),Object(l.jsx)("input",Object(g.a)({},t("team"))),Object(l.jsx)("input",Object(g.a)({},t("mise"))),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})};var C=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(S,{})})};var k=function(e){var t=e.team;return Object(l.jsx)("div",{class:"team",children:Object(l.jsxs)("div",{class:"teamcard",children:[Object(l.jsxs)("div",{class:"teamcard-info",children:[Object(l.jsxs)("p",{children:[" ",t.team_name," "]}),Object(l.jsxs)("p",{children:[" ",t.team_wallet," "]})]}),Object(l.jsxs)("div",{class:"teamcard-list",children:[Object(l.jsx)("li",{children:"Joueur 1"}),Object(l.jsx)("li",{children:"Joueur 2"}),Object(l.jsx)("li",{children:"Joueur 3"}),Object(l.jsx)("li",{children:"Joueur 4"}),Object(l.jsx)("li",{children:"Joueur 5"})]})]})})},I=c.p+"static/media/add.f29a8121.png";var y=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){m.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(l.jsxs)("div",{class:"teams",children:[Object(l.jsx)("div",{class:"div-team-0",children:Object(l.jsxs)("div",{class:"div-team-1",children:[Object(l.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(l.jsx)("img",{src:I,alt:"+",class:"add-team-img"})}),Object(l.jsx)("div",{className:"div-team-description",children:Object(l.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(l.jsx)(k,{team:e},e.id)}))]})},P=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var T=function(){var e=Object(w.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(l.jsx)("input",Object(g.a)({},t("teamName"))),Object(l.jsx)("input",Object(g.a)({},t("teamPicture"))),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})};var E=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(T,{})})},_=c(39),M=c(3),N=function(e){var t=e.component,c=Object(_.a)(e,["component"]);return Object(l.jsx)(M.a,Object(g.a)({component:Object(j.c)(t,{onRedirecting:function(){return Object(l.jsx)(P,{})}})},c))},F=c(2),L=c.n(F),U=c(10),A=c(40),J=Object(A.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),R=function(e){var t=e.handleClick;return Object(l.jsx)("div",{class:"div-shop",children:Object(l.jsxs)("div",{class:"div-shop-container",children:[Object(l.jsxs)("div",{class:"div-shop-product",children:[Object(l.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(l.jsxs)("div",{className:"div-shop-description",children:[Object(l.jsx)("h3",{children:"1 SC"}),Object(l.jsx)("h5",{children:"1\u20ac"})]})]}),Object(l.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},Q=function(e){var t=e.message;return Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:t})})};function q(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&i("Order placed! You will receive an email confirmation."),e.get("canceled")&&i("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var s=function(){var e=Object(U.a)(L.a.mark((function e(t){var c,n,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.next=11,c.redirectToCheckout({sessionId:i.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(l.jsx)(Q,{message:c}):Object(l.jsx)(R,{handleClick:s})}var B=function(){return Object(j.b)().isLoading?Object(l.jsx)(P,{}):Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{class:"nav-space"}),Object(l.jsxs)(M.c,{children:[Object(l.jsx)(M.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(N,{path:"/profile",exact:!0,component:f}),Object(l.jsx)(N,{path:"/createMatch",exact:!0,component:C}),Object(l.jsx)(M.a,{path:"/teams/createTeam",exact:!0,component:E}),Object(l.jsx)(N,{path:"/teams",exact:!0,component:y}),Object(l.jsx)(N,{path:"/shop",exact:!0,component:q})]})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},X=function(e){var t=e.children;Object(M.f)();return Object(l.jsx)(j.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(X,{children:Object(l.jsx)(B,{})})}),document.getElementById("root")),H()}},[[80,1,2]]]);
//# sourceMappingURL=main.9a2374e7.chunk.js.map