<template>
  <div>
    <input placeholder="Введите город" type="text" list="city">
    <datalist id="city">
      <option
        v-for="(item, i) in items"
        :key="i"
        :value="item.name"/>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'City',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>

input {
  font-size: 14px;
  text-align: end;
  color: gray;
}

</style>
