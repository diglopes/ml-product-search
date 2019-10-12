<template>
  <div class="categories">
    <span
      v-for="(categorie, index) in categories"
      :key="index"
      class="categories__item"
      @click="handleSearch(categorie)"
    >{{categorie}}</span>
  </div>
</template>

<script>
import pushNewQuery from "@/mixins/pushNewQuery.js";

export default {
  name: "breadcrumbs",
  mixins: [pushNewQuery],
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  color: var(--clr-grey);
  margin: 16px 0;
  font-size: 14px;

  &__item {
    margin-right: 8px;
    cursor: pointer;

    &:hover {
      color: var(--clr-action);
    }

    & + span::before {
      content: ">";
      color: var(--clr-grey);
      font-weight: normal;
      font-size: 16px;
      align-items: center;
      margin-right: 10px;
      height: 100%;
    }

    &:last-of-type {
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 576px) {
  .categories {
    font-size: 12px;
  }
}
</style>