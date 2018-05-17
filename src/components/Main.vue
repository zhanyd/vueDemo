<template>
  <el-container class="main">
    <el-aside width="200px">
      <el-menu
        default-active="$router.path"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
        >

        <template v-for="(item,index) in $router.options.routes">
          <el-submenu :index="index++">
            <template slot="title">
              <i :class="item.iconCls"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item  v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
           <!-- <el-menu-item-group>
              <el-menu-item index="/oldUser">老客户</el-menu-item>
              &lt;!&ndash;<el-menu-item index="1-1"><router-link to="/oldUser">老客户</router-link></el-menu-item>&ndash;&gt;
              <el-menu-item index="/newUser">新增客户</el-menu-item>
            </el-menu-item-group>-->
          </el-submenu>
        </template>

      </el-menu>

    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb>
          <el-breadcrumb-item v-for="item in $route.matched" :to="{ path: item.path }" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>

      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
