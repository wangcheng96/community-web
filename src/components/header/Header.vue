<template>
  <div class="common-header">
    <n-menu class="header_menu" :default-value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ref } from "@vue/reactivity";
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { BookOutline as BookIcon } from '@vicons/ionicons5'

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '且听风吟' }
      ),
    key: 'wind',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '风萧萧兮' }
      ),
    key: 'sea',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '想飞上天' }
      ),
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '舞，舞，舞' }
      ),
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon)
  }
]

let activeKey = ref('wind')
</script>

<style lang="scss" scoped>
.common-header {
  width: 100%;
  height: 42px;
  border-radius: 0;
  text-align: center;
  background-color: #ebebeb;
  background-color: #fff;
  .header_menu {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
