import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ContratoLancamento as ContratoLancamentoEntity } from './contrato-lancamento.entity';
import { ContratoLancamento as ContratoLancamentoInterface, ContratosLancamentos as ContratosLancamentosInterface } from './contrato-lancamento.interface';
import { ContratosService } from 'src/contratos/contratos.service';
export declare class ContratosLancamentosService {
    private contratoLancamentoRepository;
    private logsService;
    private constatrosService;
    private lazyModuleLoader;
    constructor(contratoLancamentoRepository: Repository<ContratoLancamentoEntity>, logsService: LogsService, constatrosService: ContratosService, lazyModuleLoader: LazyModuleLoader);
    index(idUser: User): Promise<ContratosLancamentosInterface>;
    find(id: number): Promise<ContratoLancamentoInterface | null>;
    create(object: ContratoLancamentoInterface, idUser: User): Promise<void>;
    update(id: number, object: ContratoLancamentoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
