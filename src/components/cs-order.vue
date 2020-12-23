<template>
  <div class="cs-order__content">
    <img :src="thumbnail" class="cs-order__thumbnail" alt="car">
    <div class="cs-order__info-wrap">
      <div class="cs-order__content-info">
        <p>
          <b>{{ carName }}</b> в <b>{{ order.cityId.name }}</b>,
          <br/> {{ order.pointId.address }}
        </p>
        <p>{{ order.dateFrom | formatDate }} - {{ order.dateTo | formatDate }}</p>
        <p>Цвет: <b>{{ order.color }}</b></p>
      </div>
      <div class="cs-order__content-service">
        <div
          v-for="(item, index) in addList"
          :key="index"
          class="cs-order__content-service-item"
        >
          <cs-checkbox
            :default-value="item.type"
            :value="order[item.key]"
            disabled
          >
            {{ item.text }}
          </cs-checkbox>
        </div>
      </div>
    </div>
    <h1 style="white-space: nowrap">{{ order.price }} ₽</h1>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import CsCheckbox from '@/components/elements/cs-checkbox.vue';

const formatDate = (date) => dayjs(date).format('DD.MM.YYYY HH:MM');

export default {
  name: 'cs-order',
  components: {
    CsCheckbox,
  },
  filters: {
    formatDate,
  },
  props: {
    order: {
      type: Object,
    },
  },
  data() {
    return {
      addList: [
        {
          text: 'Полный бак, 500 ₽',
          type: 0,
          key: 'isFullTank',
        },
        {
          text: 'Детское кресло, 200 ₽',
          type: 1,
          key: 'isNeedChildChair',
        },
        {
          text: 'Правый руль, 1600 ₽',
          type: 2,
          key: 'isRightWheel',
        },
      ],
    };
  },
  computed: {
    carName() {
      return this.order.carId.name;
    },
    thumbnail() {
      return this.order.carId?.thumbnail?.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.cs-order {
  &__info-wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }

  &__thumbnail {
    width: 140px;
    object-fit: contain;
  }

  &__content {
    width: 100%;
    display: flex;
    margin-bottom: 40px;

    img {
      height: 63px;
    }

    &-info {
      width: 100%;
      max-width: 300px;
      min-width: 300px;
      margin-right: 40px;

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
      min-width: 200px;
    }

    &-control {
      display: flex;

      button {
        width: 71.5px;
        height: 24px;
        border: 0.5px solid #becad6;
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
