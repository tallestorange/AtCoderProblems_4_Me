<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm12 xs12>

          <v-widget v-if="!loading" title="Unique AC" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                :path-option="outd"
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
import API from '@/api';
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
    activity () {
      return API.getActivity();
    },
    posts () {
      return API.getPost(3);
    },
    siteTrafficData () {
      return API.getMonthVisit;
    },
    locationData () {
      return API.getLocation;
    },
    outd() {
      const result = JSON.parse(JSON.stringify(this.acdata))
      console.log(result,this.acdata)
      return [
        ['dataset.source', result],
        ['legend.bottom', '0'],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['series[0].type', 'pie'],
        ['series[0].avoidLabelOverlap', true],         
        ['series[0].radius', ['50%', '70%']],                      
      ]
    }
  },
  mounted () {
    axios
      .get('https://kenkoooo.com/atcoder/atcoder-api/results?user=tallestorange')
      .then(response => {
        this.info = response.data

        var result = {}
        for (var key in this.info) {
          if (this.info[key].result == "AC") {
            result[this.info[key].problem_id] = this.info[key].point
          }
        }
        console.log(result)
        console.log(Object.keys(result).length)

        var graph = {}
        for (var key in result) {
          let value = result[key]
          if (graph[value]) {
            graph[value] += 1
          }
          else {
            graph[value] = 1
          }
        }

        var od = []
        for (var key in graph){
          var value = graph[key]
          od.push({value:value,name:String(key)})
        }

        console.log(od)
        // console.log(JSON.parse(JSON.stringify(od)))

        this.acdata = JSON.parse(JSON.stringify(od))
        this.loading = false
        // console.log(this.acdata)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    }
};
</script>
