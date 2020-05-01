<template>
 <div>
   <!-- Modal button -->
  <a type="button" class="btn" @click="showHelpModal">
    <Icon
      icon="question-circle"
    />
  </a>
  <!-- Modal Template -->
  <HelperTemplate
    v-show="isModalVisible"
    @close="closeHelpModal"
  />
 </div>
</template>

<script>
// Import Components
import HelperTemplate from '../views/modals/HelperTemplate.vue'
import Icon from './Icon.vue'

export default {
  name: 'HelperModal',
  components: {
    HelperTemplate,
    Icon
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showHelpModal () {
      this.isModalVisible = true
    },
    closeHelpModal () {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
  a {
    cursor: pointer;
  }
</style>
