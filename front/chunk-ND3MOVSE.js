import{a}from"./chunk-UKCOEVIY.js";import{C as s,F as p,vb as c}from"./chunk-OWJSVT4P.js";var e=a.url,i="armamentos-tipos",f=(()=>{let r=class r{constructor(t){this.http=t}index(){return this.http.get(`${e}/${i}`)}find(t){return this.http.get(`${e}/${i}/${t}`)}create(t){return this.http.post(`${e}/${i}`,t)}update(t,o){return this.http.put(`${e}/${i}/${t}`,o)}remove(t){return this.http.delete(`${e}/${i}/${t}`)}};r.\u0275fac=function(o){return new(o||r)(p(c))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();export{f as a};
