import{a as ie}from"./chunk-7KOX2I3V.js";import{a as ue}from"./chunk-VKRGKQX6.js";import{a as De}from"./chunk-TNOIS3Y3.js";import{h as I}from"./chunk-NFMIVN66.js";import{a as Ie,b as ke,c as Ve,d as Fe}from"./chunk-AICVXWQ6.js";import{a as te}from"./chunk-I3SZ5FME.js";import{a as ee}from"./chunk-HYOWEGV7.js";import{a as Te}from"./chunk-3HEW5RTP.js";import{a as Y,b as Z}from"./chunk-4366GPH2.js";import{a as ye,d as $e}from"./chunk-HDKAZCIU.js";import{$b as T,C as Q,Ca as E,Ea as c,F as R,Fa as d,I as M,Ib as be,Ka as re,La as se,Ma as me,Na as Ce,Nb as Ee,O as _,Oa as s,P as f,Pa as x,Pb as S,Qa as z,Qb as $,Ra as he,Rb as H,Sb as Se,Tb as A,Ua as le,Va as de,Vb as U,W as V,Wa as ce,Wb as J,Xa as xe,Xb as ge,Ya as w,Yb as Me,Zb as we,_b as K,ac as X,ca as l,cb as O,da as h,eb as j,f as fe,l as G,la as C,na as v,rb as ve,sa as p,sb as y,ta as F,ua as D,va as L,vb as W,wa as a,xa as n,ya as b}from"./chunk-OWJSVT4P.js";var N=Y.url,q="materiais-consumo-entradas",ne=(()=>{let r=class r{constructor(e){this.http=e}index(){return this.http.get(`${N}/${q}`)}find(e){return this.http.get(`${N}/${q}/${e}`)}create(e){return this.http.post(`${N}/${q}`,e)}update(e,t){return this.http.put(`${N}/${q}/${e}`,t)}remove(e){return this.http.delete(`${N}/${q}/${e}`)}};r.\u0275fac=function(t){return new(t||r)(R(W))},r.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();function Ge(i,r){if(i&1){let o=E();a(0,"div",1)(1,"input-select",7),c("ngModelChange",function(){_(o);let t=d();return f(t.select())}),n(),b(2,"input-text",8),a(3,"div",9)(4,"button",10),c("click",function(){_(o);let t=d();return f(t.addMaterial())}),b(5,"i",11),n()()()}if(i&2){let o=d();l(),v("data$",o.materiaisconsumo$),l(),v("min",1),l(2),v("disabled",!o.form.value.material_consumo||!o.form.value.quantidade)}}function Qe(i,r){if(i&1){let o=E();a(0,"tr")(1,"td"),s(2),n(),a(3,"td"),s(4),n(),a(5,"td")(6,"i",13),c("click",function(){let t=_(o).$index,m=d(2);return f(m.removeMaterial(t))}),n()()()}if(i&2){let o=r.$implicit;l(2),x(o.armamento.serial),l(2),x(o.quantidade)}}function Re(i,r){if(i&1&&(a(0,"div",1)(1,"table",12)(2,"thead")(3,"tr")(4,"th"),s(5,"Serial"),n(),a(6,"th"),s(7,"Quant."),n(),a(8,"th"),s(9,"Op\xE7\xF5es"),n()()(),a(10,"tbody"),D(11,Qe,7,2,"tr",null,F),n()()()),i&2){let o=d();l(11),L(o.materiaisselected)}}var pe=(()=>{let r=class r{constructor(e,t,m,u,k){this.formBuilder=e,this.materiaisConsumoEntradasService=t,this.materiaisConsumoService=m,this.toastr=u,this.sessionService=k,this.materiaisselected=[],this.editando=!1,this.refresh=new V}ngOnInit(){this.form=this.formBuilder.group({id:[null],material_consumo:[null],quantidade:[1,S.compose([S.min(1)])],observacoes:[null],materiais:[null],subunidade:[null]}),this.subscription2=this.materiaisConsumoService.disponiveis().subscribe({next:e=>{e.forEach(t=>{t.serial?t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome} ${t.serial}, Disp: ${t.quantidade}`:t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome}, Disp: ${t.quantidade}`}),this.materiaisconsumo$=G(e)}})}reset(){this.form.reset(),this.editando=!1,this.form.get("quantidade")?.patchValue(1)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}cadastrar(){this.form.value.id?(delete this.form.value.materiais,delete this.form.value.material_consumo,delete this.form.value.quantidade,this.materiaisConsumoEntradasService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})):(this.sessionService.getSubunidade()?this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()):this.toastr.error("Selecione uma subunidade!"),this.form.get("materiais")?.patchValue(this.materiaisselected),this.materiaisConsumoEntradasService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit(),this.materiaisselected=[]},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}))}select(){return fe(this,null,function*(){if(this.form.value.armamento){var e;yield this.materiaisconsumo$.subscribe(t=>{e=t.filter(m=>m.id==this.form.value.material_consumo)}),e&&(this.maxamon=e[0].quantidade)}})}editar(e){this.editando=!0,this.form.patchValue(e),this.form.get("user")?.patchValue(e.user.id)}addMaterial(){if(this.form.value.quantidade>0){let e;this.materiaisconsumo$.subscribe(t=>{e=t.filter(m=>m.id==this.form.value.material_consumo)}),this.materiaisselected.push({material_consumoId:this.form.value.material_consumo,armamento:e[0],quantidade:this.form.value.quantidade}),this.form.get("material_consumo")?.patchValue(null),this.form.get("quantidade")?.patchValue(1)}}removeMaterial(e){this.materiaisselected.splice(e,1)}};r.\u0275fac=function(t){return new(t||r)(h(K),h(ne),h(ie),h(I),h(Z))},r.\u0275cmp=M({type:r,selectors:[["app-materiais-consumo-entradas-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[w],decls:10,vars:4,consts:[[3,"formGroup"],[1,"row"],[1,"row",2,"height","350px"],["formControlName","observacoes","label","Observa\xE7\xF5es","id","observacoes",1,"col-sm-12"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"],["label","Material de Consumo","id","material_consumo","formControlName","material_consumo","optionname","serial",1,"col-sm-6",3,"ngModelChange","data$"],["formControlName","quantidade","label","Quantidade","id","quantidade","tipo","number",1,"col-sm-2",3,"min"],[1,"col-sm-2",2,"padding-top","30px"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa","fa-plus"],[1,"table","table-hover","table-head-fixed","text-nowrap"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point",3,"click"]],template:function(t,m){t&1&&(a(0,"form",0),C(1,Ge,6,3,"div",1)(2,Re,13,0,"div",1),a(3,"div",2),b(4,"input-textarea",3),n(),a(5,"div",4)(6,"a",5),c("click",function(){return m.form.reset()}),s(7,"Cancelar"),n(),a(8,"button",6),c("click",function(){return m.cadastrar()}),s(9,"Cadastrar"),n()()()),t&2&&(v("formGroup",m.form),l(),p(1,m.editando?-1:1),l(),p(2,m.materiaisselected&&!m.editando?2:-1),l(6),v("disabled",m.form.invalid||m.materiaisselected.length==0))},dependencies:[y,T,A,$,H,X,U,J,ee,te,De]});let i=r;return i})();var B=Y.url,P="materiais-consumo-entradas-itens",oe=(()=>{let r=class r{constructor(e){this.http=e}index(){return this.http.get(`${B}/${P}`)}find(e){return this.http.get(`${B}/${P}/${e}`)}create(e){return this.http.post(`${B}/${P}`,e)}update(e,t){return this.http.put(`${B}/${P}/${e}`,t)}remove(e){return this.http.delete(`${B}/${P}/${e}`)}};r.\u0275fac=function(t){return new(t||r)(R(W))},r.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var _e=(()=>{let r=class r{constructor(e,t,m,u){this.formBuilder=e,this.materiaisConsumoEntradasItensService=t,this.materiaisConsumoService=m,this.toastr=u,this.refresh=new V,this.cancel=new V}ngOnInit(){this.form=this.formBuilder.group({id:[null],material_consumo:[null,S.compose([S.required])],material_consumo_entrada:[this.material_consumo_entrada_id],quantidade:[1,S.compose([S.required,S.min(1)])]}),this.subscription=this.materiaisConsumoService.disponiveis().subscribe({next:e=>{e.forEach(t=>{t.serial?t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome} ${t.serial}, Disp: ${t.quantidade}`:t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome}, Disp: ${t.quantidade}`}),this.materiaisconsumo$=G(e)}})}reset(){this.form.reset(),this.form.get("quantidade")?.patchValue(1)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.value.id?this.materiaisConsumoEntradasItensService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.materiaisConsumoEntradasItensService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}cancelar(){this.form.reset(),this.cancel.emit()}};r.\u0275fac=function(t){return new(t||r)(h(K),h(oe),h(ie),h(I))},r.\u0275cmp=M({type:r,selectors:[["app-materiais-consumo-entradas-itens-form"]],inputs:{material_consumo_entrada_id:"material_consumo_entrada_id"},outputs:{refresh:"refresh",cancel:"cancel"},standalone:!0,features:[w],decls:9,vars:3,consts:[[3,"formGroup"],[1,"row"],["label","Material de Consumo","id","material_consumo","formControlName","material_consumo","optionname","serial",1,"col-sm-6",3,"data$"],["formControlName","quantidade","label","Quantidade","id","quantidade","tipo","number",1,"col-sm-2"],[1,"d-flex","justify-content-end"],[1,"btn","btn-link","text-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click","disabled"]],template:function(t,m){t&1&&(a(0,"form",0)(1,"div",1),b(2,"input-select",2)(3,"input-text",3),n(),a(4,"div",4)(5,"a",5),c("click",function(){return m.cancelar()}),s(6,"Cancelar"),n(),a(7,"button",6),c("click",function(){return m.cadastrar()}),s(8,"Cadastrar"),n()()()),t&2&&(v("formGroup",m.form),l(2),v("data$",m.materiaisconsumo$),l(5),v("disabled",m.form.invalid))},dependencies:[y,T,A,$,H,X,U,J,ee,te]});let i=r;return i})();function ze(i,r){if(i&1){let o=E();a(0,"button",39),c("click",function(){_(o);let t=d();return f(t.child.reset())}),b(1,"i",40),n()}}function We(i,r){if(i&1&&s(0),i&2){let o=d().$implicit;x(o.user.policial.graduacao.nome)}}function He(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let o=d(2).$implicit;z(" ",j(1,1,o.user.policial.numeral,"00.000")," ")}}function Ae(i,r){if(i&1&&C(0,He,2,4),i&2){let o=d().$implicit;p(0,o.user.policial.numeral?0:-1)}}function Ue(i,r){if(i&1&&s(0),i&2){let o=d().$implicit;x(o.user.policial.nome_guerra)}}function Je(i,r){if(i&1&&s(0),i&2){let o=d().$implicit;z(" ",o.user.nome," ")}}function Ke(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let o=d().$implicit;x(j(1,1,o.user.policial.matricula,"000.000-0-A"))}}function Xe(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let o=d().$implicit;z(" ",j(1,1,o.user.cpf,"000.000.000-00")," ")}}function Ye(i,r){if(i&1){let o=E();a(0,"a",45),c("click",function(){_(o);let t=d().$implicit,m=d(2);return f(m.editar(t))}),b(1,"i",46),n()}}function Ze(i,r){if(i&1){let o=E();a(0,"a",47),c("click",function(){_(o);let t=d().$implicit,m=d(2);return f(m.delete(t))}),b(1,"i",48),n()}}function et(i,r){if(i&1){let o=E();a(0,"tr",41)(1,"td"),s(2),n(),a(3,"td"),s(4),n(),a(5,"td"),C(6,We,1,1),n(),a(7,"td"),C(8,Ae,1,1),n(),a(9,"td"),C(10,Ue,1,1)(11,Je,1,1),n(),a(12,"td"),C(13,Ke,2,4)(14,Xe,2,4),n(),a(15,"td"),s(16),O(17,"date"),n(),a(18,"td")(19,"button",42),c("click",function(){let t=_(o).$implicit,m=d(2);return f(m.showMat(t))}),s(20," Materiais "),n()(),a(21,"td"),C(22,Ye,2,0,"a",43)(23,Ze,2,0,"a",44),n()()}if(i&2){let o=r.$implicit,e=d(2);l(2),x(o.id),l(2),he("",o.subunidade.abreviatura," - ",o.subunidade.unidade.abreviatura,""),l(2),p(6,o.user.policial?6:-1),l(2),p(8,o.user.policial?8:-1),l(2),p(10,o.user.policial?10:11),l(3),p(13,o.user.policial?13:14),l(3),x(j(17,10,o.data_entrada,"dd/MM/yyyy HH:mm")),l(6),p(22,e.user.perfil.materiais_consumo_entradas_edt&&e.checkDate(o)?22:-1),l(),p(23,e.user.perfil.materiais_consumo_entradas_del&&e.checkDate(o)?23:-1)}}function tt(i,r){i&1&&(a(0,"tr")(1,"td",25),s(2,"Sem informa\xE7\xE3o"),n()())}function it(i,r){if(i&1&&(a(0,"tbody"),D(1,et,24,13,"tr",41,F,!1,tt,3,0,"tr"),n()),i&2){d();let o=Ce(21);l(),L(o.data)}}function at(i,r){if(i&1){let o=E();a(0,"button",52),c("click",function(){_(o);let t=d(2);return f(t.cadmaterial=!0)}),b(1,"i",40),n()}}function nt(i,r){if(i&1){let o=E();a(0,"app-materiais-consumo-entradas-itens-form",53),c("refresh",function(){_(o);let t=d(2);return f(t.refreshMat())})("cancel",function(){_(o);let t=d(2);return f(t.cancelMat())}),n()}if(i&2){let o=d(2);v("material_consumo_entrada_id",o.materialConsumoEntrada.id)}}function ot(i,r){if(i&1&&s(0),i&2){let o=d().$implicit;x(o.material_consumo.modelo.marca.nome)}}function rt(i,r){if(i&1){let o=E();a(0,"i",55),c("click",function(){_(o);let t=d().$implicit,m=d(2);return f(m.rmvMaterial(t.id||0))}),n()}}function st(i,r){if(i&1&&(a(0,"tr")(1,"td"),s(2),n(),a(3,"td"),s(4),n(),a(5,"td"),C(6,ot,1,1),n(),a(7,"td"),s(8),n(),a(9,"td"),s(10),n(),a(11,"td"),s(12),n(),a(13,"td"),C(14,rt,1,0,"i",54),n()()),i&2){let o=r.$implicit,e=d(2);l(2),x(o.id),l(2),x(o.material_consumo.material_consumo_tipo.nome),l(2),p(6,o.material_consumo.modelo.marca?6:-1),l(2),x(o.material_consumo.modelo.nome),l(2),x(o.material_consumo.serial),l(2),x(o.quantidade),l(2),p(14,e.user.perfil.materiais_consumo_entradas_edt&&e.checkDate(e.materialConsumoEntrada)?14:-1)}}function mt(i,r){if(i&1&&(a(0,"div",29)(1,"div",30)(2,"h4",31),s(3," Materiais "),C(4,at,2,0,"button",49),n(),a(5,"button",32)(6,"span",33),s(7,"\xD7"),n()()(),a(8,"div",34),C(9,nt,1,1,"app-materiais-consumo-entradas-itens-form",50),a(10,"table",51)(11,"thead")(12,"tr")(13,"th"),s(14,"#"),n(),a(15,"th"),s(16,"Tipo"),n(),a(17,"th"),s(18,"Marca"),n(),a(19,"th"),s(20,"Modelo"),n(),a(21,"th"),s(22,"Serial"),n(),a(23,"th"),s(24,"Quantidade"),n(),a(25,"th"),s(26,"Op\xE7\xF5es"),n()()(),a(27,"tbody"),D(28,st,15,7,"tr",null,F),n()()()()),i&2){let o=d();l(4),p(4,o.user.perfil.materiais_consumo_entradas_edt&&o.checkDate(o.materialConsumoEntrada)?4:-1),l(5),p(9,o.cadmaterial?9:-1),l(19),L(o.materialConsumoEntrada.materiais_consumo_entradas_itens)}}function lt(i,r){if(i&1){let o=E();s(0," Tem certeza que deseja excluir: "),a(1,"b"),s(2),n(),a(3,"div",56)(4,"a",57),s(5,"Cancelar"),n(),a(6,"button",58),c("click",function(){_(o);let t=d();return f(t.confirm())}),s(7," Excluir "),n()()}if(i&2){let o=d();l(2),x(o.excluir.user.nome)}}var Jt=(()=>{let r=class r{constructor(e,t,m,u){this.materiaisConsumoEntradasService=e,this.materiaisConsumoEntradasItensService=t,this.toastr=m,this.sessionService=u,this.quant=10,this.cadmaterial=!1}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("materiais_consumo_saidas"),this.subscription=this.materiaisConsumoEntradasService.index().subscribe({next:e=>{this.data$=e,this.temp=e}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.materiaisConsumoEntradasService.index().subscribe({next:e=>{this.data$=e}})}editar(e){this.child.editar(e)}delete(e){this.excluir=e}confirm(){this.materiaisConsumoEntradasService.remove(this.excluir.id||0).subscribe({next:e=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:e=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var e=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(t=>t.user.policial?t.user.policial.numeral?t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.numeral.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||!e:t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||!e:t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||!e)}}showMat(e){this.cadmaterial=!1,this.materiaisConsumoEntradasService.find(e.id||0).subscribe({next:t=>{this.materialConsumoEntrada=t}})}refreshMat(){this.cadmaterial=!1,this.materiaisConsumoEntradasService.find(this.materialConsumoEntrada.id||0).subscribe({next:e=>{this.materialConsumoEntrada=e}})}rmvMaterial(e){window.confirm("Tem certeza que deseja excluir o material?")&&this.materiaisConsumoEntradasItensService.remove(e).subscribe({next:t=>{this.materiaisConsumoEntradasService.find(this.materialConsumoEntrada.id||0).subscribe({next:m=>{this.materialConsumoEntrada=m}})}})}cancelMat(){this.cadmaterial=!1}checkDate(e){var t=new Date;return ue(e.data_entrada,"yyyy-MM-dd")==ue(t,"yyyy-MM-dd")}};r.\u0275fac=function(t){return new(t||r)(h(ne),h(oe),h(I),h(Z))},r.\u0275cmp=M({type:r,selectors:[["app-materiais-consumo-entradas"]],viewQuery:function(t,m){if(t&1&&(re(pe,5),re(_e,5)),t&2){let u;se(u=me())&&(m.child=u.first),se(u=me())&&(m.childmaterial=u.first)}},standalone:!0,features:[xe([ye()]),w],decls:80,vars:10,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Entrada de Material de Consumo"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","subunidade.abreviatura"],["by","policial.graduacao.nome"],["by","policial.numeral"],["by","policial.nome_guerra"],["by","policial.matricula"],["by","data_entrada"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modalmat","aria-hidden","true",1,"modal","fade",2,"display","none"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-plus"],[1,"optionshover"],["data-bs-toggle","modal","data-bs-target","#modalmat",1,"btn","btn-xs","btn-outline-primary",3,"click"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],["title","Cadastrar",1,"btn","btn-outline-primary"],[3,"material_consumo_entrada_id"],[1,"table","table-hover","table-head-fixed","text-nowrap"],["title","Cadastrar",1,"btn","btn-outline-primary",3,"click"],[3,"refresh","cancel","material_consumo_entrada_id"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point",3,"click"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(t,m){if(t&1){let u=E();a(0,"div",1),b(1,"app-title",2),a(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6),C(6,ze,2,0,"button",7),n(),a(7,"div",8)(8,"div",9)(9,"select",10),ce("ngModelChange",function(g){return _(u),de(m.quant,g)||(m.quant=g),f(g)}),a(10,"option",11),s(11,"10"),n(),a(12,"option",12),s(13,"25"),n(),a(14,"option",13),s(15,"50"),n(),a(16,"option",14),s(17,"100"),n()(),a(18,"input",15),ce("ngModelChange",function(g){return _(u),de(m.pesquisa,g)||(m.pesquisa=g),f(g)}),c("ngModelChange",function(){return _(u),f(m.pesquisar())}),n()()()(),a(19,"div",16)(20,"table",17,0)(22,"thead")(23,"tr")(24,"th")(25,"mfDefaultSorter",18),s(26,"#"),n()(),a(27,"th")(28,"mfDefaultSorter",19),s(29,"Subunidade"),n()(),a(30,"th")(31,"mfDefaultSorter",20),s(32,"Gradua\xE7\xE3o"),n()(),a(33,"th")(34,"mfDefaultSorter",21),s(35,"Numeral"),n()(),a(36,"th")(37,"mfDefaultSorter",22),s(38,"Nome Guerra"),n()(),a(39,"th")(40,"mfDefaultSorter",23),s(41,"Matr\xEDcula/CPF"),n()(),a(42,"th")(43,"mfDefaultSorter",24),s(44,"Data Entrada"),n()(),a(45,"th"),s(46,"Materiais"),n(),a(47,"th"),s(48,"Op\xE7\xF5es"),n()()(),C(49,it,4,1,"tbody"),a(50,"tfoot")(51,"tr")(52,"td",25)(53,"div",26),b(54,"mfBootstrapPaginator"),n()()()()()()()(),a(55,"div",27)(56,"div",28)(57,"div",29)(58,"div",30)(59,"h4",31),s(60,"Cadastrar"),n(),a(61,"button",32)(62,"span",33),s(63,"\xD7"),n()()(),a(64,"div",34)(65,"app-materiais-consumo-entradas-form",35),c("refresh",function(){return _(u),f(m.refresh())}),n()()()()(),a(66,"div",36)(67,"div",28),C(68,mt,30,2,"div",29),n()(),a(69,"div",37)(70,"div",38)(71,"div",29)(72,"div",30)(73,"h4",31),s(74,"Excluir"),n(),a(75,"button",32)(76,"span",33),s(77,"\xD7"),n()()(),a(78,"div",34),C(79,lt,8,1),n()()()()()}t&2&&(l(6),p(6,m.user.perfil.materiais_consumo_entradas_cad?6:-1),l(3),le("ngModel",m.quant),l(9),le("ngModel",m.pesquisa),l(2),v("mfData",m.data$)("mfRowsOnPage",m.quant)("mfSortBy","id")("mfSortOrder","desc"),l(29),p(49,m.data$?49:-1),l(19),p(68,m.materialConsumoEntrada?68:-1),l(11),p(79,m.excluir?79:-1))},dependencies:[y,ve,Te,pe,_e,Fe,Ie,Ve,ke,T,Me,we,Ee,ge,$,Se,$e,be]});let i=r;return i})();export{Jt as MateriaisConsumoEntradasComponent};