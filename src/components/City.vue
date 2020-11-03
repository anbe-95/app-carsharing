<template>
  <div>
    <input placeholder="Введите город" type="text" list="city">
    <datalist id="city">
      <option
        v-for="(item, i) in cityList"
        :key="i"
      >
        {{ item }}
      </option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'City',
  data() {
    return {
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
};

</script>

<style lang="scss" scoped>

</style>
