<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
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
  watch: {
    date: function() {
      this.$store.commit("setSelectedDate", this.date);
    }
  }
};
</script>
