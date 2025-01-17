import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - MPMD',
      meta: [
        { name: 'description', content: '一个简单易用的Markdown页面生成工具' }
      ]
    }
  },

  tailwindcss: {
    config: {
      darkMode: 'class',
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#07c160'
          }
        }
      }
    }
  },

  compatibilityDate: '2025-01-17'
})