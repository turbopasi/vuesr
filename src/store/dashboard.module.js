/*
* isPinned
* groups
* brandText
*/

const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
const SET_DARK_MODE    = "SET_DARK_MODE";

export const mainmenu = {
  namespaced : true,
  state : {
    darkmode : false
  },
  actions : {

    [TOGGLE_DARK_MODE] : ({ commit, state }) => {
      commit(SET_DARK_MODE, !state.darkmode);
    },

    [SET_IS_PINNED] : ({ commit }, bool) => {
      commit(SET_DARK_MODE, bool);
    }

  },
  mutations : {

    [SET_DARK_MODE] : (state, bool) => {
      state.darkmode = bool;
    }

  }
}
