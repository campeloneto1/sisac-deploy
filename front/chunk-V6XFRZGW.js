import{a as h}from"./chunk-UKCOEVIY.js";import{C as p,F as s,vb as c}from"./chunk-OWJSVT4P.js";var e=h.url,i="patrimonios-tipos",f=(()=>{let r=class r{constructor(t){this.http=t}index(){return this.http.get(`${e}/${i}`)}find(t){return this.http.get(`${e}/${i}/${t}`)}create(t){return this.http.post(`${e}/${i}`,t)}update(t,o){return this.http.put(`${e}/${i}/${t}`,o)}remove(t){return this.http.delete(`${e}/${i}/${t}`)}};r.\u0275fac=function(o){return new(o||r)(s(c))},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();export{f as a};
