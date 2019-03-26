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

         <v-combobox
          label="Contests"
          :items="getContestsList"
          v-model="contests"
          clearable
          full-width
        >
        </v-combobox>

      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      scores: [],
      contests: ""
    };
  },
  methods: {
    remove: function(item) {
      const index = this.scores.indexOf(item);
      if (index >= 0) this.scores.splice(index, 1);
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsNowLoading
    },
    getScoresList() {
      return this.$store.getters.getSearchTagsForView
    },
    getContestsList() {
      return this.$store.getters.getContestsList
    }
  },
  watch: {
    scores: function() {
      this.$db.inputs.put({id: "selectedSearchTags", value: this.scores});
      this.$store.commit("setSelectedSearchTags", this.scores);
    },
    contests: function() {
      this.$db.inputs.put({id: "selectedContestName", value: this.contests});
      this.$store.commit("setSelectedContestName", this.contests);
    }
  },
  created() {
    let searchTags = [];
    this.$db.inputs.get("selectedSearchTags").then( (data) => {
      searchTags = data.value
      this.scores = searchTags
    }).catch( error => {
    });
    
  },
};
</script>
