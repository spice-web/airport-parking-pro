// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt/',
    head: {
      title: 'AIRPORT PARKING',
      link: [
        // favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // google fonts noto sans
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap',
          crossorigin: "",
        },
      ],
      htmlAttrs: {
        lang: 'ja',
      },
      // adobe font 
      script: [
        {
          hid: 'adobe-fonts-custom',
          innerHTML: `
            (function(d) {
              var config = {
                kitId: 'zid8hhs',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `,
          type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      __dangerouslyDisableSanitizersByTagID: {
        'adobe-fonts-custom': ['innerHTML']
      }
    }
  },
  css: ["@/assets/styles/main.scss"],
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
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
})
