<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    app
    v-model="drawer"
    width="260"
  >
    <v-toolbar>
      <v-text-field
        v-model="username"
        label="UserID"
        clearable
        @keyup.enter="sendUserName"
        @keypress="setCanMessageSubmit"
        class="mt-3"
      >
        >
      </v-text-field>
    </v-toolbar>
    <vue-perfect-scrollbar
      class="drawer-menu--scroll"
      :settings="scrollSettings"
    >
      <v-list dense expand>
        <template v-for="(item, i) in menus">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <v-list-tile slot="activator" ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <template v-for="(subItem, i) in item.items">
              <!--sub group-->
              <v-list-group
                v-if="subItem.items"
                :key="subItem.name"
                :group="subItem.group"
                sub-group="sub-group"
              >
                <v-list-tile slot="activator" ripple="ripple">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                  v-for="(grand, i) in subItem.children"
                  :key="i"
                  :to="genChildTarget(item, grand)"
                  :href="grand.href"
                  ripple="ripple"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
              <!--child item-->
              <v-list-tile
                v-else
                :key="i"
                :to="genChildTarget(item, subItem)"
                :href="subItem.href"
                :disabled="subItem.disabled"
                :target="subItem.target"
                ripple="ripple"
              >
                <v-list-tile-content>
                  <v-list-tile-title
                    ><span>{{ subItem.title }}</span></v-list-tile-title
                  >
                </v-list-tile-content>
                <v-list-tile-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">{{
                    subItem.action
                  }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i">{{
            item.header
          }}</v-subheader>
          <v-divider v-else-if="item.divider" :key="i"></v-divider>
          <!--top-level link-->
          <v-list-tile
            v-else
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="item.name"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>

        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>NightMode</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-model="darkMode"> </v-switch>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
import menu from "@/api/menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    drawer: true,
    darkMode: false,
    menus: menu,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    username: "",
    canMessageSubmit: false
  }),
  computed: {
    computeGroupActive() {
      return true;
    },
    sideToolbarColor() {
      return this.$vuetify.options.extra.sideNav;
    },
    userName() {
      return this.$store.getters.getUserName;
    }
  },
  created: async function() {
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });

    let isDarkMode = false;
    await this.$db.inputs
      .get("isDarkMode")
      .then(data => {
        isDarkMode = data.value;
      })
      .catch(error => {});
    this.darkMode = isDarkMode;

    let result = "";
    await this.$db.inputs
      .get("userName")
      .then(data => {
        result = data.value;
      })
      .catch(error => {});
    this.$store.commit("setUserName", result);
    this.username = result;
  },
  watch: {
    darkMode: function() {
      this.$db.inputs.put({ id: "isDarkMode", value: this.darkMode });
      this.$store.commit("setIsDarkMode", this.darkMode);
    }
  },
  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return;
      if (subItem.component) {
        return {
          name: subItem.component
        };
      }
      return { name: `${item.group}/${subItem.name}` };
    },
    setCanMessageSubmit() {
      this.canMessageSubmit = true;
    },
    sendUserName: async function() {
      const userName = this.username;
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

<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
