<template>
  <v-responsive height="100%">
    <!-- <v-img src="https://i.imgur.com/DZFku3D.jpg" height="100%" width="100%"> -->
    <div class="d-flex flex-column align-center">
      <h1 class="display-4 white--text text-center mt-12 pa-12" width="100%">
        ReStick
      </h1>
      <v-btn large outlined dark x-large v-google-signin-button="clientId"
        >Continue with google</v-btn
      >

      <span class="pa-12 white--text text-center title"
        >Effective learning with spaced repetition. Create Stacks with
        flashcards and start learning. Share your Stacks with friends or invite
        them to collaborate together</span
      >
      <span class="white--text title"> 0.2.0a </span>
      <span class="white--text"> App in development </span>
    </div>
    <v-overlay v-model="show">
      <v-row>
        <v-col cols="12" class="px-10">
          <v-card light>
            <v-card-title>Choose a username!</v-card-title>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          v-for="username in usernames"
          v-bind:key="username"
          class="px-10"
        >
          <v-card light @click="chooseUsername(username)">
            <v-card-text class="headline">
              {{ username }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-overlay>
    <!-- </v-img> -->
  </v-responsive>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
import { mapState } from "vuex";

import GoogleSignInButton from "vue-google-signin-button-directive";
export default {
  directives: {
    GoogleSignInButton,
  },
  computed: {
    ...mapState(["host", "user"]),
  },
  data: () => ({
    clientId:
      "256693553552-01bl6ulv29bolub2l5pgna5jovkd84pl.apps.googleusercontent.com",
    usernames: ["test1", "test2", "test3", "test4", "test5"],
    show: false,
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      console.log(process.env.VUE_APP_API);
      axios
        .post(process.env.VUE_APP_API + "/api/auth/", {
          idToken,
        })
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = response.data.token;
          localStorage.auth = response.data.token;
          console.log(response.data);
          this.usernames = response.data.names;
          this.chooseUsername(response.data.names[0]);
          //TODO Change so you get to choose yourself, needs more data from db.
          // this.show = true;

          // this.$store.dispatch("getUser").then((response)=>{
          // this.$router.push('/account')
          // })
        });
      //todo handle errors, 401
    },
    chooseUsername(name) {
      axios
        .post(process.env.VUE_APP_API + "/api/user", {
          username: name,
        })
        .then((response) => {
          this.$store.dispatch("getUser").then((response) => {
            this.continueToApp();
          });
        });
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
    continueToApp() {
      console.log(this.$route);
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else this.$router.push("/account");
    },
  },
  created() {
    console.log("Using api:" + process.env.VUE_APP_API);
    if (localStorage.auth) {
      this.$router.push("/account");
    }
  },
};
</script>
