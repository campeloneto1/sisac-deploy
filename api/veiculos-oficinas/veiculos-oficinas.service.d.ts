import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { Repository } from 'typeorm';
import { VeiculoOficina as VeiculoOficinaEntity } from './veiculo-oficina.entity';
import { VeiculoOficina as VeiculoOficinaInterface, VeiculosOficinas as VeiculosOficinasInterface } from './veiculo-oficina.interface';
import { VeiculosService } from 'src/veiculos/veiculos.service';
import { LogsService } from 'src/logs/logs.service';
export declare class VeiculosOficinasService {
    private veiculoOficinaRository;
    private veiculosService;
    private logsService;
    private lazyModuleLoader;
    constructor(veiculoOficinaRository: Repository<VeiculoOficinaEntity>, veiculosService: VeiculosService, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<VeiculosOficinasInterface>;
    find(id: number, idUser: User): Promise<VeiculoOficinaInterface | null>;
    create(object: VeiculoOficinaInterface, idUser: User): Promise<void>;
    update(id: number, object: VeiculoOficinaInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    receber(object: any, idUser: User): Promise<void>;
    emmanutencao(params: any, idUser: User): Promise<VeiculosOficinasInterface>;
    relatorio(object: any, idUser: User): Promise<VeiculosOficinasInterface>;
}
