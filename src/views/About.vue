<script setup>
import {ref} from 'vue';
import Header from '../components/Header.vue'
import HomeAbout from '../components/HomeAbout.vue';
import Education from '../components/Education.vue';
import Banners from '../components/Banners.vue';
import Footer from '../components/Footer.vue';
const title = ref('About | Mehedi Hasan');


</script>

<template>
    
    <title>{{ title }}</title>
    
    <Header class="shadows" />

    <Banners class="about" banners="About"></Banners>

    <HomeAbout>
        <template v-slot:header>
        <div class="profile">
            <img class="img-fluid" src="/img/Mehedi-Hasan.jpg" alt="Mehedi Hasan, Frentend developer" loading="lazy">
            <p><i class="bi bi-envelope-fill"></i> Email: mehedihtml@gmail.com</p>
            <p><i class="bi bi-skype"></i> Skype: mehedihasancmt2</p>
        </div>
        </template>

        <template v-slot:button>
            <a class="cus-btn" href="/pdf/Mehedi_Hsana_Resume.pdf" target="_blank">See Resume</a>
        </template>
        
    </HomeAbout>

    <Education/>


    <Footer />

</template>

<style>
.profile {
    margin-bottom: 15px;
}
.profile img {
    height: 160px;
    margin-bottom: 15px;
}
.profile p{
    font-size: 16px;
    font-weight: 500;
}
@media (max-width: 767.98px) {
    .profile img {
    height: 100%;
}

}

</style>