<template>
  <section>
    <ul class="results-container">
      <SearchResultItem />
      <SearchResultItem />
      <SearchResultItem />
    </ul>
  </section>
</template>

<script>
import SearchResultItem from "@/components/SearchResultItem";

export default {
  name: "search-results",
  components: {
    SearchResultItem
  }
};
</script>

<style lang="scss" scoped>
.results-container {
  background: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 32px;
}
</style>