<template>
  <v-app>
    <v-overlay :value="loading">
      <v-progress-circular dark indeterminate size="128"></v-progress-circular>
    </v-overlay>

    <!-- <v-app-bar
      absolute
      dark
      height="56"
      hide-on-scroll
      prominent
      :color="color"
    >
      <v-toolbar-title>ReStack</v-toolbar-title>
    </v-app-bar> -->
    <!-- <div class="spacers"></div> -->
    <v-img gradient="to bottom right, #FAB325, #EA191C" height="100%" width="100%">
    <v-main class="background">
      <router-view></router-view>
    </v-main>
    </v-img>
    <div class="spacers"></div>
    <v-bottom-navigation
      v-model="value"
      background-color="white"
      
      shift
      fixed
    >
      <v-btn x-large height="100%" to="/spaced">
        <span>Spaced</span>

        <v-icon>mdi-cards</v-icon>
      </v-btn>

      <v-btn x-large height="100%" to="/stacks">
        <span>Stacks</span>

        <v-icon>mdi-layers</v-icon>
      </v-btn>

      <v-btn x-large height="100%" to="/account">
        <span>Account</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 2:
          return "yellow darken-3";
        case 1:
          return "orange darken-3";
        case 0:
          return "deep-orange darken-3";
        default:
          return "blue-grey";
      }
    },
    isAuthed(){
        if(localStorage.auth){
            return true;
        } else return false
    },
    ...mapState(["loading"]),
  },
};
</script>

<style scoped>
.spacers {
  height: 56px;
}


.background {
    /* background-image: "https://i.imgur.com/DZFku3D.jpg"; */
}
</style>

