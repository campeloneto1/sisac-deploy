import { VeiculosTiposService } from './veiculos-tipos.service';
import { VeiculoTipo, VeiculosTipos } from './veiculo-tipo.interface';
export declare class VeiculosTiposController {
    private veiculosTiposService;
    constructor(veiculosTiposService: VeiculosTiposService);
    index(): Promise<VeiculosTipos>;
    find(id: number): Promise<VeiculoTipo>;
    create(object: VeiculoTipo, req: any): Promise<void>;
    update(id: number, object: VeiculoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
