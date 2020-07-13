<template>
  <div>
    <v-row>
      <v-col>
        <Score
          v-if="mounted"
          @osmdInit="osmdInit"
          @scoreLoaded="scoreLoaded"
          :score="selectedScore"
          :ready="pbEngineReady"
        />
      </v-col>
    </v-row>
    <v-row>

      <v-col>

        <v-slider
            v-if="pbEngine && pbEngine.iterationSteps > 0"
            :value="pbEngine.currentIterationStep"
            :min="0"
            :max="pbEngine.iterationSteps"
            :step="1"
            @input="val => pbEngine.jumpToStep(val)"
            class="progress-slider"
        ></v-slider>

        <inline-svg width="50" height="50" :style="{opacity: currentNote == 52 ? 100 : 0.2}" :src="require(`../../public/assets/icons/ta.svg`)" />
        <inline-svg width="50" height="50" :style="{opacity: currentNote == 60 ? 100 : 0.2}" :src="require(`../../public/assets/icons/ti.svg`)" />
        <inline-svg width="50" height="50" :style="{opacity: currentNote == 53 ? 100 : 0.2}" :src="require(`../../public/assets/icons/tu.svg`)" />

        <v-btn class="ma-2" tile outlined color="success" v-if="pbEngine.state !== 'PLAYING'" @click="pbEngine.play()">
          <v-icon left>mdi-play</v-icon> Play
        </v-btn>
        <v-btn class="ma-2" tile outlined color="warning" v-if="pbEngine.state === 'PLAYING'" @click="pbEngine.pause()">
          <v-icon left>mdi-pause</v-icon> Pause
        </v-btn>

        BPM
        <v-btn icon color="primary" @click="decreaseBpm()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{pbEngine.playbackSettings.bpm}}
        <v-btn icon color="primary" @click="increaseBpm()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        
      </v-col>
      
    </v-row>
  </div>
</template>

<script>

  import Score from "./Score";
  import { mapMutations, mapGetters } from 'vuex'
  import PlaybackEngine from 'osmd-audio-player';

  export default {
    computed: {
      ...mapGetters([
        'selectedExercise'
      ]),
      scoreInstruments() {
        return this.pbEngine.scoreInstruments;
      },
    },
    components: {
      Score,
    },
    methods: {
      ...mapMutations([
        'selectPanel',
        'selectExercise'
      ]),
      osmdInit(osmd) {
        console.log("OSMD init");
        this.osmd = osmd;
        //this.selectedScore = "https://opensheetmusicdisplay.github.io/demo/sheets/MuzioClementi_SonatinaOpus36No3_Part1.xml";
        this.selectedScore = 'assets/partituras/'+this.selectedExercise.short+'.musicxml';
      },
      async scoreLoaded() {
        console.log("Score loaded");
        if (this.osmd.sheet.title) this.scoreTitle = this.osmd.sheet.title.text;
        await this.pbEngine.loadScore(this.osmd);
        console.log("pbEngine ready");
        this.pbEngineReady = true;

        for (const instrument of this.pbEngine.scoreInstruments) {

          for (const subInstrument of instrument.subInstruments) {
            subInstrument.fixedKey = -1 // <midi-unpitched> bypass
          }
          
          for (const voice of instrument.Voices) {
            this.pbEngine.setInstrument(voice, 115)
          }
        }

        this.pbEngine.events.on('iteration', (value) => {
          console.log(value)
          this.currentNote = value[0].halfTone
        })
        this.pbEngine.events.on('state-change', (state) => {
          if(state == 'PAUSED' && this.pbEngine.currentIterationStep > this.pbEngine.iterationSteps){
            setTimeout(() => {
              this.pbEngine.stop()
              this.pbEngine.play()
            })
          }
        })

      },
      scoreChanged(scoreUrl) {
        setTimeout(() => {
          this.pbEngine.stop();
          this.selectedScore = scoreUrl;
          this.pbEngineReady = false;
        })
      },
      increaseBpm(){
        this.pbEngine.setBpm(this.pbEngine.playbackSettings.bpm + 10)
      },
      decreaseBpm(){
        this.pbEngine.setBpm(this.pbEngine.playbackSettings.bpm - 10)
      }
    },
    data: () => ({
      pbEngine: new PlaybackEngine(),
      pbEngineReady: false,
      selectedScore: null,
      osmd: null,
      scoreTitle: "",
      drawer: true,
      mounted: false,
      currentNote: null
    }),
    mounted() {
      setTimeout(() => {
        // This extra delay before rendering the score component seems to help occasional issues where the 
        // OSMD cursor img element gets detached from the DOM and doesn't show unless 
        // you refresh the page. A less pretty workaround until root cause is determined
        this.mounted = true;
      }, 200)
  }
  }
</script> 

<style scoped>
  
</style>
