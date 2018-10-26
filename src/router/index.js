import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/PageTop')
    },
    { 
      path: '/create',
      component: () => import('@/pages/PageCreate')
    },
    {
      path: '/update/:id',
      component: () => import('@/pages/PageUpdate')
    },
    {
      path: '*',
      component: () => import('@/pages/Page404')
    }
  ]
})

export default router