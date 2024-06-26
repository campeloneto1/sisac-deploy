import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Servico as ServicoEntity } from './servico.entity';
import { Servico as ServicoInterface, Servicos as ServicosInterface } from './servico.interface';
export declare class ServicosService {
    private servicoRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(servicoRepository: Repository<ServicoEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<ServicosInterface>;
    find(id: number, idUser: User): Promise<ServicoInterface | null>;
    create(object: ServicoInterface, idUser: User): Promise<void>;
    update(id: number, object: ServicoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
