<script setup>
import {ref} from 'vue'


     
const series = ref( [{
    data: [95, 90, 70, 80, 60, 90, 50, 65, 90, 70]
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
            ['SEO'],
            ['Git'],
            ['Element Plus'],
            ['Figma'],
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
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="content" data-aos="fade-up" data-aos-delay="50">
                        <div class="profile">
                            <img class="img-fluid" src="/img/Mehedi-Hasan.jpg" alt="Mehedi Hasan, Frentend developer" loading="lazy">
                            <p><i class="bi bi-envelope-fill"></i> Email: mehedihtml@gmail.com</p>
                            <p><i class="bi bi-skype"></i> Skype: mehedihasancmt2</p>
                        </div>

                        <p>Hello, I am a professional Frontend developer with an overall 6+ years of experience also, an expert in HTML5, CSS3, JavaScript, jQuery, <b>Vue JS,</b> Element Plus, Bootstrap 5, Re-design, HTML & CSS bug fixes, PSD to HTML, Figma to HTML, <b>Admin Dashboard</b> and landing page design with SEO friendly, <b>mobile responsive</b>  and pixel-perfect conversion.</p>
                        <p> Web design is my hobby and passion. if you have any kind of work related to my skills then please contact me. Have a good day.</p>
                        <a class="cus-btn" href="/pdf/Mehedi_Hsana_Resume.pdf" target="_blank">See Resume</a>
                    </div>
                </div>
                <div class="col-lg-6">
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
}

.content p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 15px;
}


@media (max-width: 991.98px) {
    .content{
        margin-bottom: 30px;
    }

    .content p {
        font-size: 16px;
        font-weight: 400;
    }

}


</style>