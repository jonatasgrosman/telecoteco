<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app overflow width="320">
      <Menu />
    </v-navigation-drawer>

    <v-app-bar app extended>
      <v-row>
        <v-col md="auto">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
        <Player />
        <!--<v-col align="right">
          <inline-svg
            style="margin-left:10px; cursor:pointer;"
            width="100"
            height="50"
            :src="require(`../public/assets/icons/logo_big8.svg`)"
            @click="goToHello()"
          />
        </v-col>-->
      </v-row>
      
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center">
          <v-col>
            <Hello v-if="pageType == 'HELLO'"/>
            <Exercise v-if="pageType == 'EXERCISE'"/>
            <References v-if="pageType == 'REFERENCES'"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!--<v-footer inset app>
      
    </v-footer>-->
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Hello from "./components/Hello.vue";
import Player from "./components/Player.vue";
import Menu from "./components/Menu.vue";
import Exercise from "./components/Exercise.vue";
import References from "./components/References.vue";

export default {
  methods: {
    ...mapMutations(['goToHello'])
  },
  computed: {
    ...mapGetters(["pageType"]),
  },
  components: {
    Hello,
    Exercise,
    Player,
    Menu,
    References
  },
  data: () => ({
    drawer: null
  })
};
</script> 

<style scoped>
</style>
