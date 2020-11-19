<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~@/assets/styles/reset.scss';

#app {
  font-family: 'Roboto', sans-serif;
  cursor: url("assets/images/cursor.svg"), auto;

  button, a {
    &:hover {
      cursor: url("assets/images/pointer.svg"), pointer;
    }
  }
}

</style>
