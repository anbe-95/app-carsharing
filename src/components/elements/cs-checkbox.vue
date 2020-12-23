<template>
  <label class="cs-checkbox">
    <input type="checkbox" :value="defaultValue" v-model="picked" :disabled="disabled">
    <span class="cs-checkbox__label">
      <slot />
    </span>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CsCheckbox',
  props: {
    value: {
      type: [Array, Boolean],
    },
    defaultValue: {
      type: [Object, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    picked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.cs-checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  color: #999;
  font-size: 14px;
  font-weight: 300;

  &__label {
    position: absolute;
    left: 20px;
    top: 0;
  }
}

.cs-checkbox input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 12px;
  width: 12px;
  background-color: transparent;
  border: 1px solid gray;
}

.cs-checkbox input:checked ~ .checkmark {
  border: 2px solid #0ec261;
  content: url("../../assets/images/checkmark.svg");
}

.cs-checkbox input:checked ~ .cs-checkbox__label {
  color: black;
}

.cs-checkbox input:disabled ~ .cs-checkbox__label, .cs-checkbox input:disabled ~ .checkmark {
  cursor: not-allowed;
  opacity: 0.3;
}

</style>
