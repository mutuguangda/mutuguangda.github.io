<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
export default {
  name: "App",
  components: {
    Header,
    Main
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: $font-color;
}

body {
  margin: 0;
  background-color: $bg-color;
  font-family: 'Noto Serif SC', 'PingFang SC', sans-serif;
}

#app {
  width: $content-width;
  margin: 0 auto;
}

.main {
  padding: 20px 0;
}

// 字体引入
@font-face {
  font-family: 'PingFang SC';
  src: url('./assets/font/pingfangsc-regular.otf');
}

@font-face {
  font-family: 'Noto Serif SC';
  src: url('./assets/font/NotoSerifSC-Regular.otf');
}
</style>
