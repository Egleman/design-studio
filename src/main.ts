import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { useMinWidthBody } from "@/customHook/useMinWidthBody";
const { scrollWidth } = useMinWidthBody();
document.body.style.minWidth = `${320 - scrollWidth}px`;
createApp(App).use(store).use(router).use(VueClickAway).mount("#app");
