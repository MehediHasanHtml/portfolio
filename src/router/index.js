import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress';

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import BlogDetails from '../views/BlogDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),

    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0, behavior: 'smooth' }
    },

    routes: [{
            path: '/',
            component: Home,
            name: Home,
            meta: {
                title: 'Home | Mehedi Hasan - Frontend Developer',
                description: "Welcome to Mehedi Portfolio — a passionate Frontend Developer specializing in modern, responsive, and SEO-optimized web applications built with Vue.js, React, and Tailwind CSS. Explore projects, skills, and contact details here."
            }
        },
        {
            path: '/about',
            component: About,
            name: About,
            meta: {
                title: 'About | Mehedi Hasan - Frontend Developer Portfolio',
                description: "I’m Mehedi Hasan, a Frontend Developer with a focus on creating fast, user-friendly, and visually engaging websites. With a strong background in HTML, CSS, JavaScript, and Vue.js, I aim to bring design ideas to life with clean, maintainable code."
            }
        },
        {
            path: '/contact',
            component: Contact,
            name: Contact,
            meta: {
                title: 'Contact | Mehedi Hasan - Get in Touch',
                description: "Want to collaborate or hire me for your next project? Reach out through the contact page — I’m available for freelance, remote, and full-time opportunities in web development."
            }
        },
        {
            path: '/services',
            component: Services,
            name: Services,
            meta: {
                title: 'Services | Mehedi Hasan - Web Design & Frontend Development',
                description: "Offering professional web design, responsive frontend development, and performance optimization services. I help businesses build modern, accessible, and high-performing web applications that stand out online."
            }
        },
        {
            path: '/projects',
            component: Projects,
            name: Projects,
            meta: {
                title: 'Projects | Mehedi Hasan - Portfolio Showcase',
                description: "Explore my portfolio of web development projects built with Vue.js, React, and Tailwind CSS. Each project demonstrates real-world problem-solving, clean code structure, and modern UI/UX design practices."
            }
        },
        {
            path: '/blog',
            component: Blog,
            name: Blog,
            meta: {
                title: 'Blog | Web Design & Frontend Development',
                description: "Hello, I'm Mehedi Hasan. Are you looking for a frontend developer to convert Figma to Html, Admin Dashboard and pixel-perfect using Vue/Nuxt, Tailwind CSS?"
            }

        },
        {
            path: '/blogdetails/:id',
            component: BlogDetails,
            name: 'post',
            meta: {
                title: 'Blog Details | Mehedi Hasan - Frontend developer in Bangladesh',
                description: "Hello, I'm Mehedi Hasan. Are you looking for a frontend developer to convert Figma to Html, Admin Dashboard and pixel-perfect using Vue/Nuxt, Tailwind CSS?"
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: NotFound,
            meta: {
                title: '404 | Mehedi Hasan - Page not found',
                description: "Oops! The page you are looking for doesn’t exist or has been moved. Return to the homepage to continue exploring Mehedi HTML’s web development projects and services."
            }
        },
    ],
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router