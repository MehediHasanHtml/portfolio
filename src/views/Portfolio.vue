<script setup>
import {ref, onMounted} from 'vue'
import Banners from '../components/Banners.vue';
import RecentWork from '../components/RecentWork.vue'
import FAQ from '../components/FAQ.vue'

const title = ref('Portfolio | Mehedi Hasan');

onMounted(() => {
      window.scrollTo(0, 0);
});

</script>

<template>
<title>{{ title }}</title>
<Banners class="portfolio" banners="Recent Work"/>

<div class="notes"  data-aos="fade-up" data-aos-delay="50">
      <p>NB: I worked on many projects but I can't share this because the company is out of rules 👨‍💻</p>
</div>

<RecentWork/>

<FAQ/>

</template>

<style scoped>
.notes {
      text-align: center;
      margin-top: 25px;
}
.notes p {
      font-weight: 600;
      font-size: 16px;
}
</style>