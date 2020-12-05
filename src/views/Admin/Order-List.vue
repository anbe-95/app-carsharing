<template>
  <div class="list">
    <h1>Заказы</h1>
    <div class="list__content">
      <img src="/images/car-card(1).png" alt="car">
      <div class="list__content-info">
        <p><b>ELANTRA</b> в <b>Ульяновск</b>, Нариманова 42</p>
        <p>12.06.2019 12:00 - 13.06.2019 12:00</p>
        <p>Цвет: <b>Голубой</b></p>
      </div>
      <div class="list__content-service">
        <div class="list__content-service-item" v-for="(item, index) in addList" :key="index">
          <cs-checkbox :default-value="item.type">{{ item.text }}</cs-checkbox>
        </div>
      </div>
      <h1>4 300 ₽</h1>
      <div class="list__content-control">
        <button class="done">
          <img src="../../assets/images/v-button.svg" alt=".ico">Готово
        </button>
        <button class="cancel">
          <img src="../../assets/images/x-button.svg" alt=".ico">Отмена
        </button>
        <button class="change">
          <img src="../../assets/images/change-button.svg" alt=".ico">Изменить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CsCheckbox from '../../components/elements/cs-checkbox.vue';

export default {
  name: 'Order-List',
  components: {
    CsCheckbox,
  },
  data() {
    return {
      addList: [
        {
          text: 'Полный бак, 500 ₽',
          type: 0,
        },
        {
          text: 'Детское кресло, 200 ₽',
          type: 1,
        },
        {
          text: 'Правый руль, 1600 ₽',
          type: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.list {
  background-color: #E5E5E5;

  h1 {
    font-size: 29px;
    color: #3D5170;
    font-weight: 400;
    margin-bottom: 30px;
  }

  &__content {
    padding: 21px;
    width: 1062px;
    height: 386px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
    display: flex;
    justify-content: space-between;

    img {
      height: 63px;
    }

    &-info {
      p {
        color: #889098;
        font-size: 13px;
        b {
          color: black;
        }
      }
    }

    &-service {
      width: 200px;
    }

    &-control {
      display: flex;

      button {
        width: 71.5px;
        height: 24px;
        border: 0.5px solid #BECAD6;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;

        &:hover {
          filter: brightness(80%);
        }

        &:active {
          filter: brightness(60%);
        }

        img {
          height: 6px;
          margin-right: 5px;
        }
      }

      .done {
        border-radius: 4px 0 0 4px;
      }

      .change {
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
