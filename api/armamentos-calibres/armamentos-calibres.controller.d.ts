import { ArmamentoCalibre, ArmamentosCalibres } from './armamento-calibre.interface';
import { ArmamentosCalibresService } from './armamentos-calibres.service';
export declare class ArmamentosCalibresController {
    private armamentosCalibresService;
    constructor(armamentosCalibresService: ArmamentosCalibresService);
    index(): Promise<ArmamentosCalibres>;
    find(id: number): Promise<ArmamentoCalibre>;
    create(object: ArmamentoCalibre, req: any): Promise<void>;
    update(id: number, object: ArmamentoCalibre, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
