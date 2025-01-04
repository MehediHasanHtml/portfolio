<script setup>
import {ref, onBeforeMount, reactive} from 'vue'
const title = ref('Blog | Mehedi Hasan');
import Banners from '../components/Banners.vue';
import Blogs from '../store/store.json';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


// const posts = ref([])

// onBeforeMount(() => {
//     fetch('https://dummyjson.com/posts?limit=20')
//     .then(res => res.json())
//     .then(data => {
//         posts.value = data.posts
//     })

// });


</script>

<template>

<Header class="shadows" />
<title>{{ title }}</title>
<Banners class="blog" banners="Blog" />

<!-- blog-area -->
<section class="blog-area">
    <div class="containers">
        <div class="row">
            <div class="col-md-6 col-lg-4" v-for="post in Blogs" :key="post.id">
                <div class="blog"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <router-link :to="{name: 'post', params: {id: post.id}}">
                        <img class="img-fluid" :src="post.img" :alt="post.title" loading="lazy">
                    </router-link>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.shotCntent }}</p>
                    <router-link class="cus-btn" :to="{name: 'post', params: {id: post.id}}">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- blog-area -->

<Footer/>
</template>

<style>
.blog-area {
    padding: 80px 0;
}

.blog{
    margin-bottom: 30px;
}
.blog img {
    width: 100%;
    margin-bottom: 25px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.blog h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 15px;
}

.blog p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
}


@media (max-width: 1199.98px) {
.blog h2 {
    font-size: 18px;;
}
.blog p {
    font-size: 14px;
}

}
@media (max-width: 767.98px) {
.blog h2 {
    font-size: 16px;;
}
}

</style>