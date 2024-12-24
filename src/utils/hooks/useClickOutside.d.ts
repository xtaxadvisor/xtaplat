import { type RefObject } from 'react';
type Handler = (event: MouseEvent | TouchEvent) => void;
export declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler): void;
export {};
