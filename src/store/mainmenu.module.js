/*
* isPinned
* groups
* brandText
*/

import config from '@/assets/main-menu-config';

const TOGGLE_IS_PINNED = "TOGGLE_IS_PINNED";
const SET_IS_PINNED    = "SET_IS_PINNED";
const SET_BADGE_TEXT   = "SET_BADGE_TEXT";

export const mainmenu = {
  namespaced : true,
  state : {
    brandText : "vuesr",
    isPinned  : true,
    groups    : config.groups,
    badges    : config.badges
  },
  actions : {

    [TOGGLE_IS_PINNED] : ({ commit, state }) => {
      commit(SET_IS_PINNED, !state.isPinned);
    },

    [SET_IS_PINNED] : ({ commit }, bool) => {
      commit(SET_IS_PINNED, bool);
    },

    [SET_BADGE_TEXT] : ({ commit, state }, badge) => {

    },

  },
  mutations : {

    [SET_IS_PINNED] : (state, bool) => {
      state.isPinned = bool;

    }

  }
}
