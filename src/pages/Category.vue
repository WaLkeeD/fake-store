<template>
    <div class="category" v-if="categories">
        <div class="container">
            <div class="category__item" v-for="item in categories" :key="item.id">
                {{ item }}
            </div>
        </div>
    </div>
    <Loader v-else />
</template>

<script setup>

import { useCategory } from "@/store/category.js";
import { onMounted, computed, ref } from "vue";
import Loader from "../components/Loader.vue";


const categoryStore = useCategory();
onMounted(() => categoryStore.getCategory());
const categories = computed(() => categoryStore.category);

</script>

<style lang="scss" scoped>

</style>