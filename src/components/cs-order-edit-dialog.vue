<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="600px"
    content-class="cs-order-edit-dialog"
  >
    <v-card class="cs-order-edit-dialog__content">
      <v-card-title>
        <span class="headline">Редактирование заказа</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <h3 class="mb-3">Статус заказа:</h3>
          <v-select
            v-model="form.orderStatusId"
            :items="orderStatuses"
            return-object
            placeholder="Статус"
            item-text="name"
            item-value="id"
            outlined
            hide-details
            height="30px"
            class="mb-10"
          />
          <h3 class="mb-3">Авто:</h3>
          <v-autocomplete
            v-model="form.carId"
            :items="cars"
            :loading="isLoadingCars"
            :disabled="isLoadingCars"
            color="white"
            hide-no-data
            hide-selected
            item-text="name"
            item-value="id"
            placeholder="Авто"
            outlined
            return-object
          />
          <h3 class="mb-3">Дата заказа:</h3>
          <v-date-picker
            v-model="dates"
            full-width
            range
          />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="visible = false"
        >
          Отмена
        </v-btn>
        <v-btn
          :loading="sending"
          color="primary"
          @click="onSaveOrder"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dayjs from 'dayjs';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'cs-order-edit-dialog',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Object,
    },
  },

  data: () => ({
    visible: false,
    sending: false,
    isShowTimeMenu: false,
    form: {
      dateFrom: null,
      dateTo: null,
      orderStatusId: null,
      carId: null,
    },
    isLoadingCars: false,
  }),

  watch: {
    value(val) {
      if (val) {
        this.getCars();
        this.form.dateFrom = this.order.dateFrom;
        this.form.dateTo = this.order.dateTo;
        this.form.orderStatusId = this.order.orderStatusId;
        this.form.carId = this.order.carId;
        this.visible = true;
      }
    },
    visible(val) {
      if (!val) {
        this.$emit('input', false);
      }
    },
  },

  computed: {
    ...mapState('orders', ['orderStatuses']),
    ...mapState('cars', ['cars']),

    dates: {
      get() {
        const {
          dateFrom,
          dateTo,
        } = this.form;

        const res = [];

        if (dateFrom) {
          res.push(dayjs(dateFrom)
            .format('YYYY-MM-DD'));

          if (dateTo) {
            res.push(dayjs(dateTo)
              .format('YYYY-MM-DD'));
          }
        }

        return res;
      },
      set(value) {
        if (value[0]) {
          this.form.dateFrom = +new Date(value[0]);
        }

        if (value[1]) {
          this.form.dateTo = +new Date(value[1]);
        } else {
          this.form.dateTo = null;
        }
      },
    },
  },

  methods: {
    ...mapActions({
      updateOrder: 'orders/updateOrder',
      loadCars: 'cars/loadCars',
    }),

    async onSaveOrder() {
      this.sending = true;
      await this.updateOrder({
        id: this.order.id,
        data: this.form,
      });
      this.sending = false;
      this.visible = false;
    },

    async getCars() {
      this.isLoadingCars = true;
      await this.loadCars();
      this.isLoadingCars = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cs-order-edit-dialog {
  &__content {
    padding: 20px;
  }
}
</style>
