import { MateriaisPoliciaisItens, MaterialPolicialItem } from './material-policial-item.interface';
import { MateriaisPoliciaisItensService } from './materiais-policiais-itens.service';
export declare class MateriaisPoliciaisItensController {
    private materiaisPoliciaisItensService;
    constructor(materiaisPoliciaisItensService: MateriaisPoliciaisItensService);
    index(): Promise<MateriaisPoliciaisItens>;
    find(id: number): Promise<MaterialPolicialItem>;
    create(object: MaterialPolicialItem, req: any): Promise<void>;
    update(id: number, object: MaterialPolicialItem, req: any): Promise<void>;
    remove(id: number, req: any): Promise<void>;
}
