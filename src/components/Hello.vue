<template>
  <div>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../../public/assets/icons/logo_big8.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="mb-5">
          <!--<a href="https://grosmanjs.github.io/telecoteco/" target="_blank">telecote.co</a>-->
          telecote.co
        </h1>
        <p
          class="subheading font-weight-regular" style="max-width: 800px;">
          Uma brincadeira com as mãos para aprender ritmos e leitura musical.</p>
      </v-flex>
    </v-layout>
    <v-btn rounded class="ma-2" large color="primary darken-1" @click="selectFirstExercise()">
        <v-icon left>
          mdi-music-note-quarter
        </v-icon>
        Começar do início!
    </v-btn> 
    <v-btn rounded class="ma-2" large outlined color="tertiary" @click="selectThirdPanel()">
        <v-icon left>
          mdi-music-note-eighth
        </v-icon>
        Quero um desafio!
    </v-btn> 
    <v-btn rounded class="ma-2" large outlined color="tertiary" @click="selectFifthPanel()">
        <v-icon left>
          mdi-music-note-eighth
        </v-icon>
        Ritmos do Brasil !
    </v-btn>
    <v-col></v-col>
    <v-btn rounded class="ma-2" outlined color="tertiary" @click="goToAbout()">
      <v-icon left>
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
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
h1 {
  font-family: 'Chelsea Market', cursive;
  font-size: 60px;
}
</style>