import{a as Ft,b as it}from"./chunk-7K3Q46GM.js";import{a as L}from"./chunk-2C7OWQ63.js";import{a as $t}from"./chunk-IL5XKXHY.js";import{a as Vt}from"./chunk-OT5GNJZA.js";import{a as kt}from"./chunk-2CP3JYT6.js";import{a as Tt}from"./chunk-2IJB273A.js";import{a as H}from"./chunk-TNOIS3Y3.js";import{h as D}from"./chunk-NFMIVN66.js";import{a as St,b as Et,c as yt,d as wt}from"./chunk-AICVXWQ6.js";import{a as bt}from"./chunk-I3SZ5FME.js";import{a as W}from"./chunk-HYOWEGV7.js";import{a as gt}from"./chunk-3HEW5RTP.js";import{b as j}from"./chunk-4366GPH2.js";import{a as Ct,d as xt}from"./chunk-HDKAZCIU.js";import{$b as M,Ca as E,Ea as v,Fa as p,Fb as dt,I as k,Ib as ct,Ka as O,La as B,Ma as A,Mb as pt,Na as at,Nb as ut,O as C,Oa as r,P as x,Pa as g,Pb as d,Qa as y,Qb as I,Ra as st,Rb as P,Sb as _t,Tb as R,Ua as Y,Va as Z,Vb as G,W as q,Wa as tt,Wb as Q,Xa as lt,Xb as ft,Ya as V,Yb as vt,Zb as ht,_a as et,_b as z,ac as U,ca as l,cb as w,da as f,eb as T,l as N,la as b,na as _,ra as nt,rb as mt,sa as h,sb as $,ta as J,ua as K,va as X,wa as e,xa as i,ya as u}from"./chunk-OWJSVT4P.js";function Ot(n,m){n&1&&u(0,"input-text",21)}function Bt(n,m){if(n&1&&b(0,Ot,1,0,"input-text",21),n&2){let s=p();h(0,s.contratotipo.diarias?0:-1)}}function At(n,m){if(n&1&&u(0,"input-select",22)(1,"input-select",23),n&2){let s=p();_("data$",s.prorrogacaonumero$),l(),_("data$",s.contratos$)}}var ot=(()=>{let m=class m{constructor(t,o,a,c,F,S,Nt,qt){this.formBuilder=t,this.contratosService=o,this.policiaisService=a,this.empresasService=c,this.contratosTiposService=F,this.contratosObjetosService=S,this.toastr=Nt,this.sessionService=qt,this.prorrogacaonumero$=N([{id:1,nome:"1\xBA prorroga\xE7\xE3o"},{id:2,nome:"2\xBA prorroga\xE7\xE3o"},{id:3,nome:"3\xBA prorroga\xE7\xE3o"},{id:4,nome:"4\xBA prorroga\xE7\xE3o"}]),this.refresh=new q}ngOnInit(){this.form=this.formBuilder.group({id:[null],subunidade:[null],empresa:[null,d.compose([d.required])],numero_contrato:[null,d.compose([d.required,d.maxLength(50)])],numero_sacc:[null,d.compose([d.required,d.maxLength(50)])],valor_global:[null,d.compose([d.required])],data_inicial:[null,d.compose([d.required])],data_final:[null,d.compose([d.required])],prorrogavel:[null],contrato_tipo:[null,d.compose([d.required])],contrato_objeto:[null,d.compose([d.required])],gestor:[null,d.compose([d.required])],fiscal:[null,d.compose([d.required])],quantidade_diarias:[null],numero_porrogacao:[null],contrato_prorrogado:[null],porcentagem_aditivado:[null],data_aditivado:[null],observacoes_aditivado:[null],observacoes:[null]}),this.subscription3=this.contratosService.index().subscribe({next:t=>{t.forEach(o=>{o.nome=`${o.numero_contrato}, ${o.empresa.nome}`}),this.contratos$=N(t)}}),this.subscription2=this.empresasService.index().subscribe({next:t=>{t.forEach(o=>{o.nome=`${o.nome}, ${o.cnpj}`}),this.empresas$=N(t)}}),this.contratosobjetos$=this.contratosObjetosService.index(),this.contratostipos$=this.contratosTiposService.index(),this.subscription=this.policiaisService.disponiveis().subscribe({next:t=>{t.forEach(o=>{o.numeral?o.nome=`${o.graduacao.abreviatura} ${o.numeral} ${o.nome_guerra}, ${o.matricula}`:o.nome=`${o.graduacao.abreviatura} ${o.nome_guerra}, ${o.matricula}`}),this.policiais$=N(t)}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}cadastrar(){this.contratotipo.diarias||this.form.get("quantidade_diarias")?.patchValue(null),this.form.value.id?this.contratosService.update(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):(this.sessionService.getSubunidade()?this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()):this.toastr.error("Selecione uma subunidade!"),this.contratosService.create(this.form.value).subscribe({next:t=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}))}editar(t){this.form.patchValue(t),t.contrato_prorrogado&&this.form.get("contrato_prorrogado")?.patchValue(t.contrato_prorrogado.id),t.empresa&&this.form.get("empresa")?.patchValue(t.empresa.id),t.contrato_objeto&&this.form.get("contrato_objeto")?.patchValue(t.contrato_objeto.id),t.contrato_tipo&&this.form.get("contrato_tipo")?.patchValue(t.contrato_tipo.id),t.gestor&&this.form.get("gestor")?.patchValue(t.gestor.id),t.fiscal&&this.form.get("fiscal")?.patchValue(t.fiscal.id)}getContratoTipo(){this.contratostipos$.subscribe({next:t=>{t.forEach(o=>{o.id===this.form.value.contrato_tipo&&(this.contratotipo=o)})}})}};m.\u0275fac=function(o){return new(o||m)(f(z),f(L),f(Tt),f(kt),f(Vt),f($t),f(D),f(j))},m.\u0275cmp=k({type:m,selectors:[["app-contratos-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[V],decls:29,vars:9,consts:[[3,"formGroup"],[1,"row"],["label","Empresa","id","empresa","formControlName","empresa",1,"col-sm-4",3,"data$"],["label","Objeto do contrato","id","contrato_objeto","formControlName","contrato_objeto",1,"col-sm-4",3,"data$"],["label","Objeto do tipo","id","contrato_tipo","formControlName","contrato_tipo",1,"col-sm-4",3,"ngModelChange","data$"],["formControlName","numero_contrato","label","N\xFAmero do contrato","id","numero_contrato","tipo","text",1,"col-sm-2"],["formControlName","numero_sacc","label","N\xFAmero SACC","id","numero_sacc","tipo","text",1,"col-sm-2"],["formControlName","valor_global","label","Valor global","id","valor_global","mascara","separator.2","tipo","text",1,"col-sm-2"],["formControlName","data_inicial","label","Data inicial","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","data_final","label","Data final","id","data_final","tipo","date",1,"col-sm-2"],[1,"col-sm-2"],[1,"form-check"],["type","checkbox","checked","","id","prorrogavel","formControlName","prorrogavel",1,"form-check-input"],["for","prorrogavel",1,"form-check-label"],["label","Gestor","id","gestor","formControlName","gestor",1,"col-sm-4",3,"data$"],["label","Fiscal","id","fiscal","formControlName","fiscal",1,"col-sm-4",3,"data$"],[1,"row",2,"height","350px"],["formControlName","observacoes","label","Observa\xE7\xF5es","id","observacoes",1,"col-sm-12"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"],["formControlName","quantidade_diarias","label","Quantidade de di\xE1rias","id","quantidade_diarias","tipo","number",1,"col-sm-2"],["label","Prorroga\xE7\xE3o n\xFAmero","id","numero_porrogacao","formControlName","numero_porrogacao",1,"col-sm-3",3,"data$"],["label","Contrato prorrogado","id","contrato_prorrogado","formControlName","contrato_prorrogado",1,"col-sm-4",3,"data$"]],template:function(o,a){o&1&&(e(0,"form",0)(1,"div",1),u(2,"input-select",2)(3,"input-select",3),e(4,"input-select",4),v("ngModelChange",function(){return a.getContratoTipo()}),i()(),e(5,"div",1),u(6,"input-text",5)(7,"input-text",6)(8,"input-text",7)(9,"input-text",8)(10,"input-text",9),e(11,"div",10)(12,"div",11),u(13,"input",12),e(14,"label",13),r(15,"Prorrog\xE1vel"),i()()()(),e(16,"div",1),u(17,"input-select",14)(18,"input-select",15),i(),e(19,"div",1),b(20,Bt,1,1)(21,At,2,2),i(),e(22,"div",16),u(23,"input-textarea",17),i(),e(24,"div",18)(25,"a",19),v("click",function(){return a.form.reset()}),r(26,"Cancelar"),i(),e(27,"button",20),v("click",function(){return a.cadastrar()}),r(28," Cadastrar "),i()()()),o&2&&(_("formGroup",a.form),l(2),_("data$",a.empresas$),l(),_("data$",a.contratosobjetos$),l(),_("data$",a.contratostipos$),l(13),_("data$",a.policiais$),l(),_("data$",a.policiais$),l(2),h(20,a.contratotipo?20:-1),l(),h(21,a.form.value.prorrogavel?21:-1),l(6),_("disabled",a.form.invalid))},dependencies:[$,M,R,pt,I,P,U,G,Q,W,bt,H]});let n=m;return n})();var rt=(()=>{let m=class m{constructor(t,o,a,c){this.formBuilder=t,this.contratosService=o,this.toastr=a,this.sessionService=c,this.refresh=new q}ngOnInit(){this.form=this.formBuilder.group({id:[null],porcentagem_aditivado:[1,d.compose([d.required])],observacoes_aditivado:[null]})}ngOnDestroy(){}cadastrar(){this.form.get("id")?.patchValue(this.contrato.id),this.contratosService.aditivar(this.form.value.id,this.form.value).subscribe({next:t=>{this.toastr.success("Aditivo realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:t=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(t){this.form.patchValue(t)}};m.\u0275fac=function(o){return new(o||m)(f(z),f(L),f(D),f(j))},m.\u0275cmp=k({type:m,selectors:[["app-contratos-form-aditivar"]],inputs:{contrato:"contrato"},outputs:{refresh:"refresh"},standalone:!0,features:[V],decls:10,vars:4,consts:[[3,"formGroup"],[1,"row"],["formControlName","porcentagem_aditivado","label","Porcentagem aditivado","id","porcentagem_aditivado","tipo","number",1,"col-sm-4",3,"max","min"],[1,"row",2,"height","350px"],["formControlName","observacoes_aditivado","label","Observa\xE7\xF5es","id","observacoes_aditivado",1,"col-sm-12"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(o,a){o&1&&(e(0,"form",0)(1,"div",1),u(2,"input-text",2),i(),e(3,"div",3),u(4,"input-textarea",4),i(),e(5,"div",5)(6,"a",6),v("click",function(){return a.form.reset()}),r(7,"Cancelar"),i(),e(8,"button",7),v("click",function(){return a.cadastrar()}),r(9," Cadastrar "),i()()()),o&2&&(_("formGroup",a.form),l(2),_("max",25)("min",1),l(6),_("disabled",a.form.invalid))},dependencies:[$,M,R,I,P,U,G,Q,W,H]});let n=m;return n})();var Pt=n=>["/Contrato",n],Rt=n=>["/Contrato",n,"Imprimir"];function Gt(n,m){if(n&1&&r(0),n&2){let s=p().$implicit;y(" ",s.porcentagem_aditivado," % ")}}function Qt(n,m){if(n&1&&r(0),n&2){let s=p().$implicit,t=p(2);y(" ",t.getSaldoDiarias(s)," ")}}function zt(n,m){n&1&&r(0," 1\xBA prorroga\xE7\xE3o ")}function Ut(n,m){n&1&&r(0," 2\xBA prorroga\xE7\xE3o ")}function Wt(n,m){n&1&&r(0," 3\xBA prorroga\xE7\xE3o ")}function Ht(n,m){n&1&&r(0," 4\xBA prorroga\xE7\xE3o ")}function Jt(n,m){if(n&1){let s=E();e(0,"a",57),v("click",function(){C(s);let o=p().$implicit,a=p(2);return x(a.aditivar(o))}),u(1,"i",58),i()}}function Kt(n,m){if(n&1){let s=E();e(0,"tr",46)(1,"td"),r(2),i(),e(3,"td"),r(4),i(),e(5,"td"),r(6),i(),e(7,"td"),r(8),i(),e(9,"td")(10,"a",47),r(11),i()(),e(12,"td"),r(13),w(14,"date"),i(),e(15,"td"),r(16),w(17,"date"),i(),e(18,"td"),r(19),w(20,"mask"),i(),e(21,"td"),r(22),w(23,"mask"),i(),e(24,"td")(25,"button",48),v("click",function(){let o=C(s).$implicit,a=p(2);return x(a.showLanc(o))}),r(26," Lan\xE7amentos "),i()(),e(27,"td"),b(28,Gt,1,1),i(),e(29,"td"),b(30,Qt,1,1),i(),e(31,"td",49)(32,"span"),r(33),i()(),e(34,"td"),b(35,zt,1,0)(36,Ut,1,0)(37,Wt,1,0)(38,Ht,1,0),i(),e(39,"td")(40,"a",50),u(41,"i",51),i(),b(42,Jt,2,0,"a",52),e(43,"a",53),v("click",function(){let o=C(s).$implicit,a=p(2);return x(a.editar(o))}),u(44,"i",54),i(),e(45,"a",55),v("click",function(){let o=C(s).$implicit,a=p(2);return x(a.delete(o))}),u(46,"i",56),i()()()}if(n&2){let s=m.$implicit,t=p(2);l(2),g(s.id),l(2),st("",s.subunidade.abreviatura," - ",s.subunidade.unidade.abreviatura,""),l(2),g(s.empresa.nome),l(2),g(s.contrato_objeto.nome),l(2),_("routerLink",et(35,Pt,s.id)),l(),g(s.numero_contrato),l(2),g(T(14,23,s.data_inicial,"dd/MM/yyyy")),l(3),g(T(17,26,s.data_final,"dd/MM/yyyy")),l(3),y("R$ ",T(20,29,s.valor_global,"separator.2"),""),l(3),y("R$ ",T(23,32,s.valor_usado,"separator.2"),""),l(6),h(28,s.porcentagem_aditivado?28:-1),l(2),h(30,t.getSaldoDiarias(s)?30:-1),l(2),nt("badge ",t.returnCorUsado(s),""),l(),y("",t.returnPercentUsado(s),"%"),l(2),h(35,s.numero_porrogacao==1?35:-1),l(),h(36,s.numero_porrogacao==2?36:-1),l(),h(37,s.numero_porrogacao==3?37:-1),l(),h(38,s.numero_porrogacao==4?38:-1),l(2),_("routerLink",et(37,Rt,s.id)),l(2),h(42,s.porcentagem_aditivado?-1:42)}}function Xt(n,m){n&1&&(e(0,"tr")(1,"td",28),r(2,"Sem informa\xE7\xE3o"),i()())}function Yt(n,m){if(n&1&&(e(0,"tbody"),K(1,Kt,47,39,"tr",46,J,!1,Xt,3,0,"tr"),i()),n&2){p();let s=at(22);l(),X(s.data)}}function Zt(n,m){if(n&1){let s=E();r(0," Tem certeza que deseja excluir: "),e(1,"b"),r(2),i(),e(3,"div",59)(4,"a",60),r(5,"Cancelar"),i(),e(6,"button",61),v("click",function(){C(s);let o=p();return x(o.confirm())}),r(7," Excluir "),i()()}if(n&2){let s=p();l(2),g(s.excluir.numero_contrato)}}function te(n,m){if(n&1){let s=E();e(0,"app-contratos-lancamentos-form",62),v("refresh",function(){C(s);let o=p();return x(o.refreshLancamentos())})("cancel",function(){C(s);let o=p();return x(o.cancelarCadLancamento())}),i()}if(n&2){let s=p();_("contrato",s.contrato.id||0)}}function ee(n,m){if(n&1){let s=E();e(0,"tr")(1,"td"),r(2),i(),e(3,"td"),r(4),w(5,"date"),i(),e(6,"td"),r(7),w(8,"mask"),i(),e(9,"td")(10,"i",63),v("click",function(){let o=C(s).$implicit,a=p(2);return x(a.rmvLancamento(o.id||0))}),i()()()}if(n&2){let s=m.$implicit;l(2),g(s.id),l(2),g(T(5,3,s.mes_referencia,"MM/yyyy")),l(3),y("R$ ",T(8,6,s.valor,"separator.2"),"")}}function ie(n,m){if(n&1&&(e(0,"table",44)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),i(),e(5,"th"),r(6,"M\xEAs de Refer\xEAncia"),i(),e(7,"th"),r(8,"Valor"),i(),e(9,"th"),r(10,"Op\xE7\xF5es"),i()()(),e(11,"tbody"),K(12,ee,11,9,"tr",null,J),i(),e(14,"tfoot")(15,"tr"),u(16,"th")(17,"th"),e(18,"th"),r(19),w(20,"mask"),i(),u(21,"th"),i()()()),n&2){let s=p();l(12),X(s.contrato.contratos_lancamentos),l(7),y("R$ ",T(20,1,s.returnSumLancamentos(),"separator.2"),"")}}function oe(n,m){if(n&1){let s=E();e(0,"app-contratos-form-aditivar",64),v("refresh",function(){C(s);let o=p();return x(o.refresh())}),i()}if(n&2){let s=p();_("contrato",s.contratoadt)}}var Ge=(()=>{let m=class m{constructor(t,o,a,c){this.contratosService=t,this.contratosLancamentosService=o,this.toastr=a,this.sessionService=c,this.quant=10,this.cadlancamento=!1}ngOnInit(){this.sessionService.checkPermission("contratos"),this.subscription=this.contratosService.index().subscribe({next:t=>{this.data$=t,this.temp=t}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.contratosService.index().subscribe({next:t=>{this.data$=t}})}editar(t){this.child.editar(t)}delete(t){this.excluir=t}confirm(){this.contratosService.remove(this.excluir.id||0).subscribe({next:t=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:t=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var t=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(o=>o.empresa.nome.toLocaleLowerCase().indexOf(t)!==-1||o.empresa.cnpj.toLocaleLowerCase().indexOf(t)!==-1||o.numero_contrato.toLocaleLowerCase().indexOf(t)!==-1||o.numero_sacc.toLocaleLowerCase().indexOf(t)!==-1||o.contrato_objeto.nome.toLocaleLowerCase().indexOf(t)!==-1||o.contrato_tipo.nome.toLocaleLowerCase().indexOf(t)!==-1||!t)}}returnPercentUsado(t){var o=t.valor_usado*100/t.valor_global;return o.toFixed(2)}returnCorUsado(t){var o=t.valor_usado*100/t.valor_global,a="";return o<50?a="bg-success":o<70?a="bg-warning":a="bg-danger",a}showLanc(t){this.contratosService.find(t.id||0).subscribe({next:o=>{this.contrato=o},error:o=>{this.toastr.error("Erro ao consultar contrato!")}})}refreshLancamentos(){this.cadlancamento=!1,this.contratosService.find(this.contrato.id||0).subscribe({next:t=>{this.contrato=t,this.refresh()},error:t=>{this.toastr.error("Erro ao consultar contrato!")}})}cancelarCadLancamento(){this.cadlancamento=!1}rmvLancamento(t){window.confirm("Tem certeza que deseja excluir o lan\xE7amento?")&&this.contratosLancamentosService.remove(t).subscribe({next:o=>{this.contratosService.find(this.contrato.id||0).subscribe({next:a=>{this.contrato=a,this.refresh()}})}})}returnSumLancamentos(){var t=0;return this.contrato.contratos_lancamentos.forEach(o=>{t=Number(t)+Number(o.valor)}),t.toFixed(2)}aditivar(t){this.contratoadt=t}getSaldoDiarias(t){if(t.quantidade_diarias){var o=t.quantidade_diarias-t.valor_usado*t.quantidade_diarias/t.valor_global;return o.toFixed(2)}else return null}};m.\u0275fac=function(o){return new(o||m)(f(L),f(Ft),f(D),f(j))},m.\u0275cmp=k({type:m,selectors:[["app-contratos"]],viewQuery:function(o,a){if(o&1&&(O(ot,5),O(rt,5),O(it,5)),o&2){let c;B(c=A())&&(a.child=c.first),B(c=A())&&(a.childaditivar=c.first),B(c=A())&&(a.childlancamento=c.first)}},standalone:!0,features:[lt([Ct()]),V],decls:117,vars:9,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Contratos"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","subunidade.abreviatura"],["by","empresa.nome"],["by","contrato_objeto"],["by","numero_contrato"],["by","data_inicial"],["by","data_final"],["by","valor_global"],["by","valor_usado"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],["id","modallanc","aria-hidden","true",1,"modal","fade",2,"display","none"],["title","Cadastrar",1,"btn","btn-outline-primary",3,"click"],[3,"contrato"],[1,"table","table-hover","table-head-fixed","text-nowrap","mt-1"],["id","modaladitivar","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"optionshover"],[3,"routerLink"],["data-bs-toggle","modal","data-bs-target","#modallanc",1,"btn","btn-xs","btn-outline-primary",3,"click"],[1,"text-center"],["title","Imprimir","target","_blank",1,"options","point",3,"routerLink"],["aria-hidden","true",1,"fa","fa-print","text-primary"],["title","Aditivar","data-bs-toggle","modal","data-bs-target","#modaladitivar",1,"options","point","ml-1"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],["title","Aditivar","data-bs-toggle","modal","data-bs-target","#modaladitivar",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-plus","text-primary"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"],[3,"refresh","cancel","contrato"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point",3,"click"],[3,"refresh","contrato"]],template:function(o,a){if(o&1){let c=E();e(0,"div",1),u(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),u(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),tt("ngModelChange",function(S){return C(c),Z(a.quant,S)||(a.quant=S),x(S)}),e(11,"option",12),r(12,"10"),i(),e(13,"option",13),r(14,"25"),i(),e(15,"option",14),r(16,"50"),i(),e(17,"option",15),r(18,"100"),i()(),e(19,"input",16),tt("ngModelChange",function(S){return C(c),Z(a.pesquisa,S)||(a.pesquisa=S),x(S)}),v("ngModelChange",function(){return C(c),x(a.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),r(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),r(30,"Subunidade"),i()(),e(31,"th")(32,"mfDefaultSorter",21),r(33,"Empresa"),i()(),e(34,"th")(35,"mfDefaultSorter",22),r(36,"Objeto do Contrato"),i()(),e(37,"th")(38,"mfDefaultSorter",23),r(39,"N\xFAmero do Contrato"),i()(),e(40,"th")(41,"mfDefaultSorter",24),r(42,"Data Inicial"),i()(),e(43,"th")(44,"mfDefaultSorter",25),r(45,"Data Final"),i()(),e(46,"th")(47,"mfDefaultSorter",26),r(48,"Valor Global"),i()(),e(49,"th")(50,"mfDefaultSorter",27),r(51,"Valor Usado"),i()(),e(52,"th"),r(53,"Lan\xE7amentos"),i(),e(54,"th"),r(55,"Aditivado"),i(),e(56,"th"),r(57,"Saldo Di\xE1rias"),i(),e(58,"th"),r(59,"Utiliza\xE7\xE3o"),i(),e(60,"th"),r(61,"Prorroga\xE7\xE3o"),i(),e(62,"th"),r(63,"Op\xE7\xF5es"),i()()(),b(64,Yt,4,1,"tbody"),e(65,"tfoot")(66,"tr")(67,"td",28)(68,"div",29),u(69,"mfBootstrapPaginator"),i()()()()()()()(),e(70,"div",30)(71,"div",31)(72,"div",32)(73,"div",33)(74,"h4",34),r(75,"Cadastrar"),i(),e(76,"button",35)(77,"span",36),r(78,"\xD7"),i()()(),e(79,"div",37)(80,"app-contratos-form",38),v("refresh",function(){return C(c),x(a.refresh())}),i()()()()(),e(81,"div",39)(82,"div",40)(83,"div",32)(84,"div",33)(85,"h4",34),r(86,"Excluir"),i(),e(87,"button",35)(88,"span",36),r(89,"\xD7"),i()()(),e(90,"div",37),b(91,Zt,8,1),i()()()(),e(92,"div",41)(93,"div",31)(94,"div",32)(95,"div",33)(96,"h4",34),r(97," Lan\xE7amentos "),e(98,"button",42),v("click",function(){return C(c),x(a.cadlancamento=!0)}),u(99,"i",8),i()(),e(100,"button",35)(101,"span",36),r(102,"\xD7"),i()()(),e(103,"div",37),b(104,te,1,1,"app-contratos-lancamentos-form",43)(105,ie,22,4,"table",44),i()()()(),e(106,"div",45)(107,"div",31)(108,"div",32)(109,"div",33)(110,"h4",34),r(111,"Aditivar"),i(),e(112,"button",35)(113,"span",36),r(114,"\xD7"),i()()(),e(115,"div",37),b(116,oe,1,1,"app-contratos-form-aditivar",43),i()()()()()}o&2&&(l(10),Y("ngModel",a.quant),l(9),Y("ngModel",a.pesquisa),l(2),_("mfData",a.data$)("mfRowsOnPage",a.quant),l(43),h(64,a.data$?64:-1),l(27),h(91,a.excluir?91:-1),l(13),h(104,a.cadlancamento?104:-1),l(),h(105,a.contrato?105:-1),l(11),h(116,a.contratoadt?116:-1))},dependencies:[$,mt,gt,ot,rt,it,wt,St,yt,Et,M,vt,ht,ut,ft,I,_t,ct,dt,xt]});let n=m;return n})();export{Ge as ContratosComponent};