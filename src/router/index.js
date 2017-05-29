import Vue from 'vue'
import Router from 'vue-router'
import WeeklySchedule from '@/components/WeeklySchedule'
import TeamSchedule from '@/components/TeamSchedule'

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
      name: 'WeeklySchedule',
      redirect: { name: 'Schedule by week' }
    },
    {
      path: '/schedule/by-week',
      name: 'Schedule by week',
      component: WeeklySchedule
    },
    {
      path: '/schedule/by-team',
      name: 'Schedule by team',
      component: TeamSchedule
    }
  ]
})
