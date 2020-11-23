<template>
  <div class="addition">
    <p>Цвет</p>
    <div class="colors">
      <div class="colors-item" v-for="(item, index) in values" :key="index">
        <cs-radio :default-value="item.type" v-model="colors">{{ item.text }}</cs-radio>
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
      <cs-radio default-value="min" v-model="tariff">
        Поминутно, 7 ₽/мин
      </cs-radio>
      <cs-radio default-value="day" v-model="tariff">
        На сутки, 1999 ₽/сутки
      </cs-radio>
    </div>
    <p>Доп. услуги</p>
    <div class="service">
      <div class="service-item" v-for="(item, index) in addList" :key="index">
        <cs-checkbox :default-value="item.type">{{ item.text }}</cs-checkbox>
      </div>
    </div>
  </div>
</template>

<script>

import CsRadio from '@/components/elements/cs-radio.vue';
import CsCheckbox from '@/components/elements/cs-checkbox.vue';

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
      values: [
        {
          text: 'Любой',
          type: 0,
        },
        {
          text: 'Красный',
          type: 1,
        },
        {
          text: 'Синий',
          type: 2,
        },
      ],
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
