import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import InlineSvg from 'vue-inline-svg';

Vue.config.productionTip = false

Vue.use(Vuex)

const content = require("../public/assets/conteudo.json")

const store = new Vuex.Store({
	state: {
		count: 0,
		isPlaying: false,
		isPaused: false,
		isInLoop: false,
		bpm: 60,
		panels: content['panels'],
		selectedPanelIndex: 0,
		selectedExerciseIndex: 0,
	},
	mutations: {
		increment: state => state.count++,
		decrement: state => state.count--,
		selectPanel (state, panelIndex) {
			state.selectedPanelIndex = panelIndex
			state.selectedExerciseIndex = 0
		},
		selectExercise (state, exerciseIndex) {
			state.selectedExerciseIndex = exerciseIndex
		},
	},
	getters: {
		panels: state => state.panels,
		selectedPanelIndex: state => state.selectedPanelIndex,
		selectedExerciseIndex: state => state.selectedExerciseIndex,
		selectedPanel: state => state.panels[state.selectedPanelIndex],
		selectedExercise: state => state.panels[state.selectedPanelIndex]['exercise_list'][state.selectedExerciseIndex],
  }
})

Vue.component('inline-svg', InlineSvg)

new Vue({
	vuetify,
	render: h => h(App),
	store
}).$mount('#app')
