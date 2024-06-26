/// <reference types="multer" />
export declare class UtilitiesController {
    uploadFile(body: any, file: Express.Multer.File): {
        statusCode: number;
        data: string;
    };
}
