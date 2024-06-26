import { PoliciaisPublicacoesService } from './policiais-publicacoes.service';
import { PoliciaisPublicacoes, PolicialPublicacao } from './policial-publicacao.interface';
export declare class PoliciaisPublicacoesController {
    private policiaisPublicacoesService;
    constructor(policiaisPublicacoesService: PoliciaisPublicacoesService);
    index(req: any, params: any): Promise<PoliciaisPublicacoes>;
    find(id: number, req: any): Promise<PolicialPublicacao>;
    create(object: PolicialPublicacao, req: any): Promise<void>;
    update(id: number, object: PolicialPublicacao, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
