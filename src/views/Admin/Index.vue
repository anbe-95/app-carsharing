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
          <img src="../../assets/images/admin_icon.png" alt="admin">
          <p>Admin</p>
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
  min-width: 320px;

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
        font-size: 12px;
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

@media(max-width: 1200px) {
  .admin {
    .nav-menu {
      width: 200px;

      &_item {
        height: 60px;

        img {
          margin-left: 25px;
        }

        p {
          margin-left: 7px;
          font-size: 14px;
        }
      }

      a {
        height: 60px;
        padding-left: 25px;
        font-size: 14px;
      }
    }

    .main {
      width: calc(100% - 200px);

      &__new-orders {
        width: 60px;

        .v-badge {
          .v-icon {
            font-size: 22px;
          }
        }
      }

      &__header {
        height: 60px;

        &-profile {
          width: 200px;
          padding-left: 18px;

          img {
            height: 46px;
            margin-right: 10px;
          }

          p {
            font-size: 14px;
          }
        }
      }
      &__content {
        padding: 20px;
      }
    }
  }
}

@media(max-width: 900px) {
  .admin {
    .nav-menu {
      width: 180px;

      &_item {
        height: 55px;

        img {
          margin-left: 20px;
        }

        p {
          margin-left: 7px;
          font-size: 12px;
        }
      }

      a {
        height: 55px;
        padding-left: 20px;
        font-size: 14px;
      }
    }

    .main {
      width: calc(100% - 180px);

      &__new-orders {
        justify-content: flex-start;
        width: 60px;

        .v-badge {
          .v-icon {
            font-size: 20px;
          }
        }
      }

      &__header {
        height: 55px;

        &-profile {
          width: 180px;
          padding-left: 12px;

          img {
            height: 44px;
            margin-right: 10px;
          }

          p {
            font-size: 12px;
          }
        }
      }
      &__content {
        padding: 15px;
      }
    }
  }
}

@media(max-width: 600px) {
  .admin {
    .nav-menu {
      width: 100px;

      &_item {
        height: 50px;

        img {
          margin-left: 5px;
        }

        p {
          margin-left: 5px;
          font-size: 10px;
        }
      }

      a {
        height: 50px;
        padding-left: 5px;
        font-size: 10px;
      }
    }

    .main {
      width: calc(100% - 100px);

      &__new-orders {
        width: 60px;

        .v-badge {
          .v-icon {
            font-size: 18px;
          }
        }
      }

      &__header {
        height: 50px;

        &-profile {
          width: 100px;
          padding-left: 5px;

          img {
            height: 40px;
            margin-right: 5px;
          }

          p {
            font-size: 10px;
          }
        }
      }
      &__content {
        padding: 10px;
      }
    }
  }
}

@media(max-width: 450px) {
  .admin {
    .nav-menu {
      width: 65px;

      &_item {
        justify-content: center;
        height: 45px;

        img {
          margin-left: 5px;
        }

        p {
          display: none;
        }
      }
      .router-link-active {
        border-left: 2px solid #007bff;
      }

      a {
        height: 45px;
        padding-left: 5px;
        font-size: 10px;
      }
    }

    .main {
      width: calc(100% - 50px);

      &__new-orders {
        width: 60px;
      }

      &__header {
        height: 45px;

        &-profile {
          width: 100px;
          padding-left: 5px;

          img {
            height: 35px;
          }

          p {
            font-size: 10px;
          }
        }
      }
      &__content {
        padding: 5px;
      }
    }
  }
}

</style>
