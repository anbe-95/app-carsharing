<template>
  <div class="cs-dropdown">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <button
          v-bind="attrs"
          v-on="on"
        >
          <img src="@/assets/images/icon-arrow.svg" alt="icon">
        </button>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title @click="logout()">Выйти</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'CsDropdown',
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
        .then(() => this.$router.push({ name: 'Login' }));
    },
  },
};
</script>

<style lang="scss" scoped>

.cs-dropdown {
  button {
    outline: none;
  }
  img {
    width: 10px;
    height: 10px;
    transform: rotate(270deg);
  }
}

</style>
