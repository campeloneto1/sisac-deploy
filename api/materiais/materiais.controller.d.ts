import { Materiais, Material } from './material.interface';
import { MateriaisService } from './materiais.service';
export declare class MateriaisController {
    private materiaisService;
    constructor(materiaisService: MateriaisService);
    index(req: any, params: any): Promise<Materiais>;
    disponiveis(req: any, params: any): Promise<Materiais>;
    vencendo(req: any, params: any): Promise<Materiais>;
    find(id: number, req: any): Promise<Material>;
    create(object: Material, req: any): Promise<void>;
    update(id: number, object: Material, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<Materiais>;
}
