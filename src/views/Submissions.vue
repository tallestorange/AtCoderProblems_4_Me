<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <date-picker-card></date-picker-card>
        </v-flex>
        <v-flex lg6 class="hidden-md-and-down">
          <statistics-card></statistics-card>
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <submissions-table></submissions-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SubmissionsTable from "@/components/SubmissionsTable";
import StatisticsCard from "@/components/StatisticsCard";
import DatePickerCard from "@/components/DatePickerCard";

export default {
  components: {
    SubmissionsTable,
    StatisticsCard,
    DatePickerCard
  },
  data() {
    return {};
  },
  watch: {
    date: function() {
      this.$store.commit("setSelectedDate", this.date);
    }
  }
};
</script>
