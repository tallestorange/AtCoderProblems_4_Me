export default [
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "Problems"
    }
  },
  {
    path: "/userinfo",
    meta: { breadcrumb: true },
    name: "UserInfo",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/UserInfo.vue`)
  },
  {
    path: "/submissions",
    meta: { breadcrumb: true },
    name: "Submissions",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Submissions.vue`)
  },
  {
    path: "/problems",
    meta: { breadcrumb: true },
    name: "Problems",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Problems.vue`)
  },
  {
    path: "/rivals",
    meta: { breadcrumb: true },
    name: "Rivals",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Rivals.vue`)
  }
];
