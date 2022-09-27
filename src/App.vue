<script setup lang="ts">
  import { ref } from '@vue/reactivity';
  import { onMounted } from '@vue/runtime-core';
  import { GlobalThemeOverrides, NConfigProvider, NMessageProvider, zhCN, dateZhCN, NDialogProvider, NNotificationProvider } from 'naive-ui'
  import MessageContent from './components/MessageContent.vue';
  import { version, proxy } from './config'
  const themeOverrides = ref<GlobalThemeOverrides>({
    common: {
      primaryColor: '#ff4500',
      hoverColor: '#ff4500',
      primaryColorHover: '#ff4500',
      heightMedium: '42px',
    },
    Layout: {
      siderColor: '#fafafa'
    },
    Breadcrumb: {
      fontSize: '16px'
    },
    Dropdown: {
      optionTextColorHover: '#fff',
    },
    InternalSelectMenu: {
      optionTextColorActive: '#fff',
    },
    Upload: {
      itemColorHover: '#fafafaff',
      itemTextColorSuccess: '#18a058ff',
    }
  })
  onMounted(() => {
    const isSettingProxy = localStorage.getItem('isSettingProxy')
    if(!isSettingProxy) {
      localStorage.setItem('proxy', JSON.stringify(proxy))
    }
  })
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <MessageContent></MessageContent>
          <router-view></router-view>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
</style>
