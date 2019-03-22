<template>
  <v-dialog v-model="dialog"  max-width="600px">
    <template v-slot:activator="{ on }">
      <div style="right: 5vw; bottom: 4vh; z-index: 999; position: fixed;">
        <v-btn v-on="on" fab color="primary">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Rivals</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field v-model="userID" label="userID*" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="submit()">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      userID: ""
    };
  },
  methods: {
    submit() {
      if (this.userID == "") {
        return
      }
      console.log(this.userID)
      this.$store.commit("setRivalsList",this.userID)
      this.dialog = false
    }
  }
};
</script>
