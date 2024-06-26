import { User } from 'src/users/user.entity';
import { Material } from 'src/materiais/material.entity';
import { MaterialPolicial } from 'src/materiais-policiais/material-policial.entity';
export declare class MaterialPolicialItem {
    id: number;
    quantidade: number;
    quantidade_devolucao: number;
    material: Material;
    material_policial: MaterialPolicial;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
