import{a as $}from"./chunk-4366GPH2.js";import{C as p,F as s,vb as h}from"./chunk-OWJSVT4P.js";var r=$.url,i="policiais-ferias",f=(()=>{let e=class e{constructor(t){this.http=t}index(){return this.http.get(`${r}/${i}`)}find(t){return this.http.get(`${r}/${i}/${t}`)}create(t){return this.http.post(`${r}/${i}`,t)}update(t,o){return this.http.put(`${r}/${i}/${t}`,o)}remove(t){return this.http.delete(`${r}/${i}/${t}`)}wherePol(t){return this.http.get(`${r}/${i}/${t}/wherepol`)}};e.\u0275fac=function(o){return new(o||e)(s(h))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{f as a};
