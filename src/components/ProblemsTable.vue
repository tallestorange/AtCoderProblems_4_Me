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
          :pagination.sync="pagination"
          :filter="filter"
          :customFilter="customFilter"
          :search="searchTags"
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">
            
            <td class="text-xs-left green lighten-3" v-if="props.item.your_ac_count > 0">
              <a :href="props.item.url" target="_blank">{{
                props.item.title
              }}</a>
            </td>
            <td class="text-xs-left orange lighten-3" v-else-if="props.item.your_wa_count > 0">
              <a :href="props.item.url" target="_blank">{{
                props.item.title
              }}</a>
            </td>
            <td v-else>
              <a :href="props.item.url" target="_blank">{{
                props.item.title
              }}</a>
            </td>

            <td class="text-xs-left">{{ props.item.point }}</td>
            <td class="text-xs-left">{{ props.item.solver_count }}</td>
            <td class="text-xs-left hidden-xs-and-down">{{ props.item.contest_title }}</td>
            <td class="text-xs-left hidden-md-and-down">{{ props.item.your_ac_count }}</td>
            <td class="text-xs-left hidden-md-and-down">{{ props.item.your_wa_count }}</td>
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
        { text: "Title", value: "title", sortable: false },
        { text: "Score", value: "point" },
        { text: "Solvers", value: "solver_count" },
        { text: "Contest Title", value: "contest_title", class: "hidden-xs-and-down" },
        { text: "Your AC Count", value: "your_ac_count", class: "hidden-md-and-down" },
        { text: "Your WA Count", value: "your_wa_count", class: "hidden-md-and-down" }
      ],
      pagination: {
        sortBy: "point",
        descending: true,
        rowsPerPage: 10
      }
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsNowLoading
    },
    searchTags() {
      return this.$store.getters.getSelectedSearchTags;
    },
    getProblemsList() {
      const userName = this.$store.getters.getUserName;
      const problems = this.$store.getters.getProblems(userName);
      return this.$store.getters.getProblemsForView
    }
  },
  methods: {
    filter(val, search) {
      const searchTags = this.$store.getters.getSelectedSearchTags;
      const contestName = this.$store.getters.getSelectedContestName;

      if (searchTags.length == 0) {
        if (contestName === null || contestName === undefined || contestName == "") {
          return true
        }
        else if (val.contest_title == contestName) {
          return true
        }
      }
      for (let key in search) {
        let tag = searchTags[key];
        if (val.point === undefined && tag == "undefined") {
          if (contestName === null || contestName === undefined || contestName == "") {
            return true
          }
          else if (val.contest_title == contestName) {
            return true
          }
        }
        else if (tag == val.point) {
          if (contestName === null || contestName === undefined || contestName == "") {
            return true
          }
          else if (val.contest_title == contestName) {
            return true
          }
        }
      }
      return false;
    },
    customFilter(items, search, filter) {
      let result = items.filter(item => filter(item, search));
      return result
    }
  }
};
</script>
