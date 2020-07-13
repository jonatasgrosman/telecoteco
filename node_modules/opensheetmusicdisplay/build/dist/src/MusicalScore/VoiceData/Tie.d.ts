import { Note } from "./Note";
import { Fraction } from "../../Common/DataObjects/Fraction";
import { Pitch } from "../../Common/DataObjects/Pitch";
/**
 * A [[Tie]] connects two notes of the same pitch and name, indicating that they have to be played as a single note.
 */
export declare class Tie {
    constructor(note: Note);
    private notes;
    get Notes(): Note[];
    get StartNote(): Note;
    get Duration(): Fraction;
    get Pitch(): Pitch;
    AddNote(note: Note): void;
}
