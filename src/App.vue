<template>
  <div id="app">
    <NavBar />
    <router-view
      style="
    margin-top: 75px;
"
    ></router-view>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
  mounted() {}
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "Lato", sans-serif;
}
</style>
