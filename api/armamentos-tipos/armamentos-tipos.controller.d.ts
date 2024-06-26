import { ArmamentoTipo, ArmamentosTipos } from './armamento-tipo.interface';
import { ArmamentosTiposService } from './armamentos-tipos.service';
export declare class ArmamentosTiposController {
    private armamentosTiposService;
    constructor(armamentosTiposService: ArmamentosTiposService);
    index(): Promise<ArmamentosTipos>;
    find(id: number): Promise<ArmamentoTipo>;
    create(object: ArmamentoTipo, req: any): Promise<void>;
    update(id: number, object: ArmamentoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
