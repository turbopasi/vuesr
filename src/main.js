import Vue from 'vue'
import App from './App.vue'

/* vue-router & vuex store */
import router from './router'
import store from './store'

/* PWA Support added by vue/cli */
import './registerServiceWorker'

/* import styles */
import './assets/styles.scss'
import 'vue-material-design-icons/styles.css'
import './icons'


/* Add axios as Vue prototype */
// Vue.prototype.$http = ... ;

Vue.config.productionTip = false

new Vue({

  /* bind router to vue instance this.$router */
  router,

  /* bind store to vue instance this.$store */
  store,

  /* ... */
  render: h => h(App)
}).$mount('#app')
