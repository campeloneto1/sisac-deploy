import { ManutencoesTiposService } from './manutencoes-tipos.service';
import { ManutencaoTipo, ManutencoesTipos } from './manutencao-tipo.interface';
export declare class ManutencoesTiposController {
    private manutencoesTiposService;
    constructor(manutencoesTiposService: ManutencoesTiposService);
    index(): Promise<ManutencoesTipos>;
    find(id: number): Promise<ManutencaoTipo>;
    create(object: ManutencaoTipo, req: any): Promise<void>;
    update(id: number, object: ManutencaoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
