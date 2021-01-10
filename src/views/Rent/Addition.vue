<template>
  <div class="addition">
    <p>Цвет</p>
    <div class="colors">
      <div class="colors-item" v-for="(item, index) in car.colors || []" :key="index">
        <cs-radio
          v-model="colorValue"
          @input="setColor(item)"
          :default-value="item"
        >
          {{ item }}
        </cs-radio>
      </div>
    </div>
    <p>Дата аренды</p>
    <div class="date">
      <label>
        C
        <input
          v-model="startDate"
          type="datetime-local"
          name="date"
          placeholder="dd/mm/yyyy"
          :min="currentDate"
          @input="setStartDate"
        >
      </label>
      <label>
        По
        <input
          v-model="finishDate"
          type="datetime-local"
          name="date"
          placeholder="dd/mm/yyyy"
          :min="minDate"
          @input="setEndDate"
          :disabled="!dateFrom"
        >
      </label>
    </div>
    <p>Тариф</p>
    <div class="tariff" v-if="rate.length">
      <cs-radio
        v-for="(item, index) in rate"
        :key="index"
        :default-value="item"
        v-model="tariffValue"
        :disabled="!dateFrom || !dateTo"
        @input="setTariffCar"
      >
        {{ item.rateTypeId.name }}, {{ item.price }}₽ / {{ item.rateTypeId.unit }}
      </cs-radio>
    </div>
    <p>Доп. услуги</p>
    <div class="service">
      <div class="service-item" v-for="(item, index) in list" :key="index">
        <cs-checkbox
          v-model="additional"
          :default-value="item"
          :disabled="!dateFrom || !dateTo || !tariffValue"
          @input="setAddService(item)"
        >
          {{ item.text }}, {{ item.price }}₽
        </cs-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

import dayjs from 'dayjs';
import CsRadio from '../../components/elements/cs-radio.vue';
import CsCheckbox from '../../components/elements/cs-checkbox.vue';

dayjs.locale('ru_RU');

export default {
  name: 'Addition',
  components: {
    CsCheckbox,
    CsRadio,
  },
  data() {
    return {
      add: [],
      list: [
        {
          text: 'Полный бак',
          price: 500,
          type: 'isFullTank',
        },
        {
          text: 'Детское кресло',
          price: 200,
          type: 'isNeedChildChair',
        },
        {
          text: 'Правый руль',
          price: 1600,
          type: 'isRightWheel',
        },
      ],
    };
  },
  computed: {
    ...mapState([
      'order',
      'rate',
      'car',
      'dateFrom',
      'dateTo',
      'color',
      'tariff',
      'price',
      'additionalList',
    ]),
    currentDate() {
      return dayjs(Date.now()).format('YYYY-MM-DDTHH:mm');
    },
    minDate() {
      return dayjs(this.startDate).format('YYYY-MM-DDTHH:mm');
    },
    startDate: {
      get() {
        return dayjs(this.dateFrom).format('YYYY-MM-DDTHH:mm:ss');
      },
      set(value) {
        this.setDateFrom(dayjs(value).valueOf());
        this.setAdditional([]);
        if (this.tariff) {
          this.setTariffCar(this.tariff);
        }
      },
    },
    finishDate: {
      get() {
        return dayjs(this.dateTo).format('YYYY-MM-DDTHH:mm:ss');
      },
      set(value) {
        this.setDateTo(dayjs(value).valueOf());
        this.setAdditional([]);
        if (this.tariff) {
          this.setTariffCar(this.tariff);
        }
      },
    },
    colorValue: {
      get() {
        return this.color;
      },
      set(value) {
        this.setColorCar(value);
      },
    },
    tariffValue: {
      get() {
        return this.tariff;
      },
      set(value) {
        this.setTariffCar(value);
        this.setAdditional([]);
      },
    },
    additional: {
      get() {
        return this.additionalList;
      },
      set(value) {
        this.setAdditional(value);
      },
    },
  },
  created() {
    this.loadRate();
  },
  methods: {
    ...mapMutations([
      'setColorCar',
      'setTariffCar',
      'setDateFrom',
      'setDateTo',
      'setResultPrice',
      'setAdditional',
      'setPrice',
      'changeAdditional',
    ]),
    ...mapActions(['loadRate']),
    setColor(value) {
      this.setColorCar(value);
    },
    setTariff(value) {
      this.setTariffCar(value);
    },
    setStartDate() {
      this.setDateFrom(dayjs(this.startDate).valueOf());
    },
    setEndDate() {
      this.setDateTo(dayjs(this.finishDate).valueOf());
    },
    setAddService(value) {
      this.changeAdditional({ key: value.type, value: !this.$store.state[value.type] });
      let initValue = this.$store.state.price;
      let resultValue;
      if (!this.additional.length) {
        if (this.tariff) {
          this.setTariffCar(this.tariff);
          resultValue = this.$store.state.price;
        }
      } else if (this.additional.length > 1) {
        this.setTariffCar(this.tariff);
        initValue = this.$store.state.price;
        resultValue = this.additional.reduce(((acc, current) => acc + current.price), initValue);
      } else {
        this.setTariffCar(this.tariff);
        initValue = this.$store.state.price;
        resultValue = initValue + this.additional[0].price;
      }
      this.setResultPrice(resultValue);
    },
  },
};

</script>

<style lang="scss">

.addition {
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 16px;
  }

  .colors {
    margin-bottom: 32px;
    display: flex;

    &-item {
      margin-right: 100px;
    }
  }

  .date {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    font-weight: 300;

    input {
      color: gray;
      margin-left: 8px;
      outline: none;
      border-bottom: 1px solid gray;
      position: relative;
      width: 224px;

      &::-webkit-calendar-picker-indicator {
        background: none;
        position: absolute;
        font-weight: 300;
        width: 100%;
        outline: none;
      }
    }
  }

  .tariff {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 32px;

    label {
      color: #999999;
    }
  }
}

@media(max-width: 900px) {
  .addition {
    p {
      font-size: 12px;
      padding-bottom: 0;
    }

    .colors {
      margin-bottom: 28px;
      flex-direction: column;
    }
  }
}

</style>
