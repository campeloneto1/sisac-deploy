import { MateriaisConsumo, MaterialConsumo } from './material-consumo.interface';
import { MateriaisConsumoService } from './materiais-consumo.service';
export declare class MateriaisConsumoController {
    private materiaisConsumoService;
    constructor(materiaisConsumoService: MateriaisConsumoService);
    index(req: any, params: any): Promise<MateriaisConsumo>;
    disponiveis(req: any, params: any): Promise<MateriaisConsumo>;
    vencendo(req: any, params: any): Promise<MateriaisConsumo>;
    find(id: number, req: any): Promise<MaterialConsumo>;
    create(object: MaterialConsumo, req: any): Promise<void>;
    update(id: number, object: MaterialConsumo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<MateriaisConsumo>;
}
