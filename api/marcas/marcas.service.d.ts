import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Marca as MarcaEntity } from './marca.entity';
import { Marca as MarcaInterface, Marcas as MarcasInterface } from './marca.interface';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class MarcasService {
    private marcaRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(marcaRepository: Repository<MarcaEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<MarcasInterface>;
    find(id: number): Promise<MarcaInterface | null>;
    create(object: MarcaInterface, idUser: User): Promise<void>;
    update(id: number, object: MarcaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    marcasArmamentos(): Promise<MarcasInterface>;
    marcasLogistica(): Promise<MarcasInterface>;
    marcasTransporte(): Promise<MarcasInterface>;
}
