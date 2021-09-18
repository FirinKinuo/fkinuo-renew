<template>
  <div class="content-layout">
    <span class="content-layout__full-width-request">Better to see on fullscreen ;)</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "v-content-layout"
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.content-layout {
  background-color: #fff;
  border-radius: 0 $border-radius $border-radius 0;
  transition: 200ms ease-in;


  &__full-width-request {
    display:none;
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    color: rgba(0,0,0,0.5);
  }
}

@media screen and (max-width: 800px) {
  .content-layout {
    border-radius: 0;
    background-color: rgba($dark, 0.85);

    &__full-width-request {
      display: block;
    }
  }
}
</style>