import{a as I}from"./chunk-34VWWMNY.js";import{a as Ce}from"./chunk-VKRGKQX6.js";import{a as Se}from"./chunk-Y64AYFHZ.js";import{h as k}from"./chunk-NFMIVN66.js";import{a as he,b as xe,c as be,d as ve}from"./chunk-AICVXWQ6.js";import{a as fe}from"./chunk-I3SZ5FME.js";import{a as ue}from"./chunk-HYOWEGV7.js";import{a as _e}from"./chunk-3HEW5RTP.js";import{b as me}from"./chunk-UKCOEVIY.js";import{a as ce,d as pe}from"./chunk-HDKAZCIU.js";import{$b as T,Ca as y,Ea as x,Fa as c,Fb as X,I as w,Ib as Y,Ka as W,La as A,Ma as z,Na as Q,Nb as Z,O as b,Oa as o,P as v,Pa as p,Pb as m,Qb as P,Ra as U,Rb as ee,Sb as ie,Tb as te,Ua as V,Va as O,Vb as ae,W as j,Wa as N,Wb as oe,Xa as H,Xb as re,Ya as D,Yb as ne,Zb as le,_a as J,_b as se,ac as de,ca as s,cb as E,da as _,eb as F,l as B,la as S,na as g,rb as K,sa as h,sb as M,ta as q,ua as G,va as R,wa as e,xa as i,ya as f}from"./chunk-OWJSVT4P.js";function we(n,d){if(n&1&&f(0,"input-select",2),n&2){let l=c();g("data$",l.policiais$)}}var $=(()=>{let d=class d{constructor(a,t,r,u){this.formBuilder=a,this.policiaisFeriasService=t,this.policiaisService=r,this.toastr=u,this.refresh=new j}ngOnInit(){this.form=this.formBuilder.group({id:[null],policial:[null,m.compose([m.required])],ano:[null,m.compose([m.required,m.min(2e3)])],data_inicial:[null,m.compose([m.required])],dias:[null,m.compose([m.required,m.min(1)])],data_final:[null],boletim:[null,m.compose([m.maxLength(30),m.required])]}),this.subscription=this.policiaisService.disponiveis().subscribe({next:a=>{a.forEach(t=>{t.numeral?t.nome=`${t.graduacao.abreviatura} ${t.numeral} ${t.nome_guerra}, ${t.matricula}`:t.nome=`${t.graduacao.abreviatura} ${t.nome_guerra}, ${t.matricula}`}),this.policiais$=B(a)}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.get("data_final")?.patchValue(this.dataFinal(this.form.value.data_inicial,Number(this.form.value.dias))),this.form.value.id?this.policiaisFeriasService.update(this.form.value.id,this.form.value).subscribe({next:a=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:a=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.policiaisFeriasService.create(this.form.value).subscribe({next:a=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:a=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(a){this.form.patchValue(a),this.form.get("policial")?.patchValue(a.policial.id)}dataFinal(a,t){let r=new Date(a);return r.setDate(r.getDate()+t),Ce(r,"yyyy-MM-dd")}};d.\u0275fac=function(t){return new(t||d)(_(se),_(I),_(Se),_(k))},d.\u0275cmp=w({type:d,selectors:[["app-policiais-ferias-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[D],decls:12,vars:3,consts:[[3,"formGroup"],[1,"row"],["label","Policial","id","policial","formControlName","policial",1,"col-sm-4",3,"data$"],["formControlName","ano","label","Ano Ref.","id","ano","tipo","number",1,"col-sm-2"],["formControlName","data_inicial","label","Data Inicial","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","dias","label","Dias","id","dias","tipo","number",1,"col-sm-2"],["formControlName","boletim","label","Boletim","id","boletim","tipo","text",1,"col-sm-4"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(t,r){t&1&&(e(0,"form",0)(1,"div",1),S(2,we,1,1,"input-select",2),f(3,"input-text",3)(4,"input-text",4)(5,"input-text",5)(6,"input-text",6),i(),e(7,"div",7)(8,"a",8),x("click",function(){return r.form.reset()}),o(9,"Cancelar"),i(),e(10,"button",9),x("click",function(){return r.cadastrar()}),o(11,"Cadastrar"),i()()()),t&2&&(g("formGroup",r.form),s(2),h(2,r.policiais$?2:-1),s(8),g("disabled",r.form.invalid))},dependencies:[M,T,te,P,ee,de,ae,oe,ue,fe]});let n=d;return n})();var De=n=>["/FeriasGuia",n];function Me(n,d){n&1&&(e(0,"button",7),f(1,"i",42),i())}function Pe(n,d){if(n&1&&(o(0),E(1,"mask")),n&2){let l=c().$implicit;p(F(1,1,l.policial.numeral,"00.000"))}}function Te(n,d){if(n&1){let l=y();e(0,"a",48),x("click",function(){b(l);let t=c().$implicit,r=c(2);return v(r.editar(t))}),f(1,"i",49),i()}}function ke(n,d){if(n&1){let l=y();e(0,"a",50),x("click",function(){b(l);let t=c().$implicit,r=c(2);return v(r.delete(t))}),f(1,"i",51),i()}}function Ie(n,d){if(n&1&&(e(0,"tr",43)(1,"td"),o(2),i(),e(3,"td"),o(4),i(),e(5,"td"),o(6),i(),e(7,"td"),S(8,Pe,2,4),i(),e(9,"td"),o(10),i(),e(11,"td"),o(12),E(13,"mask"),i(),e(14,"td"),o(15),i(),e(16,"td"),o(17),E(18,"date"),i(),e(19,"td"),o(20),i(),e(21,"td"),o(22),E(23,"date"),i(),e(24,"td"),o(25),i(),e(26,"td")(27,"a",44),f(28,"i",45),i(),S(29,Te,2,0,"a",46)(30,ke,2,0,"a",47),i()()),n&2){let l=d.$implicit,a=c(2);s(2),p(l.id),s(2),U("",l.policial.setor.subunidade.abreviatura," - ",l.policial.setor.subunidade.unidade.abreviatura,""),s(2),p(l.policial.graduacao.nome),s(2),h(8,l.policial.numeral?8:-1),s(2),p(l.policial.nome_guerra),s(2),p(F(13,15,l.policial.matricula,"000.000-0-A")),s(3),p(l.ano),s(2),p(F(18,18,l.data_inicial,"dd/MM/yyyy")),s(3),p(l.dias),s(2),p(F(23,21,l.data_final,"dd/MM/yyyy")),s(3),p(l.boletim),s(2),g("routerLink",J(24,De,l.id)),s(2),h(29,a.user.perfil.policiais_ferias_edt?29:-1),s(),h(30,a.user.perfil.policiais_ferias_del?30:-1)}}function Le(n,d){n&1&&(e(0,"tr")(1,"td",29),o(2,"Sem informa\xE7\xE3o"),i()())}function Ve(n,d){if(n&1&&(e(0,"tbody"),G(1,Ie,31,26,"tr",43,q,!1,Le,3,0,"tr"),i()),n&2){c();let l=Q(21);s(),R(l.data)}}function Oe(n,d){if(n&1){let l=y();o(0," Tem certeza que deseja excluir: "),e(1,"b"),o(2),i(),e(3,"div",52)(4,"a",53),o(5,"Cancelar"),i(),e(6,"button",54),x("click",function(){b(l);let t=c();return v(t.confirm())}),o(7," Excluir "),i()()}if(n&2){let l=c();s(2),p(l.excluir.policial.nome)}}var ri=(()=>{let d=class d{constructor(a,t,r){this.policiaisFeriasService=a,this.toastr=t,this.sessionService=r,this.quant=10}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("policiais_ferias"),this.subscription=this.policiaisFeriasService.index().subscribe({next:a=>{this.data$=a,this.temp=a}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.policiaisFeriasService.index().subscribe({next:a=>{this.data$=a}})}editar(a){this.child.editar(a)}delete(a){this.excluir=a}confirm(){this.policiaisFeriasService.remove(this.excluir.id||0).subscribe({next:a=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:a=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var a=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(t=>t.policial.numeral?t.policial.numeral?.toLocaleLowerCase().indexOf(a)!==-1||t.policial.nome.toLocaleLowerCase().indexOf(a)!==-1||t.policial.nome_guerra.toLocaleLowerCase().indexOf(a)!==-1||t.policial.matricula.toLocaleLowerCase().indexOf(a)!==-1||t.policial.graduacao.nome.toLocaleLowerCase().indexOf(a)!==-1||t.ano||t.boletim||!a:t.policial.nome.toLocaleLowerCase().indexOf(a)!==-1||t.policial.nome_guerra.toLocaleLowerCase().indexOf(a)!==-1||t.policial.matricula.toLocaleLowerCase().indexOf(a)!==-1||t.policial.graduacao.nome.toLocaleLowerCase().indexOf(a)!==-1||t.ano||t.boletim||!a)}}};d.\u0275fac=function(t){return new(t||d)(_(I),_(k),_(me))},d.\u0275cmp=w({type:d,selectors:[["app-policiais-ferias"]],viewQuery:function(t,r){if(t&1&&W($,5),t&2){let u;A(u=z())&&(r.child=u.first)}},standalone:!0,features:[H([ce()]),D],decls:87,vars:9,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","F\xE9rias"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","policial.setor.subunidade.abreviatura"],["by","policial.graduacao.nome"],["by","policial.numeral"],["by","policial.nome_guerra"],["by","policial.matricula"],["by","ano"],["by","data_inicial"],["by","dias"],["by","dataFinal(data_inicial, dias)"],["by","boletim"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"fa","fa-plus"],[1,"optionshover"],["title","Editar","target","_blank",1,"options","point",3,"routerLink"],["aria-hidden","true",1,"fa","fa-print","text-primary"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(t,r){if(t&1){let u=y();e(0,"div",1),f(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6),S(6,Me,2,0,"button",7),i(),e(7,"div",8)(8,"div",9)(9,"select",10),N("ngModelChange",function(C){return b(u),O(r.quant,C)||(r.quant=C),v(C)}),e(10,"option",11),o(11,"10"),i(),e(12,"option",12),o(13,"25"),i(),e(14,"option",13),o(15,"50"),i(),e(16,"option",14),o(17,"100"),i()(),e(18,"input",15),N("ngModelChange",function(C){return b(u),O(r.pesquisa,C)||(r.pesquisa=C),v(C)}),x("ngModelChange",function(){return b(u),v(r.pesquisar())}),i()()()(),e(19,"div",16)(20,"table",17,0)(22,"thead")(23,"tr")(24,"th")(25,"mfDefaultSorter",18),o(26,"#"),i()(),e(27,"th")(28,"mfDefaultSorter",19),o(29,"Subunidade"),i()(),e(30,"th")(31,"mfDefaultSorter",20),o(32,"Gradua\xE7\xE3o"),i()(),e(33,"th")(34,"mfDefaultSorter",21),o(35,"Numeral"),i()(),e(36,"th")(37,"mfDefaultSorter",22),o(38,"Nome Guerra"),i()(),e(39,"th")(40,"mfDefaultSorter",23),o(41,"Matr\xEDcula"),i()(),e(42,"th")(43,"mfDefaultSorter",24),o(44,"Ano"),i()(),e(45,"th")(46,"mfDefaultSorter",25),o(47,"Data Inicial"),i()(),e(48,"th")(49,"mfDefaultSorter",26),o(50,"Dias"),i()(),e(51,"th")(52,"mfDefaultSorter",27),o(53,"Data Final"),i()(),e(54,"th")(55,"mfDefaultSorter",28),o(56,"Boletim"),i()(),e(57,"th"),o(58,"Op\xE7\xF5es"),i()()(),S(59,Ve,4,1,"tbody"),e(60,"tfoot")(61,"tr")(62,"td",29)(63,"div",30),f(64,"mfBootstrapPaginator"),i()()()()()()()(),e(65,"div",31)(66,"div",32)(67,"div",33)(68,"div",34)(69,"h4",35),o(70,"Cadastrar"),i(),e(71,"button",36)(72,"span",37),o(73,"\xD7"),i()()(),e(74,"div",38)(75,"app-policiais-ferias-form",39),x("refresh",function(){return b(u),v(r.refresh())}),i()()()()(),e(76,"div",40)(77,"div",41)(78,"div",33)(79,"div",34)(80,"h4",35),o(81,"Excluir"),i(),e(82,"button",36)(83,"span",37),o(84,"\xD7"),i()()(),e(85,"div",38),S(86,Oe,8,1),i()()()()()}t&2&&(s(6),h(6,r.user.perfil.policiais_ferias_cad?6:-1),s(3),V("ngModel",r.quant),s(9),V("ngModel",r.pesquisa),s(2),g("mfData",r.data$)("mfRowsOnPage",r.quant)("mfSortBy","id")("mfSortOrder","desc"),s(39),h(59,r.data$?59:-1),s(27),h(86,r.excluir?86:-1))},dependencies:[M,K,_e,$,ve,he,be,xe,T,ne,le,Z,re,P,ie,pe,Y,X]});let n=d;return n})();export{ri as PoliciaisFeriasComponent};