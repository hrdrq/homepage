import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import Skills from '@/pages/Skills.vue';
import Experience from '@/pages/Experience.vue';
import Contact from '@/pages/Contact.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/contact',
      component: Contact
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

export default router;
