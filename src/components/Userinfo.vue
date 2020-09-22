<template>
<el-container>
<el-header height="200px" style="background-color: black">
          <div class = "Userinfoimg">
            <img src="../assets/Userinfo.png" >        
            </div>
          </el-header>
            <el-container class="abc">
             <el-main style="background-color: blue">
             </el-main>
             <el-main style="background-color: green">
             </el-main>
            <el-main style="background-color: yellow">
            </el-main>
            </el-container>

</el-container>
</template>

<script>
export default {
  data() {
    return {
     
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
