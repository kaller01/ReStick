<template>
  <div>
    <v-card flat>
      <v-toolbar
        :src="stack.picture ? stack.picture : 'https://i.imgur.com/DZFku3D.jpg'"
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

          <v-btn icon>
            <v-icon>mdi-plus-box</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon @click="deleteStack(stack._id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["stack"]),
  },
  methods: {
    ...mapActions(["getStacks"]),
    deleteStack(id) {
      axios
        .delete("http://localhost:3000/api/stacks/" + id)
        .then((response) => {
          console.log("Deleted stack");
          this.getStacks().then((response)=>{
            this.$router.push('/stacks')
          })
        });
    },
  },
};
</script>

<style></style>
