<script setup>
import {reactive, ref} from 'vue'






</script>

<template>

<!-- hero-slider -->
<section class="hero-slider">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-0">
                <div class="sliders">
                    
                    <div class="videos">
                        <video src="/img/mehedi.mp4" type="video/webm" autoplay muted loop playsinline id="background"></video>
                    </div>
                    <div class="col-lg-8">
                        <div class="hero-content" >
                            <div class="headdign" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <h4>Hello! I’m</h4>
                                <h1>Mehedi Hasan</h1>
                                <h2>Frontend Developer</h2>
                                <p>If you're looking for a frontend developer to convert <b>PSD to HTML,</b> Figma to HTML, Figma to Vue js, <b> Admin Dashboard </b>  and landing page design With SEO friendly and pixel-perfect using <b>Vue js</b>, Nuxt, Nuxt UI, <b> Tailwind CSS / Bootstrap 5</b> then this is exactly what I specialize in. Talk about a perfect match. 👇</p>
                                <img class="img-fluid my-3" src="/img/technology.png" alt="technology" loading="lazy" >
                                <div class="btns">
                                    <router-link to="/portfolio">Portfolio</router-link>
                                    <a class="cus-btn" href="/pdf/Mehedi_Hsana_Resume.pdf" target="_blank">See Resume</a>
                                </div>
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
    background: rgba(0, 0, 0, 0.8);
}

.videos {
    width: 100%;
    height: 100%;
    position: relative;
}

#background {
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
}
.sliders {
    position: relative;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    max-width: 990px;
    width: 90%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    text-align: center;
}

.hero-content h1 {
    font-size: 75px;
    color: #fff;
    line-height: 1.3;
    -webkit-filter: contrast(1);
            filter: contrast(1);
            position: relative;

    background: -o-linear-gradient(135deg, #6355a4, red, #e89a3e, aqua);

    background: linear-gradient(-45deg, #6355a4, red, #e89a3e, aqua);
    background-size: 300%;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-animation: zee 6s linear infinite;
            animation: zee 6s linear infinite;

}


@-webkit-keyframes zee {
    0% {
        background-position: 0px 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0px 50%;
    }
}


@keyframes zee {
    0% {
        background-position: 0px 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0px 50%;
    }
}

.hero-content h4 {
    font-size: 24px;
    color: #fff;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 10px;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}
.hero-content h2 {
    font-size: 42px;
    color: #dfdfdf;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 10px;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}
.hero-content p {
    font-size: 16px;
    color: #fff;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 15px;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}

.btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-top: 25px;
}

.btns a {
    display: inline-block;
    padding: 12px 35px;
    font-size: 16px;
    color: #fff;
    line-height: 1.5;
    font-weight: 500;
    background: #ff5252;
    margin-right: 15px;
    border-radius: 30px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}
.btns a:hover {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: #161616 !important;
}
.btns a:last-child{
    background: #161616;
    border: 1px solid #6355a4;
}



@media (max-width: 1199.98px) {

.hero-content h1 {
    font-size: 50px;
}
.hero-content h2 {
    font-size: 36px;
}
.hero-content h4 {
    font-size: 20px;
}

}


@media (max-width: 991.98px) {
.hero-content h1 {
    font-size: 40px;
}
.hero-content p {
    font-size: 16px;
}
.hero-content h2 {
    font-size: 30px;
}
.hero-content h4 {
    font-size: 18px;
}

.hero-content img {
    height: auto;
}

}


@media (max-width: 767.98px) {
.hero-content h1 {
    font-size: 30px;
}

.hero-content h2 {
    font-size: 24px;
}
.hero-content h4 {
    font-size: 16px;
    margin-bottom: 0;
}
.hero-content .my-3 {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}
.hero-content p {
    font-size: 15px;
}

.carousel__item img {
    height: 630px;
}

.btns {
    display: block;
    -webkit-box-align: center;
        -ms-flex-align: center;
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
    background: rgba(0, 0, 0, 0.8);
}

}




</style>