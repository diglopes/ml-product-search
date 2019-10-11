<template>
  <section>
    <ul class="view-wrapper" v-if="itemsFound">
      <SearchResultItem v-for="item in itemsFound" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script>
import api from "@/services/api.js";

import SearchResultItem from "@/components/SearchResultItem";
import { mapState } from "vuex";

export default {
  name: "search-results",
  components: {
    SearchResultItem
  },
  computed: {
    ...mapState(["searchTerm", "itemsFound"])
  },
  watch: {
    searchTerm() {
      this.fetchItems(this.searchTerm);
    }
  },
  methods: {
    async fetchItems() {
      const { data } = await api.get(`/products?q=${this.searchTerm}`);

      this.$store.commit("SET_ITEMS_FOUND", data.items);
      this.$store.commit("SET_CATEGORIES", data.categories);
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style lang="scss" scoped>
</style>