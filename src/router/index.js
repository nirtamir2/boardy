import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EventList from '@/components/EventList'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/EventList',
      name: 'EventList',
      component: EventList
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
