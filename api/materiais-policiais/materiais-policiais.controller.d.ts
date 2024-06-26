import { MateriaisPoliciais, MaterialPolicial } from './material-policial.interface';
import { MateriaisPoliciaisService } from './materiais-policiais.service';
export declare class MateriaisPoliciaisController {
    private materiaisPoliciaisService;
    constructor(materiaisPoliciaisService: MateriaisPoliciaisService);
    index(req: any, params: any): Promise<MateriaisPoliciais>;
    find(id: number, req: any): Promise<MaterialPolicial>;
    create(object: MaterialPolicial, req: any): Promise<void>;
    update(id: number, object: MaterialPolicial, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    receber(object: any, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<MaterialPolicial>;
}
