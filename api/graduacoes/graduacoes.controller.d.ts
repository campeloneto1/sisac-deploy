import { GraduacoesService } from './graduacoes.service';
import { Graduacao, Graduacoes } from './graduacao.interface';
export declare class GraduacoesController {
    private graduacoesService;
    constructor(graduacoesService: GraduacoesService);
    index(): Promise<Graduacoes>;
    policiaisGraduacoes(req: any, params: any): Promise<Graduacao>;
    find(id: number): Promise<Graduacao>;
    create(object: Graduacao, req: any): Promise<void>;
    update(id: number, object: Graduacao, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
