<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>AC Calendar</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-date-picker
      color="indigo"
      full-width
      v-model="date"
      :events="arrayEvents"
      event-color="green lighten-1"
    ></v-date-picker>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {
    arrayEvents() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let result = [];
      for (let key in submissionsData) {
        result.push(key);
      }
      return result;
    }
  },
  watch: {
    date: function() {
      this.$store.commit("setSelectedDate", this.date);
    }
  }
};
</script>
