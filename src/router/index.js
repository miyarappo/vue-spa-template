import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/pages/PageIndex'
import Page404 from '@/pages/Page404'

// プラグインとして登録
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    {
      path: '*',
      component: Page404
    }
  ]
})

export default router