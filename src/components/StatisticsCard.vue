<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Status</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <div v-if="!isLoading">
      <mini-statistic
        title="AC"
        color="green"
        :number="getStatus.accepted_count"
      ></mini-statistic>
      <mini-statistic
        title="WA"
        color="orange"
        :number="getStatus.submissions_count - getStatus.accepted_count"
      ></mini-statistic>
      <mini-statistic
        title="Point Sum"
        color="blue"
        :number="getStatus.point_sum"
      ></mini-statistic>
    </div>
  </v-card>
</template>

<script>
import MiniStatistic from "@/components/StatusItem";

export default {
  components: {
    MiniStatistic
  },
  data() {
    return {};
  },
  computed: {
    getStatus() {
      const empty_result = { submissions_count: 0, point_sum: 0, accepted_count: 0 }
      const userName = this.$store.getters.getUserName
      const submissionsDictionary = this.$store.getters.getSubmissionsDictionary;
      if (Object.keys(submissionsDictionary) == 0) {
        return empty_result
      }

      const submissions = submissionsDictionary[userName]
      const selectedDate = this.$store.getters.getSelectedDate;

      if (submissions[selectedDate]) {
        return submissions[selectedDate];
      } else {
        return empty_result
      }
    },
    isLoading() {
      return this.$store.getters.getIsNowLoading
    }
  }
};
</script>
