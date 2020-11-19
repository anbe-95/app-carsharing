<template>
  <div class="burger" @click="isActive = !isActive">
    <div class="burger__icon" :class="{ active: isActive }">
      <span></span>
    </div>
    <div class="burger__menu" :class="{ active: isActive }">
      <router-link to="#">ПАРКОВКА</router-link>
      <router-link to="#">СТРАХОВАНИЕ</router-link>
      <router-link to="#">БЕНЗИН</router-link>
      <router-link to="#">ОБСЛУЖИВАНИЕ</router-link>
      <div class="burger__link">
        <i class="icon-telegram"></i>
        <i class="icon-facebook"></i>
        <i class="icon-instagram"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.burger {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: url("../assets/images/pointer.svg"), pointer;

  &__icon {
    position: relative;
    z-index: 2;
    width: 24px;
    height: 18px;

    span {
      position: absolute;
      background-color: white;
      width: 100%;
      height: 2px;
      top: 8px;
    }
  }

  &__icon:before, &__icon:after {
    content: '';
    background-color: white;
    position: absolute;
    width: 100%;
    height: 2px;
  }

  &__icon:before {
    top: 0;
  }

  &__icon:after {
    bottom: 0;
  }

  &__menu {
    z-index: 1;
    position: fixed;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background-color: #151B1F;
    opacity: 0.95;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 128px;

    a {
      font-size: 32px;
      height: 55px;
      color: white;
      text-decoration: none;
    }

    a:hover {
      color: #0EC261;
    }
  }

  &__link {
    margin-top: 38px;
    width: 144px;
    display: flex;
    justify-content: space-between;
    .icon {
      &-telegram {
        content: url("../assets/images/telegram-icon.svg");
        &:hover {
          content: url("../assets/images/telegram-green.svg");
        }
      }
      &-facebook {
        content: url("../assets/images/facebook-icon.svg");
        &:hover {
          content: url("../assets/images/facebook-green.svg");
        }
      }
      &-instagram {
        content: url("../assets/images/instagram-icon.svg");
        &:hover {
          content: url("../assets/images/instagram-green.svg");
        }
      }
    }

    img {
      &:hover {
        cursor: url("../assets/images/pointer.svg"), pointer;
      }

      svg:hover {
        #telegram {
          fill: #0EC261;
        }
      }
    }
  }

  &__icon.active {
    span {
      display: none;
    }
  }

  .active:before {
    transform: rotate(45deg);
    transition: all 0.3s ease 0s;
    top: 8px;
  }

  .active:after {
    transform: rotate(-45deg);
    transition: all 0.3s ease 0s;
    bottom: 8px;
  }

  &__menu.active {
    left: 0;
  }

}

</style>
