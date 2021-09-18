<template>
  <div class="main-layout">
    <div class="main-layout__image"></div>
    <v-content-layout/>
  </div>
</template>

<script>
import VContentLayout from "@/layouts/content-layout";

export default {
  name: "v-main-layout",
  components: {VContentLayout}
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.main-layout {
  background-color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 0;
  padding: 40px;

  &__image {
    width: 60%;
    border-radius: $border-radius 0 0 $border-radius;
    background-repeat: no-repeat;
    background-position: 25% center;
    background-size: cover;
    background-image: url("https://i.ibb.co/Cw45R5B/b961c6384c59478581e590d2e9714ea3-1.png");
  }
}
</style>