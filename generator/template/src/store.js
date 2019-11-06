import Vue from 'vue';
import Vuex from 'vuex';

import { mainmenu } from '@/store/mainmenu.module';
import { dashboard } from '@/store/dashboard.module';
import { topbar } from '@/store/topbar.module';
import { footer } from '@/store/footer.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    mainmenu,
    dashboard,
    topbar,
    footer
  },
  state : {

  },
  mutations : {

  },
  actions : {

  }
});
