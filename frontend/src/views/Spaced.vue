<template>
  <div>
    <vue-swing class="d-flex justify-center align-center mt-9">
      <v-card height="700px" width="370px">
        hello
      </v-card>
    </vue-swing>
  </div>
</template>

<script>
import VueSwing from "vue-swing";
export default {
  data: () => ({
    config: {
      allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT],
    },
  }),
};
</script>
