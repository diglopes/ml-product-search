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
    replaceSpaces(sentence) {
      const regex = /,| |\.|!|\?/gim;
      const sentenceWithoutSpaces = sentence.replace(regex, "+");
      return sentenceWithoutSpaces;
    }
  }
};
