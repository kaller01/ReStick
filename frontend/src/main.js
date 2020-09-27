import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

if(localStorage.auth){
  console.log('yee boi')
  Axios.defaults.headers.common['Authorization'] = localStorage.auth;
  Axios.post("http://localhost:3000/auth/google/test").then((response)=>{
    console.log(response);
    if(response.status == 200){
      console.log("Logged in with google auth");
      axios.defaults.headers.common['Authorization'] = localStorage.auth;
    } else {
      localStorage.auth = null;
    }
  })
}
