import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestionCircle, faHome, faGamepad, faFilm, faFutbol, faPaw, faLandmark, faDiceFive, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faQuestionCircle, faHome, faGamepad, faFilm, faFutbol, faPaw, faLandmark, faDiceFive, faExclamationCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
