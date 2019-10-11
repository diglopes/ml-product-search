<template>
  <section class="view-wrapper">
    <ul>
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
</style>