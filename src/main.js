import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/tailwind.css";
import store from "./store";
import naive from "naive-ui";
import api from "./api";

// Create a global property $api
const app = createApp(App);
app.config.globalProperties.$api = api;

app.use(store).use(router).use(naive).mount("#app");
