<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Rivals</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>

    <v-layout justify-center>
      <v-flex lg11 sm11 xs11>
        <div v-for="(rival, rank) in rivalsList">
          <v-layout row wrap>
            <v-flex lg12 sm12 xs12>
              <v-card>
                <v-card-title primary-title>
                  <div class="display-3 mr-2">{{ rank + 1 }}</div>
                  <v-divider vertical></v-divider>
                  <div class="headline ml-2">{{ rival.userid }}</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                  <div class="subheading">Solved</div>
                  <v-spacer></v-spacer>
                  <div class="headline">{{ rival.accepted_count }}</div>
                </v-card-actions>
                <v-card-actions>
                  <div class="subheading">RatedPointSum</div>
                  <v-spacer></v-spacer>
                  <div class="headline">{{ rival.rated_point_sum }}</div>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    rivalsList() {
      let result = this.$store.getters.getRivalsList;
      result.sort(function(a, b) {
        if (a.rated_point_sum > b.rated_point_sum) return -1;
        if (a.rated_point_sum < b.rated_point_sum) return 1;
        return 0;
      });
      return result;
    }
  },
  methods: {}
};
</script>
