import { User, Users } from './user.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(params: any, req: any): Promise<Users>;
    find(id: number): Promise<User>;
    create(object: User, req: any): Promise<void>;
    update(id: number, object: User, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    resetPass(object: User, req: any): Promise<void>;
    changePass(object: any): Promise<void>;
}
