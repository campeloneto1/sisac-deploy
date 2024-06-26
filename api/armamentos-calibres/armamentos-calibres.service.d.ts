import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { ArmamentoCalibre as ArmamentoCalibreEntity } from './armamento-calibre.entity';
import { ArmamentoCalibre as ArmamentoCalibreInterface, ArmamentosCalibres as ArmamentosCalibresInterface } from './armamento-calibre.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class ArmamentosCalibresService {
    private armamentoCalibreRepository;
    private logsService;
    private lazyModuleLoader;
    constructor(armamentoCalibreRepository: Repository<ArmamentoCalibreEntity>, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<ArmamentosCalibresInterface>;
    find(id: number): Promise<ArmamentoCalibreInterface | null>;
    create(object: ArmamentoCalibreInterface, idUser: User): Promise<void>;
    update(id: number, object: ArmamentoCalibreInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
}
