import { PlacementEnum, AbstractExpression } from "../AbstractExpression";
import { MultiExpression } from "../MultiExpression";
import { Fraction } from "../../../../Common/DataObjects/Fraction";
export declare class ContinuousDynamicExpression extends AbstractExpression {
    constructor(dynamicType: ContDynamicEnum, placement: PlacementEnum, staffNumber: number, label?: string);
    private static listContinuousDynamicIncreasing;
    private static listContinuousDynamicDecreasing;
    private dynamicType;
    private startMultiExpression;
    private endMultiExpression;
    private startVolume;
    private endVolume;
    private staffNumber;
    private label;
    get DynamicType(): ContDynamicEnum;
    set DynamicType(value: ContDynamicEnum);
    get StartMultiExpression(): MultiExpression;
    set StartMultiExpression(value: MultiExpression);
    get EndMultiExpression(): MultiExpression;
    set EndMultiExpression(value: MultiExpression);
    get Placement(): PlacementEnum;
    set Placement(value: PlacementEnum);
    get StartVolume(): number;
    set StartVolume(value: number);
    get EndVolume(): number;
    set EndVolume(value: number);
    get StaffNumber(): number;
    set StaffNumber(value: number);
    get Label(): string;
    set Label(value: string);
    static isInputStringContinuousDynamic(inputString: string): boolean;
    getInterpolatedDynamic(currentAbsoluteTimestamp: Fraction): number;
    isWedge(): boolean;
    private setType;
}
export declare enum ContDynamicEnum {
    crescendo = 0,
    diminuendo = 1
}
