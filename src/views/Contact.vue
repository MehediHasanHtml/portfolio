<script setup>
import {ref, onMounted} from 'vue'
const title =ref('Contact | Mehedi Hasan')
import Banners from '../components/Banners.vue';
import ContactVue from '../components/Contact.vue';

onMounted(() => {
      window.scrollTo(0, 0);
});

</script>

<template>
<title>{{ title }}</title>
<Banners class="contact" banners="Contact"/>
<ContactVue>
<template #contactinfo>
    <div class="info">
        <p><i class="bi bi-envelope-fill"></i> Email: mehedihtml@gmail.com</p>
        <p><i class="bi bi-skype"></i> Skype: mehedihasancmt2</p>
    </div>
</template>
</ContactVue>



</template>

<style scoped>
.info {
    margin-bottom: 25px;
}
.info p{
    font-size: 16px;
    font-weight: 500;
}

</style>