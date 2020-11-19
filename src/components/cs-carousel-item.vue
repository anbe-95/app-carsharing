<template>
  <div class="cs-carousel-item">
    <div class="cs-carousel-content">
      <h1>{{ item_data.title }}</h1>
      <p>{{ item_data.text }}</p>
      <cs-button text="Подробнее"/>
    </div>
    <img :src="('/images/') + item_data.img " alt=".pic">
  </div>
</template>

<script>
import CsButton from '@/components/elements/cs-button.vue';

export default {
  name: 'CsCarouselItem',
  components: {
    CsButton,
  },
  props: {
    item_data: {
      type: Object,
      default: () => {
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.cs-carousel-item {
  position: relative;
  display: flex;
  justify-content: center;

  .cs-carousel-content {
    color: white;
    position: absolute;
    top: 30%;
    display: flex;
    flex-direction: column;
    width: 495px;
    flex-wrap: wrap;

    h1 {
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 32px;
      line-height: 21.6px;
      font-size: 24px;
      color: #EEEEEE;
      font-weight: 300;
    }
  }
}

</style>
