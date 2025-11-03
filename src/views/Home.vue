<script setup>
import {ref} from 'vue'
import Header from '../components/Header.vue';
import HeroSlider from '../components/HeroSlider.vue'
import HomeAbout from '../components/HomeAbout.vue';
import Services from '../components/Services.vue';
import HomeWork from '../components/HomeWork.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';
import FAQs from '../components/FAQ.vue';
import Footer from '../components/Footer.vue';


</script>


<template>

<Header />

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
    <Footer/>

</template>

<style scoped>

</style>