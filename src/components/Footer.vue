<script setup>

</script>

<template>
    <!-- footer-area -->
    <footer class="footer-area">
        <div class="containers">
            <div class="row">
                <div class="col-md-6 col-lg-4 footerrow">
                    <div class="footers-grid"  data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <img class="img-fluid flogo" src="/img/logo-white.png" alt="logo">
                        <p><i class="bi bi-envelope-fill"></i> Email: mehedihtml@gmail.com</p>
                        <p><i class="bi bi-telephone-fill"></i> Phone: 01751144041</p>
                        <p><i class="bi bi-telephone-fill"></i> Address: Mirpur 10, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 footerrow">
                    <div class="footers-grid"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <h3>Usefull links</h3>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/services">Services</router-link></li>
                            <li><router-link to="/portfolio">Portfolio</router-link></li>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 footerrow">
                    <div class="footers-grid"  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                        <h3>Social</h3>
                        <ul class="social">
                            <li><a href="https://www.facebook.com/mehedihasancse3/" target="_blank"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/mehedi-hasan-020a47168/" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/mehedihasan_cse " target="_blank"><i class="bi bi-twitter-x"></i></a></li>
                            <li><a href="https://github.com/MehediHasanHtml" target="_blank"><i class="bi bi-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="copy">
                        <p>&copy; 2025 All Right Reserved. Design By Mehedi Hasan</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer-area -->
</template>


<style scoped>

.footer-area {
    padding: 50px 0 0 0;
    background: #1d1d1d;
}
.footers-grid {
    margin-bottom: 25px;
}
.flogo {
    height: 30px;
    margin-bottom: 25px;
}

.footers-grid h3 {
    color: #fff;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 15px;
}

.footers-grid li a {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 5px;
    color: #fff;
}
.footers-grid p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 8px;
    color: #fff;
}
.social li {
    display: inline-block;
}
.social li a{
    display: inline-block;
    font-size: 24px;
    margin-right: 10px;
}
.copy {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #434343;
}
.copy p {
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
}
.footerrow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}


@media (max-width: 991.98px) {
.footerrow {
    display: block;
}

}


</style>