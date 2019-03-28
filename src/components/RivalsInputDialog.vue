<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <div style="right: 5vw; bottom: 4vh; z-index: 999; position: fixed;">
        <v-btn v-on="on" fab color="primary" v-if="!dialog">
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
              <v-text-field
                v-model="userID"
                label="userID*"
                @keyup.enter="submit"
                @keypress="setCanMessageSubmit"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false" v-if="!isLoading">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="submit()" v-if="!isLoading">Add</v-btn>
        <v-btn color="blue darken-1" flat disabled v-else>Loading...</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      isLoading: false,
      canMessageSubmit: false,
      userID: ""
    };
  },
  methods: {
    submit: async function() {
      if (this.userID == "") {
        return;
      }

      let isExist = false
      await this.$db.rivals.get(this.userID).then((res) => {
        if (res !== undefined) {
          isExist = true
        }
      }).catch(error => {});
      if (isExist) {
        return;
      }

      this.isLoading = true;

      let result = {
        userid: this.userID,
        accepted_count: 0,
        rated_point_sum: 0
      };
      await this.$store.dispatch("fetchAll", this.userID).then(() => {});
      const scoresDict = this.$store.getters.getScores(this.userID);

      for (let key in scoresDict) {
        let data = scoresDict[key];
        result.accepted_count += data.accepted_count;
        if (key != "undefined") {
          result.rated_point_sum += data.accepted_count * Number(key);
        }
      }

      this.$store.commit("addRivalsList", result);
      this.$db.rivals.add(result);

      this.dialog = false;
      this.isLoading = false;
    },
    setCanMessageSubmit() {
      this.canMessageSubmit = true;
    }
  },
  watch: {
    dialog: function(val) {
      this.userID = "";
    }
  }
};
</script>
