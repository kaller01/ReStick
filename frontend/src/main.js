import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
// Axios.defaults.headers.common['Authorization'] = localStorage.auth;

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

store.dispatch('getUser');