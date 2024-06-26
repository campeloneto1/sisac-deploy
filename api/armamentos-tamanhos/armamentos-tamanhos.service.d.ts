import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ArmamentoTamanho as ArmamentoTamanhoEntity } from './armamento-tamanho.entity';
import { ArmamentoTamanho as ArmamentoTamanhoInterface, ArmamentosTamanhos as ArmamentosTamanhosInterface } from './armamento-tamanho.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosTamanhosService {
    private armamentoTipoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(armamentoTipoRepository: Repository<ArmamentoTamanhoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ArmamentosTamanhosInterface>;
    find(id: number): Promise<ArmamentoTamanhoInterface | null>;
    create(object: ArmamentoTamanhoInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoTamanhoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
