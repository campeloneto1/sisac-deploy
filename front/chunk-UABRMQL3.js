import{a as j}from"./chunk-HMKSEIRC.js";import{a as J}from"./chunk-6PPDGIQB.js";import{b as D}from"./chunk-UKCOEVIY.js";import{a as B,d as k}from"./chunk-HDKAZCIU.js";import{Cb as w,Fa as l,I as S,Oa as t,Pa as s,Qa as m,Ra as h,Sa as E,Xa as P,Ya as A,_ as I,ca as o,cb as p,da as g,eb as c,la as u,mb as O,na as f,rb as $,sa as v,sb as T,ta as C,ua as y,va as M,wa as a,xa as n,ya as d}from"./chunk-OWJSVT4P.js";function F(i,r){if(i&1&&(a(0,"div",3),d(1,"img",4)(2,"br"),a(3,"h4"),t(4),n()()),i&2){let e=l();o(4),E(" Empr\xE9stimo de Armamento N\xBA ",e.data$.id," - ",e.data$.subunidade.abreviatura,"/",e.data$.subunidade.unidade.abreviatura," ")}}function N(i,r){if(i&1&&(t(0),p(1,"mask")),i&2){let e=l(3);m(" ",c(1,1,e.subunidade.cep,"00.000-00")," ")}}function R(i,r){if(i&1&&(t(0),p(1,"mask")),i&2){let e=l(3);m(" Fones: ",c(1,1,e.subunidade.telefone,"(00) 0000-0000")," ")}}function L(i,r){if(i&1&&t(0),i&2){let e=l(3);h(" ",e.user.policial.graduacao.abreviatura," ",e.user.policial.nome_guerra," ")}}function U(i,r){if(i&1&&t(0),i&2){let e=l(3);m(" ",e.user.nome," ")}}function q(i,r){if(i&1&&(a(0,"div",8),d(1,"div",9),a(2,"div",10)(3,"p"),t(4),d(5,"br"),t(6),u(7,N,2,4),t(8),d(9,"br"),u(10,R,2,4),t(11),d(12,"br"),a(13,"b"),t(14,"\u201CRa\xE7a de Fortes, Povo de Bravos\u201D"),n()()(),a(15,"div",11)(16,"p")(17,"b"),t(18,"Usu\xE1rio:"),n(),u(19,L,1,2)(20,U,1,1),d(21,"br"),a(22,"b"),t(23,"Data:"),n(),t(24),p(25,"date"),n()()()),i&2){let e=l(2);o(4),h(" ",e.subunidade.nome," \u2013 ",e.subunidade.unidade.nome,""),o(2),E(" ",e.subunidade.rua,", ",e.subunidade.numero," - ",e.subunidade.bairro," | CEP: "),o(),v(7,e.subunidade.cep?7:-1),o(),h(" ",e.subunidade.cidade==null?null:e.subunidade.cidade.nome," / ",e.subunidade.cidade==null||e.subunidade.cidade.estado==null?null:e.subunidade.cidade.estado.abreviatura," "),o(2),v(10,e.subunidade.telefone?10:-1),o(),m(" | E-mail: ",e.subunidade.email,""),o(8),v(19,e.user.policial?19:20),o(5),m(" ",c(25,12,e.datahj,"dd/MM/yyyy HH:mm")," ")}}function z(i,r){if(i&1&&(a(0,"div",5),u(1,q,26,15,"div",6),d(2,"img",7),n()),i&2){let e=l();o(),f("ngIf",e.user)}}function Q(i,r){if(i&1&&(t(0),p(1,"mask")),i&2){let e=l(2);m(" ",c(1,1,e.data$.policial.numeral,"00.000")," ")}}function V(i,r){if(i&1&&t(0),i&2){let e=l().$implicit;s(e.armamento.armamento_calibre.nome)}}function G(i,r){if(i&1&&t(0),i&2){let e=l().$implicit;s(e.armamento.armamento_tamanho.nome)}}function K(i,r){if(i&1&&(a(0,"tr",28)(1,"td"),t(2),n(),a(3,"td"),t(4),n(),a(5,"td"),t(6),n(),a(7,"td"),u(8,V,1,1),n(),a(9,"td"),u(10,G,1,1),n(),a(11,"td"),t(12),n(),a(13,"td"),t(14),n(),a(15,"td"),t(16),n()()),i&2){let e=r.$implicit;o(2),s(e.armamento.armamento_tipo.nome),o(2),s(e.armamento.modelo.marca.nome),o(2),s(e.armamento.modelo.nome),o(2),v(8,e.armamento.armamento_calibre?8:-1),o(2),v(10,e.armamento.armamento_tamanho?10:-1),o(2),s(e.armamento.serial),o(2),s(e.quantidade),o(2),s(e.quantidade_devolucao)}}function W(i,r){if(i&1&&(a(0,"table",12)(1,"thead",13)(2,"tr")(3,"td"),d(4,"div",14),n()()(),a(5,"tbody")(6,"tr")(7,"td")(8,"div",15)(9,"div",16),d(10,"img",4),a(11,"h4",17),t(12),n()(),a(13,"h5",17),t(14),p(15,"date"),n(),a(16,"div",18)(17,"div",19)(18,"h4"),t(19,"Policial"),n(),t(20),u(21,Q,2,4),t(22),d(23,"br"),a(24,"b"),t(25,"Mat.:"),n(),t(26),p(27,"mask"),n()(),a(28,"div",20)(29,"div",21)(30,"div",22)(31,"h5",23),t(32),p(33,"date"),n(),a(34,"span",24),t(35,"Data Empr\xE9stimo"),n()()(),a(36,"div",11)(37,"div",22)(38,"h5",23),t(39),p(40,"date"),n(),a(41,"span",24),t(42,"Data Devolu\xE7\xE3o"),n()()()(),a(43,"div",25)(44,"div",26)(45,"table",27)(46,"thead")(47,"tr")(48,"th"),t(49,"TIPO"),n(),a(50,"th"),t(51,"MARCA"),n(),a(52,"th"),t(53,"MODELO"),n(),a(54,"th"),t(55,"CALIBRE"),n(),a(56,"th"),t(57,"TAMANHO"),n(),a(58,"th"),t(59,"SERIAL"),n(),a(60,"th"),t(61,"QUANTIDADE"),n(),a(62,"th"),t(63,"QUANT. DEVOLVIDO"),n()()(),a(64,"tbody"),y(65,K,17,8,"tr",28,C),n()()()(),d(67,"div",29),a(68,"div",30)(69,"b"),t(70),n(),t(71),d(72,"br"),t(73),p(74,"mask"),d(75,"br"),n()()()()(),a(76,"tfoot",31)(77,"tr")(78,"td"),d(79,"div",32),n()()()()),i&2){let e=l();o(12),E(" Empr\xE9stimo de Armamento N\xBA ",e.data$.id," - ",e.data$.subunidade.abreviatura,"/",e.data$.subunidade.unidade.abreviatura," "),o(2),m("Fortaleza - CE, ",c(15,14,e.datahj,"dd/MM/yyyy"),""),o(6),m(" ",e.data$.policial.graduacao.abreviatura," "),o(),v(21,e.data$.policial.numeral?21:-1),o(),m(" ",e.data$.policial.nome,""),o(4),m(" ",c(27,17,e.data$.policial.matricula,"000.000-0-A")," "),o(6),s(c(33,20,e.data$.data_emprestimo,"dd/MM/yyyy HH:mm")),o(7),s(c(40,23,e.data$.data_devolucao,"dd/MM/yyyy HH:mm")),o(26),M(e.data$.armamentos_emprestimos_itens),o(2),f("innerHTML",e.data$.observacoes,I),o(3),s(e.data$.policial.nome),o(),m(" - ",e.data$.policial.graduacao.abreviatura,""),o(2),m(" Mat.: ",c(74,26,e.data$.policial.matricula,"000.000-0-A"),"")}}var re=(()=>{let r=class r{constructor(x,_,b,H){this.armamentoEmprestimoService=x,this.activatedRoute=_,this.sessionService=b,this.subunidadesService=H}ngOnInit(){this.datahj=new Date,this.user=this.sessionService.getUser(),this.id=this.activatedRoute.snapshot.params.id,this.subscription=this.armamentoEmprestimoService.find(this.id).subscribe({next:x=>{this.data$=x}}),this.subscription2=this.subunidadesService.find(this.user.subunidade.id||0).subscribe({next:x=>{this.subunidade=x}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}};r.\u0275fac=function(_){return new(_||r)(g(J),g(w),g(D),g(j))},r.\u0275cmp=S({type:r,selectors:[["app-armamento-emprestimo-print-justificativa"]],standalone:!0,features:[P([B()]),A],decls:3,vars:3,consts:[["class","page-header","style","text-align: center; ",4,"ngIf"],["class","page-footer",4,"ngIf"],["style","width: 100%; min-width: 100%",4,"ngIf"],[1,"page-header",2,"text-align","center"],["src","assets/cabecalho.png",1,"cabecalho"],[1,"page-footer"],["class","row rodape2",4,"ngIf"],["src","assets/rodape.png",1,"rodape"],[1,"row","rodape2"],[1,"col-sm-3","text-center"],[1,"col-sm-6","text-center"],[1,"col-sm-3"],[2,"width","100%","min-width","100%"],[1,"thead"],[1,"page-header-space"],[1,"page"],[1,"noprint","text-center"],[2,"margin-top","20px"],[1,"row","mt-4"],[1,"col-sm-5","offset-sm-1"],[1,"row","mt-3"],[1,"col-sm-3","offset-sm-3"],[1,"description-block","border-right"],[1,"description-header"],[1,"description-text"],[1,"row",2,"margin-top","20px"],[1,"col-sm-12"],[1,"table","table-hover","table-head-fixed","text-nowrap"],[1,"hovers"],[2,"margin-top","30px",3,"innerHTML"],[1,"text-center",2,"margin-top","30px"],[1,"tfoot"],[1,"page-footer-space"]],template:function(_,b){_&1&&u(0,F,5,3,"div",0)(1,z,3,1,"div",1)(2,W,80,29,"table",2),_&2&&(f("ngIf",b.data$),o(),f("ngIf",b.data$),o(),f("ngIf",b.data$))},dependencies:[T,O,$,k],styles:[".page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%], .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%]{height:200px;display:none}.page-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}.page-header[_ngcontent-%COMP%]{position:fixed;top:0;width:100%}.cabecalho[_ngcontent-%COMP%]{width:100%;height:35mm}.rodape[_ngcontent-%COMP%]{width:100%;height:20mm}.rodape2[_ngcontent-%COMP%]{position:relative;top:40px}.page[_ngcontent-%COMP%]{page-break-after:always;padding:0 10mm 0 20mm;text-align:justify}@page{margin:0;-webkit-print-color-adjust:exact}@media print{.thead[_ngcontent-%COMP%]{display:table-header-group}.tfoot[_ngcontent-%COMP%]{display:table-footer-group}body[_ngcontent-%COMP%]{margin:0}.noprint[_ngcontent-%COMP%]{display:none}.page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%], .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%]{height:200px;display:block}}"]});let i=r;return i})();export{re as ArmamentosEmprestimosPrintJustificativa};