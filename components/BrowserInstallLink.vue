<template>
  <a 
    :href="installLink" 
    class="btn-primary inline-block bg-gradient-to-r from-[#4ade80] to-[#4ade80]"
    target="_blank" 
    rel="noopener noreferrer"
  >
    立即安装
    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
  </a>
</template>

<script setup lang="ts">
const { chromeUrl, edgeUrl, firefoxUrl } = useBrowserExtensions()

const installLink = computed(() => {
  const userAgent = navigator.userAgent.toLowerCase()
  
  if (userAgent.includes('edg')) {
    return edgeUrl
  }
  
  if (userAgent.includes('firefox')) {
    return firefoxUrl
  }
  
  return chromeUrl
})
</script>
