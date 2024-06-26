import { User } from 'src/users/user.entity';
import { PolicialCurso } from 'src/policiais-cursos/policial-curso.entity';
export declare class Curso {
    id: number;
    nome: string;
    abreviatura: string;
    policiais: PolicialCurso[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
