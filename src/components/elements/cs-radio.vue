<template>
  <label class="cs-radio">
    <input type="radio" :value="defaultValue" v-model="picked" :disabled="disabled">
    <span class="cs-radio__label"><slot/></span>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CsRadio',
  props: {
    defaultValue: {
      required: true,
    },
    value: {
      required: true,
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

.cs-radio {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  color: #999999;
  font-size: 14px;
  font-weight: 300;

  &__label {
    position: absolute;
    left: 20px;
    top: 0;
  }
}

.cs-radio input {
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
  border-radius: 50%;
  border: 1px solid gray;
}

.cs-radio input:checked ~ .checkmark {
  border: 2px solid #0EC261;
}

.cs-radio input:checked ~ .cs-radio__label {
  color: black;
}

.cs-radio input:disabled ~ .cs-radio__label, .cs-radio input:disabled ~ .checkmark {
  cursor: not-allowed;
  opacity: 0.3;
}

</style>
