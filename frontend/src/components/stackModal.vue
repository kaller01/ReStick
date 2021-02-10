<template>
      <v-card >
        <v-card-title>
          <span class="headline"
            >
            {{title}}
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
                    v-model="stack.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Picture"
                    hint="Link to an image"
                    v-model="stack.picture"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-checkbox
                    v-model="stack.isPublic"
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
          <v-btn color="blue darken-1" text @click="close">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveStack">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: {
        stack: Object,
        title: String
    },
    methods: {
      saveStack(){
          this.$emit("save", this.stack);
      },  
      close(){
          this.$emit("close");
      }  
    },
}
</script>

<style>

</style>