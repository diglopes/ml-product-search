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

Vue.filter("translateCondition", value => {
  switch (value) {
    case "new":
      return "Novo";
  }
});

import "@/assets/global.css";
import "@/assets/transitions.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
