<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg4 sm6 xs12>
        <ranking-table></ranking-table>
      </v-flex>
      <v-flex lg8 sm6 xs12>
        <rivals-submissions></rivals-submissions>
      </v-flex>
    </v-layout>
    <rivals-input-dialog></rivals-input-dialog>
  </v-container>
</template>

<script>
import RivalsInputDialog from "@/components/RivalsInputDialog";
import RivalsSubmissions from "@/components/RivalsSubmissions";
import RankingTable from "@/components/RankingTable";

export default {
  components: {
    RivalsInputDialog,
    RivalsSubmissions,
    RankingTable
  },
  data: () => ({
  }),
  methods: {
  },
  computed: {
  }
};
</script>
