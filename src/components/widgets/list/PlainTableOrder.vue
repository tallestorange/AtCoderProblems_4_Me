<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Submissions</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="submissionsData"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.title }}</td>
            <td class="text-xs-left">{{ props.item.point }}</td>
            <td class="text-xs-left"><v-chip label small :color="getColorByStatus(props.item.result)" text-color="white" >{{ props.item.result }}</v-chip></td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import items from '@/api/order';
export default {
  data () {
    return {
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Title', value: 'deadline' },
        { text: 'Point', value: 'progress' },
        { text: 'Result', value: 'status' },

      ],
      items: items,
      colors: {
        processing: 'blue',
        sent: 'red',
        delivered: 'green'
      }
    };
  },
  computed: {
    randomColor () {
      let item = Math.floor(Math.random() * this.colors.length);
      return this.colors[item];
    },
    submissionsData () {
      let problemsDict = this.$store.getters.getProblemsData
      let selectedDate = this.$store.getters.getSelectedDate
      let result = []
      if (selectedDate == "") {
        return []
      }
      let allSubmissions = this.$store.getters.getViewSubmissionsData
      let submissionsData = allSubmissions[selectedDate]

      for (let key in submissionsData) {
        let submission = submissionsData[key]
        let title = problemsDict[submission.problem_id].title
        submission.title = title
        result.push(submission)
      }
      return result
    }
  },
  methods: {
    getColorByStatus (status) {
      // return this.colors[status];
      if (status == "AC") {
        return "green"
      }
      else {
        return "orange"
      }
    },
  }
};
</script>
