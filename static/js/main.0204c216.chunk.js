(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{11:function(e,n,c){"use strict";c.r(n);var i=c(1),t=c.n(i),a=c(4),s=c.n(a),o=(c(9),c(2)),r=c(0);function j(e){var n=e.image.url;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{alt:"Character",src:n}),Object(r.jsx)("p",{children:e.image.name})]})}var l=function(){var e=Object(i.useState)(0),n=Object(o.a)(e,2),c=n[0],t=n[1],a=Object(i.useState)(0),s=Object(o.a)(a,2),l=s[0],m=s[1],u=Object(i.useState)([]),d=Object(o.a)(u,2),g=d[0],b=d[1],O=Object(i.useState)(!1),h=Object(o.a)(O,2),x=h[0],f=h[1],v=[{url:"./images/Donald.png",name:"Donald"},{url:"./images/Goofy.png",name:"Goofy"},{url:"./images/Kairi.png",name:"Kairi"},{url:"./images/Riku.png",name:"Riku"},{url:"./images/Roxas.png",name:"Roxas"},{url:"./images/Sora.png",name:"Sora"},{url:"./images/Ventus.png",name:"Ventus"},{url:"./images/Xehanort.png",name:"Xehanort"},{url:"./images/Xemnas.png",name:"Xemnas"},{url:"./images/Xion.png",name:"Xion"}],p=function(e){var n=!1;(g.some((function(n){return n.name===e.name}))&&(n=!0),n)?(console.log("That image has been previously clicked"),b([]),l<c&&m(c),t(0),f(!0),setTimeout((function(){f(!1)}),1e3)):(b(g.concat(e)),t(c+1))};return Object(i.useEffect)((function(){10===c&&(console.log("You got 10"),alert("You got them all!"),setTimeout((function(){window.location.reload()}),100))}),[c]),v=function(e){for(var n,c,i=e.length;0!==i;)c=Math.floor(Math.random()*i),n=e[i-=1],e[i]=e[c],e[c]=n;return e}(v),Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Kingdom Hearts Memory Game"}),Object(r.jsx)("p",{children:"Click on each character, without clicking the same one twice"})]}),Object(r.jsxs)("div",{className:(x?"fading":"")+" card-container",children:[Object(r.jsx)("div",{onClick:function(){p(v[0])},children:Object(r.jsx)(j,{image:v[0]})}),Object(r.jsx)("div",{onClick:function(){p(v[1])},children:Object(r.jsx)(j,{image:v[1]})}),Object(r.jsx)("div",{onClick:function(){p(v[2])},children:Object(r.jsx)(j,{image:v[2]})}),Object(r.jsx)("div",{onClick:function(){p(v[3])},children:Object(r.jsx)(j,{image:v[3]})}),Object(r.jsx)("div",{onClick:function(){p(v[4])},children:Object(r.jsx)(j,{image:v[4]})}),Object(r.jsx)("div",{onClick:function(){p(v[5])},children:Object(r.jsx)(j,{image:v[5]})}),Object(r.jsx)("div",{onClick:function(){p(v[6])},children:Object(r.jsx)(j,{image:v[6]})}),Object(r.jsx)("div",{onClick:function(){p(v[7])},children:Object(r.jsx)(j,{image:v[7]})}),Object(r.jsx)("div",{onClick:function(){p(v[8])},children:Object(r.jsx)(j,{image:v[8]})}),Object(r.jsx)("div",{onClick:function(){p(v[9])},children:Object(r.jsx)(j,{image:v[9]})})]}),Object(r.jsxs)("div",{className:"stats",children:[Object(r.jsxs)("p",{children:["Score: ",c]}),Object(r.jsxs)("p",{children:["High Score: ",l]})]})]})};s.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))},9:function(e,n,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.0204c216.chunk.js.map