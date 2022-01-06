<script setup lang="ts">
import VHeader from '@/components/header/Header.vue'
import VFooter from '@/components/footer/Footer.vue'
</script>

<template>
  <n-message-provider>
    <v-header></v-header>
    <div class="main">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </n-message-provider>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 60px;
  min-height: calc(100vh - 196px);
  width: 1200px;
  margin: 0 auto;
}
</style>
