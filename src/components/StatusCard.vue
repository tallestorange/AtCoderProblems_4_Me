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
              v-if="!isLoading"
              :rotate="-90"
              :value="(statusGraphData.ac / statusGraphData.total) * 100"
              :size="140"
              :width="20"
              color="primary lighten-1"
              class="mt-2 mb-2 ml-4 mr-4"
            >
              {{ statusGraphData.ac }}
            </v-progress-circular>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="!isLoading">
          <div class="headline">
            {{
              ((statusGraphData.ac / statusGraphData.total) * 100).toFixed(1) +
                "%"
            }}
          </div>
          <div class="caption">
            {{
              " (" + statusGraphData.ac + " / " + statusGraphData.total + ")"
            }}
          </div>
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
              v-if="!isLoading"
              :rotate="-90"
              :value="
                (statusGraphData.ac_point_sum / statusGraphData.point_sum) * 100
              "
              :size="140"
              :width="20"
              color="primary lighten-1"
              class="mt-2 mb-2 ml-4 mr-4"
            >
              {{ statusGraphData.ac_point_sum }}
            </v-progress-circular>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="!isLoading">
          <div class="headline">
            {{
              (
                (statusGraphData.ac_point_sum / statusGraphData.point_sum) *
                100
              ).toFixed(1) + "%"
            }}
          </div>
          <div class="caption">
            {{
              " (" +
                statusGraphData.ac_point_sum +
                " / " +
                statusGraphData.point_sum +
                ")"
            }}
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLoading() {
      const scoresDict = this.$store.getters.getScoresForView;
      return Object.keys(scoresDict).length == 0;
    },
    statusGraphData() {
      const searchTags = this.$store.getters.getSelectedSearchTags;
      const scoresDict = this.$store.getters.getScoresForView;

      let result = {};
      result["total"] = 0;
      result["point_sum"] = 0;
      result["ac_point_sum"] = 0;
      result["ac"] = 0;

      if (searchTags.length == 0) {
        for (let key in scoresDict) {
          let score = key;
          let data = scoresDict[key];
          if (score == "undefined") {
            score = 0;
          }
          result["point_sum"] += data.problems_count * Number(score);
          result["total"] += data.problems_count;
          result["ac"] += data.accepted_count;
          result["ac_point_sum"] += data.accepted_count * Number(score);
        }
      } else {
        for (let key in searchTags) {
          let score = searchTags[key];
          let data = scoresDict[score];
          if (data) {
            result["point_sum"] += data.problems_count * Number(score);
            result["total"] += data.problems_count;
            result["ac"] += data.accepted_count;
            result["ac_point_sum"] += data.accepted_count * Number(score);
          }
        }
      }

      if (result["point_sum"] == 0 && result["ac_point_sum"] == 0) {
        result["point_sum"] = 1
      }
      if (result["ac"] == 0 && result["total"] == 0) {
        result["total"] = 1
      }

      return result;
    }
  }
};
</script>
