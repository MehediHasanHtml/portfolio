<script setup>
import {ref} from 'vue'

const works = ref([
    {
        id: 1,
        img: '/img/digitalport.png',
        link: 'https://digital-port-two.vercel.app/'
    },
    {
        id: 2,
        img: '/img/housing100.png',
        link: 'https://housing100.vercel.app/'
    },
    {
        id: 3,
        img: '/img/cars.png',
        link: 'https://simpsonusedcars.vercel.app/'
    },
    {
        id: 4,
        img: '/img/mclgroupbd.png',
        link: 'https://mclgroupbd.com/'
    },
    {
        id: 5,
        img: '/img/info.png',
        link: 'http://mehedihtml.com/infoxen/'
    },
    {
        id: 6,
        img: '/img/avedi.png',
        link: 'http://mehedihtml.com/avendi/'
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
                    <div class="work"  data-aos="fade-up" data-aos-delay="100">
                        <a :href="work.link" target="_blank"><img class="img-fluid" :src="work.img" :alt="work.img" loading="lazy"></a>
                    </div>
                </div>
                <div class="col-12 text-center"  data-aos="fade-up" data-aos-delay="150">
                    <router-link to="/projects" class="cus-btn">See more</router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- home-work -->
</template>


<style scoped>

.home-work {
    padding: 80px 0;
    background: #282828;
}
.work {
    padding: 15px;
    background: #303132;
    margin-bottom: 35px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    border-radius: 10px;
}
.work img {
    height: 230px;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center;
}
.work:hover {
    -webkit-box-shadow: var(--bs-box-shadow)!important;
            box-shadow: var(--bs-box-shadow)!important;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
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