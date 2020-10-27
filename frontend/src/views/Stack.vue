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
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>
            mdi-share-variant
          </v-icon>
        </v-btn>
      </v-toolbar>

      <v-card class="mx-auto" max-width="400" style="margin-top: -40px;">
        <v-toolbar flat>
          <v-toolbar-title>
            {{ stack.name }}
          </v-toolbar-title>

          <v-spacer></v-spacer>


          <v-btn icon v-if="isSubscribed" @click="unsubStack">
            <v-icon>mdi-bell-check</v-icon>
          </v-btn>
          <v-btn icon v-else @click="subStack">
            <v-icon>mdi-bell-off</v-icon>
          </v-btn>
          <v-btn icon @click="dialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon @click="deleteStack">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-card>
    <v-container>
      <v-row>
        <v-col>
          <v-btn block @click="newCardDialog = true">
            Add card
          </v-btn>
        </v-col>
        <v-col
          v-for="card in stack.cards"
          v-bind:key="card._id"
          cols="12"
          lg="4"
        >
          <card :card="card" @click="openCard(card)" />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog">
      <stackDialog
        :stack="stack"
        title="Edit stack"
        @save="saveStack"
        @close="dialog = false"
      />
    </v-dialog>
    <v-dialog v-model="newCardDialog" persistent>
      <card-dialog
        title="New Card"
        :card="newCard"
        @save="saveNewCard"
        @close="newCardDialog = false"
      ></card-dialog>
    </v-dialog>
    <v-dialog persistent v-model="cardDialog">
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
    ...mapState(["stack", "user"]),
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
    isSubscribed: true
  }),
  methods: {
    ...mapActions(["getStacks", "getStack"]),
    deleteStack() {
      axios
        .delete("http://localhost:3000/api/stacks/" + this.stack._id)
        .then((response) => {
          console.log("Deleted stack");
          this.getStacks().then((response) => {
            this.$router.push("/stacks");
          });
        });
    },
    saveStack() {
      let data = this.stack;
      axios
        .put("http://localhost:3000/api/stacks/" + this.stack._id, data)
        .then((response) => {
          this.getStacks();
          this.getStack(this.stack._id);
          this.dialog = false;
        });
    },
    saveNewCard(data) {
      console.log(data);
      axios
        .post("http://localhost:3000/api/stacks/" + this.stack._id, data)
        .then((response) => {
          this.getStack(this.stack._id).then((response) => {
            this.newCardDialog = false;
          });
        });
    },
    saveCard(data) {
      axios
        .put(
          "http://localhost:3000/api/stacks/" +
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
          "http://localhost:3000/api/stacks/" +
            this.stack._id +
            "/" +
            this.card._id
        )
        .then((response) => {
          this.getStack(this.stack._id);
          this.cardDialog = this.editCardDialog = false;
        });
    },
    subStack(){
      axios.post("http://localhost:3000/api/user/subs/"+this.stack._id).then((response)=>{
        this.getStacks();
        this.getStack();
        this.isSubscribed = true;
      })
    },
    unsubStack(){
      axios.delete("http://localhost:3000/api/user/subs/"+this.stack._id).then((response)=>{
        this.getStack();
        this.getStacks();
        this.isSubscribed = false;
      })
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
