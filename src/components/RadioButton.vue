<template>
  <li>
    <input type="radio" :id='value' :name='radioBtnName' :value='value' v-on:click="handleClick" />
    <label :for='value' :class="[iconType]">
      <slot name="slot1"></slot>
      <slot name="slot2"></slot>
    </label>
  </li>
</template>

<script>
export default {
  name: 'RadioButton',
  props: [
    'value',
    'radioBtnName',
    'iconType'
  ],
  data: function () {
    return {
      radioValue: ''
    }
  },
  methods: {
    // Method to action when radio button is clicked
    handleClick: function () {
      // When radio button is clicked, send radio data value back up to the parent
      this.$emit('radio-clicked', this.radioValue)
    }
  },
  beforeMount () {
    // When a radio button is clicked, assigned the passed prop value to its local data
    this.radioValue = this.value
  }
}
</script>

<style scoped lang="scss">
  li {
    width: 100%;
    margin-bottom: 20px;
  }

  li::marker {
    display: none;
  }

  label,input {
    display: block;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked+label,
  .Checked+label {
    background: $selected-colour;
    border-color: $selected-border-colour;
    color: $selected-text-colour;
  }

  label {
    font-family: $primary-font;
    font-size: $button-text-size;
    border-radius: $border-radius;
    border: $border-width $border-colour $border-style;
    background-color: $button-background-colour;
    padding: $button-padding;
    color: $button-colour;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  label:hover {
    background: $hover-colour;
    border-color: $hover-border-colour;
    color: $hover-text-colour;
  }

  .has-icon {
    display: flex;
    align-items: center;
  }

  // Styles for desktop view
  @media screen and (min-width: $desktop-breaking-point) {
    li {
      width: 25%;
      margin-bottom: 0;
    }
  }
</style>
