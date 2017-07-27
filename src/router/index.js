import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EventList from '@/components/EventList'

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
    }
  ]
})
