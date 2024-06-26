import { Patrimonio, Patrimonios } from './patrimonio.interface';
import { PatrimoniosService } from './patrimonios.service';
export declare class PatrimoniosController {
    private patrimoniosService;
    constructor(patrimoniosService: PatrimoniosService);
    index(req: any, params: any): Promise<Patrimonios>;
    disponiveis(req: any, params: any): Promise<Patrimonios>;
    find(id: number, req: any): Promise<Patrimonio>;
    create(object: Patrimonio, req: any): Promise<void>;
    update(id: number, object: Patrimonio, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<Patrimonios>;
}
