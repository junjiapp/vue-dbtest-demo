import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: (resolve) => {
        require(['../components/page/home.vue'],resolve)
      }
    },
    {
      path: '/list/:type',
      name: 'List',
      component: (resolve) => {
        require(['../components/page/list.vue'],resolve)
      }
    },
    {
      path: '/tag/:type',
      name: 'Tag',
      component: (resolve) => {
        require(['../components/page/tag.vue'],resolve)
      }
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: (resolve) => {
        require(['../components/page/show.vue'],resolve)
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: (resolve) => {
        require(['../components/page/search.vue'],resolve)
      }
    },
    {
      path: '/result',
      name: 'Result',
      component: (resolve) => {
        require(['../components/page/result.vue'],resolve)
      }
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => {
        require(['../components/page/about.vue'],resolve)
      }
    }
  ]
})
