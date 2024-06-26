import { EmpresasService } from './empresas.service';
import { Empresa, Empresas } from './empresa.interface';
export declare class EmpresasController {
    private empresasService;
    constructor(empresasService: EmpresasService);
    index(req: any, params: any): Promise<Empresas>;
    find(id: number): Promise<Empresa>;
    create(object: Empresa, req: any): Promise<void>;
    update(id: number, object: Empresa, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
