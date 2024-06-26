import { LogsService } from './logs.service';
import { Log, Logs } from './log.interface';
export declare class LogsController {
    private logsService;
    constructor(logsService: LogsService);
    index(): Promise<Logs>;
    find(id: number): Promise<Log>;
    create(object: Log, req: any): Promise<void>;
    update(id: number, object: Log, req: any): Promise<void>;
    remove(id: number, req: any): Promise<import("typeorm").DeleteResult>;
}
