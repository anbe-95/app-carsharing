import { ApiService } from '@/services/api.service';

export class OrdersService extends ApiService {
  getOrders(params) {
    return this.api.get('/db/order', { params });
  }

  updateOrder(id, data) {
    return this.api.put(`/db/order/${id}`, data);
  }
}

export default new OrdersService();
