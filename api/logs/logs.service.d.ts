import { LazyModuleLoader } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Log as LogEntity } from './log.entity';
import { Log as LogInterface, Logs as LogsInterface } from './log.interface';
export declare class LogsService {
    private logRepository;
    private lazyModuleLoader;
    constructor(logRepository: Repository<LogEntity>, lazyModuleLoader: LazyModuleLoader);
    index(): Promise<LogsInterface>;
    find(id: number): Promise<LogInterface | null>;
    create(object: LogInterface): Promise<void>;
    update(id: number, object: LogInterface): Promise<void>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
