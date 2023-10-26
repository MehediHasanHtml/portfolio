<script setup>
import {ref} from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const reviews =ref([
    {
        id: 1,
        name: 'jineshjpatel',
        img: '/img/Jinesh_Patel.jpg',
        text: "We have used him a couple of time now and he continues to deliver timely and perfectly. Will use again!"
    },
    {
        id: 2,
        name: 'chitooo',
        img: '/img/chitooo.jpg',
        text: "Good work. Thank you!"
    },
    {
        id: 3,
        name: 'estows',
        img: '/img/missing.jpg',
        text: "Seller it seems very skilful and did very good job for my project."
    },
    {
        id: 4,
        name: 'samanthaxstone',
        img: '/img/a.jpg',
        text: "Thank you for the PSD to HTML."
    },
    {
        id: 5,
        name: 'piotrnikonowicz',
        img: '/img/missing.jpg',
        text: "Great work. Thanks."
    },
    {
        id: 6,
        name: 'tmillergra',
        img: '/img/missing.jpg',
        text: "Outstanding service. The professional understood my requirements and quickly delivered exactly what I requested. No modifications or updates needed. The first version was perfect."
    },
    {
        id: 7,
        name: 'madxtreme',
        img: '/img/missing.jpg',
        text: "Good hands on experience with html, css and js"
    },

    {
        id: 8,
        name: 'star202',
        img: '/img/missing.jpg',
        text: "Everything was professional with the seller I would love working with the seller again"
    },
    {
        id: 9,
        name: 'nataliamorel6',
        img: '/img/nataliamorel6.jpg',
        text: "Fast response. Great communication. It was great work and very fast. I would go to him if I have a quick design and if I end up have a bigger need in designing a website I will also come to him. Thank you so much this was great and faster than expected."
    },

]);


const settings = ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    breakpoints: {
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
        Navigation: "false"
      },
    }
  });

</script>


<template>
    <!-- Testimonials -->
    <section class="testimonials">
        <div class="containers">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="title">
                        <h2>Clients Reviews</h2>
                    </div>
                </div>
                <div class="col-md-12 col-lg-8 offset-lg-2">
                    <div class="testmoni">
                        <Carousel  :autoplay="5000" :wrap-around="true" :transition="500" :breakpoints="settings">
                            <Slide v-for="review in reviews" :key="review.id">
                                <div class="carousel__item">
                                    <img class="img-fluid" :src="review.img" :alt="review.name" loading="lazy">
                                    <h4>{{ review.name }}</h4>
                                    <p>{{ review.text }}</p>
                                </div>
                            </Slide>
                            <template #addons>
                                <Navigation />
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Testimonials -->
</template>


<style>

.testimonials {
    padding: 80px 0;
}
.testmoni img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin-bottom: 5px;
}
.testmoni h4 {
    font-size: 18px;
    color: #293042;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 15px;
}

.testmoni p {
    color: #36344D;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
    padding: 10px 25px;
}
.carousel__prev {
    height: 40px;
    width: 40px;
    background: #293042;
    color: #fff !important;
    border-radius: 50%;
}
.carousel__next {
    height: 40px;
    width: 40px;
    background: #293042;
    color: #fff !important;
    border-radius: 50%;
}


@media (max-width: 767.98px) {

.carousel__prev {
    display: none;
}
.carousel__next {
    display: none;
}


}


</style>