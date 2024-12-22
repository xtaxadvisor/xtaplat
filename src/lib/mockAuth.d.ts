import { User } from '../types';
export declare function mockLogin(email: string, password: string): Promise<User>;
export declare function mockLogout(): Promise<void>;
export declare function mockCheckAuth(): Promise<User | null>;
export declare function mockRegister(userData: {
    name: string;
    email: string;
    password: string;
    role: string;
}): Promise<void>;
