import { CidadesService } from './cidades.service';
import { Cidade, Cidades } from './cidade.interface';
export declare class CidadesController {
    private cidadesService;
    constructor(cidadesService: CidadesService);
    index(): Promise<Cidades>;
    find(id: number): Promise<Cidade>;
    create(object: Cidade, req: any): Promise<void>;
    update(id: number, object: Cidade, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    wherePais(id: number): Promise<Cidades>;
}
