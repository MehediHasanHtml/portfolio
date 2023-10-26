<script setup>
import {ref, onMounted} from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import HomeAbout from '../components/HomeAbout.vue';
import Services from '../components/Services.vue';
import HomeWork from '../components/HomeWork.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';
import FAQs from '../components/FAQ.vue';

const title = ref('Home | Mehedi Hasan');

onMounted(() => {
      window.scrollTo(0, 0);
});

</script>

<template>
    <title>{{ title }}</title>
    <HeroSlider/>
    <HomeAbout>
        <template v-slot:button>
            <router-link  class="cus-btn" to="/about">Read more</router-link>
        </template>
    </HomeAbout>
    <Services/>
    <HomeWork/>
    <Testimonials/>
    <FAQs/>
    <Contact/>
</template>

<style scoped>

</style>