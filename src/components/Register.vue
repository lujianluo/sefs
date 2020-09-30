<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
  <el-container style="background-image: url('https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80');
 height: 728px; background-size: 100% 100%">
<el-main >
</el-main>
<el-main>
<div>
  <el-form ref="register" label-width="100px" class="register" style="padding-top: 100px">
  <el-form-item label="email" prop="email">
    <el-input type="email" v-model="email" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="password" prop="password">
    <el-input type="password" v-model="password" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item label="name" prop="name">
    <el-input type="name" v-model="name" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item label="company" prop="company">
    <el-input type="company" v-model="company" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('register')">Register</el-button>
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
import 'firebase/firestore'
import {db} from '../firebase'

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      company: "",
      error: "",
      
    };
  },
  methods: {
    submitForm() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
            this.$router.replace({ name: "Home" });
            db.collection("userdata").doc(firebase.auth().currentUser.uid).set({
            name: this.name,
            email: this.email,
            company: this.company
            })
            })
        .catch(error => (this.error = error));
    
    },
  }
};
</script>