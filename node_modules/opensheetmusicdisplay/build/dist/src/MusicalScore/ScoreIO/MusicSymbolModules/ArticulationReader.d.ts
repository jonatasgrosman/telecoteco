import { VoiceEntry } from "../../VoiceData/VoiceEntry";
import { IXmlElement } from "../../../Common/FileIO/Xml";
export declare class ArticulationReader {
    private getAccEnumFromString;
    /**
     * This method adds an Articulation Expression to the currentVoiceEntry.
     * @param node
     * @param currentVoiceEntry
     */
    addArticulationExpression(node: IXmlElement, currentVoiceEntry: VoiceEntry): void;
    /**
     * This method add a Fermata to the currentVoiceEntry.
     * @param xmlNode
     * @param currentVoiceEntry
     */
    addFermata(xmlNode: IXmlElement, currentVoiceEntry: VoiceEntry): void;
    /**
     * This method add a technical Articulation to the currentVoiceEntry.
     * @param xmlNode
     * @param currentVoiceEntry
     */
    addTechnicalArticulations(xmlNode: IXmlElement, currentVoiceEntry: VoiceEntry): void;
    /**
     * This method adds an Ornament to the currentVoiceEntry.
     * @param ornamentsNode
     * @param currentVoiceEntry
     */
    addOrnament(ornamentsNode: IXmlElement, currentVoiceEntry: VoiceEntry): void;
}
