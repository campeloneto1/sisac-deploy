import{a as V}from"./chunk-KRDV4FRY.js";import{h as T}from"./chunk-NFMIVN66.js";import{a as ae,b as oe,c as se,d as le}from"./chunk-AICVXWQ6.js";import{a as re}from"./chunk-HYOWEGV7.js";import{a as ne}from"./chunk-3HEW5RTP.js";import{b as ie}from"./chunk-UKCOEVIY.js";import"./chunk-HDKAZCIU.js";import{$b as M,Ca as x,Ea as c,Fa as _,I as g,Ka as L,La as W,Ma as $,Na as z,Nb as Q,O as p,Oa as a,P as u,Pa as S,Pb as v,Qb as E,Rb as R,Sb as H,Tb as J,Ua as D,Va as q,Vb as K,W as O,Wa as I,Wb as U,Xb as X,Ya as y,Yb as Y,Za as G,Zb as Z,_b as ee,ac as te,ca as l,da as f,la as k,na as C,sa as F,sb as w,ta as j,ua as P,va as B,wa as e,xa as i,ya as h}from"./chunk-OWJSVT4P.js";var N=(()=>{let s=class s{constructor(t,n,r){this.formBuilder=t,this.armamentosCalibresService=n,this.toastr=r,this.refresh=new O}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,v.compose([v.required,v.minLength(5),v.maxLength(100)])]})}cadastrar(){this.form.value.id?this.armamentosCalibresService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.armamentosCalibresService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t)}};s.\u0275fac=function(n){return new(n||s)(f(ee),f(V),f(T))},s.\u0275cmp=g({type:s,selectors:[["app-armamentos-calibres-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[y],decls:8,vars:2,consts:[[3,"formGroup"],[1,"row"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(n,r){n&1&&(e(0,"form",0)(1,"div",1),h(2,"input-text",2),i(),e(3,"div",3)(4,"a",4),c("click",function(){return r.form.reset()}),a(5,"Cancelar"),i(),e(6,"button",5),c("click",function(){return r.cadastrar()}),a(7,"Cadastrar"),i()()()),n&2&&(C("formGroup",r.form),l(6),C("disabled",r.form.invalid))},dependencies:[w,M,J,E,R,te,K,U,re]});let o=s;return o})();var ue=()=>[5,10,25];function fe(o,s){if(o&1){let m=x();e(0,"tr",35)(1,"td"),a(2),i(),e(3,"td"),a(4),i(),e(5,"td")(6,"a",36),c("click",function(){let n=p(m).$implicit,r=_(2);return u(r.editar(n))}),h(7,"i",37),i(),e(8,"a",38),c("click",function(){let n=p(m).$implicit,r=_(2);return u(r.delete(n))}),h(9,"i",39),i()()()}if(o&2){let m=s.$implicit;l(2),S(m.id),l(2),S(m.nome)}}function he(o,s){o&1&&(e(0,"tr")(1,"td",21),a(2,"Sem informa\xE7\xE3o"),i()())}function be(o,s){if(o&1&&(e(0,"tbody"),P(1,fe,10,2,"tr",35,j,!1,he,3,0,"tr"),i()),o&2){_();let m=z(22);l(),B(m.data)}}function Ce(o,s){if(o&1){let m=x();a(0," Tem certeza que deseja excluir: "),e(1,"b"),a(2),i(),e(3,"div",40)(4,"a",41),a(5,"Cancelar"),i(),e(6,"button",42),c("click",function(){p(m);let n=_();return u(n.confirm())}),a(7," Excluir "),i()()}if(o&2){let m=_();l(2),S(m.excluir.nome)}}var De=(()=>{let s=class s{constructor(t,n,r){this.armamentosCalibresService=t,this.toastr=n,this.sessionService=r,this.quant=10}ngOnInit(){this.sessionService.checkPermission("administrador"),this.subscription=this.armamentosCalibresService.index().subscribe({next:t=>{this.data$=t,this.temp=t}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.armamentosCalibresService.index().subscribe({next:t=>{this.data$=t}})}editar(t){this.child.editar(t)}delete(t){this.excluir=t}confirm(){this.armamentosCalibresService.remove(this.excluir.id||0).subscribe({next:t=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:t=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var t=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(n=>n.nome.toLocaleLowerCase().indexOf(t)!==-1||!t)}}};s.\u0275fac=function(n){return new(n||s)(f(V),f(T),f(ie))},s.\u0275cmp=g({type:s,selectors:[["app-armamentos-calibres"]],viewQuery:function(n,r){if(n&1&&L(N,5),n&2){let d;W(d=$())&&(r.child=d.first)}},standalone:!0,features:[y],decls:61,vars:8,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Calibres de Armamentos"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","nome"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],[3,"rowsOnPageSet"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(n,r){if(n&1){let d=x();e(0,"div",1),h(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),h(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),I("ngModelChange",function(b){return p(d),q(r.quant,b)||(r.quant=b),u(b)}),e(11,"option",12),a(12,"10"),i(),e(13,"option",13),a(14,"25"),i(),e(15,"option",14),a(16,"50"),i(),e(17,"option",15),a(18,"100"),i()(),e(19,"input",16),I("ngModelChange",function(b){return p(d),q(r.pesquisa,b)||(r.pesquisa=b),u(b)}),c("ngModelChange",function(){return p(d),u(r.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),a(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),a(30,"Nome"),i()(),e(31,"th"),a(32,"Op\xE7\xF5es"),i()()(),k(33,be,4,1,"tbody"),e(34,"tfoot")(35,"tr")(36,"td",21)(37,"div",22),h(38,"mfBootstrapPaginator",23),i()()()()()()()(),e(39,"div",24)(40,"div",25)(41,"div",26)(42,"div",27)(43,"h4",28),a(44,"Cadastrar"),i(),e(45,"button",29)(46,"span",30),a(47,"\xD7"),i()()(),e(48,"div",31)(49,"app-armamentos-calibres-form",32),c("refresh",function(){return p(d),u(r.refresh())}),i()()()()(),e(50,"div",33)(51,"div",34)(52,"div",26)(53,"div",27)(54,"h4",28),a(55,"Excluir"),i(),e(56,"button",29)(57,"span",30),a(58,"\xD7"),i()()(),e(59,"div",31),k(60,Ce,8,1),i()()()()()}n&2&&(l(10),D("ngModel",r.quant),l(9),D("ngModel",r.pesquisa),l(2),C("mfData",r.data$)("mfRowsOnPage",r.quant),l(12),F(33,r.data$?33:-1),l(5),C("rowsOnPageSet",G(7,ue)),l(22),F(60,r.excluir?60:-1))},dependencies:[w,ne,N,le,ae,se,oe,M,Y,Z,Q,X,E,H]});let o=s;return o})();export{De as ArmamentosCalibresComponent};
