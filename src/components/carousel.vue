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
  name: 'carousel',
  data() {
    return {
      items: [
        {
          title: 'Бесплатная парковка',
          text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах',
          colorBtn: '#0EC261',
          src: 'http://www.fonstola.ru/pic/201404/1600x900/fonstola.ru-143896.jpg',
        },
        {
          title: 'Страховка',
          text: 'Полная страховка автомобиля',
          colorBtn: '#194173',
          src: 'http://www.fonstola.ru/pic/201401/1600x900/fonstola.ru-139638.jpg',
        },
        {
          title: 'Бензин',
          text: 'Полный бак на любой заправке города за наш счёт',
          colorBtn: '#734819',
          src: 'http://www.fonstola.ru/pic/201308/1600x900/fonstola.ru-107938.jpg',
        },
        {
          title: 'Обслуживание',
          text: 'Автомобиль проходит еженедельное ТО',
          colorBtn: '#401973',
          src: 'http://www.fonstola.ru/pic/201506/1600x900/fonstola.ru-188467.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
