import { MateriaisConsumoEntradasItens, MaterialConsumoEntradaItem } from './material-consumo-entrada-item.interface';
import { MateriaisConsumoEntradasItensService } from './materiais-consumo-entradas-itens.service';
export declare class MateriaisConsumoEntradasItensController {
    private materiasConsumoEntradasItensService;
    constructor(materiasConsumoEntradasItensService: MateriaisConsumoEntradasItensService);
    index(): Promise<MateriaisConsumoEntradasItens>;
    find(id: number): Promise<MaterialConsumoEntradaItem>;
    create(object: MaterialConsumoEntradaItem, req: any): Promise<void>;
    update(id: number, object: MaterialConsumoEntradaItem, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
