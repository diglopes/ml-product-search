<template>
  <section>
    <ul class="view-wrapper" v-if="itemsFound">
      <SearchResultItem v-for="item in itemsFound" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script>
import SearchResultItem from "@/components/SearchResultItem";
import { mapState } from "vuex";

export default {
  name: "search-results",
  components: {
    SearchResultItem
  },
  computed: {
    ...mapState(["itemsFound", "categories"]),
    search() {
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
      let term = this.search;

      if (!term) {
        term = this.query || "computadores";
      }

      const regex = /\+/g;
      const termWithSpace = term.replace(regex, " ");

      this.$store.dispatch("FEATCH_DATA", termWithSpace);
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style lang="scss" scoped>
</style>