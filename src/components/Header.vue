<template>
        <el-header height="150px">
            <div class = "logo">
            <img src="../assets/Title.png">
            </div>
            <div id="Navi">
            <el-menu :default-active="$route.name" router class="menu" mode="horizontal" @select="handleSelect" :unique-opened="true"
            background-color="#2C3539" text-color="#fff" active-text-color="#FBB917" >       
                <el-menu-item index="/Home">Home</el-menu-item>
                    <el-submenu index="0">
                    <template slot="title">Category</template>
                    <el-menu-item index="/TECH">TECH</el-menu-item>
                    <el-menu-item index="/ART">ART</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/About_us">About us</el-menu-item>
                <el-submenu index="1" style="position: absolute; right: 0">
                <template slot="title" ><i class="el-icon-user"></i>Account</template>
                <el-menu-item index="/Userinfo"><i class="el-icon-info"></i>UserI nfo</el-menu-item>
                <el-menu-item index="/Liked"><i class="el-icon-star-on"></i>Liked Project</el-menu-item>
                </el-submenu>
            </el-menu>
            </div>
        </el-header>

</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
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
.el-header{
  background-color: darkcyan
}
</style>