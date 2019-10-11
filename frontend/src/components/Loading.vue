<template>
  <div class="loading">
    <div class="loading__wrapper">
      <span class="loading__ball"></span>
      <span class="loading__ball"></span>
      <span class="loading__ball"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>


<style lang="scss" scoped>
.loading {
  z-index: 100;
  position: absolute;
  top: -16px;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;

  &__wrapper {
    position: fixed;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 256px;
  }

  &__ball {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--clr-primary);
    margin: 0 8px;
    animation: bouncing-loader 0.6s infinite alternate;

    &:nth-child(1) {
      background: darken(#ffe600, 8);
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
      background: darken(#ffe600, 4);
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>