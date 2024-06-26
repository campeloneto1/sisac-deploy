import { ArmamentoTamanho, ArmamentosTamanhos } from './armamento-tamanho.interface';
import { ArmamentosTamanhosService } from './armamentos-tamanhos.service';
export declare class ArmamentosTamanhosController {
    private armamentosTamanhosService;
    constructor(armamentosTamanhosService: ArmamentosTamanhosService);
    index(): Promise<ArmamentosTamanhos>;
    find(id: number): Promise<ArmamentoTamanho>;
    create(object: ArmamentoTamanho, req: any): Promise<void>;
    update(id: number, object: ArmamentoTamanho, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
