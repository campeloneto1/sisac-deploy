import { User } from 'src/users/user.entity';
import { Modelo } from 'src/modelos/modelo.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { MaterialTipo } from 'src/materiais-tipos/material-tipo.entity';
import { MaterialPolicialItem } from 'src/materiais-policiais-itens/material-policial-item.entity';
export declare class Material {
    id: number;
    serial: string;
    quantidade: number;
    quantidade_disponivel: number;
    data_validade: Date;
    data_baixa: Date;
    observacoes: string;
    subunidade: Subunidade;
    modelo: Modelo;
    material_tipo: MaterialTipo;
    materiais_policiais_itens: MaterialPolicialItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
