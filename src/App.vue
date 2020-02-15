<template>
  <div id="homepage">
    <Head />
    <router-view />
  </div>
</template>

<script>
import Head from './components/Head.vue'

export default {
  name: 'Homepage',
  components: {
    Head
  }
}
</script>

<style lang="scss">
body {
  color: white;
  background: black;
  a {
    color: inherit;
    text-decoration: inherit;
  }
}
</style>
