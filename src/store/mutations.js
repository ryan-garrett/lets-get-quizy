export default {
  UPDATE_DIFFICULTY: function (state, payload) {
    state.difficulty = payload
  },
  UPDATE_GENRE: function (state, payload) {
    state.genre = payload
  },
  SET_EASY_VIDEOGAMES (state, questions) {
    state.easyVideoGames = questions
  },
  SET_MEDIUM_VIDEOGAMES (state, questions) {
    state.mediumVideoGames = questions
  },
  SET_HARD_VIDEOGAMES (state, questions) {
    state.hardVideoGames = questions
  },
  SET_EASY_MOVIES (state, questions) {
    state.easyMovies = questions
  },
  SET_MEDIUM_MOVIES (state, questions) {
    state.mediumMovies = questions
  },
  SET_HARD_MOVIES (state, questions) {
    state.hardMovies = questions
  },
  SET_EASY_SPORTS (state, questions) {
    state.easySports = questions
  },
  SET_MEDIUM_SPORTS (state, questions) {
    state.mediumSports = questions
  },
  SET_HARD_SPORTS (state, questions) {
    state.hardSports = questions
  },
  SET_EASY_ANIMALS (state, questions) {
    state.easyAnimals = questions
  },
  SET_MEDIUM_ANIMALS (state, questions) {
    state.mediumAnimals = questions
  },
  SET_HARD_ANIMALS (state, questions) {
    state.hardAnimals = questions
  },
  SET_EASY_HISTORY (state, questions) {
    state.easyHistory = questions
  },
  SET_MEDIUM_HISTORY (state, questions) {
    state.mediumHistory = questions
  },
  SET_HARD_HISTORY (state, questions) {
    state.hardHistory = questions
  }
}
