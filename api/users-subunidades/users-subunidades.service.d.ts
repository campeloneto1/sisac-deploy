import { LazyModuleLoader } from '@nestjs/core';
import { LogsService } from 'src/logs/logs.service';
import { Repository } from 'typeorm';
import { UserSubunidade as UserSubunidadeEntity } from './user-subunidade.entity';
import { UserSubunidade as UserSubunidadeInterface, UsersSubunidades as UsersSubunidadesInterface } from './user-subunidade.interface';
import { User } from 'src/users/user.interface';
export declare class UsersSubunidadesService {
    private usersSubunidadesRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(usersSubunidadesRepository: Repository<UserSubunidadeEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<UsersSubunidadesInterface>;
    find(id: number): Promise<UserSubunidadeInterface | null>;
    create(object: UserSubunidadeInterface, idUser: User): Promise<void>;
    update(id: number, object: UserSubunidadeInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
