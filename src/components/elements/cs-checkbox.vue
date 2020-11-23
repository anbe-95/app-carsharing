<template>
  <label class="cs-checkbox">
    <input type="checkbox" :value="defaultValue">
    <span class="cs-checkbox__label"><slot/></span>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CsCheckbox',
  props: {
    value: {
      type: String,
    },
    defaultValue: String,
  },
};
</script>

<style lang="scss" scoped>

.cs-checkbox {
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
  border: 2px solid #0EC261;
  content: url("../../assets/images/checkmark.svg");
}

.cs-checkbox input:checked ~ .cs-checkbox__label {
  color: black;
}

</style>
