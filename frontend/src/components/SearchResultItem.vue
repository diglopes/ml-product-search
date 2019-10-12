<template>
  <li>
    <router-link :to="{name: 'product-description', params: {id: item.id}}" class="result-item">
      <div class="result-item__image">
        <img :src="item.picture" alt />
      </div>

      <div class="result-item__info">
        <div class="result-item__price-wrapper">
          <span class="result-item__price">{{item.price.amount | setPriceToBRL}}</span>
          <img
            v-if="item.free_shipping"
            class="result-item__shipping"
            src="@/assets/images/ic_shipping@2x.png"
            alt
          />
        </div>
        <span class="result-item__city">{{item.condition | translateCondition}}</span>
        <h1 class="result-item__description">{{item.title}}</h1>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "search-result-item",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
li + li {
  border-top: 2px solid var(--clr-light);
}

.result-item {
  padding: 16px;
  display: flex;
  transition: background 300ms ease-in-out, border 300ms ease-in-out;

  &:hover {
    background: var(--clr-light);
  }

  &__image {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #fff;
  }

  &__info {
    margin-left: 16px;
    display: grid;
    grid-template-columns: minmax(400px, 600px) 1fr;
    grid-template-rows: auto 1fr;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
  }

  &__price {
    font-size: 24px;
    position: relative;
  }

  &__shipping {
    width: 20px;
    margin-left: 16px;
  }

  &__city {
    color: var(--clr-grey-light);
    font-size: 12px;
    font-weight: bold;
    align-self: center;
    justify-self: center;
    margin-left: auto;
  }

  &__description {
    margin-top: 32px;
    font-size: 18px;
    font-weight: normal;
    color: var(--clr-grey);
  }
}
</style>