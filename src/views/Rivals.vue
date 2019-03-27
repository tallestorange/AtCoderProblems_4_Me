<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>

      <v-flex lg4 sm6 xs12>
        <ranking-table></ranking-table>
      </v-flex>
      <v-flex lg8 sm6 xs12>
        <v-card>
          <v-toolbar card dense color="transparent">
            <v-toolbar-title><h4>Today's Submissions</h4></v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>
          <v-data-table
          :items="[]"
          :pagination.sync="pagination"
          :headers="headers"

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


        </v-card>
      </v-flex>

    </v-layout>
    <rivals-input-dialog></rivals-input-dialog>
  </v-container>
</template>

<script>
import RivalsInputDialog from "@/components/RivalsInputDialog";
import RankingTable from "@/components/RankingTable";

export default {
  components: {
    RivalsInputDialog,
    RankingTable
  },
  data: () => ({
    headers: [
      { text: "By", value: "by" },
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
      sortBy: "point",
      descending: true,
      rowsPerPage: 10
    }
  }),
  methods: {
  },
  computed: {
  },
};
</script>
