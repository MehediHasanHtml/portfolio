<script setup>
import {ref} from 'vue'
const title =ref('Contact | Mehedi Hasan')
import Banners from '../components/Banners.vue';
import ContactVue from '../components/Contact.vue';

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