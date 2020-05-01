<template>
  <div class="home">
    <Navbar>
      <span slot="slot3">
        <HelperModal />
      </span>
    </Navbar>
    <Title text="Lets Get Quizy" />
    <img href="../assets/images/Group3.svg"/>
    <RadioButton radioBtnName='genreSelect' :value='option3' @radio-clicked="pickGenre" iconType="has-icon">
      <Icon
        :icon='option3Icon'
        modifier="navbar-icon--button"
        slot="slot1"
      />
      <span slot="slot2">{{ option3 }}</span>
    </RadioButton>
  </div>
</template>

<script>
// Import state from the store
import { mapActions } from 'vuex'
import Navbar from '../components/Navbar.vue'
import HelperModal from '../components/HelperModal.vue'
import Title from '../components/Title.vue'
import RadioButton from '../components/RadioButton.vue'
import Icon from '../components/Icon.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    HelperModal,
    Title,
    RadioButton,
    Icon
  },
  data () {
    return {
      option3: 'Sports',
      option3Icon: 'futbol'
    }
  },
  methods: {
    ...mapActions([
      'updateGenre'
    ]),
    pickGenre (event) {
      // Assign the passed radio value to the state.difficulty
      this.updateGenre(event)
    }
  }
}
</script>
