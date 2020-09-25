<template>
<el-container>
<el-header height="200px" style="background-color: black">
          <div class = "Userinfoimg">
            <img src="../assets/Userinfo.png" >        
            </div>
          </el-header>
            <el-container class="abc">
             <el-main style="background-color: blue">
              <button @click="abc">abc</button>
             </el-main>
             <el-main style="background-color: green">
             </el-main>
            <el-main style="background-color: yellow">
            </el-main>
            </el-container>

</el-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
     
    }
  },
  methods:{
    abc(){
      const h = firebase.auth().currentUser.displayName
      this.$notify({
          title: h,
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

.abc{
    height: 500px;
}
</style>
