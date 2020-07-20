import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import InlineSvg from 'vue-inline-svg';
import PlaybackEngine from "osmd-audio-player";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import axios from "axios";

Vue.config.productionTip = false

Vue.use(Vuex)

const content = require("../public/assets/conteudo.json")
content['panels'].forEach((panel, panelIndex) => {
	panel.id = panelIndex + 1
	panel['exercise_list'].forEach((exercise, exerciseIndex) => {
		exercise.isFirstExercise = exerciseIndex == 0
		exercise.isLastExercise = exerciseIndex == panel['exercise_list'].length - 1
		exercise.id = exerciseIndex + 1
		exercise.panel = panel
	})
})

const DEFAULT_BPM = 60
let playbackEngine = new PlaybackEngine()
playbackEngine.setBpm(DEFAULT_BPM)

const resetPlayback = (state) => {
	state.currentNote = null
	if (state.playbackEngine.sheet != null) {
		state.playbackEngine.stop()
	}
}

const store = new Vuex.Store({
	state: {
		pageType: 'HELLO', // HELLO, EXERCISE OR REFERENCES
		panels: content['panels'],
		references: content['references'],
		selectedExercise: null,
		score: null,
		sheetMusicDisplay: null,
		isSheetMusicDisplayReady: false,
		playbackEngine: playbackEngine,
		isPlaybackEngineReady: false,
		playbackEngineBpm: DEFAULT_BPM,
		currentNote: null,
	},
	mutations: {
		previousExercise(state) {
			const previousExerciseId = state.selectedExercise.id - 1
			if (state.selectedExercise.panel['exercise_list'][previousExerciseId - 1]) {
				state.selectedExercise = state.selectedExercise.panel['exercise_list'][previousExerciseId - 1]
			}
			resetPlayback(state)
		},
		nextExercise(state) {
			const nextExerciseId = state.selectedExercise.id + 1
			if (state.selectedExercise.panel['exercise_list'][nextExerciseId - 1]) {
				state.selectedExercise = state.selectedExercise.panel['exercise_list'][nextExerciseId - 1]
			}
			resetPlayback(state)
		},
		selectExercise(state, exercise) {
			state.pageType = 'EXERCISE'
			state.selectedExercise = exercise
			resetPlayback(state)
		},
		goToReferences(state) {
			state.selectedExercise = null
			state.pageType = 'REFERENCES'
			resetPlayback(state)
		},
		goToHello(state) {
			state.selectedExercise = null
			state.pageType = 'HELLO'
			resetPlayback(state)
		},
		stopPlaybackEngine(state) {
			resetPlayback(state)
		},
		invalidateSheetMusicDisplay(state) {
			resetPlayback(state)
			state.isSheetMusicDisplayReady = false
		},
		validateSheetMusicDisplay(state) {
			state.isSheetMusicDisplayReady = true
		},
		invalidatePlaybackEngine(state) {
			resetPlayback(state)
			state.isPlaybackEngineReady = false
		},
		validatePlaybackEngine(state) {
			state.isPlaybackEngineReady = true
		},
		increaseBpm(state) {
			state.playbackEngineBpm += 10
			state.playbackEngine.setBpm(state.playbackEngineBpm)
		},
		decreaseBpm(state) {
			if (state.playbackEngineBpm > 10) {
				state.playbackEngineBpm -= 10
				state.playbackEngine.setBpm(state.playbackEngineBpm)
			}
		},
		setCurrentNote(state, note) {
			state.currentNote = note
		},
		setSheetMusicDisplay(state, sheetMusicDisplay) {
			state.sheetMusicDisplay = sheetMusicDisplay
		},
	},
	actions: {
		async loadScore({ commit, state }) {

			commit('invalidatePlaybackEngine')

			commit('invalidateSheetMusicDisplay')
			let score = await axios.get('assets/partituras/' + state.selectedExercise.short + '.musicxml')
			await state.sheetMusicDisplay.load(score.data)
			commit('validateSheetMusicDisplay')
			await setTimeout(() => {}) // gambiarra, tentar usar o nexttick nesse caso
			await state.sheetMusicDisplay.render()

			await state.playbackEngine.loadScore(state.sheetMusicDisplay)

			for (const instrument of state.playbackEngine.scoreInstruments) {
				for (const subInstrument of instrument.subInstruments) {
					subInstrument.fixedKey = -1; // <midi-unpitched> bypass
				}

				for (const voice of instrument.Voices) {
					state.playbackEngine.setInstrument(voice, 115);
				}
			}

			state.playbackEngine.events.on("iteration", value => {
				if (value.length > 0) {
					commit('setCurrentNote', value[0].halfTone)
					setTimeout(()=>commit('setCurrentNote', null), 200)
				}else{
					commit('invalidatePlaybackEngine')
				}
			})

			commit('validatePlaybackEngine')
		},
		async createSheetMusicDisplay({ dispatch, commit }, element) {
			let openSheetMusicDisplay = new OpenSheetMusicDisplay(element, {
				followCursor: true,
				autoResize: false,
				drawTitle: false,
				drawSubtitle: false,
				drawLyricist: false,
				drawPartNames: false,
				//drawingParameters: "compact",
				// backend: "canvas"
			})
			commit('setSheetMusicDisplay', openSheetMusicDisplay)
			await dispatch('loadScore')
		},
	},
	getters: {
		pageType: state => state.pageType,
		panels: state => state.panels,
		references: state => state.references,
		selectedExercise: state => state.selectedExercise,
		score: state => state.score,
		sheetMusicDisplay: state => state.sheetMusicDisplay,
		isSheetMusicDisplayReady: state => state.isSheetMusicDisplayReady,
		playbackEngine: state => state.playbackEngine,
		isPlaybackEngineReady: state => state.isPlaybackEngineReady,
		playbackEngineBpm: state => state.playbackEngineBpm,
		currentNote: state => state.currentNote,
	}
})

Vue.component('inline-svg', InlineSvg)

new Vue({
	vuetify,
	render: h => h(App),
	store
}).$mount('#app')
