import { PolicialAtestado as PolicialAtestadoEntity } from './policial-atestado.entity';
import { PolicialAtestado as PolicialAtestadoInterface, PoliciaisAtestados as PoliciaisAtestadosInterface } from './policial-atestado.interface';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class PoliciaisAtestadosService {
    private policialAtestadoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(policialAtestadoRepository: Repository<PolicialAtestadoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<PoliciaisAtestadosInterface>;
    find(id: number, idUser: User): Promise<PolicialAtestadoInterface | null>;
    create(object: PolicialAtestadoInterface, idUser: User): Promise<void>;
    update(id: number, object: PolicialAtestadoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    quantidade(params: any, idUser: User): Promise<number>;
    wherePolicial(id: number, idUser: User): Promise<PoliciaisAtestadosInterface | null>;
}
