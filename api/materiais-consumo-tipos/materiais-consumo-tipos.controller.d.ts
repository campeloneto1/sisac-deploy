import { MateriaisConsumoTiposService } from './materiais-consumo-tipos.service';
import { MateriaisConsumoTipos, MaterialConsumoTipo } from './material-consumo-tipo.interface';
export declare class MateriaisConsumoTiposController {
    private materialConsumoTiposService;
    constructor(materialConsumoTiposService: MateriaisConsumoTiposService);
    index(): Promise<MateriaisConsumoTipos>;
    find(id: number): Promise<MaterialConsumoTipo>;
    create(object: MaterialConsumoTipo, req: any): Promise<void>;
    update(id: number, object: MaterialConsumoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
