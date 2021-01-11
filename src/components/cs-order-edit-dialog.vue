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
          <h3 class="mb-3">Дата заказа:</h3>
          <v-date-picker
            v-model="dates"
            full-width
            range
          />
<!--          <v-menu-->
<!--            ref="menu"-->
<!--            v-model="isShowTimeMenu"-->
<!--            :close-on-content-click="false"-->
<!--            :nudge-right="40"-->
<!--            transition="scale-transition"-->
<!--            offset-y-->
<!--          >-->
<!--            <template v-slot:activator="{ on, attrs }">-->
<!--              <v-text-field-->
<!--                v-model="time"-->
<!--                label="Время заказа"-->
<!--                prepend-icon="mdi-clock-time-four-outline"-->
<!--                readonly-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--              ></v-text-field>-->
<!--            </template>-->
<!--            <v-row-->
<!--              justify="space-around"-->
<!--              align="center"-->
<!--              style="background: #fff; padding: 30px"-->
<!--            >-->
<!--              <v-col style="width: 350px; flex: 0 1 auto;">-->
<!--                <h2>От:</h2>-->
<!--                <v-time-picker-->
<!--                  v-model="start"-->
<!--                  :max="end"-->
<!--                  format="24hr"-->
<!--                />-->
<!--              </v-col>-->
<!--              <v-col style="width: 350px; flex: 0 1 auto;">-->
<!--                <h2>До:</h2>-->
<!--                <v-time-picker-->
<!--                  v-model="end"-->
<!--                  :min="start"-->
<!--                  format="24hr"-->
<!--                />-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-menu>-->
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
import { mapActions } from 'vuex';

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
    },
  }),

  watch: {
    value(val) {
      if (val) {
        this.form.dateFrom = this.order.dateFrom;
        this.form.dateTo = this.order.dateTo;
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
    // startTime: {
    //   get: {},
    //   set(value) {
    //
    //   },
    // },
  },

  methods: {
    ...mapActions({
      updateOrder: 'orders/updateOrder',
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
