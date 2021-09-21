<template>
  <div class="welcome-page">
    <div class="welcome-page__header">
      <h1 class="welcome-page__title">Welcome, I’m Firin Kinuo</h1>
      <h4 class="welcome-page__subtitle"></h4>
    </div>
    <div class="welcome-page__body">
      <v-category-button
          primary_text="About"
          secondary_text="me"
          color_accent="#39FF71"
          icon_name="about_me"
          @click="$router.push('about_me')"/>
      <v-category-button
          primary_text="Contact"
          secondary_text="me"
          color_accent="#FF25A8"
          icon_name="contact_me"
          @click="$router.push('contact')"/>
      <v-category-button
          primary_text="My"
          secondary_text="projects"
          color_accent="#00E5F3"
          icon_name="github"
          @click="redirectTo('https://git.fkinuo.ru')"/>
      <v-category-button
          primary_text="Some"
          secondary_text="Marisa"
          color_accent="#FAFF00"
          icon_name="sparkles"/>
    </div>
  </div>
</template>

<script>
import VCategoryButton from "@/components/category-button";
import TypeIt from "typeit";

export default {
  name: "v-welcome-page-layout",
  components: {VCategoryButton},
  beforeCreate() {
    document.title = "★Welcome★"
  },
  methods: {
    /**
     * Перенаправляет на укзанный URL
     * @param {string} url - ссылка для перехода
     */
    redirectTo (url) {
      window.location = url;
    }
  },
  mounted() {
    new TypeIt(".welcome-page__subtitle", {
      strings: ['#Backend Python Developer', '#Sometimes Vue Developer', '#Marisa Best Waifu', '#Anime Lover'],
      speed: 50,
      startDelay: 200,
      nextStringDelay: 3000,
      breakLines: false,
      loop: true,
    }).go();
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  height: 100%;

  &__header {
    position: relative;
    margin: 0 0 0 70px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: -20px;
      width: 10px;
      background: $red;
      height: 100%;
    }
  }

  &__title {
    font-size: 2.2rem;
    color: $darker;
  }

  &__subtitle {
    font-size: 1.1rem;
    color: darken($blue, 10);
    font-weight: normal;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px 100px;
  }
}

@media screen and (max-width: 1200px) {
  .welcome-page {
    &__header {
      margin: 0 0 0 35px;
    }

    &__title {
      font-size: 1.8rem;
    }

    &__body {
      gap: 30px;
    }
  }
}

@media screen and (max-width: 800px) {
  .welcome-page {
    &__title {
      color: white;
    }
  }
}

@media screen and (max-height: 700px) {
  .welcome-page {
    gap: 4%;

    &__title {
      font-size: 1.6rem;
    }
  }
}
</style>