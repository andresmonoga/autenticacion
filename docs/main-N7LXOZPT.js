import{a as R}from"./chunk-XVLEY5W2.js";import{A as c,C as A,D as g,E as v,G as S,M,N as C,P as y,S as _,T as b,U as x,V as N,W as a,Y as m,Z as r,_ as n,k as u,m as o,o as f,p as s,v as d,z as l}from"./chunk-2AHEPMOH.js";var j=(t,p)=>{let i=o(n),e=o(a);return i.authStatus()===r.authenticated?!0:(e.navigateByUrl("/auth/login"),!1)};var w=(t,p)=>{let i=o(n),e=o(a);return i.authStatus()===r.authenticated?(e.navigateByUrl("/dashboard"),!1):!0};var G=[{path:"auth",canActivate:[w],loadChildren:()=>import("./chunk-PYY6NDHL.js").then(t=>t.AuthModule)},{path:"dashboard",canActivate:[j],loadChildren:()=>import("./chunk-W5TOOLAY.js").then(t=>t.DashboardModule)},{path:"**",redirectTo:"auth"}],I=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=s({type:t})}static{this.\u0275inj=u({imports:[m.forRoot(G,{useHash:!0}),m]})}}return t})();function T(t,p){t&1&&(A(0,"h1"),S(1,` Loadfing
`),g())}function U(t,p){t&1&&v(0,"router-outlet")}var k=(()=>{class t{constructor(){this.authService=o(n),this.router=o(a),this.finishedAuthCheck=M(()=>(console.log(this.authService.authStatus()),this.authService.authStatus()!==r.checking)),this.authStatusChangedEffect=C(()=>{switch(this.authService.authStatus()){case r.checking:return;case r.authenticated:this.router.navigateByUrl("/dashboard");return;case r.notAuthenticated:this.router.navigateByUrl("/auth/login");return}})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=f({type:t,selectors:[["app-root"]],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(e,h){e&1&&l(0,T,2,0,"h1",0)(1,U,1,0,"router-outlet",0),e&2&&(c("ngIf",!h.finishedAuthCheck()),d(),c("ngIf",h.finishedAuthCheck()))},dependencies:[y,N]})}}return t})();var D=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=s({type:t,bootstrap:[k]})}static{this.\u0275inj=u({imports:[x,I,_,R]})}}return t})();b().bootstrapModule(D).catch(t=>console.error(t));