<template>
  <v-toolbar
    color="indigo"
    fixed
    dark
    app
  >
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title class="ml-0 pl-3 font-weight-regular">
      Competitive Programming
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-progress-circular
      indeterminate
      color="primary"
      v-if="isLoading"
    ></v-progress-circular>
      
  </v-toolbar>
</template>
<script>
import NotificationList from '@/components/widgets/list/NotificationList';
import Util from '@/util';
export default {
  name: 'app-toolbar',
  components: {
    NotificationList
  },
  data: () => ({
    items: [
    ],
  }),
  computed: {
    toolbarColor () {
      return this.$vuetify.options.extra.mainNav;
    },
    isLoading() {
      return this.$store.getters.getLoadingState
    }
  },
  methods: {
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
    handleFullScreen () {
      Util.toggleFullScreen();
    }
  }
};
</script>
