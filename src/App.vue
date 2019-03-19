<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar class="app--toolbar"></app-toolbar>

        <v-content>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
        </v-content>
      </v-app>
    </template>
  </div>
</template>

<script>
import AppDrawer from "@/components/AppDrawer";
import AppToolbar from "@/components/AppToolbar";
import AppEvents from "./event";

export default {
  components: {
    AppDrawer,
    AppToolbar
  },
  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  }
};
</script>

<style>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>
