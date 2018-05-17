<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户id">
      <el-input v-model="form.userId"></el-input>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>


</template>

<script>
  import axios from 'axios'

  let url = "http://localhost:8080"
    export default {
        name: "addQuestion",
        data() {
          return {
            form: {
              userId: '',
              title:'',
              content:''
            }
          }
        },
      methods: {
        onSubmit() {
          if(this.form.userId == ''){
            this.$message("用户id不能为空")
            return;
          }

          if(this.form.title == ''){
            this.$message("标题不能为空")
            return;
          }
          console.log('submit!');

          let param = new URLSearchParams();
          param.append("userId", this.form.userId);
          param.append("title", this.form.title);
          param.append("content", this.form.content);

          let _this = this;
          axios.post(url + '/user/addNewQuestion', param).then(function (response) {
            console.log(response.data.data);
            _this.$message("保存成功")
          }).catch(function (error) {
            console.log(error);
          });
        }
      }

    }
</script>

<style scoped>

</style>
