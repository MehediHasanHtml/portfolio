<script setup>
import {ref} from 'vue'
import Banners from '../components/Banners.vue';
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const title = ref('Services | Mehedi Hasan');


</script>

<template>
<Header class="shadows" />
<title>{{ title }}</title>
<Banners class="service" banners="Services"/>
<Services/>
<Testimonials/>
<Footer/>
</template>

<style scoped>

</style>