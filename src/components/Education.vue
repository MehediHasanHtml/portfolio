<script setup>
import {ref} from 'vue'

const educatios = ref([
    {
        id: 1,
        title: 'Graduation',
        date: '2017-2021',
        dept: 'BSc In CSE (Computer Science Engineering)',
        institute: 'Green University Of Bangladesh.'
    },
    {
        id: 2,
        title: 'Diploma-In-Engineer',
        date: '2012-2016',
        dept: 'Department Of Computer Technology.',
        institute: 'Bogra Ploytechnic Institute.'
    },

]);


const employment = ref([
    {
        id: 1,
        title: 'Front-End Developer',
        date: 'March, 2020 - Continuing (Remote)',
        company: 'DealersGear Software Company',
        address: 'CA 92612, United States'
    },
    {
        id: 2,
        title: 'Front-End Developer',
        date: 'September, 2019 - October, 2019',
        company: 'WD IT Solution',
        address: 'WD IT SOLUTION, Rd No.13, Dhaka 1212'
    },
    {
        id: 3,
        title: 'Web Designer',
        date: 'April, 2018 - August, 2018',
        company: 'Swiftcode-IT',
        address: 'Middle Badda, Dhaka 1212'
    },
    {
        id: 4,
        title: 'Web Designer',
        date: 'June, 2017 - March, 2018',
        company: 'Rams ITceh Ltd.',
        address: 'Dhanmondi 32, Dhaka'
    },

]);

const trainings = ref([
    {
        id: 1,
        title: 'Mastering Vue.js',
        topic: 'Vue js (The Progressive JavaScript Framework)',
        institute: 'ostad',
        duration: '4 months',
        year: 2023
    },

    {
        id: 2,
        title: 'Search Engine Optimization (SEO)',
        topic: 'Become an SEO Expert',
        institute: 'Passive Journal',
        duration: '3 months',
        year: 2022
    },
    {
        id: 3,
        title: 'Web designer and developer',
        topic: 'HTML, CSS, JavaScript, PHP, mySQL, etc',
        institute: 'Daffodil international professional training institute (DIPTI)',
        duration: '4 months',
        year: 2016
    },
    {
        id: 4,
        title: 'Advance web design and development',
        topic: 'HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, WordPress, etc',
        institute: 'SoftTech-it Institute',
        duration: '8 months',
        year: 2016
    },


]);


</script>

<template>

<!-- education -->
<section class="education">
    <div class="containers">
        <div class="row">
            <div class="col-lg-5">
                <div class="title text-end"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2>Education</h2>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="educations"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <ul>
                        <li v-for="education in educatios" :key="education.id">
                            <h3>{{ education.title }}</h3>
                            <p><strong>Date :</strong> {{ education.date }}</p>
                            <p><strong>Department: </strong> {{ education.dept }}</p>
                            <p><strong>Institute:</strong> {{ education.institute }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="title text-end"  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <h2>Employment History</h2>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="educations"  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <ul>
                        <li v-for="employe in employment" :key="employe.id">
                            <h3>{{ employe.title }}</h3>
                            <p><strong>Date:</strong> {{ employe.date }}</p>
                            <p><strong>Company:</strong> {{ employe.company }}</p>
                            <p><strong>Address:</strong> {{ employe.address }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="title text-end"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h2>Training Summary</h2>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="educations"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <ul>
                        <li v-for="training in trainings" :key="training.id">
                            <h3>{{ training.title }}</h3>
                            <p><strong>Topic:</strong> {{ training.topic }}</p>
                            <p><strong>Institute:</strong> {{ training.institute }}</p>
                            <p><strong>Year:</strong> {{ training.year }}</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>
<!-- education -->

</template>


<style scoped>

.title h2 {
    font-size: 30px;
    line-height: 1;
}
.education {
    padding: 80px 0;
    background: #f4f4f4;
}

.educations {
    margin-bottom: 50px;
}

.educations li{
    margin-bottom: 25px;
    padding-left: 25px;
    position: relative;
}
.educations li::before{
    display: block;
    content: '';
    clear: both;
    position: absolute;
    top: 0;
    left: -7px;
    height: 12px;
    width: 12px;
    background: #ff5252;
    border-radius: 50%;
}
.educations h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 15px;
}
.educations p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 15px;
}

.educations ul {
    position: relative;
    border-left: 2px solid #ff5252;
}

strong {
    font-weight: 600;
}

@media (max-width: 991.98px) {
.text-end {
    text-align: left !important;
}
.title h2 {
    font-size: 24px;
    line-height: 1;
}

}


</style>