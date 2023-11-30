import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPageApp from "@/views/MainPageApp.vue";
import AdvantagesPageApp from "@/views/AdvantagesPageApp.vue";
import StagesPageApp from "@/views/StagesPageApp.vue";
import PortfolioPageApp from "@/views/PortfolioPageApp.vue";
import FaqPageApp from "@/views/FaqPageApp.vue";
import ReviewsPageApp from "@/views/ReviewsPageApp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainPageApp,
  },
  {
    path: "/advantages",
    name: "advantages",
    component: AdvantagesPageApp
  },
  {
    path: "/stages",
    name: "stages",
    component: StagesPageApp
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioPageApp
  },
  {
    path: "/faq",
    name: "faq",
    component: FaqPageApp
  },
  {
    path: "/reviews",
    name: "reviews",
    component: ReviewsPageApp
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
