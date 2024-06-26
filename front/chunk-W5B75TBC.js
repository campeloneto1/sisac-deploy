import{a as Te}from"./chunk-RJNR53OR.js";import{a as we}from"./chunk-ZFJQW5KK.js";import{a as Me}from"./chunk-QJUIHWJQ.js";import{a as Ee}from"./chunk-A6GCQO25.js";import{h as F}from"./chunk-NFMIVN66.js";import{a as xe,b as ge,c as Ce,d as ye}from"./chunk-AICVXWQ6.js";import{a as be}from"./chunk-I3SZ5FME.js";import{a as Se}from"./chunk-HYOWEGV7.js";import{a as _e}from"./chunk-3HEW5RTP.js";import{a as fe,b as k}from"./chunk-UKCOEVIY.js";import{a as ve,d as he}from"./chunk-HDKAZCIU.js";import{$b as V,C as W,Ca as w,Ea as f,F as z,Fa as x,I as E,Ib as ie,Ka as U,La as J,Ma as K,Na as X,Nb as re,O as v,Oa as o,P as h,Pa as S,Pb as _,Qb as I,Ra as Y,Rb as oe,Sb as ne,Tb as ae,Ua as L,Va as O,Vb as se,W as G,Wa as P,Wb as le,Xa as Z,Xb as me,Ya as M,Yb as de,Zb as ce,_b as pe,ac as ue,ca as l,cb as T,da as c,eb as $,l as R,la as N,na as b,rb as ee,sa as q,sb as D,ta as Q,ua as A,va as H,vb as te,wa as t,xa as i,ya as p}from"./chunk-OWJSVT4P.js";var C=fe.url,y="servicos",j=(()=>{let a=class a{constructor(e){this.http=e}index(){return this.http.get(`${C}/${y}`)}find(e){return this.http.get(`${C}/${y}/${e}`)}create(e){return this.http.post(`${C}/${y}`,e)}update(e,r){return this.http.put(`${C}/${y}/${e}`,r)}remove(e){return this.http.delete(`${C}/${y}/${e}`)}};a.\u0275fac=function(r){return new(r||a)(z(te))},a.\u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"});let s=a;return s})();var B=(()=>{let a=class a{constructor(e,r,n,d,g,u){this.formBuilder=e,this.servicosService=r,this.empresasService=n,this.servicosTiposService=d,this.toastr=g,this.sessionService=u,this.refresh=new G}ngOnInit(){this.form=this.formBuilder.group({id:[null],subunidade:[null],empresa:[null,_.compose([_.required])],data_inicial:[null,_.compose([_.required])],data_final:[null],servico_tipo:[null,_.compose([_.required])],observacoes:[null]}),this.subscription2=this.empresasService.index().subscribe({next:e=>{e.forEach(r=>{r.nome=`${r.nome}, ${r.cnpj}`}),this.empresas$=R(e)}}),this.servicostipos$=this.servicosTiposService.index()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}cadastrar(){this.form.value.id?this.servicosService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):(this.sessionService.getSubunidade()?this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()):this.toastr.error("Selecione uma subunidade!"),this.servicosService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}))}editar(e){this.form.patchValue(e),e.empresa&&this.form.get("empresa")?.patchValue(e.empresa.id),e.servico_tipo&&this.form.get("servico_tipo")?.patchValue(e.servico_tipo.id)}};a.\u0275fac=function(r){return new(r||a)(c(pe),c(j),c(Me),c(Te),c(F),c(k))},a.\u0275cmp=E({type:a,selectors:[["app-servicos-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[M],decls:14,vars:4,consts:[[3,"formGroup"],[1,"row"],["label","Empresa","id","empresa","formControlName","empresa",1,"col-sm-4",3,"data$"],["label","Servi\xE7o do tipo","id","servico_tipo","formControlName","servico_tipo",1,"col-sm-4",3,"data$"],["formControlName","data_inicial","label","Data inicial","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","data_final","label","Data final","id","data_final","tipo","date",1,"col-sm-2"],[1,"row",2,"height","350px"],["formControlName","observacoes","label","Observa\xE7\xF5es","id","observacoes",1,"col-sm-12"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(r,n){r&1&&(t(0,"form",0)(1,"div",1),p(2,"input-select",2)(3,"input-select",3),i(),t(4,"div",1),p(5,"input-text",4)(6,"input-text",5),i(),t(7,"div",6),p(8,"input-textarea",7),i(),t(9,"div",8)(10,"a",9),f("click",function(){return n.form.reset()}),o(11,"Cancelar"),i(),t(12,"button",10),f("click",function(){return n.cadastrar()}),o(13," Cadastrar "),i()()()),r&2&&(b("formGroup",n.form),l(2),b("data$",n.empresas$),l(),b("data$",n.servicostipos$),l(9),b("disabled",n.form.invalid))},dependencies:[D,V,ae,I,oe,ue,se,le,Se,be,Ee]});let s=a;return s})();function Fe(s,a){if(s&1){let m=w();t(0,"tr",38)(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),T(9,"mask"),i(),t(10,"td"),o(11),i(),t(12,"td"),o(13),T(14,"date"),i(),t(15,"td"),o(16),T(17,"date"),i(),t(18,"td")(19,"a",39),f("click",function(){let r=v(m).$implicit,n=x(2);return h(n.editar(r))}),p(20,"i",40),i(),t(21,"a",41),f("click",function(){let r=v(m).$implicit,n=x(2);return h(n.delete(r))}),p(22,"i",42),i()()()}if(s&2){let m=a.$implicit;l(2),S(m.id),l(2),Y("",m.subunidade.abreviatura," - ",m.subunidade.unidade.abreviatura,""),l(2),S(m.empresa.nome),l(2),S($(9,8,m.empresa.cnpj,"00.000.000/0000-00")),l(3),S(m.servico_tipo.nome),l(2),S($(14,11,m.data_inicial,"dd/MM/yyyy")),l(3),S($(17,14,m.data_final,"dd/MM/yyyy"))}}function je(s,a){s&1&&(t(0,"tr")(1,"td",25),o(2,"Sem informa\xE7\xE3o"),i()())}function Ne(s,a){if(s&1&&(t(0,"tbody"),A(1,Fe,23,17,"tr",38,Q,!1,je,3,0,"tr"),i()),s&2){x();let m=X(22);l(),H(m.data)}}function qe(s,a){if(s&1){let m=w();o(0," Tem certeza que deseja excluir: "),t(1,"b"),o(2),i(),t(3,"div",43)(4,"a",44),o(5,"Cancelar"),i(),t(6,"button",45),f("click",function(){v(m);let r=x();return h(r.confirm())}),o(7," Excluir "),i()()}if(s&2){let m=x();l(2),S(m.excluir.servico_tipo.nome)}}var dt=(()=>{let a=class a{constructor(e,r,n,d){this.servicosService=e,this.contratosLancamentosService=r,this.toastr=n,this.sessionService=d,this.quant=10,this.cadlancamento=!1}ngOnInit(){this.sessionService.checkPermission("servicos"),this.subscription=this.servicosService.index().subscribe({next:e=>{this.data$=e,this.temp=e}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.servicosService.index().subscribe({next:e=>{this.data$=e}})}editar(e){this.child.editar(e)}delete(e){this.excluir=e}confirm(){this.servicosService.remove(this.excluir.id||0).subscribe({next:e=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:e=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var e=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(r=>r.empresa.nome.toLocaleLowerCase().indexOf(e)!==-1||r.empresa.cnpj.toLocaleLowerCase().indexOf(e)!==-1||r.servico_tipo.nome.toLocaleLowerCase().indexOf(e)!==-1||!e)}}};a.\u0275fac=function(r){return new(r||a)(c(j),c(we),c(F),c(k))},a.\u0275cmp=E({type:a,selectors:[["app-servicos"]],viewQuery:function(r,n){if(r&1&&U(B,5),r&2){let d;J(d=K())&&(n.child=d.first)}},standalone:!0,features:[Z([ve()]),M],decls:73,vars:6,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Servi\xE7os"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","subunidade.abreviatura"],["by","empresa.nome"],["by","servico_tipo.nome"],["by","data_inicial"],["by","data_final"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(r,n){if(r&1){let d=w();t(0,"div",1),p(1,"app-title",2),t(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),p(7,"i",8),i()(),t(8,"div",9)(9,"div",10)(10,"select",11),P("ngModelChange",function(u){return v(d),O(n.quant,u)||(n.quant=u),h(u)}),t(11,"option",12),o(12,"10"),i(),t(13,"option",13),o(14,"25"),i(),t(15,"option",14),o(16,"50"),i(),t(17,"option",15),o(18,"100"),i()(),t(19,"input",16),P("ngModelChange",function(u){return v(d),O(n.pesquisa,u)||(n.pesquisa=u),h(u)}),f("ngModelChange",function(){return v(d),h(n.pesquisar())}),i()()()(),t(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),o(27,"#"),i()(),t(28,"th")(29,"mfDefaultSorter",20),o(30,"Subunidade"),i()(),t(31,"th")(32,"mfDefaultSorter",21),o(33,"Empresa"),i()(),t(34,"th")(35,"mfDefaultSorter",22),o(36,"Tipo do Servi\xE7o"),i()(),t(37,"th")(38,"mfDefaultSorter",23),o(39,"Data Inicial"),i()(),t(40,"th")(41,"mfDefaultSorter",24),o(42,"Data Final"),i()(),t(43,"th"),o(44,"Op\xE7\xF5es"),i()()(),N(45,Ne,4,1,"tbody"),t(46,"tfoot")(47,"tr")(48,"td",25)(49,"div",26),p(50,"mfBootstrapPaginator"),i()()()()()()()(),t(51,"div",27)(52,"div",28)(53,"div",29)(54,"div",30)(55,"h4",31),o(56,"Cadastrar"),i(),t(57,"button",32)(58,"span",33),o(59,"\xD7"),i()()(),t(60,"div",34)(61,"app-servicos-form",35),f("refresh",function(){return v(d),h(n.refresh())}),i()()()()(),t(62,"div",36)(63,"div",37)(64,"div",29)(65,"div",30)(66,"h4",31),o(67,"Excluir"),i(),t(68,"button",32)(69,"span",33),o(70,"\xD7"),i()()(),t(71,"div",34),N(72,qe,8,1),i()()()()()}r&2&&(l(10),L("ngModel",n.quant),l(9),L("ngModel",n.pesquisa),l(2),b("mfData",n.data$)("mfRowsOnPage",n.quant),l(24),q(45,n.data$?45:-1),l(27),q(72,n.excluir?72:-1))},dependencies:[D,ee,_e,B,ye,xe,Ce,ge,V,de,ce,re,me,I,ne,ie,he]});let s=a;return s})();export{dt as ServicosComponent};
