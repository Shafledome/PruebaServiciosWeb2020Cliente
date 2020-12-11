<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {router} from './main.js'

export default {
  name: 'App',
  mounted() {
    router.push({name: 'home'})
  }
};

</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }

  @import "~bulma/sass/utilities/_all";

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
