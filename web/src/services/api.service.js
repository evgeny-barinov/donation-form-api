import { API_URL } from '@/config';
import axios from 'axios';

class Api {

  constructor() {
    this._client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
  }

  /**
   * @param {number} amount
   * @param {string} currency
   * @return {Promise<any>}
   */
  donate(amount, currency) {
    return this._client.post('donate', { amount, currency });
  }
}

const api = new Api();

export default api;
