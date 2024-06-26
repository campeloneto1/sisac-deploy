import { Armamento, Armamentos } from './armamento.interface';
import { ArmamentosService } from './armamentos.service';
export declare class ArmamentosController {
    private armamentosService;
    constructor(armamentosService: ArmamentosService);
    index(req: any, params: any): Promise<Armamentos>;
    disponiveis(req: any, params: any): Promise<Armamentos>;
    vencendo(req: any, params: any): Promise<Armamentos>;
    find(id: number, req: any): Promise<Armamento>;
    create(object: Armamento, req: any): Promise<void>;
    update(id: number, object: Armamento, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<Armamentos>;
    ajustarquant(id: number, object: any, req: any): Promise<void>;
}
