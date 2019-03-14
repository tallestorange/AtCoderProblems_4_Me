<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm6 xs12>

          <v-widget v-if="!isLoading" title="Unique AC" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                :path-option="uniqueAC"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>
      
        </v-flex>

        <v-flex lg4 sm6 xs12>

          <v-widget v-if="!isLoading" title="Point Sum" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                :path-option="pointSum"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>
      
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EChart from '@/components/chart/echart';
import VWidget from '@/components/VWidget';
import Material from 'vuetify/es5/util/colors';
import axios from 'axios';

export default {
  components: {
    VWidget,
    EChart,  
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    info: null,
    loading: true,
    errored: false,
    acdata: []
  }),
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingState
    },
    uniqueAC() {
      const result = JSON.parse(JSON.stringify(this.$store.getters.getGraphData))
      return [
        ['dataset.source', result],
        ['legend.bottom', '0'],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['series[0].type', 'pie'],
        ['series[0].avoidLabelOverlap', true],         
        ['series[0].radius', ['50%', '70%']],                      
      ]
    },
    pointSum() {
      const result = JSON.parse(JSON.stringify(this.$store.getters.getGraphData))
      var output = []

      for (var key in result) {
        output.push({value:Number(result[key].name)*(result[key].value),name:result[key].name })
      }

      return [
        ['dataset.source', output],
        ['legend.bottom', '0'],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['series[0].type', 'pie'],
        ['series[0].avoidLabelOverlap', true],         
        ['series[0].radius', ['50%', '70%']],                      
      ]
    }
  },
  created: function() {
    this.$store.dispatch('getSubmissionData',{name: 'tallestorange'})
  },
};

</script>
