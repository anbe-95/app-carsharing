<template>
  <div class="car-setting">
    <h1>Карточка автомобиля</h1>
    <div class="auto">
      <div class="auto__card">
        <div class="auto__card_image">
          <img :src="imagePreview" v-show="showPreview"/>
        </div>
        <h2>{{ modelCar }}</h2>
        <h4>{{ typeCar }}</h4>
        <label>
          <input type="file" ref="file" @change="fileUpload()" accept="image/*">
        </label>
        <button @click="submitFile()">Загрука</button>
        <p>Заполнено</p>
        <textarea cols="30" rows="10" placeholder="Описание"></textarea>
      </div>
      <div class="auto__info">
        <h3>Настройки автомобиля</h3>
        <div class="auto__info_model">
          <label>Модель автомобиля
            <input type="text" v-model="modelCar">
          </label>
          <label>Тип автомобиля
            <input type="text" v-model="typeCar">
          </label>
        </div>
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
          <button class="save">Сохранить</button>
          <button class="cancel">Отменить</button>
          <button class="delete">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CarSetting',
  data() {
    return {
      file: '',
      showPreview: false,
      imagePreview: '',
      modelCar: '',
      typeCar: '',
      newColor: '',
      colors: ['Синий', 'Красный'],
    };
  },
  methods: {
    submitFile() {
      const formData = new FormData();
      formData.append('file', this.file);
      this.$axios.post('/single-file',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          alert('SUCCESS!!');
        })
        .catch(() => {
          alert('FAILURE!!');
        });
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
  },
};
</script>

<style lang="scss" scoped>

.car-setting {
  background-color: #E5E5E5;
  width: 100%;

  h1, h2, h3, h4, p, label {
    font-weight: 400;
    color: #3D5170;
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
          border: 1px solid #BECAD6;
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
          border: 1px solid #BECAD6;
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
          background: #007BFF;
          color: white;
        }

        .cancel {
          background: #E9ECEF;
          color: #3D5170;
          margin-left: 12.5px;
        }

        .delete {
          background: #CB3656;
          color: white;
          margin-left: 320px;
        }
      }
    }
  }
}

</style>
