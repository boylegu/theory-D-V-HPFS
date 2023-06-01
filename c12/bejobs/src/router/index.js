import Vue from 'vue'
import Router from 'vue-router'
import JobDetail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'Detail',
      component: JobDetail
    }
  ]
})
