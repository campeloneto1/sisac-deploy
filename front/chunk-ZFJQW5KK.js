import{a as T}from"./chunk-A6GCQO25.js";import{h as M}from"./chunk-NFMIVN66.js";import{a as L}from"./chunk-HYOWEGV7.js";import{a as w}from"./chunk-UKCOEVIY.js";import{$b as N,C as v,Ea as f,F as b,I as C,Oa as h,Pb as s,Qb as S,Rb as y,Tb as F,Vb as I,W as u,Wb as _,Ya as $,_b as k,ac as j,ca as g,da as l,na as p,sb as x,vb as E,wa as n,xa as a,ya as d}from"./chunk-OWJSVT4P.js";var c=w.url,m="contratos-lancamentos",V=(()=>{let e=class e{constructor(t){this.http=t}index(){return this.http.get(`${c}/${m}`)}find(t){return this.http.get(`${c}/${m}/${t}`)}create(t){return this.http.post(`${c}/${m}`,t)}update(t,r){return this.http.put(`${c}/${m}/${t}`,r)}remove(t){return this.http.delete(`${c}/${m}/${t}`)}};e.\u0275fac=function(r){return new(r||e)(b(E))},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Z=(()=>{let e=class e{constructor(t,r,i){this.formBuilder=t,this.contratosLancamentosService=r,this.toastr=i,this.refresh=new u,this.cancel=new u}ngOnInit(){this.form=this.formBuilder.group({id:[null],contrato:[null],valor:[null,s.compose([s.required])],mes_referencia:[null,s.compose([s.required])],observacoes:[null]})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.get("mes_referencia")?.patchValue(`${this.form.value.mes_referencia}-01`),this.form.get("contrato")?.patchValue(this.contrato),this.form.value.id?this.contratosLancamentosService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.contratosLancamentosService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t)}cancelar(){this.form.reset(),this.cancel.emit()}};e.\u0275fac=function(r){return new(r||e)(l(k),l(V),l(M))},e.\u0275cmp=C({type:e,selectors:[["app-contratos-lancamentos-form"]],inputs:{contrato:"contrato"},outputs:{refresh:"refresh",cancel:"cancel"},standalone:!0,features:[$],decls:11,vars:2,consts:[[3,"formGroup"],[1,"row"],["formControlName","valor","label","Valor","id","valor","mascara","separator.2","tipo","text",1,"col-sm-2"],["formControlName","mes_referencia","label","M\xEAs de refer\xEAncia","id","mes_referencia","tipo","month",1,"col-sm-2"],[1,"row",2,"height","300px"],["formControlName","observacoes","label","Observa\xE7\xF5es","id","observacoes",1,"col-sm-12"],[1,"d-flex","justify-content-end"],[1,"btn","btn-link","text-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click","disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),d(2,"input-text",2)(3,"input-text",3),a(),n(4,"div",4),d(5,"input-textarea",5),a(),n(6,"div",6)(7,"a",7),f("click",function(){return i.cancelar()}),h(8,"Cancelar"),a(),n(9,"button",8),f("click",function(){return i.cadastrar()}),h(10," Cadastrar "),a()()()),r&2&&(p("formGroup",i.form),g(9),p("disabled",i.form.invalid))},dependencies:[x,N,F,S,y,j,I,_,L,T]});let o=e;return o})();export{V as a,Z as b};
