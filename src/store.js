import Vue from 'vue';
import Vuex from 'vuex';

import { mainmenu } from '@/store/mainmenu.module';
import { dashboard } from '@/store/dashboard.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    mainmenu,
    dashboard
  },
  state : {

  },
  mutations : {

  },
  actions : {

  }
});
