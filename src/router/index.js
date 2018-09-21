import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/pages/PageIndex'
import Page404 from '@/pages/Page404'
import PageUsers from '@/pages/PageUsers'
import PageUserDetail from '@/pages/PageUserDetail'
import PageUserCreate from '@/pages/PageUserCreate'

// プラグインとして登録
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    { 
      path: '/users',
      component: PageUsers
    },
    {
      path: '/users/new',
      component: PageUserCreate
    },
    {
      path: '/users/:userId',
      component: PageUserDetail
    },
    {
      path: '*',
      component: Page404
    }
  ]
})

export default router