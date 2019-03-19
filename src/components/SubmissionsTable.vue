<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Submissions</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="submissionsData"
          :pagination.sync="pagination"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">
            <td>
              <a :href="makeSubmissionURL(props.item)" target="_blank">{{
                props.item.id
              }}</a>
            </td>
            <td class="text-xs-left">
              <a :href="makeTaskURL(props.item)" target="_blank">{{
                props.item.title
              }}</a>
            </td>
            <td class="text-xs-left">{{ props.item.point }}</td>
            <td class="text-xs-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.result)"
                text-color="white"
                >{{ props.item.result }}</v-chip
              >
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
        {
          text: "id",
          align: "left",
          value: "id"
        },
        { text: "Title", value: "title" },
        { text: "Score", value: "point" },
        { text: "Result", value: "result" }
      ],
      pagination: {
        sortBy: "id",
        descending: true,
        rowsPerPage: 10
      }
    };
  },
  computed: {
    submissionsData() {
      let problemsDict = this.$store.getters.getProblemsData;
      let selectedDate = this.$store.getters.getSelectedDate;
      let result = [];
      if (
        selectedDate == "" ||
        this.$store.getters.getSubmissionsRawData.length == 0
      ) {
        return [];
      }
      let allSubmissions = this.$store.getters.getViewSubmissionsData;
      let submissionsData = allSubmissions[selectedDate];

      for (let key in submissionsData) {
        let submission = submissionsData[key];
        let title = problemsDict[submission.problem_id].title;
        submission.title = title;
        result.push(submission);
      }
      return result;
    }
  },
  methods: {
    getColorByStatus(status) {
      if (status == "AC") {
        return "green";
      } else {
        return "orange";
      }
    },
    makeSubmissionURL(submission) {
      return (
        "https://atcoder.jp/contests/" +
        submission.contest_id +
        "/submissions/" +
        submission.id
      );
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
