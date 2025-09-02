<script setup>
import {ref} from 'vue'


     
const series = ref( [{
    data: [95, 90, 70, 80, 60, 90, 80, 50, 65, 70, 80]
    }]
);


 const chartOptions = ref({
    chart: {
        height: 400,
        type: 'bar'
    },
    colors: ['#FF4C1E', '#004CE8', '#FFDF00', '#78CFF5', '#41B883', '#8011FA', '#009245', '#F05033', '#409EFF', '#FF7362'],
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    legend: {
        position: 'top'
    },
    xaxis: {
        categories: [
            ['HTML5'],
            ['CSS3'],
            ['JavaScript'],
            ['jQuery'],
            ['Vue JS'],
            ['Bootstrap'],
            ['Tailwind'],
            ['SEO'],
            ['Git'],
            ['Nuxt'],
            ['Nuxt UI'],
        ],
        labels: {
            style: {
                colors: "#000",
                fontSize: '12px'
            }
        }
    },
    toolbar: {
        show: false,
    },

});




</script>

<template>
    <!-- Home-about -->
    <section class="home-about">
        <div class="containers">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="title">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div class="col-xl-6 d-flex align-items-center">
                    <div class="content" data-aos="fade-up" data-aos-delay="50">
                        <article class="cards">
                            <div class="row">
                                <div class="col-md-6 col-xl-5 col-xxl-4">
                                    <img class="img-fluid" src="/img/Mehedi-Hasan.jpg" alt="Mehedi Hasan, Frentend developer" loading="lazy">
                                </div>
                                <div class="col-md-6 col-xl-7 col-xxl-8">
                                    <div class="contx">
                                        <div class="coer">

                                            <p>Hello, I am a professional Frontend developer with an overall 7+ years of experience also, an expert in HTML5, CSS3, JavaScript, jQuery, <b>Vue JS,</b> Nuxt, Nuxt UI, <b> Tailwind / Bootstrap 5</b> Re-design, HTML & CSS bug fixes, PSD to HTML, Figma to HTML, <b>Admin Dashboard</b> and landing page design with SEO friendly, <b>mobile responsive</b>  and pixel-perfect conversion.</p>
                                            <p> Web design is my hobby and passion. if you have any kind of work related to my skills then please contact me. Have a good day.</p>
                                             <a class="cus-btn" href="/pdf/Mehedi_Hsana_Resume.pdf" target="_blank">See Resume</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </article>

                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="content"  data-aos="fade-up" data-aos-delay="100">
                        <div id="chart">
                            <apexchart type="bar" height="400" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Home-about -->
</template>


<style scoped>
.home-about {
    padding: 80px 0;
    background: #282828;
}

.content p {
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 15px;
}
.cards {
    border-radius: 10px;
    background: #313131;
    margin-bottom: 25px;
}

.cards img{
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
}
.contx {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 100%;
}

.coer {
    padding: 15px 15px 15px 0px;
}

@media (max-width: 991.98px) {
    .content{
        margin-bottom: 30px;
    }

    .content p {
        font-size: 16px;
        font-weight: 400;
    }

    .coer {
        padding: 15px 0px;
    }

}


</style>