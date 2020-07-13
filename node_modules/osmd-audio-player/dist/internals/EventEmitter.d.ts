export declare class EventEmitter<T> {
    private subscribers;
    on(event: T, callback: (...args: any[]) => any): void;
    emit(event: T, ...args: any[]): void;
}
