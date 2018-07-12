<template>
  <el-form :model="loginform" :rules="loginrules" ref="loginform" label-position="left" label-width="0px"
           class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginform.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginform.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>


  export default {
    data() {
      return {
        logining: false,
        loginform: {
          account: 'admin',
          checkPass: 'admin'
        },
        loginrules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit(ev) {
        var _this = this;
        this.$refs.loginform.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = {
              username: this.loginform.account,
              password: this.loginform.checkPass
            };
            var config = {
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*'
              }
            };
            console.log(loginParams);


            var instance = this.$axios.create({
              baseURL: 'http://127.0.0.1:8080',
              timeout: 2000,
              headers: {'X-Requested-With': 'XMLHttpRequest'}
            });

            instance.post('/auth/login', loginParams,config).then(function (resp) {
              if (resp.data.code == 200) {
                _this.logining = false;
                _this.$router.push({name: 'main'});
              } else {
                _this.logining = false;
                _this.$message.error(resp.data.desc);
              }
            }).catch((error) => {
              _this.logining = false;
              console.log(error);
            });
          } else {
            console.log('login submit error!!');
            _this.logining = false;
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
