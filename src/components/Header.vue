<script setup>

</script>

<template>

<!-- header-area -->
<header class="header-area shadow-sm">
    <div class="containers">
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-xl">
                    <div class="container-fluid p-0">
                        <router-link class="navbar-brand" to="/">Mehedi Hasan</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewbox="0 0 30 27">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#36344D" style="fill: #36344D;">
                                        <g>
                                            <path d="M0 17H30V19H0zM0 25H30V27H0z"
                                                transform="translate(-1376 -48) translate(1376 48)" />
                                            <text font-family="Poppins" sans-serif font-size="10" font-weight="500"
                                                letter-spacing=".2"
                                                transform="translate(-1376 -48) translate(1376 48)">
                                                <tspan x=".115" y="10">MENU</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link class="nav-link active" to="/">Home</router-link>
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
                                        <a href="https://www.facebook.com/md.mehedi.hasan.cse/" target="_blank"><i class="bi bi-facebook"></i></a>
                                        <a href="https://www.linkedin.com/in/mehedi-hasan-020a47168/" target="_blank"><i class="bi bi-linkedin"></i></a>
                                        <a href="https://twitter.com/mehedihasan_cse " target="_blank"><i class="bi bi-twitter-x"></i></a>
                                        <a href="https://github.com/experthtml" target="_blank"><i class="bi bi-github"></i></a>
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
    background: #fff;
}
.navbar-brand {
    font-size: 24px;
    font-weight: 600;
    color: #36344D;
}
.nav-link {
    font-size: 16px;
    color: #36344D;
    font-weight: 500;
    filter: contrast(1);
}
.router-link-exact-active.nav-link {
    color: #68d388 !important;
    filter: contrast(1);
}

.me-auto {
    margin-left: auto;
    margin-right: 0 ;
}

.accunt li {
    display: inline-block;
}
.accunt li a{
    display: inline-block;
    font-size: 20px;
    color: #36344D;
    font-weight: 500;
    margin-left: 8px;
    filter: contrast(1);
}
.navbar-toggler-icon {
    background-image: none;
}


@media (max-width: 1199.98px) {
.accunt li a{
    margin-left: 0;
    margin-right: 10px;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: inherit;
}


}


</style>