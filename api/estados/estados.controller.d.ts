import { EstadosService } from './estados.service';
import { Estado, Estados } from './estado.interface';
export declare class EstadosController {
    private estadosService;
    constructor(estadosService: EstadosService);
    index(): Promise<Estados>;
    find(id: number): Promise<Estado>;
    create(object: Estado, req: any): Promise<void>;
    update(id: number, object: Estado, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
    wherePais(id: number): Promise<Estados>;
}
