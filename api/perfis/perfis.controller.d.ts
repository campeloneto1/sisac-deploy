import { PerfisService } from './perfis.service';
import { Perfil, Perfis } from './perfil.interface';
export declare class PerfisController {
    private perfisService;
    constructor(perfisService: PerfisService);
    index(): Promise<Perfis>;
    find(id: number): Promise<Perfil>;
    create(object: Perfil, req: any): Promise<void>;
    update(id: number, object: Perfil, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
