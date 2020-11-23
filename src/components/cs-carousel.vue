<template>
  <div class="wrapper">
    <div
      class="cs-carousel"
      :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }"
    >
      <cs-carousel-item
        class="cs-carousel-item"
        v-for="(item, i) in carousel_data"
        :key="i"
        :item_data="item"
      />
    </div>
    <div class="cs-carousel__navigation">
      <div class="cs-carousel__buttons">
        <button class="cs-carousel__prev" @click="prevSlide">
          <img src="../assets/images/vector-left.svg" alt="left">
        </button>
        <button class="cs-carousel__next" @click="nextSlide">
          <img src="../assets/images/vector-right.svg" alt="right">
        </button>
      </div>
      <div class="cs-carousel__pagination">
        <div v-for="(item, i) in carousel_data"
             :key="i"
             class="cs-carousel__pagination-item"
             :class="{ 'cs-carousel__pagination-item_active' : currentSlideIndex === i }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CsCarouselItem from '@/components/cs-carousel-item.vue';

export default {
  name: 'CsCarousel',
  components: {
    CsCarouselItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
      } else {
        this.currentSlideIndex = 3;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex += 1;
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      const vm = this;
      setInterval(() => {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};

</script>

<style lang="scss" scoped>

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  .cs-carousel {
    display: flex;
    transition: all 0.5s ease 0s;
    width: 100%;
    height: 100%;

    &__prev, &__next {
      height: 100%;
      width: 64px;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      z-index: 5;

      &:hover {
        background-color: rgba(14, 194, 97, .2);
      }

      &:active {
        background: #076432;
        opacity: 0.5;
      }
    }

    &__next {
      right: 0;
    }

    &__pagination {
      width: 56px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 32px;
      left: 50%;
    }

    &__pagination-item {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #EEEEEE;

      &_active {
        background: #0EC261;
      }
    }
  }
}

</style>
