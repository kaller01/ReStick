import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    getUser({commit}){
      axios.post("http://localhost:3000/auth/verify", {}, {
        headers: {
          'Authorization': localStorage.auth
        }
      }).then((response)=>{
        console.log(response.data);
        axios.defaults.headers.common['Authorization'] = localStorage.auth;
        commit('SET_USER', response.data)
      })
    }
  },
  modules: {
  }
})
