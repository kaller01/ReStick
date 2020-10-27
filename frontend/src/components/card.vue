<template>
  <v-card @click="$emit('click')">
    <v-card-text v-html="compileMarkdown(card.front)" class="pa-4"> </v-card-text>
    <v-divider></v-divider>
    <v-card-text v-html="compileMarkdown(card.back)" class="pa-4"> </v-card-text>
  </v-card>
</template>

<script>
import marked from "marked";
import DOMPurify from "dompurify";

export default {
  props: {
    card: Object,
  },
  methods: {
    compileMarkdown(md) {
      let html = marked(md);
      return DOMPurify.sanitize(html);
    },
  },
};
</script>

<style></style>
