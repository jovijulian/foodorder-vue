<template>
  <div class="app"></div>
  <router-view></router-view>
  <Footer />
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>
<style></style>
