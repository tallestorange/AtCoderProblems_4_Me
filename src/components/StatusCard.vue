<template>
  <v-layout row wrap>
    <v-flex lg6>
      <v-card height="280px">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title><h4>Accepted</h4></v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <div class="justify-center row layout ma-0">
            <v-progress-circular
            :rotate="-90"
            :value="statusGraphData.ac / statusGraphData.total * 100"
            :size="140"
            :width="20"
            color="primary lighten-1"
            class="mt-2 mb-2 ml-4 mr-4"
            v-if="statusGraphData != null"
          >
            {{ statusGraphData.ac }}
          </v-progress-circular>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="headline">{{(statusGraphData.ac / statusGraphData.total * 100).toFixed(1) + "%"}}</div>
          <div class="caption">{{" (" + statusGraphData.ac + " / " + statusGraphData.total + ")"}}</div>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex lg6>
      <v-card height="280px">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title><h4>Rated Point Sum</h4></v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <div class="justify-center row layout ma-0">
            <v-progress-circular
            :rotate="-90"
            :value="statusGraphData.ac_point_sum / statusGraphData.point_sum * 100"
            :size="140"
            :width="20"
            color="primary lighten-1"
            class="mt-2 mb-2 ml-4 mr-4"
            v-if="statusGraphData != null"
          >
            {{ statusGraphData.ac_point_sum }}
          </v-progress-circular>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="headline">{{(statusGraphData.ac_point_sum / statusGraphData.point_sum * 100).toFixed(1) + "%"}}</div>
          <div class="caption">{{" (" + statusGraphData.ac_point_sum + " / " + statusGraphData.point_sum + ")"}}</div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>



</template>

<script>
export default {
  data() {
    return {
      value: 70
    };
  },
  computed: {
    statusGraphData() {
      let result = {}
      const status = this.$store.getters.getStatusGraphData;
      if (status == null) {
        return null
      }
      
      console.log(status)
      result.total = status.length
      result.point_sum = 0

      result.ac_point_sum = 0
      result.ac = 0

      for (let key in status) {
        if (status[key].point) {
          result.point_sum += status[key].point
        }
        if (status[key].your_ac_count > 0) {
          result.ac += 1
          if (status[key].point) {
            result.ac_point_sum += status[key].point
          }
        }
      }
      return result
    }
  }
};
</script>
