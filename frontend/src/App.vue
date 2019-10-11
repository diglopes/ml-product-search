<template>
  <div id="app">
    <SearchBar />
    <router-view />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "app",
  components: {
    SearchBar
  }
};
</script>

<style lang="scss">
</style>
