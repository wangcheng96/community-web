import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "wind",
    component: () => import("../views/wind/index.vue"),
  },
  {
    path: "/sea",
    name: "sea",
    component: () => import("../views/sea/index.vue"),
  },
  {
    path: "/chase",
    name: "chase",
    component: () => import("../views/chase/index.vue"),
  },
  {
    path: "/dance",
    name: "dance",
    component: () => import("../views/dance/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  routes,
});

export default router;
