import{a as N}from"./chunk-HVK7BQD4.js";import{a as F}from"./chunk-HMKSEIRC.js";import{b as A}from"./chunk-UKCOEVIY.js";import{a as j,d as R}from"./chunk-HDKAZCIU.js";import{Cb as k,Fa as c,I as P,Oa as t,Pa as v,Qa as l,Ra as g,Sa as C,Xa as O,Ya as $,_ as M,ca as n,cb as p,da as h,db as E,eb as m,la as s,mb as T,na as b,qb as w,rb as B,sa as u,sb as D,ta as I,ua as S,va as y,wa as d,xa as a,ya as r}from"./chunk-OWJSVT4P.js";function L(i,o){if(i&1&&(d(0,"div",3),r(1,"img",4)(2,"br"),d(3,"h4"),t(4),a()()),i&2){let e=c();n(4),C(" Cautela de Material N\xBA ",e.data$.id," - ",e.data$.subunidade.abreviatura,"/",e.data$.subunidade.unidade.abreviatura," ")}}function U(i,o){if(i&1&&(t(0),p(1,"mask")),i&2){let e=c(3);l(" ",m(1,1,e.subunidade.cep,"00.000-00")," ")}}function q(i,o){if(i&1&&(t(0),p(1,"mask")),i&2){let e=c(3);l(" Fones: ",m(1,1,e.subunidade.telefone,"(00) 0000-0000")," ")}}function z(i,o){if(i&1&&t(0),i&2){let e=c(3);g(" ",e.user.policial.graduacao.abreviatura," ",e.user.policial.nome_guerra," ")}}function G(i,o){if(i&1&&t(0),i&2){let e=c(3);l(" ",e.user.nome," ")}}function Q(i,o){if(i&1&&(d(0,"div",8),r(1,"div",9),d(2,"div",10)(3,"p"),t(4),r(5,"br"),t(6),s(7,U,2,4),t(8),r(9,"br"),s(10,q,2,4),t(11),r(12,"br"),d(13,"b"),t(14,"\u201CRa\xE7a de Fortes, Povo de Bravos\u201D"),a()()(),d(15,"div",11)(16,"p")(17,"b"),t(18,"Usu\xE1rio:"),a(),s(19,z,1,2)(20,G,1,1),r(21,"br"),d(22,"b"),t(23,"Data:"),a(),t(24),p(25,"date"),a()()()),i&2){let e=c(2);n(4),g(" ",e.subunidade.nome," \u2013 ",e.subunidade.unidade.nome,""),n(2),C(" ",e.subunidade.rua,", ",e.subunidade.numero," - ",e.subunidade.bairro," | CEP: "),n(),u(7,e.subunidade.cep?7:-1),n(),g(" ",e.subunidade.cidade==null?null:e.subunidade.cidade.nome," / ",e.subunidade.cidade==null||e.subunidade.cidade.estado==null?null:e.subunidade.cidade.estado.abreviatura," "),n(2),u(10,e.subunidade.telefone?10:-1),n(),l(" | E-mail: ",e.subunidade.email,""),n(8),u(19,e.user.policial?19:20),n(5),l(" ",m(25,12,e.datahj,"dd/MM/yyyy HH:mm")," ")}}function J(i,o){if(i&1&&(d(0,"div",5),s(1,Q,26,15,"div",6),r(2,"img",7),a()),i&2){let e=c();n(),b("ngIf",e.user)}}function K(i,o){if(i&1&&(d(0,"div",19)(1,"b"),t(2,"Numeral:"),a(),t(3),p(4,"mask"),a()),i&2){let e=c(2);n(3),l(" ",m(4,1,e.data$.policial.numeral,"00.000")," ")}}function V(i,o){if(i&1&&t(0),i&2){let e=c().$implicit;v(e.material.serial)}}function W(i,o){if(i&1&&(d(0,"tr",25)(1,"td"),t(2),a(),d(3,"td"),t(4),a(),d(5,"td"),t(6),a(),d(7,"td"),s(8,V,1,1),a(),d(9,"td"),t(10),a()()),i&2){let e=o.$implicit;n(2),v(e.material.material_tipo.nome),n(2),v(e.material.modelo.marca.nome),n(2),v(e.material.modelo.nome),n(2),u(8,e.material.serial?8:-1),n(2),v(e.quantidade)}}function X(i,o){if(i&1&&(t(0),p(1,"mask")),i&2){let e=c(3);l(" ",m(1,1,e.subunidade.comandante.matricula,"000.000-0-A")," ")}}function Y(i,o){if(i&1&&(d(0,"p")(1,"b"),t(2),a(),t(3),r(4,"br"),t(5),r(6,"br"),t(7," Mat.: "),s(8,X,2,4),a()),i&2){let e=c(2);n(2),l("",e.subunidade.comandante.nome," "),n(),l("- ",e.subunidade.comandante.graduacao.abreviatura,""),n(2),g(" Comandante da ",e.subunidade.abreviatura," - ",e.subunidade.unidade.abreviatura,""),n(3),u(8,e.subunidade.comandante.matricula?8:-1)}}function Z(i,o){if(i&1&&(d(0,"table",12)(1,"thead",13)(2,"tr")(3,"td"),r(4,"div",14),a()()(),d(5,"tbody")(6,"tr")(7,"td")(8,"div",15)(9,"div",16),r(10,"img",4),d(11,"h4",17),t(12),a()(),d(13,"h5",17),t(14),p(15,"date"),a(),d(16,"div",18)(17,"div",11)(18,"b"),t(19,"Gradua\xE7\xE3o:"),a(),t(20),a(),s(21,K,5,4,"div",19),d(22,"div",20)(23,"b"),t(24,"Policial:"),a(),t(25),a(),d(26,"div",11)(27,"b"),t(28,"Matr\xEDcula:"),a(),t(29),p(30,"mask"),a()(),d(31,"div",21)(32,"div",22)(33,"b"),t(34,"Data Empr\xE9stimo:"),a(),t(35),p(36,"date"),a()(),d(37,"div",18)(38,"div",23)(39,"table",24)(40,"thead")(41,"tr")(42,"th"),t(43,"TIPO"),a(),d(44,"th"),t(45,"MARCA"),a(),d(46,"th"),t(47,"MODELO"),a(),d(48,"th"),t(49,"SERIAL"),a(),d(50,"th"),t(51,"QUANTIDADE"),a()()(),d(52,"tbody"),S(53,W,11,5,"tr",25,I),a()()()(),r(55,"div",26),d(56,"div",27)(57,"div",10)(58,"b"),t(59),a(),t(60),r(61,"br"),t(62," RECEBEDOR"),r(63,"br"),t(64),p(65,"mask"),a(),d(66,"div",10),s(67,Y,9,5,"p"),a()(),d(68,"div",27)(69,"div",23)(70,"p"),t(71),p(72,"uppercase"),p(73,"uppercase"),r(74,"br"),t(75," RECEBI EM: ___/___/______, o material descrito, o qual a partir desta data, baixa das responsabilidades do signat\xE1rio descrito acima. "),a(),d(76,"p",28),t(77),r(78,"br"),t(79," Mat.: "),a()()()()()()(),d(80,"tfoot",29)(81,"tr")(82,"td"),r(83,"div",30),a()()()()),i&2){let e=c();n(12),C(" Cautela de Material N\xBA ",e.data$.id," - ",e.data$.subunidade.abreviatura,"/",e.data$.subunidade.unidade.abreviatura," "),n(2),l("Fortaleza - CE, ",m(15,17,e.datahj,"dd/MM/yyyy"),""),n(6),l(" ",e.data$.policial.graduacao.nome," "),n(),u(21,e.data$.policial.numeral?21:-1),n(4),l(" ",e.data$.policial.nome,""),n(4),l(" ",m(30,20,e.data$.policial.matricula,"000.000-0-A")," "),n(6),l(" ",m(36,23,e.data$.data_emprestimo,"dd/MM/yyyy HH:mm")," "),n(18),y(e.data$.materiais_policiais_itens),n(2),b("innerHTML",e.data$.observacoes,M),n(4),v(e.data$.policial.nome),n(),l(" - ",e.data$.policial.graduacao.abreviatura,""),n(4),l(" Mat.: ",m(65,26,e.data$.policial.matricula,"000.000-0-A")," "),n(3),u(67,e.subunidade.comandante?67:-1),n(4),g(" LOG\xCDSTICA DA ",E(72,29,e.subunidade.abreviatura),"/",E(73,31,e.subunidade.unidade.abreviatura),""),n(6),l(" Policial - ",e.subunidade.nome,"")}}var ce=(()=>{let o=class o{constructor(x,_,f,H){this.materialPolicialService=x,this.activatedRoute=_,this.sessionService=f,this.subunidadesService=H}ngOnInit(){this.datahj=new Date,this.user=this.sessionService.getUser(),this.id=this.activatedRoute.snapshot.params.id,this.subscription=this.materialPolicialService.find(this.id).subscribe({next:x=>{this.data$=x}}),this.subscription2=this.subunidadesService.find(this.user.subunidade.id||0).subscribe({next:x=>{this.subunidade=x}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}};o.\u0275fac=function(_){return new(_||o)(h(N),h(k),h(A),h(F))},o.\u0275cmp=P({type:o,selectors:[["app-materiais-policiais-print-cautela"]],standalone:!0,features:[O([j()]),$],decls:3,vars:3,consts:[["class","page-header","style","text-align: center; ",4,"ngIf"],["class","page-footer",4,"ngIf"],["style","width: 100%; min-width: 100%",4,"ngIf"],[1,"page-header",2,"text-align","center"],["src","assets/cabecalho.png",1,"cabecalho"],[1,"page-footer"],["class","row rodape2",4,"ngIf"],["src","assets/rodape.png",1,"rodape"],[1,"row","rodape2"],[1,"col-sm-3","text-center"],[1,"col-sm-6","text-center"],[1,"col-sm-3"],[2,"width","100%","min-width","100%"],[1,"thead"],[1,"page-header-space"],[1,"page"],[1,"noprint","text-center"],[2,"margin-top","20px"],[1,"row",2,"margin-top","20px"],[1,"col-sm-2"],[1,"col-sm-4"],[1,"row"],[1,"col-sm-6"],[1,"col-sm-12"],[1,"table","table-hover","table-head-fixed","text-nowrap"],[1,"hovers"],[2,"margin-top","30px",3,"innerHTML"],[1,"row",2,"margin-top","80px"],[1,"text-center",2,"margin-top","80px"],[1,"tfoot"],[1,"page-footer-space"]],template:function(_,f){_&1&&s(0,L,5,3,"div",0)(1,J,3,1,"div",1)(2,Z,84,33,"table",2),_&2&&(b("ngIf",f.data$),n(),b("ngIf",f.data$),n(),b("ngIf",f.data$))},dependencies:[D,T,w,B,R],styles:[".page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%], .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%]{height:200px;display:none}.page-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}.page-header[_ngcontent-%COMP%]{position:fixed;top:0;width:100%}.cabecalho[_ngcontent-%COMP%]{width:100%;height:35mm}.rodape[_ngcontent-%COMP%]{width:100%;height:20mm}.rodape2[_ngcontent-%COMP%]{position:relative;top:40px}.page[_ngcontent-%COMP%]{page-break-after:always;padding:0 10mm 0 20mm;text-align:justify}@page{margin:0;-webkit-print-color-adjust:exact}@media print{.thead[_ngcontent-%COMP%]{display:table-header-group}.tfoot[_ngcontent-%COMP%]{display:table-footer-group}body[_ngcontent-%COMP%]{margin:0}.noprint[_ngcontent-%COMP%]{display:none}.page-header[_ngcontent-%COMP%], .page-header-space[_ngcontent-%COMP%], .page-footer[_ngcontent-%COMP%], .page-footer-space[_ngcontent-%COMP%]{height:200px;display:block}}"]});let i=o;return i})();export{ce as MateriaisPoliciaisPrintCautela};
