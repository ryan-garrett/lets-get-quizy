<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    background-image: $background-gradient;
    background-color: $background-colour;
    height: 100vh;
  }
  #app {
    font-family: $primary-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
