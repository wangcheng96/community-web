<template>
  <div class="home-container">
    <div>关于</div>
    <n-button type="primary">按钮</n-button>
    <div>hello world!{{value}}</div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from "@vue/reactivity";
const value = ref(111);


</script>

<style lang="scss" scoped>
.home-container {
  text-align: center;
}
</style>
