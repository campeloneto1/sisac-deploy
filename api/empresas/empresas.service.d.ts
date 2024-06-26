import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Empresa as EmpresaEntity } from './empresa.entity';
import { Empresa as EmpresaInterface, Empresas as EmpresasInterface } from './empresa.interface';
export declare class EmpresasService {
    private empresaRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(empresaRepository: Repository<EmpresaEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<EmpresasInterface>;
    find(id: number): Promise<EmpresaInterface | null>;
    create(object: EmpresaInterface, idUser: User): Promise<void>;
    update(id: number, object: EmpresaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
