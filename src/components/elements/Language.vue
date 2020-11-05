<template>
  <div>
    <select name="lang" v-model="defaultLang">
      <option
        v-for="(item, i) in langList"
        :key="i"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      defaultLang: 'Eng',
      langList: ['Rus', 'Eng', 'Deu', 'Fra', 'Spa', 'Ita'],
    };
  },
};
</script>

<style lang="scss" scoped>

 select {
   color: #0EC261;
 }

</style>
