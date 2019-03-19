<template>
  <v-toolbar color="indigo" fixed dark app>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title class="ml-0 pl-3 font-weight-regular">
      AtCoder Problems 4 Me
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-progress-circular
      indeterminate
      color="primary"
      v-if="isLoading"
    ></v-progress-circular>
    <v-btn flat icon v-else @click="pushedRefreshButton">
      <v-icon>autorenew</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: "app-toolbar",
  components: {},
  data: () => ({
    date: new Date().toISOString().substr(0, 10)
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    isLoading() {
      return this.$store.getters.getLoadingState;
    }
  },
  methods: {
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },
    pushedRefreshButton() {
      this.$store.dispatch("fetchProblemsData");
      this.$store.dispatch("fetchSubmissionsData");
    }
  }
};
</script>
