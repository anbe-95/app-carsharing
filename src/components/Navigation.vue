<template>
  <div class="nav_container">
    <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      dark
      width="100%"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-title>ПАРКОВКА</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>СТРАХОВКА</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>БЕНЗИН</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>ОБСЛУЖИВАНИЕ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">

.v-navigation-drawer {
  display: flex;
  opacity: 0.9;
  min-width: 100%;
  &__content {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.v-list-item-group {
  margin-left: 25%;
}

.v-list-item:hover {
  opacity: 0.9;
  color: green;
}

</style>
