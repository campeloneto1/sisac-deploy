import { ModelosService } from './modelos.service';
import { Modelo, Modelos } from './modelo.interface';
export declare class ModelosController {
    private modelosService;
    constructor(modelosService: ModelosService);
    index(): Promise<Modelos>;
    find(id: number): Promise<Modelo>;
    create(object: Modelo, req: any): Promise<void>;
    update(id: number, object: Modelo, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    whereMarca(id: number): Promise<Modelos>;
}
