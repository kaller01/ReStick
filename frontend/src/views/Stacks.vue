<template>
  <div>
    <v-toolbar color="white">
      <v-toolbar-title>Stacks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="dialog = true" to="#dialog">
        <v-icon>mdi-layers-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row dense>
        <v-col cols="12"> </v-col>

        <v-col v-for="item in stacks" :key="item.stack._id" cols="12" md="3" lg="4">
          <v-card :to="'/stacks/' + item.stack._id" color="white">
            <div class="d-flex flex-no-wrap justify-space-between mb-2">
              <div>
                <v-card-title
                  class="display-1"
                  v-text="item.stack.name"
                ></v-card-title>

                <v-card-subtitle class="headline py-0">
                  <v-icon>
                    mdi-cards
                  </v-icon>
                  {{ item.stack.cards.length }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.stack.isPublic"
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    >public</v-btn
                  >
                  <v-btn v-if="item.subscribed" class="ml-2 mt-5" outlined rounded small
                    >Subscribed</v-btn
                  >
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img
                  :src="
                    item.stack.picture ? item.stack.picture : 'https://picsum.photos/720'
                  "
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <stackDialog
        :stack="newStack"
        title="New stack"
        @save="saveStack"
        @close="dialog = false"
      />
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import stackDialog from "../components/stackModal.vue";
export default {
  components: {
    stackDialog,
  },
  computed: {
    ...mapState(["stacks","host"]),
    color() {
      let colors = [
        "yellow darken-4",
        "amber darken-4",
        "yellow darken-3",
        "orange darken-4",
        "orange darken-3",
        "orange accent-3",
        "amber accent-4",
        "deep-orange",
        "deep-orange darken-4",
      ];
      let random = Math.floor(Math.random() * colors.length);
      return colors[random];
    },
  },
  data: () => ({
    dialog: false,
    newStack: {
      name: "",
      picture: "",
      isPublic: false,
    },
  }),
  methods: {
    ...mapActions(["getStacks"]),
    saveStack() {
      if (this.newStack.name.length > 0) {
        let data = this.newStack;
        console.log(data);
        axios
          .post(process.env.VUE_APP_API + "/api/stacks", data)
          .then((response) => {
            this.dialog = false;
            this.getStacks().then((response) => {
              console.log("New stack created");
            });
          });
      }
    },
    colors() {
      let colors = [
        "yellow darken-4",
        "amber darken-4",
        "yellow darken-3",
        "orange darken-4",
        "orange darken-3",
        "orange accent-3",
        "amber accent-4",
        "deep-orange",
        "deep-orange darken-4",
      ];
      this.stacks.forEach((stack) => {
        let random = Math.floor(Math.random() * colors.length);
        stack.color = colors[random];
      });
    },
  },
  created() {
    this.colors();
  },
};
</script>
