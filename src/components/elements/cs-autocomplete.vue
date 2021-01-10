<template>
  <div class="cs-autocomplete">
    <input
      :placeholder="placeholder"
      type="text"
      :list="items"
      :value="defaultValue"
      @input="$emit('input', $event.target.value)"
    >
    <datalist :id="items" class="datalist">
      <option
        v-for="(item, i) in items"
        :key="i"
        :value="item.name" />
    </datalist>
    <slot></slot>
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
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Введите город',
    },
  },
};
</script>

<style lang="scss" scoped>

.cs-autocomplete {
  position: relative;
  i {
    position: absolute;
    right: 0;
    top: 20%
  }
}

input {
  font-size: 14px;
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
