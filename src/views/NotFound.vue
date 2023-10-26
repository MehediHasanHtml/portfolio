<script setup>
import {ref, onMounted} from 'vue'
import Banners from '../components/Banners.vue'
const title = ref('404 page not found | Mehedi Hasan');

onMounted(() => {
      window.scrollTo(0, 0);
});


</script>

<template>
<title>{{ title }}</title>
<Banners class="notfound" banners="Ooops!"/>
<!-- notfound -->
<section class="notfound-area">
    <div class="containers">
        <div class="roq">
            <div class="col-12 text-center"  data-aos="fade-up" data-aos-delay="100">
                <div class="title">
                    <h2>404 Page Not Found! 🤪</h2>
                    <router-link class="cus-btn" to="/"><i class="bi bi-house-door-fill"></i> Go back to home</router-link>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- notfound -->
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