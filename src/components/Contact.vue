<script setup>
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "7bdd9c04-fb32-4fdf-a3a4-add54cc2ebce";
const firstname = ref("")
const lastname = ref("")
const email = ref("")
const phone = ref("")
const message = ref("")
const successmsg = ref("")

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }),
  });

  const result = await response.json();
  if (result.success) {
    successmsg.value = result.message
    firstname.value = ""
    lastname.value = ""
    email.value = ""
    phone.value = ""
    message.value = ""
  }

};



</script>

<template>
<!-- contact-area -->
<section class="contact-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 p-0">
                <div class="map"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8682.057144089302!2d90.36762249401818!3d23.80595922866292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1697829175784!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="contacts"  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Contact</h3>
                    <slot name="contactinfo">

                    </slot>
                    <form @submit.prevent="submitForm()">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="firstname" placeholder="First name" name="firstname" v-model="firstname" required>
                                    <label for="firstname">First name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="lastname" placeholder="Last name" name="lastname" v-model="lastname" required>
                                    <label for="lastname">Last name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" v-model="email" required>
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="phone" placeholder="Phone number" name="phone" v-model="phone">
                                    <label for="phone">Phone number</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" style="height: 100px" name="message" v-model="message" required></textarea>
                                    <label for="floatingTextarea2">Message</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="submit">Send</button>
                                <p class="succes">{{ successmsg }}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- contact-area -->
</template>

<style scoped>

.contact-area {
    background: #fff;
}
.map {
    height: 100%;
    width: 100%;
}
iframe {
    height: 100%;
    width: 100%;
}

.contacts {
    padding: 30px;
}

.contacts h3 {
    font-size: 30px;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 25px;
}
.form-control:focus {
    border-color: #222;
    outline: 0;
    -webkit-box-shadow: inherit;
            box-shadow: inherit;
}
.submit {
    border: none;
    width: 100%;
    display: block;
    padding: 12px 35px;
    font-size: 18px;
    color: #fff;
    line-height: 1.5;
    font-weight: 500;
    background: #ff5252;
    margin-right: 15px;
    border-radius: 8px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.submit:hover {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: #fff;
    background: #222 !important;
}

p.succes {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
}



@media (max-width: 991.98px) {
iframe {
    height: 300px;
    width: 100%;
}
.contacts {
    padding: 15px;
    margin-bottom: 30px;
}

}

</style>