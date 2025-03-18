import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");