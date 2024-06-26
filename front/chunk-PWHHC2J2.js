import{a as M}from"./chunk-OAGX4K3V.js";import{h as P}from"./chunk-NFMIVN66.js";import{a as re,b as ne,c as ae,d as se}from"./chunk-AICVXWQ6.js";import{a as ie}from"./chunk-HYOWEGV7.js";import{a as oe}from"./chunk-3HEW5RTP.js";import{b as te}from"./chunk-UKCOEVIY.js";import"./chunk-HDKAZCIU.js";import{$b as w,Ca as C,Ea as c,Fa as _,I as x,Ka as W,La as $,Ma as z,Na as G,Nb as Q,O as p,Oa as n,P as u,Pa as S,Pb as g,Qb as E,Rb as R,Sb as A,Tb as H,Ua as D,Va as q,Vb as J,W as j,Wa as I,Wb as K,Xb as U,Ya as T,Yb as X,Zb as Y,_b as Z,ac as ee,ca as l,da as f,la as k,na as v,sa as F,sb as y,ta as O,ua as B,va as L,wa as e,xa as i,ya as h}from"./chunk-OWJSVT4P.js";var N=(()=>{let s=class s{constructor(t,r,o){this.formBuilder=t,this.publicacoesTiposService=r,this.toastr=o,this.refresh=new j}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,g.compose([g.required,g.minLength(5),g.maxLength(100)])]})}cadastrar(){this.form.value.id?this.publicacoesTiposService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.publicacoesTiposService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t)}};s.\u0275fac=function(r){return new(r||s)(f(Z),f(M),f(P))},s.\u0275cmp=x({type:s,selectors:[["app-publicacoes-tipos-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[T],decls:8,vars:2,consts:[[3,"formGroup"],[1,"row"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(r,o){r&1&&(e(0,"form",0)(1,"div",1),h(2,"input-text",2),i(),e(3,"div",3)(4,"a",4),c("click",function(){return o.form.reset()}),n(5,"Cancelar"),i(),e(6,"button",5),c("click",function(){return o.cadastrar()}),n(7,"Cadastrar"),i()()()),r&2&&(v("formGroup",o.form),l(6),v("disabled",o.form.invalid))},dependencies:[y,w,H,E,R,ee,J,K,ie]});let a=s;return a})();function pe(a,s){if(a&1){let d=C();e(0,"tr",34)(1,"td"),n(2),i(),e(3,"td"),n(4),i(),e(5,"td")(6,"a",35),c("click",function(){let r=p(d).$implicit,o=_(2);return u(o.editar(r))}),h(7,"i",36),i(),e(8,"a",37),c("click",function(){let r=p(d).$implicit,o=_(2);return u(o.delete(r))}),h(9,"i",38),i()()()}if(a&2){let d=s.$implicit;l(2),S(d.id),l(2),S(d.nome)}}function ue(a,s){a&1&&(e(0,"tr")(1,"td",21),n(2,"Sem informa\xE7\xE3o"),i()())}function fe(a,s){if(a&1&&(e(0,"tbody"),B(1,pe,10,2,"tr",34,O,!1,ue,3,0,"tr"),i()),a&2){_();let d=G(22);l(),L(d.data)}}function he(a,s){if(a&1){let d=C();n(0," Tem certeza que deseja excluir: "),e(1,"b"),n(2),i(),e(3,"div",39)(4,"a",40),n(5,"Cancelar"),i(),e(6,"button",41),c("click",function(){p(d);let r=_();return u(r.confirm())}),n(7," Excluir "),i()()}if(a&2){let d=_();l(2),S(d.excluir.nome)}}var ke=(()=>{let s=class s{constructor(t,r,o){this.publicacoesTiposService=t,this.toastr=r,this.sessionService=o,this.quant=10}ngOnInit(){this.sessionService.checkPermission("administrador"),this.subscription=this.publicacoesTiposService.index().subscribe({next:t=>{this.data$=t,this.temp=t}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.publicacoesTiposService.index().subscribe({next:t=>{this.data$=t}})}editar(t){this.child.editar(t)}delete(t){this.excluir=t}confirm(){this.publicacoesTiposService.remove(this.excluir.id||0).subscribe({next:t=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:t=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var t=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(r=>r.nome.toLocaleLowerCase().indexOf(t)!==-1||!t)}}};s.\u0275fac=function(r){return new(r||s)(f(M),f(P),f(te))},s.\u0275cmp=x({type:s,selectors:[["app-publicacoes-tipos"]],viewQuery:function(r,o){if(r&1&&W(N,5),r&2){let m;$(m=z())&&(o.child=m.first)}},standalone:!0,features:[T],decls:61,vars:6,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Tipos de Publica\xE7\xF5es"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","nome"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(r,o){if(r&1){let m=C();e(0,"div",1),h(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),h(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),I("ngModelChange",function(b){return p(m),q(o.quant,b)||(o.quant=b),u(b)}),e(11,"option",12),n(12,"10"),i(),e(13,"option",13),n(14,"25"),i(),e(15,"option",14),n(16,"50"),i(),e(17,"option",15),n(18,"100"),i()(),e(19,"input",16),I("ngModelChange",function(b){return p(m),q(o.pesquisa,b)||(o.pesquisa=b),u(b)}),c("ngModelChange",function(){return p(m),u(o.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),n(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),n(30,"Nome"),i()(),e(31,"th"),n(32,"Op\xE7\xF5es"),i()()(),k(33,fe,4,1,"tbody"),e(34,"tfoot")(35,"tr")(36,"td",21)(37,"div",22),h(38,"mfBootstrapPaginator"),i()()()()()()()(),e(39,"div",23)(40,"div",24)(41,"div",25)(42,"div",26)(43,"h4",27),n(44,"Cadastrar"),i(),e(45,"button",28)(46,"span",29),n(47,"\xD7"),i()()(),e(48,"div",30)(49,"app-publicacoes-tipos-form",31),c("refresh",function(){return p(m),u(o.refresh())}),i()()()()(),e(50,"div",32)(51,"div",33)(52,"div",25)(53,"div",26)(54,"h4",27),n(55,"Excluir"),i(),e(56,"button",28)(57,"span",29),n(58,"\xD7"),i()()(),e(59,"div",30),k(60,he,8,1),i()()()()()}r&2&&(l(10),D("ngModel",o.quant),l(9),D("ngModel",o.pesquisa),l(2),v("mfData",o.data$)("mfRowsOnPage",o.quant),l(12),F(33,o.data$?33:-1),l(27),F(60,o.excluir?60:-1))},dependencies:[y,oe,N,se,re,ae,ne,w,X,Y,Q,U,E,A]});let a=s;return a})();export{ke as PublicacoesTiposComponent};
