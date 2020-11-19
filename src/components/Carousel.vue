<template>
  <v-carousel height="100vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div class="slide">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
        <v-btn
          elevation="2"
          :color="item.colorBtn"
        >Подробнее
        </v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

export default {
  name: 'Carousel',
  data() {
    return {
      items: [
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
          colorBtn: '#0EC261',
          src: '/images/slide(1).png',
        },
        {
          title: 'Страховка',
          text: 'Полная страховка автомобиля',
          colorBtn: '#194173',
          src: '/images/slide(2).png',
        },
        {
          title: 'Бензин',
          text: 'Полный бак на любой заправке города за наш счёт',
          colorBtn: '#734819',
          src: '/images/slide(3).png',
        },
        {
          title: 'Обслуживание',
          text: 'Автомобиль проходит еженедельное ТО',
          colorBtn: '#401973',
          src: '/images/slide(4).png',
        },
      ],
    };
  },
};
</script>

<style lang="scss">

.home {
  .v-carousel {
    width: 50%;

    .v-responsive {
      &__content {
        width: 100%;
        display: flex;
        justify-content: center;

        .slide {
          width: 495px;
          display: flex;
          flex-direction: column;
          padding-top: 25%;

          h2 {
            font-size: 40px;
            font-weight: 500;
          }

          p {
            margin-top: 8px;
            margin-bottom: 32px;
            font-size: 24px;
            font-weight: 300;
            line-height: 24px;
            color: #EEEEEE;
          }

          .v-btn {
            width: 164px;
            height: 48px;
            font-size: 18px;
            text-transform: none;
            color: #EEEEEE;
          }
        }
      }
    }

    &__controls {
      background: none;

      .v-item-group {
        .v-btn--active {
          .v-btn__content {
            color: #0EC261;
          }
        }

        .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
          opacity: 0;
        }
      }
    }
  }
}

</style>
