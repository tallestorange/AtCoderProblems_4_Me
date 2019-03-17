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
          :items="submissiosData"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.problem_id }}</td>
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
        { text: 'problem_id', value: 'deadline' },
        { text: 'point', value: 'progress' },
        { text: 'result', value: 'status' },

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
    submissiosData () {
      let submissionData = this.$store.getters.getSubmissionsRawData
      submissionData.sort(function(a,b){
        if(a.id<b.id) return 1
        if(a.id>b.id) return -1
        return 0
      })
      return submissionData.slice(0,100)
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
