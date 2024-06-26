import { VeiculoPolicial, VeiculosPoliciais } from './veiculo-policial.interface';
import { VeiculosPoliciaisService } from './veiculos-policiais.service';
export declare class VeiculosPoliciaisController {
    private veiculosPoliciaisService;
    constructor(veiculosPoliciaisService: VeiculosPoliciaisService);
    index(req: any, params: any): Promise<VeiculosPoliciais>;
    emprestados(req: any, params: any): Promise<VeiculosPoliciais>;
    emprestado(req: any, params: any): Promise<VeiculoPolicial>;
    find(id: number, req: any): Promise<VeiculoPolicial>;
    create(object: VeiculoPolicial, req: any): Promise<void>;
    update(id: number, object: VeiculoPolicial, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    receber(object: any, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<VeiculosPoliciais>;
}
