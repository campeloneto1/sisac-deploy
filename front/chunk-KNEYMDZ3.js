import{a as k}from"./chunk-ATLJQ2UK.js";import{a as me}from"./chunk-NIBPGJ6J.js";import{h as F}from"./chunk-NFMIVN66.js";import{a as oe,b as se,c as de,d as le}from"./chunk-AICVXWQ6.js";import{a as ae}from"./chunk-I3SZ5FME.js";import{a as re}from"./chunk-HYOWEGV7.js";import{a as ne}from"./chunk-3HEW5RTP.js";import{b as ie}from"./chunk-UKCOEVIY.js";import"./chunk-HDKAZCIU.js";import{$b as V,Ca as E,Ea as f,Fa as C,I as y,Ka as B,La as W,Ma as z,Na as A,Nb as Q,O as h,Oa as n,P as v,Pa as x,Pb as c,Qb as M,Rb as R,Sb as H,Tb as J,Ua as I,Va as L,Vb as K,W as q,Wa as O,Wb as U,Xb as X,Ya as w,Yb as Y,Za as G,Zb as Z,_b as ee,ac as te,ca as d,da as u,la as g,na as b,sa as S,sb as T,ta as j,ua as $,va as P,wa as e,xa as i,ya as p}from"./chunk-OWJSVT4P.js";function he(o,s){if(o&1&&p(0,"input-select",2),o&2){let l=C();b("data$",l.estados$)}}var N=(()=>{let s=class s{constructor(t,a,r,m){this.formBuilder=t,this.cidadesService=a,this.estadosService=r,this.toastr=m,this.refresh=new q}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,c.compose([c.required,c.minLength(5),c.maxLength(100)])],abreviatura:[null,c.compose([c.minLength(2),c.maxLength(5)])],estado:[null,c.compose([c.required])]}),this.estados$=this.estadosService.index()}cadastrar(){this.form.value.id?this.cidadesService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.cidadesService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t),this.form.get("estado")?.patchValue(t.estado.id)}};s.\u0275fac=function(a){return new(a||s)(u(ee),u(k),u(me),u(F))},s.\u0275cmp=y({type:s,selectors:[["app-cidades-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[w],decls:10,vars:3,consts:[[3,"formGroup"],[1,"row"],["label","Estado","id","estado","formControlName","estado",1,"col-sm-2",3,"data$"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],["formControlName","abreviatura","label","Abreviatura","id","abreviatura","tipo","text",1,"col-sm-2"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(a,r){a&1&&(e(0,"form",0)(1,"div",1),g(2,he,1,1,"input-select",2),p(3,"input-text",3)(4,"input-text",4),i(),e(5,"div",5)(6,"a",6),f("click",function(){return r.form.reset()}),n(7,"Cancelar"),i(),e(8,"button",7),f("click",function(){return r.cadastrar()}),n(9,"Cadastrar"),i()()()),a&2&&(b("formGroup",r.form),d(2),S(2,r.estados$?2:-1),d(6),b("disabled",r.form.invalid))},dependencies:[T,V,J,M,R,te,K,U,re,ae]});let o=s;return o})();var ve=()=>[5,10,25];function Ce(o,s){if(o&1){let l=E();e(0,"tr",37)(1,"td"),n(2),i(),e(3,"td"),n(4),i(),e(5,"td"),n(6),i(),e(7,"td"),n(8),i(),e(9,"td")(10,"a",38),f("click",function(){let a=h(l).$implicit,r=C(2);return v(r.editar(a))}),p(11,"i",39),i(),e(12,"a",40),f("click",function(){let a=h(l).$implicit,r=C(2);return v(r.delete(a))}),p(13,"i",41),i()()()}if(o&2){let l=s.$implicit;d(2),x(l.id),d(2),x(l.estado.nome),d(2),x(l.nome),d(2),x(l.abreviarua)}}function _e(o,s){o&1&&(e(0,"tr")(1,"td",23),n(2,"Sem informa\xE7\xE3o"),i()())}function be(o,s){if(o&1&&(e(0,"tbody"),$(1,Ce,14,4,"tr",37,j,!1,_e,3,0,"tr"),i()),o&2){C();let l=A(22);d(),P(l.data)}}function xe(o,s){if(o&1){let l=E();n(0," Tem certeza que deseja excluir: "),e(1,"b"),n(2),i(),e(3,"div",42)(4,"a",43),n(5,"Cancelar"),i(),e(6,"button",44),f("click",function(){h(l);let a=C();return v(a.confirm())}),n(7," Excluir "),i()()}if(o&2){let l=C();d(2),x(l.excluir.nome)}}var je=(()=>{let s=class s{constructor(t,a,r){this.cidadesService=t,this.toastr=a,this.sessionService=r,this.quant=10}ngOnInit(){this.sessionService.checkPermission("administrador"),this.subscription=this.cidadesService.index().subscribe({next:t=>{this.data$=t,this.temp=t}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.cidadesService.index().subscribe({next:t=>{this.data$=t}})}editar(t){this.child.editar(t)}delete(t){this.excluir=t}confirm(){this.cidadesService.remove(this.excluir.id||0).subscribe({next:t=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:t=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var t=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(a=>a.nome.toLocaleLowerCase().indexOf(t)!==-1||a.abreviatura.toLocaleLowerCase().indexOf(t)!==-1||a.estado.nome.toLocaleLowerCase().indexOf(t)!==-1||a.estado.abreviatura.toLocaleLowerCase().indexOf(t)!==-1||!t)}}};s.\u0275fac=function(a){return new(a||s)(u(k),u(F),u(ie))},s.\u0275cmp=y({type:s,selectors:[["app-cidades"]],viewQuery:function(a,r){if(a&1&&B(N,5),a&2){let m;W(m=z())&&(r.child=m.first)}},standalone:!0,features:[w],decls:67,vars:8,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Cidades"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","estado.nome"],["by","nome"],["by","abreviatura"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],[3,"rowsOnPageSet"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(a,r){if(a&1){let m=E();e(0,"div",1),p(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),p(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),O("ngModelChange",function(_){return h(m),L(r.quant,_)||(r.quant=_),v(_)}),e(11,"option",12),n(12,"10"),i(),e(13,"option",13),n(14,"25"),i(),e(15,"option",14),n(16,"50"),i(),e(17,"option",15),n(18,"100"),i()(),e(19,"input",16),O("ngModelChange",function(_){return h(m),L(r.pesquisa,_)||(r.pesquisa=_),v(_)}),f("ngModelChange",function(){return h(m),v(r.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),n(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),n(30,"Estado"),i()(),e(31,"th")(32,"mfDefaultSorter",21),n(33,"Nome"),i()(),e(34,"th")(35,"mfDefaultSorter",22),n(36,"Abreviatura"),i()(),e(37,"th"),n(38,"Op\xE7\xF5es"),i()()(),g(39,be,4,1,"tbody"),e(40,"tfoot")(41,"tr")(42,"td",23)(43,"div",24),p(44,"mfBootstrapPaginator",25),i()()()()()()()(),e(45,"div",26)(46,"div",27)(47,"div",28)(48,"div",29)(49,"h4",30),n(50,"Cadastrar"),i(),e(51,"button",31)(52,"span",32),n(53,"\xD7"),i()()(),e(54,"div",33)(55,"app-cidades-form",34),f("refresh",function(){return h(m),v(r.refresh())}),i()()()()(),e(56,"div",35)(57,"div",36)(58,"div",28)(59,"div",29)(60,"h4",30),n(61,"Excluir"),i(),e(62,"button",31)(63,"span",32),n(64,"\xD7"),i()()(),e(65,"div",33),g(66,xe,8,1),i()()()()()}a&2&&(d(10),I("ngModel",r.quant),d(9),I("ngModel",r.pesquisa),d(2),b("mfData",r.data$)("mfRowsOnPage",r.quant),d(18),S(39,r.data$?39:-1),d(5),b("rowsOnPageSet",G(7,ve)),d(22),S(66,r.excluir?66:-1))},dependencies:[T,ne,N,le,oe,de,se,V,Y,Z,Q,X,M,H]});let o=s;return o})();export{je as CidadesComponent};
