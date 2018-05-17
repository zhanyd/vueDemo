<template>
  <el-table :data="tableData" style="width: 100%;text-align: left">
    <el-table-column prop="userId" label="用户id" width="100"></el-table-column>
    <el-table-column prop="title" label="标题" width="180"></el-table-column>
    <el-table-column prop="content" label="内容"></el-table-column>
  </el-table>
</template>

<script>
    import axios from 'axios'

    let url = "http://localhost:8080"
    export default {
        name: "questionList",
        data(){
          return{
            tableData:null
          }
        },
        mounted(){
          let vm = this;

          axios.post(url + '/user/getQuestionList', {
          }).then(function (response) {
            console.log(response.data.data);
            vm.tableData = response.data.data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
</script>

<style scoped>


</style>
