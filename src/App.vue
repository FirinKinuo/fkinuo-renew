<template>
  <body id="app">
  <noscript>
    <strong>JavaScript must be enabled for modern web))</strong>
  </noscript>
  <router-view/>
  </body>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const setHtmlWindowHeight = () => {
      const html = document.querySelector('html')
      html.style.height = `${window.innerHeight}px`
    };
    setHtmlWindowHeight();
    window.addEventListener('resize', setHtmlWindowHeight);
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap');
:root {
  font-size: 20px;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  color: $dark;
  border: 0;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 800px) {
  :root {
    font-size: 16px;
  }
}
</style>
