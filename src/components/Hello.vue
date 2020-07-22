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
          class="subheading font-weight-regular"
        >Uma brincadeira com as mãos, para aprender ritmos e leitura musical. Clique no botão abaixo para começar do início ou escolha o exercício onde parou da última vez no menu à esquerda.</p>
      </v-flex>
    </v-layout>
    <v-btn large color="primary" @click="selectFirstExercise()">
        <v-icon left>
          mdi-music-note-quarter
        </v-icon>
        Começar !
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
    }
  },
  computed: {
    ...mapGetters(["panels"])
  }
};

</script> 

<style scoped>
</style>