<template>
  <div>
    <font-awesome-icon :icon="icon" :class="['navbar-icon', modifier]" />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'exclamation-circle'
    },
    modifier: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
  .navbar-icon {
    color: #000;
    font-size: 2.5em;
    &--button {
      font-size: 1.5em;
      margin-right: 25px;
    }
  }
</style>
