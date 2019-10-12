<template>
  <section class="view-wrapper product-description" v-if="item">
    <div class="product-description__image">
      <img :src="item.picture" :alt="item.title" />
    </div>

    <div class="product-description__details">
      <span
        class="product-description__details-sails"
      >{{item.condition | translateCondition}} - {{item.sold_quantity}} vendidos</span>
      <h1 class="product-description__details-title">{{item.title}}</h1>
      <h2 class="product-description__details-price">{{item.price.amount | setPriceToBRL}}</h2>
      <button class="btn">Comprar</button>
    </div>

    <article class="product-description__info">
      <h3 class="product-description__info-title">Descrição do produto</h3>
      <p class="product-description__info-text">{{item.description}}</p>
    </article>
  </section>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "product-description",
  data: () => ({
    item: null
  }),
  methods: {
    async fetchItems() {
      this.$store.commit("SET_LOADING", true);
      const { id } = this.$route.params;

      const { data } = await api.get(`/product/${id}`);
      this.item = data;

      document.title = `Mercado Livre | ${data.title}`;

      this.$store.commit("SET_LOADING", false);
    }
  },
  created() {
    this.fetchItems();
  }
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