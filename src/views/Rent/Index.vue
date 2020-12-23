<template>
  <div class="rent">
    <div class="block">
      <div class="block__content">
        <cs-burger class="burger_button"/>
        <div class="language" @click="isVisible = !isVisible">
          <p v-show="isVisible">Eng</p>
          <p v-show="!isVisible">Rus</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="header__up">
          <a href="/">{{ title }}</a>
          <cs-autocomplete
            v-model="cityValue"
            :items="cities"
            :default-value="city"
            @input="setGlobalCity(cityValue)"
          />
        </div>
        <div class="header__down" v-if="!status">
          <div class="step">
            <router-link to="/rent/location">Местоположение</router-link>
            <img src="../../assets/images/icon-arrow.svg" alt="icon">
          </div>
          <div class="step">
            <router-link to="/rent/model">Модель</router-link>
            <img src="../../assets/images/icon-arrow.svg" alt="icon">
          </div>
          <div class="step">
            <router-link to="/rent/addition">Дополнительно</router-link>
            <img src="../../assets/images/icon-arrow.svg" alt="icon">
          </div>
          <div class="step">
            <router-link to="/rent/total">Итого</router-link>
          </div>
        </div>
        <div class="header__down" v-else>
          <div class="step">
            {{ statusId }}
          </div>
        </div>
      </div>
      <div class="body">
        <div class="body__left">
          <h2 v-if="status">{{ status }}</h2>
          <router-view></router-view>
        </div>
        <div class="body__right">
          <h3>Ваш заказ:</h3>
          <div class="order-item" v-if="city">
            <span>Пункт выдачи</span>
            <div class="empty"></div>
            <span class="result">{{ city }}, {{ point }}</span>
          </div>
          <div class="order-item" v-if="currentCar">
            <span>Модель</span>
            <div class="empty"></div>
            <span class="result">{{ currentCar.name }}</span>
          </div>
          <div class="order-item" v-if="currentColor">
            <span>Цвет</span>
            <div class="empty"></div>
            <span class="result">{{ currentColor }}</span>
          </div>
          <div class="order-item" v-if="currentDuration">
            <span>Длительность аренды</span>
            <div class="empty"></div>
            <span class="result">{{ currentDuration }}</span>
          </div>
          <div class="order-item" v-if="currentDuration && $store.state.tariff">
            <span>Тариф</span>
            <div class="empty"></div>
            <span class="result">{{ $store.state.tariff.rateTypeId.name }}</span>
          </div>
          <div class="order-item" v-for="(item, index) in additionalList" :key="index">
            <span>{{ item.text }}</span>
            <div class="empty"></div>
            <span class="result">Да</span>
          </div>
          <h4
            v-if="currentCar && $route.name !== 'Addition' && $route.name !== 'Total'"
          >
            Цена: от {{ currentCar.priceMin }} до {{ currentCar.priceMax }} ₽
          </h4>
          <h4
            v-if="currentCar && $route.name === 'Addition' || $route.name === 'Total'"
          >
            Цена: {{ $store.getters.getCurrentPrice }} ₽
          </h4>
          <h4
            v-if="
              currentCar && $route.name === 'Addition'
               && $store.getters.getCurrentPrice > currentCar.priceMax
            "
            class="error-message"
          >
            Превышает максимальную допустимую цену: {{ currentCar.priceMax }} ₽.
            Измените длительность аренды или тариф.
          </h4>
          <router-link v-if="$route.name === 'Location'" :to="{ name: 'Model' }" class="cs-button">
            <cs-button
              text="Выбрать модель"
              :disabled="!(city && point)"
            />
          </router-link>
          <router-link v-if="$route.name === 'Model'" :to="{ name: 'Addition' }" class="cs-button">
            <cs-button text="Дополнительно" :disabled="!(car && car.id)" />
          </router-link>
          <router-link v-if="$route.name === 'Addition'" :to="{ name: 'Total' }" class="cs-button">
            <cs-button text="Итого" :disabled="!$store.getters.isOrderDone" />
          </router-link>
          <cs-button
            v-if="$route.name === 'Total' && !status"
            text="Заказать"
            @click="isVerification = !isVerification"
            :disabled="!(car)"
          />
          <router-link
            v-if="$route.name === 'Total' && status"
            :to="{ name: 'Location' }"
            tag="button"
            class="cancel"
          >
            <cs-button text="Отменить" @click="cancel()" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="modal-window" :class="{ verification : isVerification }">
      <div class="content">
        <p>Подтвердить заказ</p>
        <button class="success" @click="submit()">Подтвердить</button>
        <button class="cancel" @click="isVerification = !isVerification">Вернуться</button>
      </div>
    </div>
  </div>
</template>

<script>
import CsAutocomplete from '@/components/elements/cs-autocomplete.vue';
import CsButton from '@/components/elements/cs-button.vue';
import CsBurger from '@/components/cs-burger.vue';

import { mapMutations, mapState } from 'vuex';
import clientService from '@/services/client.service';

export default {
  name: 'Rent',
  components: {
    CsBurger,
    CsButton,
    CsAutocomplete,
  },
  data() {
    return {
      isVisible: true,
      cityValue: '',
      isVerification: false,
      currentText: 'Выбрать модель',
      status: null,
      statusId: null,
    };
  },
  computed: {
    ...mapState([
      'city',
      'cities',
      'point',
      'title',
      'point',
      'car',
      'additionalList',
    ]),
    currentCar() {
      return this.$store.getters.getCarInfo;
    },
    currentDuration() {
      return this.$store.getters.getDuration;
    },
    currentColor() {
      return this.$store.getters.getColor;
    },
  },
  methods: {
    ...mapMutations(['setCity', 'reloadStateFromLocation']),
    setGlobalCity(value) {
      this.setCity(value);
    },
    cancel() {
      this.status = false;
      this.statusId = false;
      this.reloadStateFromLocation();
    },
    async submit() {
      const {
        car,
        order,
        dateFrom,
        dateTo,
        isNeedChildChair,
        isFullTank,
        isRightWheel,
        tariff,
        price,
        color,
      } = this.$store.state;
      const formData = {
        orderStatusId: car.id,
        cityId: order.city[0].id,
        pointId: order.point[0].id,
        carId: order.car.id,
        dateFrom,
        dateTo,
        isNeedChildChair,
        isFullTank,
        isRightWheel,
        price,
        rateId: tariff.rateTypeId.id,
        color,
      };
      await clientService.postOrder({ ...formData }).then(({ data }) => {
        this.status = 'Ваш заказ подтверждён';
        this.statusId = `Заказ номер RU${data.id}`;
        this.isVerification = !this.isVerification;
      });
    },
  },
};

</script>

<style lang="scss" scoped>

.modal-window {
  display: none;
  position: absolute;
  opacity: 0.9;
  background: white;
  z-index: 3;
  min-width: 100%;
  min-height: 100vh;
  .content {
    position: absolute;
    width: 405px;
    height: 157px;
    left: 35%;
    top: 35%;
    p {
      padding-left: 70px;
      font-size: 24px;
      margin-bottom: 32px;
    }
  }

  button {
    height: 48px;
    background-blend-mode: darken;
    color: white;
    &.success {
      background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
      border-radius: 8px;
      margin-right: 16px;
      width: 177px;
    }
    &.cancel {
      background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%);
      border-radius: 4px;
      width: 164px;
    }
    &:hover {
      filter: brightness(80%);
    }
    &:active {
      filter: brightness(60%);
    }
  }

  &.verification {
    display: block;
  }
}

.rent {
  display: flex;
  height: 100%;

  .block {
    background-color: #151B1F;
    width: 64px;

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .burger_button {
        position: fixed;
        top: 44px;
        z-index: 1;
      }

      .language {
        z-index: 1;
        color: #0EC261;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 16px;
        position: fixed;

        &:hover {
          color: white;
          cursor: url("../../assets/images/pointer.svg"), pointer;
          border: 1px solid white;
          border-radius: 50%;
        }

        &:active {
          color: #0EC261;
        }
      }
    }
  }

  .main {
    width: calc(100% - 64px);
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      flex-direction: column;

      &__up {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EEEEEE;
        padding: 32px 64px;

        a {
          font-size: 30px;
          font-weight: bold;
          text-decoration: none;
          color: #0EC261;
        }
      }

      &__down {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EEEEEE;
        padding-left: 64px;
        font-size: 14px;
        font-weight: 700;

        a {
          text-decoration: none;
          color: #999999;

          &.router-link-active {
            color: #0EC261;
          }
        }

        img {
          transform: rotate(180deg);
          height: 8px;
          width: 6px;
          margin: 0 10px;
        }
      }
    }

    .body {
      display: flex;
      justify-content: space-between;
      height: 100%;

      &__left {
        width: 70%;
        border-right: 1px solid #EEEEEE;
        padding: 32px 64px;
        h2 {
          font-weight: 400;
          margin-bottom: 20px;
        }
      }

      &__right {
        width: 30%;
        padding: 32px;

        h3 {
          text-align: right;
          margin-bottom: 26px;
          font-size: 18px;
        }

        p {
          font-size: 14px;
          margin-top: 20px;
        }

        h4 {
          font-size: 16px;
          margin: 32px 0px;

          &.error-message {
            border: 1px solid grey;
            padding: 10px;
            font-weight: 400;
            color: white;
            background-color: #ff737e;
            margin-bottom: 20px;
          }
        }

        .v-btn {
          font-size: 18px;
          height: 48px;
          text-transform: none;
          margin-top: 20px;
          color: white;
          background-color: #EEEEEE;
        }

        .order-item {
          display: flex;
          min-width: 100%;
          justify-content: space-between;
          align-items: flex-end;
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 16px;
          span {
            margin-right: 10px;
            margin-left: 0px;
            width: 100%;
          }
          .empty {
            display: flex;
            border-bottom: 1px dotted gray;
            width: 100%;
            margin-bottom: 6px;
          }
          .result {
            color: #999999;
            margin-right: 0px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .rent {
    .block {
      display: none;
    }
  }
}

</style>
