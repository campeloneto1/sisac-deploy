import { MateriaisTiposService } from './materiais-tipos.service';
import { MateriaisTipos, MaterialTipo } from './material-tipo.interface';
export declare class MateriaisTiposController {
    private materialTiposService;
    constructor(materialTiposService: MateriaisTiposService);
    index(): Promise<MateriaisTipos>;
    find(id: number): Promise<MaterialTipo>;
    create(object: MaterialTipo, req: any): Promise<void>;
    update(id: number, object: MaterialTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
