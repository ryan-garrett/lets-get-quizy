<template>
  <h1 class="title">{{text}}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: [
    'text'
  ]
}
</script>

<style scoped lang="scss">
  .title {
    color: $font-colour;
    font-family: $title-font;
    font-size: 2em;
    background-color: transparent;
  }
  // Styles for desktop view
  @media screen and (min-width: $desktop-breaking-point) {
    .title {
      font-size: 4em;
    }
  }
</style>
