import{a as V}from"./chunk-RJNR53OR.js";import{h as M}from"./chunk-NFMIVN66.js";import{a as oe,b as ne,c as ae,d as se}from"./chunk-AICVXWQ6.js";import{a as ie}from"./chunk-HYOWEGV7.js";import{a as re}from"./chunk-3HEW5RTP.js";import{b as te}from"./chunk-UKCOEVIY.js";import"./chunk-HDKAZCIU.js";import{$b as w,Ca as x,Ea as c,Fa as _,I as g,Ka as W,La as $,Ma as z,Na as G,Nb as Q,O as p,Oa as n,P as u,Pa as C,Pb as b,Qb as E,Rb as R,Sb as A,Tb as H,Ua as q,Va as I,Vb as J,W as O,Wa as N,Wb as K,Xb as U,Ya as T,Yb as X,Zb as Y,_b as Z,ac as ee,ca as l,da as f,la as F,na as S,sa as D,sb as y,ta as B,ua as L,va as P,wa as e,xa as i,ya as v}from"./chunk-OWJSVT4P.js";var j=(()=>{let s=class s{constructor(t,o,r){this.formBuilder=t,this.servicosTiposService=o,this.toastr=r,this.refresh=new O}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,b.compose([b.required,b.minLength(5),b.maxLength(100)])]})}cadastrar(){this.form.value.id?this.servicosTiposService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.servicosTiposService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t)}};s.\u0275fac=function(o){return new(o||s)(f(Z),f(V),f(M))},s.\u0275cmp=g({type:s,selectors:[["app-servicos-tipos-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[T],decls:8,vars:2,consts:[[3,"formGroup"],[1,"row"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(o,r){o&1&&(e(0,"form",0)(1,"div",1),v(2,"input-text",2),i(),e(3,"div",3)(4,"a",4),c("click",function(){return r.form.reset()}),n(5,"Cancelar"),i(),e(6,"button",5),c("click",function(){return r.cadastrar()}),n(7,"Cadastrar"),i()()()),o&2&&(S("formGroup",r.form),l(6),S("disabled",r.form.invalid))},dependencies:[y,w,H,E,R,ee,J,K,ie]});let a=s;return a})();function pe(a,s){if(a&1){let d=x();e(0,"tr",34)(1,"td"),n(2),i(),e(3,"td"),n(4),i(),e(5,"td")(6,"a",35),c("click",function(){let o=p(d).$implicit,r=_(2);return u(r.editar(o))}),v(7,"i",36),i(),e(8,"a",37),c("click",function(){let o=p(d).$implicit,r=_(2);return u(r.delete(o))}),v(9,"i",38),i()()()}if(a&2){let d=s.$implicit;l(2),C(d.id),l(2),C(d.nome)}}function ue(a,s){a&1&&(e(0,"tr")(1,"td",21),n(2,"Sem informa\xE7\xE3o"),i()())}function fe(a,s){if(a&1&&(e(0,"tbody"),L(1,pe,10,2,"tr",34,B,!1,ue,3,0,"tr"),i()),a&2){_();let d=G(22);l(),P(d.data)}}function ve(a,s){if(a&1){let d=x();n(0," Tem certeza que deseja excluir: "),e(1,"b"),n(2),i(),e(3,"div",39)(4,"a",40),n(5,"Cancelar"),i(),e(6,"button",41),c("click",function(){p(d);let o=_();return u(o.confirm())}),n(7," Excluir "),i()()}if(a&2){let d=_();l(2),C(d.excluir.nome)}}var Fe=(()=>{let s=class s{constructor(t,o,r){this.servicosTiposService=t,this.toastr=o,this.sessionService=r,this.quant=10}ngOnInit(){this.sessionService.checkPermission("administrador"),this.subscription=this.servicosTiposService.index().subscribe({next:t=>{this.data$=t,this.temp=t}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.servicosTiposService.index().subscribe({next:t=>{this.data$=t}})}editar(t){this.child.editar(t)}delete(t){this.excluir=t}confirm(){this.servicosTiposService.remove(this.excluir.id||0).subscribe({next:t=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:t=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var t=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(o=>o.nome.toLocaleLowerCase().indexOf(t)!==-1||!t)}}};s.\u0275fac=function(o){return new(o||s)(f(V),f(M),f(te))},s.\u0275cmp=g({type:s,selectors:[["app-servicos-tipos"]],viewQuery:function(o,r){if(o&1&&W(j,5),o&2){let m;$(m=z())&&(r.child=m.first)}},standalone:!0,features:[T],decls:61,vars:6,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Tipos de Servi\xE7os"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","nome"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(o,r){if(o&1){let m=x();e(0,"div",1),v(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),v(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),N("ngModelChange",function(h){return p(m),I(r.quant,h)||(r.quant=h),u(h)}),e(11,"option",12),n(12,"10"),i(),e(13,"option",13),n(14,"25"),i(),e(15,"option",14),n(16,"50"),i(),e(17,"option",15),n(18,"100"),i()(),e(19,"input",16),N("ngModelChange",function(h){return p(m),I(r.pesquisa,h)||(r.pesquisa=h),u(h)}),c("ngModelChange",function(){return p(m),u(r.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),n(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),n(30,"Nome"),i()(),e(31,"th"),n(32,"Op\xE7\xF5es"),i()()(),F(33,fe,4,1,"tbody"),e(34,"tfoot")(35,"tr")(36,"td",21)(37,"div",22),v(38,"mfBootstrapPaginator"),i()()()()()()()(),e(39,"div",23)(40,"div",24)(41,"div",25)(42,"div",26)(43,"h4",27),n(44,"Cadastrar"),i(),e(45,"button",28)(46,"span",29),n(47,"\xD7"),i()()(),e(48,"div",30)(49,"app-servicos-tipos-form",31),c("refresh",function(){return p(m),u(r.refresh())}),i()()()()(),e(50,"div",32)(51,"div",33)(52,"div",25)(53,"div",26)(54,"h4",27),n(55,"Excluir"),i(),e(56,"button",28)(57,"span",29),n(58,"\xD7"),i()()(),e(59,"div",30),F(60,ve,8,1),i()()()()()}o&2&&(l(10),q("ngModel",r.quant),l(9),q("ngModel",r.pesquisa),l(2),S("mfData",r.data$)("mfRowsOnPage",r.quant),l(12),D(33,r.data$?33:-1),l(27),D(60,r.excluir?60:-1))},dependencies:[y,re,j,se,oe,ae,ne,w,X,Y,Q,U,E,A]});let a=s;return a})();export{Fe as ServicosTiposComponent};
