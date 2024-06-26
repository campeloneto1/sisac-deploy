import { PaisesService } from './paises.service';
import { Pais, Paises } from './pais.interface';
export declare class PaisesController {
    private paisesService;
    constructor(paisesService: PaisesService);
    index(): Promise<Paises>;
    find(id: number): Promise<Pais>;
    create(object: Pais, req: any): Promise<void>;
    update(id: number, object: Pais, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
