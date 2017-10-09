import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Reading from '@/components/reading'
import Music from '@/components/music'
import Photo from '@/components/photo'
import SliderDetail from '@/components/sliderDetail'
import Detail from '@/components/detail'
import Login from '@/components/login'
import Register from '@/components/register'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          component: Photo
        },
        {
          path: 'reading',
          component: Reading
        },
        {
          path: 'music',
          component: Music
        }
      ]
    },
    {
      path: '/sliderDetail/:title/:id',
      name: 'sliderDetail',
      component: SliderDetail
    },
    {
      path: '/detail/:manual/:character/:type/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    }
  ]
})
