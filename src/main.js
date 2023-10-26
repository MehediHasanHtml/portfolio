import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'

import './style.css'


createApp(App).use(router).mount('#app')