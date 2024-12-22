import type { User, AuthCredentials, RegisterData } from './types';
export declare function mockLogin(credentials: AuthCredentials): Promise<User>;
export declare function mockLogout(): Promise<void>;
export declare function mockRegister(data: RegisterData): Promise<void>;
