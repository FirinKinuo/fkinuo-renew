<template>
  <div class="main-layout">
    <div class="main-layout__background"></div>
    <div class="main-layout__image"></div>
    <v-content-layout/>
  </div>
</template>

<script>

import VContentLayout from "@/layouts/content-layout";

export default {
  name: "v-main-layout",
  components: {VContentLayout},
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.main-layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 0;
  padding: 40px;

  &__background {
    background-repeat: no-repeat;
    background-position: center center;
    background-image: $main-art-url;
    background-size: cover;
    filter: blur(20px) brightness(50%);
    transition: 200ms ease-in;
    transform: scale(1.1);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__image {
    width: 60%;
    border-radius: $border-radius 0 0 $border-radius;
    background-repeat: no-repeat;
    background-position: 25% center;
    background-size: cover;
    background-image: $main-art-url;
  }
}

@media screen and (max-width: 800px) {
  .main-layout {
    padding: 0;

    &__image {
      width: 0;
    }

    &__background {
      filter: blur(2px);
      transform: scale(1.01);
      background-position: 35% center;
      height: 100%;
      width: 100%;
    }
  }
}

</style>