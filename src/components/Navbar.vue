<template>
  <nav class="navbar">
    <div>
      <slot name="slot1"></slot>
    </div>
    <div>
      <slot name="slot2"></slot>
    </div>
    <div>
      <slot name="slot3"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    height: 60px;
    padding: 10px 30px;
  }
</style>
