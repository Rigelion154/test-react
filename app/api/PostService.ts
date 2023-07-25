import axios from "axios";

export default class PostService {
    static baseUrl = 'https://jsonplaceholder.typicode.com/'
    static endpoints = {posts: 'posts'}

    static async getAll(limit = 10, page = 1) {
        const response =  await axios.get(`${this.baseUrl}${this.endpoints.posts}`, {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response;
    }
}
