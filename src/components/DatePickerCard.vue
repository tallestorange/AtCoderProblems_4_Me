<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>AC Calendar</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-date-picker
      v-if="!isLoading"
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
      const userName = this.$store.getters.getUserName;
      const submissionsData = this.$store.getters.getSubmissionsDictionary;
      console.log(submissionsData[userName])
      return Object.keys(submissionsData[userName]); 
    },
    isLoading() {
      return this.$store.getters.getIsNowLoading
    }
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
