<template>
  <h1>This is TO-DO application</h1>
  <p id="test">{{ test }}</p>
</template>  
<script setup>
import { sum } from '@/utils/test';
const test = sum(1, 2);
</script>
<style scoped></style>