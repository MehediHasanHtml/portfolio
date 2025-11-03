<script setup>
import {ref} from 'vue'
import Banners from '../components/Banners.vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


</script>

<template>
<Header class="shadows" />
<Banners class="notfound" banners="Ooops!"/>
<!-- notfound -->
<section class="notfound-area">
    <div class="containers">
        <div class="roq">
            <div class="col-12 text-center"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div class="title">
                    <h2>404 Page Not Found! 👨‍💻</h2>
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
    min-height: 60vh;
    background: #161616;
    display: flex;
    align-items: center;
    
    position: relative;
    z-index: 2;
}

.notfound-area::after {
    display: block;
    content: '';
    clear: both;
    position: absolute;
    top: 0;
    right: 0;
    background-image: radial-gradient(#434343  1px, transparent 0);
    background-size: 16px 16px;
    background-position: -19px -19px;
    -webkit-mask-image: linear-gradient(237deg, black 0, transparent 100%);
    mask-image: linear-gradient(237deg, black 0, transparent 100%);
    position: absolute;
    height: calc(100% - 16px);
    width: 100%;
    z-index: -1;
}


@media (max-width: 767.98px) {
.title h2 {
    text-align: center;
    font-size: 22px;
}

}

</style>