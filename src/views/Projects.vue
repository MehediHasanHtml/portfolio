<script setup>
import {ref} from 'vue'
import Banners from '../components/Banners.vue';
import RecentWork from '../components/RecentWork.vue'
import FAQ from '../components/FAQ.vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const title = ref('Projects | Mehedi Hasan');

</script>

<template>
<Header class="shadows" />
<title>{{ title }}</title>
<Banners class="portfolio" banners="Recent Work"/>

<div class="notes">
      <p>NB: I worked on many projects but I can't share this because the company is out of rules 👨‍💻</p>
</div>

<RecentWork/>

<FAQ/>
<Footer/>
</template>

<style scoped>
.notes {
      background: #161616;
      padding: 15px 15px;
      text-align: center;
}
.notes p {
      color: #fff;
      font-weight: 700;
      font-size: 16px;
}
</style>