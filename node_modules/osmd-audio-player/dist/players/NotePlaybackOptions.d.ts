export declare enum ArticulationStyle {
    None = 0,
    Staccato = 1,
    Legato = 2
}
export interface NotePlaybackStyle {
    articulation: ArticulationStyle;
}
export interface NotePlaybackInstruction extends NotePlaybackStyle {
    note: number;
    gain: number;
    duration: number;
}
