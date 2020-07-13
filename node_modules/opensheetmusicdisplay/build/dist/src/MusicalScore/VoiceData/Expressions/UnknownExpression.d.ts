import { PlacementEnum, AbstractExpression } from "./AbstractExpression";
import { TextAlignmentEnum } from "../../../Common/Enums/TextAlignment";
export declare class UnknownExpression extends AbstractExpression {
    constructor(label: string, placement: PlacementEnum, textAlignment: TextAlignmentEnum, staffNumber: number);
    private label;
    private textAlignment;
    private staffNumber;
    get Label(): string;
    get Placement(): PlacementEnum;
    set Placement(value: PlacementEnum);
    get StaffNumber(): number;
    set StaffNumber(value: number);
    get TextAlignment(): TextAlignmentEnum;
}
