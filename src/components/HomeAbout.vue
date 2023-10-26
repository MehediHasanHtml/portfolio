<script setup>
import {ref} from 'vue'

import {Chart, Title, Tooltip, Legend, BarElement,CategoryScale,LinearScale} from 'chart.js'
import { Bar } from 'vue-chartjs'

Chart.register(CategoryScale, LinearScale, BarElement,Title, Tooltip, Legend)

const data = {
  labels: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Vue js', 'Bootstrap', 'SEO'],
  datasets: [{
        label: 'Skills', backgroundColor: '#68d388',
        data: [95, 90, 70, 80, 60, 90, 50
        ]}
    ]
}

// JSON Array Kata-Kati--->

const options = {
  responsive: true,
  height:400,
  maintainAspectRatio: true
};



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
                    <div class="content">
                        <slot name="header"></slot>
                        <p>Hello, I am a professional Frontend developer with an overall 4+ years of experience also, an expert in HTML5, CSS3, JavaScript, jQuery, Vue JS, Bootstrap, Re-design, HTML & CSS bug fixes, PSD to HTML, Figma to HTML and landing page design with SEO friendly, mobile responsive and pixel-perfect conversion.</p>
                        <p> Web design is my hobby and passion. if you have any kind of work related to my skills then please contact me. Have a good day.</p>
                        <slot name="button">
                            
                        </slot>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content">
                        <Bar :data="data" :options="options" />
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
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 15px;
}


@media (max-width: 991.98px) {
    .content{
        margin-bottom: 30px;
    }

    .content p {
        font-size: 16px;
        font-weight: 500;
    }

}


</style>