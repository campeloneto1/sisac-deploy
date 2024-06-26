import { Veiculo, Veiculos } from './veiculo.interface';
import { VeiculosService } from './veiculos.service';
export declare class VeiculosController {
    private veiculosService;
    constructor(veiculosService: VeiculosService);
    index(req: any, params: any): Promise<Veiculos>;
    disponiveis(req: any, params: any): Promise<Veiculos>;
    find(id: number, req: any): Promise<Veiculo>;
    create(object: Veiculo, req: any): Promise<void>;
    update(id: number, object: Veiculo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    relatorio(object: any, req: any): Promise<Veiculos>;
}
