import { Subunidade } from 'src/subunidades/subunidade.entity';
import { User } from 'src/users/user.entity';
export declare class UserSubunidade {
    id: number;
    user: User;
    subunidade: Subunidade;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
