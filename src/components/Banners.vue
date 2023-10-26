<script setup>
defineProps({
    banners: String,
    bgClass: String
});
</script>

<template>
<!-- banners-area -->
<section class="banners-area" :class="bgClass">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-0">
                <div class="banners">
                    <h1>{{ banners }}</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- banners-area -->
</template>

<style scoped>

.banners-area {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}
.banners-area::after{
    display: block;
    content: '';
    clear: both;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(41, 48, 66, 0.8);
    z-index: -1;
}
.banners {
    padding-left: 5%;
}
.banners h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
    color: #fff;
    filter: contrast(1);
}

.about {
    background: url('/img/about-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.portfolio {
    background: url('/img/portfolio-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.service {
    background: url('/img/service-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.blog {
    background: url('/img/blog-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.blogdetails {
    background: url('/img/blog-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.contact {
    background: url('/img/contact-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.notfound {
    background: url('/img/not-fonud.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-position-y: -100px;
}



@media (min-width: 1920.98px) {
.banners {
    padding-left: 10%;
}

}
@media (max-width: 1199.98px) {
.banners-area {
    height: 200px;
}

.notfound {
    background-position-y: 0;
}


}

@media (max-width: 767.98px) {
.banners-area {
    height: 160px;
}

.banners h1 {
    font-size: 24px;
}


}


</style>