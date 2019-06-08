import Vue from 'vue'
import Router from 'vue-router'

import OpenSourceRouter from './modules/opensource'

Vue.use(Router)


export const constantRouterMap = [
    OpenSourceRouter,
  ]

const router = new Router({
    routes: constantRouterMap,
})
export default router