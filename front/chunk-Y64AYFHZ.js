import{a as $}from"./chunk-UKCOEVIY.js";import{C as p,F as s,vb as h}from"./chunk-OWJSVT4P.js";var r=$.url,i="policiais",d=(()=>{let e=class e{constructor(t){this.http=t}index(){return this.http.get(`${r}/${i}`)}find(t){return this.http.get(`${r}/${i}/${t}`)}create(t){return this.http.post(`${r}/${i}`,t)}update(t,n){return this.http.put(`${r}/${i}/${t}`,n)}remove(t){return this.http.delete(`${r}/${i}/${t}`)}disponiveis(){return this.http.get(`${r}/${i}/disponiveis`)}updateFoto(t,n){return this.http.put(`${r}/${i}/${t}/updatefoto`,n)}};e.\u0275fac=function(n){return new(n||e)(s(h))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{d as a};
