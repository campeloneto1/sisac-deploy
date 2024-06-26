import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Veiculo as VeiculoEntity } from './veiculo.entity';
import { Veiculo as VeiculoInterface, Veiculos as VeiculosInterface } from './veiculo.interface';
import { User } from 'src/users/user.interface';
import { VeiculosOficinasService } from 'src/veiculos-oficinas/veiculos-oficinas.service';
import { VeiculosPoliciaisService } from 'src/veiculos-policiais/veiculos-policiais.service';
import { LogsService } from 'src/logs/logs.service';
export declare class VeiculosService {
    private veiculoRepository;
    private logsService;
    private veiculosOficinasService;
    private veiculosPoliciaisService;
    private lazyModuleLoader;
    constructor(veiculoRepository: Repository<VeiculoEntity>, logsService: LogsService, veiculosOficinasService: VeiculosOficinasService, veiculosPoliciaisService: VeiculosPoliciaisService, lazyModuleLoader: LazyModuleLoader);
    index(params: any, idUser: User): Promise<VeiculosInterface>;
    find(id: number, idUser: User): Promise<VeiculoInterface | null>;
    find2(id: number, idUser: User): Promise<VeiculoInterface | null>;
    create(object: VeiculoInterface, idUser: User): Promise<void>;
    update(id: number, object: VeiculoInterface, idUser: User): Promise<void>;
    remove(id: number, idUser: User): Promise<void>;
    disponiveis(params: any, idUser: User): Promise<VeiculosInterface>;
    trocaoleo(params: any, idUser: User): Promise<VeiculosInterface>;
    revisao(params: any, idUser: User): Promise<VeiculosInterface>;
    relatorio(object: any, idUser: User): Promise<VeiculosInterface>;
}
