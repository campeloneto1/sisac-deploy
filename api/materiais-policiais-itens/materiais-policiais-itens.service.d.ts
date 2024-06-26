import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { MaterialPolicialItem as MaterialPolicialItemEntity } from './material-policial-item.entity';
import { MaterialPolicialItem as MaterialPolicialItemInterface, MateriaisPoliciaisItens as MateriaisPoliciaisItensInterface } from './material-policial-item.interface';
import { LogsService } from 'src/logs/logs.service';
import { MateriaisService } from 'src/materiais/materiais.service';
export declare class MateriaisPoliciaisItensService {
    private materialPolicialItemRepository;
    private lazyModuleLoader;
    private logsService;
    private materiaisService;
    constructor(materialPolicialItemRepository: Repository<MaterialPolicialItemEntity>, lazyModuleLoader: LazyModuleLoader, logsService: LogsService, materiaisService: MateriaisService);
    index(): Promise<MateriaisPoliciaisItensInterface>;
    find(id: number): Promise<MaterialPolicialItemInterface | null>;
    create(objectreq: MaterialPolicialItemInterface, idUser: User): Promise<void>;
    update(id: number, object: MaterialPolicialItemInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    whereMatEmp(id: number): Promise<MateriaisPoliciaisItensInterface>;
}
