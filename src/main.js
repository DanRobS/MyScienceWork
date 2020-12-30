import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'bulma/css/bulma.css'
import './icons/icons.js'
import './assets/mystyles.scss'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
