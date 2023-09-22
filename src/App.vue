<template>
  <div class="wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";

</script>

<style lang="scss">
html,
body {
  height: 100%;
}

.wrapper {
  position: relative;
  min-height: 100vh;
}
</style>