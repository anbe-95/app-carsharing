// eslint-disable-next-line import/named
import { ApiService } from '@/services/api.service';

export class AuthService extends ApiService {
  login(username, password) {
    return this.api.post(
      '/auth/login/oauth',
      {
        username,
        password,
      },
      {
        headers: {
          // eslint-disable-next-line no-underscore-dangle
          Authorization: `Basic ${this._getBasicToken()}`,
        },
      },
    )
      .catch((error) => {
        const { response } = error;
        if (response.status === 400) {
          localStorage.clear();
          window.location.replace('/admin');
        }
      });
  }

  check() {
    return this.api.get('/auth/check');
  }

  // eslint-disable-next-line no-underscore-dangle,class-methods-use-this
  _getBasicToken() {
    const random = Math.random()
      .toString(36)
      .substr(2);
    return btoa(`${random}:${process.env.VUE_APP_SECRET}`);
  }
}

export default new AuthService();
