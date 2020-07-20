<template>
  <div>
    <v-row align="center">
      <v-col md="auto">
        <v-btn class="ma-2" tile outlined color="primary" @click="previousExercise()" :disabled="selectedExercise.isFirstExercise">
          <v-icon left>mdi-arrow-left</v-icon> Anterior
        </v-btn>
      </v-col>
      <v-col align="center"><h3>{{selectedExercise.panel.id}}.{{selectedExercise.id}} - {{selectedExercise.title}}</h3></v-col>
      <v-col md="auto" align="right">
        <v-btn class="ma-2" tile outlined color="primary" @click="nextExercise()" :disabled="selectedExercise.isLastExercise">
          Próximo <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col>
          <Score/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div style="margin:20px" v-html="selectedExercise.desc"></div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Score from "./Score.vue";

export default {
  computed: {
    ...mapGetters(["selectedExercise"])
  },
  components: {Score},
  methods: {
    ...mapMutations(['previousExercise', 'nextExercise'])
  }
};
</script> 

<style scoped>
</style>