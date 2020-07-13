import { Note } from "../VoiceData/Note";
import { Fraction } from "../../Common/DataObjects/Fraction";
import { KeyInstruction } from "../VoiceData/Instructions/KeyInstruction";
import { ClefInstruction } from "../VoiceData/Instructions/ClefInstruction";
import { OctaveEnum } from "../VoiceData/Expressions/ContinuousExpressions/OctaveShift";
import { Pitch } from "../../Common/DataObjects/Pitch";
import { GraphicalObject } from "./GraphicalObject";
import { GraphicalVoiceEntry } from "./GraphicalVoiceEntry";
import { GraphicalMusicPage } from "./GraphicalMusicPage";
/**
 * The graphical counterpart of a [[Note]]
 */
export declare class GraphicalNote extends GraphicalObject {
    constructor(note: Note, parent: GraphicalVoiceEntry, graphicalNoteLength?: Fraction);
    sourceNote: Note;
    graphicalNoteLength: Fraction;
    parentVoiceEntry: GraphicalVoiceEntry;
    numberOfDots: number;
    Transpose(keyInstruction: KeyInstruction, activeClef: ClefInstruction, halfTones: number, octaveEnum: OctaveEnum): Pitch;
    /**
     * Return the number of dots needed to represent the given fraction.
     * @param fraction
     * @returns {number}
     */
    private calculateNumberOfNeededDots;
    get ParentMusicPage(): GraphicalMusicPage;
}
