<template>
  <div class="cs-carousel-item">
    <div class="cs-carousel-content">
      <h1>{{ item_data.title }}</h1>
      <p>{{ item_data.text }}</p>
      <cs-button class="slider-button" :class="item_data.buttonClass" text="Подробнее"/>
    </div>
    <div
      :style="{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      center / cover no-repeat url(/images/${item_data.img}`}"
      class="image"
    >
    </div>
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
  width: 100%;
  height: 100%;
  min-width: 100%;

  .cs-carousel-content {
    color: white;
    position: absolute;
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    padding: 0 16%;
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
    .slider-button {
      color: #EEEEEE;
      width: 164px;
      border-radius: 4px;
      &_green {
        background: linear-gradient(90deg, #13493F 0%, #0C7B1B 100%);
      }
      &_blue {
        background: linear-gradient(90deg, #132949 0%, #0C7B67 100%);
      }
      &_red {
        background: linear-gradient(90deg, #493013 0%, #7B0C3B 100%);
      }
      &_pink {
        background: linear-gradient(90deg, #281349 0%, #720C7B 100%);
      }
      &:hover {
        filter: brightness(90%);
      }
      &:active {
        filter: brightness(80%);
      }
    }
  }
  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

</style>
