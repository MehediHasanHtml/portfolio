<script setup>
import {ref} from 'vue'

const works = ref([
    {
        id: 1,
        img: '/img/info.png',
        link: 'http://mehedihtml.com/infoxen/index.html',
        category: 'psdhtml'
    },
    {
        id: 2,
        img: '/img/avedi.png',
        link: 'http://mehedihtml.com/avendi/index.html',
        category: 'psdhtml'
    },
    {
        id: 3,
        img: '/img/danwilliams.png',
        link: 'http://mehedihtml.com/danwilliams/index.html',
        category: 'psdhtml'
    },
    {
        id: 4,
        img: '/img/ladder.png',
        link: 'http://laddersaves.org/',
        category: 'psdhtml'
    },
    {
        id: 5,
        img: '/img/p.png',
        link: 'https://www.propelor.com/',
        category: 'psdhtml'
    },
    {
        id: 6,
        img: '/img/kl.png',
        link: 'https://www.kluitman.nl/',
        category: 'psdhtml'
    },
    {
        id: 7,
        img: '/img/zeew.png',
        link: 'https://experthtml.github.io/zeew.github.io/',
        category: 'psdhtml'
    },
    {
        id: 8,
        img: '/img/ga.png',
        link: 'https://experthtml.github.io/gallery.github.io/',
        category: 'psdhtml'
    },
    {
        id: 9,
        img: '/img/homeal.png',
        link: 'https://experthtml.github.io/perfect.github.io/',
        category: 'psdhtml'
    },
    {
        id: 10,
        img: '/img/saderv.png',
        link: 'https://experthtml.github.io/saderv.github.io/',
        category: 'psdhtml'
    },
    {
        id: 11,
        img: '/img/future.png',
        link: 'https://experthtml.github.io/future.github.io/',
        category: 'psdhtml'
    },
    {
        id: 12,
        img: '/img/lotus.png',
        link: 'https://experthtml.github.io/lotus.github.io/',
        category: 'psdhtml'
    },
    {
        id: 13,
        img: '/img/personal.png',
        link: 'https://mehedihtml.com/',
        category: 'vuejs'
    },

]);

</script>

<template>
    <!-- home-work -->
    <section class="home-work">
        <div class="containers">
            <div class="row">
                <div class="col-12">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="PSD-tab" data-bs-toggle="tab" data-bs-target="#PSD-tab-pane" type="button" role="tab" aria-controls="PSD-tab-pane" aria-selected="true">PSD to HTML</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="Vue-tab" data-bs-toggle="tab" data-bs-target="#Vue-tab-pane" type="button" role="tab" aria-controls="Vue-tab-pane" aria-selected="false">Vue JS</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="PSD-tab-pane" role="tabpanel" aria-labelledby="PSD-tab" tabindex="0">
                            <div class="row"> 
                                <div class="col-md-6 col-lg-4" v-for="work in works" :key="work.id">
                                    <div class="work" v-if="work.category == 'psdhtml'">
                                        <a :href="work.link" target="_blank"><img class="img-fluid" :src="work.img" :alt="work.img" loading="lazy"></a>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div class="tab-pane fade" id="Vue-tab-pane" role="tabpanel" aria-labelledby="Vue-tab" tabindex="0">
                            <div class="row"> 
                                <div class="col-md-6 col-lg-4" v-for="work in works" :key="work.id">
                                    <div class="work" v-if="work.category == 'vuejs'">
                                        <a :href="work.link" target="_blank"><img class="img-fluid" :src="work.img" :alt="work.img" loading="lazy"></a>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
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

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #293042;
    background-color: #68d388;
    border-color: none;
}

.nav-link {
    display: block;
    font-size:18px;
    font-weight: 500;
    color: #293042;
    text-decoration: none;
    background: 0 0;
    border: 0;
}
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    isolation: isolate;
    border-color: transparent;
}

.nav-link:focus, .nav-link:hover {
    color: #293042;
}

.nav-tabs {
    border-bottom: 1px solid #68d388;
}
.tab-pane{
    padding: 15px 0;
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