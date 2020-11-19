<template>
  <button
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'cs-button',
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>

button {
  font-size: 18px;
  width: 250px;
  height: 48px;
  color: white;
  background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  outline: none;
}

button:hover {
  background: linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

button:active {
  background: linear-gradient(90deg, #076432 2.61%, #013C27 112.6%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

</style>
