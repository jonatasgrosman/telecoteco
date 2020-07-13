export default class StepQueue {
    constructor() {
        this.steps = [];
    }
    [Symbol.iterator]() {
        return this.steps.values();
    }
    createStep(tick) {
        let step = this.steps.find(s => s.tick === tick);
        if (!step) {
            step = { tick, notes: [] };
            this.steps.push(step);
        }
        return step;
    }
    addNote(tick, note) {
        var _a;
        const step = (_a = this.steps.find(s => s.tick === tick), (_a !== null && _a !== void 0 ? _a : this.createStep(tick)));
        step.notes.push(note);
    }
    delete(value) {
        const index = this.steps.findIndex(v => v.tick === value.tick);
        if (index != null)
            this.steps.splice(index, 1);
    }
    sort() {
        this.steps.sort((a, b) => a.tick - b.tick);
        return this;
    }
    getFirstEmptyTick() {
        return this.sort().steps.filter(s => !s.notes.length)[0].tick;
    }
}
