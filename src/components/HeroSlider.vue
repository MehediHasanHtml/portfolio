<script setup>
import {reactive, ref} from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const title = 'Frontend Developer'
const subtitle = "Hello, If you're looking for a frontend developer to convert PSD to HTML, Figma to HTML, Figma to Vue js and landing page design With SEO friendly and pixel-perfect using Vue js, Bootstrap then this is exactly what I specialize in. Talk about a perfect match. 🙋"

const sliders = ref([
    {
        id: 1,
        img: '/img/slider1.jpg',
        alt: 'vue js developer, mehedi hasan'
    },
    {
        id: 2,
        img: '/img/slider2.jpg',
        alt: 'responsive designer, mehedi hasan'
    },
    {
        id: 3,
        img: '/img/slider3.jpg',
        alt: 'frontend developer, mehedi hasan'
    },
]);


</script>

<template>

<!-- hero-slider -->
<section class="hero-slider">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-0">
                <div class="sliders">
                    <Carousel  :autoplay="5000" :wrap-around="true" :transition="500">
                        <Slide v-for="slider in sliders" :key="slider.id">
                            <div class="carousel__item"><img class="img-fluid" :src="slider.img" :alt="slider.alt" loading="lazy"></div>
                        </Slide>
                    </Carousel>
                    <div class="col-lg-6">
                        <div class="hero-content" >
                            <h1  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">{{ title }}</h1>
                            <p  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">{{ subtitle }}</p>
                            <img class="img-fluid my-3" src="/img/techlogy.png" alt="techlogy" loading="lazy"  data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                            <div class="btns"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                <router-link to="/portfolio">Portfolio</router-link>
                                <router-link to="/services"> Services</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- hero-slider -->

</template>

<style>
.hero-slider {
    position: relative;
}

.hero-slider::after {
    display: block;
    content: '';
    clear: both;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(41, 48, 66, 0.8);
}
.carousel__item img {
    height: calc(100vh - 82px);
    width: 100%;
    object-fit: cover;
    object-position: top;
}
.carousel__slide {
    display: block;
}
.sliders {
    position: relative;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 2;
    width: 50%;
    transform: translate(0, -50%);
}

.hero-content h1 {
    font-size: 60px;
    color: #fff;
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 15px;
    filter: contrast(1);
}

.hero-content p {
    font-size: 18px;
    color: #fff;
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: 15px;
    filter: contrast(1);
}

.btns {
    display: flex;
    align-items: center;
    margin-top: 25px;
}

.btns a {
    display: inline-block;
    padding: 12px 35px;
    font-size: 18px;
    color: #293042;
    line-height: 1.5;
    font-weight: 500;
    background: #68d388;
    margin-right: 15px;
    border-radius: 30px;
    transition: all 0.3s ease;
    filter: contrast(1);
}
.btns a:hover {
    transition: all 0.3s ease;
    background: #68d388 !important;
}
.btns a:last-child{
    background: #fff;
}




@media (min-width: 1920.98px) {
.hero-content {
    left: 10%;
}

}


@media (max-width: 1199.98px) {

.hero-content h1 {
    font-size: 50px;
}




}


@media (max-width: 991.98px) {
.hero-content h1 {
    font-size: 40px;
}
.hero-content p {
    font-size: 16px;
}
.hero-content {
    width: 90%;
}

.carousel__item img {
    height: 600px;
}

.hero-content img {
    height: 50px;
}

}


@media (max-width: 767.98px) {
.hero-content h1 {
    font-size: 30px;
}

.hero-content  {
    text-align: center;
}
.hero-content {
    transform: inherit;
    top: 60px;
    width: 90%;
}
.carousel__item img {
    height: 600px;
}

.btns {
    display: block;
    align-items: center;
    margin-top: 25px;
}
.btns a {
    display: block;
    text-align: center;
    padding: 12px 15px;
    font-size: 16px;
    margin-right: 0;
    margin-bottom: 15px;
}
.hero-slider::after {
    background: rgba(41, 48, 66, 0.9);
}

}

@media (max-width: 575.98px) {
.carousel__item img {
    height: 580px;
}
.hero-content {
    transform: inherit;
    top: 40px;
}

}



</style>