<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <div class="modal-header" id="modalTitle">
          How to get Quizy?
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
        </div>
        <div class="modal-body" id="modalDescription">
          How to Text
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-green" @click="close" aria-label="Close modal" >
            Close me!
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HelpModal',
  methods: {
    // Method to close the modal
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    display: flex;
    flex-direction: column;
    width: 50%;
    background: #FFFFFF;
    color: black;
    overflow-x: auto;

    &-header {
      border: 1px red solid;
      display: flex;
      justify-content: space-between;
      padding: 15px;
    }
    &-body {
      border: 1px green solid;
      padding: 15px;
      text-align: left;
    }
    &-footer {
      border: 1px brown solid;
      padding: 15px;
    }
  }

</style>
