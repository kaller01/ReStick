<template>
  <div>
    <v-card flat>
      <v-toolbar
        :src="stack.picture ? stack.picture : 'https://picsum.photos/720'"
        dark
        prominent
        flat
      >
        <v-btn icon to="/stacks">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon> mdi-share-variant </v-icon>
        </v-btn>
      </v-toolbar>

      <v-card class="mx-auto" max-width="500" style="margin-top: -40px">
        <v-toolbar flat>
          <v-toolbar-title>
            {{ stack.name }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            icon
            v-if="!stack.unknown"
            v-show="stack.subscribed"
            @click="unsubStack"
          >
            <v-icon>mdi-bell-check</v-icon>
          </v-btn>
          <v-btn
            icon
            v-if="!stack.unknown"
            v-show="!stack.subscribed"
            @click="subStack"
          >
            <v-icon>mdi-bell-off</v-icon>
          </v-btn>
          <v-btn icon v-if="!stack.unknown" @click="resetRepeats">
            <v-icon>mdi-restart</v-icon>
          </v-btn>
          <v-btn icon v-if="!stack.unknown" @click="dialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon v-if="!stack.unknown" @click="deleteStack">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="0" lg="4" class="pa-0 ma-0"></v-col>
        <v-col cols="12" lg="4" class="py-0 my-0">
          <v-row>
            <v-col v-if="stack.unknown">
              <v-btn block @click="addStack"> Subscribe to stack </v-btn>
            </v-col>
            <v-col v-else>
              <v-btn block @click="newCardDialog = true"> Add card </v-btn>
            </v-col>
            <v-col v-for="card in stack.cards" v-bind:key="card._id" cols="12">
              <card :card="card" @click="openCard(card)" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="0" lg="4" class="pa-0 ma-0"></v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="800px">
      <stackDialog
        :stack="stack"
        title="Edit stack"
        @save="saveStack"
        @close="dialog = false"
      />
    </v-dialog>
    <v-dialog v-model="newCardDialog" persistent max-width="800px">
      <card-dialog
        title="New Card"
        :card="newCard"
        @save="saveNewCard"
        @close="newCardDialog = false"
      ></card-dialog>
    </v-dialog>
    <v-dialog v-model="cardDialog" max-width="900px">
      <v-card class="my-3">
        <v-card-actions>
          <v-btn icon @click="cardDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="editCardDialog = !editCardDialog">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon @click="deleteCard">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <card v-if="!editCardDialog" :card="card"> </card>
      <card-dialog
        v-else
        :card="card"
        @save="saveCard"
        @close="cardDialog = editCardDialog = false"
      ></card-dialog>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

import stackDialog from "../components/stackModal.vue";
import cardDialog from "../components/cardModal.vue";
import card from "../components/card.vue";
export default {
  components: {
    stackDialog,
    cardDialog,
    card,
  },
  computed: {
    ...mapState(["stack", "user", "host"]),
  },
  data: () => ({
    dialog: false,
    newCardDialog: false,
    cardDialog: false,
    editCardDialog: false,
    newCard: {
      front: "",
      back: "",
    },
    card: false,
  }),
  methods: {
    ...mapActions(["getStacks", "getStack"]),
    deleteStack() {
      axios
        .delete(process.env.VUE_APP_API + "/api/stacks/" + this.stack._id)
        .then((response) => {
          console.log("Deleted stack");
          this.getStacks().then((response) => {
            this.$router.push("/stacks");
          });
        });
    },
    resetRepeats() {
      axios
        .delete(
          process.env.VUE_APP_API + "/api/stacks/" + this.stack._id + "/repeats"
        )
        .then((response) => {
          console.log("Reseted repeats", response);
        });
    },
    saveStack() {
      let data = this.stack;
      axios
        .put(process.env.VUE_APP_API + "/api/stacks/" + this.stack._id, data)
        .then((response) => {
          this.getStacks();
          this.getStack(this.stack._id);
          this.dialog = false;
        });
    },
    saveNewCard(data) {
      console.log(data);
      axios
        .post(process.env.VUE_APP_API + "/api/stacks/" + this.stack._id, data)
        .then((response) => {
          this.getStack(this.stack._id).then((response) => {
            this.newCardDialog = false;
          });
        });
    },
    saveCard(data) {
      axios
        .put(
          process.env.VUE_APP_API +
            "/api/stacks/" +
            this.stack._id +
            "/" +
            this.card._id,
          data
        )
        .then((response) => {
          this.getStack(this.stack._id);
          this.cardDialog = this.editCardDialog = false;
        });
    },
    deleteCard() {
      axios
        .delete(
          process.env.VUE_APP_API +
            "/api/stacks/" +
            this.stack._id +
            "/" +
            this.card._id
        )
        .then((response) => {
          this.getStack(this.stack._id);
          this.cardDialog = this.editCardDialog = false;
        });
    },
    subStack() {
      axios
        .put(process.env.VUE_APP_API + "/api/stacks/" + this.stack._id + "/sub")
        .then((response) => {
          this.getStacks();
          this.getStack();
        });
    },
    unsubStack() {
      axios
        .delete(
          process.env.VUE_APP_API + "/api/stacks/" + this.stack._id + "/sub"
        )
        .then((response) => {
          this.getStack();
          this.getStacks();
        });
    },
    addStack() {
      axios
        .post(
          process.env.VUE_APP_API + "/api/stacks/" + this.stack._id + "/sub"
        )
        .then((response) => {
          this.getStacks();
          this.getStack();
        });
    },
    compileMarkdown(md) {
      let html = marked(md);
      return DOMPurify.sanitize(html);
    },
    openCard(card) {
      this.card = card;
      this.cardDialog = true;
    },
  },
  created() {
    if (!this.stack.unknown)
      axios.patch(process.env.VUE_APP_API + "/api/stacks/" + this.stack._id);
  },
};
</script>

<style>
img {
  width: 100%;
}

table {
  border: solid 1px #ddeeee;
  border-collapse: collapse;
  border-spacing: 0;
}
thead th {
  border: solid 1px #ddeeee;
  padding: 10px;
  text-align: left;
}
tbody td {
  border: solid 1px #ddeeee;
  padding: 10px;
}
</style>
