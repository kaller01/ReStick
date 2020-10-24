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

            <v-col
              v-for="stack in stacks"
              :key="stack._id"
              cols="12"
              md="3"
              lg="4"
            >
              <v-card :to="'/stack/' + stack._id" color="white">
                <div class="d-flex flex-no-wrap justify-space-between mb-2">
                  <div>
                    <v-card-title
                      class="display-1"
                      v-text="stack.name"
                    ></v-card-title>

                    <v-card-subtitle class="headline py-0">
                      <v-icon>
                        mdi-cards
                      </v-icon>
                      {{ stack.cards.length }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        v-if="stack.isPublic"
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        >public</v-btn
                      >
                      <v-btn class="ml-2 mt-5" outlined rounded small
                        >Subscribed</v-btn
                      >
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img
                      :src="
                        stack.picture
                          ? stack.picture
                          : ''
                      "
                    ></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >New Stack

            <v-icon>mdi-tray-full</v-icon>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Title"
                    required
                    v-model="newStack.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Picture"
                    hint="Link to an image"
                    v-model="newStack.picture"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-checkbox
                    v-model="newStack.isPublic"
                    label="Make this Stack public"
                  >
                  </v-checkbox>
                </v-col>
              </v-row>
            </form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveStack">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["stacks"]),
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
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  methods: {
    ...mapActions(["getStacks"]),
    saveStack() {
      if (this.newStack.name.length > 0) {
        let data = this.newStack;
        console.log(data);
        axios
          .post("http://localhost:3000/api/stacks", data)
          .then((response) => {
            console.log("New stack created");
            this.dialog = false;
            this.getStacks().then((response)=>{
                this.colors();
            })
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
      this.stacks.forEach(stack => {
      let random = Math.floor(Math.random() * colors.length);
         stack.color = colors[random]; 
      });
    },
  },
  created(){
      this.colors();
  }
};
</script>
