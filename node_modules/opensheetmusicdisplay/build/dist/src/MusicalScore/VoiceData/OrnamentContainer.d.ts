import { AccidentalEnum } from "../../Common/DataObjects/Pitch";
export declare class OrnamentContainer {
    constructor(ornament: OrnamentEnum);
    private ornament;
    private accidentalAbove;
    private accidentalBelow;
    get GetOrnament(): OrnamentEnum;
    get AccidentalAbove(): AccidentalEnum;
    set AccidentalAbove(value: AccidentalEnum);
    get AccidentalBelow(): AccidentalEnum;
    set AccidentalBelow(value: AccidentalEnum);
}
export declare enum OrnamentEnum {
    Trill = 0,
    Turn = 1,
    InvertedTurn = 2,
    DelayedTurn = 3,
    DelayedInvertedTurn = 4,
    Mordent = 5,
    InvertedMordent = 6
}
