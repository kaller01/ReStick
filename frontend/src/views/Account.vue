<template>
  <v-responsive height="100%">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col justify="center" align="center" cols="12">
          <v-avatar size="200" style="z-index: 2; margin-bottom: -75px">
            <v-img :src="user.picture" />
          </v-avatar>

          <v-card
            class="flex-column flex-end pt-12"
            height="200"
          >
            <p class="display-1 text-center mt-12">{{ user.username }}</p>
          </v-card>

        </v-col>
        <v-col cols="12">
          <v-btn large block class="" @click="signOut()">
            Sign out
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn block large class="" @click="randomize()">
            Randomize Username
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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
    ...mapState(["user", "host"]),
  },
  data: () => ({
    clientId:
      "256693553552-01bl6ulv29bolub2l5pgna5jovkd84pl.apps.googleusercontent.com",
  }),
  methods: {
    randomize() {
      axios.get(this.host + "/api/user/randomize").then((response) => {
        this.$store.dispatch("getUser");
      });
    },
    signOut() {
      axios.defaults.headers.common["Authorization"] = null;
      localStorage.clear();
      this.$store.dispatch("clearUser");
      this.$router.push("/");
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
