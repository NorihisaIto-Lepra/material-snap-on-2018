import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Description from './views/Description.vue'
import Sample from './views/Sample.vue'
import UserInterface from './views/UserInterface.vue'
import Problem from './views/Problem.vue'
import Solution from './views/Solution.vue'
import Learn from './views/Learn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/description',
      name: 'Description',
      component: Description,
    },
    {
      path: '/user-interface',
      name: 'UserInterface',
      component: UserInterface,
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem,
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution,
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample,
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    },
  ]
})
