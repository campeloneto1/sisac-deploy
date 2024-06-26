import { SetoresService } from './setores.service';
import { Setor, Setores } from './setor.interface';
export declare class SetoresController {
    private setoresService;
    constructor(setoresService: SetoresService);
    index(req: any, params: any): Promise<Setores>;
    find(id: number): Promise<Setor>;
    create(object: Setor, req: any): Promise<void>;
    update(id: number, object: Setor, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    whereSubunidade(id: number): Promise<Setores>;
}
