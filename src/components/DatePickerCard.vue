<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>AC Calendar</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-date-picker
      full-width
      v-model="date"
      :events="eventsList"
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
    eventsList() {
      return this.$store.getters.getEventsList
    },
  },
  watch: {
    date: function() {
      this.$db.inputs.put({id: "selectedDate", value: this.date});
      this.$store.commit("setSelectedDate", this.date);
    }
  },
  created: async function() {
    let result = ""
    await this.$db.inputs.get("selectedDate").then( (data) => {
      result = data.value
    }).catch( error => {
    });
    if (result != "") {
      this.date = result
    }
  }
};
</script>
