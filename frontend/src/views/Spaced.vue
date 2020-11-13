<template>
  <div>
    <v-toolbar color="white">
      <v-toolbar-title v-if="index >= 0"
        >{{ repeats.length - index }} cards to due - {{repeat.stack.name}}</v-toolbar-title
      >
      <v-toolbar-title v-else>No cards due</v-toolbar-title>
      <v-spacer></v-spacer>

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
              <Vue2InteractDraggable
                :interact-out-of-sight-x-coordinate="500"
                :interact-max-rotation="15"
                :interact-x-threshold="150"
                :interact-y-threshold="150"
                @draggedRight="test('right')"
                @draggedLeft="test('left')"
                v-if="isVisible && index >= 0"
              >
                <v-card
                  :ripple="false"
                  style="min-height:70vh"
                  class="mx-6 mb-0"
                  id="card"
                >
                  <!-- <v-banner class="gray headline"
                    >{{ repeat.stack.name }}
                  </v-banner> -->
                  <div
                    class="pa-3"
                    v-show="isFront"
                    v-html="compileMarkdown(repeat.card.front)"
                  ></div>
                  <div
                    class="pa-3"
                    v-show="!isFront"
                    v-html="compileMarkdown(repeat.card.back)"
                  ></div>
                </v-card>
              </Vue2InteractDraggable>
            </v-col>
            <v-col cols="12" class="px-9">
              <v-btn
                block
                v-show="isVisible && index >= 0"
                @click="isFront = !isFront"
              >
                <v-icon>
                  mdi-rotate-3d-variant
                </v-icon>
              </v-btn>
            </v-col>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Vue2InteractDraggable } from "vue2-interact";
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
  }),
  components: {
    Vue2InteractDraggable,
  },
  computed: {
    ...mapState(["host", "repeats"]),
    repeat() {
      if (this.repeats.length == 0) this.index = -1;
      if (this.repeats.length > 0 && this.index == -1) this.index = 0;
      return this.repeats[this.index];
    },
  },
  methods: {
    test(direction) {
      setTimeout(() => (this.isVisible = false), 200);
      setTimeout(() => {
        switch (direction) {
          case "left":
            Axios.post(
              this.host + "/api/user/spaced/" + this.repeat._id + "/2"
            );
            break;
          case "right":
            Axios.post(
              this.host + "/api/user/spaced/" + this.repeat._id + "/4"
            );

            break;
        }
        this.index++;
        this.isFront = true;
        if (this.index < this.repeats.length) this.isVisible = true;
        else {
          this.index = -2;
        }
      }, 300);
    },
    compileMarkdown(md) {
      let html = marked(md);
      return DOMPurify.sanitize(html);
    },
    flip() {
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
