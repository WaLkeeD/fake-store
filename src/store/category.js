import { defineStore } from "pinia";
import axios from "axios";

export const useCategory = defineStore({
    id: 'category',
    state: () => ({
      url: 'https://dummyjson.com/products/categories',
      category: null
    }),
    actions: {
     async getCategory(){
        try {
            const res = await axios.get(`${this.url}`)
            this.category = res.data
            console.log(this.category);
        } catch (error) {
            console.log('Произошла ошибка при получении категогий', error);
        }
     }
    },
    getters:{

    }
})