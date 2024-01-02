import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/router.js";

const app = createApp(App).use(router);
app.mount("#app");
