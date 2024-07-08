import{a as ie}from"./chunk-7KOX2I3V.js";import{a as ue}from"./chunk-VKRGKQX6.js";import{a as Te}from"./chunk-VUP6SWOP.js";import{a as Le}from"./chunk-TNOIS3Y3.js";import{h as I}from"./chunk-NFMIVN66.js";import{a as Ve,b as ke,c as Fe,d as De}from"./chunk-AICVXWQ6.js";import{a as te}from"./chunk-I3SZ5FME.js";import{a as ee}from"./chunk-HYOWEGV7.js";import{a as Ie}from"./chunk-3HEW5RTP.js";import{a as Y,b as Z}from"./chunk-4366GPH2.js";import{a as ye,d as $e}from"./chunk-HDKAZCIU.js";import{$b as T,C as Q,Ca as b,Ea as u,F as R,Fa as d,I as w,Ib as ve,Ka as re,La as se,Ma as me,Na as Ce,Nb as be,O as _,Oa as s,P as f,Pa as x,Pb as g,Qa as z,Qb as $,Ra as he,Rb as U,Sb as ge,Tb as H,Ua as le,Va as de,Vb as A,W as k,Wa as ce,Wb as J,Xa as xe,Xb as Me,Ya as E,Yb as we,Zb as Ee,_b as K,ac as X,ca as l,cb as O,da as h,eb as j,f as fe,l as V,la as C,na as S,rb as Se,sa as c,sb as y,ta as F,ua as D,va as L,vb as W,wa as a,xa as o,ya as v}from"./chunk-OWJSVT4P.js";var q=Y.url,N="materiais-consumo-saidas",oe=(()=>{let r=class r{constructor(e){this.http=e}index(){return this.http.get(`${q}/${N}`)}find(e){return this.http.get(`${q}/${N}/${e}`)}create(e){return this.http.post(`${q}/${N}`,e)}update(e,t){return this.http.put(`${q}/${N}/${e}`,t)}remove(e){return this.http.delete(`${q}/${N}/${e}`)}};r.\u0275fac=function(t){return new(t||r)(R(W))},r.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();function Qe(i,r){if(i&1){let n=b();a(0,"div",1)(1,"input-select",8),u("ngModelChange",function(){_(n);let t=d();return f(t.select())}),o(),v(2,"input-text",9),a(3,"div",10)(4,"button",11),u("click",function(){_(n);let t=d();return f(t.addMaterial())}),v(5,"i",12),o()()()}if(i&2){let n=d();l(),S("data$",n.materiaisconsumo$),l(),S("max",n.maxamon)("min",1),l(2),S("disabled",!n.form.value.material_consumo||!n.form.value.quantidade)}}function Re(i,r){if(i&1){let n=b();a(0,"tr")(1,"td"),s(2),o(),a(3,"td"),s(4),o(),a(5,"td")(6,"i",14),u("click",function(){let t=_(n).$index,m=d(2);return f(m.removeMaterial(t))}),o()()()}if(i&2){let n=r.$implicit;l(2),x(n.armamento.serial),l(2),x(n.quantidade)}}function ze(i,r){if(i&1&&(a(0,"div",1)(1,"table",13)(2,"thead")(3,"tr")(4,"th"),s(5,"Serial"),o(),a(6,"th"),s(7,"Quant."),o(),a(8,"th"),s(9,"Op\xE7\xF5es"),o()()(),a(10,"tbody"),D(11,Re,7,2,"tr",null,F),o()()()),i&2){let n=d();l(11),L(n.materiaisselected)}}var pe=(()=>{let r=class r{constructor(e,t,m,p,G,M){this.formBuilder=e,this.materiaisConsumoSaidasService=t,this.usersService=m,this.materiaisConsumoService=p,this.toastr=G,this.sessionService=M,this.materiaisselected=[],this.editando=!1,this.maxamon=1,this.refresh=new k}ngOnInit(){this.form=this.formBuilder.group({id:[null],user:[null,g.compose([g.required])],material_consumo:[null],quantidade:[1,g.compose([g.min(1)])],observacoes:[null],materiais:[null],subunidade:[null]}),this.subscription=this.usersService.index().subscribe({next:e=>{e.forEach(t=>{t.policial?t.policial.numeral?t.nome=`${t.policial.graduacao.abreviatura} ${t.policial.numeral} ${t.policial.nome_guerra}, ${t.policial.matricula}`:t.nome=`${t.policial.graduacao.abreviatura} ${t.policial.nome_guerra}, ${t.policial.matricula}`:t.nome=`${t.nome}, ${t.cpf}`}),this.users$=V(e)}}),this.subscription2=this.materiaisConsumoService.disponiveis().subscribe({next:e=>{e.forEach(t=>{t.serial?t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome} ${t.serial}, Disp: ${t.quantidade}`:t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome}, Disp: ${t.quantidade}`}),this.materiaisconsumo$=V(e)}})}reset(){this.form.reset(),this.editando=!1,this.form.get("quantidade")?.patchValue(1)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}cadastrar(){this.form.value.id?(delete this.form.value.materiais,delete this.form.value.material_consumo,delete this.form.value.quantidade,this.materiaisConsumoSaidasService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})):(this.sessionService.getSubunidade()?this.form.get("subunidade")?.patchValue(this.sessionService.getSubunidade()):this.toastr.error("Selecione uma subunidade!"),this.form.get("materiais")?.patchValue(this.materiaisselected),this.materiaisConsumoSaidasService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit(),this.materiaisselected=[]},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}))}select(){return fe(this,null,function*(){if(this.form.value.armamento){var e;yield this.materiaisconsumo$.subscribe(t=>{e=t.filter(m=>m.id==this.form.value.material_consumo)}),e&&(this.maxamon=e[0].quantidade)}})}editar(e){this.editando=!0,this.form.patchValue(e),this.form.get("user")?.patchValue(e.user.id)}addMaterial(){if(this.form.value.quantidade>0){let e;this.materiaisconsumo$.subscribe(t=>{e=t.filter(m=>m.id==this.form.value.material_consumo)}),this.form.value.quantidade>e[0].quantidade_disponivel&&this.form.get("quantidade")?.patchValue(e[0].quantidade_disponivel),this.materiaisselected.push({material_consumoId:this.form.value.material_consumo,armamento:e[0],quantidade:this.form.value.quantidade}),this.form.get("material_consumo")?.patchValue(null),this.form.get("quantidade")?.patchValue(1)}}removeMaterial(e){this.materiaisselected.splice(e,1)}};r.\u0275fac=function(t){return new(t||r)(h(K),h(oe),h(Te),h(ie),h(I),h(Z))},r.\u0275cmp=w({type:r,selectors:[["app-materiais-consumo-saidas-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[E],decls:12,vars:5,consts:[[3,"formGroup"],[1,"row"],["label","Usu\xE1rio","id","user","formControlName","user",1,"col-sm-6",3,"data$"],[1,"row",2,"height","350px"],["formControlName","observacoes","label","Observa\xE7\xF5es","id","observacoes",1,"col-sm-12"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"],["label","Material de Consumo","id","material_consumo","formControlName","material_consumo","optionname","serial",1,"col-sm-6",3,"ngModelChange","data$"],["formControlName","quantidade","label","Quantidade","id","quantidade","tipo","number",1,"col-sm-2",3,"max","min"],[1,"col-sm-2",2,"padding-top","30px"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa","fa-plus"],[1,"table","table-hover","table-head-fixed","text-nowrap"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point",3,"click"]],template:function(t,m){t&1&&(a(0,"form",0)(1,"div",1),v(2,"input-select",2),o(),C(3,Qe,6,4,"div",1)(4,ze,13,0,"div",1),a(5,"div",3),v(6,"input-textarea",4),o(),a(7,"div",5)(8,"a",6),u("click",function(){return m.form.reset()}),s(9,"Cancelar"),o(),a(10,"button",7),u("click",function(){return m.cadastrar()}),s(11,"Cadastrar"),o()()()),t&2&&(S("formGroup",m.form),l(2),S("data$",m.users$),l(),c(3,m.editando?-1:3),l(),c(4,m.materiaisselected&&!m.editando?4:-1),l(6),S("disabled",m.form.invalid))},dependencies:[y,T,H,$,U,X,A,J,ee,te,Le]});let i=r;return i})();var B=Y.url,P="materiais-consumo-saidas-itens",ne=(()=>{let r=class r{constructor(e){this.http=e}index(){return this.http.get(`${B}/${P}`)}find(e){return this.http.get(`${B}/${P}/${e}`)}create(e){return this.http.post(`${B}/${P}`,e)}update(e,t){return this.http.put(`${B}/${P}/${e}`,t)}remove(e){return this.http.delete(`${B}/${P}/${e}`)}};r.\u0275fac=function(t){return new(t||r)(R(W))},r.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var _e=(()=>{let r=class r{constructor(e,t,m,p){this.formBuilder=e,this.materiaisConsumoSaidasItensService=t,this.materiaisConsumoService=m,this.toastr=p,this.refresh=new k,this.cancel=new k}ngOnInit(){this.form=this.formBuilder.group({id:[null],material_consumo:[null,g.compose([g.required])],material_consumo_saida:[this.material_consumo_saida_id],quantidade:[1,g.compose([g.required,g.min(1)])]}),this.subscription=this.materiaisConsumoService.disponiveis().subscribe({next:e=>{e.forEach(t=>{t.serial?t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome} ${t.serial}, Disp: ${t.quantidade}`:t.serial=`${t.material_consumo_tipo.nome} ${t.modelo.marca.nome} ${t.modelo.nome}, Disp: ${t.quantidade}`}),this.materiaisconsumo$=V(e)}})}reset(){this.form.reset(),this.form.get("quantidade")?.patchValue(1)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}cadastrar(){this.form.value.id?this.materiaisConsumoSaidasItensService.update(this.form.value.id,this.form.value).subscribe({next:e=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.materiaisConsumoSaidasItensService.create(this.form.value).subscribe({next:e=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:e=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}cancelar(){this.form.reset(),this.cancel.emit()}};r.\u0275fac=function(t){return new(t||r)(h(K),h(ne),h(ie),h(I))},r.\u0275cmp=w({type:r,selectors:[["app-materiais-consumo-saidas-itens-form"]],inputs:{material_consumo_saida_id:"material_consumo_saida_id"},outputs:{refresh:"refresh",cancel:"cancel"},standalone:!0,features:[E],decls:9,vars:3,consts:[[3,"formGroup"],[1,"row"],["label","Material de Consumo","id","material_consumo","formControlName","material_consumo","optionname","serial",1,"col-sm-6",3,"data$"],["formControlName","quantidade","label","Quantidade","id","quantidade","tipo","number",1,"col-sm-2"],[1,"d-flex","justify-content-end"],[1,"btn","btn-link","text-danger",3,"click"],["type","button",1,"btn","btn-primary",3,"click","disabled"]],template:function(t,m){t&1&&(a(0,"form",0)(1,"div",1),v(2,"input-select",2)(3,"input-text",3),o(),a(4,"div",4)(5,"a",5),u("click",function(){return m.cancelar()}),s(6,"Cancelar"),o(),a(7,"button",6),u("click",function(){return m.cadastrar()}),s(8,"Cadastrar"),o()()()),t&2&&(S("formGroup",m.form),l(2),S("data$",m.materiaisconsumo$),l(5),S("disabled",m.form.invalid))},dependencies:[y,T,H,$,U,X,A,J,ee,te]});let i=r;return i})();function We(i,r){if(i&1){let n=b();a(0,"button",38),u("click",function(){_(n);let t=d();return f(t.cadastrar())}),v(1,"i",39),o()}}function Ue(i,r){if(i&1&&s(0),i&2){let n=d().$implicit;x(n.user.policial.graduacao.nome)}}function He(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let n=d(2).$implicit;z(" ",j(1,1,n.user.policial.numeral,"00.000")," ")}}function Ae(i,r){if(i&1&&C(0,He,2,4),i&2){let n=d().$implicit;c(0,n.user.policial.numeral?0:-1)}}function Je(i,r){if(i&1&&s(0),i&2){let n=d().$implicit;x(n.user.policial.nome_guerra)}}function Ke(i,r){if(i&1&&s(0),i&2){let n=d().$implicit;z(" ",n.user.nome," ")}}function Xe(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let n=d().$implicit;x(j(1,1,n.user.policial.matricula,"000.000-0-A"))}}function Ye(i,r){if(i&1&&(s(0),O(1,"mask")),i&2){let n=d().$implicit;z(" ",j(1,1,n.user.cpf,"000.000.000-00")," ")}}function Ze(i,r){if(i&1){let n=b();a(0,"a",44),u("click",function(){_(n);let t=d().$implicit,m=d(2);return f(m.editar(t))}),v(1,"i",45),o()}}function et(i,r){if(i&1){let n=b();a(0,"a",46),u("click",function(){_(n);let t=d().$implicit,m=d(2);return f(m.delete(t))}),v(1,"i",47),o()}}function tt(i,r){if(i&1){let n=b();a(0,"tr",40)(1,"td"),s(2),o(),a(3,"td"),s(4),o(),a(5,"td"),C(6,Ue,1,1),o(),a(7,"td"),C(8,Ae,1,1),o(),a(9,"td"),C(10,Je,1,1)(11,Ke,1,1),o(),a(12,"td"),C(13,Xe,2,4)(14,Ye,2,4),o(),a(15,"td"),s(16),O(17,"date"),o(),a(18,"td")(19,"button",41),u("click",function(){let t=_(n).$implicit,m=d(2);return f(m.showMat(t))}),s(20," Materiais "),o()(),a(21,"td"),C(22,Ze,2,0,"a",42)(23,et,2,0,"a",43),o()()}if(i&2){let n=r.$implicit,e=d(2);l(2),x(n.id),l(2),he("",n.subunidade.abreviatura," - ",n.subunidade.unidade.abreviatura,""),l(2),c(6,n.user.policial?6:-1),l(2),c(8,n.user.policial?8:-1),l(2),c(10,n.user.policial?10:11),l(3),c(13,n.user.policial?13:14),l(3),x(j(17,10,n.data_saida,"dd/MM/yyyy HH:mm")),l(6),c(22,e.user.perfil.materiais_consumo_saidas_edt&&e.checkDate(n)?22:-1),l(),c(23,e.user.perfil.materiais_consumo_saidas_del&&e.checkDate(n)?23:-1)}}function it(i,r){i&1&&(a(0,"tr")(1,"td",25),s(2,"Sem informa\xE7\xE3o"),o()())}function at(i,r){if(i&1&&(a(0,"tbody"),D(1,tt,24,13,"tr",40,F,!1,it,3,0,"tr"),o()),i&2){d();let n=Ce(21);l(),L(n.data)}}function ot(i,r){if(i&1){let n=b();a(0,"app-materiais-consumo-saidas-form",48),u("refresh",function(){_(n);let t=d();return f(t.refresh())}),o()}}function nt(i,r){if(i&1){let n=b();a(0,"button",52),u("click",function(){_(n);let t=d(2);return f(t.cadmaterial=!0)}),v(1,"i",39),o()}}function rt(i,r){if(i&1){let n=b();a(0,"app-materiais-consumo-saidas-itens-form",53),u("refresh",function(){_(n);let t=d(2);return f(t.refreshMat())})("cancel",function(){_(n);let t=d(2);return f(t.cancelMat())}),o()}if(i&2){let n=d(2);S("material_consumo_saida_id",n.materialConsumoSaida.id)}}function st(i,r){if(i&1&&s(0),i&2){let n=d().$implicit;x(n.material_consumo.modelo.marca.nome)}}function mt(i,r){if(i&1){let n=b();a(0,"i",55),u("click",function(){_(n);let t=d().$implicit,m=d(2);return f(m.rmvMaterial(t.id||0))}),o()}}function lt(i,r){if(i&1&&(a(0,"tr")(1,"td"),s(2),o(),a(3,"td"),s(4),o(),a(5,"td"),C(6,st,1,1),o(),a(7,"td"),s(8),o(),a(9,"td"),s(10),o(),a(11,"td"),s(12),o(),a(13,"td"),C(14,mt,1,0,"i",54),o()()),i&2){let n=r.$implicit,e=d(2);l(2),x(n.id),l(2),x(n.material_consumo.material_consumo_tipo.nome),l(2),c(6,n.material_consumo.modelo.marca?6:-1),l(2),x(n.material_consumo.modelo.nome),l(2),x(n.material_consumo.serial),l(2),x(n.quantidade),l(2),c(14,e.user.perfil.materiais_consumo_saidas_edt&&e.checkDate(e.materialConsumoSaida)?14:-1)}}function dt(i,r){if(i&1&&(a(0,"div",29)(1,"div",30)(2,"h4",31),s(3," Materiais "),C(4,nt,2,0,"button",49),o(),a(5,"button",32)(6,"span",33),s(7,"\xD7"),o()()(),a(8,"div",34),C(9,rt,1,1,"app-materiais-consumo-saidas-itens-form",50),a(10,"table",51)(11,"thead")(12,"tr")(13,"th"),s(14,"#"),o(),a(15,"th"),s(16,"Tipo"),o(),a(17,"th"),s(18,"Marca"),o(),a(19,"th"),s(20,"Modelo"),o(),a(21,"th"),s(22,"Serial"),o(),a(23,"th"),s(24,"Quantidade"),o(),a(25,"th"),s(26,"Op\xE7\xF5es"),o()()(),a(27,"tbody"),D(28,lt,15,7,"tr",null,F),o()()()()),i&2){let n=d();l(4),c(4,n.user.perfil.materiais_consumo_saidas_edt&&n.checkDate(n.materialConsumoSaida)?4:-1),l(5),c(9,n.cadmaterial?9:-1),l(19),L(n.materialConsumoSaida.materiais_consumo_saidas_itens)}}function ct(i,r){if(i&1){let n=b();s(0," Tem certeza que deseja excluir: "),a(1,"b"),s(2),o(),a(3,"div",56)(4,"a",57),s(5,"Cancelar"),o(),a(6,"button",58),u("click",function(){_(n);let t=d();return f(t.confirm())}),s(7," Excluir "),o()()}if(i&2){let n=d();l(2),x(n.excluir.user.nome)}}var Yt=(()=>{let r=class r{constructor(e,t,m,p){this.materiaisConsumoSaidasService=e,this.materiaisConsumoSaidasItensService=t,this.toastr=m,this.sessionService=p,this.quant=10,this.cadastrando=!1,this.cadmaterial=!1}ngOnInit(){this.user=this.sessionService.getUser(),this.sessionService.checkPermission("materiais_consumo_saidas"),this.subscription=this.materiaisConsumoSaidasService.index().subscribe({next:e=>{this.data$=e,this.temp=e}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.materiaisConsumoSaidasService.index().subscribe({next:e=>{this.data$=e}})}editar(e){this.cadastrando=!1,setTimeout(()=>{this.cadastrando=!0},100),setTimeout(()=>{this.child.editar(e)},200)}cadastrar(){this.cadastrando=!1,setTimeout(()=>{this.cadastrando=!0},100),setTimeout(()=>{this.child.reset()},200)}delete(e){this.excluir=e}confirm(){this.materiaisConsumoSaidasService.remove(this.excluir.id||0).subscribe({next:e=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:e=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var e=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(t=>t.user.policial?t.user.policial.numeral?t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.numeral.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||!e:t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome_guerra.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.nome.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.matricula.toLocaleLowerCase().indexOf(e)!==-1||t.user.policial.graduacao.nome.toLocaleLowerCase().indexOf(e)!==-1||!e:t.user.nome?.toLocaleLowerCase().indexOf(e)!==-1||t.user.cpf.toLocaleLowerCase().indexOf(e)!==-1||t.materiais_consumo.material_consumo_tipo.nome.toLocaleLowerCase().indexOf(e)!==-1||t.materiais_consumo.modelo.marca.nome.toLocaleLowerCase().indexOf(e)!==-1||t.materiais_consumo.modelo.nome.toLocaleLowerCase().indexOf(e)!==-1||!e)}}showMat(e){this.cadmaterial=!1,this.materiaisConsumoSaidasService.find(e.id||0).subscribe({next:t=>{this.materialConsumoSaida=t}})}refreshMat(){this.cadmaterial=!1,this.materiaisConsumoSaidasService.find(this.materialConsumoSaida.id||0).subscribe({next:e=>{this.materialConsumoSaida=e}})}rmvMaterial(e){window.confirm("Tem certeza que deseja excluir o material?")&&this.materiaisConsumoSaidasItensService.remove(e).subscribe({next:t=>{this.materiaisConsumoSaidasService.find(this.materialConsumoSaida.id||0).subscribe({next:m=>{this.materialConsumoSaida=m}})}})}cancelMat(){this.cadmaterial=!1}checkDate(e){var t=new Date;return ue(e.data_saida,"yyyy-MM-dd")==ue(t,"yyyy-MM-dd")}};r.\u0275fac=function(t){return new(t||r)(h(oe),h(ne),h(I),h(Z))},r.\u0275cmp=w({type:r,selectors:[["app-materiais-consumo-saidas"]],viewQuery:function(t,m){if(t&1&&(re(pe,5),re(_e,5)),t&2){let p;se(p=me())&&(m.child=p.first),se(p=me())&&(m.childmaterial=p.first)}},standalone:!0,features:[xe([ye()]),E],decls:80,vars:11,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Sa\xEDda de Material de Consumo"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage","mfSortBy","mfSortOrder"],["by","id"],["by","subunidade.abreviatura"],["by","policial.graduacao.nome"],["by","policial.numeral"],["by","policial.nome_guerra"],["by","policial.matricula"],["by","data_saida"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["id","modalmat","aria-hidden","true",1,"modal","fade",2,"display","none"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-plus"],[1,"optionshover"],["data-bs-toggle","modal","data-bs-target","#modalmat",1,"btn","btn-xs","btn-outline-primary",3,"click"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],[3,"refresh"],["title","Cadastrar",1,"btn","btn-outline-primary"],[3,"material_consumo_saida_id"],[1,"table","table-hover","table-head-fixed","text-nowrap"],["title","Cadastrar",1,"btn","btn-outline-primary",3,"click"],[3,"refresh","cancel","material_consumo_saida_id"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point"],["aria-hidden","true",1,"fa","fa-trash","text-danger","point",3,"click"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(t,m){if(t&1){let p=b();a(0,"div",1),v(1,"app-title",2),a(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6),C(6,We,2,0,"button",7),o(),a(7,"div",8)(8,"div",9)(9,"select",10),ce("ngModelChange",function(M){return _(p),de(m.quant,M)||(m.quant=M),f(M)}),a(10,"option",11),s(11,"10"),o(),a(12,"option",12),s(13,"25"),o(),a(14,"option",13),s(15,"50"),o(),a(16,"option",14),s(17,"100"),o()(),a(18,"input",15),ce("ngModelChange",function(M){return _(p),de(m.pesquisa,M)||(m.pesquisa=M),f(M)}),u("ngModelChange",function(){return _(p),f(m.pesquisar())}),o()()()(),a(19,"div",16)(20,"table",17,0)(22,"thead")(23,"tr")(24,"th")(25,"mfDefaultSorter",18),s(26,"#"),o()(),a(27,"th")(28,"mfDefaultSorter",19),s(29,"Subunidade"),o()(),a(30,"th")(31,"mfDefaultSorter",20),s(32,"Gradua\xE7\xE3o"),o()(),a(33,"th")(34,"mfDefaultSorter",21),s(35,"Numeral"),o()(),a(36,"th")(37,"mfDefaultSorter",22),s(38,"Nome Guerra"),o()(),a(39,"th")(40,"mfDefaultSorter",23),s(41,"Matr\xEDcula/CPF"),o()(),a(42,"th")(43,"mfDefaultSorter",24),s(44,"Data Sa\xEDda"),o()(),a(45,"th"),s(46,"Materiais"),o(),a(47,"th"),s(48,"Op\xE7\xF5es"),o()()(),C(49,at,4,1,"tbody"),a(50,"tfoot")(51,"tr")(52,"td",25)(53,"div",26),v(54,"mfBootstrapPaginator"),o()()()()()()()(),a(55,"div",27)(56,"div",28)(57,"div",29)(58,"div",30)(59,"h4",31),s(60,"Cadastrar"),o(),a(61,"button",32)(62,"span",33),s(63,"\xD7"),o()()(),a(64,"div",34),C(65,ot,1,0,"app-materiais-consumo-saidas-form"),o()()()(),a(66,"div",35)(67,"div",28),C(68,dt,30,2,"div",29),o()(),a(69,"div",36)(70,"div",37)(71,"div",29)(72,"div",30)(73,"h4",31),s(74,"Excluir"),o(),a(75,"button",32)(76,"span",33),s(77,"\xD7"),o()()(),a(78,"div",34),C(79,ct,8,1),o()()()()()}t&2&&(l(6),c(6,m.user.perfil.materiais_consumo_saidas_cad?6:-1),l(3),le("ngModel",m.quant),l(9),le("ngModel",m.pesquisa),l(2),S("mfData",m.data$)("mfRowsOnPage",m.quant)("mfSortBy","id")("mfSortOrder","desc"),l(29),c(49,m.data$?49:-1),l(16),c(65,m.cadastrando?65:-1),l(3),c(68,m.materialConsumoSaida?68:-1),l(11),c(79,m.excluir?79:-1))},dependencies:[y,Se,Ie,pe,_e,De,Ve,Fe,ke,T,we,Ee,be,Me,$,ge,$e,ve]});let i=r;return i})();export{Yt as MateriaisConsumoSaidasComponent};