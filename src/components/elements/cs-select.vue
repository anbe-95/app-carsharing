<template>
  <div class="cs-select">
    <select :value="defaultValue" @input="$emit('input', $event.target.value)">
      <option disabled value="">Выберите город</option>
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
    defaultValue: {
      type: String,
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
