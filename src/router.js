import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import Skill from '@/pages/Skill.vue';
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
      path: '/skill',
      component: Skill
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
});

export default router;
