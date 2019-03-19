<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Status</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <mini-statistic
      title="AC"
      color="green"
      :number="getStatus.accepted"
    ></mini-statistic>
    <mini-statistic
      title="WA"
      color="orange"
      :number="getStatus.submissions - getStatus.accepted"
    ></mini-statistic>
    <mini-statistic
      title="Point Sum"
      color="blue"
      :number="getStatus.point_sum"
    ></mini-statistic>
  </v-card>
</template>

<script>
import MiniStatistic from "@/components/parts/StatusItem";

export default {
  components: {
    MiniStatistic,
  },
  data() {
    return {
    };
  },
  computed: {
    getStatus() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let selectedDate = this.$store.getters.getSelectedDate;
      if (submissionsData[selectedDate]) {
        return submissionsData[selectedDate];
      } else {
        return { submissions: 0, point_sum: 0, accepted: 0 };
      }
    }
  },
};
</script>
