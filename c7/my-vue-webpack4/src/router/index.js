import Vue from 'vue'
import Router from 'vue-router'

import FormRouter from './modules/form'              // 导出FormRouter
import HelloWorldRouter from './modules/helloworld'      // 导出HelloWorldRouter
import OpenSourceRouter from './modules/opensource'   // 导出OpenSourceRouter
import WebWorkersRouter from './modules/webworkers'


Vue.use(Router)


export const constantRouterMap = [
    FormRouter,  
    HelloWorldRouter, 
    OpenSourceRouter,
    WebWorkersRouter
  ]

const router = new Router({
    routes: constantRouterMap,
})
export default router