<template>
  <v-card>

      <v-tabs v-model="selectedPanelIndex" background-color="blue-grey darken-1" dark show-arrows>
          <v-tab v-for="panel in panels" :key="panel.panel">
              {{ panel.panel }}
          </v-tab>
      </v-tabs>

      <v-tabs-items v-model="selectedPanelIndex"> 
          <v-tab-item v-for="panel in panels" :key="panel.panel">

              <v-card flat>

              <v-card>

                  <v-tabs v-model="selectedExerciseIndex" vertical color="blue-grey darken-1">
                  <v-tab v-for="exercise in selectedPanel.exercise_list" :key="exercise.short">
                      {{ exercise.title }}
                  </v-tab>
                  <v-tabs-items v-model="selectedExerciseIndex"> 
                      <v-tab-item v-for="exercise in selectedPanel.exercise_list" :key="exercise.short">
                      
                      <v-card flat>

                          <v-card-text>
                            <div v-html="exercise.desc"></div>
                          </v-card-text>
                          
                      </v-card>

                      </v-tab-item>
                  </v-tabs-items>
                  
                  </v-tabs>

              </v-card>

              </v-card>

          </v-tab-item>
      </v-tabs-items>

  </v-card>

</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    props: {},
    computed: {
      ...mapGetters([
        'panels',
        'selectedPanel',
        'selectedExercise'
      ],
    ),
      selectedPanelIndex: {
        get () {
          return this.$store.state.selectedPanelIndex
        },
        set (value) {
          this.$store.commit('selectPanel', value)
        }
      },
      selectedExerciseIndex: {
        get () {
          return this.$store.state.selectedExerciseIndex
        },
        set (value) {
          this.$store.commit('selectExercise', value)
        }
      }
    },
    components: {},
    methods: {},
    data: () => ({}),
    mounted() {}
  }
</script> 

<style scoped>

</style>