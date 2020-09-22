<template>
<el-container>
  <el-header><div class = "tech">
            <img recommend src="../assets/TECHS.png" >
            </div>
  </el-header>
  <el-container>
    <el-aside width="300px">
        <div class ="filter">
        <span style="font-size: 50px">Filter</span>
        <div style="margin-top: 30px">
    <el-radio v-model="radio1" label="1" border>less than $500</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio2" label="1" border >$500-$1000</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio2" label="1" border >more than $1000</el-radio>
  </div>
        </div>
    </el-aside>
    <el-main>
    <div class="pages">
    <span class="demonstration"></span>
    <el-pagination
    layout="prev, pager, next"
    :total="50">
    </el-pagination>
    </div>
    <div class="items">
    <el-row>
    <div class="box">
    <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button">link</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    </div>
    </el-row>
    </div>
    </el-main>
  </el-container>
</el-container>
</template>

<style scoped>
.tech{
    display: flex;
    justify-content:center;
}
.el-header{
    min-height: 150px;
}
.el-aside{
    min-height: 520px;
    background-color: coral;
    text-align: center
}
.pages{
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom:50px;
    margin-left:580px
}
.filter{
    margin-top: 100px;
}
.el-main{
    min-height: 520px;
    background-color: darkcyan;
    position: relative
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  .box{
      padding-left: 100px;
      padding-top: 80px;
  }
</style>