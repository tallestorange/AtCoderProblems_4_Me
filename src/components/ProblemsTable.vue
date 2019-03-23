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
    searchTags() {
      return this.$store.getters.getSelectedSearchTags;
    },
    getProblemsList() {
      const problems = this.$store.getters.getProblemsDictionary
      return Object.values(problems);
    }
  },
  methods: {
    filter(val, search) {
      const searchTags = this.$store.getters.getSelectedSearchTags;
      if (searchTags.length == 0) {
        return true;
      }
      for (let key in search) {
        let tag = searchTags[key];
        if (val === undefined && tag == "undefined") {
          return true;
        }
        else if (tag == val) {
          return true;
        }
      }
      return false;
    },
    customFilter(items, search, filter) {
      let result = items.filter(item => filter(item.point, search));
      // this.$store.commit("setStatusGraphData", result);
      return result
    }
  }
};
</script>
