import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import OldUser from '@/components/user/OldUser'
import NewUser from '@/components/user/NewUser'

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: '导航一',
      component: Main,
      iconCls: 'el-icon-tickets', //图标样式class
      childNode: true,
      children: [
        {
          path: '/oldUser',
          name: '老客户',
          component: OldUser
        },
        {
          path: '/newUser',
          name: '新增客户',
          iconCls: 'fa fa-address-card',
          component: NewUser
        }

      ]
    }
  ]
})
