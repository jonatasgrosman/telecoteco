<template>
  <div>
    <div class="score-progress" v-if="!isSheetMusicDisplayReady">
      <v-progress-circular :size="60" color="primary" indeterminate></v-progress-circular>
    </div>
    <div class="score" ref="scorediv" v-show="isSheetMusicDisplayReady"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isSheetMusicDisplayReady', 'selectedExercise'
    ]),
  },
  data: () => ({}),
  mounted() {
    this.$store.dispatch('createSheetMusicDisplay', this.$refs.scorediv)
  },
  watch: {
    '$store.state.selectedExercise': function(current, old) {
      if (current === old || !this.selectedExercise) return;
      this.$store.dispatch('loadScore')
    }
  }
};
</script>

<style scoped lang="scss">
.score {
  width: 100%;
  //-webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  //-moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  //box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
}
.score-progress {
  text-align: center;
}
</style>

<style lang="scss">
.score {
  img {
    z-index: 1 !important;
  }
}
</style>