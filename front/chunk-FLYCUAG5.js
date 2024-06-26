import{a as te}from"./chunk-Y64AYFHZ.js";import{a as ee}from"./chunk-SFM735GE.js";import{a as Y}from"./chunk-I3SZ5FME.js";import{a as X}from"./chunk-HYOWEGV7.js";import{a as Z}from"./chunk-3HEW5RTP.js";import{a as U,b as J}from"./chunk-UKCOEVIY.js";import{a as K,d as W}from"./chunk-HDKAZCIU.js";import{$b as Q,C as g,Ea as D,F,Fa as c,I as M,Oa as o,Pa as s,Pb as h,Qa as E,Qb as j,Rb as H,Sa as T,Tb as G,Vb as O,Wb as L,Xa as R,Ya as k,_ as A,_b as V,ac as z,ca as m,cb as v,da as u,db as N,eb as b,l as S,la as _,na as f,pb as P,rb as q,sa as p,sb as B,ta as $,ua as C,va as y,vb as w,wa as n,xa as a,ya as x}from"./chunk-OWJSVT4P.js";var ne=U.url,re="armamentos-emprestimos",ie=(()=>{let r=class r{constructor(l){this.http=l}relatorio(l){return this.http.post(`${ne}/${re}/relatorio`,l)}};r.\u0275fac=function(e){return new(e||r)(F(w))},r.\u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();function le(t,r){if(t&1&&(o(0),v(1,"mask")),t&2){let i=c().$implicit;s(b(1,1,i.policial.numeral,"00.000"))}}function se(t,r){if(t&1&&o(0),t&2){let i=c().$implicit;s(i.armamento.armamento_calibre.nome)}}function de(t,r){if(t&1&&o(0),t&2){let i=c().$implicit;s(i.armamento.armamento_tamanho.nome)}}function pe(t,r){if(t&1&&(n(0,"b"),o(1,"Quantidade Devolu\xE7\xE3o:"),a(),o(2)),t&2){let i=c().$implicit;m(2),E(" ",i.quantidade_devolucao,"")}}function ce(t,r){if(t&1&&(n(0,"li")(1,"b"),o(2,"Armamento:"),a(),o(3),_(4,se,1,1)(5,de,1,1),o(6),n(7,"b"),o(8,"Quantidade:"),a(),o(9),_(10,pe,3,1),a()),t&2){let i=r.$implicit;m(3),T(" ",i.armamento.armamento_tipo.nome," ",i.armamento.modelo.marca.nome," ",i.armamento.modelo.nome," "),m(),p(4,i.armamento.armamento_calibre?4:-1),m(),p(5,i.armamento.armamento_tamanho?5:-1),m(),E(" ",i.armamento.serial,", "),m(3),E(" ",i.quantidade,", "),m(),p(10,i.quantidade_devolucao?10:-1)}}function ue(t,r){if(t&1&&x(0,"div",20),t&2){let i=c().$implicit;f("innerHTML",i.observacoes,A)}}function _e(t,r){if(t&1&&(n(0,"tr",16)(1,"td"),o(2),a(),n(3,"td"),o(4),a(),n(5,"td"),_(6,le,2,4),a(),n(7,"td"),o(8),a(),n(9,"td"),o(10),v(11,"mask"),a(),n(12,"td"),o(13),v(14,"date"),a(),n(15,"td"),o(16),v(17,"date"),a()(),n(18,"tr",17)(19,"td",18)(20,"div",19)(21,"ul"),C(22,ce,11,8,"li",null,$),a(),_(24,ue,1,1,"div",20),a()()()),t&2){let i=r.$implicit;m(2),s(i.id),m(2),s(i.policial.graduacao.nome),m(2),p(6,i.policial.numeral?6:-1),m(2),s(i.policial.nome_guerra),m(2),s(b(11,8,i.policial.matricula,"000.000-0-A")),m(3),s(b(14,11,i.data_emprestimo,"dd/MM/yyyy HH:mm")),m(3),s(b(17,14,i.data_devolucao,"dd/MM/yyyy HH:mm")),m(6),y(i.armamentos_emprestimos_itens),m(2),p(24,i.observacoes?24:-1)}}function fe(t,r){if(t&1&&(n(0,"table",15)(1,"thead")(2,"tr")(3,"th"),o(4,"#"),a(),n(5,"th"),o(6,"Gradua\xE7\xE3o"),a(),n(7,"th"),o(8,"Numeral"),a(),n(9,"th"),o(10,"Nome de Guerra"),a(),n(11,"th"),o(12,"Matr\xEDcula"),a(),n(13,"th"),o(14,"Data Emprestimo"),a(),n(15,"th"),o(16,"Data Devolu\xE7\xE3o"),a()()(),n(17,"tbody"),C(18,_e,25,17,null,null,$),v(20,"async"),a()()),t&2){let i=c();m(18),y(N(20,0,i.data$))}}var Te=(()=>{let r=class r{constructor(l,e,d,I,ae){this.formBuilder=l,this.armamentosEmprestimosRelService=e,this.policiaisService=d,this.armamentosService=I,this.sessionService=ae}ngOnInit(){this.sessionService.checkPermission("relatorios"),this.form=this.formBuilder.group({armamento:[null],policial:[null],data_inicial:[null,h.compose([h.required])],data_final:[null,h.compose([h.required])],subunidade:[null]}),this.subscription=this.policiaisService.index().subscribe({next:l=>{l.forEach(e=>{e.numeral?e.nome=`${e.graduacao.abreviatura} ${e.numeral} ${e.nome_guerra}, ${e.matricula}`:e.nome=`${e.graduacao.abreviatura} ${e.nome_guerra}, ${e.matricula}`}),this.policiais$=S(l)}}),this.subscription2=this.armamentosService.index().subscribe({next:l=>{l.forEach(e=>{e.armamento_calibre?e.serial=`${e.armamento_tipo.nome} ${e.modelo.marca.nome} ${e.modelo.nome} ${e.serial}, ${e.armamento_calibre?.nome}, Disp: ${e.quantidade_disponivel}`:e.armamento_tamanho?e.serial=`${e.armamento_tipo.nome} ${e.modelo.marca.nome} ${e.modelo.nome} ${e.serial}, ${e.armamento_tamanho?.nome}, Disp: ${e.quantidade_disponivel}`:!e.armamento_tamanho&&!e.armamento_calibre&&(e.serial=`${e.armamento_tipo.nome} ${e.modelo.marca.nome} ${e.modelo.nome} ${e.serial}, Disp: ${e.quantidade_disponivel}`)}),this.armamentos$=S(l)}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}pesquisar(){this.sessionService.getSubunidade()&&this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()),this.data$=this.armamentosEmprestimosRelService.relatorio(this.form.value)}};r.\u0275fac=function(e){return new(e||r)(u(V),u(ie),u(te),u(ee),u(J))},r.\u0275cmp=M({type:r,selectors:[["app-armamentos-emprestimos-rel"]],standalone:!0,features:[R([K()]),k],decls:21,vars:5,consts:[[1,"content-wrapper"],["titulo","Relat\xF3rio de Empr\xE9stimos de Armamentos"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title","noprint"],[1,"card-title","print"],[1,"card-body","table-responsive"],[1,"noprint",3,"formGroup"],[1,"row"],["formControlName","data_inicial","label","Data Inical maior ou igual a","id","data_inicial","tipo","date",1,"col-sm-2"],["formControlName","data_final","label","Data Inicial menor ou igual a","id","data_final","tipo","date",1,"col-sm-2"],["label","Policial","id","policial","formControlName","policial",1,"col-sm-4",3,"data$"],["label","Armamento","id","armamento","formControlName","armamento","optionname","serial",1,"col-sm-4",3,"data$"],["type","button",1,"btn","btn-primary","btn-block",3,"click","disabled"],[1,"table","table-hover","table-head-fixed","text-wrap"],["data-widget","expandable-table","aria-expanded","false"],[1,"expandable-body","d-none"],["colspan","7"],[2,"display","none"],[3,"innerHTML"]],template:function(e,d){e&1&&(n(0,"div",0),x(1,"app-title",1),n(2,"section",2)(3,"div",3)(4,"div",4)(5,"h3",5),o(6,"Filtro"),a(),n(7,"h3",6),o(8,"Relat\xF3rio de Empr\xE9stimos de Armamentos"),a()(),n(9,"div",7)(10,"form",8)(11,"div",9),x(12,"input-text",10)(13,"input-text",11),a(),n(14,"div",9),x(15,"input-select",12)(16,"input-select",13),a(),n(17,"div")(18,"button",14),D("click",function(){return d.pesquisar()}),o(19," Pesquisar "),a()()(),_(20,fe,21,2,"table",15),a()()()()),e&2&&(m(10),f("formGroup",d.form),m(5),f("data$",d.policiais$),m(),f("data$",d.armamentos$),m(2),f("disabled",d.form.invalid),m(2),p(20,d.data$?20:-1))},dependencies:[B,P,q,Z,Q,G,j,H,z,O,L,X,Y,W],styles:[".print[_ngcontent-%COMP%]{display:none}@media print{.noprint[_ngcontent-%COMP%]{display:none}.print[_ngcontent-%COMP%]{display:block}}"]});let t=r;return t})();export{Te as ArmamentosEmprestimosRel};