import { MateriaisConsumoEntradas, MaterialConsumoEntrada } from './material-consumo-entrada.interface';
import { MateriaisConsumoEntradasService } from './materiais-consumo-entradas.service';
export declare class MateriaisConsumoEntradasController {
    private materialConsumoEntradasService;
    constructor(materialConsumoEntradasService: MateriaisConsumoEntradasService);
    index(req: any, params: any): Promise<MateriaisConsumoEntradas>;
    find(id: number, req: any): Promise<MaterialConsumoEntrada>;
    create(object: MaterialConsumoEntrada, req: any): Promise<void>;
    update(id: number, object: MaterialConsumoEntrada, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<MaterialConsumoEntrada>;
}
