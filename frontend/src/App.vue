<template>
  <div id="app">
    <SearchBar />

    <main class="main">
      <transition name="fade" appear mode="out-in">
        <Loading v-if="loading" />
      </transition>

      <div class="container">
        <Breadcrumbs />
        <transition name="fade" appear mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Loading from "@/components/Loading";

export default {
  name: "app",
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  components: {
    SearchBar,
    Breadcrumbs,
    Loading
  }
};
</script>

<style lang="scss">
.main {
  position: relative;
}
</style>
