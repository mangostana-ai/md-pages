<template>
  <div class="min-h-screen bg-background dark:bg-background-dark">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-text dark:text-text-dark">
          微信公众号图文创作利器
        </h1>
        <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
          一站式解决微信公众号图文排版难题
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">轻松排版</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            提供丰富的排版样式，轻松打造精美图文
          </p>
        </div>

        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">实时预览</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            所见即所得，实时查看最终效果
          </p>
        </div>

        <div class="bg-background dark:bg-[#242424] p-6 rounded-lg shadow">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h3 class="mt-4 text-xl font-bold text-text dark:text-text-dark">一键复制</h3>
          <p class="mt-2 text-text/80 dark:text-text-dark/80">
            快速生成代码，一键复制到微信公众号
          </p>
        </div>
      </div>

      <div class="mt-12 text-center space-y-6">
        <div class="flex justify-center space-x-8">
          <a href="https://chrome.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="i-mdi:google-chrome" class="h-12 w-12 text-blue-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://microsoft.com/edge" target="_blank" rel="noopener noreferrer">
            <UIcon name="i-mdi:microsoft-edge" class="h-12 w-12 text-blue-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://firefox.com" target="_blank" rel="noopener noreferrer">
            <UIcon name="i-mdi:firefox" class="h-12 w-12 text-blue-600 hover:text-blue-500 transition-colors" />
          </a>
        </div>
        <a 
          href="https://install.com" 
          class="btn-primary inline-block"
          target="_blank" 
          rel="noopener noreferrer"
        >
          立即安装
        </a>
      </div>

      <!-- 新增功能介绍 -->
      <div class="mt-20 space-y-20">
        <!-- Markdown支持 -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img src="/_nuxt/images/markdown.png" alt="Markdown支持" class="rounded-lg shadow-lg">
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">Markdown支持</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              原生支持Markdown语法，让写作更高效。支持代码高亮、表格、数学公式等丰富格式。
            </p>
          </div>
        </div>

        <!-- 浏览器插件 -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8">
          <div class="w-full md:w-1/2">
            <img src="/_nuxt/images/extension.png" alt="浏览器插件" class="rounded-lg shadow-lg">
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">浏览器插件</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              提供Chrome浏览器插件，随时随地保存网页内容，快速生成微信公众号图文。
            </p>
          </div>
        </div>

        <!-- 微信公众号图床 -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img src="/_nuxt/images/image-host.png" alt="微信公众号图床" class="rounded-lg shadow-lg">
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-text dark:text-text-dark">微信公众号图床</h2>
            <p class="mt-4 text-lg text-text/80 dark:text-text-dark/80">
              内置稳定图床服务，自动压缩优化图片，确保在微信公众号中完美显示。
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-8 text-center text-sm text-text/60 dark:text-text-dark/60">
      <p>© {{ currentYear }} 微信公众号图文创作工具. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200;
}
</style>

<script setup lang="ts">
useHead({
  title: '首页'
})

const currentYear = new Date().getFullYear()
</script>
