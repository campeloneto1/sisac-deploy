import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialPolicial as MaterialPolicialEnity } from './material-policial.entity';
import { MaterialPolicial as MaterialPolicialInterface, MateriaisPoliciais as MateriaisPoliciaisInterface } from './material-policial.interface';
import { LogsService } from 'src/logs/logs.service';
import { MateriaisPoliciaisItensService } from 'src/materiais-policiais-itens/materiais-policiais-itens.service';
import { MateriaisService } from 'src/materiais/materiais.service';
export declare class MateriaisPoliciaisService {
    private materiaisPoliciaisRepository;
    private lazyModuleLoader;
    private materiaisPoliciaisIntensService;
    private materiaisService;
    private logsService;
    constructor(materiaisPoliciaisRepository: Repository<MaterialPolicialEnity>, lazyModuleLoader: LazyModuleLoader, materiaisPoliciaisIntensService: MateriaisPoliciaisItensService, materiaisService: MateriaisService, logsService: LogsService);
    index(params: any, idUser: User): Promise<MateriaisPoliciaisInterface>;
    find(id: number, idUser: User): Promise<MaterialPolicialInterface | null>;
    create(object: MaterialPolicialInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialPolicialInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    receber(object: any, idUser: User): Promise<void>;
    emprestados(params: any, idUser: User): Promise<MateriaisPoliciaisInterface>;
    wherePolicial(id: number, idUser: User): Promise<MateriaisPoliciaisInterface>;
    relatorio(object: any, idUser: User): Promise<MaterialPolicialInterface | null>;
}
