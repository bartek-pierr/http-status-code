export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss", '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
        },
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'HTTP GURU',
      meta: [
        { name: 'description', content: 'Strona o statusach :D'}
      ],
    }
  }
});
