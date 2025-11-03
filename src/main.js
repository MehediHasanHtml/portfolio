import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';

import VueApexCharts from "vue3-apexcharts";

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'

import './style.css'


import { createHead, useHead } from '@vueuse/head'
const head = createHead()

AOS.init({
    ease: 'slide',
    once: true
});


router.afterEach((to) => {
  const title = to.meta.title || 'Mehedi Hasan | Frontend developer in Bangladesh'
  const description = to.meta.description || "Hello, I'm Mehedi Hasan. Are you looking for a frontend developer to convert Figma to Html, Admin Dashboard and pixel-perfect using Vue/Nuxt, Tailwind CSS?"
  const canonicalUrl = `https://mehedihtml.com${to.fullPath}`

  useHead({
    title,
    meta: [
      { name: 'description', content: description }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  })
})

const app = createApp(App)
app.use(VueApexCharts)
app.use(router)
app.use(head)
app.mount('#app')