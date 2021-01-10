<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.$store.dispatch('loadPosition', `${position.coords.longitude},${position.coords.latitude}`);
      });
    }
  },
};
</script>

<style lang="scss">
@import '~@/assets/styles/common.scss';

#app {
  font-family: 'Roboto', sans-serif;
  cursor: url('~@/assets/images/cursor.svg'), default;
  a, button {
    cursor: url('~@/assets/images/pointer.svg'), pointer;
  }
}
</style>
