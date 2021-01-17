<template>
  <div class="orders">
    <h1>Заказы</h1>
    <template>
      <div class="orders__items">
        <cs-order
          v-for="order of orders"
          :key="order.id"
          :order="order"
        />
        <div v-if="loading" class="orders__loader">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          />
        </div>
        <div class="orders__pagination">
          <v-pagination
            v-model="page"
            :disabled="loading"
            :length="pageCount"
            :total-visible="7"
            circle
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CsOrder from '@/components/cs-order.vue';

export default {
  name: 'Order-List',
  components: {
    CsOrder,
  },
  data: () => ({
    loading: true,
    page: 1,
    limit: 5,
  }),
  watch: {
    page() {
      this.getOrders();
    },
  },
  computed: {
    ...mapState('orders', ['orders', 'total']),

    pageCount() {
      return Math.floor(this.total / this.limit);
    },
  },
  methods: {
    ...mapActions({
      loadOrders: 'orders/loadOrders',
    }),

    async getOrders() {
      this.loading = true;
      await this.loadOrders({
        page: this.page,
        limit: this.limit,
      });
      this.loading = false;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
.orders {
  background-color: #e5e5e5;

  h1 {
    font-size: 29px;
    color: #3d5170;
    font-weight: 400;
    margin-bottom: 30px;
  }

  &__loader {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &__items {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 21px;
    min-height: 300px;
    background-color: white;
    border-radius: 9px;
    overflow: hidden;
    box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  }

  &__pagination {
    width: 1062px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #EEEEEE;

    ::v-deep {
      .v-pagination__navigation,
      .v-pagination__item {
        box-shadow: none;
      }
    }
  }
}

@media (max-width: 1200px) {

  .orders {
    h1 {
      font-size: 26px;
      margin-bottom: 28px;
    }

    &__items {
      padding: 15px 5px;
      min-height: 300px;
    }

    &__pagination {
      width: 1062px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #EEEEEE;

      ::v-deep {
        .v-pagination__navigation,
        .v-pagination__item {
          box-shadow: none;
        }
      }
    }
  }
}

</style>
