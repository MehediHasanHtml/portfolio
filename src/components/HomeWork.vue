<script setup>
import {ref} from 'vue'

const works = ref([
    {
        id: 1,
        img: '/img/info.png',
        link: 'http://mehedihtml.com/infoxen/index.html'
    },
    {
        id: 2,
        img: '/img/avedi.png',
        link: 'http://mehedihtml.com/avendi/index.html'
    },
    {
        id: 3,
        img: '/img/danwilliams.png',
        link: 'http://mehedihtml.com/danwilliams/index.html'
    },
    {
        id: 4,
        img: '/img/ladder.png',
        link: 'http://laddersaves.org/'
    },
    {
        id: 5,
        img: '/img/p.png',
        link: 'https://www.propelor.com/'
    },
    {
        id: 6,
        img: '/img/kl.png',
        link: 'https://www.kluitman.nl/'
    },

]);

</script>

<template>
    <!-- home-work -->
    <section class="home-work">
        <div class="containers">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="title">
                        <h2>Recent Works</h2>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4" v-for="work in works" :key="work.id">
                    <div class="work">
                        <a :href="work.link" target="_blank"><img class="img-fluid" :src="work.img" :alt="work.img" loading="lazy"></a>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <router-link to="/portfolio" class="cus-btn">See more</router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- home-work -->
</template>


<style scoped>
.home-work {
    padding: 80px 0;
}
.work {
    padding: 15px;
    margin-bottom: 35px;
    transition: all 0.3s ease;
    border-radius: 10px;
}
.work img {
    height: 230px;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
.work:hover {
    box-shadow: var(--bs-box-shadow)!important;
    transition: all 0.3s ease;
}

@media (max-width: 1440.98px) {
.work img {
    height: 180px;
}

}
@media (max-width: 767.98px) {
.work img {
    height: 100%;
}

}

</style>