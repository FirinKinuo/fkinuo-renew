<template>
  <div class="content-layout">
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
  width: auto;
  border-radius: 0 $border-radius $border-radius 0;
}
</style>