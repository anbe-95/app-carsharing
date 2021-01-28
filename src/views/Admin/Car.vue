<template>
  <div class="car-setting">
    <div class="car-save" v-if="success">
      <p>
        <img src="@/assets/images/checkmark2.svg" alt="icon">
        Успех! Машина сохранена
      </p>
      <button @click="success = false">
        <img src="@/assets/images/close-check.svg" alt="icon">
      </button>
    </div>
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
            <select v-model="car.categoryId">
              <option
                v-for="category of filteredCategories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </label>
        </p>
        <div class="auto__info_colors">
          <label>Доступные цвета
            <input type="text" v-model="newColor" @keyup.enter="onAddCarColor">
          </label>
          <button @click="onAddCarColor">
            <img src="../../assets/images/plus_icon.svg" alt="plus">
          </button>
          <ul>
            <li v-for="(item, index) in car.colors" :key="index">
              {{ item }}
              <v-btn icon class="d-inline-flex" @click="onDeleteCarColor(index)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </li>
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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Car',
  data() {
    return {
      success: false,
      file: null,
      showPreview: false,
      imagePreview: '',
      modelCar: '',
      typeCar: '',
      newColor: '',
      car: {
        name: '',
        description: '',
        priceMax: '',
        priceMin: '',
        categoryId: '',
        colors: [],
      },
    };
  },
  computed: {
    ...mapState(['categories']),

    isEdit() {
      return !!this.carId;
    },
    carId() {
      return this.$route?.params?.id;
    },
    image() {
      return this.car?.thumbnail?.path || this.imagePreview;
    },
    filteredCategories() {
      return this.categories.filter((i) => i.id);
    },
  },
  methods: {
    ...mapActions({
      loadCar: 'cars/loadCar',
      createCar: 'cars/createCar',
      deleteCar: 'cars/deleteCar',
      updateCar: 'cars/updateCar',
      loadCategories: 'loadCategories',
    }),
    onAddCarColor() {
      this.car.colors.push(this.newColor);
      this.newColor = '';
    },
    onDeleteCarColor(ind) {
      this.car.colors.splice(ind, 1);
    },
    setCar(car) {
      this.car = {
        ...car,
        categoryId: car.categoryId.id,
      };
    },
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
      formData.append('categoryId', this.car.categoryId);
      formData.append('priceMin', this.car.priceMin);
      formData.append('priceMax', this.car.priceMax);
      formData.append('description', this.car.description);

      if (this.car.colors?.length) {
        this.car.colors.forEach((color, ind) => {
          formData.append(`colors[${ind}]`, color);
        });
      } else {
        formData.set('colors', []);
      }
      if (this.file) {
        formData.append('thumbnail', this.file);
      }
      if (this.isEdit) {
        const car = await this.updateCar({
          id: this.carId,
          formData,
        });
        this.setCar(car);
        this.success = true;
      } else {
        const id = await this.createCar(formData)
          .then(() => this.success = true);
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
      const car = await this.loadCar(this.carId);
      this.setCar(car);
      this.loadCategories();
    }
  },
};
</script>

<style lang="scss" scoped>

.car-setting {
  background-color: #e5e5e5;
  width: 100%;

  .car-save {
    background-color: #0ec261;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
    left: 0;
    margin-top: -27px;
    margin-left: -27px;
    padding: 12px;

    p {
      display: flex;
      color: white;
      font-weight: 300;

      img {
        margin-right: 10px;
      }
    }
  }

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
      margin-bottom: 10px;
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

      &_image {
        height: 145px;
      }

      label {
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
      }
    }

    &__info {
      padding: 10px;
      background-color: white;
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
        margin-bottom: 25px;
        margin-right: 5px;

        select,
        input {
          padding: 10px;
          border: 1px solid #becad6;
          border-radius: 4px;
          height: 30px;
          outline: none;
        }

        select {
          padding: 0 10px;
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
        align-items: center;
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
          margin-left: 12.5px;
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .car-setting {
    .auto {
      &__info {
        width: 100%;

        &_model {
          flex-direction: column;

          label {
            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .car-setting {
    h1 {
      font-size: 26px;
    }

    .auto {
      flex-direction: column;

      &__card {
        width: 100%;
        align-self: center;
        height: 300px;
      }

      &__info {
        margin: 0;
        align-self: center;
      }
    }
  }
}

@media (max-width: 500px) {
  .car-setting {
    h1 {
      font-size: 22px;
    }

    .auto {
      flex-direction: column;

      &__card {
        width: 100%;
      }

      &__info {
        &_colors {
          label {
            input {
              width: 200px
            }
          }
        }

        .buttons {
          button {
            width: 75px;
            font-size: 10px;
            outline: none;
          }

          .cancel {
            margin-left: 7px;
          }

          .delete {
            margin-left: 7px;
          }
        }
      }
    }
  }
}

</style>
