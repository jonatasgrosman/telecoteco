<template>
  <div>
    <v-row align="center">
      <v-col md="auto">
        <v-btn rounded class="ma-2" outlined color="primary" @click="previousExercise()" :disabled="selectedExercise.isFirstExercise">
          <v-icon left>mdi-arrow-left</v-icon> <b v-if="windowWidth > 650">Anterior</b>
        </v-btn>
        <button v-shortkey="['arrowleft']" @shortkey="previousExercise()"></button>
      </v-col>
      <v-col align="center"><h3>{{selectedExercise.panel.id}}.{{selectedExercise.id}} - {{selectedExercise.title}}</h3></v-col>
      <v-col md="auto" align="right">
        <v-btn rounded class="ma-2" outlined color="primary" @click="nextExercise()" :disabled="selectedExercise.isLastExercise">
          <b v-if="windowWidth > 650">Próximo</b> <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
        <button v-shortkey="['arrowright']" @shortkey="nextExercise()"></button>
      </v-col>
    </v-row>
    <v-card elevation="0">
      <v-row>
        <v-col>
          <Score/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div style="max-width: 1000px; margin-left: 30px; margin-right: 30px;" v-html="selectedExercise.desc"></div>
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
    ...mapMutations(['previousExercise', 'nextExercise']),      
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
};
</script> 

<style scoped>
</style>