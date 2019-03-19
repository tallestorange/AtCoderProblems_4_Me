<template>
  <v-card height="240px">
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Status</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-layout justify-center>
      <v-progress-circular
        :rotate="-90"
        :value="statusGraphData.ac / statusGraphData.total * 100"
        :size="170"
        :width="20"
        color="primary"
        class="mt-2 mb-2"
        v-if="statusGraphData"
      >
        {{ statusGraphData.ac + " / " + statusGraphData.total }}
      </v-progress-circular>
    </v-layout>
  </v-card>
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
      result.total = status.length
      result.ac = 0
      for (let key in status) {
        if (status[key].your_ac_count > 0) {
          result.ac += 1
        }
      }
      return result
    }
  }
};
</script>
