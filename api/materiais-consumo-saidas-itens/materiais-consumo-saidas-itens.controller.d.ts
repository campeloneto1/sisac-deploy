import { MateriaisConsumoSaidasItens, MaterialConsumoSaidaItem } from './material-consumo-saida-item.interface';
import { MateriaisConsumoSaidasItensService } from './materiais-consumo-saidas-itens.service';
export declare class MateriaisConsumoSaidasItensController {
    private materiasConsumoSaidasItensService;
    constructor(materiasConsumoSaidasItensService: MateriaisConsumoSaidasItensService);
    index(): Promise<MateriaisConsumoSaidasItens>;
    find(id: number): Promise<MaterialConsumoSaidaItem>;
    create(object: MaterialConsumoSaidaItem, req: any): Promise<void>;
    update(id: number, object: MaterialConsumoSaidaItem, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
