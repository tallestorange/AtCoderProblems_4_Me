<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm6 xs12>
          <v-widget title="Unique AC" content-bg="white" v-if="!isLoading">
            <div slot="widget-content">
              <e-chart :path-option="uniqueAC" height="400px" width="100%">
              </e-chart>
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg6 sm6 xs12>
          <v-widget
            title="Rated Point Sum"
            content-bg="white"
            v-if="!isLoading"
          >
            <div slot="widget-content">
              <e-chart :path-option="pointSum" height="400px" width="100%">
              </e-chart>
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg12 sm12 xs12 class="hidden-md-and-down">
          <v-widget title="Earned Points" content-bg="white" v-if="!isLoading">
            <div slot="widget-content">
              <heat-map height="260px"> </heat-map>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EChart from "@/components/DonutGraph";
import HeatMap from "@/components/HeatMap";
import VWidget from "@/components/VWidget";

export default {
  components: {
    VWidget,
    EChart,
    HeatMap
  },
  data: () => ({}),
  methods: {
    getColor(rate) {
      if (rate == 100) {
        return "#e6e6e6";
      } else if (rate == 200) {
        return "#e3e37b";
      } else if (rate == 300) {
        return "#84f584";
      } else if (rate == 400) {
        return "#84dbf5";
      } else if (rate >= 500 && rate <= 600) {
        return "#84a0f5";
      } else if (rate >= 700 && rate <= 800) {
        return "#f1f584";
      } else if (rate >= 900 && rate <= 1100) {
        return "#f5c084";
      } else if (rate >= 1200 && rate <= 1500) {
        return "#f58484";
      } else if (rate >= 1600 && rate <= 1900) {
        return "#e6e6e6";
      } else if (rate >= 2000) {
        return "#e3e37b";
      } else {
        return "#696969	";
      }
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsNowLoading;
    },
    uniqueAC() {
      const userName = this.$store.getters.getUserName;
      const scoresDict = this.$store.getters.getScores(userName);
      let result = [];

      let val = 0;
      let colors = [];
      for (var key in scoresDict) {
        let ac = scoresDict[key].accepted_count;
        if (ac > 0) {
          result.push({ value: ac, name: key });
          colors.push(this.getColor(Number(key)));
        }
        val += ac;
      }

      return [
        ["dataset.source", result],
        ["xAxis.show", false],
        ["yAxis.show", false],
        ["series[0].type", "pie"],
        ["series[0].avoidLabelOverlap", true],
        ["series[0].radius", ["50%", "70%"]],
        ["title.text", String(val)],
        ["color", colors]
      ];
    },
    pointSum() {
      const userName = this.$store.getters.getUserName;
      const scoresDict = this.$store.getters.getScores(userName);
      let result = [];

      let val = 0;
      let colors = [];
      for (var key in scoresDict) {
        let ac = scoresDict[key].accepted_count;
        let score = key != "undefined" ? Number(key) : 0;

        if (ac > 0 && score != 0) {
          result.push({ value: ac * score, name: key });
          colors.push(this.getColor(score));
        }
        val += ac * score;
      }

      return [
        ["dataset.source", result],
        ["xAxis.show", false],
        ["yAxis.show", false],
        ["series[0].type", "pie"],
        ["series[0].avoidLabelOverlap", true],
        ["series[0].radius", ["50%", "70%"]],
        ["title.text", String(val)],
        ["color", colors]
      ];
    }
  }
};
</script>
