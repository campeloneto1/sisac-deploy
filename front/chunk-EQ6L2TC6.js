import{a as R}from"./chunk-SFM735GE.js";import{a as P,b as F,c as O,d as N}from"./chunk-AICVXWQ6.js";import{a as q}from"./chunk-3HEW5RTP.js";import{b as H}from"./chunk-UKCOEVIY.js";import{a as k}from"./chunk-HDKAZCIU.js";import{Cb as B,Fa as l,I as h,Na as I,Oa as a,Pa as r,Qa as b,Ra as C,Xa as T,Ya as M,_ as E,ca as o,cb as v,da as f,eb as _,la as u,na as S,rb as A,sa as d,sb as w,ta as y,ua as D,va as g,wa as t,xa as e,ya as x}from"./chunk-OWJSVT4P.js";function j(n,m){if(n&1&&(t(0,"li",12)(1,"b"),a(2,"Tipo"),e(),t(3,"a",13),a(4),e()()),n&2){let i=l(2);o(4),r(i.armamento.armamento_tipo.nome)}}function L(n,m){if(n&1&&(t(0,"li",12)(1,"b"),a(2,"Calibre"),e(),t(3,"a",13),a(4),e()()),n&2){let i=l(2);o(4),r(i.armamento.armamento_calibre.nome)}}function Q(n,m){if(n&1&&(t(0,"li",12)(1,"b"),a(2,"Tamanho"),e(),t(3,"a",13),a(4),e()()),n&2){let i=l(2);o(4),r(i.armamento.armamento_tamanho.nome)}}function z(n,m){if(n&1&&(t(0,"li",12)(1,"b"),a(2,"Data Baixa"),e(),t(3,"a",13),a(4),v(5,"date"),e()()),n&2){let i=l(2);o(4),b(" ",_(5,1,i.armamento.data_baixa,"dd/MM/yyyy")," ")}}function G(n,m){n&1&&(t(0,"li",17)(1,"a",26),a(2,"Empr\xE9stimos"),e()())}function U(n,m){if(n&1&&(t(0,"div",24)(1,"div",27)(2,"h5",28),a(3),e(),t(4,"span",29),a(5,"Quantidade"),e()()()),n&2){let i=l(2);o(3),r(i.armamento.quantidade)}}function V(n,m){if(n&1&&(t(0,"div",24)(1,"div",27)(2,"h5",28),a(3),e(),t(4,"span",29),a(5,"Quantidade Dispon\xEDvel"),e()()()),n&2){let i=l(2);o(3),r(i.armamento.quantidade_disponivel)}}function $(n,m){if(n&1&&(t(0,"div",24)(1,"div",27)(2,"h5",28),a(3),v(4,"date"),e(),t(5,"span",29),a(6,"Data Validade"),e()()()),n&2){let i=l(2);o(3),r(_(4,1,i.armamento.data_validade,"dd/MM/yyyy"))}}function J(n,m){if(n&1&&(t(0,"h5",30),a(1,"Observa\xE7\xF5es"),e(),x(2,"div",31)),n&2){let i=l(2);o(2),S("innerHTML",i.armamento.observacoes,E)}}function K(n,m){if(n&1&&(t(0,"tr",44)(1,"td"),a(2),e(),t(3,"td"),a(4),e(),t(5,"td"),a(6),e(),t(7,"td"),a(8),e(),t(9,"td"),a(10),e(),t(11,"td"),a(12),v(13,"date"),e(),t(14,"td"),a(15),v(16,"date"),e(),t(17,"td"),a(18),e(),t(19,"td"),a(20),e()(),t(21,"tr",45)(22,"td",46),x(23,"div",47),e()()),n&2){let i=m.$implicit;o(2),r(i.armamento_emprestimo.id),o(2),r(i.armamento_emprestimo.policial.graduacao.abreviatura),o(2),r(i.armamento_emprestimo.policial.numeral),o(2),r(i.armamento_emprestimo.policial.nome_guerra),o(2),r(i.armamento_emprestimo.policial.matricula),o(2),b(" ",_(13,10,i.armamento_emprestimo.data_emprestimo,"dd/MM/yyyy HH:mm")," "),o(3),b(" ",_(16,13,i.armamento_emprestimo.data_devolucao,"dd/MM/yyyy HH:mm")," "),o(3),r(i.quantidade),o(2),r(i.quantidade_devolucao),o(3),S("innerHTML",i.armamento_emprestimo.observacoes,E)}}function W(n,m){if(n&1&&(t(0,"div",25)(1,"table",32,0)(3,"thead")(4,"tr")(5,"th")(6,"mfDefaultSorter",33),a(7,"#"),e()(),t(8,"th")(9,"mfDefaultSorter",34),a(10,"Gradua\xE7\xE3o"),e()(),t(11,"th")(12,"mfDefaultSorter",35),a(13,"Numeral"),e()(),t(14,"th")(15,"mfDefaultSorter",36),a(16,"Nome Guerra"),e()(),t(17,"th")(18,"mfDefaultSorter",37),a(19,"Matr\xEDcula"),e()(),t(20,"th")(21,"mfDefaultSorter",38),a(22,"Data Empr\xE9stimo"),e()(),t(23,"th")(24,"mfDefaultSorter",39),a(25,"Data Devolu\xE7\xE3o"),e()(),t(26,"th")(27,"mfDefaultSorter",40),a(28,"Quantidade"),e()(),t(29,"th")(30,"mfDefaultSorter",41),a(31,"Quantidade Devolu\xE7\xE3o"),e()()()(),t(32,"tbody"),D(33,K,24,16,null,null,y),e(),t(35,"tfoot")(36,"tr")(37,"td",42)(38,"div",43),x(39,"mfBootstrapPaginator"),e()()()()()()),n&2){let i=I(2),c=l(2);o(),S("mfData",c.armamento.armamentos_emprestimos_itens)("mfRowsOnPage",10)("mfSortBy","id")("mfSortOrder","desc"),o(32),g(i.data)}}function X(n,m){if(n&1&&(t(0,"section",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"h3",9),a(7),e(),t(8,"p",10),a(9),e(),t(10,"ul",11),u(11,j,5,1,"li",12)(12,L,5,1,"li",12)(13,Q,5,1,"li",12)(14,z,6,4,"li",12),t(15,"li",12)(16,"b"),a(17,"Subunidade"),e(),t(18,"a",13),a(19),e()()()()()(),t(20,"div",14)(21,"div",7)(22,"div",15)(23,"ul",16)(24,"li",17)(25,"a",18),a(26,"Informa\xE7\xF5es"),e()(),u(27,G,3,0,"li",17),e()(),t(28,"div",19)(29,"div",20)(30,"div",21)(31,"div",5)(32,"div",22)(33,"div",23),u(34,U,6,1,"div",24)(35,V,6,1,"div",24)(36,$,7,4,"div",24),e()()(),u(37,J,3,1),e(),u(38,W,40,4,"div",25),e()()()()()()()),n&2){let i=l();o(7),r(i.armamento.serial),o(2),C(" ",i.armamento.modelo.marca.nome," ",i.armamento.modelo.nome," "),o(2),d(11,i.armamento.armamento_tipo?11:-1),o(),d(12,i.armamento.armamento_calibre?12:-1),o(),d(13,i.armamento.armamento_tamanho?13:-1),o(),d(14,i.armamento.data_baixa?14:-1),o(5),C("",i.armamento.subunidade.abreviatura," - ",i.armamento.subunidade.unidade.abreviatura,""),o(8),d(27,i.user.perfil.armamentos_emprestimos?27:-1),o(7),d(34,i.armamento.quantidade>=0?34:-1),o(),d(35,i.armamento.quantidade_disponivel>=0?35:-1),o(),d(36,i.armamento.data_validade?36:-1),o(),d(37,i.armamento.observacoes?37:-1),o(),d(38,i.user.perfil.armamentos_emprestimos?38:-1)}}var ce=(()=>{let m=class m{constructor(c,p,s){this.armamentosService=c,this.sessionService=p,this.activatedRoute=s}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("armamentos"),this.id=this.activatedRoute.snapshot.params.id,this.subscription=this.armamentosService.find(this.id).subscribe({next:c=>{c||this.sessionService.redirect(),this.armamento=c}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}dataFinal(c,p){let s=new Date(c);return s.setDate(s.getDate()+p),s}};m.\u0275fac=function(p){return new(p||m)(f(R),f(H),f(B))},m.\u0275cmp=h({type:m,selectors:[["app-armamento"]],standalone:!0,features:[T([k()]),M],decls:3,vars:1,consts:[["four","mfDataTable"],[1,"content-wrapper"],["titulo","Armamento"],[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-md-3"],[1,"card"],[1,"card-body","box-profile"],[1,"profile-username","text-center"],[1,"text-muted","text-center"],[1,"list-group","list-group-unbordered","mb-3"],[1,"list-group-item"],[1,"float-right"],[1,"col-md-9"],[1,"card-header","p-2"],[1,"nav","nav-pills"],[1,"nav-item"],["href","#informacoes","data-bs-toggle","tab",1,"nav-link","active"],[1,"card-body"],[1,"tab-content"],["id","informacoes",1,"active","tab-pane"],[1,"col-sm-12"],[1,"row","mt-2"],[1,"col-sm-3"],["id","emprestimos",1,"tab-pane"],["href","#emprestimos","data-bs-toggle","tab",1,"nav-link"],[1,"description-block","border-right"],[1,"description-header"],[1,"description-text"],[1,"mt-4"],[3,"innerHTML"],[1,"table","table-hover","table-head-fixed","text-wrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","armamento_emprestimo.policial.graduacao.abreviatura"],["by","armamento_emprestimo.policial.numeral"],["by","armamento_emprestimo.policial.nome_guerra"],["by","armamento_emprestimo.policial.matricula"],["by","armamento_emprestimo.data_emprestimo"],["by","armamento_emprestimo.data_devolucao"],["by","quantidade"],["by","quantidade_devolucao"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["data-widget","expandable-table","aria-expanded","false"],[1,"expandable-body","d-none"],["colspan","9"],[2,"display","none",3,"innerHTML"]],template:function(p,s){p&1&&(t(0,"div",1),x(1,"app-title",2),u(2,X,39,15,"section",3),e()),p&2&&(o(2),d(2,s.armamento?2:-1))},dependencies:[w,A,q,N,P,O,F]});let n=m;return n})();export{ce as ArmamentoComponent};
