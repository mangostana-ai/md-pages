<template>
  <div>
    <header class="bg-background dark:bg-background-dark shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img src="/images/logo.svg" class="w-6 h-6"/>
              <span class="text-xl font-bold text-text dark:text-text-dark">
                MPMD
              </span>
            </NuxtLink>
          </div>
          <nav class="flex items-center space-x-8">
            <NuxtLink 
              to="/tutorial" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text dark:text-text-dark hover:text-primary dark:hover:text-primary"
            >
              教程
            </NuxtLink>
            <NuxtLink 
              to="/privacy-policy" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text dark:text-text-dark hover:text-primary dark:hover:text-primary"
            >
              隐私政策
            </NuxtLink>
            
            <button
              @click="toggleColorMode"
              class="p-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary"
            >
              <svg
                v-if="colorMode.value === 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  }
})
</script>
