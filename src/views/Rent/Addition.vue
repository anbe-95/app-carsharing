<template>
  <div class="addition">
    <p>Цвет</p>
    <div class="colors">
      <div class="colors-item" v-for="(item, index) in car.colors" :key="index">
        <cs-radio @input="setColor" :default-value="item" v-model="colors">{{ item }}</cs-radio>
      </div>
    </div>
    <p>Дата аренды</p>
    <div class="date">
      <label>
        C
        <input type="datetime-local" value="from" name="date">
      </label>
      <label>
        По
        <input type="datetime-local" value="to" name="date">
      </label>
    </div>
    <p>Тариф</p>
    <div class="tariff">
      <cs-radio
        v-for="item in rate"
        :key="item.rateTypeId.id"
        :default-value="item.rateTypeId.name"
        v-model="tariff"
        @input="setTariffCar"
      >
        {{ item.rateTypeId.name }}, {{ item.price }}/{{ item.rateTypeId.unit }} ₽
      </cs-radio>
    </div>
    <p>Доп. услуги</p>
    <div class="service">
      <div class="service-item" v-for="(item, index) in addList" :key="index">
        <cs-checkbox @click="setAddService" :default-value="item.type">
          {{ item.text }}, {{ item.price}}₽
        </cs-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

import CsRadio from '../../components/elements/cs-radio.vue';
import CsCheckbox from '../../components/elements/cs-checkbox.vue';

export default {
  name: 'Addition',
  components: {
    CsCheckbox,
    CsRadio,
  },
  data() {
    return {
      colors: null,
      tariff: null,
    };
  },
  computed: {
    ...mapState(['rate', 'car', 'addList']),
  },
  created() {
    this.loadRate();
  },
  methods: {
    ...mapMutations(['setColorCar', 'setTariffCar']),
    ...mapActions(['loadRate']),
    setColor(value) {
      this.setColorCar(value);
    },
    setTariff(value) {
      this.setTariffCar(value);
    },
  },
};

</script>

<style lang="scss" scoped>

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

    input {
      margin-left: 8px;
      color: gray;
      outline: none;
      border-bottom: 1px solid gray;
      position: relative;

      &::-webkit-calendar-picker-indicator {
        background: none;
        width: 100%;
        position: absolute;
        &:focus {
          outline: none;
        }
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

</style>
