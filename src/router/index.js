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
            name: Home
        },
        {
            path: '/about',
            component: About,
            name: About
        },
        {
            path: '/contact',
            component: Contact,
            name: Contact
        },
        {
            path: '/services',
            component: Services,
            name: Services
        },
        {
            path: '/projects',
            component: Projects,
            name: Projects
        },
        {
            path: '/blog',
            component: Blog,
            name: Blog

        },
        {
            path: '/blogdetails/:id',
            component: BlogDetails,
            name: 'post'
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: NotFound
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