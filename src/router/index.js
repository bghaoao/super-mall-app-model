import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Classify = () => import('views/classify/Classify.vue')
const Find= () => import('views/find/Find.vue')
const Shop = () => import('views/shop/Shop.vue')
const Mine = () => import('views/mine/Mine.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/mine',
      component: Mine
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
