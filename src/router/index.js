import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '@v/error/Error404'
import Home from '@v/home/Home'
import HotMain from '@v/hot/HotMain'
import BlogList from '@v/blogs/BlogList'
import AddBlog from '@v/blogs/AddBlog'
Vue.use(VueRouter)
const routes = [
  {
    path: '/user/hot',
    redirect: '/user/hot/main',
    component: Home,
    children: [
      {
        path: 'main',
        component: HotMain,
        meta: { title: '最新动态' }
      }
    ]
  },
  {
    path: '/user/blog',
    redirect: '/user/blog/list',
    component: Home,
    children: [
      {
        path: 'list',
        component: BlogList,
        meta: { title: '最新动态' }
      },
      {
        path: 'add',
        component: AddBlog,
        meta: { title: '最新动态' }
      }
    ]
  },
  {
    path: '/write',
    name: 'write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@v/about/About ')
  },
  {
    path: '/',
    redirect: '/user/hot'
  },
  {
    path: '/404',
    component: Error404
  },
  {
    path: '*',
    redirect: '/404'
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
// # sourceMappingURL=index.js.map
