var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PlaybackEngine from ".";
import { mock, instance, when } from "ts-mockito";
import { OpenSheetMusicDisplay, Cursor, MusicSheet, PlaybackSettings, Fraction } from "opensheetmusicdisplay";
import { PlaybackEvent, PlaybackState } from "./PlaybackEngine";
jest.mock("./PlaybackScheduler");
describe("PlaybackEngine", () => {
    describe("Events", () => {
        test("Playback state event on loadScore()", () => __awaiter(void 0, void 0, void 0, function* () {
            const acMock = createMockedAudioContext();
            const osmdMock = createOsmdMock();
            const stateCb = jest.fn();
            const pbEngine = new PlaybackEngine(acMock);
            pbEngine.on(PlaybackEvent.STATE_CHANGE, stateCb);
            yield pbEngine.loadScore(osmdMock);
            expect(stateCb).toHaveBeenCalledTimes(1);
            expect(stateCb).toHaveBeenCalledWith(PlaybackState.STOPPED);
        }));
        test("Playback state event on play()", () => __awaiter(void 0, void 0, void 0, function* () {
            const acMock = createMockedAudioContext();
            const osmdMock = createOsmdMock();
            const stateCb = jest.fn();
            const pbEngine = new PlaybackEngine(acMock);
            yield pbEngine.loadScore(osmdMock);
            pbEngine.on(PlaybackEvent.STATE_CHANGE, stateCb);
            yield pbEngine.play();
            expect(stateCb).toHaveBeenCalledTimes(1);
            expect(stateCb).toHaveBeenCalledWith(PlaybackState.PLAYING);
        }));
        test("Playback state event on stop()", () => __awaiter(void 0, void 0, void 0, function* () {
            const acMock = createMockedAudioContext();
            const osmdMock = createOsmdMock();
            const stateCb = jest.fn();
            const pbEngine = new PlaybackEngine(acMock);
            yield pbEngine.loadScore(osmdMock);
            yield pbEngine.play();
            pbEngine.on(PlaybackEvent.STATE_CHANGE, stateCb);
            yield pbEngine.stop();
            expect(stateCb).toHaveBeenCalledTimes(1);
            expect(stateCb).toHaveBeenCalledWith(PlaybackState.STOPPED);
        }));
        test("Playback state event on pause()", () => __awaiter(void 0, void 0, void 0, function* () {
            const acMock = createMockedAudioContext();
            const osmdMock = createOsmdMock();
            const stateCb = jest.fn();
            const pbEngine = new PlaybackEngine(acMock);
            yield pbEngine.loadScore(osmdMock);
            yield pbEngine.play();
            pbEngine.on(PlaybackEvent.STATE_CHANGE, stateCb);
            yield pbEngine.pause();
            expect(stateCb).toHaveBeenCalledTimes(1);
            expect(stateCb).toHaveBeenCalledWith(PlaybackState.PAUSED);
        }));
    });
});
function createMockedAudioContext() {
    return {
        currentTime: 0,
        suspend: jest.fn(() => __awaiter(this, void 0, void 0, function* () { })),
        resume: jest.fn(() => __awaiter(this, void 0, void 0, function* () { })),
    };
}
function createOsmdMock() {
    const mockedOsmd = mock(OpenSheetMusicDisplay);
    const mockedSheet = mock(MusicSheet);
    const mockedPlaybackSettings = mock(PlaybackSettings);
    const mockedFraction = mock(Fraction);
    const mockedCursor = mock(Cursor);
    //@ts-ignore
    when(mockedCursor.Iterator).thenReturn({ EndReached: true });
    when(mockedOsmd.cursor).thenReturn(instance(mockedCursor));
    when(mockedSheet.Instruments).thenReturn([]);
    when(mockedPlaybackSettings.rhythm).thenReturn(instance(mockedFraction));
    when(mockedSheet.SheetPlaybackSetting).thenReturn(instance(mockedPlaybackSettings));
    when(mockedOsmd.Sheet).thenReturn(instance(mockedSheet));
    return instance(mockedOsmd);
}
