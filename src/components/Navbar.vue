<template>
    <div class="nav">
      <div class="container">
          <a href="">
            <img src="@/assets/images/logo.svg" alt="">
          </a>
          
          <ul class="nav__list">
            <li>
              <router-link to="/" class="nav__list-link" id="home">Home</router-link>
            </li>
            <li>
              <router-link to="/category" class="nav__list-link" id="category">Categories</router-link>
            </li>
            
          </ul>
          <a href=""><img class="nav__icon" src="@/assets/images/buy.svg" alt=""></a>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>