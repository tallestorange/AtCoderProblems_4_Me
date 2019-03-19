<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Problems</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="getProblemsList"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">

            <td class="text-xs-left">
              <a :href="makeTaskURL(props.item)" target="_blank">{{
                props.item.title
              }}</a>
            </td>

            <td class="text-xs-left">{{ props.item.point }}</td>

            <td class="text-xs-left">
              {{ props.item.solver_count }}
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "deadline" },
        { text: "Point", value: "progress" },
        { text: "Solvers", value: "status" }
      ]
    };
  },
  computed: {
    getProblemsList() {
      const problemsDict = this.$store.getters.getProblemsData
      const submissionsDict = this.$store.getters.getSubmissionsData
      let result = []

      for(let key in problemsDict) {
        let problem = problemsDict[key]
        problem.problem_id = key
        if(submissionsDict[key]){
          problem.your_ac_count = submissionsDict[key].your_ac_count
          problem.your_wa_count = submissionsDict[key].your_wa_count
        }
        else {
          problem.your_ac_count = 0
          problem.your_wa_count = 0
        }
        result.push(problem)
      }

      result.sort(function(a, b) {
        if (a.first_submission_id < b.first_submission_id) return 1;
        if (a.first_submission_id > b.first_submission_id) return -1;
        return 0;
      });

      return result
    },
  },
  methods: {
    getColorByStatus(status) {
      // return this.colors[status];
      if (status == "AC") {
        return "green";
      } else {
        return "orange";
      }
    },
    makeTaskURL(submission) {
      return (
        "https://atcoder.jp/contests/" +
        submission.contest_id +
        "/tasks/" +
        submission.problem_id
      );
    }
  }
};
</script>
