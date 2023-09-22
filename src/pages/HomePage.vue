<template>
    <div class="main" v-if="products">
        <div class="main__block">
            <h1 class="main__block-title">Fake Store</h1>
            <p class="main__block-text">So chip. So close. So fake.</p>
            <p class="main__block-info">Start buying now</p>
        </div>
        
        <Products />
        <Pagination :currentPage="currentPage" :totalPage="totalPage" @page="changePage" />
    </div>
    <Loader v-else />
</template>

<script setup>
import Products from "@/components/Products.vue";
// import Select from "@/components/Select.vue";
import Pagination from "@/components/Pagination.vue";
import { ref, onMounted, computed } from "vue";
import { useProducts } from "../store/products";
import Loader from "../components/Loader.vue";

const productsStore = useProducts();
onMounted(() => productsStore.getProducts());
const products = computed(() => productsStore.products);

const currentPage = ref(1);
const totalPage = ref(Math.ceil(100 / 12));

const changePage = async (newPage) => {
    currentPage.value = newPage
    await productsStore.getProducts({ page: currentPage.value })
}


</script>

<style lang="scss" scoped></style>