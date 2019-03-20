<template>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-card>
            <v-toolbar card dense color="transparent">
              <v-toolbar-title><h4>Coming soon...</h4></v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    

    <div style="right: 5vw; bottom: 4vh; z-index: 999; position: fixed;">
      <v-btn fab color="primary">
        <v-icon>add</v-icon>
      </v-btn>
    </div>

    </v-container>

</template>

<script>

export default {
  components: {},
  data: () => ({
    rawDate: "null",
    dates: [],
    pickerDate: null,
    date: new Date().toISOString().substr(0, 10)
  }),
  methods: {},
  computed: {
    arrayEvents() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let result = [];
      for (let key in submissionsData) {
        result.push(key);
      }
      return result;
    },
    getStatus() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let selectedDate = this.$store.getters.getSelectedDate;
      if (submissionsData[selectedDate]) {
        return submissionsData[selectedDate];
      } else {
        return { submissions: 0, point_sum: 0, accepted: 0 };
      }
    }
  },
  watch: {
    date: function() {
      this.$store.commit("setSelectedDate", this.date);
    }
  }
};
</script>
