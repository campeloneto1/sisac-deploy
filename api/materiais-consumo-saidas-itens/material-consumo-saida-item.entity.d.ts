import { User } from 'src/users/user.entity';
import { MaterialConsumo } from 'src/materiais-consumo/material-consumo.entity';
import { MaterialConsumoSaida } from 'src/materiais-consumo-saidas/material-consumo-saida.entity';
export declare class MaterialConsumoSaidaItem {
    id: number;
    quantidade: number;
    material_consumo: MaterialConsumo;
    material_consumo_saida: MaterialConsumoSaida;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
