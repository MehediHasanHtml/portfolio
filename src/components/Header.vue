<script setup>
import { ref, onBeforeMount } from "vue";

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

const stickyHeader = ref(false)

 function handleScroll(){
  if (window.scrollY) {
    stickyHeader.value = true
  } else {
    stickyHeader.value = false
  }
}

</script>

<template>

<!-- header-area -->
<header class="header-area" :class="stickyHeader ? 'shadows' : ''">
    <div class="containers">
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-xl">
                    <div class="container-fluid p-0">
                        <router-link class="navbar-brand" to="/">
                            <img class="img-fluid lwhite" src="/img/logo-white.png" alt="Logo">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="bi bi-text-right"></i>
                        </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/about">About</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/services">Services</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/blog">Blog</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/contact">Contact</router-link>
                                </li>
                            </ul>
                            <div class="accunt">
                                <ul>
                                    <li class="nav-item">
                                        <a href="https://www.facebook.com/mehedihasancse3/" target="_blank"><i class="bi bi-facebook"></i></a>
                                        <a href="https://www.linkedin.com/in/mehedi-hasan-020a47168/" target="_blank"><i class="bi bi-linkedin"></i></a>
                                        <a href="https://twitter.com/mehedihasan_cse " target="_blank"><i class="bi bi-twitter-x"></i></a>
                                        <a href="https://github.com/MehediHasanHtml" target="_blank"><i class="bi bi-github"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
<!-- header-area -->

</template>

<style scoped>

.header-area {
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: transparent;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.header-area.shadows {
    background: #161616;
    box-shadow: var(--bs-box-shadow-sm) !important;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}



.navbar-brand img {
    height: 30px;
}
.nav-link {
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}
.shadows .nav-link {
    color: #fff;
}
.router-link-exact-active.nav-link {
    color: #ff5252 !important;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}

.shadows .nav-link:focus, 
.shadows .nav-link:hover {
    color: #fff;
}
.nav-link:focus, 
.nav-link:hover {
    color: #fff;
}

.me-auto {
    margin-left: auto;
    margin-right: 0 ;
}

.accunt li {
    display: inline-block;
}
.accunt li a {
    display: inline-block;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    margin-left: 15px;
    -webkit-filter: contrast(1);
            filter: contrast(1);
}
.shadows .accunt li a {
    color: #fff;
}
.navbar-toggler-icon {
    background-image: none;
    width: auto;
    height: auto;
}

.navbar-toggler {
    font-size: 24px;
    line-height: 1;
    color: #fff;
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
}
.shadows .navbar-toggler {
    color: #fff;
}



@media (max-width: 1199.98px) {
.accunt li a{
    margin-left: 0;
    margin-right: 10px;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    -webkit-box-shadow: inherit;
            box-shadow: inherit;
}

.navbar-collapse {
    background: #111;
    padding: 8px;
}

.shadows .navbar-collapse {
    background: #161616;
    padding: 8px;
}
.header-area {
    padding: 0;
}

}
@media (max-width: 767px) {
    .navbar-brand img {
        height: 26px;
    }


}

</style>