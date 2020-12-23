<template>
  <div class="login">
    <div class="login__logo">
      <img width="44.5px" src="../assets/images/logo.svg" alt="logo">
      <h1>Need for drive</h1>
    </div>
    <div class="login__content">
      <h4>Вход</h4>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model.trim="name"
          :counter="10"
          :rules="nameRules"
          :disabled="isSending"
          label="Введите логин"
          required
          class="mb-5"
        />

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :disabled="isSending"
          label="Введите пароль"
          required
          type="password"
        />

        <div class="buttons">
          <v-btn
            :disabled="!valid || isSending"
            :loading="isSending"
            color="#007BFF"
            @click="onLogin"
          >
            Войти
          </v-btn>
        </div>
        <div
          v-if="isAuthError"
          style="color: red"
          class="text-center mt-5"
        >
          Не правильный логин или пароль
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    isSending: false,
    isAuthError: false,
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Login is required',
      (v) => (v && v.length <= 10) || 'Login must be less than 10 characters',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    ...mapActions({
      login: 'login',
    }),
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    async onLogin() {
      if (!this.validate()) {
        return false;
      }

      this.isAuthError = false;
      this.isSending = true;

      const isAuth = await this.login({
        username: this.name,
        password: this.password,
      })
        .finally(() => {
          this.isSending = false;
        });

      if (isAuth) {
        this.$router.push({ name: 'Admin' });
      } else {
        this.isAuthError = true;
      }
    },
  },
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
  background-color: #e5e5e5;

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
      color: #3d5170;
      font-weight: 400;
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 9px;
    height: 253.5px;
    width: 376.5px;
    padding: 20px 18px;
    background-color: white;
    margin-top: 16.5px;

    .v-text-field {
      margin: 0;
      padding: 0;
    }

    h4 {
      text-align: center;
      font-size: 17.5px;
      font-weight: normal;
      color: #3d5170;
    }

    p {
      font-size: 10.5px;
      color: #495057;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;

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
