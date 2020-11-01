import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false,
    stacks: false,
    color: "",
    loading: true,
    stack: false,
    isLoggedIn: false,
    host: "http://localhost:3000"
    // host: ""
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_STACKS(state, stacks) {
      state.stacks = stacks;
    },
    SET_COLOR(state, value) {
      switch (value) {
        case 2:
          state.color = "yellow darken-3";
        case 1:
          state.color = "orange darken-3";
        case 0:
          state.color = "deep-orange darken-3";
        default:
          state.color = "blue-grey";
      }
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_STACK(state, stack) {
      state.stack = stack;
    },
    SET_ISLOGGEDIN(state, value){
      state.isLoggedIn = value;
    }
  },
  actions: {
    getUser({ commit, dispatch, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            state.host + "/auth/verify",
            {},
            {
              headers: {
                Authorization: localStorage.auth,
              },
            }
          )
          .then((response) => {
            axios.defaults.headers.common["Authorization"] = localStorage.auth;
            commit("SET_USER", response.data);
            resolve(response.data);
          }).catch((error)=>{
            console.log(error)
            reject();
          })
      });
    },
    getStacks({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get(state.host + "/api/stacks").then((response) => {
          commit("SET_STACKS", response.data);
          resolve(response.data);
        });
      });
    },
    setColor: ({ commit }, value) => {
      commit("SET_COLOR", value);
    },
    init({ commit, dispatch }) {
      // Could also be async and use await instead of return
      return new Promise((resolve, reject) => {
        commit("SET_LOADING", true);
        dispatch("getUser").then((response) => {
          console.log("First resolved", response);
          commit("SET_ISLOGGEDIN", true)
          dispatch("getStacks").then((response) => {
            console.log("2nd resolved", response);
            resolve();
            commit("SET_LOADING", false);
          });
        }).catch((error)=>{
          reject();
        });
      });
    },
    getStack({ commit, state }, id) {
      if(!id) id = state.stack._id;
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        axios.get(state.host + "/api/stacks/" + id).then((response) => {
          commit("SET_STACK", response.data);
          commit("SET_LOADING", false);
          resolve();
        }).catch((error)=>{
          console.log(error)
        })
      });
    },
    clearUser({commit}){
      commit("SET_USER", false);
      commit("SET_STACKS", false)
      commit("SET_STACK", false)
    }
  },
  modules: {},
});
