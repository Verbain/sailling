(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(37),s=c.n(a),r=(c(46),c(47),c(13)),j=c(7),o=c(81),d=(c(28),c(1)),l=function(){var e=Object(j.b)().logout;return Object(d.jsx)(o.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},b=function(){var e=Object(j.b)().loginWithRedirect;return Object(d.jsx)(o.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})};var u=function(){var e=Object(j.b)().isAuthenticated;return Object(d.jsx)("nav",{class:"nav-bar",children:Object(d.jsxs)("div",{class:"nav-item",children:[Object(d.jsx)(r.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(d.jsx)(r.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(d.jsx)(r.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(d.jsx)(r.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(d.jsx)(r.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(d.jsx)(r.b,{to:"/teams/createTeam",class:"nav-item-text",children:" new team"}),Object(d.jsx)("div",{class:"nav-item-wallet",children:" 100.00$ "}),Object(d.jsx)("div",{class:"nav-button",children:e?Object(d.jsx)(l,{}):Object(d.jsx)(b,{})})]})})},O=c(4),h=c(6),m=c.n(h);var x=function(e){var t=e.match;return m.a.get("/api/teamName/".concat(t.id)).then((function(e){var t=e.data;console.log(t)})),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(d.jsxs)("div",{class:"div-match-0",children:[Object(d.jsx)("div",{class:"div-match-1",children:"".team_name}),Object(d.jsx)("div",{class:"div-match-2",children:"VS"}),Object(d.jsx)("div",{class:"div-match-3",children:t.team_2})]})]})};var v=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){m.a.get("/api/games").then((function(e){return i(e.data)}))}),[]),Object(d.jsx)("div",{children:c.map((function(e){return Object(d.jsx)(x,{match:e},e.id)}))})};var p=function(){return Object(d.jsx)("div",{class:"div-home-0",children:Object(d.jsx)("div",{class:"div-home-1",children:Object(d.jsxs)("div",{class:"div-home-2",children:[Object(d.jsx)("h2",{children:" Match en cours "}),Object(d.jsx)("div",{class:"h2-place"}),Object(d.jsx)(v,{})]})})})};var f=function(){var e=Object(j.b)().user,t=e.nickname,c=e.picture,i=e.email,a=Object(n.useState)([]),s=Object(O.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){m.a.get("/api").then((function(e){return o(e.data)}))}),[]),Object(d.jsx)("div",{class:"profile-container",children:Object(d.jsxs)("div",{class:"div-profile-0",children:[Object(d.jsx)("div",{class:"div-profile-1",children:Object(d.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(d.jsxs)("div",{class:"div-profile-2",children:[Object(d.jsx)("div",{class:"div-profile-info",children:Object(d.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(d.jsx)("div",{class:"div-profile-info",children:Object(d.jsxs)("h2",{children:["Adresse e-mail : ",i]})}),Object(d.jsxs)("div",{class:"div-profile-info",children:[Object(d.jsx)("label",{children:"op.gg : "}),Object(d.jsx)("input",{type:"text",value:r.op_gg,onChange:function(e){Object(n.setText)(e.target.value)}}),r.op_gg,console.log(r.op_gg)]})]})]})})},g=c(14),S=c(18);var w=function(){var e=Object(S.a)(),t=e.register,c=e.handleSubmit;return Object(d.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newGame",e),window.location="/"})),children:[Object(d.jsx)("input",Object(g.a)({},t("gameName"))),Object(d.jsx)("input",Object(g.a)({},t("team"))),Object(d.jsx)("input",Object(g.a)({},t("mise"))),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})};var C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(w,{})})};var y=function(e){var t=e.team,c=Object(S.a)(),i=c.register,a=c.handleSubmit,s=Object(n.useState)([]),r=Object(O.a)(s,2),j=r[0],o=r[1];return Object(d.jsxs)("form",{onSubmit:a((function(e){m.a.get("/api/playerByName/".concat(e.pseudo)).then((function(e){return o(e.data)})),console.log(j);var c={id_player:j.id_player,id_team:t.id};console.log(c),m.a.post("/api/addPlayerInTeam",c),console.log(j)})),children:[Object(d.jsx)("input",Object(g.a)({},i("pseudo"))),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})};var k=function(e){var t=e.team,c=Object(n.useState)([]),i=Object(O.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){m.a.get("/api/teams").then((function(e){return a(e.data)}))}),[]),Object(d.jsx)("div",{class:"team",children:Object(d.jsxs)("div",{class:"teamcard",children:[Object(d.jsx)("div",{class:"teamcard-info",children:Object(d.jsxs)("p",{children:[" ",t.team_name," "]})}),Object(d.jsx)("div",{class:"teamcard-list",children:Object(d.jsx)("li",{children:Object(d.jsx)(y,{team:t})})})]})})},I=c.p+"static/media/add.f29a8121.png";var P=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){m.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(d.jsxs)("div",{class:"teams",children:[Object(d.jsx)("div",{class:"div-team-0",children:Object(d.jsxs)("div",{class:"div-team-1",children:[Object(d.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(d.jsx)("img",{src:I,alt:"+",class:"add-team-img"})}),Object(d.jsx)("div",{className:"div-team-description",children:Object(d.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(d.jsx)(k,{team:e},e.id)}))]})},T=function(){return Object(d.jsx)("div",{className:"spinner",children:Object(d.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var _=function(){var e=Object(S.a)(),t=e.register,c=e.handleSubmit;return Object(d.jsxs)("form",{onSubmit:c((function(e){m.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(d.jsx)("input",Object(g.a)({},t("teamName"))),Object(d.jsx)("input",Object(g.a)({},t("teamPicture"))),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})};var E=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(_,{})})},N=c(39),M=c(3),F=function(e){var t=e.component,c=Object(N.a)(e,["component"]);return Object(d.jsx)(M.a,Object(g.a)({component:Object(j.c)(t,{onRedirecting:function(){return Object(d.jsx)(T,{})}})},c))},L=c(2),U=c.n(L),A=c(11),R=c(40),B=Object(R.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),Q=function(e){var t=e.handleClick;return Object(d.jsx)("div",{class:"div-shop",children:Object(d.jsxs)("div",{class:"div-shop-container",children:[Object(d.jsxs)("div",{class:"div-shop-product",children:[Object(d.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(d.jsxs)("div",{className:"div-shop-description",children:[Object(d.jsx)("h3",{children:"1 SC"}),Object(d.jsx)("h5",{children:"1\u20ac"})]})]}),Object(d.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},q=function(e){var t=e.message;return Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:t})})};function H(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&i("Order placed! You will receive an email confirmation."),e.get("canceled")&&i("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var a=function(){var e=Object(A.a)(U.a.mark((function e(t){var c,n,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.next=11,c.redirectToCheckout({sessionId:i.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(d.jsx)(q,{message:c}):Object(d.jsx)(Q,{handleClick:a})}var X=function(){return Object(j.b)().isLoading?Object(d.jsx)(T,{}):Object(d.jsx)(r.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{class:"nav-space"}),Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/",exact:!0,component:p}),Object(d.jsx)(F,{path:"/profile",exact:!0,component:f}),Object(d.jsx)(F,{path:"/createMatch",exact:!0,component:C}),Object(d.jsx)(M.a,{path:"/teams/createTeam",exact:!0,component:E}),Object(d.jsx)(F,{path:"/teams",exact:!0,component:P}),Object(d.jsx)(F,{path:"/shop",exact:!0,component:H})]})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},J=function(e){var t=e.children;Object(M.f)();return Object(d.jsx)(j.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(J,{children:Object(d.jsx)(X,{})})}),document.getElementById("root")),D()}},[[80,1,2]]]);
//# sourceMappingURL=main.54563a21.chunk.js.map