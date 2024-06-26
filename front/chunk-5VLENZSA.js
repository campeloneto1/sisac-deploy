import{a as D}from"./chunk-X5N473KM.js";import{a as ve}from"./chunk-LBCJFU5D.js";import{a as he}from"./chunk-ATLJQ2UK.js";import{a as ge}from"./chunk-NIBPGJ6J.js";import{h as k}from"./chunk-NFMIVN66.js";import{a as ce,b as pe,c as ue,d as fe}from"./chunk-AICVXWQ6.js";import{a as de}from"./chunk-I3SZ5FME.js";import{a as le}from"./chunk-HYOWEGV7.js";import{a as me}from"./chunk-3HEW5RTP.js";import{b as V}from"./chunk-UKCOEVIY.js";import{a as oe,d as se}from"./chunk-HDKAZCIU.js";import{$b as N,Ca as E,Ea as f,Fa as S,I as C,Ka as R,La as z,Ma as Q,Na as A,Nb as K,O as g,Oa as a,P as v,Pa as x,Pb as r,Qb as T,Ra as J,Rb as U,Sb as X,Tb as Y,Ua as L,Va as j,Vb as Z,W as P,Wa as $,Wb as ee,Xa as H,Xb as te,Ya as y,Yb as ie,Zb as ne,_b as ae,ac as re,ca as s,cb as w,da as p,eb as M,la as I,na as b,sa as F,sb as O,ta as B,ua as G,va as W,wa as e,xa as t,ya as u}from"./chunk-OWJSVT4P.js";var q=(()=>{let d=class d{constructor(i,o,n,c,_,h,be){this.formBuilder=i,this.oficinasService=o,this.paisesService=n,this.estadosService=c,this.cidadesService=_,this.toastr=h,this.sessionService=be,this.refresh=new P}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,r.compose([r.required,r.minLength(5),r.maxLength(100)])],cnpj:[null,r.compose([r.maxLength(15),r.required])],gerente:[null,r.compose([r.required,r.minLength(5),r.maxLength(100)])],telefone1:[null,r.compose([r.minLength(11),r.maxLength(11)])],telefone2:[null,r.compose([r.minLength(11),r.maxLength(11)])],email:[null,r.compose([r.maxLength(100),r.email])],rua:[null,r.compose([r.maxLength(100)])],numero:[null,r.compose([r.maxLength(20)])],bairro:[null,r.compose([r.maxLength(100)])],cep:[null,r.compose([r.maxLength(8)])],pais:[null],estado:[null],cidade:[null],subunidade:[null]}),this.paises$=this.paisesService.index()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){delete this.form.value.pais,delete this.form.value.estado,this.form.value.id?this.oficinasService.update(this.form.value.id,this.form.value).subscribe({next:i=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:i=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):(this.sessionService.getSubunidade()?this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()):this.toastr.error("Selecione uma subunidade!"),this.oficinasService.create(this.form.value).subscribe({next:i=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:i=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}))}editar(i){this.form.patchValue(i),i.cidade&&(this.form.get("pais")?.patchValue(i.cidade.estado.pais.id),this.form.get("estado")?.patchValue(i.cidade.estado.id),this.form.get("cidade")?.patchValue(i.cidade.id),this.getEstados(),this.getCidades())}getEstados(){this.estados$=this.estadosService.wherePais(this.form.get("pais")?.value)}getCidades(){this.cidades$=this.cidadesService.whereEstado(this.form.get("estado")?.value)}};d.\u0275fac=function(o){return new(o||d)(p(ae),p(D),p(ve),p(ge),p(he),p(k),p(V))},d.\u0275cmp=C({type:d,selectors:[["app-oficinas-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[y],decls:22,vars:5,consts:[[3,"formGroup"],[1,"row"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],["formControlName","cnpj","label","CNPJ","id","cnpj","tipo","text","mascara","00.000.000/0000-00",1,"col-sm-4"],["formControlName","gerente","label","Gerente","id","gerente","tipo","text",1,"col-sm-4"],["mascara","(00) 00000-0000","formControlName","telefone1","label","Telefone 1","id","telefone1","tipo","text",1,"col-sm-2"],["mascara","(00) 00000-0000","formControlName","telefone2","label","Telefone 2","id","telefone2","tipo","text",1,"col-sm-2"],["formControlName","email","label","E-mail","id","email","tipo","email",1,"col-sm-4"],["formControlName","rua","label","Rua","id","rua","tipo","text",1,"col-sm-4"],["formControlName","numero","label","N\xFAmero","id","numero","tipo","text",1,"col-sm-2"],["formControlName","bairro","label","Bairro","id","bairro","tipo","text",1,"col-sm-4"],["label","Pa\xEDs","id","pais","formControlName","pais",1,"col-sm-2",3,"ngModelChange","data$"],["label","Estado","id","estado","formControlName","estado",1,"col-sm-2",3,"ngModelChange","data$"],["label","Cidade","id","cidade","formControlName","cidade",1,"col-sm-2",3,"data$"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(o,n){o&1&&(e(0,"form",0)(1,"div",1),u(2,"input-text",2)(3,"input-text",3)(4,"input-text",4),t(),e(5,"div",1),u(6,"input-text",5)(7,"input-text",6)(8,"input-text",7),t(),e(9,"div",1),u(10,"input-text",8)(11,"input-text",9)(12,"input-text",10),t(),e(13,"div",1)(14,"input-select",11),f("ngModelChange",function(){return n.getEstados()}),t(),e(15,"input-select",12),f("ngModelChange",function(){return n.getCidades()}),t(),u(16,"input-select",13),t(),e(17,"div",14)(18,"a",15),f("click",function(){return n.form.reset()}),a(19,"Cancelar"),t(),e(20,"button",16),f("click",function(){return n.cadastrar()}),a(21,"Cadastrar"),t()()()),o&2&&(b("formGroup",n.form),s(14),b("data$",n.paises$),s(),b("data$",n.estados$),s(),b("data$",n.cidades$),s(4),b("disabled",n.form.invalid))},dependencies:[O,N,Y,T,U,re,Z,ee,le,de]});let l=d;return l})();function ye(l,d){if(l&1){let m=E();e(0,"tr",39)(1,"td"),a(2),t(),e(3,"td"),a(4),t(),e(5,"td"),a(6),t(),e(7,"td"),a(8),w(9,"mask"),t(),e(10,"td"),a(11),t(),e(12,"td"),a(13),w(14,"mask"),t(),e(15,"td"),a(16),w(17,"mask"),t(),e(18,"td")(19,"a",40),f("click",function(){let o=g(m).$implicit,n=S(2);return v(n.editar(o))}),u(20,"i",41),t(),e(21,"a",42),f("click",function(){let o=g(m).$implicit,n=S(2);return v(n.delete(o))}),u(22,"i",43),t()()()}if(l&2){let m=d.$implicit;s(2),x(m.id),s(2),J("",m.subunidade.abreviatura," - ",m.subunidade.unidade.abreviatura,""),s(2),x(m.nome),s(2),x(M(9,8,m.cnpj,"00.000.000/0000-00")),s(3),x(m.gerente),s(2),x(M(14,11,m.telefone1,"(00) 00000-0000")),s(3),x(M(17,14,m.telefone2,"(00) 00000-0000"))}}function we(l,d){l&1&&(e(0,"tr")(1,"td",26),a(2,"Sem informa\xE7\xE3o"),t()())}function Me(l,d){if(l&1&&(e(0,"tbody"),G(1,ye,23,17,"tr",39,B,!1,we,3,0,"tr"),t()),l&2){S();let m=A(22);s(),W(m.data)}}function Oe(l,d){if(l&1){let m=E();a(0," Tem certeza que deseja excluir: "),e(1,"b"),a(2),t(),e(3,"div",44)(4,"a",45),a(5,"Cancelar"),t(),e(6,"button",46),f("click",function(){g(m);let o=S();return v(o.confirm())}),a(7," Excluir "),t()()}if(l&2){let m=S();s(2),x(m.excluir.nome)}}var Je=(()=>{let d=class d{constructor(i,o,n){this.oficinasService=i,this.toastr=o,this.sessionService=n,this.quant=10}ngOnInit(){this.sessionService.checkPermission("gestor"),this.subscription=this.oficinasService.index().subscribe({next:i=>{this.data$=i,this.temp=i}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.oficinasService.index().subscribe({next:i=>{this.data$=i}})}editar(i){this.child.editar(i)}delete(i){this.excluir=i}confirm(){this.oficinasService.remove(this.excluir.id||0).subscribe({next:i=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:i=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var i=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(o=>o.nome.toLocaleLowerCase().indexOf(i)!==-1||!i)}}};d.\u0275fac=function(o){return new(o||d)(p(D),p(k),p(V))},d.\u0275cmp=C({type:d,selectors:[["app-oficinas"]],viewQuery:function(o,n){if(o&1&&R(q,5),o&2){let c;z(c=Q())&&(n.child=c.first)}},standalone:!0,features:[H([oe()]),y],decls:76,vars:6,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Oficinas"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","subunidade.nome"],["by","nome"],["by","cnpj"],["by","gerente"],["by","telefone1"],["by","telefone2"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(o,n){if(o&1){let c=E();e(0,"div",1),u(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),u(7,"i",8),t()(),e(8,"div",9)(9,"div",10)(10,"select",11),$("ngModelChange",function(h){return g(c),j(n.quant,h)||(n.quant=h),v(h)}),e(11,"option",12),a(12,"10"),t(),e(13,"option",13),a(14,"25"),t(),e(15,"option",14),a(16,"50"),t(),e(17,"option",15),a(18,"100"),t()(),e(19,"input",16),$("ngModelChange",function(h){return g(c),j(n.pesquisa,h)||(n.pesquisa=h),v(h)}),f("ngModelChange",function(){return g(c),v(n.pesquisar())}),t()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),a(27,"#"),t()(),e(28,"th")(29,"mfDefaultSorter",20),a(30,"Subunidade"),t()(),e(31,"th")(32,"mfDefaultSorter",21),a(33,"Nome"),t()(),e(34,"th")(35,"mfDefaultSorter",22),a(36,"CNPJ"),t()(),e(37,"th")(38,"mfDefaultSorter",23),a(39,"Gerente"),t()(),e(40,"th")(41,"mfDefaultSorter",24),a(42,"Telefone 1"),t()(),e(43,"th")(44,"mfDefaultSorter",25),a(45,"Telefone 2"),t()(),e(46,"th"),a(47,"Op\xE7\xF5es"),t()()(),I(48,Me,4,1,"tbody"),e(49,"tfoot")(50,"tr")(51,"td",26)(52,"div",27),u(53,"mfBootstrapPaginator"),t()()()()()()()(),e(54,"div",28)(55,"div",29)(56,"div",30)(57,"div",31)(58,"h4",32),a(59,"Cadastrar"),t(),e(60,"button",33)(61,"span",34),a(62,"\xD7"),t()()(),e(63,"div",35)(64,"app-oficinas-form",36),f("refresh",function(){return g(c),v(n.refresh())}),t()()()()(),e(65,"div",37)(66,"div",38)(67,"div",30)(68,"div",31)(69,"h4",32),a(70,"Excluir"),t(),e(71,"button",33)(72,"span",34),a(73,"\xD7"),t()()(),e(74,"div",35),I(75,Oe,8,1),t()()()()()}o&2&&(s(10),L("ngModel",n.quant),s(9),L("ngModel",n.pesquisa),s(2),b("mfData",n.data$)("mfRowsOnPage",n.quant),s(27),F(48,n.data$?48:-1),s(27),F(75,n.excluir?75:-1))},dependencies:[O,me,q,fe,ce,ue,pe,N,ie,ne,K,te,T,X,se]});let l=d;return l})();export{Je as OficinasComponent};
