import { PatrimoniosTiposService } from './patrimonios-tipos.service';
import { PatrimonioTipo, PatrimoniosTipos } from './patrimonio-tipo.interface';
export declare class PatrimoniosTiposController {
    private patrimoniosTiposService;
    constructor(patrimoniosTiposService: PatrimoniosTiposService);
    index(): Promise<PatrimoniosTipos>;
    find(id: number): Promise<PatrimonioTipo>;
    create(object: PatrimonioTipo, req: any): Promise<void>;
    update(id: number, object: PatrimonioTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
