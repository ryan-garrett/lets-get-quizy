import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default {
  updateDifficulty: function ({ commit }, payload) {
    commit('UPDATE_DIFFICULTY', payload)
  },
  updateGenre: function ({ commit }, payload) {
    commit('UPDATE_GENRE', payload)
  },
  getEasyVideoGames ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_EASY_VIDEOGAMES', questions)
      })
  },
  getMediumVideoGames ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_MEDIUM_VIDEOGAMES', questions)
      })
  },
  getHardVideoGames ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=15&difficulty=hard')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_HARD_VIDEOGAMES', questions)
      })
  },
  getEasyMovies ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_EASY_MOVIES', questions)
      })
  },
  getMediumMovies ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_MEDIUM_MOVIES', questions)
      })
  },
  getHardMovies ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=11&difficulty=hard')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_HARD_MOVIES', questions)
      })
  },
  getEasySports ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_EASY_SPORTS', questions)
      })
  },
  getMediumSports ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_MEDIUM_SPORTS', questions)
      })
  },
  getHardSports ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_HARD_SPORTS', questions)
      })
  },
  getEasyAnimals ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_EASY_ANIMALS', questions)
      })
  },
  getMediumAnimals ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_MEDIUM_ANIMALS', questions)
      })
  },
  getHardAnimals ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=27&difficulty=hard')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_HARD_ANIMALS', questions)
      })
  },
  getEasyHistory ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_EASY_HISTORY', questions)
      })
  },
  getMediumHistory ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_MEDIUM_HISTORY', questions)
      })
  },
  getHardHistory ({ commit }) {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=23&difficulty=hard')
      .then(r => r.data)
      .then(questions => {
        // Call SET_COINS to store API data in state
        commit('SET_HARD_HISTORY', questions)
      })
  }
}
