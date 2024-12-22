import type { User } from './types';
export declare function storeUser(user: User): void;
export declare function getStoredUser(): User | null;
export declare function clearStoredUser(): void;
export declare function isValidStoredUser(user: User): boolean;
