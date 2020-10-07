<template>
        <el-header height="150px">
            <div class = "logo">
            <img src="../assets/Title.png">
            </div>
            <div id="Navi">
            <el-menu :default-active="$route.name" router class="menu" mode="horizontal" :unique-opened="true"
            background-color="#2C3539" text-color="#fff" active-text-color="#FBB917" >       
                <el-menu-item index="/Home">Home</el-menu-item>
                    <el-submenu index="0">
                    <template slot="title">Category</template>
                    <el-menu-item index="/All_category">All Categories</el-menu-item>
                    <el-menu-item index="/TECH">TECH</el-menu-item>
                    <el-menu-item index="/ART">ART</el-menu-item>
                    <el-menu-item index="/History">History</el-menu-item>
                    <el-menu-item index="/Geography">Geography</el-menu-item>
                    <el-menu-item index="/Computer_science">Computer science</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/About_us">About us</el-menu-item>
                <el-submenu index="1" style="position: absolute; right: 0">
                <template slot="title" ><i class="el-icon-user"></i>Account</template>
                <el-menu-item index="/Login"><i class="el-icon-user"></i>Log In</el-menu-item>
                <el-menu-item index="/Userinfo"><i class="el-icon-s-data"></i>UserI nfo</el-menu-item>
                <el-menu-item index="/Mypost"><i class="el-icon-s-flag"></i>Mypost</el-menu-item>
                <el-menu-item index="/Upload"><i class="el-icon-upload2"></i>Upload</el-menu-item>
                <el-menu-item index="/Logout" @click="Logout"><i class="el-icon-user"></i>Log Out</el-menu-item>
                </el-submenu>
            </el-menu>
            </div>
        </el-header>

</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Home" });
        });
    }
  },
};
</script>

<style scoped>
.logo{
  display: flex;
  justify-content:center
}
.el-button{
  color: '#2C3539';
  background-color: '#2C3539' ;
}
.el-input{
  width:150%;
}

</style>