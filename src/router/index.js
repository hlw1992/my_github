import Vue from 'vue'
import Router from 'vue-router'
// 这是我的首页
import swiper from '@/components/indexSwiper'
import about from '@/components/about'
import tools from '@/components/tools'
// 下面是tools的子路由
import quote from '@/components/quote'
import bulletScreen from '@/components/bulletScreen'
import searchWiki from '@/components/searchWiki'
import calc from '@/components/calc'
import timeout from '@/components/timeout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'swiper',
      component: swiper,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/tools',
      name: 'tools',
      redirect:'/tools/quote',
      component: tools,
      children: [
        {
          path: 'quote',
          name:'quote',
          component: quote,
          meta: {
            title: '每日一言'
          }
        },
        {
          path: 'bulletScreen',
          name:'bulletScreen',
          component: bulletScreen,
          meta: {
            title: '弹幕'
          }
        },
        {
          path: 'searchWiki',
          name:'searchWiki',
          component: searchWiki,
          meta: {
            title: '搜索'
          }
        },
        {
          path: 'calc',
          name:'calc',
          component: calc,
          meta: {
            title: '计算器'
          }
        },
        {
          path: 'timeout',
          name:'timeout',
          component: timeout,
          meta: {
            title: '番茄计时'
          }
        }
      ]

    },
  ]
})
