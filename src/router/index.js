import Vue from 'vue'
import Router from 'vue-router'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'Schedule by week' }
    },
    {
      path: '/schedule',
      name: 'Schedule',
      redirect: { name: 'Schedule by week' }
    },
    {
      path: '/schedule/by-week',
      name: 'Schedule by week',
      component: Schedule
    },
    {
      path: '/schedule/by-team',
      name: 'Schedule by team',
      component: Schedule
    }
  ]
})
