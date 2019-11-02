/*
* isPinned
* groups
* brandText
*/

const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
const SET_DARK_MODE    = "SET_DARK_MODE";

export const dashboard = {
  namespaced : true,
  state : {
    isDarkmode : true
  },
  actions : {

    [TOGGLE_DARK_MODE] : ({ commit, state }) => {
      commit(SET_DARK_MODE, !state.isDarkmode);
    },

    [SET_DARK_MODE] : ({ commit }, bool) => {
      commit(SET_DARK_MODE, bool);
    }

  },
  mutations : {

    [SET_DARK_MODE] : (state, bool) => {
      state.isDarkmode = bool;
    }

  }
}
