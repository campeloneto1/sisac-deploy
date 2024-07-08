import { LazyModuleLoader } from '@nestjs/core';
import { User } from 'src/users/user.interface';
import { VeiculosService } from 'src/veiculos/veiculos.service';
import { Repository } from 'typeorm';
import { VeiculoPolicial as VeiculoPolicialEntity } from './veiculo-policial.entity';
import { VeiculoPolicial as VeiculoPolicialInterface, VeiculosPoliciais as VeiculosPoliciaisInterface } from './veiculo-policial.interface';
import { LogsService } from 'src/logs/logs.service';
export declare class VeiculosPoliciaisService {
    private veiculoPolicialRository;
    private veiculosService;
    private logsService;
    private lazyModuleLoader;
    constructor(veiculoPolicialRository: Repository<VeiculoPolicialEntity>, veiculosService: VeiculosService, logsService: LogsService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<VeiculosPoliciaisInterface>;
    find(id: number, idUser: User): Promise<VeiculoPolicialInterface>;
    create(object: VeiculoPolicialInterface, idUser: User): Promise<void>;
    update(id: number, object: VeiculoPolicialInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    receber(object: any, idUser: User): Promise<void>;
    emprestados(params: any, idUser: User): Promise<VeiculosPoliciaisInterface>;
    emprestado(params: any, idUser: User): Promise<VeiculoPolicialInterface>;
    wherePolicial(id: number, idUser: User): Promise<VeiculosPoliciaisInterface>;
    relatorio(object: any, idUser: User): Promise<VeiculosPoliciaisInterface>;
}
