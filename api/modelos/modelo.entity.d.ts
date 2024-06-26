import { User } from 'src/users/user.entity';
import { Marca } from 'src/marcas/marca.entity';
import { Armamento } from 'src/armamentos/armamento.entity';
import { Veiculo } from 'src/veiculos/veiculo.entity';
export declare class Modelo {
    id: number;
    nome: string;
    abreviatura: string;
    marca: Marca;
    armamentos: Armamento[];
    veiculos: Veiculo[];
    created_by: User;
    updated_by: User;
    created_at: Date;
    updated_at: Date;
}
