<template>
  <div class="welcome-page">
    <div class="welcome-page__header">
      <h1 class="welcome-page__title">Welcome, I’m Firin Kinuo</h1>
      <h4 class="welcome-page__subtitle">Backend Python Developer</h4>
    </div>
    <div class="welcome-page__body">
      <v-category-button
          primary_text="About"
          secondary_text="me"
          secondary_text_color="#39FF71"
          icon_name="about_me"/>
      <v-category-button
          primary_text="My"
          secondary_text="projects"
          secondary_text_color="#00E5F3"
          icon_name="github"/>
      <v-category-button
          primary_text="Some"
          secondary_text="Marisa"
          secondary_text_color="#FAFF00"
          icon_name="sparkles"/>
      <v-category-button
          primary_text="Contact"
          secondary_text="me"
          secondary_text_color="#FF25A8"
          icon_name="contact_me"/>
    </div>
  </div>
</template>

<script>
import VCategoryButton from "@/components/category-button";

export default {
  name: "v-welcome-page-layout",
  components: {VCategoryButton}
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.welcome-page {
  padding: 30px 90px;

  &__header {
    margin: 0 0 35px 50px;
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
    gap: 50px 70px;
  }
}
</style>