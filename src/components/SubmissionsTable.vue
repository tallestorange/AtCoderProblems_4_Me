<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Submissions</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          v-if="!isLoading"
          :headers="headers"
          :items="submissionsData"
          :pagination.sync="pagination"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">
            <td>
              <a :href="props.item.submission_url" target="_blank">{{
                props.item.id
              }}</a>
            </td>
            <td class="text-xs-left">
              <a :href="props.item.problem_url" target="_blank">{{
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
      const userName = this.$store.getters.getUserName;
      const submissionsDictionary = this.$store.getters.getSubmissionsDictionary;
      if (Object.keys(submissionsDictionary) == 0) {
        return []
      }
      const selectedDate = this.$store.getters.getSelectedDate;
      const submissions = submissionsDictionary[userName]

      if (submissions[selectedDate]) {
        return submissions[selectedDate].submissions
      }
      else {
        return []
      }
    },
    isLoading() {
      return this.$store.getters.getIsNowLoading
    }
  },
  methods: {
    getColorByStatus(status) {
      if (status == "AC") {
        return "green";
      } else {
        return "orange";
      }
    }
  }
};
</script>
