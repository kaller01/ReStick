import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
const storeInit = store.dispatch("init");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function() {
      return import(/* webpackChunkName: "home" */ "../views/Home.vue");
    },
  },
  {
    path: "/account",
    name: "Account",
    component: function() {
      return import(/* webpackChunkName: "account" */ "../views/Account.vue");
    },
  },
  {
    path: "/stacks",
    name: "Stacks",
    component: function() {
      return import(/* webpackChunkName: "stacks" */ "../views/Stacks.vue");
    },
  },
  {
    name: "Stack",
    path: "/stacks/:stackId",
    component: function() {
      return import(/* webpackChunkName: "stack" */ "../views/Stack.vue");
    },
    beforeEnter(to, from, next) {
      store.dispatch("getStack", to.params.stackId).then(next);
    },
  },
  {
    path: "/spaced",
    name: "Spaced repetition",
    component: function() {
      return import(/* webpackChunkName: "spaced" */ "../views/Spaced.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next();
    store.commit("SET_LOADING", false);
  } else if (store.state.user) {
    if (store.state.stacks) next();
    else
      store.dispatch("getStacks").then(() => {
        next();
      });
  } else {
    storeInit
      .then(() => {
        console.log(storeInit);
        if(store.state.user && store.state.stacks)
        next();
        else next("/")
      })
      .catch((e) => {
        // Handle error
        console.log("Preload request failed");
        next("/");
      });
  }
});

export default router;
