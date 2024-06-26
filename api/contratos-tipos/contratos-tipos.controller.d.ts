import { ContratosTiposService } from './contratos-tipos.service';
import { ContratoTipo, ContratosTipos } from './contrato-tipo.interface';
export declare class ContratosTiposController {
    private contratosTiposService;
    constructor(contratosTiposService: ContratosTiposService);
    index(): Promise<ContratosTipos>;
    find(id: number): Promise<ContratoTipo>;
    create(object: ContratoTipo, req: any): Promise<void>;
    update(id: number, object: ContratoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
