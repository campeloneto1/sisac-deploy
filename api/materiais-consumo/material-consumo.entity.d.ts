import { User } from 'src/users/user.entity';
import { Modelo } from 'src/modelos/modelo.entity';
import { Subunidade } from 'src/subunidades/subunidade.entity';
import { MaterialConsumoTipo } from 'src/materiais-consumo-tipos/material-consumo-tipo.entity';
import { MaterialConsumoSaidaItem } from 'src/materiais-consumo-saidas-itens/material-consumo-saida-item.entity';
import { MaterialConsumoEntradaItem } from 'src/materiais-consumo-entradas-itens/material-consumo-entrada-item.entity';
export declare class MaterialConsumo {
    id: number;
    serial: string;
    quantidade: number;
    quantidade_alerta: number;
    data_validade: Date;
    data_baixa: Date;
    observacoes: string;
    subunidade: Subunidade;
    modelo: Modelo;
    material_consumo_tipo: MaterialConsumoTipo;
    materiais_consumo_saidas_itens: MaterialConsumoSaidaItem[];
    materiais_consumo_entradas_itens: MaterialConsumoEntradaItem[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
