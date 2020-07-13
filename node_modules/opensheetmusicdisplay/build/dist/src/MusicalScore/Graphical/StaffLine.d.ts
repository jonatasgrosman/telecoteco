import { Staff } from "../VoiceData/Staff";
import { GraphicalLine } from "./GraphicalLine";
import { GraphicalStaffEntry } from "./GraphicalStaffEntry";
import { GraphicalObject } from "./GraphicalObject";
import { GraphicalMeasure } from "./GraphicalMeasure";
import { MusicSystem } from "./MusicSystem";
import { GraphicalLabel } from "./GraphicalLabel";
import { SkyBottomLineCalculator } from "./SkyBottomLineCalculator";
import { GraphicalOctaveShift } from "./GraphicalOctaveShift";
import { GraphicalSlur } from "./GraphicalSlur";
import { AbstractGraphicalExpression } from "./AbstractGraphicalExpression";
/**
 * A StaffLine contains the [[Measure]]s in one line of the music sheet
 * (one instrument, one line, until a line break)
 */
export declare abstract class StaffLine extends GraphicalObject {
    protected measures: GraphicalMeasure[];
    protected staffLines: GraphicalLine[];
    protected parentMusicSystem: MusicSystem;
    protected parentStaff: Staff;
    protected octaveShifts: GraphicalOctaveShift[];
    protected skyBottomLine: SkyBottomLineCalculator;
    protected lyricLines: GraphicalLine[];
    protected lyricsDashes: GraphicalLabel[];
    protected abstractExpressions: AbstractGraphicalExpression[];
    /** The staff height in units */
    private staffHeight;
    protected graphicalSlurs: GraphicalSlur[];
    constructor(parentSystem: MusicSystem, parentStaff: Staff);
    get Measures(): GraphicalMeasure[];
    set Measures(value: GraphicalMeasure[]);
    get StaffLines(): GraphicalLine[];
    set StaffLines(value: GraphicalLine[]);
    get NextStaffLine(): StaffLine;
    get LyricLines(): GraphicalLine[];
    get AbstractExpressions(): AbstractGraphicalExpression[];
    set AbstractExpressions(value: AbstractGraphicalExpression[]);
    set LyricLines(value: GraphicalLine[]);
    get LyricsDashes(): GraphicalLabel[];
    set LyricsDashes(value: GraphicalLabel[]);
    get ParentMusicSystem(): MusicSystem;
    set ParentMusicSystem(value: MusicSystem);
    get ParentStaff(): Staff;
    set ParentStaff(value: Staff);
    get SkyBottomLineCalculator(): SkyBottomLineCalculator;
    get SkyLine(): number[];
    get BottomLine(): number[];
    get OctaveShifts(): GraphicalOctaveShift[];
    set OctaveShifts(value: GraphicalOctaveShift[]);
    get StaffHeight(): number;
    get GraphicalSlurs(): GraphicalSlur[];
    /**
     * Add a given Graphical Slur to the staffline
     * @param gSlur
     */
    addSlurToStaffline(gSlur: GraphicalSlur): void;
    addActivitySymbolClickArea(): void;
    /**
     * True iff [[StaffLine]] belongs to an [[Instrument]] with more than one [[Staff]].
     * @returns {boolean}
     */
    isPartOfMultiStaffInstrument(): boolean;
    /**
     * Find the [[GraphicalStaffEntry]] closest to the given xPosition.
     * @param xPosition
     * @returns {GraphicalStaffEntry}
     */
    findClosestStaffEntry(xPosition: number): GraphicalStaffEntry;
}
