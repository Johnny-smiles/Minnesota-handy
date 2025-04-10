// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,

  // 👇 Add this block to enable static output
  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      title: 'Minnesota Handy',
      meta: [
        {
          name: 'description',
          content: 'Local Minnesota family-owned home services — repairs, installs, and neighborly help you can count on.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'yourdomain.com'
        }
      ]
    },
  },

  css: ['@/assets/main.css'],

  modules: ['@nuxt/image'],

  compatibilityDate: '2025-04-10'
});
