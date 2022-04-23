<template>
  <v-card>
    <v-card-title>
      <span v-if="title" class="headline">
        {{ title }}
        <v-icon>mdi-cards</v-icon>
      </span>
    </v-card-title>
    <v-card-text>
      <v-textarea
        outlined
        label="Front"
        v-model="card.front"
        append-outer-icon="mdi-image"
        @click:append-outer="openimgdialog('front')"
      ></v-textarea>
      <v-divider></v-divider>
      <v-textarea
        outlined
        label="Back"
        v-model="card.back"
        append-outer-icon="mdi-image"
        @click:append-outer="openimgdialog('back')"
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="addimage">Insert image </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
    </v-card-actions>
    <v-dialog v-model="imgdialog">
      <v-card>
        <v-card-text>
          <v-text-field v-model="imglink" label="Link to image"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addimage"> Add image </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    card: Object,
    title: String,
  },
  data: () => ({
    imgdialog: false,
    where: null,
    imglink: null,
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      console.log(this.card);
      this.$emit("save", this.card);
    },
    openimgdialog(where) {
      this.imgdialog = true;
      this.where = where;
    },
    addimage() {
      this.imgdialog = false;
      this.card[this.where] += "\n![](" + this.imglink + ")";
      this.imglink = "";
    },
  },
};
</script>

<style>
</style>