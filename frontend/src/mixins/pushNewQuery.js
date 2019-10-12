export default {
  methods: {
    handleSearch(q) {
      const query = this.replaceSpaces(q);

      if (query !== this.$route.query.search) {
        this.$router.push({
          name: "search-results",
          query: { search: query }
        });
      } else {
        this.searchTerm = "";
      }
    },
    replaceSpaces(string) {
      const regex = /,| |\.|!|\?/gim;
      const stringWithoutSpaces = string.replace(regex, "+");
      return stringWithoutSpaces;
    }
  }
};
