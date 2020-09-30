<template>
<el-container>
            <el-container class="body" >
             <el-main style="background-image: url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');background-size: 100% 100%">
             </el-main>
             <el-main style="font-size: 40px">
              <el-header style=" height: 150px"  >
              <div class = "Userinfoimg">
            <img src="../assets/Userinfo.png" >        
            </div>
              </el-header>
                <el-link icon="el-icon-edit" style="; font-size: 25px; margin-left: 600px" @click="updateUseremail">EDIT</el-link>
                <span>email:<br>{{userdata.email}}</span><br><br>
                <el-link icon="el-icon-edit" style="; font-size: 25px; margin-left: 600px" @click="updateUsername">EDIT</el-link>
               <span>name:<br>{{userdata.name}}</span><br><br>
               <el-link icon="el-icon-edit" style="; font-size: 25px; margin-left: 600px" @click="updateUsercompany">EDIT</el-link>
               <span>company:<br>{{userdata.company}}</span>
             </el-main>
            <el-main style="background-image: url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');background-size: 100% 100%">
            </el-main>
            </el-container>

</el-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import {db} from '../firebase'
export default {
  data() {
      return {
        userdata:{
          name: null,
          email: null,
          company: null
        }
      }
    
  },
    firestore(){
      return {
        userdata: db.collection('userdata').doc(firebase.auth().currentUser.uid),
      }
  },
  methods:{
   updateUseremail(){
          this.$prompt('Please Enter Your Email', 'Update Userdata', {
          confirmButtonText: 'Save',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Incorrect Format'
        }).then(({value}) => {
          db.collection("userdata").doc(firebase.auth().currentUser.uid).update({
            email: value
          })
          this.$message({
            type: 'success',
            message: 'Updated successfully!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancelled'
          });       
        });
   },
      updateUsername(){
          this.$prompt('Please Enter Your Name', 'Update Userdata', {
          confirmButtonText: 'Save',
          cancelButtonText: 'Cancel',
        }).then(({value}) => {
          db.collection("userdata").doc(firebase.auth().currentUser.uid).update({
            name: value
          })
          this.$message({
            type: 'success',
            message: 'Updated successfully!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancelled'
          });       
        });
   },
      updateUsercompany(){
          this.$prompt('Please Enter Your Company', 'Update Userdata', {
          confirmButtonText: 'Save',
          cancelButtonText: 'Cancel',
        }).then(({value}) => {
          db.collection("userdata").doc(firebase.auth().currentUser.uid).update({
            company: value
          })
          this.$message({
            type: 'success',
            message: 'Updated successfully!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancelled'
          });       
        });
   }

    
  }
}

</script>

<style>
.Userinfoimg{
    display: flex;
            justify-content:center;
}

.body{
    height: 700px;
}
.el-main{
  min-width: 500px;
}
</style>
