import{a as J,b as w}from"./chunk-ZFJQW5KK.js";import{a as K}from"./chunk-C7VTDCYY.js";import"./chunk-A6GCQO25.js";import{h as $}from"./chunk-NFMIVN66.js";import{d as G}from"./chunk-AICVXWQ6.js";import"./chunk-I3SZ5FME.js";import"./chunk-HYOWEGV7.js";import{a as Q}from"./chunk-3HEW5RTP.js";import{b as N}from"./chunk-UKCOEVIY.js";import{a as z,d as O}from"./chunk-HDKAZCIU.js";import{Ca as y,Cb as H,Ea as I,Fa as m,I as B,Ka as V,La as j,Ma as P,O as b,Oa as n,P as E,Pa as s,Qa as C,Ra as M,Sa as k,Xa as q,Ya as A,_ as g,ca as o,cb as u,da as f,eb as _,la as p,na as h,ra as T,rb as R,sa as c,sb as U,ta as F,ua as D,va as L,wa as e,xa as i,ya as v}from"./chunk-OWJSVT4P.js";function X(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"Tipo"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),s(t.contrato.contrato_tipo.nome)}}function Y(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"Objeto"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),s(t.contrato.contrato_objeto.nome)}}function Z(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"SACC"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),s(t.contrato.numero_sacc)}}function tt(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"Empresa"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),s(t.contrato.empresa.nome)}}function et(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"CNPJ"),i(),e(3,"a",12),n(4),u(5,"mask"),i()()),a&2){let t=m(2);o(4),s(_(5,1,t.contrato.empresa.cnpj,"00.000.000/0000-00"))}}function it(a,l){a&1&&n(0," Sim ")}function nt(a,l){a&1&&n(0," N\xE3o ")}function at(a,l){a&1&&n(0," 1\xBA prorroga\xE7\xE3o ")}function ot(a,l){a&1&&n(0," 2\xBA prorroga\xE7\xE3o ")}function rt(a,l){a&1&&n(0," 3\xBA prorroga\xE7\xE3o ")}function lt(a,l){a&1&&n(0," 4\xBA prorroga\xE7\xE3o ")}function dt(a,l){if(a&1&&n(0),a&2){let t=m(2);M(" ",t.contrato.contrato_prorrogado.numero_contrato,", ",t.contrato.contrato_prorrogado.empresa.nome," ")}}function ct(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"Gestor"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),k(" ",t.contrato.gestor.graduacao.abreviatura," ",t.contrato.gestor.numeral," ",t.contrato.gestor.nome_guerra," ")}}function mt(a,l){if(a&1&&(e(0,"li",11)(1,"b"),n(2,"Fiscal"),i(),e(3,"a",12),n(4),i()()),a&2){let t=m(2);o(4),k(" ",t.contrato.fiscal.graduacao.abreviatura," ",t.contrato.fiscal.numeral," ",t.contrato.fiscal.nome_guerra," ")}}function st(a,l){if(a&1&&(e(0,"div",28)(1,"div",25)(2,"h5",26),n(3),i(),e(4,"span",27),n(5,"Porcent. de aditivo"),i()()(),e(6,"div",28)(7,"div",25)(8,"h5",26),n(9),u(10,"date"),i(),e(11,"span",27),n(12,"Data do aditivo"),i()()()),a&2){let t=m(2);o(3),C("",t.contrato.porcentagem_aditivado,"%"),o(6),s(_(10,2,t.contrato.data_aditivado,"dd/MM/yyyy"))}}function pt(a,l){if(a&1&&(e(0,"div",23)(1,"div",45)(2,"div",25)(3,"h5",26),n(4),i(),e(5,"span",27),n(6,"Quantidade di\xE1rias"),i()()(),e(7,"div",45)(8,"div",25)(9,"h5",26),n(10),i(),e(11,"span",27),n(12,"Di\xE1rias usadas"),i()()(),e(13,"div",45)(14,"div",25)(15,"h5",26),n(16),i(),e(17,"span",27),n(18,"Saldo di\xE1rias"),i()()()()),a&2){let t=m(2);o(4),s(t.contrato.quantidade_diarias),o(6),s(t.quantidadeDiariasUtilizadas()),o(6),s(t.getSaldoDiarias())}}function ut(a,l){if(a&1&&(e(0,"h5"),n(1,"Observa\xE7\xF5es"),i(),v(2,"div",46)),a&2){let t=m(2);o(2),h("innerHTML",t.contrato.observacoes,g)}}function _t(a,l){if(a&1&&(e(0,"h5"),n(1,"Observa\xE7\xF5es Aditivo"),i(),v(2,"div",46)),a&2){let t=m(2);o(2),h("innerHTML",t.contrato.observacoes_aditivado,g)}}function xt(a,l){if(a&1){let t=y();e(0,"tr",47)(1,"td"),n(2),i(),e(3,"td"),n(4),u(5,"date"),i(),e(6,"td"),n(7),u(8,"mask"),i(),e(9,"td")(10,"i",48),I("click",function(){let d=b(t).$implicit,x=m(2);return E(x.rmvLancamento(d))}),i()()(),e(11,"tr",49)(12,"td",50),v(13,"div",51),i()()}if(a&2){let t=l.$implicit;o(2),s(t.id),o(2),s(_(5,4,t.mes_referencia,"MM/yyyy")),o(3),C("R$ ",_(8,7,t.valor,"separator.2"),""),o(6),h("innerHTML",t.observacoes,g)}}function vt(a,l){if(a&1){let t=y();n(0," Tem certeza que deseja excluir o lan\xE7amento do m\xEAs "),e(1,"b"),n(2),u(3,"date"),i(),n(4,"? "),e(5,"div",52)(6,"a",53),n(7,"Cancelar"),i(),e(8,"button",54),I("click",function(){b(t);let d=m(2);return E(d.confirmRmvLancamento(d.rmvlancamento.id||0))}),n(9," Excluir "),i()()}if(a&2){let t=m(2);o(2),s(_(3,1,t.rmvlancamento.mes_referencia,"MM/yyyy"))}}function Ct(a,l){if(a&1){let t=y();e(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"h3",8),n(7),i(),e(8,"p",9)(9,"span"),n(10),i()(),e(11,"ul",10),p(12,X,5,1,"li",11)(13,Y,5,1,"li",11)(14,Z,5,1,"li",11)(15,tt,5,1,"li",11)(16,et,6,4,"li",11),e(17,"li",11)(18,"b"),n(19,"Prorrog\xE1vel"),i(),e(20,"a",12),p(21,it,1,0)(22,nt,1,0),i()(),e(23,"li",11)(24,"b"),n(25,"N\xFAmero da Prorroga\xE7\xE3o"),i(),e(26,"a",12),p(27,at,1,0)(28,ot,1,0)(29,rt,1,0)(30,lt,1,0),i()(),e(31,"li",11)(32,"b"),n(33,"Contrato Prorrogado"),i(),e(34,"a",12),p(35,dt,1,2),i()(),p(36,ct,5,3,"li",11)(37,mt,5,3,"li",11),e(38,"li",11)(39,"b"),n(40,"Subunidade"),i(),e(41,"a",12),n(42),i()()()()()(),e(43,"div",13)(44,"div",6)(45,"div",14)(46,"ul",15)(47,"li",16)(48,"a",17),n(49,"Informa\xE7\xF5es"),i()(),e(50,"li",16)(51,"a",18),n(52,"Lan\xE7amentos"),i()()()(),e(53,"div",19)(54,"div",20)(55,"div",21)(56,"div",22)(57,"h3")(58,"b"),n(59),u(60,"mask"),i()(),e(61,"h4"),n(62,"Valor Global"),i(),e(63,"h4")(64,"span"),n(65),i()()(),e(66,"div",23)(67,"div",24)(68,"div",25)(69,"h5",26),n(70),u(71,"date"),i(),e(72,"span",27),n(73,"Data Inicial"),i()()(),e(74,"div",28)(75,"div",25)(76,"h5",26),n(77),u(78,"date"),i(),e(79,"span",27),n(80,"Data Final"),i()()(),e(81,"div",28)(82,"div",25)(83,"h5",26),n(84),u(85,"mask"),i(),e(86,"span",27),n(87,"Valor Usado"),i()()(),p(88,st,13,5),i(),p(89,pt,19,3,"div",23),e(90,"div",29),p(91,ut,3,1)(92,_t,3,1),i()(),e(93,"div",30)(94,"h3")(95,"button",31),v(96,"i",32),i()(),e(97,"table",33)(98,"thead")(99,"tr")(100,"th"),n(101,"#"),i(),e(102,"th"),n(103,"M\xEAs de Refer\xEAncia"),i(),e(104,"th"),n(105,"Valor"),i(),e(106,"th"),n(107,"Op\xE7\xF5es"),i()()(),e(108,"tbody"),D(109,xt,14,10,null,null,F),i(),e(111,"tfoot")(112,"tr"),v(113,"th")(114,"th"),e(115,"th"),n(116),u(117,"mask"),i(),v(118,"th"),i()()()()()()()()()()(),e(119,"div",34)(120,"div",35)(121,"div",36)(122,"div",37)(123,"h4",38),n(124,"Cadastrar lan\xE7amento"),i(),e(125,"button",39)(126,"span",40),n(127,"\xD7"),i()()(),e(128,"div",41)(129,"app-contratos-lancamentos-form",42),I("refresh",function(){b(t);let d=m();return E(d.refresh())})("cancel",function(){b(t);let d=m();return E(d.closeModal())}),i()()()()(),e(130,"div",43)(131,"div",44)(132,"div",36)(133,"div",37)(134,"h4",38),n(135,"Excluir lan\xE7amento"),i(),e(136,"button",39)(137,"span",40),n(138,"\xD7"),i()()(),e(139,"div",41),p(140,vt,10,4),i()()()()}if(a&2){let t=m();o(7),s(t.contrato.numero_contrato),o(2),T("badge ",t.returnCorUsado(),""),o(),C("",t.returnPercentUsado(),"%"),o(2),c(12,t.contrato.contrato_tipo?12:-1),o(),c(13,t.contrato.contrato_objeto?13:-1),o(),c(14,t.contrato.numero_sacc?14:-1),o(),c(15,t.contrato.empresa?15:-1),o(),c(16,t.contrato.empresa?16:-1),o(5),c(21,t.contrato.prorrogavel?21:22),o(6),c(27,t.contrato.numero_porrogacao==1?27:-1),o(),c(28,t.contrato.numero_porrogacao==2?28:-1),o(),c(29,t.contrato.numero_porrogacao==3?29:-1),o(),c(30,t.contrato.numero_porrogacao==4?30:-1),o(5),c(35,t.contrato.contrato_prorrogado?35:-1),o(),c(36,t.contrato.gestor?36:-1),o(),c(37,t.contrato.fiscal?37:-1),o(5),M("",t.contrato.subunidade.abreviatura," - ",t.contrato.subunidade.unidade.abreviatura,""),o(17),C("R$ ",_(60,35,t.contrato.valor_global,"separator.2"),""),o(5),T("badge ",t.returnCorUsado(),""),o(),C("",t.returnPercentUsado(),"%"),o(5),s(_(71,38,t.contrato.data_inicial,"dd/MM/yyyy")),o(7),s(_(78,41,t.contrato.data_final,"dd/MM/yyyy")),o(7),C("R$ ",_(85,44,t.contrato.valor_usado,"separator.2"),""),o(4),c(88,t.contrato.porcentagem_aditivado?88:-1),o(),c(89,t.contrato.contrato_tipo.diarias&&t.contrato.quantidade_diarias?89:-1),o(2),c(91,t.contrato.observacoes?91:-1),o(),c(92,t.contrato.observacoes_aditivado?92:-1),o(17),L(t.contrato.contratos_lancamentos),o(7),C("R$ ",_(117,47,t.returnSumLancamentos(),"separator.2"),""),o(13),h("contrato",t.contrato.id||0),o(11),c(140,t.rmvlancamento?140:-1)}}var Ft=(()=>{let l=class l{constructor(r,d,x,S,W){this.contratosService=r,this.contratosLancamentosService=d,this.sessionService=x,this.activatedRoute=S,this.toastr=W}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("contratos"),this.id=this.activatedRoute.snapshot.params.id,this.subscription=this.contratosService.find(this.id).subscribe({next:r=>{r||this.sessionService.redirect(),this.contrato=r}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}refresh(){document.getElementById("closeModalButton").click(),this.subscription2=this.contratosService.find(this.id).subscribe({next:r=>{r||this.sessionService.redirect(),this.contrato=r}})}closeModal(){document.getElementById("closeModalButton").click()}returnPercentUsado(){var r=this.contrato.valor_usado*100/this.contrato.valor_global;return r.toFixed(2)}returnCorUsado(){var r=this.contrato.valor_usado*100/this.contrato.valor_global,d="";return r<50?d="bg-success":r<70?d="bg-warning":d="bg-danger",d}rmvLancamento(r){this.rmvlancamento=r}confirmRmvLancamento(r){this.contratosLancamentosService.remove(r).subscribe({next:d=>{this.contratosService.find(this.contrato.id||0).subscribe({next:x=>{this.contrato=x,this.toastr.success("Exclus\xE3o realizada com sucesso!")}})}})}returnSumLancamentos(){var r=0;return this.contrato.contratos_lancamentos.forEach(d=>{r=Number(r)+Number(d.valor)}),r.toFixed(2)}quantidadeDiariasUtilizadas(){var r=0;return this.contrato.quantidade_diarias&&(r=this.contrato.quantidade_diarias*this.contrato.valor_usado/this.contrato.valor_global),r.toFixed(2)}getSaldoDiarias(){if(this.contrato.quantidade_diarias){var r=this.contrato.quantidade_diarias-this.contrato.valor_usado*this.contrato.quantidade_diarias/this.contrato.valor_global;return r.toFixed(2)}else return null}};l.\u0275fac=function(d){return new(d||l)(f(K),f(J),f(N),f(H),f($))},l.\u0275cmp=B({type:l,selectors:[["app-contrato"]],viewQuery:function(d,x){if(d&1&&V(w,5),d&2){let S;j(S=P())&&(x.childlancamento=S.first)}},standalone:!0,features:[q([z()]),A],decls:3,vars:1,consts:[[1,"content-wrapper"],["titulo","Contrato"],[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-md-3"],[1,"card"],[1,"card-body","box-profile"],[1,"profile-username","text-center"],[1,"text-muted","text-center"],[1,"list-group","list-group-unbordered","mb-3"],[1,"list-group-item"],[1,"float-right"],[1,"col-md-9"],[1,"card-header","p-2"],[1,"nav","nav-pills"],[1,"nav-item"],["href","#informacoes","data-bs-toggle","tab",1,"nav-link","active"],["href","#lancamentos","data-bs-toggle","tab",1,"nav-link"],[1,"card-body"],[1,"tab-content"],["id","informacoes",1,"active","tab-pane"],[1,"row","text-center","mt-2"],[1,"row","mt-2"],[1,"col-sm-2","offset-sm-1"],[1,"description-block","border-right"],[1,"description-header"],[1,"description-text"],[1,"col-sm-2"],[1,"text-justify"],["id","lancamentos",1,"tab-pane"],["data-bs-toggle","modal","data-bs-target","#modallancamento","title","Cadastrar lan\xE7amento",1,"btn","btn-sm","btn-outline-primary"],[1,"fa","fa-plus"],[1,"table","table-hover","table-head-fixed","text-wrap"],["id","modallancamento","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close","id","closeModalButton",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh","cancel","contrato"],["id","modalexcluirlancamento","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"col-sm-4"],[3,"innerHTML"],["data-widget","expandable-table","aria-expanded","false"],["aria-hidden","true","data-bs-toggle","modal","data-bs-target","#modalexcluirlancamento","title","Excluir lan\xE7amento",1,"fa","fa-trash","text-danger","point",3,"click"],[1,"expandable-body","d-none"],["colspan","4"],[1,"text-justify",3,"innerHTML"],[1,"d-flex","justify-content-end","mt-1"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(d,x){d&1&&(e(0,"div",0),v(1,"app-title",1),p(2,Ct,141,50),i()),d&2&&(o(2),c(2,x.contrato?2:-1))},dependencies:[U,R,Q,w,O,G]});let a=l;return a})();export{Ft as ContratoComponent};