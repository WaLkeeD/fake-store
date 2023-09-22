import { defineStore } from "pinia";
import axios from "axios";

export const useProducts = defineStore({
    id: 'products',
    state: () => ({
      url: 'https://dummyjson.com/products',
      products: null
    }),
    actions: {
     async getProducts(){
        try {
            const res = await axios.get(`${this.url}?limit=30`)
            this.products = res.data.products
            console.log(this.products);
        } catch (error) {
            console.log('Произошла ошибка при получении товаров', error);
        }
     }
    },
    getters:{

    }
})