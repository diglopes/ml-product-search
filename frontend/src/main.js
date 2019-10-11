import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("setPriceToBRL", value => {
  value = +value;
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});

import "@/assets/global.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
