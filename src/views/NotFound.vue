<script setup>
import {ref} from 'vue'
import Banners from '../components/Banners.vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
const title = ref('404 page not found | Mehedi Hasan');


</script>

<template>
<Header class="shadows" />
<title>{{ title }}</title>
<Banners class="notfound" banners="Ooops!"/>
<!-- notfound -->
<section class="notfound-area">
    <div class="containers">
        <div class="roq">
            <div class="col-12 text-center"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div class="title">
                    <h2>404 Page Not Found! 🤪</h2>
                    <router-link class="cus-btn" to="/"><i class="bi bi-house-door-fill"></i> Go back to home</router-link>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- notfound -->

 <Footer/>
</template>

<style scoped>
.notfound-area {
    padding: 80px 0;
}

@media (max-width: 767.98px) {
.title h2 {
    text-align: center;
    font-size: 22px;
}

}

</style>