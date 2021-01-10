<template>
  <div class="cs-select">
    <select>
      <option disabled>Выберите город</option>
      <option v-for="(item, i) in items"
              :key="i"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CsSelect',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>

.cs-select {
  select {
    color: gray;
    text-align: end;
    padding: 5px;
  }
}

</style>
