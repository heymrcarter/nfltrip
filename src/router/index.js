import Vue from 'vue'
import Router from 'vue-router'
import WeeklySchedule from '@/components/WeeklySchedule'
import TeamSchedule from '@/components/TeamSchedule'
import TripPlanner from '@/components/TripPlanner'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'ScheduleByWeek' }
    },
    {
      path: '/schedule',
      name: 'WeeklySchedule',
      redirect: { name: 'ScheduleByWeek' }
    },
    {
      path: '/schedule/by-week',
      name: 'ScheduleByWeek',
      component: WeeklySchedule
    },
    {
      path: '/schedule/by-team',
      name: 'ScheduleByTeam',
      component: TeamSchedule
    },
    {
      path: '/trip-planner',
      name: 'TripPlanner',
      component: TripPlanner
    }
  ]
})
