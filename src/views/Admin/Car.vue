<template>
  <div class="car-setting">
    <h1>Карточка автомобиля</h1>
    <div class="auto">
      <div class="auto__card">
        <div class="auto__card_image">
          <v-img
            max-height="150"
            max-width="250"
            :src="image"
            style="cursor: pointer"
          >
            <v-icon v-if="!image" large style="height: 150px; width: 250px">
              mdi-cloud-upload-outline
            </v-icon>
          </v-img>
        </div>
        <h2>{{ car.name }}</h2>
        <h4>{{ typeCar }}</h4>
        <label>
          <input type="file" ref="file" @change="fileUpload" accept="image/*">
        </label>
        <p>Заполнено</p>
      </div>
      <div class="auto__info">
        <h3>Настройки автомобиля</h3>
        <div class="auto__info_model">
          <label>Модель автомобиля
            <input type="text" v-model="car.name">
          </label>
          <label>Тип автомобиля
            <input type="text" v-model="typeCar">
          </label>
        </div>
        <p>
          <label>Мин цена
            <input type="text" v-model="car.priceMin">
          </label>
        </p>
        <p>
          <label>Макс цена
            <input type="text" v-model="car.priceMax">
          </label>
        </p>
        <p>
          <label>Категория
            <input type="text" value="5e25c99a099b810b946c5d63">
          </label>
        </p>
        <div class="auto__info_colors">
          <label>Доступные цвета
            <input type="text" v-model="newColor" @keyup.enter="colors.push(newColor)">
          </label>
          <button @click="colors.push(newColor)">
            <img src="../../assets/images/plus_icon.svg" alt="plus">
          </button>
          <ul>
            <li v-for="(item, index) in colors" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div class="buttons">
          <button class="save" @click="onSave">Сохранить</button>
          <button class="cancel" @click="onCancel">Отменить</button>
          <button v-if="isEdit" class="delete" @click="onDelete">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Car',
  data() {
    return {
      file: null,
      showPreview: false,
      imagePreview: '',
      modelCar: '',
      typeCar: '',
      newColor: '',
      colors: ['Синий', 'Красный'],
      car: {
        name: '',
        description: '',
        priceMax: '',
        priceMin: '',
      },
    };
  },
  computed: {
    isEdit() {
      return !!this.carId;
    },
    carId() {
      return this.$route.params.id;
    },
    image() {
      return this.car?.thumbnail?.path || this.imagePreview;
    },
  },
  methods: {
    ...mapActions({
      loadCar: 'cars/loadCar',
      createCar: 'cars/createCar',
      deleteCar: 'cars/deleteCar',
      updateCar: 'cars/updateCar',
    }),
    fileUpload() {
      // eslint-disable-next-line prefer-destructuring
      this.file = this.$refs.file.files[0];

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.showPreview = true;
        this.imagePreview = reader.result;
      }, false);
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
    async onSave() {
      const formData = new FormData();
      formData.append('name', this.car.name);
      formData.append('categoryId', '5e25c99a099b810b946c5d63');
      formData.append('priceMin', this.car.priceMin);
      formData.append('priceMax', this.car.priceMax);
      formData.append('description', this.car.description);
      if (this.file) {
        formData.append('thumbnail', this.file);
      }
      if (this.isEdit) {
        this.car = await this.updateCar({ id: this.carId, formData });
      } else {
        const id = await this.createCar(formData);
        this.$router.push({
          name: 'Car',
          params: { id },
        });
      }
    },

    onCancel() {
      this.$router.push({ name: 'Cars' });
    },

    async onDelete() {
      await this.deleteCar(this.carId);
      this.$router.push({ name: 'Cars' });
    },
  },

  async created() {
    if (this.isEdit) {
      this.car = await this.loadCar(this.carId);
    }
  },
};
</script>

<style lang="scss" scoped>

.car-setting {
  background-color: #e5e5e5;

  width: 100%;

  h1, h2, h3, h4, p, label {
    font-weight: 400;
    color: #3d5170;
  }

  h1 {
    margin-bottom: 30px;
    font-size: 29px;
  }

  .auto {
    display: flex;

    &__card {
      background-color: white;
      width: 335px;
      height: 506px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 9px;
      box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
      0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);

      h4 {
        margin-top: 5px;
        margin-bottom: 10px;
      }

      p {
        box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.12);
        width: 100%;
        height: 60px;
        padding: 10px;
        margin-top: 22.5px;
      }

      &_image {
        height: 145px;
      }

      textarea {
        padding: 21px;
        width: 100%;

        &:focus {
          outline: none;
        }
      }
    }

    &__info {
      padding: 18px;
      background-color: white;
      width: 700px;
      height: 800px;
      margin-left: 28px;
      border-radius: 9px;
      position: relative;
      box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
      0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);

      h3 {
        height: 58.5px;
      }

      label {
        display: flex;
        flex-direction: column;

        input {
          border: 1px solid #becad6;
          border-radius: 4px;
          height: 30px;
          outline: none;
        }
      }

      &_model {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;

        input {
          width: 320px;
        }
      }

      &_colors {
        display: flex;
        align-items: flex-end;
        position: relative;

        input {
          width: 283px;
        }

        button {
          margin-left: 8px;
          width: 30px;
          height: 30px;
          border: 1px solid #becad6;
          border-radius: 4px;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            filter: brightness(90%);
          }

          &:active {
            filter: brightness(80%);
          }
        }

        ul {
          position: absolute;
          top: 70px;
        }
      }

      .buttons {
        display: flex;
        position: absolute;
        bottom: 18px;

        button {
          width: 110px;
          height: 29px;
          border-radius: 4px;
          font-size: 11.5px;
          outline: none;

          &:hover {
            filter: brightness(90%);
          }

          &:active {
            filter: brightness(80%);
          }
        }

        .save {
          background: #007bff;
          color: white;
        }

        .cancel {
          background: #e9ecef;
          color: #3d5170;
          margin-left: 12.5px;
        }

        .delete {
          background: #cb3656;
          color: white;
          margin-left: 320px;
        }
      }
    }
  }
}

</style>