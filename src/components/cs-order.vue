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
    <div class="cs-order__actions">
      <v-btn
        outlined
        small
        class="cs-order__action"
        @click="onEditOrder"
      >
        <v-icon
          color="#818EA3"
          small
        >
          mdi-dots-vertical
        </v-icon>
        <span>Изменить</span>
      </v-btn>
    </div>
    <cs-order-edit-dialog
      v-model="showEditDialog"
      :order="order"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs';
import CsCheckbox from '@/components/elements/cs-checkbox.vue';
import CsOrderEditDialog from '@/components/cs-order-edit-dialog.vue';

const formatDate = (date) => dayjs(date)
  .format('DD.MM.YYYY HH:MM');

export default {
  name: 'cs-order',
  components: {
    CsOrderEditDialog,
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
      showEditDialog: false,
    };
  },
  computed: {
    carName() {
      return this.order.carId?.name;
    },
    thumbnail() {
      return this.order.carId?.thumbnail?.path;
    },
  },
  methods: {
    onEditOrder() {
      this.showEditDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.cs-order {
  &__info-wrap {
    display: flex;
    justify-content: space-between;
  }

  &__action {
    border: 0.5px solid #becad6;
    text-transform: none;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.345714px;
    color: #5a6169;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__thumbnail {
    width: 140px;
    object-fit: contain;
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    img {
      height: 63px;
    }

    &-info {
      width: 350px;

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

    h1 {
      display: flex;
      align-items: center;
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

@media (max-width: 1400px) {
  .cs-order {
    &__content {
      &-info {
        width: 300px;
      }
    }
  }
}

@media (max-width: 1250px) {
  .cs-order {
    &__content {
      &-info {
        width: 250px;
      }
    }
  }
}

@media (max-width: 1100px) {
  .cs-order {
    &__content {

      &-info {
        width: 200px;

        p {
          font-size: 11px;
        }
      }

      &-service {
        width: 170px;

        &-item {
          label {
            font-size: 12px;
          }
        }
      }

      h1 {
        font-size: 26px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .cs-order {
    &__content {
      img {
        display: none;
      }
    }
  }
}

@media (max-width: 900px) {
  .cs-order {
    &__action {
      &.v-size--small {
        min-width: 0;
        padding: 0;
      }

      span {
        display: none;
      }
    }

    &__content {

      &-info {
        width: 200px;

        p {
          font-size: 11px;
        }
      }

      &-service {
        width: 170px;

        &-item {
          label {
            font-size: 12px;
          }
        }
      }

      h1 {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 700px) {
  .cs-order {
    &__content {
      padding: 0 10px;
      position: relative;

      &-info {
        margin-bottom: 10px;
      }

      h1 {
        font-size: 16px;
        position: absolute;
        right: 10px;
        bottom: 10px
      }
    }

    &__actions {
      position: absolute;
      right: 10px;
    }

    &__info-wrap {
      flex-direction: column;
    }
  }
}

</style>
