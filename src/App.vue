<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Ta-Tu-Ti-Tu-TÁ</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>

        <v-row align="center">
          <v-col>
            <Player/>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col>
            <Panels/>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  import Panels from './components/Panels.vue';
  import Player from './components/Player.vue';

  export default {
    components: {
      Panels,
      Player
    },
    data: () => ({}),
  }
</script> 

<style scoped>

</style>
