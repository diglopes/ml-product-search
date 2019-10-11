import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import SearchResults from "@/views/SearchResults";
import ProductDescription from "@/views/ProductDescription";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "search-results",
      component: SearchResults
    },
    {
      path: "/search/:id",
      name: "product-description",
      component: ProductDescription
    }
  ]
});
