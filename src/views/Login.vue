<template>
  <div class="login">
    <h1>Need for drive</h1>
    <div class="login__content">
      <h2>Вход</h2>
      <label for="email"><p>Почта</p>
        <input style="width: 100%" type="email" id="email" placeholder="Введите логин">
      </label>
      <label for="password"><p>Пароль</p>
        <input style="width: 100%" type="password" id="password" placeholder="Введите пароль">
      </label>
      <div class="buttons">
        <p>Запросить доступ</p>
        <v-btn style="background-color: #007BFF">Войти</v-btn>
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

.login {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EEEEEE;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 9px;
    height: 255px;
    width: 380px;
    padding: 1%;
    background-color: white;
    margin-top: 2%;

    h2 {
      text-align: center;
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .v-btn {
        height: 30px;
        width: 110px;
        color: white;
        text-transform: none;
      }
    }
  }
}

</style>
