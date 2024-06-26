import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { PolicialRequerida as PolicialRequeridaEntity } from './policial-requerida.entity';
import { PolicialRequerida as PolicialRequeridaInterface, PoliciaisRequeridas as PoliciaisRequeridasInterface } from './policial-requerida.interface';
export declare class PoliciaisRequeridasService {
    private policialRequeridaRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(policialRequeridaRepository: Repository<PolicialRequeridaEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PoliciaisRequeridasInterface>;
    find(id: number, idUser: User): Promise<PolicialRequeridaInterface | null>;
    create(object: PolicialRequeridaInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialRequeridaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    quantidade(params: any, idUser: User): Promise<number>;
}
