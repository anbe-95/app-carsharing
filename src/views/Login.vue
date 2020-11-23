<template>
  <div class="login">
    <div class="login__logo">
      <img width="44.5px" src="../assets/images/logo.svg" alt="logo">
      <h1>Need for drive</h1>
    </div>
    <div class="login__content">
      <h2>Вход</h2>
      <label for="email"><p>Почта</p>
        <input required type="email" id="email" placeholder="Введите логин">
      </label>
      <label for="password"><p>Пароль</p>
        <input required type="password" id="password" placeholder="Введите пароль">
      </label>
      <div class="buttons">
        <a>Запросить доступ</a>
        <v-btn color="#007BFF">Войти</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/fonts.scss';

.login {
  font-family: $secondary-font;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;

  &__logo {
    display: flex;
    align-items: center;

    img {
      margin-right: 11.5px;
      height: 44.5px;
      width: 44.5px;
    }

    h1 {
      font-size: 24px;
      color: #3D5170;
      font-weight: 400;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 9px;
    height: 253.5px;
    width: 376.5px;
    padding: 20px 18px;
    background-color: white;
    margin-top: 16.5px;

    h2 {
      text-align: center;
      font-size: 17.5px;
      color: #3D5170;
      font-weight: 400;
    }

    input {
      width: 100%;
      height: 29px;
      border: 0.5px solid #BECAD6;
      border-radius: 3px;
      font-size: 11px;
      color: #3D5170;
      padding-left: 11.5px;
    }

    p {
      margin-bottom: 8.5px;
      font-size: 10.5px;
      color: #495057;
    }

    a {
      font-size: 10.5px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .v-btn {
        font-size: 11.5px;
        height: 29px;
        width: 110px;
        color: white;
        text-transform: none;
        font-weight: 400;
      }
    }
  }
}

</style>
