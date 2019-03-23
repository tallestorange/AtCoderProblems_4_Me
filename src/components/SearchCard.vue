<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Search</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-layout justify-center>
      <v-flex lg11 sm10 xs10>
        <v-combobox
          label="Scores"
          :items="getScoresList"
          v-model="scores"
          multiple
          clearable
          full-width
          chips
          type="button"
        >
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              close
              color="primary"
              text-color="white"
              @input="remove(data.item)"
            >
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      scores: this.$store.getters.getSelectedSearchTags
    };
  },
  methods: {
    remove: function(item) {
      const index = this.scores.indexOf(item);
      if (index >= 0) this.scores.splice(index, 1);
    },
  },
  computed: {
    getScoresList() {
      const scoresDict = this.$store.getters.getScoresDictionary;
      return Object.keys(scoresDict);
    }
  },
  watch: {
    scores: function() {
      this.$db.inputs.put({id: "selectedSearchTags", value: this.scores});
      this.$store.commit("setSelectedSearchTags", this.scores);
    }
  },
};
</script>
