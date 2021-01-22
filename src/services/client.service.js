import { ApiService } from '@/services/api.service';

export class ClientService extends ApiService {
  getCities() {
    return this.api.get('db/city');
  }

  getPoints() {
    return this.api.get('db/point');
  }

  getCategories() {
    return this.api.get('db/category');
  }

  getCars() {
    return this.api.get('db/car');
  }

  getCarById(id) {
    return this.api.get(`db/car/${id}`);
  }

  getRate() {
    return this.api.get('db/rate');
  }

  getRateType() {
    return this.api.get('db/rateType');
  }

  postOrder(form) {
    return this.api.post('db/order', { ...form });
  }

  getOrderById(id) {
    return this.api.get(`db/order/${id}`);
  }
}

export default new ClientService();
