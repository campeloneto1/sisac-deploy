import { UsersSubunidadesService } from './users-subunidades.service';
import { UserSubunidade, UsersSubunidades } from './user-subunidade.interface';
export declare class UsersSubunidadesController {
    private usersSubunidadesService;
    constructor(usersSubunidadesService: UsersSubunidadesService);
    index(): Promise<UsersSubunidades>;
    find(id: number): Promise<UserSubunidade>;
    create(object: UserSubunidade, req: any): Promise<void>;
    update(id: number, object: UserSubunidade, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
