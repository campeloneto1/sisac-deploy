import{a as we}from"./chunk-NIV35Z5W.js";import{a as ye}from"./chunk-Y64AYFHZ.js";import"./chunk-A6GCQO25.js";import{h as V}from"./chunk-NFMIVN66.js";import{a as be,b as Se,c as ge,d as Ee}from"./chunk-AICVXWQ6.js";import{a as xe}from"./chunk-I3SZ5FME.js";import{a as Ce}from"./chunk-HYOWEGV7.js";import{a as ve}from"./chunk-3HEW5RTP.js";import{a as pe,b as fe}from"./chunk-UKCOEVIY.js";import{a as he,d as _e}from"./chunk-HDKAZCIU.js";import{$b as F,C as G,Ca as y,Ea as h,F as W,Fa as m,I as M,Ka as H,La as U,Ma as J,Na as K,Nb as ie,O as C,Oa as r,P as x,Pa as u,Pb as _,Qa as X,Qb as L,Ra as Y,Rb as oe,Sb as re,Tb as ae,Ua as O,Va as N,Vb as ne,W as R,Wa as B,Wb as le,Xa as Z,Xb as se,Ya as I,Yb as ce,Zb as de,_b as me,ac as ue,ca as c,cb as w,da as p,eb as $,l as q,la as S,na as g,rb as ee,sa as v,sb as T,ta as z,ua as Q,va as A,vb as te,wa as t,xa as i,ya as f}from"./chunk-OWJSVT4P.js";var P=pe.url,D="policiais-cursos",k=(()=>{let n=class n{constructor(e){this.http=e}index(){return this.http.get(`${P}/${D}`)}find(e){return this.http.get(`${P}/${D}/${e}`)}create(e){return this.http.post(`${P}/${D}`,e)}update(e,o){return this.http.put(`${P}/${D}/${e}`,o)}remove(e){return this.http.delete(`${P}/${D}/${e}`)}};n.\u0275fac=function(o){return new(o||n)(W(te))},n.\u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();var j=(()=>{let n=class n{constructor(e,o,l,d,E){this.formBuilder=e,this.policiaisCursosService=o,this.policiaisService=l,this.cursosService=d,this.toastr=E,this.refresh=new R}ngOnInit(){this.form=this.formBuilder.group({id:[null],policial:[null,_.compose([_.required])],curso:[null,_.compose([_.required])],data_inicial:[null,_.compose([_.required])],data_final:[null,_.compose([_.required])],boletim:[null],carga_horaria:[null]}),this.subscription=this.policiaisService.disponiveis().subscribe({next:e=>{e.forEach(o=>{o.numeral?o.nome=`${o.graduacao.abreviatura} ${o.numeral} ${o.nome_guerra}, ${o.matricula}`:o.nome=`${o.graduacao.abreviatura} ${o.nome_guerra}, ${o.matricula}`}),this.policiais$=q(e)}}),this.cursos$=this.cursosService.index()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.value.id?this.policiaisCursosService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.policiaisCursosService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(e){this.form.patchValue(e),this.form.get("policial")?.patchValue(e.policial.id),this.form.get("curso")?.patchValue(e.curso.id)}};n.\u0275fac=function(o){return new(o||n)(p(me),p(k),p(ye),p(we),p(V))},n.\u0275cmp=M({type:n,selectors:[["app-policiais-cursos-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[I],decls:14,vars:4,consts:[[3,"formGroup"],[1,"row"],["label","Policial","id","policial","formControlName","policial",1,"col-sm-4",3,"data$"],["label","Curso","id","curso","formControlName","curso",1,"col-sm-4",3,"data$"],["formControlName","data_inicial","label","Data Inicial","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","data_final","label","Data Final","id","data_final","tipo","date",1,"col-sm-2"],["formControlName","carga_horaria","label","Carga Horaria","id","carga_horaria","tipo","number",1,"col-sm-2"],["formControlName","boletim","label","Boletim","id","boletim","tipo","text",1,"col-sm-2"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(o,l){o&1&&(t(0,"form",0)(1,"div",1),f(2,"input-select",2)(3,"input-select",3),i(),t(4,"div",1),f(5,"input-text",4)(6,"input-text",5)(7,"input-text",6)(8,"input-text",7),i(),t(9,"div",8)(10,"a",9),h("click",function(){return l.form.reset()}),r(11,"Cancelar"),i(),t(12,"button",10),h("click",function(){return l.cadastrar()}),r(13,"Cadastrar"),i()()()),o&2&&(g("formGroup",l.form),c(2),g("data$",l.policiais$),c(),g("data$",l.cursos$),c(9),g("disabled",l.form.invalid))},dependencies:[T,F,ae,L,oe,ue,ne,le,Ce,xe]});let a=n;return a})();function Ie(a,n){a&1&&(t(0,"button",7),f(1,"i",42),i())}function Te(a,n){if(a&1&&(r(0),w(1,"mask")),a&2){let s=m().$implicit;u($(1,1,s.policial.numeral,"00.000"))}}function Le(a,n){if(a&1&&r(0),a&2){let s=m().$implicit;X(" ",s.carga_horaria,"h ")}}function Fe(a,n){if(a&1){let s=y();t(0,"a",46),h("click",function(){C(s);let o=m().$implicit,l=m(2);return x(l.editar(o))}),f(1,"i",47),i()}}function Ve(a,n){if(a&1){let s=y();t(0,"a",48),h("click",function(){C(s);let o=m().$implicit,l=m(2);return x(l.delete(o))}),f(1,"i",49),i()}}function ke(a,n){if(a&1&&(t(0,"tr",43)(1,"td"),r(2),i(),t(3,"td"),r(4),i(),t(5,"td"),r(6),i(),t(7,"td"),S(8,Te,2,4),i(),t(9,"td"),r(10),i(),t(11,"td"),r(12),w(13,"mask"),i(),t(14,"td"),r(15),i(),t(16,"td"),r(17),w(18,"date"),i(),t(19,"td"),r(20),w(21,"date"),i(),t(22,"td"),S(23,Le,1,1),i(),t(24,"td"),r(25),i(),t(26,"td"),S(27,Fe,2,0,"a",44)(28,Ve,2,0,"a",45),i()()),a&2){let s=n.$implicit,e=m(2);c(2),u(s.id),c(2),Y("",s.policial.setor.subunidade.abreviatura," - ",s.policial.setor.subunidade.unidade.abreviatura,""),c(2),u(s.policial.graduacao.nome),c(2),v(8,s.policial.numeral?8:-1),c(2),u(s.policial.nome_guerra),c(2),u($(13,14,s.policial.matricula,"000.000-0-A")),c(3),u(s.curso.nome),c(2),u($(18,17,s.data_inicial,"dd/MM/yyyy")),c(3),u($(21,20,s.data_final,"dd/MM/yyyy")),c(3),v(23,s.carga_horaria?23:-1),c(2),u(s.boletim),c(2),v(27,e.user.perfil.policiais_cursos_edt?27:-1),c(),v(28,e.user.perfil.policiais_cursos_del?28:-1)}}function Oe(a,n){a&1&&(t(0,"tr")(1,"td",29),r(2,"Sem informa\xE7\xE3o"),i()())}function Ne(a,n){if(a&1&&(t(0,"tbody"),Q(1,ke,29,23,"tr",43,z,!1,Oe,3,0,"tr"),i()),a&2){m();let s=K(21);c(),A(s.data)}}function Be(a,n){if(a&1){let s=y();r(0," Tem certeza que deseja excluir: "),t(1,"b"),r(2),i(),t(3,"div",50)(4,"a",51),r(5,"Cancelar"),i(),t(6,"button",52),h("click",function(){C(s);let o=m();return x(o.confirm())}),r(7," Excluir "),i()()}if(a&2){let s=m();c(2),u(s.excluir.policial.nome)}}var dt=(()=>{let n=class n{constructor(e,o,l){this.policiaisCursosService=e,this.toastr=o,this.sessionService=l,this.quant=10}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("policiais_cursos"),this.subscription=this.policiaisCursosService.index().subscribe({next:e=>{this.data$=e,this.temp=e}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.policiaisCursosService.index().subscribe({next:e=>{this.data$=e}})}editar(e){this.child.editar(e)}delete(e){this.excluir=e}confirm(){this.policiaisCursosService.remove(this.excluir.id||0).subscribe({next:e=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:e=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var e=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(o=>o.policial.numeral?o.policial.numeral?.toLocaleLowerCase().indexOf(e)!==-1||o.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||o.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||o.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||o.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||o.curso.nome.toLocaleLowerCase().indexOf(e)!==-1||!e:o.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||o.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||o.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||o.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||o.curso.nome.toLocaleLowerCase().indexOf(e)!==-1||!e)}}};n.\u0275fac=function(o){return new(o||n)(p(k),p(V),p(fe))},n.\u0275cmp=M({type:n,selectors:[["app-policiais-cursos"]],viewQuery:function(o,l){if(o&1&&H(j,5),o&2){let d;U(d=J())&&(l.child=d.first)}},standalone:!0,features:[Z([he()]),I],decls:87,vars:9,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Cursos"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","policial.setor.subunidade.abreviatura"],["by","policial.graduacao.nome"],["by","policial.numeral"],["by","policial.nome_guerra"],["by","policial.matricula"],["by","curso.nome"],["by","data_inicial"],["by","data_final"],["by","carga_horaria"],["by","boletim"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"fa","fa-plus"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(o,l){if(o&1){let d=y();t(0,"div",1),f(1,"app-title",2),t(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6),S(6,Ie,2,0,"button",7),i(),t(7,"div",8)(8,"div",9)(9,"select",10),B("ngModelChange",function(b){return C(d),N(l.quant,b)||(l.quant=b),x(b)}),t(10,"option",11),r(11,"10"),i(),t(12,"option",12),r(13,"25"),i(),t(14,"option",13),r(15,"50"),i(),t(16,"option",14),r(17,"100"),i()(),t(18,"input",15),B("ngModelChange",function(b){return C(d),N(l.pesquisa,b)||(l.pesquisa=b),x(b)}),h("ngModelChange",function(){return C(d),x(l.pesquisar())}),i()()()(),t(19,"div",16)(20,"table",17,0)(22,"thead")(23,"tr")(24,"th")(25,"mfDefaultSorter",18),r(26,"#"),i()(),t(27,"th")(28,"mfDefaultSorter",19),r(29,"Subunidade"),i()(),t(30,"th")(31,"mfDefaultSorter",20),r(32,"Gradua\xE7\xE3o"),i()(),t(33,"th")(34,"mfDefaultSorter",21),r(35,"Numeral"),i()(),t(36,"th")(37,"mfDefaultSorter",22),r(38,"Nome Guerra"),i()(),t(39,"th")(40,"mfDefaultSorter",23),r(41,"Matr\xEDcula"),i()(),t(42,"th")(43,"mfDefaultSorter",24),r(44,"Curso"),i()(),t(45,"th")(46,"mfDefaultSorter",25),r(47,"Data Inicial"),i()(),t(48,"th")(49,"mfDefaultSorter",26),r(50,"Data Final"),i()(),t(51,"th")(52,"mfDefaultSorter",27),r(53,"Carga Hor\xE1ria"),i()(),t(54,"th")(55,"mfDefaultSorter",28),r(56,"Boletim"),i()(),t(57,"th"),r(58,"Op\xE7\xF5es"),i()()(),S(59,Ne,4,1,"tbody"),t(60,"tfoot")(61,"tr")(62,"td",29)(63,"div",30),f(64,"mfBootstrapPaginator"),i()()()()()()()(),t(65,"div",31)(66,"div",32)(67,"div",33)(68,"div",34)(69,"h4",35),r(70,"Cadastrar"),i(),t(71,"button",36)(72,"span",37),r(73,"\xD7"),i()()(),t(74,"div",38)(75,"app-policiais-cursos-form",39),h("refresh",function(){return C(d),x(l.refresh())}),i()()()()(),t(76,"div",40)(77,"div",41)(78,"div",33)(79,"div",34)(80,"h4",35),r(81,"Excluir"),i(),t(82,"button",36)(83,"span",37),r(84,"\xD7"),i()()(),t(85,"div",38),S(86,Be,8,1),i()()()()()}o&2&&(c(6),v(6,l.user.perfil.policiais_cursos_cad?6:-1),c(3),O("ngModel",l.quant),c(9),O("ngModel",l.pesquisa),c(2),g("mfData",l.data$)("mfRowsOnPage",l.quant)("mfSortBy","id")("mfSortOrder","desc"),c(39),v(59,l.data$?59:-1),c(27),v(86,l.excluir?86:-1))},dependencies:[T,ee,ve,j,Ee,be,ge,Se,F,ce,de,ie,se,L,re,_e]});let a=n;return a})();export{dt as PoliciaisCursosComponent};