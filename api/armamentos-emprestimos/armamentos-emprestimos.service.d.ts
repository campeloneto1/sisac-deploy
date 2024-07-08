import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ArmamentoEmprestimo as ArmamentoEmprestimoEnity } from './armamento-emprestimo.entity';
import { ArmamentoEmprestimo as ArmamentoEmprestimoInterface, ArmamentosEmprestimos as ArmamentosEmprestimosInterface } from './armamento-emprestimo.interface';
import { ArmamentosEmprestimosItensService } from 'src/armamentos-emprestimos-itens/armamentos-emprestimos-itens.service';
import { ArmamentosService } from 'src/armamentos/armamentos.service';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosEmprestimosService {
    private armamentoEmprestimoRepository;
    private lazyModuleLoader;
    private armamentosEmprestimosItensService;
    private armamentoService;
    private logsService;
    constructor(armamentoEmprestimoRepository: Repository<ArmamentoEmprestimoEnity>, lazyModuleLoader: LazyModuleLoader, armamentosEmprestimosItensService: ArmamentosEmprestimosItensService, armamentoService: ArmamentosService, logsService: LogsService);
    index(params: any, idUser: User): Promise<ArmamentosEmprestimosInterface>;
    find(id: number, idUser: User): Promise<ArmamentoEmprestimoInterface | null>;
    create(object: ArmamentoEmprestimoInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoEmprestimoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    receber(object: any, idUser: User): Promise<void>;
    emprestados(params: any, idUser: User): Promise<ArmamentosEmprestimosInterface>;
    wherePolicial(id: number, idUser: User): Promise<ArmamentosEmprestimosInterface>;
    relatorio(object: any, idUser: User): Promise<ArmamentoEmprestimoInterface | null>;
}
