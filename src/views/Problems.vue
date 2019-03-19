<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <search-card></search-card>
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
import SearchCard from "@/components/SearchCard";

export default {
  components: {
    ProblemsTable,
    SearchCard
  },
  data() {
    return {};
  },
  created: function() {
    let problems = this.$store.getters.getProblemsData;
    if (problems === null) {
      this.$store.dispatch("fetchProblemsData");
    }
  }
};
</script>
