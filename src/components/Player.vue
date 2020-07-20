<template>
  <v-row align="center" justify="center">
    <v-col style="text-align: right;">
      <inline-svg
        width="40"
        height="40"
        :class="currentNote === 52 ? 'enabledNote' : 'disabledNote'"
        :src="require(`../../public/assets/icons/ta.svg`)"
      />
      <inline-svg
        width="40"
        height="40"
        :class="currentNote === 60 ? 'enabledNote' : 'disabledNote'"
        :src="require(`../../public/assets/icons/ti.svg`)"
      />
      <inline-svg
        width="35"
        height="35"
        :class="currentNote === 53 ? 'enabledNote' : 'disabledNote'"
        :src="require(`../../public/assets/icons/tu.svg`)"
      />
    </v-col>
    <v-col md="auto" style="text-align: center;">
      <v-btn
        color="success"
        fab
        large
        outlined
        :disabled="!selectedExercise"
        @click="playbackEngine.play()"
        v-if="playbackEngine.state !== 'PLAYING'"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn
        color="error"
        fab
        large
        outlined
        :disabled="!selectedExercise"
        @click="playbackEngine.stop()"
        v-if="playbackEngine.state === 'PLAYING'"
      >
        <v-icon>mdi-stop</v-icon>
      </v-btn>
    </v-col>

    <v-col>
      <strong>BPM</strong>
      <v-btn icon color="primary" @click="decreaseBpm()" :disabled="!selectedExercise">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      {{playbackEngine.playbackSettings.bpm}}
      <v-btn icon color="primary" @click="increaseBpm()" :disabled="!selectedExercise">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['playbackEngine', 'currentNote', 'selectedExercise'])
  },
  methods: {
    ...mapMutations(['increaseBpm', 'decreaseBpm'])
  },
};
</script> 

<style scoped>
.enabledNote {
  opacity: 0.8;
}
.disabledNote {
  opacity: 0.2;
}
</style>
