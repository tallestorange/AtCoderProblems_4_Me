<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg6 sm6 xs12>
        <v-card>
          <v-toolbar card dense color="transparent">
            <v-toolbar-title><h4>Rivals</h4></v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>

            <v-layout justify-center>
            <v-flex lg11 sm11 xs11>
              <v-layout row wrap>

                  <v-flex lg12 sm12 xs12>
                    <v-card>
                      <v-card-title primary-title>
                        <div class="display-3 mr-2">1</div>
                        <v-divider vertical></v-divider>
                        <div class="headline ml-2">tourist</div>
                        <v-spacer></v-spacer>
                        <v-layout column wrap align-end>
                        <v-btn outline icon>
                          <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn outline icon>
                          <v-icon>notifications</v-icon>
                        </v-btn>
                        </v-layout>
                      </v-card-title> 
                      <v-divider></v-divider>
                      <v-card-actions>
                        <div class="subheading">Solved</div>
                        <v-spacer></v-spacer>
                        <div class="headline">10000</div>
                      </v-card-actions>
                      <v-card-actions>
                        <div class="subheading">RatedPointSum</div>
                        <v-spacer></v-spacer>
                        <div class="headline">1000000000</div>
                      </v-card-actions> 
                    </v-card>
                  </v-flex>

                  <v-flex lg12 sm12 xs12>
                    <v-card>
                      <v-card-title primary-title>
                        <div class="display-3 mr-2">2</div>
                        <v-divider vertical></v-divider>
                        <div class="headline ml-2">tallestorange</div>
                        <v-spacer></v-spacer>
                        <v-layout column wrap align-end>
                        <v-btn outline icon>
                          <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn outline icon>
                          <v-icon>notifications</v-icon>
                        </v-btn>
                        </v-layout>
                      </v-card-title> 
                      <v-divider></v-divider>
                      <v-card-actions>
                        <div class="subheading">Solved</div>
                        <v-spacer></v-spacer>
                        <div class="headline">1</div>
                      </v-card-actions>
                      <v-card-actions>
                        <div class="subheading">RatedPointSum</div>
                        <v-spacer></v-spacer>
                        <div class="headline">100</div>
                      </v-card-actions> 
                    </v-card>
                  </v-flex>

              </v-layout>
            </v-flex>
            </v-layout>

        </v-card>
      </v-flex>
    </v-layout>
    <rivals-input-dialog></rivals-input-dialog>
  </v-container>
</template>

<script>
import RivalsInputDialog from "@/components/RivalsInputDialog";

export default {
  components: {
    RivalsInputDialog
  },
  data: () => ({
    rawDate: "null",
    dates: [],
    pickerDate: null,
    date: new Date().toISOString().substr(0, 10)
  }),
  methods: {},
  computed: {
    arrayEvents() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let result = [];
      for (let key in submissionsData) {
        result.push(key);
      }
      return result;
    },
    getStatus() {
      let submissionsData = this.$store.getters.getHeatMapData;
      let selectedDate = this.$store.getters.getSelectedDate;
      if (submissionsData[selectedDate]) {
        return submissionsData[selectedDate];
      } else {
        return { submissions: 0, point_sum: 0, accepted: 0 };
      }
    }
  },
  watch: {
    date: function() {
      this.$store.commit("setSelectedDate", this.date);
    }
  }
};
</script>
