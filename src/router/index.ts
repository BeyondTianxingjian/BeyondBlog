import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/write',
    name: 'write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  }
]

const router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.meta.scrollTop) {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title)
  next()
})
export default router
