// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,

  site: {
    url: 'https://minnesotahandy.netlify.app' // or your future domain
  },

  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Minnesota Handy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Trusted Minnesota home service pros. From outlet installs to cozy lighting — we’re your go-to neighbors.'
        },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:title', content: 'Minnesota Handy — Local Home Services' },
        { property: 'og:description', content: 'Local family-owned services with a smile. Reliable, friendly, and always nearby.' },
        { property: 'og:image', content: 'https://minnesotahandy.netlify.app/social-preview.png' },
        { property: 'og:url', content: 'https://minnesotahandy.netlify.app' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Minnesota Handy — Local Home Services' },
        { name: 'twitter:description', content: 'From ceiling fans to cozy lighting — neighborly service in every visit.' },
        { name: 'twitter:image', content: 'https://minnesotahandy.netlify.app/social-preview.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://minnesotahandy.netlify.app' }
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'minnesotahandy.netlify.app'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },

  css: ['@/assets/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  compatibilityDate: '2025-04-10'
});
