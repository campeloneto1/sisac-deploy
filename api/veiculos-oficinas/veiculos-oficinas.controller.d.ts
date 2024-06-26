import { VeiculoOficina, VeiculosOficinas } from './veiculo-oficina.interface';
import { VeiculosOficinasService } from './veiculos-oficinas.service';
export declare class VeiculosOficinasController {
    private veiculosOficinasService;
    constructor(veiculosOficinasService: VeiculosOficinasService);
    index(req: any, params: any): Promise<VeiculosOficinas>;
    emmanutencao(req: any, params: any): Promise<VeiculosOficinas>;
    find(id: number, req: any): Promise<VeiculoOficina>;
    create(object: VeiculoOficina, req: any): Promise<void>;
    update(id: number, object: VeiculoOficina, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    receber(object: any, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<VeiculosOficinas>;
}
