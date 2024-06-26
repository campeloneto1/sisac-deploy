import { ServicosTiposService } from './servicos-tipos.service';
import { ServicoTipo, ServicosTipos } from './servico-tipo.interface';
export declare class ServicosTiposController {
    private servicosTiposService;
    constructor(servicosTiposService: ServicosTiposService);
    index(): Promise<ServicosTipos>;
    find(id: number): Promise<ServicoTipo>;
    create(object: ServicoTipo, req: any): Promise<void>;
    update(id: number, object: ServicoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
