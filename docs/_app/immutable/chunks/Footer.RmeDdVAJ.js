import{w as ie,s as z,b as te,f as h,h as m,j as _,d as c,r as d,i as q,u as se,g as ae,e as le,o as ne,Y as ce,t as P,a as R,k as C,c as V,l as o,m as x,n as O,F as re,p as ee,H as ue}from"./scheduler.ELV3gSf5.js";import{b as U,t as B,S as j,i as G,c as fe,a as de,m as he,d as me}from"./index.DgtE-HwH.js";import{d as _e,r as pe,w as ve,b as F}from"./paths.D6DoOKFH.js";function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Re(n,e){n.d(1),e.delete(n.key)}function Ve(n,e){U(n,1,1,()=>{e.delete(n.key)})}function Ne(n,e,s,a,t,l,r,A,p,S,T,w){let f=n.length,v=l.length,u=f;const b={};for(;u--;)b[n[u].key]=u;const $=[],k=new Map,y=new Map,E=[];for(u=v;u--;){const i=w(t,l,u),g=s(i);let M=r.get(g);M?a&&E.push(()=>M.p(i,e)):(M=S(g,i),M.c()),k.set(g,$[u]=M),g in b&&y.set(g,Math.abs(u-b[g]))}const D=new Set,L=new Set;function I(i){B(i,1),i.m(A,T),r.set(i.key,i),T=i.first,v--}for(;f&&v;){const i=$[v-1],g=n[f-1],M=i.key,N=g.key;i===g?(T=i.first,f--,v--):k.has(N)?!r.has(M)||D.has(M)?I(i):L.has(N)?f--:y.get(M)>y.get(N)?(L.add(M),I(i)):(D.add(N),f--):(p(g,r),f--)}for(;f--;){const i=n[f];k.has(i.key)||p(i,r)}for(;v;)I($[v-1]);return ie(E),$}const oe={home:{es:"Portada",en:"Home"},explore:{es:"Explorar",en:"Explore"},gallery:{es:"Galería",en:"Gallery"},tour:{es:"Tour",en:"Tour"},metadata:{es:"Metadatos",en:"Metadata"},metadataTable:{es:"Tabla de metadatos",en:"Metadata table"},download:{es:"Descargar",en:"Download"},search:{es:"Buscar",en:"Search"},result:{es:"Resultado",en:"Result"},results:{es:"Resultados",en:"Results"},filters:{es:"Filtros",en:"Filters"},all:{es:"Todos",en:"All"},page:{es:"Página",en:"Page"}},Y=ve("es"),$e=_e(Y,n=>{const e={};for(let[s,a]of Object.entries(oe))e[s]=a[n];return e});pe(Object.keys(oe));const H={lang:"es",localPort:"5173",base:"https://srsergiorodriguez.github.io",baseurl:"/serie-mini",title:"Serie Mini",subtitle:"Un sistema para mini colecciones digitales",credits:"Por Sergio Rodríguez Gómez",copyright:"Todos los derechos reservados, 2024",logos:[{img:"logos/logo.png",link:"https://github.com/srsergiorodriguez/serie-mini"}],pages:{iiifViewer:!0,metadataToShow:[{key:"label",label:"Nombre",type:"text"},{key:"autor",label:"Autor",type:"text"},{key:"fecha",label:"Fecha",type:"text"}],metadataToIndex:["label","autor","fecha"]}};function be(n){let e,s;const a=n[1].default,t=te(a,n,n[0],null);return{c(){e=h("section"),t&&t.c(),this.h()},l(l){e=m(l,"SECTION",{class:!0});var r=_(e);t&&t.l(r),r.forEach(c),this.h()},h(){d(e,"class","general")},m(l,r){q(l,e,r),t&&t.m(e,null),s=!0},p(l,[r]){t&&t.p&&(!s||r&1)&&se(t,a,l,l[0],s?le(a,l[0],r,null):ae(l[0]),null)},i(l){s||(B(t,l),s=!0)},o(l){U(t,l),s=!1},d(l){l&&c(e),t&&t.d(l)}}}function Ee(n,e,s){let a;ne(n,Y,r=>s(2,a=r));let{$$slots:t={},$$scope:l}=e;return ce(Y,a=H.lang,a),n.$$set=r=>{"$$scope"in r&&s(0,l=r.$$scope)},[l,t]}class Oe extends j{constructor(e){super(),G(this,e,Ee,be,z,{})}}function ke(n){let e,s,a,t,l=n[0].home+"",r,A,p,S,T=n[0].explore+"",w,f,v,u,b=n[0].tour+"",$,k,y,E,D=n[0].metadata+"",L;return{c(){e=h("nav"),s=h("ul"),a=h("li"),t=h("a"),r=P(l),A=R(),p=h("li"),S=h("a"),w=P(T),f=R(),v=h("li"),u=h("a"),$=P(b),k=R(),y=h("li"),E=h("a"),L=P(D),this.h()},l(I){e=m(I,"NAV",{});var i=_(e);s=m(i,"UL",{class:!0});var g=_(s);a=m(g,"LI",{class:!0});var M=_(a);t=m(M,"A",{class:!0,href:!0});var N=_(t);r=C(N,l),N.forEach(c),M.forEach(c),A=V(g),p=m(g,"LI",{class:!0});var J=_(p);S=m(J,"A",{class:!0,href:!0});var K=_(S);w=C(K,T),K.forEach(c),J.forEach(c),f=V(g),v=m(g,"LI",{class:!0});var Q=_(v);u=m(Q,"A",{class:!0,href:!0});var W=_(u);$=C(W,b),W.forEach(c),Q.forEach(c),k=V(g),y=m(g,"LI",{class:!0});var X=_(y);E=m(X,"A",{class:!0,href:!0});var Z=_(E);L=C(Z,D),Z.forEach(c),X.forEach(c),g.forEach(c),i.forEach(c),this.h()},h(){d(t,"class","silent-link"),d(t,"href",F),d(a,"class","svelte-16pfn33"),d(S,"class","silent-link"),d(S,"href",F+"/pages#main-title"),d(p,"class","svelte-16pfn33"),d(u,"class","silent-link"),d(u,"href",F+"/tour#main-title"),d(v,"class","svelte-16pfn33"),d(E,"class","silent-link"),d(E,"href",F+"/metadata#main-title"),d(y,"class","svelte-16pfn33"),d(s,"class","menu-list no-select svelte-16pfn33")},m(I,i){q(I,e,i),o(e,s),o(s,a),o(a,t),o(t,r),o(s,A),o(s,p),o(p,S),o(S,w),o(s,f),o(s,v),o(v,u),o(u,$),o(s,k),o(s,y),o(y,E),o(E,L)},p(I,[i]){i&1&&l!==(l=I[0].home+"")&&x(r,l),i&1&&T!==(T=I[0].explore+"")&&x(w,T),i&1&&b!==(b=I[0].tour+"")&&x($,b),i&1&&D!==(D=I[0].metadata+"")&&x(L,D)},i:O,o:O,d(I){I&&c(e)}}}function ye(n,e,s){let a;return ne(n,$e,t=>s(0,a=t)),[a]}class we extends j{constructor(e){super(),G(this,e,ye,ke,z,{})}}function Te(n){let e,s,a,t,l=H.title+"",r,A,p,S=H.subtitle+"",T,w,f,v;return f=new we({}),{c(){e=h("header"),s=h("div"),a=h("h1"),t=h("a"),r=P(l),A=R(),p=h("span"),T=P(S),w=R(),fe(f.$$.fragment),this.h()},l(u){e=m(u,"HEADER",{class:!0,style:!0});var b=_(e);s=m(b,"DIV",{});var $=_(s);a=m($,"H1",{class:!0,id:!0});var k=_(a);t=m(k,"A",{href:!0,class:!0});var y=_(t);r=C(y,l),y.forEach(c),k.forEach(c),A=V($),p=m($,"SPAN",{class:!0});var E=_(p);T=C(E,S),E.forEach(c),$.forEach(c),w=V(b),de(f.$$.fragment,b),b.forEach(c),this.h()},h(){d(t,"href",F),d(t,"class","svelte-uloeko"),d(a,"class","main-title svelte-uloeko"),d(a,"id","main-title"),d(p,"class","main-subtitle"),d(e,"class","main-header svelte-uloeko"),d(e,"style",`background-image: ${n[0]!==void 0?`url(${n[0]})`:"none"};`)},m(u,b){q(u,e,b),o(e,s),o(s,a),o(a,t),o(t,r),o(s,A),o(s,p),o(p,T),o(e,w),he(f,e,null),v=!0},p:O,i(u){v||(B(f.$$.fragment,u),v=!0)},o(u){U(f.$$.fragment,u),v=!1},d(u){u&&c(e),me(f)}}}function Ie(n){return[H.banner!==void 0?/(^http)/.test(H.banner)?H.banner:`${F}/${H.banner}`:void 0]}class qe extends j{constructor(e){super(),G(this,e,Ie,Te,z,{})}}function Me(n){let e,s;const a=n[1].default,t=te(a,n,n[0],null);return{c(){e=h("section"),t&&t.c(),this.h()},l(l){e=m(l,"SECTION",{class:!0});var r=_(e);t&&t.l(r),r.forEach(c),this.h()},h(){d(e,"class","content-slot svelte-j23o33")},m(l,r){q(l,e,r),t&&t.m(e,null),s=!0},p(l,[r]){t&&t.p&&(!s||r&1)&&se(t,a,l,l[0],s?le(a,l[0],r,null):ae(l[0]),null)},i(l){s||(B(t,l),s=!0)},o(l){U(t,l),s=!1},d(l){l&&c(e),t&&t.d(l)}}}function Se(n,e,s){let{$$slots:a={},$$scope:t}=e;return n.$$set=l=>{"$$scope"in l&&s(0,t=l.$$scope)},[t,a]}class ze extends j{constructor(e){super(),G(this,e,Se,Me,z,{})}}function Ae(n,e,s){const a=n.slice();return a[0]=e[s].img,a[1]=e[s].link,a}function De(n){let e,s=ge(H.logos),a=[];for(let t=0;t<s.length;t+=1)a[t]=He(Ae(n,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=ee()},l(t){for(let l=0;l<a.length;l+=1)a[l].l(t);e=ee()},m(t,l){for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(t,l);q(t,e,l)},d(t){t&&c(e),ue(a,t)}}}function He(n){let e,s=`<a href="${n[1]}" target="_blank"><img src="${/(^http)/.test(n[0])?n[0]:`${F}/${n[0]}`}" alt="logo" class="svelte-qump35"/></a> `;return{c(){e=h("div"),e.innerHTML=s,this.h()},l(a){e=m(a,"DIV",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-xyvup8"&&(e.innerHTML=s),this.h()},h(){d(e,"class","logo svelte-qump35")},m(a,t){q(a,e,t)},p:O,d(a){a&&c(e)}}}function Le(n){let e,s,a,t,l=H.credits+"",r,A,p,S='Colección creada con <a href="https://github.com/srsergiorodriguez/serie-mini" target="_blank">Serie Mini</a>',T,w,f,v=H.copyright+"",u,b,$,k=H.logos!==void 0&&De(n);return{c(){e=h("footer"),s=h("div"),a=h("a"),t=h("p"),r=P(l),A=R(),p=h("span"),p.innerHTML=S,T=R(),w=h("div"),f=h("p"),u=P(v),b=R(),$=h("div"),k&&k.c(),this.h()},l(y){e=m(y,"FOOTER",{class:!0});var E=_(e);s=m(E,"DIV",{});var D=_(s);a=m(D,"A",{href:!0});var L=_(a);t=m(L,"P",{});var I=_(t);r=C(I,l),I.forEach(c),L.forEach(c),A=V(D),p=m(D,"SPAN",{"data-svelte-h":!0}),re(p)!=="svelte-1smeedi"&&(p.innerHTML=S),D.forEach(c),T=V(E),w=m(E,"DIV",{});var i=_(w);f=m(i,"P",{class:!0});var g=_(f);u=C(g,v),g.forEach(c),b=V(i),$=m(i,"DIV",{class:!0});var M=_($);k&&k.l(M),M.forEach(c),i.forEach(c),E.forEach(c),this.h()},h(){d(a,"href",F+"/credits"),d(f,"class","main-title no-select"),d($,"class","logos-container svelte-qump35"),d(e,"class","main-footer svelte-qump35")},m(y,E){q(y,e,E),o(e,s),o(s,a),o(a,t),o(t,r),o(s,A),o(s,p),o(e,T),o(e,w),o(w,f),o(f,u),o(w,b),o(w,$),k&&k.m($,null)},p:O,i:O,o:O,d(y){y&&c(e),k&&k.d()}}}class je extends j{constructor(e){super(),G(this,e,null,Le,z,{})}}export{ze as C,Oe as D,je as F,qe as H,H as c,Re as d,ge as e,Ve as o,$e as t,Ne as u};