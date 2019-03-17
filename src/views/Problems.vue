<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

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
  }),
  methods: {
  },
  computed: {
  },
};

</script>
