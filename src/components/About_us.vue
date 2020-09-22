<template>
<el-container>
<el-header>
          <div class = "Aboutimg">
            <img src="../assets/About_us.png" >        
            </div>
          </el-header>
          <el-main>
            <div class = "text">
            <span style="font-size: 80px">Contact number<br>Email</span>
            </div>
           </el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  };
</script>

<style scoped>
.el-header{
  min-height: 150px;
}
.Aboutimg{
  display: flex;
  justify-content:center;
}
.text{
        margin-top: 50px;
        margin-bottom: 50px;
        display: inline-block;
        vertical-align: middle; 
        line-height: 100px
}
.el-main{
  background-color:rgb(202, 226, 202);
  text-align: center
}
</style>