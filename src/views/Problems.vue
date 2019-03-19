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
import Material from "vuetify/es5/util/colors";
import ProblemsTable from "@/components/parts/ProblemsTable";

export default {
  components: {
    ProblemsTable
  },
  data: () => ({
    color: Material,
    rawDate: "null",
    dates: [],
    pickerDate: null,
    date: new Date().toISOString().substr(0, 10)
  }),
  methods: {},
  computed: {
    
  },
  created: function() {
    let problems = this.$store.getters.getProblemsData;
    if (problems === null) {
      this.$store.dispatch("fetchProblemsData");
    }
  }
};
</script>
