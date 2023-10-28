<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
const title = ref('Blog Details | Mehedi Hasan');
import Banners from '../components/Banners.vue';
import {useRoute } from 'vue-router'
import Blogs from '../store/store.json';
const route = useRoute()

const id = route.params.id;

// const post = reactive({})

// onBeforeMount(()=>{

//     fetch(`https://dummyjson.com/posts/${id}`)
//     .then(res => res.json())
//     .then(data => {
//         post.id = data.id
//         post.title = data.title
//         post.body = data.body
//     })
// });



</script>

<template>
<title>{{ title }}</title>
<Banners class="blogdetails" banners="Blog deatails" />

<!-- blog-area -->
<section class="blog-area">
    <div class="containers">
        <div class="row">
            <div class="col-md-8" v-for="post in Blogs" :key="post.id">
                <div class="blog" v-if="id ==  post.id"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">

                    <img class="img-fluid" :src="'../'+post.img" :alt="post.title" loading="lazy">
                  
                    <h2>{{ post.title}}</h2>
                    <p>{{ post.fullContent }}</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- blog-area -->

</template>

<style scoped>

</style>