import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Stacks from "../views/Stacks.vue";
import Stack from "../views/Stack.vue";
import Spaced from "../views/Spaced.vue";
import store from "../store";
const storeInit = store.dispatch("init");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/stacks",
    name: "Stacks",
    component: Stacks,
  },
  {
    name: "Stack",
    path: "/stack/:stackId",
    component: Stack,
    beforeEnter(to, from, next) {
      // ...
      store.dispatch("getStack", to.params.stackId).then(next);
    },
  },
  {
    path: "/spaced",
    name: "Spaced repetition",
    component: Spaced,
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
        console.log("Something went wrong!!");
        next("/");
      });
  }
});

export default router;
