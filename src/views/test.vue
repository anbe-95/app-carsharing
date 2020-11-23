<template>
  <div>
    <cs-carousel :carousel_data="sliderItems"/>
    <div class="checkbox">
      <cs-checkbox>one</cs-checkbox>
      <cs-checkbox>one</cs-checkbox>
      <cs-checkbox>one</cs-checkbox>
    </div>
  </div>
</template>

<script>
import CsCarousel from '@/components/cs-carousel.vue';
import CsCheckbox from '@/components/elements/cs-checkbox.vue';

export default {
  name: 'test',
  components: {
    CsCheckbox,
    CsCarousel,
  },
  data() {
    return {
      sliderItems: [
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '1.png',
        },
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '2.png',
        },
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '3.png',
        },
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          img: '4.png',
        },
      ],
      isVisible: true,
      cityList: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний-Новгород', 'Самара', 'Чебоксары', 'Ульяновск', 'Саранск'],
    };
  },
};
</script>

<style lang="scss" scoped>

.checkbox {
  margin-top: 50px;
  margin-left: 50px;
}

</style>
