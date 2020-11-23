<template>
  <label class="cs-radio">
    <input type="radio" :value="defaultValue" v-model="picked">
    <span class="cs-radio__label"><slot/></span>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'cs-radio',
  props: {
    value: {
      type: String,
    },
    defaultValue: String,
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

</style>
