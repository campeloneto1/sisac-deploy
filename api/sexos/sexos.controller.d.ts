import { SexosService } from './sexos.service';
import { Sexo, Sexos } from './sexo.interface';
export declare class SexosController {
    private sexosService;
    constructor(sexosService: SexosService);
    index(): Promise<Sexos>;
    find(id: number): Promise<Sexo>;
    create(object: Sexo, req: any): Promise<void>;
    update(id: number, object: Sexo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
