<template>
  <li>
    <router-link to="/" class="result-item">
      <div class="result-item__image">
        <img src="https://http2.mlstatic.com/D_NQ_NP_890321-MLA31521996387_072019-O.webp" alt />
      </div>
      <div class="result-item__info">
        <div class="result-item__price-wrapper">
          <span class="result-item__price">{{2000 | setPriceToBRL}}</span>
          <img class="result-item__shipping" src="@/assets/images/ic_shipping@2x.png" alt />
        </div>
        <span class="result-item__city">Cubatão</span>
        <h1
          class="result-item__description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "search-result-item"
};
</script>

<style lang="scss" scoped>
li + li {
  border-top: 2px solid #eee;
}

.result-item {
  padding: 16px;
  display: flex;
  transition: background 300ms ease-in-out, border 300ms ease-in-out;

  &:hover {
    background: #eee;
  }

  &__image {
    max-width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: #fff;
  }

  &__info {
    margin-left: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
  }

  &__description {
    margin-top: 32px;
    font-size: 18px;
    font-weight: normal;
    color: var(--clr-grey);
  }

  &__quantity {
  }
}
</style>