<template>
  <header class="search-bar">
    <div class="search-bar__wrapper container">
      <router-link to="/" class="search-bar__logo">
        <img src="@/assets/images/Logo_ML.png" alt="Mercado Livre" />
      </router-link>
      <form class="search-bar__form">
        <input
          type="text"
          class="search-bar__input"
          placeholder="Nunca deixe de buscar"
          v-model="searchTerm"
        />
        <button class="search-bar__button" @click.prevent="handleSearch(searchTerm)">
          <img src="@/assets/images/ic_Search.png" alt="Search" />
        </button>
      </form>
    </div>
  </header>
</template>

<script>
import pushNewQuery from "@/mixins/pushNewQuery.js";

export default {
  name: "search-bar",
  mixins: [pushNewQuery],
  computed: {
    searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },
      set(value) {
        this.$store.commit("SET_SEARCH_TERM", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  background: var(--clr-primary);
  width: 100%;
  padding: 10px 0;

  &__logo {
    margin-right: 32px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__form {
    display: flex;
    width: 100%;
  }

  &__input {
    flex: 1;
    border-radius: 4px 0 0 4px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    width: 50px;
    border: none;
    background: var(--clr-light);
    cursor: pointer;
    border-radius: 0 4px 4px 0;

    &:hover {
      background: darken(#eee, 3);
    }
  }
}
</style>