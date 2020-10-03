<template>
  <div>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <video loop="true" autoplay="autoplay" muted :src="require('../../public/assets/videos/home.mp4')">
        </video>
      </v-flex>
      <v-flex xs12>
        <img :src="require('../../public/assets/logo.png')" style="width:50%;max-width:300px;"/>
      </v-flex>

      <v-flex mb-4>
        <p
          class="subheading font-weight-regular" style="max-width: 800px;">
          Uma brincadeira com as mãos para aprender ritmos e leitura musical.</p>
      </v-flex>
    </v-layout>
    <v-btn rounded class="ma-2 btn-action" large color="primary darken-1" @click="selectFirstExercise()">
        <v-icon left>
          mdi-music-note-quarter
        </v-icon>
        Começar do início!
    </v-btn> 
    <v-btn rounded class="ma-2 btn-action" large outlined color="tertiary" @click="selectThirdPanel()">
        <v-icon left>
          mdi-music-note-eighth
        </v-icon>
        Quero um desafio!
    </v-btn> 
    <v-btn rounded class="ma-2 btn-action" large outlined color="tertiary" @click="selectFifthPanel()">
        <v-icon left>
          mdi-music-note-eighth
        </v-icon>
        Ritmos do Brasil!
    </v-btn>

    <br/>

    <v-btn class="ma-2" small fab outlined color="tertiary" @click="goToAbout()">
      <v-icon>
        mdi-information-variant
      </v-icon>
    </v-btn> 
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["selectExercise", 'goToAbout']),
    selectFirstExercise() {
      this.$store.commit("selectExercise", this.panels[0]['exercise_list'][0]);
    },
    selectThirdPanel() {
      this.$store.commit("selectExercise", this.panels[2]['exercise_list'][0]);
    },
    selectFifthPanel() {
      this.$store.commit("selectExercise", this.panels[4]['exercise_list'][0]);
    }
  },
  computed: {
    ...mapGetters(["panels"])
  }
};

</script> 

<style scoped>
video {
  width: 100%;
  max-width: 600px;
}
.btn-action {
  width: 221px;
  font-family: Neucha;
  font-size: 17px !important;
}
</style>