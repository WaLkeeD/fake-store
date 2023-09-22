import { defineStore } from "pinia";
import axios from "axios";

export const useItem = defineStore({
  id: 'item',
  state: () => ({
    url: 'https://dummyjson.com/products',
    items: null
  }),
  actions: {
    async getItem() {
      try {
        const res = await axios.get(`${this.url}`)
        this.items = res.data.products
        console.log(res);
      } catch (error) {
        console.log('Произошла ошибка при получении определенного товара', error);
      }
    }
  },
  getters: {

  }
})