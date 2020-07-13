import { BoundingBox } from "./BoundingBox";
export declare class GraphicalObject {
    protected boundingBox: BoundingBox;
    get PositionAndShape(): BoundingBox;
    set PositionAndShape(value: BoundingBox);
}
