<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {

  components: { Header }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

@font-face {
  font-family: "Monument-Regular";
  font-style: "normal";
  font-weight: "normal";
  src: local("MonumentExtended-Regular");
  src: url("./assets/fonts/MonumentExtended-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "Monument-Bold";
  font-style: "normal";
  font-weight: "bold";
  src: local("MonumentExtended-Ultrabold");
  src: url("./assets/fonts/MonumentExtended-Ultrabold.woff2") format("woff2");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
} 

body {
  background: #F3F3F3;
}

</style>
