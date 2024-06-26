import { User } from 'src/users/user.entity';
import { Policial } from 'src/policiais/policial.entity';
import { Curso } from 'src/cursos/curso.entity';
export declare class PolicialCurso {
    id: number;
    policial: Policial;
    curso: Curso;
    carga_horaria: number;
    boletim: string;
    data_inicial: Date;
    data_final: Date;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
