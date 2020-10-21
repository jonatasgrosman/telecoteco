<template>
  <div>
    <v-list>
      <v-list-item @click="goToHello()">
        <v-list-item-content>
          <v-list-item-title>
            <img :src="require('../../public/assets/logo.png')" style="width:50%;max-width:300px;"/>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item @click="goToAbout()">
        <v-list-item-content>
          <v-list-item-title>
            Sobre este projeto
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-expansion-panels focusable flat>
      <v-expansion-panel v-for="panel in panels" :key="panel.id">
        <v-expansion-panel-header><b>{{panel.id}}</b> {{ panel.panel }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list dense>
            <v-list-item-group v-model="selectedExercise" color="primary">
              <v-list-item v-for="exercise in panel.exercise_list" :key="exercise.id" :value="exercise">
                <v-list-item-content>
                  <v-list-item-title>
                    {{panel.id}}.{{exercise.id}} {{exercise.title}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
    <v-list>
      <v-list-item @click="goToReferences()">
        <v-list-item-content>
          <v-list-item-title>
            Referências
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <br />
    <br />
    <div style="padding:15px">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><p style="font-size:12px;">O conteúdo deste site está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons - Atribuição  4.0 Internacional</a></p>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["selectExercise", 'goToReferences', 'goToHello', 'goToAbout'])
  },
  computed: {
    ...mapGetters(["panels"]),
    selectedExercise: {
      get() {
        return this.$store.state.selectedExercise;
      },
      set(value) {
        this.$store.commit("selectExercise", value);
        if(["xs", "sm"].indexOf(this.$vuetify.breakpoint.name) != -1){
          this.$store.commit("setAppDrawer", !this.$store.state.appDrawer);
        }
      }
    },
  }
};
</script> 

<style scoped>

.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
    flex: 0.1 1 auto;
}

.v-expansion-panels .v-expansion-panel{
  background-color:#FFF8E1 !important;
}

</style>