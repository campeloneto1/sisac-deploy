import{a as c,b as u}from"./chunk-UKCOEVIY.js";import{C as h,F as o,vb as p}from"./chunk-OWJSVT4P.js";var i=c.url,r="users",f=(()=>{let e=class e{constructor(t,n){this.http=t,this.sessionService=n}index(){return this.http.get(`${i}/${r}?subunidade=${this.sessionService.getSubunidade()}`)}find(t){return this.http.get(`${i}/${r}/${t}`)}create(t){return this.http.post(`${i}/${r}`,t)}update(t,n){return this.http.put(`${i}/${r}/${t}`,n)}remove(t){return this.http.delete(`${i}/${r}/${t}`)}reset(t){return this.http.post(`${i}/${r}/reset`,t)}change(t){return this.http.post(`${i}/${r}/change`,t)}};e.\u0275fac=function(n){return new(n||e)(o(p),o(u))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{f as a};
