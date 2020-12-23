<template>
  <div class="list">
    <h1>Заказы</h1>
    <template v-if="orders">
      <div class="list__items">
        <cs-order
          v-for="order of orders"
          :key="order.id"
          :order="order"
        />
      </div>
      <div class="list__pagination">
        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="7"
        />
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
    page: 1,
    limit: 5,
  }),
  watch: {
    page() {
      this.loadOrders({
        page: this.page,
        limit: this.limit,
      });
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
  },
  created() {
    this.loadOrders({
      page: this.page,
      limit: this.limit,
    });
  },
};
</script>

<style lang="scss" scoped>

.list {
  background-color: #e5e5e5;

  h1 {
    font-size: 29px;
    color: #3d5170;
    font-weight: 400;
    margin-bottom: 30px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding: 21px;
    width: 1062px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12),
    0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1);
  }

  &__pagination {
    width: 1062px;
    margin-top: 20px;
  }
}
</style>
