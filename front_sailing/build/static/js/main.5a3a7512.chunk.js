(this.webpackJsonpsailling=this.webpackJsonpsailling||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(38),s=c.n(a),r=(c(48),c(49),c(2)),j=c(15),d=c(8),o=c(86),l=(c(29),c(1)),b=function(){var e=Object(d.b)().logout;return Object(l.jsx)(o.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"danger",className:"btn-margin",children:"Se d\xe9connecter"})},u=function(){var e=Object(d.b)().loginWithRedirect;return Object(l.jsx)(o.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"primary",className:"btn-margin",children:"Se connecter"})},m=c(3),h=c.n(m);var O=function(e){var t=e.wallet;return Object(l.jsxs)("div",{children:[t.wallet," SC"]})};var p=function(){var e=Object(d.b)(),t=e.isAuthenticated,c=e.user,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=a[0],o=a[1];return Object(n.useEffect)((function(){if(!0===t){var e=c.nickname;h.a.get("/api/playerByName/".concat(e)).then((function(e){return o(e.data)}))}}),[]),Object(l.jsx)("nav",{class:"nav-bar",children:Object(l.jsxs)("div",{class:"nav-item",children:[Object(l.jsx)(j.b,{to:"/",class:"nav-item-text",children:" ACCUEIL "}),Object(l.jsx)(j.b,{to:"/profile",class:"nav-item-text",children:" PROFIL "}),Object(l.jsx)(j.b,{to:"/createMatch",class:"nav-item-text",children:" CR\xc9ER UN MATCH "}),Object(l.jsx)(j.b,{to:"/teams",class:"nav-item-text",children:" MES \xc9QUIPES "}),Object(l.jsx)(j.b,{to:"/shop",class:"nav-item-text",children:" BOUTIQUE"}),Object(l.jsx)("div",{class:"nav-item-wallet",children:s.map((function(e){return Object(l.jsx)(O,{wallet:e},e)}))}),Object(l.jsx)("div",{class:"nav-button",children:t?Object(l.jsx)(b,{}):Object(l.jsx)(u,{})})]})})};var v=function(e){var t=e.match,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=(i[0],i[1]);return Object(n.useEffect)((function(){h.a.get("/api/teamName/".concat(t.id)).then((function(e){return a(e.data)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[Object(l.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(l.jsx)("div",{class:"div-match-2",children:"VS"}),Object(l.jsx)("div",{class:"div-match-3",children:t.team_2})]})]})},x=c(7),f=c(14);var g=function(e){var t=e.matchbis,c=e.dataTeam,i=Object(n.useState)([]),a=Object(r.a)(i,2),s=(a[0],a[1]);Object(n.useEffect)((function(){h.a.get("/api/teamName/".concat(t.id)).then((function(e){return s(e.data)}))}),[]);var j=Object(f.a)(),d=j.register,o=j.handleSubmit;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{class:"div-game-info",children:[' "',t.game_name,'" | Mise : ',t.mise," SC"]}),Object(l.jsxs)("div",{class:"div-match-0",children:[Object(l.jsx)("div",{class:"div-match-1",children:t.team_1}),Object(l.jsx)("div",{class:"div-match-2",children:"VS"}),Object(l.jsx)("div",{class:"div-match-3",children:Object(l.jsxs)("form",{onSubmit:o((function(e){var c={id:t.id,opponent:e.teamID};!t.team_1==e.teamID?h.a.post("/api/updateOpponent",c):alert("Erreur, vous devez \xeatre connecter pour rejoindre un match avec votre \xe9quipe, deplus une m\xeame \xe9quipe ne peux s'affronter.")})),class:"matchbis-form",children:[Object(l.jsx)("label",{for:"teams",children:"\xc9quipe : "}),Object(l.jsx)("select",Object(x.a)(Object(x.a)({id:"teams"},d("teamID")),{},{children:c.map((function(e){return Object(l.jsx)("option",{children:e.id})}))})),Object(l.jsx)("button",{type:"submit",class:"matchbis-button",children:" \u21a9 "})]})})]})]})};var S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(r.a)(a,2),j=s[0],d=s[1],o=Object(n.useState)([]),b=Object(r.a)(o,2),u=b[0],m=b[1];return Object(n.useEffect)((function(){h.a.get("/api/gamesWithOpponent").then((function(e){return i(e.data)})),h.a.get("/api/gamesWithoutOpponent").then((function(e){return d(e.data)})),h.a.get("/api/teams").then((function(e){return m(e.data)}))}),[]),Object(l.jsxs)("div",{class:"div-home-0",children:[Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2-bis",children:[Object(l.jsx)("h2",{children:" Recherche de match "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsx)(g,{dataTeam:u,matchbis:e},e.id)}))})]})}),Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsxs)("div",{class:"div-home-2",children:[Object(l.jsx)("h2",{children:" Match en cours "}),Object(l.jsx)("div",{class:"h2-place"}),Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(v,{match:e},e.id)}))})]})})]})};var w=function(){var e=Object(d.b)().user,t=e.nickname,c=e.picture,n=e.email,i=Object(f.a)(),a=i.register,s=i.handleSubmit;return Object(l.jsx)("div",{class:"profile-container",children:Object(l.jsxs)("div",{class:"div-profile-0",children:[Object(l.jsx)("div",{class:"div-profile-1",children:Object(l.jsx)("img",{src:c,alt:"image",class:"profile-img"})}),Object(l.jsxs)("div",{class:"div-profile-2",children:[Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Pseudo : ",t]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("h2",{children:["Adresse e-mail : ",n]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={opGg:e.opGg,pseudo:t};h.a.post("/api/updateOpGg",c),window.location="/profile"})),children:[Object(l.jsx)("label",{children:" opgg : "}),Object(l.jsx)("input",Object(x.a)({},a("opGg"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})}),Object(l.jsx)("div",{class:"div-profile-info",children:Object(l.jsxs)("form",{onSubmit:s((function(e){var c={pseudo:t,summonerName:e.summonerName,email:n};h.a.post("/api/newPlayer",c),window.location="/profile"})),children:[Object(l.jsx)("label",{children:" summoner name : "}),Object(l.jsx)("input",Object(x.a)({},a("summonerName"))),Object(l.jsx)("button",{type:"submit",children:"Enregistrer"})]})})]})]})})},C=c(28),y=c.n(C);y.a.init("MIXPANEL_TOKEN");var I=function(e){var t=e.dataTeam,c=Object(f.a)(),n=c.register,i=c.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{class:"form",onSubmit:i((function(e){h.a.post("/api/newGame",e),window.location="/",y.a.track("Match created")})),children:[Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Nom de la partie : "}),Object(l.jsx)("input",Object(x.a)({},n("gameName")))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{for:"teams",children:"\xc9quipe : "}),Object(l.jsx)("select",Object(x.a)(Object(x.a)({id:"teams"},n("team")),{},{children:t.map((function(e){return Object(l.jsx)("option",{children:e.id})}))}))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Mise : "}),Object(l.jsx)("input",Object(x.a)({},n("mise")))]}),Object(l.jsx)("div",{class:"form-item",children:Object(l.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var E=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){h.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(l.jsx)("div",{class:"div-home-0",children:Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsx)("div",{class:"div-home-2-form",children:Object(l.jsx)(I,{dataTeam:c})})})})},N=c(40);var k=function(e){var t=e.team,c=e.teamComp,n=Object(f.a)(),i=n.register,a=n.handleSubmit;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"addplayer-id",children:c.map((function(e){return Object(l.jsxs)("p",{children:[" ",e.pseudo]})}))}),Object(l.jsxs)("form",{onSubmit:a((function(e){var n={playerID:e.pseudo,teamID:t.id},i=!1;c.map((function(c){e.pseudo==c.id_player&&(alert("Impossible, le joueur est d\xe9j\xe0 dans l'\xe9quipe ".concat(t.team_name,".")),Object(N.a)("isPresent"),i=!0)})),i||(h.a.post("/api/addPlayerInTeam",n),alert("Joueur ajouter a l'\xe9quipe ".concat(t.team_name,". ")),window.location="/teams")})),children:[Object(l.jsx)("input",Object(x.a)({},i("pseudo"))),Object(l.jsx)("button",{type:"submit",children:"Ajouter"})]})]})};var P=function(e){var t=e.team,c=Object(n.useState)([]),i=Object(r.a)(c,2),a=i[0],s=i[1];return Object(n.useEffect)((function(){h.a.get("/api/teamComposition/".concat(t.id)).then((function(e){return s(e.data)}))}),[]),Object(l.jsx)("div",{class:"team",children:Object(l.jsxs)("div",{class:"teamcard",children:[Object(l.jsx)("div",{class:"teamcard-info",children:Object(l.jsxs)("p",{children:[" ",t.team_name," "]})}),Object(l.jsx)("div",{class:"teamcard-list",children:Object(l.jsx)("li",{children:Object(l.jsx)(k,{team:t,teamComp:a})})})]})})},T=c.p+"static/media/add.f29a8121.png";var q=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){h.a.get("/api/teams").then((function(e){return i(e.data)}))}),[]),Object(l.jsxs)("div",{class:"teams",children:[Object(l.jsx)("div",{class:"div-team-0",children:Object(l.jsxs)("div",{class:"div-team-1",children:[Object(l.jsx)("a",{class:"add-team",href:"/teams/createTeam",children:Object(l.jsx)("img",{src:T,alt:"+",class:"add-team-img"})}),Object(l.jsx)("div",{className:"div-team-description",children:Object(l.jsx)("h5",{children:"Cr\xe9er une \xe9quipe"})})]})}),c.map((function(e){return Object(l.jsx)(P,{team:e},e.id)}))]})},M=function(){return Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})};var _=function(){var e=Object(f.a)(),t=e.register,c=e.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{class:"form",onSubmit:c((function(e){h.a.post("/api/newTeam",e),window.location="/teams"})),children:[Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{children:" Nom de l'\xe9quipe : "}),Object(l.jsx)("input",Object(x.a)({},t("teamName")))]}),Object(l.jsxs)("div",{class:"form-item",children:[Object(l.jsx)("label",{for:"teams",children:"Image d'\xe9quipe ( pas obligatoire ) : "}),Object(l.jsx)("input",Object(x.a)({},t("teamPicture")))]}),Object(l.jsx)("div",{class:"form-item",children:Object(l.jsx)("button",{class:"form-button",type:"submit",children:"Cr\xe9er"})})]})})};var A=function(){return Object(l.jsx)("div",{class:"div-home-0",children:Object(l.jsx)("div",{class:"div-home-1",children:Object(l.jsx)("div",{class:"div-home-2-form",children:Object(l.jsx)(_,{})})})})},L=c(41),D=c(5),F=function(e){var t=e.component,c=Object(L.a)(e,["component"]);return Object(l.jsx)(D.a,Object(x.a)({component:Object(d.c)(t,{onRedirecting:function(){return Object(l.jsx)(M,{})}})},c))},R=c(4),U=c.n(R),B=c(12),Q=c(42),G=Object(Q.a)("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W"),H=function(e){var t=e.handleClick;return Object(l.jsx)("div",{class:"div-shop",children:Object(l.jsxs)("div",{class:"div-shop-container",children:[Object(l.jsxs)("div",{class:"div-shop-product",children:[Object(l.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/53-537072_riot-games-fist-bump-clipart.png",alt:"sailing-coin-logo",class:"sailing-coin-img"}),Object(l.jsxs)("div",{className:"div-shop-description",children:[Object(l.jsx)("h3",{children:"1 SC"}),Object(l.jsx)("h5",{children:"1\u20ac"})]})]}),Object(l.jsx)("button",{type:"button",id:"checkout-button",role:"link",onClick:t,children:"Acheter"})]})})},X=function(e){var t=e.message;return Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:t})})};function J(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&i("Order placed! You will receive an email confirmation."),e.get("canceled")&&i("Order canceled -- continue to shop around and checkout when you're ready.")}),[]);var a=function(){var e=Object(B.a)(U.a.mark((function e(t){var c,n,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G;case 2:return c=e.sent,e.next=5,fetch("/create-checkout-session",{method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:return i=e.sent,e.next=11,c.redirectToCheckout({sessionId:i.id});case 11:e.sent.error;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(l.jsx)(X,{message:c}):Object(l.jsx)(H,{handleClick:a})}var W=function(){return Object(d.b)().isLoading?Object(l.jsx)(M,{}):Object(l.jsx)(j.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(p,{}),Object(l.jsx)("div",{class:"nav-space"}),Object(l.jsxs)(D.c,{children:[Object(l.jsx)(D.a,{path:"/",exact:!0,component:S}),Object(l.jsx)(F,{path:"/profile",exact:!0,component:w}),Object(l.jsx)(F,{path:"/createMatch",exact:!0,component:E}),Object(l.jsx)(F,{path:"/teams/createTeam",exact:!0,component:A}),Object(l.jsx)(F,{path:"/teams",exact:!0,component:q}),Object(l.jsx)(F,{path:"/shop",exact:!0,component:J})]})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};c(82).config();var Y=function(e){var t=e.children;return Object(l.jsx)(d.a,{domain:"dev-cip8s-8m.eu.auth0.com",clientId:"0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj",redirectUri:window.location.origin,onRedirectCallback:function(){return window.history.replaceState({},document.title,window.location.pathname)},audience:"https://sailing.com/api",children:t})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(Y,{children:Object(l.jsx)(W,{})})}),document.getElementById("root")),V()}},[[85,1,2]]]);
//# sourceMappingURL=main.5a3a7512.chunk.js.map