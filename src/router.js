import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Description from './views/Description.vue'
import Sample from './views/Sample.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/description',
      name: 'description',
      component: Description,
    },
    {
      path: '/sample',
      name: 'sample',
      component: Sample,
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    },
  ]
})
