<script setup>
import {ref} from 'vue'
import Banners from '../components/Banners.vue';
import ContactVue from '../components/Contact.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
<Header class="shadows" />


<Banners class="contact" banners="Contact"/>
<ContactVue>
<template #contactinfo></template>
</ContactVue>


<Footer/>
</template>

<style scoped>
.info {
    margin-bottom: 25px;
}
.info p{
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
}

</style>