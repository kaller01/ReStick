<template>
  <v-responsive height="100%">
    <!-- <v-img src="https://i.imgur.com/DZFku3D.jpg" height="100%" width="100%"> -->
      <div class="d-flex flex-column align-center">
        <h1 class="display-4 white--text text-center mt-12 pa-12" width="100%">
          ReStack
        </h1>
        <v-btn large outlined dark x-large v-google-signin-button="clientId">Continue with google</v-btn>

        <span class="pa-12 white--text text-center title"
          >Effective learning with spaced repetition. Create Stacks with
          flashcards and start learning. Share your Stacks with friends or
          invite them to collaborate together</span
        >
      </div>
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
    ...mapState(["host"]),
  },
  data: () => ({
    clientId:
      "256693553552-01bl6ulv29bolub2l5pgna5jovkd84pl.apps.googleusercontent.com",
    show: false
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      // Receive the idToken and make your magic with the backend
      axios
        .post(this.host + "/auth/google/", {
          idToken,
        })
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = response.data;
          localStorage.auth = response.data;
          this.$store.dispatch("getUser").then((response)=>{
          this.$router.push('/account')
          })
        });
      //todo handle errors, 401
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
  },
};
</script>
