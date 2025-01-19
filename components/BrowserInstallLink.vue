<template>
  <a 
    :href="installLink" 
    class="btn-primary inline-block"
    target="_blank" 
    rel="noopener noreferrer"
  >
    立即安装
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
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
