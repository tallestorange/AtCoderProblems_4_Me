<template>
  <v-toolbar fixed app>
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
    <v-btn flat icon v-if="!isLoading" @click="pushedRefreshButton">
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
      return this.$store.getters.getIsNowLoading;
    }
  },
  methods: {
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },
    pushedRefreshButton: async function() {
      const userName = this.$store.getters.getUserName;
      this.$db.inputs.put({ id: "userName", value: userName });
      this.$store.commit("setUserName", userName);
      const self = this;
      this.$store.dispatch("fetchAll", userName).then(() => {
        const problems = self.$store.getters.getProblems(userName);
        const scores = self.$store.getters.getScores(userName);
        const submissions = self.$store.getters.getSubmissions(userName);
        const eventsList = Object.keys(submissions);
        const problemsList = Object.values(problems);

        self.$store.commit("setProblemsForView", problemsList);
        self.$store.commit("setScoresForView", scores);
        self.$store.commit("setEventsList", eventsList);
      });
    }
  }
};
</script>
