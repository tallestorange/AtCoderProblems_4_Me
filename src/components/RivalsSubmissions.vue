<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Today's Submissions</h4></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat icon @click="pushedRefreshButton" v-if="!isLoading">
        <v-icon>autorenew</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-data-table
      :pagination.sync="pagination"
      :headers="headers"
      :items="getProblemsList"
      class="elevation-0 table-striped"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.user_id }}</td>
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
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "By", value: "user_id" },
        {
          text: "ID",
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
      },
      isLoading: false
      };
  },
  computed: {
    getProblemsList() {
      let result = [];
      const rivals = this.$store.getters.getRivalsList;
      for (let key in rivals) {
        let rival = rivals[key];
        let detail = this.$store.getters.getSubmissions(rival.userid);
        if (detail !== undefined) {
          let dt = new Date();
          let yr = dt.getFullYear();
          let mn = ("00" + (dt.getMonth() + 1)).slice(-2);
          let dy = ("00" + dt.getDate()).slice(-2);
          let dateStr = yr + "-" + mn + "-" + dy;
          let todaysSubmissions = detail[dateStr];
          if (todaysSubmissions !== undefined) {
            Array.prototype.push.apply(result, todaysSubmissions.submissions);
          }
        }
      }
      return result;
    }
  },
  methods: {
    getColorByStatus(status) {
      if (status == "AC") {
        return "green";
      } else {
        return "orange";
      }
    },
    pushedRefreshButton: async function() {
      this.isLoading = true;
      const rivals = this.$store.getters.getRivalsList;
      for (let key in rivals) {
        let rival = rivals[key];
        await this.$store.dispatch("fetchAll", rival.userid).then(() => {
          console.log("Successfully loaded " + rival.userid);
        });
      }
      this.isLoading = false;
    }
  }
};
</script>
