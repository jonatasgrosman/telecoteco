import { Fraction } from "../../Common/DataObjects/Fraction";
import { Voice } from "./Voice";
import { SourceStaffEntry } from "./SourceStaffEntry";
import { Note } from "./Note";
import { LyricsEntry } from "./Lyrics/LyricsEntry";
import { TechnicalInstruction } from "./Instructions/TechnicalInstruction";
import { OrnamentContainer } from "./OrnamentContainer";
import { KeyInstruction } from "./Instructions/KeyInstruction";
import Dictionary from "typescript-collections/dist/lib/Dictionary";
import { Arpeggio } from "./Arpeggio";
/**
 * A [[VoiceEntry]] contains the notes in a voice at a timestamp.
 */
export declare class VoiceEntry {
    /**
     *
     * @param timestamp The relative timestamp within the source measure.
     * @param parentVoice
     * @param parentSourceStaffEntry
     * @param isGrace States whether the VoiceEntry has (only) grace notes.
     * @param graceNoteSlash States whether the grace note(s) have a slash (Acciaccatura, played before the beat)
     */
    constructor(timestamp: Fraction, parentVoice: Voice, parentSourceStaffEntry: SourceStaffEntry, isGrace?: boolean, graceNoteSlash?: boolean, graceSlur?: boolean);
    private parentVoice;
    private parentSourceStaffEntry;
    private timestamp;
    private notes;
    private isGrace;
    /** States whether the grace notes come after a main note (at end of measure). */
    private graceAfterMainNote;
    private graceNoteSlash;
    private graceSlur;
    private articulations;
    private technicalInstructions;
    private lyricsEntries;
    /** The Arpeggio consisting of this VoiceEntry's notes. Undefined if no arpeggio exists. */
    private arpeggio;
    private ornamentContainer;
    private wantedStemDirection;
    /** Stem direction specified in the xml stem element. */
    private stemDirectionXml;
    private stemDirection;
    /** Color of the stem given in XML. RGB Hexadecimal, like #00FF00. */
    private stemColorXml;
    /** Color of the stem currently set. RGB Hexadecimal, like #00FF00. */
    private stemColor;
    get ParentSourceStaffEntry(): SourceStaffEntry;
    get ParentVoice(): Voice;
    get Timestamp(): Fraction;
    set Timestamp(value: Fraction);
    get Notes(): Note[];
    get IsGrace(): boolean;
    set IsGrace(value: boolean);
    get GraceAfterMainNote(): boolean;
    set GraceAfterMainNote(value: boolean);
    get GraceNoteSlash(): boolean;
    set GraceNoteSlash(value: boolean);
    get GraceSlur(): boolean;
    set GraceSlur(value: boolean);
    get Articulations(): ArticulationEnum[];
    get TechnicalInstructions(): TechnicalInstruction[];
    get LyricsEntries(): Dictionary<number, LyricsEntry>;
    get Arpeggio(): Arpeggio;
    set Arpeggio(value: Arpeggio);
    get OrnamentContainer(): OrnamentContainer;
    set OrnamentContainer(value: OrnamentContainer);
    set WantedStemDirection(value: StemDirectionType);
    get WantedStemDirection(): StemDirectionType;
    set StemDirectionXml(value: StemDirectionType);
    get StemDirectionXml(): StemDirectionType;
    set StemDirection(value: StemDirectionType);
    get StemDirection(): StemDirectionType;
    get StemColorXml(): string;
    set StemColorXml(value: string);
    get StemColor(): string;
    set StemColor(value: string);
    static isSupportedArticulation(articulation: ArticulationEnum): boolean;
    hasTie(): boolean;
    hasSlur(): boolean;
    isStaccato(): boolean;
    isAccent(): boolean;
    getVerseNumberForLyricEntry(lyricsEntry: LyricsEntry): number;
    createVoiceEntriesForOrnament(voiceEntryWithOrnament: VoiceEntry, activeKey: KeyInstruction): VoiceEntry[];
    private createBaseVoiceEntry;
    private createAlteratedVoiceEntry;
}
export declare enum ArticulationEnum {
    accent = 0,
    strongaccent = 1,
    invertedstrongaccent = 2,
    staccato = 3,
    staccatissimo = 4,
    spiccato = 5,
    tenuto = 6,
    fermata = 7,
    invertedfermata = 8,
    breathmark = 9,
    caesura = 10,
    lefthandpizzicato = 11,
    naturalharmonic = 12,
    snappizzicato = 13,
    upbow = 14,
    downbow = 15,
    scoop = 16,
    plop = 17,
    doit = 18,
    falloff = 19,
    stress = 20,
    unstress = 21,
    detachedlegato = 22,
    otherarticulation = 23
}
export declare enum StemDirectionType {
    Undefined = -1,
    Up = 0,
    Down = 1,
    None = 2,
    Double = 3
}
