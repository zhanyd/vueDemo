import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import OldUser from '@/components/user/OldUser'
import NewUser from '@/components/user/NewUser'
import addQuestion from '@/components/question/addQuestion'
import questionList from '@/components/question/questionList'

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
    },
    {
      path: '/',
      name: '问题',
      component: Main,
      iconCls: 'el-icon-tickets', //图标样式class
      childNode: true,
      children: [
        {
          path: '/questionList',
          name: '问题列表',
          component: questionList
        },
        {
          path: '/addQuestion',
          name: '新增问题户',
          iconCls: 'fa fa-address-card',
          component: addQuestion
        }

      ]
    }

  ]
})
