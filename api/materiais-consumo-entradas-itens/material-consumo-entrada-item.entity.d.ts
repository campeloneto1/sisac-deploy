import { User } from 'src/users/user.entity';
import { MaterialConsumo } from 'src/materiais-consumo/material-consumo.entity';
import { MaterialConsumoEntrada } from 'src/materiais-consumo-entradas/material-consumo-entrada.entity';
export declare class MaterialConsumoEntradaItem {
    id: number;
    quantidade: number;
    material_consumo: MaterialConsumo;
    material_consumo_entrada: MaterialConsumoEntrada;
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
