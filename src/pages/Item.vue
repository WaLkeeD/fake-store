<template>
   <div id="item" class="container" v-if="selected">
      <router-link class="item__back" to="/">
         <img src="../assets/images/arrow.svg" alt="">
         <span>Back to Home</span>
      </router-link>
      <div class="item">
         <h2 class="item__title">{{ selected.title }}</h2>
         <div class="item__box">
            <div class="item__img">
               <img :src="selected.thumbnail" alt="">
            </div>
            <div class="item__info">
               <p class="item__info-description">{{ selected.description }}</p>
               <p class="item__info-price">price: {{ selected.price }}$</p>
               <p class="item__info-discount">discount: {{ Math.ceil(selected.discountPercentage) }}% -
                  {{ Math.ceil(selected.price - selected.discountPercentage) }}$</p>
               <p class="item__info-stock">stock: {{ selected.stock }}</p>
            </div>
         </div>
         <h2 class="item__recommendations-title">Recommendations</h2>
         
         <div class="item__recommendations">

            <div v-for="image in selected.images" class="item__recommendations-box">
               <a :href="image">
                  <img class="item__recommendations-img" :src="image" alt="">
               </a>
            </div>
         </div>
      </div>
   </div>
   <loader v-else/>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useProducts } from "@/store/products.js";
import { useRouter, useRoute } from "vue-router";
import Loader from "../components/Loader.vue";


const productsStore = useProducts();
onMounted(() => productsStore.getProducts());
const products = computed(() => productsStore.products);

const router = useRouter()
const route = useRoute()

const selected = computed(() => {
   return products.value.find(product => product.id === Number(route.params.id))
})


</script>

<style lang="scss" scoped></style>
