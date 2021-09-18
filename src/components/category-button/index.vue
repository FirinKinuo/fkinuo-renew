`<template>
  <router-link to="/" class="category-button">
    <simple-svg
        :src="imported_svg_path"
        custom-class-name="category-button__icon"
    />
    <span class="category-button__name">
      {{ primary_text }} <span :style="secondary_text_style">{{ secondary_text }}</span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "v-category-button",
  props: {
    primary_text: {
      String,
      require: true
    },
    secondary_text: {
      String
    },
    secondary_text_color: {
      String
    },
    icon_name: {
      String,
      required: true
    }
  },
  data() {
    return {
      secondary_text_style: `color:${this.secondary_text_color}`,
      imported_svg_path: require(`@/assets/images/svg/${this.icon_name}.svg`)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.category-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 0 40px;
  width: 435px;
  height: 300px;
  background: linear-gradient(300deg, #9D62E8 30%, #E94C5E 100%);
  border-radius: $border-radius;
  box-sizing: border-box;
  transition: 200ms ease-in;

  &__name {
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
  }

  ::v-deep & {
    &__icon {
      width: 100px !important;
      height: 100px !important;
      fill: white;
    }
  }
}
</style>`