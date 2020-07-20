<template>
  <div>
    <div v-for="reference in references" :key="reference.ref">
      <p>
        <strong>{{reference.ref}}</strong>
        <br/>
        {{reference.comment}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["references"])
  }
};
</script> 

<style scoped>
</style>