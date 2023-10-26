<script setup>
import {ref, onMounted} from 'vue'
import Banners from '../components/Banners.vue';
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue';
const title = ref('Services | Mehedi Hasan');
onMounted(() => {
      window.scrollTo(0, 0);
});


</script>

<template>
<title>{{ title }}</title>
<Banners class="service" banners="Services"/>
<Services/>
<Testimonials/>

</template>

<style scoped>

</style>