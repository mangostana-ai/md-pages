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
        { name: 'description', content: '一个简单易用的微信公众号Markdown浏览器插件' },
        { name: 'keywords', content: '微信公众号,Markdown,编辑器,浏览器插件,mpmd,公众号图床,哪里不会点哪里'}
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
      ]
    }
  },
  nitro: {
    compressPublicAssets: true,
    // prerender: {
    //  crawlLinks: true,
    // },
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