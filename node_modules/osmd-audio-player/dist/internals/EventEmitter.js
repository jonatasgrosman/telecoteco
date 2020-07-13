export class EventEmitter {
    constructor() {
        this.subscribers = new Map();
    }
    on(event, callback) {
        if (!this.subscribers.get(event)) {
            this.subscribers.set(event, []);
        }
        this.subscribers.get(event).push(callback);
    }
    emit(event, ...args) {
        const subscribers = this.subscribers.get(event) || [];
        for (const sub of subscribers) {
            sub(...args);
        }
    }
}
