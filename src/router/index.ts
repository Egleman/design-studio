import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPageApp from "@/views/MainPageApp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainPageApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
