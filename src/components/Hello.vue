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
        <h1 class="display-2 font-weight-bold mb-3">
          <!--<a href="https://grosmanjs.github.io/telecoteco/" target="_blank">telecote.co</a>-->
          telecote.co
        </h1>
        <p
          class="subheading font-weight-regular" style="max-width: 800px;">
          Uma brincadeira com as mãos, para aprender ritmos e leitura musical. Clique em um dos <b>botões abaixo</b> para começar conforme seu grau de experiência ou escolha o exercício onde parou da última vez no <b>menu à esquerda</b>.</p>
      </v-flex>
    </v-layout>
    <v-btn class="ma-2" large color="primary darken-1" @click="selectFirstExercise()">
        <v-icon left>
          mdi-music-note-quarter
        </v-icon>
        Começar do início!
    </v-btn> 
    <v-btn class="ma-2" large color="secondary" @click="selectThirdPanel()">
        <v-icon left>
          mdi-music-note-eighth
        </v-icon>
        Quero um desafio!
    </v-btn> 
    <v-btn class="ma-2" large color="secondary" @click="selectFifthPanel()">
        <v-icon left>
          mdi-music-note-sixteenth
        </v-icon>
        Ritmos do Brasil!
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["selectExercise"]),
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
</style>