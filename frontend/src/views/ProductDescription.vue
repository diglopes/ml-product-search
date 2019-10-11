<template>
  <section class="view-wrapper product-description">
    <div class="product-description__image">
      <img src="https://http2.mlstatic.com/D_NQ_NP_890321-MLA31521996387_072019-O.webp" alt="TV" />
    </div>

    <div class="product-description__details">
      <span class="product-description__details-sails">Novo - 234 vendidos</span>
      <h1 class="product-description__details-title">TV blablabla 42 polegadas</h1>
      <h2 class="product-description__details-price">{{2000 | setPriceToBRL}}</h2>
      <button class="btn">Comprar</button>
    </div>

    <article class="product-description__info">
      <h3 class="product-description__info-title">Descrição do produto</h3>
      <p
        class="product-description__info-text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis voluptate consequuntur! Ratione exercitationem illum atque totam possimus voluptatum veniam eligendi, commodi aspernatur vero, ullam expedita doloribus eos est laborum. Laborum illum minus veniam? Magnam, quae. Consequuntur pariatur deserunt ipsum ex, voluptatem debitis illum qui, suscipit dolorem maxime deleniti ullam.</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "product-description"
};
</script>

<style lang="scss" scoped>
.view-wrapper {
  padding: 32px;
}

.btn {
  width: 100%;
  max-width: 250px;
}

.product-description {
  display: grid;
  grid-template-columns: minmax(480px, 1fr) minmax(200px, 300px);

  &__image {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }

  &__details {
    margin-bottom: 32px;

    &-sails {
      font-size: 14px;
      margin-bottom: 14px;
    }

    &-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 32px;
    }

    &-price {
      font-size: 46px;
      font-weight: normal;
      margin-bottom: 32px;
    }
  }

  &__info {
    &-title {
      font-size: 28px;
      font-weight: normal;
      margin-bottom: 32px;
    }

    &-text {
      font-size: 16px;
      color: var(--clr-grey);
    }
  }
}

@media screen and (max-width: 992px) {
  .product-description {
    grid-template-columns: 1fr;
  }
}
</style>