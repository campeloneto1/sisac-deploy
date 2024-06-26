import { MateriaisConsumoSaidas, MaterialConsumoSaida } from './material-consumo-saida.interface';
import { MateriaisConsumoSaidasService } from './materiais-consumo-saidas.service';
export declare class MateriaisConsumoSaidasController {
    private materialConsumoSaidaService;
    constructor(materialConsumoSaidaService: MateriaisConsumoSaidasService);
    index(req: any, params: any): Promise<MateriaisConsumoSaidas>;
    find(id: number, req: any): Promise<MaterialConsumoSaida>;
    create(object: MaterialConsumoSaida, req: any): Promise<void>;
    update(id: number, object: MaterialConsumoSaida, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<MaterialConsumoSaida>;
}
