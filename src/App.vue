<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },

  created() {
    this.$store.dispatch("checkLogin");
  },
};
</script>

<style>
</style>
