<script setup>
import {ref, onMounted} from 'vue'

import Abouts from '../components/HomeAbout.vue';
import Education from '../components/Education.vue';
import Banners from '../components/Banners.vue';
const title = ref('About | Mehedi Hasan');

onMounted(() => {
      window.scrollTo(0, 0);
});

</script>

<template>
    <title>{{ title }}</title>
    <Banners class="about" banners="About"></Banners>

    <Abouts>
        <template v-slot:header>
        <div class="profile">
            <img class="img-fluid" src="/img/Mehedi-Hasan.jpg" alt="Mehedi Hasan, Frentend developer" loading="lazy">
            <p><i class="bi bi-envelope-fill"></i> Email: mehedihtml@gmail.com</p>
            <p><i class="bi bi-skype"></i> Skype: mehedihasancmt2</p>
        </div>
        </template>

        <template v-slot:button>
            <a class="cus-btn" href="../img/Mehedi_Hasan_CV.pdf" target="_blank">See Resume</a>
        </template>
        
    </Abouts>

    <Education/>

</template>

<style scoped>
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