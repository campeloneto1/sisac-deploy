import{a as F}from"./chunk-G5XDPOYT.js";import{a as ve}from"./chunk-VKRGKQX6.js";import{a as xe}from"./chunk-2IJB273A.js";import{h as T}from"./chunk-NFMIVN66.js";import{a as ue,b as fe,c as _e,d as he}from"./chunk-AICVXWQ6.js";import{a as ce}from"./chunk-I3SZ5FME.js";import{a as me}from"./chunk-HYOWEGV7.js";import{a as pe}from"./chunk-3HEW5RTP.js";import{b as le}from"./chunk-4366GPH2.js";import{a as se,d as de}from"./chunk-HDKAZCIU.js";import{$b as L,Ca as y,Ea as x,Fa as c,I as D,Ka as W,La as R,Ma as z,Na as Q,Nb as K,O as v,Oa as o,P as b,Pa as u,Pb as m,Qb as A,Ra as H,Rb as X,Sb as Y,Tb as Z,Ua as V,Va as k,Vb as ee,W as B,Wa as O,Wb as te,Xa as U,Xb as ie,Ya as M,Yb as ae,Zb as oe,_b as ne,ac as re,ca as s,cb as E,da as _,eb as w,l as $,la as C,na as S,rb as J,sa as h,sb as P,ta as j,ua as q,va as G,wa as t,xa as i,ya as f}from"./chunk-OWJSVT4P.js";function ye(r,d){if(r&1&&f(0,"input-select",2),r&2){let l=c();S("data$",l.policiais$)}}var N=(()=>{let d=class d{constructor(e,a,n,p){this.formBuilder=e,this.policiaisAtestadosService=a,this.policiaisService=n,this.toastr=p,this.refresh=new B}ngOnInit(){this.form=this.formBuilder.group({id:[null],policial:[null,m.compose([m.required])],data_inicial:[null,m.compose([m.required])],dias:[null,m.compose([m.required,m.min(1)])],data_final:[null],cid:[null,m.compose([m.maxLength(20)])],hospital:[null,m.compose([m.maxLength(100)])],crm:[null,m.compose([m.maxLength(20)])]}),this.subscription=this.policiaisService.disponiveis().subscribe({next:e=>{e.forEach(a=>{a.numeral?a.nome=`${a.graduacao.abreviatura} ${a.numeral} ${a.nome_guerra}, ${a.matricula}`:a.nome=`${a.graduacao.abreviatura} ${a.nome_guerra}, ${a.matricula}`}),this.policiais$=$(e)}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.get("data_final")?.patchValue(this.dataFinal(this.form.value.data_inicial,Number(this.form.value.dias))),this.form.value.id?this.policiaisAtestadosService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.policiaisAtestadosService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(e){this.form.patchValue(e),this.form.get("policial")?.patchValue(e.policial.id)}dataFinal(e,a){let n=new Date(e);return n.setDate(n.getDate()+a),ve(n,"yyyy-MM-dd")}};d.\u0275fac=function(a){return new(a||d)(_(ne),_(F),_(xe),_(T))},d.\u0275cmp=D({type:d,selectors:[["app-policiais-atestados-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[M],decls:14,vars:3,consts:[[3,"formGroup"],[1,"row"],["label","Policial","id","policial","formControlName","policial",1,"col-sm-4",3,"data$"],["formControlName","data_inicial","label","Data Inical","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","dias","label","Dias","id","dias","tipo","number",1,"col-sm-2"],["formControlName","cid","label","CID","id","cid","tipo","text",1,"col-sm-2"],["formControlName","hospital","label","Hospital","id","hospital","tipo","text",1,"col-sm-2"],["formControlName","crm","label","CRM","id","crm","tipo","text",1,"col-sm-2"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(a,n){a&1&&(t(0,"form",0)(1,"div",1),C(2,ye,1,1,"input-select",2),f(3,"input-text",3)(4,"input-text",4),i(),t(5,"div",1),f(6,"input-text",5)(7,"input-text",6)(8,"input-text",7),i(),t(9,"div",8)(10,"a",9),x("click",function(){return n.form.reset()}),o(11,"Cancelar"),i(),t(12,"button",10),x("click",function(){return n.cadastrar()}),o(13,"Cadastrar"),i()()()),a&2&&(S("formGroup",n.form),s(2),h(2,n.policiais$?2:-1),s(10),S("disabled",n.form.invalid))},dependencies:[P,L,Z,A,X,re,ee,te,me,ce]});let r=d;return r})();function Ee(r,d){r&1&&(t(0,"button",7),f(1,"i",41),i())}function we(r,d){if(r&1&&(o(0),E(1,"mask")),r&2){let l=c().$implicit;u(w(1,1,l.policial.numeral,"00.000"))}}function De(r,d){if(r&1){let l=y();t(0,"a",45),x("click",function(){v(l);let a=c().$implicit,n=c(2);return b(n.editar(a))}),f(1,"i",46),i()}}function Me(r,d){if(r&1){let l=y();t(0,"a",47),x("click",function(){v(l);let a=c().$implicit,n=c(2);return b(n.delete(a))}),f(1,"i",48),i()}}function Pe(r,d){if(r&1&&(t(0,"tr",42)(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),C(8,we,2,4),i(),t(9,"td"),o(10),i(),t(11,"td"),o(12),E(13,"mask"),i(),t(14,"td"),o(15),E(16,"date"),i(),t(17,"td"),o(18),i(),t(19,"td"),o(20),E(21,"date"),i(),t(22,"td"),o(23),i(),t(24,"td"),C(25,De,2,0,"a",43)(26,Me,2,0,"a",44),i()()),r&2){let l=d.$implicit,e=c(2);s(2),u(l.id),s(2),H("",l.policial.setor.subunidade.abreviatura," - ",l.policial.setor.subunidade.unidade.abreviatura,""),s(2),u(l.policial.graduacao.nome),s(2),h(8,l.policial.numeral?8:-1),s(2),u(l.policial.nome_guerra),s(2),u(w(13,13,l.policial.matricula,"000.000-0-A")),s(3),u(w(16,16,l.data_inicial,"dd/MM/yyyy")),s(3),u(l.dias),s(2),u(w(21,19,l.data_final,"dd/MM/yyyy")),s(3),u(l.cid),s(2),h(25,e.user.perfil.policiais_atestados_edt?25:-1),s(),h(26,e.user.perfil.policiais_atestados_del?26:-1)}}function Ae(r,d){r&1&&(t(0,"tr")(1,"td",28),o(2,"Sem informa\xE7\xE3o"),i()())}function Le(r,d){if(r&1&&(t(0,"tbody"),q(1,Pe,27,22,"tr",42,j,!1,Ae,3,0,"tr"),i()),r&2){c();let l=Q(21);s(),G(l.data)}}function Te(r,d){if(r&1){let l=y();o(0," Tem certeza que deseja excluir: "),t(1,"b"),o(2),i(),t(3,"div",49)(4,"a",50),o(5,"Cancelar"),i(),t(6,"button",51),x("click",function(){v(l);let a=c();return b(a.confirm())}),o(7," Excluir "),i()()}if(r&2){let l=c();s(2),u(l.excluir.policial.nome)}}var Ze=(()=>{let d=class d{constructor(e,a,n){this.policiaisAtestadosService=e,this.toastr=a,this.sessionService=n,this.quant=10}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("policiais_atestados"),this.subscription=this.policiaisAtestadosService.index().subscribe({next:e=>{this.data$=e,this.temp=e}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.policiaisAtestadosService.index().subscribe({next:e=>{this.data$=e}})}editar(e){this.child.editar(e)}delete(e){this.excluir=e}confirm(){this.policiaisAtestadosService.remove(this.excluir.id||0).subscribe({next:e=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:e=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var e=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(a=>a.policial.numeral?a.policial.numeral?.toLocaleLowerCase().indexOf(e)!==-1||a.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||a.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||a.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||a.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||a.policial.graduacao.abreviatura.toLocaleLowerCase().indexOf(e)!==-1||!e:a.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||a.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||a.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||a.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||a.policial.graduacao.abreviatura.toLocaleLowerCase().indexOf(e)!==-1||!e)}}};d.\u0275fac=function(a){return new(a||d)(_(F),_(T),_(le))},d.\u0275cmp=D({type:d,selectors:[["app-policiais-atestados"]],viewQuery:function(a,n){if(a&1&&W(N,5),a&2){let p;R(p=z())&&(n.child=p.first)}},standalone:!0,features:[U([se()]),M],decls:84,vars:9,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Atestados"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","policial.setor.subunidade.abreviatura"],["by","policial.graduacao.nome"],["by","policial.numeral"],["by","policial.nome_guerra"],["by","policial.matricula"],["by","data_inicial"],["by","dias"],["by","dataFinal(data_inicial, dias)"],["by","cid"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"fa","fa-plus"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(a,n){if(a&1){let p=y();t(0,"div",1),f(1,"app-title",2),t(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6),C(6,Ee,2,0,"button",7),i(),t(7,"div",8)(8,"div",9)(9,"select",10),O("ngModelChange",function(g){return v(p),k(n.quant,g)||(n.quant=g),b(g)}),t(10,"option",11),o(11,"10"),i(),t(12,"option",12),o(13,"25"),i(),t(14,"option",13),o(15,"50"),i(),t(16,"option",14),o(17,"100"),i()(),t(18,"input",15),O("ngModelChange",function(g){return v(p),k(n.pesquisa,g)||(n.pesquisa=g),b(g)}),x("ngModelChange",function(){return v(p),b(n.pesquisar())}),i()()()(),t(19,"div",16)(20,"table",17,0)(22,"thead")(23,"tr")(24,"th")(25,"mfDefaultSorter",18),o(26,"#"),i()(),t(27,"th")(28,"mfDefaultSorter",19),o(29,"Subunidade"),i()(),t(30,"th")(31,"mfDefaultSorter",20),o(32,"Gradua\xE7\xE3o"),i()(),t(33,"th")(34,"mfDefaultSorter",21),o(35,"Numeral"),i()(),t(36,"th")(37,"mfDefaultSorter",22),o(38,"Nome Guerra"),i()(),t(39,"th")(40,"mfDefaultSorter",23),o(41,"Matr\xEDcula"),i()(),t(42,"th")(43,"mfDefaultSorter",24),o(44,"Data Inicial"),i()(),t(45,"th")(46,"mfDefaultSorter",25),o(47,"Dias"),i()(),t(48,"th")(49,"mfDefaultSorter",26),o(50,"Data Final"),i()(),t(51,"th")(52,"mfDefaultSorter",27),o(53,"CID"),i()(),t(54,"th"),o(55,"Op\xE7\xF5es"),i()()(),C(56,Le,4,1,"tbody"),t(57,"tfoot")(58,"tr")(59,"td",28)(60,"div",29),f(61,"mfBootstrapPaginator"),i()()()()()()()(),t(62,"div",30)(63,"div",31)(64,"div",32)(65,"div",33)(66,"h4",34),o(67,"Cadastrar"),i(),t(68,"button",35)(69,"span",36),o(70,"\xD7"),i()()(),t(71,"div",37)(72,"app-policiais-atestados-form",38),x("refresh",function(){return v(p),b(n.refresh())}),i()()()()(),t(73,"div",39)(74,"div",40)(75,"div",32)(76,"div",33)(77,"h4",34),o(78,"Excluir"),i(),t(79,"button",35)(80,"span",36),o(81,"\xD7"),i()()(),t(82,"div",37),C(83,Te,8,1),i()()()()()}a&2&&(s(6),h(6,n.user.perfil.policiais_atestados_cad?6:-1),s(3),V("ngModel",n.quant),s(9),V("ngModel",n.pesquisa),s(2),S("mfData",n.data$)("mfRowsOnPage",n.quant)("mfSortBy","id")("mfSortOrder","desc"),s(36),h(56,n.data$?56:-1),s(27),h(83,n.excluir?83:-1))},dependencies:[P,J,pe,N,he,ue,_e,fe,L,ae,oe,K,ie,A,Y,de]});let r=d;return r})();export{Ze as PoliciaisAtestadosComponent};