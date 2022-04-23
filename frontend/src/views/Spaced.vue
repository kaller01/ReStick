<template>
  <div>
    <v-toolbar color="white">
      <v-toolbar-title v-if="index >= 0"
        >{{ repeats.length - index }} cards to due -
        {{ repeat.stack.name }}</v-toolbar-title
      >
      <v-toolbar-title v-else>No cards due</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="helpDialog = true">
        <v-icon>mdi-help</v-icon>
      </v-btn>
      <v-btn icon @click="jsonDialog = true">
        <v-icon>mdi-code-json</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fill-height class="d-flex justify-center">
      <v-row>
        <v-col cols="0" lg="4" class="pa-0 ma-0"></v-col>
        <v-col cols="12" lg="4">
          <v-row>
            <v-col cols="12" class="mb-0 pb-0">
              <v-card :ripple="false" id="card">
                <!-- <v-banner class="gray headline"
                    >{{ repeat.stack.name }}
                  </v-banner> -->
                <v-card-text
                  style="min-height: 65vh"
                  @click="isFront = !isFront"
                >
                  <div
                    class="pa-3"
                    v-html="compileMarkdown(repeat.card.front)"
                  ></div>
                  <v-divider></v-divider>
                  <div
                    class="pa-3"
                    v-show="!isFront"
                    v-html="compileMarkdown(repeat.card.back)"
                  ></div>
                </v-card-text>

                <v-card-actions>
                  <v-row>
                    <!-- <v-col cols="12" class="pb-0">
                      <v-btn
                        block
                        v-show="isVisible && index >= 0"
                        @click="isFront = !isFront"
                      >
                        <v-icon> mdi-rotate-3d-variant </v-icon>
                      </v-btn>
                    </v-col> -->
                    <v-col cols="12" class="py-0">
                      <v-row justify="space-around">
                        <v-col></v-col>
                        <v-col>
                          <v-btn-toggle>
                            <v-btn
                              v-for="i in 6"
                              v-bind:key="i"
                              :disabled="isFront"
                              @click="grade(i - 1)"
                              :color="color(i - 1)"
                            >
                              {{ i - 1 }}
                            </v-btn>
                          </v-btn-toggle>
                        </v-col>
                        <v-col></v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" class="px-9"> </v-col>
          </v-row>
        </v-col>
        <v-col cols="0" lg="4" class="pa-0 ma-0"></v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="jsonDialog">
      <v-card>
        <pre>{{ JSON.stringify(repeat, null, 2) }}</pre>
      </v-card>
    </v-dialog>
    <v-dialog v-model="helpDialog">
      <v-card class="pa-2">
        <!-- <v-card-text> -->
          <p>5: perfect response.</p>
          <p>4: correct response after a hesitation.</p>
          <p>3: correct response recalled with serious difficulty.</p>
          <p>
            2: incorrect response; where the correct one seemed easy to recall.
          </p>
          <p>1: incorrect response; the correct one remembered.</p>
          <p>0: complete blackout.</p>
        <!-- </v-card-text> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import marked from "marked";
import DOMPurify from "dompurify";
import Axios from "axios";

export default {
  data: () => ({
    cards: ["A", "b", "ccc", "ddd", "hello world"],
    failedCards: [],
    index: -1,
    isVisible: true,
    isFront: true,
    jsonDialog: false,
    helpDialog: false,
  }),
  components: {},
  computed: {
    ...mapState(["host", "repeats"]),
    repeat() {
      if (this.repeats.length == 0) this.index = -1;
      if (this.repeats.length > 0 && this.index == -1) this.index = 0;
      return this.repeats[this.index];
    },
  },
  methods: {
    grade(grade) {
      Axios.post(
        process.env.VUE_APP_API +
          "/api/user/spaced/" +
          this.repeat._id +
          "/" +
          grade
      );
      this.index++;
      this.isFront = true;
      if (this.index < this.repeats.length) this.isVisible = true;
      else {
        this.index = -2;
      }
    },
    compileMarkdown(md) {
      let html = marked(md);
      return DOMPurify.sanitize(html);
    },
    flip() {},
    color(i) {
      const colors = [
        "red accent-4",
        "orange darken-1",
        "yellow darken-1",
        "light-green lighten-2",
        "green",
        "green darken-4",
      ];
      return colors[i];
    },
  },
  created() {},
};
</script>

<style>
.gray {
  background-color: #e5e5e5 !important;
}

.max {
  width: 500px;
  height: 500px;
}

img {
  max-width: 100% !important;
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
