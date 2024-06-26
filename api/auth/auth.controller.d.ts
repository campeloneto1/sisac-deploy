import { AuthService } from './auth.service';
import { Auth } from './auth.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signIn: Auth): Promise<any>;
    getProfile(req: any): any;
}
