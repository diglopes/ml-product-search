import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import SearchResults from "@/views/SearchResults";
import ProductDescription from "@/views/ProductDescription";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  afterEach: (to, from, next) => {
    document.title = to.meta.title;
    next();
  },
  scrollBehavior: () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },
  routes: [
    {
      path: "*",
      redirect: { name: "search-results", query: { search: "categorias" } }
    },
    {
      path: "/",
      name: "search-results",
      component: SearchResults
    },
    {
      path: "/product/:id",
      name: "product-description",
      component: ProductDescription
    }
  ]
});
