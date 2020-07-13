var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ArticulationStyle } from "./NotePlaybackOptions";
import { midiInstruments } from "../midi/midiInstruments";
import supportedSoundfontInstruments from "./musyngkiteInstruments";
import * as Soundfont from "soundfont-player";
export class SoundfontPlayer {
    constructor() {
        this.players = new Map();
        this.instruments = midiInstruments
            .filter(i => supportedSoundfontInstruments.includes(this.getSoundfontInstrumentName(i[1])))
            .map(i => ({
            midiId: i[0],
            name: i[1],
            loaded: false,
        }));
    }
    init(audioContext) {
        this.audioContext = audioContext;
    }
    load(midiId) {
        return __awaiter(this, void 0, void 0, function* () {
            const instrument = this.instruments.find(i => i.midiId === midiId);
            if (!instrument) {
                throw new Error("SoundfontPlayer does not support midi instrument ID " + midiId);
            }
            if (this.players.has(midiId))
                return;
            const player = yield Soundfont.instrument(
            //@ts-ignore
            this.audioContext, this.getSoundfontInstrumentName(instrument.name));
            this.players.set(midiId, player);
        });
    }
    stop(midiId) {
        if (!this.players.has(midiId))
            return;
        this.players.get(midiId).stop();
    }
    schedule(midiId, time, notes) {
        this.verifyPlayerLoaded(midiId);
        this.applyDynamics(notes);
        this.players.get(midiId).schedule(time, notes);
    }
    applyDynamics(notes) {
        for (const note of notes) {
            if (note.articulation === ArticulationStyle.Staccato) {
                note.gain = Math.max(note.gain + 0.3, note.gain * 1.3);
                note.duration = Math.min(note.duration * 0.4, 0.4);
            }
        }
    }
    verifyPlayerLoaded(midiId) {
        if (!this.players.has(midiId))
            throw new Error("No soundfont player loaded for midi instrument " + midiId);
    }
    getSoundfontInstrumentName(midiName) {
        return midiName.toLowerCase().replace(/\s+/g, "_");
    }
}
