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
    background-color: #161616;
    height: 300px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
    z-index: 2;
    margin-top: 76px;
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
    background: rgba(0, 0, 0, 0.7);
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
    -webkit-filter: contrast(1);
            filter: contrast(1);
}

.about {
    background-image: url('/img/about-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.portfolio {
    background-image: url('/img/portfolio-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.service {
    background-image: url('/img/service-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.blog {
    background-image: url('/img/blog-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.blogdetails {
    background-image: url('/img/blog-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.contact {
    background-image: url('/img/contact-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.notfound {
    background-image: url('/img/not-fonud.jpg');
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
    margin-top: 56px;
}

.notfound {
    background-position-y: 0;
}


}

@media (max-width: 767.98px) {
.banners-area {
    height: 160px;
    margin-top: 52px;
}

.banners h1 {
    font-size: 24px;
}


}


</style>