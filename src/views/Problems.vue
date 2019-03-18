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
              :events="arrayEvents"
              color="indigo"
              full-width
              landscape
              v-model="date"
              event-color="green lighten-1"
            ></v-date-picker>
          </v-card>

        </v-flex>

        <v-flex lg6 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  components: {
    VWidget,
    PlainTableOrder,
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    date: new Date().toISOString().substr(0, 10),
  }),
  methods: {
  },
  computed: {
  },
};

</script>
