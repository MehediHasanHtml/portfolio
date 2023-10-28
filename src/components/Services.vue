<script setup>
import {ref} from 'vue'
const services = ref( [
    {
        id: 1,
        servicesName: "convert psd to html responsive bootstrap 5",
        img: "/img/psd-to-bootstrap.jpg",
        link: "https://www.fiverr.com/share/b0rXKP"
    },
    {
        id: 2,
        servicesName: "convert psd, figma, xd, sketch to html responsive",
        img: "/img/psd-to-html-xd-to-html-figma-to-html-zeplin-to-html-sketch-to-html-responsive.jpg",
        link: "https://www.fiverr.com/share/XXzwxD"
    },
    {
        id:3,
        servicesName: "design psd to responsive html website using bootstrap",
        img: "/img/psd-to-responsive-website-usign-bootstrap.jpg",
        link: "https://www.fiverr.com/share/5bZqo4"
    },
    {
        id:4,
        servicesName: "do html responsive mailchimp email template",
        img: "/img/do-html-responsive-mailchimp-email-template.png",
        link: "https://www.fiverr.com/share/mz9Zmb"
    },
    {
        id:5,
        servicesName: "do html css bug fixing, responsive issue",
        img: "/img/html-css-bug fixing-responsive-issue.png",
        link: "https://www.fiverr.com/share/0EqVkr"
    },
    {
        id:6,
        servicesName: "create responsive landing page design",
        img: "/img/responsive-landing-page-design.jpg",
        link: "https://www.fiverr.com/share/XXzwgV"
    },
]);



</script>


<template>
    <!-- services-area -->
    <section class="services-area">
        <div class="containers">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="title">
                        <h2>My Services</h2>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4" v-for="service in services" :key="service.id">
                    <div class="services shadow"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <a :href="service.link" target="_blank"><img class="img-fluid" :src="service.img" :alt="service.servicesName" loading="lazy"></a>
                        <h2><a :href="service.link">{{ service.servicesName }}</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- services-area -->
</template>

<style scoped>

.services-area {
    padding: 80px 0;
    background: #f4f4f4;
}

.services {
    margin-bottom: 45px;
    background: #fff;
    border-radius: 10px;
}
.services img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.services h2 {
    font-size: 20px;
    padding: 10px 25px;
    line-height: 1.5;
    font-weight: 500;
    color: #293042;
}

.services h2 a{
    display: block;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: #293042;
    min-height: 60px;
}

@media (max-width: 1440.98px) {
.services img {
    height: 230px;
}
}

@media (max-width: 1199.98px) {
.services img {
    height: 200px;
}
.services h2 {
    font-size: 16px;
    padding: 10px 15px;
}

.services h2 a{
    font-size: 16px;
    min-height: 60px;
}

}

@media (max-width: 767.98px){
.services img {
    height: 100%;
}

}




</style>