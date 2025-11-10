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
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="contacts"  data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Get In Touch</h3>
                    <p>Let's Build Something Amazing Together!</p>
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
    background: #161616;
    padding: 80px 0;
    position: relative;
    z-index: 2;

}

.contact-area::after {
    display: block;
    content: '';
    clear: both;
    position: absolute;
    top: 0;
    right: 0;
    background-image: radial-gradient(#434343  1px, transparent 0);
    background-size: 16px 16px;
    background-position: -19px -19px;
    -webkit-mask-image: linear-gradient(237deg, black 0, transparent 100%);
    mask-image: linear-gradient(237deg, black 0, transparent 100%);
    position: absolute;
    height: calc(100% - 16px);
    width: 100%;
    z-index: -1;
}

.contacts {
    background: #161616;
}


.map {
    height: 100%;
    width: 100%;
}
iframe {
    height: 100%;
    width: 100%;
    filter: grayscale(1);
}

.contacts {
    padding: 30px;
    background: #282828;
    border-radius: 10px;
}

.contacts h3 {
    font-size: 30px;
    color: #fff;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 5px;
}
.contacts p {
    font-size: 16px;
    color: #fff;
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
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
}


.form-floating>.form-control,
.form-floating>.form-select {
    height: 50px;
    padding: 10px 15px;
    min-height: auto;
}

.form-control {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    background-color: #303132;
    background-clip: padding-box;
    border: 1px solid #303132;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 10px;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 15px;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: #303132;
    background-clip: padding-box;
    border: 1px solid #303132;
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border-radius: 10px;
    -webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    -o-transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.form-select:focus {
    border-color: #303132;
    outline: 0;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
}

.form-floating>label {
    position: absolute;
    top: 12px;
    left: 10px;
    height: 22px;
    font-size: 16px;
    color: #fff;
    opacity: 0.7;
    padding: 0 5px;
    pointer-events: none;
    border: none;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    -o-transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    -webkit-transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
}

.form-floating>.form-control:not(:-moz-placeholder-shown)~label {
    opacity: 1;
    color: #fff;
    -webkit-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    -ms-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    background: linear-gradient( rgba(53, 53, 53, 0.2), rgba(48, 49, 50, 1));
    font-size: 16px;
}

.form-floating>.form-control:not(:-ms-input-placeholder)~label {
    opacity: 1;
    color: #fff;
    -webkit-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    -ms-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    background: linear-gradient( rgba(53, 53, 53, 0.2), rgba(48, 49, 50, 1));
    font-size: 16px;
}

.form-floating>.form-control:focus~label,
.form-floating>.form-control:not(:placeholder-shown)~label,
.form-floating>.form-select~label {
    opacity: 1;
    color: #fff;
    -webkit-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    -ms-transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-1.6rem) translateX(0.15rem);
    background: -webkit-gradient( linear, left top, left bottom, from(rgba(53, 53, 53, 0.2)), to(rgba(48, 49, 50, 1)));
    background: -o-linear-gradient( rgba(53, 53, 53, 0.2), rgba(48, 49, 50, 1));
    background: linear-gradient( rgba(53, 53, 53, 0.2), rgba(48, 49, 50, 1));
    font-size: 16px;
}

.form-floating>.form-control:not(:-moz-placeholder-shown) {
    padding-top: 0;
    padding-bottom: 0;
    background: #303132;
    border: 1px solid rgba(255, 255, 255, .2);
    color: #fff;
}

.form-floating>.form-control:not(:-ms-input-placeholder) {
    padding-top: 0;
    padding-bottom: 0;
    background: #303132;
    border: 1px solid rgba(255, 255, 255, .2);
    color: #fff;
}

.form-floating>.form-control:focus,
.form-floating>.form-control:not(:placeholder-shown) {
    padding-top: 0;
    padding-bottom: 0;
    background: #303132;
    border: 1px solid rgba(255, 255, 255, .2);
    color: #fff;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
}

.form-floating>.form-control-plaintext~label::after,
.form-floating>.form-control:focus~label::after,
.form-floating>.form-control:not(:placeholder-shown)~label::after,
.form-floating>.form-select~label::after {
    display: none;
}

textarea.form-control {
    min-height: 100px;
    padding-top: 15px !important;
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