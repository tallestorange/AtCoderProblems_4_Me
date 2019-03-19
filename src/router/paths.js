export default [
  {
    path: "*",
    meta: {
      public: true
    },
    redirect: {
      path: "/404"
    }
  },
  {
    path: "/404",
    meta: {
      public: true
    },
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/NotFound.vue`)
  },
  {
    path: "/403",
    meta: {
      public: true
    },
    name: "AccessDenied",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Deny.vue`)
  },
  {
    path: "/500",
    meta: {
      public: true
    },
    name: "ServerError",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Error.vue`)
  },
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "Problems"
    }
  },
  {
    path: "/dashboard",
    meta: { breadcrumb: true },
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Dashboard.vue`)
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
