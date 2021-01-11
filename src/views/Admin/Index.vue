<template>
  <div class="admin">
    <div class="nav-menu">
      <div class="nav-menu_item">
        <img width="21.5px" src="../../assets/images/logo.svg" alt="logo">
        <p>{{ title }}</p>
      </div>
      <router-link
        v-if="$route.name === 'Car'"
        :to="{ name: 'Car', params: { id: $route.params.id }}"
      >
        Карточка автомобиля
      </router-link>
      <router-link to="/admin/cars">Список авто</router-link>
      <router-link to="/admin/list">Заказы</router-link>
    </div>
    <div class="main">
      <div class="main__header">
        <div class="main__new-orders">
          <v-progress-circular
            v-if="loadingNewOrdersCount"
            indeterminate
            color="#818EA3"
          />
          <v-badge
            v-else
            :content="newOrdersCount"
            :value="newOrdersCount"
            color="#C4183C"
            bottom
            overlap
            :offset-x="10"
          >
            <v-icon color="#818EA3" medium>
              mdi-bell
            </v-icon>
          </v-badge>
        </div>
        <div class="main__header-profile">
          <img src="../../assets/images/admin_icon.png" alt="admin">Admin
          <cs-dropdown/>
        </div>
      </div>
      <div v-if="!loading" class="main__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CsDropdown from '@/components/elements/cs-dropdown.vue';

import { mapActions, mapState } from 'vuex';

export default {
  name: 'Index',
  components: {
    CsDropdown,
  },
  data: () => ({
    loading: true,
    loadingNewOrdersCount: false,
  }),
  computed: {
    ...mapState('orders', ['newOrdersCount']),

    title() {
      return this.$store.state.title;
    },
  },
  methods: {
    ...mapActions({
      checkAuth: 'checkAuth',
      loadNewOrdersCount: 'orders/loadNewOrdersCount',
    }),
  },
  async created() {
    this.loading = true;
    const result = await this.checkAuth();

    if (!result) {
      this.$router.push({ name: 'Login' });
    }

    this.loadingNewOrdersCount = true;
    this.loadNewOrdersCount()
      .finally(() => this.loadingNewOrdersCount = false);

    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>

.admin {
  display: flex;
  width: 100%;

  .nav-menu {
    background-color: white;
    width: 285px;
    height: 100vh;
    display: flex;
    flex-direction: column;

    &_item {
      display: flex;
      align-items: center;
      height: 68px;

      img {
        margin-left: 52px;
      }

      p {
        margin-left: 7px;
        color: #3d5170;
        font-size: 16px;
        margin-bottom: 0;
      }
    }

    a {
      height: 57.5px;
      box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      padding-left: 52px;
      color: #3d5170;
      text-decoration: none;

      &:hover {
        background-color: #fbfbfb;
        color: #007bff;
      }
    }

    .router-link-active {
      color: #007bff;
      border-left: 4px solid #007bff;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 285px);
    background-color: #e5e5e5;

    &__new-orders {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      border-left: 1px solid #cacedb;
    }

    &__header {
      background-color: #fff;
      height: 68px;
      display: flex;
      justify-content: flex-end;
      box-shadow: 0.5px 0 0 #cacedb, -0.5px 0px 0px #cacedb;

      &-profile {
        width: 250px;
        height: 100%;
        padding-left: 25px;
        border-left: 1px solid #cacedb;
        display: flex;
        align-items: center;

        img {
          height: 48px;
          margin-right: 10px;
        }
        .cs-dropdown {
          margin-left: 5px;
        }
      }
    }

    &__content {
      padding: 27px;
    }
  }
}
</style>
