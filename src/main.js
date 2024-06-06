import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/tailwind.css";
import store from "./store";
import naive from "naive-ui";
createApp(App)
.use(store)
.use(router)
.use(naive)
.mount("#app");
