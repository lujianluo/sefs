<template>
<el-container>
  <el-header><div class = "ProductPageimg">
            <img recommend src="../assets/ProductPage.png" >
            </div>
  </el-header>

</el-container>
</template>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style scoped>
.el-page-header{
    background-color: chartreuse;
    height: 50px;
         
}
.ProductPageimg{
  display: flex;
  justify-content:center;
}
</style>