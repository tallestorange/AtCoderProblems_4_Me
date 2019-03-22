<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <search-card></search-card>
        </v-flex>
        <v-flex lg6 class="hidden-md-and-down">
          <status-card></status-card>
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <problems-table></problems-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProblemsTable from "@/components/ProblemsTable";
import SearchCard from "@/components/SearchCard";
import StatusCard from "@/components/StatusCard";

export default {
  components: {
    ProblemsTable,
    SearchCard,
    StatusCard
  },
  data() {
    return {
    };
  }
};
</script>
