import axios from 'axios';

export default class postsService {
  static async getAll(limit = 10, page = 1) {
    const resp = axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return await resp;
  }
  static async getById(id) {
    const resp = axios.get('https://jsonplaceholder.typicode.com/posts/$' + id);
    return await resp;
  }
  static async getCommById(id) {
    const resp = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return await resp;
  }
}
