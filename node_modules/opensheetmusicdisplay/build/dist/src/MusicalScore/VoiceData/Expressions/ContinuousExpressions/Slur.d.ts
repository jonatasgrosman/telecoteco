import { Note } from "../../Note";
export declare class Slur {
    constructor();
    private startNote;
    private endNote;
    get StartNote(): Note;
    set StartNote(value: Note);
    get EndNote(): Note;
    set EndNote(value: Note);
    startNoteHasMoreStartingSlurs(): boolean;
    endNoteHasMoreEndingSlurs(): boolean;
    isCrossed(): boolean;
    isSlurLonger(): boolean;
}
