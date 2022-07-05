import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.mount("#app");
