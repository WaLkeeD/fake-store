<template>
    <div class="products" v-if="products">
        <select name="select" id="select">
                <option>Price</option>
                <option @click="sortParam = 'quantity'">Quantity</option>
                <option :item="item" @click="sortByTitle">Title</option>
            </select>
        <div class="container">
            
            <div @click="details(item.id)" class="products__item" v-for="item in products" :item="item" :key="item.id">
                <h2 class="products__item-title">{{ item.title }}</h2>
                <div class="products__item-box">
                    <div class="products__item-img">
                        <img :src="item.thumbnail" alt="">
                    </div>
                    <div class="products__item-info">
                        <p class="products__item-info-description">{{ item.description }}</p>
                        <p class="products__item-info-price">price: {{ item.price }}$</p>
                        <p class="products__item-info-discount">discount: {{ Math.ceil(item.discountPercentage) }}% -
                            {{ Math.ceil(item.price - item.discountPercentage) }}$</p>
                        <p class="products__item-info-stock">stock: {{ item.stock }}</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <Loader v-else />
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useProducts } from "@/store/products.js";
import { useRouter, useRoute } from "vue-router";
import Pagination from "../components/Pagination.vue";

const router = useRouter()
const route = useRoute()

const details = (id) => {
    router.push({ name: 'Item', params: { id } })
}

const productsStore = useProducts();
onMounted(() => productsStore.getProducts());
const products = computed(() => productsStore.products);

let sortParam = ref('')
const sortByTitle = computed(() => {
    return products.value.sort(item.title)
})


// const sortByPrice = computed((d1, d2) => {
//     return (d1.price > d2.price) ? 1 : -1
// })
</script>

<style lang="scss" scoped></style>