<script setup lang="ts">
import VHeader from '@/components/header/Header.vue'
import VFooter from '@/components/footer/Footer.vue'
</script>

<template>
  <n-message-provider>
    <n-affix :top="0" style="width: 100vw;z-index: 999;">
      <v-header></v-header>
    </n-affix>
    <div class="main">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </n-message-provider>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 230px);
  width: 1200px;
  margin: 0 auto;
  margin-top: 42px;
}
</style>
