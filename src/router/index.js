import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import store from "../store";
import "nprogress/nprogress.css";

Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "hash",
  linkActiveClass: "active",
  routes: paths
});
// router gards
router.beforeEach((to, from, next) => {
  const problems = store.getters.getProblemsData;
  const submissions = store.getters.getSubmissionsRawData;
  if (problems === null) {
    store.dispatch("loadProblemsData");
  }
  if (submissions.length == 0) {
    store.dispatch("loadSubmissionsData");
  }
  next();
});

export default router;
