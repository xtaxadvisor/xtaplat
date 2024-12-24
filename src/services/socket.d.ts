declare class SocketService {
    private socket;
    private readonly API_URL;
    connect(consultationId: string): any;
    disconnect(): void;
    getSocket(): any;
    emit(event: string, data: any): void;
    on(event: string, callback: (data: any) => void): void;
    off(event: string, callback?: (data: any) => void): void;
}
export declare const socketService: SocketService;
export {};
