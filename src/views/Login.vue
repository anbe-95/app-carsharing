<template>
  <div class="login">
    <div class="login__logo">
      <img width="44.5px" src="../assets/images/logo.svg" alt="logo">
      <h1>Need for drive</h1>
    </div>
    <div class="login__content">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model.trim="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="E-mail"
          required
          type="password"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>
        <div class="buttons">
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            :disabled="!valid"
            color="#007BFF"
            class="mr-4"
            @click="validate"
          >
            Войти
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'E-mail is required',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
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

    .v-input--selection-controls {
      margin: 0;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
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
