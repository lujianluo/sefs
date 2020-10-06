<template>
<div>
  <div class="error" v-if="error">{{error.message}}</div>
<el-container style="background-image: url('https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
 height: 728px; background-size: 100% 100%">
<el-main >
</el-main>
<el-main>
<div>
  <el-form ref="login" label-width="100px" class="login" style="padding-top: 100px">
  <el-form-item label="email" prop="email">
    <el-input type="email" v-model="email" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="password" prop="password">
    <el-input type="password" v-model="password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('login')">Login</el-button>
    <br>
    <router-link to="/Register">don't have an account? register now</router-link>
  </el-form-item>

</el-form>

</div>
</el-main>
<el-main >
</el-main>
</el-container>
</div>
</template>


<script>

import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submitForm() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Userinfo" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};


    

</script>

<style scoped>
.Loginimg{
    display: flex;
    justify-content:center;
}

</style>