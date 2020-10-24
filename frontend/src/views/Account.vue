<template>
  <v-responsive height="100%">
    <!-- <v-img src="https://i.imgur.com/DZFku3D.jpg" height="100%" width="100%"> -->
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-avatar size="200" style="z-index: 2; margin-top: 100px">
            <v-img :src="user.picture" />
          </v-avatar>

          <v-card
            class="flex-column align-center py-12"
            style="margin-top: -100px;"
            height="200"
            width="400"
          >
            <br />
            <!-- <v-card-title>Hello</v-card-title> -->
            <p class="display-1 text-center mt-12">{{ user.username }}</p>
          </v-card>

          <v-btn large width="400" class="mt-4" @click="randomize()">
            Randomize Username
          </v-btn>
          <v-btn large width="400" class="mt-4" @click="signOut()">
            Sign out
          </v-btn>
        </v-row>
      </v-container>
    <!-- </v-img> -->
    hello
  </v-responsive>
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
    randomize() {
      axios.get("http://localhost:3000/api/user/randomize").then((response) => {
        this.$store.dispatch("getUser");
      });
    },
    signOut() {
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.clear();
      this.$store.dispatch("clearUser");
      this.$router.push("/")
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
