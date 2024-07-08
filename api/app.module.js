"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const auth_guard_1 = require("./auth/auth.guard");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const auth_module_1 = require("./auth/auth.module");
const perfis_module_1 = require("./perfis/perfis.module");
const users_module_1 = require("./users/users.module");
const utilities_module_1 = require("./utilities/utilities.module");
const paises_module_1 = require("./paises/paises.module");
const estados_module_1 = require("./estados/estados.module");
const cidades_module_1 = require("./cidades/cidades.module");
const unidades_module_1 = require("./unidades/unidades.module");
const subunidades_module_1 = require("./subunidades/subunidades.module");
const setores_module_1 = require("./setores/setores.module");
const graduacoes_module_1 = require("./graduacoes/graduacoes.module");
const sexos_module_1 = require("./sexos/sexos.module");
const marcas_module_1 = require("./marcas/marcas.module");
const modelos_module_1 = require("./modelos/modelos.module");
const policiais_module_1 = require("./policiais/policiais.module");
const policiais_atestados_module_1 = require("./policiais-atestados/policiais-atestados.module");
const policiais_ferias_module_1 = require("./policiais-ferias/policiais-ferias.module");
const policiais_publicacoes_module_1 = require("./policiais-publicacoes/policiais-publicacoes.module");
const publicacoes_tipos_module_1 = require("./publicacoes-tipos/publicacoes-tipos.module");
const armamentos_module_1 = require("./armamentos/armamentos.module");
const armamentos_tipos_module_1 = require("./armamentos-tipos/armamentos-tipos.module");
const armamentos_tamanhos_module_1 = require("./armamentos-tamanhos/armamentos-tamanhos.module");
const armamentos_calibres_module_1 = require("./armamentos-calibres/armamentos-calibres.module");
const armamentos_emprestimos_module_1 = require("./armamentos-emprestimos/armamentos-emprestimos.module");
const armamentos_emprestimos_itens_module_1 = require("./armamentos-emprestimos-itens/armamentos-emprestimos-itens.module");
const home_module_1 = require("./home/home.module");
const cores_module_1 = require("./cores/cores.module");
const oficinas_module_1 = require("./oficinas/oficinas.module");
const manutencoes_tipos_module_1 = require("./manutencoes-tipos/manutencoes-tipos.module");
const veiculos_tipos_module_1 = require("./veiculos-tipos/veiculos-tipos.module");
const veiculos_module_1 = require("./veiculos/veiculos.module");
const veiculos_oficinas_module_1 = require("./veiculos-oficinas/veiculos-oficinas.module");
const veiculos_policiais_module_1 = require("./veiculos-policiais/veiculos-policiais.module");
const veiculos_policiais_alteracoes_module_1 = require("./veiculos-policiais-alteracoes/veiculos-policiais-alteracoes.module");
const patrimonios_tipos_module_1 = require("./patrimonios-tipos/patrimonios-tipos.module");
const patrimonios_module_1 = require("./patrimonios/patrimonios.module");
const logs_module_1 = require("./logs/logs.module");
const cursos_module_1 = require("./cursos/cursos.module");
const policiais_cursos_module_1 = require("./policiais-cursos/policiais-cursos.module");
const materiais_consumo_tipos_module_1 = require("./materiais-consumo-tipos/materiais-consumo-tipos.module");
const materiais_consumo_module_1 = require("./materiais-consumo/materiais-consumo.module");
const materiais_consumo_saidas_module_1 = require("./materiais-consumo-saidas/materiais-consumo-saidas.module");
const materiais_consumo_saidas_itens_module_1 = require("./materiais-consumo-saidas-itens/materiais-consumo-saidas-itens.module");
const materiais_consumo_entradas_module_1 = require("./materiais-consumo-entradas/materiais-consumo-entradas.module");
const materiais_consumo_entradas_itens_module_1 = require("./materiais-consumo-entradas-itens/materiais-consumo-entradas-itens.module");
const materiais_module_1 = require("./materiais/materiais.module");
const materiais_tipos_module_1 = require("./materiais-tipos/materiais-tipos.module");
const materiais_policiais_module_1 = require("./materiais-policiais/materiais-policiais.module");
const materiais_policiais_itens_module_1 = require("./materiais-policiais-itens/materiais-policiais-itens.module");
const escolaridades_module_1 = require("./escolaridades/escolaridades.module");
const policiais_requeridas_module_1 = require("./policiais-requeridas/policiais-requeridas.module");
const empresas_module_1 = require("./empresas/empresas.module");
const contratos_module_1 = require("./contratos/contratos.module");
const contratos_objetos_module_1 = require("./contratos-objetos/contratos-objetos.module");
const contratos_tipos_module_1 = require("./contratos-tipos/contratos-tipos.module");
const contratos_lancamentos_module_1 = require("./contratos-lancamentos/contratos-lancamentos.module");
const users_subunidades_module_1 = require("./users-subunidades/users-subunidades.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const servicos_module_1 = require("./servicos/servicos.module");
const servicos_tipos_module_1 = require("./servicos-tipos/servicos-tipos.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [
                    config_1.ConfigModule
                ],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('TORM_HOST'),
                    port: +configService.get('TORM_PORT'),
                    username: configService.get('TORM_USER'),
                    password: configService.get('TORM_PASS'),
                    database: configService.get('TORM_DB'),
                    synchronize: true,
                    autoLoadEntities: true,
                }),
                inject: [config_1.ConfigService],
            }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 30,
                }]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, './public'), 
            }),
            auth_module_1.AuthModule,
            paises_module_1.PaisesModule,
            perfis_module_1.PerfisModule,
            users_module_1.UsersModule,
            utilities_module_1.UtilitiesModule,
            estados_module_1.EstadosModule,
            cidades_module_1.CidadesModule,
            unidades_module_1.UnidadesModule,
            subunidades_module_1.SubunidadesModule,
            setores_module_1.SetoresModule,
            graduacoes_module_1.GraduacoesModule,
            sexos_module_1.SexosModule,
            marcas_module_1.MarcasModule,
            modelos_module_1.ModelosModule,
            policiais_module_1.PoliciaisModule,
            policiais_atestados_module_1.PoliciaisAtestadosModule,
            policiais_ferias_module_1.PoliciaisFeriasModule,
            policiais_publicacoes_module_1.PoliciaisPublicacoesModule,
            publicacoes_tipos_module_1.PublicacoesTiposModule,
            armamentos_module_1.ArmamentosModule,
            armamentos_tipos_module_1.ArmamentosTiposModule,
            armamentos_tamanhos_module_1.ArmamentosTamanhosModule,
            armamentos_calibres_module_1.ArmamentosCalibresModule,
            armamentos_emprestimos_module_1.ArmamentosEmprestimosModule,
            armamentos_emprestimos_itens_module_1.ArmamentosEmprestimosItensModule,
            home_module_1.HomeModule,
            cores_module_1.CoresModule,
            oficinas_module_1.OficinasModule,
            manutencoes_tipos_module_1.ManutencoesTiposModule,
            veiculos_tipos_module_1.VeiculosTiposModule,
            veiculos_module_1.VeiculosModule,
            veiculos_oficinas_module_1.VeiculosOficinasModule,
            veiculos_policiais_module_1.VeiculosPoliciaisModule,
            veiculos_policiais_alteracoes_module_1.VeiculosPoliciaisAlteracoesModule,
            patrimonios_tipos_module_1.PatrimoniosTiposModule,
            patrimonios_module_1.PatrimoniosModule,
            logs_module_1.LogsModule,
            cursos_module_1.CursosModule,
            policiais_cursos_module_1.PoliciaisCursosModule,
            materiais_consumo_tipos_module_1.MateriaisConsumoTiposModule,
            materiais_consumo_module_1.MateriaisConsumoModule,
            materiais_consumo_saidas_module_1.MateriaisConsumoSaidasModule,
            materiais_consumo_saidas_itens_module_1.MateriaisConsumoSaidasItensModule,
            materiais_consumo_entradas_module_1.MateriaisConsumoEntradasModule,
            materiais_consumo_entradas_itens_module_1.MateriaisConsumoEntradasItensModule,
            materiais_module_1.MateriaisModule,
            materiais_tipos_module_1.MateriaisTiposModule,
            materiais_policiais_module_1.MateriaisPoliciaisModule,
            materiais_policiais_itens_module_1.MateriaisPoliciaisItensModule,
            escolaridades_module_1.EscolaridadesModule,
            policiais_requeridas_module_1.PoliciaisRequeridasModule,
            empresas_module_1.EmpresasModule,
            contratos_module_1.ContratosModule,
            contratos_objetos_module_1.ContratosObjetosModule,
            contratos_tipos_module_1.ContratosTiposModule,
            contratos_lancamentos_module_1.ContratosLancamentosModule,
            users_subunidades_module_1.UsersSubunidadesModule,
            servicos_module_1.ServicosModule,
            servicos_tipos_module_1.ServicosTiposModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard
            }
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map