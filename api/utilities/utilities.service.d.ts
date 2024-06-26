import { LazyModuleLoader } from '@nestjs/core';
export declare class UtilitiesService {
    private lazyModuleLoader;
    constructor(lazyModuleLoader: LazyModuleLoader);
    generateSalt(length: number): Promise<string>;
    hashString(pass: string): Promise<string>;
    compareString(text: string, hash: string): Promise<boolean>;
}
