<template>
  <div>
    <input
      placeholder="Введите город"
      type="text"
      :list="items"
      @input="$emit('input', $event.target.value)"
    >
    <datalist :id="items">
      <option
        v-for="(item, i) in items"
        :key="i"
        :value="item.name"/>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'CsAutocomplete',
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
  text-align: start;
  color: gray;
  outline: none;

  &:focus::-webkit-input-placeholder {
    color: transparent
  }

  &:focus::-moz-placeholder {
    color: transparent
  }

  &:focus:-moz-placeholder {
    color: transparent
  }

  &:focus:-ms-input-placeholder {
    color: transparent
  }
}

</style>
