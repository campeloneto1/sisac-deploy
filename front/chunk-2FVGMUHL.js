import{a as q}from"./chunk-2HKYVKZJ.js";import{h as P}from"./chunk-NFMIVN66.js";import{a as oe,b as re,c as ne,d as ce}from"./chunk-AICVXWQ6.js";import{a as ae}from"./chunk-HYOWEGV7.js";import{a as le}from"./chunk-3HEW5RTP.js";import{b as te}from"./chunk-UKCOEVIY.js";import"./chunk-HDKAZCIU.js";import{$b as w,Ca as C,Ea as u,Fa as v,I as E,Ka as B,La as L,Ma as R,Mb as W,Na as G,Nb as $,O as p,Oa as t,P as _,Pa as y,Pb as S,Qb as V,Rb as Q,Sb as U,Tb as H,Ua as T,Va as F,Vb as J,W as I,Wa as z,Wb as K,Xb as X,Ya as N,Yb as Y,Zb as Z,_b as ee,ac as ie,ca as m,da as f,la as k,na as x,sa as b,sb as g,ta as O,ua as j,va as A,wa as e,xa as i,ya as a}from"./chunk-OWJSVT4P.js";var D=(()=>{let c=class c{constructor(l,n,o){this.formBuilder=l,this.perfisService=n,this.toastr=o,this.refresh=new I}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,S.compose([S.required,S.minLength(5),S.maxLength(100)])],administrador:[null],gestor:[null],usuario:[null],relatorios:[null],armamentos:[null],armamentos_cad:[null],armamentos_edt:[null],armamentos_del:[null],armamentos_emprestimos:[null],armamentos_emprestimos_cad:[null],armamentos_emprestimos_edt:[null],armamentos_emprestimos_del:[null],contratos:[null],contratos_cad:[null],contratos_edt:[null],contratos_del:[null],empresas:[null],empresas_cad:[null],empresas_edt:[null],empresas_del:[null],materiais:[null],materiais_cad:[null],materiais_edt:[null],materiais_del:[null],materiais_policiais:[null],materiais_policiais_cad:[null],materiais_policiais_edt:[null],materiais_policiais_del:[null],materiais_consumo:[null],materiais_consumo_cad:[null],materiais_consumo_edt:[null],materiais_consumo_del:[null],materiais_consumo_entradas:[null],materiais_consumo_entradas_cad:[null],materiais_consumo_entradas_edt:[null],materiais_consumo_entradas_del:[null],materiais_consumo_saidas:[null],materiais_consumo_saidas_cad:[null],materiais_consumo_saidas_edt:[null],materiais_consumo_saidas_del:[null],patrimonios:[null],patrimonios_cad:[null],patrimonios_edt:[null],patrimonios_del:[null],policiais:[null],policiais_cad:[null],policiais_edt:[null],policiais_del:[null],policiais_atestados:[null],policiais_atestados_cad:[null],policiais_atestados_edt:[null],policiais_atestados_del:[null],policiais_cursos:[null],policiais_cursos_cad:[null],policiais_cursos_edt:[null],policiais_cursos_del:[null],policiais_ferias:[null],policiais_ferias_cad:[null],policiais_ferias_edt:[null],policiais_ferias_del:[null],policiais_publicacoes:[null],policiais_publicacoes_cad:[null],policiais_publicacoes_edt:[null],policiais_publicacoes_del:[null],policiais_requeridas:[null],policiais_requeridas_cad:[null],policiais_requeridas_edt:[null],policiais_requeridas_del:[null],servicos:[null],servicos_cad:[null],servicos_edt:[null],servicos_del:[null],usuarios:[null],usuarios_cad:[null],usuarios_edt:[null],usuarios_del:[null],veiculos:[null],veiculos_cad:[null],veiculos_edt:[null],veiculos_del:[null],veiculos_oficinas:[null],veiculos_oficinas_cad:[null],veiculos_oficinas_edt:[null],veiculos_oficinas_del:[null],veiculos_policiais:[null],veiculos_policiais_cad:[null],veiculos_policiais_edt:[null],veiculos_policiais_del:[null]})}cadastrar(){this.form.value.id?this.perfisService.update(this.form.value.id,this.form.value).subscribe({next:l=>{this.toastr.success("Edi\xE7\xE3o realizada com sucesso!"),this.form.reset(),this.refresh.emit()},error:l=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}}):this.perfisService.create(this.form.value).subscribe({next:l=>{this.toastr.success("Cadastro realizado com sucesso!"),this.form.reset(),this.refresh.emit()},error:l=>{this.toastr.error("Erro ao cadastrar, tente novamente mais tarde!")}})}editar(l){this.form.patchValue(l)}};c.\u0275fac=function(n){return new(n||c)(f(ee),f(q),f(P))},c.\u0275cmp=E({type:c,selectors:[["app-perfis-form"]],outputs:{refresh:"refresh"},standalone:!0,features:[N],decls:512,vars:2,consts:[[3,"formGroup"],[1,"row"],["formControlName","nome","label","Nome","id","nome","tipo","text",1,"col-sm-4"],[1,"col-sm-2"],[1,"form-check"],["type","checkbox","checked","","id","administrador","formControlName","administrador",1,"form-check-input"],["for","administrador",1,"form-check-label"],["type","checkbox","checked","","id","gestor","formControlName","gestor",1,"form-check-input"],["for","gestor",1,"form-check-label"],["type","checkbox","checked","","id","usuario","formControlName","usuario",1,"form-check-input"],["for","usuario",1,"form-check-label"],["type","checkbox","checked","","id","relatorios","formControlName","relatorios",1,"form-check-input"],["for","relatorios",1,"form-check-label"],["type","checkbox","checked","","id","armamentos","formControlName","armamentos",1,"form-check-input"],["for","armamentos",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_cad","formControlName","armamentos_cad",1,"form-check-input"],["for","armamentos_cad",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_edt","formControlName","armamentos_edt",1,"form-check-input"],["for","armamentos_edt",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_del","formControlName","armamentos_del",1,"form-check-input"],["for","armamentos_del",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_emprestimos","formControlName","armamentos_emprestimos",1,"form-check-input"],["for","armamentos_emprestimos",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_emprestimos_cad","formControlName","armamentos_emprestimos_cad",1,"form-check-input"],["for","armamentos_emprestimos_cad",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_emprestimos_edt","formControlName","armamentos_emprestimos_edt",1,"form-check-input"],["for","armamentos_emprestimos_edt",1,"form-check-label"],["type","checkbox","checked","","id","armamentos_emprestimos_del","formControlName","armamentos_emprestimos_del",1,"form-check-input"],["for","armamentos_emprestimos_del",1,"form-check-label"],["type","checkbox","checked","","id","contratos","formControlName","contratos",1,"form-check-input"],["for","contratos",1,"form-check-label"],["type","checkbox","checked","","id","contratos_cad","formControlName","contratos_cad",1,"form-check-input"],["for","contratos_cad",1,"form-check-label"],["type","checkbox","checked","","id","contratos_edt","formControlName","contratos_edt",1,"form-check-input"],["for","contratos_edt",1,"form-check-label"],["type","checkbox","checked","","id","contratos_del","formControlName","contratos_del",1,"form-check-input"],["for","contratos_del",1,"form-check-label"],["type","checkbox","checked","","id","empresas","formControlName","empresas",1,"form-check-input"],["for","empresas",1,"form-check-label"],["type","checkbox","checked","","id","empresas_cad","formControlName","empresas_cad",1,"form-check-input"],["for","empresas_cad",1,"form-check-label"],["type","checkbox","checked","","id","empresas_edt","formControlName","empresas_edt",1,"form-check-input"],["for","empresas_edt",1,"form-check-label"],["type","checkbox","checked","","id","empresas_del","formControlName","empresas_del",1,"form-check-input"],["for","empresas_del",1,"form-check-label"],["type","checkbox","checked","","id","materiais","formControlName","materiais",1,"form-check-input"],["for","materiais",1,"form-check-label"],["type","checkbox","checked","","id","materiais_cad","formControlName","materiais_cad",1,"form-check-input"],["for","materiais_cad",1,"form-check-label"],["type","checkbox","checked","","id","materiais_edt","formControlName","materiais_edt",1,"form-check-input"],["for","materiais_edt",1,"form-check-label"],["type","checkbox","checked","","id","materiais_del","formControlName","materiais_del",1,"form-check-input"],["for","materiais_del",1,"form-check-label"],["type","checkbox","checked","","id","materiais_policiais","formControlName","materiais_policiais",1,"form-check-input"],["for","materiais_policiais",1,"form-check-label"],["type","checkbox","checked","","id","materiais_policiais_cad","formControlName","materiais_policiais_cad",1,"form-check-input"],["for","materiais_policiais_cad",1,"form-check-label"],["type","checkbox","checked","","id","materiais_policiais_edt","formControlName","materiais_policiais_edt",1,"form-check-input"],["for","materiais_policiais_edt",1,"form-check-label"],["type","checkbox","checked","","id","materiais_policiais_del","formControlName","materiais_policiais_del",1,"form-check-input"],["for","materiais_policiais_del",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo","formControlName","materiais_consumo",1,"form-check-input"],["for","materiais_consumo",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_cad","formControlName","materiais_consumo_cad",1,"form-check-input"],["for","materiais_consumo_cad",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_edt","formControlName","materiais_consumo_edt",1,"form-check-input"],["for","materiais_consumo_edt",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_del","formControlName","materiais_consumo_del",1,"form-check-input"],["for","materiais_consumo_del",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_entradas","formControlName","materiais_consumo_entradas",1,"form-check-input"],["for","materiais_consumo_entradas",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_entradas_cad","formControlName","materiais_consumo_entradas_cad",1,"form-check-input"],["for","materiais_consumo_entradas_cad",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_entradas_edt","formControlName","materiais_consumo_entradas_edt",1,"form-check-input"],["for","materiais_consumo_entradas_edt",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_entradas_del","formControlName","materiais_consumo_entradas_del",1,"form-check-input"],["for","materiais_consumo_entradas_del",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_saidas","formControlName","materiais_consumo_saidas",1,"form-check-input"],["for","materiais_consumo_saidas",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_saidas_cad","formControlName","materiais_consumo_saidas_cad",1,"form-check-input"],["for","materiais_consumo_saidas_cad",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_saidas_edt","formControlName","materiais_consumo_saidas_edt",1,"form-check-input"],["for","materiais_consumo_saidas_edt",1,"form-check-label"],["type","checkbox","checked","","id","materiais_consumo_saidas_del","formControlName","materiais_consumo_saidas_del",1,"form-check-input"],["for","materiais_consumo_saidas_del",1,"form-check-label"],["type","checkbox","checked","","id","patrimonios","formControlName","patrimonios",1,"form-check-input"],["for","patrimonios",1,"form-check-label"],["type","checkbox","checked","","id","patrimonios_cad","formControlName","patrimonios_cad",1,"form-check-input"],["for","patrimonios_cad",1,"form-check-label"],["type","checkbox","checked","","id","patrimonios_edt","formControlName","patrimonios_edt",1,"form-check-input"],["for","patrimonios_edt",1,"form-check-label"],["type","checkbox","checked","","id","patrimonios_del","formControlName","patrimonios_del",1,"form-check-input"],["for","patrimonios_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais","formControlName","policiais",1,"form-check-input"],["for","policiais",1,"form-check-label"],["type","checkbox","checked","","id","policiais_cad","formControlName","policiais_cad",1,"form-check-input"],["for","policiais_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_edt","formControlName","policiais_edt",1,"form-check-input"],["for","policiais_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_del","formControlName","policiais_del",1,"form-check-input"],["for","policiais_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais_atestados","formControlName","policiais_atestados",1,"form-check-input"],["for","policiais_atestados",1,"form-check-label"],["type","checkbox","checked","","id","policiais_atestados_cad","formControlName","policiais_atestados_cad",1,"form-check-input"],["for","policiais_atestados_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_atestados_edt","formControlName","policiais_atestados_edt",1,"form-check-input"],["for","policiais_atestados_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_atestados_del","formControlName","policiais_atestados_del",1,"form-check-input"],["for","policiais_atestados_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais_cursos","formControlName","policiais_cursos",1,"form-check-input"],["for","policiais_cursos",1,"form-check-label"],["type","checkbox","checked","","id","policiais_cursos_cad","formControlName","policiais_cursos_cad",1,"form-check-input"],["for","policiais_cursos_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_cursos_edt","formControlName","policiais_cursos_edt",1,"form-check-input"],["for","policiais_cursos_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_cursos_del","formControlName","policiais_cursos_del",1,"form-check-input"],["for","policiais_cursos_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais_ferias","formControlName","policiais_ferias",1,"form-check-input"],["for","policiais_ferias",1,"form-check-label"],["type","checkbox","checked","","id","policiais_ferias_cad","formControlName","policiais_ferias_cad",1,"form-check-input"],["for","policiais_ferias_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_ferias_edt","formControlName","policiais_ferias_edt",1,"form-check-input"],["for","policiais_ferias_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_ferias_del","formControlName","policiais_ferias_del",1,"form-check-input"],["for","policiais_ferias_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais_publicacoes","formControlName","policiais_publicacoes",1,"form-check-input"],["for","policiais_publicacoes",1,"form-check-label"],["type","checkbox","checked","","id","policiais_publicacoes_cad","formControlName","policiais_publicacoes_cad",1,"form-check-input"],["for","policiais_publicacoes_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_publicacoes_edt","formControlName","policiais_publicacoes_edt",1,"form-check-input"],["for","policiais_publicacoes_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_publicacoes_del","formControlName","policiais_publicacoes_del",1,"form-check-input"],["for","policiais_publicacoes_del",1,"form-check-label"],["type","checkbox","checked","","id","policiais_requeridas","formControlName","policiais_requeridas",1,"form-check-input"],["for","policiais_requeridas",1,"form-check-label"],["type","checkbox","checked","","id","policiais_requeridas_cad","formControlName","policiais_requeridas_cad",1,"form-check-input"],["for","policiais_requeridas_cad",1,"form-check-label"],["type","checkbox","checked","","id","policiais_requeridas_edt","formControlName","policiais_requeridas_edt",1,"form-check-input"],["for","policiais_requeridas_edt",1,"form-check-label"],["type","checkbox","checked","","id","policiais_requeridas_del","formControlName","policiais_requeridas_del",1,"form-check-input"],["for","policiais_requeridas_del",1,"form-check-label"],["type","checkbox","checked","","id","servicos","formControlName","servicos",1,"form-check-input"],["for","servicos",1,"form-check-label"],["type","checkbox","checked","","id","servicos_cad","formControlName","servicos_cad",1,"form-check-input"],["for","servicos_cad",1,"form-check-label"],["type","checkbox","checked","","id","servicos_edt","formControlName","servicos_edt",1,"form-check-input"],["for","servicos_edt",1,"form-check-label"],["type","checkbox","checked","","id","servicos_del","formControlName","servicos_del",1,"form-check-input"],["for","servicos_del",1,"form-check-label"],["type","checkbox","checked","","id","usuarios","formControlName","usuarios",1,"form-check-input"],["for","usuarios",1,"form-check-label"],["type","checkbox","checked","","id","usuarios_cad","formControlName","usuarios_cad",1,"form-check-input"],["for","usuarios_cad",1,"form-check-label"],["type","checkbox","checked","","id","usuarios_edt","formControlName","usuarios_edt",1,"form-check-input"],["for","usuarios_edt",1,"form-check-label"],["type","checkbox","checked","","id","usuarios_del","formControlName","usuarios_del",1,"form-check-input"],["for","usuarios_del",1,"form-check-label"],["type","checkbox","checked","","id","veiculos","formControlName","veiculos",1,"form-check-input"],["for","veiculos",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_cad","formControlName","veiculos_cad",1,"form-check-input"],["for","veiculos_cad",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_edt","formControlName","veiculos_edt",1,"form-check-input"],["for","veiculos_edt",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_del","formControlName","veiculos_del",1,"form-check-input"],["for","veiculos_del",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_oficinas","formControlName","veiculos_oficinas",1,"form-check-input"],["for","veiculos_oficinas",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_oficinas_cad","formControlName","veiculos_oficinas_cad",1,"form-check-input"],["for","veiculos_oficinas_cad",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_oficinas_edt","formControlName","veiculos_oficinas_edt",1,"form-check-input"],["for","veiculos_oficinas_edt",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_oficinas_del","formControlName","veiculos_oficinas_del",1,"form-check-input"],["for","veiculos_oficinas_del",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_policiais","formControlName","veiculos_policiais",1,"form-check-input"],["for","veiculos_policiais",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_policiais_cad","formControlName","veiculos_policiais_cad",1,"form-check-input"],["for","veiculos_policiais_cad",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_policiais_edt","formControlName","veiculos_policiais_edt",1,"form-check-input"],["for","veiculos_policiais_edt",1,"form-check-label"],["type","checkbox","checked","","id","veiculos_policiais_del","formControlName","veiculos_policiais_del",1,"form-check-input"],["for","veiculos_policiais_del",1,"form-check-label"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click","disabled"]],template:function(n,o){n&1&&(e(0,"form",0)(1,"div",1),a(2,"input-text",2),i(),e(3,"div",1)(4,"div",3)(5,"div",4),a(6,"input",5),e(7,"label",6),t(8,"Administrador"),i()()(),e(9,"div",3)(10,"div",4),a(11,"input",7),e(12,"label",8),t(13,"Gestor"),i()()(),e(14,"div",3)(15,"div",4),a(16,"input",9),e(17,"label",10),t(18,"Usu\xE1rio"),i()()(),e(19,"div",3)(20,"div",4),a(21,"input",11),e(22,"label",12),t(23,"Relat\xF3rios"),i()()()(),e(24,"div",1)(25,"h4"),t(26,"Armamentos"),i(),e(27,"div",3)(28,"div",4),a(29,"input",13),e(30,"label",14),t(31,"Visualizar"),i()()(),e(32,"div",3)(33,"div",4),a(34,"input",15),e(35,"label",16),t(36,"Cadastrar"),i()()(),e(37,"div",3)(38,"div",4),a(39,"input",17),e(40,"label",18),t(41,"Editar"),i()()(),e(42,"div",3)(43,"div",4),a(44,"input",19),e(45,"label",20),t(46,"Excluir"),i()()()(),e(47,"div",1)(48,"h4"),t(49,"Armamentos Emprestimos"),i(),e(50,"div",3)(51,"div",4),a(52,"input",21),e(53,"label",22),t(54,"Visualizar"),i()()(),e(55,"div",3)(56,"div",4),a(57,"input",23),e(58,"label",24),t(59,"Cadastrar"),i()()(),e(60,"div",3)(61,"div",4),a(62,"input",25),e(63,"label",26),t(64,"Editar"),i()()(),e(65,"div",3)(66,"div",4),a(67,"input",27),e(68,"label",28),t(69,"Excluir"),i()()()(),e(70,"div",1)(71,"h4"),t(72,"Contratos"),i(),e(73,"div",3)(74,"div",4),a(75,"input",29),e(76,"label",30),t(77,"Visualizar"),i()()(),e(78,"div",3)(79,"div",4),a(80,"input",31),e(81,"label",32),t(82,"Cadastrar"),i()()(),e(83,"div",3)(84,"div",4),a(85,"input",33),e(86,"label",34),t(87,"Editar"),i()()(),e(88,"div",3)(89,"div",4),a(90,"input",35),e(91,"label",36),t(92,"Excluir"),i()()()(),e(93,"div",1)(94,"h4"),t(95,"Empresas"),i(),e(96,"div",3)(97,"div",4),a(98,"input",37),e(99,"label",38),t(100,"Visualizar"),i()()(),e(101,"div",3)(102,"div",4),a(103,"input",39),e(104,"label",40),t(105,"Cadastrar"),i()()(),e(106,"div",3)(107,"div",4),a(108,"input",41),e(109,"label",42),t(110,"Editar"),i()()(),e(111,"div",3)(112,"div",4),a(113,"input",43),e(114,"label",44),t(115,"Excluir"),i()()()(),e(116,"div",1)(117,"h4"),t(118,"Materiais"),i(),e(119,"div",3)(120,"div",4),a(121,"input",45),e(122,"label",46),t(123,"Visualizar"),i()()(),e(124,"div",3)(125,"div",4),a(126,"input",47),e(127,"label",48),t(128,"Cadastrar"),i()()(),e(129,"div",3)(130,"div",4),a(131,"input",49),e(132,"label",50),t(133,"Editar"),i()()(),e(134,"div",3)(135,"div",4),a(136,"input",51),e(137,"label",52),t(138,"Excluir"),i()()()(),e(139,"div",1)(140,"h4"),t(141,"Materiais Empr\xE9stimos"),i(),e(142,"div",3)(143,"div",4),a(144,"input",53),e(145,"label",54),t(146,"Visualizar"),i()()(),e(147,"div",3)(148,"div",4),a(149,"input",55),e(150,"label",56),t(151,"Cadastrar"),i()()(),e(152,"div",3)(153,"div",4),a(154,"input",57),e(155,"label",58),t(156,"Editar"),i()()(),e(157,"div",3)(158,"div",4),a(159,"input",59),e(160,"label",60),t(161,"Excluir"),i()()()(),e(162,"div",1)(163,"h4"),t(164,"Materiais Consumo"),i(),e(165,"div",3)(166,"div",4),a(167,"input",61),e(168,"label",62),t(169,"Visualizar"),i()()(),e(170,"div",3)(171,"div",4),a(172,"input",63),e(173,"label",64),t(174,"Cadastrar"),i()()(),e(175,"div",3)(176,"div",4),a(177,"input",65),e(178,"label",66),t(179,"Editar"),i()()(),e(180,"div",3)(181,"div",4),a(182,"input",67),e(183,"label",68),t(184,"Excluir"),i()()()(),e(185,"div",1)(186,"h4"),t(187,"Entrada de Materiais Consumo"),i(),e(188,"div",3)(189,"div",4),a(190,"input",69),e(191,"label",70),t(192,"Visualizar"),i()()(),e(193,"div",3)(194,"div",4),a(195,"input",71),e(196,"label",72),t(197,"Cadastrar"),i()()(),e(198,"div",3)(199,"div",4),a(200,"input",73),e(201,"label",74),t(202,"Editar"),i()()(),e(203,"div",3)(204,"div",4),a(205,"input",75),e(206,"label",76),t(207,"Excluir"),i()()()(),e(208,"div",1)(209,"h4"),t(210,"Sa\xEDda de Materiais Consumo"),i(),e(211,"div",3)(212,"div",4),a(213,"input",77),e(214,"label",78),t(215,"Visualizar"),i()()(),e(216,"div",3)(217,"div",4),a(218,"input",79),e(219,"label",80),t(220,"Cadastrar"),i()()(),e(221,"div",3)(222,"div",4),a(223,"input",81),e(224,"label",82),t(225,"Editar"),i()()(),e(226,"div",3)(227,"div",4),a(228,"input",83),e(229,"label",84),t(230,"Excluir"),i()()()(),e(231,"div",1)(232,"h4"),t(233,"Patrim\xF4nios"),i(),e(234,"div",3)(235,"div",4),a(236,"input",85),e(237,"label",86),t(238,"Visualizar"),i()()(),e(239,"div",3)(240,"div",4),a(241,"input",87),e(242,"label",88),t(243,"Cadastrar"),i()()(),e(244,"div",3)(245,"div",4),a(246,"input",89),e(247,"label",90),t(248,"Editar"),i()()(),e(249,"div",3)(250,"div",4),a(251,"input",91),e(252,"label",92),t(253,"Excluir"),i()()()(),e(254,"div",1)(255,"h4"),t(256,"Policiais"),i(),e(257,"div",3)(258,"div",4),a(259,"input",93),e(260,"label",94),t(261,"Visualizar"),i()()(),e(262,"div",3)(263,"div",4),a(264,"input",95),e(265,"label",96),t(266,"Cadastrar"),i()()(),e(267,"div",3)(268,"div",4),a(269,"input",97),e(270,"label",98),t(271,"Editar"),i()()(),e(272,"div",3)(273,"div",4),a(274,"input",99),e(275,"label",100),t(276,"Excluir"),i()()()(),e(277,"div",1)(278,"h4"),t(279,"Policiais Atestados"),i(),e(280,"div",3)(281,"div",4),a(282,"input",101),e(283,"label",102),t(284,"Visualizar"),i()()(),e(285,"div",3)(286,"div",4),a(287,"input",103),e(288,"label",104),t(289,"Cadastrar"),i()()(),e(290,"div",3)(291,"div",4),a(292,"input",105),e(293,"label",106),t(294,"Editar"),i()()(),e(295,"div",3)(296,"div",4),a(297,"input",107),e(298,"label",108),t(299,"Excluir"),i()()()(),e(300,"div",1)(301,"h4"),t(302,"Policiais Cursos"),i(),e(303,"div",3)(304,"div",4),a(305,"input",109),e(306,"label",110),t(307,"Visualizar"),i()()(),e(308,"div",3)(309,"div",4),a(310,"input",111),e(311,"label",112),t(312,"Cadastrar"),i()()(),e(313,"div",3)(314,"div",4),a(315,"input",113),e(316,"label",114),t(317,"Editar"),i()()(),e(318,"div",3)(319,"div",4),a(320,"input",115),e(321,"label",116),t(322,"Excluir"),i()()()(),e(323,"div",1)(324,"h4"),t(325,"Policiais F\xE9rias"),i(),e(326,"div",3)(327,"div",4),a(328,"input",117),e(329,"label",118),t(330,"Visualizar"),i()()(),e(331,"div",3)(332,"div",4),a(333,"input",119),e(334,"label",120),t(335,"Cadastrar"),i()()(),e(336,"div",3)(337,"div",4),a(338,"input",121),e(339,"label",122),t(340,"Editar"),i()()(),e(341,"div",3)(342,"div",4),a(343,"input",123),e(344,"label",124),t(345,"Excluir"),i()()()(),e(346,"div",1)(347,"h4"),t(348,"Policiais Publica\xE7\xF5es"),i(),e(349,"div",3)(350,"div",4),a(351,"input",125),e(352,"label",126),t(353,"Visualizar"),i()()(),e(354,"div",3)(355,"div",4),a(356,"input",127),e(357,"label",128),t(358,"Cadastrar"),i()()(),e(359,"div",3)(360,"div",4),a(361,"input",129),e(362,"label",130),t(363,"Editar"),i()()(),e(364,"div",3)(365,"div",4),a(366,"input",131),e(367,"label",132),t(368,"Excluir"),i()()()(),e(369,"div",1)(370,"h4"),t(371,"Policiais Requeridas"),i(),e(372,"div",3)(373,"div",4),a(374,"input",133),e(375,"label",134),t(376,"Visualizar"),i()()(),e(377,"div",3)(378,"div",4),a(379,"input",135),e(380,"label",136),t(381,"Cadastrar"),i()()(),e(382,"div",3)(383,"div",4),a(384,"input",137),e(385,"label",138),t(386,"Editar"),i()()(),e(387,"div",3)(388,"div",4),a(389,"input",139),e(390,"label",140),t(391,"Excluir"),i()()()(),e(392,"div",1)(393,"h4"),t(394,"Servi\xE7os"),i(),e(395,"div",3)(396,"div",4),a(397,"input",141),e(398,"label",142),t(399,"Visualizar"),i()()(),e(400,"div",3)(401,"div",4),a(402,"input",143),e(403,"label",144),t(404,"Cadastrar"),i()()(),e(405,"div",3)(406,"div",4),a(407,"input",145),e(408,"label",146),t(409,"Editar"),i()()(),e(410,"div",3)(411,"div",4),a(412,"input",147),e(413,"label",148),t(414,"Excluir"),i()()()(),e(415,"div",1)(416,"h4"),t(417,"Usu\xE1rios"),i(),e(418,"div",3)(419,"div",4),a(420,"input",149),e(421,"label",150),t(422,"Visualizar"),i()()(),e(423,"div",3)(424,"div",4),a(425,"input",151),e(426,"label",152),t(427,"Cadastrar"),i()()(),e(428,"div",3)(429,"div",4),a(430,"input",153),e(431,"label",154),t(432,"Editar"),i()()(),e(433,"div",3)(434,"div",4),a(435,"input",155),e(436,"label",156),t(437,"Excluir"),i()()()(),e(438,"div",1)(439,"h4"),t(440,"Ve\xEDculos"),i(),e(441,"div",3)(442,"div",4),a(443,"input",157),e(444,"label",158),t(445,"Visualizar"),i()()(),e(446,"div",3)(447,"div",4),a(448,"input",159),e(449,"label",160),t(450,"Cadastrar"),i()()(),e(451,"div",3)(452,"div",4),a(453,"input",161),e(454,"label",162),t(455,"Editar"),i()()(),e(456,"div",3)(457,"div",4),a(458,"input",163),e(459,"label",164),t(460,"Excluir"),i()()()(),e(461,"div",1)(462,"h4"),t(463,"Ve\xEDculos Oficinas"),i(),e(464,"div",3)(465,"div",4),a(466,"input",165),e(467,"label",166),t(468,"Visualizar"),i()()(),e(469,"div",3)(470,"div",4),a(471,"input",167),e(472,"label",168),t(473,"Cadastrar"),i()()(),e(474,"div",3)(475,"div",4),a(476,"input",169),e(477,"label",170),t(478,"Editar"),i()()(),e(479,"div",3)(480,"div",4),a(481,"input",171),e(482,"label",172),t(483,"Excluir"),i()()()(),e(484,"div",1)(485,"h4"),t(486,"Ve\xEDculos Empr\xE9stimos"),i(),e(487,"div",3)(488,"div",4),a(489,"input",173),e(490,"label",174),t(491,"Visualizar"),i()()(),e(492,"div",3)(493,"div",4),a(494,"input",175),e(495,"label",176),t(496,"Cadastrar"),i()()(),e(497,"div",3)(498,"div",4),a(499,"input",177),e(500,"label",178),t(501,"Editar"),i()()(),e(502,"div",3)(503,"div",4),a(504,"input",179),e(505,"label",180),t(506,"Excluir"),i()()()(),e(507,"div",181)(508,"a",182),u("click",function(){return o.form.reset()}),t(509,"Cancelar"),i(),e(510,"button",183),u("click",function(){return o.cadastrar()}),t(511,"Cadastrar"),i()()()),n&2&&(x("formGroup",o.form),m(510),x("disabled",o.form.invalid))},dependencies:[g,w,H,W,V,Q,ie,J,K,ae]});let r=c;return r})();function pe(r,c){r&1&&a(0,"i",35)}function _e(r,c){r&1&&a(0,"i",35)}function fe(r,c){r&1&&a(0,"i",35)}function he(r,c){if(r&1){let d=C();e(0,"tr",34)(1,"td"),t(2),i(),e(3,"td"),t(4),i(),e(5,"td"),k(6,pe,1,0,"i",35),i(),e(7,"td"),k(8,_e,1,0,"i",35),i(),e(9,"td"),k(10,fe,1,0,"i",35),i(),e(11,"td")(12,"a",36),u("click",function(){let n=p(d).$implicit,o=v(2);return _(o.editar(n))}),a(13,"i",37),i(),e(14,"a",38),u("click",function(){let n=p(d).$implicit,o=v(2);return _(o.delete(n))}),a(15,"i",39),i()()()}if(r&2){let d=c.$implicit;m(2),y(d.id),m(2),y(d.nome),m(2),b(6,d.administrador?6:-1),m(2),b(8,d.gestor?8:-1),m(2),b(10,d.relatorios?10:-1)}}function ke(r,c){r&1&&(e(0,"tr")(1,"td",21),t(2,"Sem informa\xE7\xE3o"),i()())}function be(r,c){if(r&1&&(e(0,"tbody"),j(1,he,16,5,"tr",34,O,!1,ke,3,0,"tr"),i()),r&2){v();let d=G(22);m(),A(d.data)}}function ve(r,c){if(r&1){let d=C();t(0," Tem certeza que deseja excluir: "),e(1,"b"),t(2),i(),e(3,"div",40)(4,"a",41),t(5,"Cancelar"),i(),e(6,"button",42),u("click",function(){p(d);let n=v();return _(n.confirm())}),t(7," Excluir "),i()()}if(r&2){let d=v();m(2),y(d.excluir.nome)}}var ze=(()=>{let c=class c{constructor(l,n,o){this.perfisService=l,this.toastr=n,this.sessionService=o,this.quant=10}ngOnInit(){this.sessionService.checkPermission("administrador"),this.subscription=this.perfisService.index().subscribe({next:l=>{this.data$=l,this.temp=l}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}refresh(){this.perfisService.index().subscribe({next:l=>{this.data$=l}})}editar(l){this.child.editar(l)}delete(l){this.excluir=l}confirm(){this.perfisService.remove(this.excluir.id||0).subscribe({next:l=>{this.toastr.success("Exclus\xE3o realizada com sucesso!"),this.refresh()},error:l=>{this.toastr.error("Erro ao excluir, tente novamente mais tarde!")}})}pesquisar(){if(this.data$=this.temp,this.pesquisa.length>0){var l=this.pesquisa.toLocaleLowerCase();this.data$=this.data$.filter(n=>n.nome.toLocaleLowerCase().indexOf(l)!==-1||!l)}}};c.\u0275fac=function(n){return new(n||c)(f(q),f(P),f(te))},c.\u0275cmp=E({type:c,selectors:[["app-perfis"]],viewQuery:function(n,o){if(n&1&&B(D,5),n&2){let s;L(s=R())&&(o.child=s.first)}},standalone:!0,features:[N],decls:67,vars:6,consts:[["mf","mfDataTable"],[1,"content-wrapper"],["titulo","Perfis"],[1,"content"],[1,"card"],[1,"card-header","border-0"],[1,"card-title"],["data-bs-toggle","modal","data-bs-target","#modalcad","title","Cadastrar",1,"btn","btn-outline-primary"],[1,"fa","fa-plus"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","250px"],[1,"form-control","float-right",2,"width","50px",3,"ngModelChange","ngModel"],["value","10"],["value","25"],["value","50"],["value","100"],["type","text","name","table_search","placeholder","Pesquisar...",1,"form-control","float-right",2,"width","200px",3,"ngModelChange","ngModel"],[1,"card-body","table-responsive","p-1"],[1,"table","table-hover","table-head-fixed","text-nowrap",3,"mfData","mfRowsOnPage"],["by","id"],["by","nome"],["colspan","100%"],[2,"display","flex","align-items","center","justify-content","center"],["id","modalcad","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"refresh"],["id","modaldel","aria-hidden","true",1,"modal","fade",2,"display","none"],[1,"modal-dialog"],[1,"optionshover"],["aria-hidden","true",1,"fa","fa-check"],["title","Editar","data-bs-toggle","modal","data-bs-target","#modalcad",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-edit","text-primary"],["title","Excluir","data-bs-toggle","modal","data-bs-target","#modaldel",1,"options","point",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger","ml-1"],[1,"d-flex","justify-content-end"],["data-bs-dismiss","modal",1,"btn","btn-link","text-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(n,o){if(n&1){let s=C();e(0,"div",1),a(1,"app-title",2),e(2,"section",3)(3,"div",4)(4,"div",5)(5,"h3",6)(6,"button",7),a(7,"i",8),i()(),e(8,"div",9)(9,"div",10)(10,"select",11),z("ngModelChange",function(h){return p(s),F(o.quant,h)||(o.quant=h),_(h)}),e(11,"option",12),t(12,"10"),i(),e(13,"option",13),t(14,"25"),i(),e(15,"option",14),t(16,"50"),i(),e(17,"option",15),t(18,"100"),i()(),e(19,"input",16),z("ngModelChange",function(h){return p(s),F(o.pesquisa,h)||(o.pesquisa=h),_(h)}),u("ngModelChange",function(){return p(s),_(o.pesquisar())}),i()()()(),e(20,"div",17)(21,"table",18,0)(23,"thead")(24,"tr")(25,"th")(26,"mfDefaultSorter",19),t(27,"#"),i()(),e(28,"th")(29,"mfDefaultSorter",20),t(30,"Nome"),i()(),e(31,"th"),t(32,"Administrador"),i(),e(33,"th"),t(34,"Gestor"),i(),e(35,"th"),t(36,"Relat\xF3rios"),i(),e(37,"th"),t(38,"Op\xE7\xF5es"),i()()(),k(39,be,4,1,"tbody"),e(40,"tfoot")(41,"tr")(42,"td",21)(43,"div",22),a(44,"mfBootstrapPaginator"),i()()()()()()()(),e(45,"div",23)(46,"div",24)(47,"div",25)(48,"div",26)(49,"h4",27),t(50,"Cadastrar"),i(),e(51,"button",28)(52,"span",29),t(53,"\xD7"),i()()(),e(54,"div",30)(55,"app-perfis-form",31),u("refresh",function(){return p(s),_(o.refresh())}),i()()()()(),e(56,"div",32)(57,"div",33)(58,"div",25)(59,"div",26)(60,"h4",27),t(61,"Excluir"),i(),e(62,"button",28)(63,"span",29),t(64,"\xD7"),i()()(),e(65,"div",30),k(66,ve,8,1),i()()()()()}n&2&&(m(10),T("ngModel",o.quant),m(9),T("ngModel",o.pesquisa),m(2),x("mfData",o.data$)("mfRowsOnPage",o.quant),m(18),b(39,o.data$?39:-1),m(27),b(66,o.excluir?66:-1))},dependencies:[g,le,D,ce,oe,ne,re,w,Y,Z,$,X,V,U]});let r=c;return r})();export{ze as PerfisComponent};
