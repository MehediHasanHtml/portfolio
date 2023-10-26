<script setup>
import {ref} from 'vue'
// const activeAccordion = ref(0)
const faqs = ref([
    {
        id: 1,
        quesion: 'Will I get a pixel-perfect design?',
        anwser: 'Yes, You will get a pixel perfect and clean design. Fully hand-code file.',
        isOpen: true
    },
    {
        id: 2,
        quesion: 'What browsers do you support?',
        anwser: 'We thoroughly test your project in all the latest and most popular browsers: Chrome, Firefox, IE, Safari, and Opera. Please be aware that we do not support beta versions of the browsers, we only support the final versions.',
        isOpen: false
    },
    {
        id: 3,
        quesion: 'Will it be fully clean code?',
        anwser: 'The code will be fully clean and well indented. ThemeForest standard coding.',
        isOpen: false
    },
    {
        id: 4,
        quesion: 'Is it going to be mobile responsive?',
        anwser: 'The website/page will be fully desktop, mobile and tablet/iPad responsive in all orientations.',
        isOpen: false
    },

]);

</script>

<template>
<!-- faq-area -->
<section class="faq-area">
    <div class="containers">
        <div class="row">

            <div class="col-md-12 col-lg-8 offset-lg-2">
                <div class="title text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class="faq">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
                            <h2 class="accordion-header">
                            <button @click="faq.isOpen = !faq.isOpen" :class="faq.isOpen? 'df': 'collapsed'" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne_'+ faq.id" :aria-expanded="faq.isOpen? true : false" :aria-controls="'collapseOne_' + faq.id">
                                {{faq.quesion}}
                            </button>
                            </h2>
                            <div :id="'collapseOne_' + faq.id" class="accordion-collapse collapse" :class="faq.isOpen? 'show': 'notshow'" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>{{ faq.anwser }}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
                            <h2 class="accordion-header">
                            <button @click="activeAccordion = index" :class="activeAccordion? ' ': 'collapsed'" class="accordion-button" type="button" >
                                {{faq.quesion}}
                            </button>
                            </h2>
                            <div class="accordion-collapse collapse" :class="activeAccordion? 'show': 'notshow'" data-bs-parent="#accordionExample" v-show="index == activeAccordion">
                                <div class="accordion-body">
                                    <p>{{ faq.anwser }}</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</section>
<!-- faq-area -->
</template>

<style scoped>
.faq-area {
    padding: 80px 0;
    background: #f4f4f4;
}
.accordion-button:focus {
    z-index: 3;
    border-color: inherit;
    outline: 0;
    box-shadow: inherit;
}
.accordion-button {
    font-size: 18px;
    font-weight: 500;
    color: #293042;
}

.accordion-body p {
    font-size: 16px;
    color: #36344D;
}
.accordion-button:not(.collapsed) {
    background-color: transparent;
}


@media (max-width: 767.98px) {

.accordion-button {
    font-size: 16px;
    font-weight: 500;
    color: #293042;
}


}

</style>