import { MarcasService } from './marcas.service';
import { Marca, Marcas } from './marca.interface';
export declare class MarcasController {
    private marcasService;
    constructor(marcasService: MarcasService);
    index(): Promise<Marcas>;
    marcasArmamentos(): Promise<Marcas>;
    marcasLogisica(): Promise<Marcas>;
    marcasTransporte(): Promise<Marcas>;
    find(id: number): Promise<Marca>;
    create(object: Marca, req: any): Promise<void>;
    update(id: number, object: Marca, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
