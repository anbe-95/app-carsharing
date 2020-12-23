import { ApiService } from '@/services/api.service';

export class CarsService extends ApiService {
  getCars() {
    return this.api.get('/db/car');
  }

  getCar(id) {
    return this.api.get(`/db/car/${id}`);
  }

  createCar(data) {
    return this.api.post('/db/car', data);
  }

  updateCar(id, data) {
    return this.api.put(`/db/car/${id}`, data);
  }

  deleteCar(id) {
    return this.api.delete(`/db/car/${id}`);
  }
}

export default new CarsService();
