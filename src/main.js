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



AOS.init({
    ease: 'slide',
    once: true
});


const app = createApp(App)
app.use(VueApexCharts)
app.use(router)
app.mount('#app')