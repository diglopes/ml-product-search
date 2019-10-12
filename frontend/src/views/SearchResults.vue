<template>
  <section>
    <ul class="view-wrapper" v-if="itemsFound">
      <SearchResultItem v-for="item in itemsFound" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script>
import SearchResultItem from "@/components/SearchResultItem";

export default {
  name: "search-results",
  components: {
    SearchResultItem
  },
  computed: {
    itemsFound() {
      return this.$store.state.itemsFound;
    },
    searchQuery() {
      return this.$route.query.search;
    }
  },
  watch: {
    "$route.query.search"() {
      this.$store.dispatch("FEATCH_DATA", this.$route.query.search);
    }
  },
  methods: {
    async fetchItems() {
      let term = this.searchQuery;

      if (!term) {
        term = "Categorias";
      }

      this.$store.dispatch("FEATCH_DATA", term);
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style lang="scss" scoped>
</style>