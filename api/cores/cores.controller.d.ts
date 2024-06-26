import { CoresService } from './cores.service';
import { Cor, Cores } from './cor.interface';
export declare class CoresController {
    private coresTiposService;
    constructor(coresTiposService: CoresService);
    index(): Promise<Cores>;
    find(id: number): Promise<Cor>;
    create(object: Cor, req: any): Promise<void>;
    update(id: number, object: Cor, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
