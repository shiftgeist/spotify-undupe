import { defineNuxtConfig } from 'nuxt3'
import pkg from './package.json'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: `${pkg.name}@${pkg.version}`,
  },
  css: ['@/assets/style/main.css'],
  buildModules: ['@vueuse/nuxt'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  typescript: {
    shim: false,
  },
})
