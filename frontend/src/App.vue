<template>
  <div id="app">
    <SearchBar />
    <main class="container">
      <Breadcrumbs />
      <transition name="fade" appear mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "app",
  components: {
    SearchBar,
    Breadcrumbs
  }
};
</script>

<style lang="scss">
</style>
