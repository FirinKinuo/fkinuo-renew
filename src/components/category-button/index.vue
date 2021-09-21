<template>
  <div @click="$emit('click')" class="category-button" :style="{'--color-accent': color_accent}">
    <div class="category-button__background"></div>
    <simple-svg
        :src="imported_svg_path"
        custom-class-name="category-button__icon"
    />
    <span class="category-button__name">
      {{ primary_text }} <span :style="secondary_text_style">{{ secondary_text }}</span>
    </span>
  </div>
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
    color_accent: {
      String,
      require: true
    },
    icon_name: {
      String,
      required: true
    }
  },
  data() {
    return {
      secondary_text_style: `color:${this.color_accent}`,
      imported_svg_path: require(`@/assets/images/svg/${this.icon_name}.svg`)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.category-button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 25px 40px;
  width: 40%;
  max-height: 230px;
  border-radius: $border-radius;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;

  & * {
    transition: 400ms;
  }

  &:hover & {
    &__background {
      &:before {
        left: 0;
        width: 100%;
      }
    }

    &__name {
      & * {
        color: white !important;
      }
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(330deg, #9D62E8 20%, var(--color-accent) 110%);
    width: 100%;
    height: 100%;
    z-index: -1;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      width: 0;
      height: 100%;
      background-color: var(--color-accent);
      transition: 200ms ease-out;
    }
  }

  &__name {
    position: relative;
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    left: 0;
    overflow: hidden;
  }

  ::v-deep & {
    &__icon {
      width: 100px !important;
      fill: white;
    }
  }
}

@media screen and (max-width: 1000px) {
  .category-button {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 90px;
    width: 90%;
    padding: 0 20px;
    background: $dark;

    ::v-deep & {
      &__icon {
        width: 50px !important;
      }
    }
  }
}
</style>