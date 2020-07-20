<template>

  <div>

    <v-layout
      text-xs-center
      wrap
    >
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
        <p class="subheading font-weight-regular">
          Uma brincadeira com as mãos, para aprender ritmos e leitura musical. Clique em algum exercício à esquerda para começar.
        </p>
      </v-flex>

      
    </v-layout>
      <!-- <v-btn large color="primary" @click="panels.id =0; selectExercise(0);">
        <v-icon left>
          mdi-music
        </v-icon>
        Começar !
      </v-btn> -->

  </div>
  
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["selectExercise", 'goToReferences', 'goToHello'])
  },
  computed: {
    ...mapGetters(["panels"]),
    selectedExercise: {
      get() {
        return this.$store.state.selectedExercise;
      },
      set(value) {
        this.$store.commit("selectExercise", value);
      }
    },
  }
};

</script> 

<style scoped>
</style>