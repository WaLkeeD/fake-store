<template>
  <div class="pagination">
    <button @click="$emit('page', currentPage - 1)" :disabled="currentPage == 1">back</button>
      <span>Page {{ currentPage }} from {{ totalPage }}</span>
    <button @click="$emit('page', currentPage + 1)" :disabled="currentPage == totalPage">next</button>
  </div>
</template>

<script setup>
const props = defineProps(['totalPage', 'currentPage'])

</script>

<style lang="scss" scoped>

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

button {
  padding: 5px 15px;
  margin: 30px 0;
}

</style>