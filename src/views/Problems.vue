<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg6 sm12 xs12>

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

        </v-flex>

        <v-flex lg6 class="hidden-md-and-down">
          <v-card>
            <v-toolbar card dense color="transparent">
              <v-toolbar-title><h4>Status</h4></v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>

            <mini-statistic
              title="AC"
              color="green"
              :number="getStatus.accepted"
            ></mini-statistic>

            <mini-statistic
              title="WA"
              color="orange"
              :number="getStatus.submissions-getStatus.accepted"
            ></mini-statistic>

            <mini-statistic
              title="Point Sum"
              color="blue"
              :number="getStatus.point_sum"
            ></mini-statistic>

          </v-card>
        </v-flex>

        <v-flex lg12 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic'
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  components: {
    VWidget,
    PlainTableOrder,
    MiniStatistic
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    rawDate: "null",
    dates: [],
    pickerDate: null,
    date: new Date().toISOString().substr(0, 10),
  }),
  methods: {
  },
  computed: {
    arrayEvents () {
      let submissionsData = this.$store.getters.getHeatMapData
      let result = []
      for(let key in submissionsData) {
        result.push(key)
      }
      return result
    },
    getStatus () {
      let submissionsData = this.$store.getters.getHeatMapData
      let selectedDate = this.$store.getters.getSelectedDate
      if (submissionsData[selectedDate]) {
        return submissionsData[selectedDate]
      }
      else {
        return { "submissions": 0, "point_sum": 0, "accepted": 0 }
      }
    }
  },
  watch: {
    date: function() {
      this.$store.commit('setSelectedDate', this.date)
    }
  }
};

</script>
