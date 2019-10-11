<template>
  <section class="container">
    <div class="categories">
      <span class="categories__item">Eletrônica, Audio e Vídeo</span>
      <span class="categories__item">IPod</span>
      <span class="categories__item">Reprodutores</span>
      <span class="categories__item">IPod Touch</span>
      <span class="categories__item">32 GB</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "search-results"
};
</script>

<style lang="scss" scoped>
.categories {
  color: #777;
  margin: 16px 0;
  font-size: 14px;

  &__item {
    margin-right: 8px;

    & + span::before {
      content: ">";
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