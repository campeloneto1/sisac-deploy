import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { Material as MaterialEntity } from './material.entity';
import { Material as MaterialInterface, Materiais as MateriaisInterface } from './material.interface';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
export declare class MateriaisService {
    private materialRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(materialRepository: Repository<MaterialEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<MateriaisInterface>;
    find(id: number, idUser: User): Promise<MaterialInterface | null>;
    find2(id: number, idUser: User): Promise<MaterialInterface | null>;
    create(object: MaterialInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<MateriaisInterface>;
    atualizarQuantidadeUp(id: number, quantidade: number): Promise<void>;
    atualizarQuantidadeDown(id: number, quantidade: number): Promise<void>;
    vencendo(params: any, idUser: User): Promise<MateriaisInterface>;
    relatorio(object: any, idUser: User): Promise<MateriaisInterface>;
}
