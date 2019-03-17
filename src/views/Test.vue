<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg6 sm6 xs12>
          <v-widget title="Unique AC" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                v-if="!isLoading"
                :path-option="uniqueAC"
                height="400px"
                width="100%"     
                >
                </e-chart>     
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg6 sm6 xs12>
          <v-widget title="Rated Point Sum" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                v-if="!isLoading"
                :path-option="pointSum"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg12 sm12 xs12>
          <v-widget title="Earned Points" content-bg="white">
            <div slot="widget-content">
              <heat-map
                height="260px"
                v-if="!isLoading"
              >
              </heat-map>
            </div>
          </v-widget>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EChart from '@/components/chart/echart'
import HeatMap from '@/components/chart/heatmap'
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  components: {
    VWidget,
    EChart,
    HeatMap,
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
  }),
  methods: {
    getColor(rate) {
      if (rate == 100) {
        return "#e6e6e6"
      }
      else if (rate == 200) {
        return "#e3e37b"
      }
      else if (rate == 300) {
        return "#84f584"
      }
      else if (rate == 400) {
        return "#84dbf5"
      }
      else if (rate >= 500 && rate <= 600) {
        return "#84a0f5"
      }
      else if (rate >= 700 && rate <= 800) {
        return "#f1f584"
      }
      else if (rate >= 900 && rate <= 1100) {
        return "#f5c084"
      }
      else if (rate >= 1200 && rate <= 1500) {
        return "#f58484"
      }
      else if (rate >= 1600 && rate <= 1900) {
        return "#e6e6e6"
      }
      else if (rate >= 2000) {
        return "#e3e37b"
      }
      else {
        return "#696969	"
      }
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingState
    },
    uniqueAC() {
      this.$store.commit('setRatedSubmissionsData')
      this.$store.commit('setRatedGraphData')

      const result = JSON.parse(JSON.stringify(this.$store.getters.getRatedGraphData))
      let val = 0
      let colors = []
      for (var key in result) {
        colors.push(this.getColor(result[key].name))
        val += result[key].value
      }

      return [
        ['dataset.source', result],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['series[0].type', 'pie'],
        ['series[0].avoidLabelOverlap', true],         
        ['series[0].radius', ['50%', '70%']], 
        ['title.text', String(val)],
        ['color',colors]                
      ]
    },
    pointSum() {
      // use lodash
      const result = JSON.parse(JSON.stringify(this.$store.getters.getRatedGraphData))
      let output = []
      let val = 0
      let colors = []

      for (var key in result) {
        if (result[key].name == "null"){
          continue
        }
        colors.push(this.getColor(result[key].name))
        val += result[key].name * result[key].value
      }

      for (var key in result) {
        output.push({value:Number(result[key].name)*(result[key].value),name:result[key].name })
      }

      return [
        ['dataset.source', output],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['series[0].type', 'pie'],
        ['series[0].avoidLabelOverlap', true],         
        ['series[0].radius', ['50%', '70%']],
        ['title.text', String(val)],
        ['color',colors]
      ]
    }
  },
};

</script>
