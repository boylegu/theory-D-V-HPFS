import OpenSource from '@/components/OpenSource'

const OpenSourceRouter = { 
        path: '/opensource', 
        // path: '/opensource/:id', 
        component: OpenSource,
        name: 'opensource',
        children: [{
            path: 'list',
            // component: <组件名>,
            name: 'OpenSourceList',
          }, {
            path: 'detail/:id',
            // component: <组件名>,
            name: 'OpenSourceDetail',
          },]
    }

export default OpenSourceRouter
