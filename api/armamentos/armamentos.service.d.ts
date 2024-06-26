import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { LazyModuleLoader } from '@nestjs/core';
import { Armamento as ArmamentoEntity } from './armamento.entity';
import { Armamento as ArmamentoInterface, Armamentos as ArmamentosInterface } from './armamento.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosService {
    private armamentoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(armamentoRepository: Repository<ArmamentoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<ArmamentosInterface>;
    find(id: number, idUser: User): Promise<ArmamentoInterface | null>;
    find2(id: number, idUser: User): Promise<ArmamentoInterface | null>;
    create(object: ArmamentoInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<ArmamentosInterface>;
    atualizarQuantidadeUp(id: number, quantidade: number): Promise<void>;
    atualizarQuantidadeDown(id: number, quantidade: number): Promise<void>;
    vencendo(params: any, idUser: User): Promise<ArmamentosInterface>;
    ajustarquant(id: number, object: any, idUser: User): Promise<void>;
    relatorio(object: any, idUser: User): Promise<ArmamentosInterface>;
}
