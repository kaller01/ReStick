<template>
      <v-card>
        <v-card-title>
          <span v-if="title" class="headline">
              {{title}}
            <v-icon>mdi-cards</v-icon>
          </span>
        </v-card-title>
        <v-card-text>
          <v-textarea outlined label="Front" v-model="card.front"></v-textarea>
          <v-divider></v-divider>
          <v-textarea outlined label="Back" v-model="card.back"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: {
        card: Object,
        title: String
    },
    methods: {
        close(){
            this.$emit('close');
        },
        save(){
            console.log(this.card)
            this.$emit('save', this.card)
        }
    }
}
</script>

<style>
</style>