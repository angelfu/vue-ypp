import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import news from '@/views/news'
import newsDetail from '@/views/news-detail'
import about from '@/views/about'
import joinus from '@/views/join'
import joinDetail from '@/views/join-detail'
import help from '@/views/help'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/news-detail/:id',
      name: 'news-detail',
      component: newsDetail
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/join',
      name: 'join',
      component: joinus
    },
    {
      path: '/join-detail/:id',
      name: 'join-detail',
      component: joinDetail
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$loader.close()
  console.log(to)
  next()
})
export default router
