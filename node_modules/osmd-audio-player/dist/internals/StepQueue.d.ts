import { Note } from "opensheetmusicdisplay/build/dist/src";
declare type ScheduledNotes = {
    tick: number;
    notes: Note[];
};
export default class StepQueue {
    steps: ScheduledNotes[];
    constructor();
    [Symbol.iterator](): IterableIterator<ScheduledNotes>;
    createStep(tick: number): ScheduledNotes;
    addNote(tick: number, note: Note): void;
    delete(value: ScheduledNotes): void;
    sort(): StepQueue;
    getFirstEmptyTick(): number;
}
export {};
