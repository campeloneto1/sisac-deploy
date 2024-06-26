import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ArmamentoEmprestimoItem as ArmamentoEsmprestimoItemEntity } from './armamento-emprestimo-item.entity';
import { ArmamentoEmprestimoItem as ArmamentoEsmprestimoItemInterface, ArmamentosEmprestimosItens as ArmamentosEmprestimosItensInterface } from './armamento-emprestimo-item.interface';
import { ArmamentosService } from 'src/armamentos/armamentos.service';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosEmprestimosItensService {
    private armamentoEmprestimoItemRepository;
    private lazyModuleLoader;
    private logsService;
    private armamentosService;
    constructor(armamentoEmprestimoItemRepository: Repository<ArmamentoEsmprestimoItemEntity>, lazyModuleLoader: LazyModuleLoader, logsService: LogsService, armamentosService: ArmamentosService);
    index(): Promise<ArmamentosEmprestimosItensInterface>;
    find(id: number): Promise<ArmamentoEsmprestimoItemInterface | null>;
    create(objectreq: ArmamentoEsmprestimoItemInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoEsmprestimoItemInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereArmEmp(id: number): Promise<ArmamentosEmprestimosItensInterface>;
}
