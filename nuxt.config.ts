// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css:[
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  experimental:{
    inlineRouteRules:true,
    defaults:{
      nuxtLink:{
        prefetch:false
      }
    }
  },
  modules: ['@nuxtjs/sitemap'],
  site:{
    url:'http://localhost:3000/',
    name:'My app'
  },
  sitemap:{
    sources:['/api/__sitemap__/urls']
  }
})