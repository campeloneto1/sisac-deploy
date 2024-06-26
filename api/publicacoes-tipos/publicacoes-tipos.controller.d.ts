import { PublicacoesTiposService } from './publicacoes-tipos.service';
import { PublicacaoTipo, PublicacoesTipos } from './publicacao-tipo.interface';
export declare class PublicacoesTiposController {
    private publicacoesTiposService;
    constructor(publicacoesTiposService: PublicacoesTiposService);
    index(): Promise<PublicacoesTipos>;
    find(id: number): Promise<PublicacaoTipo>;
    create(object: PublicacaoTipo, req: any): Promise<void>;
    update(id: number, object: PublicacaoTipo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
