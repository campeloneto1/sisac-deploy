import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { Contrato as ContratoEntity } from './contrato.entity';
import { Contrato as ContratoInterface, Contratos as ContratosInterface } from './contrato.interface';
export declare class ContratosService {
    private contratoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(contratoRepository: Repository<ContratoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<ContratosInterface>;
    find(id: number, idUser: User): Promise<ContratoInterface | null>;
    create(object: ContratoInterface, idUser: User): Promise<void>;
    update(id: number, object: ContratoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    valorUsadoUp(contrato: number, valor: number, idUser: User): Promise<void>;
    valorUsadoDown(contrato: number, valor: number, idUser: User): Promise<void>;
    acabando(params: any, idUser: User): Promise<ContratosInterface>;
    aditivar(id: number, object: any, idUser: User): Promise<void>;
}
