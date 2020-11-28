<template>
  <div class="admin">
    <div class="nav-menu">
      <div class="nav-menu_item">
        <img width="21.5px" src="../../assets/images/logo.svg" alt="logo">
        <p>{{ title }}</p>
      </div>
      <router-link to="/admin/setting">Карточка автомобиля</router-link>
      <router-link to="/admin/table">Список авто</router-link>
      <router-link to="/admin/list">Заказы</router-link>
    </div>
    <div class="main">
      <div class="main__header">
        <div class="main__header-profile">
          <img src="../../assets/images/admin_icon.png" alt="admin">Admin
        </div>
      </div>
      <div class="main__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    title() {
      return this.$store.state.title;
    },
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
        color: #3D5170;
        font-size: 16px;
      }
    }

    a {
      height: 57.5px;
      box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      padding-left: 52px;
      color: #3D5170;
      text-decoration: none;

      &:hover {
        background-color: #FBFBFB;
        color: #007BFF;
      }
    }

    .router-link-active {
      color: #007BFF;
      border-left: 4px solid #007BFF;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 285px);
    background-color: #E5E5E5;

    &__header {
      background-color: #ffffff;
      height: 68px;
      display: flex;
      justify-content: flex-end;
      box-shadow: 0.5px 0 0 #CACEDB, -0.5px 0px 0px #CACEDB;

      &-profile {
        width: 250px;
        height: 100%;
        border-left: 1px solid #CACEDB;
        display: flex;
        align-items: center;

        img {
          height: 48px;
          margin-right: 5px;
        }
      }
    }

    &__content {
      padding: 27px;
    }
  }
}
</style>
