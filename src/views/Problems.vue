<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-card>
            <v-toolbar card dense color="transparent">
              <v-toolbar-title><h4>Search</h4></v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>

            <v-layout justify-center>
            <v-flex lg4 sm10 xs10>

            <v-combobox
              label="Scores"
              :items="getScoresList"
              v-model="scores"
              multiple
              clearable
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
        </v-flex>

        <v-flex lg12 sm12 xs12>
          <problems-table></problems-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProblemsTable from "@/components/parts/ProblemsTable";

export default {
  components: {
    ProblemsTable
  },
  data: () => ({
    rawDate: "null",
    dates: [],
    scores: [],
    pickerDate: null,
    date: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    remove: function(item) {
      const index = this.scores.indexOf(item)
      if (index >= 0) this.scores.splice(index, 1)
    }
  },
  computed: {
    getScoresList() {
      const problemsDict = this.$store.getters.getProblemsData
      let resultDict = {}
      let result = []

      for(let key in problemsDict) {
        let problem = problemsDict[key]
        if (resultDict[problem.point]) {
          resultDict[problem.point] += 1
        }
        else {
          resultDict[problem.point] = 1
        }
      }
      for(let key in resultDict){
        result.push(key)
      }
      return result
    }
  },
  created: function() {
    let problems = this.$store.getters.getProblemsData;
    if (problems === null) {
      this.$store.dispatch("fetchProblemsData");
    }
  }
};
</script>
