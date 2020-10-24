<template>
  <div>
    <v-btn v-google-signin-button="clientId" class="google-signin-button">
      Continue with Google
    </v-btn>
    <v-btn @click="testToken()">
      Refresh
    </v-btn>
    <v-btn v-on:click="randomize()">
      Random username
    </v-btn>
    <div>
      <img :src="user.picture" alt="" />
      <h1>{{ user.username }}</h1>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import { mapState } from "vuex";

import GoogleSignInButton from "vue-google-signin-button-directive";
export default {
  directives: {
    GoogleSignInButton,
  },
  computed: {
    ...mapState(["user"]),
  },
  data: () => ({
    clientId:
      "256693553552-01bl6ulv29bolub2l5pgna5jovkd84pl.apps.googleusercontent.com",
    url: "",
    users: [],
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      axios
        .post("http://localhost:3000/auth/google/", {
          idToken,
        })
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = response.data;
          this.url = response.data.picture;
          localStorage.auth = response.data;
        });
      //todo handle errors, 401
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
    testToken() {
      this.$store.dispatch('getUser');
    },
    randomize() {
      axios
        .get("http://localhost:3000/api/user/randomize")
        .then((response) => {
          this.$store.dispatch('getUser');
        });
    },
  },
  created() {
    //  this.testToken();
    //  console.log("LMAO")
  },
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
