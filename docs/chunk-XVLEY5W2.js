import{C as o,D as i,E as m,F as h,G as r,H as f,J as b,K as y,M as g,Q as D,R as M,Y as u,_ as C,k as n,m as p,o as d,p as a,v as l}from"./chunk-2AHEPMOH.js";var S=(()=>{class t{constructor(){this.authService=p(C),this.user=g(()=>this.authService.currentUser())}onLogout(){this.authService.logout()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-dashboard-layout"]],decls:11,vars:3,consts:[[3,"click"]],template:function(e,c){e&1&&(o(0,"h1"),r(1,"Dashboard"),i(),m(2,"hr"),o(3,"h3"),r(4,"User"),i(),o(5,"pre"),r(6),b(7,"json"),i(),m(8,"br"),o(9,"button",0),h("click",function(){return c.onLogout()}),r(10,` Cerrar Sesi\xF3n
`),i()),e&2&&(l(6),f(y(7,1,c.user())))},dependencies:[D]})}}return t})();var L=[{path:"",component:S}],x=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=n({imports:[u.forChild(L),u]})}}return t})();var J=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=a({type:t})}static{this.\u0275inj=n({imports:[M,x]})}}return t})();export{J as a};